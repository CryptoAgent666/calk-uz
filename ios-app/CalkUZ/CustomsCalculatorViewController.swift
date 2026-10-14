//
//  CustomsCalculatorViewController.swift
//  CalkUZ
//
//  Native UZ car customs (растаможка) calculator.
//  Uzbekistan is NOT in the EAEU — it uses its own schedule for individuals
//  importing passenger cars (2026, simplified / ориентировочно):
//
//     1. Таможенная пошлина = 15% от стоимости (USD). ЭВ — 0%.
//     2. Акциз = USD/см³ по объёму двигателя. ЭВ — 0%.
//     3. НДС 12% от (стоимость + пошлина + акциз).
//     4. Утильсбор = N × БРВ (по объёму двигателя), в сумах.
//     5. Итого = пошлина + акциз + НДС + утильсбор.
//
//  Electric vehicles are exempt from пошлина и акциз until 2027.
//  All computation is local Swift — no network. Satisfies Guideline 4.2.
//  Rates are centralised so the yearly customs update touches one place.
//

import UIKit

private enum FuelType: Int, CaseIterable {
    case combustion = 0   // бензин / дизель
    case electric = 1     // электромобиль

    var label: String {
        switch self {
        case .combustion: return "Бензин / дизель"
        case .electric:   return "Электро"
        }
    }
}

/// UZ customs rate tables — read live from RemoteConfig (OTA) with built-in
/// fallbacks. The yearly БРВ and the excise/util schedules can be updated on
/// the server (app-config.json) without an app release.
private enum UZCustomsRates {
    /// Базовая расчётная величина (БРВ), сум.
    static var brv: Double { RemoteConfig.shared.num("brv", 412_000) }

    /// Акциз, USD за см³, по объёму двигателя.
    static func exciseUsdPerCC(engineCC: Int) -> Double {
        let b = RemoteConfig.shared.customsExciseBrackets
        return (b.first { engineCC <= $0.maxCC } ?? b.last)?.value ?? 10.0
    }

    /// Утильсбор в количестве БРВ, по объёму двигателя.
    static func utilBRV(engineCC: Int) -> Double {
        let b = RemoteConfig.shared.customsUtilBrackets
        return (b.first { engineCC <= $0.maxCC } ?? b.last)?.value ?? 137
    }
}

final class CustomsCalculatorViewController: UIViewController {

