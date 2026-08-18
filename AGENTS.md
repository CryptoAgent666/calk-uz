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

### State as of 2026-08-18 (ledger 161: 136 current · 3 uncertain · 6 removed · 16 unverified-market)
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
**1 БРВ** без предупреждения (ст. 135-1), госпошлина иск 4% гражд. / 2% эконом., брак 0,2 БРВ.

**Removed as non-existent:** транспортный налог (нет в ст. 17 НК — была белорусская норма), «имущественный
вычет 500 БРВ при покупке жилья», порог «100 млрд» для ежемесячной отчётности по НДС.

**Still open (`uncertain`, 3):** делитель среднедневного заработка `calendarDaysIn12Months=365` в
`social.ts` (текст прил. 4 ПКМ-796 только на узбекском, lex.uz не отдаётся WebFetch/r.jina.ai; вторичные
источники расходятся — 25,3 рабочих дня vs календарная база); `calculateLandTax.NON_AGRICULTURAL_RATE`
(0.012, инлайн в tax.ts); `STATE_DUTY_RECEIPT_VALIDITY` (3 месяца). 16 `unverified` — рыночные, не
регуляторные (топливо, курсы банков, визы, свадьбы).

**Осторожно с циркулярными источниками:** по редким цифрам поиск первым результатом выдаёт сам calk.uz.
Так «подтверждался» выдуманный вычет 500 БРВ. Засчитывать только lex.uz/soliq.uz или отраслевые издания
(buxgalter.uz, kadrovik.uz, norma.uz, bss.uz, kadry.uz).

Monitored by DATA_HUB: Tier-1 weekly (`calk-uz-monitor-config.json`) + Tier-2 quarterly. **Числовые диффы
алерта — шум:** монитор сравнивает числа, найденные на странице-источнике, а не наши значения. Алерт =
повод перечитать константу, а не описание расхождения. Loop: alert → verify → fix `lib/constants` /
`lib/calculators` / прозу в `lib/data` → changelog в `updates.ts` → build → push (Plesk автодеплой).
