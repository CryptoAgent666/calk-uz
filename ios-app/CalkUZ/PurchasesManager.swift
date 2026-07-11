//
//  PurchasesManager.swift
//  CalkUZ
//
//  One-time "remove ads" purchase via RevenueCat (native iOS).
//  Entitlement `ad_free` ← product `uz.calk.calculator.removeads` (non-consumable).
//  Mirrors the web lib/purchases.ts that the Android Capacitor app uses.
//
//  The RevenueCat public SDK key (appl_…) is safe to embed in the client binary
//  (it is NOT a secret sk_ key). Ad-free status is cached in UserDefaults so it
//  can gate ads synchronously and offline.
//

import Foundation
import RevenueCat

final class PurchasesManager: NSObject {

    static let shared = PurchasesManager()
    private override init() { super.init() }

    private let apiKey = "appl_rCWXHYjLPIBYHOOmoVKsQkkeUgQ"
    private let entitlementID = "ad_free"
    let productID = "uz.calk.calculator.removeads"
    private let cacheKey = "calk_ad_free"

    /// Posted whenever ad-free status changes (banner teardown, UI refresh).
    static let adFreeChanged = Notification.Name("calk.adFreeChanged")

    /// Fallback price shown until StoreKit returns the localized string.
    let fallbackPrice = "$3.99"

    /// Synchronous, cached — safe to gate ads instantly and offline.
    var isAdFree: Bool { UserDefaults.standard.bool(forKey: cacheKey) }

    private func setAdFree(_ value: Bool) {
        guard value != isAdFree else { return }
        UserDefaults.standard.set(value, forKey: cacheKey)
        NotificationCenter.default.post(name: Self.adFreeChanged, object: nil)
    }

    /// Configure at launch. No-op-safe if the network is down.
    func configure() {
        Purchases.logLevel = .warn
        Purchases.configure(withAPIKey: apiKey)
        Purchases.shared.delegate = self
        // Pull current status (also silently restores prior purchases).
        Purchases.shared.getCustomerInfo { [weak self] info, _ in
            if let info = info { self?.update(from: info) }
        }
    }

    private func update(from info: CustomerInfo) {
        setAdFree(info.entitlements.active[entitlementID] != nil)
    }

    /// Localized price string (e.g. "39 000 сум"), or nil.
    func localizedPrice(_ completion: @escaping (String?) -> Void) {
        Purchases.shared.getProducts([productID]) { products in
            DispatchQueue.main.async { completion(products.first?.localizedPriceString) }
        }
    }

    /// Buy "remove ads". Completion true on success (or already owned).
    func buy(_ completion: @escaping (Bool) -> Void) {
        Purchases.shared.getProducts([productID]) { [weak self] products in
            guard let product = products.first else {
                DispatchQueue.main.async { completion(false) }
                return
            }
            Purchases.shared.purchase(product: product) { _, info, _, userCancelled in
                if let info = info { self?.update(from: info) }
                DispatchQueue.main.async { completion(!userCancelled && (self?.isAdFree ?? false)) }
            }
        }
    }

    /// Restore purchases — required by Apple (Guideline 3.1.1).
    func restore(_ completion: @escaping (Bool) -> Void) {
        Purchases.shared.restorePurchases { [weak self] info, _ in
            if let info = info { self?.update(from: info) }
            DispatchQueue.main.async { completion(self?.isAdFree ?? false) }
        }
    }
}

extension PurchasesManager: PurchasesDelegate {
    func purchases(_ purchases: Purchases, receivedUpdated customerInfo: CustomerInfo) {
        update(from: customerInfo)
    }
}
