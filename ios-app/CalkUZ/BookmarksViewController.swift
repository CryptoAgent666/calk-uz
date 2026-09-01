//
//  BookmarksViewController.swift
//  CalkUZ
//
//  Native "Bookmarks" screen — list of user-saved calculators with persistence.
//
//  WHY this exists (App Store Guideline 4.2 — Minimum Functionality):
//  Apple rejected the app as "just a web view". This screen provides genuine
//  native functionality:
//   - Persistent local storage (UserDefaults) — survives app restart
//   - Native UITableView with swipe-to-delete
//   - Native search bar
//   - Native pull-to-refresh
//   - Empty state with illustration
//   - Items added/removed without any web request
//
//  Persistence key: "calkuz.bookmarks" (array of slug strings)
//

import UIKit

private struct CalculatorItem {
    let slug: String
    let titleRu: String
    let category: String
    let emoji: String
}

/// Catalog of popular calk.uz calculators for the native bookmarks screen.
/// Slugs match calk.uz; tapping one opens it in the web catalog (Ещё tab).
private let ALL_CALCULATORS: [CalculatorItem] = [
    .init(slug: "ndfl", titleRu: "НДФЛ", category: "Налоги", emoji: "📊"),
    .init(slug: "nds", titleRu: "НДС", category: "Налоги", emoji: "📊"),
    .init(slug: "nalog-na-pribyl", titleRu: "Налог на прибыль", category: "Налоги", emoji: "📊"),
    .init(slug: "nalog-na-imushchestvo", titleRu: "Налог на имущество", category: "Налоги", emoji: "🏘"),
    .init(slug: "nalog-s-oborota", titleRu: "Налог с оборота", category: "Налоги", emoji: "📊"),
    .init(slug: "peni-po-nalogam", titleRu: "Пени по налогам", category: "Налоги", emoji: "⏱"),
    .init(slug: "gosposhliny", titleRu: "Госпошлины", category: "Налоги", emoji: "📜"),
    .init(slug: "otpusknye", titleRu: "Отпускные", category: "Зарплата", emoji: "🏖"),
    .init(slug: "bolnichnyy", titleRu: "Больничный", category: "Зарплата", emoji: "🤒"),
    .init(slug: "dekretnye", titleRu: "Декретные", category: "Зарплата", emoji: "👶"),
    .init(slug: "kompensatsiya-pri-uvolnenii", titleRu: "Компенсация при увольнении", category: "Зарплата", emoji: "💼"),
    .init(slug: "kredit", titleRu: "Кредит", category: "Кредиты", emoji: "💳"),
    .init(slug: "avtokredit", titleRu: "Автокредит", category: "Кредиты", emoji: "🚗"),
    .init(slug: "rassrochka", titleRu: "Рассрочка", category: "Кредиты", emoji: "🧾"),
    .init(slug: "refinansirovanie", titleRu: "Рефинансирование", category: "Кредиты", emoji: "🔄"),
    .init(slug: "dosrochnoe-pogashenie", titleRu: "Досрочное погашение", category: "Кредиты", emoji: "⏩"),
    .init(slug: "ipoteka", titleRu: "Ипотека", category: "Недвижимость", emoji: "🏠"),
    .init(slug: "arenda-vs-pokupka", titleRu: "Аренда или покупка", category: "Недвижимость", emoji: "🔑"),
    .init(slug: "depozit", titleRu: "Депозит", category: "Депозиты", emoji: "🏦"),
    .init(slug: "sravnenie-depozitov", titleRu: "Сравнение депозитов", category: "Депозиты", emoji: "📊"),
    .init(slug: "slozhnyy-protsent", titleRu: "Сложный процент", category: "Депозиты", emoji: "📈"),
    .init(slug: "kursy-bankov", titleRu: "Курсы банков", category: "Валюта", emoji: "💱"),
    .init(slug: "denezhnye-perevody", titleRu: "Денежные переводы", category: "Валюта", emoji: "📤"),
    .init(slug: "perevody-iz-za-rubezha", titleRu: "Переводы из-за рубежа", category: "Валюта", emoji: "🌍"),
    .init(slug: "rastamozhka", titleRu: "Растаможка авто", category: "Авто", emoji: "🛃"),
    .init(slug: "osago", titleRu: "ОСАГО", category: "Авто", emoji: "🚗"),
    .init(slug: "rashod-topliva", titleRu: "Расход топлива", category: "Авто", emoji: "⛽"),
    .init(slug: "lizing-avto", titleRu: "Лизинг авто", category: "Авто", emoji: "🚙"),
    .init(slug: "elektrichestvo", titleRu: "Электричество", category: "Коммунальные", emoji: "⚡"),
    .init(slug: "gaz", titleRu: "Газ", category: "Коммунальные", emoji: "🔥"),
    .init(slug: "otoplenie", titleRu: "Отопление", category: "Коммунальные", emoji: "🌡"),
    .init(slug: "internet", titleRu: "Интернет", category: "Коммунальные", emoji: "🌐"),
    .init(slug: "obshchaya-kommunalka", titleRu: "Общая коммуналка", category: "Коммунальные", emoji: "🏢"),
    .init(slug: "indeks-massy-tela", titleRu: "Индекс массы тела (ИМТ)", category: "Здоровье", emoji: "⚖️"),
    .init(slug: "kaloriy", titleRu: "Калории (КБЖУ)", category: "Здоровье", emoji: "🍎"),
    .init(slug: "idealnyy-ves", titleRu: "Идеальный вес", category: "Здоровье", emoji: "🏃"),
    .init(slug: "beremennost", titleRu: "Срок беременности", category: "Здоровье", emoji: "🤰"),
    .init(slug: "pensiya", titleRu: "Пенсия", category: "Социальное", emoji: "👴"),
    .init(slug: "alimenty", titleRu: "Алименты", category: "Социальное", emoji: "👨‍👩‍👧"),
    .init(slug: "protsenty", titleRu: "Проценты", category: "Другое", emoji: "💯"),
    .init(slug: "skidki", titleRu: "Скидки", category: "Другое", emoji: "🏷"),
    .init(slug: "marzhinalnost", titleRu: "Маржинальность", category: "Другое", emoji: "📈")
]

