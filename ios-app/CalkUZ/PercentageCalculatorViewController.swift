//
//  PercentageCalculatorViewController.swift
//  CalkUZ
//
//  Native percentage calculator — four everyday modes. All local Swift.
//

import UIKit

final class PercentageCalculatorViewController: UIViewController {

    private enum Mode: Int { case percentOf = 0, share = 1, add = 2, sub = 3 }
    private var mode: Mode = .percentOf
    private var a: Double = 20
    private var b: Double = 1000

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Калькулятор процентов"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Процент от числа, доля в процентах, прибавить или вычесть процент. Всё считается локально."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel; return l
    }()

    private let modeSegment: UISegmentedControl = {
        let s = UISegmentedControl(items: ["% от числа", "Доля %", "+ %", "− %"])
        s.selectedSegmentIndex = 0; return s
    }()

    private let fieldA = PercentageCalculatorViewController.numField("20")
    private let fieldB = PercentageCalculatorViewController.numField("1000")
    private let labelA = PercentageCalculatorViewController.fieldLabel()
    private let labelB = PercentageCalculatorViewController.fieldLabel()

    private let resultCard = UIView()
    private let resultTitle: UILabel = {
        let l = UILabel(); l.text = "Результат"; l.numberOfLines = 0
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private let resultLabel: UILabel = {
        let l = UILabel(); l.font = .systemFont(ofSize: 34, weight: .bold)
        l.adjustsFontSizeToFitWidth = true; l.minimumScaleFactor = 0.5; return l
    }()

    private lazy var shareButton = ButtonFactory.secondary(title: "Поделиться", icon: "square.and.arrow.up", target: self, action: #selector(shareTapped))

    static func numField(_ initial: String) -> UITextField {
        let f = UITextField()
        f.text = initial; f.borderStyle = .roundedRect; f.keyboardType = .decimalPad
        f.font = .systemFont(ofSize: 22, weight: .medium); return f
    }
    static func fieldLabel() -> UILabel {
        let l = UILabel(); l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemBackground
        title = "Проценты"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        fieldA.addTarget(self, action: #selector(changed), for: .editingChanged)
        fieldB.addTarget(self, action: #selector(changed), for: .editingChanged)
        modeSegment.addTarget(self, action: #selector(modeChanged), for: .valueChanged)
        let tap = UITapGestureRecognizer(target: self, action: #selector(dismissKbd)); tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
        modeChanged()
    }

    private func rowStack(_ label: UILabel, _ field: UITextField) -> UIStackView {
        let s = UIStackView(arrangedSubviews: [label, field]); s.axis = .vertical; s.spacing = 6; return s
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
            titleLabel, subtitleLabel, modeSegment,
            rowStack(labelA, fieldA), rowStack(labelB, fieldB),
            resultCard, shareButton,
        ])
        main.axis = .vertical; main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: modeSegment)
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
        let card = UIStackView(arrangedSubviews: [resultTitle, resultLabel])
        card.axis = .vertical; card.spacing = 4
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
        a = Double((fieldA.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        b = Double((fieldB.text ?? "").replacingOccurrences(of: ",", with: ".")) ?? 0
        recompute()
    }
    @objc private func modeChanged() {
        mode = Mode(rawValue: modeSegment.selectedSegmentIndex) ?? .percentOf
        switch mode {
        case .percentOf: labelA.text = "Процент, %"; labelB.text = "Число"
        case .share:     labelA.text = "Часть";       labelB.text = "Целое"
        case .add, .sub: labelA.text = "Процент, %"; labelB.text = "Число"
        }
        changed()
    }

    private func recompute() {
        let value: Double
        let title: String
        switch mode {
        case .percentOf: value = b * a / 100; title = "\(fmt(a))% от \(fmt(b))"
        case .share:     value = b == 0 ? 0 : a / b * 100; title = "\(fmt(a)) от \(fmt(b))"
        case .add:       value = b * (1 + a / 100); title = "\(fmt(b)) + \(fmt(a))%"
        case .sub:       value = b * (1 - a / 100); title = "\(fmt(b)) − \(fmt(a))%"
        }
        resultTitle.text = title
        resultLabel.text = mode == .share ? "\(fmt(value)) %" : fmt(value)
    }

    @objc private func shareTapped() {
        let text = "📊 Проценты — Calk.UZ\n\n\(resultTitle.text ?? "") = \(resultLabel.text ?? "")\n\nCalk.UZ"
        let av = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = av.popoverPresentationController { pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds }
        present(av, animated: true)
    }

    private func fmt(_ v: Double) -> String {
        let f = NumberFormatter(); f.numberStyle = .decimal; f.groupingSeparator = " "; f.maximumFractionDigits = 2
        return f.string(from: NSNumber(value: v)) ?? "0"
    }
}
