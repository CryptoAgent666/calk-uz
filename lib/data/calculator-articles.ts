export interface FAQItem {
  questionRu: string
  questionUz: string
  answerRu: string
  answerUz: string
}

export interface CalculatorArticle {
  paragraphsRu: string[]
  paragraphsUz: string[]
  faq: FAQItem[]
}

const articles: Record<string, CalculatorArticle> = {
  // ===== TOP 20 PRIORITY-1 (detailed 2-3 paragraphs, 3-5 FAQ) =====

  'income-tax': {
    paragraphsRu: [
      'Калькулятор НДФЛ рассчитывает налог на доходы физических лиц в Узбекистане по действующей ставке 12%. Введите сумму дохода, и калькулятор автоматически определит размер налога и сумму, которую вы получите на руки. Для резидентов IT Park предусмотрены специальные льготные условия.',
      'Формула расчёта: НДФЛ = Доход × 12%. Чистый доход = Доход − НДФЛ. Если вы являетесь резидентом IT Park, ставка может быть снижена. Калькулятор также учитывает социальный налог (12%) и ИНПС (0.5%).',
      'Налог удерживается работодателем ежемесячно при выплате заработной платы. Самозанятые лица и индивидуальные предприниматели подают декларацию самостоятельно. Срок уплаты — не позднее даты выплаты дохода.',
    ],
    paragraphsUz: [
      "JSHSHS kalkulyatori O'zbekistondagi amaldagi 12% stavka bo'yicha jismoniy shaxslarning daromad solig'ini hisoblaydi. Daromad summasini kiriting va kalkulyator avtomatik ravishda soliq miqdori hamda qo'lingizga keladigan summani aniqlaydi. IT Park rezidentlari uchun maxsus imtiyozli shartlar mavjud.",
      "Hisoblash formulasi: JSHSHS = Daromad × 12%. Sof daromad = Daromad − JSHSHS. Agar siz IT Park rezidenti bo'lsangiz, stavka kamaytirilishi mumkin. Kalkulyator shuningdek ijtimoiy soliq (12%) va INPS (0.5%) ni ham hisobga oladi.",
      "Soliq ish haqi to'lanayotganda ish beruvchi tomonidan har oy ushlab qolinadi. Yakka tartibdagi tadbirkorlar va o'z-o'zini band qilgan shaxslar deklaratsiyani mustaqil topshiradilar.",
    ],
    faq: [
      {
        questionRu: 'Какая ставка НДФЛ в Узбекистане?',
        questionUz: "O'zbekistonda JSHSHS stavkasi qancha?",
        answerRu: 'Стандартная ставка НДФЛ в Узбекистане составляет 12% от дохода.',
        answerUz: "O'zbekistonda JSHSHS standart stavkasi daromadning 12% ni tashkil etadi.",
      },
      {
        questionRu: 'Есть ли льготы по НДФЛ для IT-специалистов?',
        questionUz: 'IT mutaxassislari uchun JSHSHS imtiyozlari bormi?',
        answerRu: 'Да, резиденты IT Park могут применять пониженные ставки налогообложения.',
        answerUz: "Ha, IT Park rezidentlari past soliq stavkalaridan foydalanishi mumkin.",
      },
      {
        questionRu: 'Как рассчитать НДФЛ с зарплаты?',
        questionUz: "Ish haqidan JShShS qanday hisoblanadi?",
        answerRu: 'Умножьте сумму начисленной заработной платы на 0.12 (12%). Результат — сумма налога.',
        answerUz: "Hisoblangan ish haqi summasini 0.12 (12%) ga ko'paytiring. Natija — soliq summasi.",
      },
      {
        questionRu: 'Какие доходы не облагаются НДФЛ?',
        questionUz: "Qanday daromadlar JShShS ga tortilmaydi?",
        answerRu: 'Не облагаются: алименты, пенсии, стипендии, материальная помощь в пределах норм и некоторые другие выплаты.',
        answerUz: "Soliqqa tortilmaydi: nafaqa, pensiya, stipendiya, normalar doirasidagi moddiy yordam va boshqa ayrim to'lovlar.",
      },
    ],
  },

  'vat': {
    paragraphsRu: [
      'Калькулятор НДС позволяет быстро выделить или начислить налог на добавленную стоимость по ставке 12%. Выберите режим расчёта: «Выделить НДС» из суммы с налогом или «Начислить НДС» на сумму без налога.',
      'Формула выделения: НДС = Сумма с НДС × 12 / 112. Формула начисления: НДС = Сумма без НДС × 12 / 100. Сумма с НДС = Сумма без НДС + НДС. Калькулятор автоматически показывает все три значения.',
      'НДС в Узбекистане уплачивают юридические лица и индивидуальные предприниматели, чей оборот превышает установленный порог. Отчётный период — ежемесячно для крупных плательщиков и ежеквартально для остальных.',
    ],
    paragraphsUz: [
      "QQS kalkulyatori 12% stavka bo'yicha qo'shilgan qiymat solig'ini tez ajratib olish yoki hisoblash imkonini beradi. Hisoblash rejimini tanlang: soliq bilan summadan «QQS ajratish» yoki soliqqsiz summaga «QQS hisoblash».",
      "Ajratish formulasi: QQS = QQS bilan summa × 12 / 112. Hisoblash formulasi: QQS = QQSsiz summa × 12 / 100. QQS bilan summa = QQSsiz summa + QQS. Kalkulyator barcha uchta qiymatni avtomatik ko'rsatadi.",
      "O'zbekistonda QQSni aylanmasi belgilangan chegaradan oshgan yuridik shaxslar va yakka tartibdagi tadbirkorlar to'laydi. Hisobot davri — yirik soliq to'lovchilar uchun har oylik, qolganlari uchun har choraklik.",
    ],
    faq: [
      {
        questionRu: 'Какая ставка НДС в Узбекистане?',
        questionUz: "O'zbekistonda QQS stavkasi qancha?",
        answerRu: 'Стандартная ставка НДС составляет 12%.',
        answerUz: 'QQS standart stavkasi 12% ni tashkil etadi.',
      },
      {
        questionRu: 'Как выделить НДС из суммы?',
        questionUz: 'Summadan QQSni qanday ajratish mumkin?',
        answerRu: 'Разделите сумму с НДС на 112 и умножьте на 12. Формула: НДС = Сумма / 112 × 12.',
        answerUz: "QQS bilan summani 112 ga bo'ling va 12 ga ko'paytiring. Formula: QQS = Summa / 112 × 12.",
      },
      {
        questionRu: 'Кто должен платить НДС?',
        questionUz: 'Kim QQS to\'lashi kerak?',
        answerRu: 'НДС уплачивают юрлица и ИП, чей годовой оборот превышает порог обязательной регистрации.',
        answerUz: "QQSni yillik aylanmasi majburiy ro'yxatga olish chegarasidan oshgan yuridik shaxslar va YaTT to'laydi.",
      },
      {
        questionRu: 'Какие товары освобождены от НДС?',
        questionUz: 'Qanday tovarlar QQSdan ozod qilingan?',
        answerRu: 'От НДС освобождены некоторые продовольственные товары, медицинские услуги, образование и финансовые услуги.',
        answerUz: "Ayrim oziq-ovqat mahsulotlari, tibbiy xizmatlar, ta'lim va moliyaviy xizmatlar QQSdan ozod qilingan.",
      },
    ],
  },

  'salary': {
    paragraphsRu: [
      'Калькулятор зарплаты рассчитывает чистую сумму, которую вы получите на руки, или определяет начисление по желаемой сумме. Учитываются все обязательные удержания: НДФЛ 12%, ИНПС 0.5%.',
      'Формула: Чистая зарплата = Начисленная − НДФЛ − ИНПС. Со стороны работодателя начисляются: социальный налог 12% и ИНПС 0.5%. Калькулятор показывает полную структуру расходов для обеих сторон.',
      'Минимальная заработная плата в Узбекистане пересматривается дважды в год. Калькулятор использует актуальные ставки для точных расчётов.',
    ],
    paragraphsUz: [
      "Ish haqi kalkulyatori qo'lingizga keladigan sof summani hisoblaydi yoki kerakli summa bo'yicha hisob-kitobni aniqlaydi. Barcha majburiy ushlanmalar hisobga olinadi: JSHSHS 12%, INPS 0.5%.",
      "Formula: Sof ish haqi = Hisoblangan − JSHSHS − INPS. Ish beruvchi tomonidan hisoblanadi: ijtimoiy soliq 12% va INPS 0.5%. Kalkulyator ikkala tomon uchun xarajatlarning to'liq tuzilmasini ko'rsatadi.",
      "O'zbekistondagi eng kam ish haqi yiliga ikki marta qayta ko'rib chiqiladi. Kalkulyator aniq hisob-kitoblar uchun dolzarb stavkalardan foydalanadi.",
    ],
    faq: [
      {
        questionRu: 'Какие налоги удерживаются с зарплаты?',
        questionUz: "Ish haqidan qanday soliqlar ushlab qolinadi?",
        answerRu: 'С зарплаты удерживаются НДФЛ (12%) и взнос в ИНПС (0.5%).',
        answerUz: "Ish haqidan JSHSHS (12%) va INPS badali (0.5%) ushlab qolinadi.",
      },
      {
        questionRu: 'Как рассчитать зарплату на руки?',
        questionUz: "Qo'lga keladigan ish haqini qanday hisoblash mumkin?",
        answerRu: 'Вычтите из начисленной зарплаты 12% НДФЛ и 0.5% ИНПС.',
        answerUz: "Hisoblangan ish haqidan 12% JSHSHS va 0.5% INPS ni ayiring.",
      },
      {
        questionRu: 'Какие расходы несёт работодатель помимо зарплаты?',
        questionUz: "Ish beruvchi ish haqidan tashqari qanday xarajatlar ko'taradi?",
        answerRu: 'Работодатель дополнительно уплачивает социальный налог 12% и взнос ИНПС 0.5% от фонда оплаты труда.',
        answerUz: "Ish beruvchi ish haqi fondidan qo'shimcha ravishda ijtimoiy soliq 12% va INPS badali 0.5% to'laydi.",
      },
      {
        questionRu: 'Какова минимальная зарплата в Узбекистане?',
        questionUz: "O'zbekistonda eng kam ish haqi qancha?",
        answerRu: 'Минимальная зарплата пересматривается дважды в год. Актуальную сумму можно узнать на сайте Минфина.',
        answerUz: "Eng kam ish haqi yiliga ikki marta qayta ko'rib chiqiladi. Dolzarb summani Moliya vazirligi saytida bilish mumkin.",
      },
    ],
  },

  'vacation-pay': {
    paragraphsRu: [
      'Калькулятор отпускных рассчитывает сумму оплаты ежегодного трудового отпуска. В Узбекистане минимальная продолжительность отпуска — 15 рабочих дней, для некоторых категорий работников предусмотрен удлинённый отпуск.',
      'Формула: Средний дневной заработок = Заработок за 12 месяцев / Количество рабочих дней. Отпускные = Средний дневной заработок × Дни отпуска. Из суммы удерживается НДФЛ 12%.',
      'При увольнении работнику выплачивается компенсация за неиспользованный отпуск по той же формуле. Отпуск может быть разделён на части, но одна из них не должна быть менее 15 рабочих дней.',
    ],
    paragraphsUz: [
      "Ta'til puli kalkulyatori yillik mehnat ta'tiliga to'lov summasini hisoblaydi. O'zbekistonda minimal ta'til davomiyligi — 15 ish kuni, ayrim toifadagi xodimlar uchun uzaytirilgan ta'til ko'zda tutilgan.",
      "Formula: O'rtacha kunlik ish haqi = 12 oylik ish haqi / Ish kunlari soni. Ta'til puli = O'rtacha kunlik ish haqi × Ta'til kunlari. Summadan JSHSHS 12% ushlab qolinadi.",
      "Ishdan bo'shatilganda xodimga foydalanilmagan ta'til uchun kompensatsiya xuddi shu formula bo'yicha to'lanadi.",
    ],
    faq: [
      {
        questionRu: 'Как рассчитываются отпускные?',
        questionUz: "Ta'til puli qanday hisoblanadi?",
        answerRu: 'Средний дневной заработок за 12 месяцев умножается на количество дней отпуска.',
        answerUz: "12 oylik o'rtacha kunlik ish haqi ta'til kunlari soniga ko'paytiriladi.",
      },
      {
        questionRu: 'Сколько дней отпуска положено по закону?',
        questionUz: "Qonun bo'yicha necha kun ta'til beriladi?",
        answerRu: 'Минимальный ежегодный отпуск — 15 рабочих дней. Для отдельных категорий — до 36 рабочих дней.',
        answerUz: "Minimal yillik ta'til — 15 ish kuni. Ayrim toifalar uchun — 36 ish kunigacha.",
      },
      {
        questionRu: 'Удерживается ли НДФЛ с отпускных?',
        questionUz: "Ta'til pulidan JSHSHS ushlab qolinadimi?",
        answerRu: 'Да, с отпускных удерживается НДФЛ по ставке 12%.',
        answerUz: "Ha, ta'til pulidan JSHSHS 12% stavkada ushlab qolinadi.",
      },
    ],
  },

  'credit': {
    paragraphsRu: [
      'Кредитный калькулятор рассчитывает ежемесячные платежи, переплату и полную стоимость кредита. Поддерживаются два типа платежей: аннуитетный (равные платежи) и дифференцированный (убывающие платежи).',
      'Формула аннуитетного платежа: P = S × [r(1+r)^n] / [(1+r)^n − 1], где S — сумма кредита, r — месячная ставка, n — количество месяцев. При дифференцированном платеже основной долг делится поровну, а проценты начисляются на остаток.',
      'Калькулятор формирует подробный график платежей с разбивкой на основной долг и проценты. Вы можете сравнить оба типа платежей и выбрать оптимальный вариант.',
    ],
    paragraphsUz: [
      "Kredit kalkulyatori oylik to'lovlar, ortiqcha to'lov va kreditning to'liq qiymatini hisoblaydi. Ikki turdagi to'lovlar qo'llab-quvvatlanadi: annuitet (teng to'lovlar) va differentsial (kamayib boruvchi to'lovlar).",
      "Annuitet to'lov formulasi: P = S × [r(1+r)^n] / [(1+r)^n − 1], bu yerda S — kredit summasi, r — oylik stavka, n — oylar soni. Differentsial to'lovda asosiy qarz teng bo'linadi, foizlar qoldiqqa hisoblanadi.",
      "Kalkulyator asosiy qarz va foizlarga bo'lingan batafsil to'lov jadvalini tuzadi. Ikkala turdagi to'lovlarni solishtirib, optimal variantni tanlashingiz mumkin.",
    ],
    faq: [
      {
        questionRu: 'Что выгоднее: аннуитет или дифференцированный платёж?',
        questionUz: "Nima foydali: annuitet yoki differentsial to'lov?",
        answerRu: 'При дифференцированном платеже общая переплата меньше, но первые платежи выше. Аннуитет удобнее для планирования бюджета.',
        answerUz: "Differentsial to'lovda umumiy ortiqcha to'lov kamroq, lekin dastlabki to'lovlar yuqoriroq. Annuitet byudjetni rejalashtirish uchun qulayroq.",
      },
      {
        questionRu: 'Как снизить переплату по кредиту?',
        questionUz: "Kredit bo'yicha ortiqcha to'lovni qanday kamaytirish mumkin?",
        answerRu: 'Сократите срок кредита, увеличьте первоначальный взнос или делайте досрочные погашения.',
        answerUz: "Kredit muddatini qisqartiring, boshlang'ich badalni oshiring yoki muddatidan oldin to'lovlar qiling.",
      },
      {
        questionRu: 'Какой максимальный срок кредита в Узбекистане?',
        questionUz: "O'zbekistonda maksimal kredit muddati qancha?",
        answerRu: 'Зависит от вида кредита. Потребительские — до 5 лет, ипотечные — до 20 лет.',
        answerUz: "Kredit turiga bog'liq. Iste'mol — 5 yilgacha, ipoteka — 20 yilgacha.",
      },
      {
        questionRu: 'Что такое полная стоимость кредита?',
        questionUz: "Kreditning to'liq qiymati nima?",
        answerRu: 'Полная стоимость кредита включает тело кредита, все проценты, комиссии и страховки.',
        answerUz: "Kreditning to'liq qiymati kredit tanasi, barcha foizlar, komissiyalar va sug'urtalarni o'z ichiga oladi.",
      },
    ],
  },

  'mortgage': {
    paragraphsRu: [
      'Ипотечный калькулятор рассчитывает ежемесячные платежи по ипотеке в Узбекистане. Учитывает стоимость жилья, первоначальный взнос, процентную ставку и срок кредита.',
      'Формула расчёта аналогична кредитному калькулятору. Особенность — ипотека в Узбекистане предоставляется под различные ставки в зависимости от программы: коммерческая ипотека, льготная для молодых семей или субсидированная государством.',
      'Калькулятор показывает полную стоимость квартиры с учётом процентов, ежемесячный платёж, соотношение основного долга и процентов, а также график погашения.',
    ],
    paragraphsUz: [
      "Ipoteka kalkulyatori O'zbekistonda ipoteka bo'yicha oylik to'lovlarni hisoblaydi. Uy-joy qiymati, boshlang'ich badal, foiz stavkasi va kredit muddatini hisobga oladi.",
      "Hisoblash formulasi kredit kalkulyatoriga o'xshash. Xususiyat — O'zbekistonda ipoteka dasturga qarab turli stavkalarda beriladi: tijorat ipotekasi, yosh oilalar uchun imtiyozli yoki davlat subsidiyali.",
      "Kalkulyator foizlar bilan kvartiraning to'liq qiymatini, oylik to'lovni, asosiy qarz va foizlar nisbatini hamda to'lov jadvalini ko'rsatadi.",
    ],
    faq: [
      {
        questionRu: 'Какой минимальный первоначальный взнос по ипотеке?',
        questionUz: "Ipoteka bo'yicha minimal boshlang'ich badal qancha?",
        answerRu: 'Обычно от 15-20% стоимости жилья. Для льготных программ может быть ниже.',
        answerUz: "Odatda uy-joy qiymatining 15-20%. Imtiyozli dasturlar uchun pastroq bo'lishi mumkin.",
      },
      {
        questionRu: 'На какой максимальный срок можно взять ипотеку?',
        questionUz: "Ipotekani qanday maksimal muddatga olish mumkin?",
        answerRu: 'Максимальный срок ипотеки в Узбекистане — до 20 лет.',
        answerUz: "O'zbekistonda ipotekaning maksimal muddati — 20 yilgacha.",
      },
      {
        questionRu: 'Какие банки предоставляют ипотеку в Узбекистане?',
        questionUz: "O'zbekistonda qaysi banklar ipoteka beradi?",
        answerRu: 'Ипотеку предоставляют Ипотека-банк, Узнацбанк, Алокабанк, Капиталбанк и другие.',
        answerUz: "Ipotekani Ipoteka-bank, O'znatbank, Aloqabank, Kapitalbank va boshqalar beradi.",
      },
    ],
  },

  'auto-credit': {
    paragraphsRu: [
      'Калькулятор автокредита помогает рассчитать ежемесячные платежи при покупке автомобиля в кредит. Учитывает стоимость машины, первоначальный взнос, процентную ставку и срок кредита.',
      'Формула идентична стандартному кредитному расчёту. Особенность автокредита — автомобиль остаётся в залоге у банка до полного погашения. Ставки в Узбекистане зависят от вида автомобиля (новый или б/у) и банка-кредитора.',
      'Калькулятор также рассчитывает общую переплату и стоимость автомобиля с учётом процентов.',
    ],
    paragraphsUz: [
      "Avtokredit kalkulyatori avtomobilni kreditga sotib olishda oylik to'lovlarni hisoblashga yordam beradi. Mashina narxi, boshlang'ich badal, foiz stavkasi va kredit muddatini hisobga oladi.",
      "Formula standart kredit hisobiga o'xshash. Avtokredit xususiyati — avtomobil to'liq to'lanmaguncha bankda garovda qoladi. O'zbekistondagi stavkalar avtomobil turi (yangi yoki ishlatilgan) va kreditor bankka bog'liq.",
      "Kalkulyator shuningdek umumiy ortiqcha to'lov va foizlar bilan avtomobil qiymatini hisoblaydi.",
    ],
    faq: [
      {
        questionRu: 'Можно ли взять автокредит на б/у автомобиль?',
        questionUz: "Ishlatilgan avtomobil uchun avtokredit olish mumkinmi?",
        answerRu: 'Да, но ставки обычно выше, а максимальный срок короче.',
        answerUz: "Ha, lekin stavkalar odatda yuqoriroq va maksimal muddat qisqaroq.",
      },
      {
        questionRu: 'Какой первоначальный взнос нужен для автокредита?',
        questionUz: "Avtokredit uchun qanday boshlang'ich badal kerak?",
        answerRu: 'Обычно от 20-30% стоимости автомобиля.',
        answerUz: "Odatda avtomobil qiymatining 20-30%.",
      },
      {
        questionRu: 'Обязательна ли страховка при автокредите?',
        questionUz: "Avtokreditda sug'urta majburiymi?",
        answerRu: 'Да, банки обычно требуют страхование автомобиля (КАСКО) на весь срок кредита.',
        answerUz: "Ha, banklar odatda kredit muddati davomida avtomobilni sug'urtalashni (KASKO) talab qiladi.",
      },
    ],
  },

  'deposit': {
    paragraphsRu: [
      'Калькулятор депозита рассчитывает доход от банковского вклада с учётом процентной ставки, срока и капитализации. Поддерживаются вклады в UZS и USD.',
      'Формула простых процентов: Доход = Сумма × Ставка × Срок / 365. С капитализацией: Итого = Сумма × (1 + Ставка/n)^(n×t), где n — количество капитализаций в год, t — срок в годах.',
      'Калькулятор позволяет сравнить доходность с капитализацией и без неё, а также учитывает налогообложение процентного дохода.',
    ],
    paragraphsUz: [
      "Depozit kalkulyatori foiz stavkasi, muddati va kapitalizatsiyani hisobga olgan holda bank omonatidan daromadni hisoblaydi. UZS va USD dagi omonatlar qo'llab-quvvatlanadi.",
      "Oddiy foiz formulasi: Daromad = Summa × Stavka × Muddat / 365. Kapitalizatsiya bilan: Jami = Summa × (1 + Stavka/n)^(n×t), bu yerda n — yildagi kapitalizatsiyalar soni, t — yillardagi muddat.",
      "Kalkulyator kapitalizatsiya bilan va bo'lmaganida daromadlilikni solishtirish imkonini beradi.",
    ],
    faq: [
      {
        questionRu: 'Что такое капитализация вклада?',
        questionUz: "Omonat kapitalizatsiyasi nima?",
        answerRu: 'Капитализация — это присоединение начисленных процентов к основной сумме вклада. Проценты начисляются на увеличенную сумму.',
        answerUz: "Kapitalizatsiya — bu hisoblangan foizlarning omonat asosiy summasiga qo'shilishi. Foizlar oshirilgan summaga hisoblanadi.",
      },
      {
        questionRu: 'В какой валюте выгоднее открыть вклад?',
        questionUz: "Qaysi valyutada omonat ochish foydali?",
        answerRu: 'Зависит от курсовых ожиданий. Ставки по UZS-вкладам выше, но курс сума может снижаться.',
        answerUz: "Kurs kutilmalariga bog'liq. UZS omonatlari bo'yicha stavkalar yuqoriroq, lekin so'm kursi tushishi mumkin.",
      },
      {
        questionRu: 'Облагается ли доход по вкладам налогом?',
        questionUz: "Omonat daromadiga soliq solinadimi?",
        answerRu: 'Процентный доход по вкладам физических лиц в Узбекистане освобождён от НДФЛ.',
        answerUz: "O'zbekistonda jismoniy shaxslarning omonatlari bo'yicha foiz daromadi JShShSdan ozod qilingan.",
      },
    ],
  },

  'currency-converter': {
    paragraphsRu: [
      'Конвертер валют пересчитывает суммы между UZS, USD, EUR, RUB и другими валютами по курсу Центрального банка Узбекистана. Курсы обновляются ежедневно.',
      'Расчёт прост: Результат = Сумма × Курс целевой валюты / Курс исходной валюты. Калькулятор также показывает изменение курса за последние дни для анализа динамики.',
    ],
    paragraphsUz: [
      "Valyuta konvertori O'zbekiston Markaziy banki kursi bo'yicha UZS, USD, EUR, RUB va boshqa valyutalar o'rtasida summalarni qayta hisoblaydi. Kurslar har kuni yangilanadi.",
      "Hisoblash oddiy: Natija = Summa × Maqsadli valyuta kursi / Dastlabki valyuta kursi. Kalkulyator dinamikani tahlil qilish uchun so'nggi kunlardagi kurs o'zgarishlarini ham ko'rsatadi.",
    ],
    faq: [
      {
        questionRu: 'Какой курс используется для расчёта?',
        questionUz: "Hisoblash uchun qaysi kurs ishlatiladi?",
        answerRu: 'Используется официальный курс Центрального банка Узбекистана.',
        answerUz: "O'zbekiston Markaziy bankining rasmiy kursi ishlatiladi.",
      },
      {
        questionRu: 'Как часто обновляется курс валют?',
        questionUz: "Valyuta kursi qanchalik tez-tez yangilanadi?",
        answerRu: 'Курс ЦБ обновляется ежедневно в рабочие дни.',
        answerUz: "MB kursi ish kunlarida har kuni yangilanadi.",
      },
      {
        questionRu: 'Почему курс банков отличается от курса ЦБ?',
        questionUz: "Nima uchun banklar kursi MB kursidan farq qiladi?",
        answerRu: 'Коммерческие банки устанавливают свои курсы покупки и продажи с учётом маржи.',
        answerUz: "Tijorat banklari marja hisobga olgan holda o'z sotib olish va sotish kurslarini belgilaydi.",
      },
    ],
  },

  'bank-rates': {
    paragraphsRu: [
      'Калькулятор курсов банков показывает актуальные курсы покупки и продажи валют в коммерческих банках Узбекистана. Позволяет найти лучший курс для обмена.',
      'Разница между курсом покупки и продажи — это маржа банка (спред). Чем меньше спред, тем выгоднее обмен для клиента. Калькулятор сравнивает курсы нескольких банков.',
    ],
    paragraphsUz: [
      "Bank kurslari kalkulyatori O'zbekiston tijorat banklaridagi valyutalarning dolzarb sotib olish va sotish kurslarini ko'rsatadi. Ayirboshlash uchun eng yaxshi kursni topish imkonini beradi.",
      "Sotib olish va sotish kursi o'rtasidagi farq — bu bank marjasi (spred). Spred qanchalik kichik bo'lsa, mijoz uchun ayirboshlash shunchalik foydali. Kalkulyator bir nechta banklarning kurslarini solishtiradi.",
    ],
    faq: [
      {
        questionRu: 'Какой банк предлагает лучший курс обмена?',
        questionUz: "Qaysi bank eng yaxshi ayirboshlash kursini taklif qiladi?",
        answerRu: 'Курсы меняются ежедневно. Используйте калькулятор для сравнения актуальных курсов.',
        answerUz: "Kurslar har kuni o'zgaradi. Dolzarb kurslarni solishtirish uchun kalkulyatordan foydalaning.",
      },
      {
        questionRu: 'Что такое спред валютного курса?',
        questionUz: "Valyuta kursi spredi nima?",
        answerRu: 'Спред — разница между курсом покупки и продажи валюты. Это доход банка от обменных операций.',
        answerUz: "Spred — valyutani sotib olish va sotish kursi o'rtasidagi farq. Bu bankning ayirboshlash operatsiyalaridan daromadi.",
      },
      {
        questionRu: 'Можно ли обменять валюту по курсу ЦБ?',
        questionUz: "Valyutani MB kursi bo'yicha almashtirib bo'ladimi?",
        answerRu: 'Нет, курс ЦБ — справочный. Банки устанавливают собственные курсы для обмена.',
        answerUz: "Yo'q, MB kursi — ma'lumotnoma. Banklar ayirboshlash uchun o'z kurslarini belgilaydi.",
      },
    ],
  },

  'customs': {
    paragraphsRu: [
      'Калькулятор растаможки рассчитывает полную стоимость ввоза автомобиля в Узбекистан, включая таможенную пошлину, акцизный налог и НДС. Размер пошлины зависит от объёма двигателя, года выпуска и стоимости автомобиля.',
      'Формула: Таможенная пошлина = Базовая ставка × Объём двигателя. Акциз рассчитывается на основе типа топлива и мощности. НДС 12% начисляется на сумму стоимости автомобиля, пошлины и акциза.',
      'При ввозе электромобилей действуют специальные льготы и пониженные ставки пошлин.',
    ],
    paragraphsUz: [
      "Rastamozhka kalkulyatori avtomobilni O'zbekistonga olib kirishning to'liq qiymatini, shu jumladan bojxona boji, aksiz solig'i va QQSni hisoblaydi. Boj miqdori dvigatel hajmi, ishlab chiqarilgan yili va avtomobil qiymatiga bog'liq.",
      "Formula: Bojxona boji = Bazaviy stavka × Dvigatel hajmi. Aksiz yoqilg'i turi va quvvatga asoslanib hisoblanadi. QQS 12% avtomobil qiymati, boj va aksiz summasiga hisoblanadi.",
      "Elektromobillarni olib kirishda maxsus imtiyozlar va pasaytirilgan boj stavkalari amal qiladi.",
    ],
    faq: [
      {
        questionRu: 'Какие налоги нужно заплатить при растаможке авто?',
        questionUz: "Avto rastamozhkasida qanday soliqlar to'lash kerak?",
        answerRu: 'При ввозе уплачиваются таможенная пошлина, акцизный налог, НДС и утилизационный сбор.',
        answerUz: "Olib kirishda bojxona boji, aksiz solig'i, QQS va utilizatsiya yig'imi to'lanadi.",
      },
      {
        questionRu: 'Выгодно ли ввозить электромобиль?',
        questionUz: "Elektromobil olib kirish foydalimi?",
        answerRu: 'Да, для электромобилей предусмотрены значительные льготы по таможенным платежам.',
        answerUz: "Ha, elektromobillar uchun bojxona to'lovlarida sezilarli imtiyozlar ko'zda tutilgan.",
      },
      {
        questionRu: 'Как влияет объём двигателя на стоимость растаможки?',
        questionUz: "Dvigatel hajmi rastamozhka qiymatiga qanday ta'sir qiladi?",
        answerRu: 'Чем больше объём двигателя, тем выше таможенная пошлина и акцизный налог.',
        answerUz: "Dvigatel hajmi qanchalik katta bo'lsa, bojxona boji va aksiz solig'i shunchalik yuqori.",
      },
    ],
  },

  'osago': {
    paragraphsRu: [
      'Калькулятор ОСАГО рассчитывает стоимость обязательного страхования автогражданской ответственности. Стоимость полиса зависит от типа транспортного средства, региона, стажа водителя и мощности двигателя.',
      'Формула: Стоимость = Базовый тариф × К1 × К2 × К3 × ..., где К — поправочные коэффициенты (регион, стаж, мощность, количество водителей и др.).',
    ],
    paragraphsUz: [
      "OSAGO kalkulyatori avtofuqarolik javobgarligini majburiy sug'urtalash qiymatini hisoblaydi. Polis narxi transport vositasi turi, hudud, haydovchi tajribasi va dvigatel quvvatiga bog'liq.",
      "Formula: Qiymat = Bazaviy tarif × K1 × K2 × K3 × ..., bu yerda K — tuzatish koeffitsientlari (hudud, tajriba, quvvat, haydovchilar soni va boshq.).",
    ],
    faq: [
      {
        questionRu: 'Обязательно ли ОСАГО в Узбекистане?',
        questionUz: "O'zbekistonda OSAGO majburiymi?",
        answerRu: 'Да, ОСАГО является обязательным для всех владельцев транспортных средств.',
        answerUz: "Ha, OSAGO barcha transport vositasi egalari uchun majburiy hisoblanadi.",
      },
      {
        questionRu: 'На какой срок оформляется ОСАГО?',
        questionUz: "OSAGO qancha muddatga rasmiylashtiriladi?",
        answerRu: 'Полис ОСАГО оформляется на 1 год.',
        answerUz: "OSAGO polisi 1 yilga rasmiylashtiriladi.",
      },
      {
        questionRu: 'Что влияет на стоимость ОСАГО?',
        questionUz: "OSAGO narxiga nima ta'sir qiladi?",
        answerRu: 'На стоимость влияют: тип ТС, объём двигателя, стаж водителя, регион и наличие аварий.',
        answerUz: "Narxga ta'sir qiladi: TV turi, dvigatel hajmi, haydovchi tajribasi, hudud va avariyalar mavjudligi.",
      },
    ],
  },

  'electricity': {
    paragraphsRu: [
      'Калькулятор электроэнергии рассчитывает стоимость потреблённой электроэнергии по действующим тарифам Узбекистана. Тарифы зависят от объёма потребления и наличия газоснабжения.',
      'Формула: Стоимость = Потребление (кВт·ч) × Тариф. В Узбекистане применяется прогрессивная шкала тарифов: при превышении определённого порога потребления тариф увеличивается.',
    ],
    paragraphsUz: [
      "Elektr energiya kalkulyatori O'zbekistonning amaldagi tariflari bo'yicha iste'mol qilingan elektr energiya qiymatini hisoblaydi. Tariflar iste'mol hajmi va gaz ta'minotiga bog'liq.",
      "Formula: Qiymat = Iste'mol (kVt·soat) × Tarif. O'zbekistonda progressiv tarif shkalasi qo'llaniladi: iste'mol ma'lum chegaradan oshganda tarif ortadi.",
    ],
    faq: [
      {
        questionRu: 'Какой тариф на электроэнергию в Узбекистане?',
        questionUz: "O'zbekistonda elektr energiya tarifi qancha?",
        answerRu: 'Тариф зависит от объёма потребления. Действует прогрессивная шкала.',
        answerUz: "Tarif iste'mol hajmiga bog'liq. Progressiv shkala amal qiladi.",
      },
      {
        questionRu: 'Как снизить расходы на электроэнергию?',
        questionUz: "Elektr energiya xarajatlarini qanday kamaytirish mumkin?",
        answerRu: 'Используйте энергосберегающие приборы и не превышайте порог льготного тарифа.',
        answerUz: "Energiya tejovchi asboblardan foydalaning va imtiyozli tarif chegarasidan oshmang.",
      },
      {
        questionRu: 'Что такое прогрессивная шкала тарифов?',
        questionUz: "Progressiv tarif shkalasi nima?",
        answerRu: 'Чем больше вы потребляете, тем выше тариф за каждый дополнительный кВт·ч сверх нормы.',
        answerUz: "Qanchalik ko'p iste'mol qilsangiz, normadan ortiq har bir qo'shimcha kVt·soat uchun tarif shunchalik yuqori.",
      },
    ],
  },

  'gas': {
    paragraphsRu: [
      'Калькулятор газа рассчитывает стоимость потреблённого природного газа по актуальным тарифам. Тариф зависит от сезона (отопительный / неотопительный период) и объёма потребления.',
      'Формула: Стоимость = Потребление (м³) × Тариф. В отопительный сезон (октябрь–март) тарифы могут отличаться. Калькулятор учитывает все эти нюансы.',
    ],
    paragraphsUz: [
      "Gaz kalkulyatori dolzarb tariflar bo'yicha iste'mol qilingan tabiiy gaz qiymatini hisoblaydi. Tarif mavsumga (isitish / isitmaslik davri) va iste'mol hajmiga bog'liq.",
      "Formula: Qiymat = Iste'mol (m³) × Tarif. Isitish mavsumida (oktyabr–mart) tariflar farq qilishi mumkin. Kalkulyator barcha nozikliklarni hisobga oladi.",
    ],
    faq: [
      {
        questionRu: 'Какой тариф на газ в Узбекистане?',
        questionUz: "O'zbekistonda gaz tarifi qancha?",
        answerRu: 'Тариф зависит от объёма потребления и сезона. Актуальные тарифы публикуются на сайте Узтрансгаз.',
        answerUz: "Tarif iste'mol hajmi va mavsumga bog'liq. Dolzarb tariflar O'ztransgaz saytida e'lon qilinadi.",
      },
      {
        questionRu: 'Меняется ли тариф в зависимости от сезона?',
        questionUz: "Tarif mavsumga qarab o'zgaradimi?",
        answerRu: 'Да, в отопительный период (октябрь–март) тариф может быть выше.',
        answerUz: "Ha, isitish davrida (oktyabr–mart) tarif yuqoriroq bo'lishi mumkin.",
      },
      {
        questionRu: 'Как читать показания газового счётчика?',
        questionUz: "Gaz hisoblagichi ko'rsatkichlarini qanday o'qish kerak?",
        answerRu: 'Запишите текущие показания и вычтите предыдущие. Разница — объём потребления в кубометрах.',
        answerUz: "Joriy ko'rsatkichlarni yozing va oldingilarini ayiring. Farq — kub metrlardagi iste'mol hajmi.",
      },
    ],
  },

  'water': {
    paragraphsRu: [
      'Калькулятор воды рассчитывает стоимость потреблённой холодной и горячей воды по тарифам Узбекистана. Учитывает водоснабжение и водоотведение (канализацию).',
      'Формула: Стоимость = Потребление (м³) × Тариф водоснабжения + Потребление (м³) × Тариф водоотведения. Тарифы различаются по регионам.',
    ],
    paragraphsUz: [
      "Suv kalkulyatori O'zbekiston tariflari bo'yicha iste'mol qilingan sovuq va issiq suv qiymatini hisoblaydi. Suv ta'minoti va oqava suvni (kanalizatsiya) hisobga oladi.",
      "Formula: Qiymat = Iste'mol (m³) × Suv ta'minoti tarifi + Iste'mol (m³) × Oqava suv tarifi. Tariflar hududlar bo'yicha farqlanadi.",
    ],
    faq: [
      {
        questionRu: 'Сколько стоит кубометр воды?',
        questionUz: "Bir kub metr suv qancha turadi?",
        answerRu: 'Тариф зависит от региона и типа водоснабжения. Включает плату за водоснабжение и водоотведение.',
        answerUz: "Tarif hudud va suv ta'minoti turiga bog'liq. Suv ta'minoti va oqava suv uchun to'lovni o'z ichiga oladi.",
      },
      {
        questionRu: 'Что включает тариф на водоотведение?',
        questionUz: "Oqava suv tarifi nimani o'z ichiga oladi?",
        answerRu: 'Водоотведение — это плата за канализацию и очистку стоков.',
        answerUz: "Oqava suv — bu kanalizatsiya va oqimlarni tozalash uchun to'lov.",
      },
      {
        questionRu: 'Как экономить воду?',
        questionUz: "Suvni qanday tejash mumkin?",
        answerRu: 'Установите счётчики, проверяйте трубы на протечки и используйте экономные режимы бытовой техники.',
        answerUz: "Hisoblagichlar o'rnating, quvurlarni oqishga tekshiring va maishiy texnikaning tejamkor rejimlaridan foydalaning.",
      },
    ],
  },

  'utilities-total': {
    paragraphsRu: [
      'Калькулятор коммунальных услуг рассчитывает общую сумму ежемесячных платежей за все коммунальные услуги: электроэнергию, газ, воду, отопление, вывоз мусора и обслуживание дома.',
      'Введите показания счётчиков и калькулятор автоматически рассчитает стоимость каждой услуги и общую сумму к оплате по актуальным тарифам.',
    ],
    paragraphsUz: [
      "Kommunal xizmatlar kalkulyatori barcha kommunal xizmatlar uchun oylik to'lovlarning umumiy summasini hisoblaydi: elektr energiya, gaz, suv, isitish, chiqindi chiqarish va uy xizmati.",
      "Hisoblagich ko'rsatkichlarini kiriting va kalkulyator har bir xizmat qiymatini hamda dolzarb tariflar bo'yicha umumiy to'lov summasini avtomatik hisoblaydi.",
    ],
    faq: [
      {
        questionRu: 'Какие коммунальные услуги включены в расчёт?',
        questionUz: "Hisobga qaysi kommunal xizmatlar kiritilgan?",
        answerRu: 'Электроэнергия, газ, холодная и горячая вода, отопление, вывоз мусора и обслуживание дома.',
        answerUz: "Elektr energiya, gaz, sovuq va issiq suv, isitish, chiqindi chiqarish va uy xizmati.",
      },
      {
        questionRu: 'Как оплатить коммунальные услуги онлайн?',
        questionUz: "Kommunal xizmatlarni onlayn qanday to'lash mumkin?",
        answerRu: 'Оплата доступна через приложения Payme, Click, UZUM Bank и другие платёжные системы.',
        answerUz: "To'lov Payme, Click, UZUM Bank va boshqa to'lov tizimlari orqali mavjud.",
      },
      {
        questionRu: 'Когда нужно подавать показания счётчиков?',
        questionUz: "Hisoblagich ko'rsatkichlarini qachon topshirish kerak?",
        answerRu: 'Показания необходимо подавать ежемесячно, обычно до 25-го числа.',
        answerUz: "Ko'rsatkichlarni har oy, odatda 25-sanagacha topshirish kerak.",
      },
    ],
  },

  'apartment-cost': {
    paragraphsRu: [
      'Калькулятор стоимости квартиры помогает оценить рыночную стоимость жилья в городах Узбекистана. Учитывает район, площадь, этаж, состояние ремонта и тип дома.',
      'Расчёт основан на средних ценах за квадратный метр в разных районах. Формула: Стоимость = Площадь × Цена за м² × Коэффициент (этаж, ремонт, тип дома).',
    ],
    paragraphsUz: [
      "Kvartira narxi kalkulyatori O'zbekiston shaharlarida uy-joyning bozor qiymatini baholashga yordam beradi. Tuman, maydon, qavat, ta'mir holati va uy turini hisobga oladi.",
      "Hisoblash turli tumanlardagi bir kvadrat metr uchun o'rtacha narxlarga asoslangan. Formula: Qiymat = Maydon × m² uchun narx × Koeffitsient (qavat, ta'mir, uy turi).",
    ],
    faq: [
      {
        questionRu: 'Как определяется стоимость квартиры?',
        questionUz: "Kvartira qiymati qanday aniqlanadi?",
        answerRu: 'На основе средней цены за м² в районе с учётом этажа, площади, ремонта и типа здания.',
        answerUz: "Tumandagi m² uchun o'rtacha narx asosida, qavat, maydon, ta'mir va bino turini hisobga olgan holda.",
      },
      {
        questionRu: 'Какова средняя цена квартиры в Ташкенте?',
        questionUz: "Toshkentda kvartiraning o'rtacha narxi qancha?",
        answerRu: 'Цены сильно зависят от района. В центре значительно дороже, чем на окраинах.',
        answerUz: "Narxlar tumanga katta bog'liq. Markazda chetlarga qaraganda ancha qimmat.",
      },
      {
        questionRu: 'Влияет ли этаж на стоимость квартиры?',
        questionUz: "Qavat kvartira qiymatiga ta'sir qiladimi?",
        answerRu: 'Да, первый и последний этажи обычно дешевле средних этажей.',
        answerUz: "Ha, birinchi va oxirgi qavatlar odatda o'rta qavatlarga qaraganda arzonroq.",
      },
    ],
  },

  'ip-calculator': {
    paragraphsRu: [
      'Калькулятор ИП рассчитывает налоги и обязательные платежи для индивидуального предпринимателя (ЯТТ) в Узбекистане. Учитывает систему налогообложения, вид деятельности и размер дохода.',
      'ИП может работать на основе: фиксированного налога, единого налога или общей системы. Калькулятор рассчитывает все обязательные платежи: налог на доход, социальные взносы и ИНПС.',
      'Размер фиксированного налога зависит от вида деятельности и региона. Единый налог для ИП — процент от выручки, который заменяет несколько налогов.',
    ],
    paragraphsUz: [
      "YaTT kalkulyatori O'zbekistondagi yakka tartibdagi tadbirkor uchun soliqlar va majburiy to'lovlarni hisoblaydi. Soliqqa tortish tizimi, faoliyat turi va daromad miqdorini hisobga oladi.",
      "YaTT quyidagi asosda ishlashi mumkin: belgilangan soliq, yagona soliq yoki umumiy tizim. Kalkulyator barcha majburiy to'lovlarni hisoblaydi: daromad solig'i, ijtimoiy badalar va INPS.",
      "Belgilangan soliq miqdori faoliyat turi va hududga bog'liq. YaTT uchun yagona soliq — tushumdan foiz bo'lib, bir nechta soliqlarni almashtiradi.",
    ],
    faq: [
      {
        questionRu: 'Какие налоги платит ИП в Узбекистане?',
        questionUz: "O'zbekistonda YaTT qanday soliqlar to'laydi?",
        answerRu: 'ИП платит налог на доход (фиксированный или процент от оборота), социальные взносы и ИНПС.',
        answerUz: "YaTT daromad solig'i (belgilangan yoki aylanmadan foiz), ijtimoiy badalar va INPS to'laydi.",
      },
      {
        questionRu: 'Что выгоднее: ИП или ООО?',
        questionUz: "Nima foydali: YaTT yoki MChJ?",
        answerRu: 'Зависит от оборота и вида деятельности. ИП проще в регистрации и учёте, но имеет ограничения.',
        answerUz: "Aylanma va faoliyat turiga bog'liq. YaTT ro'yxatga olish va hisobda soddaroq, lekin cheklovlar bor.",
      },
      {
        questionRu: 'Как зарегистрировать ИП?',
        questionUz: "YaTTni qanday ro'yxatga olish mumkin?",
        answerRu: 'Регистрация доступна онлайн через портал my.gov.uz. Процесс занимает 1-2 рабочих дня.',
        answerUz: "Ro'yxatga olish my.gov.uz portali orqali onlayn mavjud. Jarayon 1-2 ish kunini oladi.",
      },
    ],
  },

  'llc-calculator': {
    paragraphsRu: [
      'Калькулятор ООО (МЧЖ) рассчитывает налоговую нагрузку для общества с ограниченной ответственностью в Узбекистане. Учитывает выбранную систему налогообложения: общую или упрощённую.',
      'При общей системе уплачивается налог на прибыль (15%), НДС (12%), налог на имущество и другие. При упрощённой — единый налоговый платёж от оборота. Калькулятор показывает все обязательные платежи и общую налоговую нагрузку.',
    ],
    paragraphsUz: [
      "MChJ kalkulyatori O'zbekistonda mas'uliyati cheklangan jamiyat uchun soliq yukini hisoblaydi. Tanlangan soliqqa tortish tizimini hisobga oladi: umumiy yoki soddalashtirilgan.",
      "Umumiy tizimda foyda solig'i (15%), QQS (12%), mol-mulk solig'i va boshqalar to'lanadi. Soddalashtirilganda — aylanmadan yagona soliq to'lovi. Kalkulyator barcha majburiy to'lovlar va umumiy soliq yukini ko'rsatadi.",
    ],
    faq: [
      {
        questionRu: 'Какие налоги платит ООО в Узбекистане?',
        questionUz: "O'zbekistonda MChJ qanday soliqlar to'laydi?",
        answerRu: 'При общей системе: налог на прибыль 15%, НДС 12%, социальный налог 12%, налог на имущество и другие.',
        answerUz: "Umumiy tizimda: foyda solig'i 15%, QQS 12%, ijtimoiy soliq 12%, mol-mulk solig'i va boshqalar.",
      },
      {
        questionRu: 'В чём разница между общей и упрощённой системой?',
        questionUz: "Umumiy va soddalashtirilgan tizim o'rtasidagi farq nima?",
        answerRu: 'Общая система включает несколько налогов. Упрощённая заменяет их единым платежом от оборота.',
        answerUz: "Umumiy tizim bir nechta soliqlarni o'z ichiga oladi. Soddalashtirilgan ularni aylanmadan yagona to'lov bilan almashtiradi.",
      },
      {
        questionRu: 'Какой минимальный уставной капитал для ООО?',
        questionUz: "MChJ uchun minimal ustav kapitali qancha?",
        answerRu: 'Минимальный уставной капитал для ООО не установлен законом, но учредители определяют его в уставе.',
        answerUz: "MChJ uchun minimal ustav kapitali qonun bilan belgilanmagan, lekin ta'sischilar uni nizomda belgilaydi.",
      },
    ],
  },

  // ===== REMAINING PRIORITY-1 (shorter 1-2 paragraphs, 2-3 FAQ) =====

  'employer-cost': {
    paragraphsRu: [
      'Калькулятор стоимости сотрудника рассчитывает полные расходы работодателя на одного работника, включая зарплату, НДФЛ, социальный налог, ИНПС и другие обязательные платежи.',
      'Формула: Полная стоимость = Начисленная зарплата + Соцналог 12% + ИНПС работодателя 0.5%.',
    ],
    paragraphsUz: [
      "Xodim narxi kalkulyatori ish beruvchining bitta xodimga ketadigan to'liq xarajatlarini hisoblaydi, shu jumladan ish haqi, JSHSHS, ijtimoiy soliq, INPS va boshqa majburiy to'lovlar.",
      "Formula: To'liq qiymat = Hisoblangan ish haqi + Ijtimoiy soliq 12% + Ish beruvchi INPS 0.5%.",
    ],
    faq: [
      {
        questionRu: 'Сколько стоит сотрудник для работодателя?',
        questionUz: "Xodim ish beruvchiga qanchaga tushadi?",
        answerRu: 'К начисленной зарплате добавьте 12% социальный налог и 0.5% ИНПС — это минимальные дополнительные расходы.',
        answerUz: "Hisoblangan ish haqiga 12% ijtimoiy soliq va 0.5% INPS qo'shing — bu minimal qo'shimcha xarajatlar.",
      },
      {
        questionRu: 'Какие обязательные платежи несёт работодатель?',
        questionUz: "Ish beruvchi qanday majburiy to'lovlar ko'taradi?",
        answerRu: 'Социальный налог (12% от ФОТ) и взнос в ИНПС (0.5% от ФОТ).',
        answerUz: "Ijtimoiy soliq (ish haqi fondining 12%) va INPS badali (ish haqi fondining 0.5%).",
      },
    ],
  },

  'calories': {
    paragraphsRu: [
      'Калькулятор калорий рассчитывает суточную норму калорий на основе формулы Миффлина-Сан Жеора. Учитывает пол, возраст, рост, вес и уровень физической активности.',
      'Формулы: Мужчины: BMR = 10 × вес + 6.25 × рост − 5 × возраст + 5. Женщины: BMR = 10 × вес + 6.25 × рост − 5 × возраст − 161. Суточная норма = BMR × коэффициент активности.',
    ],
    paragraphsUz: [
      "Kaloriya kalkulyatori Mifflin-San Jeor formulasi asosida kunlik kaloriya normasini hisoblaydi. Jins, yosh, bo'y, vazn va jismoniy faollik darajasini hisobga oladi.",
      "Formulalar: Erkaklar: BMR = 10 × vazn + 6.25 × bo'y − 5 × yosh + 5. Ayollar: BMR = 10 × vazn + 6.25 × bo'y − 5 × yosh − 161. Kunlik norma = BMR × faollik koeffitsienti.",
    ],
    faq: [
      {
        questionRu: 'Как рассчитать суточную норму калорий?',
        questionUz: "Kunlik kaloriya normasini qanday hisoblash mumkin?",
        answerRu: 'Введите свои данные (пол, возраст, рост, вес, активность) и калькулятор рассчитает вашу норму.',
        answerUz: "Ma'lumotlaringizni kiriting (jins, yosh, bo'y, vazn, faollik) va kalkulyator normangizni hisoblaydi.",
      },
      {
        questionRu: 'Сколько калорий нужно для похудения?',
        questionUz: "Ozish uchun qancha kaloriya kerak?",
        answerRu: 'Для похудения рекомендуется дефицит 300-500 калорий от суточной нормы.',
        answerUz: "Ozish uchun kunlik normadan 300-500 kaloriya kamroq iste'mol qilish tavsiya etiladi.",
      },
    ],
  },

  'bmi': {
    paragraphsRu: [
      'Калькулятор индекса массы тела (ИМТ) определяет соотношение веса и роста. Формула: ИМТ = Вес (кг) / Рост² (м). Результат интерпретируется по шкале ВОЗ.',
      'Категории: до 18.5 — недостаток, 18.5-24.9 — норма, 25-29.9 — избыточный вес, от 30 — ожирение. ИМТ — ориентировочный показатель, не учитывает мышечную массу.',
    ],
    paragraphsUz: [
      "Tana massa indeksi (TMI) kalkulyatori vazn va bo'y nisbatini aniqlaydi. Formula: TMI = Vazn (kg) / Bo'y² (m). Natija JSST shkalasi bo'yicha talqin qilinadi.",
      "Toifalar: 18.5 gacha — yetishmovchilik, 18.5-24.9 — norma, 25-29.9 — ortiqcha vazn, 30 dan — semizlik. TMI — taxminiy ko'rsatkich bo'lib, mushak massasini hisobga olmaydi.",
    ],
    faq: [
      {
        questionRu: 'Какой ИМТ считается нормой?',
        questionUz: "Qanday TMI norma hisoblanadi?",
        answerRu: 'Нормальный ИМТ — от 18.5 до 24.9 по классификации ВОЗ.',
        answerUz: "Normal TMI — JSST tasnifi bo'yicha 18.5 dan 24.9 gacha.",
      },
      {
        questionRu: 'ИМТ точно показывает состояние здоровья?',
        questionUz: "TMI sog'liq holatini aniq ko'rsatadimi?",
        answerRu: 'ИМТ — ориентир. Он не учитывает мышечную массу, возраст и распределение жира. Для точной оценки обратитесь к врачу.',
        answerUz: "TMI — mo'ljal. U mushak massasi, yosh va yog' taqsimotini hisobga olmaydi. Aniq baholash uchun shifokorga murojaat qiling.",
      },
    ],
  },

  'zakat': {
    paragraphsRu: [
      'Калькулятор закята рассчитывает размер обязательного пожертвования (2.5% от имущества) в соответствии с нормами ислама. Учитывает наличные, золото, серебро, инвестиции и долги.',
      'Закят обязателен, если общая стоимость имущества превышает нисаб (минимальный порог). Нисаб рассчитывается по текущей стоимости 85 граммов золота или 595 граммов серебра.',
    ],
    paragraphsUz: [
      "Zakot kalkulyatori islom normalari bo'yicha majburiy xayriya miqdorini (mol-mulkning 2.5%) hisoblaydi. Naqd pul, oltin, kumush, investitsiyalar va qarzlarni hisobga oladi.",
      "Zakot mol-mulkning umumiy qiymati nisob (minimal chegara) dan oshganda majburiy. Nisob 85 gramm oltinning yoki 595 gramm kumushning joriy qiymati bo'yicha hisoblanadi.",
    ],
    faq: [
      {
        questionRu: 'Что такое нисаб для закята?',
        questionUz: "Zakot uchun nisob nima?",
        answerRu: 'Нисаб — минимальная сумма имущества, при достижении которой закят обязателен. Равен стоимости 85 г золота.',
        answerUz: "Nisob — mol-mulkning zakot majburiy bo'ladigan minimal summasi. 85 g oltin qiymatiga teng.",
      },
      {
        questionRu: 'Какой процент составляет закят?',
        questionUz: "Zakot necha foiz?",
        answerRu: 'Закят составляет 2.5% от общей стоимости имущества, превышающего нисаб.',
        answerUz: "Zakot nisob dan oshgan mol-mulkning umumiy qiymatidan 2.5% ni tashkil etadi.",
      },
      {
        questionRu: 'Какое имущество учитывается при расчёте закята?',
        questionUz: "Zakot hisoblashda qanday mol-mulk hisobga olinadi?",
        answerRu: 'Наличные деньги, золото, серебро, инвестиции, торговые товары. Личное жильё и транспорт не учитываются.',
        answerUz: "Naqd pul, oltin, kumush, investitsiyalar, savdo mollari. Shaxsiy turar joy va transport hisobga olinmaydi.",
      },
    ],
  },

  'percentage': {
    paragraphsRu: [
      'Калькулятор процентов выполняет все основные операции с процентами: нахождение процента от числа, определение процентного соотношения, прибавление и вычитание процентов.',
      'Формулы: Процент от числа = Число × Процент / 100. Какой процент A от B = (A / B) × 100. Число + процент = Число × (1 + Процент / 100).',
    ],
    paragraphsUz: [
      "Foiz kalkulyatori foizlar bilan barcha asosiy amallarni bajaradi: sondan foiz topish, foiz nisbatini aniqlash, foiz qo'shish va ayirish.",
      "Formulalar: Sondan foiz = Son × Foiz / 100. A ning B dan necha foizi = (A / B) × 100. Son + foiz = Son × (1 + Foiz / 100).",
    ],
    faq: [
      {
        questionRu: 'Как найти процент от числа?',
        questionUz: "Sondan foizni qanday topish mumkin?",
        answerRu: 'Умножьте число на процент и разделите на 100. Например: 20% от 500 = 500 × 20 / 100 = 100.',
        answerUz: "Sonni foizga ko'paytirib 100 ga bo'ling. Masalan: 500 ning 20% = 500 × 20 / 100 = 100.",
      },
      {
        questionRu: 'Как рассчитать процентное соотношение?',
        questionUz: "Foiz nisbatini qanday hisoblash mumkin?",
        answerRu: 'Разделите одно число на другое и умножьте на 100. Например: 25 из 200 = (25/200) × 100 = 12.5%.',
        answerUz: "Bir sonni boshqasiga bo'ling va 100 ga ko'paytiring. Masalan: 200 dan 25 = (25/200) × 100 = 12.5%.",
      },
    ],
  },

  'discount': {
    paragraphsRu: [
      'Калькулятор скидок рассчитывает финальную стоимость товара после применения скидки. Поддерживает процентные и фиксированные скидки, а также несколько последовательных скидок.',
      'Формула: Цена со скидкой = Исходная цена × (1 − Скидка / 100). Экономия = Исходная цена − Цена со скидкой.',
    ],
    paragraphsUz: [
      "Chegirma kalkulyatori chegirma qo'llanilgandan keyin tovarning yakuniy narxini hisoblaydi. Foizli va belgilangan chegirmalarni, shuningdek ketma-ket bir nechta chegirmalarni qo'llab-quvvatlaydi.",
      "Formula: Chegirmali narx = Dastlabki narx × (1 − Chegirma / 100). Tejamkorlik = Dastlabki narx − Chegirmali narx.",
    ],
    faq: [
      {
        questionRu: 'Как рассчитать скидку в процентах?',
        questionUz: "Foizdagi chegirmani qanday hisoblash mumkin?",
        answerRu: 'Умножьте цену на процент скидки и разделите на 100. Вычтите результат из цены.',
        answerUz: "Narxni chegirma foiziga ko'paytirib 100 ga bo'ling. Natijani narxdan ayiring.",
      },
      {
        questionRu: 'Как рассчитать двойную скидку?',
        questionUz: "Ikki chegirmani qanday hisoblash mumkin?",
        answerRu: 'Примените первую скидку, затем от получившейся цены рассчитайте вторую. Скидки не складываются напрямую.',
        answerUz: "Birinchi chegirmani qo'llang, keyin hosil bo'lgan narxdan ikkinchisini hisoblang. Chegirmalar bevosita qo'shilmaydi.",
      },
    ],
  },

  'passport-fees': {
    paragraphsRu: [
      'Калькулятор паспортных сборов рассчитывает госпошлину за оформление внутреннего и заграничного паспорта, а также ID-карты в Узбекистане. Сумма зависит от типа документа и срочности.',
      'Госпошлина выражается в долях БРВ (базовой расчётной величины). Калькулятор автоматически пересчитывает в сумы по актуальному размеру БРВ.',
    ],
    paragraphsUz: [
      "Pasport to'lovlari kalkulyatori O'zbekistonda ichki va xorijiy pasport, shuningdek ID-karta rasmiylashtirish uchun davlat bojini hisoblaydi. Summa hujjat turi va shoshilinchligiga bog'liq.",
      "Davlat boji BHM (bazaviy hisoblash miqdori) ulushlarida ifodalanadi. Kalkulyator BHMning dolzarb miqdori bo'yicha avtomatik ravishda so'mga qayta hisoblaydi.",
    ],
    faq: [
      {
        questionRu: 'Сколько стоит загранпаспорт?',
        questionUz: "Xorijiy pasport qancha turadi?",
        answerRu: 'Стоимость зависит от типа паспорта и срочности. Обычный — от 2 БРВ, срочный — от 4 БРВ.',
        answerUz: "Narxi pasport turi va shoshilinchligiga bog'liq. Oddiy — 2 BHMdan, shoshilinch — 4 BHMdan.",
      },
      {
        questionRu: 'Как оплатить госпошлину?',
        questionUz: "Davlat bojini qanday to'lash mumkin?",
        answerRu: 'Оплата доступна через банки и платёжные системы Click, Payme.',
        answerUz: "To'lov banklar va Click, Payme to'lov tizimlari orqali mavjud.",
      },
    ],
  },

  'state-duties': {
    paragraphsRu: [
      'Калькулятор госпошлин рассчитывает размер государственной пошлины для различных юридических действий: суд, нотариус, регистрация, лицензирование и другие.',
      'Размер пошлины определяется в БРВ и зависит от вида действия. Калькулятор пересчитывает в сумы по текущему размеру БРВ.',
    ],
    paragraphsUz: [
      "Davlat bojlari kalkulyatori turli yuridik harakatlar uchun davlat bojining miqdorini hisoblaydi: sud, notarius, ro'yxatga olish, litsenziyalash va boshqalar.",
      "Boj miqdori BHMda belgilanadi va harakat turiga bog'liq. Kalkulyator joriy BHM miqdori bo'yicha so'mga qayta hisoblaydi.",
    ],
    faq: [
      {
        questionRu: 'Как рассчитать госпошлину в суд?',
        questionUz: "Sudga davlat bojini qanday hisoblash mumkin?",
        answerRu: 'Зависит от вида иска и суммы требований. Калькулятор автоматически определит размер пошлины.',
        answerUz: "Da'vo turi va talablar summasiga bog'liq. Kalkulyator boj miqdorini avtomatik aniqlaydi.",
      },
      {
        questionRu: 'Что такое БРВ?',
        questionUz: "BHM nima?",
        answerRu: 'Базовая расчётная величина (БРВ) — размер, используемый для расчёта различных платежей и штрафов. Пересматривается ежегодно.',
        answerUz: "Bazaviy hisoblash miqdori (BHM) — turli to'lovlar va jarimalarni hisoblash uchun ishlatiladigan miqdor. Har yili qayta ko'rib chiqiladi.",
      },
    ],
  },

  'remittances': {
    paragraphsRu: [
      'Калькулятор денежных переводов рассчитывает стоимость отправки денег из-за рубежа в Узбекистан. Сравнивает комиссии и курсы различных систем денежных переводов.',
      'Формула: Получаемая сумма = (Отправляемая сумма − Комиссия) × Курс конвертации.',
    ],
    paragraphsUz: [
      "Pul o'tkazmalari kalkulyatori chet eldan O'zbekistonga pul jo'natish qiymatini hisoblaydi. Turli pul o'tkazish tizimlarining komissiyalari va kurslarini solishtiradi.",
      "Formula: Olinadigan summa = (Jo'natiladigan summa − Komissiya) × Konvertatsiya kursi.",
    ],
    faq: [
      {
        questionRu: 'Какой самый выгодный способ перевода денег?',
        questionUz: "Pul o'tkazishning eng foydali usuli qaysi?",
        answerRu: 'Зависит от суммы и направления. Банковские переводы дешевле, но медленнее. Системы быстрых переводов удобнее.',
        answerUz: "Summa va yo'nalishga bog'liq. Bank o'tkazmalari arzonroq, lekin sekinroq. Tez o'tkazma tizimlari qulayroq.",
      },
      {
        questionRu: 'Облагаются ли переводы из-за рубежа налогом?',
        questionUz: "Chet eldan pul o'tkazmalariga soliq solinadimi?",
        answerRu: 'Денежные переводы физических лиц из-за рубежа не облагаются налогом в Узбекистане.',
        answerUz: "Jismoniy shaxslarning chet eldan pul o'tkazmalari O'zbekistonda soliqqa tortilmaydi.",
      },
    ],
  },

  'brv': {
    paragraphsRu: [
      'Калькулятор БРВ (базовой расчётной величины) пересчитывает суммы из БРВ в сумы и обратно. БРВ используется для расчёта штрафов, госпошлин, пособий и других платежей в Узбекистане.',
      'Формула: Сумма в сумах = Количество БРВ × Размер БРВ. Размер БРВ пересматривается ежегодно правительством.',
    ],
    paragraphsUz: [
      "BHM kalkulyatori (bazaviy hisoblash miqdori) summalarni BHMdan so'mga va aksincha qayta hisoblaydi. BHM O'zbekistonda jarimalar, davlat bojlari, nafaqalar va boshqa to'lovlarni hisoblash uchun ishlatiladi.",
      "Formula: So'mdagi summa = BHM soni × BHM miqdori. BHM miqdori hukumat tomonidan har yili qayta ko'rib chiqiladi.",
    ],
    faq: [
      {
        questionRu: 'Чему равен 1 БРВ?',
        questionUz: "1 BHM nimaga teng?",
        answerRu: 'Размер БРВ устанавливается ежегодно. Актуальное значение отображается в калькуляторе.',
        answerUz: "BHM miqdori har yili belgilanadi. Dolzarb qiymat kalkulyatorda ko'rsatiladi.",
      },
      {
        questionRu: 'Для чего используется БРВ?',
        questionUz: "BHM nima uchun ishlatiladi?",
        answerRu: 'БРВ используется для расчёта штрафов, госпошлин, пособий, стипендий и других социальных выплат.',
        answerUz: "BHM jarimalar, davlat bojlari, nafaqalar, stipendiyalar va boshqa ijtimoiy to'lovlarni hisoblash uchun ishlatiladi.",
      },
    ],
  },

  // ===== REMAINING 49 CALCULATORS (generic 1-paragraph, 2 FAQ) =====

  'vat-threshold': {
    paragraphsRu: ['Калькулятор порога НДС позволяет определить, достигла ли выручка вашего предприятия порога обязательной регистрации в качестве плательщика НДС в Узбекистане. Введите годовой оборот, и калькулятор покажет, нужно ли вставать на учёт.'],
    paragraphsUz: ["QQS chegarasi kalkulyatori korxonangiz daromadi O'zbekistonda QQS to'lovchisi sifatida majburiy ro'yxatga olish chegarasiga yetganligini aniqlash imkonini beradi. Yillik aylanmani kiriting va kalkulyator ro'yxatga olish zarurligini ko'rsatadi."],
    faq: [
      { questionRu: 'Какой порог для обязательной регистрации по НДС?', questionUz: "QQS bo'yicha majburiy ro'yxatga olish chegarasi qancha?", answerRu: 'Порог устанавливается правительством и пересматривается ежегодно. Актуальное значение — в калькуляторе.', answerUz: "Chegara hukumat tomonidan belgilanadi va har yili qayta ko'rib chiqiladi. Dolzarb qiymat — kalkulyatorda." },
      { questionRu: 'Что будет, если не зарегистрироваться по НДС?', questionUz: "QQS bo'yicha ro'yxatga olinmasa nima bo'ladi?", answerRu: 'При превышении порога и отсутствии регистрации начисляются штрафы и пени.', answerUz: "Chegaradan oshib, ro'yxatga olinmagan taqdirda jarimalar va peniyalar hisoblanadi." },
    ],
  },
  'property-tax': {
    paragraphsRu: ['Калькулятор налога на имущество рассчитывает сумму ежегодного налога на имущество физических и юридических лиц в Узбекистане на основе кадастровой стоимости объекта.'],
    paragraphsUz: ["Mol-mulk solig'i kalkulyatori obyektning kadastr qiymati asosida O'zbekistondagi jismoniy va yuridik shaxslarning yillik mol-mulk solig'i summasini hisoblaydi."],
    faq: [
      { questionRu: 'Как определяется кадастровая стоимость?', questionUz: "Kadastr qiymati qanday aniqlanadi?", answerRu: 'Кадастровая стоимость определяется государственными органами и публикуется на сайте кадастра.', answerUz: "Kadastr qiymati davlat organlari tomonidan aniqlanadi va kadastr saytida e'lon qilinadi." },
      { questionRu: 'Кто освобождён от налога на имущество?', questionUz: "Kim mol-mulk solig'idan ozod qilingan?", answerRu: 'Льготы предусмотрены для пенсионеров, инвалидов и некоторых других категорий граждан.', answerUz: "Imtiyozlar nafaqaxo'rlar, nogironlar va boshqa ayrim toifadagi fuqarolar uchun ko'zda tutilgan." },
    ],
  },
  'land-tax': {
    paragraphsRu: ['Калькулятор земельного налога рассчитывает ежегодный налог на земельные участки в Узбекистане с учётом категории земли, площади и местоположения.'],
    paragraphsUz: ["Yer solig'i kalkulyatori yer toifasi, maydoni va joylashuvini hisobga olgan holda O'zbekistondagi yer uchastkalari uchun yillik soliqni hisoblaydi."],
    faq: [
      { questionRu: 'От чего зависит размер земельного налога?', questionUz: "Yer solig'i miqdori nimaga bog'liq?", answerRu: 'От категории земли, площади, кадастровой стоимости и местоположения.', answerUz: "Yer toifasi, maydoni, kadastr qiymati va joylashuviga bog'liq." },
      { questionRu: 'Когда нужно платить земельный налог?', questionUz: "Yer solig'ini qachon to'lash kerak?", answerRu: 'Земельный налог уплачивается ежеквартально равными долями.', answerUz: "Yer solig'i har chorakda teng ulushlar bilan to'lanadi." },
    ],
  },
  'vehicle-tax': {
    paragraphsRu: ['Калькулятор транспортного налога рассчитывает ежегодный налог на автомобиль в Узбекистане в зависимости от объёма двигателя, типа транспортного средства и года выпуска.'],
    paragraphsUz: ["Transport solig'i kalkulyatori dvigatel hajmi, transport vositasi turi va ishlab chiqarilgan yiliga qarab O'zbekistondagi avtomobil uchun yillik soliqni hisoblaydi."],
    faq: [
      { questionRu: 'Как рассчитывается транспортный налог?', questionUz: "Transport solig'i qanday hisoblanadi?", answerRu: 'На основе объёма двигателя и минимальной заработной платы. Чем больше объём — тем выше налог.', answerUz: "Dvigatel hajmi va eng kam ish haqi asosida. Hajm qanchalik katta — soliq shunchalik yuqori." },
      { questionRu: 'Есть ли льготы по транспортному налогу?', questionUz: "Transport solig'i bo'yicha imtiyozlar bormi?", answerRu: 'Льготы предусмотрены для электромобилей и отдельных категорий граждан.', answerUz: "Elektromobillar va ayrim toifadagi fuqarolar uchun imtiyozlar ko'zda tutilgan." },
    ],
  },
  'corporate-tax': {
    paragraphsRu: ['Калькулятор налога на прибыль рассчитывает сумму налога для юридических лиц в Узбекистане по ставке 15% с учётом вычетов и льгот.'],
    paragraphsUz: ["Foyda solig'i kalkulyatori chegirmalar va imtiyozlarni hisobga olgan holda 15% stavkada O'zbekistondagi yuridik shaxslar uchun soliq summasini hisoblaydi."],
    faq: [
      { questionRu: 'Какая ставка налога на прибыль?', questionUz: "Foyda solig'i stavkasi qancha?", answerRu: 'Стандартная ставка — 15%. Для некоторых отраслей применяются льготные ставки.', answerUz: "Standart stavka — 15%. Ayrim tarmoqlar uchun imtiyozli stavkalar qo'llaniladi." },
      { questionRu: 'Какие расходы можно вычесть из налоговой базы?', questionUz: "Soliq bazasidan qanday xarajatlarni chegirib tashlash mumkin?", answerRu: 'Вычитаются обоснованные и документально подтверждённые расходы, связанные с предпринимательской деятельностью.', answerUz: "Tadbirkorlik faoliyati bilan bog'liq asoslangan va hujjat bilan tasdiqlangan xarajatlar chiqariladi." },
    ],
  },
  'tax-penalty': {
    paragraphsRu: ['Калькулятор пени по налогам рассчитывает размер штрафных санкций за несвоевременную уплату налогов в Узбекистане. Пеня начисляется за каждый день просрочки.'],
    paragraphsUz: ["Soliq peniyalari kalkulyatori O'zbekistonda soliqlarni o'z vaqtida to'lamaganlik uchun jarima sanksiyalari miqdorini hisoblaydi. Peniya kechiktirilgan har bir kun uchun hisoblanadi."],
    faq: [
      { questionRu: 'Как рассчитываются пени по налогам?', questionUz: "Soliq peniyalari qanday hisoblanadi?", answerRu: 'Пеня = Сумма задолженности × Ставка рефинансирования ЦБ × Дни просрочки / 365.', answerUz: "Peniya = Qarzdorlik summasi × MB refinansirlash stavkasi × Kechikish kunlari / 365." },
      { questionRu: 'Можно ли уменьшить или отменить пени?', questionUz: "Peniyalarni kamaytirish yoki bekor qilish mumkinmi?", answerRu: 'В некоторых случаях возможно при своевременной подаче заявления и уплате основной суммы.', answerUz: "Ayrim hollarda ariza o'z vaqtida topshirilsa va asosiy summa to'langan bo'lsa mumkin." },
    ],
  },
  'self-employed': {
    paragraphsRu: ['Калькулятор для самозанятых рассчитывает налоги и обязательные платежи для лиц, работающих на себя. Учитывает специальный налоговый режим для самозанятых в Узбекистане.'],
    paragraphsUz: ["O'z-o'zini band qilgan shaxslar kalkulyatori o'zi uchun ishlaydigan shaxslar uchun soliqlar va majburiy to'lovlarni hisoblaydi. O'zbekistonda o'z-o'zini band qilgan shaxslar uchun maxsus soliq rejimini hisobga oladi."],
    faq: [
      { questionRu: 'Кто считается самозанятым?', questionUz: "Kim o'z-o'zini band qilgan deb hisoblanadi?", answerRu: 'Физическое лицо, оказывающее услуги или продающее товары без регистрации ИП.', answerUz: "YaTT ro'yxatga olmasdan xizmat ko'rsatuvchi yoki tovar sotuvchi jismoniy shaxs." },
      { questionRu: 'Какой налог платит самозанятый?', questionUz: "O'z-o'zini band qilgan shaxs qanday soliq to'laydi?", answerRu: 'Самозанятые уплачивают фиксированный налог, размер которого зависит от вида деятельности.', answerUz: "O'z-o'zini band qilgan shaxslar faoliyat turiga qarab belgilangan soliq to'laydi." },
    ],
  },
  'turnover-tax': {
    paragraphsRu: ['Калькулятор налога с оборота рассчитывает единый налоговый платёж от оборота для малого бизнеса в Узбекистане. Ставка зависит от вида деятельности.'],
    paragraphsUz: ["Aylanma solig'i kalkulyatori O'zbekistondagi kichik biznes uchun aylanmadan yagona soliq to'lovini hisoblaydi. Stavka faoliyat turiga bog'liq."],
    faq: [
      { questionRu: 'Кто может платить налог с оборота?', questionUz: "Kim aylanma solig'i to'lashi mumkin?", answerRu: 'Субъекты малого бизнеса, не являющиеся плательщиками общеустановленных налогов.', answerUz: "Umumiy belgilangan soliqlar to'lovchisi bo'lmagan kichik biznes subyektlari." },
      { questionRu: 'Какова ставка налога с оборота?', questionUz: "Aylanma solig'i stavkasi qancha?", answerRu: 'Ставка зависит от вида деятельности и составляет от 4% до 25%.', answerUz: "Stavka faoliyat turiga bog'liq va 4% dan 25% gacha." },
    ],
  },
  'sick-leave': {
    paragraphsRu: ['Калькулятор больничного рассчитывает пособие по временной нетрудоспособности в Узбекистане на основе среднего заработка, стажа работы и количества дней больничного.'],
    paragraphsUz: ["Kasallik varaqasi kalkulyatori O'zbekistonda o'rtacha ish haqi, ish staji va kasallik kunlari soni asosida vaqtincha mehnatga layoqatsizlik nafaqasini hisoblaydi."],
    faq: [
      { questionRu: 'Как рассчитывается больничный?', questionUz: "Kasallik varaqasi qanday hisoblanadi?", answerRu: 'Пособие = Средний дневной заработок × Процент от стажа × Дни нетрудоспособности.', answerUz: "Nafaqa = O'rtacha kunlik ish haqi × Stajdan foiz × Mehnatga layoqatsizlik kunlari." },
      { questionRu: 'Сколько процентов от зарплаты выплачивают на больничном?', questionUz: "Kasallik varaqasida ish haqining necha foizi to'lanadi?", answerRu: 'При стаже до 5 лет — 60%, 5-8 лет — 80%, свыше 8 лет — 100%.', answerUz: "Staj 5 yilgacha — 60%, 5-8 yil — 80%, 8 yildan ortiq — 100%." },
    ],
  },
  'maternity': {
    paragraphsRu: ['Калькулятор декретных рассчитывает пособие по беременности и родам в Узбекистане. Учитывает средний заработок и продолжительность отпуска по беременности.'],
    paragraphsUz: ["Tug'ruq ta'tili kalkulyatori O'zbekistonda homiladorlik va tug'ish nafaqasini hisoblaydi. O'rtacha ish haqi va homiladorlik ta'tili davomiyligini hisobga oladi."],
    faq: [
      { questionRu: 'Сколько дней декретный отпуск?', questionUz: "Tug'ruq ta'tili necha kun?", answerRu: 'Стандартный отпуск — 126 календарных дней (70 дней до родов и 56 после).', answerUz: "Standart ta'til — 126 kalendar kun (tug'ishdan oldin 70 kun va keyin 56)." },
      { questionRu: 'Как рассчитывается пособие по беременности?', questionUz: "Homiladorlik nafaqasi qanday hisoblanadi?", answerRu: 'На основе среднего дневного заработка за последние 12 месяцев.', answerUz: "So'nggi 12 oydagi o'rtacha kunlik ish haqi asosida." },
    ],
  },
  'severance': {
    paragraphsRu: ['Калькулятор выходного пособия рассчитывает компенсацию при увольнении в Узбекистане. Размер зависит от причины увольнения и стажа работы.'],
    paragraphsUz: ["Ishdan bo'shatish nafaqasi kalkulyatori O'zbekistonda ishdan bo'shashda kompensatsiyani hisoblaydi. Miqdor ishdan bo'shatish sababi va ish stajiga bog'liq."],
    faq: [
      { questionRu: 'В каких случаях выплачивается выходное пособие?', questionUz: "Qanday hollarda ishdan bo'shatish nafaqasi to'lanadi?", answerRu: 'При сокращении, ликвидации предприятия и в других случаях, предусмотренных Трудовым кодексом.', answerUz: "Qisqartirish, korxonani tugatish va Mehnat kodeksida ko'zda tutilgan boshqa hollarda." },
      { questionRu: 'Каков размер выходного пособия?', questionUz: "Ishdan bo'shatish nafaqasi miqdori qancha?", answerRu: 'Обычно от 1 до 3 среднемесячных заработков в зависимости от причины увольнения.', answerUz: "Odatda ishdan bo'shatish sababiga qarab 1 dan 3 gacha o'rtacha oylik ish haqi." },
    ],
  },
  'alimony': {
    paragraphsRu: ['Калькулятор алиментов рассчитывает размер выплат на содержание детей в Узбекистане. Размер зависит от количества детей и дохода плательщика.'],
    paragraphsUz: ["Nafaqa kalkulyatori O'zbekistonda bolalar ta'minoti uchun to'lovlar miqdorini hisoblaydi. Miqdor bolalar soni va to'lovchi daromadiga bog'liq."],
    faq: [
      { questionRu: 'Какой процент от дохода составляют алименты?', questionUz: "Nafaqa daromadning necha foizini tashkil etadi?", answerRu: 'На 1 ребёнка — 1/4, на 2 детей — 1/3, на 3 и более — 1/2 дохода.', answerUz: "1 bola uchun — 1/4, 2 bola uchun — 1/3, 3 va undan ortiq — daromadning 1/2." },
      { questionRu: 'С каких доходов удерживаются алименты?', questionUz: "Qanday daromadlardan nafaqa ushlab qolinadi?", answerRu: 'Со всех видов дохода: зарплата, премии, пенсии, пособия и другие поступления.', answerUz: "Barcha daromad turlaridan: ish haqi, mukofotlar, pensiya, nafaqalar va boshqa tushumlar." },
    ],
  },
  'overtime': {
    paragraphsRu: ['Калькулятор сверхурочных рассчитывает оплату за работу в выходные, праздничные дни и сверхурочное время в Узбекистане по нормам Трудового кодекса.'],
    paragraphsUz: ["Qo'shimcha ish vaqti kalkulyatori O'zbekiston Mehnat kodeksi normalariga ko'ra dam olish, bayram kunlari va qo'shimcha ish vaqtida ishlash uchun to'lovni hisoblaydi."],
    faq: [
      { questionRu: 'Как оплачивается сверхурочная работа?', questionUz: "Qo'shimcha ish vaqti qanday to'lanadi?", answerRu: 'Первые 2 часа — в полуторном размере, далее — в двойном.', answerUz: "Dastlabki 2 soat — yarim baravar, keyingi — ikki baravar." },
      { questionRu: 'Как оплачивается работа в выходные?', questionUz: "Dam olish kunlarida ishlash qanday to'lanadi?", answerRu: 'Работа в выходные и праздничные дни оплачивается не менее чем в двойном размере.', answerUz: "Dam olish va bayram kunlarida ishlash kamida ikki baravar to'lanadi." },
    ],
  },
  'pension': {
    paragraphsRu: ['Калькулятор пенсии рассчитывает ориентировочный размер пенсии по возрасту в Узбекистане на основе трудового стажа и среднемесячного заработка.'],
    paragraphsUz: ["Pensiya kalkulyatori mehnat staji va o'rtacha oylik ish haqi asosida O'zbekistondagi yosh bo'yicha pensiyaning taxminiy miqdorini hisoblaydi."],
    faq: [
      { questionRu: 'С какого возраста выходят на пенсию?', questionUz: "Necha yoshdan pensiyaga chiqiladi?", answerRu: 'Мужчины — с 60 лет (стаж 25 лет), женщины — с 55 лет (стаж 20 лет).', answerUz: "Erkaklar — 60 yoshdan (staj 25 yil), ayollar — 55 yoshdan (staj 20 yil)." },
      { questionRu: 'Как увеличить размер пенсии?', questionUz: "Pensiya miqdorini qanday oshirish mumkin?", answerRu: 'Увеличивайте стаж и официальный заработок. Делайте добровольные взносы в ИНПС.', answerUz: "Staj va rasmiy ish haqini oshiring. INPSga ixtiyoriy badalar to'lang." },
    ],
  },
  'installment': {
    paragraphsRu: ['Калькулятор рассрочки рассчитывает ежемесячные платежи при покупке товаров в рассрочку. Учитывает цену, первоначальный взнос, срок и наценку магазина.'],
    paragraphsUz: ["Bo'lib to'lash kalkulyatori tovarlarni bo'lib to'lashda oylik to'lovlarni hisoblaydi. Narx, boshlang'ich badal, muddat va do'kon ustama narxini hisobga oladi."],
    faq: [
      { questionRu: 'Рассрочка — это кредит?', questionUz: "Bo'lib to'lash — bu kreditmi?", answerRu: 'Нет, рассрочка — покупка с поэтапной оплатой без процентов (но может быть наценка).', answerUz: "Yo'q, bo'lib to'lash — foizsiz bosqichma-bosqich to'lov bilan sotib olish (lekin ustama narx bo'lishi mumkin)." },
      { questionRu: 'На какой срок можно оформить рассрочку?', questionUz: "Bo'lib to'lashni qanday muddatga rasmiylashtirish mumkin?", answerRu: 'Обычно от 3 до 24 месяцев в зависимости от магазина и суммы.', answerUz: "Odatda do'kon va summaga qarab 3 dan 24 oygacha." },
    ],
  },
  'early-repayment': {
    paragraphsRu: ['Калькулятор досрочного погашения рассчитывает экономию при частичном или полном досрочном погашении кредита. Показывает новый график платежей и сумму сэкономленных процентов.'],
    paragraphsUz: ["Muddatidan oldin to'lash kalkulyatori kreditni qisman yoki to'liq muddatidan oldin to'lashda tejamkorlikni hisoblaydi. Yangi to'lov jadvalini va tejalgan foizlar summasini ko'rsatadi."],
    faq: [
      { questionRu: 'Выгодно ли досрочное погашение?', questionUz: "Muddatidan oldin to'lash foydalimi?", answerRu: 'Да, вы экономите на процентах. Чем раньше погасите — тем больше экономия.', answerUz: "Ha, foizlarda tejaysiz. Qanchalik erta to'lasangiz — shunchalik ko'p tejaysiz." },
      { questionRu: 'Есть ли штраф за досрочное погашение?', questionUz: "Muddatidan oldin to'lash uchun jarima bormi?", answerRu: 'По закону банки не могут взимать штраф за досрочное погашение потребительских кредитов.', answerUz: "Qonunga ko'ra banklar iste'mol kreditlarini muddatidan oldin to'lash uchun jarima undira olmaydi." },
    ],
  },
  'refinancing': {
    paragraphsRu: ['Калькулятор рефинансирования помогает оценить выгоду от перекредитования — перевода существующего кредита в другой банк с более низкой ставкой.'],
    paragraphsUz: ["Refinansirlash kalkulyatori qayta kreditlash — mavjud kreditni pastroq stavkali boshqa bankka o'tkazish foydasini baholashga yordam beradi."],
    faq: [
      { questionRu: 'Когда выгодно рефинансировать кредит?', questionUz: "Kreditni qachon refinansirlash foydali?", answerRu: 'Когда разница ставок покрывает расходы на рефинансирование (комиссии, оценка, страхование).', answerUz: "Stavkalar farqi refinansirlash xarajatlarini (komissiyalar, baholash, sug'urta) qoplasa." },
      { questionRu: 'Какие документы нужны для рефинансирования?', questionUz: "Refinansirlash uchun qanday hujjatlar kerak?", answerRu: 'Паспорт, справка о доходах, текущий кредитный договор и график платежей.', answerUz: "Pasport, daromad to'g'risida ma'lumotnoma, joriy kredit shartnomasi va to'lov jadvali." },
    ],
  },
  'compound-interest': {
    paragraphsRu: ['Калькулятор сложных процентов рассчитывает рост вложений с учётом реинвестирования (капитализации) процентов. Показывает разницу между простыми и сложными процентами.'],
    paragraphsUz: ["Murakkab foiz kalkulyatori foizlarni qayta investitsiyalash (kapitalizatsiya) hisobga olgan holda qo'yilmalar o'sishini hisoblaydi. Oddiy va murakkab foizlar o'rtasidagi farqni ko'rsatadi."],
    faq: [
      { questionRu: 'В чём разница между простыми и сложными процентами?', questionUz: "Oddiy va murakkab foizlar o'rtasidagi farq nima?", answerRu: 'При сложных процентах проценты начисляются на проценты, что даёт больший доход в долгосрочной перспективе.', answerUz: "Murakkab foizlarda foizlar foizlarga hisoblanadi, bu uzoq muddatda ko'proq daromad beradi." },
      { questionRu: 'Какова формула сложных процентов?', questionUz: "Murakkab foiz formulasi qanday?", answerRu: 'A = P × (1 + r/n)^(n×t), где P — начальная сумма, r — ставка, n — число капитализаций, t — время.', answerUz: "A = P × (1 + r/n)^(n×t), bu yerda P — boshlang'ich summa, r — stavka, n — kapitalizatsiyalar soni, t — vaqt." },
    ],
  },
  'deposit-comparison': {
    paragraphsRu: ['Калькулятор сравнения вкладов позволяет сравнить условия депозитов разных банков Узбекистана. Показывает реальную доходность с учётом капитализации и сроков.'],
    paragraphsUz: ["Omonatlarni solishtirish kalkulyatori O'zbekistonning turli banklari omonat shartlarini solishtirish imkonini beradi. Kapitalizatsiya va muddatlarni hisobga olgan holda real daromadlilikni ko'rsatadi."],
    faq: [
      { questionRu: 'На что обращать внимание при выборе вклада?', questionUz: "Omonat tanlashda nimaga e'tibor berish kerak?", answerRu: 'Ставка, капитализация, минимальная сумма, возможность пополнения и частичного снятия.', answerUz: "Stavka, kapitalizatsiya, minimal summa, to'ldirish va qisman yechish imkoniyati." },
      { questionRu: 'Какой банк предлагает лучшие ставки?', questionUz: "Qaysi bank eng yaxshi stavkalarni taklif qiladi?", answerRu: 'Ставки меняются регулярно. Используйте калькулятор для актуального сравнения.', answerUz: "Stavkalar muntazam o'zgaradi. Dolzarb solishtirish uchun kalkulyatordan foydalaning." },
    ],
  },
  'money-transfer': {
    paragraphsRu: ['Калькулятор денежных переводов сравнивает комиссии и курсы различных систем переводов для отправки денег в Узбекистан и из Узбекистана.'],
    paragraphsUz: ["Pul o'tkazmalari kalkulyatori O'zbekistonga va O'zbekistondan pul jo'natish uchun turli o'tkazma tizimlarining komissiyalari va kurslarini solishtiradi."],
    faq: [
      { questionRu: 'Какие системы переводов работают в Узбекистане?', questionUz: "O'zbekistonda qanday o'tkazma tizimlari ishlaydi?", answerRu: 'Western Union, MoneyGram, Contact, банковские переводы SWIFT, а также мобильные переводы.', answerUz: "Western Union, MoneyGram, Contact, SWIFT bank o'tkazmalari, shuningdek mobil o'tkazmalar." },
      { questionRu: 'Сколько времени занимает перевод?', questionUz: "O'tkazma qancha vaqt oladi?", answerRu: 'Мгновенные системы — от нескольких минут. Банковский перевод — 1-3 рабочих дня.', answerUz: "Tezkor tizimlar — bir necha daqiqadan. Bank o'tkazmasi — 1-3 ish kuni." },
    ],
  },
  'fuel-consumption': {
    paragraphsRu: ['Калькулятор расхода топлива рассчитывает потребление бензина или газа на заданное расстояние. Помогает оценить стоимость поездки.'],
    paragraphsUz: ["Yoqilg'i sarfi kalkulyatori berilgan masofaga benzin yoki gaz iste'molini hisoblaydi. Sayohat qiymatini baholashga yordam beradi."],
    faq: [
      { questionRu: 'Как рассчитать расход топлива?', questionUz: "Yoqilg'i sarfini qanday hisoblash mumkin?", answerRu: 'Расход = (Потреблённое топливо / Пройденное расстояние) × 100.', answerUz: "Sarf = (Iste'mol qilingan yoqilg'i / Bosib o'tilgan masofa) × 100." },
      { questionRu: 'Как снизить расход топлива?', questionUz: "Yoqilg'i sarfini qanday kamaytirish mumkin?", answerRu: 'Поддерживайте оптимальную скорость, проверяйте давление шин и своевременно обслуживайте двигатель.', answerUz: "Optimal tezlikni saqlang, shina bosimini tekshiring va dvigatelni o'z vaqtida xizmat qiling." },
    ],
  },
  'trip-cost': {
    paragraphsRu: ['Калькулятор стоимости поездки рассчитывает полные расходы на автомобильную поездку: топливо, платные дороги, питание и другие расходы.'],
    paragraphsUz: ["Sayohat qiymati kalkulyatori avtomobil sayohatining to'liq xarajatlarini hisoblaydi: yoqilg'i, pullik yo'llar, ovqatlanish va boshqa xarajatlar."],
    faq: [
      { questionRu: 'Что включает стоимость поездки?', questionUz: "Sayohat qiymati nimalarni o'z ichiga oladi?", answerRu: 'Топливо, платные дороги, амортизация автомобиля, питание и проживание (для дальних поездок).', answerUz: "Yoqilg'i, pullik yo'llar, avtomobil amortizatsiyasi, ovqatlanish va turar joy (uzoq sayohatlar uchun)." },
      { questionRu: 'Как рассчитать стоимость топлива для поездки?', questionUz: "Sayohat uchun yoqilg'i narxini qanday hisoblash mumkin?", answerRu: 'Расстояние / 100 × Расход на 100 км × Цена за литр.', answerUz: "Masofa / 100 × 100 km uchun sarf × Litr narxi." },
    ],
  },
  'car-leasing': {
    paragraphsRu: ['Калькулятор автолизинга рассчитывает ежемесячные платежи при лизинге автомобиля в Узбекистане. Учитывает первоначальный взнос, срок, ставку и остаточную стоимость.'],
    paragraphsUz: ["Avtolizing kalkulyatori O'zbekistonda avtomobil lizingida oylik to'lovlarni hisoblaydi. Boshlang'ich badal, muddat, stavka va qoldiq qiymatni hisobga oladi."],
    faq: [
      { questionRu: 'Чем лизинг отличается от кредита?', questionUz: "Lizing kreditdan nimasi bilan farq qiladi?", answerRu: 'При лизинге собственник — лизинговая компания. После выплаты можно выкупить или вернуть авто.', answerUz: "Lizingda mulkdor — lizing kompaniyasi. To'lagandan keyin avtoni sotib olish yoki qaytarish mumkin." },
      { questionRu: 'Какой первоначальный взнос при лизинге?', questionUz: "Lizingda boshlang'ich badal qancha?", answerRu: 'Обычно от 20% до 50% стоимости автомобиля.', answerUz: "Odatda avtomobil qiymatining 20% dan 50% gacha." },
    ],
  },
  'heating': {
    paragraphsRu: ['Калькулятор отопления рассчитывает стоимость центрального отопления или индивидуального обогрева в Узбекистане по актуальным тарифам.'],
    paragraphsUz: ["Isitish kalkulyatori O'zbekistondagi dolzarb tariflar bo'yicha markaziy isitish yoki individual isitish qiymatini hisoblaydi."],
    faq: [
      { questionRu: 'Как рассчитывается плата за отопление?', questionUz: "Isitish uchun to'lov qanday hisoblanadi?", answerRu: 'Плата зависит от площади квартиры и тарифа за квадратный метр.', answerUz: "To'lov kvartira maydoni va kvadrat metr uchun tarifga bog'liq." },
      { questionRu: 'Когда начинается отопительный сезон?', questionUz: "Isitish mavsumi qachon boshlanadi?", answerRu: 'Обычно с 15 октября по 15 апреля, в зависимости от региона.', answerUz: "Odatda 15 oktyabrdan 15 aprelgacha, hududga qarab." },
    ],
  },
  'internet': {
    paragraphsRu: ['Калькулятор интернет-тарифов помогает выбрать оптимальный тариф на интернет, сравнивая предложения основных провайдеров Узбекистана.'],
    paragraphsUz: ["Internet tariflari kalkulyatori O'zbekistonning asosiy provayderlarining takliflarini solishtirib, optimal internet tarifini tanlashga yordam beradi."],
    faq: [
      { questionRu: 'Какие провайдеры работают в Узбекистане?', questionUz: "O'zbekistonda qanday provayderlar ishlaydi?", answerRu: 'Uztelecom, TuronTelecom, Comnet, Sarkor и другие.', answerUz: "Uztelecom, TuronTelecom, Comnet, Sarkor va boshqalar." },
      { questionRu: 'Какая скорость интернета оптимальна для дома?', questionUz: "Uy uchun optimal internet tezligi qancha?", answerRu: 'Для семьи из 3-4 человек рекомендуется от 50 Мбит/с.', answerUz: "3-4 kishilik oila uchun 50 Mbit/s dan tavsiya etiladi." },
    ],
  },
  'rental': {
    paragraphsRu: ['Калькулятор аренды помогает оценить справедливую стоимость аренды квартиры или коммерческого помещения в городах Узбекистана.'],
    paragraphsUz: ["Ijara kalkulyatori O'zbekiston shaharlarida kvartira yoki tijorat binosi ijarasining adolatli qiymatini baholashga yordam beradi."],
    faq: [
      { questionRu: 'Что влияет на стоимость аренды?', questionUz: "Ijara qiymatiga nima ta'sir qiladi?", answerRu: 'Район, площадь, состояние, наличие мебели, этаж и инфраструктура.', answerUz: "Tuman, maydon, holati, mebel mavjudligi, qavat va infratuzilma." },
      { questionRu: 'Нужен ли договор аренды?', questionUz: "Ijara shartnomasi kerakmi?", answerRu: 'Да, рекомендуется оформлять письменный договор для защиты прав обеих сторон.', answerUz: "Ha, ikkala tomon huquqlarini himoya qilish uchun yozma shartnoma tuzish tavsiya etiladi." },
    ],
  },
  'renovation': {
    paragraphsRu: ['Калькулятор ремонта рассчитывает примерную стоимость ремонта квартиры в Узбекистане. Учитывает площадь, тип ремонта (косметический, капитальный, дизайнерский) и стоимость материалов.'],
    paragraphsUz: ["Ta'mirlash kalkulyatori O'zbekistonda kvartira ta'mirlashning taxminiy qiymatini hisoblaydi. Maydon, ta'mir turi (kosmetik, kapital, dizaynerlik) va materiallar narxini hisobga oladi."],
    faq: [
      { questionRu: 'Сколько стоит ремонт квартиры?', questionUz: "Kvartira ta'mirlash qancha turadi?", answerRu: 'Зависит от типа ремонта: косметический — от $50/м², капитальный — от $100/м², дизайнерский — от $200/м².', answerUz: "Ta'mir turiga bog'liq: kosmetik — $50/m² dan, kapital — $100/m² dan, dizaynerlik — $200/m² dan." },
      { questionRu: 'Что включает капитальный ремонт?', questionUz: "Kapital ta'mir nimalarni o'z ichiga oladi?", answerRu: 'Замену коммуникаций, выравнивание стен, полов, установку новой сантехники и электрики.', answerUz: "Kommunikatsiyalarni almashtirish, devor va pollarni tekislash, yangi santexnika va elektrika o'rnatish." },
    ],
  },
  'moving': {
    paragraphsRu: ['Калькулятор переезда рассчитывает примерную стоимость переезда в новую квартиру или дом. Учитывает расстояние, объём вещей и дополнительные услуги.'],
    paragraphsUz: ["Ko'chish kalkulyatori yangi kvartira yoki uyga ko'chishning taxminiy qiymatini hisoblaydi. Masofa, buyumlar hajmi va qo'shimcha xizmatlarni hisobga oladi."],
    faq: [
      { questionRu: 'Сколько стоит переезд?', questionUz: "Ko'chish qancha turadi?", answerRu: 'Зависит от объёма вещей и расстояния. Средняя стоимость — от 500,000 до 3,000,000 сум.', answerUz: "Buyumlar hajmi va masofaga bog'liq. O'rtacha narx — 500,000 dan 3,000,000 so'mgacha." },
      { questionRu: 'Что входит в услугу переезда?', questionUz: "Ko'chish xizmatiga nima kiradi?", answerRu: 'Обычно: погрузка, транспортировка, разгрузка. Упаковка и сборка мебели — отдельно.', answerUz: "Odatda: yuklash, tashish, tushirish. Qadoqlash va mebel yig'ish — alohida." },
    ],
  },
  'margin': {
    paragraphsRu: ['Калькулятор маржи рассчитывает маржинальность бизнеса — разницу между выручкой и себестоимостью в процентном выражении.'],
    paragraphsUz: ["Marja kalkulyatori biznes marjinalligini — tushum va tannarx o'rtasidagi farqni foiz ifodada hisoblaydi."],
    faq: [
      { questionRu: 'В чём разница между маржой и наценкой?', questionUz: "Marja va ustama narx o'rtasidagi farq nima?", answerRu: 'Маржа = (Цена − Себестоимость) / Цена. Наценка = (Цена − Себестоимость) / Себестоимость.', answerUz: "Marja = (Narx − Tannarx) / Narx. Ustama narx = (Narx − Tannarx) / Tannarx." },
      { questionRu: 'Какая маржа считается хорошей?', questionUz: "Qanday marja yaxshi hisoblanadi?", answerRu: 'Зависит от отрасли. В торговле — 20-40%, в услугах — 50-80%.', answerUz: "Tarmoqqa bog'liq. Savdoda — 20-40%, xizmatlarda — 50-80%." },
    ],
  },
  'break-even': {
    paragraphsRu: ['Калькулятор точки безубыточности определяет минимальный объём продаж, необходимый для покрытия всех расходов бизнеса. Помогает планировать продажи.'],
    paragraphsUz: ["Zararsizlik nuqtasi kalkulyatori biznesning barcha xarajatlarini qoplash uchun zarur bo'lgan minimal sotish hajmini aniqlaydi. Sotuvlarni rejalashtishga yordam beradi."],
    faq: [
      { questionRu: 'Как рассчитать точку безубыточности?', questionUz: "Zararsizlik nuqtasini qanday hisoblash mumkin?", answerRu: 'Точка безубыточности = Постоянные расходы / (Цена − Переменные расходы на единицу).', answerUz: "Zararsizlik nuqtasi = Doimiy xarajatlar / (Narx − Birlik uchun o'zgaruvchan xarajatlar)." },
      { questionRu: 'Зачем знать точку безубыточности?', questionUz: "Zararsizlik nuqtasini nimaga bilish kerak?", answerRu: 'Помогает определить минимальный объём продаж для прибыльной работы.', answerUz: "Foydalik bilan ishlash uchun minimal sotish hajmini aniqlashga yordam beradi." },
    ],
  },
  'roi': {
    paragraphsRu: ['Калькулятор ROI (возврата инвестиций) рассчитывает доходность вложений. Показывает, сколько прибыли принёс каждый вложенный сум.'],
    paragraphsUz: ["ROI (investitsiya qaytimi) kalkulyatori qo'yilmalar daromadliligini hisoblaydi. Har bir kiritilgan so'm qancha foyda keltirganini ko'rsatadi."],
    faq: [
      { questionRu: 'Что такое ROI?', questionUz: "ROI nima?", answerRu: 'ROI = (Прибыль − Затраты) / Затраты × 100%. Показывает эффективность инвестиций.', answerUz: "ROI = (Foyda − Xarajatlar) / Xarajatlar × 100%. Investitsiyalar samaradorligini ko'rsatadi." },
      { questionRu: 'Какой ROI считается хорошим?', questionUz: "Qanday ROI yaxshi hisoblanadi?", answerRu: 'ROI выше 20% обычно считается хорошим, но зависит от отрасли и рисков.', answerUz: "20% dan yuqori ROI odatda yaxshi hisoblanadi, lekin tarmoq va risklarga bog'liq." },
    ],
  },
  'ideal-weight': {
    paragraphsRu: ['Калькулятор идеального веса рассчитывает оптимальный вес на основе роста, пола и типа телосложения по формулам Лоренца, Брока и Девайна.'],
    paragraphsUz: ["Ideal vazn kalkulyatori Lorens, Brok va Devayn formulalari bo'yicha bo'y, jins va tana tuzilishi turiga asoslanib optimal vaznni hisoblaydi."],
    faq: [
      { questionRu: 'Какой вес считается нормальным?', questionUz: "Qanday vazn normal hisoblanadi?", answerRu: 'Зависит от роста и телосложения. Калькулятор покажет диапазон нормального веса для вас.', answerUz: "Bo'y va tana tuzilishiga bog'liq. Kalkulyator siz uchun normal vazn diapazonini ko'rsatadi." },
      { questionRu: 'Какая формула самая точная?', questionUz: "Qaysi formula eng aniq?", answerRu: 'Формулы дают ориентир. Для точной оценки обратитесь к врачу.', answerUz: "Formulalar mo'ljal beradi. Aniq baholash uchun shifokorga murojaat qiling." },
    ],
  },
  'macros': {
    paragraphsRu: ['Калькулятор макронутриентов рассчитывает суточную потребность в белках, жирах и углеводах в зависимости от целей (похудение, набор массы, поддержание формы).'],
    paragraphsUz: ["Makronutrientlar kalkulyatori maqsadlarga qarab (ozish, massa yig'ish, shaklni saqlash) oqsillar, yog'lar va uglevodlarga kunlik ehtiyojni hisoblaydi."],
    faq: [
      { questionRu: 'Какое соотношение БЖУ оптимально?', questionUz: "OYU ning optimal nisbati qanday?", answerRu: 'Стандартное: 30% белки, 30% жиры, 40% углеводы. Но зависит от целей.', answerUz: "Standart: 30% oqsillar, 30% yog'lar, 40% uglevodlar. Lekin maqsadlarga bog'liq." },
      { questionRu: 'Сколько белка нужно в день?', questionUz: "Kuniga qancha oqsil kerak?", answerRu: 'Для обычного человека — 0.8-1 г на кг веса. Для спортсменов — 1.5-2 г.', answerUz: "Oddiy odam uchun — vaznning 1 kg ga 0.8-1 g. Sportchilar uchun — 1.5-2 g." },
    ],
  },
  'pregnancy': {
    paragraphsRu: ['Калькулятор беременности рассчитывает предполагаемую дату родов и текущий срок беременности на основе даты последних месячных или даты зачатия.'],
    paragraphsUz: ["Homiladorlik kalkulyatori oxirgi hayz sanasi yoki homiladorlik sanasi asosida taxminiy tug'ilish sanasi va joriy homiladorlik muddatini hisoblaydi."],
    faq: [
      { questionRu: 'Как рассчитать дату родов?', questionUz: "Tug'ilish sanasini qanday hisoblash mumkin?", answerRu: 'К первому дню последних месячных прибавьте 280 дней (40 недель).', answerUz: "Oxirgi hayzning birinchi kuniga 280 kun (40 hafta) qo'shing." },
      { questionRu: 'Какова продолжительность беременности?', questionUz: "Homiladorlik davomiyligi qancha?", answerRu: 'Нормальная беременность длится 37-42 недели, в среднем 40 недель.', answerUz: "Normal homiladorlik 37-42 hafta davom etadi, o'rtacha 40 hafta." },
    ],
  },
  'tuition': {
    paragraphsRu: ['Калькулятор стоимости обучения рассчитывает расходы на высшее образование в вузах Узбекистана, включая контрактную оплату и сопутствующие расходы.'],
    paragraphsUz: ["O'qish qiymati kalkulyatori kontrakt to'lovi va tegishli xarajatlarni o'z ichiga olgan holda O'zbekiston oliy ta'lim muassasalarida oliy ta'lim xarajatlarini hisoblaydi."],
    faq: [
      { questionRu: 'Сколько стоит обучение в вузе?', questionUz: "Oliy ta'lim muassasasida o'qish qancha turadi?", answerRu: 'Зависит от вуза и специальности. Контрактная оплата от 9 до 30+ млн сум в год.', answerUz: "OTM va mutaxassislikka bog'liq. Kontrakt to'lovi yiliga 9 dan 30+ mln so'mgacha." },
      { questionRu: 'Есть ли гранты на обучение?', questionUz: "O'qish uchun grantlar bormi?", answerRu: 'Да, государство выделяет бюджетные (грантовые) места по результатам вступительных экзаменов.', answerUz: "Ha, davlat kirish imtihonlari natijalari bo'yicha byudjet (grant) o'rinlarini ajratadi." },
    ],
  },
  'education-loan': {
    paragraphsRu: ['Калькулятор образовательного кредита рассчитывает условия кредита на обучение в Узбекистане. Учитывает льготные ставки для студентов.'],
    paragraphsUz: ["Ta'lim krediti kalkulyatori O'zbekistonda o'qish uchun kredit shartlarini hisoblaydi. Talabalar uchun imtiyozli stavkalarni hisobga oladi."],
    faq: [
      { questionRu: 'Под какой процент дают образовательный кредит?', questionUz: "Ta'lim krediti necha foizga beriladi?", answerRu: 'Ставки льготные — обычно ниже рыночных. Конкретная ставка зависит от банка и программы.', answerUz: "Stavkalar imtiyozli — odatda bozordagilardan past. Aniq stavka bank va dasturga bog'liq." },
      { questionRu: 'Когда нужно начинать возвращать кредит?', questionUz: "Kreditni qachon qaytarishni boshlash kerak?", answerRu: 'Обычно через 1-3 года после окончания обучения. Зависит от условий банка.', answerUz: "Odatda o'qishni tugatgandan 1-3 yil keyin. Bank shartlariga bog'liq." },
    ],
  },
  'gpa': {
    paragraphsRu: ['Калькулятор GPA рассчитывает средний балл успеваемости по международной или местной шкале оценок. Полезен для подачи документов в зарубежные вузы.'],
    paragraphsUz: ["GPA kalkulyatori xalqaro yoki mahalliy baho shkalasi bo'yicha o'rtacha o'zlashtirish ballini hisoblaydi. Xorijiy OTMlarga hujjat topshirish uchun foydali."],
    faq: [
      { questionRu: 'Что такое GPA?', questionUz: "GPA nima?", answerRu: 'Grade Point Average — средний балл, рассчитанный по 4.0 шкале.', answerUz: "Grade Point Average — 4.0 shkalasi bo'yicha hisoblangan o'rtacha ball." },
      { questionRu: 'Как перевести оценки в GPA?', questionUz: "Baholarni GPAga qanday o'tkazish mumkin?", answerRu: 'Каждой оценке присваивается балл (5=4.0, 4=3.0, 3=2.0), затем рассчитывается средневзвешенное.', answerUz: "Har bir bahoga ball beriladi (5=4.0, 4=3.0, 3=2.0), keyin o'rtacha og'irlik hisoblanadi." },
    ],
  },
  'fitr-sadaka': {
    paragraphsRu: ['Калькулятор фитр-садаки рассчитывает размер обязательной милостыни, выплачиваемой до окончания Рамадана. Размер зависит от стоимости основных продуктов питания.'],
    paragraphsUz: ["Fitr-sadaqa kalkulyatori Ramazon tugashidan oldin to'lanadigan majburiy sadaqa miqdorini hisoblaydi. Miqdor asosiy oziq-ovqat mahsulotlari narxiga bog'liq."],
    faq: [
      { questionRu: 'Кто обязан выплачивать фитр-садаку?', questionUz: "Kim fitr-sadaqa to'lashi shart?", answerRu: 'Каждый мусульманин, имеющий средства сверх необходимого прожиточного минимума.', answerUz: "Zarur yashash minimumidan ortiq mablag'ga ega har bir musulmon." },
      { questionRu: 'Какой размер фитр-садаки?', questionUz: "Fitr-sadaqa miqdori qancha?", answerRu: 'Равен стоимости примерно 2 кг основных продуктов (пшеница, рис, финики).', answerUz: "Taxminan 2 kg asosiy mahsulotlar (bug'doy, guruch, xurmo) qiymatiga teng." },
    ],
  },
  'fidiya-sadaka': {
    paragraphsRu: ['Калькулятор фидия-садаки рассчитывает компенсацию за пропущенные дни поста для лиц, которые не могут соблюдать пост по уважительным причинам.'],
    paragraphsUz: ["Fidiya-sadaqa kalkulyatori uzrli sabablar bilan ro'za tuta olmaydigan shaxslar uchun o'tkazib yuborilgan ro'za kunlari kompensatsiyasini hisoblaydi."],
    faq: [
      { questionRu: 'Кто выплачивает фидия-садаку?', questionUz: "Kim fidiya-sadaqa to'laydi?", answerRu: 'Те, кто не может поститься по состоянию здоровья (хроническая болезнь, старость).', answerUz: "Sog'lig'i tufayli ro'za tuta olmaganlar (surunkali kasallik, keksalik)." },
      { questionRu: 'Каков размер фидия-садаки?', questionUz: "Fidiya-sadaqa miqdori qancha?", answerRu: 'Стоимость кормления одного нуждающегося за каждый пропущенный день.', answerUz: "Har bir o'tkazib yuborilgan kun uchun bitta muhtojni ovqatlantirish qiymati." },
    ],
  },
  'kurban': {
    paragraphsRu: ['Калькулятор курбана рассчитывает стоимость жертвоприношения на праздник Курбан-хайит. Учитывает вид животного и текущие рыночные цены.'],
    paragraphsUz: ["Qurbonlik kalkulyatori Qurbon hayit bayramida qurbonlik qiymatini hisoblaydi. Hayvon turi va joriy bozor narxlarini hisobga oladi."],
    faq: [
      { questionRu: 'Какие животные подходят для курбана?', questionUz: "Qurbonlik uchun qanday hayvonlar mos keladi?", answerRu: 'Баран, коза, корова (1/7 доля) или верблюд (1/7 доля). Животное должно быть определённого возраста и здоровым.', answerUz: "Qo'y, echki, sigir (1/7 ulush) yoki tuya (1/7 ulush). Hayvon muayyan yoshda va sog'lom bo'lishi kerak." },
      { questionRu: 'Когда совершается курбан?', questionUz: "Qurbonlik qachon qilinadi?", answerRu: 'В дни праздника Курбан-хайит: с 10 по 12 Зуль-хиджа.', answerUz: "Qurbon hayit kunlarida: Zul-hijjaning 10 dan 12 gacha." },
    ],
  },
  'date-calc': {
    paragraphsRu: ['Калькулятор дат вычисляет разницу между двумя датами в днях, неделях, месяцах и годах. Также позволяет прибавить или вычесть дни из заданной даты.'],
    paragraphsUz: ["Sana kalkulyatori ikki sana o'rtasidagi farqni kunlar, haftalar, oylar va yillarda hisoblaydi. Shuningdek berilgan sanaga kunlar qo'shish yoki ayirish imkonini beradi."],
    faq: [
      { questionRu: 'Как посчитать количество дней между датами?', questionUz: "Sanalar orasidagi kunlar sonini qanday hisoblash mumkin?", answerRu: 'Введите начальную и конечную дату — калькулятор покажет разницу.', answerUz: "Boshlanish va tugash sanasini kiriting — kalkulyator farqni ko'rsatadi." },
      { questionRu: 'Учитываются ли високосные годы?', questionUz: "Kabisa yillar hisobga olinadimi?", answerRu: 'Да, калькулятор учитывает високосные годы при расчёте.', answerUz: "Ha, kalkulyator hisoblashda kabisa yillarni hisobga oladi." },
    ],
  },
  'area': {
    paragraphsRu: ['Калькулятор площади рассчитывает площадь различных геометрических фигур: прямоугольника, круга, треугольника, трапеции и других.'],
    paragraphsUz: ["Maydon kalkulyatori turli geometrik shakllarning maydonini hisoblaydi: to'g'ri to'rtburchak, aylana, uchburchak, trapetsiya va boshqalar."],
    faq: [
      { questionRu: 'Как рассчитать площадь комнаты?', questionUz: "Xona maydonini qanday hisoblash mumkin?", answerRu: 'Умножьте длину на ширину. Для нестандартных форм разделите на простые фигуры.', answerUz: "Uzunlikni kenglilkka ko'paytiring. Nostandart shakllar uchun oddiy figuralarga bo'ling." },
      { questionRu: 'Как перевести м² в сотки?', questionUz: "m² ni sotixga qanday o'tkazish mumkin?", answerRu: '1 сотка = 100 м². Разделите площадь в м² на 100.', answerUz: "1 sotix = 100 m². Maydonni m² da 100 ga bo'ling." },
    ],
  },
  'unit-converter': {
    paragraphsRu: ['Конвертер единиц измерения переводит значения между различными единицами: длина, вес, объём, температура, скорость и другие.'],
    paragraphsUz: ["O'lchov birliklari konvertori turli birliklar o'rtasida qiymatlarni o'tkazadi: uzunlik, og'irlik, hajm, harorat, tezlik va boshqalar."],
    faq: [
      { questionRu: 'Какие единицы измерения поддерживаются?', questionUz: "Qanday o'lchov birliklari qo'llab-quvvatlanadi?", answerRu: 'Длина, вес, объём, температура, скорость, площадь, давление и время.', answerUz: "Uzunlik, og'irlik, hajm, harorat, tezlik, maydon, bosim va vaqt." },
      { questionRu: 'Как перевести фунты в килограммы?', questionUz: "Funtni kilogrammga qanday o'tkazish mumkin?", answerRu: '1 фунт = 0.4536 кг. Умножьте количество фунтов на 0.4536.', answerUz: "1 funt = 0.4536 kg. Funtlar sonini 0.4536 ga ko'paytiring." },
    ],
  },
  'number-to-words': {
    paragraphsRu: ['Калькулятор числа прописью конвертирует числовые значения в текстовое представление на русском и узбекском языках. Незаменим при заполнении документов и договоров.'],
    paragraphsUz: ["Sonni so'z bilan yozish kalkulyatori raqamli qiymatlarni rus va o'zbek tillarida matn ko'rinishiga aylantiradi. Hujjatlar va shartnomalarni to'ldirishda almashtirib bo'lmaydigan."],
    faq: [
      { questionRu: 'Зачем нужно писать числа прописью?', questionUz: "Nima uchun sonlarni so'z bilan yozish kerak?", answerRu: 'Это обязательно для юридических документов, договоров и финансовых документов.', answerUz: "Bu yuridik hujjatlar, shartnomalar va moliyaviy hujjatlar uchun majburiy." },
      { questionRu: 'Поддерживается ли узбекский язык?', questionUz: "O'zbek tili qo'llab-quvvatlanadinimi?", answerRu: 'Да, калькулятор поддерживает конвертацию на русском и узбекском языках.', answerUz: "Ha, kalkulyator rus va o'zbek tillarida konvertatsiyani qo'llab-quvvatlaydi." },
    ],
  },
  'age': {
    paragraphsRu: ['Калькулятор возраста определяет точный возраст в годах, месяцах и днях на основе даты рождения. Также показывает день недели рождения и знак зодиака.'],
    paragraphsUz: ["Yosh kalkulyatori tug'ilgan sana asosida yillar, oylar va kunlardagi aniq yoshni aniqlaydi. Shuningdek tug'ilgan hafta kuni va zodiak belgisini ko'rsatadi."],
    faq: [
      { questionRu: 'Как точно рассчитать возраст?', questionUz: "Yoshni qanday aniq hisoblash mumkin?", answerRu: 'Введите дату рождения — калькулятор покажет полный возраст с точностью до дня.', answerUz: "Tug'ilgan sanani kiriting — kalkulyator kungacha aniqlikda to'liq yoshni ko'rsatadi." },
      { questionRu: 'Можно ли узнать возраст на определённую дату?', questionUz: "Ma'lum bir sanadagi yoshni bilish mumkinmi?", answerRu: 'Да, укажите целевую дату, и калькулятор рассчитает ваш возраст на тот момент.', answerUz: "Ha, maqsadli sanani ko'rsating va kalkulyator o'sha paytdagi yoshingizni hisoblaydi." },
    ],
  },
  'random': {
    paragraphsRu: ['Генератор случайных чисел создаёт случайные числа в заданном диапазоне. Полезен для лотерей, розыгрышей, генерации паролей и других задач.'],
    paragraphsUz: ["Tasodifiy sonlar generatori berilgan diapazonda tasodifiy sonlarni yaratadi. Lotereya, o'yinlar, parol yaratish va boshqa vazifalar uchun foydali."],
    faq: [
      { questionRu: 'Являются ли числа действительно случайными?', questionUz: "Sonlar haqiqatan ham tasodifiymi?", answerRu: 'Генератор использует криптографически стойкий алгоритм для максимальной случайности.', answerUz: "Generator maksimal tasodifiylik uchun kriptografik jihatdan mustahkam algoritmdan foydalanadi." },
      { questionRu: 'Можно ли сгенерировать несколько чисел?', questionUz: "Bir nechta son generatsiya qilish mumkinmi?", answerRu: 'Да, укажите количество чисел и диапазон.', answerUz: "Ha, sonlar miqdori va diapazonni ko'rsating." },
    ],
  },
  'wedding': {
    paragraphsRu: ['Калькулятор свадьбы рассчитывает примерный бюджет свадебного торжества в Узбекистане. Учитывает количество гостей, выбор ресторана и дополнительные расходы.'],
    paragraphsUz: ["To'y kalkulyatori O'zbekistonda to'y marosimining taxminiy byudjetini hisoblaydi. Mehmonlar soni, restoran tanlovi va qo'shimcha xarajatlarni hisobga oladi."],
    faq: [
      { questionRu: 'Сколько стоит свадьба в Узбекистане?', questionUz: "O'zbekistonda to'y qancha turadi?", answerRu: 'Зависит от количества гостей и уровня торжества. Средний бюджет — от 30 до 100+ млн сум.', answerUz: "Mehmonlar soni va marosim darajasiga bog'liq. O'rtacha byudjet — 30 dan 100+ mln so'mgacha." },
      { questionRu: 'Какие основные статьи расходов на свадьбу?', questionUz: "To'yning asosiy xarajat moddalari qanday?", answerRu: 'Ресторан (40-50%), одежда (15-20%), украшения (10%), фото/видео (5-10%), транспорт (5%).', answerUz: "Restoran (40-50%), kiyim-kechak (15-20%), bezaklar (10%), foto/video (5-10%), transport (5%)." },
    ],
  },
  'cotton-yield': {
    paragraphsRu: ['Калькулятор урожайности хлопка рассчитывает ожидаемый урожай и доход от выращивания хлопка-сырца в Узбекистане с учётом площади, региона и условий.'],
    paragraphsUz: ["Paxta hosildorligi kalkulyatori maydon, hudud va sharoitlarni hisobga olgan holda O'zbekistonda xom-ashyo paxta yetishtirishdan kutilayotgan hosil va daromadni hisoblaydi."],
    faq: [
      { questionRu: 'Какова средняя урожайность хлопка?', questionUz: "Paxtaning o'rtacha hosildorligi qancha?", answerRu: 'Средняя урожайность в Узбекистане — 25-30 центнеров с гектара.', answerUz: "O'zbekistonda o'rtacha hosildorlik — gektaridan 25-30 sentner." },
      { questionRu: 'Какие факторы влияют на урожайность?', questionUz: "Hosildorlikka qanday omillar ta'sir qiladi?", answerRu: 'Климат, сорт, полив, удобрения, сроки посева и обработки.', answerUz: "Iqlim, nav, sug'orish, o'g'itlar, ekish va ishlov berish muddatlari." },
    ],
  },
  'visa-cost': {
    paragraphsRu: ['Калькулятор стоимости визы рассчитывает полную стоимость оформления визы для граждан Узбекистана, включая консульский сбор, сервисный сбор и дополнительные расходы.'],
    paragraphsUz: ["Viza narxi kalkulyatori konsullik to'lovi, servis to'lovi va qo'shimcha xarajatlarni o'z ichiga olgan holda O'zbekiston fuqarolari uchun viza rasmiylashtirish to'liq qiymatini hisoblaydi."],
    faq: [
      { questionRu: 'Из чего складывается стоимость визы?', questionUz: "Viza narxi nimalardan tashkil topadi?", answerRu: 'Консульский сбор, сервисный сбор визового центра, фото, перевод документов и страховка.', answerUz: "Konsullik to'lovi, viza markazi servis to'lovi, foto, hujjatlar tarjimasi va sug'urta." },
      { questionRu: 'В какие страны нужна виза?', questionUz: "Qaysi mamlakatlarga viza kerak?", answerRu: 'Зависит от соглашений. Многие страны СНГ — безвизовые. Для ЕС, США и др. нужна виза.', answerUz: "Kelishuvlarga bog'liq. Ko'p MDH mamlakatlari — vizasiz. YeI, AQSh va boshqalar uchun viza kerak." },
    ],
  },
}

export function getCalculatorArticle(slug: string): CalculatorArticle | null {
  return articles[slug] ?? null
}
