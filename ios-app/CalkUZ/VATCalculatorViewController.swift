//
//  VATCalculatorViewController.swift
//  CalkUZ
//
//  Native VAT (НДС) calculator for Uzbekistan — standard rate 12% (2026).
//
//     Начислить:  НДС = base × 12%,        итого = base × 1.12
//     Выделить:   НДС = total × 12 / 112,  база = total − НДС
//
//  All computation is local Swift — no network. Satisfies Guideline 4.2.
//

import UIKit

final class VATCalculatorViewController: UIViewController {

    /// VAT rate read live from RemoteConfig (OTA), with built-in fallback.
    private var vatRate: Double { RemoteConfig.shared.num("vatRate", 0.12) }
    private var vatPctText: String {
        let p = vatRate * 100
        return p == p.rounded() ? "\(Int(p))%" : String(format: "%.1f%%", p)
    }

    private enum Mode: Int { case add = 0, extract = 1 }

    private var amount: Double = 1_000_000
    private var mode: Mode = .add

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Калькулятор НДС"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Расчёт НДС в Узбекистане по ставке 12%. Начислите налог сверху или выделите из суммы. Расчёт — локально."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel
        return l
    }()

    private let modeSegment: UISegmentedControl = {
        let s = UISegmentedControl(items: ["Начислить НДС", "Выделить НДС"])
        s.selectedSegmentIndex = 0
        return s
    }()

    private let amountField: UITextField = {
        let f = UITextField()
        f.text = "1000000"
        f.placeholder = "Сумма"
        f.borderStyle = .roundedRect
        f.keyboardType = .numberPad
        f.font = .systemFont(ofSize: 22, weight: .medium)
        return f
    }()
    private let amountLabel: UILabel = {
        let l = UILabel(); l.text = "Сумма без НДС (сум)"
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Сумма с НДС"
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private let totalLabel: UILabel = {
        let l = UILabel(); l.font = .systemFont(ofSize: 34, weight: .bold)
        l.adjustsFontSizeToFitWidth = true; l.minimumScaleFactor = 0.5; return l
    }()
    private let breakdownStack: UIStackView = {
        let s = UIStackView(); s.axis = .vertical; s.spacing = 8; return s
    }()

    private lazy var shareButton = ButtonFactory.secondary(title: "Поделиться", icon: "square.and.arrow.up", target: self, action: #selector(shareTapped))

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        title = "НДС"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        bind()
        recompute()
        NotificationCenter.default.addObserver(forName: RemoteConfig.changed, object: nil, queue: .main) { [weak self] _ in
            self?.recompute()
        }
    }

    private func buildLayout() {
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        contentView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(scrollView)
        scrollView.addSubview(contentView)
        NSLayoutConstraint.activate([
            scrollView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            contentView.topAnchor.constraint(equalTo: scrollView.topAnchor),
            contentView.leadingAnchor.constraint(equalTo: scrollView.leadingAnchor),
            contentView.trailingAnchor.constraint(equalTo: scrollView.trailingAnchor),
            contentView.bottomAnchor.constraint(equalTo: scrollView.bottomAnchor),
            contentView.widthAnchor.constraint(equalTo: scrollView.widthAnchor)
        ])

        let main = UIStackView(arrangedSubviews: [
            titleLabel, subtitleLabel,
            modeSegment,
            amountLabel, amountField,
            resultCard,
            shareButton
        ])
        main.axis = .vertical
        main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: modeSegment)
        main.setCustomSpacing(20, after: resultCard)
        main.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(main)
        NSLayoutConstraint.activate([
            main.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 16),
            main.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            main.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            main.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -24)
        ])

        resultCard.backgroundColor = .secondarySystemBackground
        resultCard.layer.cornerRadius = 14
        let divider = UIView(); divider.backgroundColor = .separator
        divider.heightAnchor.constraint(equalToConstant: 1).isActive = true
        let card = UIStackView(arrangedSubviews: [totalTitle, totalLabel, divider, breakdownStack])
        card.axis = .vertical; card.spacing = 8
        card.setCustomSpacing(4, after: totalTitle)
        card.setCustomSpacing(16, after: totalLabel)
        card.translatesAutoresizingMaskIntoConstraints = false
        resultCard.addSubview(card)
        NSLayoutConstraint.activate([
            card.topAnchor.constraint(equalTo: resultCard.topAnchor, constant: 16),
            card.leadingAnchor.constraint(equalTo: resultCard.leadingAnchor, constant: 16),
            card.trailingAnchor.constraint(equalTo: resultCard.trailingAnchor, constant: -16),
            card.bottomAnchor.constraint(equalTo: resultCard.bottomAnchor, constant: -16)
        ])
    }

    private func bind() {
        amountField.addTarget(self, action: #selector(amountChanged), for: .editingChanged)
        modeSegment.addTarget(self, action: #selector(modeChanged), for: .valueChanged)
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }

    @objc private func dismissKbd() { view.endEditing(true) }
    @objc private func amountChanged() {
        amount = Double((amountField.text ?? "").filter { $0.isNumber }) ?? 0
        recompute()
    }
    @objc private func modeChanged() {
        mode = Mode(rawValue: modeSegment.selectedSegmentIndex) ?? .add
        amountLabel.text = mode == .add ? "Сумма без НДС (сум)" : "Сумма с НДС (сум)"
        totalTitle.text = mode == .add ? "Сумма с НДС" : "Сумма без НДС"
        recompute()
    }

    private struct Result {
        let base: Double    // без НДС
        let vat: Double      // НДС 12%
        let total: Double    // с НДС
    }

    private func calculate() -> Result {
        let rate = vatRate
        if mode == .add {
            let vat = amount * rate
            return Result(base: amount, vat: vat, total: amount + vat)
        } else {
            let vat = amount * rate / (1 + rate)
            return Result(base: amount - vat, vat: vat, total: amount)
        }
    }

    private func recompute() {
        let r = calculate()
        totalLabel.text = formatCurrency(mode == .add ? r.total : r.base)
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Сумма без НДС", formatCurrency(r.base)))
        breakdownStack.addArrangedSubview(SummaryRow.make("НДС (\(vatPctText))", formatCurrency(r.vat), color: UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Сумма с НДС", formatCurrency(r.total)))
    }

    @objc private func shareTapped() {
        let r = calculate()
        let text = """
        🧾 НДС 12% — Calk.UZ

        Сумма без НДС: \(formatCurrency(r.base))
        НДС (12%): \(formatCurrency(r.vat))
        Сумма с НДС: \(formatCurrency(r.total))

        Calk.UZ
        """
        let activity = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = activity.popoverPresentationController {
            pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds
        }
        present(activity, animated: true)
    }

    private func formatCurrency(_ v: Double) -> String {
        let f = NumberFormatter()
        f.numberStyle = .decimal
        f.groupingSeparator = " "
        f.maximumFractionDigits = 0
        return "\(f.string(from: NSNumber(value: v)) ?? "0") сум"
    }
}
