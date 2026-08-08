# Calk.UZ — iOS (Capacitor) — сборка и публикация

Нативная iOS-обёртка над сайтом **calk.uz** на Capacitor 8 (Swift Package Manager).
Полный паритет с Android-приложением: тот же `appId`, иконка, версия, офлайн и OTA.

## Как это работает (OTA + офлайн)

```
┌─────────────────────────────────────────────────────────┐
│  iOS app (uz.calk.calculator)                            │
│                                                          │
│   WKWebView ──server.url──▶  https://calk.uz  (LIVE)     │
│        │                                                 │
│        ├─ онлайн: грузится живой сайт. Любые новые        │
│        │   калькуляторы и обновления контента появляются │
│        │   СРАЗУ, без новой сборки и без ревью Apple.     │  ← OTA
│        │                                                 │
│        ├─ service worker (sw.js на сайте) кэширует        │
│        │   посещённые страницы → офлайн-доступ.          │
│        │                                                 │
│        └─ нет сети и нет кэша: errorPath → bundled        │
│            out/index.html (брендированный экран).         │  ← офлайн-фолбэк
└─────────────────────────────────────────────────────────┘
```

**OTA здесь — это `server.url` в `capacitor.config.ts`.** Приложение всегда
открывает живой `https://calk.uz`, поэтому контент и новые калькуляторы доезжают
до пользователя автоматически. Пересобирать и публиковать iOS-приложение нужно
только при изменении **нативной** части (иконка, splash, плагины, конфиг, версия).

Офлайн обеспечивают два слоя:
- `public/sw.js` на сайте — network-first кэш посещённых страниц;
- bundled `out/index.html` — `errorPath`, показывается когда сайт недоступен.

## Требования

- macOS + Xcode 16+ (проверено на Xcode 26.5)
- Node 20+ (проверено на Node 25), npm
- Аккаунт Apple Developer (для архива и загрузки в App Store)
- CocoaPods НЕ нужен — Capacitor 8 использует Swift Package Manager

## Первичная установка (уже выполнена)

```bash
npm install                 # ставит @capacitor/* и зависимости
npx cap add ios             # генерирует ios/ (один раз)
```

## Рабочий цикл

```bash
# 1. Обновить нативную часть из web-конфига и out/
npx cap sync ios            # копирует out/ → ios/.../public, обновляет плагины/конфиг

# 2. Открыть проект в Xcode
npx cap open ios            # откроет ios/App/App.xcodeproj

# 3. Запустить на симуляторе (без подписи) из CLI:
cd ios/App
xcodebuild -scheme App -project App.xcodeproj -sdk iphonesimulator \
  -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17 Pro' \
  CODE_SIGNING_ALLOWED=NO build
```

> `out/` — это офлайн-оболочка (статический `index.html`). Она уже в репозитории.
> Полный `next build` для iOS не требуется: приложение грузит живой сайт.

## Конфигурация (источник истины)

| Параметр | Значение | Где |
|---|---|---|
| App ID / Bundle ID | `uz.calk.calculator` | `capacitor.config.ts`, pbxproj |
| App name | `Calk.UZ` | `capacitor.config.ts`, Info.plist |
| Версия (marketing) | `1.1.0` | `MARKETING_VERSION` в pbxproj |
| Build номер | `1` | `CURRENT_PROJECT_VERSION` в pbxproj |
| Min iOS | `15.0` | `IPHONEOS_DEPLOYMENT_TARGET` |
| OTA-источник | `https://calk.uz` | `server.url` |
| Splash/StatusBar цвет | `#059669` | `capacitor.config.ts` |

Иконка: `ios/App/App/Assets.xcassets/AppIcon.appiconset` (исходник — `icon-source.svg`).
Splash: `ios/App/App/Assets.xcassets/Splash.imageset` (исходник — `splash-source.svg`).
Перегенерация: `rsvg-convert` → PNG, затем `sharp().removeAlpha()` (иконка iOS без альфы).

## Публикация в App Store

1. **Подпись.** В Xcode → target App → Signing & Capabilities: выбрать Team
   (Automatic signing). Bundle ID `uz.calk.calculator` зарегистрировать в
   Apple Developer (Identifiers).
2. **Версия/билд.** Перед каждой загрузкой увеличивать `CURRENT_PROJECT_VERSION`
   (build); `MARKETING_VERSION` — при пользовательских изменениях.
3. **Архив.**
   ```bash
   cd ios/App
   xcodebuild -scheme App -project App.xcodeproj -configuration Release \
     -destination 'generic/platform=iOS' -archivePath build/App.xcarchive archive
   ```
   или в Xcode: Product → Archive.
4. **Загрузка.** Organizer → Distribute App → App Store Connect, либо
   `xcrun altool` / Transporter.
5. **Листинг.** Заполнить по `app-store-listing.md`, иконка `app-store-icon-1024.png`,
   описания `description-ru.txt` / `description-uz.txt`.
6. **Реклама и приватность.** Следовать `privacy-and-ads.md` (реклама заявлена,
   AdMob добавляется отдельной фазой после модерации).

## Что коммитим / что нет

`ios/.gitignore` (создан Capacitor) исключает `App/build`, `DerivedData`,
`xcuserdata`, скопированные web-ассеты (`App/App/public`) и генерируемые конфиги —
всё это воссоздаётся `npx cap sync ios`. Сам Xcode-проект коммитится.
