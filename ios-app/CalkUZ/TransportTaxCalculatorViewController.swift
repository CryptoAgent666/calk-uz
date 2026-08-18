//
//  TransportTaxCalculatorViewController.swift
//  CalkUZ
//
//  Native transport (vehicle) tax for Uzbekistan — passenger cars, by engine
//  volume, in БРВ. БРВ read live from RemoteConfig (OTA), local computation.
//
//    ≤ 1.5 л  = 1.5 БРВ ·  1.5–2.0 л = 3 БРВ ·  2.0–3.0 л = 5 БРВ ·  > 3.0 л = 7.5 БРВ
//

import UIKit

final class TransportTaxCalculatorViewController: UIViewController {

    private var brv: Double { RemoteConfig.shared.num("brv", 412_000) }
    private var liters: Double = 1.6

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Транспортный налог"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Годовой налог на легковой автомобиль в Узбекистане по объёму двигателя. Ставка в БРВ, расчёт — локально."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel; return l
    }()

    private let litersField = PercentageCalculatorViewController.numField("1.6")

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Годовой налог"
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
        title = "Транспортный налог"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        litersField.addTarget(self, action: #selector(changed), for: .editingChanged)
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd)); tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
        recompute()
        NotificationCenter.default.addObserver(forName: RemoteConfig.changed, object: nil, queue: .main) { [weak self] _ in self?.recompute() }
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
            LabeledField.make("Объём двигателя (л)", field: litersField),
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
        liters = Double((litersField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        recompute()
    }

    private func brvMultiplier(_ l: Double) -> Double {
        if l <= 1.5 { return 1.5 }
        if l <= 2.0 { return 3 }
        if l <= 3.0 { return 5 }
        return 7.5
    }

    private func recompute() {
        let mult = brvMultiplier(liters)
        let tax = mult * brv
        totalLabel.text = formatCurrency(tax)
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Объём двигателя", "\(fmt(liters)) л"))
        breakdownStack.addArrangedSubview(SummaryRow.make("Ставка", "\(fmt(mult)) БРВ"))
        breakdownStack.addArrangedSubview(SummaryRow.make("1 БРВ", formatCurrency(brv)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Налог в год", formatCurrency(tax)))
    }

    @objc private func shareTapped() {
        let mult = brvMultiplier(liters)
        let text = "🚗 Транспортный налог — Calk.UZ\n\nОбъём: \(fmt(liters)) л\nСтавка: \(fmt(mult)) БРВ\nНалог в год: \(formatCurrency(mult * brv))\n\nCalk.UZ"
        let av = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = av.popoverPresentationController { pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds }
        present(av, animated: true)
    }

    private func fmt(_ v: Double) -> String {
        v == v.rounded() ? String(Int(v)) : String(format: "%.1f", v)
    }
    private func formatCurrency(_ v: Double) -> String {
        let f = NumberFormatter(); f.numberStyle = .decimal; f.groupingSeparator = " "; f.maximumFractionDigits = 0
        return "\(f.string(from: NSNumber(value: v)) ?? "0") сум"
    }
}
