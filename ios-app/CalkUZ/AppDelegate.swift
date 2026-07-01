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
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication,
                     configurationForConnecting connectingSceneSession: UISceneSession,
                     options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }
}
