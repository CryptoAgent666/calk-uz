//
//  CurrencyRatesViewController.swift
//  CalkUZ
//
//  Native "Currency Rates" screen — fetches the Central Bank of Uzbekistan
//  (CBU) JSON feed and displays rates in a native UI WITHOUT any WebView.
//   - Live API fetch with native pull-to-refresh
//   - Native UI with change indicators (▲/▼) from the CBU "Diff" field
//   - Tap row to launch native currency converter (→ сум)
//   - Persistent "last fetched" timestamp, works offline with cached rates
//
//  WHY this exists (App Store Guideline 4.2):
//  Rates are displayed natively, no HTML, no JavaScript — fully native.
//

import UIKit

struct CurrencyRate {
    let code: String       // e.g. "USD"
    let name: String       // e.g. "Доллар США"
    let flag: String       // emoji
    let nominal: Int       // units of foreign currency the rate is quoted per
    let rate: Double       // сум per `nominal` units
    let previousRate: Double?
}

final class CurrencyRatesViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    private static let brand = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)

    private var rates: [CurrencyRate] = []
    private var isLoading = false
    private var lastFetched: Date?

    private lazy var tableView: UITableView = {
        let tv = UITableView(frame: .zero, style: .insetGrouped)
        tv.dataSource = self
        tv.delegate = self
        tv.register(RateCell.self, forCellReuseIdentifier: "Rate")
        tv.translatesAutoresizingMaskIntoConstraints = false
        tv.refreshControl = UIRefreshControl()
        tv.refreshControl?.addTarget(self, action: #selector(refresh), for: .valueChanged)
        tv.refreshControl?.tintColor = Self.brand
        return tv
    }()

    private lazy var loadingIndicator: UIActivityIndicatorView = {
        let v = UIActivityIndicatorView(style: .large)
        v.translatesAutoresizingMaskIntoConstraints = false
        v.color = Self.brand
        v.hidesWhenStopped = true
        return v
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemGroupedBackground
        title = "Курсы валют"
        navigationController?.navigationBar.prefersLargeTitles = true

        view.addSubview(tableView)
        view.addSubview(loadingIndicator)
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            loadingIndicator.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            loadingIndicator.centerYAnchor.constraint(equalTo: view.centerYAnchor),
        ])

        loadFromCache()
        fetchRates()
    }

    @objc private func refresh() { fetchRates() }

    // MARK: - Cache (UserDefaults)

    private static let cacheKey = "calkuz.currency.cache.v1"
    private static let cacheDateKey = "calkuz.currency.cacheDate.v1"

    private func loadFromCache() {
        guard let data = UserDefaults.standard.data(forKey: Self.cacheKey),
              let cached = try? JSONDecoder().decode([CachedRate].self, from: data) else { return }
        rates = cached.map {
            CurrencyRate(code: $0.code, name: $0.name, flag: $0.flag, nominal: $0.nominal,
                          rate: $0.rate, previousRate: $0.previousRate)
        }
        lastFetched = UserDefaults.standard.object(forKey: Self.cacheDateKey) as? Date
        tableView.reloadData()
    }

    private func saveCache() {
        let cached = rates.map {
            CachedRate(code: $0.code, name: $0.name, flag: $0.flag, nominal: $0.nominal,
                       rate: $0.rate, previousRate: $0.previousRate)
        }
        if let data = try? JSONEncoder().encode(cached) {
            UserDefaults.standard.set(data, forKey: Self.cacheKey)
            UserDefaults.standard.set(Date(), forKey: Self.cacheDateKey)
            lastFetched = Date()
        }
    }

    private struct CachedRate: Codable {
        let code: String, name: String, flag: String
        let nominal: Int, rate: Double
        let previousRate: Double?
    }

    // MARK: - Fetch from CBU.uz

    /// CBU JSON row. Numeric fields arrive as strings.
    private struct CBURate: Decodable {
        let Ccy: String
        let CcyNm_RU: String?
        let Rate: String
        let Nominal: String
        let Diff: String?
    }

    private static let knownCurrencies: [(code: String, flag: String, fallbackName: String)] = [
        ("USD", "🇺🇸", "Доллар США"),
        ("EUR", "🇪🇺", "Евро"),
        ("RUB", "🇷🇺", "Российский рубль"),
        ("KZT", "🇰🇿", "Казахстанский тенге"),
        ("CNY", "🇨🇳", "Китайский юань"),
        ("TRY", "🇹🇷", "Турецкая лира"),
        ("GBP", "🇬🇧", "Британский фунт"),
        ("JPY", "🇯🇵", "Японская иена"),
        ("KRW", "🇰🇷", "Южнокорейская вона"),
        ("AED", "🇦🇪", "Дирхам ОАЭ"),
    ]

    private func fetchRates() {
        guard !isLoading else { return }
        isLoading = true
        if rates.isEmpty { loadingIndicator.startAnimating() }

        // Central Bank of Uzbekistan — daily rates JSON.
        guard let url = URL(string: "https://cbu.uz/ru/arkhiv-kursov-valyut/json/") else { return }
        var request = URLRequest(url: url)
        request.timeoutInterval = 15

        URLSession.shared.dataTask(with: request) { [weak self] data, _, error in
            DispatchQueue.main.async {
                guard let self = self else { return }
                self.isLoading = false
                self.loadingIndicator.stopAnimating()
                self.tableView.refreshControl?.endRefreshing()

                guard let data = data, error == nil,
                      let parsed = try? JSONDecoder().decode([CBURate].self, from: data) else {
                    return  // keep cached data, no alert
                }

                let byCode = Dictionary(parsed.map { ($0.Ccy, $0) }, uniquingKeysWith: { a, _ in a })
                let mapped: [CurrencyRate] = Self.knownCurrencies.compactMap { entry in
                    guard let row = byCode[entry.code],
                          let rate = Double(row.Rate.replacingOccurrences(of: ",", with: ".")) else { return nil }
                    let nominal = Int(row.Nominal) ?? 1
                    let diff = Double((row.Diff ?? "0").replacingOccurrences(of: ",", with: ".")) ?? 0
                    let prev = diff != 0 ? rate - diff : nil
                    return CurrencyRate(code: entry.code,
                                        name: row.CcyNm_RU ?? entry.fallbackName,
                                        flag: entry.flag, nominal: nominal,
                                        rate: rate, previousRate: prev)
                }
                if !mapped.isEmpty {
                    self.rates = mapped
                    self.saveCache()
                    self.tableView.reloadData()
                }
            }
        }.resume()
    }

    // MARK: - UITableView

    func numberOfSections(in tableView: UITableView) -> Int { 1 }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { rates.count }

    func tableView(_ tableView: UITableView, titleForFooterInSection section: Int) -> String? {
        guard let date = lastFetched else { return "Курсы Центрального банка Узбекистана" }
        let f = DateFormatter()
        f.dateStyle = .medium
        f.timeStyle = .short
        f.locale = Locale(identifier: "ru_RU")
        return "Источник: Центральный банк РУз (cbu.uz)\nОбновлено: \(f.string(from: date))"
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let r = rates[indexPath.row]
        let cell = tableView.dequeueReusableCell(withIdentifier: "Rate", for: indexPath) as! RateCell
        cell.configure(rate: r)
        return cell
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        let rate = rates[indexPath.row]
        let converter = CurrencyConverterViewController(rate: rate)
        navigationController?.pushViewController(converter, animated: true)
    }
}

