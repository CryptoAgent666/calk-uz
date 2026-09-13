<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Regulatory constants (tax rates, БРВ, tariffs, duties)

calk.uz hard-codes Uzbekistan government-set values. They are inventoried + freshness-monitored by DATA_HUB.
**READ `CONSTANTS-PILOT-2026-06.md` before touching any constant.**

- **Constants are CENTRALIZED** (unlike most sites): `lib/constants/brv.ts` (БРВ=412000 base value, МРОТ, CB rate),
  `lib/constants/tax-rates.ts` (НДФЛ 12%, НДС 12%, profit 15%, social, property/land tax tiers),
  `lib/constants/utility-tariffs.ts` (electricity/gas/water tiers). Compute logic + some inline constants in
  `lib/calculators/*.ts`; prose tables in `lib/data/calculator-tables.ts`. **Apply fixes there.**
- **Inventory / ledger:** `lib/data/regulatory-constants.canonical.json` — **161 constants (145 gov-regulated)**.
  ⚠️ Audit ledger — NOT imported by the site; fix the source `.ts`, then reconcile. **62 added by the
  completeness pass 2026-06-25** (2 inline in `ApartmentCostCalculator.tsx` + 60 gov facts found in the prose
  `lib/data/calculator-articles.ts` that the lib-only sweep missed) — all status **`unverified`** (have a
  source_hint, lack a verified source_url; need a Tier-2 web-verify pass).
- **БРВ (базовая расчётная величина) = 412,000 anchors most fines/duties** as BRV-multiples. ⚠️ **Rises 1 Sep 2026 →
  440,000** (МРОТ → 1,360,000) — re-values every БРВ-multiple. Utility tariffs change mid-year (last hike 1 Jun 2026, ПКМ-243).

### State as of 2026-09-13 (ledger 172: 151 current · 0 uncertain · 8 removed · 13 unverified-market)
The June-2026 pilot verified all 145 gov constants and found 65 stale; **those fixes have since been applied**
(July reconcile + 2026-08-09 sweep + 2026-08-18 sweep). Do NOT treat the old June findings as open work —
several of them were already superseded, and re-"fixing" them re-introduces errors. Check the ledger's
`status` + `last_verified` and `lib/data/updates.ts` before acting on any historical note.

**БРВ vs МРОТ — the error class that keeps recurring.** Two bases, routinely confused:
- **БРВ 412 000** (→440 000 on 1 Sep 2026): госпошлины, штрафы КоАО, налоговые ПОРОГИ, таможенные сборы.
  The state-duty law literally says «минимальная заработная плата», but since УП-5765 (01.09.2019) that
  wording is read as БРВ — practice confirms (брак 20% = 82 400 = 0,2 БРВ).
- **МРОТ 1 271 000** (→1 360 000 on 1 Sep 2026): **льготы по НДФЛ**. Матпомощь 4,22 МРОТ (5 363 620),
  ипотека до 80 МРОТ (101 680 000), алименты 26,5% МРОТ, пособие по уходу 60% МРОТ.
Getting the base wrong is a 3.08× error. Fixed 2026-08-18 across ~21 prose sites; watch for regressions.

**Verified current (do not re-check without cause):** БРВ/МРОТ, ЦБ 14%, НДФЛ 12%, НДС 12%, profit 15%,
social 12%, самозанятые 1%, формула пенсии (55% +1%/год, потолок 75%, стаж 25/20), больничный 60/80 с
границей 8 лет (ПКМ-796, ступени 100% НЕТ), декретные 75/85/100 по 10-24/25-60/61+ мес., налог на
имущество физлиц 15 апреля + 15 октября, алименты до 18 лет и 3 дня на перечисление (ст. 137 СК),
9 праздничных нерабочих дней, порог НДС **12 000 БРВ** (с 01.06.2026, БЫЛО 1 млрд — старая цифра),
налоговый период по НДС — **месяц для всех** (квартальный порядок отменён с 2022), штраф без ОСАГО
**предупреждение или 0,5 БРВ** (ст. 135-1 в ред. ЗРУ-1116; «1 БРВ» — это ст. 135 ч.1, нет документов при себе; tier2 18.08 это перепутал, исправлено 13.09), госпошлина иск 4% гражд. / 2% эконом., брак 0,2 БРВ.

