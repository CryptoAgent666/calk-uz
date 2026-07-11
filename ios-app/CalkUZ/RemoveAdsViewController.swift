//
//  RemoveAdsViewController.swift
//  CalkUZ
//
//  "Remove ads forever" purchase screen (native). Pitch + buy + restore.
//  Buying / restoring flips PurchasesManager.isAdFree, which tears down the
//  banner and skips interstitials app-wide. Restore is required by Apple (3.1.1).
//

import UIKit

final class RemoveAdsViewController: UIViewController {

    private let emerald = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)

    private let scrollView = UIScrollView()
    private let contentView = UIView()

    private let iconView: UIImageView = {
        let iv = UIImageView(image: UIImage(systemName: "sparkles"))
        iv.tintColor = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)
        iv.contentMode = .scaleAspectFit
        iv.translatesAutoresizingMaskIntoConstraints = false
        iv.heightAnchor.constraint(equalToConstant: 48).isActive = true
        return iv
    }()
    private let pitchLabel: UILabel = {
        let l = UILabel()
        l.text = "Уберите баннеры и полноэкранную рекламу во всех калькуляторах — навсегда, по цене пары чашек кофе ☕"
        l.numberOfLines = 0
        l.textAlignment = .center
        l.font = .systemFont(ofSize: 17, weight: .semibold)
        return l
    }()
    private let subtitleLabel: UILabel = {
        let l = UILabel()
        l.text = "Разовая покупка — навсегда, на всех ваших устройствах с этим Apple ID."
        l.numberOfLines = 0
        l.textAlignment = .center
        l.font = .systemFont(ofSize: 14)
        l.textColor = .secondaryLabel
        return l
    }()
    private lazy var buyButton: UIButton = {
        let b = UIButton(type: .system)
        var cfg = UIButton.Configuration.filled()
        cfg.baseBackgroundColor = emerald
        cfg.baseForegroundColor = .white
        cfg.cornerStyle = .large
        cfg.contentInsets = NSDirectionalEdgeInsets(top: 15, leading: 20, bottom: 15, trailing: 20)
        cfg.title = "Убрать рекламу навсегда"
        b.configuration = cfg
        b.titleLabel?.font = .systemFont(ofSize: 17, weight: .semibold)
        b.addTarget(self, action: #selector(buyTapped), for: .touchUpInside)
        return b
    }()
    private lazy var restoreButton: UIButton = {
        let b = UIButton(type: .system)
        b.setTitle("Восстановить покупку", for: .normal)
        b.setTitleColor(emerald, for: .normal)
        b.titleLabel?.font = .systemFont(ofSize: 14)
        b.addTarget(self, action: #selector(restoreTapped), for: .touchUpInside)
        return b
    }()
    private let doneLabel: UILabel = {
        let l = UILabel()
        l.text = "✓ Реклама отключена"
        l.textAlignment = .center
        l.font = .systemFont(ofSize: 17, weight: .semibold)
        l.textColor = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)
        l.isHidden = true
        return l
    }()

    private var price: String?

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Без рекламы"
        view.backgroundColor = .systemBackground
        buildLayout()
        refreshState()

        PurchasesManager.shared.localizedPrice { [weak self] p in
            self?.price = p
            self?.refreshState()
        }
        NotificationCenter.default.addObserver(self, selector: #selector(refreshState),
                                               name: PurchasesManager.adFreeChanged, object: nil)
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
        let stack = UIStackView(arrangedSubviews: [iconView, pitchLabel, subtitleLabel, doneLabel, buyButton, restoreButton])
        stack.axis = .vertical
        stack.spacing = 16
        stack.setCustomSpacing(24, after: subtitleLabel)
        stack.setCustomSpacing(8, after: buyButton)
        stack.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(stack)
        NSLayoutConstraint.activate([
            stack.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 32),
            stack.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 24),
            stack.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -24),
            stack.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -24),
        ])
    }

    @objc private func refreshState() {
        let adFree = PurchasesManager.shared.isAdFree
        doneLabel.isHidden = !adFree
        buyButton.isHidden = adFree
        restoreButton.isHidden = adFree
        pitchLabel.isHidden = adFree
        subtitleLabel.isHidden = adFree
        if !adFree {
            let p = price ?? PurchasesManager.shared.fallbackPrice
            var cfg = buyButton.configuration
            cfg?.title = "Убрать рекламу навсегда — \(p)"
            buyButton.configuration = cfg
        }
    }

    private func setBusy(_ busy: Bool) {
        buyButton.isEnabled = !busy
        restoreButton.isEnabled = !busy
    }

    @objc private func buyTapped() {
        setBusy(true)
        PurchasesManager.shared.buy { [weak self] _ in
            self?.setBusy(false)
            self?.refreshState()
        }
    }

    @objc private func restoreTapped() {
        setBusy(true)
        PurchasesManager.shared.restore { [weak self] ok in
            self?.setBusy(false)
            self?.refreshState()
            if !ok {
                let a = UIAlertController(title: "Покупка не найдена",
                                          message: "На этом Apple ID покупка «Без рекламы» не обнаружена.",
                                          preferredStyle: .alert)
                a.addAction(UIAlertAction(title: "OK", style: .default))
                self?.present(a, animated: true)
            }
        }
    }
}
