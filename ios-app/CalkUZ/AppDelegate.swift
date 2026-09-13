//
//  AppDelegate.swift
//  CalkUZ
//
//  Native calculators app for Uzbekistan. Bundle ID: uz.calk.calculator
//

import UIKit

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // OTA rates: fetch the latest calculator config so native calculators
        // reflect rate changes (НДФЛ/НДС/БРВ…) without an app release.
        RemoteConfig.shared.refresh()
        // In-app purchases (RevenueCat) — configure first so isAdFree reflects a
        // prior "remove ads" purchase before ads are gated.
        PurchasesManager.shared.configure()
        // AdMob: стартует только при разрешении UMP. Для повторных запусков
        // (консент сохранён / не требуется) SDK поднимается сразу; на самом
        // первом запуске старт произойдёт из цепочки консента в
        // RootTabBarController (gatherConsentThenStart → ATT → баннер).
        AdMobManager.shared.startIfConsented()
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication,
                     configurationForConnecting connectingSceneSession: UISceneSession,
                     options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }
}
