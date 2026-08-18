# App Store Connect — App Review Information → Notes (Calk.UZ 1.0, build 4)

Submission ID of the rejection being addressed: `67b86a01-6bc7-41d5-afc7-712820113f56`

Вставить текст ниже в App Store Connect → App Review Information → **Notes**, и
этим же ответить (Reply) на сообщение ревьюера. Реклама в этой сборке не
показывается; App Privacy → **Data Not Collected** (см. ниже).

---

## Review Notes (paste this — English)

Thank you for the detailed feedback. We have **fundamentally rebuilt the app as a
native iOS application** to address both issues.

**Guideline 4.2 — Minimum Functionality (resolved)**
The app no longer opens to a web view. On launch it shows a **native UIKit tab bar**
with 5 tabs, four of which never instantiate WKWebView:

1. Калькуляторы — native hub listing **8 fully-native calculators**. Each performs
   all computation locally in Swift (no network, no web view):
   • Зарплата (НДФЛ): net pay = gross − НДФЛ(12% / 7.5% IT Park / 20%) − ИНПС(0.1%)
   • Кредит: annuity P = S·i/(1−(1+i)^−n) with payment schedule
   • Ипотека: down-payment + term annuity
   • Депозит: compound interest FV = PV·(1+r/n)^(n·t) with capitalization
   • НДС: add / extract 12% VAT
   • Растаможка: import duty 15% + excise (USD/cm³) + VAT 12% + recycling fee
   • Калории (Mifflin-St Jeor), ИМТ (WHO) — health calculators
2. Курсы — native currency rates from the Central Bank of Uzbekistan JSON API,
   rendered in a native table with a native converter. No HTML.
3. История — calculations saved locally (UserDefaults), swipe-to-delete, share sheet.
4. Избранное — native bookmarks with search, persisted locally.
5. Ещё — settings, about, and an optional web catalog.

Native features: UIActivityViewController share, UserDefaults persistence, local
notifications, dark mode, SF Symbols, large titles. The core value (calculations)
works fully offline and never depends on a web view.

**Reviewer test path:** Launch → lands on "Калькуляторы" (native list, no web view) →
tap "Зарплата" → type 5000000 → see live result 4 395 000 (НДФЛ 600 000, ИНПС 5 000),
no submit button → tap "Поделиться" (native share sheet) → tab "Курсы" shows live
CBU rates natively → tab "История" supports swipe-to-delete.

**Guideline 5.1.2(i) — Data Use and Sharing (resolved)**
The app does **not** track users and does **not** use the Advertising Identifier.
In the optional web catalog tab the app injects code that pre-accepts the cookie
notice and disables all advertising/analytics scripts and ad-network requests, so
no tracking cookies are set on Apple devices. Because we do not track, no App
Tracking Transparency prompt is required, and App Privacy is declared as
"Data Not Collected".

We respectfully ask you to re-review. Thank you.

---

## App Privacy (App Store Connect → App Privacy)
- Data Collection: **No, we do not collect data from this app**
- Uses Advertising Identifier (IDFA): **No**
- Tracking: **No**

> Когда позже добавим рекламу (AdMob) — App Privacy и IDFA нужно будет обновить
> (см. `privacy-and-ads.md`). В ТЕКУЩЕЙ нативной сборке рекламы и трекинга нет.

## Build / version
- Bundle ID: `uz.calk.calculator`  ·  Version 1.0  ·  Build 4
- IPA: `ios-app/build/ipa/Calk.UZ-native-1.0-build4.ipa` → upload via Transporter
