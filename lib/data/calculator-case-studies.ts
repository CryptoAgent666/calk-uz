/**
 * Real-world example scenarios that go beyond a generic formula.
 * Adds unique editorial value vs. competitor sites — concrete numbers,
 * personas grounded in Uzbek labour and tax realities.
 *
 * Used to render a "Practical examples" section under the calculator UI for
 * priority-1 calculators.
 */

export interface CaseStudy {
  /** Persona / scenario title */
  titleRu: string
  titleUz: string
  /** Short context line shown under the title */
  contextRu: string
  contextUz: string
  /** Step-by-step calculation, ready for display as a definition list */
  stepsRu: { label: string; value: string }[]
  stepsUz: { label: string; value: string }[]
  /** Bottom-line takeaway / interpretation */
  conclusionRu: string
  conclusionUz: string
}

export interface CalculatorCaseStudies {
  slug: string
  /** Which year the cases were calibrated for — used in the "Updated for {year}" label */
  calibratedFor: string
  cases: CaseStudy[]
}

const CASE_STUDIES: CalculatorCaseStudies[] = [
  {
    slug: 'income-tax',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Айбек, разработчик в IT Park (Ташкент)',
        titleUz: 'Ayebek, IT Parkda dasturchi (Toshkent)',
        contextRu: 'Резидент IT Park, оклад 25 000 000 сум/мес, 2026 год',
        contextUz: "IT Park rezidenti, ish haqi oyiga 25 000 000 so'm, 2026-yil",
        stepsRu: [
          { label: 'Начисленная зарплата', value: '25 000 000 сум' },
          { label: 'НДФЛ (ставка IT Park 7,5%)', value: '1 875 000 сум' },
          { label: 'ИНПС (0,1%)', value: '25 000 сум' },
          { label: 'На руки', value: '23 100 000 сум' },
          { label: 'Экономия vs обычная ставка 12%', value: '1 125 000 сум/мес' },
        ],
        stepsUz: [
          { label: "Hisoblangan ish haqi", value: "25 000 000 so'm" },
          { label: "JShShS (IT Park stavkasi 7,5%)", value: "1 875 000 so'm" },
          { label: "IJPH (0,1%)", value: "25 000 so'm" },
          { label: "Qo'lga", value: "23 100 000 so'm" },
          { label: "Oddiy 12% stavka bilan farq", value: "1 125 000 so'm/oy" },
        ],
        conclusionRu:
          'За год экономия на льготной ставке IT Park составит 13,5 млн сум. Это эквивалент 14-й зарплаты у обычного работодателя.',
        conclusionUz:
          "Yiliga IT Park imtiyozli stavkasi tufayli tejamkorlik 13,5 mln so'mni tashkil etadi. Bu oddiy ish beruvchidagi 14-oylik ish haqiga teng.",
      },
      {
        titleRu: 'Зарифа, бухгалтер в ООО (Самарканд)',
        titleUz: 'Zarifa, MChJ buxgalteri (Samarqand)',
        contextRu: 'Не резидент IT Park, оклад 7 000 000 сум, 2 ребёнка',
        contextUz: "IT Park rezidenti emas, ish haqi 7 000 000 so'm, 2 ta bola",
        stepsRu: [
          { label: 'Начисленная зарплата', value: '7 000 000 сум' },
          { label: 'НДФЛ 12%', value: '840 000 сум' },
          { label: 'ИНПС 0,1%', value: '7 000 сум' },
          { label: 'На руки', value: '6 153 000 сум' },
          { label: 'Соцналог (платит работодатель, 12%)', value: '840 000 сум' },
        ],
        stepsUz: [
          { label: "Hisoblangan ish haqi", value: "7 000 000 so'm" },
          { label: "JShShS 12%", value: "840 000 so'm" },
          { label: "IJPH 0,1%", value: "7 000 so'm" },
          { label: "Qo'lga", value: "6 153 000 so'm" },
          { label: "Ijtimoiy soliq (ish beruvchi to'laydi, 12%)", value: "840 000 so'm" },
        ],
        conclusionRu:
          'Эффективная нагрузка на работодателя — 7 840 000 сум. Сотрудник может получить вычет за обучение детей (до 4,22 БРВ/год), подав декларацию через my.soliq.uz.',
        conclusionUz:
          "Ish beruvchining samarali yuklamasi 7 840 000 so'm. Xodim my.soliq.uz orqali deklaratsiya topshirib, bolalar ta'limi uchun chegirma olishi mumkin (yiliga 4,22 BHK gacha).",
      },
      {
        titleRu: 'Дилшод, фрилансер из Германии',
        titleUz: 'Dilshod, Germaniyadagi frilanser',
        contextRu: 'Нерезидент РУз, разовый доход 15 000 USD от узбекского заказчика',
        contextUz: "O'zbekiston norezidenti, o'zbek mijozdan 15 000 USD bir martalik daromad",
        stepsRu: [
          { label: 'Доход (~по курсу 12 700)', value: '190 500 000 сум' },
          { label: 'НДФЛ для нерезидента 20%', value: '38 100 000 сум' },
          { label: 'К получению', value: '152 400 000 сум' },
        ],
        stepsUz: [
          { label: "Daromad (~12 700 kursda)", value: "190 500 000 so'm" },
          { label: "Norezident JShShS 20%", value: "38 100 000 so'm" },
          { label: "Olinadigan summa", value: "152 400 000 so'm" },
        ],
        conclusionRu:
          'Если Дилшод вернётся на 183+ дней в Узбекистан, он станет резидентом и сможет вернуть переплату через декларацию.',
        conclusionUz:
          "Agar Dilshod O'zbekistonga 183+ kunga qaytsa, rezident bo'ladi va deklaratsiya orqali ortiqcha to'langan summani qaytarib olishi mumkin.",
      },
    ],
  },
  {
    slug: 'vat',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Розничная цена с НДС → цена без НДС',
        titleUz: 'Chakana QQS bilan narx → QQSsiz narx',
        contextRu: 'Партия товара 1 200 000 сум с НДС 12%, нужно посчитать «чистую» цену',
        contextUz: "1 200 000 so'm QQS 12% bilan tovar partiyasi, «toza» narxni hisoblash kerak",
        stepsRu: [
          { label: 'Цена с НДС', value: '1 200 000 сум' },
          { label: 'Сумма НДС (12 / 112)', value: '128 571 сум' },
          { label: 'Цена без НДС', value: '1 071 429 сум' },
          { label: 'Эффективная доля НДС', value: '10,71%' },
        ],
        stepsUz: [
          { label: "QQS bilan narx", value: "1 200 000 so'm" },
          { label: "QQS summasi (12 / 112)", value: "128 571 so'm" },
          { label: "QQSsiz narx", value: "1 071 429 so'm" },
          { label: "QQSning samarali ulushi", value: "10,71%" },
        ],
        conclusionRu:
          'Помните: при ставке 12% НДС не равен «12% от цены с НДС». Доля НДС в финальной цене — 10,71%.',
        conclusionUz:
          "Eslatma: 12% stavkada QQS «QQS bilan narxning 12%» ga teng emas. Yakuniy narxdagi QQS ulushi 10,71%.",
      },
      {
        titleRu: 'Импортёр электроники: расчёт зачёта',
        titleUz: 'Elektronika importyori: hisobga olish',
        contextRu: 'Закуплено товара на 500 млн (НДС включён). Реализовано на 800 млн (НДС включён).',
        contextUz: "500 mln (QQS kiritilgan) ga tovar sotib olindi. 800 mln (QQS kiritilgan) ga sotildi.",
        stepsRu: [
          { label: 'Входящий НДС (500 × 12 / 112)', value: '53 571 429 сум' },
          { label: 'Исходящий НДС (800 × 12 / 112)', value: '85 714 286 сум' },
          { label: 'НДС к уплате', value: '32 142 857 сум' },
          { label: 'Срок уплаты (квартал)', value: 'до 20-го числа след. месяца' },
        ],
        stepsUz: [
          { label: "Kirish QQS (500 × 12 / 112)", value: "53 571 429 so'm" },
          { label: "Chiqish QQS (800 × 12 / 112)", value: "85 714 286 so'm" },
          { label: "To'lanadigan QQS", value: "32 142 857 so'm" },
          { label: "To'lash muddati (chorak)", value: "keyingi oy 20-sanasigacha" },
        ],
        conclusionRu:
          'Без электронных счетов-фактур (faktura.soliq.uz) зачёт входящего НДС не предоставляется. Проверяйте статус контрагента в реестре.',
        conclusionUz:
          "Elektron hisob-fakturasiz (faktura.soliq.uz) kirish QQS hisobga olinmaydi. Kontragent statusini reestrda tekshiring.",
      },
    ],
  },
  {
    slug: 'salary',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Считаем «грязную» зарплату из «чистой»',
        titleUz: '«Brutto» ni «netto» dan hisoblash',
        contextRu: 'Сотрудник договорился на 10 000 000 сум на руки. Что должна указать бухгалтерия?',
        contextUz: "Xodim qo'lga 10 000 000 so'm ga kelishdi. Buxgalteriya nimani ko'rsatishi kerak?",
        stepsRu: [
          { label: 'Чистая зарплата (на руки)', value: '10 000 000 сум' },
          { label: 'Делитель (1 − 0,12 − 0,001)', value: '0,879' },
          { label: 'Начисленная зарплата', value: '11 376 564 сум' },
          { label: 'НДФЛ 12%', value: '1 365 188 сум' },
          { label: 'ИНПС 0,1%', value: '11 377 сум' },
          { label: 'Соцналог (12%, оплачивает работодатель)', value: '1 365 188 сум' },
          { label: 'Полная стоимость для работодателя', value: '12 741 752 сум' },
        ],
        stepsUz: [
          { label: "Sof ish haqi (qo'lga)", value: "10 000 000 so'm" },
          { label: "Bo'luvchi (1 − 0,12 − 0,001)", value: "0,879" },
          { label: "Hisoblangan ish haqi", value: "11 376 564 so'm" },
          { label: "JShShS 12%", value: "1 365 188 so'm" },
          { label: "IJPH 0,1%", value: "11 377 so'm" },
          { label: "Ijtimoiy soliq (12%, ish beruvchi)", value: "1 365 188 so'm" },
          { label: "Ish beruvchining to'liq xarajati", value: "12 741 752 so'm" },
        ],
        conclusionRu:
          'Работодатель тратит 12,7 млн, чтобы сотрудник получил 10 млн на руки. «Накладные» — 27,4% от чистой зарплаты.',
        conclusionUz:
          "Xodim qo'lga 10 mln olishi uchun ish beruvchi 12,7 mln sarflaydi. «Qo'shimcha» — sof ish haqining 27,4%.",
      },
    ],
  },
  {
    slug: 'mortgage',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Ипотека от Узпромстройбанка, новостройка',
        titleUz: 'O\'zsanoatqurilishbank ipotekasi, yangi qurilish',
        contextRu: 'Стоимость 1,5 млрд сум, 25% первый взнос, 20 лет, ставка 19% годовых',
        contextUz: "Narxi 1,5 mlrd so'm, 25% boshlang'ich, 20 yil, yillik 19% stavka",
        stepsRu: [
          { label: 'Стоимость квартиры', value: '1 500 000 000 сум' },
          { label: 'Первоначальный взнос (25%)', value: '375 000 000 сум' },
          { label: 'Сумма кредита', value: '1 125 000 000 сум' },
          { label: 'Ежемесячный платёж (аннуитет)', value: '~18 700 000 сум' },
          { label: 'Переплата за 20 лет', value: '~3 363 000 000 сум' },
          { label: 'ПСК (полная стоимость)', value: '~298,9%' },
        ],
        stepsUz: [
          { label: "Kvartira narxi", value: "1 500 000 000 so'm" },
          { label: "Boshlang'ich to'lov (25%)", value: "375 000 000 so'm" },
          { label: "Kredit summasi", value: "1 125 000 000 so'm" },
          { label: "Oylik to'lov (annuitet)", value: "~18 700 000 so'm" },
          { label: "20 yillik ortiqcha to'lov", value: "~3 363 000 000 so'm" },
          { label: "Kreditning to'liq qiymati", value: "~298,9%" },
        ],
        conclusionRu:
          'Молодая семья по программе «Ipoteka 7%» в этом же сценарии заплатит на ~9,5 млн сум/мес меньше. Проверьте, подходите ли вы под условия программы.',
        conclusionUz:
          "«Ipoteka 7%» dasturi bo'yicha xuddi shu stsenariyda yosh oila oyiga ~9,5 mln so'm kam to'laydi. Dastur shartlariga mosligingizni tekshiring.",
      },
    ],
  },
  {
    slug: 'credit',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Потребительский кредит на ремонт',
        titleUz: "Ta'mirlash uchun iste'mol krediti",
        contextRu: '50 000 000 сум, 24 месяца, ставка 26% годовых, аннуитет',
        contextUz: "50 000 000 so'm, 24 oy, yillik 26%, annuitet",
        stepsRu: [
          { label: 'Сумма кредита', value: '50 000 000 сум' },
          { label: 'Срок', value: '24 месяца' },
          { label: 'Ставка', value: '26% годовых' },
          { label: 'Ежемесячный платёж', value: '~2 706 000 сум' },
          { label: 'Общая выплата', value: '~64 944 000 сум' },
          { label: 'Переплата', value: '~14 944 000 сум' },
        ],
        stepsUz: [
          { label: "Kredit summasi", value: "50 000 000 so'm" },
          { label: "Muddat", value: "24 oy" },
          { label: "Stavka", value: "yillik 26%" },
          { label: "Oylik to'lov", value: "~2 706 000 so'm" },
          { label: "Umumiy to'lov", value: "~64 944 000 so'm" },
          { label: "Ortiqcha to'lov", value: "~14 944 000 so'm" },
        ],
        conclusionRu:
          'При досрочном погашении через 12 месяцев (выплата основного долга ~22 млн) экономия на процентах составит ~3,8 млн сум.',
        conclusionUz:
          "12 oydan keyin muddatidan oldin to'lashda (asosiy qarz ~22 mln) foizlardagi tejamkorlik ~3,8 mln so'm bo'ladi.",
      },
    ],
  },
  {
    slug: 'auto-credit',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Chevrolet Cobalt в кредит',
        titleUz: 'Chevrolet Cobalt kreditga',
        contextRu: '160 000 000 сум, 30% первый взнос, 5 лет, ставка 24% годовых',
        contextUz: "160 000 000 so'm, 30% boshlang'ich, 5 yil, yillik 24%",
        stepsRu: [
          { label: 'Стоимость авто', value: '160 000 000 сум' },
          { label: 'Первый взнос (30%)', value: '48 000 000 сум' },
          { label: 'Сумма кредита', value: '112 000 000 сум' },
          { label: 'Ежемесячный платёж', value: '~3 224 000 сум' },
          { label: 'Переплата', value: '~81 440 000 сум' },
          { label: 'ОСАГО за 5 лет (ориентир)', value: '~3 250 000 сум' },
        ],
        stepsUz: [
          { label: "Avto narxi", value: "160 000 000 so'm" },
          { label: "Boshlang'ich to'lov (30%)", value: "48 000 000 so'm" },
          { label: "Kredit summasi", value: "112 000 000 so'm" },
          { label: "Oylik to'lov", value: "~3 224 000 so'm" },
          { label: "Ortiqcha to'lov", value: "~81 440 000 so'm" },
          { label: "5 yillik OSAGO (taxminiy)", value: "~3 250 000 so'm" },
        ],
        conclusionRu:
          'Закладывайте в бюджет не только платёж, но и ОСАГО, ТО и налог на транспорт. Полная стоимость владения — на 6-8% выше платежа по кредиту.',
        conclusionUz:
          "Byudjetga faqat to'lovni emas, OSAGO, texnik ko'rik va transport solig'ini ham kiriting. Egalik qiymati kredit to'lovidan 6-8% yuqori.",
      },
    ],
  },
  {
    slug: 'deposit',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Срочный вклад с капитализацией',
        titleUz: 'Kapitalizatsiya bilan muddatli omonat',
        contextRu: '50 000 000 сум, 12 месяцев, 22% годовых, ежемесячная капитализация',
        contextUz: "50 000 000 so'm, 12 oy, yillik 22%, oylik kapitalizatsiya",
        stepsRu: [
          { label: 'Сумма вклада', value: '50 000 000 сум' },
          { label: 'Эффективная ставка', value: '~24,36% годовых' },
          { label: 'Сумма к возврату', value: '~62 178 000 сум' },
          { label: 'Доход за год', value: '~12 178 000 сум' },
        ],
        stepsUz: [
          { label: "Omonat summasi", value: "50 000 000 so'm" },
          { label: "Samarali stavka", value: "yillik ~24,36%" },
          { label: "Qaytariladigan summa", value: "~62 178 000 so'm" },
          { label: "Yillik daromad", value: "~12 178 000 so'm" },
        ],
        conclusionRu:
          'При той же ставке без капитализации доход составил бы 11 000 000 сум — капитализация даёт +1,18 млн.',
        conclusionUz:
          "Xuddi shu stavkada kapitalizatsiyasiz daromad 11 000 000 so'm bo'lardi — kapitalizatsiya +1,18 mln beradi.",
      },
    ],
  },
  {
    slug: 'currency-converter',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Перевод 5 000 USD в сум',
        titleUz: '5 000 USD ni so\'mga o\'tkazish',
        contextRu: 'Курс ЦБ vs курс банковского обмена (спред ~50 сум)',
        contextUz: "MB kursi vs bank ayirboshlash kursi (spread ~50 so'm)",
        stepsRu: [
          { label: 'Сумма USD', value: '5 000 USD' },
          { label: 'Курс ЦБ (на день расчёта)', value: '~12 700 сум' },
          { label: 'По курсу ЦБ', value: '~63 500 000 сум' },
          { label: 'По курсу банка (продажа)', value: '~63 250 000 сум' },
          { label: 'Потеря на спреде', value: '~250 000 сум' },
        ],
        stepsUz: [
          { label: "USD summasi", value: "5 000 USD" },
          { label: "MB kursi (hisoblash kunida)", value: "~12 700 so'm" },
          { label: "MB kursi bo'yicha", value: "~63 500 000 so'm" },
          { label: "Bank kursi bo'yicha (sotish)", value: "~63 250 000 so'm" },
          { label: "Spreddan yo'qotish", value: "~250 000 so'm" },
        ],
        conclusionRu:
          'Калькулятор использует свежий курс ЦБ (cbu.uz). Реальный курс в кассе банка отличается на 30-80 сум — закладывайте этот спред в крупные сделки.',
        conclusionUz:
          "Kalkulyator MB ning so'nggi kursini ishlatadi (cbu.uz). Bank kassasidagi haqiqiy kurs 30-80 so'mga farq qiladi — yirik bitimlarda bu spreadni hisobga oling.",
      },
    ],
  },
  {
    slug: 'customs',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Растаможка iPhone 17 из ОАЭ',
        titleUz: 'BAA dan iPhone 17 ni rasmiylashtirish',
        contextRu: 'Стоимость в ОАЭ 1 200 USD, ввоз для личного пользования',
        contextUz: "BAAdagi narxi 1 200 USD, shaxsiy foydalanish uchun olib kirish",
        stepsRu: [
          { label: 'Стоимость (по курсу 12 700)', value: '15 240 000 сум' },
          { label: 'Беспошлинный лимит (1 000 EUR)', value: '~13 700 000 сум' },
          { label: 'Сумма сверх лимита', value: '~1 540 000 сум' },
          { label: 'Пошлина 30% от превышения', value: '~462 000 сум' },
          { label: 'Итого ввезено', value: '~15 702 000 сум' },
        ],
        stepsUz: [
          { label: "Narxi (12 700 kursda)", value: "15 240 000 so'm" },
          { label: "Bojsiz limit (1 000 EUR)", value: "~13 700 000 so'm" },
          { label: "Limitdan ortiq summa", value: "~1 540 000 so'm" },
          { label: "Bojxona to'lovi 30% (limitdan ortig'idan)", value: "~462 000 so'm" },
          { label: "Jami olib kirilgan", value: "~15 702 000 so'm" },
        ],
        conclusionRu:
          'Если телефон ввезён авиапочтой, к пошлине добавляется НДС с цены по реестру + сборы курьерской службы.',
        conclusionUz:
          "Telefon havo pochtasi orqali kelgan bo'lsa, bojga reestr narxidan QQS va kuryer xizmati yig'imlari qo'shiladi.",
      },
    ],
  },
  {
    slug: 'utilities-total',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Стандартная семья из 4 человек, Ташкент, зимний месяц',
        titleUz: 'Standart 4 kishilik oila, Toshkent, qish oyi',
        contextRu: '70 м², газовое отопление, домашняя электроплита',
        contextUz: "70 m², gazli isitish, uy elektr plita",
        stepsRu: [
          { label: 'Электроэнергия (~280 кВт·ч)', value: '~118 000 сум' },
          { label: 'Газ (~210 м³)', value: '~85 000 сум' },
          { label: 'Холодная вода (~9 м³ × 4)', value: '~32 000 сум' },
          { label: 'Горячая вода (~3 м³ × 4)', value: '~36 000 сум' },
          { label: 'Вывоз мусора', value: '~28 000 сум' },
          { label: 'Итого за месяц', value: '~299 000 сум' },
        ],
        stepsUz: [
          { label: "Elektr (~280 kVt·s)", value: "~118 000 so'm" },
          { label: "Gaz (~210 m³)", value: "~85 000 so'm" },
          { label: "Sovuq suv (~9 m³ × 4)", value: "~32 000 so'm" },
          { label: "Issiq suv (~3 m³ × 4)", value: "~36 000 so'm" },
          { label: "Chiqindi olib chiqish", value: "~28 000 so'm" },
          { label: "Bir oyga jami", value: "~299 000 so'm" },
        ],
        conclusionRu:
          'В летние месяцы платёж снижается на 35-40% за счёт газа и горячей воды. Запасайте бюджет на пиковые январь-февраль.',
        conclusionUz:
          "Yoz oylarida to'lov gaz va issiq suv hisobiga 35-40% kamayadi. Eng yuqori yanvar-fevral uchun byudjetni rejalashtiring.",
      },
    ],
  },
  {
    slug: 'brv',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'Расчёт лимитов в БРВ',
        titleUz: 'BHK dagi limitlarni hisoblash',
        contextRu: 'БРВ с августа 2025 = 412 000 сум',
        contextUz: "2025-yil avgustdan BHK = 412 000 so'm",
        stepsRu: [
          { label: 'Беспошлинный ввоз товаров (1 БРВ × 8)', value: '3 296 000 сум' },
          { label: 'Имущественный вычет (500 БРВ)', value: '206 000 000 сум' },
          { label: 'Освобождение от НДФЛ матпомощи (4,22 БРВ)', value: '1 738 640 сум' },
          { label: 'Порог обязательной регистрации НДС (60 000 БРВ)', value: '24 720 000 000 сум' },
        ],
        stepsUz: [
          { label: "Bojsiz olib kirish (1 BHK × 8)", value: "3 296 000 so'm" },
          { label: "Mulkiy chegirma (500 BHK)", value: "206 000 000 so'm" },
          { label: "Moddiy yordam JShShSdan ozod (4,22 BHK)", value: "1 738 640 so'm" },
          { label: "QQS majburiy ro'yxatga olish chegarasi (60 000 BHK)", value: "24 720 000 000 so'm" },
        ],
        conclusionRu:
          'БРВ пересматривается ежегодно. Все лимиты, привязанные к БРВ, автоматически растут вместе с её увеличением.',
        conclusionUz:
          "BHK har yili qayta ko'rib chiqiladi. BHK ga bog'langan barcha limitlar uning oshishi bilan avtomatik ravishda o'sadi.",
      },
    ],
  },
  {
    slug: 'osago',
    calibratedFor: '2026',
    cases: [
      {
        titleRu: 'ОСАГО для опытного водителя в Ташкенте',
        titleUz: "Toshkentdagi tajribali haydovchi uchun OSAGO",
        contextRu: 'Легковой автомобиль, КБМ 0,9 (без ДТП 5+ лет)',
        contextUz: "Yengil avtomobil, KBM 0,9 (5+ yil baxtsiz hodisasiz)",
        stepsRu: [
          { label: 'Базовая ставка', value: '~620 000 сум' },
          { label: 'Коэффициент региона (Ташкент)', value: '×1,2' },
          { label: 'Коэффициент мощности (1.4-1.6 л)', value: '×1,1' },
          { label: 'Коэффициент бонус-малус (КБМ)', value: '×0,9' },
          { label: 'Итоговая премия', value: '~736 000 сум' },
        ],
        stepsUz: [
          { label: "Bazaviy stavka", value: "~620 000 so'm" },
          { label: "Hudud koeffitsienti (Toshkent)", value: "×1,2" },
          { label: "Quvvat koeffitsienti (1.4-1.6 l)", value: "×1,1" },
          { label: "Bonus-malus koeffitsienti (KBM)", value: "×0,9" },
          { label: "Yakuniy mukofot", value: "~736 000 so'm" },
        ],
        conclusionRu:
          'После каждого года без ДТП КБМ снижается на 5%. После 10 лет аккуратной езды экономия достигнет 50% от базы.',
        conclusionUz:
          "Baxtsiz hodisasiz har yildan keyin KBM 5% ga kamayadi. 10 yillik ehtiyotkor haydashdan keyin tejamkorlik bazadan 50% ga yetadi.",
      },
    ],
  },
]

export function getCaseStudies(slug: string): CalculatorCaseStudies | null {
  return CASE_STUDIES.find((c) => c.slug === slug) ?? null
}

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug)
