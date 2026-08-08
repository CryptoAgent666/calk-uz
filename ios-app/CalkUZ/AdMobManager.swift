//
//  AdMobManager.swift
//  CalkUZ
//
//  Google Mobile Ads (AdMob) for the native iOS app.
//  App ID (Info.plist GADApplicationIdentifier): ca-app-pub-4859241862365215~3767750966
//
//  - Banner: adaptive, pinned above the tab bar (added by RootTabBarController).
//  - Interstitial: shown on calculator navigations, frequency-capped locally
//    (every 4th open, ≥120s apart); AdMob also enforces 1/3min at app level.
//  - ATT: we request App Tracking Transparency so ads can be personalized; if the
//    user declines, the SDK serves non-personalized ads.
//

import UIKit
import GoogleMobileAds
import AppTrackingTransparency

final class AdMobManager: NSObject {

    static let shared = AdMobManager()
    private override init() { super.init() }

    private let bannerUnitID = "ca-app-pub-4859241862365215/1031952587"
    private let interstitialUnitID = "ca-app-pub-4859241862365215/9078833104"
    private let rewardedUnitID = "ca-app-pub-4859241862365215/5603704093"

    private var interstitial: InterstitialAd?
    private var rewarded: RewardedAd?
    private var rewardCompletion: ((Bool) -> Void)?
    private var rewardEarned = false
    private var lastInterstitial = Date.distantPast
    private var navSinceInterstitial = 0

    /// Start the SDK (call once at launch) and preload the first interstitial.
    func start() {
        MobileAds.shared.start(completionHandler: { [weak self] _ in
            self?.loadInterstitial()
            self?.loadRewarded()
        })
    }

    /// Ask for App Tracking Transparency once the UI is on screen.
    func requestTrackingIfNeeded() {
        guard #available(iOS 14, *) else { return }
        if ATTrackingManager.trackingAuthorizationStatus == .notDetermined {
            // Small delay so the prompt appears after the first screen renders.
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                ATTrackingManager.requestTrackingAuthorization { _ in }
            }
        }
    }

    /// An adaptive banner sized to the given width, tied to `root`.
    func makeBanner(width: CGFloat, root: UIViewController) -> BannerView {
        let banner = BannerView(adSize: currentOrientationAnchoredAdaptiveBanner(width: width))
        banner.adUnitID = bannerUnitID
        banner.rootViewController = root
        banner.load(Request())
        return banner
    }

    private func loadInterstitial() {
        InterstitialAd.load(with: interstitialUnitID, request: Request()) { [weak self] ad, _ in
            self?.interstitial = ad
        }
    }

    // MARK: - Rewarded ("watch a video → 24 h without ads")

    private func loadRewarded() {
        RewardedAd.load(with: rewardedUnitID, request: Request()) { [weak self] ad, _ in
            self?.rewarded = ad
        }
    }

    /// True once a rewarded video is loaded and can be presented right away.
    var isRewardedReady: Bool { rewarded != nil }

    /// Present the rewarded video. `completion(true)` only when the user watched
    /// far enough to earn the reward — dismissing early grants nothing, per AdMob
    /// policy. Grants the 24 h window itself so every caller behaves the same.
    /// Settled once from `adDidDismissFullScreenContent` (or immediately on failure).
    func showRewarded(from vc: UIViewController, completion: @escaping (Bool) -> Void) {
        guard let ad = rewarded else {
            loadRewarded() // nothing cached — warm one up for the next tap
            completion(false)
            return
        }
        rewarded = nil
        rewardEarned = false
        rewardCompletion = completion
        ad.fullScreenContentDelegate = self
        ad.present(from: vc) { [weak self] in
            self?.rewardEarned = true
            PurchasesManager.shared.grantTempAdFree()
        }
    }

    /// Call the pending completion exactly once, then preload the next video.
    private func settleReward() {
        let done = rewardCompletion
        rewardCompletion = nil
        done?(rewardEarned)
        loadRewarded()
    }

    /// Count a calculator navigation and, subject to the cap, show an interstitial.
    func noteNavigationAndMaybeShowInterstitial(from vc: UIViewController) {
        guard !PurchasesManager.shared.adsHidden else { return }
        navSinceInterstitial += 1
        guard let ad = interstitial,
              navSinceInterstitial >= 4,
              Date().timeIntervalSince(lastInterstitial) > 120 else { return }
        navSinceInterstitial = 0
        lastInterstitial = Date()
        interstitial = nil
        ad.present(from: vc)
        loadInterstitial() // preload the next one
    }
}

// MARK: - FullScreenContentDelegate (rewarded)

extension AdMobManager: FullScreenContentDelegate {
    func adDidDismissFullScreenContent(_ ad: FullScreenPresentingAd) {
        settleReward()
    }

    func ad(_ ad: FullScreenPresentingAd, didFailToPresentFullScreenContentWithError error: Error) {
        settleReward()
    }
}
