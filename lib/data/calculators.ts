import type { CalculatorMeta } from '@/lib/types/calculator'

export const CALCULATORS: CalculatorMeta[] = [
  // =============================================
  // TAX (10)
  // =============================================
  {
    slug: 'income-tax',
    titleRu: 'Калькулятор НДФЛ',
    titleUz: 'JSHSHS kalkulyatori',
    descriptionRu:
      'Рассчитайте налог на доходы физических лиц в Узбекистане. Учитывает ставку 12% и льготы для резидентов IT Park.',
    descriptionUz:
      "O'zbekistonda jismoniy shaxslarning daromad solig'ini hisoblang. 12% stavka va IT Park rezidentlari uchun imtiyozlarni hisobga oladi.",
    category: 'tax',
    icon: 'Calculator',
    keywords: ['НДФЛ', 'подоходный налог', 'JSHSHS', 'daromad solig\'i', 'income tax'],
    priority: 1,
  },
  {
    slug: 'vat',
    titleRu: 'Калькулятор НДС',
    titleUz: 'QQS kalkulyatori',
    descriptionRu:
      'Выделите или начислите НДС 12%. Быстрый расчёт суммы налога на добавленную стоимость для любых сумм.',
    descriptionUz:
      "QQS 12% ni ajratib oling yoki hisoblang. Har qanday summa uchun qo'shilgan qiymat solig'ini tez hisoblash.",
    category: 'tax',
    icon: 'Percent',
    keywords: ['НДС', 'QQS', 'налог на добавленную стоимость', 'VAT', '12%'],
    priority: 1,
  },
  {
    slug: 'vat-threshold',
    titleRu: 'Порог НДС',
    titleUz: 'QQS chegarasi',
    descriptionRu:
      'Проверьте, достигла ли ваша выручка порога для обязательной постановки на учёт по НДС в Узбекистане.',
    descriptionUz:
      "Daromadingiz O'zbekistonda QQS bo'yicha majburiy ro'yxatga olish chegarasiga yetganligini tekshiring.",
    category: 'tax',
    icon: 'TrendingUp',
    keywords: ['порог НДС', 'QQS chegarasi', 'регистрация НДС', 'оборот'],
    priority: 2,
  },
  {
    slug: 'property-tax',
    titleRu: 'Налог на имущество',
    titleUz: "Mol-mulk solig'i",
    descriptionRu:
      'Рассчитайте налог на имущество физических и юридических лиц. Учитывает площадь, кадастровую стоимость и тип объекта.',
    descriptionUz:
      "Jismoniy va yuridik shaxslarning mol-mulk solig'ini hisoblang. Maydon, kadastr qiymati va obyekt turini hisobga oladi.",
    category: 'tax',
    icon: 'Building2',
    keywords: ['налог на имущество', 'mol-mulk solig\'i', 'property tax', 'кадастровая стоимость'],
    priority: 2,
  },
  {
    slug: 'land-tax',
    titleRu: 'Земельный налог',
    titleUz: "Yer solig'i",
    descriptionRu:
      'Рассчитайте земельный налог для участков в Узбекистане. Учитывает категорию земли, площадь и местоположение.',
    descriptionUz:
      "O'zbekistondagi yer uchastkalar uchun yer solig'ini hisoblang. Yer toifasi, maydoni va joylashuvini hisobga oladi.",
    category: 'tax',
    icon: 'MapPin',
    keywords: ['земельный налог', 'yer solig\'i', 'land tax', 'участок'],
    priority: 2,
  },
  {
    slug: 'vehicle-tax',
    titleRu: 'Транспортный налог',
    titleUz: "Transport solig'i",
    descriptionRu:
      'Рассчитайте транспортный налог на автомобиль в Узбекистане. Зависит от объёма двигателя и года выпуска.',
    descriptionUz:
      "O'zbekistonda avtomobil uchun transport solig'ini hisoblang. Dvigatel hajmi va ishlab chiqarilgan yiliga bog'liq.",
    category: 'tax',
    icon: 'Car',
    keywords: ['транспортный налог', 'transport solig\'i', 'vehicle tax', 'автомобильный налог'],
    priority: 2,
  },
  {
    slug: 'corporate-tax',
    titleRu: 'Налог на прибыль',
    titleUz: "Foyda solig'i",
    descriptionRu:
      'Рассчитайте налог на прибыль предприятия. Ставка 15% с учётом вычетов и льгот для бизнеса в Узбекистане.',
    descriptionUz:
      "Korxona foyda solig'ini hisoblang. O'zbekistonda biznes uchun chegirmalar va imtiyozlarni hisobga olgan holda 15% stavka.",
    category: 'tax',
    icon: 'Building',
    keywords: ['налог на прибыль', 'foyda solig\'i', 'corporate tax', '15%'],
    priority: 2,
  },
  {
    slug: 'tax-penalty',
    titleRu: 'Пени по налогам',
    titleUz: 'Soliq peniyasi',
    descriptionRu:
      'Рассчитайте пени за просрочку уплаты налогов. На основе ставки рефинансирования ЦБ Узбекистана.',
    descriptionUz:
      "Soliq to'lash muddati o'tganligi uchun peniyani hisoblang. O'zbekiston Markaziy banki qayta moliyalashtirish stavkasi asosida.",
    category: 'tax',
    icon: 'AlertTriangle',
    keywords: ['пени', 'peniya', 'штраф', 'просрочка налогов', 'tax penalty'],
    priority: 2,
  },
  {
    slug: 'self-employed',
    titleRu: 'Налог самозанятых',
    titleUz: "O'z-o'zini band qilganlar solig'i",
    descriptionRu:
      'Рассчитайте налоги для самозанятых в Узбекистане. Фиксированная ставка и упрощённая отчётность.',
    descriptionUz:
      "O'zbekistonda o'z-o'zini band qilganlar uchun soliqlarni hisoblang. Belgilangan stavka va soddalashtirilgan hisobot.",
    category: 'tax',
    icon: 'UserCheck',
    keywords: ['самозанятый', 'o\'z-o\'zini band qilgan', 'self-employed', 'фриланс'],
    priority: 2,
  },
  {
    slug: 'turnover-tax',
    titleRu: 'Налог с оборота',
    titleUz: "Aylanma solig'i",
    descriptionRu:
      'Рассчитайте налог с оборота для предприятий на упрощённой системе налогообложения. Ставка 4%.',
    descriptionUz:
      "Soddalashtirilgan soliq tizimidagi korxonalar uchun aylanma solig'ini hisoblang. 4% stavka.",
    category: 'tax',
    icon: 'RefreshCw',
    keywords: ['налог с оборота', 'aylanma solig\'i', 'turnover tax', 'упрощёнка', '4%'],
    priority: 2,
  },

  // =============================================
  // SALARY (8)
  // =============================================
  {
    slug: 'salary',
    titleRu: 'Зарплатный калькулятор',
    titleUz: 'Ish haqi kalkulyatori',
    descriptionRu:
      'Рассчитайте зарплату «на руки» или «грязными». Учитывает НДФЛ, ИНПС и все обязательные отчисления в Узбекистане.',
    descriptionUz:
      "\"Qo'lga\" yoki \"yalpi\" ish haqini hisoblang. O'zbekistondagi JSHSHS, INPS va barcha majburiy ajratmalarni hisobga oladi.",
    category: 'salary',
    icon: 'Wallet',
    keywords: ['зарплата', 'ish haqi', 'salary', 'НДФЛ', 'на руки', 'нетто', 'брутто'],
    priority: 1,
  },
  {
    slug: 'vacation-pay',
    titleRu: 'Отпускные',
    titleUz: "Ta'til puli",
    descriptionRu:
      'Рассчитайте сумму отпускных выплат. Учитывает средний заработок, стаж и количество дней отпуска.',
    descriptionUz:
      "Ta'til to'lovlari summasini hisoblang. O'rtacha ish haqi, ish staji va ta'til kunlari sonini hisobga oladi.",
    category: 'salary',
    icon: 'Palmtree',
    keywords: ['отпускные', 'ta\'til puli', 'vacation pay', 'отпуск', 'средний заработок'],
    priority: 1,
  },
  {
    slug: 'sick-leave',
    titleRu: 'Больничный',
    titleUz: 'Kasallik varaqasi',
    descriptionRu:
      'Рассчитайте оплату больничного листа. Зависит от стажа работы и среднего заработка сотрудника.',
    descriptionUz:
      "Kasallik varaqasi to'lovini hisoblang. Xodimning ish staji va o'rtacha ish haqiga bog'liq.",
    category: 'salary',
    icon: 'Thermometer',
    keywords: ['больничный', 'kasallik varaqasi', 'sick leave', 'временная нетрудоспособность'],
    priority: 2,
  },
  {
    slug: 'maternity',
    titleRu: 'Декретные',
    titleUz: "Tug'ruq ta'tili",
    descriptionRu:
      'Рассчитайте декретные выплаты и пособие по беременности и родам. Учитывает стаж и средний заработок.',
    descriptionUz:
      "Tug'ruq ta'tili to'lovlari va homiladorlik nafaqasini hisoblang. Ish staji va o'rtacha ish haqini hisobga oladi.",
    category: 'salary',
    icon: 'Baby',
    keywords: ['декретные', 'tug\'ruq ta\'tili', 'maternity', 'пособие по беременности'],
    priority: 2,
  },
  {
    slug: 'severance',
    titleRu: 'Компенсация при увольнении',
    titleUz: "Ishdan bo'shatish kompensatsiyasi",
    descriptionRu:
      'Рассчитайте компенсацию при увольнении: неиспользованный отпуск, выходное пособие и окончательный расчёт.',
    descriptionUz:
      "Ishdan bo'shatish kompensatsiyasini hisoblang: foydalanilmagan ta'til, chiqish nafaqasi va yakuniy hisob-kitob.",
    category: 'salary',
    icon: 'LogOut',
    keywords: ['увольнение', 'ishdan bo\'shatish', 'severance', 'компенсация', 'расчёт'],
    priority: 2,
  },
  {
    slug: 'alimony',
    titleRu: 'Алименты',
    titleUz: 'Nafaqa',
    descriptionRu:
      'Рассчитайте размер алиментов на содержание детей. Учитывает количество детей и доход плательщика.',
    descriptionUz:
      "Bolalarni boqish uchun nafaqa miqdorini hisoblang. Bolalar soni va to'lovchining daromadini hisobga oladi.",
    category: 'salary',
    icon: 'Users',
    keywords: ['алименты', 'nafaqa', 'alimony', 'содержание детей', 'дети'],
    priority: 2,
  },
  {
    slug: 'overtime',
    titleRu: 'Сверхурочные',
    titleUz: 'Ortiqcha ish vaqti',
    descriptionRu:
      'Рассчитайте оплату сверхурочной работы, работы в выходные и праздничные дни по ТК Узбекистана.',
    descriptionUz:
      "O'zbekiston MK bo'yicha ortiqcha ish vaqti, dam olish va bayram kunlaridagi ish haqini hisoblang.",
    category: 'salary',
    icon: 'Clock',
    keywords: ['сверхурочные', 'ortiqcha ish vaqti', 'overtime', 'переработка', 'ночная смена'],
    priority: 3,
  },
  {
    slug: 'pension',
    titleRu: 'Пенсия',
    titleUz: 'Pensiya',
    descriptionRu:
      'Рассчитайте примерный размер пенсии в Узбекистане. Учитывает стаж, средний заработок и накопительную часть.',
    descriptionUz:
      "O'zbekistonda taxminiy pensiya miqdorini hisoblang. Ish staji, o'rtacha ish haqi va jamg'arma qismini hisobga oladi.",
    category: 'salary',
    icon: 'Armchair',
    keywords: ['пенсия', 'pensiya', 'pension', 'пенсионный возраст', 'стаж'],
    priority: 2,
  },

  // =============================================
  // CREDIT (6)
  // =============================================
  {
    slug: 'credit',
    titleRu: 'Кредитный калькулятор',
    titleUz: 'Kredit kalkulyatori',
    descriptionRu:
      'Рассчитайте ежемесячный платёж по кредиту, переплату и полную стоимость. Аннуитетный и дифференцированный графики.',
    descriptionUz:
      "Kreditning oylik to'lovi, ortiqcha to'lov va to'liq qiymatini hisoblang. Annuitet va differentsial jadvallar.",
    category: 'credit',
    icon: 'Calculator',
    keywords: ['кредит', 'kredit', 'loan', 'ежемесячный платёж', 'аннуитет'],
    priority: 1,
  },
  {
    slug: 'mortgage',
    titleRu: 'Ипотечный калькулятор',
    titleUz: 'Ipoteka kalkulyatori',
    descriptionRu:
      'Рассчитайте ипотеку в Узбекистане. Первоначальный взнос, ежемесячный платёж, переплата и график платежей.',
    descriptionUz:
      "O'zbekistonda ipoteka kreditini hisoblang. Boshlang'ich to'lov, oylik to'lov, ortiqcha to'lov va to'lov jadvali.",
    category: 'credit',
    icon: 'Home',
    keywords: ['ипотека', 'ipoteka', 'mortgage', 'жильё', 'квартира в кредит'],
    priority: 1,
  },
  {
    slug: 'auto-credit',
    titleRu: 'Автокредит',
    titleUz: 'Avtokredit',
    descriptionRu:
      'Рассчитайте автокредит: ежемесячный платёж, первоначальный взнос и переплату за весь срок кредита.',
    descriptionUz:
      "Avtokreditni hisoblang: oylik to'lov, boshlang'ich to'lov va kredit muddati davomidagi ortiqcha to'lov.",
    category: 'credit',
    icon: 'Car',
    keywords: ['автокредит', 'avtokredit', 'auto loan', 'машина в кредит', 'авто'],
    priority: 1,
  },
  {
    slug: 'installment',
    titleRu: 'Рассрочка',
    titleUz: "Bo'lib to'lash",
    descriptionRu:
      'Рассчитайте рассрочку: ежемесячный платёж, срок и общую стоимость покупки в рассрочку.',
    descriptionUz:
      "Bo'lib to'lashni hisoblang: oylik to'lov, muddat va bo'lib to'lash bilan xarid qilishning umumiy qiymati.",
    category: 'credit',
    icon: 'Split',
    keywords: ['рассрочка', 'bo\'lib to\'lash', 'installment', 'без процентов', 'nasiya'],
    priority: 2,
  },
  {
    slug: 'early-repayment',
    titleRu: 'Досрочное погашение',
    titleUz: "Muddatidan oldin to'lash",
    descriptionRu:
      'Рассчитайте выгоду от досрочного погашения кредита. Сравните уменьшение срока и уменьшение платежа.',
    descriptionUz:
      "Kreditni muddatidan oldin to'lashning foydasini hisoblang. Muddat qisqarishi va to'lov kamayishini solishtiring.",
    category: 'credit',
    icon: 'FastForward',
    keywords: ['досрочное погашение', 'muddatidan oldin', 'early repayment', 'экономия'],
    priority: 2,
  },
  {
    slug: 'refinancing',
    titleRu: 'Рефинансирование',
    titleUz: 'Qayta moliyalashtirish',
    descriptionRu:
      'Рассчитайте выгоду от рефинансирования кредита. Сравните текущие и новые условия кредитования.',
    descriptionUz:
      "Kreditni qayta moliyalashtirishning foydasini hisoblang. Joriy va yangi kredit shartlarini solishtiring.",
    category: 'credit',
    icon: 'RefreshCw',
    keywords: ['рефинансирование', 'qayta moliyalashtirish', 'refinancing', 'перекредитование'],
    priority: 2,
  },

  // =============================================
  // DEPOSIT (3)
  // =============================================
  {
    slug: 'deposit',
    titleRu: 'Калькулятор депозита',
    titleUz: 'Depozit kalkulyatori',
    descriptionRu:
      'Рассчитайте доход по банковскому вкладу в Узбекистане. Учитывает срок, ставку и капитализацию процентов.',
    descriptionUz:
      "O'zbekistonda bank depoziti bo'yicha daromadni hisoblang. Muddat, stavka va foizlarning kapitalizatsiyasini hisobga oladi.",
    category: 'deposit',
    icon: 'Landmark',
    keywords: ['депозит', 'depozit', 'вклад', 'deposit', 'банковский вклад'],
    priority: 1,
  },
  {
    slug: 'compound-interest',
    titleRu: 'Сложный процент',
    titleUz: 'Murakkab foiz',
    descriptionRu:
      'Рассчитайте рост вложений со сложным процентом. Покажем, как работает капитализация и реинвестирование.',
    descriptionUz:
      "Murakkab foiz bilan investitsiyalarning o'sishini hisoblang. Kapitalizatsiya va qayta investitsiya qanday ishlashini ko'rsatamiz.",
    category: 'deposit',
    icon: 'TrendingUp',
    keywords: ['сложный процент', 'murakkab foiz', 'compound interest', 'капитализация'],
    priority: 2,
  },
  {
    slug: 'deposit-comparison',
    titleRu: 'Сравнение депозитов',
    titleUz: 'Depozitlarni solishtirish',
    descriptionRu:
      'Сравните условия вкладов разных банков Узбекистана. Найдите самый выгодный депозит по вашим параметрам.',
    descriptionUz:
      "O'zbekistonning turli banklari omonat shartlarini solishtiring. Parametrlaringiz bo'yicha eng foydali depozitni toping.",
    category: 'deposit',
    icon: 'GitCompare',
    keywords: ['сравнение депозитов', 'depozitlarni solishtirish', 'лучший вклад', 'банки'],
    priority: 2,
  },

  // =============================================
  // CURRENCY (3)
  // =============================================
  {
    slug: 'currency-converter',
    titleRu: 'Конвертер валют',
    titleUz: 'Valyuta konvertori',
    descriptionRu:
      'Конвертируйте валюты по актуальному курсу ЦБ Узбекистана. UZS, USD, EUR, RUB и другие валюты.',
    descriptionUz:
      "O'zbekiston Markaziy banki joriy kursi bo'yicha valyutalarni konvertatsiya qiling. UZS, USD, EUR, RUB va boshqa valyutalar.",
    category: 'currency',
    icon: 'ArrowLeftRight',
    keywords: ['конвертер валют', 'valyuta konvertori', 'currency converter', 'курс доллара', 'UZS'],
    priority: 1,
  },
  {
    slug: 'bank-rates',
    titleRu: 'Курсы банков',
    titleUz: 'Bank kurslari',
    descriptionRu:
      'Актуальные курсы покупки и продажи валют в банках Узбекистана. Сравнение курсов для обмена.',
    descriptionUz:
      "O'zbekiston banklarida valyutalarning sotib olish va sotish kurslari. Ayirboshlash uchun kurslarni solishtirish.",
    category: 'currency',
    icon: 'Building2',
    keywords: ['курсы банков', 'bank kurslari', 'bank rates', 'обмен валют', 'курс покупки'],
    priority: 1,
  },
  {
    slug: 'money-transfer',
    titleRu: 'Денежные переводы',
    titleUz: "Pul o'tkazmalari",
    descriptionRu:
      'Сравните стоимость денежных переводов разными системами. Western Union, MoneyGram, Золотая Корона и другие.',
    descriptionUz:
      "Turli tizimlar orqali pul o'tkazmalari narxini solishtiring. Western Union, MoneyGram, Zolotaya Korona va boshqalar.",
    category: 'currency',
    icon: 'Send',
    keywords: ['переводы', 'pul o\'tkazmalari', 'money transfer', 'Western Union', 'ремитансы'],
    priority: 2,
  },

  // =============================================
  // AUTO (5)
  // =============================================
  {
    slug: 'customs',
    titleRu: 'Растаможка авто',
    titleUz: 'Avto rastamozhka',
    descriptionRu:
      'Рассчитайте стоимость растаможки автомобиля в Узбекистане. Таможенная пошлина, акциз и НДС.',
    descriptionUz:
      "O'zbekistonda avtomobilni rastamozhka qilish narxini hisoblang. Bojxona boji, aksiz va QQS.",
    category: 'auto',
    icon: 'Container',
    keywords: ['растаможка', 'rastamozhka', 'customs', 'таможня', 'ввоз авто'],
    priority: 1,
  },
  {
    slug: 'osago',
    titleRu: 'ОСАГО калькулятор',
    titleUz: 'OSAGO kalkulyatori',
    descriptionRu:
      'Рассчитайте стоимость полиса ОСАГО в Узбекистане. Учитывает регион, стаж и мощность двигателя.',
    descriptionUz:
      "O'zbekistonda OSAGO polisi narxini hisoblang. Hudud, tajriba va dvigatel quvvatini hisobga oladi.",
    category: 'auto',
    icon: 'Shield',
    keywords: ['ОСАГО', 'OSAGO', 'страховка', 'sug\'urta', 'автостраховка'],
    priority: 1,
  },
  {
    slug: 'fuel-consumption',
    titleRu: 'Расход топлива',
    titleUz: "Yoqilg'i sarfi",
    descriptionRu:
      'Рассчитайте расход топлива и стоимость бензина или газа на поездку. Средний расход на 100 км.',
    descriptionUz:
      "Sayohat uchun yoqilg'i sarfi va benzin yoki gaz narxini hisoblang. 100 km ga o'rtacha sarf.",
    category: 'auto',
    icon: 'Fuel',
    keywords: ['расход топлива', 'yoqilg\'i sarfi', 'fuel consumption', 'бензин', 'газ'],
    priority: 2,
  },
  {
    slug: 'trip-cost',
    titleRu: 'Стоимость поездки',
    titleUz: 'Sayohat narxi',
    descriptionRu:
      'Рассчитайте полную стоимость поездки на авто. Топливо, платные дороги и амортизация.',
    descriptionUz:
      "Avtomobilda sayohatning to'liq narxini hisoblang. Yoqilg'i, pullik yo'llar va amortizatsiya.",
    category: 'auto',
    icon: 'Route',
    keywords: ['стоимость поездки', 'sayohat narxi', 'trip cost', 'маршрут', 'дорога'],
    priority: 3,
  },
  {
    slug: 'car-leasing',
    titleRu: 'Лизинг авто',
    titleUz: 'Avto lizing',
    descriptionRu:
      'Рассчитайте стоимость лизинга автомобиля. Ежемесячный платёж, первоначальный взнос и выкупная стоимость.',
    descriptionUz:
      "Avtomobil lizingining narxini hisoblang. Oylik to'lov, boshlang'ich to'lov va sotib olish qiymati.",
    category: 'auto',
    icon: 'Key',
    keywords: ['лизинг', 'lizing', 'car leasing', 'авто в лизинг'],
    priority: 2,
  },

  // =============================================
  // UTILITIES (6)
  // =============================================
  {
    slug: 'electricity',
    titleRu: 'Электроэнергия',
    titleUz: 'Elektr energiya',
    descriptionRu:
      'Рассчитайте стоимость электроэнергии по тарифам Узбекистана. Учитывает 6 ступеней потребления.',
    descriptionUz:
      "O'zbekiston tariflari bo'yicha elektr energiyasi narxini hisoblang. 6 bosqichli iste'mol hisobga olinadi.",
    category: 'utilities',
    icon: 'Zap',
    keywords: ['электроэнергия', 'elektr energiya', 'electricity', 'свет', 'тариф', 'кВт'],
    priority: 1,
  },
  {
    slug: 'gas',
    titleRu: 'Газ',
    titleUz: 'Gaz',
    descriptionRu:
      'Рассчитайте стоимость природного газа для дома. Зимние и летние тарифы Узбекистана.',
    descriptionUz:
      "Uy uchun tabiiy gaz narxini hisoblang. O'zbekistonning qishgi va yozgi tariflari.",
    category: 'utilities',
    icon: 'Flame',
    keywords: ['газ', 'gaz', 'gas', 'тариф на газ', 'кубометр'],
    priority: 1,
  },
  {
    slug: 'water',
    titleRu: 'Вода',
    titleUz: 'Suv',
    descriptionRu:
      'Рассчитайте стоимость холодной и горячей воды по тарифам Узбекистана. Водоотведение включено.',
    descriptionUz:
      "O'zbekiston tariflari bo'yicha sovuq va issiq suv narxini hisoblang. Kanalizatsiya xizmati kiritilgan.",
    category: 'utilities',
    icon: 'Droplets',
    keywords: ['вода', 'suv', 'water', 'тариф на воду', 'водоснабжение'],
    priority: 1,
  },
  {
    slug: 'heating',
    titleRu: 'Отопление',
    titleUz: 'Isitish',
    descriptionRu:
      'Рассчитайте стоимость центрального отопления. Зависит от площади квартиры и отопительного сезона.',
    descriptionUz:
      "Markaziy isitish narxini hisoblang. Kvartira maydoni va isitish mavsumiga bog'liq.",
    category: 'utilities',
    icon: 'Heater',
    keywords: ['отопление', 'isitish', 'heating', 'обогрев', 'отопительный сезон'],
    priority: 2,
  },
  {
    slug: 'internet',
    titleRu: 'Интернет',
    titleUz: 'Internet',
    descriptionRu:
      'Сравните тарифы интернет-провайдеров Узбекистана. Найдите оптимальный тариф по скорости и цене.',
    descriptionUz:
      "O'zbekiston internet-provayderlarining tariflarini solishtiring. Tezlik va narx bo'yicha optimal tarifni toping.",
    category: 'utilities',
    icon: 'Wifi',
    keywords: ['интернет', 'internet', 'тариф', 'провайдер', 'скорость'],
    priority: 3,
  },
  {
    slug: 'utilities-total',
    titleRu: 'Общая коммуналка',
    titleUz: 'Umumiy kommunal',
    descriptionRu:
      'Рассчитайте общую сумму коммунальных платежей за месяц. Все услуги ЖКХ в одном калькуляторе.',
    descriptionUz:
      "Oylik kommunal to'lovlarning umumiy summasini hisoblang. Barcha uy-joy kommunal xizmatlari bitta kalkulyatorda.",
    category: 'utilities',
    icon: 'LayoutList',
    keywords: ['коммуналка', 'kommunal', 'utilities', 'ЖКХ', 'квитанция'],
    priority: 1,
  },

  // =============================================
  // REAL ESTATE (4)
  // =============================================
  {
    slug: 'apartment-cost',
    titleRu: 'Стоимость квартиры',
    titleUz: 'Kvartira narxi',
    descriptionRu:
      'Оцените стоимость квартиры в Ташкенте и других городах. Учитывает район, площадь и состояние.',
    descriptionUz:
      "Toshkent va boshqa shaharlarda kvartira narxini baholang. Tuman, maydon va holatni hisobga oladi.",
    category: 'realestate',
    icon: 'Building2',
    keywords: ['квартира', 'kvartira', 'apartment', 'стоимость', 'оценка', 'Ташкент'],
    priority: 1,
  },
  {
    slug: 'rental',
    titleRu: 'Аренда vs покупка',
    titleUz: 'Ijara vs sotib olish',
    descriptionRu:
      'Что выгоднее: арендовать или покупать жильё? Сравните затраты на аренду и ипотеку за 10-20 лет.',
    descriptionUz:
      "Nima foydaliroq: uy ijaraga olish yoki sotib olish? 10-20 yil davomida ijara va ipoteka xarajatlarini solishtiring.",
    category: 'realestate',
    icon: 'Scale',
    keywords: ['аренда', 'ijara', 'rent vs buy', 'покупка квартиры', 'ипотека'],
    priority: 2,
  },
  {
    slug: 'renovation',
    titleRu: 'Стоимость ремонта',
    titleUz: "Ta'mirlash narxi",
    descriptionRu:
      'Рассчитайте примерную стоимость ремонта квартиры. Черновой, косметический или евроремонт.',
    descriptionUz:
      "Kvartira ta'mirlashning taxminiy narxini hisoblang. Qora, kosmetik yoki yevrota'mirlash.",
    category: 'realestate',
    icon: 'PaintBucket',
    keywords: ['ремонт', 'ta\'mirlash', 'renovation', 'стоимость ремонта', 'отделка'],
    priority: 2,
  },
  {
    slug: 'moving',
    titleRu: 'Стоимость переезда',
    titleUz: "Ko'chish narxi",
    descriptionRu:
      'Рассчитайте стоимость переезда: грузчики, транспорт и упаковка. По Ташкенту и между городами.',
    descriptionUz:
      "Ko'chish narxini hisoblang: yukchilar, transport va qadoqlash. Toshkent bo'ylab va shaharlar aro.",
    category: 'realestate',
    icon: 'Truck',
    keywords: ['переезд', 'ko\'chish', 'moving', 'грузчики', 'перевозка'],
    priority: 3,
  },

  // =============================================
  // BUSINESS (6)
  // =============================================
  {
    slug: 'ip-calculator',
    titleRu: 'Калькулятор для ИП',
    titleUz: 'YaTT kalkulyatori',
    descriptionRu:
      'Рассчитайте налоги и отчисления для индивидуального предпринимателя в Узбекистане.',
    descriptionUz:
      "O'zbekistonda yakka tartibdagi tadbirkor uchun soliqlar va ajratmalarni hisoblang.",
    category: 'business',
    icon: 'UserCircle',
    keywords: ['ИП', 'YaTT', 'sole proprietor', 'индивидуальный предприниматель', 'ЯТТ'],
    priority: 1,
  },
  {
    slug: 'llc-calculator',
    titleRu: 'Калькулятор для ООО',
    titleUz: 'MChJ kalkulyatori',
    descriptionRu:
      'Рассчитайте налоги и обязательные платежи для ООО. Сравните общую и упрощённую системы налогообложения.',
    descriptionUz:
      "MChJ uchun soliqlar va majburiy to'lovlarni hisoblang. Umumiy va soddalashtirilgan soliq tizimlarini solishtiring.",
    category: 'business',
    icon: 'Building',
    keywords: ['ООО', 'MChJ', 'LLC', 'юридическое лицо', 'предприятие'],
    priority: 1,
  },
  {
    slug: 'margin',
    titleRu: 'Маржинальность',
    titleUz: 'Marjinallik',
    descriptionRu:
      'Рассчитайте маржу, наценку и маржинальность товара или услуги. Определите оптимальную цену продажи.',
    descriptionUz:
      "Tovar yoki xizmatning marjasi, ustamasi va marjinalligini hisoblang. Optimal sotish narxini aniqlang.",
    category: 'business',
    icon: 'BarChart3',
    keywords: ['маржа', 'marja', 'margin', 'наценка', 'прибыль', 'рентабельность'],
    priority: 2,
  },
  {
    slug: 'break-even',
    titleRu: 'Точка безубыточности',
    titleUz: 'Zararsizlik nuqtasi',
    descriptionRu:
      'Рассчитайте точку безубыточности вашего бизнеса. Определите минимальный объём продаж для покрытия расходов.',
    descriptionUz:
      "Biznesingizning zararsizlik nuqtasini hisoblang. Xarajatlarni qoplash uchun minimal sotish hajmini aniqlang.",
    category: 'business',
    icon: 'Target',
    keywords: ['безубыточность', 'zararsizlik', 'break-even', 'точка окупаемости'],
    priority: 2,
  },
  {
    slug: 'roi',
    titleRu: 'Возврат инвестиций',
    titleUz: 'Investitsiya qaytimi',
    descriptionRu:
      'Рассчитайте рентабельность инвестиций (ROI). Оцените эффективность вложений в бизнес-проект.',
    descriptionUz:
      "Investitsiyalarning rentabelligini (ROI) hisoblang. Biznes loyihaga qo'yilmalar samaradorligini baholang.",
    category: 'business',
    icon: 'TrendingUp',
    keywords: ['ROI', 'инвестиции', 'investitsiya', 'возврат', 'рентабельность'],
    priority: 2,
  },
  {
    slug: 'employer-cost',
    titleRu: 'Стоимость сотрудника',
    titleUz: 'Xodim narxi',
    descriptionRu:
      'Рассчитайте полную стоимость содержания сотрудника для работодателя. Зарплата, налоги и соцвзносы.',
    descriptionUz:
      "Ish beruvchi uchun xodimni saqlashning to'liq narxini hisoblang. Ish haqi, soliqlar va ijtimoiy badal.",
    category: 'business',
    icon: 'UserPlus',
    keywords: ['стоимость сотрудника', 'xodim narxi', 'employer cost', 'ФОТ', 'налоги на зарплату'],
    priority: 1,
  },

  // =============================================
  // HEALTH (5)
  // =============================================
  {
    slug: 'calories',
    titleRu: 'Калькулятор калорий',
    titleUz: 'Kaloriya kalkulyatori',
    descriptionRu:
      'Рассчитайте суточную норму калорий для похудения, набора или поддержания веса. Формула Миффлина-Сан Жеора.',
    descriptionUz:
      "Vazn yo'qotish, olish yoki saqlash uchun kunlik kaloriya me'yorini hisoblang. Mifflin-San Jeor formulasi.",
    category: 'health',
    icon: 'Utensils',
    keywords: ['калории', 'kaloriya', 'calories', 'норма калорий', 'похудение'],
    priority: 1,
  },
  {
    slug: 'bmi',
    titleRu: 'Индекс массы тела',
    titleUz: 'Tana massa indeksi',
    descriptionRu:
      'Рассчитайте индекс массы тела (ИМТ). Узнайте, в норме ли ваш вес по отношению к росту.',
    descriptionUz:
      "Tana massa indeksini (TMI) hisoblang. Vazningiz bo'yingizga nisbatan me'yorda ekanligini bilib oling.",
    category: 'health',
    icon: 'Activity',
    keywords: ['ИМТ', 'TMI', 'BMI', 'индекс массы тела', 'вес', 'рост'],
    priority: 1,
  },
  {
    slug: 'ideal-weight',
    titleRu: 'Идеальный вес',
    titleUz: 'Ideal vazn',
    descriptionRu:
      'Рассчитайте идеальный вес по нескольким формулам. Учитывает рост, возраст и тип телосложения.',
    descriptionUz:
      "Bir nechta formula bo'yicha ideal vaznni hisoblang. Bo'y, yosh va tana tuzilishi turini hisobga oladi.",
    category: 'health',
    icon: 'Scale',
    keywords: ['идеальный вес', 'ideal vazn', 'ideal weight', 'рост', 'формула'],
    priority: 2,
  },
  {
    slug: 'macros',
    titleRu: 'Калькулятор БЖУ',
    titleUz: 'OYU kalkulyatori',
    descriptionRu:
      'Рассчитайте суточную норму белков, жиров и углеводов. Оптимальный баланс БЖУ для ваших целей.',
    descriptionUz:
      "Kunlik oqsil, yog' va uglevodlar me'yorini hisoblang. Maqsadlaringiz uchun optimal OYU balansi.",
    category: 'health',
    icon: 'PieChart',
    keywords: ['БЖУ', 'OYU', 'macros', 'белки', 'жиры', 'углеводы', 'питание'],
    priority: 2,
  },
  {
    slug: 'pregnancy',
    titleRu: 'Калькулятор беременности',
    titleUz: 'Homiladorlik kalkulyatori',
    descriptionRu:
      'Рассчитайте срок беременности, предполагаемую дату родов и текущую неделю. По дате последних месячных.',
    descriptionUz:
      "Homiladorlik muddati, taxminiy tug'ruq sanasi va joriy haftani hisoblang. Oxirgi hayz sanasi bo'yicha.",
    category: 'health',
    icon: 'Baby',
    keywords: ['беременность', 'homiladorlik', 'pregnancy', 'дата родов', 'срок', 'неделя'],
    priority: 2,
  },

  // =============================================
  // EDUCATION (3)
  // =============================================
  {
    slug: 'tuition',
    titleRu: 'Стоимость обучения',
    titleUz: "O'qish narxi",
    descriptionRu:
      'Рассчитайте стоимость обучения в вузах Узбекистана. Контракт, стипендия и дополнительные расходы.',
    descriptionUz:
      "O'zbekiston oliy ta'lim muassasalarida o'qish narxini hisoblang. Kontrakt, stipendiya va qo'shimcha xarajatlar.",
    category: 'education',
    icon: 'GraduationCap',
    keywords: ['обучение', 'o\'qish', 'tuition', 'университет', 'контракт', 'вуз'],
    priority: 2,
  },
  {
    slug: 'education-loan',
    titleRu: 'Образовательный кредит',
    titleUz: "Ta'lim krediti",
    descriptionRu:
      'Рассчитайте образовательный кредит для оплаты учёбы. Льготная ставка и отсрочка платежа.',
    descriptionUz:
      "O'qishni to'lash uchun ta'lim kreditini hisoblang. Imtiyozli stavka va to'lovni kechiktirish.",
    category: 'education',
    icon: 'BookOpen',
    keywords: ['образовательный кредит', 'ta\'lim krediti', 'education loan', 'учёба', 'студент'],
    priority: 2,
  },
  {
    slug: 'gpa',
    titleRu: 'Калькулятор GPA',
    titleUz: 'GPA kalkulyatori',
    descriptionRu:
      'Рассчитайте средний балл GPA. Переведите оценки из узбекской системы в международную шкалу.',
    descriptionUz:
      "O'rtacha GPA ballni hisoblang. Baholarni o'zbek tizimidan xalqaro shkala bo'yicha o'tkazing.",
    category: 'education',
    icon: 'Award',
    keywords: ['GPA', 'средний балл', 'o\'rtacha ball', 'оценки', 'рейтинг'],
    priority: 3,
  },

  // =============================================
  // RELIGION (4)
  // =============================================
  {
    slug: 'zakat',
    titleRu: 'Калькулятор закята',
    titleUz: 'Zakot kalkulyatori',
    descriptionRu:
      'Рассчитайте размер закята — обязательного ежегодного пожертвования в исламе. 2.5% от нисаба.',
    descriptionUz:
      "Zakot miqdorini hisoblang — Islomda majburiy yillik xayriya. Nisob miqdoridan 2,5%.",
    category: 'religion',
    icon: 'HandHeart',
    keywords: ['закят', 'zakot', 'zakat', 'нисаб', 'благотворительность', 'ислам'],
    priority: 1,
  },
  {
    slug: 'fitr-sadaka',
    titleRu: 'Фитр садака',
    titleUz: 'Fitr sadaqa',
    descriptionRu:
      'Рассчитайте размер фитр садака (закят аль-фитр). Обязательная милостыня перед праздником Ид аль-Фитр.',
    descriptionUz:
      "Fitr sadaqa (zakotul-fitr) miqdorini hisoblang. Iyd al-Fitr bayrami oldidan majburiy xayriya.",
    category: 'religion',
    icon: 'Gift',
    keywords: ['фитр садака', 'fitr sadaqa', 'закят аль-фитр', 'Рамадан', 'Ид аль-Фитр'],
    priority: 2,
  },
  {
    slug: 'fidiya-sadaka',
    titleRu: 'Фидия садака',
    titleUz: 'Fidiya sadaqa',
    descriptionRu:
      'Рассчитайте размер фидия садака — компенсации за пропущенные дни поста в Рамадан.',
    descriptionUz:
      "Fidiya sadaqa miqdorini hisoblang — Ramazon oyida o'tkazib yuborilgan ro'za kunlari uchun kompensatsiya.",
    category: 'religion',
    icon: 'Heart',
    keywords: ['фидия', 'fidiya', 'sadaqa', 'пост', 'Рамадан', 'компенсация'],
    priority: 3,
  },
  {
    slug: 'kurban',
    titleRu: 'Калькулятор курбан',
    titleUz: 'Qurbon kalkulyatori',
    descriptionRu:
      'Рассчитайте стоимость жертвенного животного на Курбан-байрам. Актуальные цены в Узбекистане.',
    descriptionUz:
      "Qurbon hayit uchun qurbonlik hayvonining narxini hisoblang. O'zbekistondagi dolzarb narxlar.",
    category: 'religion',
    icon: 'Sparkles',
    keywords: ['курбан', 'qurbon', 'курбан-байрам', 'жертвоприношение', 'Ид аль-Адха'],
    priority: 2,
  },

  // =============================================
  // TOOLS (8)
  // =============================================
  {
    slug: 'percentage',
    titleRu: 'Калькулятор процентов',
    titleUz: 'Foiz kalkulyatori',
    descriptionRu:
      'Рассчитайте проценты от числа, процентное соотношение и изменение. Все операции с процентами.',
    descriptionUz:
      "Sonning foizini, foizli nisbatni va o'zgarishni hisoblang. Foizlar bilan barcha amallar.",
    category: 'tools',
    icon: 'Percent',
    keywords: ['проценты', 'foiz', 'percentage', 'процент от числа', 'расчёт процентов'],
    priority: 1,
  },
  {
    slug: 'discount',
    titleRu: 'Калькулятор скидок',
    titleUz: 'Chegirma kalkulyatori',
    descriptionRu:
      'Рассчитайте цену со скидкой и сумму экономии. Поддерживает несколько последовательных скидок.',
    descriptionUz:
      "Chegirma bilan narx va tejash summasini hisoblang. Bir nechta ketma-ket chegirmalarni qo'llab-quvvatlaydi.",
    category: 'tools',
    icon: 'Tag',
    keywords: ['скидка', 'chegirma', 'discount', 'акция', 'распродажа', 'экономия'],
    priority: 1,
  },
  {
    slug: 'date-calc',
    titleRu: 'Калькулятор дат',
    titleUz: 'Sana kalkulyatori',
    descriptionRu:
      'Рассчитайте количество дней между датами, прибавьте или вычтите дни из даты.',
    descriptionUz:
      "Sanalar orasidagi kunlar sonini hisoblang, sanaga kun qo'shing yoki ayiring.",
    category: 'tools',
    icon: 'Calendar',
    keywords: ['дата', 'sana', 'date', 'дни между датами', 'разница дат'],
    priority: 2,
  },
  {
    slug: 'area',
    titleRu: 'Калькулятор площади',
    titleUz: 'Maydon kalkulyatori',
    descriptionRu:
      'Рассчитайте площадь помещения, участка или фигуры. Поддерживает сотки, гектары и квадратные метры.',
    descriptionUz:
      "Xona, yer yoki shakl maydonini hisoblang. Sotix, gektar va kvadrat metrlarni qo'llab-quvvatlaydi.",
    category: 'tools',
    icon: 'Square',
    keywords: ['площадь', 'maydon', 'area', 'квадратные метры', 'сотки', 'гектары'],
    priority: 2,
  },
  {
    slug: 'unit-converter',
    titleRu: 'Конвертер единиц',
    titleUz: 'Birlik konvertori',
    descriptionRu:
      'Конвертируйте единицы измерения: длина, вес, объём, температура и скорость.',
    descriptionUz:
      "O'lchov birliklarini konvertatsiya qiling: uzunlik, og'irlik, hajm, harorat va tezlik.",
    category: 'tools',
    icon: 'ArrowLeftRight',
    keywords: ['конвертер', 'konvertor', 'unit converter', 'единицы измерения', 'перевод'],
    priority: 2,
  },
  {
    slug: 'number-to-words',
    titleRu: 'Число прописью',
    titleUz: "Sonni so'z bilan yozish",
    descriptionRu:
      'Переведите число в текст прописью на русском и узбекском языках. Для документов и договоров.',
    descriptionUz:
      "Sonni rus va o'zbek tillarida so'z bilan yozing. Hujjatlar va shartnomalar uchun.",
    category: 'tools',
    icon: 'Type',
    keywords: ['число прописью', 'son so\'z bilan', 'number to words', 'сумма прописью'],
    priority: 2,
  },
  {
    slug: 'age',
    titleRu: 'Калькулятор возраста',
    titleUz: 'Yosh kalkulyatori',
    descriptionRu:
      'Рассчитайте точный возраст в годах, месяцах и днях. Узнайте, сколько дней вы прожили.',
    descriptionUz:
      "Yil, oy va kunlarda aniq yoshni hisoblang. Necha kun yashagandligingizni bilib oling.",
    category: 'tools',
    icon: 'Cake',
    keywords: ['возраст', 'yosh', 'age', 'дата рождения', 'сколько лет'],
    priority: 3,
  },
  {
    slug: 'random',
    titleRu: 'Генератор чисел',
    titleUz: 'Son generatori',
    descriptionRu:
      'Сгенерируйте случайное число в заданном диапазоне. Для лотерей, розыгрышей и случайного выбора.',
    descriptionUz:
      "Berilgan oraliqda tasodifiy son hosil qiling. Lotereya, o'yinlar va tasodifiy tanlov uchun.",
    category: 'tools',
    icon: 'Dices',
    keywords: ['генератор', 'generator', 'random', 'случайное число', 'рандом'],
    priority: 3,
  },

  // =============================================
  // UNIQUE UZ (7)
  // =============================================
  {
    slug: 'passport-fees',
    titleRu: 'Паспортные сборы',
    titleUz: "Pasport yig'imlari",
    descriptionRu:
      'Рассчитайте госпошлину за оформление паспорта Узбекистана. Биометрический, загранпаспорт и замена.',
    descriptionUz:
      "O'zbekiston pasporti uchun davlat boji miqdorini hisoblang. Biometrik, xorijga chiqish pasporti va almashtirish.",
    category: 'unique',
    icon: 'IdCard',
    keywords: ['паспорт', 'pasport', 'passport', 'госпошлина', 'загранпаспорт', 'биометрический'],
    priority: 1,
  },
  {
    slug: 'state-duties',
    titleRu: 'Госпошлины',
    titleUz: 'Davlat boji',
    descriptionRu:
      'Рассчитайте размер государственной пошлины в Узбекистане. Суд, нотариус, регистрация и другие услуги.',
    descriptionUz:
      "O'zbekistonda davlat boji miqdorini hisoblang. Sud, notarius, ro'yxatga olish va boshqa xizmatlar.",
    category: 'unique',
    icon: 'Stamp',
    keywords: ['госпошлина', 'davlat boji', 'state duty', 'суд', 'нотариус', 'БРВ'],
    priority: 1,
  },
  {
    slug: 'wedding',
    titleRu: 'Калькулятор свадьбы',
    titleUz: "To'y kalkulyatori",
    descriptionRu:
      'Рассчитайте бюджет свадьбы в Узбекистане. Ресторан, одежда, калым и все традиционные расходы.',
    descriptionUz:
      "O'zbekistonda to'y byudjetini hisoblang. Restoran, kiyim-kechak, qalin va barcha an'anaviy xarajatlar.",
    category: 'unique',
    icon: 'Heart',
    keywords: ['свадьба', 'to\'y', 'wedding', 'калым', 'qalin', 'бюджет свадьбы'],
    priority: 2,
  },
  {
    slug: 'cotton-yield',
    titleRu: 'Урожайность хлопка',
    titleUz: 'Paxta hosildorligi',
    descriptionRu:
      'Рассчитайте ожидаемую урожайность хлопка. Учитывает площадь, сорт, регион и условия полива.',
    descriptionUz:
      "Kutilayotgan paxta hosildorligini hisoblang. Maydon, nav, hudud va sug'orish sharoitlarini hisobga oladi.",
    category: 'unique',
    icon: 'Flower2',
    keywords: ['хлопок', 'paxta', 'cotton', 'урожайность', 'hosildorlik', 'фермер'],
    priority: 3,
  },
  {
    slug: 'remittances',
    titleRu: 'Переводы из-за рубежа',
    titleUz: "Xorijdan pul o'tkazmalari",
    descriptionRu:
      'Рассчитайте стоимость денежных переводов из-за рубежа в Узбекистан. Сравнение систем и курсов.',
    descriptionUz:
      "Xorijdan O'zbekistonga pul o'tkazmalari narxini hisoblang. Tizimlar va kurslarni solishtirish.",
    category: 'unique',
    icon: 'Globe',
    keywords: ['переводы', 'remittances', 'xorijdan', 'из-за рубежа', 'мигранты'],
    priority: 1,
  },
  {
    slug: 'visa-cost',
    titleRu: 'Стоимость визы',
    titleUz: 'Viza narxi',
    descriptionRu:
      'Рассчитайте стоимость визы для граждан Узбекистана. Консульский сбор, страховка и сервисный сбор.',
    descriptionUz:
      "O'zbekiston fuqarolari uchun viza narxini hisoblang. Konsullik yig'imi, sug'urta va servis yig'imi.",
    category: 'unique',
    icon: 'Plane',
    keywords: ['виза', 'viza', 'visa', 'стоимость визы', 'консульский сбор'],
    priority: 2,
  },
  {
    slug: 'brv',
    titleRu: 'Базовая расчётная величина',
    titleUz: 'Bazaviy hisoblash miqdori',
    descriptionRu:
      'Переведите суммы из БРВ в сумы и обратно. Актуальное значение базовой расчётной величины Узбекистана.',
    descriptionUz:
      "BHM dan so'mga va aksincha miqdorlarni o'tkazing. O'zbekistonning bazaviy hisoblash miqdorining dolzarb qiymati.",
    category: 'unique',
    icon: 'Hash',
    keywords: ['БРВ', 'BHM', 'базовая расчётная величина', 'bazaviy hisoblash miqdori'],
    priority: 1,
  },
]

/** Look up a calculator by slug */
export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return CALCULATORS.find((c) => c.slug === slug)
}

/** Get all calculators for a given category */
export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  if (category === 'all') return CALCULATORS
  return CALCULATORS.filter((c) => c.category === category)
}

/** Get calculators sorted by priority (1 first) */
export function getCalculatorsByPriority(): CalculatorMeta[] {
  return [...CALCULATORS].sort((a, b) => a.priority - b.priority)
}

/** Total calculator count */
export const CALCULATOR_COUNT = CALCULATORS.length