    private var valueUsd: Double = 20_000
    private var engineCC: Int = 2000
    private var fuel: FuelType = .combustion
    private var usdToUzs: Double = 12_750  // current default; user can edit

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Растаможка авто"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Ориентировочный расчёт таможенных платежей за легковой автомобиль в Узбекистане (для физлиц, 2026). Точные суммы — на сайте."
        l.numberOfLines = 0
        l.font = .systemFont(ofSize: 15)
        l.textColor = .secondaryLabel
        return l
    }()

    private let valueField  = CustomsCalculatorViewController.numField(initial: "20000", decimal: true)
    private let engineField = CustomsCalculatorViewController.numField(initial: "2000")
    private let rateField   = CustomsCalculatorViewController.numField(initial: "12750", decimal: true)

    private static func numField(initial: String, decimal: Bool = false) -> UITextField {
        let f = UITextField()
        f.text = initial
        f.borderStyle = .roundedRect
        f.keyboardType = decimal ? .decimalPad : .numberPad
        f.font = .systemFont(ofSize: 20, weight: .medium)
        return f
    }

    private lazy var fuelSegment: UISegmentedControl = {
        let s = UISegmentedControl(items: FuelType.allCases.map { $0.label })
        s.selectedSegmentIndex = 0
        s.addTarget(self, action: #selector(fuelChanged), for: .valueChanged)
        return s
    }()

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Итого таможенные платежи"
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private let totalLabel: UILabel = {
        let l = UILabel(); l.font = .systemFont(ofSize: 30, weight: .bold)
        l.adjustsFontSizeToFitWidth = true; l.minimumScaleFactor = 0.5; l.numberOfLines = 0; return l
    }()
    private let breakdownStack: UIStackView = {
        let s = UIStackView(); s.axis = .vertical; s.spacing = 8; return s
    }()

    private lazy var shareButton = ButtonFactory.secondary(title: "Поделиться", icon: "square.and.arrow.up", target: self, action: #selector(shareTapped))

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        title = "Таможня"
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
            LabeledField.make("Стоимость авто (USD)", field: valueField),
            LabeledField.make("Объём двигателя (см³)", field: engineField),
            labeled("Тип двигателя"),
            fuelSegment,
            LabeledField.make("Курс USD → сум", field: rateField),
            resultCard,
            shareButton
        ])
        main.axis = .vertical
        main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: rateField.superview!)
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
        card.axis = .vertical
        card.spacing = 8
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

    private func labeled(_ text: String) -> UILabel {
        let l = UILabel()
        l.text = text
        l.font = .systemFont(ofSize: 14, weight: .medium)
        l.textColor = .secondaryLabel
        return l
    }

    private func bind() {
        [valueField, engineField, rateField].forEach {
            $0.addTarget(self, action: #selector(inputsChanged), for: .editingChanged)
        }
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }

    @objc private func dismissKbd() { view.endEditing(true) }
    @objc private func fuelChanged() {
        fuel = FuelType(rawValue: fuelSegment.selectedSegmentIndex) ?? .combustion
        recompute()
    }
    @objc private func inputsChanged() {
        valueUsd = Double((valueField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        engineCC = Int((engineField.text ?? "").filter { $0.isNumber }) ?? 0
        usdToUzs = Double((rateField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        recompute()
    }

    private struct Result {
        let duty: Double       // пошлина (USD)
        let excise: Double     // акциз (USD)
        let vatBase: Double
        let vat: Double        // НДС 12% (USD)
        let utilUsd: Double    // утильсбор (USD-эквивалент)
        let totalUsd: Double
        let totalUzs: Double
    }

    private func calculate() -> Result {
        guard valueUsd > 0 else {
            return Result(duty: 0, excise: 0, vatBase: 0, vat: 0, utilUsd: 0, totalUsd: 0, totalUzs: 0)
        }
        let isEV = (fuel == .electric)
        // 1. Пошлина (ЭВ — 0% до 2027)
        let duty = isEV ? 0 : valueUsd * RemoteConfig.shared.num("customsDutyRate", 0.15)
        // 2. Акциз USD/см³ (ЭВ — 0%)
        let excise = isEV ? 0 : UZCustomsRates.exciseUsdPerCC(engineCC: engineCC) * Double(engineCC)
        // 3. НДС от (стоимость + пошлина + акциз)
        let vatBase = valueUsd + duty + excise
        let vat = vatBase * RemoteConfig.shared.num("customsVatRate", 0.12)
        // 4. Утильсбор = N × БРВ (сум) → USD-эквивалент
        let utilUzs = UZCustomsRates.utilBRV(engineCC: engineCC) * UZCustomsRates.brv
        let utilUsd = usdToUzs > 0 ? utilUzs / usdToUzs : 0
        // 5. Итого
        let totalUsd = duty + excise + vat + utilUsd
        let totalUzs = totalUsd * usdToUzs
        return Result(duty: duty, excise: excise, vatBase: vatBase, vat: vat, utilUsd: utilUsd, totalUsd: totalUsd, totalUzs: totalUzs)
    }

    private func recompute() {
        let r = calculate()
        totalLabel.text = "$\(formatNum(r.totalUsd, fraction: 0))\n≈ \(formatNum(r.totalUzs, fraction: 0)) сум"
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Пошлина (15%)", "$\(formatNum(r.duty, fraction: 0))"))
        breakdownStack.addArrangedSubview(SummaryRow.make("Акциз", "$\(formatNum(r.excise, fraction: 0))"))
        breakdownStack.addArrangedSubview(SummaryRow.make("НДС (12%)", "$\(formatNum(r.vat, fraction: 0))"))
        breakdownStack.addArrangedSubview(SummaryRow.make("Утильсбор", "$\(formatNum(r.utilUsd, fraction: 0))"))
    }

    @objc private func shareTapped() {
        let r = calculate()
        let text = """
        🚗 Растаможка авто — Calk.UZ

        Стоимость: $\(formatNum(valueUsd, fraction: 0))
        Двигатель: \(engineCC) см³ (\(fuel.label))

        Пошлина: $\(formatNum(r.duty, fraction: 0))
        Акциз: $\(formatNum(r.excise, fraction: 0))
        НДС: $\(formatNum(r.vat, fraction: 0))
        Утильсбор: $\(formatNum(r.utilUsd, fraction: 0))

        Итого: $\(formatNum(r.totalUsd, fraction: 0)) ≈ \(formatNum(r.totalUzs, fraction: 0)) сум

        Calk.UZ
        """
        let activity = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = activity.popoverPresentationController {
            pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds
        }
        present(activity, animated: true)
    }

    private func formatNum(_ v: Double, fraction: Int = 0) -> String {
        let f = NumberFormatter()
        f.numberStyle = .decimal
        f.groupingSeparator = " "
        f.maximumFractionDigits = fraction
        return f.string(from: NSNumber(value: v)) ?? "0"
    }
}
