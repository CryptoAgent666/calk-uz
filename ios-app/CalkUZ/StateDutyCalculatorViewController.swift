//
//  StateDutyCalculatorViewController.swift
//  CalkUZ
//
//  Native state-duty (госпошлины) calculator for Uzbekistan. Each duty is a
//  БРВ-multiple; БРВ is read live from RemoteConfig (OTA). Local computation.
//

import UIKit

final class StateDutyCalculatorViewController: UIViewController {

    private struct Duty { let name: String; let brv: Double }
    private let duties: [Duty] = [
        Duty(name: "Регистрация брака", brv: 0.2),
        Duty(name: "Расторжение брака (ЗАГС)", brv: 1.5),
        Duty(name: "Расторжение брака (суд)", brv: 2),
        Duty(name: "Свидетельство о рождении", brv: 0.1),
        Duty(name: "Регистрация ИП", brv: 0.5),
        Duty(name: "Регистрация ООО", brv: 1),
        Duty(name: "Нотариальная доверенность", brv: 0.5),
        Duty(name: "Смена имени / фамилии", brv: 1),
    ]
    private var selected = 0

    private var brv: Double { RemoteConfig.shared.num("brv", 412_000) }

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let titleLabel: UILabel = {
        let l = UILabel(); l.text = "Госпошлины"
        l.font = .systemFont(ofSize: 28, weight: .bold); return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Государственные пошлины Узбекистана в БРВ. Выберите действие — сумма пересчитается по текущей БРВ."
        l.numberOfLines = 0; l.font = .systemFont(ofSize: 15); l.textColor = .secondaryLabel; return l
    }()

    private let dutyLabel: UILabel = {
        let l = UILabel(); l.text = "Тип пошлины"
        l.font = .systemFont(ofSize: 14, weight: .medium); l.textColor = .secondaryLabel; return l
    }()
    private lazy var dutyButton: UIButton = {
        let b = UIButton(type: .system)
        var cfg = UIButton.Configuration.gray()
        cfg.baseForegroundColor = .label
        cfg.cornerStyle = .medium
        cfg.contentInsets = NSDirectionalEdgeInsets(top: 12, leading: 14, bottom: 12, trailing: 14)
        cfg.image = UIImage(systemName: "chevron.up.chevron.down")
        cfg.imagePlacement = .trailing
        cfg.imagePadding = 8
        b.configuration = cfg
        b.contentHorizontalAlignment = .leading
        b.showsMenuAsPrimaryAction = true
        return b
    }()

    private let resultCard = UIView()
    private let totalTitle: UILabel = {
        let l = UILabel(); l.text = "Размер пошлины"
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
        title = "Госпошлины"
        navigationItem.largeTitleDisplayMode = .always
        buildLayout()
        dutyButton.menu = UIMenu(children: duties.enumerated().map { idx, d in
            UIAction(title: d.name) { [weak self] _ in self?.selected = idx; self?.recompute() }
        })
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
        let dutyRow = UIStackView(arrangedSubviews: [dutyLabel, dutyButton])
        dutyRow.axis = .vertical; dutyRow.spacing = 6
        let main = UIStackView(arrangedSubviews: [
            titleLabel, subtitleLabel, dutyRow, resultCard, shareButton,
        ])
        main.axis = .vertical; main.spacing = 12
        main.setCustomSpacing(20, after: subtitleLabel)
        main.setCustomSpacing(20, after: dutyRow)
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

    private func recompute() {
        let d = duties[selected]
        dutyButton.setTitle(d.name, for: .normal)
        var cfg = dutyButton.configuration
        cfg?.title = d.name
        dutyButton.configuration = cfg
        let sum = d.brv * brv
        totalLabel.text = formatCurrency(sum)
        breakdownStack.arrangedSubviews.forEach { $0.removeFromSuperview() }
        breakdownStack.addArrangedSubview(SummaryRow.make("Действие", d.name))
        breakdownStack.addArrangedSubview(SummaryRow.make("Ставка", "\(fmt(d.brv)) БРВ"))
        breakdownStack.addArrangedSubview(SummaryRow.make("1 БРВ", formatCurrency(brv)))
        breakdownStack.addArrangedSubview(SummaryRow.make("Пошлина", formatCurrency(sum)))
    }

    @objc private func shareTapped() {
        let d = duties[selected]
        let text = "📋 Госпошлина — Calk.UZ\n\n\(d.name)\nСтавка: \(fmt(d.brv)) БРВ\nСумма: \(formatCurrency(d.brv * brv))\n\nCalk.UZ"
        let av = UIActivityViewController(activityItems: [text], applicationActivities: nil)
        if let pop = av.popoverPresentationController { pop.sourceView = shareButton; pop.sourceRect = shareButton.bounds }
        present(av, animated: true)
    }

    private func fmt(_ v: Double) -> String { v == v.rounded() ? String(Int(v)) : String(format: "%.1f", v) }
    private func formatCurrency(_ v: Double) -> String {
        let f = NumberFormatter(); f.numberStyle = .decimal; f.groupingSeparator = " "; f.maximumFractionDigits = 0
        return "\(f.string(from: NSNumber(value: v)) ?? "0") сум"
    }
}