**Removed as non-existent:** транспортный налог (нет в ст. 17 НК — была белорусская норма), «имущественный
вычет 500 БРВ при покупке жилья», порог «100 млрд» для ежемесячной отчётности по НДС.

**Still open (`uncertain`): нет.** 13 `unverified` — рыночные, не регуляторные (топливо, курсы банков,
визы, свадьбы). «Квитанция госпошлины действительна 3 месяца» — выдумка (нет в ЗРУ-600, ПП-4079, УП-6065),
removed 13.09.2026.

**Датированные хвосты (не раньше срока, verify-first):** 01.01.2027 — единый таможенный платёж 30%→20%, $3→$2/кг
(УП-174 разд. V п. 8; консолидированный ПП-4508 на lex.uz уже показывает 20% без даты — это не значит «уже
действует»); хайиты 2027 в `lib/constants/holidays.ts` — постановления выходят за 3–10 дней до праздника;
тариф отопления Ташкента на сезон 2026–27 — решение хокима ожидается в октябре–ноябре (241,44 пока в силе).

**Закрыто tier2+phase4 13.09.2026** (тексты НК, КоАО, ТК, ПКМ-796 узб. оригинал lex.uz/docs/7926684, ПКМ-244
читались с lex.uz целиком): пособия по ПКМ-796 — среднемесячный ÷ **25,3** × % × дни БЕЗ воскресений и
праздников ст. 208 ТК, потолок 10 МРОТ, −10 п.п. сверх 77 дней, +20 п.п. льготникам (п. 16–19, 25, 26); делителя
365 нет. Земналог несельхоз — **абсолютные ставки за м²/га** по региону/зоне (ст. 429/437), процента и ×1,07 нет.
Штраф ст. 223 — 20% от **базы** (от налога — это ст. 224). Беспошлинный ввоз — $1000/500/300/200 в мес./100
(ПКМ-244), «50 кг» и EUR нет; с 01.01.2027 платёж 30%→20% (УП-174) — rollover. Тариф отопления 241,44 верен.

**Осторожно с циркулярными источниками:** по редким цифрам поиск первым результатом выдаёт сам calk.uz.
Так «подтверждался» выдуманный вычет 500 БРВ. Засчитывать только lex.uz/soliq.uz или отраслевые издания
(buxgalter.uz, kadrovik.uz, norma.uz, bss.uz, kadry.uz).

**Проза живёт отдельно от констант — это главный класс ошибок сайта.** Один факт лежит в пяти местах:
константа, компонент, статья, краткий ответ, worked example. Обход всех 196 страниц (август 2026) не нашёл
НИ ОДНОЙ ошибки в формулах — все находки были рассинхроном кода и текстов вокруг него. Транспортный налог
всплывал трижды в местах, куда не доехала предыдущая правка; тариф ОСАГО чинился в четыре захода.
**Меняете ставку — правьте все пять мест и добавьте строку «было → стало» в `scripts/check-stale-prose.mjs`.**

`npm run check:stale` ищет в прозе конкретные устаревшие значения (не сверяет с константами — производных
величин слишком много, тонет в шуме). Стоит блокирующим шагом в `.github/workflows/deploy.yml` до сборки.
Упал на легитимном историческом упоминании — сузьте запись полем `ctx`, не удаляйте её.

