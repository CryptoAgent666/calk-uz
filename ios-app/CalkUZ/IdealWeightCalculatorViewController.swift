//
//  IdealWeightCalculatorViewController.swift
//  CalkUZ
//
//  Native ideal-weight calculator — Devine / Robinson / Miller formulas plus
//  the healthy BMI weight range. All local Swift.
//

import UIKit

final class IdealWeightCalculatorViewController: UIViewController {

    private enum Sex: Int { case male = 0, female = 1 }
    private var sex: Sex = .male
    private var heightCm: Double = 175

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Идеальный вес"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Здоровый диапазон веса по росту и полу (формулы Devine, Robinson, Miller и ИМТ). Расчёт — локально."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel; return l
    }()

    private let sexSegment: UISegmentedControl = {
        let s = UISegmentedControl(items: ["Мужчина", "Женщина"]); s.selectedSegmentIndex = 0; return s
    }()
    private let heightField = PercentageCalculatorViewController.numField("175")

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Здоровый диапазон (ИМТ 18,5–24,9)"
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private let totalLabel: UILabel = {
        let l = UILabel(); l.font = .systemFont(ofSize: 32, weight: .bold)
        l.adjustsFontSizeToFitWidth = true; l.minimumScaleFactor = 0.5; return l
    }()
    private let breakdownStack: UIStackView = {
        let s = UIStackView(); s.axis = .vertical; s.spacing = 8; return s
    }()

    private lazy var shareButton = ButtonFactory.secondary(title: "Поделиться", icon: "square.and.arrow.up", target: self, action: #selector(shareTapped))

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        title = "Идеальный вес"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        heightField.addTarget(self, action: #selector(changed), for: .editingChanged)
        sexSegment.addTarget(self, action: #selector(changed), for: .valueChanged)
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
            titleLabel, subtitleLabel, sexSegment,
            LabeledField.make("Рост (см)", field: heightField),
            resultCard, shareButton,
        ])
        main.axis = .vertical; main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: sexSegment)
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
        sex = Sex(rawValue: sexSegment.selectedSegmentIndex) ?? .male
        heightCm = Double((heightField.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        recompute()
    }

    private func recompute() {
        guard heightCm > 0 else { totalLabel.text = "—"; return }
        let inchesOver5ft = max(0, heightCm / 2.54 - 60)
        let male = sex == .male
        let devine = (male ? 50.0 : 45.5) + 2.3 * inchesOver5ft
        let robinson = (male ? 52.0 : 49.0) + (male ? 1.9 : 1.7) * inchesOver5ft
        let miller = (male ? 56.2 : 53.1) + (male ? 1.41 : 1.36) * inchesOver5ft
        let hM = heightCm / 100
        let bmiMin = 18.5 * hM * hM
        let bmiMax = 24.9 * hM * hM

        totalLabel.text = "\(kg(bmiMin)) – \(kg(bmiMax))"
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Формула Devine", kg(devine)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Формула Robinson", kg(robinson)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Формула Miller", kg(miller)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Диапазон по ИМТ", "\(kg(bmiMin)) – \(kg(bmiMax))",
                                                          color: UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)))
    }

    @objc private func shareTapped() {
        let text = "⚖️ Идеальный вес — Calk.UZ\n\nРост: \(Int(heightCm)) см, \(sex == .male ? "мужчина" : "женщина")\nЗдоровый диапазон: \(totalLabel.text ?? "")\n\nCalk.UZ"
        let av = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = av.popoverPresentationController { pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds }
        present(av, animated: true)
    }

    private func kg(_ v: Double) -> String { String(format: "%.1f кг", v) }
}
