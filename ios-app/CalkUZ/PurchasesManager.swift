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
    let fallbackPrice = "$1.99"

    /// Synchronous, cached — safe to gate ads instantly and offline.
    var isAdFree: Bool { UserDefaults.standard.bool(forKey: cacheKey) }

    // MARK: - Rewarded window (watch a video → 24 h without ads)

    private let untilKey = "calk_ad_free_until"

    /// Hours one watched video buys.
    static let rewardHours = 24

    /// End of the current reward window, or nil when there is none / it expired.
    var tempAdFreeUntil: Date? {
        let t = UserDefaults.standard.double(forKey: untilKey)
        guard t > 0 else { return nil }
        let date = Date(timeIntervalSince1970: t)
        return date > Date() ? date : nil
    }

    var isTempAdFree: Bool { tempAdFreeUntil != nil }

    /// Whole hours left in the reward window, rounded up (0 when inactive).
    var rewardHoursLeft: Int {
        guard let until = tempAdFreeUntil else { return 0 }
        return max(1, Int(ceil(until.timeIntervalSinceNow / 3600)))
    }

    /// The gate every ad path checks: bought forever OR inside a reward window.
    var adsHidden: Bool { isAdFree || isTempAdFree }

    /// Grant the window after the user actually earned the reward.
    func grantTempAdFree(hours: Int = PurchasesManager.rewardHours) {
        let until = Date().addingTimeInterval(TimeInterval(hours) * 3600)
        UserDefaults.standard.set(until.timeIntervalSince1970, forKey: untilKey)
        NotificationCenter.default.post(name: Self.adFreeChanged, object: nil)
    }

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