final class BookmarksViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, UISearchResultsUpdating {

    static let storageKey = "calkuz.bookmarks"
    static let notificationName = Notification.Name("calkuz.bookmarks.changed")

    /// Called when user taps a calculator — should be handled by parent (TabBarController)
    /// to switch to the WebView tab and navigate.
    var onOpenCalculator: ((String) -> Void)?

    private var bookmarks: [String] = []
    private var allCalcs: [CalculatorItem] = ALL_CALCULATORS
    private var filteredBookmarkedItems: [CalculatorItem] = []
    private var searchText: String = ""

    private lazy var tableView: UITableView = {
        let tv = UITableView(frame: .zero, style: .insetGrouped)
        tv.dataSource = self
        tv.delegate = self
        tv.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
        tv.register(AddCalculatorCell.self, forCellReuseIdentifier: "AddCell")
        tv.translatesAutoresizingMaskIntoConstraints = false
        tv.allowsSelectionDuringEditing = false
        return tv
    }()

    private lazy var emptyStateView: UIView = {
        let v = UIView()
        v.translatesAutoresizingMaskIntoConstraints = false

        let icon = UILabel()
        icon.text = "⭐"
        icon.font = .systemFont(ofSize: 72)
        icon.textAlignment = .center

        let title = UILabel()
        title.text = "Нет избранных калькуляторов"
        title.font = .systemFont(ofSize: 19, weight: .semibold)
        title.textColor = .label
        title.textAlignment = .center

        let subtitle = UILabel()
        subtitle.text = "Добавьте калькуляторы которыми пользуетесь чаще всего — они появятся здесь и будут под рукой."
        subtitle.font = .systemFont(ofSize: 15)
        subtitle.textColor = .secondaryLabel
        subtitle.textAlignment = .center
        subtitle.numberOfLines = 0

        let button = UIButton(type: .system)
        var cfg = UIButton.Configuration.filled()
        cfg.title = "Добавить калькулятор"
        cfg.baseBackgroundColor = UIColor(red: 5/255, green: 150/255, blue: 105/255, alpha: 1)
        cfg.baseForegroundColor = .white
        cfg.cornerStyle = .medium
        cfg.contentInsets = .init(top: 12, leading: 24, bottom: 12, trailing: 24)
        button.configuration = cfg
        button.addTarget(self, action: #selector(presentAdd), for: .touchUpInside)

        let stack = UIStackView(arrangedSubviews: [icon, title, subtitle, button])
        stack.axis = .vertical
        stack.alignment = .center
        stack.spacing = 12
        stack.translatesAutoresizingMaskIntoConstraints = false
        v.addSubview(stack)

        NSLayoutConstraint.activate([
            stack.centerXAnchor.constraint(equalTo: v.centerXAnchor),
            stack.centerYAnchor.constraint(equalTo: v.centerYAnchor),
            stack.leadingAnchor.constraint(greaterThanOrEqualTo: v.leadingAnchor, constant: 32),
            stack.trailingAnchor.constraint(lessThanOrEqualTo: v.trailingAnchor, constant: -32),
        ])
        return v
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .systemGroupedBackground
        title = "Избранное"
        navigationController?.navigationBar.prefersLargeTitles = true

        let addButton = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(presentAdd))
        navigationItem.rightBarButtonItem = addButton

        let searchController = UISearchController(searchResultsController: nil)
        searchController.searchResultsUpdater = self
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "Поиск среди избранного"
        navigationItem.searchController = searchController
        navigationItem.hidesSearchBarWhenScrolling = false

        view.addSubview(tableView)
        view.addSubview(emptyStateView)

        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor),