Monitored by DATA_HUB: Tier-1 weekly (`calk-uz-monitor-config.json`) + Tier-2 quarterly. **Числовые диффы
алерта — шум:** монитор сравнивает числа, найденные на странице-источнике, а не наши значения. Алерт =
повод перечитать константу, а не описание расхождения. Loop: alert → verify → fix `lib/constants` /
`lib/calculators` / прозу в `lib/data` → changelog в `updates.ts` → `npm run check:stale` → build → push.
Деплой идёт через GitHub Actions: push в `main` → сборка → снапшот в ветку `deploy` → Plesk подхватывает.

# Monetization (сайт + приложения) — не переоткрывать обследованием

Четыре канала, других (партнёрки/донаты/подписки) НЕТ намеренно. Стек общий с
флотом (US/AU/KZ); calk.uz был пилотом IAP.

- **Сайт — AdSense Auto Ads** (ручных слотов нет ни одного): грузится из
  `components/Monetization.tsx`, паблишер в `NEXT_PUBLIC_ADSENSE_ID`
  (CI vars), `public/ads.txt`. Consent — **Google CMP** (AdSense → Privacy &
  messaging), НЕ свой баннер: Consent Mode v2 дефолты регионально-скоупнуты
  (denied только EEA/UK/CH), «Настройки конфиденциальности» =
  `components/PrivacySettings.tsx` в футере. Самописный CookieConsent удалён
  2026-08 — он ничего не отключал. В нативных приложениях веб-AdSense глушится
  (`lib/platform.ts isNativeApp()`).
- **Приложения — AdMob** (баннер + интерстишл 4-я навигация/120с + rewarded):
  Android — `components/NativeAds.tsx` + `lib/rewarded.ts` (unit id в JS →
  меняются OTA без пересборки .aab); iOS — `ios-app/CalkUZ/AdMobManager.swift`
  (юниты в Swift). iOS-цепочка запуска: **UMP-консент → старт SDK → ATT →
  баннер** (`gatherConsentThenStart`); GDPR-сообщения ОПУБЛИКОВАНЫ 2026-08-26:
  AdSense «calk.uz — GDPR (EEA/UK/CH)» (сайт) и AdMob «Calk UZ - GDPR consent»
  (оба приложения), en+ru; Consent Mode флаги в AdSense включены на аккаунте.
- **Rewarded**: ролик → `REWARD_HOURS = 6` часов без рекламы (НЕ 24 — 24 в
  старых коммит-месседжах устарели). Гейт всей рекламы:
  `adsHidden() = isAdFree() || isTempAdFree()`.
- **IAP «Убрать рекламу»**: RevenueCat, продукт `uz.calk.calculator.removeads`
  (namespaced — голый `removeads` занят KZ на том же Apple team), entitlement
  `ad_free`, non-consumable. Android/веб — `lib/purchases.ts`, iOS —
  `PurchasesManager.swift`. **Фолбэк-цены платформ РАЗНЫЕ намеренно**
  (Play UZ — «$1.90»: Google ценит товар для Узбекистана в долларах, сумовой
  цены у Play нет; App Store UZ — «$1.99») — не «синхронизировать». 4 поверхности оффера: кнопка в мобильном меню
  (`RemoveAdsButton`), плашка (`RemoveAdsBar`), тост после 2-го интерстишла
  (`RemoveAdsToast`), футер (`RemoveAdsFooterLink`). Телеметрия воронки —
  `lib/telemetry.ts` → `/api/iap-telemetry` → DATA_HUB.
- **Нативные модули (AdMob/Purchases) едут ТОЛЬКО стор-билдом**, не OTA:
  все UI-поверхности гейтятся `purchasesAvailable()` /
  `isPluginAvailable("Purchases")`, чтобы в старых бинарях не было мёртвых кнопок.
- **App Privacy iOS**: источник истины `ios-app/CalkUZ/PrivacyInfo.xcprivacy`
  (tracking=true, IDFA) + актуальные ответы в
  `app-store-assets/privacy-and-ads.md`. `ios-review-notes.md` — исторический
  (сборка 1.0 без рекламы), для новых сабмитов НЕ использовать.
