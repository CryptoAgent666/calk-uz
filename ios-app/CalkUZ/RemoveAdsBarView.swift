//
//  RemoveAdsBarView.swift
//  CalkUZ
//
//  Thin "remove ads" CTA bar pinned above the AdMob banner (mirrors the web
//  RemoveAdsBar the Android app shows). Tapping it starts the purchase; the X
//  hides it for the current session. RootTabBarController owns positioning and
//  tears it down when ad-free.
//

import UIKit

final class RemoveAdsBarView: UIView {

    var onTap: (() -> Void)?
    var onClose: (() -> Void)?

    private let priceLabel: UILabel = {
        let l = UILabel()
        l.textColor = .white
        l.font = .systemFont(ofSize: 14, weight: .semibold)
        l.text = "Убрать рекламу навсегда"
        return l
    }()

    init() {
        super.init(frame: .zero)
        backgroundColor = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)

        let icon = UIImageView(image: UIImage(systemName: "sparkles"))
        icon.tintColor = .white
        icon.setContentHuggingPriority(.required, for: .horizontal)

        let close = UIButton(type: .system)
        close.setImage(UIImage(systemName: "xmark"), for: .normal)
        close.tintColor = UIColor.white.withAlphaComponent(0.85)
        close.setContentHuggingPriority(.required, for: .horizontal)
        close.addTarget(self, action: #selector(closeTapped), for: .touchUpInside)

        let stack = UIStackView(arrangedSubviews: [icon, priceLabel, close])
        stack.axis = .horizontal
        stack.spacing = 8
        stack.alignment = .center
        stack.translatesAutoresizingMaskIntoConstraints = false
        addSubview(stack)
        NSLayoutConstraint.activate([
            stack.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 14),
            stack.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -12),
            stack.centerYAnchor.constraint(equalTo: centerYAnchor),
        ])

        addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(barTapped)))
    }

    required init?(coder: NSCoder) { fatalError() }

    func setPrice(_ price: String?) {
        priceLabel.text = "Убрать рекламу навсегда — \(price ?? PurchasesManager.shared.fallbackPrice)"
    }

    @objc private func barTapped() { onTap?() }
    @objc private func closeTapped() { onClose?() }
}