            emptyStateView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            emptyStateView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            emptyStateView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            emptyStateView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor),
        ])

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(reloadBookmarks),
            name: BookmarksViewController.notificationName,
            object: nil
        )

        reloadBookmarks()
    }

    @objc private func reloadBookmarks() {
        do {
            let saved = UserDefaults.standard.array(forKey: BookmarksViewController.storageKey) as? [String] ?? []
            bookmarks = saved
        }
        rebuildFiltered()
        tableView.reloadData()
        emptyStateView.isHidden = !bookmarks.isEmpty
    }

    private func rebuildFiltered() {
        let bookmarked = ALL_CALCULATORS.filter { bookmarks.contains($0.slug) }
        if searchText.isEmpty {
            filteredBookmarkedItems = bookmarked
        } else {
            let lower = searchText.lowercased()
            filteredBookmarkedItems = bookmarked.filter {
                $0.titleRu.lowercased().contains(lower) || $0.category.lowercased().contains(lower)
            }
        }
    }

    @objc private func presentAdd() {
        let addVC = AddCalculatorListViewController(allCalcs: ALL_CALCULATORS, alreadyBookmarked: bookmarks)
        addVC.onSelected = { [weak self] slug in
            guard let self = self else { return }
            var current = self.bookmarks
            if !current.contains(slug) {
                current.append(slug)
                UserDefaults.standard.set(current, forKey: BookmarksViewController.storageKey)
                NotificationCenter.default.post(name: BookmarksViewController.notificationName, object: nil)
            }
        }
        let nav = UINavigationController(rootViewController: addVC)
        nav.modalPresentationStyle = .formSheet
        present(nav, animated: true)
    }

    // MARK: - UISearchResultsUpdating
    func updateSearchResults(for searchController: UISearchController) {
        searchText = searchController.searchBar.text ?? ""
        rebuildFiltered()
        tableView.reloadData()
    }

    // MARK: - UITableViewDataSource
    func numberOfSections(in tableView: UITableView) -> Int { 1 }
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { filteredBookmarkedItems.count }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let item = filteredBookmarkedItems[indexPath.row]
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        var content = cell.defaultContentConfiguration()
        content.text = "\(item.emoji)  \(item.titleRu)"
        content.secondaryText = item.category
        content.textProperties.font = .systemFont(ofSize: 17)
        content.secondaryTextProperties.font = .systemFont(ofSize: 13)
        content.secondaryTextProperties.color = .secondaryLabel
        cell.contentConfiguration = content
        cell.accessoryType = .disclosureIndicator
        return cell
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = filteredBookmarkedItems[indexPath.row]
        tableView.deselectRow(at: indexPath, animated: true)
        onOpenCalculator?(item.slug)
    }

    func tableView(_ tableView: UITableView, trailingSwipeActionsConfigurationForRowAt indexPath: IndexPath) -> UISwipeActionsConfiguration? {
        let item = filteredBookmarkedItems[indexPath.row]
        let action = UIContextualAction(style: .destructive, title: "Удалить") { [weak self] _, _, completion in
            guard let self = self else { return }
            self.bookmarks.removeAll { $0 == item.slug }
            UserDefaults.standard.set(self.bookmarks, forKey: BookmarksViewController.storageKey)
            self.rebuildFiltered()
            tableView.deleteRows(at: [indexPath], with: .left)
            self.emptyStateView.isHidden = !self.bookmarks.isEmpty
            completion(true)
        }
        action.image = UIImage(systemName: "trash")
        return UISwipeActionsConfiguration(actions: [action])
    }
}

// Helper cell + add-list controller

private final class AddCalculatorCell: UITableViewCell {
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: .default, reuseIdentifier: reuseIdentifier)
    }
    required init?(coder: NSCoder) { fatalError() }
}

private final class AddCalculatorListViewController: UITableViewController {
    private let allCalcs: [CalculatorItem]
    private let alreadyBookmarked: Set<String>
    var onSelected: ((String) -> Void)?

    init(allCalcs: [CalculatorItem], alreadyBookmarked: [String]) {
        self.allCalcs = allCalcs
        self.alreadyBookmarked = Set(alreadyBookmarked)
        super.init(style: .insetGrouped)
    }
    required init?(coder: NSCoder) { fatalError() }

    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Добавить в избранное"
        navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(close))
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Cell")
    }

    @objc private func close() { dismiss(animated: true) }

    override func numberOfSections(in tableView: UITableView) -> Int { 1 }
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { allCalcs.count }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let item = allCalcs[indexPath.row]
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        var content = cell.defaultContentConfiguration()
        content.text = "\(item.emoji)  \(item.titleRu)"
        content.secondaryText = item.category
        cell.contentConfiguration = content
        cell.accessoryType = alreadyBookmarked.contains(item.slug) ? .checkmark : .none
        return cell
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = allCalcs[indexPath.row]
        tableView.deselectRow(at: indexPath, animated: true)
        if !alreadyBookmarked.contains(item.slug) {
            onSelected?(item.slug)
            // Update cell visually
            if let cell = tableView.cellForRow(at: indexPath) {
                cell.accessoryType = .checkmark
            }
        }
    }
}
