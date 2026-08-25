/**
 * Quick Answer / TL;DR blocks — 1-3 sentence summaries optimized for
 * AI search citation (ChatGPT, Perplexity, Google AI Overviews).
 *
 * Format: direct answer to the most common user query about the calculator,
 * with concrete numbers and current-year currency.
 *
 * Rendered as a prominent block above the long-form article.
 */

export interface QuickAnswer {
  slug: string
  /** Russian — 1-3 sentences, hardened numbers, no marketing fluff */
  textRu: string
  /** Uzbek — independent localization, not literal translation */
  textUz: string
}

const QUICK_ANSWERS: QuickAnswer[] = [
  {
    slug: 'income-tax',
    textRu:
      'НДФЛ в Узбекистане в 2026 году — 12% от начисленной зарплаты, в том числе для нерезидентов (7,5% для резидентов IT Park). Дополнительно удерживается 0,1% ИНПС на персональный пенсионный счёт. Итого с зарплаты удерживается 12,1%, на руки работник получает 87,9%.',
    textUz:
      "2026-yilda O'zbekistonda JShShS — hisoblangan ish haqining 12%, shu jumladan norezidentlar uchun ham (IT Park rezidentlari uchun 7,5%). Qo'shimcha 0,1% IJPH shaxsiy pensiya hisobiga ushlab qolinadi. Jami ish haqidan 12,1% ushlanadi, xodim qo'liga 87,9% oladi.",
  },
  {
    slug: 'vat',
    textRu:
      'Ставка НДС в Узбекистане — 12%, одна из самых низких в СНГ. Для выделения НДС из суммы с НДС: сумма × 12 / 112. Для начисления НДС на сумму без НДС: сумма × 12%. Обязательная регистрация плательщиком НДС — при совокупном доходе за налоговый период свыше 12 000 БРВ (4 944 000 000 сум).',
    textUz:
      "O'zbekistonda QQS stavkasi — 12%, MDHdagi eng past stavkalardan biri. QQS bilan summadan QQS ajratish: summa × 12 / 112. QQSsiz summaga QQS qo'shish: summa × 12%. QQS to'lovchisi sifatida majburiy ro'yxatga olish — soliq davri uchun umumiy daromad 12 000 BHK (4 944 000 000 so'm) dan oshganda.",
  },
  {
    slug: 'salary',
    textRu:
      'Зарплата «на руки» в Узбекистане = начисленная × 0,879 (для IT Park × 0,924). Из зарплаты удерживается НДФЛ 12% и ИНПС 0,1%. Работодатель сверх зарплаты платит соцналог 12% (25% для бюджетных организаций), что увеличивает полную стоимость сотрудника на 12%.',
    textUz:
      "O'zbekistonda «qo'lga» ish haqi = hisoblangan × 0,879 (IT Park uchun × 0,924). Ish haqidan JShShS 12% va IJPH 0,1% ushlanadi. Ish beruvchi ish haqi ustiga ijtimoiy soliq 12% to'laydi (byudjet tashkilotlari uchun 25%), bu xodimning to'liq qiymatini 12% ga oshiradi.",
  },
  {
    slug: 'mortgage',
    textRu:
      'Ставки по ипотеке в Узбекистане в 2026 году: 17–23% годовых в коммерческих банках, 7% по госпрограмме «Ipoteka 7%» для молодых семей. Первоначальный взнос — от 15%, срок — до 20 лет. Ежемесячный платёж по аннуитету = Сумма × i / (1 − (1 + i)⁻ⁿ).',
    textUz:
      "2026-yilda O'zbekistonda ipoteka stavkalari: tijorat banklarda yillik 17–23%, yosh oilalar uchun davlat «Ipoteka 7%» dasturida 7%. Boshlang'ich to'lov — 15% dan, muddat — 20 yilgacha. Annuitet bo'yicha oylik to'lov = Summa × i / (1 − (1 + i)⁻ⁿ).",
  },
  {
    slug: 'credit',
    textRu:
      'Ставки по потребительским кредитам в банках Узбекистана в 2026 году — 22–28% годовых в сумах. Аннуитетный платёж рассчитывается по формуле P = S × i / (1 − (1 + i)⁻ⁿ), где S — сумма кредита, i — месячная ставка, n — срок в месяцах. Дифференцированный платёж снижается каждый месяц.',
    textUz:
      "2026-yilda O'zbekiston banklarida iste'mol kredit stavkalari — so'mda yillik 22–28%. Annuitet to'lov P = S × i / (1 − (1 + i)⁻ⁿ) formulasi bo'yicha hisoblanadi, bu yerda S — kredit summasi, i — oylik stavka, n — oylar bo'yicha muddat. Differensial to'lov har oy kamayadi.",
  },
  {
    slug: 'deposit',
    textRu:
      'Ставки по сумовым вкладам в банках Узбекистана в 2026 году — 18–22,5% годовых, валютные (USD) — 4–6%. С капитализацией процентов эффективная ставка выше номинальной: при 22% с ежемесячной капитализацией эффективная ставка ~24,4%. Расчёт: FV = PV × (1 + r/n)^(n·t).',
    textUz:
      "2026-yilda O'zbekiston banklarida so'mdagi omonatlar stavkalari — yillik 18–22,5%, valyutaviy (USD) — 4–6%. Foizlarning kapitalizatsiyasi bilan samarali stavka nominalidan yuqori: 22% da oylik kapitalizatsiya bilan samarali stavka ~24,4%. Hisoblash: FV = PV × (1 + r/n)^(n·t).",
  },
  {
    slug: 'auto-credit',
    textRu:
      'Автокредит в Узбекистане в 2026: ставка 22–26% годовых, первый взнос 20–30%, срок 3–7 лет. Дополнительно: ОСАГО (от 160 000 сум/год), налог на транспорт (от 1 БРВ в год). На Chevrolet Cobalt за 160 млн сум при 30% взносе и 5 годах кредита ежемесячный платёж составит ~3,2 млн сум.',
    textUz:
      "2026-yilda O'zbekistonda avtokredit: stavka yillik 22–26%, boshlang'ich to'lov 20–30%, muddat 3–7 yil. Qo'shimcha: OSAGO (yiliga 160 000 so'm dan), transport solig'i (yiliga 1 BHK dan). 160 mln so'mdagi Chevrolet Cobalt uchun 30% to'lov va 5 yil kreditda oylik to'lov ~3,2 mln so'm bo'ladi.",
  },
  {
    slug: 'currency-converter',
    textRu:
      'Курс ЦБ Узбекистана на 1 мая 2026: 1 USD = 11 938 сум, 1 EUR ≈ 13 100 сум, 1 RUB ≈ 145 сум. Курсы обновляются ежедневно с сайта cbu.uz. Реальный курс в кассе банка отличается от курса ЦБ на 30–80 сум за счёт спреда — закладывайте это при крупных операциях.',
    textUz:
      "2026-yil 1-mayda O'zbekiston MB kursi: 1 USD = 11 938 so'm, 1 EUR ≈ 13 100 so'm, 1 RUB ≈ 145 so'm. Kurslar har kuni cbu.uz dan yangilanadi. Bank kassasidagi haqiqiy kurs MB kursidan spread hisobiga 30–80 so'mga farq qiladi — yirik operatsiyalarda buni hisobga oling.",
  },
  {
    slug: 'utilities-total',
    textRu:
      'Коммунальные услуги в Узбекистане для семьи из 4 человек в Ташкенте (квартира 70 м²) в 2026: зимой ~300 000 сум/мес, летом ~180 000 сум/мес. Электричество — 650–2 200 сум/кВт·ч (по тарифным ступеням), газ — 1 100–3 300 сум/м³, холодная вода — 3 808 сум/м³.',
    textUz:
      "2026-yilda O'zbekistonda Toshkentdagi 4 kishilik oila uchun (70 m² kvartira) kommunal xizmatlar: qishda ~300 000 so'm/oy, yozda ~180 000 so'm/oy. Elektr — 650–2 200 so'm/kVt·s (tarif bosqichlari bo'yicha), gaz — 1 100–3 300 so'm/m³, sovuq suv — 3 808 so'm/m³.",
  },
  {
    slug: 'customs',
    textRu:
      'Растаможка автомобиля в Узбекистане в 2026: таможенная пошлина — процент от стоимости плюс надбавка за см³ объёма двигателя: до 1 года 15% + 0,4–1,0 USD/см³, от 1 до 3 лет 30% + 1,8–3,0, старше 3 лет 40% + 3,0. Отдельного акциза на легковые авто нет. Сверх этого — НДС 12% и утильсбор 6–137 БРВ. Электромобили — 0% пошлины и акциза до 1 января 2030 года (утильсбор платится). На авто $20 000 с двигателем 2 000 см³ — ~$11 000 дополнительно к цене.',
    textUz:
      "2026-yilda O'zbekistonda avtomobilni bojxonadan o'tkazish: bojxona boji — narxdan foiz va dvigatel hajmining har bir sm³ i uchun ustama: 1 yilgacha 15% + 0,4–1,0 USD/sm³, 1 yildan 3 yilgacha 30% + 1,8–3,0, 3 yildan katta 40% + 3,0. Yengil avtomobillarga alohida aksiz yo'q. Bundan tashqari — QQS 12% va utilizatsiya yig'imi 6–137 BHK. Elektromobillar — 2030-yil 1-yanvarigacha 0% boj va aksiz (utilizatsiya yig'imi to'lanadi). 2 000 sm³ dvigatelli $20 000 avto uchun — narxga qo'shimcha ~$11 000.",
  },
  {
    slug: 'brv',
    textRu:
      'БРВ (Базовая расчётная величина) в Узбекистане с августа 2025 года — 412 000 сум; с 1 сентября 2026 года повышается до 440 000 сум (Указ ПФ-115). Используется для расчёта государственных пошлин, штрафов и налоговых порогов. Например: регистрация ООО — 5 БРВ, порог обязательной регистрации по НДС — 12 000 БРВ. Льготы по НДФЛ считаются не в БРВ, а в МРОТ (1 271 000 сум).',
    textUz:
      "O'zbekistonda BHK (Bazaviy hisoblash kattaligi) 2025-yil avgustdan — 412 000 so'm; 2026-yil 1-sentabrdan 440 000 so'mgacha oshiriladi (PF-115 Farmoni). Davlat bojlari, jarimalar va soliq chegaralarini hisoblash uchun ishlatiladi. Masalan: MChJ ro'yxatdan o'tkazish — 5 BHK, QQS bo'yicha majburiy ro'yxatdan o'tish chegarasi — 12 000 BHK. JShShS imtiyozlari esa BHK da emas, MIH da (1 271 000 so'm) hisoblanadi.",
  },
  {
    slug: 'osago',
    textRu:
      'ОСАГО в Узбекистане в 2026 году: 192 000 сум — Ташкент с ограниченным кругом водителей, 384 000 — без ограничений, 160 000/320 000 — для других регионов. Лимит выплаты — 80 млн сум. КБМ (бонус-малус): 0,9× при безаварийной езде, 1,7× при 3+ ДТП.',
    textUz:
      "2026-yilda O'zbekistonda OSAGO: Toshkentda cheklangan haydovchilar doirasida — 192 000 so'm, cheksiz — 384 000, boshqa hududlarda — 160 000/320 000. To'lov chegarasi — 80 mln so'm. KBM (bonus-malus): baxtsiz hodisasiz haydashda 0,9×, 3+ baxtsiz hodisada 1,7×.",
  },
  {
    slug: 'vehicle-tax',
    textRu:
      'Ежегодного транспортного налога в Узбекистане нет: перечень налогов в статье 17 Налогового кодекса закрытый, транспортного среди них не значится. Владелец платит разово при постановке на учёт — 13,04 БРВ (5 372 480 сум) с новыми номерами: регистрация 6,84 БРВ, техпаспорт 0,7 БРВ, номера 5,5 БРВ. Со своими номерами — 7,54 БРВ. Сроки 15 апреля и 15 октября относятся к налогу на имущество и земельному, а не к автомобилю.',
    textUz:
      "O'zbekistonda yillik transport solig'i yo'q: Soliq kodeksining 17-moddasidagi soliqlar ro'yxati yopiq va transport solig'i unda yo'q. Egasi hisobga qo'yishda bir marta to'laydi — yangi raqam bilan 13,04 BHM (5 372 480 so'm): ro'yxatga olish 6,84 BHM, texpasport 0,7 BHM, raqamlar 5,5 BHM. O'z raqamlari bilan — 7,54 BHM. 15-aprel va 15-oktabr muddatlari mol-mulk va yer solig'iga tegishli, avtomobilga emas.",
  },
  {
    slug: 'property-tax',
    textRu:
      'Налог на имущество физлиц в Узбекистане: жильё до 200 м² — 0,36%, 200–500 м² — 0,48%, свыше 500 м² — 0,64% от кадастровой стоимости (ставки на 2026 год с индексацией +7%). Для юридических лиц — 1,5%. Уплата — равными долями до 15 апреля и 15 октября текущего года.',
    textUz:
      "O'zbekistonda jismoniy shaxslar mulk solig'i: 200 m² gacha uy-joy — 0,36%, 200–500 m² — 0,48%, 500 m² dan ortiq — 0,64% kadastr qiymatidan (2026-yil uchun +7% indeksatsiya bilan). Yuridik shaxslar uchun — 1,5%. To'lov — joriy yilning 15-aprel va 15-oktabrigacha teng ulushlarda.",
  },
  {
    slug: 'corporate-tax',
    textRu:
      'Налог на прибыль в Узбекистане для ООО и АО — 15% от чистой прибыли. Дополнительно: НДС 12% (если плательщик), социальный налог 12% от ФОТ. ИП на упрощённой системе платит налог с оборота 1% вместо налога на прибыль.',
    textUz:
      "O'zbekistonda MChJ va AJ uchun foyda solig'i — sof foydaning 15%. Qo'shimcha: QQS 12% (to'lovchi bo'lsa), ish haqi fondidan ijtimoiy soliq 12%. Soddalashtirilgan tizimdagi YaTT foyda solig'i o'rniga aylanma solig'ini 1% stavkada to'laydi.",
  },
  {
    slug: 'self-employed',
    textRu:
      'С 2026 года самозанятые в Узбекистане платят налог 1% с оборота через приложение Soliq.uz. Регистрация бесплатная, без поездок в налоговую. Прежний лимит 100 млн сум отменён, но доход должен оставаться в пределах порога налога с оборота — 12 000 БРВ (4 944 000 000 сум) за налоговый период; сверх него нужно переходить на НДС и налог на прибыль. Социальный налог не платится. Декларации — автоматически. Подходит для фрилансеров, репетиторов, частных мастеров.',
    textUz:
      "2026-yildan O'zbekistondagi o'z-o'zini band qilganlar Soliq.uz ilovasi orqali aylanmadan 1% soliq to'laydilar. Ro'yxatga olish bepul, soliq idorasiga borishsiz. Avvalgi 100 mln so'mlik limit bekor qilindi, lekin daromad aylanma solig'i chegarasi — soliq davri uchun 12 000 BHK (4 944 000 000 so'm) doirasida qolishi kerak; undan oshsa QQS va foyda solig'iga o'tish kerak. Ijtimoiy soliq to'lanmaydi. Deklaratsiyalar — avtomatik. Frilanserlar, repetitorlar, xususiy ustalar uchun mos.",
  },
  {
    slug: 'vacation-pay',
    textRu:
      'Отпускные в Узбекистане рассчитываются по среднедневному заработку за 12 месяцев: Заработок за 12 мес ÷ 247 рабочих дней × Дней отпуска. Из суммы удерживается НДФЛ 12%. Стандартный отпуск — 21 рабочий день, плюс дополнительные дни за стаж и вредные условия труда.',
    textUz:
      "O'zbekistonda ta'til puli 12 oylik o'rtacha kunlik ish haqi bo'yicha hisoblanadi: 12 oylik ish haqi ÷ 247 ish kuni × Ta'til kunlari. Summadan JShShS 12% ushlab qolinadi. Standart ta'til — 21 ish kuni, ortiqcha stajga va zararli mehnat sharoitlariga qo'shimcha kunlar.",
  },
  {
    slug: 'maternity',
    textRu:
      'Декретное пособие в Узбекистане с 2026 года выплачивает Фонд госсоцстрахования. Минимум 10 месяцев страхового стажа. Размер: 75% при стаже 10–24 мес, 85% при 25–60 мес, 100% при стаже от 61 мес. Длительность: 70 дней до родов + 56 после (70 при осложнениях или двойне). НДФЛ не удерживается.',
    textUz:
      "2026-yildan O'zbekistonda dekret nafaqasini Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Minimum 10 oy sug'urta staji. Miqdori: 10–24 oy stajda 75%, 25–60 oyda 85%, 61 oydan ortiqda 100%. Davomiyligi: tug'ruq oldidan 70 kun + tug'ruqdan keyin 56 (asoratlar yoki egizaklarda 70). JShShS ushlab qolinmaydi.",
  },
  {
    slug: 'sick-leave',
    textRu:
      'Больничный в Узбекистане с 2026 года выплачивает Фонд госсоцстрахования. Минимум 6 месяцев страхового стажа. Размер: 60% при стаже до 5 лет, 80% при 5–8 годах, 100% при стаже от 8 лет. Расчёт по среднему заработку за 12 месяцев в календарных днях.',
    textUz:
      "2026-yildan O'zbekistonda kasallik varaqasini Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Minimum 6 oy sug'urta staji. Miqdori: 5 yilgacha stajda 60%, 5–8 yilda 80%, 8 yildan ortiqda 100%. Hisoblash 12 oy o'rtacha ish haqi bo'yicha kalendar kunlarida.",
  },
  {
    slug: 'pension',
    textRu:
      'Пенсионный возраст в Узбекистане: мужчины — 60 лет (стаж от 25 лет), женщины — 55 лет (стаж от 20 лет). Размер пенсии = 55% от среднего заработка за лучшие 5 лет + 1% за каждый год стажа сверх минимума (макс 75%). Льготные категории: шахтёры, химики — раньше.',
    textUz:
      "O'zbekistonda pensiya yoshi: erkaklar — 60 yosh (25 yildan ortiq staj), ayollar — 55 yosh (20 yildan ortiq staj). Pensiya miqdori = eng yaxshi 5 yillik o'rtacha ish haqining 55% + minimumdan ortiq har yillik staj uchun 1% (maks 75%). Imtiyozli toifalar: shaxtyorlar, kimyogarlar — erta.",
  },
]

export function getQuickAnswer(slug: string): QuickAnswer | undefined {
  return QUICK_ANSWERS.find((q) => q.slug === slug)
}

export const QUICK_ANSWER_SLUGS = QUICK_ANSWERS.map((q) => q.slug)
