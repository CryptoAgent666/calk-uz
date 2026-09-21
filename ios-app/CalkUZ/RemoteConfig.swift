//
//  RemoteConfig.swift
//  CalkUZ
//
//  Over-the-air (OTA) rates for the NATIVE calculators.
//
//  The native calculators must work fully offline (App Store Guideline 4.2),
//  so every value has a baked-in default. On top of that, this manager fetches
//  https://calk.uz/app-config.json — a small JSON of numeric rates — and caches
//  it. When a rate changes in Uzbekistan (e.g. НДФЛ, НДС, or the yearly БРВ),
//  editing that file on the site updates every installed app automatically,
//  with NO app release. This is data/config only (not downloaded code), which
//  Apple permits.
//
//  Resolution order for any value:  remote (cached) → built-in default.
//

import Foundation

final class RemoteConfig {

    static let shared = RemoteConfig()
    static let changed = Notification.Name("RemoteConfig.changed")

    /// Config endpoint. Overridable via CALK_CONFIG_URL (testing / staging).
    private var url: URL {
        if let s = ProcessInfo.processInfo.environment["CALK_CONFIG_URL"], let u = URL(string: s) { return u }
        return URL(string: "https://calk.uz/app-config.json")!
    }
    private let cacheKey = "calkuz.appconfig.v1"

    /// Decoded payload. All fields optional so a partial/edited JSON still
    /// decodes — missing keys simply fall back to the built-in defaults.
    private struct Payload: Codable {
        var nums: [String: Double]?
        var customsExciseBrackets: [[Double]]?
        var customsUtilBrackets: [[Double]]?
    }

    private var payload = Payload(nums: nil, customsExciseBrackets: nil, customsUtilBrackets: nil)

    private init() { loadCache() }

    // MARK: - Accessors (remote → default)

    /// A scalar rate by key, with a built-in fallback.
    func num(_ key: String, _ fallback: Double) -> Double {
        payload.nums?[key] ?? fallback
    }

    /// One step of an engine-size schedule: applies up to `maxCC` cm³.
    struct Bracket { let maxCC: Int; let value: Double }

    /// Customs per-cc duty surcharge (USD per cm³, new cars). Falls back to built-in.
    var customsExciseBrackets: [Bracket] {
        brackets(payload.customsExciseBrackets,
                 default: [Bracket(maxCC: 1000, value: 0.4), Bracket(maxCC: 1500, value: 0.6),
                           Bracket(maxCC: 1800, value: 0.8), Bracket(maxCC: Int.max, value: 1.0)])
    }

    /// Customs recycling-fee schedule (count of БРВ by engine size, new cars).
    var customsUtilBrackets: [Bracket] {
        brackets(payload.customsUtilBrackets,
                 default: [Bracket(maxCC: 1000, value: 30), Bracket(maxCC: 2000, value: 120),
                           Bracket(maxCC: 3000, value: 180), Bracket(maxCC: 3500, value: 180),
                           Bracket(maxCC: Int.max, value: 300)])
    }

    private func brackets(_ raw: [[Double]]?, default def: [Bracket]) -> [Bracket] {
        guard let raw = raw, !raw.isEmpty else { return def }
        let mapped: [Bracket] = raw.compactMap { pair in
            guard pair.count == 2 else { return nil }
            let cc = pair[0] >= Double(Int.max) ? Int.max : Int(pair[0])
            return Bracket(maxCC: cc, value: pair[1])
        }
        return mapped.isEmpty ? def : mapped
    }

    // MARK: - Fetch / cache

    private func loadCache() {
        guard let data = UserDefaults.standard.data(forKey: cacheKey),
              let decoded = try? JSONDecoder().decode(Payload.self, from: data) else { return }
        payload = decoded
    }

    /// Fetch the latest config. Safe to call on every launch; failures are silent
    /// (cached / default values keep working).
    func refresh() {
        var req = URLRequest(url: url)
        req.timeoutInterval = 12
        req.cachePolicy = .reloadIgnoringLocalCacheData
        URLSession.shared.dataTask(with: req) { [weak self] data, response, error in
            guard let self = self,
                  let data = data, error == nil,
                  (response as? HTTPURLResponse)?.statusCode == 200,
                  let decoded = try? JSONDecoder().decode(Payload.self, from: data) else { return }
            self.payload = decoded
            UserDefaults.standard.set(data, forKey: self.cacheKey)
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: Self.changed, object: nil)
            }
        }.resume()
    }
}
