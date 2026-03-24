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
    lastUpdated: '2025-08-01',
    sources: [{ name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' }],
    paragraphsRu: [
      'Калькулятор калорий рассчитывает суточную норму калорий по формулам Миффлина-Сан Жеора и Харриса-Бенедикта с учётом пола, возраста, роста, веса и уровня физической активности. Средняя норма: мужчины — 2 000-2 500 ккал/день, женщины — 1 600-2 000 ккал/день.',
      'Для снижения веса рекомендуется дефицит 500-750 ккал/день (потеря 0,5-0,75 кг/неделю). Для набора массы — профицит 300-500 ккал/день. Калькулятор показывает отдельно нормы для поддержания, снижения и набора веса.',
      'Формула Миффлина-Сан Жеора: для мужчин BMR = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст − 161 + 166. Суточная норма = BMR × коэффициент активности (1,2 — сидячий образ жизни; 1,55 — умеренная активность; 1,9 — высокая).',
    ],
    paragraphsUz: [
      "Kaloriya kalkulyatori jins, yosh, bo'y, vazn va jismoniy faollik darajasini hisobga olgan holda Mifflin-San Jeor va Harris-Benedikt formulalari bo'yicha kunlik kaloriya normasini hisoblaydi. O'rtacha norma: erkaklar — 2 000-2 500 kkal/kun, ayollar — 1 600-2 000 kkal/kun.",
      "Vazn kamaytirish uchun kuniga 500-750 kkal deficit tavsiya etiladi (haftasiga 0,5-0,75 kg yo'qotish). Massa oshirish uchun — 300-500 kkal profitsit. Kalkulyator saqlash, kamaytirish va oshirish uchun normalarni alohida ko'rsatadi.",
      "Mifflin-San Jeor formulasi: erkaklar uchun BMR = 10 × vazn(kg) + 6,25 × bo'y(sm) − 5 × yosh − 161 + 166. Kunlik norma = BMR × faollik koeffitsienti (1,2 — o'tirgan; 1,55 — o'rtacha; 1,9 — yuqori).",
    ],
    faqRu: [
      { question: 'Сколько калорий нужно в день?', answer: 'Мужчины: 2 000-2 500 ккал, женщины: 1 600-2 000 ккал. Зависит от возраста, веса, роста и активности.' },
      { question: 'Сколько калорий нужно для похудения?', answer: 'На 500-750 ккал меньше суточной нормы. Это обеспечит потерю 0,5-0,75 кг в неделю.' },
      { question: 'Какая формула точнее?', answer: 'Формула Миффлина-Сан Жеора считается наиболее точной для современного человека.' },
    ],
    faqUz: [
      { question: "Kuniga necha kaloriya kerak?", answer: "Erkaklar: 2 000-2 500 kkal, ayollar: 1 600-2 000 kkal. Yosh, vazn, bo'y va faollikka bog'liq." },
      { question: "Vazn kamaytirish uchun necha kaloriya kerak?", answer: "Kunlik normadan 500-750 kkal kam. Bu haftasiga 0,5-0,75 kg yo'qotishni ta'minlaydi." },
      { question: "Qaysi formula aniqroq?", answer: "Mifflin-San Jeor formulasi zamonaviy inson uchun eng aniq hisoblanadi." },
    ],
  },

  {
    slug: 'bmi',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'ВОЗ — Индекс массы тела', url: 'https://who.int' }],
    paragraphsRu: [
      'Индекс массы тела (ИМТ) рассчитывается по формуле: ИМТ = Вес(кг) / Рост(м)². Классификация ВОЗ: <18,5 — дефицит массы; 18,5-24,9 — норма; 25-29,9 — избыточный вес; ≥30 — ожирение. Калькулятор ИМТ мгновенно определит ваш показатель и категорию.',
      'Пример: вес 75 кг, рост 175 см. ИМТ = 75 / 1,75² = 24,5 — норма. Для того же роста: вес 90 кг → ИМТ 29,4 (избыточный вес), вес 100 кг → ИМТ 32,7 (ожирение 1 степени). ИМТ не учитывает мышечную массу, поэтому для спортсменов может быть некорректным.',
      'Для более точной оценки рекомендуется также рассчитать идеальный вес (калькулятор идеального веса) и соотношение макронутриентов (калькулятор КБЖУ). Здоровый ИМТ снижает риск сердечно-сосудистых заболеваний, диабета и заболеваний суставов.',
    ],
    paragraphsUz: [
      "Tana massasi indeksi (TMI) formula bo'yicha hisoblanadi: TMI = Vazn(kg) / Bo'y(m)². JSST tasnifi: <18,5 — massa tanqisligi; 18,5-24,9 — norma; 25-29,9 — ortiqcha vazn; ≥30 — semirish. TMI kalkulyatori ko'rsatkichingiz va toifangizni bir zumda aniqlaydi.",
      "Misol: vazn 75 kg, bo'y 175 sm. TMI = 75 / 1,75² = 24,5 — norma. Xuddi shu bo'yda: 90 kg → TMI 29,4 (ortiqcha vazn), 100 kg → TMI 32,7 (1-darajali semirish). TMI mushak massasini hisobga olmaydi, shuning uchun sportchilar uchun noto'g'ri bo'lishi mumkin.",
      "Aniqroq baholash uchun ideal vazn kalkulyatori va makronutrientlar nisbati kalkulyatoridan ham foydalanish tavsiya etiladi. Sog'lom TMI yurak-qon tomir kasalliklari, diabet va bo'g'imlar kasalliklari xavfini kamaytiradi.",
    ],
    faqRu: [
      { question: 'Как рассчитать ИМТ?', answer: 'ИМТ = Вес(кг) / Рост(м)². Например: 70 кг / 1,70² = 24,2.' },
      { question: 'Какой ИМТ считается нормальным?', answer: '18,5-24,9 по классификации ВОЗ.' },
      { question: 'Точен ли ИМТ для спортсменов?', answer: 'Нет, ИМТ не различает мышечную и жировую массу. Спортсменам лучше использовать измерение процента жира.' },
    ],
    faqUz: [
      { question: 'TMI qanday hisoblanadi?', answer: "TMI = Vazn(kg) / Bo'y(m)². Masalan: 70 kg / 1,70² = 24,2." },
      { question: 'Qanday TMI normal hisoblanadi?', answer: 'JSST tasnifi bo\'yicha 18,5-24,9.' },
      { question: "TMI sportchilar uchun aniqmi?", answer: "Yo'q, TMI mushak va yog' massasini farqlamaydi. Sportchilarga yog' foizini o'lchash yaxshiroq." },
    ],
  },

  {
    slug: 'zakat',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' }],
    paragraphsRu: [
      'Закят — обязательная ежегодная выплата в исламе, составляющая 2,5% от имущества (нисаб), которым мусульманин владел в течение лунного года. Нисаб определяется по стоимости 85 граммов золота или 595 граммов серебра. Калькулятор закята рассчитает сумму обязательной выплаты на основе ваших активов.',
      'В расчёт закята включаются: наличные деньги, банковские вклады, золото и серебро (сверх нисаба), товарные запасы, акции и инвестиции. Не включаются: жилой дом, личный автомобиль, одежда, бытовая техника для личного пользования.',
      'Пример: общие активы 500 000 000 сум (наличные 200 млн + вклады 200 млн + золото 100 млн). Нисаб ≈ 85 г золота ≈ 85 000 000 сум. Активы > нисаб → Закят = 500 000 000 × 2,5% = 12 500 000 сум.',
    ],
    paragraphsUz: [
      "Zakot — islomda majburiy yillik to'lov bo'lib, musulmon qamariy yil davomida ega bo'lgan mol-mulkning (nisob) 2,5% ini tashkil etadi. Nisob 85 gramm oltin yoki 595 gramm kumushning qiymati bo'yicha aniqlanadi. Zakot kalkulyatori aktivlaringiz asosida majburiy to'lov summasini hisoblaydi.",
      "Zakot hisobiga kiritiladi: naqd pul, bank omonatlari, oltin va kumush (nisobdan ortiq), tovar zahiralari, aksiya va investitsiyalar. Kiritilmaydi: turar-joy, shaxsiy avtomobil, kiyim-kechak, shaxsiy foydalanish uchun maishiy texnika.",
      "Misol: umumiy aktivlar 500 000 000 so'm (naqd 200 mln + omonatlar 200 mln + oltin 100 mln). Nisob ≈ 85 g oltin ≈ 85 000 000 so'm. Aktivlar > nisob → Zakot = 500 000 000 × 2,5% = 12 500 000 so'm.",
    ],
    faqRu: [
      { question: 'Сколько составляет закят?', answer: '2,5% от имущества, превышающего нисаб, которым владели в течение лунного года.' },
      { question: 'Что такое нисаб?', answer: 'Минимальный порог имущества для обязанности закята: стоимость 85 г золота (≈85 млн сум).' },
      { question: 'С какого имущества платится закят?', answer: 'Деньги, вклады, золото/серебро, товарные запасы, инвестиции. Не включается жильё и личные вещи.' },
    ],
    faqUz: [
      { question: "Zakot qancha?", answer: "Qamariy yil davomida ega bo'lgan, nisobdan ortiq mol-mulkning 2,5%." },
      { question: 'Nisob nima?', answer: "Zakot majburiyati uchun mol-mulkning minimal chegarasi: 85 g oltin qiymati (≈85 mln so'm)." },
      { question: "Qaysi mol-mulkdan zakot to'lanadi?", answer: "Pul, omonatlar, oltin/kumush, tovar zahiralari, investitsiyalar. Turar-joy va shaxsiy buyumlar kiritilmaydi." },
    ],
  },

  {
    slug: 'percentage',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор процентов выполняет все основные операции с процентами: найти процент от числа, определить какой процент одно число составляет от другого, добавить или вычесть процент. Это универсальный инструмент для повседневных расчётов, бизнеса и образования.',
      'Основные формулы: X% от числа A = A × X / 100. Число A составляет (A / B × 100)% от числа B. Число A с прибавкой X% = A × (1 + X/100). Число A с вычетом X% = A × (1 − X/100). Процентное изменение = (Новое − Старое) / Старое × 100%.',
      'Примеры: 15% от 2 000 000 сум = 300 000 сум. 450 000 составляет 22,5% от 2 000 000. Цена 5 000 000 сум + наценка 20% = 6 000 000 сум. Скидка 30% от 1 200 000 = 840 000 сум.',
    ],
    paragraphsUz: [
      "Foiz kalkulyatori foizlar bilan barcha asosiy amallarni bajaradi: sondan foizni topish, bir son ikkinchisidan necha foizligini aniqlash, foizni qo'shish yoki ayirish. Bu kundalik hisob-kitoblar, biznes va ta'lim uchun universal vosita.",
      "Asosiy formulalar: A sondan X% = A × X / 100. A soni B sondan (A / B × 100)% ni tashkil etadi. A soniga X% qo'shish = A × (1 + X/100). A sondan X% ayirish = A × (1 − X/100).",
      "Misollar: 2 000 000 so'mdan 15% = 300 000 so'm. 450 000 bu 2 000 000 ning 22,5%. Narx 5 000 000 + 20% ustama = 6 000 000 so'm. 1 200 000 dan 30% chegirma = 840 000 so'm.",
    ],
    faqRu: [
      { question: 'Как найти процент от числа?', answer: 'Число × Процент / 100. Например, 25% от 800 000 = 800 000 × 25 / 100 = 200 000.' },
      { question: 'Как узнать процентное соотношение?', answer: 'Часть / Целое × 100. Например, 150 000 из 600 000 = 150 000 / 600 000 × 100 = 25%.' },
      { question: 'Как рассчитать процентное изменение?', answer: '(Новое − Старое) / Старое × 100%. Было 500 000, стало 650 000: (650 000 − 500 000) / 500 000 × 100 = 30%.' },
    ],
    faqUz: [
      { question: 'Sondan foizni qanday topish mumkin?', answer: "Son × Foiz / 100. Masalan, 800 000 dan 25% = 800 000 × 25 / 100 = 200 000." },
      { question: 'Foiz nisbatini qanday bilish mumkin?', answer: "Qism / Butun × 100. Masalan, 600 000 dan 150 000 = 150 000 / 600 000 × 100 = 25%." },
      { question: "Foiz o'zgarishni qanday hisoblash mumkin?", answer: "(Yangi − Eski) / Eski × 100%. 500 000 edi, 650 000 bo'ldi: (650 000 − 500 000) / 500 000 × 100 = 30%." },
    ],
  },

  {
    slug: 'discount',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор скидок мгновенно рассчитывает итоговую цену товара после применения скидки, а также сумму экономии. Поддерживает двойные и тройные скидки (скидка на скидку), что часто встречается во время распродаж.',
      'Формула: Цена со скидкой = Исходная цена × (1 − Скидка/100). Для двойной скидки: Цена = Исходная × (1 − Скидка1/100) × (1 − Скидка2/100). Важно: скидка 20% + 10% ≠ 30%. Реальная скидка = 1 − 0,8 × 0,9 = 28%.',
      'Пример: товар 3 000 000 сум со скидкой 25%. Цена = 3 000 000 × 0,75 = 2 250 000 сум, экономия 750 000 сум. Двойная скидка 20% + 15%: 3 000 000 × 0,80 × 0,85 = 2 040 000 сум (реальная скидка 32%).',
    ],
    paragraphsUz: [
      "Chegirma kalkulyatori chegirma qo'llanilgandan keyin tovarning yakuniy narxini va tejash summasini bir zumda hisoblaydi. Ikki va uchta chegirmalarni (chegirma ustiga chegirma) qo'llab-quvvatlaydi.",
      "Formula: Chegirmali narx = Boshlang'ich narx × (1 − Chegirma/100). Ikki chegirma uchun: Narx = Boshlang'ich × (1 − Chegirma1/100) × (1 − Chegirma2/100). Muhim: 20% + 10% chegirma ≠ 30%. Haqiqiy chegirma = 28%.",
      "Misol: 3 000 000 so'mlik tovar 25% chegirma bilan. Narx = 2 250 000 so'm, tejash 750 000 so'm. 20% + 15% ikki chegirma: 3 000 000 × 0,80 × 0,85 = 2 040 000 so'm (haqiqiy chegirma 32%).",
    ],
    faqRu: [
      { question: 'Как рассчитать скидку?', answer: 'Цена × (100 − Скидка%) / 100. Например, 2 000 000 со скидкой 15%: 2 000 000 × 0,85 = 1 700 000.' },
      { question: 'Как работает двойная скидка?', answer: 'Вторая скидка применяется к уже сниженной цене. 20% + 10% = не 30%, а 28% реальная скидка.' },
      { question: 'Как узнать процент скидки?', answer: '(Исходная − Новая) / Исходная × 100. Было 500 000, стало 350 000: скидка = 30%.' },
    ],
    faqUz: [
      { question: 'Chegirmani qanday hisoblash mumkin?', answer: "Narx × (100 − Chegirma%) / 100. Masalan, 2 000 000 dan 15% chegirma: 2 000 000 × 0,85 = 1 700 000." },
      { question: 'Ikki chegirma qanday ishlaydi?', answer: "Ikkinchi chegirma allaqachon pasaytirilgan narxga qo'llaniladi. 20% + 10% = 30% emas, balki 28% haqiqiy chegirma." },
      { question: 'Chegirma foizini qanday bilish mumkin?', answer: "(Boshlang'ich − Yangi) / Boshlang'ich × 100. 500 000 edi, 350 000 bo'ldi: chegirma = 30%." },
    ],
  },

  {
    slug: 'passport-fees',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Постановление о госпошлинах', url: 'https://lex.uz' }],
    paragraphsRu: [
      'Госпошлина за оформление биометрического паспорта Узбекистана зависит от типа паспорта и сроков оформления. Стандартное оформление (15 рабочих дней): 1-3 БРВ. Ускоренное (5 рабочих дней): 3-5 БРВ. Срочное (1-3 дня): 5-10 БРВ. Калькулятор рассчитает точную сумму.',
      'Типы паспортов: ID-карта (внутренний документ) — от 0,5 БРВ; загранпаспорт — от 2 БРВ; дипломатический — освобождён от пошлины. Для несовершеннолетних — сниженная пошлина. При утере — удвоенная пошлина.',
      'Пример: загранпаспорт стандартного оформления — 2 БРВ = 824 000 сум. Ускоренное — 4 БРВ = 1 648 000 сум. При утере: стандартное — 4 БРВ = 1 648 000 сум. Оформление через my.gov.uz или ОВД.',
    ],
    paragraphsUz: [
      "O'zbekiston biometrik pasportini rasmiylashtirish uchun davlat boji pasport turi va rasmiylashtirish muddatiga bog'liq. Standart (15 ish kuni): 1-3 BHK. Tezlashtirilgan (5 ish kuni): 3-5 BHK. Shoshilinch (1-3 kun): 5-10 BHK.",
      "Pasport turlari: ID-karta (ichki hujjat) — 0,5 BHKdan; xorijga chiqish pasporti — 2 BHKdan; diplomatik — bojdan ozod. Voyaga yetmaganlar uchun — pasaytirilgan boj. Yo'qotilganda — ikki baravar boj.",
      "Misol: standart xorijga chiqish pasporti — 2 BHK = 824 000 so'm. Tezlashtirilgan — 4 BHK = 1 648 000 so'm. Yo'qotilganda: standart — 4 BHK = 1 648 000 so'm.",
    ],
    faqRu: [
      { question: 'Сколько стоит загранпаспорт?', answer: 'Стандартное оформление: 2 БРВ (824 000 сум). Ускоренное: 4 БРВ. Срочное: до 10 БРВ.' },
      { question: 'Сколько стоит паспорт при утере?', answer: 'Двойная пошлина. Загранпаспорт: 4 БРВ (1 648 000 сум) при стандартном оформлении.' },
      { question: 'Где оформить паспорт?', answer: 'Через my.gov.uz (онлайн) или в территориальном ОВД по месту прописки.' },
    ],
    faqUz: [
      { question: "Xorijga chiqish pasporti qancha turadi?", answer: "Standart rasmiylashtirish: 2 BHK (824 000 so'm). Tezlashtirilgan: 4 BHK. Shoshilinch: 10 BHK gacha." },
      { question: "Pasport yo'qotilganda qancha turadi?", answer: "Ikki baravar boj. Xorijga chiqish pasporti: standart rasmiylashtirishda 4 BHK (1 648 000 so'm)." },
      { question: "Pasportni qayerda rasmiylashtirish mumkin?", answer: "my.gov.uz (onlayn) yoki propiska joyi bo'yicha hududiy IIBda." },
    ],
  },

  {
    slug: 'state-duties',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс — Госпошлины', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Государственные пошлины в Узбекистане взимаются за юридически значимые действия: регистрация собственности, выдача документов, судебные иски. Размеры пошлин привязаны к БРВ (412 000 сум с августа 2025). Калькулятор госпошлин рассчитает точную сумму для вашего случая.',
      'Основные размеры пошлин: регистрация права собственности на недвижимость — 3-5 БРВ; регистрация юридического лица — 1 БРВ; подача искового заявления в суд — 2-5% от суммы иска; выдача свидетельства о браке — 1 БРВ; расторжение брака (через суд) — 3 БРВ.',
      'Льготы: инвалиды I и II группы — освобождены от ряда пошлин; пенсионеры — скидка 50% по некоторым видам; истцы по трудовым спорам — освобождены; иски о взыскании алиментов — освобождены.',
    ],
    paragraphsUz: [
      "O'zbekistonda davlat bojlari yuridik ahamiyatga ega harakatlar uchun olinadi: mulk ro'yxatdan o'tkazish, hujjatlar berish, sud da'volari. Boj miqdorlari BHKga bog'langan (2025-yil avgustidan 412 000 so'm).",
      "Asosiy boj miqdorlari: ko'chmas mulkka egalik huquqini ro'yxatdan o'tkazish — 3-5 BHK; yuridik shaxsni ro'yxatdan o'tkazish — 1 BHK; sudga da'vo arizasi berish — da'vo summasining 2-5%; nikoh guvohnomasi — 1 BHK; nikohni bekor qilish (sud orqali) — 3 BHK.",
      "Imtiyozlar: I va II guruh nogironlari — bir qator bojlardan ozod; pensionerlar — ayrim turlarda 50% chegirma; mehnat nizolari bo'yicha da'vogarlar — ozod; nafaqa undirilishi bo'yicha da'volar — ozod.",
    ],
    faqRu: [
      { question: 'Сколько стоит регистрация собственности?', answer: '3-5 БРВ (1 236 000 − 2 060 000 сум). Зависит от типа объекта.' },
      { question: 'Какая госпошлина за подачу иска?', answer: '2-5% от суммы иска. Минимум — 1 БРВ (412 000 сум).' },
      { question: 'Кто освобождён от госпошлин?', answer: 'Инвалиды I-II группы (по ряду пошлин), истцы по трудовым спорам и алиментам, пенсионеры (50% скидка).' },
    ],
    faqUz: [
      { question: "Mulkni ro'yxatdan o'tkazish qancha turadi?", answer: "3-5 BHK (1 236 000 − 2 060 000 so'm). Ob'ekt turiga bog'liq." },
      { question: "Da'vo ariza berish uchun davlat boji qancha?", answer: "Da'vo summasining 2-5%. Minimum — 1 BHK (412 000 so'm)." },
      { question: "Kim davlat bojlaridan ozod?", answer: "I-II guruh nogironlari, mehnat nizolari va nafaqa bo'yicha da'vogarlar, pensionerlar (50% chegirma)." },
    ],
  },

  {
    slug: 'remittances',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Центральный банк РУз', url: 'https://cbu.uz' }],
    paragraphsRu: [
      'Калькулятор денежных переводов рассчитывает стоимость отправки денег из/в Узбекистан с учётом комиссий систем переводов и курсов обмена. Основные системы: Western Union, MoneyGram, Contact, Золотая Корона, банковские SWIFT-переводы, а также мобильные переводы через Uzum, Click.',
      'Средние комиссии: Western Union / MoneyGram — 1-3% от суммы; Золотая Корона — 1-2%; банковский SWIFT — фиксированная $15-30; мобильные переводы в пределах Узбекистана — 0,5-1%. Для крупных сумм (свыше $1 000) банковский перевод обычно выгоднее.',
      'Пример: перевод $500 из России в Узбекистан. Western Union: комиссия ~$10 (2%), получение ~$490. Золотая Корона: комиссия ~$5-7 (1-1,4%), получение ~$493-495. Банковский SWIFT: комиссия ~$20, получение ~$480. Учтите также курс обмена при получении.',
    ],
    paragraphsUz: [
      "Pul o'tkazmalari kalkulyatori O'zbekistonga/dan pul jo'natish narxini o'tkazma tizimlari komissiyalari va ayirboshlash kurslarini hisobga olgan holda hisoblaydi. Asosiy tizimlar: Western Union, MoneyGram, Contact, Zolotaya Korona, bank SWIFT o'tkazmalari, Uzum, Click mobil o'tkazmalari.",
      "O'rtacha komissiyalar: Western Union / MoneyGram — summaning 1-3%; Zolotaya Korona — 1-2%; bank SWIFT — qat'iy $15-30; O'zbekiston ichida mobil o'tkazmalar — 0,5-1%. Yirik summalar ($1 000 dan ortiq) uchun bank o'tkazmasi odatda foydaliroq.",
      "Misol: Rossiyadan O'zbekistonga $500 o'tkazma. Western Union: komissiya ~$10 (2%), olinadi ~$490. Zolotaya Korona: komissiya ~$5-7, olinadi ~$493-495. Bank SWIFT: komissiya ~$20, olinadi ~$480.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ перевода денег?', answer: 'Для небольших сумм — Золотая Корона (1-2%). Для крупных — банковский SWIFT ($15-30 фиксированно).' },
      { question: 'Сколько берёт Western Union?', answer: 'Комиссия 1-3% от суммы. Обычно $10-15 за перевод $500.' },
      { question: 'Как получить перевод в Узбекистане?', answer: 'Через банковское отделение (с паспортом), мобильное приложение банка или систему денежных переводов.' },
    ],
    faqUz: [
      { question: "Pul o'tkazishning eng arzon usuli qanday?", answer: "Kichik summalar uchun — Zolotaya Korona (1-2%). Yirik uchun — bank SWIFT (qat'iy $15-30)." },
      { question: "Western Union qancha oladi?", answer: "Summaning 1-3% komissiya. Odatda $500 o'tkazma uchun $10-15." },
      { question: "O'zbekistonda o'tkazmani qanday olish mumkin?", answer: "Bank bo'limi orqali (pasport bilan), bankning mobil ilovasi yoki pul o'tkazmalari tizimi orqali." },
    ],
  },

  {
    slug: 'vat-threshold',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Порог обязательной регистрации плательщиком НДС — 60 000 БРВ (24 720 000 000 сум с августа 2025). Если оборот за 12 последовательных месяцев превышает эту сумму, регистрация обязательна. Калькулятор отслеживает ваш оборот относительно порога.',
      'При приближении к порогу (80%+) рекомендуется заранее подготовиться: изучить механизм НДС, настроить учёт входящего/исходящего НДС, зарегистрироваться на faktura.soliq.uz.',
      'Добровольная регистрация возможна при любом обороте. Это выгодно, если ваши клиенты — плательщики НДС (они смогут принять ваш НДС к зачёту).',
    ],
    paragraphsUz: [
      "QQS to'lovchisi sifatida majburiy ro'yxatdan o'tish chegarasi — 60 000 BHK (2025-yil avgustidan 24 720 000 000 so'm). Ketma-ket 12 oy davomidagi aylanma bu summadan oshsa, ro'yxatdan o'tish majburiy.",
      "Chegaraga yaqinlashganda (80%+) oldindan tayyorlanish tavsiya etiladi: QQS mexanizmini o'rganish, kirish/chiqish QQS hisobini sozlash, faktura.soliq.uz da ro'yxatdan o'tish.",
      "Ixtiyoriy ro'yxatdan o'tish har qanday aylanmada mumkin. Bu mijozlaringiz QQS to'lovchilari bo'lsa foydali (ular sizning QQSni hisobga olishi mumkin).",
    ],
    faqRu: [
      { question: 'Какой порог для обязательной регистрации по НДС?', answer: '60 000 БРВ = 24 720 000 000 сум за 12 последовательных месяцев.' },
      { question: 'Можно ли зарегистрироваться добровольно?', answer: 'Да, при любом обороте. Выгодно при работе с плательщиками НДС.' },
      { question: 'Что будет при превышении порога без регистрации?', answer: 'Штрафные санкции и доначисление НДС за период превышения.' },
    ],
    faqUz: [
      { question: "QQS bo'yicha majburiy ro'yxatdan o'tish chegarasi qancha?", answer: "Ketma-ket 12 oy uchun 60 000 BHK = 24 720 000 000 so'm." },
      { question: "Ixtiyoriy ro'yxatdan o'tish mumkinmi?", answer: "Ha, har qanday aylanmada. QQS to'lovchilari bilan ishlashda foydali." },
      { question: "Ro'yxatdan o'tmasdan chegaradan oshsa nima bo'ladi?", answer: "Jarima sanktsiyalari va chegaradan oshish davri uchun QQS qayta hisoblanishi." },
    ],
  },

  {
    slug: 'property-tax',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Налог на имущество физических лиц в Узбекистане рассчитывается от кадастровой стоимости объекта недвижимости. Для жилых помещений площадью до нормативной ставка составляет 0,2-0,5% от кадастровой стоимости. Для излишней площади — повышенная ставка.',
      'Налог уплачивается ежегодно до 1 декабря. Льготы: пенсионеры (по одному объекту), инвалиды I-II группы, многодетные семьи (4+ детей). Кадастровая стоимость определяется Кадастровой палатой.',
      'Для юридических лиц налог на имущество — 1,5% от среднегодовой остаточной стоимости основных средств.',
    ],
    paragraphsUz: [
      "O'zbekistonda jismoniy shaxslarning mol-mulk solig'i ko'chmas mulk ob'ektining kadastr qiymatidan hisoblanadi. Normativ maydongacha turar-joy binolari uchun stavka kadastr qiymatining 0,2-0,5%.",
      "Soliq har yili 1-dekabrgacha to'lanadi. Imtiyozlar: pensionerlar (bitta ob'ekt bo'yicha), I-II guruh nogironlari, ko'p bolali oilalar (4+ bola). Kadastr qiymati Kadastr palatasi tomonidan aniqlanadi.",
      "Yuridik shaxslar uchun mol-mulk solig'i — asosiy vositalarning yillik o'rtacha qoldiq qiymatidan 1,5%.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на имущество?', answer: 'Для физлиц: 0,2-0,5% от кадастровой стоимости жилья. Для юрлиц: 1,5% от остаточной стоимости.' },
      { question: 'Кто освобождён от налога на имущество?', answer: 'Пенсионеры (по одному объекту), инвалиды I-II группы, многодетные семьи (4+ детей).' },
      { question: 'Когда нужно платить?', answer: 'До 1 декабря текущего года.' },
    ],
    faqUz: [
      { question: "Mol-mulk solig'i stavkasi qancha?", answer: "Jismoniy shaxslar uchun: uy-joy kadastr qiymatining 0,2-0,5%. Yuridik shaxslar uchun: qoldiq qiymatdan 1,5%." },
      { question: "Kim mol-mulk solig'idan ozod?", answer: "Pensionerlar (bitta ob'ekt), I-II guruh nogironlari, ko'p bolali oilalar (4+ bola)." },
      { question: "Qachon to'lash kerak?", answer: "Joriy yilning 1-dekabrigacha." },
    ],
  },

  {
    slug: 'land-tax',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Земельный налог взимается с собственников и пользователей земельных участков. Ставка зависит от категории земли, местоположения и площади. Для приусадебных участков: от 0,1% до 0,3% кадастровой стоимости. Для сельхозземель — от 0,01% до 0,05%.',
      'Калькулятор учитывает зону расположения участка, его назначение и площадь. Налог уплачивается ежегодно. Льготы предоставляются фермерам в первые годы деятельности и для освоения целинных земель.',
      'В Ташкенте ставки выше за счёт высокой кадастровой стоимости. Пример: участок 6 соток в Ташкенте, кадастровая стоимость 200 млн сум, ставка 0,3%: налог = 600 000 сум/год.',
    ],
    paragraphsUz: [
      "Yer solig'i yer uchastkasi egalari va foydalanuvchilaridan olinadi. Stavka yer toifasi, joylashuvi va maydoniga bog'liq. Hovli yerlari uchun: kadastr qiymatining 0,1% dan 0,3% gacha. Qishloq xo'jaligi yerlari uchun — 0,01% dan 0,05% gacha.",
      "Kalkulyator uchastkaning joylashuv zonasi, maqsadi va maydonini hisobga oladi. Soliq har yili to'lanadi. Fermerlar uchun dastlabki yillarda va bo'z yerlarni o'zlashtirish uchun imtiyozlar beriladi.",
      "Toshkentda yuqori kadastr qiymati hisobiga stavkalar yuqoriroq. Misol: Toshkentda 6 sotixlik uchastka, kadastr qiymati 200 mln so'm, stavka 0,3%: soliq = 600 000 so'm/yil.",
    ],
    faqRu: [
      { question: 'Какая ставка земельного налога?', answer: 'Приусадебные участки: 0,1-0,3% кадастровой стоимости. Сельхозземли: 0,01-0,05%.' },
      { question: 'Кто платит земельный налог?', answer: 'Собственники и постоянные пользователи земельных участков.' },
      { question: 'Есть ли льготы?', answer: 'Фермеры (первые годы), освоение целинных земель, инвалиды I-II группы.' },
    ],
    faqUz: [
      { question: 'Yer solig\'i stavkasi qancha?', answer: "Hovli yerlari: kadastr qiymatining 0,1-0,3%. Qishloq xo'jaligi yerlari: 0,01-0,05%." },
      { question: 'Kim yer solig\'i to\'laydi?', answer: "Yer uchastkalarining egalari va doimiy foydalanuvchilari." },
      { question: 'Imtiyozlar bormi?', answer: "Fermerlar (dastlabki yillar), bo'z yerlarni o'zlashtirish, I-II guruh nogironlari." },
    ],
  },

  {
    slug: 'vehicle-tax',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Транспортный налог взимается ежегодно с владельцев автотранспорта. Ставка зависит от объёма двигателя и возраста автомобиля. Для легковых авто: от 1,5 до 7,5 БРВ (618 000 − 3 090 000 сум). Грузовые и спецтехника — по отдельным ставкам.',
      'Градация по объёму двигателя: до 1,5 л — 1,5 БРВ; 1,5-2,0 л — 3 БРВ; 2,0-3,0 л — 5 БРВ; свыше 3,0 л — 7,5 БРВ. Электромобили — льготная ставка или освобождение.',
      'Налог уплачивается до 1 декабря. Пример: Chevrolet Gentra (1,5 л) — 1,5 БРВ = 618 000 сум/год. Chevrolet Tahoe (5,3 л) — 7,5 БРВ = 3 090 000 сум/год.',
    ],
    paragraphsUz: [
      "Transport solig'i avtotransport egalaridan har yili olinadi. Stavka dvigatel hajmi va avtomobilning yoshiga bog'liq. Yengil avtomobillar uchun: 1,5 dan 7,5 BHKgacha (618 000 − 3 090 000 so'm).",
      "Dvigatel hajmi bo'yicha gradatsiya: 1,5 l gacha — 1,5 BHK; 1,5-2,0 l — 3 BHK; 2,0-3,0 l — 5 BHK; 3,0 l dan ortiq — 7,5 BHK. Elektromobillar — imtiyozli stavka yoki ozod.",
      "Soliq 1-dekabrgacha to'lanadi. Misol: Chevrolet Gentra (1,5 l) — 1,5 BHK = 618 000 so'm/yil. Chevrolet Tahoe (5,3 l) — 7,5 BHK = 3 090 000 so'm/yil.",
    ],
    faqRu: [
      { question: 'Сколько стоит транспортный налог?', answer: 'Легковые авто: 1,5-7,5 БРВ (618 000 − 3 090 000 сум) в зависимости от объёма двигателя.' },
      { question: 'Облагаются ли электромобили?', answer: 'Электромобили имеют льготную ставку или полное освобождение.' },
      { question: 'Когда нужно платить?', answer: 'До 1 декабря текущего года.' },
    ],
    faqUz: [
      { question: "Transport solig'i qancha?", answer: "Yengil avtolar: dvigatel hajmiga qarab 1,5-7,5 BHK (618 000 − 3 090 000 so'm)." },
      { question: "Elektromobillar soliqqa tortiladimi?", answer: "Elektromobillar imtiyozli stavkaga ega yoki to'liq ozod." },
      { question: "Qachon to'lash kerak?", answer: "Joriy yilning 1-dekabrigacha." },
    ],
  },

  {
    slug: 'corporate-tax',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Ставка налога на прибыль юридических лиц в Узбекистане — 15% от чистой прибыли (доходы минус документально подтверждённые расходы). Для банков и страховых компаний — 20%. Для предприятий с выручкой до 10 млрд сум — возможна упрощённая система (4% от оборота).',
      'Авансовые платежи уплачиваются ежеквартально. Декларация подаётся до 1 апреля года, следующего за отчётным. Убытки можно переносить на последующие 5 налоговых периодов.',
      'Льготы: СЭЗ — освобождение до 10 лет; IT Park — специальный режим; социально значимые проекты — пониженные ставки.',
    ],
    paragraphsUz: [
      "O'zbekistonda yuridik shaxslarning foyda solig'i stavkasi sof foydaning (daromadlar minus hujjat bilan tasdiqlangan xarajatlar) 15%. Banklar va sug'urta kompaniyalari uchun — 20%. 10 mlrd so'mgacha tushumli korxonalar uchun soddalashtilgan tizim (aylanmadan 4%) mumkin.",
      "Avans to'lovlari har chorakda to'lanadi. Deklaratsiya hisobot yilidan keyingi yilning 1-aprelgacha topshiriladi. Zararlarni keyingi 5 soliq davriga o'tkazish mumkin.",
      "Imtiyozlar: EIZ — 10 yilgacha ozod qilish; IT Park — maxsus rejim; ijtimoiy ahamiyatga ega loyihalar — pasaytirilgan stavkalar.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на прибыль?', answer: '15% для обычных юрлиц, 20% для банков и страховых.' },
      { question: 'Можно ли перенести убытки?', answer: 'Да, на последующие 5 налоговых периодов.' },
      { question: 'Какие льготы по налогу на прибыль?', answer: 'СЭЗ (до 10 лет), IT Park, социальные проекты. Зависит от конкретной программы.' },
    ],
    faqUz: [
      { question: "Foyda solig'i stavkasi qancha?", answer: "Oddiy yuridik shaxslar uchun 15%, banklar va sug'urta kompaniyalari uchun 20%." },
      { question: "Zararlarni o'tkazish mumkinmi?", answer: "Ha, keyingi 5 soliq davriga." },
      { question: "Foyda solig'i bo'yicha qanday imtiyozlar bor?", answer: "EIZ (10 yilgacha), IT Park, ijtimoiy loyihalar. Muayyan dasturga bog'liq." },
    ],
  },

  {
    slug: 'tax-penalty',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Калькулятор налоговых пеней рассчитывает размер пени за несвоевременную уплату налогов. Пеня начисляется в размере 0,05% от суммы задолженности за каждый день просрочки. Калькулятор определит точную сумму пени на основе суммы долга, даты начала и конца просрочки.',
      'Формула: Пеня = Сумма долга × 0,05% × Количество дней просрочки. Пример: задолженность 5 000 000 сум, просрочка 30 дней. Пеня = 5 000 000 × 0,0005 × 30 = 75 000 сум.',
      'Помимо пени, за налоговые правонарушения предусмотрены штрафы: за несвоевременную подачу декларации, за занижение налоговой базы, за ведение деятельности без регистрации. Штрафы исчисляются в БРВ.',
    ],
    paragraphsUz: [
      "Soliq peniyalari kalkulyatori soliqlarni o'z vaqtida to'lamaganligi uchun penya miqdorini hisoblaydi. Penya qarzdorlik summasining har bir kechiktirilgan kun uchun 0,05% miqdorida hisoblanadi.",
      "Formula: Penya = Qarz summasi × 0,05% × Kechikish kunlari soni. Misol: 5 000 000 so'm qarz, 30 kunlik kechikish. Penya = 5 000 000 × 0,0005 × 30 = 75 000 so'm.",
      "Penyadan tashqari, soliq huquqbuzarliklari uchun jarimalar nazarda tutilgan: deklaratsiyani kechiktirish, soliq bazasini kamaytirish, ro'yxatdan o'tmasdan faoliyat yuritish. Jarimalar BHKda hisoblanadi.",
    ],
    faqRu: [
      { question: 'Какая пеня за просрочку уплаты налогов?', answer: '0,05% от суммы задолженности за каждый день просрочки.' },
      { question: 'Как рассчитать пеню?', answer: 'Сумма долга × 0,0005 × количество дней. 1 млн × 0,0005 × 30 = 15 000 сум.' },
      { question: 'Какие штрафы за налоговые нарушения?', answer: 'За непредставление декларации — от 5 до 20 БРВ. За занижение базы — 20% от суммы недоплаты.' },
    ],
    faqUz: [
      { question: "Soliq kechiktirilganligi uchun penya qancha?", answer: "Qarzdorlik summasining har kechiktirilgan kun uchun 0,05%." },
      { question: "Penyani qanday hisoblash mumkin?", answer: "Qarz summasi × 0,0005 × kunlar soni. 1 mln × 0,0005 × 30 = 15 000 so'm." },
      { question: "Soliq huquqbuzarliklari uchun qanday jarimalar bor?", answer: "Deklaratsiya topshirmaganligi uchun — 5 dan 20 BHK gacha. Bazani kamaytirganligi uchun — kam to'langan summaning 20%." },
    ],
  },

  {
    slug: 'self-employed',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'С 2026 года в Узбекистане вводится статус самозанятого с налогом 1% от оборота — самая низкая ставка среди всех режимов. Ограничения: годовой оборот до 100 000 000 сум, нельзя нанимать работников, ряд ограничений по видам деятельности.',
      'Самозанятый не является ИП: не нужна регистрация в реестре, отчётность минимальна. Регистрация через мобильное приложение или my.soliq.uz. Подходит для фрилансеров, репетиторов, мастеров handmade, водителей такси.',
      'Сравнение: самозанятый — 1% от оборота, ИП — 4%, ООО — 15% от прибыли. При чистой марже менее 25% ИП выгоднее ООО. При обороте менее 100 млн/год самозанятый — оптимальный выбор.',
    ],
    paragraphsUz: [
      "2026-yildan O'zbekistonda o'z-o'zini band qilgan maqomi aylanmadan 1% soliq bilan joriy etiladi — barcha rejimlar orasida eng past stavka. Cheklovlar: yillik aylanma 100 000 000 so'mgacha, xodim yollab bo'lmaydi.",
      "O'z-o'zini band qilgan YaTT emas: reyestrda ro'yxatdan o'tish shart emas, hisobot minimal. Ro'yxatdan o'tish mobil ilova yoki my.soliq.uz orqali. Frilanserlarga, repetitorlarga, handmade ustalarga, taksi haydovchilariga mos.",
      "Solishtirish: o'z-o'zini band qilgan — aylanmadan 1%, YaTT — 4%, MChJ — foydadan 15%. Yillik aylanma 100 mln dan kam bo'lsa o'z-o'zini band qilgan — optimal tanlov.",
    ],
    faqRu: [
      { question: 'Какой налог у самозанятого?', answer: '1% от оборота (с 2026 года). Самая низкая ставка среди всех режимов.' },
      { question: 'Кто может стать самозанятым?', answer: 'Физические лица с оборотом до 100 млн сум/год, без наёмных работников.' },
      { question: 'Чем самозанятый отличается от ИП?', answer: 'Самозанятый: 1% налог, без работников, до 100 млн/год. ИП: 4%, до 10 работников, без ограничения оборота.' },
    ],
    faqUz: [
      { question: "O'z-o'zini band qilganlik solig'i qancha?", answer: "Aylanmaning 1% (2026-yildan). Barcha rejimlar orasida eng past stavka." },
      { question: "Kim o'z-o'zini band qilgan bo'lishi mumkin?", answer: "Yillik aylanmasi 100 mln so'mgacha, yollama xodimsiz jismoniy shaxslar." },
      { question: "O'z-o'zini band qilgan YaTTdan nimasi bilan farq qiladi?", answer: "O'z-o'zini band qilgan: 1% soliq, xodimsiz, 100 mln/yilgacha. YaTT: 4%, 10 tagacha xodim, aylanma cheklovisiz." },
    ],
  },

  {
    slug: 'turnover-tax',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/docs/6230091' }],
    paragraphsRu: [
      'Налог с оборота — упрощённый режим для ИП и малого бизнеса с оборотом менее 60 000 БРВ. Ставка — 4% от валового дохода без вычета расходов. Калькулятор рассчитывает сумму налога по вашему обороту.',
      'Преимущества: простота учёта, минимальная отчётность. Недостатки: нельзя вычесть расходы, неэффективно при высоких затратах. Налог уплачивается ежеквартально до 25 числа следующего месяца.',
      'При обороте, приближающемся к 60 000 БРВ, необходимо переходить на общую систему с НДС. Альтернатива: с 2026 года самозанятые платят 1% при обороте до 100 млн/год.',
    ],
    paragraphsUz: [
      "Aylanma solig'i — 60 000 BHK dan kam aylanmali YaTT va kichik biznes uchun soddalashtilgan rejim. Stavka — xarajatlarni chegirmasdan yalpi daromadning 4%.",
      "Afzalliklari: hisobning soddaligi, minimal hisobot. Kamchiliklari: xarajatlarni chiqarib bo'lmaydi, yuqori xarajatlarda samarasiz. Soliq har chorakda keyingi oyning 25-sanasigacha to'lanadi.",
      "Aylanma 60 000 BHKga yaqinlashganda QQS bilan umumiy tizimga o'tish kerak. Muqobil: 2026-yildan o'z-o'zini band qilganlar 100 mln/yilgacha aylanmada 1% to'laydilar.",
    ],
    faqRu: [
      { question: 'Какая ставка налога с оборота?', answer: '4% от валового дохода. Расходы не вычитаются.' },
      { question: 'Кто платит налог с оборота?', answer: 'ИП и юрлица на упрощённой системе с оборотом менее 60 000 БРВ (24,72 млрд сум).' },
      { question: 'Когда выгодна упрощённая система?', answer: 'При расходах менее 40% от выручки. При больших расходах — общая система (15% от прибыли) выгоднее.' },
    ],
    faqUz: [
      { question: "Aylanma solig'i stavkasi qancha?", answer: "Yalpi daromadning 4%. Xarajatlar chegirilmaydi." },
      { question: "Aylanma solig'ini kim to'laydi?", answer: "Soddalashtilgan tizimdagi 60 000 BHK (24,72 mlrd so'm) dan kam aylanmali YaTT va yuridik shaxslar." },
      { question: "Soddalashtilgan tizim qachon foydali?", answer: "Xarajatlar tushumning 40% dan kam bo'lganda. Ko'p xarajatlarda — umumiy tizim (foydadan 15%) foydaliroq." },
    ],
  },

  {
    slug: 'sick-leave',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' }],
    paragraphsRu: [
      'Больничный лист в Узбекистане оплачивается: первые 10 рабочих дней — за счёт работодателя, далее — из фонда социального страхования. Размер оплаты зависит от стажа: до 5 лет — 60%, 5-8 лет — 80%, свыше 8 лет — 100% среднего заработка.',
      'Расчёт: среднедневной заработок × процент по стажу × количество рабочих дней нетрудоспособности. Максимальный срок оплачиваемого больничного — до 120 календарных дней подряд.',
      'Пример: стаж 6 лет, средний заработок 400 000 сум/день, больничный 15 дней. Оплата: 400 000 × 80% × 15 = 4 800 000 сум (первые 10 дней — работодатель, 5 дней — соцстрах).',
    ],
    paragraphsUz: [
      "O'zbekistonda kasallik varag'i to'lanadi: birinchi 10 ish kuni — ish beruvchi hisobidan, keyin — ijtimoiy sug'urta fondidan. To'lov miqdori stajga bog'liq: 5 yilgacha — 60%, 5-8 yil — 80%, 8 yildan ortiq — o'rtacha ish haqining 100%.",
      "Hisob: o'rtacha kunlik ish haqi × staj bo'yicha foiz × mehnatga layoqatsizlik ish kunlari soni. Maksimal to'lanadigan kasallik muddati — ketma-ket 120 kalendar kungacha.",
      "Misol: staj 6 yil, o'rtacha ish haqi 400 000 so'm/kun, kasallik 15 kun. To'lov: 400 000 × 80% × 15 = 4 800 000 so'm.",
    ],
    faqRu: [
      { question: 'Как оплачивается больничный?', answer: 'В зависимости от стажа: до 5 лет — 60%, 5-8 лет — 80%, более 8 лет — 100% среднего заработка.' },
      { question: 'Кто оплачивает больничный?', answer: 'Первые 10 рабочих дней — работодатель, далее — фонд социального страхования.' },
      { question: 'Какой максимальный срок больничного?', answer: 'До 120 календарных дней подряд.' },
    ],
    faqUz: [
      { question: "Kasallik varag'i qanday to'lanadi?", answer: "Stajga qarab: 5 yilgacha — 60%, 5-8 yil — 80%, 8 yildan ortiq — o'rtacha ish haqining 100%." },
      { question: "Kasallik varag'ini kim to'laydi?", answer: "Birinchi 10 ish kuni — ish beruvchi, keyin — ijtimoiy sug'urta fondi." },
      { question: "Kasallik varag'ining maksimal muddati qancha?", answer: "Ketma-ket 120 kalendar kungacha." },
    ],
  },

  {
    slug: 'maternity',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' }],
    paragraphsRu: [
      'Отпуск по беременности и родам в Узбекистане: 70 календарных дней до родов и 56 после (70 при осложнениях или многоплодной беременности). Пособие — 100% среднего заработка. Отпуск по уходу за ребёнком — до 2 лет (с сохранением рабочего места) или до 3 лет (без сохранения).',
      'Пособие по уходу за ребёнком до 2 лет: 50% от среднемесячного заработка, но не менее 50% МЗП (635 500 сум). Единовременное пособие при рождении: 2 БРВ (824 000 сум) на первого ребёнка, 3 БРВ на второго, 4 БРВ на третьего и далее.',
      'Расчёт декретного пособия: среднедневной заработок × 126 дней (или 140 при осложнениях). Пример: средний заработок 15 млн сум/мес ≈ 500 000 сум/день × 126 = 63 000 000 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda homiladorlik va tug'ish ta'tili: tug'ishdan 70 kalendar kun oldin va 56 kun keyin (asorat yoki ko'p homilada 70 kun). Nafaqa — o'rtacha ish haqining 100%. Bolaga qarashuv ta'tili — 2 yilgacha (ish joyini saqlash bilan) yoki 3 yilgacha (saqlashsiz).",
      "2 yoshgacha bolaga qarashuv nafaqasi: o'rtacha oylik ish haqining 50%, lekin MIHning 50% dan kam emas (635 500 so'm). Tug'ilganda bir martalik nafaqa: birinchi bolaga 2 BHK (824 000 so'm), ikkinchiga 3 BHK, uchinchi va keyingilarga 4 BHK.",
      "Dekret nafaqasi hisobi: o'rtacha kunlik ish haqi × 126 kun (yoki asoratlarda 140). Misol: o'rtacha ish haqi 15 mln so'm/oy ≈ 500 000 so'm/kun × 126 = 63 000 000 so'm.",
    ],
    faqRu: [
      { question: 'Сколько длится декретный отпуск?', answer: '126 дней (70 до + 56 после родов). При осложнениях: 140 дней (70 + 70).' },
      { question: 'Какое пособие по уходу за ребёнком?', answer: '50% от среднего заработка до 2 лет. Минимум — 50% МЗП (635 500 сум).' },
      { question: 'Какое единовременное пособие при рождении?', answer: '1-й ребёнок: 2 БРВ (824 000 сум), 2-й: 3 БРВ (1 236 000), 3-й+: 4 БРВ (1 648 000).' },
    ],
    faqUz: [
      { question: "Dekret ta'tili qancha davom etadi?", answer: "126 kun (tug'ishdan oldin 70 + keyin 56). Asoratlarda: 140 kun (70 + 70)." },
      { question: "Bolaga qarashuv nafaqasi qancha?", answer: "2 yilgacha o'rtacha ish haqining 50%. Minimum — MIHning 50% (635 500 so'm)." },
      { question: "Tug'ilganda bir martalik nafaqa qancha?", answer: "1-bola: 2 BHK (824 000 so'm), 2-bola: 3 BHK (1 236 000), 3+: 4 BHK (1 648 000)." },
    ],
  },

  {
    slug: 'severance',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' }],
    paragraphsRu: [
      'Выходное пособие при увольнении в Узбекистане зависит от основания увольнения. При сокращении штата: не менее среднемесячного заработка. При ликвидации организации: среднемесячный заработок + выплата на период трудоустройства (до 2 месяцев).',
      'Компенсация за неиспользованный отпуск выплачивается при любом основании увольнения. Расчёт: средний дневной заработок × количество неиспользованных дней отпуска.',
      'При увольнении по собственному желанию выходное пособие не выплачивается (только компенсация за отпуск). При увольнении по соглашению сторон — выплаты по договорённости.',
    ],
    paragraphsUz: [
      "O'zbekistonda ishdan bo'shatishda chiqish nafaqasi ishdan bo'shatish asosiga bog'liq. Shtatni qisqartirish: o'rtacha oylik ish haqidan kam emas. Tashkilotni tugatish: o'rtacha oylik + ish topish davri uchun to'lov (2 oygacha).",
      "Foydalanilmagan ta'til uchun kompensatsiya har qanday ishdan bo'shatish asosida to'lanadi. Hisob: o'rtacha kunlik ish haqi × foydalanilmagan ta'til kunlari soni.",
      "O'z xohishi bilan ishdan bo'shaganda chiqish nafaqasi to'lanmaydi (faqat ta'til kompensatsiyasi). Tomonlar kelishuvi bo'yicha — kelishilgan to'lovlar.",
    ],
    faqRu: [
      { question: 'Положено ли выходное пособие при увольнении?', answer: 'При сокращении/ликвидации — да (от 1 среднемесячного заработка). По собственному желанию — нет.' },
      { question: 'Как рассчитать компенсацию за неиспользованный отпуск?', answer: 'Средний дневной заработок × количество неиспользованных дней.' },
      { question: 'Какие выплаты при сокращении?', answer: 'Выходное пособие (≥1 среднемесячный) + компенсация за отпуск + сохранение зарплаты на период трудоустройства (до 2 мес.).' },
    ],
    faqUz: [
      { question: "Ishdan bo'shatishda chiqish nafaqasi beriladimi?", answer: "Qisqartirish/tugatishda — ha (kamida 1 o'rtacha oylik). O'z xohishi bilan — yo'q." },
      { question: "Foydalanilmagan ta'til kompensatsiyasini qanday hisoblash mumkin?", answer: "O'rtacha kunlik ish haqi × foydalanilmagan kunlar soni." },
      { question: "Qisqartirish vaqtida qanday to'lovlar bor?", answer: "Chiqish nafaqasi (≥1 o'rtacha oylik) + ta'til kompensatsiyasi + ish topish davri uchun ish haqi (2 oygacha)." },
    ],
  },

  {
    slug: 'alimony',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Семейный кодекс РУз', url: 'https://lex.uz/docs/6257288' }],
    paragraphsRu: [
      'Алименты в Узбекистане устанавливаются в долях от дохода: на 1 ребёнка — 25% (1/4), на 2 детей — 33% (1/3), на 3 и более — 50% (1/2). По решению суда алименты могут быть назначены в фиксированной сумме.',
      'Алименты удерживаются из всех видов дохода: зарплата, премии, доход от предпринимательства, пенсия, стипендия. Не удерживаются из: командировочных, материальной помощи при рождении ребёнка, компенсаций при увольнении.',
      'Пример: доход 8 000 000 сум, 2 ребёнка. Алименты = 8 000 000 × 1/3 = 2 666 667 сум. Алименты не облагаются НДФЛ на стороне получателя.',
    ],
    paragraphsUz: [
      "O'zbekistonda nafaqa daromadning ulushlarida belgilanadi: 1 bolaga — 25% (1/4), 2 bolaga — 33% (1/3), 3 va undan ko'p — 50% (1/2). Sud qarori bilan nafaqa qat'iy summada tayinlanishi mumkin.",
      "Nafaqa barcha turdagi daromadlardan ushlab qolinadi: ish haqi, mukofotlar, tadbirkorlik daromadi, pensiya, stipendiya. Ushlanmaydi: xizmat safari xarajatlari, bola tug'ilishida moddiy yordam, ishdan bo'shatish kompensatsiyasi.",
      "Misol: daromad 8 000 000 so'm, 2 bola. Nafaqa = 8 000 000 × 1/3 = 2 666 667 so'm. Nafaqa oluvchi tomonida JShShSga tortilmaydi.",
    ],
    faqRu: [
      { question: 'Какой процент алиментов на ребёнка?', answer: '1 ребёнок — 25%, 2 — 33%, 3+ — 50% от дохода.' },
      { question: 'С каких доходов удерживаются алименты?', answer: 'Со всех: зарплата, премии, доход ИП, пенсия, стипендия.' },
      { question: 'Облагаются ли алименты налогом?', answer: 'Нет, алименты не облагаются НДФЛ у получателя.' },
    ],
    faqUz: [
      { question: "Bolaga nafaqa necha foiz?", answer: "1 bola — 25%, 2 — 33%, 3+ — daromadning 50%." },
      { question: "Qanday daromadlardan nafaqa ushlab qolinadi?", answer: "Barchasidan: ish haqi, mukofotlar, YaTT daromadi, pensiya, stipendiya." },
      { question: "Nafaqa soliqqa tortiladimi?", answer: "Yo'q, nafaqa oluvchi tomonida JShShSga tortilmaydi." },
    ],
  },

  {
    slug: 'overtime',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' }],
    paragraphsRu: [
      'Сверхурочная работа в Узбекистане оплачивается: первые 2 часа — в 1,5-кратном размере, каждый последующий час — в 2-кратном. Работа в выходные и праздничные дни — в 2-кратном размере или с предоставлением отгула.',
      'Максимальная продолжительность сверхурочных: 4 часа за 2 дня подряд, не более 120 часов в год. Запрещено привлекать к сверхурочной работе: беременных, несовершеннолетних, инвалидов (без согласия).',
      'Пример: часовая ставка 50 000 сум, 4 часа сверхурочных. Оплата: 2ч × 75 000 + 2ч × 100 000 = 350 000 сум (вместо 200 000 при обычной ставке). Переплата: 150 000 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda ortiqcha ish to'lanadi: dastlabki 2 soat — 1,5 baravarda, har keyingi soat — 2 baravarda. Dam olish va bayram kunlaridagi ish — 2 baravarda yoki qo'shimcha dam olish kuni bilan.",
      "Ortiqcha ishning maksimal davomiyligi: ketma-ket 2 kun uchun 4 soat, yiliga 120 soatdan ko'p emas. Ortiqcha ishga jalb qilish taqiqlangan: homilador, voyaga yetmaganlar, nogironlar (roziligisiz).",
      "Misol: soatlik stavka 50 000 so'm, 4 soat ortiqcha ish. To'lov: 2s × 75 000 + 2s × 100 000 = 350 000 so'm (oddiy stavkada 200 000 o'rniga). Ortiqcha to'lov: 150 000 so'm.",
    ],
    faqRu: [
      { question: 'Как оплачивается сверхурочная работа?', answer: 'Первые 2 часа — ×1,5, далее — ×2. В выходные/праздники — ×2.' },
      { question: 'Сколько часов можно работать сверхурочно?', answer: 'До 4 часов за 2 дня подряд, до 120 часов в год.' },
      { question: 'Кого нельзя привлекать к сверхурочным?', answer: 'Беременных, несовершеннолетних, инвалидов (без их согласия).' },
    ],
    faqUz: [
      { question: "Ortiqcha ish qanday to'lanadi?", answer: "Dastlabki 2 soat — ×1,5, keyin — ×2. Dam olish/bayramlarda — ×2." },
      { question: "Necha soat ortiqcha ishlash mumkin?", answer: "Ketma-ket 2 kun uchun 4 soatgacha, yiliga 120 soatgacha." },
      { question: "Kimni ortiqcha ishga jalb qilib bo'lmaydi?", answer: "Homiladorlar, voyaga yetmaganlar, nogironlar (ularning roziligisiz)." },
    ],
  },

  {
    slug: 'pension',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Закон о пенсионном обеспечении', url: 'https://lex.uz' }],
    paragraphsRu: [
      'Пенсионный возраст в Узбекистане: мужчины — 60 лет, женщины — 55 лет. Минимальная пенсия — около 1 БРВ (412 000 сум). Размер пенсии зависит от стажа и среднего заработка. При стаже 25 лет (мужчины) / 20 лет (женщины) — полная пенсия.',
      'Формула: Пенсия = Средний заработок за лучшие 5 лет × (55% + 1% за каждый год стажа сверх минимального). Максимум — 75% от среднего заработка.',
      'С 2023 года действует накопительная пенсионная система (ИНПС): 0,1% от зарплаты. Накопления — личная собственность работника, наследуются.',
    ],
    paragraphsUz: [
      "O'zbekistonda pensiya yoshi: erkaklar — 60 yosh, ayollar — 55 yosh. Minimal pensiya — taxminan 1 BHK (412 000 so'm). Pensiya miqdori staj va o'rtacha ish haqiga bog'liq. 25 yil stajda (erkaklar) / 20 yil (ayollar) — to'liq pensiya.",
      "Formula: Pensiya = Eng yaxshi 5 yildagi o'rtacha ish haqi × (55% + minimaldan ortiq har yil staj uchun 1%). Maksimum — o'rtacha ish haqining 75%.",
      "2023-yildan jamg'arma pensiya tizimi (IJPH) amal qiladi: ish haqining 0,1%. Jamg'armalar — xodimning shaxsiy mulki, meros qilib qoldiriladi.",
    ],
    faqRu: [
      { question: 'Какой пенсионный возраст в Узбекистане?', answer: 'Мужчины — 60 лет, женщины — 55 лет.' },
      { question: 'Какая минимальная пенсия?', answer: 'Около 1 БРВ (412 000 сум). Зависит от стажа и заработка.' },
      { question: 'Что такое ИНПС?', answer: 'Индивидуальный накопительный пенсионный счёт. Взнос 0,1% от зарплаты. Личная собственность, наследуется.' },
    ],
    faqUz: [
      { question: "O'zbekistonda pensiya yoshi necha?", answer: "Erkaklar — 60 yosh, ayollar — 55 yosh." },
      { question: "Minimal pensiya qancha?", answer: "Taxminan 1 BHK (412 000 so'm). Staj va ish haqiga bog'liq." },
      { question: 'IJPH nima?', answer: "Individual jamg'arma pensiya hisobvarag'i. To'lov ish haqining 0,1%. Shaxsiy mulk, meros qilib qoldiriladi." },
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
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор отопления рассчитывает стоимость обогрева помещения различными способами: центральное отопление, газовый котёл, электрический обогреватель, тепловой насос. Сравнивает стоимость за отопительный сезон (октябрь-март).',
      'Стоимость отопления за сезон (квартира 60 м²): центральное — 1 500 000-2 500 000 сум; газовый котёл — 2 000 000-4 000 000 сум; электрические обогреватели — 3 000 000-6 000 000 сум.',
      'Для частного дома (100 м²): газовый котёл — 4 000 000-8 000 000 сум за сезон. Утепление стен и окон снижает расходы на 30-50%.',
    ],
    paragraphsUz: [
      "Isitish kalkulyatori binoni turli usullarda isitish narxini hisoblaydi: markaziy isitish, gaz qozoni, elektr isitgich, issiqlik pompasi. Isitish mavsuimi (oktyabr-mart) uchun narxni solishtiradi.",
      "Mavsum uchun isitish narxi (60 m² kvartira): markaziy — 1 500 000-2 500 000 so'm; gaz qozoni — 2 000 000-4 000 000 so'm; elektr isitgichlar — 3 000 000-6 000 000 so'm.",
      "Xususiy uy uchun (100 m²): gaz qozoni — mavsumiga 4 000 000-8 000 000 so'm. Devor va derazalarni izolyatsiya qilish xarajatlarni 30-50% ga kamaytiradi.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ отопления?', answer: 'Центральное отопление — самый экономичный. Газовый котёл — средний. Электрический — самый дорогой.' },
      { question: 'Сколько стоит отопление квартиры за сезон?', answer: 'Квартира 60 м²: 1,5-4 млн сум за сезон в зависимости от способа обогрева.' },
      { question: 'Как снизить расходы на отопление?', answer: 'Утепление стен и окон (экономия 30-50%), программируемый термостат, регулярное обслуживание котла.' },
    ],
    faqUz: [
      { question: "Eng arzon isitish usuli qanday?", answer: "Markaziy isitish — eng tejamkor. Gaz qozoni — o'rtacha. Elektr — eng qimmat." },
      { question: "Kvartirani mavsumiga isitish qancha turadi?", answer: "60 m² kvartira: isitish usuliga qarab mavsumiga 1,5-4 mln so'm." },
      { question: "Isitish xarajatlarini qanday kamaytirish mumkin?", answer: "Devor va derazalarni izolyatsiya qilish (30-50% tejash), dasturlashtiriladigan termostat, qozonni muntazam xizmat qilish." },
    ],
  },

  {
    slug: 'internet',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор стоимости интернета сравнивает тарифы провайдеров Узбекистана: Uztelecom, TuronTelecom, Humans, Beeline, Ucell, Mobiuz. Домашний интернет: от 100 000 сум/мес (30 Мбит/с) до 500 000 сум/мес (1 Гбит/с).',
      'Мобильный интернет: от 29 000 сум/мес (5 ГБ) до 200 000 сум/мес (безлимит). 5G пока ограниченно доступен в Ташкенте.',
      'При выборе провайдера учитывайте: скорость, объём трафика, стабильность соединения, зону покрытия. Для стриминга и работы из дома рекомендуется от 100 Мбит/с.',
    ],
    paragraphsUz: [
      "Internet narxi kalkulyatori O'zbekiston provayderlarining tariflarini solishtiradi: Uztelecom, TuronTelecom, Humans, Beeline, Ucell, Mobiuz. Uy interneti: 100 000 so'm/oy (30 Mbit/s) dan 500 000 so'm/oy (1 Gbit/s) gacha.",
      "Mobil internet: 29 000 so'm/oy (5 GB) dan 200 000 so'm/oy (cheksiz) gacha. 5G hozircha Toshkentda cheklangan tarzda mavjud.",
      "Provayder tanlashda hisobga oling: tezlik, trafik hajmi, ulanishning barqarorligi, qamrov zonasi. Striming va uydan ishlash uchun 100 Mbit/s dan tavsiya etiladi.",
    ],
    faqRu: [
      { question: 'Сколько стоит домашний интернет?', answer: 'От 100 000 сум (30 Мбит/с) до 500 000 сум (1 Гбит/с) в месяц.' },
      { question: 'Какой интернет самый быстрый?', answer: 'Оптоволокно (Uztelecom, TuronTelecom): до 1 Гбит/с. Мобильный 4G: до 100 Мбит/с.' },
      { question: 'Какую скорость выбрать?', answer: 'Для соцсетей: 30 Мбит/с. Для стриминга: 100+ Мбит/с. Для работы из дома: 50-100 Мбит/с.' },
    ],
    faqUz: [
      { question: "Uy interneti qancha turadi?", answer: "Oyiga 100 000 so'm (30 Mbit/s) dan 500 000 so'm (1 Gbit/s) gacha." },
      { question: "Eng tez internet qaysi?", answer: "Optik tolali (Uztelecom, TuronTelecom): 1 Gbit/s gacha. Mobil 4G: 100 Mbit/s gacha." },
      { question: "Qanday tezlik tanlash kerak?", answer: "Ijtimoiy tarmoqlar uchun: 30 Mbit/s. Striming uchun: 100+ Mbit/s. Uydan ishlash uchun: 50-100 Mbit/s." },
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
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор ROI (возврат инвестиций) рассчитывает доходность вложений. Формула: ROI = (Прибыль − Инвестиции) / Инвестиции × 100%. Показывает, сколько процентов заработали на каждый вложенный сум.', 'Пример: инвестировали 100 млн сум, получили прибыль 130 млн. ROI = (130 − 100) / 100 × 100% = 30%. Для сравнения: банковский вклад ~24%, инфляция ~10%.', 'ROI полезен для сравнения разных вариантов вложений: бизнес, недвижимость, вклады, ценные бумаги.'],
    paragraphsUz: ["ROI (investitsiyalar qaytimi) kalkulyatori mablag' qo'yishning daromadliligini hisoblaydi. Formula: ROI = (Foyda − Investitsiya) / Investitsiya × 100%. Har bir qo'yilgan so'mga necha foiz ishlab topganingizni ko'rsatadi.", "Misol: 100 mln so'm invest qilindi, 130 mln foyda olindi. ROI = (130 − 100) / 100 × 100% = 30%. Solishtirish uchun: bank omonati ~24%, inflyatsiya ~10%.", "ROI turli mablag' qo'yish variantlarini solishtirish uchun foydali: biznes, ko'chmas mulk, omonatlar, qimmatli qog'ozlar."],
    faqRu: [{ question: 'Что такое ROI?', answer: 'Return on Investment — показатель доходности инвестиций в процентах.' }, { question: 'Как рассчитать ROI?', answer: '(Прибыль − Инвестиции) / Инвестиции × 100%.' }, { question: 'Какой ROI считается хорошим?', answer: 'Выше инфляции (~10%) и ставки по вкладам (~24%). ROI >30% — отличный результат.' }],
    faqUz: [{ question: 'ROI nima?', answer: "Return on Investment — investitsiyalar daromadliligining foizdagi ko'rsatkichi." }, { question: "ROIni qanday hisoblash mumkin?", answer: "(Foyda − Investitsiya) / Investitsiya × 100%." }, { question: "Qanday ROI yaxshi hisoblanadi?", answer: "Inflyatsiyadan (~10%) va omonat stavkalaridan (~24%) yuqori. ROI >30% — ajoyib natija." }],
  },

  {
    slug: 'ideal-weight',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'ВОЗ', url: 'https://who.int' }],
    paragraphsRu: ['Калькулятор идеального веса определяет рекомендуемый диапазон массы тела по нескольким формулам: Лоренца, Брока, Девайна и ВОЗ (ИМТ 18,5-24,9). Рост, пол и телосложение влияют на результат.', 'Пример (мужчина, 180 см): Брок: 80 кг, Лоренц: 75 кг, ВОЗ: 60-81 кг. Рекомендуемый диапазон: 70-80 кг. Для женщины (165 см): 55-68 кг.', 'Идеальный вес — ориентир, не абсолют. Учитывайте мышечную массу, возраст и индивидуальные особенности.'],
    paragraphsUz: ["Ideal vazn kalkulyatori bir nechta formulalar bo'yicha tavsiya etilgan tana massasi diapazonini aniqlaydi: Lorents, Brok, Devayn va JSST (TMI 18,5-24,9). Bo'y, jins va tana tuzilishi natijaga ta'sir qiladi.", "Misol (erkak, 180 sm): Brok: 80 kg, Lorents: 75 kg, JSST: 60-81 kg. Tavsiya etilgan diapazon: 70-80 kg. Ayol (165 sm) uchun: 55-68 kg.", "Ideal vazn — mo'ljal, mutlaq ko'rsatkich emas. Mushak massasi, yosh va individual xususiyatlarni hisobga oling."],
    faqRu: [{ question: 'Как рассчитать идеальный вес?', answer: 'По формулам Брока, Лоренца, Девайна или через ИМТ 18,5-24,9. Калькулятор использует все методы.' }, { question: 'Какой вес нормальный для роста 170 см?', answer: 'По ВОЗ: 53-72 кг (ИМТ 18,5-24,9). Оптимально: 60-68 кг.' }, { question: 'Одинаков ли идеальный вес для мужчин и женщин?', answer: 'Нет, при одном росте идеальный вес мужчины обычно на 5-10 кг больше за счёт мышечной массы.' }],
    faqUz: [{ question: 'Ideal vaznni qanday hisoblash mumkin?', answer: "Brok, Lorents, Devayn formulalari yoki TMI 18,5-24,9 orqali. Kalkulyator barcha usullarni qo'llaydi." }, { question: "170 sm bo'yga qanday vazn normal?", answer: "JSST bo'yicha: 53-72 kg (TMI 18,5-24,9). Optimal: 60-68 kg." }, { question: "Ideal vazn erkak va ayollar uchun bir xilmi?", answer: "Yo'q, bir xil bo'yda erkakning ideal vazni mushak massasi hisobiga odatda 5-10 kg ko'proq." }],
  },

  {
    slug: 'macros',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' }],
    paragraphsRu: ['Калькулятор КБЖУ рассчитывает суточную норму калорий, белков, жиров и углеводов в зависимости от цели: поддержание, похудение или набор массы. Стандартное соотношение: 30% белки, 25% жиры, 45% углеводы.', 'Пример (мужчина, 80 кг, поддержание, 2 400 ккал): белки = 180 г (720 ккал), жиры = 67 г (600 ккал), углеводы = 270 г (1 080 ккал).', 'Для похудения: увеличьте долю белка до 35-40%, снизьте углеводы до 30-35%. Для набора массы: увеличьте углеводы до 50-55%.'],
    paragraphsUz: ["KBYU kalkulyatori maqsadga qarab — saqlash, oriqlamoq yoki massa oshirish — kunlik kaloriya, oqsil, yog' va uglevodlar normasini hisoblaydi. Standart nisbat: 30% oqsillar, 25% yog'lar, 45% uglevodlar.", "Misol (erkak, 80 kg, saqlash, 2 400 kkal): oqsillar = 180 g (720 kkal), yog'lar = 67 g (600 kkal), uglevodlar = 270 g (1 080 kkal).", "Oriqlamoq uchun: oqsil ulushini 35-40% ga oshiring, uglevodlarni 30-35% ga kamaytiring. Massa oshirish uchun: uglevodlarni 50-55% ga oshiring."],
    faqRu: [{ question: 'Какое соотношение БЖУ оптимально?', answer: 'Для поддержания: белки 30%, жиры 25%, углеводы 45%. Для похудения: белки 35-40%.' }, { question: 'Сколько белка нужно в день?', answer: '1,5-2 г на кг веса при активном образе жизни. Для человека 80 кг: 120-160 г.' }, { question: 'Как рассчитать КБЖУ?', answer: 'Определите суточные калории (калькулятор калорий), затем распределите по макронутриентам.' }],
    faqUz: [{ question: "Qanday BYU nisbati optimal?", answer: "Saqlash uchun: oqsillar 30%, yog'lar 25%, uglevodlar 45%. Oriqlamoq uchun: oqsillar 35-40%." }, { question: "Kuniga qancha oqsil kerak?", answer: "Faol turmush tarzida vazn kg ga 1,5-2 g. 80 kg odam uchun: 120-160 g." }, { question: "KBYUni qanday hisoblash mumkin?", answer: "Kunlik kaloriyalarni aniqlang (kaloriya kalkulyatori), keyin makronutrientlar bo'yicha taqsimlang." }],
  },

  {
    slug: 'pregnancy',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор беременности определяет предполагаемую дату родов (ПДР), текущий срок беременности в неделях и триместр. ПДР рассчитывается по формуле Негеле: первый день последних месячных + 280 дней (40 недель).', 'Триместры: 1-й (1-12 недель), 2-й (13-27 недель), 3-й (28-40 недель). Калькулятор показывает оставшиеся дни до ПДР и ключевые даты обследований.', 'Только 5% родов происходят точно в ПДР. Нормальные роды: 37-42 неделя. Важно регулярно посещать врача.'],
    paragraphsUz: ["Homiladorlik kalkulyatori taxminiy tug'ilish sanasini (TTS), haftalardagi homiladorlik muddatini va trimestrni aniqlaydi. TTS Negele formulasi bo'yicha hisoblanadi: oxirgi hayz birinchi kuni + 280 kun (40 hafta).", "Trimestrlar: 1-chi (1-12 hafta), 2-chi (13-27 hafta), 3-chi (28-40 hafta). Kalkulyator TTSgacha qolgan kunlar va tekshiruvlarning asosiy sanalarini ko'rsatadi.", "Faqat 5% tug'ilishlar aniq TTSda sodir bo'ladi. Normal tug'ilish: 37-42 hafta. Muntazam shifokorga tashrif buyurish muhim."],
    faqRu: [{ question: 'Как рассчитать дату родов?', answer: 'Первый день последних месячных + 280 дней. Или наш калькулятор сделает это автоматически.' }, { question: 'Сколько недель длится беременность?', answer: '40 недель (280 дней) от первого дня последней менструации. Нормальные роды: 37-42 неделя.' }, { question: 'Что такое триместры?', answer: '1-й: 1-12 нед., 2-й: 13-27 нед., 3-й: 28-40 нед.' }],
    faqUz: [{ question: "Tug'ilish sanasini qanday hisoblash mumkin?", answer: "Oxirgi hayzning birinchi kuni + 280 kun. Yoki kalkulyatorimiz buni avtomatik qiladi." }, { question: "Homiladorlik necha hafta davom etadi?", answer: "Oxirgi hayzning birinchi kunidan 40 hafta (280 kun). Normal tug'ilish: 37-42 hafta." }, { question: "Trimestrlar nima?", answer: "1-chi: 1-12 hafta, 2-chi: 13-27 hafta, 3-chi: 28-40 hafta." }],
  },

  {
    slug: 'tuition',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор стоимости обучения рассчитывает расходы на образование в вузах Узбекистана. Стоимость контрактного обучения (2025): государственные вузы — 12-30 млн сум/год, частные — 15-50 млн, зарубежные программы — от 50 млн.', 'Медицинские вузы: 25-45 млн сум/год. Технические: 15-25 млн. Экономика/юриспруденция: 18-35 млн. Бюджетные места — бесплатно (стипендия от 800 000 сум).', 'Дополнительные расходы: учебники (1-3 млн/год), проживание в общежитии (1-3 млн/год), питание (3-5 млн/год).'],
    paragraphsUz: ["Ta'lim narxi kalkulyatori O'zbekiston oliy ta'lim muassasalarida o'qish xarajatlarini hisoblaydi. Kontrakt asosida o'qish narxi (2025): davlat OTMlari — 12-30 mln so'm/yil, xususiy — 15-50 mln, xorijiy dasturlar — 50 mln dan.", "Tibbiyot OTMlari: 25-45 mln so'm/yil. Texnik: 15-25 mln. Iqtisod/huquqshunoslik: 18-35 mln. Byudjet o'rinlari — bepul (stipendiya 800 000 so'mdan).", "Qo'shimcha xarajatlar: darsliklar (yiliga 1-3 mln), yotoqxonada yashash (yiliga 1-3 mln), ovqatlanish (yiliga 3-5 mln)."],
    faqRu: [{ question: 'Сколько стоит обучение в вузе?', answer: 'Государственные: 12-30 млн/год, частные: 15-50 млн. Медвузы: 25-45 млн. Бюджет — бесплатно.' }, { question: 'Есть ли образовательные кредиты?', answer: 'Да, банки предлагают кредиты на образование по льготным ставкам 14-18% на срок до 5-7 лет.' }, { question: 'Какие дополнительные расходы?', answer: 'Учебники: 1-3 млн/год, общежитие: 1-3 млн/год, питание: 3-5 млн/год.' }],
    faqUz: [{ question: "OTMda o'qish qancha turadi?", answer: "Davlat: yiliga 12-30 mln, xususiy: 15-50 mln. Tibbiyot: 25-45 mln. Byudjet — bepul." }, { question: "Ta'lim kreditlari bormi?", answer: "Ha, banklar 14-18% imtiyozli stavkalarda 5-7 yilgacha muddatga ta'lim kreditlari taklif etadi." }, { question: "Qo'shimcha xarajatlar qanday?", answer: "Darsliklar: yiliga 1-3 mln, yotoqxona: 1-3 mln, ovqatlanish: 3-5 mln." }],
  },

  {
    slug: 'education-loan',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Центральный банк РУз', url: 'https://cbu.uz' }],
    paragraphsRu: ['Образовательные кредиты в Узбекистане выдаются по льготным ставкам: 14-18% годовых (ниже рыночных). Срок: до 7 лет с льготным периодом (отсрочка до окончания учёбы). Сумма: до полной стоимости обучения.', 'Требования: поступление в аккредитованный вуз, поручитель (родитель), кредитная история поручителя. Погашение начинается после окончания учёбы (в течение льготного периода платятся только проценты).', 'Пример: обучение 25 млн/год × 4 года = 100 млн сум под 16% на 7 лет. Платёж после учёбы: ≈ 2 300 000 сум/мес.'],
    paragraphsUz: ["O'zbekistonda ta'lim kreditlari imtiyozli stavkalarda beriladi: yillik 14-18% (bozor stavkalaridan past). Muddat: imtiyozli davr bilan (o'qish tugagunga qadar kechiktirish) 7 yilgacha. Summa: o'qish to'liq qiymatigacha.", "Talablar: akkreditatsiyalangan OTMga kirish, kafil (ota-ona), kafilning kredit tarixi. Qaytarish o'qish tugaganidan keyin boshlanadi (imtiyozli davrda faqat foizlar to'lanadi).", "Misol: o'qish yiliga 25 mln × 4 yil = 100 mln so'm 16% da 7 yilga. O'qishdan keyingi to'lov: ≈ 2 300 000 so'm/oy."],
    faqRu: [{ question: 'Какие ставки по образовательным кредитам?', answer: '14-18% годовых — ниже рыночных (18-28%).' }, { question: 'Когда начинать погашение?', answer: 'После окончания учёбы. В период обучения — только проценты (или отсрочка).' }, { question: 'Какие документы нужны?', answer: 'Справка о поступлении, паспорт, поручитель, документы поручителя.' }],
    faqUz: [{ question: "Ta'lim kreditlari stavkalari qanday?", answer: "Yillik 14-18% — bozor stavkalaridan (18-28%) past." }, { question: "Qaytarishni qachon boshlash kerak?", answer: "O'qish tugaganidan keyin. O'qish davrida — faqat foizlar (yoki kechiktirish)." }, { question: "Qanday hujjatlar kerak?", answer: "Kirish to'g'risida ma'lumotnoma, pasport, kafil, kafil hujjatlari." }],
  },

  {
    slug: 'gpa',
    lastUpdated: '2025-08-01',
    sources: [],
    paragraphsRu: ['Калькулятор GPA переводит оценки узбекской системы в международную шкалу GPA (0-4.0). Шкала: «отлично» (5) = 4.0, «хорошо» (4) = 3.0, «удовлетворительно» (3) = 2.0, «неудовлетворительно» (2) = 0.', 'GPA рассчитывается как средневзвешенное оценок с учётом кредитов (академических часов) каждого предмета. GPA = Σ(Оценка × Кредиты) / Σ(Кредиты).', 'GPA важен для поступления в магистратуру (особенно за рубежом): минимум 3.0 для большинства программ, от 3.5 для топ-университетов.'],
    paragraphsUz: ["GPA kalkulyatori o'zbek tizimi baholarini xalqaro GPA shkalasiga (0-4.0) o'giradi. Shkala: «a'lo» (5) = 4.0, «yaxshi» (4) = 3.0, «qoniqarli» (3) = 2.0, «qoniqarsiz» (2) = 0.", "GPA har bir fanning kreditlari (akademik soatlari) ni hisobga olgan holda baholarning o'rtacha tortilgan qiymati sifatida hisoblanadi. GPA = Σ(Baho × Kreditlar) / Σ(Kreditlar).", "GPA magistraturaga (ayniqsa xorijda) kirish uchun muhim: ko'pchilik dasturlar uchun kamida 3.0, top universitetlar uchun 3.5 dan."],
    faqRu: [{ question: 'Как перевести оценки в GPA?', answer: '5 = 4.0, 4 = 3.0, 3 = 2.0, 2 = 0. С учётом кредитов каждого предмета.' }, { question: 'Какой GPA нужен для магистратуры за рубежом?', answer: 'Минимум 3.0 для большинства программ. Топ-университеты: от 3.5.' }, { question: 'Как повысить GPA?', answer: 'Пересдавайте предметы с низкими оценками, берите дополнительные курсы с высокими оценками.' }],
    faqUz: [{ question: "Baholarni GPAga qanday o'girish mumkin?", answer: "5 = 4.0, 4 = 3.0, 3 = 2.0, 2 = 0. Har bir fanning kreditlarini hisobga olgan holda." }, { question: "Xorijda magistratura uchun qanday GPA kerak?", answer: "Ko'pchilik dasturlar uchun kamida 3.0. Top universitetlar: 3.5 dan." }, { question: "GPAni qanday oshirish mumkin?", answer: "Past baholi fanlarni qayta topshiring, yuqori baholi qo'shimcha kurslar oling." }],
  },

  {
    slug: 'fitr-sadaka',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' }],
    paragraphsRu: ['Фитр-садака — обязательная милостыня, выплачиваемая перед праздником Ид аль-Фитр (Рамадан хайит). Размер: стоимость 1 са (≈3,5 кг) основного продукта питания (пшеница, рис) на каждого члена семьи. В 2025 году: ~45 000 − 65 000 сум на человека.', 'Выплачивается за каждого члена семьи (включая детей). Глава семьи платит за всех иждивенцев. Рекомендуется выплатить до праздничной молитвы.', 'Получатели: нуждающиеся мусульмане. Можно передать через мечеть, благотворительную организацию или напрямую.'],
    paragraphsUz: ["Fitr-sadaqa — Iyd al-Fitr (Ramazon hayiti) bayramidan oldin to'lanadigan majburiy sadaqa. Miqdori: har bir oila a'zosiga 1 so' (≈3,5 kg) asosiy oziq-ovqat mahsuloti (bug'doy, guruch) narxi. 2025-yilda: kishiga ~45 000 − 65 000 so'm.", "Har bir oila a'zosi (bolalar kiritilgan holda) uchun to'lanadi. Oila boshlig'i barcha qaramog'idagilar uchun to'laydi. Bayram namozidan oldin to'lash tavsiya etiladi.", "Oluvchilar: muhtoj musulmonlar. Masjid, xayriya tashkiloti orqali yoki bevosita uzatish mumkin."],
    faqRu: [{ question: 'Сколько фитр-садака в 2025 году?', answer: '~45 000 − 65 000 сум на человека (стоимость 3,5 кг пшеницы/риса).' }, { question: 'Кто должен платить?', answer: 'Каждый мусульманин за себя и своих иждивенцев (включая детей).' }, { question: 'Когда нужно выплатить?', answer: 'До праздничной молитвы Ид аль-Фитр (Рамадан хайит).' }],
    faqUz: [{ question: '2025-yilda fitr-sadaqa qancha?', answer: "Kishiga ~45 000 − 65 000 so'm (3,5 kg bug'doy/guruch narxi)." }, { question: "Kim to'lashi kerak?", answer: "Har bir musulmon o'zi va qaramog'idagilar (bolalar kiritilgan holda) uchun." }, { question: "Qachon to'lash kerak?", answer: "Iyd al-Fitr (Ramazon hayiti) bayram namozidan oldin." }],
  },

  {
    slug: 'fidiya-sadaka',
    lastUpdated: '2025-08-01',
    sources: [{ name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' }],
    paragraphsRu: ['Фидия-садака — компенсация за пропущенный пост, который невозможно восполнить (хронические больные, пожилые). Размер: стоимость одного полноценного приёма пищи × количество пропущенных дней. В 2025 году: ~30 000 − 50 000 сум за день.', 'Выплачивается за каждый пропущенный день поста Рамадана. Если человек может восполнить пост позже — фидия не требуется, нужно восполнить пропущенные дни.', 'За месяц Рамадан (30 дней): 30 × 40 000 = ~1 200 000 сум. Передаётся нуждающимся.'],
    paragraphsUz: ["Fidiya-sadaqa — to'ldirish imkoni bo'lmagan (surunkali kasallar, keksalar) o'tkazib yuborilgan ro'za uchun kompensatsiya. Miqdori: bitta to'laqonli ovqatlanish narxi × o'tkazib yuborilgan kunlar soni. 2025-yilda: kuniga ~30 000 − 50 000 so'm.", "Ramazon ro'zasining har bir o'tkazib yuborilgan kuni uchun to'lanadi. Agar inson keyinroq ro'za tutishi mumkin bo'lsa — fidiya talab qilinmaydi, o'tkazib yuborilgan kunlarni qazo qilish kerak.", "Ramazon oyi (30 kun) uchun: 30 × 40 000 = ~1 200 000 so'm. Muhtojlarga uzatiladi."],
    faqRu: [{ question: 'Сколько фидия-садака за день?', answer: '~30 000 − 50 000 сум (стоимость одного приёма пищи).' }, { question: 'Кто платит фидию?', answer: 'Те, кто не может поститься по состоянию здоровья (хронические заболевания, пожилой возраст) и не может восполнить позже.' }, { question: 'Сколько за весь Рамадан?', answer: '30 дней × ~40 000 = ~1 200 000 сум.' }],
    faqUz: [{ question: "Bir kunlik fidiya-sadaqa qancha?", answer: "~30 000 − 50 000 so'm (bitta ovqatlanish narxi)." }, { question: "Fidiyani kim to'laydi?", answer: "Sog'liq holati (surunkali kasalliklar, keksalik) tufayli ro'za tutolmaydiganlar va keyinroq qazo qila olmaydiganlar." }, { question: "Butun Ramazon uchun qancha?", answer: "30 kun × ~40 000 = ~1 200 000 so'm." }],
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
    sources: [],
    paragraphsRu: ['Калькулятор стоимости визы рассчитывает расходы на оформление визы для граждан Узбекистана: консульский сбор, сервисный сбор визового центра, фото, перевод документов, страховка.', 'Примерные расходы (2025): Шенгенская виза — от 400 000 сум (сбор €80) + сервисный; виза США — от $185 (консульский сбор); виза Великобритании — от £100. Страховка: от 200 000 сум.', 'Безвизовые страны для граждан Узбекистана: Россия, Казахстан, Кыргызстан, Таджикистан, Грузия, Турция (некоторые условия), Малайзия и другие.'],
    paragraphsUz: ["Viza narxi kalkulyatori O'zbekiston fuqarolari uchun vizani rasmiylashtirish xarajatlarini hisoblaydi: konsullik to'lovi, viza markazining servis to'lovi, foto, hujjatlar tarjimasi, sug'urta.", "Taxminiy xarajatlar (2025): Shengen vizasi — 400 000 so'mdan (to'lov €80) + servis; AQSh vizasi — $185 dan (konsullik to'lovi); Buyuk Britaniya vizasi — £100 dan. Sug'urta: 200 000 so'mdan.", "O'zbekiston fuqarolari uchun vizasiz mamlakatlar: Rossiya, Qozog'iston, Qirg'iziston, Tojikiston, Gruziya, Turkiya (ba'zi shartlarda), Malayziya va boshqalar."],
    faqRu: [{ question: 'Сколько стоит Шенгенская виза?', answer: 'Консульский сбор €80 (~400 000 сум) + сервисный сбор визового центра (~200 000 сум) + фото, страховка.' }, { question: 'В какие страны не нужна виза?', answer: 'Россия, Казахстан, Кыргызстан, Таджикистан, Грузия, Турция (до 30 дней), Малайзия и другие.' }, { question: 'Из чего складывается стоимость визы?', answer: 'Консульский сбор + сервисный сбор + фото + перевод документов + страховка.' }],
    faqUz: [{ question: "Shengen vizasi qancha turadi?", answer: "Konsullik to'lovi €80 (~400 000 so'm) + viza markazi servis to'lovi (~200 000 so'm) + foto, sug'urta." }, { question: "Qaysi mamlakatlarga viza kerak emas?", answer: "Rossiya, Qozog'iston, Qirg'iziston, Tojikiston, Gruziya, Turkiya (30 kungacha), Malayziya va boshqalar." }, { question: "Viza narxi nimalardan tashkil topadi?", answer: "Konsullik to'lovi + servis to'lovi + foto + hujjatlar tarjimasi + sug'urta." }],
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