// Custom cell

private final class RateCell: UITableViewCell {
    private let flagLabel = UILabel()
    private let codeLabel = UILabel()
    private let nameLabel = UILabel()
    private let rateLabel = UILabel()
    private let changeLabel = UILabel()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .default, reuseIdentifier: reuseIdentifier)
        accessoryType = .disclosureIndicator

        flagLabel.font = .systemFont(ofSize: 28)
        codeLabel.font = .systemFont(ofSize: 17, weight: .semibold)
        codeLabel.textColor = .label
        nameLabel.font = .systemFont(ofSize: 13)
        nameLabel.textColor = .secondaryLabel
        rateLabel.font = .monospacedDigitSystemFont(ofSize: 17, weight: .semibold)
        rateLabel.textColor = .label
        rateLabel.textAlignment = .right
        changeLabel.font = .systemFont(ofSize: 12)
        changeLabel.textAlignment = .right

        let leftStack = UIStackView(arrangedSubviews: [codeLabel, nameLabel])
        leftStack.axis = .vertical
        leftStack.spacing = 2

        let rightStack = UIStackView(arrangedSubviews: [rateLabel, changeLabel])
        rightStack.axis = .vertical
        rightStack.spacing = 2
        rightStack.alignment = .trailing

        let outer = UIStackView(arrangedSubviews: [flagLabel, leftStack, UIView(), rightStack])
        outer.axis = .horizontal
        outer.spacing = 12
        outer.alignment = .center
        outer.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(outer)

        NSLayoutConstraint.activate([
            outer.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            outer.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8),
            outer.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            outer.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
        ])
    }
    required init?(coder: NSCoder) { fatalError() }

    func configure(rate: CurrencyRate) {
        flagLabel.text = rate.flag
        codeLabel.text = "\(rate.nominal) \(rate.code)"
        nameLabel.text = rate.name
        rateLabel.text = String(format: "%.2f сум", rate.rate)
        if let prev = rate.previousRate, prev > 0 {
            let diff = rate.rate - prev
            let pct = diff / prev * 100
            let sign = diff >= 0 ? "▲" : "▼"
            changeLabel.text = String(format: "%@ %.2f%%", sign, abs(pct))
            changeLabel.textColor = diff >= 0 ? .systemGreen : .systemRed
        } else {
            changeLabel.text = " "
        }
    }
}

