# Конфиденциальность и реклама — Calk.UZ iOS (актуально с 1.1+)

> ⚠️ Прежняя версия этого файла описывала стратегию первой сборки 1.0
> («реклама заявлена, SDK не интегрирован, App Privacy = Data Not Collected»).
> Та фаза ЗАВЕРШЕНА: AdMob и покупки в бинаре с 1.1. По старым ответам App
> Privacy заполнять НЕЛЬЗЯ — это была бы ложная декларация.

## Что реально есть в бинаре (сверено с кодом 2026-08-26)

| Компонент | Где в коде |
|---|---|
| Google Mobile Ads SDK: баннер + интерстишл + rewarded | `ios-app/CalkUZ/AdMobManager.swift`, юниты продовые |
| UMP (Google CMP): GDPR-форма там, где обязательна | `AdMobManager.gatherConsentThenStart` (цепочка: UMP → старт SDK → ATT → баннер) |
| App Tracking Transparency (IDFA) | `AdMobManager.requestTrackingIfNeeded`, `Info.plist NSUserTrackingUsageDescription` |
| RevenueCat: разовая покупка «Убрать рекламу» | `PurchasesManager.swift`, продукт `uz.calk.calculator.removeads`, entitlement `ad_free` |
| Rewarded-окно: ролик → 6 ч без рекламы | `PurchasesManager.rewardHours = 6` |
| Privacy Manifest: tracking=true, домены, типы данных | `ios-app/CalkUZ/PrivacyInfo.xcprivacy` — ОБЯЗАН совпадать с App Privacy в ASC |

## App Privacy — актуальные ответы (App Store Connect)

| Вопрос | Ответ |
|---|---|
| Does this app collect data? | **Yes** |
| Uses Advertising Identifier (IDFA)? | **Yes** — Third-Party Advertising (AdMob) |
| Tracking (App Tracking Transparency)? | **Yes** — ATT-промпт показывается; данные (IDFA) используются для рекламы третьей стороной |
| Data types | **Identifiers → Device ID** (tracking, third-party advertising); **Usage Data → Product Interaction** (tracking, advertising + analytics); **Purchases → Purchase History** (не linked, не tracking — RevenueCat, анонимный app user id); **Diagnostics → Crash Data** (не linked — Google Mobile Ads SDK) |
| Data linked to the user? | **No** — всё собирается не привязанным к личности (анонимные идентификаторы) |

Источник истины — `PrivacyInfo.xcprivacy`; менять декларации только синхронно
(манифест + ASC + этот файл). ✅ ASC App Privacy обновлён 2026-08-26: 4 типа
данных (Device ID, Product Interaction, Purchase History, Crash Data) — совпадает
с манифестом.

## Консент-цепочка (порядок диалогов)

1. **UMP / Google CMP** — на первом запуске делает geo-детект: EEA/UK/CH видят
   GDPR-форму, остальные (вся основная UZ-аудитория) не видят ничего.
   Требует опубликованного GDPR-сообщения в AdMob → Privacy & messaging
   для приложения Calk.UZ (консольная настройка, не код).
2. **ATT** — после UMP-формы (рекомендованный Google порядок, диалоги не
   штабелируются). Отказ = non-personalized ads, реклама не пропадает.
3. Реклама стартует только при `canRequestAds` (UMP).

## Прочее для ревью

- **Age rating:** 4+ (реклама — общая аудитория).
- **Export compliance:** только стандартный HTTPS → `ITSAppUsesNonExemptEncryption = NO`.
- **IAP:** non-consumable, кнопка Restore обязательна (Guideline 3.1.1) — есть
  в экране покупки и в «Ещё». Review-скриншот IAP: `iap-review-screenshot.png`
  (снимается с живого UI: `CALK_SCREENSHOT_MODE=1` + `CALK_OPEN_REMOVEADS=1`).
- **Скриншоты App Store:** реклама подавляется `CALK_SCREENSHOT_MODE=1`.
