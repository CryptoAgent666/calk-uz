//
//  DepositCalculatorViewController.swift
//  CalkUZ
//
//  Native deposit (вклад) calculator for Uzbekistan.
//  Compound interest with selectable capitalization:
//
//     FV = PV × (1 + r/n)^(n·t)          (с капитализацией)
//     FV = PV × (1 + r·t)                (без капитализации, простой процент)
//
//  where r = annual rate, n = capitalizations/year, t = years.
//  All computation is local Swift — no network. Satisfies Guideline 4.2.
//

import UIKit

final class DepositCalculatorViewController: UIViewController {

    private enum Capitalization: Int, CaseIterable {
        case monthly = 0, quarterly = 1, none = 2
        var perYear: Int { self == .monthly ? 12 : (self == .quarterly ? 4 : 0) }
        var label: String {
            switch self {
            case .monthly:   return "Ежемесячно"
            case .quarterly: return "Ежеквартально"
            case .none:      return "Без капит."
            }
        }
    }

    private var principal: Double = 10_000_000
    private var annualRatePct: Double = 20
    private var months: Int = 12
    private var capit: Capitalization = .monthly

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Калькулятор депозита"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Доход по банковскому вкладу в Узбекистане с учётом капитализации процентов. Расчёт — локально на устройстве."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel
        return l
    }()

    private let amountField = DepositCalculatorViewController.numField(initial: "10000000")
    private let rateField   = DepositCalculatorViewController.numField(initial: "20", decimal: true)
    private let termField   = DepositCalculatorViewController.numField(initial: "12")

    private static func numField(initial: String, decimal: Bool = false) -> UITextField {
        let f = UITextField()
        f.text = initial
        f.borderStyle = .roundedRect
        f.keyboardType = decimal ? .decimalPad : .numberPad
        f.font = .systemFont(ofSize: 20, weight: .medium)
        return f
    }

    private lazy var capitSegment: UISegmentedControl = {
        let s = UISegmentedControl(items: Capitalization.allCases.map { $0.label })
        s.selectedSegmentIndex = 0
        s.addTarget(self, action: #selector(capitChanged), for: .valueChanged)
        return s
    }()

    private let resultCard = UIView()
    private let fvTitle: UILabel = {
        let l = UILabel(); l.text = "Итоговая сумма"
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private let fvLabel: UILabel = {
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
        title = "Депозит"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        bind()
        recompute()
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
            LabeledField.make("Сумма вклада (сум)", field: amountField),
            LabeledField.make("Ставка, % годовых", field: rateField),
            LabeledField.make("Срок, месяцев", field: termField),
            labeled("Капитализация процентов"),
            capitSegment,
            resultCard,
            shareButton
        ])
        main.axis = .vertical
        main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: capitSegment)
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
        let card = UIStackView(arrangedSubviews: [fvTitle, fvLabel, divider, breakdownStack])
        card.axis = .vertical; card.spacing = 8
        card.setCustomSpacing(4, after: fvTitle)
        card.setCustomSpacing(16, after: fvLabel)
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
        let l = UILabel(); l.text = text
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel
        return l
    }

    private func bind() {
        [amountField, rateField, termField].forEach {
            $0.addTarget(self, action: #selector(inputsChanged), for: .editingChanged)
        }
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }

    @objc private func dismissKbd() { view.endEditing(true) }
    @objc private func capitChanged() {
        capit = Capitalization(rawValue: capitSegment.selectedSegmentIndex) ?? .monthly
        recompute()
    }
    @objc private func inputsChanged() {
        principal = Double((amountField.text ?? "").filter { $0.isNumber }) ?? 0
        annualRatePct = Double((rateField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        months = Int((termField.text ?? "").filter { $0.isNumber }) ?? 0
        recompute()
    }

    private struct Result {
        let futureValue: Double
        let income: Double
        let effectiveRatePct: Double
    }

    private func calculate() -> Result {
        let r = annualRatePct / 100.0
        let t = Double(months) / 12.0
        let fv: Double
        let effective: Double
        if capit == .none {
            fv = principal * (1 + r * t)
            effective = annualRatePct
        } else {
            let n = Double(capit.perYear)
            fv = principal * pow(1 + r / n, n * t)
            effective = (pow(1 + r / n, n) - 1) * 100
        }
        return Result(futureValue: fv, income: fv - principal, effectiveRatePct: effective)
    }

    private func recompute() {
        let r = calculate()
        fvLabel.text = formatCurrency(r.futureValue)
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Сумма вклада", formatCurrency(principal)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Доход", "+\(formatCurrency(r.income))", color: UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Эффективная ставка", String(format: "%.1f%%", r.effectiveRatePct)))
    }

    @objc private func shareTapped() {
        let r = calculate()
        let text = """
        📈 Депозит — Calk.UZ

        Вклад: \(formatCurrency(principal))
        Ставка: \(formatRate(annualRatePct))% годовых × \(months) мес
        Капитализация: \(capit.label)

        Доход: +\(formatCurrency(r.income))
        Итоговая сумма: \(formatCurrency(r.futureValue))

        Calk.UZ
        """
        let activity = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = activity.popoverPresentationController {
            pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds
        }
        present(activity, animated: true)
    }

    private func formatRate(_ v: Double) -> String {
        v == v.rounded() ? String(Int(v)) : String(format: "%.1f", v).replacingOccurrences(of: ".", with: ",")
    }

    private func formatCurrency(_ v: Double) -> String {
        let f = NumberFormatter()
        f.numberStyle = .decimal
        f.groupingSeparator = " "
        f.maximumFractionDigits = 0
        return "\(f.string(from: NSNumber(value: v)) ?? "0") сум"
    }
}
