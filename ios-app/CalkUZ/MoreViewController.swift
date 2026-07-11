//
//  MoreViewController.swift
//  CalkUZ
//
//  Native UITableView for secondary destinations (so the top-level tab
//  bar stays focused on the 4 primary native experiences). Contains:
//
//   • Bookmarks   → opens BookmarksViewController (native list)
//   • All calculators (35) → web fallback (WebViewController)
//   • Settings    → SettingsViewController (native)
//   • About       → AboutViewController (native)
//   • Contact     → opens mail composer link
//
//  This keeps the WebView reachable but no longer the primary experience.
//  The user lands on a native screen by default.
//

import UIKit

final class MoreViewController: UIViewController {

    private let webViewController: WebViewController
    private let tableView = UITableView(frame: .zero, style: .insetGrouped)

    /// Section / row model — simple enum is sufficient since this list is
    /// short and rarely changes.
    private struct Row {
        let title: String
        let subtitle: String?
        let icon: String
        let action: () -> Void
    }
    private var sections: [(header: String?, rows: [Row])] = []

    init(webViewController: WebViewController) {
        self.webViewController = webViewController
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) { fatalError() }

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Ещё"
        navigationItem.largeTitleDisplayMode = .always
        view.backgroundColor = .systemBackground

        buildSections()

        tableView.translatesAutoresizingMaskIntoConstraints = false
        tableView.dataSource = self
        tableView.delegate = self
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
        view.addSubview(tableView)
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        // Verification / screenshot hook: auto-open the live web catalog.
        if ProcessInfo.processInfo.environment["CALK_OPEN_WEB"] == "1" {
            DispatchQueue.main.async { [weak self] in self?.openAllCalculators() }
        }
        // Screenshot hook: auto-open the "remove ads" screen (for the App Store
        // Connect IAP review screenshot).
        if ProcessInfo.processInfo.environment["CALK_OPEN_REMOVEADS"] == "1" {
            DispatchQueue.main.async { [weak self] in self?.openRemoveAds() }
        }

        // Refresh the "remove ads" row when purchase status changes.
        NotificationCenter.default.addObserver(forName: PurchasesManager.adFreeChanged, object: nil, queue: .main) { [weak self] _ in
            self?.buildSections()
            self?.tableView.reloadData()
        }
    }

    private func buildSections() {
        var result: [(header: String?, rows: [Row])] = []
        // Remove-ads upsell (native RevenueCat IAP)
        if PurchasesManager.shared.isAdFree {
            result.append((header: nil, rows: [
                Row(title: "✓ Реклама отключена", subtitle: "Спасибо за поддержку!",
                    icon: "checkmark.seal.fill", action: {})
            ]))
        } else {
            result.append((header: nil, rows: [
                Row(title: "Убрать рекламу навсегда", subtitle: "Разовая покупка — по цене пары чашек кофе",
                    icon: "sparkles", action: { [weak self] in self?.openRemoveAds() })
            ]))
        }
        result.append((header: nil, rows: [
            Row(
                title: "Избранное",
                subtitle: "Закладки на калькуляторы",
                icon: "star",
                action: { [weak self] in self?.openBookmarks() }
            ),
            Row(
                title: "Все калькуляторы сайта",
                subtitle: "Полный каталог — обновляется автоматически",
                icon: "list.bullet.rectangle",
                action: { [weak self] in self?.openAllCalculators() }
            ),
        ]))
        result.append((header: "Приложение", rows: [
            Row(
                title: "Настройки",
                subtitle: "Язык, тема, очистка кэша",
                icon: "gearshape",
                action: { [weak self] in self?.openSettings() }
            ),
            Row(
                title: "О приложении",
                subtitle: "Версия и контакты",
                icon: "info.circle",
                action: { [weak self] in self?.openAbout() }
            ),
        ]))
        sections = result
    }

    // MARK: - Actions

    private func openRemoveAds() {
        navigationController?.pushViewController(RemoveAdsViewController(), animated: true)
    }

    private func openBookmarks() {
        let vc = BookmarksViewController()
        vc.onOpenCalculator = { [weak self] slug in
            // Delegate to root tab controller for consistent navigation
            (self?.tabBarController as? RootTabBarController)?.openCalculatorFromBookmark(slug: slug)
        }
        navigationController?.pushViewController(vc, animated: true)
    }

    private func openAllCalculators() {
        webViewController.loadURL(URL(string: "https://calk.uz/")!)
        navigationController?.pushViewController(webViewController, animated: true)
    }

    private func openSettings() {
        navigationController?.pushViewController(SettingsViewController(), animated: true)
    }

    private func openAbout() {
        navigationController?.pushViewController(AboutViewController(), animated: true)
    }
}

extension MoreViewController: UITableViewDataSource, UITableViewDelegate {
    func numberOfSections(in tableView: UITableView) -> Int { sections.count }
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        sections[section].header
    }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        sections[section].rows.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        let row = sections[indexPath.section].rows[indexPath.row]
        var cfg = cell.defaultContentConfiguration()
        cfg.text = row.title
        cfg.secondaryText = row.subtitle
        cfg.image = UIImage(systemName: row.icon)
        cell.contentConfiguration = cfg
        cell.accessoryType = .disclosureIndicator
        return cell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        sections[indexPath.section].rows[indexPath.row].action()
    }
}
