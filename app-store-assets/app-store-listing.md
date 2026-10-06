# App Store Connect — поля листинга Calk.UZ

Готовые тексты для копирования в App Store Connect. Полные описания — в
`description-ru.txt` / `description-uz.txt`. Иконка для загрузки — `app-store-icon-1024.png`.

| Поле | Значение |
|---|---|
| **Bundle ID** | `uz.calk.calculator` |
| **SKU** | `calk-uz-ios` |
| **Primary language** | Russian |
| **Версия** | 1.1.0 |
| **Категория (Primary)** | Finance |
| **Категория (Secondary)** | Utilities |
| **Age rating** | 4+ |
| **Price** | Free |
| **Содержит рекламу** | Да (см. `privacy-and-ads.md`) |

---

## Русский (ru) — основная локализация

**Name** (≤30): `Calk.UZ — Калькуляторы`

**Subtitle** (≤30): `Калькуляторы Узбекистана`

**Keywords** (≤100, без пробелов после запятых):
`налог,ндфл,ндс,зарплата,кредит,ипотека,депозит,валюта,калькулятор,коммуналка,пеня,сум`

**Promotional Text** (≤170, можно менять без ревью):
`78 бесплатных калькуляторов для Узбекистана: налоги, зарплата, кредиты, ЖКУ и валюта. Работает офлайн, новые калькуляторы добавляются автоматически.`

**Description** (≤4000): см. `description-ru.txt`

**What's New** (≤4000):
`Первый выпуск Calk.UZ для iOS: 78 калькуляторов в 8 категориях, работа офлайн, интерфейс на русском и узбекском языках. Новые калькуляторы и обновления данных появляются автоматически.`

---

## O'zbek (uz)

**Name** (≤30): `Calk.UZ — Kalkulyatorlar`

**Subtitle** (≤30): `O'zbekiston kalkulyatori`

**Keywords** (≤100):
`soliq,maosh,kredit,ipoteka,depozit,valyuta,kalkulyator,kommunal,JShShS,QQS,foiz,som`

**Promotional Text** (≤170):
`O'zbekiston uchun 78 ta bepul kalkulyator: soliq, maosh, kredit, kommunal va valyuta. Oflayn ishlaydi, yangi kalkulyatorlar avtomatik qo'shiladi.`

**Description** (≤4000): см. `description-uz.txt`

**What's New** (≤4000):
`Calk.UZ ning iOS uchun birinchi versiyasi: 8 ta kategoriyada 78 ta kalkulyator, oflayn ishlash, rus va o'zbek tillari. Yangi kalkulyatorlar va ma'lumot yangilanishlari avtomatik paydo bo'ladi.`

---

## URL и контакты (заполнить перед отправкой)

| Поле | Значение |
|---|---|
| **Support URL** | https://calk.uz |
| **Marketing URL** | https://calk.uz |
| **Privacy Policy URL** | https://calk.uz/ru/privacy _(проверить, что страница существует)_ |
| **Copyright** | 2026 Calk.UZ |

## Скриншоты

App Store требует скриншоты под 6.9" (iPhone 16 Pro Max / 17 Pro Max, 1320×2868)
и опционально 6.5"/iPad. В `play-store-assets/` уже есть готовые экраны (phone-1…6) —
их можно переснять под iOS-разрешения через симулятор:
`xcrun simctl io "iPhone 17 Pro Max" screenshot screen.png`