// MARK: - Native Currency Converter

final class CurrencyConverterViewController: UIViewController, UITextFieldDelegate {
    private let rate: CurrencyRate

    init(rate: CurrencyRate) {
        self.rate = rate
        super.init(nibName: nil, bundle: nil)
    }
    required init?(coder: NSCoder) { fatalError() }

    private lazy var amountField: UITextField = {
        let f = UITextField()
        f.borderStyle = .roundedRect
        f.placeholder = "100"
        f.text = "100"
        f.font = .systemFont(ofSize: 32, weight: .medium)
        f.textAlignment = .center
        f.keyboardType = .decimalPad
        f.delegate = self
        f.translatesAutoresizingMaskIntoConstraints = false
        f.addTarget(self, action: #selector(recalc), for: .editingChanged)
        return f
    }()

    private let fromLabel = UILabel()
    private let arrow = UILabel()
    private let resultField = UITextField()
    private let toLabel = UILabel()
    private let rateInfoLabel = UILabel()
    private var isUserEditingResult = false

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemGroupedBackground
        title = "\(rate.code) → UZS"

        fromLabel.text = "\(rate.flag)  \(rate.code)"
        fromLabel.font = .systemFont(ofSize: 17, weight: .semibold)
        fromLabel.textAlignment = .center

        arrow.text = "⇅"
        arrow.font = .systemFont(ofSize: 28)
        arrow.textAlignment = .center

        toLabel.text = "🇺🇿  UZS (сум)"
        toLabel.font = .systemFont(ofSize: 17, weight: .semibold)
        toLabel.textAlignment = .center

        resultField.borderStyle = .roundedRect
        resultField.font = .systemFont(ofSize: 32, weight: .medium)
        resultField.textAlignment = .center
        resultField.keyboardType = .decimalPad
        resultField.delegate = self
        resultField.translatesAutoresizingMaskIntoConstraints = false
        resultField.addTarget(self, action: #selector(recalcReverse), for: .editingChanged)

        rateInfoLabel.text = "Курс: 1 \(rate.code) = \(String(format: "%.2f сум", rate.rate / Double(rate.nominal)))"
        rateInfoLabel.textColor = .secondaryLabel
        rateInfoLabel.font = .systemFont(ofSize: 14)
        rateInfoLabel.textAlignment = .center

        [fromLabel, amountField, arrow, toLabel, resultField, rateInfoLabel].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }

        let stack = UIStackView(arrangedSubviews: [fromLabel, amountField, arrow, toLabel, resultField, rateInfoLabel])
        stack.axis = .vertical
        stack.spacing = 12
        stack.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(stack)

        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 20),
            stack.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            stack.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),

            amountField.heightAnchor.constraint(equalToConstant: 60),
            resultField.heightAnchor.constraint(equalToConstant: 60),
        ])

        recalc()
    }

    @objc private func recalc() {
        guard !isUserEditingResult else { return }
        let amount = Double(amountField.text?.replacingOccurrences(of: ",", with: ".") ?? "0") ?? 0
        let result = amount * (rate.rate / Double(rate.nominal))
        resultField.text = String(format: "%.2f", result)
    }

    @objc private func recalcReverse() {
        isUserEditingResult = true
        let result = Double(resultField.text?.replacingOccurrences(of: ",", with: ".") ?? "0") ?? 0
        let amount = result * Double(rate.nominal) / rate.rate
        amountField.text = String(format: "%.2f", amount)
        isUserEditingResult = false
    }
}
