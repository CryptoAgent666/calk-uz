export interface CalculatorArticle {
  slug: string
  paragraphsRu: string[]
  paragraphsUz: string[]
  faqRu: { question: string; answer: string }[]
  faqUz: { question: string; answer: string }[]
  lastUpdated: string
  sources: { name: string; url: string }[]
}

export const CALCULATOR_ARTICLES: CalculatorArticle[] = [
  // =====================================================================
  // TOP 20 PRIORITY-1 CALCULATORS (800+ words, 5-7 FAQ each)
  // =====================================================================

  {
    slug: 'income-tax',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
      { name: 'IT Park', url: 'https://it-park.uz' },
    ],
    paragraphsRu: [
      'По состоянию на 2025 год ставка налога на доходы физических лиц (НДФЛ) в Узбекистане составляет 12%. Это единая плоская ставка, которая применяется ко всем видам доходов резидентов: заработной плате, дивидендам, доходам от предпринимательской деятельности, роялти и прочим выплатам. Нерезиденты уплачивают НДФЛ по ставке 20% с доходов, полученных из источников в Узбекистане. Для резидентов IT Park действует льготная ставка 7,5%, что делает Узбекистан одной из наиболее привлекательных юрисдикций для IT-специалистов в Центральной Азии. Налог удерживается работодателем (налоговым агентом) ежемесячно при выплате заработной платы и перечисляется в бюджет не позднее даты фактической выплаты дохода.',
      'Помимо НДФЛ, с заработной платы в Узбекистане удерживаются обязательные отчисления: социальный налог в размере 12% (для бюджетных организаций — 25%), а также взнос в индивидуальный накопительный пенсионный счёт (ИНПС) — 0,1% от начисленной зарплаты. Таким образом, совокупная налоговая нагрузка на фонд оплаты труда составляет значительную долю. Работодатель уплачивает социальный налог за свой счёт, а НДФЛ и ИНПС удерживаются из зарплаты работника. Базовая расчётная величина (БРВ) с августа 2025 года равна 412 000 сум и используется для расчёта различных нормативов и вычетов.',
      'Рассмотрим пример расчёта. Если ваша начисленная заработная плата составляет 10 000 000 сум в месяц, то: НДФЛ = 10 000 000 × 12% = 1 200 000 сум; ИНПС = 10 000 000 × 0,1% = 10 000 сум; итого удержания = 1 210 000 сум; на руки вы получите 8 790 000 сум. Дополнительно работодатель уплатит социальный налог: 10 000 000 × 12% = 1 200 000 сум. Для сотрудника IT Park с той же зарплатой: НДФЛ = 10 000 000 × 7,5% = 750 000 сум, на руки — 9 240 000 сум — разница составляет 450 000 сум ежемесячно.',
      'Налоговый кодекс предусматривает ряд вычетов и освобождений. Не облагаются НДФЛ: алименты, государственные пенсии, стипендии, материальная помощь в пределах 4,22 БРВ (1 738 640 сум) в год от работодателя, компенсации за неиспользованный отпуск при увольнении, страховые выплаты. Также предусмотрен имущественный вычет при покупке жилья — до 500 БРВ (206 000 000 сум). Индивидуальные предприниматели на общей системе налогообложения уплачивают НДФЛ с чистого дохода (доходы минус документально подтверждённые расходы).',
      'Декларацию по НДФЛ обязаны подавать физические лица, получающие доходы из нескольких источников, от сдачи имущества в аренду, из-за рубежа, а также при получении имущественного вычета. Срок подачи декларации — до 1 апреля года, следующего за отчётным. Декларация подаётся через портал my.soliq.uz или в налоговую инспекцию по месту жительства. За несвоевременную уплату НДФЛ начисляется пеня в размере 0,05% от суммы задолженности за каждый день просрочки. Наш калькулятор НДФЛ автоматически рассчитает сумму налога и чистый доход с учётом всех удержаний — просто введите размер начисленной зарплаты.',
    ],
    paragraphsUz: [
      "2025-yilga ko'ra O'zbekistonda jismoniy shaxslarning daromad solig'i (JShShS) stavkasi 12% ni tashkil etadi. Bu barcha turdagi daromadlarga — ish haqi, dividendlar, tadbirkorlik faoliyatidan olingan daromadlar, royalti va boshqa to'lovlarga qo'llaniladigan yagona tekis stavkadir. Norezidentlar O'zbekistondagi manbalardan olingan daromadlardan 20% stavkada JShShS to'laydilar. IT Park rezidentlari uchun imtiyozli 7,5% stavka amal qiladi, bu O'zbekistonni Markaziy Osiyoda IT-mutaxassislar uchun eng jozibador yurisdiktsiyalardan biriga aylantiradi. Soliq ish beruvchi (soliq agenti) tomonidan har oy ish haqi to'lanayotganda ushlab qolinadi.",
      "JShShSdan tashqari, O'zbekistonda ish haqidan majburiy ajratmalar ushlab qolinadi: 12% miqdorida ijtimoiy soliq (byudjet tashkilotlari uchun — 25%), shuningdek individual jamg'arma pensiya hisobvarag'iga (IJPH) to'lov — hisoblangan ish haqining 0,1%. Shunday qilib, ish haqi fondiga umumiy soliq yuki sezilarli ulushni tashkil etadi. Ish beruvchi ijtimoiy soliqni o'z hisobidan to'laydi, JShShS va IJPH esa xodimning ish haqidan ushlab qolinadi. 2025-yil avgustidan boshlab bazaviy hisoblash kattaligi (BHK) 412 000 so'm ga teng.",
      "Hisoblash misolini ko'rib chiqaylik. Agar sizning hisoblangan oylik ish haqingiz 10 000 000 so'm bo'lsa: JShShS = 10 000 000 × 12% = 1 200 000 so'm; IJPH = 10 000 000 × 0,1% = 10 000 so'm; jami ushlanmalar = 1 210 000 so'm; qo'lingizga 8 790 000 so'm tushadi. Qo'shimcha ravishda ish beruvchi ijtimoiy soliq to'laydi: 10 000 000 × 12% = 1 200 000 so'm. IT Park xodimi uchun xuddi shu ish haqida: JShShS = 10 000 000 × 7,5% = 750 000 so'm, qo'lga — 9 240 000 so'm — farq oyiga 450 000 so'm.",
      "Soliq kodeksida bir qator chegirmalar va ozod qilishlar nazarda tutilgan. JShShSga tortilmaydi: nafaqa, davlat pensiyalari, stipendiyalar, ish beruvchidan yiliga 4,22 BHK (1 738 640 so'm) doirasidagi moddiy yordam, ishdan bo'shatilganda foydalanilmagan ta'til uchun kompensatsiya, sug'urta to'lovlari. Shuningdek, uy-joy sotib olganda mulkiy chegirma — 500 BHK gacha (206 000 000 so'm) nazarda tutilgan.",
      "JShShS deklaratsiyasini bir nechta manbadan daromad oluvchi, mol-mulkni ijaraga beruvchi, xorijdan daromad oluvchi jismoniy shaxslar topshirishi shart. Deklaratsiya topshirish muddati — hisobot yilidan keyingi yilning 1-aprelgacha. Deklaratsiya my.soliq.uz portali orqali yoki yashash joyi bo'yicha soliq inspektsiyasiga topshiriladi. JShShSni o'z vaqtida to'lamaganligi uchun har bir kechiktirilgan kun uchun qarzdorlik summasining 0,05% miqdorida penya hisoblanadi.",
    ],
    faqRu: [
      { question: 'Какая ставка НДФЛ в Узбекистане в 2025 году?', answer: 'Стандартная ставка НДФЛ составляет 12% для резидентов и 20% для нерезидентов. Для резидентов IT Park — льготная ставка 7,5%.' },
      { question: 'Как рассчитать НДФЛ с зарплаты?', answer: 'Умножьте начисленную зарплату на 0,12. Например, при зарплате 10 000 000 сум НДФЛ составит 1 200 000 сум. Также удерживается ИНПС 0,1% (10 000 сум).' },
      { question: 'Какие доходы не облагаются НДФЛ?', answer: 'Не облагаются: алименты, пенсии, стипендии, материальная помощь до 4,22 БРВ в год (1 738 640 сум), компенсации при увольнении, страховые выплаты.' },
      { question: 'Когда подавать декларацию по НДФЛ?', answer: 'До 1 апреля года, следующего за отчётным. Декларация обязательна при доходах из нескольких источников, от аренды или из-за рубежа. Подаётся через my.soliq.uz.' },
      { question: 'Какой размер имущественного вычета при покупке жилья?', answer: 'Вычет составляет до 500 БРВ (206 000 000 сум с августа 2025 года). Предоставляется один раз в жизни при покупке жилья на территории Узбекистана.' },
      { question: 'Чем отличается НДФЛ для сотрудников IT Park?', answer: 'Резиденты IT Park платят НДФЛ по ставке 7,5% вместо 12%. При зарплате 10 млн сум экономия составляет 450 000 сум в месяц.' },
      { question: 'Какой штраф за неуплату НДФЛ?', answer: 'За несвоевременную уплату начисляется пеня 0,05% от суммы задолженности за каждый день просрочки.' },
    ],
    faqUz: [
      { question: "2025-yilda O'zbekistonda JShShS stavkasi qancha?", answer: "Rezidentlar uchun standart JShShS stavkasi 12%, norezidentlar uchun 20%. IT Park rezidentlari uchun imtiyozli stavka 7,5%." },
      { question: "Ish haqidan JShShSni qanday hisoblash mumkin?", answer: "Hisoblangan ish haqini 0,12 ga ko'paytiring. Masalan, 10 000 000 so'm ish haqida JShShS 1 200 000 so'm. Shuningdek IJPH 0,1% (10 000 so'm) ushlab qolinadi." },
      { question: "Qanday daromadlar JShShSga tortilmaydi?", answer: "Tortilmaydi: nafaqa, pensiya, stipendiya, yiliga 4,22 BHK gacha moddiy yordam (1 738 640 so'm), ishdan bo'shatilgandagi kompensatsiya, sug'urta to'lovlari." },
      { question: "JShShS deklaratsiyasini qachon topshirish kerak?", answer: "Hisobot yilidan keyingi yilning 1-aprelgacha. Bir nechta manbadan daromad olganlar uchun majburiy. my.soliq.uz orqali topshiriladi." },
      { question: "Uy-joy sotib olganda mulkiy chegirma qancha?", answer: "Chegirma 500 BHK gacha (2025-yil avgustidan 206 000 000 so'm). Umr davomida bir marta beriladi." },
      { question: "IT Park xodimlari uchun JShShS qanday farq qiladi?", answer: "IT Park rezidentlari 12% o'rniga 7,5% stavkada JShShS to'laydilar. 10 mln so'm ish haqida oylik tejamkorlik 450 000 so'm." },
      { question: "JShShSni to'lamaganlik uchun jarima qancha?", answer: "O'z vaqtida to'lamaganlik uchun har bir kechiktirilgan kun uchun qarzdorlik summasining 0,05% miqdorida penya hisoblanadi." },
    ],
  },

  {
    slug: 'vat',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Ставка налога на добавленную стоимость (НДС) в Узбекистане составляет 12% — одна из самых низких в СНГ. НДС является косвенным налогом, который включается в цену товаров и услуг и фактически уплачивается конечным потребителем. Обязанность по начислению и уплате НДС возлагается на юридических лиц и индивидуальных предпринимателей, чей совокупный оборот за 12 последовательных месяцев превышает порог в 60 000 БРВ (24 720 000 000 сум по состоянию на август 2025 года). Предприятия с оборотом ниже этого порога могут добровольно зарегистрироваться в качестве плательщиков НДС.',
      'Калькулятор НДС выполняет два основных расчёта. Выделение НДС из суммы: если известна цена с НДС, то сумма НДС = Цена с НДС × 12 / 112, а цена без НДС = Цена с НДС × 100 / 112. Начисление НДС на сумму: если известна цена без НДС, то НДС = Цена без НДС × 12 / 100, а цена с НДС = Цена без НДС × 112 / 100. Например, если товар стоит 1 000 000 сум с НДС, то сумма НДС = 1 000 000 × 12 / 112 = 107 143 сум, а цена без НДС = 892 857 сум.',
      'Отчётный период по НДС зависит от объёма выручки: крупные плательщики (с оборотом свыше 100 млрд сум) отчитываются ежемесячно, остальные — ежеквартально. Декларация подаётся через систему my.soliq.uz не позднее 20-го числа месяца, следующего за отчётным периодом. Уплата НДС производится не позднее даты подачи декларации. К нулевой ставке НДС (0%) относится экспорт товаров и ряд международных услуг. Освобождены от НДС: образовательные и медицинские услуги, финансовые услуги, аренда жилых помещений, ритуальные услуги.',
      'Механизм зачёта (входящего НДС) позволяет вычесть из начисленного НДС ту сумму налога, которая была уплачена поставщикам при покупке товаров и услуг для предпринимательской деятельности. НДС к уплате = Исходящий НДС − Входящий НДС. Если входящий НДС превышает исходящий, разница переносится на следующий период или возмещается из бюджета в установленном порядке. Электронные счета-фактуры оформляются через систему faktura.soliq.uz и являются обязательным условием для зачёта входящего НДС.',
      'С 2026 года самозанятые лица, не зарегистрированные как ИП, будут уплачивать налог с оборота по ставке 1% — они не являются плательщиками НДС вне зависимости от объёма оборота. Для ИП на упрощённой системе ставка налога с оборота составляет 4%, и они также не уплачивают НДС, если их оборот не превышает установленный порог. Наш калькулятор поможет быстро выделить или начислить НДС в повседневных расчётах — введите сумму и выберите нужный режим.',
    ],
    paragraphsUz: [
      "O'zbekistonda qo'shilgan qiymat solig'i (QQS) stavkasi 12% — MDHdagi eng past stavkalardan biri. QQS tovarlar va xizmatlar narxiga kiritilgan bilvosita soliq bo'lib, amalda yakuniy iste'molchi tomonidan to'lanadi. QQSni hisoblash va to'lash majburiyati ketma-ket 12 oy davomida umumiy aylanmasi 60 000 BHK (2025-yil avgust holatiga ko'ra 24 720 000 000 so'm) chegarasidan oshgan yuridik shaxslar va yakka tartibdagi tadbirkorlarga yuklatiladi.",
      "QQS kalkulyatori ikkita asosiy hisoblashni bajaradi. Summadan QQSni ajratish: QQS bilan narx ma'lum bo'lsa, QQS summasi = QQS bilan narx × 12 / 112, QQSsiz narx = QQS bilan narx × 100 / 112. Summaga QQS hisoblash: QQSsiz narx ma'lum bo'lsa, QQS = QQSsiz narx × 12 / 100, QQS bilan narx = QQSsiz narx × 112 / 100. Masalan, tovar QQS bilan 1 000 000 so'm tursa, QQS summasi = 107 143 so'm, QQSsiz narx = 892 857 so'm.",
      "QQS bo'yicha hisobot davri tushum hajmiga bog'liq: yirik to'lovchilar (100 mlrd so'mdan ortiq aylanma) har oy, qolganlari har chorakda hisobot beradi. Deklaratsiya my.soliq.uz tizimi orqali hisobot davridan keyingi oyning 20-sanasigacha topshiriladi. Tovarlar eksporti va bir qator xalqaro xizmatlarga nol (0%) QQS stavkasi qo'llaniladi. QQSdan ozod: ta'lim va tibbiy xizmatlar, moliyaviy xizmatlar, turar-joy ijarasi.",
      "Hisob-kitob (kirish QQS) mexanizmi hisoblangan QQSdan tadbirkorlik faoliyati uchun tovar va xizmatlar sotib olishda yetkazib beruvchilarga to'langan soliq summasini chegirib tashlash imkonini beradi. To'lanadigan QQS = Chiqish QQS − Kirish QQS. Elektron hisob-fakturalar faktura.soliq.uz tizimi orqali rasmiylashtiriladi va kirish QQSni hisobga olish uchun majburiy shartdir.",
      "2026-yildan boshlab YaTT sifatida ro'yxatdan o'tmagan o'z-o'zini band qilgan shaxslar aylanmadan 1% stavkada soliq to'laydilar — ular aylanma hajmidan qat'i nazar QQS to'lovchilari hisoblanmaydi. Soddalashtilgan tizimda YaTTlar uchun aylanma solig'i stavkasi 4% bo'lib, ularning aylanmasi chegaradan oshmasa QQS to'lamaydilar.",
    ],
    faqRu: [
      { question: 'Какая ставка НДС в Узбекистане?', answer: 'Стандартная ставка НДС составляет 12%. Экспорт облагается по ставке 0%.' },
      { question: 'Как выделить НДС из суммы?', answer: 'Разделите сумму с НДС на 112 и умножьте на 12. Формула: НДС = Сумма с НДС × 12 / 112. Например, из 1 120 000 сум НДС = 120 000 сум.' },
      { question: 'Как начислить НДС на сумму?', answer: 'Умножьте сумму без НДС на 0,12. Например, 1 000 000 × 0,12 = 120 000 сум НДС. Итого с НДС: 1 120 000 сум.' },
      { question: 'Кто обязан платить НДС?', answer: 'Юридические лица и ИП с оборотом более 60 000 БРВ (24,72 млрд сум) за 12 месяцев. Остальные могут зарегистрироваться добровольно.' },
      { question: 'Какие товары и услуги освобождены от НДС?', answer: 'Образовательные и медицинские услуги, финансовые услуги, аренда жилых помещений, ритуальные услуги, ряд продуктов питания.' },
      { question: 'Как часто сдавать отчётность по НДС?', answer: 'Крупные плательщики (оборот >100 млрд сум) — ежемесячно, остальные — ежеквартально. Срок — до 20-го числа месяца после отчётного периода.' },
    ],
    faqUz: [
      { question: "O'zbekistonda QQS stavkasi qancha?", answer: "Standart QQS stavkasi 12%. Eksportga 0% stavka qo'llaniladi." },
      { question: "Summadan QQSni qanday ajratish mumkin?", answer: "QQS bilan summani 112 ga bo'ling va 12 ga ko'paytiring. Formula: QQS = QQS bilan summa × 12 / 112." },
      { question: "Summaga QQSni qanday hisoblash mumkin?", answer: "QQSsiz summani 0,12 ga ko'paytiring. Masalan, 1 000 000 × 0,12 = 120 000 so'm QQS." },
      { question: "QQS to'lash kimga majburiy?", answer: "12 oy davomida aylanmasi 60 000 BHK (24,72 mlrd so'm) dan ortiq yuridik shaxslar va YaTTlarga. Qolganlari ixtiyoriy ro'yxatdan o'tishi mumkin." },
      { question: "Qanday tovar va xizmatlar QQSdan ozod?", answer: "Ta'lim va tibbiy xizmatlar, moliyaviy xizmatlar, turar-joy ijarasi, dafn marosimlari xizmatlari." },
      { question: "QQS bo'yicha hisobotni qanchalik tez-tez topshirish kerak?", answer: "Yirik to'lovchilar (aylanma >100 mlrd so'm) — har oy, qolganlari — har chorak. Muddat — hisobot davridan keyin oyning 20-sanasigacha." },
    ],
  },

  {
    slug: 'salary',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Минимальная заработная плата в Узбекистане с 2025 года установлена на уровне 1 271 000 сум в месяц. Калькулятор зарплаты позволяет рассчитать чистую сумму «на руки» из начисленной (гросс) зарплаты с учётом всех обязательных удержаний: НДФЛ 12%, ИНПС 0,1%, а также определить расходы работодателя на социальный налог 12%. При расчёте «от обратного» — из суммы на руки — калькулятор определит необходимую начисленную зарплату.',
      'Структура удержаний из заработной платы: НДФЛ удерживается по ставке 12% (7,5% для резидентов IT Park) от начисленной суммы; взнос в ИНПС — 0,1% от начисленной суммы. Итого работник получает на руки 87,9% от начисленной зарплаты (92,4% для IT Park). Работодатель дополнительно уплачивает социальный налог 12% от фонда оплаты труда (25% для бюджетных организаций). Таким образом, полная стоимость сотрудника для работодателя = Начисленная зарплата × 1,12.',
      'Пример расчёта: начисленная зарплата 15 000 000 сум. НДФЛ: 15 000 000 × 12% = 1 800 000 сум. ИНПС: 15 000 000 × 0,1% = 15 000 сум. На руки: 15 000 000 − 1 800 000 − 15 000 = 13 185 000 сум. Расходы работодателя (соц. налог): 15 000 000 × 12% = 1 800 000 сум. Полная стоимость сотрудника: 15 000 000 + 1 800 000 = 16 800 000 сум в месяц.',
      'Заработная плата в Узбекистане выплачивается не реже двух раз в месяц — аванс (как правило, 40-50% оклада) и расчёт. Работодатель обязан перечислить НДФЛ в бюджет не позднее дня фактической выплаты зарплаты. Задержка выплаты зарплаты влечёт ответственность работодателя: за каждый день задержки начисляется компенсация в размере 1/300 ставки рефинансирования ЦБ. Ключевая ставка Центрального банка с 2025 года составляет 14%, что соответствует 0,047% в день.',
      'Для расчёта зарплаты при работе неполный месяц используется формула: Зарплата = Оклад / Количество рабочих дней в месяце × Количество отработанных дней. Рабочих дней в месяце обычно 22 (пятидневная рабочая неделя) или 26 (шестидневная). Сверхурочная работа оплачивается: первые 2 часа — в полуторном размере, далее — в двойном. Работа в выходные и праздничные дни — в двойном размере или с предоставлением дополнительного дня отдыха.',
    ],
    paragraphsUz: [
      "O'zbekistonda 2025-yildan boshlab minimal ish haqi oyiga 1 271 000 so'm miqdorida belgilangan. Ish haqi kalkulyatori hisoblangan (gross) ish haqidan barcha majburiy ushlanmalarni — JShShS 12%, IJPH 0,1% — hisobga olgan holda «qo'lga» tegadigan sof summani hisoblash imkonini beradi, shuningdek ish beruvchining ijtimoiy soliq 12% bo'yicha xarajatlarini aniqlaydi.",
      "Ish haqidan ushlanmalar tarkibi: JShShS hisoblangan summadan 12% stavkada (IT Park rezidentlari uchun 7,5%) ushlab qolinadi; IJPH to'lovi — hisoblangan summaning 0,1%. Jami xodim qo'liga hisoblangan ish haqining 87,9% ni oladi (IT Park uchun 92,4%). Ish beruvchi qo'shimcha ravishda ish haqi fondidan 12% ijtimoiy soliq to'laydi (byudjet tashkilotlari uchun 25%).",
      "Hisoblash misoli: hisoblangan ish haqi 15 000 000 so'm. JShShS: 15 000 000 × 12% = 1 800 000 so'm. IJPH: 15 000 000 × 0,1% = 15 000 so'm. Qo'lga: 15 000 000 − 1 800 000 − 15 000 = 13 185 000 so'm. Ish beruvchi xarajatlari (ijtimoiy soliq): 15 000 000 × 12% = 1 800 000 so'm. Xodimning to'liq qiymati: 16 800 000 so'm/oy.",
      "O'zbekistonda ish haqi oyiga kamida ikki marta to'lanadi — avans (odatda okladning 40-50%) va hisob-kitob. Ish beruvchi ish haqi kechiktirilganlik uchun javobgardir: har bir kechiktirilgan kun uchun MB qayta moliyalash stavkasining 1/300 miqdorida kompensatsiya hisoblanadi. Markaziy bankning kalit stavkasi 2025-yildan 14%.",
      "To'liq bo'lmagan oy uchun ish haqi formulasi: Ish haqi = Oklad / Oydagi ish kunlari soni × Ishlangan kunlar soni. Ortiqcha ish haqi: dastlabki 2 soat — yarim baravar, keyin — ikki baravar. Dam olish va bayram kunlaridagi ish — ikki baravar yoki qo'shimcha dam olish kuni beriladi.",
    ],
    faqRu: [
      { question: 'Какая минимальная зарплата в Узбекистане в 2025 году?', answer: 'Минимальная заработная плата составляет 1 271 000 сум в месяц.' },
      { question: 'Сколько процентов удерживается с зарплаты?', answer: 'НДФЛ 12% + ИНПС 0,1% = 12,1% от начисленной зарплаты. Для IT Park: 7,5% + 0,1% = 7,6%.' },
      { question: 'Как рассчитать зарплату «на руки»?', answer: 'Зарплата на руки = Начисленная × (100% − 12% − 0,1%) = Начисленная × 0,879. Например, 10 000 000 × 0,879 = 8 790 000 сум.' },
      { question: 'Сколько работодатель платит сверх зарплаты?', answer: 'Социальный налог 12% от ФОТ (25% для бюджетных). При зарплате 10 млн сум доп. расходы = 1 200 000 сум.' },
      { question: 'Как оплачивается сверхурочная работа?', answer: 'Первые 2 часа — в 1,5-кратном размере, далее — в двойном. Работа в выходные/праздники — в двойном или с предоставлением отгула.' },
      { question: 'Как часто должна выплачиваться зарплата?', answer: 'Не реже двух раз в месяц. За задержку — компенсация 1/300 ставки рефинансирования ЦБ (14%) за каждый день просрочки.' },
    ],
    faqUz: [
      { question: "2025-yilda O'zbekistonda minimal ish haqi qancha?", answer: "Minimal ish haqi oyiga 1 271 000 so'm." },
      { question: "Ish haqidan necha foiz ushlab qolinadi?", answer: "JShShS 12% + IJPH 0,1% = hisoblangan ish haqining 12,1%. IT Park uchun: 7,5% + 0,1% = 7,6%." },
      { question: "Qo'lga tegadigan ish haqini qanday hisoblash mumkin?", answer: "Qo'lga = Hisoblangan × 0,879. Masalan, 10 000 000 × 0,879 = 8 790 000 so'm." },
      { question: "Ish beruvchi ish haqidan tashqari qancha to'laydi?", answer: "Ish haqi fondidan 12% ijtimoiy soliq (byudjet uchun 25%). 10 mln so'm ish haqida qo'shimcha = 1 200 000 so'm." },
      { question: "Ortiqcha ish qanday to'lanadi?", answer: "Dastlabki 2 soat — 1,5 baravarda, keyin — ikki baravarda. Dam olish/bayram kunlarida — ikki baravarda yoki qo'shimcha dam olish kuni." },
      { question: "Ish haqi qanchalik tez-tez to'lanishi kerak?", answer: "Oyiga kamida ikki marta. Kechiktirganlik uchun — MB stavkasining (14%) 1/300 miqdorida har kunlik kompensatsiya." },
    ],
  },

  {
    slug: 'vacation-pay',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
    ],
    paragraphsRu: [
      'Минимальная продолжительность ежегодного оплачиваемого отпуска в Узбекистане составляет 15 рабочих дней (при шестидневной рабочей неделе) или 21 календарный день. Для отдельных категорий работников предусмотрены удлинённые отпуска: педагогические работники — до 56 календарных дней, работники с вредными условиями труда — дополнительно от 6 до 36 рабочих дней. Калькулятор отпускных позволяет точно рассчитать сумму выплат на основе среднедневного заработка.',
      'Расчёт отпускных производится на основе среднего заработка за последние 12 месяцев. Формула: Средний дневной заработок = Сумма заработка за 12 месяцев / Количество фактически отработанных дней. Отпускные = Средний дневной заработок × Количество дней отпуска. В расчёт среднего заработка включаются: оклад, премии, надбавки, доплаты за совмещение. Не включаются: материальная помощь, командировочные, компенсации за использование личного автомобиля.',
      'Пример: заработок за 12 месяцев — 120 000 000 сум, отработано 264 рабочих дня. Средний дневной заработок = 120 000 000 / 264 = 454 545 сум. Отпуск 21 календарный день (без праздников) = 15 рабочих дней. Отпускные = 454 545 × 15 = 6 818 175 сум. С этой суммы удерживается НДФЛ 12% = 818 181 сум. На руки: 5 999 994 сум. Отпускные должны быть выплачены не позднее чем за 3 дня до начала отпуска.',
      'Компенсация за неиспользованный отпуск выплачивается при увольнении работника. Если работник не использовал отпуск за несколько лет, компенсация выплачивается за все неиспользованные дни. Замена ежегодного отпуска денежной компенсацией без увольнения запрещена трудовым законодательством, за исключением части отпуска, превышающей минимальную продолжительность (для удлинённых отпусков).',
      'Отпускные облагаются НДФЛ по стандартной ставке 12% и учитываются при расчёте социального налога. При расчёте отпуска, попадающего на два месяца, отпускные распределяются пропорционально между месяцами для целей бухгалтерского учёта. Праздничные нерабочие дни, приходящиеся на период отпуска, не включаются в число дней отпуска и не оплачиваются. В Узбекистане установлены 11 праздничных нерабочих дней в году.',
    ],
    paragraphsUz: [
      "O'zbekistonda yillik to'lanadigan ta'tilning minimal davomiyligi 15 ish kuni (olti kunlik ish haftasida) yoki 21 kalendar kun. Ayrim toifadagi xodimlar uchun uzaytirilgan ta'tillar nazarda tutilgan: pedagog xodimlar — 56 kalendar kungacha, zararli mehnat sharoitidagi xodimlar — qo'shimcha 6 dan 36 ish kunigacha.",
      "Ta'til haqi so'nggi 12 oy uchun o'rtacha ish haqi asosida hisoblanadi. Formula: O'rtacha kunlik ish haqi = 12 oy uchun ish haqi summasi / Haqiqatda ishlangan kunlar soni. Ta'til haqi = O'rtacha kunlik ish haqi × Ta'til kunlari soni. O'rtacha ish haqiga oklad, mukofotlar, ustamalar kiritiladi. Kiritilmaydi: moddiy yordam, xizmat safari xarajatlari.",
      "Misol: 12 oydagi ish haqi — 120 000 000 so'm, 264 ish kuni ishlangan. O'rtacha kunlik = 120 000 000 / 264 = 454 545 so'm. 21 kalendar kunlik ta'til = 15 ish kuni. Ta'til haqi = 454 545 × 15 = 6 818 175 so'm. JShShS 12% = 818 181 so'm. Qo'lga: 5 999 994 so'm. Ta'til haqi ta'til boshlanishidan kamida 3 kun oldin to'lanishi kerak.",
      "Foydalanilmagan ta'til uchun kompensatsiya xodim ishdan bo'shatilganda to'lanadi. Agar xodim bir necha yil ta'tildan foydalanmagan bo'lsa, barcha foydalanilmagan kunlar uchun kompensatsiya to'lanadi. Ishdan bo'shatilmasdan yillik ta'tilni pul kompensatsiyasiga almashtirish mehnat qonunchiligi bilan taqiqlangan.",
      "Ta'til haqi standart 12% stavkada JShShSga tortiladi. Ikki oyga to'g'ri keladigan ta'tilni hisoblaganda, ta'til haqi buxgalteriya hisobi maqsadida oylar o'rtasida mutanosib taqsimlanadi. Ta'til davriga to'g'ri kelgan bayram dam olish kunlari ta'til kunlari soniga kiritilmaydi. O'zbekistonda yiliga 11 bayram dam olish kuni belgilangan.",
    ],
    faqRu: [
      { question: 'Сколько дней отпуска положено в Узбекистане?', answer: 'Минимум 15 рабочих дней (21 календарный день). Для педагогов — до 56 календарных дней, для вредных условий — дополнительно 6-36 рабочих дней.' },
      { question: 'Как рассчитываются отпускные?', answer: 'Средний дневной заработок за 12 месяцев умножается на число дней отпуска. Средний дневной = Заработок за 12 мес. / Отработанные дни.' },
      { question: 'Когда должны выплатить отпускные?', answer: 'Не позднее чем за 3 дня до начала отпуска.' },
      { question: 'Облагаются ли отпускные НДФЛ?', answer: 'Да, отпускные облагаются НДФЛ по ставке 12% (7,5% для IT Park).' },
      { question: 'Можно ли заменить отпуск денежной компенсацией?', answer: 'Нет, замена запрещена. Компенсация выплачивается только при увольнении. Исключение — часть удлинённого отпуска сверх минимума.' },
      { question: 'Входят ли праздничные дни в отпуск?', answer: 'Нет, праздничные нерабочие дни не включаются в число дней отпуска и не оплачиваются как отпускные.' },
    ],
    faqUz: [
      { question: "O'zbekistonda necha kun ta'til beriladi?", answer: "Kamida 15 ish kuni (21 kalendar kun). Pedagoglar uchun — 56 kalendar kungacha, zararli sharoitlar uchun — qo'shimcha 6-36 ish kuni." },
      { question: "Ta'til haqi qanday hisoblanadi?", answer: "12 oydagi o'rtacha kunlik ish haqi ta'til kunlari soniga ko'paytiriladi. O'rtacha kunlik = 12 oydagi ish haqi / Ishlangan kunlar." },
      { question: "Ta'til haqi qachon to'lanishi kerak?", answer: "Ta'til boshlanishidan kamida 3 kun oldin." },
      { question: "Ta'til haqidan JShShS ushlab qolinadimi?", answer: "Ha, ta'til haqidan 12% stavkada JShShS ushlab qolinadi (IT Park uchun 7,5%)." },
      { question: "Ta'tilni pul kompensatsiyasiga almashtirish mumkinmi?", answer: "Yo'q, almashtirish taqiqlangan. Kompensatsiya faqat ishdan bo'shatilganda to'lanadi." },
      { question: "Bayram kunlari ta'tilga kiradimi?", answer: "Yo'q, bayram dam olish kunlari ta'til kunlari soniga kiritilmaydi." },
    ],
  },

  {
    slug: 'credit',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Банковское законодательство', url: 'https://lex.uz/docs/5765051' },
    ],
    paragraphsRu: [
      'Ключевая ставка Центрального банка Узбекистана составляет 14% годовых, что формирует базу для кредитных ставок коммерческих банков. Средние ставки по потребительским кредитам в 2025 году варьируются от 18% до 28% годовых в зависимости от банка, срока кредита и кредитной истории заёмщика. Калькулятор кредита рассчитывает ежемесячный платёж, общую сумму выплат и переплату по аннуитетной или дифференцированной схеме погашения.',
      'Аннуитетный платёж — фиксированная сумма каждый месяц. Формула: ЕП = С × (r × (1+r)^n) / ((1+r)^n − 1), где С — сумма кредита, r — месячная ставка (годовая/12), n — количество месяцев. Дифференцированный платёж — убывающий, так как проценты начисляются на остаток долга. Формула: ЕП = С/n + (С − С×(m−1)/n) × r, где m — номер месяца. Аннуитет удобнее для планирования бюджета, дифференцированная схема выгоднее по общей переплате.',
      'Пример расчёта: кредит 50 000 000 сум на 3 года (36 месяцев) под 22% годовых. Аннуитетный платёж: месячная ставка = 22/12 = 1,833%, ежемесячный платёж ≈ 1 920 000 сум, общая сумма выплат ≈ 69 120 000 сум, переплата ≈ 19 120 000 сум (38,2% от суммы кредита). При дифференцированной схеме: первый платёж ≈ 2 306 000 сум, последний ≈ 1 414 000 сум, переплата ≈ 17 028 000 сум (34,1%).',
      'При оформлении кредита банки учитывают платёжеспособность заёмщика: ежемесячный платёж не должен превышать 50% чистого дохода. Требуются документы: паспорт, справка о доходах (форма с места работы или выписка из my.soliq.uz), кредитная история из бюро кредитных историй. Обеспечение может быть в виде поручительства, залога имущества или без залога (для зарплатных клиентов банка).',
      'Досрочное погашение кредита в Узбекистане разрешено без штрафных санкций с 2020 года (согласно Закону о банковской деятельности). При досрочном погашении пересчитываются проценты — вы платите только за фактический срок пользования кредитом. Рекомендуется уведомить банк за 30 дней до планируемого досрочного погашения. Рефинансирование существующего кредита под более низкую ставку может быть выгодным при снижении ключевой ставки ЦБ.',
    ],
    paragraphsUz: [
      "O'zbekiston Markaziy bankining kalit stavkasi yillik 14% ni tashkil etadi, bu tijorat banklarining kredit stavkalari uchun asos yaratadi. 2025-yilda iste'mol kreditlari bo'yicha o'rtacha stavkalar bank, kredit muddati va qarz oluvchining kredit tarixiga qarab yillik 18% dan 28% gacha o'zgaradi. Kredit kalkulyatori annuitet yoki differentsial to'lov sxemasi bo'yicha oylik to'lov, umumiy to'lovlar summasi va ortiqcha to'lovni hisoblaydi.",
      "Annuitet to'lov — har oy bir xil summa. Formula: OT = S × (r × (1+r)^n) / ((1+r)^n − 1), bunda S — kredit summasi, r — oylik stavka (yillik/12), n — oylar soni. Differentsial to'lov — kamayib boruvchi, chunki foizlar qoldiq qarzga hisoblanadi. Annuitet byudjetni rejalashtirish uchun qulayroq, differentsial sxema umumiy ortiqcha to'lov bo'yicha foydaliroq.",
      "Hisoblash misoli: 50 000 000 so'mlik kredit 3 yilga (36 oy) yillik 22% da. Annuitet to'lov: oylik stavka = 1,833%, oylik to'lov ≈ 1 920 000 so'm, umumiy to'lovlar ≈ 69 120 000 so'm, ortiqcha to'lov ≈ 19 120 000 so'm (38,2%). Differentsial sxemada: birinchi to'lov ≈ 2 306 000 so'm, oxirgi ≈ 1 414 000 so'm, ortiqcha to'lov ≈ 17 028 000 so'm (34,1%).",
      "Kredit rasmiylashtirishda banklar qarz oluvchining to'lov qobiliyatini hisobga oladi: oylik to'lov sof daromadning 50% dan oshmasligi kerak. Talab qilinadigan hujjatlar: pasport, daromad to'g'risida ma'lumotnoma, kredit tarixi. Ta'minot — kafil, mulk garovi yoki garovsiz (bank ish haqi mijozlari uchun).",
      "O'zbekistonda kreditni muddatidan oldin to'lash 2020-yildan boshlab jarimasisz ruxsat etilgan. Muddatidan oldin to'laganda foizlar qayta hisoblanadi — siz faqat kreditdan haqiqiy foydalanish muddati uchun to'laysiz. Mavjud kreditni pastroq stavkada qayta moliyalash MB kalit stavkasi pasayganida foydali bo'lishi mumkin.",
    ],
    faqRu: [
      { question: 'Какая средняя ставка по кредитам в Узбекистане?', answer: 'Ключевая ставка ЦБ — 14%. Потребительские кредиты: 18-28% годовых. Ипотека: 14-18%. Автокредит: 16-24%.' },
      { question: 'Что такое аннуитетный и дифференцированный платёж?', answer: 'Аннуитет — одинаковая сумма каждый месяц. Дифференцированный — убывающий платёж, больше в начале, меньше в конце. Дифференцированный выгоднее по переплате.' },
      { question: 'Можно ли досрочно погасить кредит?', answer: 'Да, с 2020 года досрочное погашение разрешено без штрафов. Проценты пересчитываются за фактический срок.' },
      { question: 'Какой максимальный размер платежа по кредиту?', answer: 'Банки ограничивают ежемесячный платёж 50% от чистого дохода заёмщика.' },
      { question: 'Какие документы нужны для получения кредита?', answer: 'Паспорт, справка о доходах (с работы или my.soliq.uz), кредитная история. Для залоговых кредитов — документы на имущество.' },
      { question: 'Как уменьшить переплату по кредиту?', answer: 'Выбирайте дифференцированную схему, сокращайте срок кредита, делайте частичные досрочные погашения, рассмотрите рефинансирование при снижении ставок.' },
    ],
    faqUz: [
      { question: "O'zbekistonda kreditlar bo'yicha o'rtacha stavka qancha?", answer: "MB kalit stavkasi — 14%. Iste'mol kreditlari: yillik 18-28%. Ipoteka: 14-18%. Avtokredit: 16-24%." },
      { question: "Annuitet va differentsial to'lov nima?", answer: "Annuitet — har oy bir xil summa. Differentsial — kamayib boruvchi to'lov. Differentsial ortiqcha to'lov bo'yicha foydaliroq." },
      { question: "Kreditni muddatidan oldin to'lash mumkinmi?", answer: "Ha, 2020-yildan jarimasisz ruxsat etilgan. Foizlar haqiqiy muddat uchun qayta hisoblanadi." },
      { question: "Kredit bo'yicha maksimal to'lov miqdori qancha?", answer: "Banklar oylik to'lovni qarz oluvchining sof daromadining 50% bilan cheklaydi." },
      { question: "Kredit olish uchun qanday hujjatlar kerak?", answer: "Pasport, daromad to'g'risida ma'lumotnoma, kredit tarixi. Garovli kreditlar uchun — mulk hujjatlari." },
      { question: "Kredit bo'yicha ortiqcha to'lovni qanday kamaytirish mumkin?", answer: "Differentsial sxemani tanlang, kredit muddatini qisqartiring, qisman muddatidan oldin to'lovlar qiling, stavkalar pasayganda qayta moliyalashni ko'rib chiqing." },
    ],
  },

  {
    slug: 'mortgage',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Государственная программа ипотеки', url: 'https://lex.uz/docs/5765051' },
    ],
    paragraphsRu: [
      'Ипотечное кредитование в Узбекистане активно развивается: ставки по ипотеке в 2025 году варьируются от 14% (субсидированная государственная ипотека) до 22% (коммерческая ипотека). По государственным программам льготной ипотеки ставка для определённых категорий граждан (молодые семьи, многодетные, бюджетные работники) может составлять от 7% до 14%. Максимальный срок ипотеки — до 20 лет, первоначальный взнос — от 15% до 30% стоимости жилья.',
      'Калькулятор ипотеки рассчитывает ежемесячный платёж по аннуитетной схеме (наиболее распространённой для ипотеки), общую сумму выплат и переплату за весь период. Формула расчёта аналогична обычному кредиту: ЕП = С × (r × (1+r)^n) / ((1+r)^n − 1). Пример: квартира стоимостью 500 000 000 сум, первоначальный взнос 20% (100 000 000 сум), сумма ипотеки 400 000 000 сум на 15 лет под 16%. Ежемесячный платёж ≈ 6 120 000 сум, переплата за 15 лет ≈ 701 600 000 сум.',
      'Для получения ипотеки необходимо: стаж работы не менее 6 месяцев на текущем месте, официальный доход, позволяющий обслуживать кредит (платёж не более 50% дохода), положительная кредитная история, возраст от 21 до 55 лет (65 для мужчин). Банки требуют страхование объекта недвижимости на весь срок ипотеки. Некоторые банки предлагают ипотеку на первичное и вторичное жильё, коммерческую недвижимость.',
      'Средняя стоимость квадратного метра жилья в Ташкенте в 2025 году составляет от 8 000 000 до 15 000 000 сум в зависимости от района и класса жилья. В Чиланзарском, Юнусабадском и Мирабадском районах цены выше, в пригородах — значительно ниже. Для расчёта стоимости квартиры смотрите наш калькулятор стоимости квартиры. При покупке жилья также учтите расходы на оформление: нотариальные сборы, госпошлина, оценка недвижимости — суммарно 1-3% от стоимости.',
      'Государственная программа «Обод кишлок» и аналогичные инициативы предоставляют субсидированную ипотеку для строительства индивидуального жилья в сельской местности. Ставки — от 7% годовых, срок — до 20 лет, первоначальный взнос — от 15%. Программа «Ёш оила» предоставляет льготные условия молодым семьям. Для получения субсидированной ипотеки необходимо обратиться в ипотечный банк или коммерческий банк, участвующий в программе.',
    ],
    paragraphsUz: [
      "O'zbekistonda ipoteka kreditlash jadal rivojlanmoqda: 2025-yilda ipoteka stavkalari 14% (davlat subsidiyali ipoteka) dan 22% (tijorat ipotekasi) gacha o'zgaradi. Davlat imtiyozli ipoteka dasturlari bo'yicha ma'lum toifadagi fuqarolar (yosh oilalar, ko'p bolalilar, byudjet xodimlari) uchun stavka 7% dan 14% gacha. Maksimal ipoteka muddati — 20 yilgacha, boshlang'ich to'lov — uy-joy qiymatining 15% dan 30% gacha.",
      "Ipoteka kalkulyatori annuitet sxema bo'yicha oylik to'lov, umumiy to'lovlar summasi va butun davr uchun ortiqcha to'lovni hisoblaydi. Misol: 500 000 000 so'mlik kvartira, boshlang'ich to'lov 20% (100 000 000 so'm), ipoteka summasi 400 000 000 so'm 15 yilga 16% da. Oylik to'lov ≈ 6 120 000 so'm, 15 yildagi ortiqcha to'lov ≈ 701 600 000 so'm.",
      "Ipoteka olish uchun zarur: joriy ish joyida kamida 6 oylik ish staji, kreditni xizmat qilish imkonini beruvchi rasmiy daromad (to'lov daromadning 50% dan ko'p emas), ijobiy kredit tarixi, 21 dan 55 yoshgacha (erkaklar uchun 65). Banklar butun ipoteka muddatiga ko'chmas mulkni sug'urtashni talab qiladi.",
      "2025-yilda Toshkentda turar-joy kvadrat metrining o'rtacha narxi tuman va uy-joy sinfiga qarab 8 000 000 dan 15 000 000 so'mgacha. Uy-joy sotib olishda rasmiylash xarajatlarini ham hisobga oling: notarial yig'imlar, davlat boji, ko'chmas mulk baholash — jami qiymatning 1-3%.",
      "«Obod qishloq» davlat dasturi va shunga o'xshash tashabbuslar qishloq joylarida individual uy-joy qurish uchun subsidiyali ipoteka taqdim etadi. Stavkalar — yillik 7% dan, muddat — 20 yilgacha. «Yosh oila» dasturi yosh oilalarga imtiyozli shartlar beradi. Subsidiyali ipoteka olish uchun ipoteka bankiga yoki dasturda ishtirok etuvchi tijorat bankiga murojaat qiling.",
    ],
    faqRu: [
      { question: 'Какая ставка по ипотеке в Узбекистане?', answer: 'Коммерческая ипотека: 16-22%. Субсидированная государственная: 7-14% для льготных категорий (молодые семьи, многодетные, бюджетные работники).' },
      { question: 'Какой первоначальный взнос нужен для ипотеки?', answer: 'От 15% до 30% стоимости жилья в зависимости от банка и программы.' },
      { question: 'На какой максимальный срок дают ипотеку?', answer: 'До 20 лет. Наиболее распространённые сроки: 10-15 лет.' },
      { question: 'Какие документы нужны для ипотеки?', answer: 'Паспорт, справка о доходах, кредитная история, документы на приобретаемое жильё, оценка недвижимости, страховка объекта.' },
      { question: 'Какие есть льготные ипотечные программы?', answer: '«Ёш оила» для молодых семей, «Обод кишлок» для сельской местности, программы для бюджетных работников — ставки от 7% годовых.' },
      { question: 'Сколько стоит квадратный метр жилья в Ташкенте?', answer: 'В 2025 году: от 8 до 15 млн сум/м² в зависимости от района. Центр и популярные районы — дороже, пригороды — дешевле.' },
    ],
    faqUz: [
      { question: "O'zbekistonda ipoteka stavkasi qancha?", answer: "Tijorat ipotekasi: 16-22%. Davlat subsidiyali: imtiyozli toifalar uchun 7-14% (yosh oilalar, ko'p bolalilar, byudjet xodimlari)." },
      { question: "Ipoteka uchun boshlang'ich to'lov qancha kerak?", answer: "Bank va dasturga qarab uy-joy qiymatining 15% dan 30% gacha." },
      { question: "Ipoteka maksimal necha yilga beriladi?", answer: "20 yilgacha. Eng keng tarqalgan muddatlar: 10-15 yil." },
      { question: "Ipoteka uchun qanday hujjatlar kerak?", answer: "Pasport, daromad ma'lumotnomasi, kredit tarixi, sotib olinadigan uy-joy hujjatlari, ko'chmas mulk baholash, ob'ekt sug'urtasi." },
      { question: "Qanday imtiyozli ipoteka dasturlari bor?", answer: "Yosh oilalar uchun «Yosh oila», qishloq joylari uchun «Obod qishloq», byudjet xodimlari uchun dasturlar — yillik 7% dan stavkalar." },
      { question: "Toshkentda uy-joy kvadrat metri qancha turadi?", answer: "2025-yilda: tumanga qarab 8 dan 15 mln so'm/m² gacha. Markaz va mashhur tumanlar — qimmatroq." },
    ],
  },

  {
    slug: 'auto-credit',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Банковское законодательство', url: 'https://lex.uz/docs/5765051' },
    ],
    paragraphsRu: [
      'Автокредитование в Узбекистане предлагают большинство коммерческих банков по ставкам от 16% до 24% годовых. Ставки зависят от срока кредита (1-7 лет), первоначального взноса, марки автомобиля (новый или б/у), а также от кредитной истории заёмщика. Для автомобилей отечественного производства (UzAuto Motors — Chevrolet) часто действуют специальные программы со сниженными ставками от 14-18% и увеличенным сроком кредита. Калькулятор автокредита рассчитает точный ежемесячный платёж и переплату.',
      'Расчёт автокредита аналогичен потребительскому кредиту — используется аннуитетная формула. Пример: покупка Chevrolet Onix стоимостью 280 000 000 сум. Первоначальный взнос 30% = 84 000 000 сум. Сумма кредита: 196 000 000 сум на 5 лет (60 месяцев) под 20% годовых. Ежемесячный платёж ≈ 5 200 000 сум. Общая сумма выплат: 312 000 000 сум. Переплата: 116 000 000 сум (59% от суммы кредита).',
      'Для получения автокредита необходимы: паспорт, справка о доходах (платёж не должен превышать 50% чистого дохода), кредитная история, водительское удостоверение (некоторые банки). Залогом по автокредиту является приобретаемый автомобиль — ПТС (техпаспорт) хранится в банке до полного погашения кредита. Обязательно страхование автомобиля (КАСКО) на весь срок кредитования, стоимость которого составляет 2-5% от стоимости авто в год.',
      'Для уменьшения ежемесячного платежа рекомендуется увеличить первоначальный взнос: при 50% взносе вместо 30% ежемесячный платёж уменьшится примерно на 30%. Также выгоднее брать кредит на более короткий срок — при 3 годах вместо 5 переплата снижается примерно на 40%. Досрочное погашение автокредита разрешено без штрафов. При необходимости можно рефинансировать автокредит в другом банке, если там предложат более низкую ставку.',
      'Помимо стоимости автомобиля и кредита учтите дополнительные расходы: обязательное страхование ОСАГО (от 65 000 сум), регистрация в ГАИ, установка GPS-трекера (требование некоторых банков), ежегодный налог на транспорт. Рассчитать ОСАГО можно с помощью нашего калькулятора ОСАГО. Для сравнения условий лизинга автомобиля воспользуйтесь калькулятором автолизинга.',
    ],
    paragraphsUz: [
      "O'zbekistonda avtokredit berish ko'pchilik tijorat banklari tomonidan yillik 16% dan 24% gacha stavkalarda taklif etiladi. Stavkalar kredit muddati (1-7 yil), boshlang'ich to'lov, avtomobil markasi (yangi yoki ishlatilgan) va qarz oluvchining kredit tarixiga bog'liq. Mahalliy ishlab chiqarish avtomobillari (UzAuto Motors — Chevrolet) uchun ko'pincha 14-18% dan pasaytirilgan stavkalar bilan maxsus dasturlar amal qiladi.",
      "Avtokredit hisoblash iste'mol kreditiga o'xshash — annuitet formulasi qo'llaniladi. Misol: 280 000 000 so'mlik Chevrolet Onix sotib olish. Boshlang'ich to'lov 30% = 84 000 000 so'm. Kredit summasi: 196 000 000 so'm 5 yilga (60 oy) yillik 20% da. Oylik to'lov ≈ 5 200 000 so'm. Umumiy to'lovlar: 312 000 000 so'm. Ortiqcha to'lov: 116 000 000 so'm (59%).",
      "Avtokredit olish uchun kerak: pasport, daromad ma'lumotnomasi (to'lov sof daromadning 50% dan ko'p bo'lmasligi kerak), kredit tarixi. Avtokredit bo'yicha garov — sotib olinayotgan avtomobil. KASKO sug'urtasi butun kredit muddatiga majburiy, narxi avtomobil qiymatining yiliga 2-5%.",
      "Oylik to'lovni kamaytirish uchun boshlang'ich to'lovni oshiring: 30% o'rniga 50% da oylik to'lov taxminan 30% ga kamayadi. Qisqaroq muddatga kredit olish ham foydaliroq — 5 yil o'rniga 3 yilda ortiqcha to'lov taxminan 40% ga kamayadi. Avtokreditni muddatidan oldin to'lash jarimasisz ruxsat etilgan.",
      "Avtomobil va kredit qiymatidan tashqari qo'shimcha xarajatlarni hisobga oling: majburiy OSAGO sug'urtasi (65 000 so'mdan), YHXda ro'yxatdan o'tish, GPS-treker o'rnatish, yillik transport solig'i. OSAGOni bizning OSAGO kalkulyatorimiz yordamida hisoblashingiz mumkin.",
    ],
    faqRu: [
      { question: 'Какие ставки по автокредитам в Узбекистане?', answer: 'От 14-18% (отечественные авто по спецпрограммам) до 24% (коммерческие ставки). Средняя — 18-22% годовых.' },
      { question: 'Какой первоначальный взнос нужен для автокредита?', answer: 'Обычно от 20% до 40% стоимости авто. Чем больше взнос, тем ниже ставка и переплата.' },
      { question: 'Обязательно ли КАСКО при автокредите?', answer: 'Да, большинство банков требуют КАСКО на весь срок кредита. Стоимость: 2-5% от стоимости авто в год.' },
      { question: 'Можно ли досрочно погасить автокредит?', answer: 'Да, без штрафов. Проценты пересчитываются за фактический срок использования кредита.' },
      { question: 'На какой срок дают автокредит?', answer: 'От 1 до 7 лет. Оптимальный срок — 3-5 лет: баланс между размером платежа и переплатой.' },
      { question: 'Какие дополнительные расходы при покупке авто в кредит?', answer: 'КАСКО (2-5%/год), ОСАГО (от 65 000 сум), регистрация в ГАИ, GPS-трекер, транспортный налог.' },
    ],
    faqUz: [
      { question: "O'zbekistonda avtokredit stavkalari qanday?", answer: "14-18% dan (mahalliy avto maxsus dasturlari) 24% gacha (tijorat stavkalari). O'rtacha — yillik 18-22%." },
      { question: "Avtokredit uchun boshlang'ich to'lov qancha kerak?", answer: "Odatda avtomobil qiymatining 20% dan 40% gacha. Qancha ko'p to'lov — shuncha past stavka va ortiqcha to'lov." },
      { question: "Avtokreditda KASKO majburiymi?", answer: "Ha, ko'pchilik banklar butun kredit muddatiga KASKO talab qiladi. Narxi: avtomobil qiymatining yiliga 2-5%." },
      { question: "Avtokreditni muddatidan oldin to'lash mumkinmi?", answer: "Ha, jarimasisz. Foizlar haqiqiy foydalanish muddati uchun qayta hisoblanadi." },
      { question: "Avtokredit necha yilga beriladi?", answer: "1 dan 7 yilgacha. Optimal muddat — 3-5 yil: to'lov miqdori va ortiqcha to'lov o'rtasida muvozanat." },
      { question: "Kreditga avto sotib olishda qo'shimcha xarajatlar qanday?", answer: "KASKO (yiliga 2-5%), OSAGO (65 000 so'mdan), YHXda ro'yxat, GPS-treker, transport solig'i." },
    ],
  },

  {
    slug: 'deposit',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Фонд гарантирования вкладов', url: 'https://dif.uz' },
    ],
    paragraphsRu: [
      'Ставки по банковским вкладам в Узбекистане в 2025 году составляют от 20% до 26% годовых в национальной валюте (сум) и от 4% до 7% годовых в иностранной валюте (доллар/евро). Высокие ставки в сумах обусловлены ключевой ставкой ЦБ 14% и необходимостью компенсировать инфляцию. Калькулятор депозита рассчитывает доход по вкладу с учётом капитализации процентов, срока и условий размещения.',
      'Виды вкладов: срочный (с фиксированной ставкой, без досрочного снятия), накопительный (с возможностью пополнения), до востребования (низкая ставка, свободный доступ). Расчёт простых процентов: Доход = Сумма × Ставка × Срок(дней) / 365. Расчёт с ежемесячной капитализацией: Итого = Сумма × (1 + Ставка/12)^Месяцы. Капитализация увеличивает доходность за счёт начисления процентов на проценты.',
      'Пример расчёта: вклад 100 000 000 сум на 12 месяцев под 24% годовых. Без капитализации: доход = 100 000 000 × 24% = 24 000 000 сум, итого 124 000 000 сум. С ежемесячной капитализацией: итого = 100 000 000 × (1 + 0,02)^12 = 126 824 179 сум, доход = 26 824 179 сум — на 2 824 179 сум больше. Эффективная ставка при капитализации: 26,82% вместо номинальных 24%.',
      'Проценты по вкладам в Узбекистане не облагаются НДФЛ — это важное преимущество для вкладчиков. Вклады физических лиц гарантированы Фондом гарантирования вкладов граждан в банках на сумму до 200 000 000 сум (эквивалент) на одного вкладчика в одном банке. Это означает, что даже при банкротстве банка вкладчик получит возмещение в пределах гарантированной суммы.',
      'Для максимизации дохода рекомендуется: выбирать вклады с ежемесячной капитализацией; сравнивать ставки нескольких банков (наш калькулятор сравнения вкладов поможет); распределять крупные суммы между банками в пределах гарантии (200 млн сум на банк); учитывать реальную доходность с поправкой на инфляцию. При инфляции 10% и ставке 24% реальная доходность составляет около 14%. Для вкладов в валюте следите за курсом через наш конвертер валют.',
    ],
    paragraphsUz: [
      "O'zbekistonda bank omonatlar bo'yicha stavkalar 2025-yilda milliy valyutada (so'm) yillik 20% dan 26% gacha va xorijiy valyutada (dollar/yevro) yillik 4% dan 7% gacha. So'mdagi yuqori stavkalar MB kalit stavkasi 14% va inflyatsiyani qoplash zarurati bilan bog'liq. Depozit kalkulyatori foizlar kapitalizatsiyasi, muddat va joylashtirish shartlarini hisobga olgan holda omonat bo'yicha daromadni hisoblaydi.",
      "Omonat turlari: muddatli (qat'iy stavka, muddatidan oldin yechib olishsiz), jamg'arma (to'ldirish imkoniyati bilan), talab qilib olinguncha (past stavka, erkin foydalanish). Oddiy foizlar hisobi: Daromad = Summa × Stavka × Muddat(kun) / 365. Oylik kapitalizatsiya bilan: Jami = Summa × (1 + Stavka/12)^Oylar.",
      "Hisoblash misoli: 100 000 000 so'mlik omonat 12 oyga yillik 24% da. Kapitalizatsiyasiz: daromad = 24 000 000 so'm, jami 124 000 000 so'm. Oylik kapitalizatsiya bilan: jami = 126 824 179 so'm, daromad = 26 824 179 so'm — 2 824 179 so'mga ko'proq. Kapitalizatsiyada samarali stavka: nominal 24% o'rniga 26,82%.",
      "O'zbekistonda omonat foizlari JShShSga tortilmaydi — bu omonatchillar uchun muhim afzallik. Jismoniy shaxslar omonatlari Banklardagi fuqarolar omonatlarini kafolatlash fondi tomonidan bir omonatchiga bir bankda 200 000 000 so'mgacha (ekvivalent) miqdorda kafolatlanadi.",
      "Daromadni maksimallashtirish uchun tavsiya etiladi: oylik kapitalizatsiyali omonatlarni tanlash; bir nechta banklarning stavkalarini solishtirish; yirik summalarni banklar o'rtasida kafolat chegarasida (bank boshiga 200 mln so'm) taqsimlash; inflyatsiyani hisobga olgan holda real daromadlilikni baholash. 10% inflyatsiya va 24% stavkada real daromadlilik taxminan 14%.",
    ],
    faqRu: [
      { question: 'Какие ставки по вкладам в сумах в 2025 году?', answer: 'От 20% до 26% годовых в зависимости от банка и срока. Наиболее выгодные ставки — по срочным вкладам на 12-24 месяца.' },
      { question: 'Облагаются ли проценты по вкладам налогом?', answer: 'Нет, проценты по банковским вкладам в Узбекистане не облагаются НДФЛ.' },
      { question: 'Какая сумма гарантирована по вкладам?', answer: 'До 200 000 000 сум на одного вкладчика в одном банке. Гарантируется Фондом гарантирования вкладов.' },
      { question: 'Что такое капитализация процентов?', answer: 'Начисление процентов на ранее начисленные проценты. При ежемесячной капитализации эффективная ставка выше номинальной (24% → 26,82%).' },
      { question: 'Какие ставки по валютным вкладам?', answer: 'От 4% до 7% годовых в долларах/евро. Ниже, чем в сумах, но без валютного риска.' },
      { question: 'Как выбрать лучший вклад?', answer: 'Сравните ставки, учтите капитализацию, проверьте условия досрочного снятия и пополнения. Распределите средства между банками в пределах гарантии.' },
    ],
    faqUz: [
      { question: "2025-yilda so'mdagi omonat stavkalari qanday?", answer: "Bank va muddatga qarab yillik 20% dan 26% gacha. Eng foydali stavkalar — 12-24 oylik muddatli omonatlarda." },
      { question: "Omonat foizlari soliqqa tortiladimi?", answer: "Yo'q, O'zbekistonda bank omonatlari foizlari JShShSga tortilmaydi." },
      { question: "Omonatlar bo'yicha qancha summa kafolatlanadi?", answer: "Bir omonatchiga bir bankda 200 000 000 so'mgacha. Omonatlarni kafolatlash fondi tomonidan kafolatlanadi." },
      { question: "Foizlar kapitalizatsiyasi nima?", answer: "Avval hisoblangan foizlarga foiz hisoblash. Oylik kapitalizatsiyada samarali stavka nominaldan yuqori (24% → 26,82%)." },
      { question: "Valyutali omonat stavkalari qanday?", answer: "Dollar/yevroda yillik 4% dan 7% gacha. So'mdagiga qaraganda past, lekin valyuta xavfisiz." },
    ],
  },

  {
    slug: 'currency-converter',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз — курсы валют', url: 'https://cbu.uz/uz/arkhiv-kursov-valyut/' },
    ],
    paragraphsRu: [
      'Официальный курс валют в Узбекистане устанавливается Центральным банком ежедневно на основе межбанковских торгов. По состоянию на 2025 год курс доллара США колеблется в районе 12 800–13 200 сум, евро — 13 500–14 000 сум, российского рубля — 130–145 сум. Конвертер валют позволяет мгновенно пересчитать суммы между узбекским сумом и основными мировыми валютами по актуальному курсу ЦБ.',
      'ЦБ Узбекистана публикует официальный курс на своём сайте cbu.uz ежедневно до 16:00 по ташкентскому времени. Этот курс используется для бухгалтерских целей, расчёта таможенных пошлин и налогов. Коммерческие банки и обменные пункты устанавливают собственные курсы покупки и продажи с небольшим спредом относительно официального курса (обычно 0,5-1,5%). Для сравнения курсов банков используйте наш калькулятор банковских курсов.',
      'Конвертер поддерживает основные валюты: USD (доллар США), EUR (евро), RUB (российский рубль), GBP (фунт стерлингов), CNY (китайский юань), KZT (казахстанский тенге), KRW (южнокорейская вона), JPY (японская иена), TRY (турецкая лира). Для каждой валюты показывается курс покупки и продажи. Расчёт производится по формуле: Сумма в UZS = Сумма в валюте × Курс.',
      'При обмене крупных сумм (от 1 000 USD и выше) коммерческие банки могут предложить более выгодный курс, чем обменные пункты. Для переводов за рубеж и получения денежных переводов важно учитывать не только курс обмена, но и комиссии за перевод — обычно 1-3% от суммы. Подробнее о стоимости международных переводов — в нашем калькуляторе денежных переводов.',
      'Узбекский сум является свободно конвертируемой валютой с 2017 года, когда была проведена либерализация валютного рынка. Физические лица могут свободно покупать и продавать иностранную валюту без ограничений. Юридические лица обязаны конвертировать валютную выручку в установленном порядке. Для планирования поездок и покупок рекомендуется отслеживать динамику курса за последние месяцы.',
    ],
    paragraphsUz: [
      "O'zbekistonda rasmiy valyuta kursi Markaziy bank tomonidan banklar aro savdolar asosida har kuni belgilanadi. 2025-yil holatiga ko'ra AQSh dollari kursi 12 800–13 200 so'm atrofida, yevro — 13 500–14 000 so'm, rus rubli — 130–145 so'm. Valyuta konverteri MB ning dolzarb kursi bo'yicha o'zbek so'mi va asosiy jahon valyutalari o'rtasida summalarni bir zumda qayta hisoblash imkonini beradi.",
      "O'zbekiston MB rasmiy kursni o'z veb-saytida cbu.uz da har kuni Toshkent vaqti bilan 16:00 gacha e'lon qiladi. Bu kurs buxgalteriya maqsadlari, bojxona boji va soliqlar hisobi uchun qo'llaniladi. Tijorat banklari va ayirboshlash punktlari rasmiy kursga nisbatan kichik spred bilan (odatda 0,5-1,5%) o'z sotib olish va sotish kurslarini belgilaydi.",
      "Konverter asosiy valyutalarni qo'llab-quvvatlaydi: USD, EUR, RUB, GBP, CNY, KZT, KRW, JPY, TRY. Har bir valyuta uchun sotib olish va sotish kursi ko'rsatiladi. Hisoblash formulasi: UZS dagi summa = Valyutadagi summa × Kurs.",
      "Yirik summalarni (1 000 USD va undan ko'p) ayirboshlashda tijorat banklari ayirboshlash punktlariga qaraganda foydaliroq kurs taklif qilishi mumkin. Chet elga pul o'tkazish va pul o'tkazmalarini olishda nafaqat ayirboshlash kursini, balki o'tkazma komissiyasini ham hisobga oling — odatda summaning 1-3%.",
      "O'zbek so'mi 2017-yildan boshlab erkin konvertatsiya qilinadigan valyuta hisoblanadi. Jismoniy shaxslar xorijiy valyutani cheklovsiz erkin sotib olishi va sotishi mumkin. Yuridik shaxslar valyuta tushumini belgilangan tartibda konvertatsiya qilishi shart.",
    ],
    faqRu: [
      { question: 'Какой курс доллара в Узбекистане?', answer: 'По состоянию на 2025 год — около 12 800–13 200 сум за 1 доллар. Актуальный курс ежедневно публикуется на cbu.uz.' },
      { question: 'Где выгоднее менять валюту?', answer: 'Крупные суммы (от $1000) — в банках по договорному курсу. Мелкие суммы — в обменных пунктах. Спред обычно 0,5-1,5% от курса ЦБ.' },
      { question: 'Когда обновляется курс ЦБ?', answer: 'Ежедневно до 16:00 по ташкентскому времени на сайте cbu.uz.' },
      { question: 'Можно ли свободно покупать валюту?', answer: 'Да, с 2017 года физические лица могут свободно покупать и продавать иностранную валюту без ограничений.' },
      { question: 'Какие валюты можно обменять в Узбекистане?', answer: 'Основные: USD, EUR, RUB, GBP, CNY, KZT. Менее распространённые валюты можно обменять в крупных банках.' },
    ],
    faqUz: [
      { question: "O'zbekistonda dollar kursi qancha?", answer: "2025-yil holatiga ko'ra — 1 dollar uchun taxminan 12 800–13 200 so'm. Dolzarb kurs cbu.uz da har kuni e'lon qilinadi." },
      { question: "Valyutani qayerda foydaliroq ayirboshlash mumkin?", answer: "Yirik summalar ($1000 dan) — banklarda kelishilgan kursda. Kichik summalar — ayirboshlash punktlarida. Spred odatda MB kursidan 0,5-1,5%." },
      { question: "MB kursi qachon yangilanadi?", answer: "Har kuni Toshkent vaqti bilan 16:00 gacha cbu.uz saytida." },
      { question: "Valyutani erkin sotib olish mumkinmi?", answer: "Ha, 2017-yildan jismoniy shaxslar xorijiy valyutani cheklovsiz erkin sotib olishi mumkin." },
      { question: "O'zbekistonda qanday valyutalarni ayirboshlash mumkin?", answer: "Asosiy: USD, EUR, RUB, GBP, CNY, KZT. Kamroq tarqalgan valyutalarni yirik banklarda ayirboshlash mumkin." },
    ],
  },

  {
    slug: 'bank-rates',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор банковских курсов позволяет сравнить курсы покупки и продажи валют в коммерческих банках Узбекистана с официальным курсом ЦБ и найти наиболее выгодное предложение. Разница между курсом покупки и продажи (спред) в банках обычно составляет от 50 до 200 сум на каждый доллар. Для крупных сумм эта разница может составить значительную экономию.',
      'Основные банки Узбекистана, предлагающие обмен валют: Национальный банк ВЭД, Ипотека-банк, Капиталбанк, Хамкорбанк, Давр-банк, Infinbank, Uzum Bank. Каждый банк устанавливает свои курсы, которые могут отличаться от курса ЦБ. Как правило, крупные банки предлагают более выгодные курсы для клиентов с большими суммами обмена. Курсы обновляются в течение рабочего дня.',
      'Пример экономии: при обмене 5 000 USD разница в курсе всего 100 сум даёт экономию 500 000 сум. При обмене 10 000 USD — уже 1 000 000 сум. Поэтому перед обменом крупных сумм рекомендуется сравнить курсы в нескольких банках. Помимо наличного обмена, банки предлагают конвертацию через мобильные приложения — часто с более выгодным курсом.',
      'Для предприятий и юридических лиц курсы конвертации устанавливаются индивидуально на основе межбанковских торгов. Объём торгов на валютной бирже определяет рыночный курс. Юридические лица обязаны проводить конвертацию через уполномоченные банки. Для расчёта таможенных пошлин используется исключительно официальный курс ЦБ на дату таможенного оформления.',
      'Рекомендации по обмену валют: сравнивайте курсы до обмена; для сумм свыше $500 обращайтесь в банк, а не обменный пункт; при регулярных переводах рассмотрите мультивалютную карту; следите за динамикой курса — сезонные колебания могут составлять 3-5%; для международных переводов используйте наш калькулятор денежных переводов.',
    ],
    paragraphsUz: [
      "Bank kurslari kalkulyatori O'zbekiston tijorat banklaridagi valyutalarning sotib olish va sotish kurslarini MB rasmiy kursi bilan solishtirish va eng foydali taklifni topish imkonini beradi. Banklarda sotib olish va sotish kursi o'rtasidagi farq (spred) odatda har bir dollar uchun 50 dan 200 so'mgacha.",
      "Valyuta ayirboshlashni taklif etuvchi O'zbekistonning asosiy banklari: Milliy bank TIF, Ipoteka-bank, Kapitalbank, Hamkorbank, Davr-bank, Infinbank, Uzum Bank. Har bir bank o'z kurslarini belgilaydi. Odatda yirik banklar katta miqdordagi ayirboshlash uchun foydaliroq kurslar taklif etadi.",
      "Tejash misoli: 5 000 USD ayirboshlashda kursdagi atigi 100 so'mlik farq 500 000 so'mlik tejash beradi. 10 000 USD da — 1 000 000 so'm. Shuning uchun yirik summalarni ayirboshlashdan oldin bir nechta banklardagi kurslarni solishtirish tavsiya etiladi.",
      "Korxonalar va yuridik shaxslar uchun konvertatsiya kurslari banklar aro savdolar asosida individual belgilanadi. Bojxona boji hisobi uchun faqat bojxona rasmiylash sanasidagi MB rasmiy kursi qo'llaniladi.",
      "Valyuta ayirboshlash bo'yicha tavsiyalar: ayirboshlashdan oldin kurslarni solishtiring; $500 dan ortiq summalarda ayirboshlash punkti emas, bankka murojaat qiling; muntazam o'tkazmalar uchun multivalyuta kartasini ko'rib chiqing; kurs dinamikasini kuzatib boring — mavsumiy tebranishlar 3-5% bo'lishi mumkin.",
    ],
    faqRu: [
      { question: 'Чем курс банков отличается от курса ЦБ?', answer: 'Банки устанавливают свои курсы с небольшим спредом (50-200 сум/доллар) относительно курса ЦБ. Курс покупки ниже, курс продажи выше.' },
      { question: 'Где выгоднее менять валюту — в банке или обменном пункте?', answer: 'Для сумм от $500 обычно выгоднее в банке. Мелкие суммы — без существенной разницы.' },
      { question: 'Как часто обновляются курсы банков?', answer: 'В течение рабочего дня. Официальный курс ЦБ обновляется ежедневно до 16:00.' },
      { question: 'Можно ли обменять валюту через мобильное приложение?', answer: 'Да, большинство банков предлагают конвертацию в приложении, часто с более выгодным курсом, чем в кассе.' },
      { question: 'Какой курс используется для таможенных расчётов?', answer: 'Исключительно официальный курс ЦБ на дату таможенного оформления.' },
    ],
    faqUz: [
      { question: "Banklar kursi MB kursidan nimasi bilan farq qiladi?", answer: "Banklar MB kursiga nisbatan kichik spred (dollar uchun 50-200 so'm) bilan o'z kurslarini belgilaydi. Sotib olish kursi pastroq, sotish kursi yuqoriroq." },
      { question: "Valyutani qayerda foydaliroq ayirboshlash mumkin?", answer: "$500 dan ortiq summalar uchun odatda bankda foydaliroq. Kichik summalar uchun sezilarli farq yo'q." },
      { question: "Bank kurslari qanchalik tez-tez yangilanadi?", answer: "Ish kuni davomida. MB rasmiy kursi har kuni 16:00 gacha yangilanadi." },
      { question: "Mobil ilova orqali valyuta ayirboshlash mumkinmi?", answer: "Ha, ko'pchilik banklar ilovada konvertatsiya taklif etadi, ko'pincha kassadagiga qaraganda foydaliroq kursda." },
      { question: "Bojxona hisoblari uchun qaysi kurs qo'llaniladi?", answer: "Faqat bojxona rasmiylash sanasidagi MB rasmiy kursi." },
    ],
  },

  {
    slug: 'customs',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Таможенный кодекс РУз', url: 'https://lex.uz/docs/6365764' },
      { name: 'Государственный таможенный комитет', url: 'https://customs.uz' },
    ],
    paragraphsRu: [
      'Таможенные платежи при ввозе товаров в Узбекистан состоят из нескольких компонентов: таможенная пошлина (0-30% от таможенной стоимости), НДС (12% от суммы таможенной стоимости и пошлины), акцизный налог (для подакцизных товаров), сбор за таможенное оформление. Ставки таможенных пошлин различаются в зависимости от категории товара и страны происхождения. Калькулятор таможенных платежей рассчитает полную сумму всех платежей при ввозе товаров.',
      'Для физических лиц действуют нормы беспошлинного ввоза: при пересечении границы — товары стоимостью до 2 000 USD и весом до 50 кг; почтовые посылки — до 1 000 USD в месяц; интернет-заказы — до определённых лимитов в зависимости от способа доставки. При превышении норм уплачивается таможенная пошлина и НДС.',
      'Пример расчёта таможенных платежей для юридического лица: ввоз оборудования стоимостью 100 000 USD (по курсу ЦБ ≈ 1 300 000 000 сум). Таможенная пошлина 10%: 130 000 000 сум. НДС 12% от (стоимость + пошлина): (1 300 000 000 + 130 000 000) × 12% = 171 600 000 сум. Сбор за оформление: 0,2% от стоимости = 2 600 000 сум. Итого таможенные платежи: 304 200 000 сум (23,4% от стоимости товара).',
      'Для ряда товаров действуют льготы и освобождения: технологическое оборудование, не производимое в Узбекистане, может ввозиться без пошлины; инвесторы с определённым объёмом инвестиций получают преференции; товары из стран ЕАЭС (по отдельным соглашениям) могут иметь пониженные ставки; участники свободных экономических зон освобождены от таможенных пошлин на ввоз оборудования и сырья.',
      'Таможенное оформление осуществляется через систему «Единое окно» (singlewindow.uz). Для расчёта пошлин необходимо определить код ТН ВЭД товара (гармонизированная система классификации). Ставки пошлин регулярно пересматриваются и публикуются Государственным таможенным комитетом. При определении таможенной стоимости используется курс ЦБ на дату подачи таможенной декларации.',
    ],
    paragraphsUz: [
      "O'zbekistonga tovarlarni kiritishda bojxona to'lovlari bir nechta komponentdan iborat: bojxona boji (bojxona qiymatidan 0-30%), QQS (bojxona qiymati va boj yig'indisidan 12%), aksiz solig'i (aksiz tovarlar uchun), bojxona rasmiylash yig'imi. Bojxona boj stavkalari tovar toifasi va kelib chiqqan mamlakatga qarab farqlanadi.",
      "Jismoniy shaxslar uchun bojsiz olib kirish normalari amal qiladi: chegara kesib o'tishda — 2 000 AQSh dollarigacha va 50 kg gacha; pochta jo'natmalari — oyiga 1 000 AQSh dollarigacha. Normalardan oshganda bojxona boji va QQS to'lanadi.",
      "Yuridik shaxs uchun bojxona to'lovlari hisoblash misoli: 100 000 AQSh dollarlik (MB kursi bo'yicha ≈ 1 300 000 000 so'm) uskunani olib kirish. Bojxona boji 10%: 130 000 000 so'm. QQS 12%: (1 300 000 000 + 130 000 000) × 12% = 171 600 000 so'm. Rasmiylash yig'imi: 2 600 000 so'm. Jami: 304 200 000 so'm (tovar qiymatining 23,4%).",
      "Bir qator tovarlarga imtiyozlar amal qiladi: O'zbekistonda ishlab chiqarilmaydigan texnologik uskunalar bojsiz olib kirilishi mumkin; ma'lum hajmdagi investitsiyalarga ega investorlar preferentsiyalar oladi; erkin iqtisodiy zonalar ishtirokchilari uskuna va xom-ashyo olib kirishda bojxona bojlaridan ozod.",
      "Bojxona rasmiylash «Yagona darcha» (singlewindow.uz) tizimi orqali amalga oshiriladi. Boj hisoblash uchun tovarning TIF TN kodini aniqlash kerak. Bojxona qiymatini aniqlashda bojxona deklaratsiyasi topshirilgan sanadagi MB kursi qo'llaniladi.",
    ],
    faqRu: [
      { question: 'Из чего состоят таможенные платежи?', answer: 'Таможенная пошлина (0-30%), НДС (12% от стоимости+пошлина), акциз (для подакцизных товаров), сбор за оформление (0,2%).' },
      { question: 'Сколько товаров можно ввезти без пошлины?', answer: 'Физические лица: при пересечении границы — до $2 000 и 50 кг; почтовые посылки — до $1 000/месяц.' },
      { question: 'Как определить размер таможенной пошлины?', answer: 'По коду ТН ВЭД товара. Ставки публикуются Государственным таможенным комитетом. Средние ставки: 0-5% на оборудование, 10-20% на потребительские товары, до 30% на подакцизные.' },
      { question: 'Какой курс валюты используется для расчёта пошлин?', answer: 'Официальный курс ЦБ на дату подачи таможенной декларации.' },
      { question: 'Есть ли льготы по таможенным платежам?', answer: 'Да: технологическое оборудование (не производимое в РУз), товары для СЭЗ, инвестиционные проекты. Льготы устанавливаются отдельными постановлениями.' },
    ],
    faqUz: [
      { question: "Bojxona to'lovlari nimalardan iborat?", answer: "Bojxona boji (0-30%), QQS (qiymat+bojdan 12%), aksiz (aksiz tovarlar uchun), rasmiylash yig'imi (0,2%)." },
      { question: "Bojsiz qancha tovar olib kirish mumkin?", answer: "Jismoniy shaxslar: chegara kesishda — $2 000 gacha va 50 kg; pochta jo'natmalari — $1 000/oy." },
      { question: "Bojxona boji miqdorini qanday aniqlash mumkin?", answer: "Tovarning TIF TN kodi bo'yicha. Stavkalar Davlat bojxona qo'mitasi tomonidan e'lon qilinadi." },
      { question: "Boj hisobi uchun qaysi valyuta kursi ishlatiladi?", answer: "Bojxona deklaratsiyasi topshirilgan sanadagi MB rasmiy kursi." },
      { question: "Bojxona to'lovlari bo'yicha imtiyozlar bormi?", answer: "Ha: texnologik uskunalar (O'zbekistonda ishlab chiqarilmaydigan), EIZ uchun tovarlar, investitsiya loyihalari." },
    ],
  },

  {
    slug: 'osago',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Закон об ОСАГО', url: 'https://lex.uz/docs/5765051' },
      { name: 'Агентство страхового надзора', url: 'https://mf.uz' },
    ],
    paragraphsRu: [
      'Обязательное страхование автогражданской ответственности (ОСАГО) в Узбекистане является обязательным для всех владельцев транспортных средств. Базовый тариф ОСАГО составляет от 65 000 сум и зависит от типа транспортного средства, региона использования, стажа водителя и коэффициента «бонус-малус» (скидка за безаварийную езду). Калькулятор ОСАГО рассчитает точную стоимость полиса с учётом всех коэффициентов.',
      'Формула расчёта: Стоимость ОСАГО = Базовый тариф × Кт (территория) × Кс (стаж) × Кбм (бонус-малус) × Км (мощность). Территориальный коэффициент (Кт) для Ташкента — 1,7; для Ташкентской области — 1,3; для других регионов — 0,8-1,2. Коэффициент стажа (Кс): менее 2 лет — 1,8; 2-5 лет — 1,2; 5-10 лет — 1,0; более 10 лет — 0,9. Бонус-малус (Кбм): от 0,5 (за 5+ лет без ДТП) до 2,5 (при частых ДТП).',
      'Пример расчёта: легковой автомобиль в Ташкенте, стаж водителя 7 лет, 3 года без ДТП. Базовый тариф: 65 000 сум. Кт (Ташкент): 1,7. Кс (5-10 лет): 1,0. Кбм (3 года без ДТП): 0,85. Стоимость = 65 000 × 1,7 × 1,0 × 0,85 ≈ 93 925 сум в год. Для водителя-новичка (стаж <2 лет) в Ташкенте без скидки: 65 000 × 1,7 × 1,8 × 1,0 ≈ 198 900 сум.',
      'Максимальные суммы страховых выплат по ОСАГО: за вред жизни и здоровью — до 200 БРВ (82 400 000 сум); за вред имуществу — до 100 БРВ (41 200 000 сум). При наступлении страхового случая необходимо: вызвать ГАИ, зафиксировать обстоятельства ДТП, обратиться в страховую компанию в течение 3 рабочих дней.',
      'Полис ОСАГО оформляется на 12 месяцев и может быть приобретён в офисах страховых компаний или онлайн. Вождение без ОСАГО является административным правонарушением — штраф от 5 до 10 БРВ (2 060 000 − 4 120 000 сум). При покупке автомобиля в кредит ОСАГО является обязательным (помимо КАСКО). Для расчёта полной стоимости владения автомобилем используйте наш калькулятор расхода топлива и калькулятор автокредита.',
    ],
    paragraphsUz: [
      "O'zbekistonda avtofuqarolik javobgarligini majburiy sug'urtalash (OSAGO) barcha transport vositasi egalari uchun majburiy hisoblanadi. OSAGO bazaviy tarifi 65 000 so'mdan boshlanadi va transport vositasi turi, foydalanish hududi, haydovchi staji va «bonus-malus» koeffitsientiga (avariyasiz haydash uchun chegirma) bog'liq.",
      "Hisoblash formulasi: OSAGO narxi = Bazaviy tarif × Kt (hudud) × Ks (staj) × Kbm (bonus-malus) × Km (quvvat). Hududiy koeffitsient (Kt) Toshkent uchun — 1,7; Toshkent viloyati — 1,3; boshqa hududlar — 0,8-1,2. Staj koeffitsienti (Ks): 2 yildan kam — 1,8; 2-5 yil — 1,2; 5-10 yil — 1,0; 10 yildan ortiq — 0,9.",
      "Hisoblash misoli: Toshkentda yengil avtomobil, haydovchi staji 7 yil, 3 yil YTHsiz. Bazaviy tarif: 65 000 so'm. Kt: 1,7. Ks: 1,0. Kbm: 0,85. Narx = 65 000 × 1,7 × 1,0 × 0,85 ≈ 93 925 so'm/yil. Yangi haydovchi uchun (staj <2 yil) Toshkentda: 65 000 × 1,7 × 1,8 × 1,0 ≈ 198 900 so'm.",
      "OSAGO bo'yicha maksimal sug'urta to'lovlari: hayot va sog'likka zarar uchun — 200 BHK gacha (82 400 000 so'm); mol-mulkka zarar uchun — 100 BHK gacha (41 200 000 so'm). Sug'urta hodisasi yuz berganda: YHXni chaqirish, YTH holatlarini qayd etish, 3 ish kuni ichida sug'urta kompaniyasiga murojaat qilish kerak.",
      "OSAGO polisi 12 oyga rasmiylashtiriladi va sug'urta kompaniyalari ofislarida yoki onlayn sotib olinishi mumkin. OSAGOsiz haydash ma'muriy huquqbuzarlik — 5 dan 10 BHK gacha jarima (2 060 000 − 4 120 000 so'm).",
    ],
    faqRu: [
      { question: 'Сколько стоит ОСАГО в Узбекистане?', answer: 'От 65 000 сум (базовый тариф). С учётом коэффициентов: в Ташкенте для опытного водителя — около 94 000 сум/год, для новичка — до 199 000 сум/год.' },
      { question: 'Какой штраф за езду без ОСАГО?', answer: 'От 5 до 10 БРВ (2 060 000 − 4 120 000 сум по состоянию на 2025 год).' },
      { question: 'Какая максимальная выплата по ОСАГО?', answer: 'За вред здоровью — до 200 БРВ (82,4 млн сум). За вред имуществу — до 100 БРВ (41,2 млн сум).' },
      { question: 'Что такое коэффициент бонус-малус?', answer: 'Скидка за безаварийную езду: от 0,5 (5+ лет без ДТП — 50% скидка) до 2,5 (частые ДТП — надбавка 150%).' },
      { question: 'Можно ли оформить ОСАГО онлайн?', answer: 'Да, полис ОСАГО можно приобрести онлайн через сайты страховых компаний.' },
    ],
    faqUz: [
      { question: "O'zbekistonda OSAGO qancha turadi?", answer: "65 000 so'mdan (bazaviy tarif). Koeffitsientlar bilan: Toshkentda tajribali haydovchi uchun — taxminan 94 000 so'm/yil, yangi haydovchi uchun — 199 000 so'mgacha." },
      { question: "OSAGOsiz haydash uchun jarima qancha?", answer: "5 dan 10 BHK gacha (2025-yil holatiga ko'ra 2 060 000 − 4 120 000 so'm)." },
      { question: "OSAGO bo'yicha maksimal to'lov qancha?", answer: "Sog'likka zarar uchun — 200 BHK gacha (82,4 mln so'm). Mol-mulkka — 100 BHK gacha (41,2 mln so'm)." },
      { question: "Bonus-malus koeffitsienti nima?", answer: "Avariyasiz haydash uchun chegirma: 0,5 dan (5+ yil YTHsiz — 50% chegirma) 2,5 gacha (tez-tez YTH — 150% ustama)." },
      { question: "OSAGOni onlayn rasmiylashtirish mumkinmi?", answer: "Ha, OSAGO polisini sug'urta kompaniyalari saytlari orqali onlayn sotib olish mumkin." },
    ],
  },

  {
    slug: 'electricity',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Постановление о тарифах на электроэнергию', url: 'https://lex.uz' },
      { name: 'Узэнерго', url: 'https://uzenergy.uz' },
    ],
    paragraphsRu: [
      'Тарифы на электроэнергию для населения Узбекистана в 2025 году установлены по 6-ступенчатой шкале: чем больше потребление, тем выше тариф за кВт·ч. Первые 200 кВт·ч в месяц обходятся дешевле всего, а потребление свыше 1 001 кВт·ч — по максимальному тарифу. Такая система стимулирует экономное потребление электроэнергии. Калькулятор электроэнергии рассчитает точную стоимость вашего ежемесячного потребления с учётом всех ступеней тарифа.',
      'Тарифная сетка для населения (2025): Тиер 1 (0-200 кВт·ч) — 600 сум/кВт·ч; Тиер 2 (201-500 кВт·ч) — 800 сум/кВт·ч; Тиер 3 (501-800 кВт·ч) — 1 200 сум/кВт·ч; Тиер 4 (801-1000 кВт·ч) — 1 500 сум/кВт·ч; Тиер 5 (1001-1500 кВт·ч) — 1 800 сум/кВт·ч; Тиер 6 (свыше 1500 кВт·ч) — 2 000 сум/кВт·ч. Тарифы могут пересматриваться постановлениями правительства.',
      'Пример расчёта: потребление 700 кВт·ч в месяц. Тиер 1: 200 × 600 = 120 000 сум. Тиер 2: 300 × 800 = 240 000 сум. Тиер 3: 200 × 1 200 = 240 000 сум. Итого: 600 000 сум. Средняя цена: 600 000 / 700 = 857 сум/кВт·ч. Для сравнения, если бы потребление составило всего 200 кВт·ч, оплата была бы 120 000 сум (600 сум/кВт·ч), а при 1 500 кВт·ч — 1 740 000 сум (1 160 сум/кВт·ч в среднем).',
      'Для юридических лиц действуют иные тарифы — единая ставка в зависимости от категории потребителя и времени суток (для крупных предприятий с дифференцированным учётом). Промышленные предприятия платят в среднем 700-1 200 сум/кВт·ч. Коммерческие организации — 800-1 500 сум/кВт·ч.',
      'Для снижения расходов на электроэнергию рекомендуется: использовать энергосберегающие LED-лампы (экономия до 80%); устанавливать таймеры на электроприборы; утеплять помещения для снижения расходов на обогрев; рассмотреть установку солнечных панелей (окупаемость 3-5 лет). Для расчёта полных коммунальных расходов воспользуйтесь калькулятором коммунальных услуг, который включает электроэнергию, газ и воду.',
    ],
    paragraphsUz: [
      "O'zbekiston aholisi uchun elektr energiya tariflari 2025-yilda 6 bosqichli shkala bo'yicha belgilangan: iste'mol qancha ko'p bo'lsa, kVt·soat uchun tarif shuncha yuqori. Oyiga birinchi 200 kVt·soat eng arzon, 1 001 kVt·soatdan ortiq iste'mol — maksimal tarif bo'yicha. Bunday tizim elektr energiyani tejab iste'mol qilishga rag'batlantiradi.",
      "Aholi uchun tarif setkasi (2025): 1-bosqich (0-200 kVt·soat) — 600 so'm/kVt·soat; 2-bosqich (201-500) — 800 so'm; 3-bosqich (501-800) — 1 200 so'm; 4-bosqich (801-1000) — 1 500 so'm; 5-bosqich (1001-1500) — 1 800 so'm; 6-bosqich (1500 dan ortiq) — 2 000 so'm/kVt·soat.",
      "Hisoblash misoli: oyiga 700 kVt·soat iste'mol. 1-bosqich: 200 × 600 = 120 000 so'm. 2-bosqich: 300 × 800 = 240 000 so'm. 3-bosqich: 200 × 1 200 = 240 000 so'm. Jami: 600 000 so'm. O'rtacha narx: 857 so'm/kVt·soat.",
      "Yuridik shaxslar uchun boshqa tariflar amal qiladi — iste'molchi toifasi va kunning vaqtiga qarab yagona stavka. Sanoat korxonalari o'rtacha 700-1 200 so'm/kVt·soat, tijorat tashkilotlari — 800-1 500 so'm/kVt·soat to'laydi.",
      "Elektr energiya xarajatlarini kamaytirish uchun tavsiya etiladi: energiya tejovchi LED-lampalarni ishlatish (80% gacha tejash); elektr asboblarga taymerlar o'rnatish; binolarni izolyatsiya qilish; quyosh panellarini o'rnatishni ko'rib chiqish (o'zini oqlash 3-5 yil). To'liq kommunal xarajatlarni hisoblash uchun kommunal xizmatlar kalkulyatoridan foydalaning.",
    ],
    faqRu: [
      { question: 'Сколько стоит электроэнергия в Узбекистане?', answer: 'По 6-ступенчатой шкале: от 600 сум/кВт·ч (до 200 кВт·ч) до 2 000 сум/кВт·ч (свыше 1500 кВт·ч). Чем больше потребление, тем дороже.' },
      { question: 'Как рассчитать стоимость электроэнергии?', answer: 'Потребление разбивается по ступеням: первые 200 кВт·ч по 600 сум, следующие 300 по 800 сум и т.д. Наш калькулятор сделает это автоматически.' },
      { question: 'Какое среднее потребление электроэнергии в квартире?', answer: 'Для 2-комнатной квартиры: 200-400 кВт·ч летом, 300-600 кВт·ч зимой (с электрообогревом). Средний счёт: 150 000 - 500 000 сум.' },
      { question: 'Почему тарифы ступенчатые?', answer: 'Для стимулирования энергосбережения. Базовое потребление (до 200 кВт·ч) оплачивается по низкому тарифу, избыточное — по повышенному.' },
      { question: 'Как снизить расходы на электроэнергию?', answer: 'LED-лампы (экономия 80%), таймеры, утепление, солнечные панели. Стремитесь удержать потребление в пределах 500 кВт·ч для тарифов 1-2 ступеней.' },
    ],
    faqUz: [
      { question: "O'zbekistonda elektr energiya qancha turadi?", answer: "6 bosqichli shkala bo'yicha: 600 so'm/kVt·soat (200 kVt·soatgacha) dan 2 000 so'm/kVt·soat (1500 dan ortiq). Iste'mol qancha ko'p — shuncha qimmat." },
      { question: "Elektr energiya narxini qanday hisoblash mumkin?", answer: "Iste'mol bosqichlarga bo'linadi: birinchi 200 kVt·soat 600 so'mdan, keyingi 300 ta 800 so'mdan va h.k. Kalkulyatorimiz buni avtomatik qiladi." },
      { question: "Kvartirada o'rtacha elektr energiya iste'moli qancha?", answer: "2 xonali kvartira uchun: yozda 200-400 kVt·soat, qishda 300-600 kVt·soat. O'rtacha hisob: 150 000 - 500 000 so'm." },
      { question: "Nima uchun tariflar bosqichli?", answer: "Energiya tejashni rag'batlantirish uchun. Asosiy iste'mol (200 kVt·soatgacha) past tarif bo'yicha, ortiqchasi — yuqori tarif bo'yicha to'lanadi." },
      { question: "Elektr energiya xarajatlarini qanday kamaytirish mumkin?", answer: "LED-lampalar (80% tejash), taymerlar, izolyatsiya, quyosh panellari. Iste'molni 500 kVt·soat ichida ushlab turishga harakat qiling." },
    ],
  },

  {
    slug: 'gas',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Постановление о тарифах на газ', url: 'https://lex.uz' },
      { name: 'Худудгазтаъминот', url: 'https://hududgaz.uz' },
    ],
    paragraphsRu: [
      'Тарифы на природный газ для населения Узбекистана в 2025 году установлены по 5-ступенчатой шкале, аналогично электроэнергии. Стоимость кубометра газа растёт с увеличением объёма потребления. В зимний период (октябрь-март) потребление газа значительно возрастает за счёт отопления, что существенно увеличивает ежемесячные платежи. Калькулятор газа рассчитает точную стоимость на основе вашего потребления.',
      'Тарифная сетка для населения (2025): Тиер 1 (0-500 м³/год, ≈42 м³/мес) — 1 000 сум/м³; Тиер 2 (501-1000 м³/год) — 1 500 сум/м³; Тиер 3 (1001-2000 м³/год) — 2 000 сум/м³; Тиер 4 (2001-3000 м³/год) — 2 500 сум/м³; Тиер 5 (свыше 3000 м³/год) — 3 000 сум/м³. Потребление отслеживается нарастающим итогом с начала года.',
      'Пример расчёта: зимнее потребление 300 м³ в месяц (при годовом накопленном потреблении 1 500 м³). Расчёт ведётся по текущему тиеру: если за предыдущие месяцы потреблено 1 200 м³, то первые 800 м³ (до 2000) — по 2 000 сум = 1 600 000 сум, оставшиеся 200 м³ (2001-3000) — по 2 500 сум = 500 000 сум. В летний период потребление обычно 20-50 м³/мес (только готовка и горячая вода).',
      'Среднее потребление газа для частного дома с газовым отоплением: 2 000-4 000 м³ в год; для квартиры без газового отопления (только плита и колонка): 300-800 м³ в год. Стоимость газа в год для частного дома: от 2 500 000 до 9 000 000 сум; для квартиры: от 300 000 до 1 200 000 сум. Значительная часть расходов приходится на зимние месяцы.',
      'Для экономии газа рекомендуется: утеплить стены и окна (экономия 30-50%); установить программируемый термостат; использовать конденсационный газовый котёл (КПД до 95%); регулярно обслуживать газовое оборудование. При использовании газа для отопления также рассмотрите альтернативу — электрическое отопление с тепловым насосом. Рассчитать все коммунальные расходы можно в нашем калькуляторе коммунальных услуг.',
    ],
    paragraphsUz: [
      "O'zbekiston aholisi uchun tabiiy gaz tariflari 2025-yilda elektr energiyaga o'xshab 5 bosqichli shkala bo'yicha belgilangan. Gaz kub metrining narxi iste'mol hajmi oshishi bilan o'sadi. Qish davrida (oktyabr-mart) isitish hisobiga gaz iste'moli sezilarli ortadi. Gaz kalkulyatori iste'molingiz asosida aniq narxni hisoblaydi.",
      "Aholi uchun tarif setkasi (2025): 1-bosqich (0-500 m³/yil, ≈42 m³/oy) — 1 000 so'm/m³; 2-bosqich (501-1000 m³/yil) — 1 500 so'm/m³; 3-bosqich (1001-2000 m³/yil) — 2 000 so'm/m³; 4-bosqich (2001-3000 m³/yil) — 2 500 so'm/m³; 5-bosqich (3000 dan ortiq m³/yil) — 3 000 so'm/m³.",
      "Hisoblash misoli: qishda oyiga 300 m³ iste'mol (yillik jamlanma iste'mol 1 500 m³ da). Hisob joriy bosqich bo'yicha yuritiladi. Yozgi davrda iste'mol odatda 20-50 m³/oy (faqat ovqat pishirish va issiq suv).",
      "Gaz isitishli xususiy uy uchun o'rtacha gaz iste'moli: yiliga 2 000-4 000 m³; gaz isitishisiz kvartira uchun (faqat plita va kolonka): yiliga 300-800 m³. Yillik gaz narxi xususiy uy uchun: 2 500 000 dan 9 000 000 so'mgacha; kvartira uchun: 300 000 dan 1 200 000 so'mgacha.",
      "Gazni tejash uchun tavsiya etiladi: devor va derazalarni izolyatsiya qilish (30-50% tejash); dasturlashtiriladigan termostat o'rnatish; kondensatsion gaz qozonidan foydalanish (FIK 95% gacha); gaz uskunalarini muntazam xizmat qilish. Barcha kommunal xarajatlarni kommunal xizmatlar kalkulyatorimizda hisoblashingiz mumkin.",
    ],
    faqRu: [
      { question: 'Сколько стоит газ в Узбекистане?', answer: 'По 5-ступенчатой шкале: от 1 000 сум/м³ (до 500 м³/год) до 3 000 сум/м³ (свыше 3 000 м³/год).' },
      { question: 'Сколько газа потребляет частный дом?', answer: 'С газовым отоплением: 2 000-4 000 м³/год. Без отопления (только плита): 300-800 м³/год. Основное потребление — зимой.' },
      { question: 'Как рассчитывается оплата за газ?', answer: 'По накопительной системе: потребление суммируется с начала года. Чем больше годовое потребление, тем выше тариф за каждый следующий кубометр.' },
      { question: 'Сколько платить за газ зимой?', answer: 'Для дома с отоплением: 300-500 м³/мес × 2 000-2 500 сум = 600 000-1 250 000 сум/мес зимой. Летом: 20-50 м³ × 1 000 сум = 20 000-50 000 сум.' },
      { question: 'Как сэкономить на газе?', answer: 'Утепление стен и окон (30-50% экономия), программируемый термостат, регулярное обслуживание котла, конденсационный котёл (КПД 95%).' },
    ],
    faqUz: [
      { question: "O'zbekistonda gaz qancha turadi?", answer: "5 bosqichli shkala bo'yicha: 1 000 so'm/m³ (500 m³/yilgacha) dan 3 000 so'm/m³ (3 000 m³/yildan ortiq) gacha." },
      { question: "Xususiy uy qancha gaz iste'mol qiladi?", answer: "Gaz isitishi bilan: yiliga 2 000-4 000 m³. Isitishsiz (faqat plita): yiliga 300-800 m³. Asosiy iste'mol — qishda." },
      { question: "Gaz uchun to'lov qanday hisoblanadi?", answer: "Jamlanma tizim bo'yicha: iste'mol yil boshidan summalanadi. Yillik iste'mol qancha ko'p bo'lsa, har keyingi kub metr uchun tarif shuncha yuqori." },
      { question: "Qishda gaz uchun qancha to'lash kerak?", answer: "Isitishli uy uchun: oyiga 300-500 m³ × 2 000-2 500 so'm = 600 000-1 250 000 so'm/oy. Yozda: 20-50 m³ × 1 000 so'm = 20 000-50 000 so'm." },
      { question: "Gazni qanday tejash mumkin?", answer: "Devor va derazalarni izolyatsiya qilish (30-50% tejash), dasturlashtiriladigan termostat, qozonni muntazam xizmat qilish, kondensatsion qozon (FIK 95%)." },
    ],
  },

  {
    slug: 'water',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Постановление о тарифах на воду', url: 'https://lex.uz' },
      { name: 'Узсувтаъминот', url: 'https://suvtaminot.uz' },
    ],
    paragraphsRu: [
      'Тарифы на холодную воду для населения Узбекистана в 2025 году зависят от наличия счётчика. При наличии водомера оплата производится по фактическому потреблению, при отсутствии — по нормативу на человека. Средний тариф на холодную воду составляет 3 000-5 000 сум/м³, водоотведение (канализация) — дополнительно 1 500-3 000 сум/м³. Калькулятор воды рассчитает стоимость с учётом тарифов вашего региона.',
      'Нормативы потребления при отсутствии счётчика: 150-200 литров в сутки на человека (4,5-6 м³/мес). Для семьи из 4 человек без счётчика: 4 × 6 = 24 м³/мес × 4 000 сум = 96 000 сум за воду + водоотведение ≈ 48 000 сум, итого 144 000 сум. С водомером та же семья потребляет обычно 8-15 м³/мес: 12 × 4 000 = 48 000 + 24 000 = 72 000 сум. Экономия: до 50% при установке счётчика.',
      'Горячее водоснабжение — отдельная статья расходов. В домах с центральным горячим водоснабжением тариф включает стоимость холодной воды и подогрева. В домах с газовым водонагревателем (колонкой) стоимость горячей воды складывается из расхода холодной воды и газа на подогрев. Средний расход горячей воды: 3-5 м³/мес на человека.',
      'Установка водосчётчика обязательна для нового жилья и рекомендуется для существующего. Стоимость установки: 200 000-500 000 сум (включая сам счётчик). Поверка проводится каждые 4-6 лет. Показания передаются ежемесячно через мобильное приложение или абонентский отдел водоканала.',
      'Для расчёта полных коммунальных расходов (вода + электроэнергия + газ + отопление) используйте наш калькулятор коммунальных услуг. Рекомендации по экономии воды: установите аэраторы на краны (экономия 30-50%); используйте стиральную и посудомоечную машину с полной загрузкой; почините подтекающие краны (один капающий кран — до 500 литров в месяц).',
    ],
    paragraphsUz: [
      "O'zbekiston aholisi uchun sovuq suv tariflari 2025-yilda hisoblagich mavjudligiga bog'liq. Suv hisoblagich bo'lganda haqiqiy iste'mol bo'yicha, bo'lmaganda — har bir kishiga normativ bo'yicha to'lanadi. Sovuq suvning o'rtacha tarifi 3 000-5 000 so'm/m³, oqava suv (kanalizatsiya) — qo'shimcha 1 500-3 000 so'm/m³.",
      "Hisoblagichsiz iste'mol normativlari: bir kishiga kuniga 150-200 litr (oyiga 4,5-6 m³). 4 kishilik oila hisoblagichsiz: 4 × 6 = 24 m³/oy × 4 000 so'm = 96 000 so'm suv uchun + oqava suv ≈ 48 000 so'm, jami 144 000 so'm. Hisoblagich bilan: odatda 8-15 m³/oy: 12 × 4 000 = 48 000 + 24 000 = 72 000 so'm. Tejash: hisoblagich o'rnatishda 50% gacha.",
      "Issiq suv ta'minoti — alohida xarajat moddasi. Markaziy issiq suv ta'minotli uylarda tarif sovuq suv va isitish narxini o'z ichiga oladi. Gaz suv isitgichli (kolonkali) uylarda issiq suv narxi sovuq suv sarfi va isitish uchun gaz sarfidan tashkil topadi.",
      "Suv hisoblagichni o'rnatish yangi uy-joy uchun majburiy va mavjud uy-joy uchun tavsiya etiladi. O'rnatish narxi: 200 000-500 000 so'm. Tekshirish har 4-6 yilda o'tkaziladi. Ko'rsatkichlar har oy mobil ilova yoki suv kanali abonent bo'limi orqali uzatiladi.",
      "To'liq kommunal xarajatlarni (suv + elektr + gaz + isitish) hisoblash uchun kommunal xizmatlar kalkulyatorimizdan foydalaning. Suvni tejash tavsiyalari: kranlarga aeratorlar o'rnating (30-50% tejash); kir va idish yuvish mashinasini to'liq yuklab ishlating; oqayotgan kranlarni ta'mirlang.",
    ],
    faqRu: [
      { question: 'Сколько стоит вода в Узбекистане?', answer: 'Холодная вода: 3 000-5 000 сум/м³. Водоотведение: дополнительно 1 500-3 000 сум/м³. Итого: 4 500-8 000 сум/м³.' },
      { question: 'Выгоднее ли платить по счётчику?', answer: 'Да, обычно в 1,5-2 раза выгоднее. Семья из 4 человек: по нормативу ~144 000 сум/мес, по счётчику ~72 000 сум.' },
      { question: 'Какой норматив потребления воды без счётчика?', answer: '150-200 литров в сутки на человека (4,5-6 м³ в месяц).' },
      { question: 'Как передать показания счётчика воды?', answer: 'Через мобильное приложение водоканала или в абонентском отделе. Показания передаются ежемесячно.' },
      { question: 'Сколько стоит установка водомера?', answer: '200 000-500 000 сум с установкой. Поверка каждые 4-6 лет. Окупается за 3-6 месяцев.' },
    ],
    faqUz: [
      { question: "O'zbekistonda suv qancha turadi?", answer: "Sovuq suv: 3 000-5 000 so'm/m³. Oqava suv: qo'shimcha 1 500-3 000 so'm/m³. Jami: 4 500-8 000 so'm/m³." },
      { question: "Hisoblagich bo'yicha to'lash foydaliroqmi?", answer: "Ha, odatda 1,5-2 baravar foydaliroq. 4 kishilik oila: normativ bo'yicha ~144 000 so'm/oy, hisoblagich bo'yicha ~72 000 so'm." },
      { question: "Hisoblagichsiz suv iste'moli normativi qancha?", answer: "Bir kishiga kuniga 150-200 litr (oyiga 4,5-6 m³)." },
      { question: "Suv hisoblagich ko'rsatkichlarini qanday uzatish mumkin?", answer: "Suv kanali mobil ilovasi yoki abonent bo'limi orqali. Ko'rsatkichlar har oy uzatiladi." },
      { question: "Suv hisoblagichni o'rnatish qancha turadi?", answer: "O'rnatish bilan 200 000-500 000 so'm. Tekshirish har 4-6 yilda. 3-6 oyda o'zini oqlaydi." },
    ],
  },

  {
    slug: 'utilities-total',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Тарифы на коммунальные услуги', url: 'https://lex.uz' },
    ],
    paragraphsRu: [
      'Калькулятор коммунальных услуг рассчитывает полную стоимость ежемесячных платежей за все основные коммуникации в Узбекистане: электроэнергию, природный газ, холодную и горячую воду, водоотведение (канализацию), вывоз мусора и домофон. Все тарифы рассчитываются по актуальным ставкам 2025 года. Результат показывает как общую сумму, так и разбивку по каждой услуге.',
      'Средние ежемесячные коммунальные платежи в Узбекистане (2025): 2-комнатная квартира в Ташкенте — 400 000-800 000 сум (лето) и 600 000-1 200 000 сум (зима); 3-комнатная квартира — 500 000-1 000 000 сум (лето) и 800 000-1 500 000 сум (зима); частный дом с газовым отоплением — 300 000-600 000 сум (лето) и 1 500 000-3 000 000 сум (зима). Основной рост зимних платежей — за счёт отопления.',
      'Структура коммунальных платежей для типичной квартиры: электроэнергия — 30-40% (150 000-400 000 сум), газ — 20-40% (50 000-500 000 сум в зависимости от сезона), вода (холодная + горячая + водоотведение) — 15-25% (70 000-200 000 сум), вывоз мусора — 5-10% (30 000-50 000 сум), домофон/обслуживание — 5% (15 000-30 000 сум).',
      'Тарифы на коммунальные услуги в Узбекистане регулируются государством и пересматриваются ежегодно. Электроэнергия и газ рассчитываются по прогрессивной шкале (чем больше потребление — тем дороже). Вода — по фиксированному тарифу за кубометр или по нормативу. Для детального расчёта каждой услуги используйте отдельные калькуляторы: электроэнергии, газа и воды.',
      'Рекомендации по оптимизации коммунальных платежей: установите счётчики на все ресурсы (экономия до 30-50% по воде); используйте энергосберегающие приборы; утеплите жильё для снижения расходов на отопление; контролируйте потребление через мобильные приложения поставщиков; оплачивайте вовремя — за просрочку начисляется пеня. Для планирования бюджета рекомендуем рассчитать стоимость аренды с помощью нашего калькулятора аренды.',
    ],
    paragraphsUz: [
      "Kommunal xizmatlar kalkulyatori O'zbekistondagi barcha asosiy kommunikatsiyalar uchun oylik to'lovlarning to'liq qiymatini hisoblaydi: elektr energiya, tabiiy gaz, sovuq va issiq suv, oqava suv (kanalizatsiya), chiqindilarni chiqarish va domofon. Barcha tariflar 2025-yilning amaldagi stavkalari bo'yicha hisoblanadi.",
      "O'zbekistonda o'rtacha oylik kommunal to'lovlar (2025): Toshkentda 2 xonali kvartira — 400 000-800 000 so'm (yoz) va 600 000-1 200 000 so'm (qish); 3 xonali kvartira — 500 000-1 000 000 so'm (yoz) va 800 000-1 500 000 so'm (qish); gaz isitishli xususiy uy — 300 000-600 000 so'm (yoz) va 1 500 000-3 000 000 so'm (qish).",
      "Oddiy kvartira uchun kommunal to'lovlar tarkibi: elektr energiya — 30-40%, gaz — 20-40% (mavsumga qarab), suv — 15-25%, chiqindi chiqarish — 5-10%, domofon/xizmat — 5%.",
      "O'zbekistonda kommunal xizmatlar tariflari davlat tomonidan tartibga solinadi va har yili qayta ko'rib chiqiladi. Elektr energiya va gaz progressiv shkala bo'yicha hisoblanadi (iste'mol qancha ko'p — shuncha qimmat). Har bir xizmatni batafsil hisoblash uchun alohida kalkulyatorlardan foydalaning: elektr energiya, gaz va suv.",
      "Kommunal to'lovlarni optimallashtirish bo'yicha tavsiyalar: barcha resurslarga hisoblagichlar o'rnating (suv bo'yicha 30-50% gacha tejash); energiya tejovchi asboblardan foydalaning; isitish xarajatlarini kamaytirish uchun uy-joyni izolyatsiya qiling; o'z vaqtida to'lang — kechikish uchun penya hisoblanadi.",
    ],
    faqRu: [
      { question: 'Сколько в среднем стоят коммунальные услуги в Ташкенте?', answer: '2-комнатная квартира: 400 000-800 000 сум летом, 600 000-1 200 000 сум зимой. Частный дом: до 3 000 000 сум зимой.' },
      { question: 'Какая услуга самая дорогая?', answer: 'Зимой — газ (отопление), до 40% всех расходов. Летом — электроэнергия (кондиционер), 30-40%.' },
      { question: 'Как снизить коммунальные платежи?', answer: 'Счётчики (экономия до 50% на воде), утепление (30-50% на газе), LED-лампы (80% на свете), контроль потребления через приложения.' },
      { question: 'Когда нужно оплачивать коммунальные услуги?', answer: 'До 10-го числа месяца, следующего за расчётным. За просрочку — пеня.' },
      { question: 'Как оплатить коммунальные услуги?', answer: 'Через мобильные приложения (Click, Payme, Uzum), банковские терминалы, кассы. Самый удобный способ — автоплатёж в мобильном приложении.' },
    ],
    faqUz: [
      { question: "Toshkentda kommunal xizmatlar o'rtacha qancha turadi?", answer: "2 xonali kvartira: yozda 400 000-800 000 so'm, qishda 600 000-1 200 000 so'm. Xususiy uy: qishda 3 000 000 so'mgacha." },
      { question: "Qaysi xizmat eng qimmat?", answer: "Qishda — gaz (isitish), barcha xarajatlarning 40% gacha. Yozda — elektr energiya (konditsioner), 30-40%." },
      { question: "Kommunal to'lovlarni qanday kamaytirish mumkin?", answer: "Hisoblagichlar (suvda 50% gacha tejash), izolyatsiya (gazda 30-50%), LED-lampalar (yorug'likda 80%), ilovalar orqali iste'molni nazorat qilish." },
      { question: "Kommunal xizmatlarni qachon to'lash kerak?", answer: "Hisob-kitob oyidan keyingi oyning 10-sanasigacha. Kechikish uchun — penya." },
      { question: "Kommunal xizmatlarni qanday to'lash mumkin?", answer: "Mobil ilovalar (Click, Payme, Uzum), bank terminallari, kassalar orqali. Eng qulay usul — mobil ilovadagi avtoto'lov." },
    ],
  },

  {
    slug: 'apartment-cost',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Рынок недвижимости Узбекистана', url: 'https://lex.uz' },
    ],
    paragraphsRu: [
      'Средняя стоимость квадратного метра жилья в Ташкенте в 2025 году варьируется от 8 000 000 до 15 000 000 сум в зависимости от района, класса жилья и удалённости от центра. Калькулятор стоимости квартиры позволяет рассчитать приблизительную стоимость жилья на основе площади, района, этажа и состояния ремонта. Это поможет определить бюджет покупки и необходимую сумму для ипотеки.',
      'Ценовая карта Ташкента (2025, средняя цена за м²): Мирзо-Улугбекский район — 12-15 млн сум; Юнусабадский район — 11-14 млн сум; Чиланзарский район — 10-13 млн сум; Яшнабадский район — 9-12 млн сум; Мирабадский район — 13-16 млн сум; Шайхантахурский район — 8-11 млн сум; Сергелийский район — 7-10 млн сум. Новостройки комфорт-класса: +20-30% к средней цене. Вторичное жильё с ремонтом: средняя цена.',
      'Пример расчёта: 2-комнатная квартира 60 м² в Юнусабадском районе. Средняя цена: 12 000 000 сум/м². Стоимость: 60 × 12 000 000 = 720 000 000 сум (≈ 55 400 USD). С учётом ремонта средней категории (+15%): 828 000 000 сум. Для покупки в ипотеку с первоначальным взносом 20%: взнос = 165 600 000 сум, кредит = 662 400 000 сум. Рассчитать ипотечный платёж можно в нашем калькуляторе ипотеки.',
      'В областных центрах цены значительно ниже: Самарканд — 5-8 млн сум/м²; Бухара — 4-7 млн сум/м²; Наманган — 3-6 млн сум/м²; Андижан — 3-5 млн сум/м²; Нукус — 3-5 млн сум/м². Таким образом, квартира аналогичной площади в областном центре обойдётся в 2-3 раза дешевле, чем в Ташкенте.',
      'При покупке квартиры учтите дополнительные расходы: нотариальное оформление — 0,5-1% от стоимости; госпошлина за регистрацию — 3-5 БРВ; оценка недвижимости — 200 000-500 000 сум; услуги риелтора — 1-2% от стоимости; ремонт (при необходимости) — от 3 000 000 до 8 000 000 сум/м². Суммарные доп. расходы могут составить 3-5% от стоимости квартиры.',
    ],
    paragraphsUz: [
      "2025-yilda Toshkentda turar-joy kvadrat metrining o'rtacha narxi tuman, uy-joy sinfi va markazdan uzoqligiga qarab 8 000 000 dan 15 000 000 so'mgacha o'zgaradi. Kvartira narxi kalkulyatori maydon, tuman, qavat va ta'mir holatiga qarab uy-joyning taxminiy qiymatini hisoblash imkonini beradi.",
      "Toshkentning narxlar xaritasi (2025, m² uchun o'rtacha narx): Mirzo Ulug'bek tumani — 12-15 mln so'm; Yunusobod — 11-14 mln; Chilonzor — 10-13 mln; Yashnobod — 9-12 mln; Mirobod — 13-16 mln; Shayxontohur — 8-11 mln; Sergeli — 7-10 mln. Yangi qurilishlar komfort-sinf: o'rtacha narxga +20-30%.",
      "Hisoblash misoli: Yunusobod tumanida 60 m² 2 xonali kvartira. O'rtacha narx: 12 000 000 so'm/m². Qiymati: 720 000 000 so'm (≈ 55 400 AQSh dollari). O'rtacha ta'mir bilan (+15%): 828 000 000 so'm. 20% boshlang'ich to'lov bilan ipotekada sotib olish uchun: to'lov = 165 600 000 so'm, kredit = 662 400 000 so'm.",
      "Viloyat markazlarida narxlar sezilarli past: Samarqand — 5-8 mln so'm/m²; Buxoro — 4-7 mln; Namangan — 3-6 mln; Andijon — 3-5 mln; Nukus — 3-5 mln. Shunday qilib, viloyat markazida shunga o'xshash maydondagi kvartira Toshkentdagiga qaraganda 2-3 baravar arzon.",
      "Kvartira sotib olishda qo'shimcha xarajatlarni hisobga oling: notarial rasmiylash — qiymatning 0,5-1%; ro'yxatdan o'tish davlat boji — 3-5 BHK; ko'chmas mulk baholash — 200 000-500 000 so'm; rieltor xizmatlari — qiymatning 1-2%; ta'mir — 3 000 000 dan 8 000 000 so'm/m² gacha.",
    ],
    faqRu: [
      { question: 'Сколько стоит квартира в Ташкенте?', answer: '2-комнатная (60 м²): 480-900 млн сум в зависимости от района. Юнусабад: ~720 млн, Сергели: ~480 млн, Мирабад: ~900 млн.' },
      { question: 'Какой район Ташкента самый дорогой?', answer: 'Мирабадский район (13-16 млн сум/м²) и Мирзо-Улугбекский (12-15 млн). Самые доступные: Сергели и Бектемир (7-10 млн).' },
      { question: 'Сколько стоит квадратный метр жилья в регионах?', answer: 'Самарканд: 5-8 млн, Бухара: 4-7 млн, Наманган: 3-6 млн, Андижан/Нукус: 3-5 млн сум/м².' },
      { question: 'Какие дополнительные расходы при покупке квартиры?', answer: 'Нотариус (0,5-1%), госпошлина (3-5 БРВ), оценка (до 500 000 сум), риелтор (1-2%). Суммарно: 3-5% от стоимости.' },
      { question: 'Выгоднее покупать новостройку или вторичку?', answer: 'Новостройки дороже на 20-30%, но не требуют ремонта. Вторичка дешевле, но может потребовать вложений в ремонт (3-8 млн/м²).' },
    ],
    faqUz: [
      { question: "Toshkentda kvartira qancha turadi?", answer: "2 xonali (60 m²): tumanga qarab 480-900 mln so'm. Yunusobod: ~720 mln, Sergeli: ~480 mln, Mirobod: ~900 mln." },
      { question: "Toshkentning qaysi tumani eng qimmat?", answer: "Mirobod tumani (13-16 mln so'm/m²) va Mirzo Ulug'bek (12-15 mln). Eng qulay: Sergeli va Bektemir (7-10 mln)." },
      { question: "Hududlarda uy-joy kvadrat metri qancha turadi?", answer: "Samarqand: 5-8 mln, Buxoro: 4-7 mln, Namangan: 3-6 mln, Andijon/Nukus: 3-5 mln so'm/m²." },
      { question: "Kvartira sotib olishda qo'shimcha xarajatlar qanday?", answer: "Notarius (0,5-1%), davlat boji (3-5 BHK), baholash (500 000 so'mgacha), rieltor (1-2%). Jami: qiymatning 3-5%." },
      { question: "Yangi qurilish yoki ikkilamchi uy sotib olish foydaliroqmi?", answer: "Yangi qurilishlar 20-30% ga qimmatroq, lekin ta'mir talab qilmaydi. Ikkilamchi arzonroq, lekin ta'mirga sarmoya kerak bo'lishi mumkin." },
    ],
  },

  {
    slug: 'ip-calculator',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Индивидуальные предприниматели (ИП) в Узбекистане уплачивают налог с оборота по ставке 4% от валового дохода (выручки). Это упрощённая система налогообложения, не предусматривающая вычет расходов. ИП не являются плательщиками НДС, если их оборот не превышает порог в 60 000 БРВ (24 720 000 000 сум). С 2026 года для самозанятых лиц вводится отдельная ставка — 1% от оборота. Калькулятор ИП рассчитает налоговые обязательства на основе вашего дохода.',
      'Структура налогов для ИП: налог с оборота — 4% от выручки; социальный налог — фиксированная сумма (1 БРВ = 412 000 сум в месяц); ИНПС — 0,1% от дохода. ИП могут работать с наличным и безналичным расчётом, но обязаны использовать контрольно-кассовую технику (ККТ) или виртуальную кассу. Отчётность подаётся ежеквартально через my.soliq.uz.',
      'Пример расчёта: ИП с ежемесячной выручкой 30 000 000 сум. Налог с оборота: 30 000 000 × 4% = 1 200 000 сум. Социальный налог: 412 000 сум (фиксированный). ИНПС: 30 000 000 × 0,1% = 30 000 сум. Итого налогов: 1 642 000 сум/мес (5,5% от выручки). Годовые налоги: 19 704 000 сум при годовом обороте 360 000 000 сум.',
      'Для регистрации ИП необходимо: подать заявление через my.gov.uz или в налоговую инспекцию; получить ИНН (автоматически); открыть расчётный счёт в банке; установить ККТ или подключить виртуальную кассу. Регистрация бесплатна и занимает 1-3 рабочих дня. ИП может нанимать до 10 работников (с 2025 года — до 25 для отдельных видов деятельности).',
      'Сравнение ИП и самозанятого (с 2026 года): ИП — 4% от оборота, может нанимать работников, может работать с юрлицами по безналу; самозанятый — 1% от оборота, не может нанимать работников, ограничен годовым оборотом до 100 000 000 сум. Если ваш бизнес предполагает значительные расходы (более 50% выручки), рассмотрите регистрацию ООО с общей системой налогообложения. Рассчитать налоги ООО можно в нашем калькуляторе ООО.',
    ],
    paragraphsUz: [
      "O'zbekistonda yakka tartibdagi tadbirkorlar (YaTT) yalpi daromaddan (tushum) 4% stavkada aylanma solig'ini to'laydilar. Bu xarajatlarni chegirib tashlashni nazarda tutmaydigan soddalashtilgan soliqqa tortish tizimi. YaTTlar aylanmasi 60 000 BHK (24 720 000 000 so'm) chegarasidan oshmasa QQS to'lovchisi hisoblanmaydi. 2026-yildan o'z-o'zini band qilgan shaxslar uchun alohida stavka — aylanmaning 1% joriy etiladi.",
      "YaTT uchun soliqlar tarkibi: aylanma solig'i — tushumning 4%; ijtimoiy soliq — qat'iy summa (oyiga 1 BHK = 412 000 so'm); IJPH — daromadning 0,1%. YaTTlar naqd va naqdsiz hisob-kitoblar bilan ishlashi mumkin, lekin nazorat-kassa texnikasini (NKT) yoki virtual kassani ishlatishi shart. Hisobot har chorakda my.soliq.uz orqali topshiriladi.",
      "Hisoblash misoli: oylik tushumli 30 000 000 so'mlik YaTT. Aylanma solig'i: 30 000 000 × 4% = 1 200 000 so'm. Ijtimoiy soliq: 412 000 so'm (qat'iy). IJPH: 30 000 000 × 0,1% = 30 000 so'm. Jami soliqlar: 1 642 000 so'm/oy (tushumning 5,5%). Yillik soliqlar: yillik 360 000 000 so'm aylanmada 19 704 000 so'm.",
      "YaTT ro'yxatdan o'tish uchun kerak: my.gov.uz yoki soliq inspektsiyasiga ariza topshirish; STIR olish (avtomatik); bankda hisob-kitob schyoti ochish; NKT yoki virtual kassa ulash. Ro'yxatdan o'tish bepul va 1-3 ish kunida amalga oshadi. YaTT 10 tagacha xodim yollashi mumkin (2025-yildan ayrim faoliyat turlari uchun 25 tagacha).",
      "YaTT va o'z-o'zini band qilgan (2026-yildan) solishtirilishi: YaTT — aylanmaning 4%, xodim yollashi mumkin, yuridik shaxslar bilan naqdsiz ishlashi mumkin; o'z-o'zini band qilgan — aylanmaning 1%, xodim yollay olmaydi, yillik aylanma 100 000 000 so'mgacha cheklangan. Biznesingiz sezilarli xarajatlarni (tushumning 50% dan ortiq) nazarda tutsa, umumiy soliqqa tortish tizimidagi MChJni ro'yxatdan o'tkazishni ko'rib chiqing.",
    ],
    faqRu: [
      { question: 'Сколько налогов платит ИП в Узбекистане?', answer: 'Налог с оборота 4% + социальный налог 412 000 сум/мес + ИНПС 0,1%. Эффективная ставка: около 5,5% от выручки.' },
      { question: 'Чем ИП отличается от самозанятого?', answer: 'ИП: 4% налог, может нанимать до 10 работников. Самозанятый (с 2026): 1% налог, без работников, оборот до 100 млн/год.' },
      { question: 'Нужна ли ИП касса?', answer: 'Да, ИП обязаны использовать ККТ или виртуальную кассу при приёме наличных и карточных платежей.' },
      { question: 'Какой порог для уплаты НДС?', answer: '60 000 БРВ (24,72 млрд сум) за 12 месяцев. Ниже этого порога ИП не платит НДС.' },
      { question: 'Как зарегистрировать ИП?', answer: 'Через my.gov.uz или налоговую. Бесплатно, 1-3 дня. Нужен паспорт, ИНН выдаётся автоматически.' },
      { question: 'Сколько работников может нанять ИП?', answer: 'До 10 человек (с 2025 года — до 25 для отдельных видов деятельности).' },
    ],
    faqUz: [
      { question: "O'zbekistonda YaTT qancha soliq to'laydi?", answer: "Aylanma solig'i 4% + ijtimoiy soliq 412 000 so'm/oy + IJPH 0,1%. Samarali stavka: tushumning taxminan 5,5%." },
      { question: "YaTT o'z-o'zini band qilgandan nimasi bilan farq qiladi?", answer: "YaTT: 4% soliq, 10 tagacha xodim yollashi mumkin. O'z-o'zini band qilgan (2026-yildan): 1% soliq, xodimsiz, aylanma 100 mln/yilgacha." },
      { question: "YaTTga kassa kerakmi?", answer: "Ha, YaTTlar naqd va karta to'lovlarini qabul qilishda NKT yoki virtual kassadan foydalanishi shart." },
      { question: "QQS to'lash uchun chegara qancha?", answer: "12 oy davomida 60 000 BHK (24,72 mlrd so'm). Bu chegaradan past bo'lsa YaTT QQS to'lamaydi." },
      { question: "YaTTni qanday ro'yxatdan o'tkazish mumkin?", answer: "my.gov.uz yoki soliq inspektsiyasi orqali. Bepul, 1-3 kun. Pasport kerak, STIR avtomatik beriladi." },
      { question: "YaTT nechta xodim yollashi mumkin?", answer: "10 kishigacha (2025-yildan ayrim faoliyat turlari uchun 25 tagacha)." },
    ],
  },

  {
    slug: 'employer-cost',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
    ],
    paragraphsRu: [
      'Полная стоимость сотрудника для работодателя в Узбекистане складывается из начисленной заработной платы и обязательных отчислений: социальный налог 12% от фонда оплаты труда (25% для бюджетных организаций). Калькулятор стоимости работника для работодателя рассчитывает полные расходы на сотрудника и разбивку всех удержаний и начислений.',
      'Структура расходов работодателя на сотрудника с зарплатой 10 000 000 сум «на руки»: начисленная зарплата (гросс) = 10 000 000 / 0,879 = 11 376 564 сум; НДФЛ (удерживается из зарплаты): 11 376 564 × 12% = 1 365 188 сум; ИНПС (удерживается): 11 376 564 × 0,1% = 11 377 сум; социальный налог (за счёт работодателя): 11 376 564 × 12% = 1 365 188 сум; полная стоимость: 11 376 564 + 1 365 188 = 12 741 752 сум. Работодатель платит на 27,4% больше, чем работник получает на руки.',
      'Для резидентов IT Park расходы ниже: при той же зарплате «на руки» 10 000 000 сум гросс = 10 000 000 / 0,924 = 10 822 511 сум; социальный налог: 10 822 511 × 12% = 1 298 701 сум; полная стоимость: 12 121 212 сум. Экономия для работодателя: 620 540 сум на одного сотрудника в месяц по сравнению с обычным режимом.',
      'Помимо прямых налоговых расходов работодатель несёт дополнительные затраты: оплата больничных (первые 10 дней — за счёт работодателя); отпускные (среднедневной заработок × дни отпуска); компенсация при увольнении; обязательное страхование от несчастных случаев на производстве; расходы на охрану труда. Эти расходы увеличивают стоимость сотрудника ещё на 10-20%.',
      'Сравнение режимов: обычный работодатель — полная стоимость 112% от гросс (или 127,4% от нетто); IT Park — полная стоимость 112% от гросс (или 121,2% от нетто); бюджетная организация — полная стоимость 125% от гросс. Для оптимизации расходов на персонал рассмотрите: получение статуса резидента IT Park (для IT-компаний); аутсорсинг непрофильных функций; автоматизацию рутинных процессов.',
    ],
    paragraphsUz: [
      "O'zbekistonda ish beruvchi uchun xodimning to'liq qiymati hisoblangan ish haqi va majburiy ajratmalardan tashkil topadi: ish haqi fondidan 12% ijtimoiy soliq (byudjet tashkilotlari uchun 25%). Ish beruvchi uchun xodim qiymati kalkulyatori xodimga ketadigan to'liq xarajatlarni va barcha ushlanmalar va hisob-kitoblarning taqsimotini hisoblaydi.",
      "Qo'lga 10 000 000 so'm ish haqili xodimga ish beruvchi xarajatlari tarkibi: hisoblangan ish haqi (gross) = 10 000 000 / 0,879 = 11 376 564 so'm; JShShS: 1 365 188 so'm; IJPH: 11 377 so'm; ijtimoiy soliq: 1 365 188 so'm; to'liq qiymat: 12 741 752 so'm. Ish beruvchi xodim qo'liga oladigan summadan 27,4% ko'proq to'laydi.",
      "IT Park rezidentlari uchun xarajatlar pastroq: xuddi shu 10 000 000 so'm qo'lga ish haqida gross = 10 822 511 so'm; ijtimoiy soliq: 1 298 701 so'm; to'liq qiymat: 12 121 212 so'm. Ish beruvchi uchun tejash: oddiy rejimga nisbatan bir xodimga oyiga 620 540 so'm.",
      "Bevosita soliq xarajatlaridan tashqari ish beruvchi qo'shimcha xarajatlarga duchor bo'ladi: kasallik varag'ini to'lash (birinchi 10 kun — ish beruvchi hisobidan); ta'til haqi; ishdan bo'shatishda kompensatsiya; ishlab chiqarishdagi baxtsiz hodisalardan majburiy sug'urta. Bu xarajatlar xodim qiymatini yana 10-20% ga oshiradi.",
      "Rejimlarni solishtirish: oddiy ish beruvchi — grossdan 112% (yoki nettodan 127,4%); IT Park — grossdan 112% (nettodan 121,2%); byudjet tashkilot — grossdan 125%. Xodimlar xarajatlarini optimallashtirish uchun: IT Park rezidenti maqomini olish; noprofilga funksiyalarni autsorsing qilish; oddiy jarayonlarni avtomatlashtirish.",
    ],
    faqRu: [
      { question: 'Сколько работодатель платит сверх зарплаты в Узбекистане?', answer: 'Социальный налог 12% от начисленной зарплаты (25% для бюджетных). Полная стоимость = зарплата на руки × 1,274.' },
      { question: 'Как рассчитать полную стоимость сотрудника?', answer: 'Гросс = Нетто / 0,879. Полная стоимость = Гросс × 1,12. Для IT Park: Гросс = Нетто / 0,924, Полная стоимость = Гросс × 1,12.' },
      { question: 'Какие ещё расходы несёт работодатель?', answer: 'Больничные (первые 10 дней), отпускные, компенсация при увольнении, страхование, охрана труда. Дополнительно 10-20% к ФОТ.' },
      { question: 'Выгоднее ли нанимать через IT Park?', answer: 'Да, экономия ~620 000 сум/мес на сотрудника с зарплатой 10 млн «на руки» (около 5% общих расходов).' },
      { question: 'Какой социальный налог для бюджетных организаций?', answer: '25% от ФОТ вместо стандартных 12%. Полная стоимость = Гросс × 1,25.' },
    ],
    faqUz: [
      { question: "O'zbekistonda ish beruvchi ish haqidan tashqari qancha to'laydi?", answer: "Hisoblangan ish haqidan 12% ijtimoiy soliq (byudjet uchun 25%). To'liq qiymat = qo'ldagi ish haqi × 1,274." },
      { question: "Xodimning to'liq qiymatini qanday hisoblash mumkin?", answer: "Gross = Netto / 0,879. To'liq qiymat = Gross × 1,12. IT Park uchun: Gross = Netto / 0,924." },
      { question: "Ish beruvchi yana qanday xarajatlarga duchor bo'ladi?", answer: "Kasallik varag'i (birinchi 10 kun), ta'til haqi, ishdan bo'shatish kompensatsiyasi, sug'urta, mehnat muhofazasi. IHFga qo'shimcha 10-20%." },
      { question: "IT Park orqali yollash foydaliroqmi?", answer: "Ha, 10 mln so'm qo'ldagi ish haqili xodimga oyiga ~620 000 so'm tejash (umumiy xarajatlarning taxminan 5%)." },
      { question: "Byudjet tashkilotlari uchun ijtimoiy soliq qancha?", answer: "Standart 12% o'rniga IHFdan 25%. To'liq qiymat = Gross × 1,25." },
    ],
  },

  {
    slug: 'brv',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'Указ Президента о БРВ', url: 'https://lex.uz' },
    ],
    paragraphsRu: [
      'Базовая расчётная величина (БРВ) в Узбекистане с августа 2025 года составляет 412 000 сум. БРВ — это универсальный экономический показатель, который используется для расчёта штрафов, государственных пошлин, социальных пособий, налоговых порогов и ограничений. Калькулятор БРВ переводит суммы из БРВ в сумы и обратно, что необходимо для понимания законодательных норм и расчёта платежей.',
      'Динамика БРВ за последние годы: 2023 — 330 000 сум; 2024 — 375 000 сум (рост 13,6%); с августа 2025 — 412 000 сум (рост 9,9%). БРВ индексируется с учётом инфляции и роста экономики. Размер БРВ устанавливается Указом Президента и публикуется в официальных источниках. Каждое изменение БРВ автоматически влияет на все привязанные к нему показатели: штрафы, пороги, пособия.',
      'Примеры использования БРВ: порог для обязательной регистрации плательщиком НДС — 60 000 БРВ = 24 720 000 000 сум; максимальный штраф за вождение без ОСАГО — 10 БРВ = 4 120 000 сум; гарантия по банковским вкладам — ~486 БРВ (200 000 000 сум); имущественный вычет по НДФЛ — 500 БРВ = 206 000 000 сум; материальная помощь, не облагаемая НДФЛ — 4,22 БРВ = 1 738 640 сум/год.',
      'Минимальная заработная плата (МЗП) с 2025 года составляет 1 271 000 сум — это примерно 3,08 БРВ. МЗП и БРВ — разные показатели: МЗП определяет минимальный уровень оплаты труда, а БРВ — базу для расчёта различных нормативов. Ранее МЗП и БРВ были привязаны друг к другу, но с реформы 2022 года они устанавливаются независимо.',
      'Для быстрого расчёта: 1 БРВ = 412 000 сум; 10 БРВ = 4 120 000 сум; 100 БРВ = 41 200 000 сум; 1 000 БРВ = 412 000 000 сум; 10 000 БРВ = 4 120 000 000 сум; 60 000 БРВ = 24 720 000 000 сум. При чтении законодательных актов, где суммы указаны в БРВ, используйте наш калькулятор для мгновенного перевода в сумы.',
    ],
    paragraphsUz: [
      "O'zbekistonda bazaviy hisoblash kattaligi (BHK) 2025-yil avgustidan 412 000 so'mni tashkil etadi. BHK — jarimalar, davlat bojlari, ijtimoiy nafaqalar, soliq chegaralari va cheklovlarni hisoblash uchun ishlatiladigan universal iqtisodiy ko'rsatkich. BHK kalkulyatori summalarni BHKdan so'mga va aksincha o'giradi.",
      "So'nggi yillardagi BHK dinamikasi: 2023 — 330 000 so'm; 2024 — 375 000 so'm (13,6% o'sish); 2025-yil avgustidan — 412 000 so'm (9,9% o'sish). BHK inflyatsiya va iqtisodiy o'sishni hisobga olgan holda indekslanadi. BHK miqdori Prezident Farmoni bilan belgilanadi.",
      "BHK qo'llanilishi misollari: QQS to'lovchisi sifatida majburiy ro'yxatdan o'tish chegarasi — 60 000 BHK = 24 720 000 000 so'm; OSAGOsiz haydash uchun maksimal jarima — 10 BHK = 4 120 000 so'm; bank omonatlari kafolati — ~486 BHK (200 000 000 so'm); JShShS bo'yicha mulkiy chegirma — 500 BHK = 206 000 000 so'm.",
      "Minimal ish haqi (MIH) 2025-yildan 1 271 000 so'mni tashkil etadi — bu taxminan 3,08 BHK. MIH va BHK turli ko'rsatkichlardir: MIH mehnat haqi to'lashning minimal darajasini belgilaydi, BHK esa turli normativlarni hisoblash uchun asosdir. 2022-yil islohidan beri ular mustaqil belgilanadi.",
      "Tez hisoblash uchun: 1 BHK = 412 000 so'm; 10 BHK = 4 120 000 so'm; 100 BHK = 41 200 000 so'm; 1 000 BHK = 412 000 000 so'm; 10 000 BHK = 4 120 000 000 so'm; 60 000 BHK = 24 720 000 000 so'm. Summalar BHK da ko'rsatilgan qonun hujjatlarini o'qiyotganda, so'mga bir zumda o'girish uchun kalkulyatorimizdan foydalaning.",
    ],
    faqRu: [
      { question: 'Сколько составляет 1 БРВ в 2025 году?', answer: '412 000 сум (с августа 2025 года). До этого: 375 000 сум (2024), 330 000 сум (2023).' },
      { question: 'Для чего используется БРВ?', answer: 'Для расчёта штрафов, госпошлин, налоговых порогов, социальных пособий, вычетов по НДФЛ и многих других нормативов.' },
      { question: 'Чем БРВ отличается от минимальной зарплаты?', answer: 'БРВ (412 000 сум) — расчётный показатель для нормативов. МЗП (1 271 000 сум) — минимальный уровень оплаты труда. С 2022 года устанавливаются независимо.' },
      { question: 'Как часто меняется БРВ?', answer: 'Обычно 1-2 раза в год по Указу Президента. Индексируется с учётом инфляции и экономического роста.' },
      { question: 'Сколько БРВ составляет порог НДС?', answer: '60 000 БРВ = 24 720 000 000 сум. При обороте выше этой суммы за 12 месяцев регистрация плательщиком НДС обязательна.' },
    ],
    faqUz: [
      { question: "2025-yilda 1 BHK qancha?", answer: "412 000 so'm (2025-yil avgustidan). Bundan oldin: 375 000 so'm (2024), 330 000 so'm (2023)." },
      { question: "BHK nima uchun ishlatiladi?", answer: "Jarimalar, davlat bojlari, soliq chegaralari, ijtimoiy nafaqalar, JShShS bo'yicha chegirmalar va boshqa ko'plab normativlarni hisoblash uchun." },
      { question: "BHK minimal ish haqidan nimasi bilan farq qiladi?", answer: "BHK (412 000 so'm) — normativlar uchun hisob ko'rsatkich. MIH (1 271 000 so'm) — mehnat haqi to'lashning minimal darajasi. 2022-yildan mustaqil belgilanadi." },
      { question: "BHK qanchalik tez-tez o'zgaradi?", answer: "Odatda yiliga 1-2 marta Prezident Farmoni bilan. Inflyatsiya va iqtisodiy o'sishni hisobga olgan holda indekslanadi." },
      { question: "QQS chegarasi necha BHK?", answer: "60 000 BHK = 24 720 000 000 so'm. 12 oy davomida aylanma bu summadan oshganda QQS to'lovchisi sifatida ro'yxatdan o'tish majburiy." },
    ],
  },

  // =====================================================================
  // REMAINING 58 CALCULATORS (200-300 words, 3-4 FAQ each)
  // =====================================================================

  {
    slug: 'llc-calculator',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'ООО (общество с ограниченной ответственностью) в Узбекистане может работать на общей или упрощённой системе налогообложения. На общей системе: налог на прибыль — 15%, НДС — 12% (при обороте более 60 000 БРВ). На упрощённой: налог с оборота — 4% без вычета расходов.',
      'Структура налогов ООО на общей системе: налог на прибыль 15% (чистая прибыль = доходы − расходы); НДС 12% (при обороте >24,72 млрд сум); социальный налог 12% от ФОТ; НДФЛ 12% с зарплат сотрудников (удерживается). Дивиденды облагаются НДФЛ по ставке 5%.',
      'Пример: ООО с выручкой 1 млрд сум/мес, расходами 700 млн сум. Прибыль: 300 млн. Налог на прибыль: 45 млн. НДС к уплате (разница входящего и исходящего): ~20-30 млн. Общая система выгоднее при расходах более 60% выручки, упрощённая — при расходах менее 40%.',
    ],
    paragraphsUz: [
      "O'zbekistonda MChJ (mas'uliyati cheklangan jamiyat) umumiy yoki soddalashtilgan soliqqa tortish tizimida ishlashi mumkin. Umumiy tizimda: foyda solig'i — 15%, QQS — 12% (aylanma 60 000 BHKdan ortiqda). Soddalashtirilda: aylanma solig'i — xarajatlarni chegirmasdan 4%.",
      "Umumiy tizimdagi MChJ soliqlar tarkibi: foyda solig'i 15% (sof foyda = daromadlar − xarajatlar); QQS 12% (aylanma >24,72 mlrd so'mda); ijtimoiy soliq IHFdan 12%; xodimlar ish haqidan JShShS 12% (ushlab qolinadi). Dividendlar 5% stavkada JShShSga tortiladi.",
      "Misol: oylik 1 mlrd so'm tushumli, 700 mln so'm xarajatli MChJ. Foyda: 300 mln. Foyda solig'i: 45 mln. Umumiy tizim xarajatlar tushumning 60% dan ortiq bo'lganda, soddalashtilgan — xarajatlar 40% dan kam bo'lganda foydaliroq.",
    ],
    faqRu: [
      { question: 'Какой налог на прибыль ООО?', answer: '15% на общей системе. На упрощённой — 4% от оборота (без вычета расходов).' },
      { question: 'Какой налог на дивиденды?', answer: 'НДФЛ 5% с выплаченных дивидендов.' },
      { question: 'Когда выгоднее общая система?', answer: 'При расходах более 60% от выручки. При расходах менее 40% выгоднее упрощённая (4% от оборота).' },
      { question: 'Какие отчёты сдаёт ООО?', answer: 'Декларация по налогу на прибыль (ежеквартально), НДС (ежемесячно/квартально), расчёт социального налога, финансовая отчётность.' },
    ],
    faqUz: [
      { question: "MChJ foyda solig'i qancha?", answer: "Umumiy tizimda 15%. Soddalashtirilda — aylanmaning 4% (xarajatlarni chegirmasdan)." },
      { question: 'Dividendlarga soliq qancha?', answer: "To'langan dividendlardan JShShS 5%." },
      { question: "Umumiy tizim qachon foydaliroq?", answer: "Xarajatlar tushumning 60% dan ortiq bo'lganda. 40% dan kam bo'lsa soddalashtilgan (aylanmadan 4%) foydaliroq." },
      { question: 'MChJ qanday hisobotlar topshiradi?', answer: "Foyda solig'i deklaratsiyasi (har chorak), QQS (oylik/choraklik), ijtimoiy soliq hisobi, moliyaviy hisobot." },
    ],
  },

  {
    slug: 'calories',
    lastUpdated: '2025-07-15',
    sources: [
      { name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Калькулятор калорий рассчитывает суточную норму калорий по формулам Миффлина-Сан Жеора и Харриса-Бенедикта с учётом пола, возраста, роста, веса и уровня физической активности. Средняя норма для жителей Узбекистана: мужчины — 2 000-2 500 ккал/день, женщины — 1 600-2 000 ккал/день. По данным Министерства здравоохранения РУз, около 30% населения страны имеют избыточный вес, что делает контроль калорий особенно актуальным.',
      'Для снижения веса рекомендуется дефицит 500-750 ккал/день, что обеспечит безопасную потерю 0,5-0,75 кг в неделю. Для набора мышечной массы необходим профицит 300-500 ккал/день с акцентом на белковую пищу. Калькулятор показывает отдельно нормы для поддержания текущего веса, похудения и набора массы, что помогает выбрать оптимальную стратегию питания.',
      'Формула Миффлина-Сан Жеора считается наиболее точной для современного человека: для мужчин BMR = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст + 5; для женщин BMR = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст − 161. Суточная норма = BMR × коэффициент активности: 1,2 (сидячий образ жизни), 1,375 (лёгкая активность 1-3 раза/нед.), 1,55 (умеренная 3-5 раз/нед.), 1,725 (высокая 6-7 раз/нед.), 1,9 (очень высокая, профессиональные спортсмены).',
      'Традиционная узбекская кухня калорийна: порция плова содержит около 700-900 ккал, самса — 350-450 ккал, лагман — 400-600 ккал, шурпа — 300-500 ккал. Лепёшка (нон) — 250-350 ккал. При суточной норме 2 000 ккал одна порция плова покрывает 35-45% дневного рациона. Знание калорийности узбекских блюд позволяет контролировать питание без отказа от национальной кухни.',
      'Наш калькулятор калорий адаптирован для жителей Узбекистана и учитывает местные особенности: жаркий климат (увеличение потребности в жидкости и электролитах), высокая доля углеводов в традиционном рационе, сезонность фруктов и овощей. Рекомендации ВОЗ для Центральной Азии предполагают не менее 400 граммов овощей и фруктов в день. Введите ваши параметры, и калькулятор рассчитает персональную норму калорий для достижения вашей цели.',
    ],
    paragraphsUz: [
      "Kaloriya kalkulyatori jins, yosh, bo'y, vazn va jismoniy faollik darajasini hisobga olgan holda Mifflin-San Jeor va Harris-Benedikt formulalari bo'yicha kunlik kaloriya normasini hisoblaydi. O'zbekiston aholisi uchun o'rtacha norma: erkaklar — 2 000-2 500 kkal/kun, ayollar — 1 600-2 000 kkal/kun. O'zbekiston Sog'liqni saqlash vazirligining ma'lumotlariga ko'ra, aholining taxminan 30% ortiqcha vaznli bo'lib, kaloriyalarni nazorat qilish alohida ahamiyat kasb etadi.",
      "Vazn kamaytirish uchun kuniga 500-750 kkal deficit tavsiya etiladi, bu haftasiga xavfsiz 0,5-0,75 kg yo'qotishni ta'minlaydi. Mushak massasini oshirish uchun oqsilli ovqatlarga urg'u berib, 300-500 kkal profitsit kerak. Kalkulyator joriy vaznni saqlash, oriqlamoq va massa oshirish uchun normalarni alohida ko'rsatadi, bu optimal ovqatlanish strategiyasini tanlashga yordam beradi.",
      "Mifflin-San Jeor formulasi zamonaviy inson uchun eng aniq hisoblanadi: erkaklar uchun BMR = 10 × vazn(kg) + 6,25 × bo'y(sm) − 5 × yosh + 5; ayollar uchun BMR = 10 × vazn(kg) + 6,25 × bo'y(sm) − 5 × yosh − 161. Kunlik norma = BMR × faollik koeffitsienti: 1,2 (o'tirgan turmush tarzi), 1,375 (yengil faollik haftada 1-3 marta), 1,55 (o'rtacha 3-5 marta), 1,725 (yuqori 6-7 marta), 1,9 (juda yuqori, professional sportchilar).",
      "An'anaviy o'zbek oshxonasi kaloriyali: bir porsiya osh taxminan 700-900 kkal, somsa — 350-450 kkal, lag'mon — 400-600 kkal, sho'rva — 300-500 kkal. Non — 250-350 kkal. Kunlik 2 000 kkal normada bir porsiya osh kunlik ratsionning 35-45% ini qoplaydi. O'zbek taomlarining kaloriyaliligini bilish milliy oshxonadan voz kechmasdan ovqatlanishni nazorat qilish imkonini beradi.",
      "Kaloriya kalkulyatorimiz O'zbekiston aholisi uchun moslashtirilgan va mahalliy xususiyatlarni hisobga oladi: issiq iqlim (suyuqlik va elektrolitlarga ehtiyojning oshishi), an'anaviy ratsiondagi uglevodlarning yuqori ulushi, meva va sabzavotlarning mavsumiy xususiyatlari. Markaziy Osiyo uchun JSST tavsiyalari kuniga kamida 400 gramm sabzavot va meva iste'mol qilishni nazarda tutadi. Parametrlaringizni kiriting va kalkulyator maqsadingizga erishish uchun shaxsiy kaloriya normasini hisoblab beradi.",
    ],
    faqRu: [
      { question: 'Сколько калорий нужно в день?', answer: 'Мужчины: 2 000-2 500 ккал, женщины: 1 600-2 000 ккал. Зависит от возраста, веса, роста и уровня физической активности. Калькулятор рассчитает персональную норму.' },
      { question: 'Сколько калорий нужно для похудения?', answer: 'На 500-750 ккал меньше суточной нормы. Это обеспечит безопасную потерю 0,5-0,75 кг в неделю. Не рекомендуется снижать калорийность ниже 1 200 ккал для женщин и 1 500 ккал для мужчин.' },
      { question: 'Какая формула точнее?', answer: 'Формула Миффлина-Сан Жеора считается наиболее точной для современного человека (точность ~90%). Формула Харриса-Бенедикта завышает на 5-10%.' },
      { question: 'Сколько калорий в плове?', answer: 'Одна порция плова (300-400 г) содержит 700-900 ккал. Самса — 350-450 ккал, лагман — 400-600 ккал, шурпа — 300-500 ккал.' },
      { question: 'Нужно ли учитывать климат при расчёте калорий?', answer: 'Да, в жарком климате Узбекистана организм тратит дополнительную энергию на терморегуляцию. Летом потребность может увеличиться на 5-10%.' },
    ],
    faqUz: [
      { question: "Kuniga necha kaloriya kerak?", answer: "Erkaklar: 2 000-2 500 kkal, ayollar: 1 600-2 000 kkal. Yosh, vazn, bo'y va jismoniy faollik darajasiga bog'liq. Kalkulyator shaxsiy normani hisoblab beradi." },
      { question: "Vazn kamaytirish uchun necha kaloriya kerak?", answer: "Kunlik normadan 500-750 kkal kam. Bu haftasiga xavfsiz 0,5-0,75 kg yo'qotishni ta'minlaydi. Ayollar uchun 1 200 kkal va erkaklar uchun 1 500 kkal dan past tushirish tavsiya etilmaydi." },
      { question: "Qaysi formula aniqroq?", answer: "Mifflin-San Jeor formulasi zamonaviy inson uchun eng aniq hisoblanadi (aniqligi ~90%). Harris-Benedikt formulasi 5-10% ga oshirib ko'rsatadi." },
      { question: "Oshda necha kaloriya bor?", answer: "Bir porsiya osh (300-400 g) 700-900 kkal o'z ichiga oladi. Somsa — 350-450 kkal, lag'mon — 400-600 kkal, sho'rva — 300-500 kkal." },
      { question: "Kaloriyalarni hisoblashda iqlimni hisobga olish kerakmi?", answer: "Ha, O'zbekistonning issiq iqlimida organizm termoregulyatsiyaga qo'shimcha energiya sarflaydi. Yozda ehtiyoj 5-10% ga oshishi mumkin." },
    ],
  },

  {
    slug: 'bmi',
    lastUpdated: '2025-06-20',
    sources: [
      { name: 'ВОЗ — Индекс массы тела', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Индекс массы тела (ИМТ) — основной показатель соответствия веса и роста, рассчитываемый по формуле: ИМТ = Вес(кг) / Рост(м)². Классификация ВОЗ: менее 18,5 — дефицит массы; 18,5-24,9 — норма; 25-29,9 — избыточный вес; 30-34,9 — ожирение I степени; 35-39,9 — ожирение II степени; 40 и выше — ожирение III степени. По данным исследований в Узбекистане, избыточный вес имеют около 30% взрослого населения, а ожирение — около 15%.',
      'Пример расчёта для жителя Узбекистана: мужчина, вес 85 кг, рост 175 см. ИМТ = 85 / 1,75² = 27,8 — избыточный вес. Для нормы при росте 175 см вес должен быть 57-76 кг. Другой пример: женщина, вес 65 кг, рост 162 см. ИМТ = 65 / 1,62² = 24,8 — верхняя граница нормы. Калькулятор ИМТ мгновенно определит ваш показатель и подскажет, в какой категории вы находитесь.',
      'ИМТ имеет ограничения: он не учитывает мышечную массу, костную структуру и распределение жира. Для спортсменов, беременных женщин, людей старше 65 лет и детей до 18 лет ИМТ может давать некорректные результаты. В этих случаях рекомендуется дополнительно измерить обхват талии: для мужчин норма менее 94 см, для женщин — менее 80 см.',
      'По данным Минздрава Узбекистана, основными факторами избыточного веса в республике являются высококалорийная традиционная кухня (плов, самса, жирное мясо), малоподвижный образ жизни и недостаточное потребление овощей и фруктов. Программа «Здоровый Узбекистан» рекомендует регулярный контроль ИМТ для профилактики сердечно-сосудистых заболеваний, диабета 2 типа и заболеваний суставов.',
      'Для комплексной оценки состояния здоровья рекомендуется использовать калькулятор ИМТ совместно с калькулятором идеального веса и калькулятором КБЖУ (калории, белки, жиры, углеводы). Здоровый ИМТ в диапазоне 18,5-24,9 снижает риск хронических заболеваний на 30-50%. Введите ваш вес и рост — калькулятор покажет ИМТ, категорию и рекомендации по коррекции веса.',
    ],
    paragraphsUz: [
      "Tana massasi indeksi (TMI) — vazn va bo'yning mosligining asosiy ko'rsatkichi bo'lib, formula bo'yicha hisoblanadi: TMI = Vazn(kg) / Bo'y(m)². JSST tasnifi: 18,5 dan kam — massa tanqisligi; 18,5-24,9 — norma; 25-29,9 — ortiqcha vazn; 30-34,9 — I darajali semirish; 35-39,9 — II darajali semirish; 40 va undan yuqori — III darajali semirish. O'zbekistondagi tadqiqotlarga ko'ra, katta yoshdagi aholining taxminan 30% ortiqcha vaznli, 15% esa semiz.",
      "O'zbekiston aholisi uchun hisoblash misoli: erkak, vazn 85 kg, bo'y 175 sm. TMI = 85 / 1,75² = 27,8 — ortiqcha vazn. 175 sm bo'yda norma uchun vazn 57-76 kg bo'lishi kerak. Boshqa misol: ayol, vazn 65 kg, bo'y 162 sm. TMI = 65 / 1,62² = 24,8 — normaning yuqori chegarasi. TMI kalkulyatori ko'rsatkichingizni bir zumda aniqlaydi va qaysi toifada ekanligingizni ko'rsatadi.",
      "TMI cheklovlarga ega: u mushak massasini, suyak tuzilishini va yog' taqsimlanishini hisobga olmaydi. Sportchilar, homilador ayollar, 65 yoshdan katta kishilar va 18 yoshgacha bolalar uchun TMI noto'g'ri natijalar berishi mumkin. Bunday hollarda qo'shimcha ravishda bel aylanasini o'lchash tavsiya etiladi: erkaklar uchun norma 94 sm dan kam, ayollar uchun — 80 sm dan kam.",
      "O'zbekiston Sog'liqni saqlash vazirligining ma'lumotlariga ko'ra, respublikada ortiqcha vaznning asosiy omillari yuqori kaloriyali an'anaviy oshxona (osh, somsa, yog'li go'sht), kam harakatli turmush tarzi va sabzavot hamda mevalarning yetarli iste'mol qilinmasligidir. «Sog'lom O'zbekiston» dasturi yurak-qon tomir kasalliklari, 2-tip diabet va bo'g'im kasalliklari profilaktikasi uchun TMIni muntazam nazorat qilishni tavsiya etadi.",
      "Sog'liq holatini to'liq baholash uchun TMI kalkulyatorini ideal vazn kalkulyatori va KBYU kalkulyatori (kaloriyalar, oqsillar, yog'lar, uglevodlar) bilan birgalikda ishlatish tavsiya etiladi. 18,5-24,9 diapazonidagi sog'lom TMI surunkali kasalliklar xavfini 30-50% ga kamaytiradi. Vazn va bo'yingizni kiriting — kalkulyator TMI, toifa va vaznni tuzatish bo'yicha tavsiyalarni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать ИМТ?', answer: 'ИМТ = Вес(кг) / Рост(м)². Например: 70 кг при росте 170 см → 70 / 1,70² = 24,2. Это верхняя граница нормы.' },
      { question: 'Какой ИМТ считается нормальным?', answer: '18,5-24,9 по классификации ВОЗ. Ниже 18,5 — дефицит, 25-29,9 — избыточный вес, 30+ — ожирение.' },
      { question: 'Точен ли ИМТ для спортсменов?', answer: 'Нет, ИМТ не различает мышечную и жировую массу. Спортсменам лучше использовать измерение процента жира (норма 10-20% для мужчин, 18-28% для женщин).' },
      { question: 'Какой нормальный вес при росте 175 см?', answer: 'По ВОЗ (ИМТ 18,5-24,9): 57-76 кг. Оптимальный диапазон: 63-72 кг.' },
      { question: 'Какова ситуация с ожирением в Узбекистане?', answer: 'Около 30% взрослого населения имеют избыточный вес, 15% — ожирение. Основные причины: калорийная кухня и малоподвижность.' },
    ],
    faqUz: [
      { question: 'TMI qanday hisoblanadi?', answer: "TMI = Vazn(kg) / Bo'y(m)². Masalan: 170 sm bo'yda 70 kg → 70 / 1,70² = 24,2. Bu normaning yuqori chegarasi." },
      { question: 'Qanday TMI normal hisoblanadi?', answer: "JSST tasnifi bo'yicha 18,5-24,9. 18,5 dan past — tanqislik, 25-29,9 — ortiqcha vazn, 30+ — semirish." },
      { question: "TMI sportchilar uchun aniqmi?", answer: "Yo'q, TMI mushak va yog' massasini farqlamaydi. Sportchilarga yog' foizini o'lchash yaxshiroq (erkaklar uchun norma 10-20%, ayollar uchun 18-28%)." },
      { question: "175 sm bo'yda normal vazn qancha?", answer: "JSST bo'yicha (TMI 18,5-24,9): 57-76 kg. Optimal diapazon: 63-72 kg." },
      { question: "O'zbekistonda semirish holati qanday?", answer: "Katta yoshdagi aholining taxminan 30% ortiqcha vaznli, 15% — semiz. Asosiy sabablar: kaloriyali oshxona va kam harakatlilik." },
    ],
  },

  {
    slug: 'zakat',
    lastUpdated: '2025-09-10',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд Узбекистана', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Закят — один из пяти столпов ислама, обязательная ежегодная выплата, составляющая 2,5% от имущества, которым мусульманин владел в течение полного лунного года (хавль). Нисаб — минимальный порог, определяется по стоимости 85 граммов золота (~$5 500, или ~70 000 000 сум по курсу 2025 года) или 595 граммов серебра. В Узбекистане, где более 90% населения — мусульмане, закят играет важную социальную роль в поддержке нуждающихся.',
      'В расчёт закята включаются: наличные деньги (в том числе на счетах Uzum, Click, Payme), банковские вклады в узбекских банках, золото и серебро сверх личных украшений, товарные запасы для торговли, акции и инвестиции, дебиторская задолженность. Не включаются: жилой дом, личный автомобиль, одежда, бытовая техника, инструменты для заработка, долги, которые нужно выплатить.',
      'Пример расчёта для жителя Ташкента: наличные 100 млн сум + депозит в Ipoteka bank 200 млн + золотые украшения 150 млн (за вычетом личных 50 млн) + товарный запас магазина 300 млн = итого 750 млн сум. Нисаб ≈ 70 млн сум. Активы (750 млн) > нисаб → Закят = 750 000 000 × 2,5% = 18 750 000 сум. Эту сумму необходимо распределить среди категорий получателей.',
      'Получатели закята определены в Коране (сура Ат-Тауба, аят 60): бедные (фукара), нуждающиеся (масакин), сборщики закята, новообращённые мусульмане, для освобождения рабов, должники, на пути Аллаха, путники. В Узбекистане закят можно передать через мечети, фонд Вакф (vaqf.uz), благотворительные организации или напрямую нуждающимся. Управление мусульман Узбекистана ежегодно публикует рекомендации по размерам нисаба.',
      'Калькулятор закята на нашем сайте автоматически рассчитывает нисаб по текущей стоимости золота в Узбекистане, суммирует ваши активы и определяет точную сумму выплаты. Введите стоимость ваших активов в сумах — калькулятор покажет, обязаны ли вы выплачивать закят и какую именно сумму. Рекомендуется выплачивать закят в месяце Рамадан, хотя это не является обязательным условием.',
    ],
    paragraphsUz: [
      "Zakot — islomning beshta arkonidan biri, musulmon to'liq qamariy yil (havl) davomida ega bo'lgan mol-mulkning 2,5% miqdoridagi majburiy yillik to'lov. Nisob — minimal chegara bo'lib, 85 gramm oltin (~$5 500, yoki 2025-yil kursida ~70 000 000 so'm) yoki 595 gramm kumush qiymati bo'yicha aniqlanadi. Aholisining 90% dan ortig'i musulmon bo'lgan O'zbekistonda zakot muhtojlarni qo'llab-quvvatlashda muhim ijtimoiy rol o'ynaydi.",
      "Zakot hisobiga kiritiladi: naqd pul (jumladan Uzum, Click, Payme hisoblaridagi), o'zbek banklaridagi omonatlar, shaxsiy taqinchoqlardan tashqari oltin va kumush, savdo uchun tovar zahiralari, aksiya va investitsiyalar, debitorlik qarzlari. Kiritilmaydi: turar-joy, shaxsiy avtomobil, kiyim-kechak, maishiy texnika, daromad topish uchun asboblar, to'lanishi kerak bo'lgan qarzlar.",
      "Toshkent aholisi uchun hisoblash misoli: naqd pul 100 mln so'm + Ipoteka bankda omonat 200 mln + oltin taqinchoqlar 150 mln (shaxsiy 50 mln chegirilganda) + do'kon tovar zahirasi 300 mln = jami 750 mln so'm. Nisob ≈ 70 mln so'm. Aktivlar (750 mln) > nisob → Zakot = 750 000 000 × 2,5% = 18 750 000 so'm. Ushbu summani oluvchilar toifalari o'rtasida taqsimlash kerak.",
      "Zakot oluvchilari Qur'onda belgilangan (At-Tavba surasi, 60-oyat): kambag'allar (fuqaro), muhtojlar (masokin), zakot yig'uvchilar, yangi musulmonlar, qullarni ozod qilish uchun, qarzdorlar, Alloh yo'lida, musofirlar. O'zbekistonda zakotni masjidlar, Vaqf fondi (vaqf.uz), xayriya tashkilotlari orqali yoki bevosita muhtojlarga uzatish mumkin. O'zbekiston Musulmonlari boshqarmasi har yili nisob miqdorlari bo'yicha tavsiyalar e'lon qiladi.",
      "Saytimizda zakot kalkulyatori O'zbekistondagi joriy oltin narxi bo'yicha nisobni avtomatik hisoblaydi, aktivlaringizni jamlaydi va aniq to'lov summasini aniqlaydi. Aktivlaringiz qiymatini so'mda kiriting — kalkulyator zakot to'lash majburiyatingiz borligini va aniq qancha summa to'lash kerakligini ko'rsatadi. Zakotni Ramazon oyida to'lash tavsiya etiladi, garchi bu majburiy shart emas.",
    ],
    faqRu: [
      { question: 'Сколько составляет закят?', answer: '2,5% от имущества, превышающего нисаб (стоимость 85 г золота ≈ 70 млн сум), которым владели полный лунный год.' },
      { question: 'Что такое нисаб и как его определить?', answer: 'Нисаб — минимальный порог: стоимость 85 г золота (~$5 500 или ~70 млн сум в 2025 году). Если ваши активы ниже, закят не обязателен.' },
      { question: 'С какого имущества платится закят?', answer: 'Деньги (включая электронные кошельки), вклады, золото/серебро, товарные запасы, акции. Не включается жильё, транспорт и личные вещи.' },
      { question: 'Куда в Узбекистане можно передать закят?', answer: 'Через мечети, фонд Вакф (vaqf.uz), благотворительные организации или напрямую нуждающимся из 8 категорий получателей.' },
      { question: 'Когда лучше всего выплачивать закят?', answer: 'Рекомендуется в Рамадан (награда умножается), но обязательного срока нет — главное выплатить после истечения хавля (лунного года владения).' },
    ],
    faqUz: [
      { question: "Zakot qancha?", answer: "To'liq qamariy yil davomida ega bo'lgan, nisobdan (85 g oltin qiymati ≈ 70 mln so'm) ortiq mol-mulkning 2,5%." },
      { question: "Nisob nima va uni qanday aniqlash mumkin?", answer: "Nisob — minimal chegara: 85 g oltin qiymati (~$5 500 yoki 2025-yilda ~70 mln so'm). Agar aktivlaringiz bundan past bo'lsa, zakot majburiy emas." },
      { question: "Qaysi mol-mulkdan zakot to'lanadi?", answer: "Pul (elektron hamyonlar kiritilgan holda), omonatlar, oltin/kumush, tovar zahiralari, aksiyalar. Turar-joy, transport va shaxsiy buyumlar kiritilmaydi." },
      { question: "O'zbekistonda zakotni qayerga uzatish mumkin?", answer: "Masjidlar, Vaqf fondi (vaqf.uz), xayriya tashkilotlari orqali yoki 8 ta oluvchi toifasidagi muhtojlarga bevosita." },
      { question: "Zakotni qachon to'lash yaxshiroq?", answer: "Ramazonda tavsiya etiladi (savob ko'paytiriladi), lekin majburiy muddat yo'q — asosiysi havl (qamariy yil egaligi) o'tganidan keyin to'lash." },
    ],
  },

  {
    slug: 'percentage',
    lastUpdated: '2025-05-25',
    sources: [
      { name: 'Центральный банк РУз — Ставки', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор процентов выполняет все основные операции: найти процент от числа, определить какой процент одно число составляет от другого, прибавить или вычесть процент, рассчитать процентное изменение. Это универсальный инструмент для повседневных расчётов, бизнеса, торговли и образования в Узбекистане.',
      'Основные формулы: X% от числа A = A × X / 100. Число A составляет (A / B × 100)% от числа B. Число A с прибавкой X% = A × (1 + X/100). Число A с вычетом X% = A × (1 − X/100). Процентное изменение = (Новое − Старое) / Старое × 100%. Все формулы работают с любыми суммами в узбекских сумах.',
      'Практические примеры для Узбекистана: НДС 12% от суммы 10 000 000 сум = 1 200 000 сум. НДФЛ 12% от зарплаты 8 000 000 = 960 000 сум. Торговая наценка 30% на товар стоимостью 500 000 сум: 500 000 × 1,30 = 650 000 сум. Скидка 25% от цены 2 000 000 сум: 2 000 000 × 0,75 = 1 500 000 сум.',
      'Проценты используются в банковской сфере Узбекистана: ставка рефинансирования ЦБ РУз — 13,5% годовых (2025), средняя ставка по вкладам — 22-25% в сумах, по кредитам — 22-28%. Инфляция в 2024 году составила около 10%. Калькулятор процентов поможет быстро рассчитать доход по вкладу, переплату по кредиту или реальную доходность инвестиций с учётом инфляции.',
      'Наш калькулятор процентов незаменим для предпринимателей на базарах и в торговых точках Узбекистана: расчёт наценки, себестоимости, маржи, НДС и скидок. Учителя математики используют его для проверки задач, бухгалтеры — для расчёта налогов и пеней. Введите числа и выберите нужную операцию — результат будет мгновенным.',
    ],
    paragraphsUz: [
      "Foiz kalkulyatori barcha asosiy amallarni bajaradi: sondan foizni topish, bir son ikkinchisidan necha foizligini aniqlash, foizni qo'shish yoki ayirish, foiz o'zgarishini hisoblash. Bu O'zbekistonda kundalik hisob-kitoblar, biznes, savdo va ta'lim uchun universal vosita.",
      "Asosiy formulalar: A sondan X% = A × X / 100. A soni B sondan (A / B × 100)% ni tashkil etadi. A soniga X% qo'shish = A × (1 + X/100). A sondan X% ayirish = A × (1 − X/100). Foiz o'zgarishi = (Yangi − Eski) / Eski × 100%. Barcha formulalar o'zbek so'midagi har qanday summalar bilan ishlaydi.",
      "O'zbekiston uchun amaliy misollar: 10 000 000 so'mdan 12% QQS = 1 200 000 so'm. 8 000 000 ish haqidan 12% JShDS = 960 000 so'm. 500 000 so'mlik tovarga 30% ustama: 500 000 × 1,30 = 650 000 so'm. 2 000 000 so'mlik narxdan 25% chegirma: 2 000 000 × 0,75 = 1 500 000 so'm.",
      "Foizlar O'zbekiston bank sohasida ishlatiladi: O'zbekiston MB qayta moliyalash stavkasi — yillik 13,5% (2025), omonatlarga o'rtacha stavka — so'mda 22-25%, kreditlarga — 22-28%. 2024-yilda inflyatsiya taxminan 10% ni tashkil etdi. Foiz kalkulyatori omonatdan daromadni, kredit bo'yicha ortiqcha to'lovni yoki inflyatsiyani hisobga olgan holda investitsiyalarning real daromadliligini tezda hisoblashga yordam beradi.",
      "Foiz kalkulyatorimiz O'zbekiston bozor va savdo nuqtalaridagi tadbirkorlar uchun ajralmas vosita: ustama, tannarx, marja, QQS va chegirmalarni hisoblash. Matematika o'qituvchilari uni masalalarni tekshirish uchun, buxgalterlar esa soliqlar va penyalarni hisoblash uchun ishlatadi. Sonlarni kiriting va kerakli amalni tanlang — natija bir zumda tayyor bo'ladi.",
    ],
    faqRu: [
      { question: 'Как найти процент от числа?', answer: 'Число × Процент / 100. Например, 25% от 800 000 сум = 800 000 × 25 / 100 = 200 000 сум.' },
      { question: 'Как узнать процентное соотношение?', answer: 'Часть / Целое × 100. Например, 150 000 из 600 000 = 150 000 / 600 000 × 100 = 25%.' },
      { question: 'Как рассчитать процентное изменение?', answer: '(Новое − Старое) / Старое × 100%. Было 500 000, стало 650 000: рост = 30%.' },
      { question: 'Как быстро посчитать НДС 12%?', answer: 'Умножьте сумму на 0,12. Для 5 000 000 сум: НДС = 600 000 сум, итого с НДС = 5 600 000 сум.' },
      { question: 'Как рассчитать реальную доходность с учётом инфляции?', answer: 'Реальная доходность ≈ Номинальная − Инфляция. Вклад 24% − инфляция 10% = ~14% реальной доходности.' },
    ],
    faqUz: [
      { question: 'Sondan foizni qanday topish mumkin?', answer: "Son × Foiz / 100. Masalan, 800 000 so'mdan 25% = 800 000 × 25 / 100 = 200 000 so'm." },
      { question: 'Foiz nisbatini qanday bilish mumkin?', answer: "Qism / Butun × 100. Masalan, 600 000 dan 150 000 = 150 000 / 600 000 × 100 = 25%." },
      { question: "Foiz o'zgarishni qanday hisoblash mumkin?", answer: "(Yangi − Eski) / Eski × 100%. 500 000 edi, 650 000 bo'ldi: o'sish = 30%." },
      { question: "12% QQSni qanday tez hisoblash mumkin?", answer: "Summani 0,12 ga ko'paytiring. 5 000 000 so'm uchun: QQS = 600 000 so'm, QQS bilan jami = 5 600 000 so'm." },
      { question: "Inflyatsiyani hisobga olgan real daromadlilikni qanday hisoblash mumkin?", answer: "Real daromadlilik ≈ Nominal − Inflyatsiya. Omonat 24% − inflyatsiya 10% = ~14% real daromadlilik." },
    ],
  },

  {
    slug: 'discount',
    lastUpdated: '2025-08-15',
    sources: [
      { name: 'Uzum Market', url: 'https://uzum.uz' },
    ],
    paragraphsRu: [
      'Калькулятор скидок мгновенно рассчитывает итоговую цену товара после применения одной или нескольких скидок, а также сумму экономии в узбекских сумах. Инструмент незаменим при покупках в Ташкенте и других городах Узбекистана: на базарах Чорсу и Алайском, в торговых центрах Samarkand Darvoza, Mega Planet, а также на маркетплейсах Uzum и Sello.',
      'Формула расчёта: Цена со скидкой = Исходная цена × (1 − Скидка/100). Для двойной скидки: Цена = Исходная × (1 − Скидка1/100) × (1 − Скидка2/100). Важный нюанс: скидка 20% + 10% не равна 30%. Реальная скидка = 1 − 0,8 × 0,9 = 28%. Продавцы на базарах Узбекистана часто округляют, поэтому калькулятор поможет проверить итоговую цену.',
      'Практические примеры: зимняя куртка на Mega Planet за 3 000 000 сум со скидкой 25% → 2 250 000 сум (экономия 750 000). Бытовая техника на Uzum за 8 000 000 сум с промокодом 10% + акция магазина 15% → 8 000 000 × 0,90 × 0,85 = 6 120 000 сум (экономия 1 880 000, реальная скидка 23,5%). Продукты на Korzinka со скидкой по карте лояльности 5%: чек 500 000 → 475 000 сум.',
      'В Узбекистане крупные распродажи проходят в сезонные периоды: «Чёрная пятница» (ноябрь) — скидки 20-50% в крупных магазинах и маркетплейсах, новогодние распродажи (декабрь-январь) — до 70%, Навруз (март) — 10-30%, летние распродажи (июль-август) — до 50%. Зная даты распродаж и имея калькулятор скидок, можно существенно сэкономить семейный бюджет.',
      'Калькулятор скидок также полезен для продавцов и предпринимателей: расчёт максимально допустимой скидки при заданной марже, определение себестоимости товара по розничной цене и проценту наценки, планирование акций. Введите исходную цену и процент скидки — калькулятор покажет итоговую стоимость и вашу экономию в сумах.',
    ],
    paragraphsUz: [
      "Chegirma kalkulyatori bir yoki bir nechta chegirmadan keyin tovarning yakuniy narxini va o'zbek so'midagi tejash summasini bir zumda hisoblaydi. Vosita Toshkent va O'zbekistonning boshqa shaharlaridagi xaridlarda ajralmas: Chorsu va Olay bozorlarida, Samarkand Darvoza, Mega Planet savdo markazlarida, shuningdek Uzum va Sello marketpleyslarida.",
      "Hisoblash formulasi: Chegirmali narx = Boshlang'ich narx × (1 − Chegirma/100). Ikki chegirma uchun: Narx = Boshlang'ich × (1 − Chegirma1/100) × (1 − Chegirma2/100). Muhim nuans: 20% + 10% chegirma 30% ga teng emas. Haqiqiy chegirma = 1 − 0,8 × 0,9 = 28%. O'zbekiston bozorlarida sotuvchilar ko'pincha yaxlitlaydi, shuning uchun kalkulyator yakuniy narxni tekshirishga yordam beradi.",
      "Amaliy misollar: Mega Planetda qishki kurtka 3 000 000 so'mdan 25% chegirma bilan → 2 250 000 so'm (tejash 750 000). Uzumda maishiy texnika 8 000 000 so'mdan promokod 10% + do'kon aksiyasi 15% → 8 000 000 × 0,90 × 0,85 = 6 120 000 so'm (tejash 1 880 000, haqiqiy chegirma 23,5%). Korzinkada sodiqlik kartasi bo'yicha 5% chegirma: chek 500 000 → 475 000 so'm.",
      "O'zbekistonda yirik chegirma savdolari mavsumiy davrlarida o'tkaziladi: «Qora juma» (noyabr) — yirik do'konlar va marketpleyslarda 20-50% chegirmalar, yangi yil savdosi (dekabr-yanvar) — 70% gacha, Navro'z (mart) — 10-30%, yozgi chegirmalar (iyul-avgust) — 50% gacha. Chegirma savdolari sanalarini bilib, chegirma kalkulyatoriga ega bo'lsangiz, oila byudjetini sezilarli darajada tejash mumkin.",
      "Chegirma kalkulyatori sotuvchi va tadbirkorlar uchun ham foydali: belgilangan marjada maksimal ruxsat etilgan chegirmani hisoblash, chakana narx va ustama foizi bo'yicha tannarxni aniqlash, aksiyalarni rejalashtirish. Boshlang'ich narx va chegirma foizini kiriting — kalkulyator yakuniy qiymat va so'mdagi tejamingizni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать скидку?', answer: 'Цена × (100 − Скидка%) / 100. Например, товар 2 000 000 сум со скидкой 15%: 2 000 000 × 0,85 = 1 700 000 сум.' },
      { question: 'Как работает двойная скидка?', answer: 'Вторая скидка применяется к уже сниженной цене. 20% + 10% = не 30%, а 28% реальная скидка. Проверяйте итог калькулятором.' },
      { question: 'Как узнать процент скидки?', answer: '(Исходная − Новая) / Исходная × 100. Было 500 000 сум, стало 350 000: (500 000 − 350 000) / 500 000 × 100 = 30%.' },
      { question: 'Когда в Узбекистане самые большие скидки?', answer: 'Чёрная пятница (ноябрь, до 50%), новогодние распродажи (декабрь-январь, до 70%), летние распродажи (июль-август, до 50%).' },
      { question: 'Можно ли торговаться на базаре с калькулятором?', answer: 'Да, на базарах Чорсу и Алайском торг уместен. Калькулятор поможет быстро проверить предложенную скидку и итоговую цену.' },
    ],
    faqUz: [
      { question: 'Chegirmani qanday hisoblash mumkin?', answer: "Narx × (100 − Chegirma%) / 100. Masalan, 2 000 000 so'mlik tovar 15% chegirma bilan: 2 000 000 × 0,85 = 1 700 000 so'm." },
      { question: 'Ikki chegirma qanday ishlaydi?', answer: "Ikkinchi chegirma allaqachon pasaytirilgan narxga qo'llaniladi. 20% + 10% = 30% emas, balki 28% haqiqiy chegirma. Natijani kalkulyator bilan tekshiring." },
      { question: 'Chegirma foizini qanday bilish mumkin?', answer: "(Boshlang'ich − Yangi) / Boshlang'ich × 100. 500 000 so'm edi, 350 000 bo'ldi: (500 000 − 350 000) / 500 000 × 100 = 30%." },
      { question: "O'zbekistonda eng katta chegirmalar qachon bo'ladi?", answer: "Qora juma (noyabr, 50% gacha), yangi yil savdosi (dekabr-yanvar, 70% gacha), yozgi chegirmalar (iyul-avgust, 50% gacha)." },
      { question: "Bozorda kalkulyator bilan savdolashish mumkinmi?", answer: "Ha, Chorsu va Olay bozorlarida savdolashish o'rinli. Kalkulyator taklif qilingan chegirma va yakuniy narxni tezda tekshirishga yordam beradi." },
    ],
  },

  {
    slug: 'passport-fees',
    lastUpdated: '2025-10-05',
    sources: [
      { name: 'Постановление о госпошлинах', url: 'https://lex.uz' },
      { name: 'Единый портал интерактивных услуг', url: 'https://my.gov.uz' },
    ],
    paragraphsRu: [
      'Госпошлина за оформление биометрического паспорта гражданина Узбекистана зависит от типа документа, сроков оформления и возраста заявителя. С августа 2025 года БРВ = 412 000 сум. Стандартное оформление загранпаспорта (15 рабочих дней): 2 БРВ = 824 000 сум. Ускоренное (5 рабочих дней): 4 БРВ = 1 648 000 сум. Срочное (1-3 дня): 8 БРВ = 3 296 000 сум.',
      'Типы документов и пошлины: ID-карта (внутренний документ удостоверения личности) — 0,5 БРВ (206 000 сум), срок действия 10 лет; загранпаспорт (биометрический) — от 2 БРВ (824 000 сум), срок действия 10 лет; загранпаспорт для несовершеннолетних (до 16 лет) — 1 БРВ (412 000 сум), срок действия 5 лет. Дипломатический и служебный паспорта оформляются бесплатно через МИД.',
      'При утере или порче документа пошлина удваивается: загранпаспорт стандартного оформления при утере — 4 БРВ (1 648 000 сум). Для повторной выдачи необходимо подать заявление в ОВД с объяснительной. Замена по истечении срока действия — стандартная пошлина без надбавок. Смена фамилии или исправление ошибок — 1 БРВ (412 000 сум).',
      'Оформление паспорта доступно онлайн через Единый портал интерактивных государственных услуг my.gov.uz или лично в территориальном отделе внутренних дел (ОВД) по месту прописки. Для граждан за рубежом — через консульские учреждения Узбекистана (пошлина может отличаться). Необходимые документы: заявление, текущий паспорт (или свидетельство о рождении), фотография 35×45 мм, квитанция об оплате пошлины.',
      'Калькулятор паспортных пошлин автоматически рассчитает точную стоимость с учётом типа документа, срочности, возраста заявителя и причины обращения (первичная выдача, замена, утеря). Оплата производится через банковские терминалы, мобильные приложения Click, Payme, Uzum или в отделениях банков. Квитанция действительна 3 месяца с момента оплаты.',
    ],
    paragraphsUz: [
      "O'zbekiston fuqarosining biometrik pasportini rasmiylashtirish uchun davlat boji hujjat turi, rasmiylashtirish muddati va arizachining yoshiga bog'liq. 2025-yil avgustidan BHK = 412 000 so'm. Xorijga chiqish pasportini standart rasmiylashtirish (15 ish kuni): 2 BHK = 824 000 so'm. Tezlashtirilgan (5 ish kuni): 4 BHK = 1 648 000 so'm. Shoshilinch (1-3 kun): 8 BHK = 3 296 000 so'm.",
      "Hujjat turlari va bojlar: ID-karta (shaxsni tasdiqlovchi ichki hujjat) — 0,5 BHK (206 000 so'm), amal qilish muddati 10 yil; xorijga chiqish pasporti (biometrik) — 2 BHK (824 000 so'm) dan, amal qilish muddati 10 yil; voyaga yetmaganlar (16 yoshgacha) uchun xorijga chiqish pasporti — 1 BHK (412 000 so'm), amal qilish muddati 5 yil. Diplomatik va xizmat pasportlari TIV orqali bepul rasmiylashtiriladi.",
      "Hujjat yo'qotilganda yoki buzilganda boj ikki barobarga oshadi: standart rasmiylashtirishda xorijga chiqish pasporti yo'qotilganda — 4 BHK (1 648 000 so'm). Qayta berish uchun tushuntirish xati bilan IIBga ariza topshirish kerak. Amal qilish muddati tugaganda almashtirish — ustama holda standart boj. Familiya o'zgartirish yoki xatolarni tuzatish — 1 BHK (412 000 so'm).",
      "Pasportni rasmiylashtirish Yagona interaktiv davlat xizmatlari portali my.gov.uz orqali onlayn yoki propiska joyi bo'yicha hududiy IIBda shaxsan amalga oshiriladi. Xorijdagi fuqarolar uchun — O'zbekiston konsullik muassasalari orqali (boj farq qilishi mumkin). Kerakli hujjatlar: ariza, amaldagi pasport (yoki tug'ilganlik haqida guvohnoma), 35×45 mm fotosurat, boj to'langanligi haqida kvitansiya.",
      "Pasport bojlari kalkulyatori hujjat turi, shoshilinchlik, arizachining yoshi va murojaat sababi (birinchi marta berish, almashtirish, yo'qotish) ni hisobga olgan holda aniq narxni avtomatik hisoblaydi. To'lov bank terminallari, Click, Payme, Uzum mobil ilovalari yoki bank bo'limlarida amalga oshiriladi. Kvitansiya to'langan kundan boshlab 3 oy amal qiladi.",
    ],
    faqRu: [
      { question: 'Сколько стоит загранпаспорт в 2025 году?', answer: 'Стандартное оформление: 2 БРВ (824 000 сум, 15 дней). Ускоренное: 4 БРВ (1 648 000, 5 дней). Срочное: 8 БРВ (3 296 000, 1-3 дня).' },
      { question: 'Сколько стоит ID-карта?', answer: '0,5 БРВ (206 000 сум) при стандартном оформлении. Срок действия — 10 лет.' },
      { question: 'Сколько стоит паспорт при утере?', answer: 'Двойная пошлина. Загранпаспорт: 4 БРВ (1 648 000 сум) при стандартном оформлении вместо обычных 2 БРВ.' },
      { question: 'Где оформить паспорт?', answer: 'Онлайн через my.gov.uz или лично в ОВД по месту прописки. Оплата через Click, Payme, Uzum или банк.' },
      { question: 'Какие документы нужны для загранпаспорта?', answer: 'Заявление, текущий паспорт или свидетельство о рождении, фото 35×45 мм, квитанция об оплате пошлины.' },
    ],
    faqUz: [
      { question: "2025-yilda xorijga chiqish pasporti qancha turadi?", answer: "Standart rasmiylashtirish: 2 BHK (824 000 so'm, 15 kun). Tezlashtirilgan: 4 BHK (1 648 000, 5 kun). Shoshilinch: 8 BHK (3 296 000, 1-3 kun)." },
      { question: "ID-karta qancha turadi?", answer: "Standart rasmiylashtirishda 0,5 BHK (206 000 so'm). Amal qilish muddati — 10 yil." },
      { question: "Pasport yo'qotilganda qancha turadi?", answer: "Ikki baravar boj. Xorijga chiqish pasporti: odatdagi 2 BHK o'rniga 4 BHK (1 648 000 so'm)." },
      { question: "Pasportni qayerda rasmiylashtirish mumkin?", answer: "my.gov.uz orqali onlayn yoki propiska joyi bo'yicha IIBda shaxsan. To'lov Click, Payme, Uzum yoki bank orqali." },
      { question: "Xorijga chiqish pasporti uchun qanday hujjatlar kerak?", answer: "Ariza, amaldagi pasport yoki tug'ilganlik guvohnomasi, 35×45 mm foto, boj to'lovi kvitansiyasi." },
    ],
  },

  {
    slug: 'state-duties',
    lastUpdated: '2025-09-20',
    sources: [
      { name: 'Налоговый кодекс — Госпошлины', url: 'https://lex.uz/docs/6230091' },
      { name: 'Министерство юстиции РУз', url: 'https://minjust.uz' },
    ],
    paragraphsRu: [
      'Государственные пошлины в Узбекистане взимаются за юридически значимые действия органов власти: регистрация собственности, выдача документов, судебные иски, нотариальные услуги. Размеры пошлин привязаны к базовой расчётной величине (БРВ), которая с августа 2025 года составляет 412 000 сум. Калькулятор госпошлин рассчитает точную сумму для вашего конкретного случая.',
      'Основные размеры пошлин (2025): регистрация права собственности на недвижимость — 3 БРВ (1 236 000 сум) для физлиц, 5 БРВ (2 060 000) для юрлиц; регистрация юридического лица — 1 БРВ (412 000); регистрация ИП — 0,5 БРВ (206 000); подача искового заявления в суд — 2% от суммы иска для физлиц, 5% для юрлиц (минимум 1 БРВ); выдача свидетельства о браке — 1 БРВ (412 000); расторжение брака через суд — 3 БРВ (1 236 000).',
      'Нотариальные пошлины: удостоверение договора купли-продажи недвижимости — 1% от суммы сделки (но не менее 1 БРВ); доверенность — 0,3-1 БРВ; завещание — 0,5 БРВ (206 000 сум); удостоверение копий — 0,1 БРВ за страницу. Нотариусы работают при управлениях юстиции, частные нотариусы взимают дополнительные тарифы.',
      'Льготы по госпошлинам: инвалиды I и II группы — полное освобождение от пошлин при обращении в суд; пенсионеры — скидка 50% по имущественным искам; истцы по трудовым спорам — полное освобождение; иски о взыскании алиментов — освобождены; участники войны и приравненные лица — освобождены. Льготы не распространяются на нотариальные услуги.',
      'Оплата госпошлин производится через банковские терминалы, приложения Click, Payme, Uzum или в кассах банков до подачи документов. Квитанция прилагается к заявлению. Калькулятор госпошлин на нашем сайте поможет определить точный размер пошлины с учётом типа действия, категории заявителя и возможных льгот.',
    ],
    paragraphsUz: [
      "O'zbekistonda davlat bojlari hokimiyat organlarining yuridik ahamiyatga ega harakatlari uchun olinadi: mulkni ro'yxatdan o'tkazish, hujjatlar berish, sud da'volari, notarial xizmatlar. Boj miqdorlari bazaviy hisoblash kattaligiga (BHK) bog'langan bo'lib, 2025-yil avgustidan BHK 412 000 so'mni tashkil etadi. Davlat bojlari kalkulyatori sizning aniq holatingiz uchun to'g'ri summani hisoblaydi.",
      "Asosiy boj miqdorlari (2025): ko'chmas mulkka egalik huquqini ro'yxatdan o'tkazish — jismoniy shaxslar uchun 3 BHK (1 236 000 so'm), yuridik shaxslar uchun 5 BHK (2 060 000); yuridik shaxsni ro'yxatdan o'tkazish — 1 BHK (412 000); YaTTni ro'yxatdan o'tkazish — 0,5 BHK (206 000); sudga da'vo arizasi — jismoniy shaxslar uchun da'vo summasining 2%, yuridik uchun 5% (minimum 1 BHK); nikoh guvohnomasi — 1 BHK (412 000); nikohni sud orqali bekor qilish — 3 BHK (1 236 000).",
      "Notarial bojlar: ko'chmas mulk oldi-sotdi shartnomasini tasdiqlash — bitim summasining 1% (lekin 1 BHK dan kam emas); ishonchnoma — 0,3-1 BHK; vasiyatnoma — 0,5 BHK (206 000 so'm); nusxalarni tasdiqlash — sahifasiga 0,1 BHK. Notariuslar adliya boshqarmalari huzurida ishlaydi, xususiy notariuslar qo'shimcha tariflar oladi.",
      "Davlat bojlari bo'yicha imtiyozlar: I va II guruh nogironlari — sudga murojaat qilishda to'liq ozod; pensionerlar — mulkiy da'volarda 50% chegirma; mehnat nizolari bo'yicha da'vogarlar — to'liq ozod; nafaqa undirilishi bo'yicha da'volar — ozod; urush ishtirokchilari va tenglashtiriladiganlar — ozod. Imtiyozlar notarial xizmatlarga taalluqli emas.",
      "Davlat bojlarini to'lash bank terminallari, Click, Payme, Uzum ilovalari yoki bank kassalarida hujjatlarni topshirishdan oldin amalga oshiriladi. Kvitansiya arizaga ilova qilinadi. Saytimizda davlat bojlari kalkulyatori harakat turi, arizachi toifasi va mumkin bo'lgan imtiyozlarni hisobga olgan holda boj miqdorini aniq aniqlashga yordam beradi.",
    ],
    faqRu: [
      { question: 'Сколько стоит регистрация собственности?', answer: '3 БРВ (1 236 000 сум) для физлиц, 5 БРВ (2 060 000) для юрлиц. Нотариальное удостоверение — дополнительно 1% от суммы сделки.' },
      { question: 'Какая госпошлина за подачу иска?', answer: '2% от суммы иска для физлиц, 5% для юрлиц. Минимум — 1 БРВ (412 000 сум). Трудовые споры и алименты — бесплатно.' },
      { question: 'Кто освобождён от госпошлин?', answer: 'Инвалиды I-II группы (суд), истцы по трудовым спорам и алиментам, участники войны. Пенсионеры — скидка 50%.' },
      { question: 'Сколько стоит регистрация брака?', answer: '1 БРВ (412 000 сум) за свидетельство о браке. Расторжение через суд — 3 БРВ (1 236 000 сум).' },
      { question: 'Как оплатить госпошлину?', answer: 'Через банковские терминалы, Click, Payme, Uzum или в кассе банка. Квитанция действительна 3 месяца.' },
    ],
    faqUz: [
      { question: "Mulkni ro'yxatdan o'tkazish qancha turadi?", answer: "Jismoniy shaxslar uchun 3 BHK (1 236 000 so'm), yuridik shaxslar uchun 5 BHK (2 060 000). Notarial tasdiqlash — qo'shimcha bitim summasining 1%." },
      { question: "Da'vo ariza berish uchun davlat boji qancha?", answer: "Jismoniy shaxslar uchun da'vo summasining 2%, yuridik uchun 5%. Minimum — 1 BHK (412 000 so'm). Mehnat nizolari va nafaqa — bepul." },
      { question: "Kim davlat bojlaridan ozod?", answer: "I-II guruh nogironlari (sud), mehnat nizolari va nafaqa bo'yicha da'vogarlar, urush ishtirokchilari. Pensionerlar — 50% chegirma." },
      { question: "Nikohni ro'yxatdan o'tkazish qancha turadi?", answer: "Nikoh guvohnomasi uchun 1 BHK (412 000 so'm). Sud orqali bekor qilish — 3 BHK (1 236 000 so'm)." },
      { question: "Davlat bojini qanday to'lash mumkin?", answer: "Bank terminallari, Click, Payme, Uzum yoki bank kassasi orqali. Kvitansiya 3 oy amal qiladi." },
    ],
  },

  {
    slug: 'remittances',
    lastUpdated: '2025-10-15',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Всемирный банк — Миграция', url: 'https://worldbank.org' },
    ],
    paragraphsRu: [
      'Калькулятор денежных переводов рассчитывает стоимость отправки денег из/в Узбекистан с учётом комиссий и курсов обмена. Узбекистан входит в топ-5 стран-получателей денежных переводов в Центральной Азии: ежегодный объём входящих переводов превышает $10 млрд, что составляет значительную часть ВВП. Основные коридоры: Россия → Узбекистан, Казахстан → Узбекистан, Турция → Узбекистан, ОАЭ → Узбекистан.',
      'Системы переводов и комиссии (2025): Western Union — 1-3% (от $5 за мелкие суммы); MoneyGram — 1,5-3%; Золотая Корона (Koronapay) — 1-1,5% (самая популярная для переводов из России); Contact — 1-2%; банковский SWIFT — $15-30 фиксированно; мобильные переводы через Uzum и Click — 0,5-1% внутри Узбекистана. Для крупных сумм (свыше $1 000) банковский SWIFT обычно выгоднее по совокупности расходов.',
      'Пример: трудовой мигрант отправляет $500 из России в Узбекистан. Koronapay: комиссия ~$7 (1,4%), получение ~$493 в сумах по курсу ЦБ. Western Union: комиссия ~$12 (2,4%), получение ~$488. Банковский SWIFT: комиссия ~$25, получение ~$475. Через Uzum Bank (карта→карта): комиссия ~$3 (0,6%) — самый выгодный вариант при наличии карт обоих банков.',
      'При получении перевода в Узбекистане важно учитывать курс конвертации: коммерческие банки предлагают курс на 0,5-2% ниже официального курса ЦБ РУз. Получение через пункты выдачи банков (Ipoteka bank, Kapitalbank, NBU, Hamkorbank) — бесплатно при предъявлении паспорта и кода перевода. Максимальная сумма без декларации — эквивалент $10 000.',
      'Калькулятор переводов на нашем сайте сравнивает все доступные способы отправки по стоимости, скорости и удобству. Введите сумму и направление — калькулятор покажет комиссию каждой системы, итоговую сумму к получению и рекомендуемый способ. Это поможет сэкономить на каждом переводе от $5 до $20 и более.',
    ],
    paragraphsUz: [
      "Pul o'tkazmalari kalkulyatori O'zbekistonga/dan pul jo'natish narxini komissiyalar va ayirboshlash kurslarini hisobga olgan holda hisoblaydi. O'zbekiston Markaziy Osiyoda pul o'tkazmalari oluvchi top-5 mamlakatga kiradi: yillik kiruvchi o'tkazmalar hajmi $10 mlrd dan oshadi, bu YaIMning sezilarli qismini tashkil etadi. Asosiy yo'nalishlar: Rossiya → O'zbekiston, Qozog'iston → O'zbekiston, Turkiya → O'zbekiston, BAA → O'zbekiston.",
      "O'tkazma tizimlari va komissiyalar (2025): Western Union — 1-3% (kichik summalar uchun $5 dan); MoneyGram — 1,5-3%; Zolotaya Korona (Koronapay) — 1-1,5% (Rossiyadan o'tkazmalar uchun eng mashhur); Contact — 1-2%; bank SWIFT — qat'iy $15-30; Uzum va Click orqali mobil o'tkazmalar — O'zbekiston ichida 0,5-1%. Yirik summalar ($1 000 dan ortiq) uchun bank SWIFT odatda umumiy xarajatlar bo'yicha foydaliroq.",
      "Misol: mehnat migranti Rossiyadan O'zbekistonga $500 jo'natadi. Koronapay: komissiya ~$7 (1,4%), MB kursida ~$493 so'mda olinadi. Western Union: komissiya ~$12 (2,4%), ~$488 olinadi. Bank SWIFT: komissiya ~$25, ~$475 olinadi. Uzum Bank (karta→karta): komissiya ~$3 (0,6%) — ikkala bank kartasi mavjud bo'lganda eng foydali variant.",
      "O'zbekistonda o'tkazma olishda konvertatsiya kursini hisobga olish muhim: tijorat banklari O'zbekiston MB rasmiy kursidan 0,5-2% past kurs taklif etadi. Banklarning berilish punktlari (Ipoteka bank, Kapitalbank, NBU, Hamkorbank) orqali olish — pasport va o'tkazma kodi taqdim etilganda bepul. Deklaratsiyasiz maksimal summa — $10 000 ekvivalenti.",
      "Saytimizda o'tkazmalar kalkulyatori barcha mavjud jo'natish usullarini narx, tezlik va qulaylik bo'yicha solishtiradi. Summa va yo'nalishni kiriting — kalkulyator har bir tizimning komissiyasini, olish uchun yakuniy summani va tavsiya etilgan usulni ko'rsatadi. Bu har bir o'tkazma uchun $5 dan $20 va undan ko'proq tejash imkonini beradi.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ перевода?', answer: 'Карта→карта через Uzum/банк (0,5-1%). Из России — Koronapay (1-1,5%). Для крупных сумм — SWIFT ($15-30 фиксированно).' },
      { question: 'Сколько берёт Western Union?', answer: '1-3% от суммы. За перевод $500 — комиссия около $10-15. Koronapay дешевле: $5-7 за ту же сумму.' },
      { question: 'Как получить перевод в Узбекистане?', answer: 'В банковском отделении с паспортом и кодом перевода (Ipoteka bank, Kapitalbank, NBU). Или через мобильное приложение банка.' },
      { question: 'Какой лимит на переводы без декларации?', answer: 'Эквивалент $10 000. Суммы свыше подлежат декларированию в соответствии с валютным законодательством Узбекистана.' },
      { question: 'Какой объём переводов в Узбекистан?', answer: 'Более $10 млрд ежегодно. Основной коридор — из России (более 60% всех входящих переводов).' },
    ],
    faqUz: [
      { question: "Pul o'tkazishning eng arzon usuli qanday?", answer: "Karta→karta Uzum/bank orqali (0,5-1%). Rossiyadan — Koronapay (1-1,5%). Yirik summalar uchun — SWIFT (qat'iy $15-30)." },
      { question: "Western Union qancha oladi?", answer: "Summaning 1-3%. $500 o'tkazma uchun komissiya taxminan $10-15. Koronapay arzonroq: xuddi shu summa uchun $5-7." },
      { question: "O'zbekistonda o'tkazmani qanday olish mumkin?", answer: "Bank bo'limida pasport va o'tkazma kodi bilan (Ipoteka bank, Kapitalbank, NBU). Yoki bank mobil ilovasi orqali." },
      { question: "Deklaratsiyasiz o'tkazma limiti qancha?", answer: "$10 000 ekvivalenti. Bundan ortiq summalar O'zbekiston valyuta qonunchiligiga muvofiq deklaratsiya qilinishi kerak." },
      { question: "O'zbekistonga o'tkazmalar hajmi qancha?", answer: "Yiliga $10 mlrd dan ortiq. Asosiy yo'nalish — Rossiyadan (barcha kiruvchi o'tkazmalarning 60% dan ortig'i)." },
    ],
  },

  {
    slug: 'vat-threshold',
    lastUpdated: '2025-09-10',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Порог обязательной регистрации плательщиком НДС в Узбекистане составляет 60 000 БРВ, что по состоянию на август 2025 года равно 24 720 000 000 сум. Если совокупный оборот предприятия за 12 последовательных месяцев превышает эту сумму, регистрация в качестве плательщика НДС обязательна. Калькулятор порога НДС отслеживает текущий оборот вашего бизнеса и показывает, какой процент от порога вы достигли. Важно учитывать именно скользящий 12-месячный период, а не календарный год.',
      'При приближении к порогу (80% и более) рекомендуется заранее подготовиться к переходу на режим НДС. Необходимо изучить механизм входящего и исходящего НДС, настроить бухгалтерский учёт для раздельного учёта сумм налога, зарегистрироваться на платформе faktura.soliq.uz для выставления электронных счетов-фактур. Также следует провести инвентаризацию товарных запасов, так как НДС по остаткам можно будет принять к вычету. Подготовка занимает 1-2 месяца, поэтому начинать следует заблаговременно.',
      'Добровольная регистрация возможна при любом обороте — ограничений нет. Это выгодно, если ваши основные клиенты являются плательщиками НДС: они смогут принять ваш НДС к зачёту и таким образом получат экономию. Для бизнеса B2B добровольная регистрация повышает конкурентоспособность. Однако для бизнеса B2C (розничная торговля, услуги населению) регистрация как плательщика НДС может привести к повышению цен на 12%, что снизит спрос.',
      'Расчёт оборота для определения порога включает все виды доходов от реализации товаров, работ и услуг, за исключением необлагаемых операций. Не учитываются: субсидии, безвозмездные поступления, курсовые разницы. Важно: при ведении нескольких видов деятельности обороты суммируются. Для микрофирм с оборотом до 1 млрд сум/год упрощённая система с налогом 4% от оборота зачастую выгоднее, чем общая система с НДС.',
      'Наш калькулятор порога НДС рассчитывает текущий процент от порога, прогнозирует дату достижения порога на основе динамики оборота и помогает оценить финансовый эффект перехода на режим НДС. Введите ежемесячные обороты за последние 12 месяцев — калькулятор покажет, нужно ли вам регистрироваться и когда это может потребоваться.',
    ],
    paragraphsUz: [
      "O'zbekistonda QQS to'lovchisi sifatida majburiy ro'yxatdan o'tish chegarasi 60 000 BHK ni tashkil etadi, bu 2025-yil avgustiga ko'ra 24 720 000 000 so'mga teng. Agar korxonaning ketma-ket 12 oy davomidagi umumiy aylanmasi bu summadan oshsa, QQS to'lovchisi sifatida ro'yxatdan o'tish majburiydir. QQS chegarasi kalkulyatori biznesingizning joriy aylanmasini kuzatib boradi va chegaraning necha foiziga yetganingizni ko'rsatadi. Kalendar yil emas, aynan sirpanuvchi 12 oylik davrni hisobga olish muhimdir.",
      "Chegaraga yaqinlashganda (80% va undan ortiq) QQS rejimiga o'tishga oldindan tayyorlanish tavsiya etiladi. Kirish va chiqish QQS mexanizmini o'rganish, soliq summasini alohida hisobga olish uchun buxgalteriya hisobini sozlash, elektron hisob-fakturalarni taqdim etish uchun faktura.soliq.uz platformasida ro'yxatdan o'tish zarur. Shuningdek, tovar zaxiralarining inventarizatsiyasini o'tkazish kerak, chunki qoldiqlar bo'yicha QQSni chegirishga olish mumkin bo'ladi. Tayyorgarlik 1-2 oy vaqt oladi.",
      "Ixtiyoriy ro'yxatdan o'tish har qanday aylanmada mumkin — cheklovlar yo'q. Bu asosiy mijozlaringiz QQS to'lovchilari bo'lsa foydali: ular sizning QQSni hisobga olishi mumkin va shu tariqa tejashga erishadi. B2B biznesi uchun ixtiyoriy ro'yxatdan o'tish raqobatbardoshlikni oshiradi. Lekin B2C biznesi (chakana savdo, aholiga xizmatlar) uchun QQS to'lovchisi sifatida ro'yxatdan o'tish narxlarning 12% ga oshishiga olib kelishi mumkin.",
      "Chegarani aniqlash uchun aylanma hisobi tovarlar, ishlar va xizmatlarni sotishdan olingan barcha turdagi daromadlarni o'z ichiga oladi, soliqqa tortilmaydigan operatsiyalar bundan mustasno. Hisobga olinmaydi: subsidiyalar, beg'araz tushumlar, valyuta kursi farqlari. Muhim: bir nechta faoliyat turlari yuritilganda aylanmalar jamlanadi. Yillik aylanmasi 1 mlrd so'mgacha bo'lgan mikrofirmalar uchun aylanmadan 4% soddalashtilgan tizim ko'pincha QQS bilan umumiy tizimdan foydaliroq.",
      "Bizning QQS chegarasi kalkulyatorimiz chegaraning joriy foizini hisoblaydi, aylanma dinamikasiga asoslanib chegaraga yetish sanasini prognozlaydi va QQS rejimiga o'tishning moliyaviy ta'sirini baholashga yordam beradi. Oxirgi 12 oydagi oylik aylanmalarni kiriting — kalkulyator ro'yxatdan o'tish zarurmi va qachon kerak bo'lishi mumkinligini ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Какой порог для обязательной регистрации по НДС?', answer: '60 000 БРВ = 24 720 000 000 сум (с августа 2025) за 12 последовательных месяцев.' },
      { question: 'Можно ли зарегистрироваться добровольно?', answer: 'Да, при любом обороте. Выгодно при работе с плательщиками НДС — они смогут принять ваш НДС к зачёту.' },
      { question: 'Что будет при превышении порога без регистрации?', answer: 'Штрафные санкции и доначисление НДС за весь период превышения. Штраф — от 10 до 20 БРВ (4 120 000 — 8 240 000 сум).' },
      { question: 'Как считается 12-месячный оборот?', answer: 'Скользящим методом: берутся последние 12 месяцев от текущей даты, а не календарный год. Суммируются все виды реализации.' },
      { question: 'Когда выгодна добровольная регистрация?', answer: 'Когда клиенты — плательщики НДС (B2B). Для розничной торговли (B2C) обычно невыгодна, так как придётся повысить цены на 12%.' },
    ],
    faqUz: [
      { question: "QQS bo'yicha majburiy ro'yxatdan o'tish chegarasi qancha?", answer: "Ketma-ket 12 oy uchun 60 000 BHK = 24 720 000 000 so'm (2025-yil avgustidan)." },
      { question: "Ixtiyoriy ro'yxatdan o'tish mumkinmi?", answer: "Ha, har qanday aylanmada. QQS to'lovchilari bilan ishlashda foydali — ular sizning QQSni hisobga olishi mumkin." },
      { question: "Ro'yxatdan o'tmasdan chegaradan oshsa nima bo'ladi?", answer: "Jarima sanktsiyalari va oshish davri uchun QQS qayta hisoblanishi. Jarima — 10 dan 20 BHKgacha (4 120 000 — 8 240 000 so'm)." },
      { question: "12 oylik aylanma qanday hisoblanadi?", answer: "Sirpanuvchi usulda: joriy sanadan oxirgi 12 oy olinadi, kalendar yil emas. Barcha sotish turlari jamlanadi." },
      { question: "Ixtiyoriy ro'yxatdan o'tish qachon foydali?", answer: "Mijozlar QQS to'lovchilari bo'lganda (B2B). Chakana savdo (B2C) uchun odatda foydasiz, chunki narxlarni 12% ga oshirishga to'g'ri keladi." },
    ],
  },

  {
    slug: 'property-tax',
    lastUpdated: '2025-10-05',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Кадастровая палата', url: 'https://kadastr.uz' },
    ],
    paragraphsRu: [
      'Налог на имущество физических лиц в Узбекистане рассчитывается от кадастровой стоимости объекта недвижимости. Ставки дифференцированы: жилые помещения площадью до нормативной облагаются по ставке 0,34% от кадастровой стоимости, при площади от 100 до 200 м² ставка составляет 0,45%, а свыше 200 м² — 0,6%. Кадастровая стоимость определяется Государственной кадастровой палатой и пересматривается периодически.',
      'Налог уплачивается ежегодно до 1 декабря текущего года. Уведомление о сумме налога направляется через личный кабинет на my.soliq.uz или в территориальную налоговую инспекцию. При неуплате в срок начисляется пеня 0,05% за каждый день просрочки. Налогоплательщик вправе оспорить кадастровую стоимость в комиссии при Кадастровой палате, если она существенно превышает рыночную.',
      'Законодательство предусматривает ряд льгот по налогу на имущество. Освобождаются: пенсионеры по возрасту (по одному объекту недвижимости), инвалиды I и II группы, участники войны, многодетные семьи (4 и более детей), одинокие пенсионеры. Для получения льготы необходимо подать заявление в налоговую инспекцию с приложением подтверждающих документов.',
      'Для юридических лиц налог на имущество составляет 1,5% от среднегодовой остаточной стоимости основных средств. Освобождены от налога: предприятия свободных экономических зон (СЭЗ) в рамках льготного периода, социальные объекты (школы, больницы, детские сады), религиозные организации. Авансовые платежи уплачиваются ежеквартально — по 25% годовой суммы.',
      'Пример расчёта: квартира в Ташкенте площадью 80 м², кадастровая стоимость 500 000 000 сум. Ставка 0,34%. Налог = 500 000 000 × 0,0034 = 1 700 000 сум в год. Для загородного дома 250 м² с кадастровой стоимостью 1 200 000 000 сум ставка составит 0,6%: налог = 1 200 000 000 × 0,006 = 7 200 000 сум/год. Наш калькулятор определит точную сумму налога с учётом площади и льгот.',
    ],
    paragraphsUz: [
      "O'zbekistonda jismoniy shaxslarning mol-mulk solig'i ko'chmas mulk ob'ektining kadastr qiymatidan hisoblanadi. Stavkalar differentsiyalangan: normativ maydongacha turar-joy binolari kadastr qiymatining 0,34% stavkada, 100 dan 200 m² gacha maydon uchun 0,45%, 200 m² dan ortiq — 0,6%. Kadastr qiymati Davlat kadastr palatasi tomonidan aniqlanadi va davriy ravishda qayta ko'rib chiqiladi.",
      "Soliq har yili joriy yilning 1-dekabrigacha to'lanadi. Soliq summasi haqidagi bildirishnoma my.soliq.uz dagi shaxsiy kabinet yoki hududiy soliq inspektsiyasi orqali yuboriladi. Muddatida to'lanmaganda har kechiktirilgan kun uchun 0,05% penya hisoblanadi. Soliq to'lovchi kadastr qiymati bozor qiymatidan sezilarli darajada oshib ketgan bo'lsa, Kadastr palatasi huzuridagi komissiyada unga e'tiroz bildirishi mumkin.",
      "Qonunchilik mol-mulk solig'i bo'yicha bir qator imtiyozlarni nazarda tutadi. Ozod qilinganlar: yoshi bo'yicha pensionerlar (bitta ko'chmas mulk ob'ekti bo'yicha), I va II guruh nogironlari, urush ishtirokchilari, ko'p bolali oilalar (4 va undan ortiq bola), yolg'iz pensionerlar. Imtiyozni olish uchun tasdiqlash hujjatlari bilan soliq inspektsiyasiga ariza topshirish kerak.",
      "Yuridik shaxslar uchun mol-mulk solig'i asosiy vositalarning yillik o'rtacha qoldiq qiymatidan 1,5% ni tashkil etadi. Soliqdan ozod: erkin iqtisodiy zonalar (EIZ) korxonalari imtiyozli davr doirasida, ijtimoiy ob'ektlar (maktablar, kasalxonalar, bolalar bog'chalari), diniy tashkilotlar. Avans to'lovlari har chorakda — yillik summaning 25% dan to'lanadi.",
      "Hisoblash misoli: Toshkentda 80 m² kvartira, kadastr qiymati 500 000 000 so'm. Stavka 0,34%. Soliq = 500 000 000 × 0,0034 = 1 700 000 so'm/yil. Shahar atrofidagi 250 m² uy, kadastr qiymati 1 200 000 000 so'm uchun stavka 0,6%: soliq = 1 200 000 000 × 0,006 = 7 200 000 so'm/yil. Kalkulyatorimiz maydon va imtiyozlarni hisobga olgan holda aniq soliq summasini aniqlaydi.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на имущество?', answer: 'Для физлиц: 0,34% (до 100 м²), 0,45% (100-200 м²), 0,6% (свыше 200 м²) от кадастровой стоимости. Для юрлиц: 1,5% от остаточной стоимости.' },
      { question: 'Кто освобождён от налога на имущество?', answer: 'Пенсионеры по возрасту (по одному объекту), инвалиды I-II группы, участники войны, многодетные семьи (4+ детей), одинокие пенсионеры.' },
      { question: 'Когда нужно платить?', answer: 'До 1 декабря текущего года. При просрочке — пеня 0,05% в день от суммы задолженности.' },
      { question: 'Как узнать кадастровую стоимость?', answer: 'Через портал kadastr.uz или в территориальном отделении Кадастровой палаты. Стоимость можно оспорить, если она завышена.' },
      { question: 'Облагаются ли квартиры в новостройках?', answer: 'Да, после получения кадастрового номера. Кадастровая стоимость новостроек обычно близка к цене покупки.' },
    ],
    faqUz: [
      { question: "Mol-mulk solig'i stavkasi qancha?", answer: "Jismoniy shaxslar uchun: 0,34% (100 m² gacha), 0,45% (100-200 m²), 0,6% (200 m² dan ortiq) kadastr qiymatidan. Yuridik shaxslar uchun: qoldiq qiymatdan 1,5%." },
      { question: "Kim mol-mulk solig'idan ozod?", answer: "Yoshi bo'yicha pensionerlar (bitta ob'ekt), I-II guruh nogironlari, urush ishtirokchilari, ko'p bolali oilalar (4+ bola), yolg'iz pensionerlar." },
      { question: "Qachon to'lash kerak?", answer: "Joriy yilning 1-dekabrigacha. Kechiktirilganda — qarzdorlik summasidan kuniga 0,05% penya." },
      { question: "Kadastr qiymatini qanday bilish mumkin?", answer: "kadastr.uz portali yoki Kadastr palatasining hududiy bo'linmasi orqali. Oshirib ko'rsatilgan bo'lsa qiymatga e'tiroz bildirilishi mumkin." },
      { question: "Yangi qurilgan uy-joylar soliqqa tortiladimi?", answer: "Ha, kadastr raqami olingandan keyin. Yangi qurilishlar kadastr qiymati odatda sotib olish narxiga yaqin bo'ladi." },
    ],
  },

  {
    slug: 'land-tax',
    lastUpdated: '2025-09-18',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Кадастровая палата', url: 'https://kadastr.uz' },
    ],
    paragraphsRu: [
      'Земельный налог в Узбекистане взимается с собственников и постоянных пользователей земельных участков. Ставка зависит от категории земли, местоположения и площади участка. Для приусадебных и дачных участков физических лиц применяются ставки от 0,1% до 0,3% кадастровой стоимости в зависимости от зоны расположения. Для сельскохозяйственных угодий ставки значительно ниже — от 0,01% до 0,05%, что стимулирует развитие фермерского хозяйства.',
      'Земельный налог уплачивается ежегодно до 1 декабря. Кадастровая стоимость земельного участка определяется Государственной кадастровой палатой и зависит от региона: в Ташкенте цена 1 сотки (100 м²) в среднем составляет 30-80 млн сум, в областных центрах — 5-20 млн, в сельской местности — 1-5 млн сум. Уведомление о сумме налога можно получить через портал my.soliq.uz или в местной налоговой инспекции.',
      'Законодательство предусматривает льготы по земельному налогу. Освобождаются: фермерские хозяйства в первые 2 года деятельности, участки, используемые для освоения целинных и залежных земель (на 5 лет), земли религиозных организаций, кладбища, парки и скверы. Инвалиды I и II группы, участники войны и одинокие пенсионеры освобождены по одному земельному участку площадью до 6 соток.',
      'Для юридических лиц земельный налог рассчитывается по фиксированным ставкам за 1 гектар в зависимости от категории земли и зоны. Промышленные предприятия, торговые объекты, автозаправки и рестораны уплачивают повышенные ставки. Земли свободных экономических зон (СЭЗ) могут быть освобождены от налога в рамках инвестиционных соглашений сроком до 10 лет.',
      'Пример расчёта: приусадебный участок 6 соток в Юнусабадском районе Ташкента, кадастровая стоимость 300 млн сум, зона 1, ставка 0,3%. Налог = 300 000 000 × 0,003 = 900 000 сум/год. Для сравнения, аналогичный участок в Янгиюле (Ташкентская область), кадастровая стоимость 60 млн сум, ставка 0,2%: налог = 60 000 000 × 0,002 = 120 000 сум/год — в 7,5 раз меньше.',
    ],
    paragraphsUz: [
      "O'zbekistonda yer solig'i yer uchastkasi egalari va doimiy foydalanuvchilaridan olinadi. Stavka yer toifasi, joylashuvi va maydoniga bog'liq. Jismoniy shaxslarning hovli va dala uchastkalarida joylashuv zonasiga qarab kadastr qiymatining 0,1% dan 0,3% gacha stavkalar qo'llaniladi. Qishloq xo'jaligi yerlari uchun stavkalar ancha past — 0,01% dan 0,05% gacha bo'lib, fermerlik xo'jaligini rivojlantirishni rag'batlantiradi.",
      "Yer solig'i har yili 1-dekabrgacha to'lanadi. Yer uchastkasining kadastr qiymati Davlat kadastr palatasi tomonidan aniqlanadi va hududga bog'liq: Toshkentda 1 sotixning (100 m²) o'rtacha narxi 30-80 mln so'm, viloyat markazlarida — 5-20 mln, qishloq joylarda — 1-5 mln so'm. Soliq summasi haqidagi bildirishnomani my.soliq.uz portali yoki mahalliy soliq inspektsiyasida olish mumkin.",
      "Qonunchilik yer solig'i bo'yicha imtiyozlarni nazarda tutadi. Ozod qilinganlar: faoliyatining dastlabki 2 yilidagi fermer xo'jaliklari, bo'z va tashlandiq yerlarni o'zlashtirish uchun ishlatiladigan uchastkalar (5 yilga), diniy tashkilotlar yerlari, qabristonlar, bog'lar va istirohat bog'lari. I va II guruh nogironlari, urush ishtirokchilari va yolg'iz pensionerlar 6 sotixgacha bitta yer uchastkasi bo'yicha ozod.",
      "Yuridik shaxslar uchun yer solig'i yer toifasi va zonasiga qarab 1 gektar uchun belgilangan stavkalarda hisoblanadi. Sanoat korxonalari, savdo ob'ektlari, yoqilg'i quyish shoxobchalari va restoranlar yuqori stavkalar bo'yicha to'laydi. Erkin iqtisodiy zonalar (EIZ) yerlari investitsiya shartnomalari doirasida 10 yilgacha soliqdan ozod qilinishi mumkin.",
      "Hisoblash misoli: Toshkentning Yunusobod tumanida 6 sotixlik hovli uchastkasi, kadastr qiymati 300 mln so'm, 1-zona, stavka 0,3%. Soliq = 300 000 000 × 0,003 = 900 000 so'm/yil. Solishtirish uchun, Yangiyo'ldagi (Toshkent viloyati) shu kabi uchastka, kadastr qiymati 60 mln so'm, stavka 0,2%: soliq = 60 000 000 × 0,002 = 120 000 so'm/yil — 7,5 marta kam.",
    ],
    faqRu: [
      { question: 'Какая ставка земельного налога?', answer: 'Приусадебные участки: 0,1-0,3% кадастровой стоимости в зависимости от зоны. Сельхозземли: 0,01-0,05%.' },
      { question: 'Кто платит земельный налог?', answer: 'Собственники и постоянные пользователи земельных участков. Арендаторы государственной земли платят арендную плату, не налог.' },
      { question: 'Есть ли льготы по земельному налогу?', answer: 'Фермеры (первые 2 года), освоение целинных земель (5 лет), инвалиды I-II группы, участники войны, одинокие пенсионеры — по 1 участку до 6 соток.' },
      { question: 'Как узнать кадастровую стоимость земли?', answer: 'Через портал kadastr.uz или в территориальном отделении Кадастровой палаты. Стоимость зависит от региона и назначения участка.' },
      { question: 'Когда платить земельный налог?', answer: 'До 1 декабря текущего года. При просрочке начисляется пеня 0,05% в день.' },
    ],
    faqUz: [
      { question: "Yer solig'i stavkasi qancha?", answer: "Hovli yerlari: zonaga qarab kadastr qiymatining 0,1-0,3%. Qishloq xo'jaligi yerlari: 0,01-0,05%." },
      { question: "Kim yer solig'i to'laydi?", answer: "Yer uchastkalarining egalari va doimiy foydalanuvchilari. Davlat yerini ijaraga oluvchilar soliq emas, ijara haqi to'laydi." },
      { question: "Yer solig'i bo'yicha imtiyozlar bormi?", answer: "Fermerlar (dastlabki 2 yil), bo'z yerlarni o'zlashtirish (5 yil), I-II guruh nogironlari, urush ishtirokchilari, yolg'iz pensionerlar — 6 sotixgacha 1 uchastka bo'yicha." },
      { question: "Yerning kadastr qiymatini qanday bilish mumkin?", answer: "kadastr.uz portali yoki Kadastr palatasining hududiy bo'linmasi orqali. Qiymat hudud va uchastka maqsadiga bog'liq." },
      { question: "Yer solig'ini qachon to'lash kerak?", answer: "Joriy yilning 1-dekabrigacha. Kechiktirilganda kuniga 0,05% penya hisoblanadi." },
    ],
  },

  {
    slug: 'vehicle-tax',
    lastUpdated: '2025-10-12',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Транспортный налог в Узбекистане взимается ежегодно с владельцев автотранспортных средств. Ставка зависит от объёма двигателя и определяется в базовых расчётных величинах (БРВ). Для легковых автомобилей: до 1,5 л — 1,5 БРВ (618 000 сум); 1,5-2,0 л — 3 БРВ (1 236 000 сум); 2,0-3,0 л — 5 БРВ (2 060 000 сум); свыше 3,0 л — 7,5 БРВ (3 090 000 сум). Грузовые автомобили и спецтехника облагаются по отдельным ставкам.',
      'Электромобили в Узбекистане получили значительные налоговые льготы в рамках государственной программы развития электротранспорта. Электрокары полностью освобождены от транспортного налога до 2030 года, что вместе с отсутствием таможенных пошлин при ввозе делает их привлекательным вариантом. Гибридные автомобили облагаются по ставке 50% от базовой для соответствующего объёма двигателя. Количество электромобилей в Узбекистане в 2025 году превысило 30 000 единиц.',
      'Для мотоциклов и мопедов ставка составляет 0,5 БРВ (206 000 сум/год). Автобусы облагаются по ставкам от 5 до 14 БРВ в зависимости от количества посадочных мест. Грузовые автомобили: до 2 тонн — 3 БРВ, 2-5 тонн — 5 БРВ, свыше 5 тонн — 7 БРВ. Прицепы и полуприцепы — 1,5 БРВ. Сельскохозяйственная техника фермерских хозяйств освобождена от налога.',
      'Налог уплачивается до 1 декабря текущего года. Оплата возможна через my.soliq.uz, мобильные приложения Click и Payme, а также через банковские терминалы. При продаже автомобиля налог за текущий год уплачивает продавец. При покупке нового авто — налог рассчитывается пропорционально оставшимся месяцам года. При неуплате в срок начисляется пеня 0,05% за каждый день просрочки.',
      'Пример расчёта: Chevrolet Malibu с двигателем 1,5 л турбо — формально до 1,5 л, поэтому ставка 1,5 БРВ = 618 000 сум/год. Chevrolet Tracker (1,5 л) — аналогично 618 000 сум. Chevrolet Tahoe (5,3 л) — 7,5 БРВ = 3 090 000 сум/год. BYD Song Plus (электро) — 0 сум (освобождён до 2030). Наш калькулятор определит точную сумму налога по марке и объёму двигателя вашего автомобиля.',
    ],
    paragraphsUz: [
      "O'zbekistonda transport solig'i avtotransport vositalari egalaridan har yili olinadi. Stavka dvigatel hajmiga bog'liq va bazaviy hisoblash kattaligida (BHK) belgilanadi. Yengil avtomobillar uchun: 1,5 l gacha — 1,5 BHK (618 000 so'm); 1,5-2,0 l — 3 BHK (1 236 000 so'm); 2,0-3,0 l — 5 BHK (2 060 000 so'm); 3,0 l dan ortiq — 7,5 BHK (3 090 000 so'm). Yuk avtomobillari va maxsus texnika alohida stavkalarda soliqqa tortiladi.",
      "Elektromobillar O'zbekistonda elektr transportni rivojlantirish davlat dasturi doirasida sezilarli soliq imtiyozlarini oldi. Elektrokarlar 2030-yilgacha transport solig'idan to'liq ozod qilingan bo'lib, bu import qilishda bojxona boji yo'qligi bilan birga ularni jozibador variantga aylantiradi. Gibrid avtomobillar tegishli dvigatel hajmi uchun bazaviy stavkaning 50% stavkasida soliqqa tortiladi. 2025-yilda O'zbekistondagi elektromobillar soni 30 000 birlikdan oshdi.",
      "Mototsikl va mopedlar uchun stavka 0,5 BHK (206 000 so'm/yil). Avtobuslar o'rindiqlar soniga qarab 5 dan 14 BHKgacha stavkalarda soliqqa tortiladi. Yuk avtomobillari: 2 tonnagacha — 3 BHK, 2-5 tonna — 5 BHK, 5 tonnadan ortiq — 7 BHK. Tirkamalar va yarim tirkamalar — 1,5 BHK. Fermer xo'jaliklarining qishloq xo'jaligi texnikasi soliqdan ozod.",
      "Soliq joriy yilning 1-dekabrigacha to'lanadi. To'lov my.soliq.uz, Click va Payme mobil ilovalari, shuningdek bank terminallari orqali amalga oshirilishi mumkin. Avtomobil sotilganda joriy yil uchun soliqni sotuvchi to'laydi. Yangi avto sotib olinganda — soliq yilning qolgan oylariga mutanosib hisoblanadi. Muddatida to'lanmaganda har kechiktirilgan kun uchun 0,05% penya hisoblanadi.",
      "Hisoblash misoli: Chevrolet Malibu 1,5 l turbo dvigatel bilan — rasman 1,5 l gacha, shuning uchun stavka 1,5 BHK = 618 000 so'm/yil. Chevrolet Tracker (1,5 l) — xuddi shunday 618 000 so'm. Chevrolet Tahoe (5,3 l) — 7,5 BHK = 3 090 000 so'm/yil. BYD Song Plus (elektr) — 0 so'm (2030-yilgacha ozod). Kalkulyatorimiz avtomobilingizning markasi va dvigatel hajmi bo'yicha aniq soliq summasini aniqlaydi.",
    ],
    faqRu: [
      { question: 'Сколько стоит транспортный налог?', answer: 'Легковые авто: 1,5-7,5 БРВ (618 000 − 3 090 000 сум) в зависимости от объёма двигателя. Мотоциклы — 0,5 БРВ (206 000).' },
      { question: 'Облагаются ли электромобили?', answer: 'Нет, электромобили полностью освобождены от транспортного налога до 2030 года. Гибриды — 50% от базовой ставки.' },
      { question: 'Когда нужно платить?', answer: 'До 1 декабря текущего года. Оплата через my.soliq.uz, Click, Payme или банковские терминалы.' },
      { question: 'Как определяется объём двигателя для налога?', answer: 'По данным техпаспорта (свидетельства о регистрации). Турбированные двигатели учитываются по фактическому объёму, а не по мощности.' },
      { question: 'Нужно ли платить налог при продаже авто?', answer: 'Продавец платит за текущий год. Покупатель — пропорционально оставшимся месяцам.' },
    ],
    faqUz: [
      { question: "Transport solig'i qancha?", answer: "Yengil avtolar: dvigatel hajmiga qarab 1,5-7,5 BHK (618 000 − 3 090 000 so'm). Mototsikllar — 0,5 BHK (206 000)." },
      { question: "Elektromobillar soliqqa tortiladimi?", answer: "Yo'q, elektromobillar 2030-yilgacha transport solig'idan to'liq ozod. Gibridlar — bazaviy stavkaning 50%." },
      { question: "Qachon to'lash kerak?", answer: "Joriy yilning 1-dekabrigacha. my.soliq.uz, Click, Payme yoki bank terminallari orqali to'lash mumkin." },
      { question: "Soliq uchun dvigatel hajmi qanday aniqlanadi?", answer: "Texnik pasport (ro'yxatga olish guvohnomasi) ma'lumotlari bo'yicha. Turboli dvigatellar quvvatiga emas, haqiqiy hajmiga qarab hisoblanadi." },
      { question: "Avto sotilganda soliq to'lash kerakmi?", answer: "Sotuvchi joriy yil uchun to'laydi. Xaridor — yilning qolgan oylariga mutanosib." },
    ],
  },

  {
    slug: 'corporate-tax',
    lastUpdated: '2025-09-25',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Ставка налога на прибыль юридических лиц в Узбекистане составляет 15% от чистой прибыли — доходы минус документально подтверждённые расходы. Для банков и страховых компаний предусмотрена повышенная ставка 20%. Операторы мобильной связи также облагаются по ставке 20%. Налогооблагаемая база определяется по данным бухгалтерского учёта с корректировками, предусмотренными Налоговым кодексом.',
      'Предприятия с годовой выручкой до 10 млрд сум могут выбрать упрощённую систему налогообложения — налог с оборота по ставке 4% без вычета расходов. Это выгодно при низкой доле расходов в выручке (менее 40%). Переход между системами возможен с начала календарного года при уведомлении налогового органа. Компании на общей системе с оборотом свыше 60 000 БРВ (24,72 млрд сум) автоматически становятся плательщиками НДС.',
      'Авансовые платежи по налогу на прибыль уплачиваются ежеквартально — не позднее 25-го числа первого месяца каждого квартала. Годовая декларация подаётся до 1 апреля следующего года через систему my.soliq.uz. Убытки можно переносить на последующие 5 налоговых периодов, уменьшая налогооблагаемую прибыль будущих лет. Дивиденды, выплачиваемые учредителям-физлицам, облагаются НДФЛ по ставке 5%.',
      'Законодательство предусматривает значительные льготы. Резиденты свободных экономических зон (СЭЗ) — Навои, Ангрен, Джизак, Ургут и другие — освобождены от налога на прибыль до 10 лет в зависимости от объёма инвестиций. Резиденты IT Park уплачивают 1% от выручки (единый налоговый платёж). Предприятия, инвестирующие в социальную инфраструктуру, могут получить пониженные ставки. Экспортёры имеют право на дополнительные вычеты.',
      'Пример расчёта: ООО с годовой выручкой 5 млрд сум и расходами 3,5 млрд. На общей системе: прибыль = 1,5 млрд, налог = 1 500 000 000 × 15% = 225 000 000 сум. На упрощённой: налог = 5 000 000 000 × 4% = 200 000 000 сум. В данном случае упрощённая система выгоднее на 25 млн. При расходах 4 млрд: общая система = 150 млн, упрощённая = 200 млн — общая выгоднее.',
    ],
    paragraphsUz: [
      "O'zbekistonda yuridik shaxslarning foyda solig'i stavkasi sof foydaning 15% ni tashkil etadi — daromadlar minus hujjat bilan tasdiqlangan xarajatlar. Banklar va sug'urta kompaniyalari uchun 20% stavka belgilangan. Mobil aloqa operatorlari ham 20% stavkada soliqqa tortiladi. Soliq bazasi buxgalteriya hisobi ma'lumotlari asosida Soliq kodeksida nazarda tutilgan tuzatishlar bilan aniqlanadi.",
      "Yillik tushumi 10 mlrd so'mgacha bo'lgan korxonalar soddalashtilgan soliqqa tortish tizimini tanlashi mumkin — xarajatlarni chegirmasdan aylanmadan 4% stavkada soliq. Bu xarajatlar ulushi tushumda past bo'lganda (40% dan kam) foydali. Tizimlar o'rtasida o'tish kalendar yili boshidan soliq organiga xabar berish sharti bilan mumkin. Umumiy tizimdagi aylanmasi 60 000 BHK (24,72 mlrd so'm) dan ortiq kompaniyalar avtomatik ravishda QQS to'lovchilariga aylanadi.",
      "Foyda solig'i bo'yicha avans to'lovlari har chorakda — har chorak birinchi oyining 25-sanasidan kechiktirmay to'lanadi. Yillik deklaratsiya keyingi yilning 1-aprelgacha my.soliq.uz tizimi orqali topshiriladi. Zararlarni keyingi 5 soliq davriga o'tkazish, kelajakdagi yillarning soliqqa tortiladigan foydasini kamaytirish mumkin. Ta'sischilar-jismoniy shaxslarga to'lanadigan dividendlar 5% stavkada JShShSga tortiladi.",
      "Qonunchilik sezilarli imtiyozlarni nazarda tutadi. Erkin iqtisodiy zonalar (EIZ) rezidentlari — Navoiy, Angren, Jizzax, Urgut va boshqalar — investitsiya hajmiga qarab 10 yilgacha foyda solig'idan ozod. IT Park rezidentlari tushumdan 1% (yagona soliq to'lovi) to'laydi. Ijtimoiy infratuzilmaga sarmoya kiritayotgan korxonalar pasaytirilgan stavkalar olishi mumkin. Eksportchilar qo'shimcha chegirmalarga haqli.",
      "Hisoblash misoli: yillik tushumi 5 mlrd so'm va xarajatlari 3,5 mlrd bo'lgan MChJ. Umumiy tizimda: foyda = 1,5 mlrd, soliq = 1 500 000 000 × 15% = 225 000 000 so'm. Soddalashtirilda: soliq = 5 000 000 000 × 4% = 200 000 000 so'm. Bu holatda soddalashtilgan tizim 25 mln ga foydaliroq. Xarajatlar 4 mlrd bo'lganda: umumiy tizim = 150 mln, soddalashtilgan = 200 mln — umumiy foydaliroq.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на прибыль?', answer: '15% для обычных юрлиц, 20% для банков, страховых и мобильных операторов. На упрощённой системе — 4% от оборота.' },
      { question: 'Можно ли перенести убытки?', answer: 'Да, убытки переносятся на последующие 5 налоговых периодов, уменьшая прибыль будущих лет.' },
      { question: 'Какие льготы по налогу на прибыль?', answer: 'СЭЗ (до 10 лет освобождение), IT Park (1% от выручки), инвесторы в социальные проекты — пониженные ставки.' },
      { question: 'Когда подавать декларацию?', answer: 'До 1 апреля года, следующего за отчётным. Авансовые платежи — ежеквартально до 25-го числа первого месяца квартала.' },
      { question: 'Какой налог на дивиденды?', answer: 'НДФЛ 5% с дивидендов, выплачиваемых учредителям — физическим лицам. Для юридических лиц-учредителей — 5%.' },
    ],
    faqUz: [
      { question: "Foyda solig'i stavkasi qancha?", answer: "Oddiy yuridik shaxslar uchun 15%, banklar, sug'urta va mobil operatorlar uchun 20%. Soddalashtirilda — aylanmadan 4%." },
      { question: "Zararlarni o'tkazish mumkinmi?", answer: "Ha, zararlar keyingi 5 soliq davriga o'tkaziladi, kelajakdagi yillar foydasini kamaytiradi." },
      { question: "Foyda solig'i bo'yicha qanday imtiyozlar bor?", answer: "EIZ (10 yilgacha ozod qilish), IT Park (tushumdan 1%), ijtimoiy loyihalarga investorlar — pasaytirilgan stavkalar." },
      { question: "Deklaratsiyani qachon topshirish kerak?", answer: "Hisobot yilidan keyingi yilning 1-aprelgacha. Avans to'lovlari — har chorak birinchi oyining 25-sanasigacha." },
      { question: "Dividendlarga soliq qancha?", answer: "Ta'sischi-jismoniy shaxslarga to'lanadigan dividendlardan JShShS 5%. Yuridik shaxs-ta'sischilar uchun ham 5%." },
    ],
  },

  {
    slug: 'tax-penalty',
    lastUpdated: '2025-10-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Калькулятор налоговых пеней рассчитывает размер пени за несвоевременную уплату налогов в Узбекистане. Пеня начисляется автоматически в размере 0,05% от суммы задолженности за каждый день просрочки, что эквивалентно 18,25% годовых. Пеня начисляется с первого дня, следующего за установленным сроком уплаты, до дня фактической оплаты включительно. Калькулятор определит точную сумму пени по вашим данным.',
      'Формула расчёта: Пеня = Сумма долга × 0,05% × Количество дней просрочки. Пример: задолженность по НДФЛ 5 000 000 сум, просрочка 60 дней. Пеня = 5 000 000 × 0,0005 × 60 = 150 000 сум. Для крупных сумм пеня набегает быстро: при задолженности 100 млн сум пеня за месяц составит 1 500 000 сум, за квартал — 4 500 000 сум, за год — 18 250 000 сум.',
      'Помимо пени, за налоговые правонарушения предусмотрены штрафы. За несвоевременную подачу налоговой декларации: 5 БРВ (2 060 000 сум) за первое нарушение, 10 БРВ (4 120 000 сум) за повторное в течение года. За занижение налоговой базы: 20% от суммы недоплаченного налога. За ведение деятельности без регистрации: от 10 до 30 БРВ. За непредставление документов по запросу налогового органа: 5 БРВ.',
      'Налоговый кодекс предусматривает возможность списания пени при определённых обстоятельствах. Если налогоплательщик добровольно обнаружил и исправил ошибку, подав уточнённую декларацию до начала налоговой проверки, штраф за занижение базы не применяется (но пеня всё равно начисляется). При реструктуризации задолженности возможна рассрочка уплаты пени. Налоговые споры рассматриваются в административном порядке через вышестоящий налоговый орган или через суд.',
      'Наш калькулятор пеней позволяет ввести сумму задолженности, дату начала просрочки и дату планируемого погашения — и мгновенно получить сумму пени и общую сумму к уплате. Также калькулятор показывает разбивку по дням и помесячный рост пени. Рекомендуем погашать задолженность как можно скорее: при ставке 0,05%/день пеня за год составляет 18,25% — больше ставки по многим кредитам.',
    ],
    paragraphsUz: [
      "Soliq peniyalari kalkulyatori O'zbekistonda soliqlarni o'z vaqtida to'lamaganligi uchun penya miqdorini hisoblaydi. Penya avtomatik ravishda qarzdorlik summasining har bir kechiktirilgan kun uchun 0,05% miqdorida hisoblanadi, bu yillik 18,25% ga teng. Penya belgilangan to'lov muddatidan keyingi birinchi kundan boshlab haqiqiy to'lov kunigacha hisoblanadi. Kalkulyator sizning ma'lumotlaringiz bo'yicha aniq penya summasini aniqlaydi.",
      "Hisoblash formulasi: Penya = Qarz summasi × 0,05% × Kechikish kunlari soni. Misol: JShShS bo'yicha 5 000 000 so'm qarzdorlik, 60 kun kechikish. Penya = 5 000 000 × 0,0005 × 60 = 150 000 so'm. Katta summalarda penya tez yig'iladi: 100 mln so'm qarzdorlikda oylik penya 1 500 000 so'm, choraklik — 4 500 000 so'm, yillik — 18 250 000 so'm.",
      "Penyadan tashqari, soliq huquqbuzarliklari uchun jarimalar nazarda tutilgan. Soliq deklaratsiyasini kechiktirganlik uchun: birinchi buzilish uchun 5 BHK (2 060 000 so'm), yil ichida takroriy uchun 10 BHK (4 120 000 so'm). Soliq bazasini kamaytirganligi uchun: kam to'langan soliq summasining 20%. Ro'yxatdan o'tmasdan faoliyat yuritganligi uchun: 10 dan 30 BHKgacha. Soliq organining so'rovi bo'yicha hujjatlarni taqdim etmaganligi uchun: 5 BHK.",
      "Soliq kodeksi muayyan hollarda penyani hisobdan chiqarish imkoniyatini nazarda tutadi. Agar soliq to'lovchi soliq tekshiruvigacha xatoni mustaqil aniqlagan va aniqlashtirilgan deklaratsiya topshirgan bo'lsa, bazani kamaytirganlik uchun jarima qo'llanilmaydi (lekin penya baribir hisoblanadi). Qarzdorlikni qayta tuzilashda penya bo'lib to'lash mumkin. Soliq nizolari yuqori turuvchi soliq organi orqali ma'muriy tartibda yoki sud orqali ko'rib chiqiladi.",
      "Bizning penya kalkulyatorimiz qarzdorlik summasini, kechikish boshlanish sanasini va rejalashtirilgan to'lov sanasini kiritish va bir zumda penya summasini hamda umumiy to'lanadigan summani olish imkonini beradi. Kalkulyator kunlik taqsimot va oylik penya o'sishini ham ko'rsatadi. Qarzdorlikni iloji boricha tezroq to'lashni tavsiya etamiz: kuniga 0,05% stavkada yillik penya 18,25% ni tashkil etadi.",
    ],
    faqRu: [
      { question: 'Какая пеня за просрочку уплаты налогов?', answer: '0,05% от суммы задолженности за каждый день просрочки (18,25% годовых).' },
      { question: 'Как рассчитать пеню?', answer: 'Сумма долга × 0,0005 × количество дней. Пример: 10 млн × 0,0005 × 30 = 150 000 сум.' },
      { question: 'Какие штрафы за налоговые нарушения?', answer: 'Непредставление декларации: 5-10 БРВ. Занижение базы: 20% недоплаты. Деятельность без регистрации: 10-30 БРВ.' },
      { question: 'Можно ли уменьшить пеню?', answer: 'Пеня начисляется автоматически и не уменьшается. Но штраф за занижение базы можно избежать, подав уточнённую декларацию до налоговой проверки.' },
      { question: 'С какого дня начинается пеня?', answer: 'Со следующего дня после установленного срока уплаты налога. Заканчивается в день фактической оплаты.' },
    ],
    faqUz: [
      { question: "Soliq kechiktirilganligi uchun penya qancha?", answer: "Qarzdorlik summasining har kechiktirilgan kun uchun 0,05% (yillik 18,25%)." },
      { question: "Penyani qanday hisoblash mumkin?", answer: "Qarz summasi × 0,0005 × kunlar soni. Misol: 10 mln × 0,0005 × 30 = 150 000 so'm." },
      { question: "Soliq huquqbuzarliklari uchun qanday jarimalar bor?", answer: "Deklaratsiya topshirmaslik: 5-10 BHK. Bazani kamaytirish: kam to'langan summaning 20%. Ro'yxatdan o'tmasdan faoliyat: 10-30 BHK." },
      { question: "Penyani kamaytirish mumkinmi?", answer: "Penya avtomatik hisoblanadi va kamaytirilmaydi. Lekin soliq tekshiruvigacha aniqlashtirilgan deklaratsiya topshirilsa, bazani kamaytirganlik uchun jarimadan qochish mumkin." },
      { question: "Penya qaysi kundan boshlanadi?", answer: "Soliq to'lashning belgilangan muddatidan keyingi kundan. Haqiqiy to'lov kunida tugaydi." },
    ],
  },

  {
    slug: 'self-employed',
    lastUpdated: '2025-11-15',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'С 2026 года в Узбекистане вводится официальный статус самозанятого лица с налогом 1% от оборота — это самая низкая налоговая ставка среди всех режимов налогообложения в стране. Самозанятые не являются индивидуальными предпринимателями: им не требуется регистрация в едином реестре предпринимателей, а отчётность сведена к минимуму. Регистрация осуществляется через мобильное приложение или портал my.soliq.uz буквально за несколько минут.',
      'Ограничения для самозанятых: годовой оборот не должен превышать 100 000 000 сум (примерно $7 800), нанимать работников запрещено, и существуют ограничения по видам деятельности — нельзя заниматься производством подакцизных товаров, оптовой торговлей и некоторыми лицензируемыми видами деятельности. Статус самозанятого идеально подходит для фрилансеров, репетиторов, мастеров handmade, водителей такси, фотографов, парикмахеров на дому и других индивидуальных специалистов.',
      'Налог уплачивается ежемесячно до 15 числа следующего месяца через my.soliq.uz или мобильные платёжные приложения. Сумма налога фиксируется автоматически на основе поступлений на привязанную банковскую карту или по добровольной декларации дохода. Социальный налог (12%) и взнос в ИНПС (0,1%) для самозанятых не начисляются, но это означает отсутствие пенсионного стажа — для формирования пенсии рекомендуется делать добровольные взносы.',
      'Сравнение режимов: самозанятый — 1% от оборота (до 100 млн/год); ИП на упрощённой системе — 4% от оборота (без ограничения оборота, до 10 работников); ООО на общей системе — 15% от прибыли + НДС 12% при обороте свыше 24,72 млрд. При чистой марже менее 25% ИП выгоднее ООО. При обороте менее 100 млн/год и отсутствии наёмных работников самозанятый — безусловно оптимальный выбор с точки зрения налоговой нагрузки.',
      'Калькулятор самозанятого на нашем сайте рассчитает ваш ежемесячный налог, сравнит его с альтернативными режимами (ИП, ООО) и покажет экономию. Введите примерный месячный доход — калькулятор мгновенно покажет результат. Пример: при доходе 8 000 000 сум/мес налог самозанятого = 80 000 сум, ИП = 320 000, разница — 240 000 сум в месяц или 2 880 000 в год.',
    ],
    paragraphsUz: [
      "2026-yildan O'zbekistonda o'z-o'zini band qilgan shaxsning rasmiy maqomi aylanmadan 1% soliq bilan joriy etiladi — bu mamlakatdagi barcha soliqqa tortish rejimlari orasida eng past soliq stavkasi. O'z-o'zini band qilganlar yakka tartibdagi tadbirkor hisoblanmaydi: tadbirkorlarning yagona reyestrida ro'yxatdan o'tish talab qilinmaydi, hisobot minimal. Ro'yxatdan o'tish mobil ilova yoki my.soliq.uz portali orqali bir necha daqiqada amalga oshiriladi.",
      "O'z-o'zini band qilganlar uchun cheklovlar: yillik aylanma 100 000 000 so'mdan (taxminan $7 800) oshmasligi kerak, xodim yollash taqiqlangan va faoliyat turlari bo'yicha cheklovlar mavjud — aksiz tovarlarini ishlab chiqarish, ulgurji savdo va ba'zi litsenziyalanadigan faoliyat turlari bilan shug'ullanib bo'lmaydi. Maqom frilanserlar, repetitorlar, handmade ustalari, taksi haydovchilari, fotosuratchilar, uyda sartaroshlar va boshqa yakka mutaxassislar uchun ideal.",
      "Soliq har oy keyingi oyning 15-sanasigacha my.soliq.uz yoki mobil to'lov ilovalari orqali to'lanadi. Soliq summasi bog'langan bank kartasiga tushgan mablag'lar asosida yoki daromadni ixtiyoriy deklaratsiya qilish orqali avtomatik ravishda belgilanadi. O'z-o'zini band qilganlar uchun ijtimoiy soliq (12%) va IJPH to'lovi (0,1%) hisoblanmaydi, lekin bu pensiya stajining yo'qligini anglatadi — pensiya shakllantirish uchun ixtiyoriy badal to'lash tavsiya etiladi.",
      "Rejimlarni solishtirish: o'z-o'zini band qilgan — aylanmadan 1% (100 mln/yilgacha); soddalashtilgan tizimdagi YaTT — aylanmadan 4% (aylanma cheklovisiz, 10 tagacha xodim); umumiy tizimdagi MChJ — foydadan 15% + aylanma 24,72 mlrd dan ortiqda QQS 12%. Sof marja 25% dan kam bo'lganda YaTT MChJdan foydaliroq. Yillik aylanma 100 mln dan kam va yollama xodimlar bo'lmaganda o'z-o'zini band qilgan — soliq yuki nuqtai nazaridan shubhasiz optimal tanlov.",
      "Saytimizda o'z-o'zini band qilgan kalkulyatori oylik solig'ingizni hisoblaydi, muqobil rejimlar (YaTT, MChJ) bilan solishtiradi va tejashni ko'rsatadi. Taxminiy oylik daromadni kiriting — kalkulyator bir zumda natijani ko'rsatadi. Misol: oylik 8 000 000 so'm daromadda o'z-o'zini band qilgan solig'i = 80 000 so'm, YaTT = 320 000, farq — oyiga 240 000 so'm yoki yiliga 2 880 000.",
    ],
    faqRu: [
      { question: 'Какой налог у самозанятого?', answer: '1% от оборота (с 2026 года). Самая низкая ставка среди всех режимов в Узбекистане.' },
      { question: 'Кто может стать самозанятым?', answer: 'Физические лица с оборотом до 100 млн сум/год, без наёмных работников, с разрешёнными видами деятельности.' },
      { question: 'Чем самозанятый отличается от ИП?', answer: 'Самозанятый: 1% налог, без работников, до 100 млн/год, минимум отчётности. ИП: 4%, до 10 работников, без ограничения оборота.' },
      { question: 'Идёт ли пенсионный стаж у самозанятого?', answer: 'Нет, социальный налог и ИНПС не начисляются. Для пенсии рекомендуется делать добровольные взносы.' },
      { question: 'Как зарегистрироваться самозанятым?', answer: 'Через мобильное приложение или my.soliq.uz. Регистрация занимает несколько минут, без посещения офисов.' },
    ],
    faqUz: [
      { question: "O'z-o'zini band qilganlik solig'i qancha?", answer: "Aylanmaning 1% (2026-yildan). O'zbekistondagi barcha rejimlar orasida eng past stavka." },
      { question: "Kim o'z-o'zini band qilgan bo'lishi mumkin?", answer: "Yillik aylanmasi 100 mln so'mgacha, yollama xodimsiz, ruxsat etilgan faoliyat turlari bilan jismoniy shaxslar." },
      { question: "O'z-o'zini band qilgan YaTTdan nimasi bilan farq qiladi?", answer: "O'z-o'zini band qilgan: 1% soliq, xodimsiz, 100 mln/yilgacha, minimal hisobot. YaTT: 4%, 10 tagacha xodim, aylanma cheklovisiz." },
      { question: "O'z-o'zini band qilganda pensiya staji boradimi?", answer: "Yo'q, ijtimoiy soliq va IJPH hisoblanmaydi. Pensiya uchun ixtiyoriy badal to'lash tavsiya etiladi." },
      { question: "O'z-o'zini band qilgan sifatida qanday ro'yxatdan o'tish mumkin?", answer: "Mobil ilova yoki my.soliq.uz orqali. Ro'yxatdan o'tish bir necha daqiqa oladi, ofislarga borish shart emas." },
    ],
  },

  {
    slug: 'turnover-tax',
    lastUpdated: '2025-09-20',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' },
      { name: 'Налоговый комитет', url: 'https://soliq.uz' },
    ],
    paragraphsRu: [
      'Налог с оборота — упрощённый режим налогообложения для индивидуальных предпринимателей и юридических лиц с совокупным оборотом менее 60 000 БРВ (24 720 000 000 сум с августа 2025). Ставка составляет 4% от валового дохода без вычета расходов. Этот режим заменяет налог на прибыль и НДС, что существенно упрощает бухгалтерский учёт и снижает административную нагрузку на малый бизнес.',
      'Основные преимущества упрощённой системы: простота ведения учёта (не нужно документировать расходы), минимальная отчётность (квартальная декларация через my.soliq.uz), отсутствие НДС и необходимости вести учёт счетов-фактур. Однако есть существенный недостаток: расходы не уменьшают налоговую базу. Это делает режим невыгодным для бизнеса с высокой долей затрат — производство, строительство, торговля с низкой маржей.',
      'Налог уплачивается ежеквартально не позднее 25-го числа месяца, следующего за отчётным кварталом. Авансовые платежи не предусмотрены. Декларация подаётся в электронном виде через портал my.soliq.uz. Помимо налога с оборота, ИП на упрощённой системе уплачивает социальный налог — фиксированный платёж 1 БРВ (412 000 сум) в месяц, а также НДФЛ 12% с зарплат наёмных работников (если они есть).',
      'Точка переключения между режимами: при марже (прибыль/выручка) менее 27% общая система (15% от прибыли) выгоднее упрощённой (4% от оборота). Пример: выручка 500 млн/год, расходы 350 млн. Упрощённая: 500 × 4% = 20 млн. Общая: (500 − 350) × 15% = 22,5 млн — упрощённая выгоднее. Но если расходы 400 млн: общая = 15 млн, а упрощённая = 20 млн — общая выгоднее на 5 млн.',
      'При приближении оборота к порогу 60 000 БРВ необходимо заблаговременно готовиться к переходу на общую систему с НДС. Альтернатива для физлиц с оборотом до 100 млн/год: с 2026 года доступен статус самозанятого с налогом всего 1% от оборота. Наш калькулятор рассчитает сумму налога с оборота и сравнит с альтернативными режимами — введите ваш оборот и примерные расходы.',
    ],
    paragraphsUz: [
      "Aylanma solig'i — umumiy aylanmasi 60 000 BHK (2025-yil avgustidan 24 720 000 000 so'm) dan kam yakka tartibdagi tadbirkorlar va yuridik shaxslar uchun soddalashtilgan soliqqa tortish rejimi. Stavka xarajatlarni chegirmasdan yalpi daromadning 4% ni tashkil etadi. Bu rejim foyda solig'i va QQS o'rnini bosadi, bu buxgalteriya hisobini sezilarli darajada soddalashtiradi va kichik biznesga ma'muriy yukni kamaytiradi.",
      "Soddalashtilgan tizimning asosiy afzalliklari: hisobni yuritish soddaligi (xarajatlarni hujjatlashtirish shart emas), minimal hisobot (my.soliq.uz orqali choraklik deklaratsiya), QQS yo'qligi va hisob-fakturalar hisobini yuritish zarurati yo'qligi. Lekin muhim kamchilik bor: xarajatlar soliq bazasini kamaytirmaydi. Bu rejimni xarajatlar ulushi yuqori biznes uchun foydasiz qiladi — ishlab chiqarish, qurilish, past marjali savdo.",
      "Soliq har chorakda hisobot choragidan keyingi oyning 25-sanasidan kechiktirmay to'lanadi. Avans to'lovlari nazarda tutilmagan. Deklaratsiya my.soliq.uz portali orqali elektron shaklda topshiriladi. Aylanma solig'idan tashqari, soddalashtilgan tizimdagi YaTT ijtimoiy soliq — oyiga 1 BHK (412 000 so'm) qat'iy to'lov, shuningdek yollama xodimlar (bor bo'lsa) ish haqidan JShShS 12% to'laydi.",
      "Rejimlar o'rtasida almashtirish nuqtasi: marja (foyda/tushum) 27% dan kam bo'lganda umumiy tizim (foydadan 15%) soddalashtirgan (aylanmadan 4%) dan foydaliroq. Misol: yillik tushum 500 mln, xarajatlar 350 mln. Soddalashtilgan: 500 × 4% = 20 mln. Umumiy: (500 − 350) × 15% = 22,5 mln — soddalashtilgan foydaliroq. Lekin xarajatlar 400 mln bo'lsa: umumiy = 15 mln, soddalashtilgan = 20 mln — umumiy 5 mln ga foydaliroq.",
      "Aylanma 60 000 BHK chegarasiga yaqinlashganda QQS bilan umumiy tizimga o'tishga oldindan tayyorlanish kerak. Yillik aylanmasi 100 mln gacha bo'lgan jismoniy shaxslar uchun muqobil: 2026-yildan aylanmadan atigi 1% soliq bilan o'z-o'zini band qilgan maqomi mavjud. Kalkulyatorimiz aylanma solig'i summasini hisoblaydi va muqobil rejimlar bilan solishtiradi — aylanma va taxminiy xarajatlaringizni kiriting.",
    ],
    faqRu: [
      { question: 'Какая ставка налога с оборота?', answer: '4% от валового дохода. Расходы не вычитаются. Заменяет налог на прибыль и НДС.' },
      { question: 'Кто платит налог с оборота?', answer: 'ИП и юрлица на упрощённой системе с оборотом менее 60 000 БРВ (24,72 млрд сум за 12 месяцев).' },
      { question: 'Когда выгодна упрощённая система?', answer: 'При марже более 27% (расходы менее 73% от выручки). При более высоких расходах — общая система (15% от прибыли) выгоднее.' },
      { question: 'Когда платить налог с оборота?', answer: 'Ежеквартально до 25-го числа месяца, следующего за кварталом. Декларация через my.soliq.uz.' },
      { question: 'Можно ли совмещать с НДС?', answer: 'Нет. На упрощённой системе НДС не уплачивается. При превышении порога 60 000 БРВ необходимо перейти на общую систему с НДС.' },
    ],
    faqUz: [
      { question: "Aylanma solig'i stavkasi qancha?", answer: "Yalpi daromadning 4%. Xarajatlar chegirilmaydi. Foyda solig'i va QQS o'rnini bosadi." },
      { question: "Aylanma solig'ini kim to'laydi?", answer: "Soddalashtilgan tizimdagi 60 000 BHK (12 oyda 24,72 mlrd so'm) dan kam aylanmali YaTT va yuridik shaxslar." },
      { question: "Soddalashtilgan tizim qachon foydali?", answer: "Marja 27% dan yuqori bo'lganda (xarajatlar tushumning 73% dan kam). Yuqori xarajatlarda — umumiy tizim (foydadan 15%) foydaliroq." },
      { question: "Aylanma solig'ini qachon to'lash kerak?", answer: "Har chorakda chorakdan keyin oyning 25-sanasigacha. Deklaratsiya my.soliq.uz orqali." },
      { question: "QQS bilan birlashtirish mumkinmi?", answer: "Yo'q. Soddalashtilgan tizimda QQS to'lanmaydi. 60 000 BHK chegarasidan oshganda QQS bilan umumiy tizimga o'tish kerak." },
    ],
  },

  {
    slug: 'sick-leave',
    lastUpdated: '2025-10-08',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Фонд социального страхования', url: 'https://lex.uz' },
    ],
    paragraphsRu: [
      'Больничный лист в Узбекистане оплачивается в зависимости от трудового стажа работника. Первые 10 рабочих дней оплачивает работодатель из собственных средств, далее — из фонда государственного социального страхования. Размер оплаты: при стаже до 5 лет — 60% среднего заработка, от 5 до 8 лет — 80%, свыше 8 лет — 100%. Больничный лист оформляется в поликлинике по месту прикрепления.',
      'Средний дневной заработок для расчёта определяется путём деления суммы начисленной зарплаты за последние 12 месяцев на количество рабочих дней в этом периоде. Если работник проработал менее 12 месяцев, берётся фактический период работы. Минимальный размер оплаты больничного не может быть ниже расчёта из минимальной заработной платы (1 271 000 сум/мес).',
      'Максимальный срок оплачиваемого больничного — до 120 календарных дней подряд. При заболевании туберкулёзом — до 180 дней. После истечения этого срока вопрос решается МСЭК: продление больничного или установление инвалидности. При уходе за больным ребёнком до 14 лет больничный оплачивается до 14 календарных дней, за ребёнком-инвалидом — до 30 дней.',
      'Выплаты по больничному листу облагаются НДФЛ 12% и ИНПС 0,1%, но не облагаются социальным налогом. Больничный не оплачивается, если нетрудоспособность наступила в результате умышленного причинения вреда здоровью, при нахождении под арестом или в период отпуска без сохранения зарплаты. Работодатель обязан принять больничный лист и произвести расчёт в течение 10 рабочих дней.',
      'Пример расчёта: стаж 6 лет, средняя зарплата 10 000 000 сум/мес, среднедневной заработок ≈ 455 000 сум, больничный 15 рабочих дней. Оплата: 455 000 × 80% × 15 = 5 460 000 сум (10 дней = 3 640 000 — работодатель, 5 дней = 1 820 000 — соцстрах). Минус НДФЛ 12%: чистая выплата ≈ 4 805 000 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda kasallik varag'i xodimning ish stajiga qarab to'lanadi. Birinchi 10 ish kuni ish beruvchi o'z mablag'laridan to'laydi, keyin — davlat ijtimoiy sug'urta fondidan. To'lov miqdori: 5 yilgacha stajda — o'rtacha ish haqining 60%, 5 dan 8 yilgacha — 80%, 8 yildan ortiq — 100%. Kasallik varag'i biriktirilgan poliklinikada rasmiylashtiriladi.",
      "Hisoblash uchun o'rtacha kunlik ish haqi oxirgi 12 oydagi hisoblangan ish haqi summasini shu davrdagi ish kunlari soniga bo'lish orqali aniqlanadi. Agar xodim 12 oydan kam ishlagan bo'lsa, haqiqiy ish davri olinadi. Kasallik to'lovining minimal miqdori minimal ish haqidan (1 271 000 so'm/oy) hisoblashdan past bo'lishi mumkin emas.",
      "To'lanadigan kasallik varag'ining maksimal muddati — ketma-ket 120 kalendar kungacha. Sil kasalligi bo'lsa — 180 kungacha. Bu muddat tugagandan keyin TIEK qaror qabul qiladi: kasallikni uzaytirish yoki nogironlikni belgilash. 14 yoshgacha kasal bolaga qarov uchun 14 kalendar kungacha, nogiron bolaga — 30 kungacha to'lanadi.",
      "Kasallik varag'i bo'yicha to'lovlar JShShS 12% va IJPH 0,1% ga tortiladi, lekin ijtimoiy soliqqa tortilmaydi. Kasallik varag'i to'lanmaydi: sog'liqqa qasddan zarar yetkazish natijasida yuzaga kelgan bo'lsa, hibsda bo'lgan davrda, ish haqi saqlanmagan ta'til davrida. Ish beruvchi kasallik varag'ini qabul qilishi va 10 ish kuni ichida hisob-kitob qilishi shart.",
      "Hisoblash misoli: staj 6 yil, o'rtacha ish haqi 10 000 000 so'm/oy, o'rtacha kunlik ish haqi ≈ 455 000 so'm, kasallik 15 ish kuni. To'lov: 455 000 × 80% × 15 = 5 460 000 so'm (10 kun = 3 640 000 — ish beruvchi, 5 kun = 1 820 000 — sotsstrax). Minus JShShS 12%: sof to'lov ≈ 4 805 000 so'm.",
    ],
    faqRu: [
      { question: 'Как оплачивается больничный?', answer: 'В зависимости от стажа: до 5 лет — 60%, 5-8 лет — 80%, более 8 лет — 100% среднего заработка.' },
      { question: 'Кто оплачивает больничный?', answer: 'Первые 10 рабочих дней — работодатель, далее — фонд социального страхования.' },
      { question: 'Какой максимальный срок больничного?', answer: 'До 120 календарных дней подряд (при туберкулёзе — до 180). Далее решает МСЭК.' },
      { question: 'Облагается ли больничный налогом?', answer: 'Да, НДФЛ 12% и ИНПС 0,1% удерживаются. Социальный налог не начисляется.' },
      { question: 'Как оплачивается больничный по уходу за ребёнком?', answer: 'До 14 календарных дней за ребёнком до 14 лет, до 30 дней за ребёнком-инвалидом.' },
    ],
    faqUz: [
      { question: "Kasallik varag'i qanday to'lanadi?", answer: "Stajga qarab: 5 yilgacha — 60%, 5-8 yil — 80%, 8 yildan ortiq — o'rtacha ish haqining 100%." },
      { question: "Kasallik varag'ini kim to'laydi?", answer: "Birinchi 10 ish kuni — ish beruvchi, keyin — ijtimoiy sug'urta fondi." },
      { question: "Kasallik varag'ining maksimal muddati qancha?", answer: "Ketma-ket 120 kalendar kungacha (silda — 180 gacha). Keyin TIEK qaror qabul qiladi." },
      { question: "Kasallik varag'i soliqqa tortiladimi?", answer: "Ha, JShShS 12% va IJPH 0,1% ushlab qolinadi. Ijtimoiy soliq hisoblanmaydi." },
      { question: "Bolaga qarov uchun kasallik varag'i qanday to'lanadi?", answer: "14 yoshgacha bolaga 14 kalendar kungacha, nogiron bolaga 30 kungacha." },
    ],
  },

  {
    slug: 'maternity',
    lastUpdated: '2025-09-12',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Отпуск по беременности и родам в Узбекистане составляет 126 календарных дней: 70 дней до родов и 56 после. При осложнённых родах или многоплодной беременности послеродовая часть увеличивается до 70 дней (итого 140 дней). Пособие по беременности и родам выплачивается в размере 100% среднего заработка независимо от стажа работы. Пособие полностью финансируется из средств фонда социального страхования.',
      'Пособие по уходу за ребёнком до 2 лет составляет 50% от среднемесячного заработка, но не менее 50% минимальной заработной платы (635 500 сум). Отпуск по уходу до 2 лет предоставляется с сохранением рабочего места, до 3 лет — без сохранения, но с правом вернуться на прежнюю должность. Отпуск может взять не только мать, но и отец, бабушка, дедушка или другой родственник, фактически осуществляющий уход.',
      'Единовременное пособие при рождении ребёнка выплачивается из средств работодателя: на первого ребёнка — 2 БРВ (824 000 сум), на второго — 3 БРВ (1 236 000 сум), на третьего и последующих — 4 БРВ (1 648 000 сум). Дополнительно государство выплачивает ежемесячное пособие семьям с детьми до 2 лет через систему социальной защиты — размер зависит от дохода семьи и количества детей.',
      'Декретное пособие не облагается НДФЛ и социальным налогом. Средний заработок для расчёта определяется за последние 12 месяцев, предшествующих месяцу ухода в декрет. Если женщина работала менее 12 месяцев, берётся фактический период. При совмещении нескольких мест работы пособие рассчитывается по каждому месту отдельно.',
      'Пример расчёта декретного пособия: средний заработок 15 000 000 сум/мес, среднедневной ≈ 500 000 сум. Пособие по беременности и родам = 500 000 × 126 = 63 000 000 сум (налогом не облагается). Пособие по уходу до 2 лет = 15 000 000 × 50% = 7 500 000 сум/мес (24 месяца = 180 000 000 сум). Единовременное (1-й ребёнок) = 824 000 сум. Итого за весь период: ~244 млн сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda homiladorlik va tug'ish ta'tili 126 kalendar kun: tug'ishdan 70 kun oldin va 56 kun keyin. Asoratli tug'ish yoki ko'p homilada tug'ishdan keyingi qism 70 kungacha oshiriladi (jami 140 kun). Homiladorlik va tug'ish nafaqasi ish stajidan qat'i nazar o'rtacha ish haqining 100% miqdorida to'lanadi. Nafaqa to'liq ijtimoiy sug'urta fondi mablag'laridan moliyalashtiriladi.",
      "2 yoshgacha bolaga qarashuv nafaqasi o'rtacha oylik ish haqining 50% ni tashkil etadi, lekin minimal ish haqining 50% (635 500 so'm) dan kam emas. 2 yilgacha qarashuv ta'tili ish joyini saqlash bilan, 3 yilgacha — saqlashsiz, lekin avvalgi lavozimga qaytish huquqi bilan beriladi. Ta'tilni nafaqat ona, balki ota, buvi, bobo yoki bolaga haqiqatda qarayotgan boshqa qarindosh ham olishi mumkin.",
      "Bola tug'ilganda bir martalik nafaqa ish beruvchi mablag'laridan to'lanadi: birinchi bolaga — 2 BHK (824 000 so'm), ikkinchiga — 3 BHK (1 236 000 so'm), uchinchi va keyingilarga — 4 BHK (1 648 000 so'm). Qo'shimcha ravishda davlat ijtimoiy himoya tizimi orqali 2 yoshgacha bolali oilalarga oylik nafaqa to'laydi — miqdori oila daromadi va bolalar soniga bog'liq.",
      "Dekret nafaqasi JShShS va ijtimoiy soliqqa tortilmaydi. Hisoblash uchun o'rtacha ish haqi dekretga chiqqan oydan oldingi oxirgi 12 oy uchun aniqlanadi. Agar ayol 12 oydan kam ishlagan bo'lsa, haqiqiy davr olinadi. Bir nechta ish joyini qo'shib olib borsangiz, nafaqa har bir ish joyi bo'yicha alohida hisoblanadi.",
      "Dekret nafaqasini hisoblash misoli: o'rtacha ish haqi 15 000 000 so'm/oy, o'rtacha kunlik ≈ 500 000 so'm. Homiladorlik va tug'ish nafaqasi = 500 000 × 126 = 63 000 000 so'm (soliqqa tortilmaydi). 2 yilgacha qarashuv nafaqasi = 15 000 000 × 50% = 7 500 000 so'm/oy (24 oy = 180 000 000 so'm). Bir martalik (1-bola) = 824 000 so'm. Butun davr uchun jami: ~244 mln so'm.",
    ],
    faqRu: [
      { question: 'Сколько длится декретный отпуск?', answer: '126 дней (70 до + 56 после родов). При осложнениях: 140 дней (70 + 70).' },
      { question: 'Какое пособие по уходу за ребёнком?', answer: '50% от среднего заработка до 2 лет. Минимум — 50% МЗП (635 500 сум).' },
      { question: 'Какое единовременное пособие при рождении?', answer: '1-й ребёнок: 2 БРВ (824 000), 2-й: 3 БРВ (1 236 000), 3-й+: 4 БРВ (1 648 000 сум).' },
      { question: 'Облагается ли декретное пособие налогом?', answer: 'Нет, пособие по беременности и родам не облагается НДФЛ и социальным налогом.' },
      { question: 'Может ли отец взять отпуск по уходу?', answer: 'Да, отпуск по уходу за ребёнком может взять отец, бабушка, дедушка или другой родственник.' },
    ],
    faqUz: [
      { question: "Dekret ta'tili qancha davom etadi?", answer: "126 kun (tug'ishdan oldin 70 + keyin 56). Asoratlarda: 140 kun (70 + 70)." },
      { question: "Bolaga qarashuv nafaqasi qancha?", answer: "2 yilgacha o'rtacha ish haqining 50%. Minimum — MIHning 50% (635 500 so'm)." },
      { question: "Tug'ilganda bir martalik nafaqa qancha?", answer: "1-bola: 2 BHK (824 000), 2-bola: 3 BHK (1 236 000), 3+: 4 BHK (1 648 000 so'm)." },
      { question: "Dekret nafaqasi soliqqa tortiladimi?", answer: "Yo'q, homiladorlik va tug'ish nafaqasi JShShS va ijtimoiy soliqqa tortilmaydi." },
      { question: "Ota bolaga qarashuv ta'tilini olishi mumkinmi?", answer: "Ha, bolaga qarashuv ta'tilini ota, buvi, bobo yoki boshqa qarindosh olishi mumkin." },
    ],
  },

  {
    slug: 'severance',
    lastUpdated: '2025-09-28',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Выходное пособие при увольнении в Узбекистане зависит от основания увольнения. При сокращении штата работнику выплачивается не менее одного среднемесячного заработка. При ликвидации организации — среднемесячный заработок плюс сохранение заработной платы на период трудоустройства до 2 месяцев (до 3 месяцев при регистрации в службе занятости в течение 10 дней после увольнения). Минимальная заработная плата в Узбекистане с 2025 года составляет 1 271 000 сум.',
      'Компенсация за неиспользованный отпуск выплачивается при увольнении по любому основанию. Базовый трудовой отпуск в Узбекистане — 15 рабочих дней (для отдельных категорий — до 30 дней). Расчёт: средний дневной заработок × количество неиспользованных дней. Средний дневной заработок определяется за последние 3 месяца работы. Если отпуск использован авансом — сумма удерживается при расчёте.',
      'При увольнении по собственному желанию выходное пособие не выплачивается — работник получает только компенсацию за неиспользованный отпуск и зарплату за отработанные дни. При увольнении по соглашению сторон — размер выплат определяется договорённостью и фиксируется в письменном соглашении. Судебная практика в Узбекистане признаёт такие соглашения обязательными для исполнения.',
      'Все выплаты при увольнении производятся в последний рабочий день. За задержку расчёта работодатель выплачивает компенсацию в размере среднего заработка за каждый день просрочки. Компенсация за неиспользованный отпуск облагается НДФЛ 12%, но не облагается социальным налогом. Выходное пособие при сокращении также облагается НДФЛ, за исключением сумм, не превышающих 4,22 БРВ (1 738 640 сум).',
      'Пример расчёта при сокращении: зарплата 10 000 000 сум/мес, неиспользованный отпуск 10 дней. Выходное пособие: 10 000 000 сум. Компенсация за отпуск: (10 000 000 / 21,7) × 10 = 4 608 295 сум. Зарплата за отработанные дни (15 дней): 6 912 442 сум. Итого начислено: 21 520 737 сум. Минус НДФЛ 12%: чистая выплата ≈ 18 938 249 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda ishdan bo'shatishda chiqish nafaqasi ishdan bo'shatish asosiga bog'liq. Shtatni qisqartirishda xodimga kamida bitta o'rtacha oylik ish haqi to'lanadi. Tashkilotni tugatishda — o'rtacha oylik ish haqi hamda ish topish davri uchun 2 oygacha (ishdan bo'shatilgandan keyin 10 kun ichida bandlik xizmatiga ro'yxatdan o'tganda 3 oygacha) ish haqi saqlanadi. 2025-yildan O'zbekistonda minimal ish haqi 1 271 000 so'm.",
      "Foydalanilmagan ta'til uchun kompensatsiya har qanday asosda ishdan bo'shatishda to'lanadi. O'zbekistonda asosiy mehnat ta'tili — 15 ish kuni (ayrim toifalar uchun — 30 kungacha). Hisob: o'rtacha kunlik ish haqi × foydalanilmagan kunlar soni. O'rtacha kunlik ish haqi oxirgi 3 oy uchun aniqlanadi. Ta'til avans bilan ishlatilgan bo'lsa — hisob-kitobda ushlab qolinadi.",
      "O'z xohishi bilan ishdan bo'shaganda chiqish nafaqasi to'lanmaydi — xodim faqat foydalanilmagan ta'til kompensatsiyasi va ishlagan kunlar uchun ish haqini oladi. Tomonlar kelishuvi bo'yicha ishdan bo'shatishda — to'lovlar miqdori kelishuv bilan aniqlanadi va yozma kelishuvda belgilanadi. O'zbekistondagi sud amaliyoti bunday kelishuvlarni bajarish uchun majburiy deb tan oladi.",
      "Ishdan bo'shatishdagi barcha to'lovlar oxirgi ish kunida amalga oshiriladi. Hisob-kitobni kechiktirganlik uchun ish beruvchi har kechiktirilgan kun uchun o'rtacha ish haqi miqdorida kompensatsiya to'laydi. Foydalanilmagan ta'til kompensatsiyasi JShShS 12% ga tortiladi, lekin ijtimoiy soliqqa tortilmaydi. Qisqartirish vaqtidagi chiqish nafaqasi ham 4,22 BHK (1 738 640 so'm) dan oshgan summada JShShSga tortiladi.",
      "Qisqartirishda hisoblash misoli: ish haqi 10 000 000 so'm/oy, foydalanilmagan ta'til 10 kun. Chiqish nafaqasi: 10 000 000 so'm. Ta'til kompensatsiyasi: (10 000 000 / 21,7) × 10 = 4 608 295 so'm. Ishlangan kunlar uchun ish haqi (15 kun): 6 912 442 so'm. Jami hisoblangan: 21 520 737 so'm. Minus JShShS 12%: sof to'lov ≈ 18 938 249 so'm.",
    ],
    faqRu: [
      { question: 'Положено ли выходное пособие при увольнении?', answer: 'При сокращении/ликвидации — да (от 1 среднемесячного заработка). По собственному желанию — нет (только компенсация за отпуск).' },
      { question: 'Как рассчитать компенсацию за неиспользованный отпуск?', answer: 'Средний дневной заработок (за 3 мес.) × количество неиспользованных дней отпуска.' },
      { question: 'Какие выплаты при сокращении?', answer: 'Выходное пособие (≥1 среднемесячный) + компенсация за отпуск + сохранение зарплаты на трудоустройство (до 2-3 мес.).' },
      { question: 'В какой срок должны рассчитать при увольнении?', answer: 'В последний рабочий день. За каждый день просрочки — компенсация в размере среднего заработка.' },
      { question: 'Облагаются ли выплаты при увольнении налогом?', answer: 'Компенсация за отпуск — НДФЛ 12%. Выходное пособие — НДФЛ с суммы свыше 4,22 БРВ (1 738 640 сум).' },
    ],
    faqUz: [
      { question: "Ishdan bo'shatishda chiqish nafaqasi beriladimi?", answer: "Qisqartirish/tugatishda — ha (kamida 1 o'rtacha oylik). O'z xohishi bilan — yo'q (faqat ta'til kompensatsiyasi)." },
      { question: "Foydalanilmagan ta'til kompensatsiyasini qanday hisoblash mumkin?", answer: "O'rtacha kunlik ish haqi (3 oy uchun) × foydalanilmagan kunlar soni." },
      { question: "Qisqartirish vaqtida qanday to'lovlar bor?", answer: "Chiqish nafaqasi (≥1 o'rtacha oylik) + ta'til kompensatsiyasi + ish topish davri uchun ish haqi (2-3 oygacha)." },
      { question: "Ishdan bo'shatishda qancha muddatda hisob-kitob qilishlari kerak?", answer: "Oxirgi ish kunida. Har kechiktirilgan kun uchun o'rtacha ish haqi miqdorida kompensatsiya." },
      { question: "Ishdan bo'shatish to'lovlari soliqqa tortiladimi?", answer: "Ta'til kompensatsiyasi — JShShS 12%. Chiqish nafaqasi — 4,22 BHK (1 738 640 so'm) dan ortiq summadan JShShS." },
    ],
  },

  {
    slug: 'alimony',
    lastUpdated: '2025-10-20',
    sources: [
      { name: 'Семейный кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Судебная практика', url: 'https://sud.uz' },
    ],
    paragraphsRu: [
      'Алименты в Узбекистане устанавливаются в долях от дохода плательщика: на 1 ребёнка — 25% (1/4 дохода), на 2 детей — 33% (1/3), на 3 и более детей — 50% (1/2). По решению суда алименты могут быть назначены в фиксированной сумме, если доход плательщика нерегулярный, выплачивается в валюте или в натуральной форме. Минимальный размер алиментов не может быть ниже 50% минимальной заработной платы на одного ребёнка (635 500 сум в 2025 году).',
      'Алименты удерживаются из всех видов дохода: заработная плата, премии и надбавки, доход от предпринимательской деятельности, пенсия, стипендия, доход от сдачи имущества в аренду, дивиденды. Не подлежат удержанию: командировочные расходы, материальная помощь при рождении ребёнка, компенсации при увольнении, пособие на погребение, страховые выплаты. Удержание производится после вычета НДФЛ 12%.',
      'Алименты на стороне получателя не облагаются НДФЛ — это полностью не облагаемый доход. Удержание алиментов осуществляется бухгалтерией работодателя плательщика на основании исполнительного листа или нотариального соглашения. Работодатель обязан перечислить алименты в течение 3 дней после выплаты зарплаты. За задержку перечисления алиментов работодатель несёт ответственность.',
      'Соглашение об алиментах может быть заключено добровольно у нотариуса — это быстрее и дешевле судебного порядка. Соглашение имеет силу исполнительного документа. В нём можно предусмотреть индексацию алиментов, порядок выплат и дополнительные условия. Алименты взыскиваются до достижения ребёнком 18 лет, а для учащихся дневной формы — до 21 года.',
      'Пример расчёта: доход плательщика 10 000 000 сум/мес (до НДФЛ). После НДФЛ: 10 000 000 − 1 200 000 = 8 800 000 сум. Алименты на 2 детей: 8 800 000 × 1/3 = 2 933 333 сум. На руки плательщику: 5 866 667 сум. Получатель алиментов: 2 933 333 сум (налогом не облагается). Наш калькулятор учтёт НДФЛ и покажет точные суммы для плательщика и получателя.',
    ],
    paragraphsUz: [
      "O'zbekistonda nafaqa to'lovchining daromadidan ulushlar sifatida belgilanadi: 1 bolaga — 25% (1/4), 2 bolaga — 33% (1/3), 3 va undan ko'p bolaga — 50% (1/2). Sud qarori bilan nafaqa qat'iy summada tayinlanishi mumkin, agar to'lovchining daromadi muntazam emas, valyutada yoki natural shaklda to'lanadi. Minimal nafaqa miqdori bir bolaga minimal ish haqining 50% (2025-yilda 635 500 so'm) dan kam bo'lishi mumkin emas.",
      "Nafaqa barcha turdagi daromadlardan ushlab qolinadi: ish haqi, mukofotlar va ustamalar, tadbirkorlik faoliyatidan daromad, pensiya, stipendiya, mol-mulk ijarasidan daromad, dividendlar. Ushlab qolinmaydi: xizmat safari xarajatlari, bola tug'ilishida moddiy yordam, ishdan bo'shatish kompensatsiyasi, dafn to'lovi, sug'urta to'lovlari. Ushlash JShShS 12% chegirilgandan keyin amalga oshiriladi.",
      "Nafaqa oluvchi tomonida JShShSga tortilmaydi — bu to'liq soliqqa tortilmaydigan daromad. Nafaqani ushlash to'lovchining ish beruvchisi buxgalteriyasi tomonidan ijro varag'i yoki notarial kelishuv asosida amalga oshiriladi. Ish beruvchi ish haqi to'langandan keyin 3 kun ichida nafaqani o'tkazishi shart. Nafaqani kechiktirganlik uchun ish beruvchi javobgarlikka tortiladi.",
      "Nafaqa to'g'risida kelishuv notariusda ixtiyoriy tuzilishi mumkin — bu sud tartibidan tezroq va arzonroq. Kelishuv ijro hujjati kuchiga ega. Unda nafaqani indeksatsiya qilish, to'lov tartibini va qo'shimcha shartlarni nazarda tutish mumkin. Nafaqa bola 18 yoshga to'lguncha undiriladi, kunduzgi ta'lim oluvchilar uchun esa — 21 yoshgacha.",
      "Hisoblash misoli: to'lovchining daromadi 10 000 000 so'm/oy (JShShSdan oldin). JShShSdan keyin: 10 000 000 − 1 200 000 = 8 800 000 so'm. 2 bolaga nafaqa: 8 800 000 × 1/3 = 2 933 333 so'm. To'lovchiga qo'lga: 5 866 667 so'm. Nafaqa oluvchi: 2 933 333 so'm (soliqqa tortilmaydi). Kalkulyatorimiz JShShSni hisobga oladi va to'lovchi va oluvchi uchun aniq summalarni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Какой процент алиментов на ребёнка?', answer: '1 ребёнок — 25%, 2 — 33%, 3+ — 50% от дохода после вычета НДФЛ.' },
      { question: 'С каких доходов удерживаются алименты?', answer: 'Со всех: зарплата, премии, доход ИП, пенсия, стипендия, аренда, дивиденды.' },
      { question: 'Облагаются ли алименты налогом?', answer: 'Нет, алименты не облагаются НДФЛ у получателя. Плательщик платит НДФЛ до удержания алиментов.' },
      { question: 'Какой минимальный размер алиментов?', answer: 'Не менее 50% МЗП (635 500 сум в 2025) на одного ребёнка.' },
      { question: 'До какого возраста платят алименты?', answer: 'До 18 лет. Для учащихся на дневной форме обучения — до 21 года.' },
    ],
    faqUz: [
      { question: "Bolaga nafaqa necha foiz?", answer: "1 bola — 25%, 2 — 33%, 3+ — JShShS chegirilgandan keyingi daromadning 50%." },
      { question: "Qanday daromadlardan nafaqa ushlab qolinadi?", answer: "Barchasidan: ish haqi, mukofotlar, YaTT daromadi, pensiya, stipendiya, ijara, dividendlar." },
      { question: "Nafaqa soliqqa tortiladimi?", answer: "Yo'q, nafaqa oluvchi tomonida JShShSga tortilmaydi. To'lovchi nafaqa ushlanishidan oldin JShShS to'laydi." },
      { question: "Minimal nafaqa miqdori qancha?", answer: "Bir bolaga MIHning 50% (2025-yilda 635 500 so'm) dan kam emas." },
      { question: "Necha yoshgacha nafaqa to'lanadi?", answer: "18 yoshgacha. Kunduzgi ta'lim oluvchilar uchun — 21 yoshgacha." },
    ],
  },

  {
    slug: 'overtime',
    lastUpdated: '2025-09-15',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Сверхурочная работа в Узбекистане оплачивается в повышенном размере: первые 2 часа — в 1,5-кратном, каждый последующий час — в 2-кратном размере от обычной часовой ставки. Работа в выходные и праздничные дни оплачивается в 2-кратном размере или компенсируется предоставлением другого дня отдыха (по выбору работника). Стандартная продолжительность рабочей недели в Узбекистане — 40 часов (5 дней по 8 часов).',
      'Максимальная продолжительность сверхурочных работ строго ограничена Трудовым кодексом: не более 4 часов за 2 дня подряд и не более 120 часов в год. Привлечение к сверхурочной работе допускается только с письменного согласия работника. Запрещено привлекать: беременных женщин, работников до 18 лет, инвалидов (без их письменного согласия и медицинского заключения об отсутствии противопоказаний).',
      'Часовая ставка для расчёта определяется: для повременной оплаты — делением оклада на количество рабочих часов в месяце (обычно 168 часов); для сдельной — средняя дневная выработка делится на 8 часов. Ночная работа (с 22:00 до 06:00) оплачивается с доплатой не менее 50% от часовой ставки. При совпадении сверхурочных с ночным временем применяются обе надбавки одновременно.',
      'Оплата сверхурочных облагается НДФЛ 12% и социальным налогом на общих основаниях — льгот по налогообложению нет. Работодатель обязан вести точный учёт сверхурочных часов каждого работника. За нарушение норм о продолжительности сверхурочных работ предусмотрены административные штрафы для должностных лиц — от 5 до 10 БРВ (2 060 000 — 4 120 000 сум).',
      'Пример расчёта: оклад 10 000 000 сум/мес, 168 рабочих часов. Часовая ставка = 59 524 сум. 4 часа сверхурочных: 2ч × 89 286 (×1,5) + 2ч × 119 048 (×2) = 416 668 сум (вместо 238 096 при обычной ставке). Доплата: 178 572 сум. Работа в выходной (8 часов): 8 × 119 048 = 952 384 сум. Наш калькулятор рассчитает оплату с учётом всех надбавок и налогов.',
    ],
    paragraphsUz: [
      "O'zbekistonda ortiqcha ish oshirilgan miqdorda to'lanadi: dastlabki 2 soat — oddiy soatlik stavkadan 1,5 baravarda, har keyingi soat — 2 baravarda. Dam olish va bayram kunlaridagi ish 2 baravarda to'lanadi yoki boshqa dam olish kuni bilan qoplanadi (xodimning tanloviga ko'ra). O'zbekistonda standart ish haftasi — 40 soat (5 kun 8 soatdan).",
      "Ortiqcha ishning maksimal davomiyligi Mehnat kodeksi bilan qat'iy cheklangan: ketma-ket 2 kun uchun 4 soatdan ko'p emas va yiliga 120 soatdan ko'p emas. Ortiqcha ishga jalb qilish faqat xodimning yozma roziligi bilan ruxsat etiladi. Taqiqlangan: homilador ayollar, 18 yoshgacha xodimlar, nogironlar (ularning yozma roziligi va tibbiy xulosasiz).",
      "Hisoblash uchun soatlik stavka aniqlanadi: vaqtbay to'lovda — okladni oydagi ish soatlari soniga bo'lish (odatda 168 soat); ishbayda — o'rtacha kunlik ishlab chiqarishni 8 soatga bo'lish. Tungi ish (22:00 dan 06:00 gacha) soatlik stavkaning kamida 50% ustama bilan to'lanadi. Ortiqcha ish tungi vaqtga to'g'ri kelganda ikkala ustama bir vaqtda qo'llaniladi.",
      "Ortiqcha ish to'lovi JShShS 12% va ijtimoiy soliqqa umumiy asoslarda tortiladi — soliq bo'yicha imtiyozlar yo'q. Ish beruvchi har bir xodimning ortiqcha ish soatlarining aniq hisobini yuritishi shart. Ortiqcha ish davomiyligi normalari buzilganligi uchun mansabdor shaxslarga ma'muriy jarimalar nazarda tutilgan — 5 dan 10 BHKgacha (2 060 000 — 4 120 000 so'm).",
      "Hisoblash misoli: oklad 10 000 000 so'm/oy, 168 ish soati. Soatlik stavka = 59 524 so'm. 4 soat ortiqcha ish: 2s × 89 286 (×1,5) + 2s × 119 048 (×2) = 416 668 so'm (oddiy stavkada 238 096 o'rniga). Ustama: 178 572 so'm. Dam olish kunida ish (8 soat): 8 × 119 048 = 952 384 so'm. Kalkulyatorimiz barcha ustamalar va soliqlarni hisobga olgan holda to'lovni hisoblaydi.",
    ],
    faqRu: [
      { question: 'Как оплачивается сверхурочная работа?', answer: 'Первые 2 часа — ×1,5, далее — ×2 от часовой ставки. В выходные/праздники — ×2 или отгул.' },
      { question: 'Сколько часов можно работать сверхурочно?', answer: 'До 4 часов за 2 дня подряд, до 120 часов в год. Только с письменного согласия работника.' },
      { question: 'Кого нельзя привлекать к сверхурочным?', answer: 'Беременных, несовершеннолетних (до 18), инвалидов (без их согласия и медзаключения).' },
      { question: 'Как оплачивается работа в ночное время?', answer: 'С доплатой не менее 50% от часовой ставки. Ночное время: с 22:00 до 06:00.' },
      { question: 'Облагаются ли сверхурочные налогом?', answer: 'Да, НДФЛ 12% и социальный налог на общих основаниях. Льгот нет.' },
    ],
    faqUz: [
      { question: "Ortiqcha ish qanday to'lanadi?", answer: "Dastlabki 2 soat — soatlik stavkadan ×1,5, keyin — ×2. Dam olish/bayramlarda — ×2 yoki qo'shimcha dam." },
      { question: "Necha soat ortiqcha ishlash mumkin?", answer: "Ketma-ket 2 kun uchun 4 soatgacha, yiliga 120 soatgacha. Faqat xodimning yozma roziligi bilan." },
      { question: "Kimni ortiqcha ishga jalb qilib bo'lmaydi?", answer: "Homiladorlar, 18 yoshgacha yoshlar, nogironlar (ularning roziligi va tibbiy xulosasisiz)." },
      { question: "Tungi ish qanday to'lanadi?", answer: "Soatlik stavkaning kamida 50% ustamasi bilan. Tungi vaqt: 22:00 dan 06:00 gacha." },
      { question: "Ortiqcha ish soliqqa tortiladimi?", answer: "Ha, JShShS 12% va ijtimoiy soliq umumiy asoslarda. Imtiyozlar yo'q." },
    ],
  },

  {
    slug: 'pension',
    lastUpdated: '2025-10-15',
    sources: [
      { name: 'Закон о пенсионном обеспечении', url: 'https://lex.uz' },
      { name: 'Пенсионный фонд РУз', url: 'https://pfru.uz' },
    ],
    paragraphsRu: [
      'Пенсионный возраст в Узбекистане: мужчины — 60 лет, женщины — 55 лет. Для получения полной пенсии по возрасту необходим минимальный трудовой стаж: 25 лет для мужчин и 20 лет для женщин. При недостаточном стаже (но не менее 7 лет) назначается пенсия в пропорциональном размере. Минимальная пенсия в 2025 году составляет около 1 БРВ (412 000 сум).',
      'Формула расчёта пенсии: Пенсия = Средний заработок за лучшие 5 последовательных лет × (55% + 1% за каждый год стажа сверх минимального). Максимальный размер — 75% от среднего заработка. При стаже 25 лет: 55% + 0% = 55%. При стаже 35 лет: 55% + 10% = 65%. При стаже 45 лет: 55% + 20% = 75% (максимум). Средний заработок индексируется с учётом роста минимальной зарплаты.',
      'С 2023 года в Узбекистане действует накопительная пенсионная система — индивидуальный накопительный пенсионный счёт (ИНПС). Обязательный взнос составляет 0,1% от начисленной заработной платы и удерживается работодателем. Накопления являются личной собственностью работника, наследуются и не подлежат изъятию. При выходе на пенсию накопленная сумма выплачивается единовременно или в рассрочку по выбору пенсионера.',
      'Досрочная пенсия предусмотрена для ряда категорий: работники вредных производств (списки 1 и 2), педагоги (при стаже 25 лет), медработники (при стаже 25-30 лет), многодетные матери (5+ детей — с 50 лет). Военнослужащие и сотрудники силовых структур выходят на пенсию по выслуге лет (20 лет). Пенсии индексируются ежегодно в соответствии с ростом прожиточного минимума.',
      'Пример расчёта: мужчина, стаж 30 лет, средний заработок за лучшие 5 лет — 8 000 000 сум/мес. Пенсия = 8 000 000 × (55% + 5%) = 8 000 000 × 60% = 4 800 000 сум/мес. С учётом индексации и ИНПС фактическая пенсия может быть выше. Наш калькулятор рассчитает вашу будущую пенсию по введённым данным о стаже, заработке и возрасте.',
    ],
    paragraphsUz: [
      "O'zbekistonda pensiya yoshi: erkaklar — 60 yosh, ayollar — 55 yosh. Yoshi bo'yicha to'liq pensiya olish uchun minimal ish staji zarur: erkaklar uchun 25 yil va ayollar uchun 20 yil. Staj yetarli bo'lmaganda (lekin 7 yildan kam bo'lmasa) mutanosib miqdorda pensiya tayinlanadi. 2025-yilda minimal pensiya taxminan 1 BHK (412 000 so'm) ni tashkil etadi.",
      "Pensiya hisoblash formulasi: Pensiya = Eng yaxshi ketma-ket 5 yildagi o'rtacha ish haqi × (55% + minimaldan ortiq har yil staj uchun 1%). Maksimal miqdor — o'rtacha ish haqining 75%. 25 yil stajda: 55% + 0% = 55%. 35 yil stajda: 55% + 10% = 65%. 45 yil stajda: 55% + 20% = 75% (maksimum). O'rtacha ish haqi minimal ish haqi o'sishini hisobga olgan holda indeksatsiya qilinadi.",
      "2023-yildan O'zbekistonda jamg'arma pensiya tizimi — individual jamg'arma pensiya hisobvarag'i (IJPH) amal qilmoqda. Majburiy to'lov hisoblangan ish haqining 0,1% ni tashkil etadi va ish beruvchi tomonidan ushlab qolinadi. Jamg'armalar xodimning shaxsiy mulki, meros qilib qoldiriladi va tortib olinishi mumkin emas. Pensiyaga chiqqanda yig'ilgan summa pensionerning tanloviga ko'ra bir martalik yoki bo'lib to'lanadi.",
      "Bir qator toifalar uchun muddatidan oldingi pensiya nazarda tutilgan: zararli ishlab chiqarish xodimlari (1 va 2-ro'yxatlar), pedagoglar (25 yil stajda), tibbiyot xodimlari (25-30 yil stajda), ko'p bolali onalar (5+ bola — 50 yoshdan). Harbiylar va kuch tuzilmalari xodimlari xizmat muddati bo'yicha (20 yil) pensiyaga chiqadilar. Pensiyalar har yili yashash minimumi o'sishiga muvofiq indeksatsiya qilinadi.",
      "Hisoblash misoli: erkak, staj 30 yil, eng yaxshi 5 yildagi o'rtacha ish haqi — 8 000 000 so'm/oy. Pensiya = 8 000 000 × (55% + 5%) = 8 000 000 × 60% = 4 800 000 so'm/oy. Indeksatsiya va IJPHni hisobga olsak, haqiqiy pensiya yuqoriroq bo'lishi mumkin. Kalkulyatorimiz staj, ish haqi va yosh haqidagi kiritilgan ma'lumotlar bo'yicha kelajakdagi pensiyangizni hisoblaydi.",
    ],
    faqRu: [
      { question: 'Какой пенсионный возраст в Узбекистане?', answer: 'Мужчины — 60 лет, женщины — 55 лет. Есть категории с правом на досрочную пенсию.' },
      { question: 'Какая минимальная пенсия?', answer: 'Около 1 БРВ (412 000 сум). Конкретный размер зависит от стажа и среднего заработка.' },
      { question: 'Что такое ИНПС?', answer: 'Индивидуальный накопительный пенсионный счёт. Взнос 0,1% от зарплаты. Личная собственность, наследуется.' },
      { question: 'Какой стаж нужен для полной пенсии?', answer: 'Мужчины — 25 лет, женщины — 20 лет. При меньшем стаже (от 7 лет) — пропорциональная пенсия.' },
      { question: 'Кто имеет право на досрочную пенсию?', answer: 'Работники вредных производств, педагоги (25 лет стажа), медработники (25-30 лет), многодетные матери (5+ детей — с 50 лет).' },
    ],
    faqUz: [
      { question: "O'zbekistonda pensiya yoshi necha?", answer: "Erkaklar — 60 yosh, ayollar — 55 yosh. Muddatidan oldingi pensiya huquqiga ega toifalar bor." },
      { question: "Minimal pensiya qancha?", answer: "Taxminan 1 BHK (412 000 so'm). Aniq miqdor staj va o'rtacha ish haqiga bog'liq." },
      { question: "IJPH nima?", answer: "Individual jamg'arma pensiya hisobvarag'i. To'lov ish haqining 0,1%. Shaxsiy mulk, meros qilib qoldiriladi." },
      { question: "To'liq pensiya uchun qancha staj kerak?", answer: "Erkaklar — 25 yil, ayollar — 20 yil. Kam stajda (7 yildan) — mutanosib pensiya." },
      { question: "Kim muddatidan oldingi pensiyaga haqli?", answer: "Zararli ishlab chiqarish xodimlari, pedagoglar (25 yil staj), tibbiyot xodimlari (25-30 yil), ko'p bolali onalar (5+ bola — 50 yoshdan)." },
    ],
  },

  {
    slug: 'installment',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор рассрочки рассчитывает ежемесячный платёж при покупке товара в рассрочку. В отличие от кредита, рассрочка обычно предоставляется без процентов (0%) — переплата отсутствует. Однако цена товара в рассрочку может отличаться от цены за наличные.',
      'Формула: Ежемесячный платёж = (Цена − Первоначальный взнос) / Количество месяцев. Пример: телефон 8 000 000 сум, взнос 0%, рассрочка 12 месяцев. Платёж = 8 000 000 / 12 = 666 667 сум/мес.',
      'Рассрочку предлагают магазины электроники, мебели, одежды через банковские карты (Uzum, Click). Сроки: обычно 3, 6, 12, 18, 24 месяца.',
    ],
    paragraphsUz: [
      "Bo'lib to'lash kalkulyatori tovarni bo'lib to'lashda oylik to'lovni hisoblaydi. Kreditdan farqli, bo'lib to'lash odatda foizsiz (0%) — ortiqcha to'lov yo'q. Lekin bo'lib to'lashdagi tovar narxi naqd narxdan farq qilishi mumkin.",
      "Formula: Oylik to'lov = (Narx − Boshlang'ich to'lov) / Oylar soni. Misol: telefon 8 000 000 so'm, to'lov 0%, 12 oyga. To'lov = 8 000 000 / 12 = 666 667 so'm/oy.",
      "Bo'lib to'lashni elektronika, mebel, kiyim do'konlari bank kartalari (Uzum, Click) orqali taklif etadi. Muddatlar: odatda 3, 6, 12, 18, 24 oy.",
    ],
    faqRu: [
      { question: 'Есть ли переплата при рассрочке?', answer: 'При 0% рассрочке — нет. Но цена товара может отличаться от наличной.' },
      { question: 'Чем рассрочка отличается от кредита?', answer: 'Рассрочка — 0% (магазин компенсирует банку), кредит — с процентами.' },
      { question: 'Какие сроки рассрочки?', answer: 'Обычно 3, 6, 12, 18 или 24 месяца через Uzum, Click и др.' },
    ],
    faqUz: [
      { question: "Bo'lib to'lashda ortiqcha to'lov bormi?", answer: "0% bo'lib to'lashda — yo'q. Lekin tovar narxi naqd narxdan farq qilishi mumkin." },
      { question: "Bo'lib to'lash kreditdan nimasi bilan farq qiladi?", answer: "Bo'lib to'lash — 0% (do'kon bankka kompensatsiya beradi), kredit — foiz bilan." },
      { question: "Bo'lib to'lash muddatlari qanday?", answer: "Odatda Uzum, Click va boshqalar orqali 3, 6, 12, 18 yoki 24 oy." },
    ],
  },

  {
    slug: 'early-repayment',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Закон о банковской деятельности', url: 'https://lex.uz/docs/5765051' }],
    paragraphsRu: [
      'Калькулятор досрочного погашения кредита показывает, сколько вы сэкономите на процентах при частичном или полном досрочном погашении. С 2020 года в Узбекистане досрочное погашение разрешено без штрафов.',
      'Два варианта после частичного погашения: уменьшение ежемесячного платежа (срок сохраняется) или сокращение срока кредита (платёж сохраняется). Сокращение срока выгоднее по общей переплате.',
      'Пример: кредит 100 млн сум, 22% годовых, 5 лет. Через 1 год вносите 20 млн досрочно. Экономия при сокращении срока: ~12 млн сум процентов. При уменьшении платежа: ~8 млн сум.',
    ],
    paragraphsUz: [
      "Kreditni muddatidan oldin to'lash kalkulyatori qisman yoki to'liq muddatidan oldin to'lashda foizlarda qancha tejashingizni ko'rsatadi. 2020-yildan O'zbekistonda muddatidan oldin to'lash jarimasisz ruxsat etilgan.",
      "Qisman to'lashdan keyin ikki variant: oylik to'lovni kamaytirish (muddat saqlanadi) yoki kredit muddatini qisqartirish (to'lov saqlanadi). Muddatni qisqartirish umumiy ortiqcha to'lov bo'yicha foydaliroq.",
      "Misol: 100 mln so'mlik kredit, yillik 22%, 5 yil. 1 yildan keyin 20 mln muddatidan oldin to'lovingiz. Muddat qisqartirishda tejash: ~12 mln so'm foiz. To'lov kamaytirishda: ~8 mln so'm.",
    ],
    faqRu: [
      { question: 'Можно ли досрочно погасить кредит без штрафа?', answer: 'Да, с 2020 года — без штрафов и комиссий.' },
      { question: 'Что выгоднее — сокращать срок или платёж?', answer: 'Сокращение срока экономит больше на процентах. Уменьшение платежа снижает текущую нагрузку.' },
      { question: 'Нужно ли уведомлять банк?', answer: 'Рекомендуется за 30 дней. Некоторые банки принимают досрочное погашение только в дату платежа.' },
    ],
    faqUz: [
      { question: "Kreditni jarimasisz muddatidan oldin to'lash mumkinmi?", answer: "Ha, 2020-yildan — jarimalar va komissiyalarsiz." },
      { question: "Muddatni yoki to'lovni qisqartirish foydaliroqmi?", answer: "Muddat qisqartirish foizlarda ko'proq tejaydi. To'lov kamaytirish joriy yukni kamaytiradi." },
      { question: "Bankni xabardor qilish kerakmi?", answer: "30 kun oldin tavsiya etiladi. Ba'zi banklar muddatidan oldin to'lovni faqat to'lov sanasida qabul qiladi." },
    ],
  },

  {
    slug: 'refinancing',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Центральный банк РУз', url: 'https://cbu.uz' }],
    paragraphsRu: [
      'Рефинансирование кредита — получение нового кредита по более выгодной ставке для погашения существующего. Выгодно при снижении ключевой ставки ЦБ (14% в 2025). Калькулятор покажет экономию при рефинансировании.',
      'Рефинансирование выгодно, если: разница в ставках ≥2%; оставшийся срок кредита >1 года; нет штрафов за досрочное погашение. Учтите расходы: оценка залога, комиссия нового банка, страховка.',
      'Пример: остаток кредита 80 млн, текущая ставка 24%, осталось 3 года. Рефинансирование под 18%: экономия ≈ 7 млн сум на процентах за 3 года.',
    ],
    paragraphsUz: [
      "Kreditni qayta moliyalash — mavjudini to'lash uchun foydaliroq stavkada yangi kredit olish. MB kalit stavkasi pasayganda (2025-yilda 14%) foydali. Kalkulyator qayta moliyalashdagi tejashni ko'rsatadi.",
      "Qayta moliyalash foydali: stavkalar farqi ≥2%; kreditning qolgan muddati >1 yil; muddatidan oldin to'lash uchun jarimalar yo'q. Xarajatlarni hisobga oling: garov baholash, yangi bank komissiyasi, sug'urta.",
      "Misol: kredit qoldig'i 80 mln, joriy stavka 24%, 3 yil qolgan. 18% da qayta moliyalash: 3 yilda foizlarda tejash ≈ 7 mln so'm.",
    ],
    faqRu: [
      { question: 'Когда выгодно рефинансировать?', answer: 'При разнице ставок ≥2%, остаточном сроке >1 года, отсутствии штрафов за досрочное погашение.' },
      { question: 'Какие расходы при рефинансировании?', answer: 'Оценка залога, комиссия нового банка, переоформление страховки. Суммарно 1-3% от остатка.' },
      { question: 'Можно ли рефинансировать в том же банке?', answer: 'Да, некоторые банки предлагают снижение ставки по существующему кредиту без полного рефинансирования.' },
    ],
    faqUz: [
      { question: "Qayta moliyalash qachon foydali?", answer: "Stavkalar farqi ≥2%, qolgan muddat >1 yil, muddatidan oldin to'lash jarimasisz bo'lganda." },
      { question: "Qayta moliyalashda qanday xarajatlar bor?", answer: "Garov baholash, yangi bank komissiyasi, sug'urtani qayta rasmiylashtirish. Jami qoldiqning 1-3%." },
      { question: "O'sha bankda qayta moliyalash mumkinmi?", answer: "Ha, ba'zi banklar to'liq qayta moliyalashsiz mavjud kredit stavkasini pasaytirish taklif etadi." },
    ],
  },

  {
    slug: 'compound-interest',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор сложных процентов показывает рост капитала с учётом капитализации — начисления процентов на ранее начисленные проценты. Формула: FV = PV × (1 + r/n)^(n×t), где PV — начальная сумма, r — годовая ставка, n — частота капитализации, t — срок в годах.',
      'Пример: 50 млн сум под 24% годовых на 5 лет с ежемесячной капитализацией. FV = 50 000 000 × (1 + 0,02)^60 = 163 437 388 сум. Прибыль: 113 437 388 сум. Без капитализации прибыль была бы: 60 000 000 сум.',
      'Сложные проценты — основа долгосрочного инвестирования. Чем чаще капитализация и длиннее срок, тем больше эффект.',
    ],
    paragraphsUz: [
      "Murakkab foizlar kalkulyatori avval hisoblangan foizlarga foiz hisoblash — kapitalizatsiyani hisobga olgan holda kapitalning o'sishini ko'rsatadi. Formula: FV = PV × (1 + r/n)^(n×t), bunda PV — boshlang'ich summa, r — yillik stavka, n — kapitalizatsiya chastotasi, t — yillardagi muddat.",
      "Misol: 50 mln so'm yillik 24% da 5 yilga oylik kapitalizatsiya bilan. FV = 50 000 000 × (1 + 0,02)^60 = 163 437 388 so'm. Foyda: 113 437 388 so'm. Kapitalizatsiyasiz foyda: 60 000 000 so'm bo'lardi.",
      "Murakkab foizlar — uzoq muddatli investitsiyalashning asosi. Kapitalizatsiya qanchalik tez-tez va muddat qanchalik uzoq bo'lsa, ta'sir shunchalik katta.",
    ],
    faqRu: [
      { question: 'Чем сложные проценты отличаются от простых?', answer: 'Простые: проценты только на начальную сумму. Сложные: проценты на начальную + ранее начисленные проценты.' },
      { question: 'Как капитализация влияет на доход?', answer: 'При 24% годовых за 5 лет: без капитализации — +120%, с ежемесячной — +226,9%. Разница огромна на длинном горизонте.' },
      { question: 'Как часто лучше капитализировать?', answer: 'Чем чаще, тем выгоднее. Ежемесячно лучше ежеквартально, ежедневно — ещё лучше.' },
    ],
    faqUz: [
      { question: "Murakkab foizlar oddiydan nimasi bilan farq qiladi?", answer: "Oddiy: faqat boshlang'ich summaga foiz. Murakkab: boshlang'ich + avval hisoblangan foizlarga foiz." },
      { question: "Kapitalizatsiya daromadga qanday ta'sir qiladi?", answer: "Yillik 24% da 5 yilga: kapitalizatsiyasiz — +120%, oylik bilan — +226,9%. Uzoq muddatda farq juda katta." },
      { question: "Qanchalik tez-tez kapitalizatsiya qilgan yaxshi?", answer: "Qanchalik tez-tez — shunchalik foydali. Oylik choraklikdan yaxshi, kunlik — yanada yaxshi." },
    ],
  },

  {
    slug: 'deposit-comparison',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Центральный банк РУз', url: 'https://cbu.uz' }],
    paragraphsRu: [
      'Калькулятор сравнения вкладов позволяет сопоставить условия депозитов в разных банках Узбекистана по эффективной доходности с учётом капитализации, пополнений и частичных снятий.',
      'Основные параметры для сравнения: номинальная ставка, частота капитализации, возможность пополнения, условия досрочного снятия, минимальная сумма. Ставки в 2025: 20-26% в сумах, 4-7% в валюте.',
      'Для объективного сравнения используйте эффективную ставку, а не номинальную. Вклад под 23% с ежемесячной капитализацией выгоднее вклада под 24% с выплатой в конце срока.',
    ],
    paragraphsUz: [
      "Omonatlarni solishtirish kalkulyatori O'zbekiston turli banklaridagi depozit shartlarini kapitalizatsiya, to'ldirish va qisman yechib olishni hisobga olgan holda samarali daromadlilik bo'yicha solishtirish imkonini beradi.",
      "Solishtirish uchun asosiy parametrlar: nominal stavka, kapitalizatsiya chastotasi, to'ldirish imkoniyati, muddatidan oldin yechib olish shartlari, minimal summa. 2025-yil stavkalari: so'mda 20-26%, valyutada 4-7%.",
      "Ob'ektiv solishtirish uchun nominal emas, samarali stavkani ishlating. Oylik kapitalizatsiyali 23% omonat muddat oxirida to'lovli 24% omonatdan foydaliroq.",
    ],
    faqRu: [
      { question: 'Как сравнить вклады в разных банках?', answer: 'По эффективной ставке с учётом капитализации, а не по номинальной. Наш калькулятор покажет реальный доход.' },
      { question: 'Какие ставки по вкладам в 2025?', answer: 'В сумах: 20-26% годовых. В валюте: 4-7%. Зависит от банка и срока.' },
      { question: 'Лучше ежемесячная капитализация или выплата в конце?', answer: 'Ежемесячная капитализация выгоднее: повышает эффективную ставку на 2-3%.' },
    ],
    faqUz: [
      { question: "Turli banklardagi omonatlarni qanday solishtirish mumkin?", answer: "Nominal emas, kapitalizatsiyani hisobga olgan samarali stavka bo'yicha. Kalkulyatorimiz haqiqiy daromadni ko'rsatadi." },
      { question: "2025-yilda omonat stavkalari qanday?", answer: "So'mda: yillik 20-26%. Valyutada: 4-7%. Bank va muddatga bog'liq." },
      { question: "Oylik kapitalizatsiya yoki oxirida to'lov yaxshiroqmi?", answer: "Oylik kapitalizatsiya foydaliroq: samarali stavkani 2-3% ga oshiradi." },
    ],
  },

  {
    slug: 'money-transfer',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор стоимости перевода рассчитывает итоговые расходы на перевод денег с учётом комиссий и разницы курсов. Сравнивает варианты: банковский перевод, системы переводов (WU, MoneyGram, Золотая Корона), мобильные переводы.',
      'Факторы стоимости: комиссия отправителя (0,5-3%), комиссия получателя (0-1%), разница курсов (0,5-2%). Итоговая стоимость перевода = сумма всех комиссий + потеря на курсе.',
      'Для переводов внутри Узбекистана самый дешёвый способ — мобильные приложения (Uzum, Click): комиссия 0-0,5%. Для международных — Золотая Корона (1-1,5%) или банковский SWIFT (фиксированная $15-30).',
    ],
    paragraphsUz: [
      "O'tkazma qiymati kalkulyatori komissiyalar va kurs farqini hisobga olgan holda pul o'tkazish yakuniy xarajatlarini hisoblaydi. Variantlarni solishtiradi: bank o'tkazmasi, o'tkazma tizimlari (WU, MoneyGram, Zolotaya Korona), mobil o'tkazmalar.",
      "Qiymat omillari: jo'natuvchi komissiyasi (0,5-3%), oluvchi komissiyasi (0-1%), kurs farqi (0,5-2%). O'tkazmaning yakuniy qiymati = barcha komissiyalar yig'indisi + kursdagi yo'qotish.",
      "O'zbekiston ichida eng arzon usul — mobil ilovalar (Uzum, Click): komissiya 0-0,5%. Xalqaro uchun — Zolotaya Korona (1-1,5%) yoki bank SWIFT (qat'iy $15-30).",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый перевод внутри Узбекистана?', answer: 'Мобильные приложения (Uzum, Click): комиссия 0-0,5%.' },
      { question: 'Какой самый дешёвый международный перевод?', answer: 'Золотая Корона: 1-1,5%. SWIFT: фиксированная $15-30 (выгоднее для крупных сумм).' },
      { question: 'Из чего складывается стоимость перевода?', answer: 'Комиссия отправителя + комиссия получателя + потеря на разнице курсов.' },
    ],
    faqUz: [
      { question: "O'zbekiston ichida eng arzon o'tkazma qanday?", answer: "Mobil ilovalar (Uzum, Click): komissiya 0-0,5%." },
      { question: "Eng arzon xalqaro o'tkazma qanday?", answer: "Zolotaya Korona: 1-1,5%. SWIFT: qat'iy $15-30 (yirik summalar uchun foydaliroq)." },
      { question: "O'tkazma qiymati nimalardan tashkil topadi?", answer: "Jo'natuvchi komissiyasi + oluvchi komissiyasi + kurs farqidagi yo'qotish." },
    ],
  },

  {
    slug: 'fuel-consumption',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор расхода топлива рассчитывает стоимость поездки и средний расход бензина/газа на 100 км. Цены на бензин в Узбекистане (2025): АИ-80 — 9 500 сум/л, АИ-91 — 12 500 сум/л, АИ-95 — 14 500 сум/л. Метан — 4 200 сум/м³.',
      'Формула: Расход на поездку = (Расстояние / 100) × Расход на 100 км × Цена литра. Средний расход легкового авто: 7-10 л/100 км (бензин), 6-9 м³/100 км (метан).',
      'Пример: Ташкент — Самарканд (300 км), расход 8 л/100 км, АИ-91. Расход: (300/100) × 8 × 12 500 = 300 000 сум. На метане: (300/100) × 7 × 4 200 = 88 200 сум — в 3,4 раза дешевле.',
    ],
    paragraphsUz: [
      "Yoqilg'i sarfi kalkulyatori sayohat narxini va 100 km ga benzin/gaz o'rtacha sarfini hisoblaydi. O'zbekistonda benzin narxlari (2025): AI-80 — 9 500 so'm/l, AI-91 — 12 500 so'm/l, AI-95 — 14 500 so'm/l. Metan — 4 200 so'm/m³.",
      "Formula: Sayohat sarfi = (Masofa / 100) × 100 km ga sarf × Litr narxi. Yengil avtomobilning o'rtacha sarfi: 7-10 l/100 km (benzin), 6-9 m³/100 km (metan).",
      "Misol: Toshkent — Samarqand (300 km), sarf 8 l/100 km, AI-91. Sarf: (300/100) × 8 × 12 500 = 300 000 so'm. Metanda: (300/100) × 7 × 4 200 = 88 200 so'm — 3,4 marta arzon.",
    ],
    faqRu: [
      { question: 'Сколько стоит бензин в Узбекистане?', answer: 'АИ-80: 9 500 сум/л, АИ-91: 12 500, АИ-95: 14 500 сум/л. Метан: 4 200 сум/м³.' },
      { question: 'Сколько стоит поездка Ташкент — Самарканд?', answer: 'На бензине (АИ-91): ~300 000 сум. На метане: ~88 000 сум. Расстояние 300 км.' },
      { question: 'Выгоднее ли метан?', answer: 'Да, в 3-4 раза дешевле бензина. Расходы на переоборудование (3-5 млн сум) окупаются за 6-12 месяцев.' },
    ],
    faqUz: [
      { question: "O'zbekistonda benzin qancha turadi?", answer: "AI-80: 9 500 so'm/l, AI-91: 12 500, AI-95: 14 500 so'm/l. Metan: 4 200 so'm/m³." },
      { question: "Toshkent — Samarqand sayohati qancha turadi?", answer: "Benzinda (AI-91): ~300 000 so'm. Metanda: ~88 000 so'm. Masofa 300 km." },
      { question: "Metan foydaliroqmi?", answer: "Ha, benzindan 3-4 marta arzon. Qayta jihozlash xarajatlari (3-5 mln so'm) 6-12 oyda o'zini oqlaydi." },
    ],
  },

  {
    slug: 'trip-cost',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор стоимости поездки рассчитывает общие расходы на автомобильную поездку с учётом топлива, дорожных сборов и износа автомобиля. Позволяет сравнить с альтернативами: поезд, самолёт, такси.',
      'Структура расходов: топливо (основная статья), амортизация (~3 сум/км для бюджетного авто), обслуживание (~1 сум/км), платные дороги (если применимо). Расход топлива зависит от стиля вождения и загрузки.',
      'Пример: Ташкент — Бухара (600 км), расход 9 л/100 км, АИ-91. Топливо: 675 000 сум. Амортизация+обслуживание: ~240 000 сум. Итого: ~915 000 сум на авто vs ~400 000 сум поезд vs ~800 000 сум самолёт.',
    ],
    paragraphsUz: [
      "Sayohat narxi kalkulyatori yoqilg'i, yo'l to'lovlari va avtomobil eskirishini hisobga olgan holda avtomobil sayohatining umumiy xarajatlarini hisoblaydi. Muqobillar bilan solishtirish imkonini beradi: poyezd, samolyot, taksi.",
      "Xarajatlar tarkibi: yoqilg'i (asosiy modda), amortizatsiya (~3 so'm/km byudjet avto uchun), xizmat (~1 so'm/km), pullik yo'llar (agar qo'llansa). Yoqilg'i sarfi haydash uslubi va yukga bog'liq.",
      "Misol: Toshkent — Buxoro (600 km), sarf 9 l/100 km, AI-91. Yoqilg'i: 675 000 so'm. Amortizatsiya+xizmat: ~240 000 so'm. Jami: ~915 000 so'm avtoda vs ~400 000 so'm poyezd vs ~800 000 so'm samolyot.",
    ],
    faqRu: [
      { question: 'Из чего складывается стоимость поездки на авто?', answer: 'Топливо (70-80%), амортизация авто (15-20%), обслуживание (5-10%), платные дороги.' },
      { question: 'Что дешевле — авто или поезд?', answer: 'На дальних расстояниях поезд обычно дешевле на 40-50%. Авто выгоднее при 3+ пассажирах.' },
      { question: 'Как рассчитать стоимость топлива?', answer: '(Расстояние / 100) × расход л/100 км × цена литра. Используйте наш калькулятор расхода топлива.' },
    ],
    faqUz: [
      { question: "Avtoda sayohat narxi nimalardan tashkil topadi?", answer: "Yoqilg'i (70-80%), avtomobil amortizatsiyasi (15-20%), xizmat (5-10%), pullik yo'llar." },
      { question: "Avto yoki poyezd arzonroqmi?", answer: "Uzoq masofalarda poyezd odatda 40-50% arzon. Avto 3+ yo'lovchida foydaliroq." },
      { question: "Yoqilg'i narxini qanday hisoblash mumkin?", answer: "(Masofa / 100) × sarf l/100 km × litr narxi. Yoqilg'i sarfi kalkulyatorimizdan foydalaning." },
    ],
  },

  {
    slug: 'car-leasing',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Автолизинг — аренда автомобиля с правом последующего выкупа. В Узбекистане лизинговые компании предлагают ставки от 18% до 26% годовых. Аванс: от 20% стоимости. Срок: 2-7 лет. Лизинговые платежи можно отнести на расходы для юрлиц.',
      'Отличие от кредита: автомобиль остаётся собственностью лизинговой компании до полного выкупа. Преимущества: ускоренная амортизация, налоговая оптимизация для бизнеса, включённое обслуживание.',
      'Пример: Chevrolet Tracker 350 млн сум, аванс 30% (105 млн), лизинг 245 млн на 5 лет под 22%. Платёж ≈ 6 500 000 сум/мес. Переплата ≈ 145 млн сум.',
    ],
    paragraphsUz: [
      "Avtolizing — keyinchalik sotib olish huquqi bilan avtomobil ijarasi. O'zbekistonda lizing kompaniyalari yillik 18% dan 26% gacha stavkalar taklif etadi. Avans: qiymatning 20% dan. Muddat: 2-7 yil. Lizing to'lovlarini yuridik shaxslar xarajatlarga kiritishi mumkin.",
      "Kreditdan farqi: avtomobil to'liq sotib olingunga qadar lizing kompaniyasi mulki bo'lib qoladi. Afzalliklari: tezlashtirilgan amortizatsiya, biznes uchun soliq optimallashtirish, kiritilgan xizmat.",
      "Misol: Chevrolet Tracker 350 mln so'm, avans 30% (105 mln), lizing 245 mln 5 yilga 22% da. To'lov ≈ 6 500 000 so'm/oy. Ortiqcha to'lov ≈ 145 mln so'm.",
    ],
    faqRu: [
      { question: 'Чем лизинг отличается от кредита?', answer: 'Авто в собственности лизинговой компании. Плюсы: налоговая оптимизация для бизнеса, ускоренная амортизация.' },
      { question: 'Какие ставки по автолизингу?', answer: 'От 18% до 26% годовых. Аванс от 20%. Срок 2-7 лет.' },
      { question: 'Кому выгоден лизинг?', answer: 'Юрлицам и ИП — лизинговые платежи уменьшают налогооблагаемую прибыль.' },
    ],
    faqUz: [
      { question: "Lizing kreditdan nimasi bilan farq qiladi?", answer: "Avto lizing kompaniyasi mulkida. Afzalliklari: biznes uchun soliq optimallashtirish, tezlashtirilgan amortizatsiya." },
      { question: "Avtolizing stavkalari qanday?", answer: "Yillik 18% dan 26% gacha. Avans 20% dan. Muddat 2-7 yil." },
      { question: "Lizing kimga foydali?", answer: "Yuridik shaxslar va YaTTlarga — lizing to'lovlari soliqqa tortiladigan foydani kamaytiradi." },
    ],
  },

  {
    slug: 'heating',
    lastUpdated: '2025-10-25',
    sources: [
      { name: 'Узтрансгаз — Тарифы', url: 'https://uztransgaz.uz' },
      { name: 'Узбекэнерго — Тарифы', url: 'https://uzbekenergo.uz' },
    ],
    paragraphsRu: [
      'Калькулятор отопления рассчитывает стоимость обогрева жилья в Узбекистане различными способами: центральное отопление, газовый котёл, электрический обогреватель, тепловой насос. Отопительный сезон в Узбекистане длится с октября по март (около 180 дней), а средняя температура зимой составляет 0-5°C в Ташкенте и до −10°C в Каракалпакстане.',
      'Стоимость отопления за сезон 2025-2026 (квартира 60 м² в Ташкенте): центральное отопление — 1 800 000-2 500 000 сум (плата по нормативу ~420 000 сум/мес); индивидуальный газовый котёл — 2 500 000-4 500 000 сум (расход газа 300-500 м³/мес по тарифу ~950 сум/м³); электрические обогреватели — 4 000 000-7 000 000 сум (расход 2 000-3 500 кВт·ч/мес по тарифу ~450 сум/кВт·ч).',
      'Для частного дома (100 м²) расходы существенно выше: газовый котёл — 5 000 000-10 000 000 сум за сезон в зависимости от утепления и теплопотерь. Угольное отопление (распространено в сельской местности): 3 000 000-6 000 000 сум (расход 3-5 тонн угля по цене ~1 200 000 сум/тонна). Тепловой насос — начальные инвестиции от $3 000-5 000, но эксплуатация дешевле электрического на 60-70%.',
      'Утепление дома — самый эффективный способ снизить расходы на отопление. Замена старых деревянных окон на стеклопакеты экономит 20-30% тепла (стоимость от 3 000 000 сум за окно). Утепление фасада пенопластом — от 120 000 сум/м², экономия 30-40% тепла. Утепление крыши — экономия 15-20%. Суммарно вложения в утепление окупаются за 2-3 отопительных сезона.',
      'Калькулятор отопления на нашем сайте учитывает площадь помещения, тип здания (квартира, частный дом), способ отопления, регион Узбекистана и степень утепления. Введите параметры — получите расчёт стоимости за месяц и за весь сезон. Это поможет выбрать оптимальный способ обогрева и спланировать семейный бюджет на зимний период.',
    ],
    paragraphsUz: [
      "Isitish kalkulyatori O'zbekistonda turli usullarda uy-joyni isitish narxini hisoblaydi: markaziy isitish, gaz qozoni, elektr isitgich, issiqlik pompasi. O'zbekistonda isitish mavsumi oktyabrdan martgacha davom etadi (taxminan 180 kun), qishda o'rtacha harorat Toshkentda 0-5°C, Qoraqalpog'istonda −10°C gacha tushadi.",
      "2025-2026 mavsumi uchun isitish narxi (Toshkentda 60 m² kvartira): markaziy isitish — 1 800 000-2 500 000 so'm (normativ bo'yicha to'lov ~420 000 so'm/oy); individual gaz qozoni — 2 500 000-4 500 000 so'm (oyiga 300-500 m³ gaz sarfi, tarif ~950 so'm/m³); elektr isitgichlar — 4 000 000-7 000 000 so'm (oyiga 2 000-3 500 kVt·soat sarfi, tarif ~450 so'm/kVt·soat).",
      "Xususiy uy (100 m²) uchun xarajatlar ancha yuqori: gaz qozoni — izolyatsiya va issiqlik yo'qotishlariga qarab mavsumiga 5 000 000-10 000 000 so'm. Ko'mir bilan isitish (qishloq joylarda keng tarqalgan): 3 000 000-6 000 000 so'm (3-5 tonna ko'mir sarfi, narxi ~1 200 000 so'm/tonna). Issiqlik pompasi — boshlang'ich investitsiya $3 000-5 000 dan, lekin foydalanish elektrdan 60-70% arzon.",
      "Uyni izolyatsiya qilish — isitish xarajatlarini kamaytirishning eng samarali usuli. Eski yog'och derazalarni steklopaketlarga almashtirish 20-30% issiqlikni tejaydi (narxi derazasiga 3 000 000 so'mdan). Fasadni penoplast bilan izolyatsiya qilish — 120 000 so'm/m² dan, 30-40% issiqlik tejash. Tomni izolyatsiya qilish — 15-20% tejash. Jami izolyatsiyaga sarmoyalar 2-3 isitish mavsumida qoplanadi.",
      "Saytimizda isitish kalkulyatori xona maydonini, bino turini (kvartira, xususiy uy), isitish usulini, O'zbekiston hududini va izolyatsiya darajasini hisobga oladi. Parametrlarni kiriting — oylik va butun mavsumga narx hisobini olasiz. Bu optimal isitish usulini tanlash va qishki davrga oilaviy byudjetni rejalashtirishga yordam beradi.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ отопления?', answer: 'Центральное отопление (~2 млн за сезон). Газовый котёл — средний (3-5 млн). Электрический — самый дорогой (5-7 млн для 60 м²).' },
      { question: 'Сколько стоит отопление квартиры за сезон?', answer: 'Квартира 60 м² в Ташкенте: центральное — 1,8-2,5 млн, газ — 2,5-4,5 млн, электричество — 4-7 млн сум.' },
      { question: 'Как снизить расходы на отопление?', answer: 'Утепление стен (экономия 30-40%), замена окон (20-30%), утепление крыши (15-20%). Окупается за 2-3 сезона.' },
      { question: 'Сколько газа расходует котёл?', answer: 'Для квартиры 60 м²: 300-500 м³/мес. Для дома 100 м²: 600-1000 м³/мес. Тариф ~950 сум/м³.' },
      { question: 'Когда начинается отопительный сезон?', answer: 'С октября по март (около 180 дней). Центральное отопление включают при среднесуточной температуре ниже +8°C.' },
    ],
    faqUz: [
      { question: "Eng arzon isitish usuli qanday?", answer: "Markaziy isitish (~2 mln mavsumiga). Gaz qozoni — o'rtacha (3-5 mln). Elektr — eng qimmat (60 m² uchun 5-7 mln)." },
      { question: "Kvartirani mavsumiga isitish qancha turadi?", answer: "Toshkentda 60 m² kvartira: markaziy — 1,8-2,5 mln, gaz — 2,5-4,5 mln, elektr — 4-7 mln so'm." },
      { question: "Isitish xarajatlarini qanday kamaytirish mumkin?", answer: "Devorlarni izolyatsiya qilish (30-40% tejash), derazalarni almashtirish (20-30%), tomni izolyatsiya qilish (15-20%). 2-3 mavsumda qoplanadi." },
      { question: "Gaz qozoni qancha gaz sarflaydi?", answer: "60 m² kvartira uchun: oyiga 300-500 m³. 100 m² uy uchun: oyiga 600-1000 m³. Tarif ~950 so'm/m³." },
      { question: "Isitish mavsumi qachon boshlanadi?", answer: "Oktyabrdan martgacha (taxminan 180 kun). Markaziy isitish o'rtacha sutkalik harorat +8°C dan past bo'lganda yoqiladi." },
    ],
  },

  {
    slug: 'internet',
    lastUpdated: '2025-09-05',
    sources: [
      { name: 'Uztelecom — Тарифы', url: 'https://uztelecom.uz' },
      { name: 'Министерство цифровых технологий', url: 'https://mitc.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости интернета сравнивает тарифы всех крупных провайдеров Узбекистана. По данным Министерства цифровых технологий, в 2025 году проникновение интернета в Узбекистане превысило 85%, а число абонентов широкополосного доступа достигло 10 млн. Основные операторы: Uztelecom (GPON), TuronTelecom, Humans (бывш. Turontelecom), Beeline, Ucell, Mobiuz.',
      'Тарифы домашнего интернета (2025): Uztelecom GPON — от 89 000 сум/мес (50 Мбит/с) до 399 000 сум/мес (500 Мбит/с); TuronTelecom — от 79 000 сум/мес (30 Мбит/с) до 449 000 сум/мес (1 Гбит/с); Humans — от 99 000 сум/мес (100 Мбит/с). Подключение GPON обычно бесплатное или за символическую плату 100 000-200 000 сум.',
      'Мобильный интернет: Beeline — от 25 000 сум/мес (3 ГБ) до 159 000 сум/мес (безлимит 4G); Ucell — от 29 000 сум/мес (5 ГБ) до 179 000 сум/мес (безлимит); Mobiuz — от 25 000 сум/мес (3 ГБ) до 149 000 сум/мес (безлимит). 5G запущен в пилотном режиме в центре Ташкента с теоретической скоростью до 1 Гбит/с, коммерческие тарифы — от 200 000 сум/мес.',
      'При выборе провайдера учитывайте: для соцсетей и мессенджеров достаточно 30 Мбит/с (~80 000 сум/мес), для стриминга видео 4K — от 100 Мбит/с (~150 000 сум/мес), для работы из дома (видеозвонки, VPN) — 50-100 Мбит/с, для геймеров — от 100 Мбит/с с низким пингом. В Ташкенте и областных центрах доступна оптика, в сельской местности — ADSL или мобильный 4G.',
      'Калькулятор интернета на нашем сайте поможет выбрать оптимальный тариф: введите нужную скорость, объём трафика и район проживания — получите сравнение всех доступных провайдеров с точными ценами. Оплата возможна через Click, Payme, Uzum, банковские терминалы или в офисах провайдеров.',
    ],
    paragraphsUz: [
      "Internet narxi kalkulyatori O'zbekistonning barcha yirik provayderlari tariflarini solishtiradi. Raqamli texnologiyalar vazirligi ma'lumotlariga ko'ra, 2025-yilda O'zbekistonda internet penetratsiyasi 85% dan oshdi, keng polosali ulanish abonentlari soni 10 mln ga yetdi. Asosiy operatorlar: Uztelecom (GPON), TuronTelecom, Humans, Beeline, Ucell, Mobiuz.",
      "Uy interneti tariflari (2025): Uztelecom GPON — 89 000 so'm/oy (50 Mbit/s) dan 399 000 so'm/oy (500 Mbit/s) gacha; TuronTelecom — 79 000 so'm/oy (30 Mbit/s) dan 449 000 so'm/oy (1 Gbit/s) gacha; Humans — 99 000 so'm/oy (100 Mbit/s) dan. GPON ulash odatda bepul yoki 100 000-200 000 so'm ramziy to'lov evaziga.",
      "Mobil internet: Beeline — 25 000 so'm/oy (3 GB) dan 159 000 so'm/oy (cheksiz 4G) gacha; Ucell — 29 000 so'm/oy (5 GB) dan 179 000 so'm/oy (cheksiz) gacha; Mobiuz — 25 000 so'm/oy (3 GB) dan 149 000 so'm/oy (cheksiz) gacha. 5G Toshkent markazida sinov rejimida ishga tushirilgan, nazariy tezlik 1 Gbit/s gacha, tijorat tariflari — 200 000 so'm/oy dan.",
      "Provayder tanlashda hisobga oling: ijtimoiy tarmoqlar va messenjerlar uchun 30 Mbit/s yetarli (~80 000 so'm/oy), 4K video striming uchun — 100 Mbit/s dan (~150 000 so'm/oy), uydan ishlash (videoqung'iroqlar, VPN) uchun — 50-100 Mbit/s, geymerlar uchun — past ping bilan 100 Mbit/s dan. Toshkent va viloyat markazlarida optika mavjud, qishloq joylarda — ADSL yoki mobil 4G.",
      "Saytimizda internet kalkulyatori optimal tarifni tanlashga yordam beradi: kerakli tezlik, trafik hajmi va yashash tumanini kiriting — barcha mavjud provayderlarning aniq narxlari bilan solishtirishini olasiz. To'lov Click, Payme, Uzum, bank terminallari yoki provayderlar ofislarida amalga oshiriladi.",
    ],
    faqRu: [
      { question: 'Сколько стоит домашний интернет?', answer: 'От 79 000 сум (30 Мбит/с) до 449 000 сум (1 Гбит/с) в месяц. Uztelecom GPON: от 89 000 (50 Мбит/с).' },
      { question: 'Какой интернет самый быстрый?', answer: 'GPON-оптика (Uztelecom, TuronTelecom): до 1 Гбит/с. 5G (пилот в Ташкенте): до 1 Гбит/с. Мобильный 4G: до 150 Мбит/с.' },
      { question: 'Какую скорость выбрать?', answer: 'Соцсети: 30 Мбит/с (~80 000 сум). Стриминг 4K: 100+ Мбит/с (~150 000). Работа из дома: 50-100 Мбит/с. Геймерам: 100+ Мбит/с.' },
      { question: 'Есть ли 5G в Узбекистане?', answer: 'Да, 5G запущен в пилотном режиме в центре Ташкента. Коммерческие тарифы от 200 000 сум/мес. Массовое покрытие ожидается в 2026 году.' },
      { question: 'Как оплатить интернет?', answer: 'Через Click, Payme, Uzum, банковские терминалы, в офисах провайдеров или настроить автоплатёж.' },
    ],
    faqUz: [
      { question: "Uy interneti qancha turadi?", answer: "Oyiga 79 000 so'm (30 Mbit/s) dan 449 000 so'm (1 Gbit/s) gacha. Uztelecom GPON: 89 000 dan (50 Mbit/s)." },
      { question: "Eng tez internet qaysi?", answer: "GPON optika (Uztelecom, TuronTelecom): 1 Gbit/s gacha. 5G (Toshkentda sinov): 1 Gbit/s gacha. Mobil 4G: 150 Mbit/s gacha." },
      { question: "Qanday tezlik tanlash kerak?", answer: "Ijtimoiy tarmoqlar: 30 Mbit/s (~80 000 so'm). 4K striming: 100+ Mbit/s (~150 000). Uydan ishlash: 50-100 Mbit/s. Geymerlar: 100+ Mbit/s." },
      { question: "O'zbekistonda 5G bormi?", answer: "Ha, 5G Toshkent markazida sinov rejimida ishga tushirilgan. Tijorat tariflari 200 000 so'm/oy dan. Ommaviy qamrov 2026-yilda kutilmoqda." },
      { question: "Internetni qanday to'lash mumkin?", answer: "Click, Payme, Uzum, bank terminallari, provayderlar ofislarida yoki avtomatik to'lov sozlash orqali." },
    ],
  },

  {
    slug: 'rental',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор аренды рассчитывает полную стоимость аренды жилья с учётом коммунальных услуг, обслуживания и дополнительных расходов. Средние цены аренды в Ташкенте (2025): 1-комн — 3-5 млн сум/мес, 2-комн — 5-8 млн, 3-комн — 7-12 млн.',
      'В стоимость аренды обычно не включены: коммунальные услуги (400 000-1 200 000 сум), интернет (100 000-300 000), обслуживание дома (50 000-150 000). Депозит: 1-2 месячных платежа.',
      'Районы Ташкента по стоимости аренды: Мирабад, Юнусабад — дорого; Чиланзар — средне; Сергели, Бектемир — доступно.',
    ],
    paragraphsUz: [
      "Ijara kalkulyatori kommunal xizmatlar, xizmat ko'rsatish va qo'shimcha xarajatlarni hisobga olgan holda uy-joy ijarasining to'liq qiymatini hisoblaydi. Toshkentda o'rtacha ijara narxlari (2025): 1 xonali — 3-5 mln so'm/oy, 2 xonali — 5-8 mln, 3 xonali — 7-12 mln.",
      "Ijara narxiga odatda kiritilmaydi: kommunal xizmatlar (400 000-1 200 000 so'm), internet (100 000-300 000), uy xizmati (50 000-150 000). Depozit: 1-2 oylik to'lov.",
      "Toshkent tumanlari ijara narxi bo'yicha: Mirobod, Yunusobod — qimmat; Chilonzor — o'rtacha; Sergeli, Bektemir — qulay.",
    ],
    faqRu: [
      { question: 'Сколько стоит аренда квартиры в Ташкенте?', answer: '1-комн: 3-5 млн, 2-комн: 5-8 млн, 3-комн: 7-12 млн сум/мес. Зависит от района.' },
      { question: 'Что включено в арендную плату?', answer: 'Обычно только аренда. Коммунальные, интернет, обслуживание — отдельно (+500 000 − 1 500 000 сум).' },
      { question: 'Какой депозит при аренде?', answer: 'Обычно 1-2 месячных платежа. Возвращается при выезде (минус ущерб).' },
    ],
    faqUz: [
      { question: "Toshkentda kvartira ijarasi qancha?", answer: "1 xonali: 3-5 mln, 2 xonali: 5-8 mln, 3 xonali: 7-12 mln so'm/oy. Tumanga bog'liq." },
      { question: "Ijara to'loviga nima kiritilgan?", answer: "Odatda faqat ijara. Kommunal, internet, xizmat — alohida (+500 000 − 1 500 000 so'm)." },
      { question: "Ijarada depozit qancha?", answer: "Odatda 1-2 oylik to'lov. Chiqib ketishda qaytariladi (zarar minus)." },
    ],
  },

  {
    slug: 'renovation',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор ремонта рассчитывает стоимость ремонта квартиры в Узбекистане по категориям: косметический, стандартный, евроремонт, дизайнерский. Средние цены за м² (2025): косметический — 1,5-3 млн сум, стандартный — 3-5 млн, евроремонт — 5-8 млн, дизайнерский — 8-15 млн.',
      'Основные статьи расходов: черновые работы (20-30%), чистовые материалы (30-40%), сантехника (10-15%), электрика (5-10%), мебель (15-25%).',
      'Пример: ремонт квартиры 60 м² (стандартный). Стоимость: 60 × 4 000 000 = 240 000 000 сум. С мебелью: ~300 000 000 сум.',
    ],
    paragraphsUz: [
      "Ta'mir kalkulyatori O'zbekistonda kvartirani ta'mirlash narxini toifalari bo'yicha hisoblaydi: kosmetik, standart, yevrota'mir, dizaynerlik. M² uchun o'rtacha narxlar (2025): kosmetik — 1,5-3 mln so'm, standart — 3-5 mln, yevrota'mir — 5-8 mln, dizaynerlik — 8-15 mln.",
      "Asosiy xarajat moddalari: qora ishlar (20-30%), toza materiallar (30-40%), santexnika (10-15%), elektrika (5-10%), mebel (15-25%).",
      "Misol: 60 m² kvartirani ta'mirlash (standart). Narxi: 60 × 4 000 000 = 240 000 000 so'm. Mebel bilan: ~300 000 000 so'm.",
    ],
    faqRu: [
      { question: 'Сколько стоит ремонт квартиры?', answer: 'От 1,5 до 15 млн сум/м². Стандартный ремонт 60 м²: ~240 млн сум.' },
      { question: 'Какие основные статьи расходов?', answer: 'Материалы (30-40%), работа (20-30%), сантехника (10-15%), электрика (5-10%), мебель (15-25%).' },
      { question: 'Сколько времени занимает ремонт?', answer: 'Косметический: 2-4 недели. Стандартный: 1-3 месяца. Евроремонт: 3-6 месяцев.' },
    ],
    faqUz: [
      { question: "Kvartira ta'miri qancha turadi?", answer: "1,5 dan 15 mln so'm/m² gacha. 60 m² standart ta'mir: ~240 mln so'm." },
      { question: "Asosiy xarajat moddalari qanday?", answer: "Materiallar (30-40%), ish (20-30%), santexnika (10-15%), elektrika (5-10%), mebel (15-25%)." },
      { question: "Ta'mir qancha vaqt oladi?", answer: "Kosmetik: 2-4 hafta. Standart: 1-3 oy. Yevrota'mir: 3-6 oy." },
    ],
  },

  {
    slug: 'moving',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор переезда рассчитывает стоимость переезда с учётом объёма вещей, расстояния, количества грузчиков и дополнительных услуг. Стоимость переезда в пределах Ташкента: от 500 000 до 3 000 000 сум.',
      'Факторы стоимости: объём вещей (количество комнат), этаж (наличие лифта), расстояние, упаковка, разборка/сборка мебели. Грузчик: от 200 000 сум/день. Транспорт: от 300 000 сум.',
      'Пример: переезд 2-комнатной квартиры в пределах Ташкента с 5 этажа на 3. 2 грузчика + газель: ~1 200 000 сум. С упаковкой: ~1 800 000 сум.',
    ],
    paragraphsUz: [
      "Ko'chish kalkulyatori buyumlar hajmi, masofa, yuk tashuvchilar soni va qo'shimcha xizmatlarni hisobga olgan holda ko'chish narxini hisoblaydi. Toshkent ichida ko'chish narxi: 500 000 dan 3 000 000 so'mgacha.",
      "Narx omillari: buyumlar hajmi (xonalar soni), qavat (lift mavjudligi), masofa, qadoqlash, mebelni yig'ish/qo'yish. Yuk tashuvchi: 200 000 so'm/kundan. Transport: 300 000 so'mdan.",
      "Misol: Toshkent ichida 2 xonali kvartirani 5-qavatdan 3-qavatga ko'chirish. 2 yuk tashuvchi + gazel: ~1 200 000 so'm. Qadoqlash bilan: ~1 800 000 so'm.",
    ],
    faqRu: [
      { question: 'Сколько стоит переезд?', answer: 'В пределах Ташкента: 500 000 − 3 000 000 сум. Зависит от объёма, этажа и доп. услуг.' },
      { question: 'Что входит в стоимость?', answer: 'Транспорт + грузчики. Упаковка, разборка мебели — обычно оплачиваются отдельно.' },
      { question: 'Сколько грузчиков нужно?', answer: '1-комн: 2 человека. 2-комн: 2-3. 3-комн+: 3-4 грузчика.' },
    ],
    faqUz: [
      { question: "Ko'chish qancha turadi?", answer: "Toshkent ichida: 500 000 − 3 000 000 so'm. Hajm, qavat va qo'shimcha xizmatlarga bog'liq." },
      { question: "Narxga nima kiradi?", answer: "Transport + yuk tashuvchilar. Qadoqlash, mebel yig'ish — odatda alohida to'lanadi." },
      { question: "Nechta yuk tashuvchi kerak?", answer: "1 xonali: 2 kishi. 2 xonali: 2-3. 3 xonali+: 3-4 yuk tashuvchi." },
    ],
  },

  {
    slug: 'margin',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор маржи рассчитывает маржу (наценку) и маржинальность товара или услуги. Маржа = Цена продажи − Себестоимость. Маржинальность = (Маржа / Цена продажи) × 100%. Наценка = (Маржа / Себестоимость) × 100%.', 'Пример: себестоимость 500 000, цена продажи 800 000. Маржа = 300 000 сум. Маржинальность = 37,5%. Наценка = 60%.', 'Важно не путать маржинальность и наценку. Маржинальность всегда меньше 100%, наценка может быть любой.'],
    paragraphsUz: ["Marja kalkulyatori tovar yoki xizmatning marjasini (ustama) va marjinalligini hisoblaydi. Marja = Sotish narxi − Tannarx. Marjinallik = (Marja / Sotish narxi) × 100%. Ustama = (Marja / Tannarx) × 100%.", "Misol: tannarx 500 000, sotish narxi 800 000. Marja = 300 000 so'm. Marjinallik = 37,5%. Ustama = 60%.", "Marjinallik va ustamani aralashtirib yubormaslik muhim. Marjinallik doimo 100% dan kam, ustama har qanday bo'lishi mumkin."],
    faqRu: [{ question: 'Чем маржа отличается от наценки?', answer: 'Маржа считается от цены продажи, наценка — от себестоимости. При одинаковых числах наценка всегда больше маржинальности.' }, { question: 'Какая нормальная маржинальность?', answer: 'Зависит от отрасли. Торговля: 20-40%. Услуги: 40-70%. Производство: 15-30%.' }, { question: 'Как рассчитать наценку?', answer: '(Цена − Себестоимость) / Себестоимость × 100%.' }],
    faqUz: [{ question: "Marja ustamadan nimasi bilan farq qiladi?", answer: "Marja sotish narxidan, ustama tannarxdan hisoblanadi. Bir xil raqamlarda ustama doimo marjinallikdan katta." }, { question: "Normal marjinallik qancha?", answer: "Tarmoqqa bog'liq. Savdo: 20-40%. Xizmatlar: 40-70%. Ishlab chiqarish: 15-30%." }, { question: "Ustamani qanday hisoblash mumkin?", answer: "(Narx − Tannarx) / Tannarx × 100%." }],
  },

  {
    slug: 'break-even',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор точки безубыточности определяет объём продаж, при котором доходы покрывают все расходы. Формула: Точка безубыточности (шт) = Постоянные расходы / (Цена за единицу − Переменные расходы на единицу).', 'Пример: аренда+зарплаты 20 млн сум/мес, цена товара 50 000 сум, себестоимость 30 000 сум. ТБУ = 20 000 000 / (50 000 − 30 000) = 1 000 штук/мес.', 'Зная ТБУ, вы понимаете минимально необходимый объём продаж для покрытия расходов и начала получения прибыли.'],
    paragraphsUz: ["Zararsizlik nuqtasi kalkulyatori daromadlar barcha xarajatlarni qoplovchi sotish hajmini aniqlaydi. Formula: Zararsizlik nuqtasi (dona) = Doimiy xarajatlar / (Birlik narxi − Birlik uchun o'zgaruvchan xarajatlar).", "Misol: ijara+ish haqi 20 mln so'm/oy, tovar narxi 50 000 so'm, tannarx 30 000 so'm. ZN = 20 000 000 / (50 000 − 30 000) = 1 000 dona/oy.", "ZNni bilsangiz, xarajatlarni qoplash va foyda olishni boshlash uchun minimal zarur sotish hajmini tushunasiz."],
    faqRu: [{ question: 'Что такое точка безубыточности?', answer: 'Объём продаж, при котором доход = расходы. Ниже ТБУ — убыток, выше — прибыль.' }, { question: 'Как рассчитать ТБУ?', answer: 'Постоянные расходы / (Цена − Переменные расходы на единицу).' }, { question: 'Зачем считать ТБУ?', answer: 'Чтобы понять минимальный объём продаж для выхода в прибыль и оценить реалистичность бизнес-плана.' }],
    faqUz: [{ question: 'Zararsizlik nuqtasi nima?', answer: "Daromad = xarajatlar bo'ladigan sotish hajmi. ZNdan past — zarar, yuqori — foyda." }, { question: "ZNni qanday hisoblash mumkin?", answer: "Doimiy xarajatlar / (Narx − Birlik uchun o'zgaruvchan xarajatlar)." }, { question: "ZNni nima uchun hisoblash kerak?", answer: "Foydaga chiqish uchun minimal sotish hajmini tushunish va biznes-rejaning realligini baholash uchun." }],
  },

  {
    slug: 'roi',
    lastUpdated: '2025-07-20',
    sources: [
      { name: 'Фондовая биржа Узбекистана', url: 'https://uzse.uz' },
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор ROI (Return on Investment — возврат инвестиций) рассчитывает доходность вложений в процентах. Формула: ROI = (Прибыль − Инвестиции) / Инвестиции × 100%. Это ключевой показатель для инвесторов в Узбекистане, позволяющий сравнить различные варианты вложений: от банковских вкладов до бизнеса и недвижимости.',
      'Инвестиционный ландшафт Узбекистана (2025): банковские вклады в сумах — 22-25% годовых, в долларах — 5-8%; доходность облигаций на бирже UZSE — 18-22%; аренда недвижимости в Ташкенте — 8-12% годовых; средний ROI малого бизнеса — 30-60%; инфляция — около 10%. Реальная доходность = номинальная доходность − инфляция.',
      'Пример расчёта: предприниматель вложил 200 млн сум в открытие кафе в Ташкенте, за год чистая прибыль составила 70 млн. ROI = (70 / 200) × 100% = 35%. Для сравнения: та же сумма на депозите принесла бы 200 × 24% = 48 млн (ROI 24%). Инвестиция в кафе выгоднее на 11 процентных пунктов, но несёт больше рисков.',
      'Ограничения ROI: показатель не учитывает фактор времени (ROI 30% за 1 год лучше ROI 30% за 3 года), уровень риска и ликвидность. Для временной корректировки используйте годовой ROI = ROI / Количество лет. Для рисковых инвестиций в Узбекистане (стартапы, криптовалюта) требуйте ROI значительно выше банковской ставки (24%+).',
      'Калькулятор ROI на нашем сайте поможет быстро оценить любую инвестицию: введите сумму вложений и полученную (или ожидаемую) прибыль — калькулятор покажет ROI в процентах и сравнит с альтернативами (депозит, инфляция). Используйте для оценки бизнес-идей, покупки недвижимости или выбора инвестиционного инструмента на бирже Узбекистана.',
    ],
    paragraphsUz: [
      "ROI (Return on Investment — investitsiyalar qaytimi) kalkulyatori mablag' qo'yishning daromadliligini foizda hisoblaydi. Formula: ROI = (Foyda − Investitsiya) / Investitsiya × 100%. Bu O'zbekistondagi investorlar uchun asosiy ko'rsatkich bo'lib, turli mablag' qo'yish variantlarini solishtirish imkonini beradi: bank omonatlaridan tortib biznes va ko'chmas mulkgacha.",
      "O'zbekistonning investitsiya muhiti (2025): so'mda bank omonatlari — yillik 22-25%, dollarda — 5-8%; UZSE birjasida obligatsiyalar daromadliligi — 18-22%; Toshkentda ko'chmas mulk ijarasi — yillik 8-12%; kichik biznesning o'rtacha ROIsi — 30-60%; inflyatsiya — taxminan 10%. Real daromadlilik = nominal daromadlilik − inflyatsiya.",
      "Hisoblash misoli: tadbirkor Toshkentda kafe ochishga 200 mln so'm kiritdi, yil davomida sof foyda 70 mln ni tashkil etdi. ROI = (70 / 200) × 100% = 35%. Solishtirish uchun: xuddi shu summa omonatda 200 × 24% = 48 mln keltirar edi (ROI 24%). Kafega investitsiya 11 foiz punktga foydaliroq, lekin ko'proq xavf tashiydi.",
      "ROI cheklovlari: ko'rsatkich vaqt omilini (1 yilda 30% ROI 3 yildagi 30% ROI dan yaxshiroq), xavf darajasini va likvidlikni hisobga olmaydi. Vaqt bo'yicha tuzatish uchun yillik ROI = ROI / Yillar soni dan foydalaning. O'zbekistondagi xavfli investitsiyalar (startaplar, kriptovalyuta) uchun bank stavkasidan (24%+) sezilarli darajada yuqori ROI talab qiling.",
      "Saytimizda ROI kalkulyatori har qanday investitsiyani tezda baholashga yordam beradi: mablag' qo'yish summasini va olingan (yoki kutilayotgan) foydani kiriting — kalkulyator ROIni foizda ko'rsatadi va alternativalar (omonat, inflyatsiya) bilan solishtiradi. Biznes g'oyalarini baholash, ko'chmas mulk sotib olish yoki O'zbekiston birjasida investitsiya vositasini tanlash uchun foydalaning.",
    ],
    faqRu: [
      { question: 'Что такое ROI?', answer: 'Return on Investment — показатель доходности инвестиций в процентах. Показывает, сколько вы заработали на каждый вложенный сум.' },
      { question: 'Как рассчитать ROI?', answer: '(Прибыль − Инвестиции) / Инвестиции × 100%. Например, вложили 100 млн, заработали 130 млн: ROI = 30%.' },
      { question: 'Какой ROI считается хорошим в Узбекистане?', answer: 'Выше инфляции (~10%) и ставки по вкладам (~24%). ROI >30% — отличный результат для бизнеса.' },
      { question: 'Чем ROI отличается от прибыли?', answer: 'Прибыль — абсолютная сумма (в сумах). ROI — относительный показатель (в %). ROI позволяет сравнивать инвестиции разного масштаба.' },
      { question: 'Какова доходность депозитов в Узбекистане?', answer: 'В сумах: 22-25% годовых. В долларах: 5-8%. Реальная доходность (за вычетом инфляции ~10%): 12-15% в сумах.' },
    ],
    faqUz: [
      { question: 'ROI nima?', answer: "Return on Investment — investitsiyalar daromadliligining foizdagi ko'rsatkichi. Har bir qo'yilgan so'mga qancha ishlab topganingizni ko'rsatadi." },
      { question: "ROIni qanday hisoblash mumkin?", answer: "(Foyda − Investitsiya) / Investitsiya × 100%. Masalan, 100 mln kiritildi, 130 mln ishlab topildi: ROI = 30%." },
      { question: "O'zbekistonda qanday ROI yaxshi hisoblanadi?", answer: "Inflyatsiyadan (~10%) va omonat stavkalaridan (~24%) yuqori. ROI >30% — biznes uchun ajoyib natija." },
      { question: "ROI foydadan nimasi bilan farq qiladi?", answer: "Foyda — mutlaq summa (so'mda). ROI — nisbiy ko'rsatkich (%). ROI turli ko'lamdagi investitsiyalarni solishtirish imkonini beradi." },
      { question: "O'zbekistonda omonatlar daromadliligi qancha?", answer: "So'mda: yillik 22-25%. Dollarda: 5-8%. Real daromadlilik (inflyatsiya ~10% chegirilganda): so'mda 12-15%." },
    ],
  },

  {
    slug: 'ideal-weight',
    lastUpdated: '2025-06-10',
    sources: [
      { name: 'ВОЗ — Индексы здоровья', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Калькулятор идеального веса определяет рекомендуемый диапазон массы тела по нескольким научным формулам: Лоренца, Брока, Девайна, Робинсона и ВОЗ (ИМТ 18,5-24,9). Результат зависит от роста, пола и типа телосложения. Для жителей Узбекистана, где средний рост мужчин — 172 см, женщин — 160 см, калькулятор даёт персонализированные рекомендации.',
      'Формулы расчёта: Брок (простая): мужчины — рост(см) − 100, женщины — рост(см) − 110. Лоренц: для мужчин — (рост − 100) − (рост − 150) / 4; для женщин — (рост − 100) − (рост − 150) / 2. Девайн: мужчины — 50 + 2,3 × (рост/2,54 − 60); женщины — 45,5 + 2,3 × (рост/2,54 − 60). ВОЗ: рост(м)² × 18,5 (минимум) до рост(м)² × 24,9 (максимум).',
      'Пример для среднего мужчины Узбекистана (172 см): Брок: 72 кг, Лоренц: 66,5 кг, Девайн: 68,5 кг, ВОЗ: 54,7-73,5 кг. Рекомендуемый диапазон: 63-72 кг. Для средней женщины (160 см): Брок: 50 кг, Лоренц: 55 кг, Девайн: 54,5 кг, ВОЗ: 47,4-63,7 кг. Оптимально: 52-60 кг.',
      'Идеальный вес — ориентир, а не абсолют. На реальный здоровый вес влияют мышечная масса (спортсмены весят больше при низком проценте жира), возраст (после 50 лет допускается +5-10%), тип телосложения (астеник, нормостеник, гиперстеник), генетические особенности. Для жителей Узбекистана с преимущественно нормостеническим телосложением формулы дают наиболее точный результат.',
      'Используйте калькулятор идеального веса совместно с калькулятором ИМТ и калькулятором калорий для комплексной оценки и разработки плана питания. Введите рост и пол — калькулятор покажет рекомендуемый диапазон по всем формулам, среднее значение и отклонение от вашего текущего веса.',
    ],
    paragraphsUz: [
      "Ideal vazn kalkulyatori bir nechta ilmiy formulalar bo'yicha tavsiya etilgan tana massasi diapazonini aniqlaydi: Lorents, Brok, Devayn, Robinson va JSST (TMI 18,5-24,9). Natija bo'y, jins va tana tuzilishi turiga bog'liq. O'zbekiston aholisi uchun, bu yerda erkaklar o'rtacha bo'yi — 172 sm, ayollar — 160 sm, kalkulyator shaxsiylashtirilgan tavsiyalar beradi.",
      "Hisoblash formulalari: Brok (oddiy): erkaklar — bo'y(sm) − 100, ayollar — bo'y(sm) − 110. Lorents: erkaklar uchun — (bo'y − 100) − (bo'y − 150) / 4; ayollar uchun — (bo'y − 100) − (bo'y − 150) / 2. Devayn: erkaklar — 50 + 2,3 × (bo'y/2,54 − 60); ayollar — 45,5 + 2,3 × (bo'y/2,54 − 60). JSST: bo'y(m)² × 18,5 (minimum) dan bo'y(m)² × 24,9 (maksimum) gacha.",
      "O'zbekistonning o'rtacha erkagi (172 sm) uchun misol: Brok: 72 kg, Lorents: 66,5 kg, Devayn: 68,5 kg, JSST: 54,7-73,5 kg. Tavsiya etilgan diapazon: 63-72 kg. O'rtacha ayol (160 sm) uchun: Brok: 50 kg, Lorents: 55 kg, Devayn: 54,5 kg, JSST: 47,4-63,7 kg. Optimal: 52-60 kg.",
      "Ideal vazn — mo'ljal, mutlaq ko'rsatkich emas. Haqiqiy sog'lom vazniga mushak massasi (sportchilar past yog' foizida ko'proq tortadilar), yosh (50 yoshdan keyin +5-10% ruxsat etiladi), tana tuzilishi turi (astenik, normostenik, giperstenik), genetik xususiyatlar ta'sir qiladi. O'zbekiston aholisi asosan normostenik tana tuzilishiga ega bo'lgani uchun formulalar eng aniq natija beradi.",
      "Ideal vazn kalkulyatorini TMI kalkulyatori va kaloriya kalkulyatori bilan birgalikda ishlating — bu to'liq baholash va ovqatlanish rejasini ishlab chiqish imkonini beradi. Bo'y va jinsni kiriting — kalkulyator barcha formulalar bo'yicha tavsiya etilgan diapazonni, o'rtacha qiymatni va joriy vazningizdan og'ishni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать идеальный вес?', answer: 'По формулам Брока, Лоренца, Девайна или через ИМТ 18,5-24,9. Калькулятор использует все методы и показывает средний результат.' },
      { question: 'Какой вес нормальный для роста 170 см?', answer: 'Мужчина: 59-72 кг (оптимум 63-68 кг). Женщина: 53-68 кг (оптимум 56-62 кг). По ИМТ 18,5-24,9.' },
      { question: 'Одинаков ли идеальный вес для мужчин и женщин?', answer: 'Нет, при одинаковом росте мужчина весит на 5-10 кг больше за счёт мышечной массы и костной структуры.' },
      { question: 'Какая формула самая точная?', answer: 'Формула ВОЗ (ИМТ) — наиболее универсальна. Для более точного результата используйте среднее всех формул.' },
      { question: 'Каков средний рост в Узбекистане?', answer: 'Мужчины — около 172 см, женщины — около 160 см. Идеальный вес: мужчины 63-72 кг, женщины 52-60 кг.' },
    ],
    faqUz: [
      { question: 'Ideal vaznni qanday hisoblash mumkin?', answer: "Brok, Lorents, Devayn formulalari yoki TMI 18,5-24,9 orqali. Kalkulyator barcha usullarni qo'llaydi va o'rtacha natijani ko'rsatadi." },
      { question: "170 sm bo'yga qanday vazn normal?", answer: "Erkak: 59-72 kg (optimum 63-68 kg). Ayol: 53-68 kg (optimum 56-62 kg). TMI 18,5-24,9 bo'yicha." },
      { question: "Ideal vazn erkak va ayollar uchun bir xilmi?", answer: "Yo'q, bir xil bo'yda erkak mushak massasi va suyak tuzilishi hisobiga 5-10 kg ko'proq tortadi." },
      { question: "Qaysi formula eng aniq?", answer: "JSST formulasi (TMI) — eng universal. Aniqroq natija uchun barcha formulalarning o'rtachasidan foydalaning." },
      { question: "O'zbekistonda o'rtacha bo'y qancha?", answer: "Erkaklar — taxminan 172 sm, ayollar — taxminan 160 sm. Ideal vazn: erkaklar 63-72 kg, ayollar 52-60 kg." },
    ],
  },

  {
    slug: 'macros',
    lastUpdated: '2025-08-10',
    sources: [
      { name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' },
      { name: 'Институт питания РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Калькулятор КБЖУ рассчитывает суточную норму калорий, белков, жиров и углеводов в зависимости от цели: поддержание веса, похудение или набор мышечной массы. Стандартное соотношение БЖУ по рекомендациям ВОЗ: 25-35% белки, 20-35% жиры, 45-65% углеводы. Для жителей Узбекистана с традиционно высокоуглеводным рационом (рис, лепёшки, тесто) баланс макронутриентов особенно важен.',
      'Как рассчитать: сначала определите суточную норму калорий (формула Миффлина-Сан Жеора). Затем распределите по макронутриентам: 1 г белка = 4 ккал, 1 г жира = 9 ккал, 1 г углеводов = 4 ккал. Пример для мужчины 80 кг, поддержание (2 400 ккал): белки 30% = 720 ккал = 180 г; жиры 25% = 600 ккал = 67 г; углеводы 45% = 1 080 ккал = 270 г.',
      'Адаптация КБЖУ для узбекской кухни: порция плова (400 г) содержит ~40 г белка, 35 г жиров, 90 г углеводов. Самса — 15 г белка, 20 г жиров, 30 г углеводов. Шашлык (200 г) — 35 г белка, 15 г жиров, 0 г углеводов. Лагман — 20 г белка, 15 г жиров, 60 г углеводов. Зная КБЖУ блюд, можно составить сбалансированный рацион из привычных продуктов.',
      'Для похудения рекомендуется: увеличить долю белка до 35-40% (помогает сохранить мышцы при дефиците калорий), снизить углеводы до 30-35%, жиры оставить 25-30%. Для набора мышечной массы: белки 30%, углеводы 50-55%, жиры 20%. При активных тренировках потребность в белке возрастает до 1,8-2,2 г/кг массы тела.',
      'Калькулятор КБЖУ на нашем сайте автоматически рассчитает персональную норму: введите пол, возраст, рост, вес, уровень активности и цель. Получите точное количество граммов белков, жиров и углеводов на день. Используйте совместно с калькулятором калорий для максимально точного результата.',
    ],
    paragraphsUz: [
      "KBYU kalkulyatori maqsadga qarab — vaznni saqlash, oriqlamoq yoki mushak massasini oshirish — kunlik kaloriya, oqsil, yog' va uglevodlar normasini hisoblaydi. JSST tavsiyalari bo'yicha BYU standart nisbati: 25-35% oqsillar, 20-35% yog'lar, 45-65% uglevodlar. An'anaviy yuqori uglevodli ratsion (guruch, non, xamir) bilan o'zbek aholisi uchun makronutrientlar balansi alohida ahamiyatga ega.",
      "Qanday hisoblash kerak: avval kunlik kaloriya normasini aniqlang (Mifflin-San Jeor formulasi). Keyin makronutrientlar bo'yicha taqsimlang: 1 g oqsil = 4 kkal, 1 g yog' = 9 kkal, 1 g uglevod = 4 kkal. 80 kg erkak uchun misol, saqlash (2 400 kkal): oqsillar 30% = 720 kkal = 180 g; yog'lar 25% = 600 kkal = 67 g; uglevodlar 45% = 1 080 kkal = 270 g.",
      "O'zbek oshxonasi uchun KBYU moslashuvi: bir porsiya osh (400 g) ~40 g oqsil, 35 g yog', 90 g uglevod o'z ichiga oladi. Somsa — 15 g oqsil, 20 g yog', 30 g uglevod. Kabob (200 g) — 35 g oqsil, 15 g yog', 0 g uglevod. Lag'mon — 20 g oqsil, 15 g yog', 60 g uglevod. Taomlarning KBYUsini bilib, odatiy mahsulotlardan muvozanatli ratsion tuzish mumkin.",
      "Oriqlamoq uchun tavsiya etiladi: oqsil ulushini 35-40% ga oshirish (kaloriya defitsitida mushaklar saqlanishiga yordam beradi), uglevodlarni 30-35% ga kamaytirish, yog'larni 25-30% da qoldirish. Mushak massasini oshirish uchun: oqsillar 30%, uglevodlar 50-55%, yog'lar 20%. Faol mashg'ulotlarda oqsilga ehtiyoj tana massasining 1 kg iga 1,8-2,2 g gacha ortadi.",
      "Saytimizda KBYU kalkulyatori shaxsiy normani avtomatik hisoblaydi: jins, yosh, bo'y, vazn, faollik darajasi va maqsadni kiriting. Kuniga aniq oqsillar, yog'lar va uglevodlar gramm miqdorini olasiz. Maksimal aniq natija uchun kaloriya kalkulyatori bilan birgalikda foydalaning.",
    ],
    faqRu: [
      { question: 'Какое соотношение БЖУ оптимально?', answer: 'Поддержание: белки 30%, жиры 25%, углеводы 45%. Похудение: белки 35-40%, углеводы 30-35%. Набор массы: углеводы 50-55%.' },
      { question: 'Сколько белка нужно в день?', answer: '1,5-2 г/кг при активном образе жизни. Для человека 80 кг: 120-160 г. При тренировках: до 2,2 г/кг (176 г).' },
      { question: 'Как рассчитать КБЖУ?', answer: 'Определите суточные калории (калькулятор калорий), затем распределите: белки (×4 ккал/г), жиры (×9 ккал/г), углеводы (×4 ккал/г).' },
      { question: 'Сколько КБЖУ в плове?', answer: 'Порция плова (~400 г): ~800 ккал, 40 г белка, 35 г жиров, 90 г углеводов.' },
      { question: 'Можно ли похудеть не считая КБЖУ?', answer: 'Можно, но контроль КБЖУ повышает эффективность на 30-50% по данным исследований. Точный расчёт предотвращает потерю мышц.' },
    ],
    faqUz: [
      { question: "Qanday BYU nisbati optimal?", answer: "Saqlash: oqsillar 30%, yog'lar 25%, uglevodlar 45%. Oriqlamoq: oqsillar 35-40%, uglevodlar 30-35%. Massa oshirish: uglevodlar 50-55%." },
      { question: "Kuniga qancha oqsil kerak?", answer: "Faol turmush tarzida 1,5-2 g/kg. 80 kg odam uchun: 120-160 g. Mashg'ulotlarda: 2,2 g/kg gacha (176 g)." },
      { question: "KBYUni qanday hisoblash mumkin?", answer: "Kunlik kaloriyalarni aniqlang (kaloriya kalkulyatori), keyin taqsimlang: oqsillar (×4 kkal/g), yog'lar (×9 kkal/g), uglevodlar (×4 kkal/g)." },
      { question: "Oshda qancha KBYU bor?", answer: "Bir porsiya osh (~400 g): ~800 kkal, 40 g oqsil, 35 g yog', 90 g uglevod." },
      { question: "KBYU hisoblamasdan oriqlamoq mumkinmi?", answer: "Mumkin, lekin KBYU nazorati tadqiqotlarga ko'ra samaradorlikni 30-50% ga oshiradi. Aniq hisoblash mushak yo'qotilishining oldini oladi." },
    ],
  },

  {
    slug: 'pregnancy',
    lastUpdated: '2025-07-05',
    sources: [
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
      { name: 'ВОЗ — Материнское здоровье', url: 'https://who.int' },
    ],
    paragraphsRu: [
      'Калькулятор беременности определяет предполагаемую дату родов (ПДР), текущий срок в неделях и триместр. ПДР рассчитывается по формуле Негеле: первый день последних месячных + 280 дней (40 недель). В Узбекистане ежегодно рождается около 800 000 детей, а средний возраст первородящих — 22-24 года. Система родовспоможения включает женские консультации, роддома и перинатальные центры.',
      'Триместры беременности: 1-й (1-12 недель) — формирование органов плода, первое УЗИ на 11-14 неделе; 2-й (13-27 недель) — активный рост, второе УЗИ на 18-22 неделе; 3-й (28-40 недель) — подготовка к родам, третье УЗИ на 30-34 неделе. Калькулятор показывает текущую неделю, оставшиеся дни до ПДР и ключевые даты обследований.',
      'В Узбекистане наблюдение беременности осуществляется в женских консультациях при поликлиниках (бесплатно по ОМС). Рекомендуемый график посещений: до 28 недели — 1 раз в месяц, 28-36 недель — 2 раза в месяц, после 36 недель — еженедельно. Обязательные анализы: общий и биохимический анализ крови, группа крови, резус-фактор, ВИЧ, гепатит, скрининги 1-го и 2-го триместров.',
      'Только 5% родов происходят точно в ПДР. Нормальные роды — 37-42 неделя. Роды до 37 недели считаются преждевременными, после 42 — переношенными. В Узбекистане все роддома (родильные комплексы) оказывают бесплатную помощь гражданам. Частные клиники предлагают платное родовспоможение: от 5 000 000 до 25 000 000 сум в зависимости от уровня сервиса.',
      'Калькулятор беременности поможет спланировать все этапы: введите дату первого дня последней менструации или дату зачатия. Калькулятор покажет текущий срок, ПДР, даты УЗИ и анализов, а также полезную информацию о развитии малыша на каждой неделе.',
    ],
    paragraphsUz: [
      "Homiladorlik kalkulyatori taxminiy tug'ilish sanasini (TTS), haftalardagi joriy muddatni va trimestrni aniqlaydi. TTS Negele formulasi bo'yicha hisoblanadi: oxirgi hayzning birinchi kuni + 280 kun (40 hafta). O'zbekistonda har yili taxminan 800 000 bola tug'iladi, birinchi marta tug'ayotgan ayollarning o'rtacha yoshi 22-24. Tug'ruqqa yordam ko'rsatish tizimi ayollar maslahatxonalari, tug'ruqxonalar va perinatal markazlarni o'z ichiga oladi.",
      "Homiladorlik trimestrlari: 1-chi (1-12 hafta) — homila organlarining shakllanishi, birinchi UZI 11-14 haftada; 2-chi (13-27 hafta) — faol o'sish, ikkinchi UZI 18-22 haftada; 3-chi (28-40 hafta) — tug'ruqqa tayyorgarlik, uchinchi UZI 30-34 haftada. Kalkulyator joriy haftani, TTSgacha qolgan kunlarni va tekshiruvlarning asosiy sanalarini ko'rsatadi.",
      "O'zbekistonda homiladorlikni kuzatish poliklinikalardagi ayollar maslahatxonalarida amalga oshiriladi (MTS bo'yicha bepul). Tavsiya etilgan tashrif jadvali: 28 haftagacha — oyda 1 marta, 28-36 hafta — oyda 2 marta, 36 haftadan keyin — har hafta. Majburiy tahlillar: umumiy va biokimyoviy qon tahlili, qon guruhi, rezus-omil, OIV, gepatit, 1 va 2-trimestr skrininglari.",
      "Faqat 5% tug'ilishlar aniq TTSda sodir bo'ladi. Normal tug'ilish — 37-42 hafta. 37 haftagacha tug'ilish muddatidan oldingi, 42 haftadan keyin esa ortiqcha ko'tarilgan hisoblanadi. O'zbekistonda barcha tug'ruqxonalar (tug'ruq majmualari) fuqarolarga bepul yordam ko'rsatadi. Xususiy klinikalar pullik tug'ruq xizmatini taklif etadi: xizmat darajasiga qarab 5 000 000 dan 25 000 000 so'mgacha.",
      "Homiladorlik kalkulyatori barcha bosqichlarni rejalashtirishga yordam beradi: oxirgi hayz birinchi kuni yoki homiladorlik sanasini kiriting. Kalkulyator joriy muddatni, TTSni, UZI va tahlillar sanalarini, shuningdek har haftada bolaning rivojlanishi haqida foydali ma'lumotlarni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать дату родов?', answer: 'Первый день последних месячных + 280 дней (40 недель). Или введите дату в калькулятор — он рассчитает автоматически с датами УЗИ.' },
      { question: 'Сколько недель длится беременность?', answer: '40 недель (280 дней) от первого дня последней менструации. Нормальные роды: 37-42 неделя. Только 5% родов — точно в ПДР.' },
      { question: 'Когда делать УЗИ?', answer: 'Три обязательных УЗИ: 11-14 недель (1-й скрининг), 18-22 недели (2-й скрининг), 30-34 недели (3-е УЗИ). В женской консультации — бесплатно.' },
      { question: 'Сколько стоят роды в Узбекистане?', answer: 'В государственном роддоме — бесплатно. В частных клиниках: 5-25 млн сум в зависимости от уровня сервиса.' },
      { question: 'Как часто нужно посещать врача?', answer: 'До 28 нед. — 1 раз/мес, 28-36 нед. — 2 раза/мес, после 36 нед. — еженедельно. Наблюдение в женской консультации бесплатно.' },
    ],
    faqUz: [
      { question: "Tug'ilish sanasini qanday hisoblash mumkin?", answer: "Oxirgi hayzning birinchi kuni + 280 kun (40 hafta). Yoki kalkulyatorga sanani kiriting — u UZI sanalari bilan avtomatik hisoblaydi." },
      { question: "Homiladorlik necha hafta davom etadi?", answer: "Oxirgi hayzning birinchi kunidan 40 hafta (280 kun). Normal tug'ilish: 37-42 hafta. Faqat 5% tug'ilishlar aniq TTSda bo'ladi." },
      { question: "UZI qachon qilish kerak?", answer: "Uchta majburiy UZI: 11-14 hafta (1-skrining), 18-22 hafta (2-skrining), 30-34 hafta (3-UZI). Ayollar maslahatxonasida — bepul." },
      { question: "O'zbekistonda tug'ruq qancha turadi?", answer: "Davlat tug'ruqxonasida — bepul. Xususiy klinikalarda: xizmat darajasiga qarab 5-25 mln so'm." },
      { question: "Shifokorga qanchalik tez-tez tashrif buyurish kerak?", answer: "28 haftagacha — oyda 1 marta, 28-36 hafta — oyda 2 marta, 36 haftadan keyin — har hafta. Ayollar maslahatxonasida kuzatish bepul." },
    ],
  },

  {
    slug: 'tuition',
    lastUpdated: '2025-09-15',
    sources: [
      { name: 'Министерство высшего образования РУз', url: 'https://edu.uz' },
      { name: 'Портал абитуриентов', url: 'https://my.uzbmb.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости обучения рассчитывает полные расходы на образование в вузах Узбекистана с учётом контрактной оплаты, проживания и сопутствующих расходов. В 2025 году в стране работает более 200 высших учебных заведений, включая 30+ филиалов зарубежных университетов (Westminster, INHA, Turin, Amity). Ежегодно в вузы поступает около 400 000 абитуриентов.',
      'Стоимость контрактного обучения в 2025 году: государственные вузы — 12-30 млн сум/год (ТашГУ, НУУз — от 14 млн, ТАТУ — от 16 млн); медицинские — 25-45 млн (ТМА — от 30 млн, стоматология — от 35 млн); технические — 15-28 млн; экономика и юриспруденция — 18-35 млн. Частные вузы: 15-50 млн. Филиалы зарубежных: 25-80 млн (Westminster — от 45 млн, INHA — от 35 млн). Бюджетные места — бесплатно (стипендия от 800 000 сум/мес).',
      'Дополнительные расходы на год: учебники и материалы — 1-3 млн сум; проживание в общежитии — 1-3 млн (800 000-2 500 000 сум/год); аренда комнаты в Ташкенте — 2-4 млн/мес; питание — 3-5 млн/год (250 000-400 000/мес); транспорт — 500 000-1 200 000/год. Итого сопутствующие расходы: 5-12 млн/год для иногородних студентов.',
      'Бюджетные гранты распределяются по результатам единого вступительного экзамена (DTM). В 2025 году государственный грант покрывает до 20-25% всех мест. Также доступны именные стипендии: Президентская (от 2 млн сум/мес), «Эл-юрт умиди» (обучение за рубежом), стипендии Фонда «Ист Крайст» и других организаций. Банки предлагают образовательные кредиты по льготным ставкам 14-18% на срок до 7 лет.',
      'Калькулятор обучения поможет рассчитать полный бюджет на весь период учёбы (бакалавриат 4 года, магистратура 2 года): введите вуз, специальность, форму обучения и город — получите подробную смету с разбивкой по годам и категориям расходов.',
    ],
    paragraphsUz: [
      "Ta'lim narxi kalkulyatori kontrakt to'lovi, yashash va qo'shimcha xarajatlarni hisobga olgan holda O'zbekiston OTMlarida o'qishning to'liq xarajatlarini hisoblaydi. 2025-yilda mamlakatda 200 dan ortiq oliy ta'lim muassasasi ishlaydi, jumladan 30+ xorijiy universitetlar filiallari (Westminster, INHA, Turin, Amity). Har yili taxminan 400 000 abituriyent OTMlarga kiradi.",
      "2025-yilda kontrakt asosida o'qish narxi: davlat OTMlari — yiliga 12-30 mln so'm (ToshDU, O'zMU — 14 mln dan, TATU — 16 mln dan); tibbiyot — 25-45 mln (TTA — 30 mln dan, stomatologiya — 35 mln dan); texnik — 15-28 mln; iqtisod va huquqshunoslik — 18-35 mln. Xususiy OTMlar: 15-50 mln. Xorijiy filiallar: 25-80 mln (Westminster — 45 mln dan, INHA — 35 mln dan). Byudjet o'rinlari — bepul (stipendiya oyiga 800 000 so'mdan).",
      "Yillik qo'shimcha xarajatlar: darsliklar va materiallar — 1-3 mln so'm; yotoqxonada yashash — 1-3 mln (yiliga 800 000-2 500 000 so'm); Toshkentda xona ijarasi — oyiga 2-4 mln; ovqatlanish — yiliga 3-5 mln (oyiga 250 000-400 000); transport — yiliga 500 000-1 200 000. Jami boshqa shahardagi talabalar uchun qo'shimcha xarajatlar: yiliga 5-12 mln.",
      "Byudjet grantlari yagona kirish imtihoni (DTM) natijalari bo'yicha taqsimlanadi. 2025-yilda davlat granti barcha o'rinlarning 20-25% gacha qoplaydi. Shuningdek, nomli stipendiyalar mavjud: Prezident stipendiyasi (oyiga 2 mln so'mdan), «El-yurt umidi» (xorijda o'qish), «Ist Krayst» fondi va boshqa tashkilotlar stipendiyalari. Banklar 7 yilgacha muddatga 14-18% imtiyozli stavkalarda ta'lim kreditlari taklif etadi.",
      "Ta'lim kalkulyatori butun o'qish davri (bakalavr 4 yil, magistratura 2 yil) uchun to'liq byudjetni hisoblashga yordam beradi: OTM, mutaxassislik, o'qish shakli va shaharni kiriting — yillar va xarajat toifalari bo'yicha batafsil smetani olasiz.",
    ],
    faqRu: [
      { question: 'Сколько стоит обучение в вузе?', answer: 'Государственные: 12-30 млн/год. Медвузы: 25-45 млн. Частные: 15-50 млн. Филиалы зарубежных: 25-80 млн. Бюджет — бесплатно.' },
      { question: 'Есть ли образовательные кредиты?', answer: 'Да, банки (Ipoteka bank, Kapitalbank) предлагают кредиты по ставке 14-18% на срок до 7 лет с отсрочкой до окончания учёбы.' },
      { question: 'Какие дополнительные расходы?', answer: 'Учебники: 1-3 млн/год, общежитие: 1-3 млн, питание: 3-5 млн, транспорт: 0,5-1,2 млн. Итого: 5-12 млн/год для иногородних.' },
      { question: 'Сколько бюджетных мест?', answer: 'Около 20-25% всех мест. Распределяются по результатам DTM. Также есть именные стипендии и гранты.' },
      { question: 'Какие вузы самые дорогие?', answer: 'Филиалы зарубежных: Westminster (от 45 млн), INHA (от 35 млн). Из отечественных: медвузы — до 45 млн сум/год.' },
    ],
    faqUz: [
      { question: "OTMda o'qish qancha turadi?", answer: "Davlat: yiliga 12-30 mln. Tibbiyot: 25-45 mln. Xususiy: 15-50 mln. Xorijiy filiallar: 25-80 mln. Byudjet — bepul." },
      { question: "Ta'lim kreditlari bormi?", answer: "Ha, banklar (Ipoteka bank, Kapitalbank) o'qish tugagunga qadar kechiktirish bilan 7 yilgacha muddatga 14-18% stavkada kreditlar taklif etadi." },
      { question: "Qo'shimcha xarajatlar qanday?", answer: "Darsliklar: yiliga 1-3 mln, yotoqxona: 1-3 mln, ovqatlanish: 3-5 mln, transport: 0,5-1,2 mln. Jami: boshqa shahardagi talabalar uchun yiliga 5-12 mln." },
      { question: "Byudjet o'rinlari qancha?", answer: "Barcha o'rinlarning taxminan 20-25%. DTM natijalari bo'yicha taqsimlanadi. Shuningdek nomli stipendiya va grantlar mavjud." },
      { question: "Eng qimmat OTMlar qaysilar?", answer: "Xorijiy filiallar: Westminster (45 mln dan), INHA (35 mln dan). Mahalliylardan: tibbiyot OTMlari — yiliga 45 mln so'mgacha." },
    ],
  },

  {
    slug: 'education-loan',
    lastUpdated: '2025-10-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Ipoteka bank — Образовательные кредиты', url: 'https://ipotekabank.uz' },
    ],
    paragraphsRu: [
      'Образовательные кредиты в Узбекистане — специальные банковские продукты с льготными условиями для оплаты обучения в аккредитованных вузах. Ставка: 14-18% годовых (значительно ниже рыночных 22-28%). Срок: до 7 лет с льготным периодом. Основные банки-кредиторы: Ipoteka bank, Kapitalbank, Microcreditbank, Davr bank. Ежегодно более 50 000 студентов пользуются образовательными кредитами.',
      'Условия кредитования (2025): сумма — до 100% стоимости обучения (максимум зависит от банка, до 200 млн сум); ставка — 14-18% годовых; срок — до 7 лет (4 года обучение + 3 года погашение); льготный период — в течение обучения платятся только проценты (или полная отсрочка у некоторых банков). Обеспечение: поручительство родителей или третьих лиц.',
      'Пример расчёта: обучение в ТМА (медицинский) — 30 млн/год × 6 лет = 180 млн сум. Кредит под 16% на 9 лет (6 лет учёбы + 3 года погашение). Во время учёбы: проценты ≈ 2 400 000 сум/мес (первый год). После учёбы: аннуитетный платёж ≈ 7 500 000 сум/мес в течение 3 лет. Общая переплата: ~95 млн сум (53%).',
      'Требования к заёмщику: поступление в аккредитованный вуз Узбекистана (или одобренный зарубежный), возраст 17-30 лет, поручитель (родитель или опекун) со стабильным доходом, чистая кредитная история поручителя. Документы: справка о зачислении, паспорт студента и поручителя, справка о доходах поручителя, договор с вузом.',
      'Калькулятор образовательного кредита рассчитает ежемесячные платежи в период обучения и после, общую переплату и сравнит условия разных банков. Введите стоимость обучения, срок и ставку — получите подробный график платежей. Не забудьте учесть, что ставки могут меняться: привязка к ставке рефинансирования ЦБ РУз (13,5% в 2025).',
    ],
    paragraphsUz: [
      "O'zbekistonda ta'lim kreditlari — akkreditatsiyalangan OTMlarda o'qish uchun to'lovni imtiyozli shartlarda taqdim etuvchi maxsus bank mahsulotlari. Stavka: yillik 14-18% (bozor stavkalaridan 22-28% ancha past). Muddat: imtiyozli davr bilan 7 yilgacha. Asosiy kredit beruvchi banklar: Ipoteka bank, Kapitalbank, Mikrokreditbank, Davr bank. Har yili 50 000 dan ortiq talaba ta'lim kreditlaridan foydalanadi.",
      "Kreditlash shartlari (2025): summa — o'qish qiymatining 100% gacha (maksimum bankka bog'liq, 200 mln so'mgacha); stavka — yillik 14-18%; muddat — 7 yilgacha (4 yil o'qish + 3 yil qaytarish); imtiyozli davr — o'qish davrida faqat foizlar to'lanadi (yoki ba'zi banklarda to'liq kechiktirish). Ta'minot: ota-onalar yoki uchinchi shaxslarning kafillik.",
      "Hisoblash misoli: TTAda (tibbiyot) o'qish — yiliga 30 mln × 6 yil = 180 mln so'm. 16% da 9 yilga kredit (6 yil o'qish + 3 yil qaytarish). O'qish davomida: foizlar ≈ oyiga 2 400 000 so'm (birinchi yil). O'qishdan keyin: annuitetli to'lov ≈ 3 yil davomida oyiga 7 500 000 so'm. Umumiy ortiqcha to'lov: ~95 mln so'm (53%).",
      "Qarz oluvchiga talablar: O'zbekistonning akkreditatsiyalangan OTMiga (yoki tasdiqlangan xorijiy) qabul qilinish, yoshi 17-30, barqaror daromadli kafil (ota-ona yoki vasiy), kafilning toza kredit tarixi. Hujjatlar: ro'yxatga olish to'g'risida ma'lumotnoma, talaba va kafil pasporti, kafil daromadlari to'g'risida ma'lumotnoma, OTM bilan shartnoma.",
      "Ta'lim krediti kalkulyatori o'qish davrida va undan keyin oylik to'lovlarni, umumiy ortiqcha to'lovni hisoblaydi va turli banklar shartlarini solishtiradi. O'qish narxi, muddat va stavkani kiriting — batafsil to'lov jadvalini olasiz. Stavkalar o'zgarishi mumkinligini unutmang: O'zbekiston MB qayta moliyalash stavkasiga bog'lanish (2025-yilda 13,5%).",
    ],
    faqRu: [
      { question: 'Какие ставки по образовательным кредитам?', answer: '14-18% годовых — значительно ниже рыночных 22-28%. Ставка привязана к ставке ЦБ (13,5% в 2025).' },
      { question: 'Когда начинать погашение?', answer: 'После окончания учёбы. Во время обучения — только проценты (1-3 млн сум/мес) или полная отсрочка у некоторых банков.' },
      { question: 'Какие документы нужны?', answer: 'Справка о зачислении, паспорт, поручитель с доходами, справка о доходах поручителя, договор с вузом.' },
      { question: 'Какую сумму можно получить?', answer: 'До 100% стоимости обучения, максимум до 200 млн сум в зависимости от банка и вуза.' },
      { question: 'Какая переплата по кредиту?', answer: 'При ставке 16% и сроке 7 лет — переплата составит около 50-60% от суммы кредита. Используйте калькулятор для точного расчёта.' },
    ],
    faqUz: [
      { question: "Ta'lim kreditlari stavkalari qanday?", answer: "Yillik 14-18% — bozor stavkalaridan 22-28% ancha past. Stavka MB stavkasiga (2025-yilda 13,5%) bog'langan." },
      { question: "Qaytarishni qachon boshlash kerak?", answer: "O'qish tugaganidan keyin. O'qish davrida — faqat foizlar (oyiga 1-3 mln so'm) yoki ba'zi banklarda to'liq kechiktirish." },
      { question: "Qanday hujjatlar kerak?", answer: "Ro'yxatga olish ma'lumotnomasi, pasport, daromadli kafil, kafil daromadlari ma'lumotnomasi, OTM bilan shartnoma." },
      { question: "Qancha summa olish mumkin?", answer: "O'qish qiymatining 100% gacha, bank va OTMga qarab maksimum 200 mln so'mgacha." },
      { question: "Kredit bo'yicha ortiqcha to'lov qancha?", answer: "16% stavka va 7 yil muddatda ortiqcha to'lov kredit summasining taxminan 50-60% ni tashkil etadi. Aniq hisoblash uchun kalkulyatordan foydalaning." },
    ],
  },

  {
    slug: 'gpa',
    lastUpdated: '2025-06-25',
    sources: [
      { name: 'Министерство высшего образования РУз', url: 'https://edu.uz' },
      { name: 'Программа «Эл-юрт умиди»', url: 'https://el-yurtumidi.uz' },
    ],
    paragraphsRu: [
      'Калькулятор GPA переводит оценки узбекской 5-балльной системы в международную шкалу GPA (0-4.0), которая используется в большинстве зарубежных университетов. Соответствие: «отлично» (5) = 4.0; «хорошо» (4) = 3.0; «удовлетворительно» (3) = 2.0; «неудовлетворительно» (2) = 0. Для студентов Узбекистана, планирующих поступление за рубеж или участие в программе «Эл-юрт умиди», точный расчёт GPA критически важен.',
      'GPA рассчитывается как средневзвешенное оценок с учётом кредитов (ECTS или академических часов) каждого предмета: GPA = Σ(Оценка в GPA × Кредиты) / Σ(Кредиты). Пример: 5 предметов — «Математика» (5/3 кред.) + «Физика» (4/4 кред.) + «Английский» (5/2 кред.) + «История» (4/2 кред.) + «Химия» (3/3 кред.) = (4,0×3 + 3,0×4 + 4,0×2 + 3,0×2 + 2,0×3) / 14 = 44/14 = 3,14.',
      'Требования зарубежных университетов к GPA выпускников из Узбекистана: США (Ivy League) — от 3.7; Великобритания (Russell Group) — от 3.5; Германия — от 3.0; Южная Корея (KAIST, SNU) — от 3.2; Турция — от 2.5; Россия (МГУ, ВШЭ) — от 3.0. Программа «Эл-юрт умиди» — от 3.5 GPA для магистратуры и от 3.0 для бакалавриата.',
      'Некоторые вузы Узбекистана (Westminster, INHA, MDIS) уже используют 100-балльную систему: 86-100 = A (4.0), 71-85 = B (3.0), 56-70 = C (2.0), ниже 55 = F (0). Калькулятор поддерживает обе системы оценивания. При подаче документов за рубеж рекомендуется также предоставить WES-оценку (World Education Services) для верификации GPA.',
      'Калькулятор GPA на нашем сайте: введите название каждого предмета, оценку и количество кредитов — получите общий GPA с точностью до двух знаков. Также показывается, какие предметы «тянут» GPA вниз и на сколько пунктов улучшится GPA при пересдаче. Полезно для студентов, готовящихся к магистратуре за рубежом.',
    ],
    paragraphsUz: [
      "GPA kalkulyatori o'zbek 5-balli tizim baholarini xorijiy universitetlarning aksariyatida qo'llaniladigan xalqaro GPA shkalasiga (0-4.0) o'giradi. Moslik: «a'lo» (5) = 4.0; «yaxshi» (4) = 3.0; «qoniqarli» (3) = 2.0; «qoniqarsiz» (2) = 0. Xorijga o'qishga kirishni yoki «El-yurt umidi» dasturida ishtirok etishni rejalashtirgan O'zbekiston talabalari uchun aniq GPA hisobi juda muhim.",
      "GPA har bir fanning kreditlari (ECTS yoki akademik soatlari) ni hisobga olgan holda baholarning o'rtacha tortilgan qiymati sifatida hisoblanadi: GPA = Σ(GPA bahoxi × Kreditlar) / Σ(Kreditlar). Misol: 5 fan — «Matematika» (5/3 kr.) + «Fizika» (4/4 kr.) + «Ingliz tili» (5/2 kr.) + «Tarix» (4/2 kr.) + «Kimyo» (3/3 kr.) = (4,0×3 + 3,0×4 + 4,0×2 + 3,0×2 + 2,0×3) / 14 = 44/14 = 3,14.",
      "Xorijiy universitetlarning O'zbekiston bitiruvchilaridan GPA talablari: AQSh (Ivy League) — 3.7 dan; Buyuk Britaniya (Russell Group) — 3.5 dan; Germaniya — 3.0 dan; Janubiy Koreya (KAIST, SNU) — 3.2 dan; Turkiya — 2.5 dan; Rossiya (MGU, VShE) — 3.0 dan. «El-yurt umidi» dasturi — magistratura uchun 3.5 GPA dan, bakalavr uchun 3.0 dan.",
      "O'zbekistonning ba'zi OTMlari (Westminster, INHA, MDIS) allaqachon 100 balli tizimni qo'llaydi: 86-100 = A (4.0), 71-85 = B (3.0), 56-70 = C (2.0), 55 dan past = F (0). Kalkulyator ikkala baholash tizimini ham qo'llab-quvvatlaydi. Xorijga hujjat topshirishda GPA verifikatsiyasi uchun WES (World Education Services) bahosini ham taqdim etish tavsiya etiladi.",
      "Saytimizdagi GPA kalkulyatori: har bir fanning nomini, bahosini va kreditlar sonini kiriting — ikki xonali aniqlikda umumiy GPAni olasiz. Shuningdek, qaysi fanlar GPAni pastga tortayotgani va qayta topshirishda GPA necha punktga yaxshilanishi ko'rsatiladi. Xorijda magistraturaga tayyorlanayotgan talabalar uchun foydali.",
    ],
    faqRu: [
      { question: 'Как перевести оценки в GPA?', answer: '5 = 4.0, 4 = 3.0, 3 = 2.0, 2 = 0. Рассчитайте средневзвешенное с учётом кредитов каждого предмета.' },
      { question: 'Какой GPA нужен для магистратуры за рубежом?', answer: 'США (топ): от 3.7. Великобритания: от 3.5. Германия: от 3.0. Программа «Эл-юрт умиди»: от 3.5.' },
      { question: 'Как повысить GPA?', answer: 'Пересдайте предметы с низкими оценками (3→4 даёт +0,07-0,15 к GPA). Берите дополнительные курсы с высокими оценками.' },
      { question: 'Учитываются ли кредиты при расчёте GPA?', answer: 'Да, GPA — средневзвешенное. Предмет с 5 кредитами влияет сильнее, чем с 2.' },
      { question: 'Что такое WES-оценка?', answer: 'World Education Services — верификация GPA для зарубежных вузов. Стоимость ~$200. Рекомендуется для поступления в США и Канаду.' },
    ],
    faqUz: [
      { question: "Baholarni GPAga qanday o'girish mumkin?", answer: "5 = 4.0, 4 = 3.0, 3 = 2.0, 2 = 0. Har bir fanning kreditlarini hisobga olgan holda o'rtacha tortilgan qiymatni hisoblang." },
      { question: "Xorijda magistratura uchun qanday GPA kerak?", answer: "AQSh (top): 3.7 dan. Buyuk Britaniya: 3.5 dan. Germaniya: 3.0 dan. «El-yurt umidi» dasturi: 3.5 dan." },
      { question: "GPAni qanday oshirish mumkin?", answer: "Past baholi fanlarni qayta topshiring (3→4 GPAga +0,07-0,15 beradi). Yuqori baholi qo'shimcha kurslar oling." },
      { question: "GPA hisoblashda kreditlar hisobga olinadimi?", answer: "Ha, GPA — o'rtacha tortilgan qiymat. 5 kreditli fan 2 kreditliga qaraganda kuchliroq ta'sir qiladi." },
      { question: "WES bahosi nima?", answer: "World Education Services — xorijiy OTMlar uchun GPA verifikatsiyasi. Narxi ~$200. AQSh va Kanadaga kirish uchun tavsiya etiladi." },
    ],
  },

  {
    slug: 'fitr-sadaka',
    lastUpdated: '2025-05-20',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Фитр-садака (закят аль-фитр) — обязательная милостыня, выплачиваемая каждым мусульманином перед праздником Ид аль-Фитр (Рамадан хайит). Размер определяется стоимостью 1 са (≈3,5 кг) основного продукта питания региона. В Узбекистане это пшеница, рис или ячмень. По расчётам Управления мусульман Узбекистана на 2025 год: минимум ~45 000 сум (по пшенице) и ~65 000 сум (по рису) на одного человека.',
      'Фитр-садака выплачивается за каждого члена семьи, включая новорождённых детей, пожилых родителей и других иждивенцев. Глава семьи (обычно отец) несёт ответственность за выплату за всех. Пример: семья из 5 человек (муж, жена, 3 детей) × 55 000 сум = 275 000 сум. Рекомендуется выплатить до праздничной утренней молитвы (намаз аль-Ид).',
      'В Узбекистане фитр-садака можно передать несколькими способами: напрямую нуждающимся (предпочтительно), через имама местной мечети, через фонд Вакф (vaqf.uz), через благотворительные организации. В крупных мечетях Ташкента (Минор, Хаст Имом, Тинчлик) организуются специальные пункты приёма фитр-садака в последние дни Рамадана.',
      'Получатели фитр-садака — бедные и нуждающиеся мусульмане, которые не имеют достаточно средств для праздничного дня. Цель — обеспечить радость праздника для всех членов общины. В Узбекистане с населением более 36 млн человек, из которых более 90% мусульмане, традиция фитр-садака имеет огромное социальное значение.',
      'Калькулятор фитр-садака рассчитает точную сумму для вашей семьи: введите количество членов семьи и выберите продукт (пшеница, рис, ячмень) — получите общую сумму к выплате. Калькулятор использует актуальные цены на продукты в Узбекистане.',
    ],
    paragraphsUz: [
      "Fitr-sadaqa (zakot al-fitr) — Iyd al-Fitr (Ramazon hayiti) bayramidan oldin har bir musulmon tomonidan to'lanadigan majburiy sadaqa. Miqdori hudud asosiy oziq-ovqat mahsulotining 1 so' (≈3,5 kg) narxi bilan belgilanadi. O'zbekistonda bu bug'doy, guruch yoki arpa. O'zbekiston Musulmonlari boshqarmasining 2025-yilgi hisoblariga ko'ra: minimum ~45 000 so'm (bug'doy bo'yicha) va ~65 000 so'm (guruch bo'yicha) bir kishiga.",
      "Fitr-sadaqa har bir oila a'zosi uchun, jumladan yangi tug'ilgan bolalar, keksa ota-onalar va boshqa qaramog'idagilar uchun to'lanadi. Oila boshlig'i (odatda ota) barcha uchun to'lash mas'uliyatini o'z zimmasiga oladi. Misol: 5 kishilik oila (er, xotin, 3 farzand) × 55 000 so'm = 275 000 so'm. Bayram ertalab namozigacha (namoz al-Iyd) to'lash tavsiya etiladi.",
      "O'zbekistonda fitr-sadaqani bir necha usulda uzatish mumkin: muhtojlarga bevosita (afzalroq), mahalliy masjid imomi orqali, Vaqf fondi (vaqf.uz) orqali, xayriya tashkilotlari orqali. Toshkentning yirik masjidlarida (Minor, Xast Imom, Tinchlik) Ramazonning oxirgi kunlarida fitr-sadaqa qabul qilish uchun maxsus punktlar tashkil etiladi.",
      "Fitr-sadaqa oluvchilar — bayram kuni uchun yetarli mablag'ga ega bo'lmagan kambag'al va muhtoj musulmonlar. Maqsad — jamoa barcha a'zolari uchun bayram quvonchini ta'minlash. 36 mln dan ortiq aholisi bo'lgan O'zbekistonda, ularning 90% dan ortig'i musulmon, fitr-sadaqa an'anasi ulkan ijtimoiy ahamiyatga ega.",
      "Fitr-sadaqa kalkulyatori oilangiz uchun aniq summani hisoblaydi: oila a'zolari sonini kiriting va mahsulotni tanlang (bug'doy, guruch, arpa) — to'lanadigan umumiy summani olasiz. Kalkulyator O'zbekistondagi dolzarb oziq-ovqat narxlaridan foydalanadi.",
    ],
    faqRu: [
      { question: 'Сколько фитр-садака в 2025 году?', answer: 'Минимум ~45 000 сум (пшеница) до ~65 000 сум (рис) на человека. Семья из 5 человек: 225 000-325 000 сум.' },
      { question: 'Кто должен платить?', answer: 'Каждый мусульманин за себя и иждивенцев (дети, пожилые родители). Глава семьи платит за всех.' },
      { question: 'Когда нужно выплатить?', answer: 'До утренней праздничной молитвы Ид аль-Фитр. Рекомендуется в последние дни Рамадана.' },
      { question: 'Куда передать фитр-садака?', answer: 'Напрямую нуждающимся, через мечеть, фонд Вакф (vaqf.uz) или благотворительные организации.' },
      { question: 'Как определяется размер фитр-садака?', answer: 'Стоимость 1 са (~3,5 кг) основного продукта: пшеница, рис или ячмень. Управление мусульман Узбекистана публикует размеры ежегодно.' },
    ],
    faqUz: [
      { question: '2025-yilda fitr-sadaqa qancha?', answer: "Minimum ~45 000 so'm (bug'doy) dan ~65 000 so'm (guruch) gacha kishiga. 5 kishilik oila: 225 000-325 000 so'm." },
      { question: "Kim to'lashi kerak?", answer: "Har bir musulmon o'zi va qaramog'idagilar (bolalar, keksa ota-onalar) uchun. Oila boshlig'i barcha uchun to'laydi." },
      { question: "Qachon to'lash kerak?", answer: "Iyd al-Fitr ertalab bayram namozigacha. Ramazonning oxirgi kunlarida to'lash tavsiya etiladi." },
      { question: "Fitr-sadaqani qayerga uzatish mumkin?", answer: "Muhtojlarga bevosita, masjid orqali, Vaqf fondi (vaqf.uz) yoki xayriya tashkilotlari orqali." },
      { question: "Fitr-sadaqa miqdori qanday aniqlanadi?", answer: "1 so' (~3,5 kg) asosiy mahsulot narxi: bug'doy, guruch yoki arpa. O'zbekiston Musulmonlari boshqarmasi miqdorlarni har yili e'lon qiladi." },
    ],
  },

  {
    slug: 'fidiya-sadaka',
    lastUpdated: '2025-05-15',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Фидия-садака — компенсация за пропущенные дни поста Рамадана, когда человек физически не может ни поститься, ни восполнить пост позднее. Это касается хронически больных, пожилых людей и лиц с постоянными ограничениями здоровья. Размер фидии: стоимость одного полноценного приёма пищи для одного нуждающегося за каждый пропущенный день. В Узбекистане в 2025 году: 30 000-50 000 сум за один день.',
      'Важное отличие от каффары: фидия выплачивается за невозможность поста, каффара — за намеренное нарушение. Если человек временно болен и может восполнить пост после выздоровления — фидия не требуется, необходимо восполнить (казо) пропущенные дни. Фидия обязательна только при постоянной невозможности: диабет, онкология, почечная недостаточность, глубокая старость.',
      'Расчёт фидии за полный месяц Рамадан (30 дней): при стоимости приёма пищи 40 000 сум → 30 × 40 000 = 1 200 000 сум. При расчёте по рису (1 мудд ≈ 750 г): 30 × 750 г × 15 000 сум/кг = 337 500 сум (минимальный расчёт). Управление мусульман Узбекистана рекомендует ориентироваться на среднюю стоимость обеда в регионе проживания.',
      'Фидия передаётся нуждающимся мусульманам: можно накормить одного бедного за каждый пропущенный день или передать денежный эквивалент. В Узбекистане фидию можно передать через мечети, благотворительные столовые при мечетях (особенно распространены в Рамадан — ифтар-хайрия), фонд Вакф или напрямую нуждающимся.',
      'Калькулятор фидия-садака автоматически рассчитает сумму на основе количества пропущенных дней и средней стоимости питания в вашем регионе Узбекистана. Введите количество дней — получите точную сумму компенсации.',
    ],
    paragraphsUz: [
      "Fidiya-sadaqa — inson jismoniy jihatdan na ro'za tutishi, na keyinroq qazo qilishi mumkin bo'lmagan Ramazon ro'zasining o'tkazib yuborilgan kunlari uchun kompensatsiya. Bu surunkali kasallar, keksalar va sog'lig'i doimiy cheklangan shaxslarga tegishli. Fidiya miqdori: har bir o'tkazib yuborilgan kun uchun bitta muhtojga to'laqonli ovqatlanish narxi. O'zbekistonda 2025-yilda: bir kunga 30 000-50 000 so'm.",
      "Kafforadan muhim farqi: fidiya ro'za tuta olmaslik uchun, kaffora esa qasddan buzganlik uchun to'lanadi. Agar inson vaqtincha kasal bo'lib, sog'ayganidan keyin ro'za tutishi mumkin bo'lsa — fidiya talab etilmaydi, o'tkazib yuborilgan kunlarni qazo qilish kerak. Fidiya faqat doimiy imkonsizlikda majburiy: diabet, onkologiya, buyrak yetishmovchiligi, chuqur keksalik.",
      "To'liq Ramazon oyi (30 kun) uchun fidiya hisobi: ovqatlanish narxi 40 000 so'm bo'lganda → 30 × 40 000 = 1 200 000 so'm. Guruch bo'yicha hisoblanganda (1 mudd ≈ 750 g): 30 × 750 g × 15 000 so'm/kg = 337 500 so'm (minimal hisob). O'zbekiston Musulmonlari boshqarmasi yashash hududidagi o'rtacha tushlik narxiga yo'naltirish tavsiya etadi.",
      "Fidiya muhtoj musulmonlarga uzatiladi: har bir o'tkazib yuborilgan kun uchun bitta kambag'alni ovqatlantirish yoki pul ekvivalentini uzatish mumkin. O'zbekistonda fidiyani masjidlar, masjidlardagi xayriya oshxonalari (Ramazonda ayniqsa keng tarqalgan — iftor-xayriya), Vaqf fondi yoki bevosita muhtojlar orqali uzatish mumkin.",
      "Fidiya-sadaqa kalkulyatori o'tkazib yuborilgan kunlar soni va O'zbekistondagi hududingizdagi o'rtacha ovqatlanish narxi asosida summani avtomatik hisoblaydi. Kunlar sonini kiriting — kompensatsiyaning aniq summasini olasiz.",
    ],
    faqRu: [
      { question: 'Сколько фидия-садака за один день?', answer: '30 000-50 000 сум — стоимость одного полноценного приёма пищи. Зависит от региона Узбекистана.' },
      { question: 'Кто обязан платить фидию?', answer: 'Те, кто постоянно не может поститься: хронические больные (диабет, онкология), пожилые. Временно больные — восполняют пост (казо).' },
      { question: 'Сколько за весь Рамадан?', answer: '30 дней × ~40 000 сум = ~1 200 000 сум. Минимальный расчёт по рису: ~337 500 сум.' },
      { question: 'Чем фидия отличается от каффары?', answer: 'Фидия — за невозможность поста. Каффара — за намеренное нарушение (60 дней поста или кормление 60 бедных).' },
      { question: 'Куда передать фидию в Узбекистане?', answer: 'Через мечети, ифтар-хайрия, фонд Вакф (vaqf.uz) или напрямую нуждающимся.' },
    ],
    faqUz: [
      { question: "Bir kunlik fidiya-sadaqa qancha?", answer: "30 000-50 000 so'm — bitta to'laqonli ovqatlanish narxi. O'zbekiston hududiga bog'liq." },
      { question: "Fidiya to'lash kimga majburiy?", answer: "Doimiy ro'za tutolmaydiganlar: surunkali kasallar (diabet, onkologiya), keksalar. Vaqtincha kasallar — ro'zani qazo qiladi." },
      { question: "Butun Ramazon uchun qancha?", answer: "30 kun × ~40 000 so'm = ~1 200 000 so'm. Guruch bo'yicha minimal hisob: ~337 500 so'm." },
      { question: "Fidiya kafforadan nimasi bilan farq qiladi?", answer: "Fidiya — ro'za tuta olmaslik uchun. Kaffora — qasddan buzganlik uchun (60 kun ro'za yoki 60 kambag'alni ovqatlantirish)." },
      { question: "O'zbekistonda fidiyani qayerga uzatish mumkin?", answer: "Masjidlar, iftor-xayriya, Vaqf fondi (vaqf.uz) yoki bevosita muhtojlar orqali." },
    ],
  },

  {
    slug: 'kurban',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' }],
    paragraphsRu: ['Калькулятор курбана рассчитывает стоимость жертвенного животного для праздника Ид аль-Адха (Курбан хайит). Стоимость барана (2025): 2 500 000 − 5 000 000 сум. Быка (корова): 15 000 000 − 30 000 000 сум (делится на 7 долей).', 'Требования к животному: баран — от 6 месяцев, бык — от 2 лет, здоровое, без существенных изъянов. Одна доля быка = примерно стоимости одного барана.', 'Мясо распределяется на 3 части: 1/3 семье, 1/3 родственникам/соседям, 1/3 нуждающимся.'],
    paragraphsUz: ["Qurbon kalkulyatori Iyd al-Adho (Qurbon hayiti) bayrami uchun qurbonlik hayvonining narxini hisoblaydi. Qo'y narxi (2025): 2 500 000 − 5 000 000 so'm. Buqa (sigir): 15 000 000 − 30 000 000 so'm (7 ulushga bo'linadi).", "Hayvonga talablar: qo'y — 6 oydan, buqa — 2 yoshdan, sog'lom, sezilarli nuqsonlarsiz. Buqaning bitta ulushi ≈ bitta qo'y narxi.", "Go'sht 3 qismga taqsimlanadi: 1/3 oilaga, 1/3 qarindosh/qo'shnilarga, 1/3 muhtojlarga."],
    faqRu: [{ question: 'Сколько стоит курбан в 2025?', answer: 'Баран: 2,5-5 млн сум. Бык: 15-30 млн (7 долей, ~2,1-4,3 млн за долю).' }, { question: 'Кто обязан резать курбан?', answer: 'Совершеннолетний мусульманин, обладающий нисабом (имущество > 85 г золота).' }, { question: 'Как делится мясо?', answer: '1/3 семье, 1/3 родным/соседям, 1/3 нуждающимся.' }],
    faqUz: [{ question: "2025-yilda qurbon qancha turadi?", answer: "Qo'y: 2,5-5 mln so'm. Buqa: 15-30 mln (7 ulush, ulushiga ~2,1-4,3 mln)." }, { question: "Qurbon qilish kimga vojib?", answer: "Nisobga (85 g oltindan ortiq mol-mulk) ega balog'atga yetgan musulmon." }, { question: "Go'sht qanday taqsimlanadi?", answer: "1/3 oilaga, 1/3 qarindosh/qo'shnilarga, 1/3 muhtojlarga." }],
  },

  {
    slug: 'date-calc',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор дат вычисляет разницу между двумя датами в днях, неделях, месяцах и годах. Также позволяет прибавить или вычесть определённое количество дней из даты.', 'Примеры использования: расчёт срока договора, определение возраста в днях, планирование событий, расчёт просрочки платежей.', 'Формулы учитывают високосные годы (29 февраля). Все расчёты производятся по григорианскому календарю.'],
    paragraphsUz: ["Sana kalkulyatori ikki sana o'rtasidagi farqni kunlar, haftalar, oylar va yillarda hisoblaydi. Shuningdek, sanaga ma'lum kunlar sonini qo'shish yoki ayirish imkonini beradi.", "Foydalanish misollari: shartnoma muddatini hisoblash, kunlardagi yoshni aniqlash, tadbirlarni rejalashtirish, to'lov kechikishini hisoblash.", "Formulalar kabisa yillarini (29-fevral) hisobga oladi. Barcha hisob-kitoblar grigoriy taqvimi bo'yicha amalga oshiriladi."],
    faqRu: [{ question: 'Как узнать разницу между датами?', answer: 'Введите две даты — калькулятор покажет разницу в днях, неделях, месяцах и годах.' }, { question: 'Учитываются ли високосные годы?', answer: 'Да, все расчёты учитывают високосные годы (366 дней).' }, { question: 'Можно ли прибавить дни к дате?', answer: 'Да, введите дату и количество дней — получите результирующую дату.' }],
    faqUz: [{ question: "Sanalar o'rtasidagi farqni qanday bilish mumkin?", answer: "Ikkita sanani kiriting — kalkulyator kunlar, haftalar, oylar va yillardagi farqni ko'rsatadi." }, { question: "Kabisa yillari hisobga olinadimi?", answer: "Ha, barcha hisob-kitoblar kabisa yillarini (366 kun) hisobga oladi." }, { question: "Sanaga kunlar qo'shish mumkinmi?", answer: "Ha, sana va kunlar sonini kiriting — natija sanani olasiz." }],
  },

  {
    slug: 'area',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор площади вычисляет площадь различных геометрических фигур: прямоугольник, круг, треугольник, трапеция, параллелограмм, эллипс. Также конвертирует единицы: м², сотка (100 м²), гектар (10 000 м²), акр.', 'Формулы: прямоугольник = a × b; круг = π × r²; треугольник = ½ × a × h; трапеция = ½ × (a + b) × h.', 'Часто используется для: расчёта площади комнат (ремонт), земельных участков, строительных площадок.'],
    paragraphsUz: ["Maydon kalkulyatori turli geometrik shakllarning maydonini hisoblaydi: to'g'ri to'rtburchak, aylana, uchburchak, trapetsiya, parallelogramm, ellips. Birliklarni ham o'giradi: m², sotix (100 m²), gektar (10 000 m²), akr.", "Formulalar: to'g'ri to'rtburchak = a × b; aylana = π × r²; uchburchak = ½ × a × h; trapetsiya = ½ × (a + b) × h.", "Ko'p ishlatiladigan maqsadlar: xonalar maydonini hisoblash (ta'mir), yer uchastkalar, qurilish maydonchalari."],
    faqRu: [{ question: 'Как перевести сотки в м²?', answer: '1 сотка = 100 м². 6 соток = 600 м². 1 гектар = 100 соток = 10 000 м².' }, { question: 'Как рассчитать площадь комнаты?', answer: 'Длина × Ширина. Для комнаты 4×5 м: площадь = 20 м².' }, { question: 'Сколько соток в гектаре?', answer: '100 соток = 1 гектар = 10 000 м².' }],
    faqUz: [{ question: "Sotixni m² ga qanday o'girish mumkin?", answer: "1 sotix = 100 m². 6 sotix = 600 m². 1 gektar = 100 sotix = 10 000 m²." }, { question: "Xona maydonini qanday hisoblash mumkin?", answer: "Uzunlik × Kenglik. 4×5 m xona uchun: maydon = 20 m²." }, { question: "Gektarda nechta sotix bor?", answer: "100 sotix = 1 gektar = 10 000 m²." }],
  },

  {
    slug: 'unit-converter',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Универсальный конвертер единиц измерения: длина (м, км, мили, футы), масса (кг, фунты, унции), объём (литры, галлоны), температура (°C, °F, K), скорость, давление и другие.', 'Наиболее используемые конвертации: км ↔ мили (1 миля = 1,609 км), кг ↔ фунты (1 фунт = 0,454 кг), литры ↔ галлоны (1 галлон = 3,785 л), °C ↔ °F (°F = °C × 9/5 + 32).', 'Полезно для: международной торговли, путешествий, технических расчётов, кулинарных рецептов.'],
    paragraphsUz: ["Universal o'lchov birliklari konverteri: uzunlik (m, km, mil, fut), massa (kg, funt, unsiya), hajm (litr, gallon), harorat (°C, °F, K), tezlik, bosim va boshqalar.", "Eng ko'p ishlatiladigan konvertatsiyalar: km ↔ mil (1 mil = 1,609 km), kg ↔ funt (1 funt = 0,454 kg), litr ↔ gallon (1 gallon = 3,785 l), °C ↔ °F (°F = °C × 9/5 + 32).", "Foydalanish sohalari: xalqaro savdo, sayohatlar, texnik hisob-kitoblar, pazandachilik retseptlari."],
    faqRu: [{ question: 'Сколько км в миле?', answer: '1 миля = 1,609 км. 1 км = 0,621 мили.' }, { question: 'Как перевести °C в °F?', answer: '°F = °C × 9/5 + 32. Например, 20°C = 68°F.' }, { question: 'Сколько литров в галлоне?', answer: '1 американский галлон = 3,785 л.' }],
    faqUz: [{ question: "Bir milda necha km bor?", answer: "1 mil = 1,609 km. 1 km = 0,621 mil." }, { question: "°Cni °Fga qanday o'girish mumkin?", answer: "°F = °C × 9/5 + 32. Masalan, 20°C = 68°F." }, { question: "Bir gallonda necha litr bor?", answer: "1 Amerika galloni = 3,785 l." }],
  },

  {
    slug: 'number-to-words',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Конвертер числа в пропись переводит числовые суммы в текстовое представление на русском и узбекском языках. Необходим для заполнения финансовых документов, договоров, счетов и актов.', 'Поддерживает суммы до триллионов. Пример: 1 234 567 → «один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь». С валютой: «1 234 567 сум 00 тийин».', 'Автоматически добавляет валюту (сум, тийин / доллар, цент). Учитывает правила склонения числительных.'],
    paragraphsUz: ["Sonni yozuvga o'giruvchi raqamli summalarni o'zbek va rus tillarida matnli ko'rinishga o'giradi. Moliyaviy hujjatlar, shartnomalar, hisob-fakturalar va dalolatnomalarni to'ldirish uchun zarur.", "Trilliongacha summalarni qo'llab-quvvatlaydi. Misol: 1 234 567 → «bir million ikki yuz o'ttiz to'rt ming besh yuz oltmish yetti». Valyuta bilan: «1 234 567 so'm 00 tiyin».", "Avtomatik ravishda valyutani qo'shadi (so'm, tiyin / dollar, sent). Son turlanishi qoidalarini hisobga oladi."],
    faqRu: [{ question: 'Зачем нужен конвертер числа в пропись?', answer: 'Для заполнения финансовых документов, где сумма должна быть указана прописью.' }, { question: 'Какие языки поддерживаются?', answer: 'Русский и узбекский (латиница).' }, { question: 'Какие валюты поддерживаются?', answer: 'Узбекский сум (сум/тийин), доллар США (доллар/цент), евро.' }],
    faqUz: [{ question: "Sonni yozuvga o'giruvchi nima uchun kerak?", answer: "Summa yozuv bilan ko'rsatilishi kerak bo'lgan moliyaviy hujjatlarni to'ldirish uchun." }, { question: "Qanday tillar qo'llab-quvvatlanadi?", answer: "Rus va o'zbek (lotin yozuvi)." }, { question: "Qanday valyutalar qo'llab-quvvatlanadi?", answer: "O'zbek so'mi (so'm/tiyin), AQSh dollari (dollar/sent), yevro." }],
  },

  {
    slug: 'age',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор возраста определяет точный возраст в годах, месяцах и днях, а также общее количество прожитых дней. Введите дату рождения — калькулятор покажет полный возраст и ближайший день рождения.', 'Дополнительно показывает: возраст в месяцах, неделях, днях, часах. Полезно для: определения возраста для документов, расчёта пенсионного возраста, знаков зодиака.', 'Пример: дата рождения 15.03.1990, текущая дата 01.08.2025. Возраст: 35 лет 4 месяца 17 дней. Прожито: 12 922 дня.'],
    paragraphsUz: ["Yosh kalkulyatori yillar, oylar va kunlardagi aniq yoshni, shuningdek yashagan kunlarning umumiy sonini aniqlaydi. Tug'ilgan sanani kiriting — kalkulyator to'liq yosh va eng yaqin tug'ilgan kunni ko'rsatadi.", "Qo'shimcha ko'rsatadi: oylar, haftalar, kunlar, soatlardagi yosh. Foydalanish sohalari: hujjatlar uchun yoshni aniqlash, pensiya yoshini hisoblash, burjlar.", "Misol: tug'ilgan sana 15.03.1990, joriy sana 01.08.2025. Yosh: 35 yil 4 oy 17 kun. Yashagan: 12 922 kun."],
    faqRu: [{ question: 'Как узнать точный возраст?', answer: 'Введите дату рождения. Калькулятор покажет полный возраст в годах, месяцах и днях.' }, { question: 'Сколько дней в году?', answer: '365 дней (366 в високосном году).' }, { question: 'Как определить знак зодиака?', answer: 'По дате рождения. Калькулятор автоматически показывает знак зодиака.' }],
    faqUz: [{ question: "Aniq yoshni qanday bilish mumkin?", answer: "Tug'ilgan sanani kiriting. Kalkulyator yillar, oylar va kunlardagi to'liq yoshni ko'rsatadi." }, { question: "Bir yilda necha kun bor?", answer: "365 kun (kabisa yilida 366)." }, { question: "Burjni qanday aniqlash mumkin?", answer: "Tug'ilgan sana bo'yicha. Kalkulyator avtomatik ravishda burjni ko'rsatadi." }],
  },

  {
    slug: 'random',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Генератор случайных чисел создаёт одно или несколько случайных чисел в заданном диапазоне. Поддерживает: целые и дробные числа, уникальные (без повторений) и с повторениями.', 'Применение: лотереи, розыгрыши, случайный выбор, генерация паролей, статистические эксперименты, игры. Генерация основана на криптографически стойком алгоритме.', 'Пример: 6 уникальных чисел от 1 до 49 (лотерея). Или случайное число от 1 до 100 для розыгрыша среди подписчиков.'],
    paragraphsUz: ["Tasodifiy sonlar generatori berilgan diapazon ichida bir yoki bir nechta tasodifiy sonlarni yaratadi. Qo'llab-quvvatlaydi: butun va kasr sonlar, noyob (takrorsiz) va takrorli.", "Qo'llanilishi: lotereya, o'yin sovrinlari, tasodifiy tanlash, parol yaratish, statistik tajribalar, o'yinlar. Kriptografik jihatdan mustahkam algoritmga asoslangan.", "Misol: 1 dan 49 gacha 6 ta noyob son (lotereya). Yoki obunachilar o'rtasida o'yin sovrini uchun 1 dan 100 gacha tasodifiy son."],
    faqRu: [{ question: 'Действительно ли числа случайные?', answer: 'Да, используется криптографически стойкий генератор псевдослучайных чисел.' }, { question: 'Можно ли генерировать без повторений?', answer: 'Да, включите опцию «уникальные числа».' }, { question: 'Какой максимальный диапазон?', answer: 'Любой целочисленный диапазон. Количество чисел — до 1 000 за раз.' }],
    faqUz: [{ question: "Sonlar haqiqatan ham tasodifiymi?", answer: "Ha, kriptografik jihatdan mustahkam soxta-tasodifiy sonlar generatori ishlatiladi." }, { question: "Takrorsiz yaratish mumkinmi?", answer: "Ha, «noyob sonlar» opsiyasini yoqing." }, { question: "Maksimal diapazon qancha?", answer: "Har qanday butun sonli diapazon. Sonlar soni — bir martada 1 000 tagacha." }],
  },

  {
    slug: 'wedding',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор свадебного бюджета в Узбекистане рассчитывает примерную стоимость торжества. Средний бюджет (2025): от 30 до 100+ млн сум в зависимости от количества гостей и уровня проведения.', 'Основные статьи расходов: ресторан/тўйхона (40-50% бюджета), одежда невесты и жениха (15-20%), украшения/оформление (10%), фото/видео (5-10%), транспорт (5%), музыка (5%).', 'Пример: 300 гостей, средний ресторан. Ресторан: 150 000 × 300 = 45 млн. Одежда: 10 млн. Фото/видео: 5 млн. Декор: 5 млн. Транспорт: 3 млн. Итого: ~68 млн сум.'],
    paragraphsUz: ["O'zbekistondagi to'y byudjeti kalkulyatori marosimning taxminiy narxini hisoblaydi. O'rtacha byudjet (2025): mehmonlar soni va o'tkazish darajasiga qarab 30 dan 100+ mln so'mgacha.", "Asosiy xarajat moddalari: restoran/to'yxona (byudjetning 40-50%), kelin va kuyov kiyimlari (15-20%), bezaklar/dizayn (10%), foto/video (5-10%), transport (5%), musiqa (5%).", "Misol: 300 mehmon, o'rtacha restoran. Restoran: 150 000 × 300 = 45 mln. Kiyim: 10 mln. Foto/video: 5 mln. Dekor: 5 mln. Transport: 3 mln. Jami: ~68 mln so'm."],
    faqRu: [{ question: 'Сколько стоит свадьба в Узбекистане?', answer: 'От 30 до 100+ млн сум. Средний бюджет на 300 гостей: ~60-80 млн.' }, { question: 'Какая самая большая статья расходов?', answer: 'Ресторан/тўйхона — 40-50% бюджета (150 000-250 000 сум на гостя).' }, { question: 'Как сэкономить на свадьбе?', answer: 'Будний день (скидка 20-30%), сезон не май-июнь, меньше гостей, декор своими руками.' }],
    faqUz: [{ question: "O'zbekistonda to'y qancha turadi?", answer: "30 dan 100+ mln so'mgacha. 300 mehmonga o'rtacha byudjet: ~60-80 mln." }, { question: "Eng katta xarajat moddasi qanday?", answer: "Restoran/to'yxona — byudjetning 40-50% (mehmonga 150 000-250 000 so'm)." }, { question: "To'yda qanday tejash mumkin?", answer: "Ish kuni (20-30% chegirma), may-iyun bo'lmagan mavsum, kamroq mehmon, o'z qo'li bilan bezash." }],
  },

  {
    slug: 'cotton-yield',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор урожайности хлопка рассчитывает ожидаемый урожай и доход от выращивания хлопка-сырца в Узбекистане. Средняя урожайность: 25-30 центнеров с гектара в зависимости от сорта, региона и условий.', 'Факторы урожайности: сорт, климат, полив, удобрения, сроки посева. Основные регионы: Кашкадарья, Сурхандарья, Бухара, Навои. Цена хлопка-сырца: определяется ежегодно.', 'Пример: 10 гектаров, урожайность 28 ц/га. Урожай: 28 тонн хлопка-сырца. При цене 10 000 сум/кг: доход = 280 000 000 сум.'],
    paragraphsUz: ["Paxta hosildorligi kalkulyatori O'zbekistonda xom paxta yetishtirishdan kutilayotgan hosilni va daromadni hisoblaydi. O'rtacha hosildorlik: nav, hudud va sharoitlarga qarab gektaridan 25-30 sentner.", "Hosildorlik omillari: nav, iqlim, sug'orish, o'g'itlar, ekish muddatlari. Asosiy hududlar: Qashqadaryo, Surxondaryo, Buxoro, Navoiy. Xom paxta narxi: har yili belgilanadi.", "Misol: 10 gektar, hosildorlik 28 s/ga. Hosil: 28 tonna xom paxta. 10 000 so'm/kg narxida: daromad = 280 000 000 so'm."],
    faqRu: [{ question: 'Какова средняя урожайность хлопка?', answer: '25-30 центнеров с гектара в Узбекистане.' }, { question: 'Какие факторы влияют на урожайность?', answer: 'Сорт, климат, полив, удобрения, сроки посева и обработки.' }, { question: 'В каких регионах выращивают хлопок?', answer: 'Кашкадарья, Сурхандарья, Бухара, Навои — основные хлопкосеющие регионы.' }],
    faqUz: [{ question: "Paxtaning o'rtacha hosildorligi qancha?", answer: "O'zbekistonda gektaridan 25-30 sentner." }, { question: "Hosildorlikka qanday omillar ta'sir qiladi?", answer: "Nav, iqlim, sug'orish, o'g'itlar, ekish va ishlov berish muddatlari." }, { question: "Qaysi hududlarda paxta yetishtiriladi?", answer: "Qashqadaryo, Surxondaryo, Buxoro, Navoiy — asosiy paxtakor hududlar." }],
  },

  {
    slug: 'visa-cost',
    lastUpdated: '2025-08-01',
    sources: [
      { name: 'МИД Узбекистана', url: 'https://mfa.uz' },
      { name: 'Единый портал интерактивных услуг', url: 'https://my.gov.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости визы рассчитывает полные расходы на оформление визы для граждан Узбекистана с учётом консульского сбора, сервисного сбора визового центра, стоимости фотографий, перевода и нотариального заверения документов, а также медицинской страховки. Стоимость оформления визы существенно варьируется в зависимости от страны назначения, типа визы (туристическая, рабочая, студенческая, деловая) и срочности оформления. По данным МИД Узбекистана, ежегодно более 2 млн граждан выезжают за рубеж, при этом значительная часть направляется в страны, требующие визового оформления.',
      'Примерные расходы на визу в 2025 году: Шенгенская виза — консульский сбор €80 (~1 050 000 сум по курсу ЦБ), сервисный сбор визового центра VFS Global/TLS Contact — €20-30 (~260 000-395 000 сум), фото — 30 000-50 000 сум, перевод документов с нотариальным заверением — 200 000-500 000 сум, медицинская страховка с покрытием €30 000 — от 200 000 сум (на 15 дней) до 800 000 сум (на 90 дней). Итого Шенгенская виза обойдётся в 1 740 000-2 800 000 сум. Виза США (B1/B2) — консульский сбор $185 (~2 400 000 сум), запись через ustraveldocs.com; виза Великобритании — от £100 (~1 650 000 сум); виза Южной Кореи — $40-80 (~520 000-1 040 000 сум); виза Японии — бесплатно (консульский сбор не взимается).',
      'Пример расчёта для семейной поездки в Европу (Шенгенская виза, 2 взрослых + 1 ребёнок до 12 лет): консульский сбор — €80 × 2 + €40 × 1 = €200 (~2 630 000 сум); сервисный сбор — €25 × 3 = €75 (~990 000 сум); фото — 40 000 × 3 = 120 000 сум; переводы документов — 400 000 × 3 = 1 200 000 сум; страховка — 300 000 × 3 = 900 000 сум. Итого на семью: ~5 840 000 сум. Обратите внимание: для детей 6-12 лет консульский сбор Шенгенской визы составляет €40, для детей до 6 лет — бесплатно.',
      'Безвизовые страны для граждан Узбекистана (2025): без визы — Россия, Казахстан, Кыргызстан, Таджикистан, Азербайджан, Беларусь, Молдова, Грузия, Украина, Турция (до 30 дней), Малайзия (до 30 дней), Индонезия (до 30 дней), Южная Корея (до 30 дней — введён безвизовый режим в 2023), Сингапур (до 30 дней). Электронная виза (e-Visa) доступна для ряда стран: ОАЭ, Индия, Вьетнам — оформляется онлайн за 3-5 рабочих дней. Для проверки визовых требований конкретной страны используйте сайт МИД Узбекистана mfa.uz.',
      'Калькулятор стоимости визы на нашем сайте учитывает все компоненты расходов: выберите страну назначения, тип визы, количество заявителей (взрослые/дети) и срочность оформления — калькулятор покажет подробную смету с разбивкой по статьям. Визовые центры в Ташкенте расположены в ТЦ Compass (VFS Global для Шенгенских стран) и на ул. Бабура (TLS Contact для Франции). Запись на подачу документов — через сайт визового центра, обычно за 2-4 недели до визита. Оплата консульского сбора — в валюте страны назначения через банк или в визовом центре.',
    ],
    paragraphsUz: [
      "Viza narxi kalkulyatori konsullik to'lovi, viza markazining servis to'lovi, fotosuratlar, hujjatlar tarjimasi va notarial tasdiqlash, shuningdek tibbiy sug'urta narxini hisobga olgan holda O'zbekiston fuqarolari uchun vizani rasmiylashtirish to'liq xarajatlarini hisoblaydi. Vizani rasmiylashtirish narxi boradigan mamlakat, viza turi (turistik, ish, talaba, ishbilarmonlik) va shoshilinchlikka qarab sezilarli farq qiladi. O'zbekiston TIV ma'lumotlariga ko'ra, har yili 2 mln dan ortiq fuqaro xorijga chiqadi, ularning sezilarli qismi viza rasmiylash talab qiladigan mamlakatlarga yo'naladi.",
      "2025-yilda vizaga taxminiy xarajatlar: Shengen vizasi — konsullik to'lovi €80 (~1 050 000 so'm MB kursi bo'yicha), VFS Global/TLS Contact viza markazining servis to'lovi — €20-30 (~260 000-395 000 so'm), foto — 30 000-50 000 so'm, notarial tasdiq bilan hujjatlar tarjimasi — 200 000-500 000 so'm, €30 000 qoplanadigan tibbiy sug'urta — 200 000 so'mdan (15 kunga) 800 000 so'mgacha (90 kunga). Jami Shengen vizasi 1 740 000-2 800 000 so'mga tushadi. AQSh vizasi (B1/B2) — konsullik to'lovi $185 (~2 400 000 so'm); Buyuk Britaniya vizasi — £100 dan (~1 650 000 so'm); Janubiy Koreya vizasi — $40-80; Yaponiya vizasi — bepul (konsullik to'lovi olinmaydi).",
      "Yevropaga oilaviy sayohat uchun hisoblash misoli (Shengen vizasi, 2 kattalar + 12 yoshgacha 1 bola): konsullik to'lovi — €80 × 2 + €40 × 1 = €200 (~2 630 000 so'm); servis to'lovi — €25 × 3 = €75 (~990 000 so'm); foto — 40 000 × 3 = 120 000 so'm; hujjatlar tarjimasi — 400 000 × 3 = 1 200 000 so'm; sug'urta — 300 000 × 3 = 900 000 so'm. Oilaga jami: ~5 840 000 so'm. E'tibor bering: 6-12 yoshli bolalar uchun Shengen vizasi konsullik to'lovi €40, 6 yoshgacha bolalar uchun — bepul.",
      "O'zbekiston fuqarolari uchun vizasiz mamlakatlar (2025): vizasiz — Rossiya, Qozog'iston, Qirg'iziston, Tojikiston, Ozarbayjon, Belarus, Moldova, Gruziya, Ukraina, Turkiya (30 kungacha), Malayziya (30 kungacha), Indoneziya (30 kungacha), Janubiy Koreya (30 kungacha — 2023-yilda vizasiz rejim joriy etilgan), Singapur (30 kungacha). Elektron viza (e-Visa) bir qator mamlakatlar uchun mavjud: BAA, Hindiston, Vyetnam — onlayn 3-5 ish kunida rasmiylashtiriladi. Aniq mamlakatning viza talablarini tekshirish uchun O'zbekiston TIV saytidan mfa.uz foydalaning.",
      "Saytimizda viza narxi kalkulyatori xarajatlarning barcha komponentlarini hisobga oladi: boradigan mamlakatni, viza turini, arizachilar sonini (kattalar/bolalar) va rasmiylash shoshilinchligini tanlang — kalkulyator moddalar bo'yicha batafsil smetani ko'rsatadi. Toshkentdagi viza markazlari Compass SMda (Shengen mamlakatlari uchun VFS Global) va Bobur ko'chasida (Frantsiya uchun TLS Contact) joylashgan. Hujjat topshirishga yozilish — viza markazi sayti orqali, odatda tashrifdan 2-4 hafta oldin. Konsullik to'lovini to'lash — boradigan mamlakat valyutasida bank yoki viza markazi orqali.",
    ],
    faqRu: [
      { question: 'Сколько стоит Шенгенская виза?', answer: 'Консульский сбор €80 (~1 050 000 сум) + сервисный сбор визового центра €20-30 (~260 000-395 000 сум) + фото, перевод документов и страховка. Итого: 1 740 000-2 800 000 сум на человека.' },
      { question: 'В какие страны не нужна виза?', answer: 'Россия, Казахстан, Кыргызстан, Таджикистан, Грузия, Турция (до 30 дней), Малайзия (до 30 дней), Южная Корея (до 30 дней), Индонезия, Сингапур и ряд стран СНГ. Полный список — на сайте МИД mfa.uz.' },
      { question: 'Из чего складывается стоимость визы?', answer: 'Консульский сбор (основная часть, €40-185) + сервисный сбор визового центра (€20-30) + фото (30 000-50 000 сум) + перевод документов (200 000-500 000 сум) + медицинская страховка (200 000-800 000 сум).' },
      { question: 'Где подать документы на визу в Ташкенте?', answer: 'В визовых центрах: VFS Global (ТЦ Compass, Шенгенские страны), TLS Contact (ул. Бабура, Франция). Посольства также принимают документы напрямую для некоторых категорий виз.' },
      { question: 'Сколько стоит виза для ребёнка?', answer: 'Шенген: дети до 6 лет — бесплатно, 6-12 лет — €40 (~525 000 сум). США (B1/B2): одинаково $185 для всех возрастов. Сервисный сбор и страховка оплачиваются независимо от возраста.' },
    ],
    faqUz: [
      { question: "Shengen vizasi qancha turadi?", answer: "Konsullik to'lovi €80 (~1 050 000 so'm) + viza markazi servis to'lovi €20-30 (~260 000-395 000 so'm) + foto, hujjatlar tarjimasi va sug'urta. Jami: kishiga 1 740 000-2 800 000 so'm." },
      { question: "Qaysi mamlakatlarga viza kerak emas?", answer: "Rossiya, Qozog'iston, Qirg'iziston, Tojikiston, Gruziya, Turkiya (30 kungacha), Malayziya (30 kungacha), Janubiy Koreya (30 kungacha), Indoneziya, Singapur va bir qator MDH mamlakatlari. To'liq ro'yxat — TIV sayti mfa.uz da." },
      { question: "Viza narxi nimalardan tashkil topadi?", answer: "Konsullik to'lovi (asosiy qism, €40-185) + viza markazi servis to'lovi (€20-30) + foto (30 000-50 000 so'm) + hujjatlar tarjimasi (200 000-500 000 so'm) + tibbiy sug'urta (200 000-800 000 so'm)." },
      { question: "Toshkentda viza uchun hujjatlarni qayerga topshirish mumkin?", answer: "Viza markazlarida: VFS Global (Compass SM, Shengen mamlakatlari), TLS Contact (Bobur ko'chasi, Frantsiya). Elchixonalar ham ba'zi viza toifalari uchun hujjatlarni bevosita qabul qiladi." },
      { question: "Bolalar uchun viza qancha turadi?", answer: "Shengen: 6 yoshgacha bolalar — bepul, 6-12 yosh — €40 (~525 000 so'm). AQSh (B1/B2): barcha yoshdagilar uchun bir xil $185. Servis to'lovi va sug'urta yoshdan qat'i nazar to'lanadi." },
    ],
  },
]

// Helper function to find article by slug
export function getArticleBySlug(slug: string): CalculatorArticle | undefined {
  return CALCULATOR_ARTICLES.find((a) => a.slug === slug)
}

// Backward-compatible function (used in page.tsx)
export function getCalculatorArticle(slug: string): CalculatorArticle | null {
  return getArticleBySlug(slug) ?? null
}
