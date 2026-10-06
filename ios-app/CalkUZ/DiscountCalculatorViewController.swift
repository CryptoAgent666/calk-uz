//
//  DiscountCalculatorViewController.swift
//  CalkUZ
//
//  Native discount calculator — final price + amount saved. Local Swift.
//

import UIKit

final class DiscountCalculatorViewController: UIViewController {

    private var price: Double = 500_000
    private var discount: Double = 20

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Калькулятор скидки"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Цена со скидкой и сумма экономии. Расчёт — локально на устройстве."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel; return l
    }()

    private let priceField = PercentageCalculatorViewController.numField("500000")
    private let discountField = PercentageCalculatorViewController.numField("20")

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Цена со скидкой"
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
        title = "Скидки"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        priceField.addTarget(self, action: #selector(changed), for: .editingChanged)
        discountField.addTarget(self, action: #selector(changed), for: .editingChanged)
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd)); tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
        recompute()
    }

    private func buildLayout() {
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        contentView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(scrollView); scrollView.addSubview(contentView)
        NSLayoutConstraint.activate([
            scrollView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
            contentView.topAnchor.constraint(equalTo: scrollView.topAnchor),
            contentView.leadingAnchor.constraint(equalTo: scrollView.leadingAnchor),
            contentView.trailingAnchor.constraint(equalTo: scrollView.trailingAnchor),
            contentView.bottomAnchor.constraint(equalTo: scrollView.bottomAnchor),
            contentView.widthAnchor.constraint(equalTo: scrollView.widthAnchor),
        ])
        let main = UIStackView(arrangedSubviews: [
            titleLabel, subtitleLabel,
            LabeledField.make("Цена (сум)", field: priceField),
            LabeledField.make("Скидка, %", field: discountField),
            resultCard, shareButton,
        ])
        main.axis = .vertical; main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: resultCard)
        main.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(main)
        NSLayoutConstraint.activate([
            main.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 16),
            main.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            main.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            main.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -24),
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
            card.bottomAnchor.constraint(equalTo: resultCard.bottomAnchor, constant: -16),
        ])
    }

    @objc private func dismissKbd() { view.endEditing(true) }
    @objc private func changed() {
        price = Double((priceField.text ?? "").filter { $0.isNumber || $0 == "." }) ?? 0
        discount = Double((discountField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        recompute()
    }

    private func recompute() {
        let saved = price * discount / 100
        let final = price - saved
        totalLabel.text = formatCurrency(final)
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Цена до скидки", formatCurrency(price)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Скидка (\(fmtPct(discount)))", "− " + formatCurrency(saved), color: UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Итого к оплате", formatCurrency(final)))
    }

    @objc private func shareTapped() {
        let saved = price * discount / 100
        let text = "🏷️ Скидка \(fmtPct(discount)) — Calk.UZ\n\nЦена: \(formatCurrency(price))\nЭкономия: \(formatCurrency(saved))\nИтого: \(formatCurrency(price - saved))\n\nCalk.UZ"
        let av = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = av.popoverPresentationController { pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds }
        present(av, animated: true)
    }

    private func fmtPct(_ v: Double) -> String {
        v == v.rounded() ? "\(Int(v))%" : String(format: "%.1f%%", v)
    }
    private func formatCurrency(_ v: Double) -> String {
        let f = NumberFormatter(); f.numberStyle = .decimal; f.groupingSeparator = " "; f.maximumFractionDigits = 0
        return "\(f.string(from: NSNumber(value: v)) ?? "0") сум"
    }
}
