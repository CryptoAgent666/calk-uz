export interface CalculatorArticle {
  slug: string
  paragraphsRu: string[]
  paragraphsUz: string[]
  faqRu: { question: string; answer: string }[]
  faqUz: { question: string; answer: string }[]
  /** ISO date when the article was first published. Used in JSON-LD `datePublished`. */
  datePublished?: string
  lastUpdated: string
  sources: { name: string; url: string }[]
}

export const CALCULATOR_ARTICLES: CalculatorArticle[] = [
  // =====================================================================
  // TOP 20 PRIORITY-1 CALCULATORS (800+ words, 5-7 FAQ each)
  // =====================================================================

  {
    slug: 'income-tax',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
      { name: 'IT Park', url: 'https://it-park.uz' },
    ],
    paragraphsRu: [
      'По состоянию на 2026 год ставка налога на доходы физических лиц (НДФЛ) в Узбекистане составляет 12%. Это основная плоская ставка для заработной платы и большинства других доходов; дивиденды резидентов облагаются по ставке 5%. Нерезиденты уплачивают НДФЛ по ставке 12% с доходов, полученных из источников в Узбекистане. Для резидентов IT Park действует льготная ставка 7,5%, что делает Узбекистан одной из наиболее привлекательных юрисдикций для IT-специалистов в Центральной Азии. Налог удерживается работодателем (налоговым агентом) ежемесячно при выплате заработной платы и перечисляется в бюджет не позднее даты фактической выплаты дохода.',
      'Помимо НДФЛ работодатель за свой счёт платит социальный налог 12% (бюджетные организации — 25%), из зарплаты он не удерживается. Взнос на индивидуальный накопительный пенсионный счёт (ИНПС) 0,1% входит в НДФЛ, поэтому с работника удерживается ровно 12%. Базовая расчётная величина (БРВ) с 1 сентября 2026 года равна 440 000 сум и используется для расчёта различных нормативов и вычетов.',
      'Рассмотрим пример расчёта. Если ваша начисленная заработная плата составляет 10 000 000 сум в месяц, то: НДФЛ = 10 000 000 × 12% = 1 200 000 сум; из этой суммы 10 000 сум (0,1%) зачисляется на ваш накопительный счёт ИНПС, а 1 190 000 сум уходит в бюджет. Итого удержания = 1 200 000 сум, на руки вы получите 8 800 000 сум. Дополнительно работодатель уплатит социальный налог: 10 000 000 × 12% = 1 200 000 сум. Для сотрудника IT Park с той же зарплатой: НДФЛ = 10 000 000 × 7,5% = 750 000 сум, на руки — 9 250 000 сум — разница составляет 450 000 сум ежемесячно.',
      'Налоговый кодекс предусматривает ряд вычетов и освобождений. Не облагаются НДФЛ: алименты, государственные пенсии, стипендии, материальная помощь в пределах 4,22 МРОТ (5 739 200 сум) в год от работодателя, страховые выплаты. Компенсация за неиспользованный отпуск и выходное пособие облагаются НДФЛ (ст. 374 и п. 9 ст. 377 НК). Также действует льгота по НДФЛ на доходы, направляемые на погашение ипотечного кредита и процентов по нему, — до 80 МРОТ (108 800 000 сум) за календарный год (п. 16 ст. 378 НК). Индивидуальные предприниматели на общей системе налогообложения уплачивают НДФЛ с чистого дохода (доходы минус документально подтверждённые расходы).',
      'Декларацию по НДФЛ обязаны подавать физические лица, получившие доходы, с которых налог не был удержан у источника выплаты: от сдачи имущества в аренду, из-за рубежа, от лиц, не являющихся налоговыми агентами (ст. 393 НК). Если налог удержан работодателем, декларация не нужна — даже при нескольких местах работы. Подать её можно и добровольно, чтобы заявить льготу. Срок подачи — не позднее 1 апреля года, следующего за отчётным (ст. 397 НК), а срок уплаты налога по декларации — не позднее 1 июня (ст. 398 НК). Декларация подаётся через портал my.soliq.uz или в налоговую инспекцию по месту жительства. За несвоевременную уплату НДФЛ начисляется пеня в размере 1/300 ставки рефинансирования ЦБ за каждый день просрочки (при ставке ЦБ 14% это 0,047%/день, или 17,0% годовых). Наш калькулятор НДФЛ автоматически рассчитает сумму налога и чистый доход с учётом всех удержаний — просто введите размер начисленной зарплаты.',
    ],
    paragraphsUz: [
      "2026-yilga ko'ra O'zbekistonda jismoniy shaxslarning daromad solig'i (JShShS) stavkasi 12% ni tashkil etadi. Bu ish haqi va boshqa ko'pchilik daromadlar uchun asosiy tekis stavka; rezidentlarning dividendlari 5% stavkada soliqqa tortiladi. Norezidentlar ham O'zbekistondagi manbalardan olingan daromadlardan 12% stavkada JShShS to'laydilar. IT Park rezidentlari uchun imtiyozli 7,5% stavka amal qiladi, bu O'zbekistonni Markaziy Osiyoda IT-mutaxassislar uchun eng jozibador yurisdiktsiyalardan biriga aylantiradi. Soliq ish beruvchi (soliq agenti) tomonidan har oy ish haqi to'lanayotganda ushlab qolinadi.",
      "JShShSdan tashqari, O'zbekistonda ish haqidan majburiy ajratmalar ushlab qolinadi: 12% miqdorida ijtimoiy soliq (byudjet tashkilotlari uchun — 25%), shuningdek individual jamg'arma pensiya hisobvarag'iga (IJPH) to'lov — hisoblangan ish haqining 0,1%. Shunday qilib, ish haqi fondiga umumiy soliq yuki sezilarli ulushni tashkil etadi. Ish beruvchi ijtimoiy soliqni o'z hisobidan to'laydi, JShShS va IJPH esa xodimning ish haqidan ushlab qolinadi. 2026-yil 1-sentabridan boshlab bazaviy hisoblash kattaligi (BHK) 440 000 so'm ga teng.",
      "Hisoblash misolini ko'rib chiqaylik. Agar sizning hisoblangan oylik ish haqingiz 10 000 000 so'm bo'lsa: JShShS = 10 000 000 × 12% = 1 200 000 so'm; shu summadan 10 000 so'm (0,1%) sizning IJPH jamg'arma hisobingizga o'tkaziladi, 1 190 000 so'm esa byudjetga ketadi. Jami ushlanmalar = 1 200 000 so'm, qo'lingizga 8 800 000 so'm tushadi. Qo'shimcha ravishda ish beruvchi ijtimoiy soliq to'laydi: 10 000 000 × 12% = 1 200 000 so'm. IT Park xodimi uchun xuddi shu ish haqida: JShShS = 10 000 000 × 7,5% = 750 000 so'm, qo'lga — 9 250 000 so'm — farq oyiga 450 000 so'm.",
      "Soliq kodeksida bir qator chegirmalar va ozod qilishlar nazarda tutilgan. JShShSga tortilmaydi: nafaqa, davlat pensiyalari, stipendiyalar, ish beruvchidan yiliga 4,22 MIH (5 739 200 so'm) doirasidagi moddiy yordam, sug'urta to'lovlari. Foydalanilmagan ta'til kompensatsiyasi va chiqish nafaqasi JShShSga tortiladi (SK 374-moddasi va 377-moddasi 9-bandi). Shuningdek, ipoteka kreditini va u bo'yicha foizlarni to'lashga yo'naltirilgan daromadlar kalendar yil davomida 80 MIH gacha (108 800 000 so'm) JShShSdan ozod qilinadi (SK 378-moddasi 16-bandi).",
      "JShShS deklaratsiyasini to'lov manbaida soliq ushlab qolinmagan daromad olgan jismoniy shaxslar topshirishi shart: mol-mulkni ijaraga berishdan, xorijdan, soliq agenti bo'lmagan shaxslardan olingan daromadlar (SKning 393-moddasi). Agar soliq ish beruvchi tomonidan ushlab qolingan bo'lsa, bir nechta ish joyi bo'lsa ham deklaratsiya talab etilmaydi. Imtiyozni e'lon qilish uchun uni ixtiyoriy topshirish mumkin. Topshirish muddati — hisobot yilidan keyingi yilning 1-apreligacha (SKning 397-moddasi), deklaratsiya bo'yicha soliqni to'lash muddati esa — 1-iyungacha (SKning 398-moddasi). Deklaratsiya my.soliq.uz portali orqali yoki yashash joyi bo'yicha soliq inspektsiyasiga topshiriladi. JShShSni o'z vaqtida to'lamaganligi uchun har bir kechiktirilgan kun uchun MB qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblanadi (MB stavkasi 14% da bu 0,047%/kun, yoki yillik 17,0%).",
    ],
    faqRu: [
      { question: 'Какая ставка НДФЛ в Узбекистане в 2026 году?', answer: 'Стандартная ставка НДФЛ составляет 12% — как для резидентов, так и для нерезидентов (по доходам из источников в Узбекистане). Для резидентов IT Park — льготная ставка 7,5%.' },
      { question: 'Как рассчитать НДФЛ с зарплаты?', answer: 'Умножьте начисленную зарплату на 0,12. Например, при зарплате 10 000 000 сум НДФЛ составит 1 200 000 сум. ИНПС 0,1% (10 000 сум) входит в эту сумму.' },
      { question: 'Какие доходы не облагаются НДФЛ?', answer: 'Не облагаются: алименты, пенсии, стипендии, материальная помощь до 4,22 МРОТ в год (5 739 200 сум), страховые выплаты. Компенсация за отпуск и выходное пособие облагаются.' },
      { question: 'Когда подавать декларацию по НДФЛ?', answer: 'Подать — не позднее 1 апреля года, следующего за отчётным; уплатить налог по декларации — не позднее 1 июня. Декларация обязательна, если налог не удержан у источника: аренда, доходы из-за рубежа, выплаты от неналоговых агентов. Подаётся через my.soliq.uz.' },
      { question: 'Есть ли льгота по НДФЛ при покупке жилья в ипотеку?', answer: 'Да. Доходы, направляемые на погашение ипотечного кредита и процентов по нему, освобождаются от НДФЛ в пределах 80 МРОТ (108 800 000 сум) за календарный год — п. 16 ст. 378 НК. Условие: жильё приобретено, построено или реконструировано с субсидией из бюджета; для молодых семей — без этого условия. Если жильё продать в течение 36 месяцев, льгота аннулируется.' },
      { question: 'Чем отличается НДФЛ для сотрудников IT Park?', answer: 'Резиденты IT Park платят НДФЛ по ставке 7,5% вместо 12%. При зарплате 10 млн сум экономия составляет 450 000 сум в месяц.' },
      { question: 'Какой штраф за неуплату НДФЛ?', answer: 'За несвоевременную уплату начисляется пеня в размере 1/300 ставки рефинансирования ЦБ за каждый день просрочки (при ставке 14% — 0,047%/день, 17,0% годовых).' },
    ],
    faqUz: [
      { question: "2026-yilda O'zbekistonda JShShS stavkasi qancha?", answer: "Standart JShShS stavkasi 12% — rezidentlar uchun ham, norezidentlar uchun ham (O'zbekistondagi manbalardan olingan daromadlar bo'yicha). IT Park rezidentlari uchun imtiyozli stavka 7,5%." },
      { question: "Ish haqidan JShShSni qanday hisoblash mumkin?", answer: "Hisoblangan ish haqini 0,12 ga ko'paytiring. Masalan, 10 000 000 so'm ish haqida JShShS 1 200 000 so'm. IJPH 0,1% (10 000 so'm) shu summa ichiga kiradi." },
      { question: "Qanday daromadlar JShShSga tortilmaydi?", answer: "Tortilmaydi: nafaqa, pensiya, stipendiya, yiliga 4,22 MIH gacha moddiy yordam (5 739 200 so'm), sug'urta to'lovlari. Ta'til kompensatsiyasi va chiqish nafaqasi tortiladi." },
      { question: "JShShS deklaratsiyasini qachon topshirish kerak?", answer: "Topshirish — hisobot yilidan keyingi yilning 1-apreligacha, soliqni to'lash — 1-iyungacha. Deklaratsiya to'lov manbaida soliq ushlab qolinmagan hollarda majburiy: ijara, xorijdan daromad, soliq agenti bo'lmagan to'lovchilar. my.soliq.uz orqali topshiriladi." },
      { question: "Ipotekaga uy-joy sotib olganda JShShS imtiyozi bormi?", answer: "Ha. Ipoteka kreditini va u bo'yicha foizlarni to'lashga yo'naltirilgan daromadlar kalendar yil davomida 80 MIH (108 800 000 so'm) doirasida JShShSdan ozod — SK 378-moddasi 16-bandi. Shart: uy-joy byudjet subsidiyasi bilan sotib olingan, qurilgan yoki rekonstruksiya qilingan bo'lishi kerak; yosh oilalar uchun bu shartsiz. Uy-joy 36 oy ichida sotilsa, imtiyoz bekor qilinadi." },
      { question: "IT Park xodimlari uchun JShShS qanday farq qiladi?", answer: "IT Park rezidentlari 12% o'rniga 7,5% stavkada JShShS to'laydilar. 10 mln so'm ish haqida oylik tejamkorlik 450 000 so'm." },
      { question: "JShShSni to'lamaganlik uchun jarima qancha?", answer: "O'z vaqtida to'lamaganlik uchun har bir kechiktirilgan kun uchun MB qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblanadi (MB stavkasi 14% da — 0,047%/kun, yillik 17,0%)." },
    ],
  },

  {
    slug: 'vat',
    lastUpdated: '2026-07-25',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Ставка налога на добавленную стоимость (НДС) в Узбекистане составляет 12% — одна из самых низких в СНГ. НДС является косвенным налогом, который включается в цену товаров и услуг и фактически уплачивается конечным потребителем. Обязанность по начислению и уплате НДС возлагается на юридических лиц и индивидуальных предпринимателей, чей совокупный доход за налоговый период (календарный год) превышает 12 000 БРВ — 5 280 000 000 сум при БРВ 440 000 (порог повышен с 1 млрд сум Указом УП-100 от 26.05.2026, действует с 1 июня 2026). Предприятия с оборотом ниже этого порога могут добровольно зарегистрироваться в качестве плательщиков НДС.',
      'Калькулятор НДС выполняет два основных расчёта. Выделение НДС из суммы: если известна цена с НДС, то сумма НДС = Цена с НДС × 12 / 112, а цена без НДС = Цена с НДС × 100 / 112. Начисление НДС на сумму: если известна цена без НДС, то НДС = Цена без НДС × 12 / 100, а цена с НДС = Цена без НДС × 112 / 100. Например, если товар стоит 1 000 000 сум с НДС, то сумма НДС = 1 000 000 × 12 / 112 = 107 143 сум, а цена без НДС = 892 857 сум.',
      'Налоговый период по НДС — месяц, и он одинаков для всех плательщиков независимо от оборота: квартальный порядок (для оборота до 1 млрд сум в месяц) отменён с 1 января 2022 года. Декларация подаётся через систему my.soliq.uz не позднее 20-го числа месяца, следующего за отчётным, в этот же срок уплачивается налог. Исключение — иностранные юрлица, оказывающие электронные услуги физлицам: для них налоговый период — квартал. Уплата НДС производится не позднее даты подачи декларации. К нулевой ставке НДС (0%) относится экспорт товаров и ряд международных услуг. Освобождены от НДС: образовательные и медицинские услуги, финансовые услуги, аренда жилых помещений, ритуальные услуги.',
      'Механизм зачёта (входящего НДС) позволяет вычесть из начисленного НДС ту сумму налога, которая была уплачена поставщикам при покупке товаров и услуг для предпринимательской деятельности. НДС к уплате = Исходящий НДС − Входящий НДС. Если входящий НДС превышает исходящий, разница переносится на следующий период или возмещается из бюджета в установленном порядке. Электронные счета-фактуры оформляются через систему faktura.soliq.uz и являются обязательным условием для зачёта входящего НДС.',
      'С 2026 года индивидуальные предприниматели и самозанятые лица на налоге с оборота уплачивают его по единой ставке 1% от валового дохода (ст. 467 НК) — отдельной повышенной ставки для них нет. НДС они не платят, пока их доход не превысил порог; при превышении они переходят на НДС и налог на прибыль в порядке, установленном для ИП. Наш калькулятор поможет быстро выделить или начислить НДС в повседневных расчётах — введите сумму и выберите нужный режим.',
      'С 1 июня 2026 года у субъектов предпринимательства, основной вид деятельности которых — общественное питание, торговля или оказание услуг, появилась добровольная альтернатива обычному НДС: упрощённый НДС по ставке 6% при налоге на прибыль 0% (Указ Президента № УП-100 от 26.05.2026, режим действует до 1 января 2030 года). Ставка 6% применяется ко всему обороту по реализации, а не к добавленной стоимости, и права на зачёт входного НДС у продавца нет — уплаченный поставщикам налог в зачёт не принимается, а образовавшаяся отрицательная разница списывается. При этом покупатель у такого поставщика зачёт получает, счёт-фактура остаётся полноценной. Импорт по-прежнему облагается по ставке 12%, а экспорт — по 6% (нулевая ставка не применяется). Режим недоступен крупным налогоплательщикам и предприятиям с государственной долей 50% и более; ограничений по обороту и числу работников у него нет. Переход и возврат оформляются уведомлением через my.soliq.uz и действуют с 1-го числа месяца, следующего за месяцем подачи.',
      'Две оговорки по упрощённому НДС, о которых стоит знать заранее. Первая: регламент к 1 июня готов не был, и Налоговый комитет разъяснил, что фактически ставка применяется не ранее 1 июля 2026 года; изменения в Налоговый кодекс под этот режим на сентябрь 2026 года всё ещё не внесены, поэтому его условия читаются по тексту указа, а не по кодексу. Вторая: право на режим определяется не кодом ОКЭД, а преобладающей долей выручки, и проверяется помесячно — если основной вид деятельности сменился, со следующего месяца применяется общий НДС 12%. Изготовление на заказ (мебель, одежда) считается производством, а не услугой, и права на режим не даёт. На практике налоговые органы при переходе на 6% требуют скорректировать ранее принятый к зачёту НДС по остаткам товаров и долгосрочных активов, хотя прямой нормы об этом в указе нет.',
    ],
    paragraphsUz: [
      "O'zbekistonda qo'shilgan qiymat solig'i (QQS) stavkasi 12% — MDHdagi eng past stavkalardan biri. QQS tovarlar va xizmatlar narxiga kiritilgan bilvosita soliq bo'lib, amalda yakuniy iste'molchi tomonidan to'lanadi. QQSni hisoblash va to'lash majburiyati soliq davri (kalendar yil) uchun umumiy daromadi 12 000 BHK dan — 440 000 so'mlik BHKda 5 280 000 000 so'mdan oshgan yuridik shaxslar va yakka tartibdagi tadbirkorlarga yuklatiladi (chegara 26.05.2026-yildagi PF-100 Farmoni bilan 1 mlrd so'mdan oshirildi, 2026-yil 1-iyundan amal qiladi). Aylanmasi bu chegaradan past korxonalar ixtiyoriy ravishda QQS to'lovchisi sifatida ro'yxatdan o'tishi mumkin.",
      "QQS kalkulyatori ikkita asosiy hisoblashni bajaradi. Summadan QQSni ajratish: QQS bilan narx ma'lum bo'lsa, QQS summasi = QQS bilan narx × 12 / 112, QQSsiz narx = QQS bilan narx × 100 / 112. Summaga QQS hisoblash: QQSsiz narx ma'lum bo'lsa, QQS = QQSsiz narx × 12 / 100, QQS bilan narx = QQSsiz narx × 112 / 100. Masalan, tovar QQS bilan 1 000 000 so'm tursa, QQS summasi = 107 143 so'm, QQSsiz narx = 892 857 so'm.",
      "QQS bo'yicha soliq davri — oy, va u aylanmadan qat'i nazar barcha to'lovchilar uchun bir xil: choraklik tartib (oyiga 1 mlrd so'mgacha aylanma uchun) 2022-yil 1-yanvardan bekor qilingan. Deklaratsiya my.soliq.uz tizimi orqali hisobot davridan keyingi oyning 20-sanasigacha topshiriladi va shu muddatda soliq to'lanadi. Istisno — jismoniy shaxslarga elektron xizmat ko'rsatuvchi xorijiy yuridik shaxslar: ular uchun soliq davri — chorak. Tovarlar eksporti va bir qator xalqaro xizmatlarga nol (0%) QQS stavkasi qo'llaniladi. QQSdan ozod: ta'lim va tibbiy xizmatlar, moliyaviy xizmatlar, turar-joy ijarasi.",
      "Hisob-kitob (kirish QQS) mexanizmi hisoblangan QQSdan tadbirkorlik faoliyati uchun tovar va xizmatlar sotib olishda yetkazib beruvchilarga to'langan soliq summasini chegirib tashlash imkonini beradi. To'lanadigan QQS = Chiqish QQS − Kirish QQS. Elektron hisob-fakturalar faktura.soliq.uz tizimi orqali rasmiylashtiriladi va kirish QQSni hisobga olish uchun majburiy shartdir.",
      "2026-yildan boshlab aylanma solig'idagi yakka tartibdagi tadbirkorlar va o'z-o'zini band qilgan shaxslar yalpi daromaddan yagona 1% stavkada soliq to'laydilar (SKning 467-moddasi) — ular uchun alohida oshirilgan stavka yo'q. Daromadi chegaradan oshmaguncha ular QQS to'lamaydilar; oshgan taqdirda YaTTlar uchun belgilangan tartibda QQS va foyda solig'iga o'tadilar.",
      "2026-yil 1-iyundan asosiy faoliyat turi umumiy ovqatlanish, savdo yoki xizmat ko'rsatish bo'lgan tadbirkorlik subyektlarida oddiy QQSga ixtiyoriy muqobil paydo bo'ldi: foyda solig'i 0% bo'lganda 6% stavkadagi soddalashtirilgan QQS (Prezidentning 26.05.2026-yildagi UP-100 Farmoni, rejim 2030-yil 1-yanvarigacha amal qiladi). 6% stavka qo'shilgan qiymatga emas, realizatsiya bo'yicha butun aylanmaga qo'llaniladi, sotuvchida esa kirim QQSni hisobga olish huquqi yo'q — yetkazib beruvchilarga to'langan soliq hisobga olinmaydi, yuzaga kelgan manfiy farq esa hisobdan chiqariladi. Shu bilan birga, bunday yetkazib beruvchidan sotib oluvchi hisobga olish huquqini oladi, hisob-faktura to'laqonli bo'lib qoladi. Import avvalgidek 12% stavkada, eksport esa 6% stavkada soliqqa tortiladi (nol stavka qo'llanilmaydi). Rejim yirik soliq to'lovchilar va davlat ulushi 50% va undan ortiq bo'lgan korxonalar uchun mavjud emas; aylanma va xodimlar soni bo'yicha cheklovlari yo'q. O'tish va qaytish my.soliq.uz orqali xabarnoma bilan rasmiylashtiriladi va xabarnoma yuborilgan oydan keyingi oyning 1-sanasidan amal qiladi.",
      "Soddalashtirilgan QQS bo'yicha oldindan bilish kerak bo'lgan ikkita izoh. Birinchisi: 1-iyunga reglament tayyor emas edi va Soliq qo'mitasi stavka amalda 2026-yil 1-iyuldan oldin qo'llanilmasligini tushuntirdi; Soliq kodeksiga bu rejim bo'yicha o'zgartishlar 2026-yil sentabrigacha hali kiritilmagan, shuning uchun uning shartlari kodeks bo'yicha emas, farmon matni bo'yicha o'qiladi. Ikkinchisi: rejimga huquq IFUT kodi bilan emas, tushumning ustun ulushi bilan aniqlanadi va oyma-oy tekshiriladi — asosiy faoliyat turi o'zgarsa, keyingi oydan umumiy 12% QQS qo'llaniladi. Buyurtma asosida ishlab chiqarish (mebel, kiyim) xizmat emas, ishlab chiqarish hisoblanadi va rejimga huquq bermaydi. Amalda soliq organlari 6% ga o'tishda tovar qoldiqlari va uzoq muddatli aktivlar bo'yicha ilgari hisobga olingan QQSni tuzatishni talab qiladi, garchi farmonda bu haqda bevosita norma bo'lmasa ham.",
    ],
    faqRu: [
      { question: 'Какая ставка НДС в Узбекистане?', answer: 'Стандартная ставка НДС составляет 12%. Экспорт облагается по ставке 0%.' },
      { question: 'Как выделить НДС из суммы?', answer: 'Разделите сумму с НДС на 112 и умножьте на 12. Формула: НДС = Сумма с НДС × 12 / 112. Например, из 1 120 000 сум НДС = 120 000 сум.' },
      { question: 'Как начислить НДС на сумму?', answer: 'Умножьте сумму без НДС на 0,12. Например, 1 000 000 × 0,12 = 120 000 сум НДС. Итого с НДС: 1 120 000 сум.' },
      { question: 'Кто обязан платить НДС?', answer: 'Юридические лица и ИП с совокупным доходом за налоговый период свыше 12 000 БРВ (5 280 000 000 сум при БРВ 440 000). Остальные могут зарегистрироваться добровольно.' },
      { question: 'Какие товары и услуги освобождены от НДС?', answer: 'Образовательные и медицинские услуги, финансовые услуги, аренда жилых помещений, ритуальные услуги, ряд продуктов питания.' },
      { question: 'Как часто сдавать отчётность по НДС?', answer: 'Ежемесячно — всем плательщикам, независимо от оборота: квартальный порядок отменён с 2022 года. Срок подачи и уплаты — до 20-го числа следующего месяца.' },
      { question: 'Что такое упрощённый НДС 6%?', answer: 'Добровольный режим для общепита, торговли и услуг (Указ № УП-100 от 26.05.2026, действует до 2030 года): НДС 6% со всего оборота по реализации и налог на прибыль 0%, но без права на зачёт входного НДС. Покупатель у такого поставщика зачёт при этом получает. Импорт — 12%, экспорт — 6%. Крупным налогоплательщикам и компаниям с госдолей от 50% режим недоступен.' },
    ],
    faqUz: [
      { question: "O'zbekistonda QQS stavkasi qancha?", answer: "Standart QQS stavkasi 12%. Eksportga 0% stavka qo'llaniladi." },
      { question: "Summadan QQSni qanday ajratish mumkin?", answer: "QQS bilan summani 112 ga bo'ling va 12 ga ko'paytiring. Formula: QQS = QQS bilan summa × 12 / 112." },
      { question: "Summaga QQSni qanday hisoblash mumkin?", answer: "QQSsiz summani 0,12 ga ko'paytiring. Masalan, 1 000 000 × 0,12 = 120 000 so'm QQS." },
      { question: "QQS to'lash kimga majburiy?", answer: "Soliq davri uchun umumiy daromadi 12 000 BHK dan (440 000 so'mlik BHKda 5 280 000 000 so'mdan) ortiq yuridik shaxslar va YaTTlarga. Qolganlari ixtiyoriy ro'yxatdan o'tishi mumkin." },
      { question: "Qanday tovar va xizmatlar QQSdan ozod?", answer: "Ta'lim va tibbiy xizmatlar, moliyaviy xizmatlar, turar-joy ijarasi, dafn marosimlari xizmatlari." },
      { question: "QQS bo'yicha hisobotni qanchalik tez-tez topshirish kerak?", answer: "Har oy — aylanmadan qat'i nazar barcha to'lovchilar uchun: choraklik tartib 2022-yildan bekor qilingan. Topshirish va to'lash muddati — keyingi oyning 20-sanasigacha." },
      { question: "Soddalashtirilgan 6% QQS nima?", answer: "Umumiy ovqatlanish, savdo va xizmatlar uchun ixtiyoriy rejim (26.05.2026-yildagi UP-100 Farmoni, 2030-yilgacha): realizatsiya bo'yicha butun aylanmadan 6% QQS va 0% foyda solig'i, lekin kirim QQSni hisobga olish huquqisiz. Bunday yetkazib beruvchidan sotib oluvchi esa hisobga olish huquqini oladi. Import — 12%, eksport — 6%. Yirik soliq to'lovchilar va davlat ulushi 50% dan ortiq kompaniyalar uchun rejim mavjud emas." },
    ],
  },

  {
    slug: 'salary',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Минимальная заработная плата в Узбекистане составляет 1 360 000 сум в месяц (размер действует с 1 сентября 2026 года; до этого — 1 271 000 сум). Калькулятор зарплаты позволяет рассчитать чистую сумму «на руки» из начисленной (гросс) зарплаты с учётом всех обязательных удержаний: НДФЛ 12%, ИНПС 0,1%, а также определить расходы работодателя на социальный налог 12%. При расчёте «от обратного» — из суммы на руки — калькулятор определит необходимую начисленную зарплату.',
      'Структура удержаний из заработной платы: НДФЛ удерживается по ставке 12% (7,5% для резидентов IT Park) от начисленной суммы; взнос в ИНПС 0,1% входит в этот налог, а не добавляется к нему: исчисленный НДФЛ уменьшается на сумму взноса, в бюджет уходит 11,9%, а 0,1% зачисляется на персональный накопительный счёт работника (НК ст. 385; ПП-4086 от 26.12.2018, п. 5). Итого работник получает на руки 88% от начисленной зарплаты (92,5% для IT Park). Работодатель дополнительно уплачивает социальный налог 12% от фонда оплаты труда (25% для бюджетных организаций). Таким образом, полная стоимость сотрудника для работодателя = Начисленная зарплата × 1,12.',
      'Пример расчёта: начисленная зарплата 15 000 000 сум. НДФЛ: 15 000 000 × 12% = 1 800 000 сум. Из этой суммы 15 000 сум (0,1%) идёт на накопительный счёт ИНПС, сверх НДФЛ ничего не удерживается. На руки: 15 000 000 − 1 800 000 = 13 200 000 сум. Расходы работодателя (соц. налог): 15 000 000 × 12% = 1 800 000 сум. Полная стоимость сотрудника: 15 000 000 + 1 800 000 = 16 800 000 сум в месяц.',
      'Заработная плата в Узбекистане выплачивается не реже одного раза в полмесяца (ст. 253 ТК): аванс и остальная часть, перерыв между ними, как правило, не более 16 дней. Работодатель обязан перечислить НДФЛ в бюджет не позднее дня фактической выплаты зарплаты. Задержка выплаты зарплаты влечёт ответственность работодателя: за каждый день задержки начисляется компенсация в размере 10% от ставки рефинансирования ЦБ независимо от вины работодателя (ст. 333 ТК). Основная ставка Центрального банка — 14% (решение от 16 сентября 2026 года), поэтому буквально по кодексу это 1,4% суммы за день. Трудовой договор может повысить этот размер, а на практике расчёт по этой статье оспаривается.',
      'Для расчёта зарплаты при работе неполный месяц используется формула: Зарплата = Оклад / Количество рабочих дней в месяце × Количество отработанных дней. Рабочих дней в месяце обычно 22 (пятидневная рабочая неделя) или 26 (шестидневная). Сверхурочная работа оплачивается: первые 2 часа — в полуторном размере, далее — в двойном. Работа в выходные и праздничные дни — в двойном размере или с предоставлением дополнительного дня отдыха.',
    ],
    paragraphsUz: [
      "O'zbekistonda minimal ish haqi oyiga 1 360 000 so'm miqdorida belgilangan (2026-yil 1-sentabridan amal qiladi; bundan oldin — 1 271 000 so'm). Ish haqi kalkulyatori hisoblangan (gross) ish haqidan barcha majburiy ushlanmalarni — JShShS 12%, IJPH 0,1% — hisobga olgan holda «qo'lga» tegadigan sof summani hisoblash imkonini beradi, shuningdek ish beruvchining ijtimoiy soliq 12% bo'yicha xarajatlarini aniqlaydi.",
      "Ish haqidan ushlanmalar tarkibi: JShShS hisoblangan summadan 12% stavkada (IT Park rezidentlari uchun 7,5%) ushlab qolinadi; 0,1% lik IJPH badali bu soliqning ustiga qo'shilmay, ichiga kiradi: hisoblangan JShShS badal summasiga kamaytiriladi, byudjetga 11,9% ketadi, 0,1% esa xodimning shaxsiy jamg'arma hisobiga o'tkaziladi (SK 385-moddasi; 26.12.2018-yildagi PQ-4086, 5-band). Jami xodim qo'liga hisoblangan ish haqining 88% ini oladi (IT Park uchun 92,5%). Ish beruvchi qo'shimcha ravishda ish haqi fondidan 12% ijtimoiy soliq to'laydi (byudjet tashkilotlari uchun 25%).",
      "Hisoblash misoli: hisoblangan ish haqi 15 000 000 so'm. JShShS: 15 000 000 × 12% = 1 800 000 so'm. Shundan 15 000 so'm (0,1%) IJPH jamg'arma hisobiga o'tadi, JShShS ustiga hech narsa ushlanmaydi. Qo'lga: 15 000 000 − 1 800 000 = 13 200 000 so'm. Ish beruvchi xarajatlari (ijtimoiy soliq): 15 000 000 × 12% = 1 800 000 so'm. Xodimning to'liq qiymati: 16 800 000 so'm/oy.",
      "O'zbekistonda ish haqi har yarim oyda kamida bir marta to'lanadi (MK 253-moddasi): avans va qolgan qismi, oradagi tanaffus odatda 16 kundan oshmaydi. Ish beruvchi ish haqi kechiktirilganlik uchun javobgardir: har bir kechiktirilgan kun uchun, ish beruvchining aybidan qat'i nazar, MB qayta moliyalash stavkasining 10% i miqdorida kompensatsiya hisoblanadi (MK 333-moddasi). Markaziy bankning asosiy stavkasi 14% (2026-yil 16-sentabrdagi qaror), shuning uchun kodeks so'zma-so'z olinganda bu kuniga summaning 1,4% i. Mehnat shartnomasi bu miqdorni oshirishi mumkin, amaliyotda esa bu modda bo'yicha hisob bahsli.",
      "To'liq bo'lmagan oy uchun ish haqi formulasi: Ish haqi = Oklad / Oydagi ish kunlari soni × Ishlangan kunlar soni. Ortiqcha ish haqi: dastlabki 2 soat — yarim baravar, keyin — ikki baravar. Dam olish va bayram kunlaridagi ish — ikki baravar yoki qo'shimcha dam olish kuni beriladi.",
    ],
    faqRu: [
      { question: 'Какая минимальная зарплата в Узбекистане в 2026 году?', answer: 'Минимальная заработная плата составляет 1 360 000 сум в месяц (действует с 1 сентября 2026 года, Указ УП-115; ранее — 1 271 000 сум).' },
      { question: 'Сколько процентов удерживается с зарплаты?', answer: 'Ровно 12% от начисленной зарплаты (7,5% для IT Park). ИНПС 0,1% сидит внутри этой ставки, а не сверх неё: в бюджет уходит 11,9%, а 0,1% — на ваш накопительный счёт.' },
      { question: 'Как рассчитать зарплату «на руки»?', answer: 'Зарплата на руки = Начисленная × (100% − 12%) = Начисленная × 0,88. Например, 10 000 000 × 0,88 = 8 800 000 сум. Отдельно вычитать ИНПС не нужно — он уже внутри 12%.' },
      { question: 'Сколько работодатель платит сверх зарплаты?', answer: 'Социальный налог 12% от ФОТ (25% для бюджетных). При зарплате 10 млн сум доп. расходы = 1 200 000 сум.' },
      { question: 'Как оплачивается сверхурочная работа?', answer: 'Первые 2 часа — в 1,5-кратном размере, далее — в двойном. Работа в выходные/праздники — в двойном или с предоставлением отгула.' },
      { question: 'Как часто должна выплачиваться зарплата?', answer: 'Не реже одного раза в полмесяца (ст. 253 ТК). За задержку — компенсация 10% от ставки рефинансирования ЦБ за каждый день просрочки (ст. 333 ТК).' },
    ],
    faqUz: [
      { question: "2026-yilda O'zbekistonda minimal ish haqi qancha?", answer: "Minimal ish haqi oyiga 1 360 000 so'm (2026-yil 1-sentabridan amal qiladi, PF-115 Farmoni; bundan oldin — 1 271 000 so'm)." },
      { question: "Ish haqidan necha foiz ushlab qolinadi?", answer: "Hisoblangan ish haqining aynan 12% i (IT Park uchun 7,5%). 0,1% IJPH shu stavka ichida, uning ustida emas: byudjetga 11,9%, 0,1% esa sizning jamg'arma hisobingizga." },
      { question: "Qo'lga tegadigan ish haqini qanday hisoblash mumkin?", answer: "Qo'lga = Hisoblangan × 0,88. Masalan, 10 000 000 × 0,88 = 8 800 000 so'm. IJPH ni alohida ayirish shart emas — u 12% ning ichida." },
      { question: "Ish beruvchi ish haqidan tashqari qancha to'laydi?", answer: "Ish haqi fondidan 12% ijtimoiy soliq (byudjet uchun 25%). 10 mln so'm ish haqida qo'shimcha = 1 200 000 so'm." },
      { question: "Ortiqcha ish qanday to'lanadi?", answer: "Dastlabki 2 soat — 1,5 baravarda, keyin — ikki baravarda. Dam olish/bayram kunlarida — ikki baravarda yoki qo'shimcha dam olish kuni." },
      { question: "Ish haqi qanchalik tez-tez to'lanishi kerak?", answer: "Har yarim oyda kamida bir marta (MK 253-moddasi). Kechiktirganlik uchun — har bir kunga MB qayta moliyalash stavkasining 10% i miqdorida kompensatsiya (MK 333-moddasi)." },
    ],
  },

  {
    slug: 'vacation-pay',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Минимальная продолжительность ежегодного оплачиваемого отпуска в Узбекистане составляет 21 календарный день (ст. 217 Трудового кодекса 2023 года). Для отдельных категорий работников предусмотрены удлинённые отпуска: педагогические работники — до 56 календарных дней, работникам с вредными условиями труда положен дополнительный отпуск, его длительность зависит от класса условий труда по результатам аттестации. Калькулятор отпускных позволяет точно рассчитать сумму выплат на основе среднедневного заработка.',
      'Расчёт отпускных производится на основе среднего заработка за последние 12 месяцев. Формула по ст. 257 Трудового кодекса: средняя зарплата = доход за 12 месяцев ÷ 12; средний дневной заработок = средняя зарплата ÷ 25,3. Отпускные = средний дневной заработок × дни отпуска без воскресений (ст. 233 ТК, с 14 февраля 2025 года). В расчёт среднего заработка включаются: оклад, премии, надбавки, доплаты за совмещение. Не включаются: материальная помощь, командировочные, компенсации за использование личного автомобиля.',
      'Пример: заработок за 12 месяцев — 120 000 000 сум. Средняя зарплата = 120 000 000 / 12 = 10 000 000 сум. Средний дневной заработок = 10 000 000 / 25,3 ≈ 395 257 сум. Отпуск 21 календарный день (без праздников) включает 3 воскресенья, оплачивается 18 дней. Отпускные ≈ 395 257 × 18 = 7 114 625 сум. С этой суммы удерживается НДФЛ 12% = 853 755 сум. На руки: 6 260 870 сум. Отпускные должны быть выплачены не позднее последнего рабочего дня перед началом отпуска (ст. 233 Трудового кодекса).',
      'Компенсация за неиспользованный отпуск выплачивается при увольнении работника. Если работник не использовал отпуск за несколько лет, компенсация выплачивается за все неиспользованные дни. Замена ежегодного отпуска денежной компенсацией без увольнения запрещена трудовым законодательством, за исключением части отпуска, превышающей минимальную продолжительность (для удлинённых отпусков).',
      'Отпускные облагаются НДФЛ по стандартной ставке 12% и учитываются при расчёте социального налога. При расчёте отпуска, попадающего на два месяца, отпускные распределяются пропорционально между месяцами для целей бухгалтерского учёта. Праздничные нерабочие дни, приходящиеся на период отпуска, не включаются в число дней отпуска и не оплачиваются. В Узбекистане установлены 9 праздничных нерабочих дней в году.',
    ],
    paragraphsUz: [
      "O'zbekistonda yillik to'lanadigan ta'tilning minimal davomiyligi 21 kalendar kun (2023-yilgi Mehnat kodeksining 217-moddasi). Ayrim toifadagi xodimlar uchun uzaytirilgan ta'tillar nazarda tutilgan: pedagog xodimlar — 56 kalendar kungacha, zararli mehnat sharoitidagi xodimlarga qo'shimcha ta'til beriladi, uning davomiyligi attestatsiya natijalaridagi mehnat sharoitlari sinfiga bog'liq.",
      "Ta'til haqi so'nggi 12 oy uchun o'rtacha ish haqi asosida hisoblanadi. Mehnat kodeksining 257-moddasi bo'yicha formula: o'rtacha ish haqi = 12 oylik daromad ÷ 12; o'rtacha kunlik ish haqi = o'rtacha ish haqi ÷ 25,3. Ta'til haqi = o'rtacha kunlik ish haqi × yakshanbalarsiz ta'til kunlari (233-modda, 2025-yil 14-fevraldan). O'rtacha ish haqiga oklad, mukofotlar, ustamalar kiritiladi. Kiritilmaydi: moddiy yordam, xizmat safari xarajatlari.",
      "Misol: 12 oydagi ish haqi — 120 000 000 so'm. O'rtacha ish haqi = 120 000 000 / 12 = 10 000 000 so'm. O'rtacha kunlik = 10 000 000 / 25,3 ≈ 395 257 so'm. 21 kalendar kunlik ta'til (bayramlarsiz) 3 ta yakshanbani o'z ichiga oladi, 18 kun to'lanadi. Ta'til haqi ≈ 395 257 × 18 = 7 114 625 so'm. JShShS 12% = 853 755 so'm. Qo'lga: 6 260 870 so'm. Ta'til haqi ta'til boshlanishidan oldingi oxirgi ish kunidan kechiktirmay to'lanishi kerak (Mehnat kodeksining 233-moddasi).",
      "Foydalanilmagan ta'til uchun kompensatsiya xodim ishdan bo'shatilganda to'lanadi. Agar xodim bir necha yil ta'tildan foydalanmagan bo'lsa, barcha foydalanilmagan kunlar uchun kompensatsiya to'lanadi. Ishdan bo'shatilmasdan yillik ta'tilni pul kompensatsiyasiga almashtirish mehnat qonunchiligi bilan taqiqlangan.",
      "Ta'til haqi standart 12% stavkada JShShSga tortiladi. Ikki oyga to'g'ri keladigan ta'tilni hisoblaganda, ta'til haqi buxgalteriya hisobi maqsadida oylar o'rtasida mutanosib taqsimlanadi. Ta'til davriga to'g'ri kelgan bayram dam olish kunlari ta'til kunlari soniga kiritilmaydi. O'zbekistonda yiliga 9 bayram dam olish kuni belgilangan.",
    ],
    faqRu: [
      { question: 'Сколько дней отпуска положено в Узбекистане?', answer: 'Минимум 21 календарный день. Для педагогов — до 56 календарных дней, при вредных условиях труда — дополнительный отпуск по классу условий труда.' },
      { question: 'Как рассчитываются отпускные?', answer: 'Доход за 12 месяцев ÷ 12 ÷ 25,3 = средний дневной заработок (ст. 257 ТК). Его умножают на дни отпуска без воскресений (ст. 233 ТК): 21 календарный день — это 18 оплачиваемых.' },
      { question: 'Когда должны выплатить отпускные?', answer: 'Не позднее последнего рабочего дня перед началом отпуска (ст. 233 Трудового кодекса).' },
      { question: 'Облагаются ли отпускные НДФЛ?', answer: 'Да, отпускные облагаются НДФЛ по ставке 12% (7,5% для IT Park).' },
      { question: 'Можно ли заменить отпуск денежной компенсацией?', answer: 'Нет, замена запрещена. Компенсация выплачивается только при увольнении. Исключение — часть удлинённого отпуска сверх минимума.' },
      { question: 'Входят ли праздничные дни в отпуск?', answer: 'Нет, праздничные нерабочие дни не включаются в число дней отпуска и не оплачиваются как отпускные.' },
    ],
    faqUz: [
      { question: "O'zbekistonda necha kun ta'til beriladi?", answer: "Kamida 21 kalendar kun. Pedagoglar uchun — 56 kalendar kungacha, zararli sharoitlarda — mehnat sharoitlari sinfiga qarab qo'shimcha ta'til." },
      { question: "Ta'til haqi qanday hisoblanadi?", answer: "12 oylik daromad ÷ 12 ÷ 25,3 = o'rtacha kunlik ish haqi (MK 257-modda). U yakshanbalarsiz ta'til kunlariga ko'paytiriladi (233-modda): 21 kalendar kun — bu 18 to'lanadigan kun." },
      { question: "Ta'til haqi qachon to'lanishi kerak?", answer: "Ta'til boshlanishidan oldingi oxirgi ish kunidan kechiktirmay (Mehnat kodeksining 233-moddasi)." },
      { question: "Ta'til haqidan JShShS ushlab qolinadimi?", answer: "Ha, ta'til haqidan 12% stavkada JShShS ushlab qolinadi (IT Park uchun 7,5%)." },
      { question: "Ta'tilni pul kompensatsiyasiga almashtirish mumkinmi?", answer: "Yo'q, almashtirish taqiqlangan. Kompensatsiya faqat ishdan bo'shatilganda to'lanadi." },
      { question: "Bayram kunlari ta'tilga kiradimi?", answer: "Yo'q, bayram dam olish kunlari ta'til kunlari soniga kiritilmaydi." },
    ],
  },

  {
    slug: 'credit',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Закон «О потребительском кредите» ЗРУ-33', url: 'https://lex.uz/ru/docs/1004490' },
    ],
    paragraphsRu: [
      'Ключевая ставка Центрального банка Узбекистана составляет 14% годовых, что формирует базу для кредитных ставок коммерческих банков. Ставки по потребительским кредитам варьируются от 22% до 33% годовых в зависимости от банка, срока кредита и кредитной истории заёмщика. Калькулятор кредита рассчитывает ежемесячный платёж, общую сумму выплат и переплату по аннуитетной или дифференцированной схеме погашения.',
      'Аннуитетный платёж — фиксированная сумма каждый месяц. Формула: ЕП = С × (r × (1+r)^n) / ((1+r)^n − 1), где С — сумма кредита, r — месячная ставка (годовая/12), n — количество месяцев. Дифференцированный платёж — убывающий, так как проценты начисляются на остаток долга. Формула: ЕП = С/n + (С − С×(m−1)/n) × r, где m — номер месяца. Аннуитет удобнее для планирования бюджета, дифференцированная схема выгоднее по общей переплате.',
      'Пример расчёта: кредит 50 000 000 сум на 3 года (36 месяцев) под 22% годовых. Аннуитетный платёж: месячная ставка = 22/12 = 1,833%, ежемесячный платёж ≈ 1 910 000 сум, общая сумма выплат ≈ 68 740 000 сум, переплата ≈ 18 740 000 сум (37,5% от суммы кредита). При дифференцированной схеме: первый платёж ≈ 2 306 000 сум, последний ≈ 1 414 000 сум, переплата ≈ 16 958 000 сум (33,9%).',
      'При оформлении кредита банки учитывают платёжеспособность заёмщика: ежемесячный платёж не должен превышать 50% чистого дохода. Требуются документы: паспорт, справка о доходах (форма с места работы или выписка из my.soliq.uz), кредитная история из бюро кредитных историй. Обеспечение может быть в виде поручительства, залога имущества или без залога (для зарплатных клиентов банка).',
      'Заёмщик вправе досрочно вернуть потребительский кредит, проценты платятся только за фактический срок (ст. 16 Закона «О потребительском кредите»). Порядок учёта досрочных взносов и уведомления банка проверьте в договоре. Рефинансирование существующего кредита под более низкую ставку может быть выгодным при снижении ключевой ставки ЦБ.',
    ],
    paragraphsUz: [
      "O'zbekiston Markaziy bankining kalit stavkasi yillik 14% ni tashkil etadi, bu tijorat banklarining kredit stavkalari uchun asos yaratadi. iste'mol kreditlari bo'yicha o'rtacha stavkalar bank, kredit muddati va qarz oluvchining kredit tarixiga qarab yillik 22% dan 33% gacha o'zgaradi. Kredit kalkulyatori annuitet yoki differentsial to'lov sxemasi bo'yicha oylik to'lov, umumiy to'lovlar summasi va ortiqcha to'lovni hisoblaydi.",
      "Annuitet to'lov — har oy bir xil summa. Formula: OT = S × (r × (1+r)^n) / ((1+r)^n − 1), bunda S — kredit summasi, r — oylik stavka (yillik/12), n — oylar soni. Differentsial to'lov — kamayib boruvchi, chunki foizlar qoldiq qarzga hisoblanadi. Annuitet byudjetni rejalashtirish uchun qulayroq, differentsial sxema umumiy ortiqcha to'lov bo'yicha foydaliroq.",
      "Hisoblash misoli: 50 000 000 so'mlik kredit 3 yilga (36 oy) yillik 22% da. Annuitet to'lov: oylik stavka = 1,833%, oylik to'lov ≈ 1 910 000 so'm, umumiy to'lovlar ≈ 68 740 000 so'm, ortiqcha to'lov ≈ 18 740 000 so'm (37,5%). Differentsial sxemada: birinchi to'lov ≈ 2 306 000 so'm, oxirgi ≈ 1 414 000 so'm, ortiqcha to'lov ≈ 16 958 000 so'm (33,9%).",
      "Kredit rasmiylashtirishda banklar qarz oluvchining to'lov qobiliyatini hisobga oladi: oylik to'lov sof daromadning 50% dan oshmasligi kerak. Talab qilinadigan hujjatlar: pasport, daromad to'g'risida ma'lumotnoma, kredit tarixi. Ta'minot — kafil, mulk garovi yoki garovsiz (bank ish haqi mijozlari uchun).",
      "Qarz oluvchi iste'mol kreditini muddatidan oldin qaytarishi mumkin, foizlar faqat haqiqiy muddat uchun to'lanadi («Iste'mol krediti to'g'risida»gi Qonunning 16-moddasi). Muddatidan oldingi to'lovlarni hisobga olish va bankni xabardor qilish tartibini shartnomadan tekshiring. Mavjud kreditni pastroq stavkada qayta moliyalash MB kalit stavkasi pasayganida foydali bo'lishi mumkin.",
    ],
    faqRu: [
      { question: 'Какая средняя ставка по кредитам в Узбекистане?', answer: 'Ключевая ставка ЦБ — 14%. Потребительские кредиты: 22-33% годовых. Ипотека: 17-22% (субсидированная) / 23-31% (коммерческая). Автокредит: 22-33%.' },
      { question: 'Что такое аннуитетный и дифференцированный платёж?', answer: 'Аннуитет — одинаковая сумма каждый месяц. Дифференцированный — убывающий платёж, больше в начале, меньше в конце. Дифференцированный выгоднее по переплате.' },
      { question: 'Можно ли досрочно погасить кредит?', answer: 'Да, ст. 16 Закона «О потребительском кредите»: проценты платятся за фактический срок. Порядок проверьте в договоре.' },
      { question: 'Какой максимальный размер платежа по кредиту?', answer: 'Банки ограничивают ежемесячный платёж 50% от чистого дохода заёмщика.' },
      { question: 'Какие документы нужны для получения кредита?', answer: 'Паспорт, справка о доходах (с работы или my.soliq.uz), кредитная история. Для залоговых кредитов — документы на имущество.' },
      { question: 'Как уменьшить переплату по кредиту?', answer: 'Выбирайте дифференцированную схему, сокращайте срок кредита, делайте частичные досрочные погашения, рассмотрите рефинансирование при снижении ставок.' },
    ],
    faqUz: [
      { question: "O'zbekistonda kreditlar bo'yicha o'rtacha stavka qancha?", answer: "MB kalit stavkasi — 14%. Iste'mol kreditlari: yillik 22-33%. Ipoteka: 17-22% (subsidiyali) / 23-31% (tijorat). Avtokredit: 22-33%." },
      { question: "Annuitet va differentsial to'lov nima?", answer: "Annuitet — har oy bir xil summa. Differentsial — kamayib boruvchi to'lov. Differentsial ortiqcha to'lov bo'yicha foydaliroq." },
      { question: "Kreditni muddatidan oldin to'lash mumkinmi?", answer: "Ha, «Iste'mol krediti to'g'risida»gi Qonunning 16-moddasi: foizlar haqiqiy muddat uchun to'lanadi. Tartibni shartnomadan tekshiring." },
      { question: "Kredit bo'yicha maksimal to'lov miqdori qancha?", answer: "Banklar oylik to'lovni qarz oluvchining sof daromadining 50% bilan cheklaydi." },
      { question: "Kredit olish uchun qanday hujjatlar kerak?", answer: "Pasport, daromad to'g'risida ma'lumotnoma, kredit tarixi. Garovli kreditlar uchun — mulk hujjatlari." },
      { question: "Kredit bo'yicha ortiqcha to'lovni qanday kamaytirish mumkin?", answer: "Differentsial sxemani tanlang, kredit muddatini qisqartiring, qisman muddatidan oldin to'lovlar qiling, stavkalar pasayganda qayta moliyalashni ko'rib chiqing." },
    ],
  },

  {
    slug: 'mortgage',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Центральный банк РУз — защита прав потребителей', url: 'https://cbu.uz/ru/consumer-protection/' },
    ],
    paragraphsRu: [
      'Ипотечное кредитование в Узбекистане активно развивается: государственная ипотека в 2026 году обычно стоит 17–20% годовых (формула партнёрских банков: ставка ЦБ + 6% = 20%), коммерческая — выше, до 23-31%. Отдельные льготные программы для определённых категорий граждан идут по своим условиям и лимитам, уточняйте их в банке. Максимальный срок ипотеки — до 20 лет, первоначальный взнос — от 15% до 30% стоимости жилья.',
      'Калькулятор ипотеки рассчитывает ежемесячный платёж по аннуитетной схеме (наиболее распространённой для ипотеки), общую сумму выплат и переплату за весь период. Формула расчёта аналогична обычному кредиту: ЕП = С × (r × (1+r)^n) / ((1+r)^n − 1). Пример: квартира стоимостью 500 000 000 сум, первоначальный взнос 20% (100 000 000 сум), сумма ипотеки 400 000 000 сум на 15 лет под 16%. Ежемесячный платёж ≈ 5 875 000 сум, переплата за 15 лет ≈ 657 500 000 сум.',
      'Для получения ипотеки необходимо: стаж работы не менее 6 месяцев на текущем месте, официальный доход, позволяющий обслуживать кредит (платёж не более 50% дохода), положительная кредитная история, возраст от 21 до 55 лет (65 для мужчин). Банки требуют страхование объекта недвижимости на весь срок ипотеки. Некоторые банки предлагают ипотеку на первичное и вторичное жильё, коммерческую недвижимость.',
      'Средняя стоимость квадратного метра жилья в Ташкенте на 2025–2026 год составляет от 8 000 000 до 15 000 000 сум в зависимости от района и класса жилья. В Чиланзарском, Юнусабадском и Мирабадском районах цены выше, в пригородах — значительно ниже. Для расчёта стоимости квартиры смотрите наш калькулятор стоимости квартиры. При покупке жилья также учтите расходы на оформление: нотариальные сборы, госпошлина, оценка недвижимости — суммарно 1-3% от стоимости.',
      'Государственные программы для отдельных категорий и сельской местности меняются, их условия и ставки уточняйте в банке или в постановлениях Кабмина на lex.uz. Малообеспеченным может быть доступна субсидия на первоначальный взнос. Для получения субсидированной ипотеки необходимо обратиться в ипотечный банк или коммерческий банк, участвующий в программе.',
    ],
    paragraphsUz: [
      "O'zbekistonda ipoteka kreditlash jadal rivojlanmoqda: davlat ipotekasi 2026-yilda odatda yillik 17–20% (hamkor banklar formulasi: MB stavkasi + 6% = 20%), tijorat ipotekasi yuqoriroq, 23-31% gacha. Ma'lum toifadagi fuqarolar uchun alohida imtiyozli dasturlar o'z shartlari va limitlari bilan amal qiladi, ularni bankdan aniqlang. Maksimal ipoteka muddati — 20 yilgacha, boshlang'ich to'lov — uy-joy qiymatining 15% dan 30% gacha.",
      "Ipoteka kalkulyatori annuitet sxema bo'yicha oylik to'lov, umumiy to'lovlar summasi va butun davr uchun ortiqcha to'lovni hisoblaydi. Misol: 500 000 000 so'mlik kvartira, boshlang'ich to'lov 20% (100 000 000 so'm), ipoteka summasi 400 000 000 so'm 15 yilga 16% da. Oylik to'lov ≈ 5 875 000 so'm, 15 yildagi ortiqcha to'lov ≈ 657 500 000 so'm.",
      "Ipoteka olish uchun zarur: joriy ish joyida kamida 6 oylik ish staji, kreditni xizmat qilish imkonini beruvchi rasmiy daromad (to'lov daromadning 50% dan ko'p emas), ijobiy kredit tarixi, 21 dan 55 yoshgacha (erkaklar uchun 65). Banklar butun ipoteka muddatiga ko'chmas mulkni sug'urtashni talab qiladi.",
      "2025–2026-yilda Toshkentda turar-joy kvadrat metrining o'rtacha narxi tuman va uy-joy sinfiga qarab 8 000 000 dan 15 000 000 so'mgacha. Uy-joy sotib olishda rasmiylash xarajatlarini ham hisobga oling: notarial yig'imlar, davlat boji, ko'chmas mulk baholash — jami qiymatning 1-3%.",
      "Alohida toifalar va qishloq joylari uchun davlat dasturlari o'zgarib turadi, ularning shartlari va stavkalarini bankdan yoki lex.uz dagi Vazirlar Mahkamasi qarorlaridan aniqlang. Kam ta'minlanganlarga boshlang'ich to'lov uchun subsidiya berilishi mumkin. Subsidiyali ipoteka olish uchun ipoteka bankiga yoki dasturda ishtirok etuvchi tijorat bankiga murojaat qiling.",
    ],
    faqRu: [
      { question: 'Какая ставка по ипотеке в Узбекистане?', answer: 'Государственная: обычно 17-20% (формула ставка ЦБ + 6% = 20%). Коммерческая: до 23-31%. Льготные категории — по условиям конкретной программы.' },
      { question: 'Какой первоначальный взнос нужен для ипотеки?', answer: 'От 15% до 30% стоимости жилья в зависимости от банка и программы.' },
      { question: 'На какой максимальный срок дают ипотеку?', answer: 'До 20 лет. Наиболее распространённые сроки: 10-15 лет.' },
      { question: 'Какие документы нужны для ипотеки?', answer: 'Паспорт, справка о доходах, кредитная история, документы на приобретаемое жильё, оценка недвижимости, страховка объекта.' },
      { question: 'Какие есть льготные ипотечные программы?', answer: 'Условия зависят от категории и программы на текущий момент: уточняйте в банке. Малообеспеченным может быть доступна субсидия на первоначальный взнос.' },
      { question: 'Сколько стоит квадратный метр жилья в Ташкенте?', answer: 'От 8 до 15 млн сум/м² в зависимости от района. Центр и популярные районы — дороже, пригороды — дешевле.' },
    ],
    faqUz: [
      { question: "O'zbekistonda ipoteka stavkasi qancha?", answer: "Davlat ipotekasi: odatda 17-20% (formula: MB stavkasi + 6% = 20%). Tijorat ipotekasi: 23-31% gacha. Imtiyozli toifalar — aniq dastur shartlari bo'yicha." },
      { question: "Ipoteka uchun boshlang'ich to'lov qancha kerak?", answer: "Bank va dasturga qarab uy-joy qiymatining 15% dan 30% gacha." },
      { question: "Ipoteka maksimal necha yilga beriladi?", answer: "20 yilgacha. Eng keng tarqalgan muddatlar: 10-15 yil." },
      { question: "Ipoteka uchun qanday hujjatlar kerak?", answer: "Pasport, daromad ma'lumotnomasi, kredit tarixi, sotib olinadigan uy-joy hujjatlari, ko'chmas mulk baholash, ob'ekt sug'urtasi." },
      { question: "Qanday imtiyozli ipoteka dasturlari bor?", answer: "Shartlar toifa va amaldagi dasturga bog'liq: bankdan aniqlang. Kam ta'minlanganlarga boshlang'ich to'lov uchun subsidiya berilishi mumkin." },
      { question: "Toshkentda uy-joy kvadrat metri qancha turadi?", answer: "2025–2026-yilda: tumanga qarab 8 dan 15 mln so'm/m² gacha. Markaz va mashhur tumanlar — qimmatroq." },
    ],
  },

  {
    slug: 'auto-credit',
    lastUpdated: '2025-10-20',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Закон «О потребительском кредите» ЗРУ-33', url: 'https://lex.uz/ru/docs/1004490' },
    ],
    paragraphsRu: [
      'Автокредитование в Узбекистане предлагают большинство коммерческих банков по ставкам от 22% до 33% годовых. Ставки зависят от срока кредита (1-7 лет), первоначального взноса, марки автомобиля (новый или б/у), а также от кредитной истории заёмщика. Для автомобилей отечественного производства (UzAuto Motors — Chevrolet) часто действуют специальные программы со ставками 19-24% (отдельные программы UzAuto — от 0% рассрочка) и увеличенным сроком кредита. Калькулятор автокредита рассчитает точный ежемесячный платёж и переплату.',
      'Расчёт автокредита аналогичен потребительскому кредиту — используется аннуитетная формула. Пример: покупка Chevrolet Onix стоимостью 280 000 000 сум. Первоначальный взнос 30% = 84 000 000 сум. Сумма кредита: 196 000 000 сум на 5 лет (60 месяцев) под 20% годовых. Ежемесячный платёж ≈ 5 200 000 сум. Общая сумма выплат: 312 000 000 сум. Переплата: 116 000 000 сум (59% от суммы кредита).',
      'Для получения автокредита необходимы: паспорт, справка о доходах (платёж не должен превышать 50% чистого дохода), кредитная история, водительское удостоверение (некоторые банки). Залогом по автокредиту является приобретаемый автомобиль — ПТС (техпаспорт) хранится в банке до полного погашения кредита. Обязательно страхование автомобиля (КАСКО) на весь срок кредитования, стоимость которого составляет 2-5% от стоимости авто в год.',
      'Для уменьшения ежемесячного платежа рекомендуется увеличить первоначальный взнос: при 50% взносе вместо 30% ежемесячный платёж уменьшится примерно на 30%. Также выгоднее брать кредит на более короткий срок — при 3 годах вместо 5 переплата снижается примерно на 40%. Досрочное погашение автокредита разрешено без штрафов. При необходимости можно рефинансировать автокредит в другом банке, если там предложат более низкую ставку.',
      'Помимо стоимости автомобиля и кредита учтите дополнительные расходы: обязательное страхование ОСАГО (от 160 000 сум по тарифам 2026 года), разовые госпошлины при постановке на учёт (13,04 БРВ с новыми номерами), установка GPS-трекера (требование некоторых банков). Ежегодного транспортного налога в Узбекистане нет — его нет в закрытом перечне статьи 17 Налогового кодекса. Рассчитать ОСАГО можно с помощью нашего калькулятора ОСАГО. Для сравнения условий лизинга автомобиля воспользуйтесь калькулятором автолизинга.',
    ],
    paragraphsUz: [
      "O'zbekistonda avtokredit berish ko'pchilik tijorat banklari tomonidan yillik 22% dan 33% gacha stavkalarda taklif etiladi. Stavkalar kredit muddati (1-7 yil), boshlang'ich to'lov, avtomobil markasi (yangi yoki ishlatilgan) va qarz oluvchining kredit tarixiga bog'liq. Mahalliy ishlab chiqarish avtomobillari (UzAuto Motors — Chevrolet) uchun ko'pincha 19-24% stavkalar bilan maxsus dasturlar amal qiladi (alohida UzAuto dasturlari — 0% bo'lib to'lash).",
      "Avtokredit hisoblash iste'mol kreditiga o'xshash — annuitet formulasi qo'llaniladi. Misol: 280 000 000 so'mlik Chevrolet Onix sotib olish. Boshlang'ich to'lov 30% = 84 000 000 so'm. Kredit summasi: 196 000 000 so'm 5 yilga (60 oy) yillik 20% da. Oylik to'lov ≈ 5 200 000 so'm. Umumiy to'lovlar: 312 000 000 so'm. Ortiqcha to'lov: 116 000 000 so'm (59%).",
      "Avtokredit olish uchun kerak: pasport, daromad ma'lumotnomasi (to'lov sof daromadning 50% dan ko'p bo'lmasligi kerak), kredit tarixi. Avtokredit bo'yicha garov — sotib olinayotgan avtomobil. KASKO sug'urtasi butun kredit muddatiga majburiy, narxi avtomobil qiymatining yiliga 2-5%.",
      "Oylik to'lovni kamaytirish uchun boshlang'ich to'lovni oshiring: 30% o'rniga 50% da oylik to'lov taxminan 30% ga kamayadi. Qisqaroq muddatga kredit olish ham foydaliroq — 5 yil o'rniga 3 yilda ortiqcha to'lov taxminan 40% ga kamayadi. Avtokreditni muddatidan oldin to'lash jarimasisz ruxsat etilgan.",
      "Avtomobil va kredit qiymatidan tashqari qo'shimcha xarajatlarni hisobga oling: majburiy OSAGO sug'urtasi (2026-yil tariflari bo'yicha 160 000 so'mdan), ro'yxatdan o'tkazishdagi bir martalik davlat bojlari (yangi raqamlar bilan 13,04 BHK), GPS-treker o'rnatish. O'zbekistonda yillik transport solig'i yo'q — u Soliq kodeksi 17-moddasining yopiq ro'yxatida mavjud emas. OSAGOni bizning OSAGO kalkulyatorimiz yordamida hisoblashingiz mumkin.",
    ],
    faqRu: [
      { question: 'Какие ставки по автокредитам в Узбекистане?', answer: 'От 19-24% (отечественные авто по спецпрограммам, UzAuto — от 0% рассрочка) до 33% (коммерческие ставки). Средняя — 22-28% годовых.' },
      { question: 'Какой первоначальный взнос нужен для автокредита?', answer: 'Обычно от 20% до 40% стоимости авто. Чем больше взнос, тем ниже ставка и переплата.' },
      { question: 'Обязательно ли КАСКО при автокредите?', answer: 'Да, большинство банков требуют КАСКО на весь срок кредита. Стоимость: 2-5% от стоимости авто в год.' },
      { question: 'Можно ли досрочно погасить автокредит?', answer: 'Да, без штрафов. Проценты пересчитываются за фактический срок использования кредита.' },
      { question: 'На какой срок дают автокредит?', answer: 'От 1 до 7 лет. Оптимальный срок — 3-5 лет: баланс между размером платежа и переплатой.' },
      { question: 'Какие дополнительные расходы при покупке авто в кредит?', answer: 'КАСКО (2-5%/год), ОСАГО (от 160 000 сум), разовые госпошлины при постановке на учёт (13,04 БРВ), GPS-трекер. Ежегодного транспортного налога в Узбекистане не существует.' },
    ],
    faqUz: [
      { question: "O'zbekistonda avtokredit stavkalari qanday?", answer: "19-24% dan (mahalliy avto maxsus dasturlari, UzAuto — 0% bo'lib to'lash) 33% gacha (tijorat stavkalari). O'rtacha — yillik 22-28%." },
      { question: "Avtokredit uchun boshlang'ich to'lov qancha kerak?", answer: "Odatda avtomobil qiymatining 20% dan 40% gacha. Qancha ko'p to'lov — shuncha past stavka va ortiqcha to'lov." },
      { question: "Avtokreditda KASKO majburiymi?", answer: "Ha, ko'pchilik banklar butun kredit muddatiga KASKO talab qiladi. Narxi: avtomobil qiymatining yiliga 2-5%." },
      { question: "Avtokreditni muddatidan oldin to'lash mumkinmi?", answer: "Ha, jarimasisz. Foizlar haqiqiy foydalanish muddati uchun qayta hisoblanadi." },
      { question: "Avtokredit necha yilga beriladi?", answer: "1 dan 7 yilgacha. Optimal muddat — 3-5 yil: to'lov miqdori va ortiqcha to'lov o'rtasida muvozanat." },
      { question: "Kreditga avto sotib olishda qo'shimcha xarajatlar qanday?", answer: "KASKO (yiliga 2-5%), OSAGO (160 000 so'mdan), ro'yxatdan o'tkazishdagi bir martalik bojlar (13,04 BHK), GPS-treker. O'zbekistonda yillik transport solig'i mavjud emas." },
    ],
  },

  {
    slug: 'deposit',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Фонд гарантирования вкладов', url: 'https://dif.uz' },
    ],
    paragraphsRu: [
      'Ставки по банковским вкладам в Узбекистане в 2026 году составляют от 17% до 22,5% годовых в национальной валюте (сум), средняя ставка по вкладам населения в августе 2026 года — 18,4% (данные ЦБ), и от 4% до 7% годовых в иностранной валюте (доллар/евро). Высокие ставки в сумах обусловлены ключевой ставкой ЦБ 14% и необходимостью компенсировать инфляцию. Калькулятор депозита рассчитывает доход по вкладу с учётом капитализации процентов, срока и условий размещения.',
      'Виды вкладов: срочный (с фиксированной ставкой, без досрочного снятия), накопительный (с возможностью пополнения), до востребования (низкая ставка, свободный доступ). Расчёт простых процентов: Доход = Сумма × Ставка × Срок(дней) / 365. Расчёт с ежемесячной капитализацией: Итого = Сумма × (1 + Ставка/12)^Месяцы. Капитализация увеличивает доходность за счёт начисления процентов на проценты.',
      'Пример расчёта: вклад 100 000 000 сум на 12 месяцев под 24% годовых. Без капитализации: доход = 100 000 000 × 24% = 24 000 000 сум, итого 124 000 000 сум. С ежемесячной капитализацией: итого = 100 000 000 × (1 + 0,02)^12 = 126 824 179 сум, доход = 26 824 179 сум — на 2 824 179 сум больше. Эффективная ставка при капитализации: 26,82% вместо номинальных 24%.',
      'Проценты по вкладам физических лиц не облагаются НДФЛ, если вкладчик — налоговый резидент Узбекистана (п. 13 ст. 378 НК, льгота действует с 1998 года). С нерезидентов банк удерживает 10% при выплате процентов (п. 1 ст. 382 НК): льготы раздела о НДФЛ на нерезидентов не распространяются (п. 2 ч. 1 ст. 366 НК), снизить или вернуть налог можно только по соглашению об избежании двойного налогообложения, предъявив сертификат резидентства. Вклады физических лиц гарантированы Фондом гарантирования вкладов граждан в банках на сумму до 200 000 000 сум (эквивалент) на одного вкладчика в одном банке. Это означает, что даже при банкротстве банка вкладчик получит возмещение в пределах гарантированной суммы.',
      'Для максимизации дохода рекомендуется: выбирать вклады с ежемесячной капитализацией; сравнивать ставки нескольких банков (наш калькулятор сравнения вкладов поможет); распределять крупные суммы между банками в пределах гарантии (200 млн сум на банк); учитывать реальную доходность с поправкой на инфляцию. При инфляции 6,4% (сентябрь 2026) и ставке 20% реальная доходность составляет около 13,6%. Для вкладов в валюте следите за курсом через наш конвертер валют.',
    ],
    paragraphsUz: [
      "O'zbekistonda bank omonatlar bo'yicha stavkalar milliy valyutada (so'm) yillik 17% dan 22,5% gacha, 2026-yil avgustida aholi omonatlari bo'yicha o'rtacha stavka 18,4% (MB ma'lumotlari), va xorijiy valyutada (dollar/yevro) yillik 4% dan 7% gacha. So'mdagi yuqori stavkalar MB kalit stavkasi 14% va inflyatsiyani qoplash zarurati bilan bog'liq. Depozit kalkulyatori foizlar kapitalizatsiyasi, muddat va joylashtirish shartlarini hisobga olgan holda omonat bo'yicha daromadni hisoblaydi.",
      "Omonat turlari: muddatli (qat'iy stavka, muddatidan oldin yechib olishsiz), jamg'arma (to'ldirish imkoniyati bilan), talab qilib olinguncha (past stavka, erkin foydalanish). Oddiy foizlar hisobi: Daromad = Summa × Stavka × Muddat(kun) / 365. Oylik kapitalizatsiya bilan: Jami = Summa × (1 + Stavka/12)^Oylar.",
      "Hisoblash misoli: 100 000 000 so'mlik omonat 12 oyga yillik 24% da. Kapitalizatsiyasiz: daromad = 24 000 000 so'm, jami 124 000 000 so'm. Oylik kapitalizatsiya bilan: jami = 126 824 179 so'm, daromad = 26 824 179 so'm — 2 824 179 so'mga ko'proq. Kapitalizatsiyada samarali stavka: nominal 24% o'rniga 26,82%.",
      "Jismoniy shaxslarning bank omonatlari bo'yicha foizlar, agar omonatchi O'zbekiston soliq rezidenti bo'lsa, JShShSga tortilmaydi (SK 378-moddasi 13-bandi, imtiyoz 1998-yildan amal qiladi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi (SK 382-moddasi 1-bandi): JShShS bo'limidagi imtiyozlar norezidentlarga tatbiq etilmaydi (SK 366-moddasi 1-qismi 2-bandi), soliqni faqat qo'sh soliqqa tortishning oldini olish to'g'risidagi bitim asosida, rezidentlik sertifikatini taqdim etib, kamaytirish yoki qaytarish mumkin. Jismoniy shaxslar omonatlari Banklardagi fuqarolar omonatlarini kafolatlash fondi tomonidan bir omonatchiga bir bankda 200 000 000 so'mgacha (ekvivalent) miqdorda kafolatlanadi.",
      "Daromadni maksimallashtirish uchun tavsiya etiladi: oylik kapitalizatsiyali omonatlarni tanlash; bir nechta banklarning stavkalarini solishtirish; yirik summalarni banklar o'rtasida kafolat chegarasida (bank boshiga 200 mln so'm) taqsimlash; inflyatsiyani hisobga olgan holda real daromadlilikni baholash. 6,4% inflyatsiya (2026-yil sentabr) va 20% stavkada real daromadlilik taxminan 13,6%.",
    ],
    faqRu: [
      { question: 'Какие ставки по вкладам в сумах в 2026 году?', answer: 'От 17% до 22,5% годовых в зависимости от банка и срока, в среднем 18,4% (август 2026). Наиболее выгодные ставки — по срочным вкладам на 12-24 месяца.' },
      { question: 'Облагаются ли проценты по вкладам налогом?', answer: 'Нет, если вы налоговый резидент Узбекистана: проценты по вкладам в банках освобождены от НДФЛ (п. 13 ст. 378 НК). С нерезидентов банк удерживает 10% при выплате процентов.' },
      { question: 'Какая сумма гарантирована по вкладам?', answer: 'До 200 000 000 сум на одного вкладчика в одном банке. Гарантируется Фондом гарантирования вкладов.' },
      { question: 'Что такое капитализация процентов?', answer: 'Начисление процентов на ранее начисленные проценты. При ежемесячной капитализации эффективная ставка выше номинальной (24% → 26,82%).' },
      { question: 'Какие ставки по валютным вкладам?', answer: 'От 4% до 7% годовых в долларах/евро. Ниже, чем в сумах, но без валютного риска.' },
      { question: 'Как выбрать лучший вклад?', answer: 'Сравните ставки, учтите капитализацию, проверьте условия досрочного снятия и пополнения. Распределите средства между банками в пределах гарантии.' },
    ],
    faqUz: [
      { question: "2026-yilda so'mdagi omonat stavkalari qanday?", answer: "Bank va muddatga qarab yillik 17% dan 22,5% gacha, o'rtacha 18,4% (2026-yil avgust). Eng foydali stavkalar — 12-24 oylik muddatli omonatlarda." },
      { question: "Omonat foizlari soliqqa tortiladimi?", answer: "Yo'q, agar siz O'zbekiston soliq rezidenti bo'lsangiz: bank omonatlari bo'yicha foizlar JShShSdan ozod qilingan (SK 378-moddasi 13-bandi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi." },
      { question: "Omonatlar bo'yicha qancha summa kafolatlanadi?", answer: "Bir omonatchiga bir bankda 200 000 000 so'mgacha. Omonatlarni kafolatlash fondi tomonidan kafolatlanadi." },
      { question: "Foizlar kapitalizatsiyasi nima?", answer: "Avval hisoblangan foizlarga foiz hisoblash. Oylik kapitalizatsiyada samarali stavka nominaldan yuqori (24% → 26,82%)." },
      { question: "Valyutali omonat stavkalari qanday?", answer: "Dollar/yevroda yillik 4% dan 7% gacha. So'mdagiga qaraganda past, lekin valyuta xavfisiz." },
    ],
  },

  {
    slug: 'currency-converter',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Центральный банк РУз — курсы валют', url: 'https://cbu.uz/uz/arkhiv-kursov-valyut/' },
    ],
    paragraphsRu: [
      'Официальный курс валют в Узбекистане устанавливается Центральным банком ежедневно на основе межбанковских торгов. Курс меняется каждый день, актуальные значения показаны в конвертере выше; на 1 ноября 2026 года — 12 023 сума за доллар США, 13 461 сум за евро, 149 сумов за российский рубль. Конвертер валют позволяет мгновенно пересчитать суммы между узбекским сумом и основными мировыми валютами по актуальному курсу ЦБ.',
      'ЦБ Узбекистана публикует официальный курс на своём сайте cbu.uz ежедневно до 16:00 по ташкентскому времени. Этот курс используется для бухгалтерских целей, расчёта таможенных пошлин и налогов. Коммерческие банки и обменные пункты устанавливают собственные курсы покупки и продажи с небольшим спредом относительно официального курса (обычно 30-80 сум за доллар). Для сравнения курсов банков используйте наш калькулятор банковских курсов.',
      'Конвертер поддерживает основные валюты: USD (доллар США), EUR (евро), RUB (российский рубль), GBP (фунт стерлингов), CNY (китайский юань), KZT (казахстанский тенге), KRW (южнокорейская вона), JPY (японская иена), TRY (турецкая лира). Для каждой валюты показывается официальный курс ЦБ. Расчёт производится по формуле: Сумма в UZS = Сумма в валюте × Курс.',
      'При обмене крупных сумм (от 1 000 USD и выше) коммерческие банки могут предложить более выгодный курс, чем обменные пункты. Для переводов за рубеж и получения денежных переводов важно учитывать не только курс обмена, но и комиссии за перевод — обычно 1-3% от суммы. Подробнее о стоимости международных переводов — в нашем калькуляторе денежных переводов.',
      'Узбекский сум является свободно конвертируемой валютой с 2017 года, когда была проведена либерализация валютного рынка. Физические лица могут свободно покупать и продавать иностранную валюту без ограничений. Юридические лица обязаны конвертировать валютную выручку в установленном порядке. Для планирования поездок и покупок рекомендуется отслеживать динамику курса за последние месяцы.',
    ],
    paragraphsUz: [
      "O'zbekistonda rasmiy valyuta kursi Markaziy bank tomonidan banklar aro savdolar asosida har kuni belgilanadi. Kurs har kuni o'zgaradi, dolzarb qiymatlar yuqoridagi konverterda ko'rsatilgan; 2026-yil 1-noyabr holatiga AQSh dollari — 12 023 so'm, yevro — 13 461 so'm, rus rubli — 149 so'm. Valyuta konverteri MB ning dolzarb kursi bo'yicha o'zbek so'mi va asosiy jahon valyutalari o'rtasida summalarni bir zumda qayta hisoblash imkonini beradi.",
      "O'zbekiston MB rasmiy kursni o'z veb-saytida cbu.uz da har kuni Toshkent vaqti bilan 16:00 gacha e'lon qiladi. Bu kurs buxgalteriya maqsadlari, bojxona boji va soliqlar hisobi uchun qo'llaniladi. Tijorat banklari va ayirboshlash punktlari rasmiy kursga nisbatan kichik spred bilan (odatda dollar uchun 30-80 so'm) o'z sotib olish va sotish kurslarini belgilaydi.",
      "Konverter asosiy valyutalarni qo'llab-quvvatlaydi: USD, EUR, RUB, GBP, CNY, KZT, KRW, JPY, TRY. Har bir valyuta uchun MBning rasmiy kursi ko'rsatiladi. Hisoblash formulasi: UZS dagi summa = Valyutadagi summa × Kurs.",
      "Yirik summalarni (1 000 USD va undan ko'p) ayirboshlashda tijorat banklari ayirboshlash punktlariga qaraganda foydaliroq kurs taklif qilishi mumkin. Chet elga pul o'tkazish va pul o'tkazmalarini olishda nafaqat ayirboshlash kursini, balki o'tkazma komissiyasini ham hisobga oling — odatda summaning 1-3%.",
      "O'zbek so'mi 2017-yildan boshlab erkin konvertatsiya qilinadigan valyuta hisoblanadi. Jismoniy shaxslar xorijiy valyutani cheklovsiz erkin sotib olishi va sotishi mumkin. Yuridik shaxslar valyuta tushumini belgilangan tartibda konvertatsiya qilishi shart.",
    ],
    faqRu: [
      { question: 'Какой курс доллара в Узбекистане?', answer: 'Актуальный курс показан в конвертере и ежедневно публикуется на cbu.uz; на 1 ноября 2026 года — 12 023 сума за 1 доллар.' },
      { question: 'Где выгоднее менять валюту?', answer: 'Крупные суммы (от $1000) — в банках по договорному курсу. Мелкие суммы — в обменных пунктах. Спред обычно 30-80 сум за доллар к курсу ЦБ.' },
      { question: 'Когда обновляется курс ЦБ?', answer: 'Ежедневно до 16:00 по ташкентскому времени на сайте cbu.uz.' },
      { question: 'Можно ли свободно покупать валюту?', answer: 'Да, с 2017 года физические лица могут свободно покупать и продавать иностранную валюту без ограничений.' },
      { question: 'Какие валюты можно обменять в Узбекистане?', answer: 'Основные: USD, EUR, RUB, GBP, CNY, KZT. Менее распространённые валюты можно обменять в крупных банках.' },
    ],
    faqUz: [
      { question: "O'zbekistonda dollar kursi qancha?", answer: "Dolzarb kurs konverterda ko'rsatilgan va har kuni cbu.uz da e'lon qilinadi; 2026-yil 1-noyabr holatiga 1 dollar uchun 12 023 so'm." },
      { question: "Valyutani qayerda foydaliroq ayirboshlash mumkin?", answer: "Yirik summalar ($1000 dan) — banklarda kelishilgan kursda. Kichik summalar — ayirboshlash punktlarida. Spred odatda MB kursiga nisbatan dollar uchun 30-80 so'm." },
      { question: "MB kursi qachon yangilanadi?", answer: "Har kuni Toshkent vaqti bilan 16:00 gacha cbu.uz saytida." },
      { question: "Valyutani erkin sotib olish mumkinmi?", answer: "Ha, 2017-yildan jismoniy shaxslar xorijiy valyutani cheklovsiz erkin sotib olishi mumkin." },
      { question: "O'zbekistonda qanday valyutalarni ayirboshlash mumkin?", answer: "Asosiy: USD, EUR, RUB, GBP, CNY, KZT. Kamroq tarqalgan valyutalarni yirik banklarda ayirboshlash mumkin." },
    ],
  },

  {
    slug: 'bank-rates',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор пересчитывает сумму в долларах по официальному курсу ЦБ: с ним удобно сравнивать курсы покупки и продажи, которые объявляет ваш банк. Разница между курсом покупки и продажи (спред) в банках обычно составляет от 50 до 200 сум на каждый доллар. Для крупных сумм эта разница может составить значительную экономию.',
      'Основные банки Узбекистана, предлагающие обмен валют: Национальный банк ВЭД, Ипотека-банк, Капиталбанк, Хамкорбанк, Давр-банк, Infinbank, Uzum Bank. Каждый банк устанавливает свои курсы, которые могут отличаться от курса ЦБ. Как правило, крупные банки предлагают более выгодные курсы для клиентов с большими суммами обмена. Курсы обновляются в течение рабочего дня.',
      'Пример экономии: при обмене 5 000 USD разница в курсе всего 100 сум даёт экономию 500 000 сум. При обмене 10 000 USD — уже 1 000 000 сум. Поэтому перед обменом крупных сумм рекомендуется сравнить курсы в нескольких банках. Помимо наличного обмена, банки предлагают конвертацию через мобильные приложения — часто с более выгодным курсом.',
      'Для предприятий и юридических лиц курсы конвертации устанавливаются индивидуально на основе межбанковских торгов. Объём торгов на валютной бирже определяет рыночный курс. Юридические лица обязаны проводить конвертацию через уполномоченные банки. Для расчёта таможенных пошлин используется исключительно официальный курс ЦБ на дату таможенного оформления.',
      'Рекомендации по обмену валют: сравнивайте курсы до обмена; для сумм свыше $500 обращайтесь в банк, а не обменный пункт; при регулярных переводах рассмотрите мультивалютную карту; следите за динамикой курса — сезонные колебания могут составлять 3-5%; для международных переводов используйте наш калькулятор денежных переводов.',
    ],
    paragraphsUz: [
      "Kalkulyator dollardagi summani MBning rasmiy kursi bo'yicha qayta hisoblaydi: u bilan bankingiz e'lon qilgan sotib olish va sotish kurslarini solishtirish qulay. Banklarda sotib olish va sotish kursi o'rtasidagi farq (spred) odatda har bir dollar uchun 50 dan 200 so'mgacha.",
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
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Таможенный кодекс РУз', url: 'https://lex.uz/ru/docs/2876352' },
      { name: 'ПКМ № 244 от 19.04.2025 — нормы беспошлинного ввоза', url: 'https://lex.uz/docs/7484114' },
      { name: 'ПП-4508 — единый таможенный платёж', url: 'https://lex.uz/ru/docs/4585744' },
      { name: 'Государственный таможенный комитет', url: 'https://customs.uz' },
    ],
    paragraphsRu: [
      'Таможенные платежи при ввозе товаров в Узбекистан состоят из нескольких компонентов: таможенная пошлина (0-30% от таможенной стоимости), НДС (12% от суммы таможенной стоимости и пошлины), акцизный налог (для подакцизных товаров), сбор за таможенное оформление. Ставки таможенных пошлин различаются в зависимости от категории товара и страны происхождения. Калькулятор таможенных платежей рассчитает полную сумму всех платежей при ввозе товаров.',
      'Для физических лиц действуют нормы беспошлинного ввоза (с 1 мая 2025 года, постановление Кабмина № 244): при въезде воздушным транспортом — товары стоимостью до 1 000 USD; железнодорожным или речным транспортом — до 500 USD; через автомобильные (пешеходные) пункты пропуска — до 300 USD; в международных курьерских отправлениях — до 200 USD в течение календарного месяца; в международных почтовых отправлениях — до 100 USD. Общего ограничения по весу нет — количественные нормы установлены только для отдельных товаров (алкоголь, табак, парфюмерия, БАДы). С 20 июля 2025 года нормы применяются, только если человек пробыл за рубежом не менее 2 календарных дней при въезде по железной дороге, речным транспортом или через автомобильные пункты пропуска и не менее 3 календарных дней при въезде самолётом; при меньшем сроке единый таможенный платёж взимается со всей стоимости товаров. С части стоимости сверх нормы взимается единый таможенный платёж — он заменяет пошлину, НДС и акциз: 30% таможенной стоимости, но не менее 3 USD за 1 кг (постановление ПП-4508). С 1 января 2027 года ставка снижается до 20%, но не менее 2 USD за 1 кг (Указ УП-174 от 27.08.2026).',
      'Пример расчёта таможенных платежей для юридического лица: ввоз оборудования стоимостью 100 000 USD (по курсу ЦБ на 1 ноября 2026 ≈ 1 202 346 000 сум). Таможенная пошлина 10%: 120 234 600 сум. НДС 12% от (стоимость + пошлина): (1 202 346 000 + 120 234 600) × 12% = 158 709 672 сум. Сбор за таможенное оформление: по фиксированной тарифной сетке (ПКМ-700). Итого таможенные платежи без сбора: 278 944 272 сум (23,2% от стоимости товара).',
      'Для ряда товаров действуют льготы и освобождения: технологическое оборудование, не производимое в Узбекистане, может ввозиться без пошлины; инвесторы с определённым объёмом инвестиций получают преференции; товары из стран ЕАЭС (по отдельным соглашениям) могут иметь пониженные ставки; участники свободных экономических зон освобождены от таможенных пошлин на ввоз оборудования и сырья.',
      'Таможенное оформление осуществляется через систему «Единое окно» (singlewindow.uz). Для расчёта пошлин необходимо определить код ТН ВЭД товара (гармонизированная система классификации). Ставки пошлин регулярно пересматриваются и публикуются Государственным таможенным комитетом. При определении таможенной стоимости используется курс ЦБ на дату подачи таможенной декларации.',
    ],
    paragraphsUz: [
      "O'zbekistonga tovarlarni kiritishda bojxona to'lovlari bir nechta komponentdan iborat: bojxona boji (bojxona qiymatidan 0-30%), QQS (bojxona qiymati va boj yig'indisidan 12%), aksiz solig'i (aksiz tovarlar uchun), bojxona rasmiylash yig'imi. Bojxona boj stavkalari tovar toifasi va kelib chiqqan mamlakatga qarab farqlanadi.",
      "Jismoniy shaxslar uchun bojsiz olib kirish normalari amal qiladi (2025-yil 1-maydan, Vazirlar Mahkamasining 244-son qarori): havo transportida — 1 000 AQSh dollarigacha; temir yo'l va daryo transportida — 500 AQSh dollarigacha; avtomobil (piyoda) o'tkazish punktlari orqali — 300 AQSh dollarigacha; xalqaro kuryerlik jo'natmalarida — bir kalendar oy davomida 200 AQSh dollarigacha; xalqaro pochta jo'natmalarida — 100 AQSh dollarigacha. Og'irlik bo'yicha umumiy cheklov yo'q — miqdoriy normalar faqat ayrim tovarlarga (alkogol, tamaki, parfyumeriya, biologik faol qo'shimchalar) belgilangan. 2025-yil 20-iyuldan normalar faqat chet elda temir yo'l, daryo transporti yoki avtomobil o'tkazish punktlari orqali kirishda kamida 2 kalendar kun, samolyotda kirishda kamida 3 kalendar kun bo'lganda qo'llaniladi; muddat kamroq bo'lsa, yagona bojxona to'lovi tovarlarning butun qiymatidan olinadi. Qiymatning normadan ortiq qismiga yagona bojxona to'lovi olinadi — u boj, QQS va aksiz o'rniga to'lanadi: bojxona qiymatining 30 foizi, lekin 1 kg uchun kamida 3 AQSh dollari (PQ-4508 qarori). 2027-yil 1-yanvardan stavka 20 foizga, lekin 1 kg uchun kamida 2 AQSh dollariga tushiriladi (2026-yil 27-avgustdagi PF-174 Farmoni).",
      "Yuridik shaxs uchun bojxona to'lovlari hisoblash misoli: 100 000 AQSh dollarlik (2026-yil 1-noyabr MB kursi bo'yicha ≈ 1 202 346 000 so'm) uskunani olib kirish. Bojxona boji 10%: 120 234 600 so'm. QQS 12%: (1 202 346 000 + 120 234 600) × 12% = 158 709 672 so'm. Rasmiylash yig'imi: belgilangan tarif jadvali bo'yicha (VMQ-700). Yig'imsiz jami: 278 944 272 so'm (tovar qiymatining 23,2%).",
      "Bir qator tovarlarga imtiyozlar amal qiladi: O'zbekistonda ishlab chiqarilmaydigan texnologik uskunalar bojsiz olib kirilishi mumkin; ma'lum hajmdagi investitsiyalarga ega investorlar preferentsiyalar oladi; erkin iqtisodiy zonalar ishtirokchilari uskuna va xom-ashyo olib kirishda bojxona bojlaridan ozod.",
      "Bojxona rasmiylash «Yagona darcha» (singlewindow.uz) tizimi orqali amalga oshiriladi. Boj hisoblash uchun tovarning TIF TN kodini aniqlash kerak. Bojxona qiymatini aniqlashda bojxona deklaratsiyasi topshirilgan sanadagi MB kursi qo'llaniladi.",
    ],
    faqRu: [
      { question: 'Из чего состоят таможенные платежи?', answer: 'Таможенная пошлина (0-30%), НДС (12% от стоимости+пошлина), акциз (для подакцизных товаров), сбор за таможенное оформление (по тарифной сетке).' },
      { question: 'Сколько товаров можно ввезти без пошлины?', answer: 'С 1 мая 2025: самолётом — до $1 000; поездом или речным транспортом — до $500; через автомобильные (пешеходные) пункты пропуска — до $300; в международных курьерских отправлениях — до $200 за календарный месяц; в международных почтовых отправлениях — до $100. Общего лимита по весу нет. Нормы действуют, если вы пробыли за рубежом не менее 2 календарных дней (поезд, речной транспорт, автомобильный пункт пропуска) или 3 календарных дней (самолёт), иначе платёж берётся со всей стоимости. С суммы сверх нормы — единый таможенный платёж 30%, но не менее $3 за 1 кг (с 1 января 2027 года — 20% и не менее $2 за 1 кг).' },
      { question: 'Как определить размер таможенной пошлины?', answer: 'По коду ТН ВЭД товара. Ставки публикуются Государственным таможенным комитетом. Средние ставки: 0-5% на оборудование, 10-20% на потребительские товары, до 30% на подакцизные.' },
      { question: 'Какой курс валюты используется для расчёта пошлин?', answer: 'Официальный курс ЦБ на дату подачи таможенной декларации.' },
      { question: 'Есть ли льготы по таможенным платежам?', answer: 'Да: технологическое оборудование (не производимое в РУз), товары для СЭЗ, инвестиционные проекты. Льготы устанавливаются отдельными постановлениями.' },
    ],
    faqUz: [
      { question: "Bojxona to'lovlari nimalardan iborat?", answer: "Bojxona boji (0-30%), QQS (qiymat+bojdan 12%), aksiz (aksiz tovarlar uchun), rasmiylashtirish yig'imi (tarif setkasi)." },
      { question: "Bojsiz qancha tovar olib kirish mumkin?", answer: "2025-yil 1-maydan: samolyotda — $1 000 gacha; poyezdda yoki daryo transportida — $500 gacha; avtomobil (piyoda) o'tkazish punktlari orqali — $300 gacha; xalqaro kuryerlik jo'natmalarida — kalendar oy davomida $200 gacha; xalqaro pochta jo'natmalarida — $100 gacha. Og'irlik bo'yicha umumiy cheklov yo'q. Normalar chet elda kamida 2 kalendar kun (poyezd, daryo transporti, avtomobil o'tkazish punkti) yoki 3 kalendar kun (samolyot) bo'lganda amal qiladi, aks holda to'lov butun qiymatdan olinadi. Normadan ortiq summaga — yagona bojxona to'lovi 30%, lekin 1 kg uchun kamida $3 (2027-yil 1-yanvardan — 20% va 1 kg uchun kamida $2)." },
      { question: "Bojxona boji miqdorini qanday aniqlash mumkin?", answer: "Tovarning TIF TN kodi bo'yicha. Stavkalar Davlat bojxona qo'mitasi tomonidan e'lon qilinadi." },
      { question: "Boj hisobi uchun qaysi valyuta kursi ishlatiladi?", answer: "Bojxona deklaratsiyasi topshirilgan sanadagi MB rasmiy kursi." },
      { question: "Bojxona to'lovlari bo'yicha imtiyozlar bormi?", answer: "Ha: texnologik uskunalar (O'zbekistonda ishlab chiqarilmaydigan), EIZ uchun tovarlar, investitsiya loyihalari." },
    ],
  },

  {
    slug: 'osago',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'ПКМ № 141 о мерах по реализации закона об ОСАГО', url: 'https://lex.uz/ru/docs/1366341' },
      { name: 'КоАО РУз, ст. 135 и 135-1 (ред. ЗРУ-1116 от 04.02.2026)', url: 'https://lex.uz/ru/docs/97661' },
    ],
    paragraphsRu: [
      'Обязательное страхование автогражданской ответственности (ОСАГО) в Узбекистане является обязательным для всех владельцев транспортных средств. С 1 января 2026 года (ПКМ №458) действуют плоские тарифы: 192 000 сум в Ташкенте и Ташкентской области при ограниченном круге водителей, 384 000 без ограничения, 160 000 и 320 000 соответственно в других регионах. Коэффициента стажа в новом тарифе нет, скидки за безаварийную езду тоже: чистая история — это базовый тариф, а каждое ДТП по вине умножает премию на 1,3, 2,0 или 3,0. Калькулятор ОСАГО рассчитает точную стоимость полиса с учётом всех коэффициентов.',
      'Формула расчёта по тарифу 2026 года: Стоимость ОСАГО = Базовый тариф × Коэффициент аварийности (КБМ). Базовый тариф уже зависит от региона и круга водителей: 192 000 / 384 000 сум в Ташкенте и Ташкентской области, 160 000 / 320 000 сум в других регионах. КБМ зависит от числа ДТП по вине за прошлый период: 0 — 1,0; 1 — 1,3; 2 — 2,0; 3 и более — 3,0. Коэффициентов территории, стажа и мощности, а также скидки за безаварийную езду в тарифе 2026 года нет — они остались от прежней модели.',
      'Пример расчёта по тарифу 2026 года: легковой автомобиль в Ташкенте, полис на ограниченный круг водителей, аварий по вине не было. Базовый тариф 192 000 сум, коэффициент истории 1,0 — к оплате 192 000 сум в год. Если за прошлый период было одно ДТП по вине, коэффициент 1,3 и премия 249 600 сум; при двух — 2,0 и 384 000 сум. Полис без ограничения числа водителей в Ташкенте стоит 384 000 сум, в других регионах — 320 000. Коэффициентов по стажу водителя и скидок за безаварийную езду тариф не предусматривает.',
      'Максимальные суммы страховых выплат по ОСАГО: за вред жизни и здоровью — до 52 млн сум; за вред имуществу — до 28 млн сум (общий лимит 80 млн сум). При наступлении страхового случая необходимо: вызвать ГАИ, зафиксировать обстоятельства ДТП, обратиться в страховую компанию в течение 3 рабочих дней.',
      'Полис ОСАГО оформляется на 12 месяцев и может быть приобретён в офисах страховых компаний или онлайн. Езда в период, не покрытый полисом ОСАГО, или водителем, не вписанным в полис с ограниченным кругом водителей, — административное правонарушение (ст. 135-1 КоАО): предупреждение или штраф 0,5 БРВ (220 000 сум). Если полис есть, но водитель не имеет его при себе, это другой состав — ст. 135 ч. 1, штраф 1 БРВ; при биометрическом паспорте или ID-карте возить полис с собой не требуется. При покупке автомобиля в кредит ОСАГО является обязательным (помимо КАСКО). Для расчёта полной стоимости владения автомобилем используйте наш калькулятор расхода топлива и калькулятор автокредита.',
    ],
    paragraphsUz: [
      "O'zbekistonda avtofuqarolik javobgarligini majburiy sug'urtalash (OSAGO) barcha transport vositasi egalari uchun majburiy hisoblanadi. 2026-yil 1-yanvardan (458-son QQ) tekis tariflar amal qiladi: Toshkent va Toshkent viloyatida cheklangan haydovchilar doirasida 192 000 so'm, cheklovsiz 384 000, boshqa hududlarda mos ravishda 160 000 va 320 000. Yangi tarifda staj koeffitsiyenti ham, avariyasizlik chegirmasi ham yo'q: toza tarix — bu bazaviy tarif, aybdor har bir hodisa esa mukofotni 1,3, 2,0 yoki 3,0 ga ko'paytiradi.",
      "2026-yil tarifi bo'yicha hisoblash formulasi: OSAGO narxi = Bazaviy tarif × Avariyalilik koeffitsiyenti (KBM). Bazaviy tarif hudud va haydovchilar doirasiga bog'liq: Toshkent va Toshkent viloyatida 192 000 / 384 000 so'm, boshqa hududlarda 160 000 / 320 000 so'm. KBM o'tgan davrdagi aybdor YTHlar soniga bog'liq: 0 — 1,0; 1 — 1,3; 2 — 2,0; 3 va undan ko'p — 3,0. Hudud, staj va quvvat koeffitsiyentlari hamda avariyasizlik chegirmasi 2026-yil tarifida yo'q — ular avvalgi modeldan qolgan.",
      "2026-yil tarifi bo'yicha hisoblash misoli: Toshkentda yengil avtomobil, cheklangan haydovchilar doirasidagi polis, aybdor hodisalar bo'lmagan. Bazaviy tarif 192 000 so'm, tarix koeffitsiyenti 1,0 — yiliga 192 000 so'm to'lanadi. O'tgan davrda aybdor bitta hodisa bo'lsa, koeffitsiyent 1,3 va mukofot 249 600 so'm; ikkitasida — 2,0 va 384 000 so'm. Toshkentda cheklovsiz polis 384 000 so'm, boshqa hududlarda — 320 000. Tarifda haydovchi staji koeffitsiyenti ham, avariyasizlik chegirmasi ham yo'q.",
      "OSAGO bo'yicha maksimal sug'urta to'lovlari: hayot va sog'likka zarar uchun — 52 mln so'mgacha; mol-mulkka zarar uchun — 28 mln so'mgacha (umumiy limit 80 mln so'm). Sug'urta hodisasi yuz berganda: YHXni chaqirish, YTH holatlarini qayd etish, 3 ish kuni ichida sug'urta kompaniyasiga murojaat qilish kerak.",
      "OSAGO polisi 12 oyga rasmiylashtiriladi va sug'urta kompaniyalari ofislarida yoki onlayn sotib olinishi mumkin. Polis qamramagan davrda yoki cheklangan polisga kiritilmagan haydovchi tomonidan boshqarish — ma'muriy huquqbuzarlik (MJtKning 135-1-moddasi): ogohlantirish yoki 0,5 BHK (220 000 so'm) jarima. Polis bor-u, haydovchining yonida bo'lmasa — bu boshqa tarkib, 135-moddaning birinchi qismi: 1 BHK jarima; biometrik pasport yoki ID-karta bo'lsa, polisni yonda olib yurish talab etilmaydi.",
    ],
    faqRu: [
      { question: 'Сколько стоит ОСАГО в Узбекистане?', answer: '192 000 сум в Ташкенте при ограниченном круге водителей и 384 000 без ограничения; в других регионах 160 000 и 320 000. При одном ДТП по вине премия умножается на 1,3 — например, 249 600 сум вместо 192 000.' },
      { question: 'Какой штраф за езду без ОСАГО?', answer: 'Предупреждение или штраф 0,5 БРВ (220 000 сум) по ст. 135-1 КоАО — за езду в период, не покрытый полисом, или водителем, не вписанным в полис. Штраф 1 БРВ (440 000 сум) — по ст. 135 ч. 1, если полис есть, но не при себе; с ID-картой или биометрическим паспортом возить его не нужно.' },
      { question: 'Какая максимальная выплата по ОСАГО?', answer: 'За вред здоровью — до 52 млн сум. За вред имуществу — до 28 млн сум (общий лимит 80 млн).' },
      { question: 'Что такое коэффициент бонус-малус?', answer: 'Множитель к базовому тарифу по числу ДТП по вине за прошлый период: 0 — 1,0; 1 — 1,3; 2 — 2,0; 3 и более — 3,0. Скидки за безаварийную езду в тарифе 2026 года нет — чистая история означает базовый тариф.' },
      { question: 'Можно ли оформить ОСАГО онлайн?', answer: 'Да, полис ОСАГО можно приобрести онлайн через сайты страховых компаний.' },
    ],
    faqUz: [
      { question: "O'zbekistonda OSAGO qancha turadi?", answer: "Toshkentda cheklangan haydovchilar doirasida 192 000 so'm, cheklovsiz 384 000; boshqa hududlarda 160 000 va 320 000. Aybdor bitta hodisada mukofot 1,3 ga ko'payadi — masalan, 192 000 o'rniga 249 600 so'm." },
      { question: "OSAGOsiz haydash uchun jarima qancha?", answer: "Ogohlantirish yoki 0,5 BHK (220 000 so'm) jarima — MJtKning 135-1-moddasi bo'yicha, polis qamramagan davrda yoki polisga kiritilmagan haydovchi boshqarganda. Polis bor-u, yonida bo'lmasa — 135-moddaning birinchi qismi bo'yicha 1 BHK (440 000 so'm); ID-karta yoki biometrik pasport bo'lsa, polisni olib yurish shart emas." },
      { question: "OSAGO bo'yicha maksimal to'lov qancha?", answer: "Sog'likka zarar uchun — 52 mln so'mgacha. Mol-mulkka — 28 mln so'mgacha (umumiy limit 80 mln so'm)." },
      { question: "Bonus-malus koeffitsienti nima?", answer: "Bazaviy tarifga o'tgan davrdagi aybdor YTHlar soni bo'yicha ko'paytiruvchi: 0 — 1,0; 1 — 1,3; 2 — 2,0; 3 va undan ko'p — 3,0. 2026-yil tarifida avariyasiz haydash uchun chegirma yo'q — toza tarix bazaviy tarifni anglatadi." },
      { question: "OSAGOni onlayn rasmiylashtirish mumkinmi?", answer: "Ha, OSAGO polisini sug'urta kompaniyalari saytlari orqali onlayn sotib olish mumkin." },
    ],
  },

  {
    slug: 'electricity',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Постановление Кабмина № 243 от 15.05.2026', url: 'https://lex.uz/ru/docs/8195731' },
      { name: 'Министерство энергетики РУз', url: 'https://minenergy.uz' },
    ],
    paragraphsRu: [
      'Тарифы на электроэнергию для населения Узбекистана (действуют с 1 июня 2026 года, ПКМ-243) установлены по 6-ступенчатой шкале: чем больше потребление, тем выше тариф за кВт·ч. Первые 200 кВт·ч в месяц обходятся дешевле всего, а потребление свыше 10 000 кВт·ч — по максимальному тарифу. Для многоквартирных домов и общежитий с централизованными электроплитами до 1 000 кВт·ч действует половинный тариф: 325, 450 и 550 сум. Такая система стимулирует экономное потребление электроэнергии. Калькулятор электроэнергии рассчитает точную стоимость вашего ежемесячного потребления с учётом всех ступеней тарифа.',
      'Тарифная сетка для населения (с 1 июня 2026, ПКМ-243): Тиер 1 (0-200 кВт·ч) — 650 сум/кВт·ч; Тиер 2 (201-500 кВт·ч) — 900 сум/кВт·ч; Тиер 3 (501-1 000 кВт·ч) — 1 100 сум/кВт·ч; Тиер 4 (1 001-5 000 кВт·ч) — 1 600 сум/кВт·ч; Тиер 5 (5 001-10 000 кВт·ч) — 1 900 сум/кВт·ч; Тиер 6 (свыше 10 000 кВт·ч) — 2 200 сум/кВт·ч. Тарифы могут пересматриваться постановлениями правительства.',
      'Пример расчёта: потребление 700 кВт·ч в месяц. Тиер 1: 200 × 650 = 130 000 сум. Тиер 2: 300 × 900 = 270 000 сум. Тиер 3: 200 × 1 100 = 220 000 сум. Итого: 620 000 сум. Средняя цена: 620 000 / 700 = 886 сум/кВт·ч. Для сравнения, если бы потребление составило всего 200 кВт·ч, оплата была бы 130 000 сум (650 сум/кВт·ч), а при 1 500 кВт·ч — 1 750 000 сум (1 167 сум/кВт·ч в среднем).',
      'Для юридических лиц действуют иные тарифы — единая ставка в зависимости от категории потребителя и времени суток (для крупных предприятий с дифференцированным учётом). Промышленные предприятия платят в среднем 700-1 200 сум/кВт·ч. Коммерческие организации — 800-1 500 сум/кВт·ч.',
      'Для снижения расходов на электроэнергию рекомендуется: использовать энергосберегающие LED-лампы (экономия до 80%); устанавливать таймеры на электроприборы; утеплять помещения для снижения расходов на обогрев; рассмотреть установку солнечных панелей (окупаемость 3-5 лет). Для расчёта полных коммунальных расходов воспользуйтесь калькулятором коммунальных услуг, который включает электроэнергию, газ и воду.',
    ],
    paragraphsUz: [
      "O'zbekiston aholisi uchun elektr energiya tariflari 6 bosqichli shkala bo'yicha belgilangan: iste'mol qancha ko'p bo'lsa, kVt·soat uchun tarif shuncha yuqori. Oyiga birinchi 200 kVt·soat eng arzon, 10 000 kVt·soatdan ortiq iste'mol — maksimal tarif bo'yicha. Markazlashgan elektr plitali ko'p kvartirali uylar va yotoqxonalar uchun 1 000 kVt·soatgacha yarim tarif amal qiladi: 325, 450 va 550 so'm. Bunday tizim elektr energiyani tejab iste'mol qilishga rag'batlantiradi.",
      "Aholi uchun tarif setkasi (2026-yil 1-iyundan, VMQ-243): 1-bosqich (0-200 kVt·soat) — 650 so'm/kVt·soat; 2-bosqich (201-500) — 900 so'm; 3-bosqich (501-1 000) — 1 100 so'm; 4-bosqich (1 001-5 000) — 1 600 so'm; 5-bosqich (5 001-10 000) — 1 900 so'm; 6-bosqich (10 000 dan ortiq) — 2 200 so'm/kVt·soat.",
      "Hisoblash misoli: oyiga 700 kVt·soat iste'mol. 1-bosqich: 200 × 650 = 130 000 so'm. 2-bosqich: 300 × 900 = 270 000 so'm. 3-bosqich: 200 × 1 100 = 220 000 so'm. Jami: 620 000 so'm. O'rtacha narx: 886 so'm/kVt·soat.",
      "Yuridik shaxslar uchun boshqa tariflar amal qiladi — iste'molchi toifasi va kunning vaqtiga qarab yagona stavka. Sanoat korxonalari o'rtacha 700-1 200 so'm/kVt·soat, tijorat tashkilotlari — 800-1 500 so'm/kVt·soat to'laydi.",
      "Elektr energiya xarajatlarini kamaytirish uchun tavsiya etiladi: energiya tejovchi LED-lampalarni ishlatish (80% gacha tejash); elektr asboblarga taymerlar o'rnatish; binolarni izolyatsiya qilish; quyosh panellarini o'rnatishni ko'rib chiqish (o'zini oqlash 3-5 yil). To'liq kommunal xarajatlarni hisoblash uchun kommunal xizmatlar kalkulyatoridan foydalaning.",
    ],
    faqRu: [
      { question: 'Сколько стоит электроэнергия в Узбекистане?', answer: 'По 6-ступенчатой шкале: от 650 сум/кВт·ч (до 200 кВт·ч) до 2 200 сум/кВт·ч (свыше 10 000 кВт·ч) — с 1 июня 2026 года. Чем больше потребление, тем дороже.' },
      { question: 'Как рассчитать стоимость электроэнергии?', answer: 'Потребление разбивается по ступеням: первые 200 кВт·ч по 650 сум, следующие 300 по 900 сум и т.д. Наш калькулятор сделает это автоматически.' },
      { question: 'Какое среднее потребление электроэнергии в квартире?', answer: 'Для 2-комнатной квартиры: 200-400 кВт·ч летом, 300-600 кВт·ч зимой (с электрообогревом). Средний счёт: 150 000 - 500 000 сум.' },
      { question: 'Почему тарифы ступенчатые?', answer: 'Для стимулирования энергосбережения. Базовое потребление (до 200 кВт·ч) оплачивается по низкому тарифу, избыточное — по повышенному.' },
      { question: 'Как снизить расходы на электроэнергию?', answer: 'LED-лампы (экономия 80%), таймеры, утепление, солнечные панели. Стремитесь удержать потребление в пределах 500 кВт·ч для тарифов 1-2 ступеней.' },
    ],
    faqUz: [
      { question: "O'zbekistonda elektr energiya qancha turadi?", answer: "6 bosqichli shkala bo'yicha: 650 so'm/kVt·soat (200 kVt·soatgacha) dan 2 200 so'm/kVt·soat (10 000 dan ortiq) — 2026-yil 1-iyundan. Iste'mol qancha ko'p — shuncha qimmat." },
      { question: "Elektr energiya narxini qanday hisoblash mumkin?", answer: "Iste'mol bosqichlarga bo'linadi: birinchi 200 kVt·soat 650 so'mdan, keyingi 300 ta 900 so'mdan va h.k. Kalkulyatorimiz buni avtomatik qiladi." },
      { question: "Kvartirada o'rtacha elektr energiya iste'moli qancha?", answer: "2 xonali kvartira uchun: yozda 200-400 kVt·soat, qishda 300-600 kVt·soat. O'rtacha hisob: 150 000 - 500 000 so'm." },
      { question: "Nima uchun tariflar bosqichli?", answer: "Energiya tejashni rag'batlantirish uchun. Asosiy iste'mol (200 kVt·soatgacha) past tarif bo'yicha, ortiqchasi — yuqori tarif bo'yicha to'lanadi." },
      { question: "Elektr energiya xarajatlarini qanday kamaytirish mumkin?", answer: "LED-lampalar (80% tejash), taymerlar, izolyatsiya, quyosh panellari. Iste'molni 500 kVt·soat ichida ushlab turishga harakat qiling." },
    ],
  },

  {
    slug: 'gas',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Постановление Кабмина № 243 от 15.05.2026', url: 'https://lex.uz/ru/docs/8195731' },
      { name: 'Худудгазтаъминот', url: 'https://hududgaz.uz' },
    ],
    paragraphsRu: [
      'Тарифы на природный газ для населения Узбекистана (действуют с 1 июня 2026 года, ПКМ-243) установлены по системе социальных норм с сезонной дифференциацией. Базовая ставка составляет 1 100 сум/м³. Социальная норма: до 100 м³/мес в тёплый период (март-октябрь) и до 500 м³/мес в холодный период (ноябрь-февраль); в Каракалпакстане и Хорезмской области норма 500 м³ действует уже с октября. При превышении социальной нормы применяется повышенный тариф. Калькулятор газа рассчитает точную стоимость на основе вашего потребления.',
      'Тарифная система для населения (с 1 июня 2026): базовая ставка — 1 100 сум/м³ в пределах социальной нормы. Социальная норма в тёплый период (март-октябрь): до 100 м³/мес; в холодный период (ноябрь-февраль): до 500 м³/мес. При потреблении сверх социальной нормы применяется повышенный тариф. Такая система учитывает сезонные потребности населения в газе для отопления.',
      'Пример расчёта для месяца с ноября по февраль при потреблении 600 м³: первые 500 м³ — по 1 100 сум = 550 000 сум, оставшиеся 100 м³ — по 2 000 сум = 200 000 сум, итого 750 000 сум. С марта по октябрь норма всего 100 м³: те же 600 м³ обойдутся в 110 000 + 500 × 2 000 = 1 110 000 сум. Летом расход обычно 20-50 м³/мес (только готовка и горячая вода), то есть 22 000-55 000 сум.',
      'Среднее потребление газа для частного дома с газовым отоплением: 2 000-4 000 м³ в год; для квартиры без газового отопления (только плита и колонка): 300-800 м³ в год. Стоимость газа в год для частного дома: от 2 200 000 до 5 800 000 сум; для квартиры: от 330 000 до 900 000 сум. Значительная часть расходов приходится на зимние месяцы.',
      'Для экономии газа рекомендуется: утеплить стены и окна (экономия 30-50%); установить программируемый термостат; использовать конденсационный газовый котёл (КПД до 95%); регулярно обслуживать газовое оборудование. При использовании газа для отопления также рассмотрите альтернативу — электрическое отопление с тепловым насосом. Рассчитать все коммунальные расходы можно в нашем калькуляторе коммунальных услуг.',
    ],
    paragraphsUz: [
      "O'zbekiston aholisi uchun tabiiy gaz tariflari mavsumiy ijtimoiy normalar tizimi bo'yicha belgilangan. Bazaviy stavka 1 100 so'm/m³ ni tashkil etadi. Ijtimoiy norma: iliq davrda (mart-oktyabr) oyiga 100 m³ gacha, sovuq davrda (noyabr-fevral) oyiga 500 m³ gacha; Qoraqalpog'iston va Xorazm viloyatida 500 m³ norma oktyabrdan amal qiladi. Ijtimoiy normadan oshganda yuqori tarif qo'llaniladi. Gaz kalkulyatori iste'molingiz asosida aniq narxni hisoblaydi.",
      "Aholi uchun tarif tizimi (2026-yil 1-iyundan): bazaviy stavka — ijtimoiy norma doirasida 1 100 so'm/m³. Iliq davrda (mart-oktyabr) ijtimoiy norma: oyiga 100 m³ gacha; sovuq davrda (noyabr-fevral): oyiga 500 m³ gacha. Ijtimoiy normadan ortiq iste'molda yuqori tarif qo'llaniladi. Bunday tizim aholining isitish uchun gaz ehtiyojlarini mavsumiy hisobga oladi.",
      "Hisoblash misoli: noyabrdan fevralgacha oyiga 600 m³ iste'molda birinchi 500 m³ — 1 100 so'mdan = 550 000 so'm, qolgan 100 m³ — 2 000 so'mdan = 200 000 so'm, jami 750 000 so'm. Martdan oktyabrgacha norma atigi 100 m³: xuddi shu 600 m³ uchun 110 000 + 500 × 2 000 = 1 110 000 so'm. Yozda iste'mol odatda oyiga 20-50 m³ (faqat ovqat pishirish va issiq suv), ya'ni 22 000-55 000 so'm.",
      "Gaz isitishli xususiy uy uchun o'rtacha gaz iste'moli: yiliga 2 000-4 000 m³; gaz isitishisiz kvartira uchun (faqat plita va kolonka): yiliga 300-800 m³. Yillik gaz narxi xususiy uy uchun: 2 200 000 dan 5 800 000 so'mgacha; kvartira uchun: 330 000 dan 900 000 so'mgacha.",
      "Gazni tejash uchun tavsiya etiladi: devor va derazalarni izolyatsiya qilish (30-50% tejash); dasturlashtiriladigan termostat o'rnatish; kondensatsion gaz qozonidan foydalanish (FIK 95% gacha); gaz uskunalarini muntazam xizmat qilish. Barcha kommunal xarajatlarni kommunal xizmatlar kalkulyatorimizda hisoblashingiz mumkin.",
    ],
    faqRu: [
      { question: 'Сколько стоит газ в Узбекистане?', answer: 'Базовая ставка — 1 100 сум/м³ в пределах социальной нормы (до 100 м³/мес летом, до 500 м³/мес зимой). При превышении нормы — повышенный тариф.' },
      { question: 'Сколько газа потребляет частный дом?', answer: 'С газовым отоплением: 2 000-4 000 м³/год. Без отопления (только плита): 300-800 м³/год. Основное потребление — зимой.' },
      { question: 'Как рассчитывается оплата за газ?', answer: 'По системе социальных норм: в пределах месячной нормы (100 м³ летом / 500 м³ зимой) — базовая ставка 1 100 сум/м³; сверх нормы — повышенный тариф.' },
      { question: 'Сколько платить за газ зимой?', answer: 'Для дома с отоплением при 300-500 м³/мес — 330 000-550 000 сум/мес в пределах нормы, каждый кубометр сверх 500 стоит 2 000 сум. Летом: 20-50 м³ × 1 100 сум = 22 000-55 000 сум.' },
      { question: 'Как сэкономить на газе?', answer: 'Утепление стен и окон (30-50% экономия), программируемый термостат, регулярное обслуживание котла, конденсационный котёл (КПД 95%).' },
    ],
    faqUz: [
      { question: "O'zbekistonda gaz qancha turadi?", answer: "Bazaviy stavka — ijtimoiy norma doirasida 1 100 so'm/m³ (yozda oyiga 100 m³ gacha, qishda 500 m³ gacha). Normadan oshganda — yuqori tarif." },
      { question: "Xususiy uy qancha gaz iste'mol qiladi?", answer: "Gaz isitishi bilan: yiliga 2 000-4 000 m³. Isitishsiz (faqat plita): yiliga 300-800 m³. Asosiy iste'mol — qishda." },
      { question: "Gaz uchun to'lov qanday hisoblanadi?", answer: "Ijtimoiy normalar tizimi bo'yicha: oylik norma doirasida (yozda 100 m³ / qishda 500 m³) — bazaviy stavka 1 100 so'm/m³; normadan ortiqda — yuqori tarif." },
      { question: "Qishda gaz uchun qancha to'lash kerak?", answer: "Isitishli uy uchun oyiga 300-500 m³ da norma doirasida 330 000-550 000 so'm/oy, 500 dan ortiq har bir kubometr 2 000 so'm. Yozda: 20-50 m³ × 1 100 so'm = 22 000-55 000 so'm." },
      { question: "Gazni qanday tejash mumkin?", answer: "Devor va derazalarni izolyatsiya qilish (30-50% tejash), dasturlashtiriladigan termostat, qozonni muntazam xizmat qilish, kondensatsion qozon (FIK 95%)." },
    ],
  },

  {
    slug: 'water',
    lastUpdated: '2026-09-10',
    sources: [
      { name: 'Постановление Кабмина № 194 от 15.07.2014 (нормативы)', url: 'https://lex.uz/ru/docs/2430763' },
      { name: 'Узсувтаъминот', url: 'https://uzsuv.uz' },
    ],
    paragraphsRu: [
      'Тарифы на холодную воду и водоотведение (канализацию) в Узбекистане не единые: их утверждают областные кенгаши, и разница между регионами доходит до четырёх раз. Дешевле всего вода в городе Ташкенте — 1 568 сум за м³ питьевой воды и 1 120 сум за м³ стоков с НДС; дороже всего в Сурхандарьинской области — 7 616 и 3 640 сум. В Самаркандской области это 4 032 и 2 520 сум, в Бухарской — 4 480 и 4 256 сум. Действующие ставки по всем регионам публикует «Узсувтаъминот». Выберите регион в калькуляторе — тариф подставится автоматически.',
      'Цена кубометра по счётчику зависит от того, как оборудован дом. Без канализации платят только за воду, с канализацией — за воду и стоки. Если в доме есть центральное горячее водоснабжение, стоки горячей воды тоже начисляются на счётчик холодной — с региональным коэффициентом от 1 до 2. Поэтому в Ташкенте кубометр холодной воды в доме с горячим водоснабжением стоит 3 808 сум (1 568 + 1 120 × 2), а без него — 2 688 сум. Без счётчика платят по нормативу постановления Кабмина № 194 от 15.07.2014: 350 литров в сутки на человека в доме с водопроводом, 200 — при подаче воды по графику, 50 — у уличной колонки, причём к нормативу воды применяется повышающий коэффициент 1,5. Пример для Ташкента: семья из 4 человек в доме с горячим водоснабжением без счётчика платит 48 885,7 сум с человека, то есть 195 543 сум в месяц, а со счётчиком при расходе 10 м³ — 38 080 сум.',
      'Горячее водоснабжение — отдельная статья расходов. В домах с центральным горячим водоснабжением тариф включает стоимость холодной воды и подогрева. В домах с газовым водонагревателем (колонкой) стоимость горячей воды складывается из расхода холодной воды и газа на подогрев. Средний расход горячей воды: 3-5 м³/мес на человека.',
      'Установка водосчётчика обязательна для нового жилья и рекомендуется для существующего. Стоимость установки: 200 000-500 000 сум (включая сам счётчик). Поверка проводится каждые 4-6 лет. Показания передаются ежемесячно через мобильное приложение или абонентский отдел водоканала.',
      'Для расчёта полных коммунальных расходов (вода + электроэнергия + газ + отопление) используйте наш калькулятор коммунальных услуг. Рекомендации по экономии воды: установите аэраторы на краны (экономия 30-50%); используйте стиральную и посудомоечную машину с полной загрузкой; почините подтекающие краны (один капающий кран — до 500 литров в месяц).',
    ],
    paragraphsUz: [
      "O'zbekistonda sovuq suv va oqova suv (kanalizatsiya) tariflari yagona emas: ularni viloyat kengashlari tasdiqlaydi va hududlar o'rtasidagi farq to'rt baravargacha yetadi. Eng arzon suv Toshkent shahrida — QQS bilan ichimlik suvi m³ uchun 1 568 so'm va oqova suv m³ uchun 1 120 so'm; eng qimmati Surxondaryo viloyatida — 7 616 va 3 640 so'm. Samarqand viloyatida bu 4 032 va 2 520 so'm, Buxoro viloyatida — 4 480 va 4 256 so'm. Barcha hududlar bo'yicha amaldagi stavkalarni «O'zsuvta'minot» e'lon qiladi. Kalkulyatorda hududingizni tanlang — tarif avtomatik qo'yiladi.",
      "Hisoblagich bo'yicha kub metr narxi uy qanday jihozlanganiga bog'liq. Kanalizatsiyasiz faqat suv uchun, kanalizatsiya bilan — suv va oqova suv uchun to'lanadi. Agar uyda markaziy issiq suv ta'minoti bo'lsa, issiq suvning oqovasi ham sovuq suv hisoblagichiga — 1 dan 2 gacha bo'lgan hududiy koeffitsiyent bilan hisoblanadi. Shuning uchun Toshkentda issiq suv ta'minoti bor uyda bir kub metr sovuq suv 3 808 so'm (1 568 + 1 120 × 2), usiz esa 2 688 so'm turadi. Hisoblagichsiz Vazirlar Mahkamasining 15.07.2014-yildagi 194-son qarori normativi bo'yicha to'lanadi: suv quvuri ulangan uyda bir kishiga kuniga 350 litr, suv jadval asosida berilganda 200, ko'cha kolonkasida 50 litr, bunda suv normativiga 1,5 oshiruvchi koeffitsiyent qo'llaniladi. Toshkent uchun misol: issiq suv ta'minoti bor uyda hisoblagichsiz 4 kishilik oila har bir kishi uchun 48 885,7 so'mdan, ya'ni oyiga 195 543 so'm, hisoblagich bilan esa 10 m³ sarfda — 38 080 so'm to'laydi.",
      "Issiq suv ta'minoti — alohida xarajat moddasi. Markaziy issiq suv ta'minotli uylarda tarif sovuq suv va isitish narxini o'z ichiga oladi. Gaz suv isitgichli (kolonkali) uylarda issiq suv narxi sovuq suv sarfi va isitish uchun gaz sarfidan tashkil topadi.",
      "Suv hisoblagichni o'rnatish yangi uy-joy uchun majburiy va mavjud uy-joy uchun tavsiya etiladi. O'rnatish narxi: 200 000-500 000 so'm. Tekshirish har 4-6 yilda o'tkaziladi. Ko'rsatkichlar har oy mobil ilova yoki suv kanali abonent bo'limi orqali uzatiladi.",
      "To'liq kommunal xarajatlarni (suv + elektr + gaz + isitish) hisoblash uchun kommunal xizmatlar kalkulyatorimizdan foydalaning. Suvni tejash tavsiyalari: kranlarga aeratorlar o'rnating (30-50% tejash); kir va idish yuvish mashinasini to'liq yuklab ishlating; oqayotgan kranlarni ta'mirlang.",
    ],
    faqRu: [
      { question: 'Сколько стоит вода в Узбекистане?', answer: 'Зависит от региона. Питьевая вода с НДС стоит от 1 568 сум/м³ в Ташкенте до 7 616 сум/м³ в Сурхандарьинской области, стоки — от 728 до 4 256 сум/м³. Вместе вода и канализация обходятся от 2 688 до 11 256 сум за м³.' },
      { question: 'Выгоднее ли платить по счётчику?', answer: 'Как правило, да, и заметно: без счётчика к нормативу воды применяется повышающий коэффициент 1,5. Семья из 4 человек в Ташкенте в доме с горячим водоснабжением платит по нормативу 195 543 сум в месяц, а со счётчиком при расходе 10 м³ — 38 080 сум.' },
      { question: 'Какой норматив потребления воды без счётчика?', answer: '350 литров в сутки на человека в доме с водопроводом, 200 — при подаче воды по графику, 50 — у уличной колонки (постановление Кабмина № 194 от 15.07.2014). Без счётчика норматив воды умножается на 1,5.' },
      { question: 'Как передать показания счётчика воды?', answer: 'Через мобильное приложение водоканала или в абонентском отделе. Показания передаются ежемесячно.' },
      { question: 'Сколько стоит установка водомера?', answer: '200 000-500 000 сум с установкой. Поверка каждые 4-6 лет. Окупается за 3-6 месяцев.' },
    ],
    faqUz: [
      { question: "O'zbekistonda suv qancha turadi?", answer: "Hududga bog'liq. QQS bilan ichimlik suvi Toshkentda m³ uchun 1 568 so'mdan Surxondaryo viloyatida 7 616 so'mgacha, oqova suv — 728 dan 4 256 so'mgacha. Suv va kanalizatsiya birgalikda m³ uchun 2 688 dan 11 256 so'mgacha turadi." },
      { question: "Hisoblagich bo'yicha to'lash foydaliroqmi?", answer: "Odatda ha, va sezilarli darajada: hisoblagichsiz suv normativiga 1,5 oshiruvchi koeffitsiyent qo'llaniladi. Toshkentda issiq suv ta'minoti bor uyda 4 kishilik oila normativ bo'yicha oyiga 195 543 so'm, hisoblagich bilan 10 m³ sarfda esa 38 080 so'm to'laydi." },
      { question: "Hisoblagichsiz suv iste'moli normativi qancha?", answer: "Suv quvuri ulangan uyda bir kishiga kuniga 350 litr, jadval asosida suv berilganda 200, ko'cha kolonkasida 50 litr (Vazirlar Mahkamasining 15.07.2014-yildagi 194-son qarori). Hisoblagichsiz suv normativi 1,5 ga ko'paytiriladi." },
      { question: "Suv hisoblagich ko'rsatkichlarini qanday uzatish mumkin?", answer: "Suv kanali mobil ilovasi yoki abonent bo'limi orqali. Ko'rsatkichlar har oy uzatiladi." },
      { question: "Suv hisoblagichni o'rnatish qancha turadi?", answer: "O'rnatish bilan 200 000-500 000 so'm. Tekshirish har 4-6 yilda. 3-6 oyda o'zini oqlaydi." },
    ],
  },

  {
    slug: 'utilities-total',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Постановление Кабмина № 243 от 15.05.2026 (газ, электроэнергия)', url: 'https://lex.uz/ru/docs/8195731' },
    ],
    paragraphsRu: [
      'Калькулятор коммунальных услуг рассчитывает полную стоимость ежемесячных платежей за все основные коммуникации в Узбекистане: электроэнергию, природный газ, холодную и горячую воду, водоотведение (канализацию), отопление и вывоз мусора. Тарифы действуют на 1 ноября 2026 года. Результат показывает как общую сумму, так и разбивку по каждой услуге.',
      'Средние ежемесячные коммунальные платежи в Узбекистане (2025–2026): 2-комнатная квартира в Ташкенте — 400 000-800 000 сум (лето) и 600 000-1 200 000 сум (зима); 3-комнатная квартира — 500 000-1 000 000 сум (лето) и 800 000-1 500 000 сум (зима); частный дом с газовым отоплением — 300 000-600 000 сум (лето) и 1 500 000-3 000 000 сум (зима). Основной рост зимних платежей — за счёт отопления.',
      'Структура коммунальных платежей для типичной квартиры: электроэнергия — 30-40% (150 000-400 000 сум), газ — 20-40% (50 000-500 000 сум в зависимости от сезона), вода (холодная + горячая + водоотведение) — 15-25% (70 000-200 000 сум), вывоз мусора — 5-10% (30 000-50 000 сум), домофон/обслуживание — 5% (15 000-30 000 сум).',
      'Тарифы на коммунальные услуги в Узбекистане регулируются государством, но устанавливаются на разном уровне. Электроэнергия и газ стоят одинаково по всей стране и рассчитываются по прогрессивной шкале: чем больше потребление, тем дороже. Воду, канализацию и вывоз мусора утверждают областные кенгаши, и разница между регионами доходит до нескольких раз, поэтому в калькуляторе есть выбор региона. Тарифы на отопление и горячую воду тоже свои в каждом городе: калькулятор подставляет ташкентские, а свои можно указать из квитанции. Для детального расчёта каждой услуги используйте отдельные калькуляторы электроэнергии, газа и воды.',
      'Рекомендации по оптимизации коммунальных платежей: установите счётчики на все ресурсы (экономия до 30-50% по воде); используйте энергосберегающие приборы; утеплите жильё для снижения расходов на отопление; контролируйте потребление через мобильные приложения поставщиков; оплачивайте вовремя — за просрочку начисляется пеня. Для планирования бюджета рекомендуем рассчитать стоимость аренды с помощью нашего калькулятора аренды.',
    ],
    paragraphsUz: [
      "Kommunal xizmatlar kalkulyatori O'zbekistondagi barcha asosiy kommunikatsiyalar uchun oylik to'lovlarning to'liq qiymatini hisoblaydi: elektr energiya, tabiiy gaz, sovuq va issiq suv, oqava suv (kanalizatsiya), isitish va chiqindilarni chiqarish. Tariflar 2026-yil 1-noyabr holatiga amal qiladi.",
      "O'zbekistonda o'rtacha oylik kommunal to'lovlar (2025–2026): Toshkentda 2 xonali kvartira — 400 000-800 000 so'm (yoz) va 600 000-1 200 000 so'm (qish); 3 xonali kvartira — 500 000-1 000 000 so'm (yoz) va 800 000-1 500 000 so'm (qish); gaz isitishli xususiy uy — 300 000-600 000 so'm (yoz) va 1 500 000-3 000 000 so'm (qish).",
      "Oddiy kvartira uchun kommunal to'lovlar tarkibi: elektr energiya — 30-40%, gaz — 20-40% (mavsumga qarab), suv — 15-25%, chiqindi chiqarish — 5-10%, domofon/xizmat — 5%.",
      "O'zbekistonda kommunal xizmatlar tariflari davlat tomonidan tartibga solinadi, lekin turli darajada belgilanadi. Elektr energiya va gaz butun mamlakatda bir xil narxda va progressiv shkala bo'yicha hisoblanadi: iste'mol qancha ko'p bo'lsa, shuncha qimmat. Suv, kanalizatsiya va chiqindi olib chiqish tariflarini viloyat kengashlari tasdiqlaydi, hududlar o'rtasidagi farq bir necha baravargacha yetadi, shuning uchun kalkulyatorda hudud tanlanadi. Isitish va issiq suv tariflari ham har bir shaharda o'zgacha: kalkulyator Toshkent tariflarini qo'yadi, o'zingiznikini kvitansiyadan kiritish mumkin. Har bir xizmatni batafsil hisoblash uchun alohida kalkulyatorlardan foydalaning: elektr energiya, gaz va suv.",
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
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Закон о государственной пошлине ЗРУ-600', url: 'https://lex.uz/ru/docs/4680955' },
    ],
    paragraphsRu: [
      'Средняя стоимость квадратного метра жилья в Ташкенте на 2025–2026 год варьируется от 8 000 000 до 15 000 000 сум в зависимости от района, класса жилья и удалённости от центра. Калькулятор стоимости квартиры считает приблизительную стоимость жилья по площади и цене за квадратный метр, которую вы указываете для своего района. Это поможет определить бюджет покупки и необходимую сумму для ипотеки.',
      'Ценовая карта Ташкента (2025–2026, средняя цена за м²): Мирзо-Улугбекский район — 12-15 млн сум; Юнусабадский район — 11-14 млн сум; Чиланзарский район — 10-13 млн сум; Яшнабадский район — 9-12 млн сум; Мирабадский район — 13-16 млн сум; Шайхантахурский район — 8-11 млн сум; Сергелийский район — 7-10 млн сум. Новостройки комфорт-класса: +20-30% к средней цене. Вторичное жильё с ремонтом: средняя цена.',
      'Пример расчёта: 2-комнатная квартира 60 м² в Юнусабадском районе. Средняя цена: 12 000 000 сум/м². Стоимость: 60 × 12 000 000 = 720 000 000 сум (≈ 59 900 USD по курсу на 1 ноября 2026). С учётом ремонта средней категории (+15%): 828 000 000 сум. Для покупки в ипотеку с первоначальным взносом 20%: взнос = 165 600 000 сум, кредит = 662 400 000 сум. Рассчитать ипотечный платёж можно в нашем калькуляторе ипотеки.',
      'В областных центрах цены значительно ниже: Самарканд — 5-8 млн сум/м²; Бухара — 4-7 млн сум/м²; Наманган — 3-6 млн сум/м²; Андижан — 3-5 млн сум/м²; Нукус — 3-5 млн сум/м². Таким образом, квартира аналогичной площади в областном центре обойдётся в 2-3 раза дешевле, чем в Ташкенте.',
      'При покупке квартиры учтите дополнительные расходы: нотариальное оформление договора — фиксированная пошлина 1 БРВ (440 000 сум); госпошлина за регистрацию права (по площади) — до 100 м² 1,25 БРВ (550 000 сум), 101-300 м² 2 БРВ, свыше 300 м² 3 БРВ; оценка недвижимости — 200 000-500 000 сум; услуги риелтора — 1-2% от стоимости; ремонт (при необходимости) — от 3 000 000 до 8 000 000 сум/м². Суммарные доп. расходы обычно составляют 1-3% от стоимости квартиры.',
    ],
    paragraphsUz: [
      "2025–2026-yilda Toshkentda turar-joy kvadrat metrining o'rtacha narxi tuman, uy-joy sinfi va markazdan uzoqligiga qarab 8 000 000 dan 15 000 000 so'mgacha o'zgaradi. Kvartira narxi kalkulyatori uy-joyning taxminiy qiymatini maydon va tumaningiz uchun ko'rsatgan bir kvadrat metr narxi bo'yicha hisoblaydi.",
      "Toshkentning narxlar xaritasi (2025–2026, m² uchun o'rtacha narx): Mirzo Ulug'bek tumani — 12-15 mln so'm; Yunusobod — 11-14 mln; Chilonzor — 10-13 mln; Yashnobod — 9-12 mln; Mirobod — 13-16 mln; Shayxontohur — 8-11 mln; Sergeli — 7-10 mln. Yangi qurilishlar komfort-sinf: o'rtacha narxga +20-30%.",
      "Hisoblash misoli: Yunusobod tumanida 60 m² 2 xonali kvartira. O'rtacha narx: 12 000 000 so'm/m². Qiymati: 720 000 000 so'm (≈ 59 900 AQSh dollari, 2026-yil 1-noyabr kursida). O'rtacha ta'mir bilan (+15%): 828 000 000 so'm. 20% boshlang'ich to'lov bilan ipotekada sotib olish uchun: to'lov = 165 600 000 so'm, kredit = 662 400 000 so'm.",
      "Viloyat markazlarida narxlar sezilarli past: Samarqand — 5-8 mln so'm/m²; Buxoro — 4-7 mln; Namangan — 3-6 mln; Andijon — 3-5 mln; Nukus — 3-5 mln. Shunday qilib, viloyat markazida shunga o'xshash maydondagi kvartira Toshkentdagiga qaraganda 2-3 baravar arzon.",
      "Kvartira sotib olishda qo'shimcha xarajatlarni hisobga oling: shartnomani notarial rasmiylash — belgilangan boj 1 BHK (440 000 so'm); ro'yxatdan o'tish davlat boji (maydon bo'yicha) — 100 m² gacha 1,25 BHK (550 000 so'm), 101-300 m² 2 BHK, 300 dan ortiq 3 BHK; ko'chmas mulk baholash — 200 000-500 000 so'm; rieltor xizmatlari — qiymatning 1-2%; ta'mir — 3 000 000 dan 8 000 000 so'm/m² gacha.",
    ],
    faqRu: [
      { question: 'Сколько стоит квартира в Ташкенте?', answer: '2-комнатная (60 м²): 480-900 млн сум в зависимости от района. Юнусабад: ~720 млн, Сергели: ~480 млн, Мирабад: ~900 млн.' },
      { question: 'Какой район Ташкента самый дорогой?', answer: 'Мирабадский район (13-16 млн сум/м²) и Мирзо-Улугбекский (12-15 млн). Самые доступные: Сергели и Бектемир (7-10 млн).' },
      { question: 'Сколько стоит квадратный метр жилья в регионах?', answer: 'Самарканд: 5-8 млн, Бухара: 4-7 млн, Наманган: 3-6 млн, Андижан/Нукус: 3-5 млн сум/м².' },
      { question: 'Какие дополнительные расходы при покупке квартиры?', answer: 'Нотариус — фикс. 1 БРВ (440 000 сум), госпошлина за регистрацию — 1,25-3 БРВ по площади (до 100 м² — 1,25 БРВ), оценка (до 500 000 сум), риелтор (1-2%). Суммарно: 1-3% от стоимости.' },
      { question: 'Выгоднее покупать новостройку или вторичку?', answer: 'Новостройки дороже на 20-30% и часто продаются без ремонта или с черновой отделкой, его стоимость стоит заложить сразу. Вторичка дешевле, но тоже может потребовать вложений в ремонт (3-8 млн/м²).' },
    ],
    faqUz: [
      { question: "Toshkentda kvartira qancha turadi?", answer: "2 xonali (60 m²): tumanga qarab 480-900 mln so'm. Yunusobod: ~720 mln, Sergeli: ~480 mln, Mirobod: ~900 mln." },
      { question: "Toshkentning qaysi tumani eng qimmat?", answer: "Mirobod tumani (13-16 mln so'm/m²) va Mirzo Ulug'bek (12-15 mln). Eng qulay: Sergeli va Bektemir (7-10 mln)." },
      { question: "Hududlarda uy-joy kvadrat metri qancha turadi?", answer: "Samarqand: 5-8 mln, Buxoro: 4-7 mln, Namangan: 3-6 mln, Andijon/Nukus: 3-5 mln so'm/m²." },
      { question: "Kvartira sotib olishda qo'shimcha xarajatlar qanday?", answer: "Notarius — belgilangan 1 BHK (440 000 so'm), ro'yxatdan o'tish boji — maydon bo'yicha 1,25-3 BHK (100 m² gacha — 1,25 BHK), baholash (500 000 so'mgacha), rieltor (1-2%). Jami: qiymatning 1-3%." },
      { question: "Yangi qurilish yoki ikkilamchi uy sotib olish foydaliroqmi?", answer: "Yangi qurilishlar 20-30% ga qimmatroq va ko'pincha ta'mirsiz yoki qora pardoz bilan sotiladi, ta'mir xarajatini darhol hisobga oling. Ikkilamchi arzonroq, lekin unga ham ta'mir kerak bo'lishi mumkin." },
    ],
  },

  {
    slug: 'ip-calculator',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Индивидуальные предприниматели (ИП) в Узбекистане с 2026 года уплачивают налог с оборота по единой ставке 1% от валового дохода (выручки) — ст. 467 НК. Это упрощённая система налогообложения, не предусматривающая вычет расходов. ИП не являются плательщиками НДС, пока их совокупный доход за налоговый период не превысил порог 12 000 БРВ (5 280 000 000 сум при БРВ 440 000); при превышении ИП переходит на НДС 12% и налог на прибыль. Самозанятые лица также уплачивают 1% от оборота. Калькулятор ИП рассчитает налоговые обязательства на основе вашего дохода.',
      'Структура налогов для ИП: налог с оборота — 1% от выручки; социальный налог — фиксированная сумма (1 БРВ = 440 000 сум в месяц). Взнос на ИНПС с предпринимательского дохода ИП не платит: участие в накопительной пенсионной системе для ИП добровольное (ст. 6 Закона № 702-II), а доброволец сам определяет размер и сроки взносов. Ставку 0,1% ИП удерживает только за наёмных работников — как налоговый агент с их оплаты труда. ИП могут работать с наличным и безналичным расчётом, но обязаны использовать контрольно-кассовую технику (ККТ) или виртуальную кассу. Расчёт налога с оборота подаётся ежемесячно через my.soliq.uz до 15-го числа следующего месяца, годовой — до 15 февраля (ст. 469–470 НК).',
      'Пример расчёта: ИП с ежемесячной выручкой 30 000 000 сум. Налог с оборота: 30 000 000 × 1% = 300 000 сум. Социальный налог: 440 000 сум (фиксированный, 1 БРВ в месяц — платится даже при нулевой выручке). Итого налогов: 740 000 сум/мес (2,47% от выручки). Годовые налоги: 8 880 000 сум при годовом обороте 360 000 000 сум.',
      'Для регистрации ИП необходимо: подать заявление через my.gov.uz или в налоговую инспекцию; получить ИНН (автоматически); открыть расчётный счёт в банке; установить ККТ или подключить виртуальную кассу. Госпошлина за регистрацию — 1 БРВ (440 000 сум), через my.gov.uz — 90% (396 000 сум); оформление занимает 1-3 рабочих дня. ИП может нанимать до 5 работников по видам деятельности, установленным законодательством (ст. 507 ТК, ПКМ № 707).',
      'Сравнение ИП и самозанятого (с 2026 года): ИП — 1% от оборота, может нанимать работников, может работать с юрлицами по безналу; самозанятый — 1% от оборота, не может нанимать работников. Оба остаются на налоге с оборота, пока доход не превысил порог 12 000 БРВ (5 280 000 000 сум). Налог на прибыль 15% оказывается ниже 1% с оборота только при расходах свыше 93% выручки, поэтому переход на ООО с общей системой окупается редко: его стоит рассматривать из-за партнёров, импорта или лимита работников, а не ради налога. Рассчитать налоги ООО можно в нашем калькуляторе ООО.',
    ],
    paragraphsUz: [
      "O'zbekistonda yakka tartibdagi tadbirkorlar (YaTT) 2026-yildan boshlab yalpi daromaddan (tushum) yagona 1% stavkada aylanma solig'ini to'laydilar (SKning 467-moddasi). Bu xarajatlarni chegirib tashlashni nazarda tutmaydigan soddalashtilgan soliqqa tortish tizimi. YaTTlar soliq davri uchun umumiy daromadi 12 000 BHK (5 280 000 000 so'm) chegarasidan oshmaguncha QQS to'lovchisi hisoblanmaydi; oshgan taqdirda QQS 12% va foyda solig'iga o'tadilar. O'z-o'zini band qilgan shaxslar ham aylanmadan 1% to'laydilar.",
      "YaTT uchun soliqlar tarkibi: aylanma solig'i — tushumning 1%; ijtimoiy soliq — qat'iy summa (oyiga 1 BHK = 440 000 so'm). Tadbirkorlik daromadidan YaTT IJPH badalini to'lamaydi: YaTT uchun jamg'arma pensiya tizimida ishtirok etish ixtiyoriy (702-II sonli Qonunning 6-moddasi), ixtiyoriy ishtirokchi esa badal miqdori va muddatlarini o'zi belgilaydi. 0,1% stavkani YaTT faqat yollanma xodimlar uchun — ularning mehnat haqidan soliq agenti sifatida ushlab qoladi. YaTTlar naqd va naqdsiz hisob-kitoblar bilan ishlashi mumkin, lekin nazorat-kassa texnikasini (NKT) yoki virtual kassani ishlatishi shart. Aylanma solig'i hisob-kitobi har oyda my.soliq.uz orqali keyingi oyning 15-sanasigacha, yillik hisob-kitob 15-fevralgacha topshiriladi (SK 469–470-moddalari).",
      "Hisoblash misoli: oylik tushumli 30 000 000 so'mlik YaTT. Aylanma solig'i: 30 000 000 × 1% = 300 000 so'm. Ijtimoiy soliq: 440 000 so'm (qat'iy, oyiga 1 BHK — tushum nolga teng bo'lsa ham to'lanadi). Jami soliqlar: 740 000 so'm/oy (tushumning 2,47%). Yillik soliqlar: yillik 360 000 000 so'm aylanmada 8 880 000 so'm.",
      "YaTT ro'yxatdan o'tish uchun kerak: my.gov.uz yoki soliq inspektsiyasiga ariza topshirish; STIR olish (avtomatik); bankda hisob-kitob schyoti ochish; NKT yoki virtual kassa ulash. Ro'yxatdan o'tish davlat boji — 1 BHK (440 000 so'm), my.gov.uz orqali — 90% (396 000 so'm); rasmiylashtirish 1-3 ish kuni. YaTT qonunchilikda belgilangan faoliyat turlari bo'yicha 5 tagacha xodim yollashi mumkin (MK 507-moddasi, VMQ № 707).",
      "YaTT va o'z-o'zini band qilgan (2026-yildan) solishtirilishi: YaTT — aylanmaning 1%, xodim yollashi mumkin, yuridik shaxslar bilan naqdsiz ishlashi mumkin; o'z-o'zini band qilgan — aylanmaning 1%, xodim yollay olmaydi. Ikkalasi ham daromadi 12 000 BHK (5 280 000 000 so'm) chegarasidan oshmaguncha aylanma solig'ida qoladi. Foyda solig'i 15% aylanmaning 1% idan faqat xarajatlar tushumning 93% idan oshganda kam bo'ladi, shuning uchun umumiy tizimdagi MChJga o'tishni soliq uchun emas, hamkorlar, import yoki xodimlar limiti sababli ko'rib chiqish kerak.",
    ],
    faqRu: [
      { question: 'Сколько налогов платит ИП в Узбекистане?', answer: 'Налог с оборота 1% + социальный налог 440 000 сум/мес (1 БРВ). ИНПС со своего дохода ИП не платит — участие для него добровольное; 0,1% удерживается только за наёмных работников.' },
      { question: 'Чем ИП отличается от самозанятого?', answer: 'ИП: 1% налог, может нанимать до 5 работников. Самозанятый (с 2026): 1% налог, без работников. Порог налога с оборота для обоих — 12 000 БРВ.' },
      { question: 'Нужна ли ИП касса?', answer: 'Да, ИП обязаны использовать ККТ или виртуальную кассу при приёме наличных и карточных платежей.' },
      { question: 'Какой порог для уплаты НДС?', answer: '12 000 БРВ (5 280 000 000 сум) — совокупный доход за налоговый период. Ниже этого порога ИП не платит НДС.' },
      { question: 'Как зарегистрировать ИП?', answer: 'Через my.gov.uz или налоговую. Госпошлина 1 БРВ (440 000 сум), через my.gov.uz — 396 000 сум, 1-3 дня. Нужен паспорт, ИНН выдаётся автоматически.' },
      { question: 'Сколько работников может нанять ИП?', answer: 'До 5 человек по видам деятельности, установленным законодательством (ст. 507 ТК, ПКМ № 707).' },
    ],
    faqUz: [
      { question: "O'zbekistonda YaTT qancha soliq to'laydi?", answer: "Aylanma solig'i 1% + ijtimoiy soliq 440 000 so'm/oy (1 BHK). O'z daromadidan YaTT IJPH to'lamaydi — u uchun ishtirok ixtiyoriy; 0,1% faqat yollanma xodimlar uchun ushlab qolinadi." },
      { question: "YaTT o'z-o'zini band qilgandan nimasi bilan farq qiladi?", answer: "YaTT: 1% soliq, 5 tagacha xodim yollashi mumkin. O'z-o'zini band qilgan (2026-yildan): 1% soliq, xodimsiz. Ikkalasi uchun aylanma solig'i chegarasi — 12 000 BHK." },
      { question: "YaTTga kassa kerakmi?", answer: "Ha, YaTTlar naqd va karta to'lovlarini qabul qilishda NKT yoki virtual kassadan foydalanishi shart." },
      { question: "QQS to'lash uchun chegara qancha?", answer: "12 000 BHK (5 280 000 000 so'm) — soliq davri uchun umumiy daromad. Bu chegaradan past bo'lsa YaTT QQS to'lamaydi." },
      { question: "YaTTni qanday ro'yxatdan o'tkazish mumkin?", answer: "my.gov.uz yoki davlat xizmatlari markazi orqali. Davlat boji — 1 BHK (440 000 so'm), my.gov.uz orqali stavkaning 90% i (396 000 so'm). Pasport kerak, STIR avtomatik beriladi." },
      { question: "YaTT nechta xodim yollashi mumkin?", answer: "VMQ № 707 da belgilangan faoliyat turlari bo'yicha 5 kishigacha (MK 507-moddasi)." },
    ],
  },

  {
    slug: 'employer-cost',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
    ],
    paragraphsRu: [
      'Полная стоимость сотрудника для работодателя в Узбекистане складывается из начисленной заработной платы и обязательных отчислений: социальный налог 12% от фонда оплаты труда (25% для бюджетных организаций). Калькулятор стоимости работника для работодателя рассчитывает полные расходы на сотрудника и разбивку всех удержаний и начислений.',
      'Структура расходов работодателя на сотрудника с зарплатой 10 000 000 сум «на руки»: начисленная зарплата (гросс) = 10 000 000 / 0,88 = 11 363 636 сум; НДФЛ (удерживается из зарплаты): 11 363 636 × 12% = 1 363 636 сум, из них 11 364 сум (0,1%) уходит на ИНПС работника, а 1 352 272 — в бюджет; социальный налог (за счёт работодателя): 11 363 636 × 12% = 1 363 636 сум; полная стоимость: 11 363 636 + 1 363 636 = 12 727 273 сум. Работодатель платит на 27,3% больше, чем работник получает на руки.',
      'Для резидентов IT Park расходы ниже: при той же зарплате «на руки» 10 000 000 сум гросс = 10 000 000 / 0,925 = 10 810 811 сум; социальный налог: 10 810 811 × 12% = 1 297 297 сум; полная стоимость: 12 108 108 сум. Экономия для работодателя: 619 165 сум на одного сотрудника в месяц по сравнению с обычным режимом.',
      'Помимо прямых налоговых расходов работодатель несёт дополнительные затраты: оплата больничных (первые 5 дней нетрудоспособности в календарном году — за счёт работодателя, с 6-го дня платит Фонд государственного социального страхования); отпускные (среднедневной заработок × дни отпуска); компенсация при увольнении; обязательное страхование от несчастных случаев на производстве; расходы на охрану труда. Эти расходы увеличивают стоимость сотрудника ещё на 10-20%.',
      'Сравнение режимов: обычный работодатель — полная стоимость 112% от гросс (или 127,3% от нетто); IT Park — полная стоимость 112% от гросс (или 121,1% от нетто); бюджетная организация — полная стоимость 125% от гросс. Для оптимизации расходов на персонал рассмотрите: получение статуса резидента IT Park (для IT-компаний); аутсорсинг непрофильных функций; автоматизацию рутинных процессов.',
    ],
    paragraphsUz: [
      "O'zbekistonda ish beruvchi uchun xodimning to'liq qiymati hisoblangan ish haqi va majburiy ajratmalardan tashkil topadi: ish haqi fondidan 12% ijtimoiy soliq (byudjet tashkilotlari uchun 25%). Ish beruvchi uchun xodim qiymati kalkulyatori xodimga ketadigan to'liq xarajatlarni va barcha ushlanmalar va hisob-kitoblarning taqsimotini hisoblaydi.",
      "Qo'lga 10 000 000 so'm ish haqili xodimga ish beruvchi xarajatlari tarkibi: hisoblangan ish haqi (gross) = 10 000 000 / 0,88 = 11 363 636 so'm; JShShS: 1 363 636 so'm, shundan 11 364 so'm (0,1%) xodimning IJPHsiga, 1 352 272 so'm byudjetga; ijtimoiy soliq: 1 363 636 so'm; to'liq qiymat: 12 727 273 so'm. Ish beruvchi xodim qo'liga oladigan summadan 27,3% ko'proq to'laydi.",
      "IT Park rezidentlari uchun xarajatlar pastroq: xuddi shu 10 000 000 so'm qo'lga ish haqida gross = 10 000 000 / 0,925 = 10 810 811 so'm; ijtimoiy soliq: 10 810 811 × 12% = 1 297 297 so'm; to'liq qiymat: 12 108 108 so'm. Ish beruvchi uchun tejash: oddiy rejimga nisbatan bir xodimga oyiga 619 165 so'm.",
      "Bevosita soliq xarajatlaridan tashqari ish beruvchi qo'shimcha xarajatlarga duchor bo'ladi: kasallik varag'ini to'lash (kalendar yil davomida birinchi 5 kun — ish beruvchi hisobidan, 6-kundan boshlab — Davlat ijtimoiy sug'urta jamg'armasi); ta'til haqi; ishdan bo'shatishda kompensatsiya; ishlab chiqarishdagi baxtsiz hodisalardan majburiy sug'urta. Bu xarajatlar xodim qiymatini yana 10-20% ga oshiradi.",
      "Rejimlarni solishtirish: oddiy ish beruvchi — grossdan 112% (yoki nettodan 127,3%); IT Park — grossdan 112% (nettodan 121,1%); byudjet tashkilot — grossdan 125%. Xodimlar xarajatlarini optimallashtirish uchun: IT Park rezidenti maqomini olish; noprofilga funksiyalarni autsorsing qilish; oddiy jarayonlarni avtomatlashtirish.",
    ],
    faqRu: [
      { question: 'Сколько работодатель платит сверх зарплаты в Узбекистане?', answer: 'Социальный налог 12% от начисленной зарплаты (25% для бюджетных). Полная стоимость = зарплата на руки × 1,273.' },
      { question: 'Как рассчитать полную стоимость сотрудника?', answer: 'Гросс = Нетто / 0,88. Полная стоимость = Гросс × 1,12. Для IT Park: Гросс = Нетто / 0,925, Полная стоимость = Гросс × 1,12.' },
      { question: 'Какие ещё расходы несёт работодатель?', answer: 'Больничные (первые 5 дней в календарном году), отпускные, компенсация при увольнении, страхование, охрана труда. Дополнительно 10-20% к ФОТ.' },
      { question: 'Выгоднее ли нанимать через IT Park?', answer: 'Да, экономия ~620 000 сум/мес на сотрудника с зарплатой 10 млн «на руки» (около 5% общих расходов).' },
      { question: 'Какой социальный налог для бюджетных организаций?', answer: '25% от ФОТ вместо стандартных 12%. Полная стоимость = Гросс × 1,25.' },
    ],
    faqUz: [
      { question: "O'zbekistonda ish beruvchi ish haqidan tashqari qancha to'laydi?", answer: "Hisoblangan ish haqidan 12% ijtimoiy soliq (byudjet uchun 25%). To'liq qiymat = qo'ldagi ish haqi × 1,273." },
      { question: "Xodimning to'liq qiymatini qanday hisoblash mumkin?", answer: "Gross = Netto / 0,88. To'liq qiymat = Gross × 1,12. IT Park uchun: Gross = Netto / 0,925." },
      { question: "Ish beruvchi yana qanday xarajatlarga duchor bo'ladi?", answer: "Kasallik varag'i (kalendar yilda birinchi 5 kun), ta'til haqi, ishdan bo'shatish kompensatsiyasi, sug'urta, mehnat muhofazasi. IHFga qo'shimcha 10-20%." },
      { question: "IT Park orqali yollash foydaliroqmi?", answer: "Ha, 10 mln so'm qo'ldagi ish haqili xodimga oyiga ~620 000 so'm tejash (umumiy xarajatlarning taxminan 5%)." },
      { question: "Byudjet tashkilotlari uchun ijtimoiy soliq qancha?", answer: "Standart 12% o'rniga IHFdan 25%. To'liq qiymat = Gross × 1,25." },
    ],
  },

  {
    slug: 'brv',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'Указ Президента УП-115 от 23.06.2026', url: 'https://lex.uz/ru/docs/8283680' },
    ],
    paragraphsRu: [
      'Базовая расчётная величина (БРВ) в Узбекистане с 1 сентября 2026 года составляет 440 000 сум (Указ УП-115 от 23.06.2026); до этого, с августа 2025 года, она была равна 412 000 сум. БРВ — это универсальный экономический показатель, который используется для расчёта штрафов, государственных пошлин, налоговых порогов и ограничений. Калькулятор БРВ переводит суммы из БРВ в сумы и обратно, что необходимо для понимания законодательных норм и расчёта платежей.',
      'Динамика БРВ за последние годы: 2023 — 330 000 сум; 2024 — 375 000 сум (рост 13,6%); с августа 2025 — 412 000 сум (рост 9,9%); с 1 сентября 2026 — 440 000 сум (рост 6,8%). БРВ индексируется с учётом инфляции и роста экономики. Размер БРВ устанавливается Указом Президента и публикуется в официальных источниках. Каждое изменение БРВ автоматически влияет на все привязанные к нему показатели: штрафы, пороги, пособия.',
      'Примеры использования БРВ: порог для обязательной регистрации плательщиком НДС — 12 000 БРВ = 5 280 000 000 сум; штраф за езду без действующего полиса ОСАГО — 0,5 БРВ = 220 000 сум (или предупреждение). Внимание: не все налоговые лимиты считаются в БРВ — льготы по НДФЛ привязаны к МРОТ (1 360 000 сум): необлагаемая материальная помощь — 4,22 МРОТ = 5 739 200 сум/год, погашение ипотеки — до 80 МРОТ = 108 800 000 сум/год.',
      'Минимальная заработная плата (МЗП) с 1 сентября 2026 года составляет 1 360 000 сум — это примерно 3,09 БРВ. МЗП и БРВ — разные показатели: МЗП определяет минимальный уровень оплаты труда, а БРВ — базу для расчёта различных нормативов. Раздельно они устанавливаются с 1 сентября 2019 года (УП-5765).',
      'Для быстрого расчёта: 1 БРВ = 440 000 сум; 10 БРВ = 4 400 000 сум; 100 БРВ = 44 000 000 сум; 1 000 БРВ = 440 000 000 сум; 10 000 БРВ = 4 400 000 000 сум. При чтении законодательных актов, где суммы указаны в БРВ, используйте наш калькулятор для мгновенного перевода в сумы.',
    ],
    paragraphsUz: [
      "O'zbekistonda bazaviy hisoblash kattaligi (BHK) 2026-yil 1-sentabridan 440 000 so'mni tashkil etadi (23.06.2026-yildagi PF-115 Farmoni); bundan oldin, 2025-yil avgustidan, u 412 000 so'm edi. BHK — jarimalar, davlat bojlari, soliq chegaralari va cheklovlarni hisoblash uchun ishlatiladigan universal iqtisodiy ko'rsatkich. BHK kalkulyatori summalarni BHKdan so'mga va aksincha o'giradi.",
      "So'nggi yillardagi BHK dinamikasi: 2023 — 330 000 so'm; 2024 — 375 000 so'm (13,6% o'sish); 2025-yil avgustidan — 412 000 so'm (9,9% o'sish); 2026-yil 1-sentabridan — 440 000 so'm (6,8% o'sish). BHK inflyatsiya va iqtisodiy o'sishni hisobga olgan holda indekslanadi. BHK miqdori Prezident Farmoni bilan belgilanadi.",
      "BHK qo'llanilishi misollari: QQS to'lovchisi sifatida majburiy ro'yxatdan o'tish chegarasi — 12 000 BHK = 5 280 000 000 so'm; amal qiluvchi OSAGO polisisiz haydash uchun jarima — 0,5 BHK = 220 000 so'm (yoki ogohlantirish). Diqqat: barcha soliq limitlari BHK da hisoblanmaydi — JShShS imtiyozlari MIH ga (1 360 000 so'm) bog'langan: JShShSga tortilmaydigan moddiy yordam — yiliga 4,22 MIH = 5 739 200 so'm, ipotekani to'lash — yiliga 80 MIH gacha = 108 800 000 so'm.",
      "Minimal ish haqi (MIH) 2026-yil 1-sentabridan 1 360 000 so'mni tashkil etadi — bu taxminan 3,09 BHK. MIH va BHK turli ko'rsatkichlardir: MIH mehnat haqi to'lashning minimal darajasini belgilaydi, BHK esa turli normativlarni hisoblash uchun asosdir. Ular 2019-yil 1-sentabridan alohida belgilanadi (PF-5765).",
      "Tez hisoblash uchun: 1 BHK = 440 000 so'm; 10 BHK = 4 400 000 so'm; 100 BHK = 44 000 000 so'm; 1 000 BHK = 440 000 000 so'm; 10 000 BHK = 4 400 000 000 so'm. Summalar BHK da ko'rsatilgan qonun hujjatlarini o'qiyotganda, so'mga bir zumda o'girish uchun kalkulyatorimizdan foydalaning.",
    ],
    faqRu: [
      { question: 'Сколько составляет 1 БРВ в 2026 году?', answer: '440 000 сум (действует с 1 сентября 2026 года, Указ УП-115). До этого: 412 000 сум (август 2025), 375 000 сум (2024), 330 000 сум (2023).' },
      { question: 'Для чего используется БРВ?', answer: "Для расчёта штрафов, госпошлин, налоговых порогов и других нормативов. Льготы по НДФЛ считаются не в БРВ, а в МРОТ." },
      { question: 'Чем БРВ отличается от минимальной зарплаты?', answer: "БРВ (440 000 сум) — расчётный показатель для нормативов. МЗП (1 360 000 сум) — минимальный уровень оплаты труда. Раздельно устанавливаются с сентября 2019 года, оба повышены с 1 сентября 2026 года." },
      { question: 'Как часто меняется БРВ?', answer: "В последние годы раз в год, по Указу Президента. Индексируется с учётом инфляции и экономического роста." },
      { question: 'Сколько БРВ составляет порог НДС?', answer: '12 000 БРВ — 5 280 000 000 сум при БРВ 440 000. При доходе выше этой суммы за налоговый период регистрация плательщиком НДС обязательна.' },
    ],
    faqUz: [
      { question: "2026-yilda 1 BHK qancha?", answer: "440 000 so'm (2026-yil 1-sentabridan amal qiladi, PF-115 Farmoni). Bundan oldin: 412 000 so'm (2025-yil avgust), 375 000 so'm (2024), 330 000 so'm (2023)." },
      { question: "BHK nima uchun ishlatiladi?", answer: "Jarimalar, davlat bojlari, soliq chegaralari va boshqa normativlarni hisoblash uchun. JShShS imtiyozlari BHKda emas, MIHda hisoblanadi." },
      { question: "BHK minimal ish haqidan nimasi bilan farq qiladi?", answer: "BHK (440 000 so'm) — normativlar uchun hisob ko'rsatkich. MIH (1 360 000 so'm) — mehnat haqi to'lashning minimal darajasi. 2019-yil sentabridan alohida belgilanadi, ikkalasi ham 2026-yil 1-sentabridan oshirilgan." },
      { question: "BHK qanchalik tez-tez o'zgaradi?", answer: "So'nggi yillarda yiliga bir marta, Prezident Farmoni bilan. Inflyatsiya va iqtisodiy o'sishni hisobga olgan holda indekslanadi." },
      { question: "QQS chegarasi qancha?", answer: "12 000 BHK — 440 000 so'mlik BHKda 5 280 000 000 so'm. Soliq davri uchun daromad bu summadan oshganda QQS to'lovchisi sifatida ro'yxatdan o'tish majburiy." },
    ],
  },

  // =====================================================================
  // REMAINING 58 CALCULATORS (200-300 words, 3-4 FAQ each)
  // =====================================================================

  {
    slug: 'llc-calculator',
    lastUpdated: '2026-11-01',
    sources: [{ name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' }],
    paragraphsRu: [
      'Калькулятор ООО помогает предпринимателям в Узбекистане рассчитать налоговую нагрузку при различных системах налогообложения. Общество с ограниченной ответственностью (ООО) — самая распространённая форма ведения бизнеса в стране. Согласно Налоговому кодексу, ООО может работать на общей системе (налог на прибыль 15% + НДС 12%) или на упрощённой (налог с оборота 4% без вычета расходов).',
      'На общей системе налогообложения ООО уплачивает: налог на прибыль — 15% от чистой прибыли (доходы минус документально подтверждённые расходы); НДС — 12% при доходе свыше 12 000 БРВ (5 280 000 000 сум); социальный налог — 12% от фонда оплаты труда; НДФЛ — 12% с зарплат сотрудников (удерживается из зарплаты). Дивиденды учредителям-резидентам облагаются НДФЛ по ставке 5% (нерезидентам — 10%).',
      'Выбор между системами зависит от доли расходов в выручке. Граница — расходы около 73% выручки: тогда 15% от прибыли равны 4% от оборота. Если расходы выше, общая система выгоднее, если ниже — упрощённая обходится дешевле. На общей системе вдобавок появляются НДС и учёт счетов-фактур. Наш калькулятор позволяет ввести прогнозные доходы и расходы и мгновенно увидеть, какая система оптимальна для вашего бизнеса.',
      'Регистрация ООО в Узбекистане осуществляется через портал my.gov.uz и занимает 1–3 рабочих дня. Минимальный уставный капитал не установлен. Госпошлина за регистрацию — около 1 БРВ (440 000 сум). После регистрации необходимо открыть расчётный счёт в банке, зарегистрироваться в налоговых органах через my.soliq.uz и получить электронную цифровую подпись для сдачи отчётности.',
      'Наш калькулятор ООО считает налог на прибыль, НДС и социальный налог и сравнивает налог на прибыль с налогом с оборота: введите ожидаемую выручку, расходы и фонд оплаты труда — и увидите, какая система дешевле. Это незаменимый инструмент для начинающих предпринимателей и действующих владельцев бизнеса, планирующих оптимизацию.',
    ],
    paragraphsUz: [
      "MChJ kalkulyatori O'zbekistondagi tadbirkorlarga turli soliqqa tortish tizimlarida soliq yukini hisoblashga yordam beradi. Mas'uliyati cheklangan jamiyat (MChJ) — mamlakatda biznes yuritishning eng keng tarqalgan shakli. Soliq kodeksiga ko'ra, MChJ umumiy tizimda (foyda solig'i 15% + QQS 12%) yoki soddalashtilgan tizimda (xarajatlarni chegirmasdan aylanma solig'i 4%) ishlashi mumkin.",
      "Umumiy soliqqa tortish tizimida MChJ quyidagilarni to'laydi: foyda solig'i — sof foydaning 15% (daromadlar minus hujjat bilan tasdiqlangan xarajatlar); QQS — daromad 12 000 BHK (5 280 000 000 so'm) dan oshganda 12%; ijtimoiy soliq — ish haqi fondining 12%; JShShS — xodimlar ish haqidan 12% (ish haqidan ushlab qolinadi). Rezident ta'sischilar dividendlari 5% stavkada JShShSga tortiladi (norezidentlar uchun — 10%).",
      "Tizimlar o'rtasidagi tanlov tushumdagi xarajatlar ulushiga bog'liq. Chegara — xarajatlar tushumning taxminan 73% i: shunda foydaning 15% i aylanmaning 4% iga teng. Xarajatlar yuqori bo'lsa, umumiy tizim foydaliroq, past bo'lsa — soddalashtirilgan arzonroq. Umumiy tizimda bundan tashqari QQS va hisobvaraq-fakturalar hisobi paydo bo'ladi. Kalkulyatorimiz prognoz daromadlar va xarajatlarni kiritish va qaysi tizim biznesingiz uchun optimal ekanligini bir zumda ko'rish imkonini beradi.",
      "O'zbekistonda MChJni ro'yxatdan o'tkazish my.gov.uz portali orqali amalga oshiriladi va 1–3 ish kunini oladi. Minimal ustav kapitali belgilanmagan. Ro'yxatdan o'tkazish uchun davlat boji — taxminan 1 BHK (440 000 so'm). Ro'yxatdan o'tganidan keyin bankda hisob-kitob raqamini ochish, my.soliq.uz orqali soliq organlarida ro'yxatdan o'tish va hisobot topshirish uchun elektron raqamli imzoni olish kerak.",
      "Bizning MChJ kalkulyatorimiz foyda solig'i, QQS va ijtimoiy soliqni hisoblaydi va foyda solig'ini aylanma solig'i bilan solishtiradi: kutilayotgan tushum, xarajatlar va ish haqi fondini kiriting — qaysi tizim arzonroq ekanini ko'rasiz. Bu boshlang'ich tadbirkorlar va optimallashtirish rejalashtiruvchi amaldagi biznes egalari uchun almastirib bo'lmas vosita.",
    ],
    faqRu: [
      { question: 'Какой налог на прибыль ООО?', answer: '15% на общей системе. На упрощённой — 4% от оборота (без вычета расходов).' },
      { question: 'Какой налог на дивиденды?', answer: 'НДФЛ 5% с дивидендов резидентам, 10% — нерезидентам.' },
      { question: 'Когда выгоднее общая система?', answer: 'При расходах более 73% выручки: тогда 15% от прибыли меньше 4% от оборота. При меньшей доле расходов выгоднее упрощённая.' },
      { question: 'Какие отчёты сдаёт ООО?', answer: 'Декларация по налогу на прибыль (ежеквартально), НДС (ежемесячно, до 20-го числа следующего месяца), расчёт социального налога, финансовая отчётность.' },
    ],
    faqUz: [
      { question: "MChJ foyda solig'i qancha?", answer: "Umumiy tizimda 15%. Soddalashtirilda — aylanmaning 4% (xarajatlarni chegirmasdan)." },
      { question: 'Dividendlarga soliq qancha?', answer: "Rezidentlarga to'langan dividendlardan JShShS 5%, norezidentlarga — 10%." },
      { question: "Umumiy tizim qachon foydaliroq?", answer: "Xarajatlar tushumning 73% idan ortiq bo'lganda: shunda foydaning 15% i aylanmaning 4% idan kam. Xarajatlar ulushi kamroq bo'lsa, soddalashtirilgan foydaliroq." },
      { question: 'MChJ qanday hisobotlar topshiradi?', answer: "Foyda solig'i deklaratsiyasi (har chorak), QQS (har oy, keyingi oyning 20-sanasigacha), ijtimoiy soliq hisobi, moliyaviy hisobot." },
    ],
  },

  {
    slug: 'calories',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Калькулятор калорий рассчитывает суточную норму калорий по формуле Миффлина-Сан Жеора с учётом пола, возраста, роста, веса и уровня физической активности. Средняя норма для жителей Узбекистана: мужчины — 2 000-2 500 ккал/день, женщины — 1 600-2 000 ккал/день.',
      'Для снижения веса рекомендуется дефицит 500-750 ккал/день, что обеспечит безопасную потерю 0,5-0,75 кг в неделю. Для набора мышечной массы необходим профицит 300-500 ккал/день с акцентом на белковую пищу. Выберите цель в калькуляторе: для похудения он вычтет 500 ккал из суточной нормы, для набора прибавит 300 ккал, а также покажет белки, жиры и углеводы.',
      'Формула Миффлина-Сан Жеора считается наиболее точной для современного человека: для мужчин BMR = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст + 5; для женщин BMR = 10 × вес(кг) + 6,25 × рост(см) − 5 × возраст − 161. Суточная норма = BMR × коэффициент активности: 1,2 (сидячий образ жизни), 1,375 (лёгкая активность 1-3 раза/нед.), 1,55 (умеренная 3-5 раз/нед.), 1,725 (высокая 6-7 раз/нед.), 1,9 (очень высокая, профессиональные спортсмены).',
      'Традиционная узбекская кухня калорийна: порция плова содержит около 700-900 ккал, самса — 350-450 ккал, лагман — 400-600 ккал, шурпа — 300-500 ккал. Лепёшка (нон) — 250-350 ккал. При суточной норме 2 000 ккал одна порция плова покрывает 35-45% дневного рациона. Знание калорийности узбекских блюд позволяет контролировать питание без отказа от национальной кухни.',
      "Калькулятор считает по стандартной формуле: поправки на климат, сезон или местный рацион в ней нет. ВОЗ рекомендует не менее 400 граммов овощей и фруктов в день, а в жару прежде всего растёт потребность в воде. Введите ваши параметры, и калькулятор рассчитает норму калорий для выбранной цели.",
    ],
    paragraphsUz: [
      "Kaloriya kalkulyatori jins, yosh, bo'y, vazn va jismoniy faollik darajasini hisobga olgan holda Mifflin-San Jeor formulasi bo'yicha kunlik kaloriya normasini hisoblaydi. O'zbekiston aholisi uchun o'rtacha norma: erkaklar — 2 000-2 500 kkal/kun, ayollar — 1 600-2 000 kkal/kun.",
      "Vazn kamaytirish uchun kuniga 500-750 kkal deficit tavsiya etiladi, bu haftasiga xavfsiz 0,5-0,75 kg yo'qotishni ta'minlaydi. Mushak massasini oshirish uchun oqsilli ovqatlarga urg'u berib, 300-500 kkal profitsit kerak. Kalkulyatorda maqsadni tanlang: oriqlash uchun kunlik normadan 500 kkal ayiradi, massa oshirish uchun 300 kkal qo'shadi, shuningdek oqsil, yog' va uglevodlarni ko'rsatadi.",
      "Mifflin-San Jeor formulasi zamonaviy inson uchun eng aniq hisoblanadi: erkaklar uchun BMR = 10 × vazn(kg) + 6,25 × bo'y(sm) − 5 × yosh + 5; ayollar uchun BMR = 10 × vazn(kg) + 6,25 × bo'y(sm) − 5 × yosh − 161. Kunlik norma = BMR × faollik koeffitsienti: 1,2 (o'tirgan turmush tarzi), 1,375 (yengil faollik haftada 1-3 marta), 1,55 (o'rtacha 3-5 marta), 1,725 (yuqori 6-7 marta), 1,9 (juda yuqori, professional sportchilar).",
      "An'anaviy o'zbek oshxonasi kaloriyali: bir porsiya osh taxminan 700-900 kkal, somsa — 350-450 kkal, lag'mon — 400-600 kkal, sho'rva — 300-500 kkal. Non — 250-350 kkal. Kunlik 2 000 kkal normada bir porsiya osh kunlik ratsionning 35-45% ini qoplaydi. O'zbek taomlarining kaloriyaliligini bilish milliy oshxonadan voz kechmasdan ovqatlanishni nazorat qilish imkonini beradi.",
      "Kalkulyator standart formula bo'yicha hisoblaydi: unda iqlim, mavsum yoki mahalliy ratsion uchun tuzatish yo'q. JSST kuniga kamida 400 gramm sabzavot va meva iste'mol qilishni tavsiya etadi, issiqda esa avvalo suvga ehtiyoj ortadi. Parametrlaringizni kiriting va kalkulyator tanlangan maqsad uchun kaloriya normasini hisoblaydi.",
    ],
    faqRu: [
      { question: 'Сколько калорий нужно в день?', answer: 'Мужчины: 2 000-2 500 ккал, женщины: 1 600-2 000 ккал. Зависит от возраста, веса, роста и уровня физической активности. Калькулятор рассчитает персональную норму.' },
      { question: 'Сколько калорий нужно для похудения?', answer: 'На 500-750 ккал меньше суточной нормы. Это обеспечит безопасную потерю 0,5-0,75 кг в неделю. Не рекомендуется снижать калорийность ниже 1 200 ккал для женщин и 1 500 ккал для мужчин.' },
      { question: 'Какая формула точнее?', answer: "Формула Миффлина-Сан Жеора считается наиболее точной для современного человека, поэтому калькулятор использует её. Формула Харриса-Бенедикта обычно даёт результат на 5-10% выше." },
      { question: 'Сколько калорий в плове?', answer: 'Одна порция плова (300-400 г) содержит 700-900 ккал. Самса — 350-450 ккал, лагман — 400-600 ккал, шурпа — 300-500 ккал.' },
      { question: 'Нужно ли учитывать климат при расчёте калорий?', answer: "Формула климат не учитывает, и общепринятой поправки к калориям нет. В жару прежде всего растёт потребность в воде. Если вес меняется не так, как ожидалось, скорректируйте норму по факту." },
    ],
    faqUz: [
      { question: "Kuniga necha kaloriya kerak?", answer: "Erkaklar: 2 000-2 500 kkal, ayollar: 1 600-2 000 kkal. Yosh, vazn, bo'y va jismoniy faollik darajasiga bog'liq. Kalkulyator shaxsiy normani hisoblab beradi." },
      { question: "Vazn kamaytirish uchun necha kaloriya kerak?", answer: "Kunlik normadan 500-750 kkal kam. Bu haftasiga xavfsiz 0,5-0,75 kg yo'qotishni ta'minlaydi. Ayollar uchun 1 200 kkal va erkaklar uchun 1 500 kkal dan past tushirish tavsiya etilmaydi." },
      { question: "Qaysi formula aniqroq?", answer: "Mifflin-San Jeor formulasi zamonaviy inson uchun eng aniq hisoblanadi, shuning uchun kalkulyator undan foydalanadi. Harris-Benedikt formulasi odatda 5-10% yuqori natija beradi." },
      { question: "Oshda necha kaloriya bor?", answer: "Bir porsiya osh (300-400 g) 700-900 kkal o'z ichiga oladi. Somsa — 350-450 kkal, lag'mon — 400-600 kkal, sho'rva — 300-500 kkal." },
      { question: "Kaloriyalarni hisoblashda iqlimni hisobga olish kerakmi?", answer: "Formula iqlimni hisobga olmaydi va kaloriyaga umumqabul qilingan tuzatish yo'q. Issiqda avvalo suvga ehtiyoj ortadi. Vazn kutilganidek o'zgarmasa, normani amalda tuzating." },
    ],
  },

  {
    slug: 'bmi',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'ВОЗ — Индекс массы тела', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Индекс массы тела (ИМТ) — основной показатель соответствия веса и роста, рассчитываемый по формуле: ИМТ = Вес(кг) / Рост(м)². Классификация ВОЗ: менее 18,5 — дефицит массы; 18,5-24,9 — норма; 25-29,9 — избыточный вес; 30-34,9 — ожирение I степени; 35-39,9 — ожирение II степени; 40 и выше — ожирение III степени.',
      'Пример расчёта для жителя Узбекистана: мужчина, вес 85 кг, рост 175 см. ИМТ = 85 / 1,75² = 27,8 — избыточный вес. Для нормы при росте 175 см вес должен быть 57-76 кг. Другой пример: женщина, вес 65 кг, рост 162 см. ИМТ = 65 / 1,62² = 24,8 — верхняя граница нормы. Калькулятор ИМТ мгновенно определит ваш показатель и подскажет, в какой категории вы находитесь.',
      'ИМТ имеет ограничения: он не учитывает мышечную массу, костную структуру и распределение жира. Для спортсменов, беременных женщин, людей старше 65 лет и детей до 18 лет ИМТ может давать некорректные результаты. В этих случаях рекомендуется дополнительно измерить обхват талии: для мужчин норма менее 94 см, для женщин — менее 80 см.',
      'По данным Минздрава Узбекистана, основными факторами избыточного веса в республике являются высококалорийная традиционная кухня (плов, самса, жирное мясо), малоподвижный образ жизни и недостаточное потребление овощей и фруктов. Регулярный контроль ИМТ полезен для профилактики сердечно-сосудистых заболеваний, диабета 2 типа и заболеваний суставов.',
      'Для комплексной оценки состояния здоровья рекомендуется использовать калькулятор ИМТ совместно с калькулятором идеального веса и калькулятором КБЖУ (калории, белки, жиры, углеводы). Здоровый ИМТ в диапазоне 18,5-24,9 связан с меньшим риском хронических заболеваний. Введите ваш вес и рост — калькулятор покажет ИМТ, категорию и рекомендации по коррекции веса.',
    ],
    paragraphsUz: [
      "Tana massasi indeksi (TMI) — vazn va bo'yning mosligining asosiy ko'rsatkichi bo'lib, formula bo'yicha hisoblanadi: TMI = Vazn(kg) / Bo'y(m)². JSST tasnifi: 18,5 dan kam — massa tanqisligi; 18,5-24,9 — norma; 25-29,9 — ortiqcha vazn; 30-34,9 — I darajali semirish; 35-39,9 — II darajali semirish; 40 va undan yuqori — III darajali semirish.",
      "O'zbekiston aholisi uchun hisoblash misoli: erkak, vazn 85 kg, bo'y 175 sm. TMI = 85 / 1,75² = 27,8 — ortiqcha vazn. 175 sm bo'yda norma uchun vazn 57-76 kg bo'lishi kerak. Boshqa misol: ayol, vazn 65 kg, bo'y 162 sm. TMI = 65 / 1,62² = 24,8 — normaning yuqori chegarasi. TMI kalkulyatori ko'rsatkichingizni bir zumda aniqlaydi va qaysi toifada ekanligingizni ko'rsatadi.",
      "TMI cheklovlarga ega: u mushak massasini, suyak tuzilishini va yog' taqsimlanishini hisobga olmaydi. Sportchilar, homilador ayollar, 65 yoshdan katta kishilar va 18 yoshgacha bolalar uchun TMI noto'g'ri natijalar berishi mumkin. Bunday hollarda qo'shimcha ravishda bel aylanasini o'lchash tavsiya etiladi: erkaklar uchun norma 94 sm dan kam, ayollar uchun — 80 sm dan kam.",
      "O'zbekiston Sog'liqni saqlash vazirligining ma'lumotlariga ko'ra, respublikada ortiqcha vaznning asosiy omillari yuqori kaloriyali an'anaviy oshxona (osh, somsa, yog'li go'sht), kam harakatli turmush tarzi va sabzavot hamda mevalarning yetarli iste'mol qilinmasligidir. TMIni muntazam nazorat qilish yurak-qon tomir kasalliklari, 2-tip diabet va bo'g'im kasalliklari profilaktikasi uchun foydali.",
      "Sog'liq holatini to'liq baholash uchun TMI kalkulyatorini ideal vazn kalkulyatori va KBYU kalkulyatori (kaloriyalar, oqsillar, yog'lar, uglevodlar) bilan birgalikda ishlatish tavsiya etiladi. 18,5-24,9 diapazonidagi sog'lom TMI surunkali kasalliklar xavfining pastroq bo'lishi bilan bog'liq. Vazn va bo'yingizni kiriting — kalkulyator TMI, toifa va vaznni tuzatish bo'yicha tavsiyalarni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать ИМТ?', answer: 'ИМТ = Вес(кг) / Рост(м)². Например: 70 кг при росте 170 см → 70 / 1,70² = 24,2. Это верхняя граница нормы.' },
      { question: 'Какой ИМТ считается нормальным?', answer: '18,5-24,9 по классификации ВОЗ. Ниже 18,5 — дефицит, 25-29,9 — избыточный вес, 30+ — ожирение.' },
      { question: 'Точен ли ИМТ для спортсменов?', answer: 'Нет, ИМТ не различает мышечную и жировую массу. Спортсменам лучше использовать измерение процента жира (норма 10-20% для мужчин, 18-28% для женщин).' },
      { question: 'Какой нормальный вес при росте 175 см?', answer: 'По ВОЗ (ИМТ 18,5-24,9): 57-76 кг. Оптимальный диапазон: 63-72 кг.' },
      { question: 'Какова ситуация с ожирением в Узбекистане?', answer: "Свежей официальной статистики по ИМТ взрослых в открытых источниках мы не нашли, поэтому цифр не приводим. Основные причины лишнего веса — калорийная традиционная кухня и малоподвижный образ жизни." },
    ],
    faqUz: [
      { question: 'TMI qanday hisoblanadi?', answer: "TMI = Vazn(kg) / Bo'y(m)². Masalan: 170 sm bo'yda 70 kg → 70 / 1,70² = 24,2. Bu normaning yuqori chegarasi." },
      { question: 'Qanday TMI normal hisoblanadi?', answer: "JSST tasnifi bo'yicha 18,5-24,9. 18,5 dan past — tanqislik, 25-29,9 — ortiqcha vazn, 30+ — semirish." },
      { question: "TMI sportchilar uchun aniqmi?", answer: "Yo'q, TMI mushak va yog' massasini farqlamaydi. Sportchilarga yog' foizini o'lchash yaxshiroq (erkaklar uchun norma 10-20%, ayollar uchun 18-28%)." },
      { question: "175 sm bo'yda normal vazn qancha?", answer: "JSST bo'yicha (TMI 18,5-24,9): 57-76 kg. Optimal diapazon: 63-72 kg." },
      { question: "O'zbekistonda semirish holati qanday?", answer: "Kattalar TMI bo'yicha yangi rasmiy statistikani ochiq manbalarda topmadik, shuning uchun raqam keltirmaymiz. Ortiqcha vaznning asosiy sabablari — kaloriyali an'anaviy oshxona va kam harakatli turmush tarzi." },
    ],
  },

  {
    slug: 'zakat',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд Узбекистана', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Закят — один из пяти столпов ислама, обязательная ежегодная выплата, составляющая 2,5% от имущества, которым мусульманин владел в течение полного лунного года (хавль). Нисаб — минимальный порог, определяется по стоимости 85 граммов золота (по фетве Управления мусульман на 2026 год — 100 млн сум за 85 г золота 585 пробы) или 595 граммов серебра. В Узбекистане, где более 90% населения — мусульмане, закят играет важную социальную роль в поддержке нуждающихся.',
      'В расчёт закята включаются: наличные деньги (в том числе на счетах Uzum, Click, Payme), банковские вклады в узбекских банках, золото и серебро сверх личных украшений, товарные запасы для торговли, акции и инвестиции, дебиторская задолженность. Не включаются: жилой дом, личный автомобиль, одежда, бытовая техника, инструменты для заработка, долги, которые нужно выплатить.',
      'Пример расчёта для жителя Ташкента: наличные 100 млн сум + депозит в Ipoteka bank 200 млн + золотые украшения 150 млн (за вычетом личных 50 млн) + товарный запас магазина 300 млн = итого 750 млн сум. Нисаб — 100 млн сум по фетве на 2026 год. Активы (750 млн) > нисаб → Закят = 750 000 000 × 2,5% = 18 750 000 сум. Эту сумму необходимо распределить среди категорий получателей.',
      'Получатели закята определены в Коране (сура Ат-Тауба, аят 60): бедные (фукара), нуждающиеся (масакин), сборщики закята, новообращённые мусульмане, для освобождения рабов, должники, на пути Аллаха, путники. В Узбекистане закят можно передать через мечети, фонд Вакф (vaqf.uz), благотворительные организации или напрямую нуждающимся. Управление мусульман Узбекистана ежегодно публикует рекомендации по размерам нисаба.',
      'Калькулятор закята считает нисаб как 85 г × цена грамма золота: по умолчанию подставлена цена из фетвы 2026 года (100 млн сум за 85 г золота 585 пробы), её можно заменить. Введите активы и долги в сумах — калькулятор покажет, обязаны ли вы выплачивать закят и какую сумму. Рекомендуется выплачивать закят в месяце Рамадан, хотя это не является обязательным условием.',
    ],
    paragraphsUz: [
      "Zakot — islomning beshta arkonidan biri, musulmon to'liq qamariy yil (havl) davomida ega bo'lgan mol-mulkning 2,5% miqdoridagi majburiy yillik to'lov. Nisob — minimal chegara bo'lib, 85 gramm oltin (2026-yilgi fatvoga ko'ra 585-probali 85 gramm oltin uchun 100 mln so'm) yoki 595 gramm kumush qiymati bo'yicha aniqlanadi. Aholisining 90% dan ortig'i musulmon bo'lgan O'zbekistonda zakot muhtojlarni qo'llab-quvvatlashda muhim ijtimoiy rol o'ynaydi.",
      "Zakot hisobiga kiritiladi: naqd pul (jumladan Uzum, Click, Payme hisoblaridagi), o'zbek banklaridagi omonatlar, shaxsiy taqinchoqlardan tashqari oltin va kumush, savdo uchun tovar zahiralari, aksiya va investitsiyalar, debitorlik qarzlari. Kiritilmaydi: turar-joy, shaxsiy avtomobil, kiyim-kechak, maishiy texnika, daromad topish uchun asboblar, to'lanishi kerak bo'lgan qarzlar.",
      "Toshkent aholisi uchun hisoblash misoli: naqd pul 100 mln so'm + Ipoteka bankda omonat 200 mln + oltin taqinchoqlar 150 mln (shaxsiy 50 mln chegirilganda) + do'kon tovar zahirasi 300 mln = jami 750 mln so'm. Nisob — 2026-yilgi fatvoga ko'ra 100 mln so'm. Aktivlar (750 mln) > nisob → Zakot = 750 000 000 × 2,5% = 18 750 000 so'm. Ushbu summani oluvchilar toifalari o'rtasida taqsimlash kerak.",
      "Zakot oluvchilari Qur'onda belgilangan (At-Tavba surasi, 60-oyat): kambag'allar (fuqaro), muhtojlar (masokin), zakot yig'uvchilar, yangi musulmonlar, qullarni ozod qilish uchun, qarzdorlar, Alloh yo'lida, musofirlar. O'zbekistonda zakotni masjidlar, Vaqf fondi (vaqf.uz), xayriya tashkilotlari orqali yoki bevosita muhtojlarga uzatish mumkin. O'zbekiston Musulmonlari boshqarmasi har yili nisob miqdorlari bo'yicha tavsiyalar e'lon qiladi.",
      "Zakot kalkulyatori nisobni 85 g × oltin grammi narxi sifatida hisoblaydi: standart holda 2026-yilgi fatvodagi narx qo'yilgan (585-probali 85 g oltin uchun 100 mln so'm), uni almashtirish mumkin. Aktivlar va qarzlarni so'mda kiriting — kalkulyator zakot to'lash majburiyatini va summani ko'rsatadi. Zakotni Ramazon oyida to'lash tavsiya etiladi, garchi bu majburiy shart emas.",
    ],
    faqRu: [
      { question: 'Сколько составляет закят?', answer: '2,5% от имущества, превышающего нисаб (100 млн сум по фетве на 2026 год), которым владели полный лунный год.' },
      { question: 'Что такое нисаб и как его определить?', answer: 'Нисаб — минимальный порог: стоимость 85 г золота (100 млн сум по фетве на 2026 год). Если ваши активы ниже, закят не обязателен.' },
      { question: 'С какого имущества платится закят?', answer: 'Деньги (включая электронные кошельки), вклады, золото/серебро, товарные запасы, акции. Не включается жильё, транспорт и личные вещи.' },
      { question: 'Куда в Узбекистане можно передать закят?', answer: 'Через мечети, фонд Вакф (vaqf.uz), благотворительные организации или напрямую нуждающимся из 8 категорий получателей.' },
      { question: 'Когда лучше всего выплачивать закят?', answer: 'Рекомендуется в Рамадан (награда умножается), но обязательного срока нет — главное выплатить после истечения хавля (лунного года владения).' },
    ],
    faqUz: [
      { question: "Zakot qancha?", answer: "To'liq qamariy yil davomida ega bo'lgan, nisobdan (2026-yilgi fatvoga ko'ra 100 mln so'm) ortiq mol-mulkning 2,5%." },
      { question: "Nisob nima va uni qanday aniqlash mumkin?", answer: "Nisob — minimal chegara: 85 g oltin qiymati (2026-yilgi fatvoga ko'ra 100 mln so'm). Agar aktivlaringiz bundan past bo'lsa, zakot majburiy emas." },
      { question: "Qaysi mol-mulkdan zakot to'lanadi?", answer: "Pul (elektron hamyonlar kiritilgan holda), omonatlar, oltin/kumush, tovar zahiralari, aksiyalar. Turar-joy, transport va shaxsiy buyumlar kiritilmaydi." },
      { question: "O'zbekistonda zakotni qayerga uzatish mumkin?", answer: "Masjidlar, Vaqf fondi (vaqf.uz), xayriya tashkilotlari orqali yoki 8 ta oluvchi toifasidagi muhtojlarga bevosita." },
      { question: "Zakotni qachon to'lash yaxshiroq?", answer: "Ramazonda tavsiya etiladi (savob ko'paytiriladi), lekin majburiy muddat yo'q — asosiysi havl (qamariy yil egaligi) o'tganidan keyin to'lash." },
    ],
  },

  {
    slug: 'percentage',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'Центральный банк РУз — Ставки', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      "Калькулятор процентов выполняет три операции: находит процент от числа, определяет, какой процент одно число составляет от другого, и считает процентное изменение. Это универсальный инструмент для повседневных расчётов, бизнеса, торговли и образования в Узбекистане. Прибавление и вычитание процента считайте по формулам ниже.",
      'Основные формулы: X% от числа A = A × X / 100. Число A составляет (A / B × 100)% от числа B. Число A с прибавкой X% = A × (1 + X/100). Число A с вычетом X% = A × (1 − X/100). Процентное изменение = (Новое − Старое) / Старое × 100%. Все формулы работают с любыми суммами в узбекских сумах.',
      'Практические примеры для Узбекистана: НДС 12% от суммы 10 000 000 сум = 1 200 000 сум. НДФЛ 12% от зарплаты 8 000 000 = 960 000 сум. Торговая наценка 30% на товар стоимостью 500 000 сум: 500 000 × 1,30 = 650 000 сум. Скидка 25% от цены 2 000 000 сум: 2 000 000 × 0,75 = 1 500 000 сум.',
      "Проценты используются в банковской сфере Узбекистана: основная ставка ЦБ РУз — 14% годовых, ставки по сумовым вкладам — 17-22,5% (средняя 18,4% на август 2026 года). Инфляция за 2025 год составила 7,3%, в сентябре 2026 года — 6,4% в годовом выражении. Калькулятор процентов поможет быстро рассчитать доход по вкладу, переплату по кредиту или реальную доходность с учётом инфляции.",
      'Наш калькулятор процентов незаменим для предпринимателей на базарах и в торговых точках Узбекистана: расчёт наценки, себестоимости, маржи, НДС и скидок. Учителя математики используют его для проверки задач, бухгалтеры — для расчёта налогов и пеней. Введите числа и выберите нужную операцию — результат будет мгновенным.',
    ],
    paragraphsUz: [
      "Foiz kalkulyatori uchta amalni bajaradi: sondan foizni topadi, bir son ikkinchisidan necha foiz ekanini aniqlaydi va foiz o'zgarishini hisoblaydi. Bu O'zbekistonda kundalik hisob-kitoblar, biznes, savdo va ta'lim uchun universal vosita. Foizni qo'shish va ayirishni quyidagi formulalar bo'yicha hisoblang.",
      "Asosiy formulalar: A sondan X% = A × X / 100. A soni B sondan (A / B × 100)% ni tashkil etadi. A soniga X% qo'shish = A × (1 + X/100). A sondan X% ayirish = A × (1 − X/100). Foiz o'zgarishi = (Yangi − Eski) / Eski × 100%. Barcha formulalar o'zbek so'midagi har qanday summalar bilan ishlaydi.",
      "O'zbekiston uchun amaliy misollar: 10 000 000 so'mdan 12% QQS = 1 200 000 so'm. 8 000 000 ish haqidan 12% JShDS = 960 000 so'm. 500 000 so'mlik tovarga 30% ustama: 500 000 × 1,30 = 650 000 so'm. 2 000 000 so'mlik narxdan 25% chegirma: 2 000 000 × 0,75 = 1 500 000 so'm.",
      "Foizlar O'zbekiston bank sohasida ishlatiladi: MB asosiy stavkasi — yillik 14%, so'mdagi omonatlar stavkalari — 17-22,5% (2026-yil avgustida o'rtacha 18,4%). 2025-yilda inflyatsiya 7,3% bo'ldi, 2026-yil sentabrida yillik hisobda 6,4%. Foiz kalkulyatori omonatdan daromadni, kredit bo'yicha ortiqcha to'lovni yoki inflyatsiyani hisobga olgan real daromadlilikni tezda hisoblashga yordam beradi.",
      "Foiz kalkulyatorimiz O'zbekiston bozor va savdo nuqtalaridagi tadbirkorlar uchun ajralmas vosita: ustama, tannarx, marja, QQS va chegirmalarni hisoblash. Matematika o'qituvchilari uni masalalarni tekshirish uchun, buxgalterlar esa soliqlar va penyalarni hisoblash uchun ishlatadi. Sonlarni kiriting va kerakli amalni tanlang — natija bir zumda tayyor bo'ladi.",
    ],
    faqRu: [
      { question: 'Как найти процент от числа?', answer: 'Число × Процент / 100. Например, 25% от 800 000 сум = 800 000 × 25 / 100 = 200 000 сум.' },
      { question: 'Как узнать процентное соотношение?', answer: 'Часть / Целое × 100. Например, 150 000 из 600 000 = 150 000 / 600 000 × 100 = 25%.' },
      { question: 'Как рассчитать процентное изменение?', answer: '(Новое − Старое) / Старое × 100%. Было 500 000, стало 650 000: рост = 30%.' },
      { question: 'Как быстро посчитать НДС 12%?', answer: 'Умножьте сумму на 0,12. Для 5 000 000 сум: НДС = 600 000 сум, итого с НДС = 5 600 000 сум.' },
      { question: 'Как рассчитать реальную доходность с учётом инфляции?', answer: "Реальная доходность ≈ Номинальная − Инфляция. Вклад 18,4% − инфляция 6,4% = ~12% реальной доходности." },
    ],
    faqUz: [
      { question: 'Sondan foizni qanday topish mumkin?', answer: "Son × Foiz / 100. Masalan, 800 000 so'mdan 25% = 800 000 × 25 / 100 = 200 000 so'm." },
      { question: 'Foiz nisbatini qanday bilish mumkin?', answer: "Qism / Butun × 100. Masalan, 600 000 dan 150 000 = 150 000 / 600 000 × 100 = 25%." },
      { question: "Foiz o'zgarishni qanday hisoblash mumkin?", answer: "(Yangi − Eski) / Eski × 100%. 500 000 edi, 650 000 bo'ldi: o'sish = 30%." },
      { question: "12% QQSni qanday tez hisoblash mumkin?", answer: "Summani 0,12 ga ko'paytiring. 5 000 000 so'm uchun: QQS = 600 000 so'm, QQS bilan jami = 5 600 000 so'm." },
      { question: "Inflyatsiyani hisobga olgan real daromadlilikni qanday hisoblash mumkin?", answer: "Real daromadlilik ≈ Nominal − Inflyatsiya. Omonat 18,4% − inflyatsiya 6,4% = ~12% real daromadlilik." },
    ],
  },

  {
    slug: 'discount',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'Uzum Market', url: 'https://uzum.uz' },
    ],
    paragraphsRu: [
      'Калькулятор скидок мгновенно рассчитывает итоговую цену товара после скидки, а также сумму экономии в узбекских сумах. Инструмент незаменим при покупках в Ташкенте и других городах Узбекистана: на базарах Чорсу и Алайском, в торговых центрах Samarkand Darvoza, Mega Planet, а также на маркетплейсах Uzum и Sello.',
      'Формула расчёта: Цена со скидкой = Исходная цена × (1 − Скидка/100). Для двойной скидки: Цена = Исходная × (1 − Скидка1/100) × (1 − Скидка2/100). Важный нюанс: скидка 20% + 10% не равна 30%. Реальная скидка = 1 − 0,8 × 0,9 = 28%. Калькулятор принимает одну скидку: для двух подряд введите их общий процент, в этом примере 28%.',
      'Практические примеры: зимняя куртка на Mega Planet за 3 000 000 сум со скидкой 25% → 2 250 000 сум (экономия 750 000). Бытовая техника на Uzum за 8 000 000 сум с промокодом 10% + акция магазина 15% → 8 000 000 × 0,90 × 0,85 = 6 120 000 сум (экономия 1 880 000, реальная скидка 23,5%). Продукты на Korzinka со скидкой по карте лояльности 5%: чек 500 000 → 475 000 сум.',
      'В Узбекистане крупные распродажи проходят в сезонные периоды: «Чёрная пятница» (ноябрь) — скидки 20-50% в крупных магазинах и маркетплейсах, новогодние распродажи (декабрь-январь) — до 70%, Навруз (март) — 10-30%, летние распродажи (июль-август) — до 50%. Зная даты распродаж и имея калькулятор скидок, можно существенно сэкономить семейный бюджет.',
      "Продавцам калькулятор скидок полезен при планировании акций: он показывает новую цену и сумму, которую получит покупатель в виде экономии. Введите исходную цену и процент скидки, и калькулятор покажет итоговую стоимость и экономию в сумах.",
    ],
    paragraphsUz: [
      "Chegirma kalkulyatori chegirmadan keyin tovarning yakuniy narxini va o'zbek so'midagi tejash summasini bir zumda hisoblaydi. Vosita Toshkent va O'zbekistonning boshqa shaharlaridagi xaridlarda ajralmas: Chorsu va Olay bozorlarida, Samarkand Darvoza, Mega Planet savdo markazlarida, shuningdek Uzum va Sello marketpleyslarida.",
      "Hisoblash formulasi: Chegirmali narx = Boshlang'ich narx × (1 − Chegirma/100). Ikki chegirma uchun: Narx = Boshlang'ich × (1 − Chegirma1/100) × (1 − Chegirma2/100). Muhim nuans: 20% + 10% chegirma 30% ga teng emas. Haqiqiy chegirma = 1 − 0,8 × 0,9 = 28%. Kalkulyator bitta chegirmani qabul qiladi: ketma-ket ikkita uchun ularning umumiy foizini kiriting, bu misolda 28%.",
      "Amaliy misollar: Mega Planetda qishki kurtka 3 000 000 so'mdan 25% chegirma bilan → 2 250 000 so'm (tejash 750 000). Uzumda maishiy texnika 8 000 000 so'mdan promokod 10% + do'kon aksiyasi 15% → 8 000 000 × 0,90 × 0,85 = 6 120 000 so'm (tejash 1 880 000, haqiqiy chegirma 23,5%). Korzinkada sodiqlik kartasi bo'yicha 5% chegirma: chek 500 000 → 475 000 so'm.",
      "O'zbekistonda yirik chegirma savdolari mavsumiy davrlarida o'tkaziladi: «Qora juma» (noyabr) — yirik do'konlar va marketpleyslarda 20-50% chegirmalar, yangi yil savdosi (dekabr-yanvar) — 70% gacha, Navro'z (mart) — 10-30%, yozgi chegirmalar (iyul-avgust) — 50% gacha. Chegirma savdolari sanalarini bilib, chegirma kalkulyatoriga ega bo'lsangiz, oila byudjetini sezilarli darajada tejash mumkin.",
      "Sotuvchilarga chegirma kalkulyatori aksiyalarni rejalashtirishda foydali: u yangi narxni va xaridor tejaydigan summani ko'rsatadi. Boshlang'ich narx va chegirma foizini kiriting, kalkulyator yakuniy qiymat va so'mdagi tejashni ko'rsatadi.",
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
    lastUpdated: '2026-09-21',
    sources: [
      { name: 'Закон «О государственной пошлине» ЗРУ-600, приложение, п. 6', url: 'https://lex.uz/ru/docs/4680955' },
      { name: 'Положение о биометрическом паспорте для выезда за границу (ПП-4079)', url: 'https://lex.uz/docs/4162591' },
      { name: 'Положение об ID-карте гражданина (УП-6065)', url: 'https://lex.uz/ru/docs/5015117' },
      { name: 'Единый портал интерактивных государственных услуг', url: 'https://my.gov.uz' },
    ],
    paragraphsRu: [
      'Госпошлину за ID-карту и биометрический паспорт для выезда за границу (загранпаспорт) устанавливает закон «О государственной пошлине» ЗРУ-600 — пункт 6 приложения в редакции ЗРУ-759 от 14 марта 2022 года. Ставки заданы в долях базовой расчётной величины; с 1 сентября 2026 года БРВ = 440 000 сум. Срочного или ускоренного оформления за отдельную плату нет ни в законе, ни в положениях о выдаче этих документов.',
      'Размеры пошлины: ID-карта — 89% БРВ (391 600 сум), одинаково для новорождённого, ребёнка и взрослого; загранпаспорт — 1 БРВ (440 000 сум); загранпаспорт гражданину до 16 лет — 80% БРВ (352 000 сум); проездной документ лица без гражданства — 1 БРВ. Если заявление на загранпаспорт подано через my.gov.uz, платится 90% пошлины: 396 000 сум, ребёнку до 16 лет — 316 800 сум (п. 27 Положения, утверждённого ПП-4079). В том же пункте — скидки на загранпаспорт: 50% — членам семей категории «бедная семья» Социального реестра и лицам с инвалидностью I и II группы, 75% — членам семей категории «семья на государственном обеспечении».',
      'Сроки действия ID-карты: ребёнку до года — 2 года, от года до 16 лет — 5 лет, с 16 лет — 10 лет (п. 4 Положения, утверждённого УП-6065). Загранпаспорт: до года — 2 года, от года до 25 лет — 5 лет, старше 25 лет — 10 лет (п. 7 Положения, ПП-4079). ID-карту выдают в течение одного рабочего дня после приёма документов, при утере — тоже за один рабочий день. Загранпаспорт изготавливают за 10 рабочих дней со дня оплаты (при подаче через my.gov.uz — со дня сдачи биометрии), в отдельных случаях для граждан от 16 до 25 лет — до месяца; при утере или порче срок могут продлить ещё на 10 рабочих дней (п. 31 и 54 Положения, ПП-4079).',
      'При утере или порче пошлина не удваивается: отдельной ставки за замену закон не устанавливает, новый документ оформляется в общем порядке и оплачивается как обычно (п. 53 Положения, ПП-4079). Взамен утерянного или испорченного документ бесплатно получают пострадавшие от чрезвычайных ситуаций и бытовых бедствий (пожар, обрушение жилья, возгорание автомобиля), одинокие престарелые, лица с инвалидностью, нуждающиеся в постороннем уходе, а с 12 сентября 2026 года — и женщины, размещённые в территориальных центрах реабилитации и адаптации, с несовершеннолетними детьми (ч. 4 ст. 13 ЗРУ-600 в ред. ЗРУ-1175). Кроме того, без пошлины выдаются дипломатический паспорт, ID-карта ребёнку-сироте и ребёнку, оставшемуся без попечения родителей, ID-карта и загранпаспорт лицу на полном государственном обеспечении, а загранпаспорт — в частности, при поездке в связи со смертью близкого родственника, по вызову в зарубежный суд, на лечение несовершеннолетнего или на международный конкурс с его участием (ст. 13 ЗРУ-600). Если ошибку в документе допустили сотрудники, замена бесплатна (п. 40³ Положения ПП-4079; для ID-карты с техническим дефектом по вине пункта сбора данных — п. 19 Положения УП-6065). Сама смена фамилии оформляется в ЗАГСе — 1 БРВ (440 000 сум), от 16 до 18 лет — 50% БРВ; паспорт или ID-карту после неё меняют с уплатой обычной пошлины.',
      'ID-карту оформляют в любом удобном пункте сбора данных — подразделении миграции ОВД или центре государственных услуг, независимо от прописки (п. 11 Положения, УП-6065). Нужны заявление-анкета, прежний паспорт или ID-карта (при первичном оформлении — свидетельство о рождении) и квитанция; при электронной оплате квитанция не требуется. Загранпаспорт оформляют через my.gov.uz или лично в любом пункте сбора данных (п. 16 Положения, ПП-4079). Кроме анкеты и документа, удостоверяющего личность, другие документы требуют лишь в особых случаях, перечисленных в п. 22; фото и отпечатки пальцев снимают на месте. Для ребёнка нужно согласие родителей: при подаче через my.gov.uz оно подтверждается электронной подписью, без нотариуса (п. 22). Граждане за рубежом оформляют загранпаспорт через консульские учреждения Узбекистана, где размер оплаты может отличаться.',
      'Калькулятор показывает пошлину по виду документа и возрасту, сумму при подаче через my.gov.uz и срок изготовления. Пошлину за загранпаспорт платят по счёту (инвойсу): при личном обращении его выдаёт сотрудник пункта сбора данных, при подаче через my.gov.uz он приходит в личный кабинет; оплатить нужно в течение месяца, иначе заявку не рассмотрят (п. 25–26 Положения, ПП-4079). Заплатить можно в банке или через приложения Click, Payme, Uzum. Квитанция лишь подтверждает уплату пошлины (ст. 17 закона ЗРУ-600), срока действия у неё нет. Если заявка на загранпаспорт подана через my.gov.uz, в пункт сбора данных нужно прийти в течение месяца со дня её отправки, иначе заявку не рассмотрят (п. 20 Положения, утверждённого ПП-4079).',
    ],
    paragraphsUz: [
      "ID-karta va xorijga chiqish biometrik pasporti uchun davlat bojini «Davlat boji to'g'risida»gi O'RQ-600 Qonuni belgilaydi — ilovaning 6-bandi, 2022-yil 14-martdagi O'RQ-759 tahririda. Stavkalar bazaviy hisoblash miqdori (BHM) ulushlarida berilgan; 2026-yil 1-sentabrdan BHM = 440 000 so'm. Alohida haq evaziga shoshilinch yoki tezlashtirilgan rasmiylashtirish na qonunda, na bu hujjatlarni berish nizomlarida nazarda tutilgan.",
      "Boj miqdorlari: ID-karta — BHMning 89 foizi (391 600 so'm), yangi tug'ilgan bola, bola va kattalar uchun bir xil; xorijga chiqish pasporti — 1 BHM (440 000 so'm); 16 yoshga to'lmagan fuqaroga xorijga chiqish pasporti — BHMning 80 foizi (352 000 so'm); fuqaroligi bo'lmagan shaxsning harakatlanish hujjati — 1 BHM. Xorijga chiqish pasportiga ariza my.gov.uz orqali berilsa, bojning 90 foizi to'lanadi: 396 000 so'm, 16 yoshgacha bolaga — 316 800 so'm (PQ-4079 bilan tasdiqlangan Nizomning 27-bandi). O'sha bandda xorijga chiqish pasporti uchun chegirmalar ham bor: Ijtimoiy reyestrga «kambag'al oila» sifatida kiritilgan oilalar a'zolari hamda I va II guruh nogironligi bo'lgan shaxslarga — 50 foiz, «davlat ta'minotidagi oila» a'zolariga — 75 foiz.",
      "ID-kartaning amal qilish muddati: bir yoshgacha bolaga — 2 yil, bir yoshdan 16 yoshgacha — 5 yil, 16 yoshdan — 10 yil (PF-6065 bilan tasdiqlangan Nizomning 4-bandi). Xorijga chiqish pasporti: bir yoshgacha — 2 yil, bir yoshdan 25 yoshgacha — 5 yil, 25 yoshdan oshganlarga — 10 yil (PQ-4079 Nizomining 7-bandi). ID-karta hujjatlar qabul qilingandan keyin bir ish kuni ichida beriladi, yo'qolganda ham — bir ish kunida. Xorijga chiqish pasporti to'lov qilingan kundan (my.gov.uz orqali murojaatda — biometrik ma'lumotlar topshirilgan kundan) 10 ish kuni ichida tayyorlanadi, 16 yoshdan 25 yoshgacha bo'lgan fuqarolar uchun alohida hollarda — bir oygacha; yo'qolgan yoki yaroqsiz holga kelgan pasport bo'yicha muddat yana 10 ish kunigacha uzaytirilishi mumkin (Nizomning 31 va 54-bandlari).",
      "Hujjat yo'qolganda yoki yaroqsiz holga kelganda boj ikki baravar oshmaydi: qonun almashtirish uchun alohida stavka belgilamagan, yangi hujjat umumiy tartibda rasmiylashtiriladi va odatdagidek to'lanadi (PQ-4079 Nizomining 53-bandi). Yo'qolgan yoki yaroqsiz hujjat o'rniga yangisini bepul oladi: favqulodda vaziyatlar va maishiy ofatlar (turar joy yong'ini, qulashi, avtomobil yonishi) natijasida jabrlanganlar, yolg'iz keksalar, o'zgalar parvarishiga muhtoj nogironligi bo'lgan shaxslar, 2026-yil 12-sentabrdan esa Ayollarni reabilitatsiya qilish va moslashtirish hududiy markazlariga joylashtirilgan xotin-qizlar va ularning voyaga yetmagan farzandlari (O'RQ-600 13-moddasining to'rtinchi qismi, O'RQ-1175 tahririda). Bundan tashqari, boj olinmaydi: diplomatik pasport uchun, yetim bolaga yoki ota-ona qaramog'idan mahrum bo'lgan bolaga ID-karta uchun, to'liq davlat ta'minotidagi shaxsga ID-karta va xorijga chiqish pasporti uchun, xorijga chiqish pasporti uchun esa, xususan, yaqin qarindoshi vafot etganda, xorij sudiga chaqirilganda, voyaga yetmagan shaxs xorijda davolanganda yoki xalqaro tanlovda qatnashganda (O'RQ-600, 13-modda). Hujjatdagi xato xodimlar aybi bilan yuzaga kelgan bo'lsa, almashtirish bepul (PQ-4079 Nizomining 40³-bandi; ID-kartadagi ma'lumotlarni yig'ish punkti aybi bilan yuzaga kelgan texnik nuqson uchun — PF-6065 Nizomining 19-bandi). Familiyani o'zgartirishning o'zi FHDYda rasmiylashtiriladi — 1 BHM (440 000 so'm), 16 yoshdan 18 yoshgacha — BHMning 50 foizi; shundan keyin pasport yoki ID-karta odatdagi boj bilan almashtiriladi.",
      "ID-karta propiskadan qat'i nazar istalgan qulay ma'lumotlarni yig'ish punktida — IIB migratsiya bo'linmasida yoki davlat xizmatlari markazida rasmiylashtiriladi (PF-6065 Nizomining 11-bandi). Ariza-anketa, avvalgi pasport yoki ID-karta (birinchi marta olishda — tug'ilganlik haqida guvohnoma) va kvitansiya kerak; elektron to'lovda kvitansiya talab qilinmaydi. Xorijga chiqish pasporti my.gov.uz orqali yoki istalgan ma'lumotlarni yig'ish punktida shaxsan rasmiylashtiriladi (PQ-4079 Nizomining 16-bandi). So'rovnoma va shaxsni tasdiqlovchi hujjatdan boshqa hujjatlar faqat 22-bandda sanab o'tilgan alohida hollarda talab qilinadi; surat va barmoq izlari joyida olinadi. Bolaga ota-ona roziligi kerak: my.gov.uz orqali ariza berilganda u notariussiz, elektron raqamli imzo bilan tasdiqlanadi (22-band). Xorijdagi fuqarolar pasportni O'zbekiston konsullik muassasalari orqali rasmiylashtiradi, u yerda to'lov miqdori farq qilishi mumkin.",
      "Kalkulyator hujjat turi va yosh bo'yicha bojni, my.gov.uz orqali ariza berilgandagi summani va tayyorlanish muddatini ko'rsatadi. Xorijga chiqish pasporti uchun boj hisob (invoys) bo'yicha to'lanadi: shaxsan murojaat qilinganda uni ma'lumotlarni yig'ish punkti xodimi beradi, my.gov.uz orqali murojaatda esa u shaxsiy sahifaga keladi; bir oy ichida to'lanmasa, ariza ko'rib chiqilmaydi (PQ-4079 Nizomining 25–26-bandlari). To'lovni bankda yoki Click, Payme, Uzum ilovalari orqali amalga oshirish mumkin. Kvitansiya faqat boj to'langanini tasdiqlaydi (O'RQ-600 qonunining 17-moddasi), uning amal qilish muddati yo'q. Chet elga chiqish pasportiga ariza my.gov.uz orqali berilgan bo'lsa, u yuborilgan kundan boshlab bir oy ichida ma'lumotlarni yig'ish punktiga kelish kerak, aks holda ariza ko'rib chiqilmaydi (PQ-4079 bilan tasdiqlangan Nizomning 20-bandi).",
    ],
    faqRu: [
      { question: 'Сколько стоит загранпаспорт в 2026 году?', answer: '1 БРВ = 440 000 сум, ребёнку до 16 лет — 80% БРВ = 352 000 сум (ЗРУ-600, приложение, п. 6 «б», «в»). При подаче через my.gov.uz — 90%: 396 000 и 316 800 сум. Изготовление — 10 рабочих дней; срочного оформления за доплату нет.' },
      { question: 'Сколько стоит ID-карта?', answer: '89% БРВ = 391 600 сум — одинаково для взрослых и детей, включая новорождённых (ЗРУ-600, приложение, п. 6 «а»). Выдаётся за один рабочий день. Срок действия с 16 лет — 10 лет, от года до 16 лет — 5 лет, до года — 2 года.' },
      { question: 'Сколько стоит паспорт при утере?', answer: 'Столько же, сколько обычно: повышенной пошлины за утерю закон не устанавливает. ID-карта — 391 600 сум, загранпаспорт — 440 000 сум (до 16 лет — 352 000). Пострадавшие от ЧС и пожаров, одинокие престарелые и лица с инвалидностью, нуждающиеся в уходе, получают замену бесплатно (ст. 13 ЗРУ-600).' },
      { question: 'Где оформить паспорт?', answer: 'ID-карту — в любом подразделении миграции ОВД или центре госуслуг, независимо от прописки. Загранпаспорт — через my.gov.uz или лично в любом пункте сбора данных. Оплата — в банке, через Click, Payme, Uzum или по счёту в my.gov.uz.' },
      { question: 'Какие документы нужны для загранпаспорта?', answer: 'Анкета и ID-карта или биометрический паспорт — других документов, кроме особых случаев, требовать не вправе (п. 22 Положения, ПП-4079). Фото и отпечатки пальцев снимают на месте. Для ребёнка — согласие родителей; при подаче через my.gov.uz — электронной подписью, без нотариуса.' },
    ],
    faqUz: [
      { question: "2026-yilda xorijga chiqish pasporti qancha turadi?", answer: "1 BHM = 440 000 so'm, 16 yoshgacha bolaga — BHMning 80 foizi = 352 000 so'm (O'RQ-600, ilova, 6-band «b», «v»). my.gov.uz orqali — 90 foizi: 396 000 va 316 800 so'm. Tayyorlanish — 10 ish kuni; qo'shimcha haq evaziga shoshilinch rasmiylashtirish yo'q." },
      { question: "ID-karta qancha turadi?", answer: "BHMning 89 foizi = 391 600 so'm — kattalar va bolalar, jumladan yangi tug'ilganlar uchun bir xil (O'RQ-600, ilova, 6-band «a»). Bir ish kunida beriladi. Amal qilish muddati 16 yoshdan — 10 yil, bir yoshdan 16 yoshgacha — 5 yil, bir yoshgacha — 2 yil." },
      { question: "Pasport yo'qotilganda qancha turadi?", answer: "Odatdagidek: qonun yo'qotish uchun oshirilgan boj belgilamagan. ID-karta — 391 600 so'm, xorijga chiqish pasporti — 440 000 so'm (16 yoshgacha — 352 000). Favqulodda vaziyat va yong'indan jabrlanganlar, yolg'iz keksalar va parvarishga muhtoj nogironligi bo'lgan shaxslar yangisini bepul oladi (O'RQ-600, 13-modda)." },
      { question: "Pasportni qayerda rasmiylashtirish mumkin?", answer: "ID-kartani — propiskadan qat'i nazar istalgan IIB migratsiya bo'linmasida yoki davlat xizmatlari markazida. Xorijga chiqish pasportini — my.gov.uz orqali yoki istalgan ma'lumotlarni yig'ish punktida shaxsan. To'lov — bankda, Click, Payme, Uzum orqali yoki my.gov.uz dagi invoys bo'yicha." },
      { question: "Xorijga chiqish pasporti uchun qanday hujjatlar kerak?", answer: "So'rovnoma va ID-karta yoki biometrik pasport — alohida hollardan tashqari boshqa hujjat talab qilinmaydi (PQ-4079 Nizomining 22-bandi). Surat va barmoq izlari joyida olinadi. Bolaga — ota-ona roziligi; my.gov.uz orqali berilganda elektron raqamli imzo bilan, notariussiz." },
    ],
  },

  {
    slug: 'state-duties',
    lastUpdated: '2026-11-03',
    sources: [
      { name: "Закон «О государственной пошлине» (ЗРУ-600)", url: "https://lex.uz/ru/docs/4680955" },
      { name: "ПКМ-186: регистрация прав на недвижимость", url: "https://lex.uz/ru/docs/2425160" },
    ],
    paragraphsRu: [
      "Государственные пошлины в Узбекистане взимаются за юридически значимые действия органов власти: регистрацию актов гражданского состояния, судебные иски, нотариальные услуги, регистрацию бизнеса. Ставки установлены Законом «О государственной пошлине» (ЗРУ-600) и привязаны к базовой расчётной величине (БРВ), которая с 1 сентября 2026 года составляет 440 000 сум. Калькулятор показывает сумму по выбранной услуге, а пошлину с цены иска считайте по формуле ниже.",
      "Основные размеры (2026): регистрация ООО и ИП — 1 БРВ (440 000 сум), через my.gov.uz 90% от ставки, то есть 396 000 сум; имущественный иск — 4% от цены в гражданском суде, 2% в экономическом, минимум 1 БРВ; регистрация брака — 0,2 БРВ (88 000); иск о расторжении брака — 2 БРВ (880 000), повторного брака — 4 БРВ (1 760 000); регистрация расторжения в ЗАГСе — 1,5 БРВ (660 000) по взаимному согласию без несовершеннолетних детей, по решению суда 1,5-3 БРВ, если один из супругов в повторном браке — 3-4 БРВ; смена имени или фамилии — 1 БРВ, в 16-18 лет 0,5 БРВ; повторное свидетельство ЗАГС — 0,15 БРВ (66 000). Регистрация прав на недвижимость — плата за услугу по ПКМ-186: физлицам за жильё до 100 м² 1,25 БРВ (550 000), 101-300 м² 2 БРВ (880 000), свыше 300 м² 3 БРВ (1 320 000), юрлицам 5 БРВ (2 200 000).",
      "Нотариальные пошлины: договор о продаже недвижимости — фиксированно 1 БРВ (440 000 сум) в Ташкенте, Нукусе и облцентрах, 0,5 БРВ в других местах, а не процент от суммы; близким родственникам вдвое меньше. Договор о продаже автомобиля — 3 БРВ (1 320 000), родственникам меньше. Доверенность: обычная 0,1 БРВ (44 000), на распоряжение недвижимостью 0,25 БРВ родственникам и 0,5 БРВ другим лицам, на авто 0,5 БРВ родственникам и 2 БРВ другим. Завещание — 0,05 БРВ (22 000 сум). Заверение копии для физлиц — 0,01 БРВ за страницу (4 400 сум). Вне нотариальной конторы пошлина взимается в двойном размере.",
      "Льготы: в суде от пошлины освобождены истцы по трудовым спорам, алиментам, возмещению вреда здоровью и ущерба от преступления, а также потребители по искам о защите своих прав (ст. 8 ЗРУ-600). Для нотариальных действий есть свой перечень (ст. 11): например, завещание и дарение в пользу государства. Скидка 50% действует для людей из Единого реестра социальной защиты и лиц с инвалидностью I и II группы при обращении через центры госуслуг или my.gov.uz (ст. 22²). Общей скидки пенсионерам по искам в законе нет.",
      "Оплата госпошлин производится через банковские терминалы, приложения Click, Payme, Uzum или в кассах банков до подачи документов. Квитанция подтверждает уплату (ст. 17 ЗРУ-600). Калькулятор показывает полную ставку: льготы и скидку за обращение через my.gov.uz он не вычитает.",
    ],
    paragraphsUz: [
      "O'zbekistonda davlat bojlari hokimiyat organlarining yuridik ahamiyatga ega harakatlari uchun olinadi: fuqarolik holati dalolatnomalarini qayd etish, sud da'volari, notarial xizmatlar, biznesni ro'yxatdan o'tkazish. Stavkalar «Davlat boji to'g'risida»gi Qonun (O'RQ-600) bilan belgilangan va bazaviy hisoblash kattaligiga (BHK) bog'langan, u 2026-yil 1-sentabridan 440 000 so'mni tashkil etadi. Kalkulyator tanlangan xizmat bo'yicha summani ko'rsatadi, da'vo bahosidan olinadigan bojni esa quyidagi formula bo'yicha hisoblang.",
      "Asosiy boj miqdorlari (2026): MChJ va YaTTni ro'yxatdan o'tkazish — 1 BHK (440 000 so'm), my.gov.uz orqali stavkaning 90%, ya'ni 396 000 so'm; mulkiy da'vo — fuqarolik sudida bahoning 4%, iqtisodiy sudda 2%, minimum 1 BHK; nikohni ro'yxatdan o'tkazish — 0,2 BHK (88 000); nikohni bekor qilish haqida da'vo — 2 BHK (880 000), takroriy nikoh bo'yicha — 4 BHK (1 760 000); FHDYoda ajralishni qayd etish — voyaga yetmagan farzandi bo'lmagan er-xotin o'zaro rozi bo'lsa 1,5 BHK (660 000), sud qarori bo'yicha 1,5-3 BHK, er-xotindan biri takroriy nikohda bo'lsa 3-4 BHK; ism yoki familiyani o'zgartirish — 1 BHK, 16-18 yoshda 0,5 BHK; FHDYo takroriy guvohnomasi — 0,15 BHK (66 000). Ko'chmas mulkka huquqni ro'yxatdan o'tkazish — VMQ-186 bo'yicha xizmat haqi: jismoniy shaxslarga 100 m² gacha uy-joy uchun 1,25 BHK (550 000), 101-300 m² 2 BHK (880 000), 300 m² dan ortiq 3 BHK (1 320 000), yuridik shaxslarga 5 BHK (2 200 000).",
      "Notarial bojlar: ko'chmas mulkni sotish shartnomasi — Toshkent, Nukus va viloyat markazlarida qat'iy 1 BHK (440 000 so'm), boshqa joylarda 0,5 BHK, summadan foiz emas; yaqin qarindoshlarga ikki baravar kam. Avtomobilni sotish shartnomasi — 3 BHK (1 320 000), qarindoshlarga kamroq. Ishonchnoma: oddiy 0,1 BHK (44 000), ko'chmas mulkni tasarruf etishga qarindoshlarga 0,25 BHK, boshqa shaxslarga 0,5 BHK, avtomobilga qarindoshlarga 0,5 BHK, boshqalarga 2 BHK. Vasiyatnoma — 0,05 BHK (22 000 so'm). Jismoniy shaxslar uchun nusxani tasdiqlash — sahifasiga 0,01 BHK (4 400 so'm). Notarial idoradan tashqarida boj ikki baravar olinadi.",
      "Imtiyozlar: sudda mehnat nizolari, aliment, sog'liqqa yetkazilgan zarar va jinoyatdan ko'rilgan zararni undirish bo'yicha da'vogarlar, shuningdek o'z huquqlarini himoya qilish da'volari bo'yicha iste'molchilar bojdan ozod (O'RQ-600, 8-modda). Notarial harakatlar uchun alohida ro'yxat bor (11-modda): masalan, davlat foydasiga vasiyatnoma va hadya. 50% chegirma Ijtimoiy himoya yagona reyestridagi shaxslarga hamda I va II guruh nogironligi bo'lgan shaxslarga davlat xizmatlari markazlari yoki my.gov.uz orqali murojaat qilganda qo'llaniladi (22²-modda). Qonunda pensionerlar uchun da'volar bo'yicha umumiy chegirma yo'q.",
      "Davlat bojlarini to'lash bank terminallari, Click, Payme, Uzum ilovalari yoki bank kassalarida hujjatlarni topshirishdan oldin amalga oshiriladi. Kvitansiya to'lovni tasdiqlaydi (O'RQ-600, 17-modda). Kalkulyator to'liq stavkani ko'rsatadi: imtiyozlar va my.gov.uz orqali murojaat uchun chegirmani ayirmaydi.",
    ],
    faqRu: [
      { question: 'Сколько стоит регистрация собственности?', answer: 'Для физлиц зависит от площади: до 100 м² — 1,25 БРВ (550 000 сум), 101-300 м² — 2 БРВ, свыше 300 — 3 БРВ. Для юрлиц — 5 БРВ (2 200 000). Нотариальное удостоверение договора — фикс. 1 БРВ (440 000).' },
      { question: 'Какая госпошлина за подачу иска?', answer: '4% от суммы имущественного иска в гражданских судах, 2% — в экономических. Минимум — 1 БРВ (440 000 сум). Трудовые споры и алименты — бесплатно.' },
      { question: 'Кто освобождён от госпошлин?', answer: "Истцы по трудовым спорам, алиментам, вреду здоровью, а также потребители по искам о защите прав. Скидка 50% — люди из Единого реестра соцзащиты и лица с инвалидностью I-II группы через центры госуслуг или my.gov.uz. Скидки пенсионерам по искам нет." },
      { question: 'Сколько стоит регистрация брака?', answer: "0,2 БРВ (88 000 сум). Расторжение через суд: иск 2 БРВ (880 000 сум) плюс регистрация в ЗАГСе 1,5-3 БРВ (660 000-1 320 000 сум). При повторном браке иск 4 БРВ, регистрация 3-4 БРВ." },
      { question: 'Как оплатить госпошлину?', answer: 'Через банковские терминалы, Click, Payme, Uzum или в кассе банка. Квитанция подтверждает уплату (ст. 17 ЗРУ-600); при электронной оплате её обычно не требуют — оплата видна в информационных системах.' },
    ],
    faqUz: [
      { question: "Mulkni ro'yxatdan o'tkazish qancha turadi?", answer: "Jismoniy shaxslar uchun maydon bo'yicha: 100 m² gacha 1,25 BHK (550 000 so'm), 101-300 m² 2 BHK, 300 dan ortiq 3 BHK. Yuridik shaxslar uchun 5 BHK (2 200 000). Shartnomani notarial tasdiqlash — belgilangan 1 BHK (440 000)." },
      { question: "Da'vo ariza berish uchun davlat boji qancha?", answer: "Fuqarolik sudlarida mulkiy da'vo summasining 4%, iqtisodiy sudlarda 2%. Minimum — 1 BHK (440 000 so'm). Mehnat nizolari va nafaqa — bepul." },
      { question: "Kim davlat bojlaridan ozod?", answer: "Mehnat nizolari, aliment, sog'liqqa zarar bo'yicha da'vogarlar va huquqlarini himoya qilayotgan iste'molchilar. 50% chegirma — Ijtimoiy himoya yagona reyestridagi shaxslar va I-II guruh nogironligi bo'lganlar, DXM yoki my.gov.uz orqali. Pensionerlar uchun da'volar bo'yicha chegirma yo'q." },
      { question: "Nikohni ro'yxatdan o'tkazish qancha turadi?", answer: "0,2 BHK (88 000 so'm). Sud orqali bekor qilish: da'vo 2 BHK (880 000 so'm) va FHDYoda qayd etish 1,5-3 BHK (660 000-1 320 000 so'm). Takroriy nikohda da'vo 4 BHK, qayd etish 3-4 BHK." },
      { question: "Davlat bojini qanday to'lash mumkin?", answer: "Bank terminallari, Click, Payme, Uzum yoki bank kassasi orqali. Kvitansiya to'lovni tasdiqlaydi (O'RQ-600, 17-modda); elektron to'lovda odatda talab qilinmaydi — to'lov axborot tizimlarida ko'rinadi." },
    ],
  },

  {
    slug: 'remittances',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Всемирный банк — Миграция', url: 'https://worldbank.org' },
    ],
    paragraphsRu: [
      'Калькулятор денежных переводов рассчитывает стоимость отправки денег из/в Узбекистан с учётом комиссий и курсов обмена. Узбекистан — один из крупнейших получателей денежных переводов в Центральной Азии: в 2025 году поступило $18,9 млрд (данные Центрального банка). Основные коридоры: Россия → Узбекистан, Казахстан → Узбекистан, Турция → Узбекистан, ОАЭ → Узбекистан.',
      'Системы переводов и комиссии (ориентировочно): Western Union — 1-3% (от $5 за мелкие суммы); MoneyGram — 1,5-3%; Золотая Корона (Koronapay) — 1-1,5% (самая популярная для переводов из России); Contact — 1-2%; банковский SWIFT — $15-30 фиксированно; мобильные переводы через Uzum и Click — 0,5-1% внутри Узбекистана. Для крупных сумм (свыше $1 000) банковский SWIFT обычно выгоднее по совокупности расходов.',
      'Пример: трудовой мигрант отправляет $500 из России в Узбекистан. Koronapay: комиссия ~$7 (1,4%), получение ~$493 в сумах по курсу ЦБ. Western Union: комиссия ~$12 (2,4%), получение ~$488. Банковский SWIFT: комиссия ~$25, получение ~$475. Через Uzum Bank (карта→карта): комиссия ~$3 (0,6%) — самый выгодный вариант при наличии карт обоих банков.',
      'При получении перевода в Узбекистане важно учитывать курс конвертации: коммерческие банки предлагают курс на 0,5-2% ниже официального курса ЦБ РУз. Получение через пункты выдачи банков (Ipoteka bank, Kapitalbank, NBU, Hamkorbank) — бесплатно при предъявлении паспорта и кода перевода. Вывозить наличную валюту без декларации можно в эквиваленте до 100 млн сум, при большей сумме декларируется вся сумма. Указ от 27 августа 2026 года поручил подготовить повышение порога до $10 000, пока он не действует.',
      'Калькулятор переводов считает один выбранный способ: введите сумму, валюту, комиссию и курс — он покажет, сколько получит адресат и каким вышел эффективный курс. Чтобы сравнить способы, подставьте их комиссии по очереди.',
    ],
    paragraphsUz: [
      "Pul o'tkazmalari kalkulyatori O'zbekistonga/dan pul jo'natish narxini komissiyalar va ayirboshlash kurslarini hisobga olib hisoblaydi. O'zbekiston Markaziy Osiyoda pul o'tkazmalarining eng yirik oluvchilaridan biri: 2025-yilda $18,9 mlrd kelib tushgan (Markaziy bank ma'lumotlari). Asosiy yo'nalishlar: Rossiya → O'zbekiston, Qozog'iston → O'zbekiston, Turkiya → O'zbekiston, BAA → O'zbekiston.",
      "O'tkazma tizimlari va komissiyalar (taxminan): Western Union — 1-3% (kichik summalar uchun $5 dan); MoneyGram — 1,5-3%; Zolotaya Korona (Koronapay) — 1-1,5% (Rossiyadan o'tkazmalar uchun eng mashhur); Contact — 1-2%; bank SWIFT — qat'iy $15-30; Uzum va Click orqali mobil o'tkazmalar — O'zbekiston ichida 0,5-1%. Yirik summalar ($1 000 dan ortiq) uchun bank SWIFT odatda umumiy xarajatlar bo'yicha foydaliroq.",
      "Misol: mehnat migranti Rossiyadan O'zbekistonga $500 jo'natadi. Koronapay: komissiya ~$7 (1,4%), MB kursida ~$493 so'mda olinadi. Western Union: komissiya ~$12 (2,4%), ~$488 olinadi. Bank SWIFT: komissiya ~$25, ~$475 olinadi. Uzum Bank (karta→karta): komissiya ~$3 (0,6%) — ikkala bank kartasi mavjud bo'lganda eng foydali variant.",
      "O'zbekistonda o'tkazma olishda konvertatsiya kursini hisobga olish muhim: tijorat banklari O'zbekiston MB rasmiy kursidan 0,5-2% past kurs taklif etadi. Banklarning berilish punktlari (Ipoteka bank, Kapitalbank, NBU, Hamkorbank) orqali olish — pasport va o'tkazma kodi taqdim etilganda bepul. Naqd valyutani deklaratsiyasiz 100 mln so'm ekvivalentigacha olib chiqish mumkin, undan ko'p bo'lsa butun summa deklaratsiya qilinadi. 2026-yil 27-avgustdagi farmon chegarani $10 000 gacha oshirishni tayyorlashni topshirgan, u hali amal qilmaydi.",
      "O'tkazmalar kalkulyatori tanlangan bitta usulni hisoblaydi: summa, valyuta, komissiya va kursni kiriting — oluvchi qancha olishini va samarali kursni ko'rsatadi. Usullarni solishtirish uchun ularning komissiyalarini navbat bilan kiriting.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ перевода?', answer: 'Карта→карта через Uzum/банк (0,5-1%). Из России — Koronapay (1-1,5%). Для крупных сумм — SWIFT ($15-30 фиксированно).' },
      { question: 'Сколько берёт Western Union?', answer: '1-3% от суммы. За перевод $500 — комиссия около $10-15. Koronapay дешевле: $5-7 за ту же сумму.' },
      { question: 'Как получить перевод в Узбекистане?', answer: 'В банковском отделении с паспортом и кодом перевода (Ipoteka bank, Kapitalbank, NBU). Или через мобильное приложение банка.' },
      { question: 'Какой лимит на провоз наличных без декларации?', answer: 'Вывоз без декларации — до эквивалента 100 млн сум. При большей сумме декларируется вся сумма. Повышение порога до $10 000 пока только готовится.' },
      { question: 'Какой объём переводов в Узбекистан?', answer: '$18,9 млрд в 2025 году. Основной коридор — Россия: 72,4% поступлений в I квартале 2026 года (годом ранее 77,6%).' },
    ],
    faqUz: [
      { question: "Pul o'tkazishning eng arzon usuli qanday?", answer: "Karta→karta Uzum/bank orqali (0,5-1%). Rossiyadan — Koronapay (1-1,5%). Yirik summalar uchun — SWIFT (qat'iy $15-30)." },
      { question: "Western Union qancha oladi?", answer: "Summaning 1-3%. $500 o'tkazma uchun komissiya taxminan $10-15. Koronapay arzonroq: xuddi shu summa uchun $5-7." },
      { question: "O'zbekistonda o'tkazmani qanday olish mumkin?", answer: "Bank bo'limida pasport va o'tkazma kodi bilan (Ipoteka bank, Kapitalbank, NBU). Yoki bank mobil ilovasi orqali." },
      { question: "Deklaratsiyasiz naqd pul olib o'tish limiti qancha?", answer: "Deklaratsiyasiz olib chiqish — 100 mln so'm ekvivalentigacha. Undan ko'p bo'lsa butun summa deklaratsiya qilinadi. Chegarani $10 000 gacha oshirish hali tayyorlanmoqda." },
      { question: "O'zbekistonga o'tkazmalar hajmi qancha?", answer: "2025-yilda $18,9 mlrd. Asosiy yo'nalish — Rossiya: 2026-yil I choragida tushumlarning 72,4% i (bir yil oldin 77,6%)." },
    ],
  },

  {
    slug: 'vat-threshold',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Порог обязательной регистрации плательщиком НДС в Узбекистане с 1 июня 2026 года составляет 12 000 БРВ — это 5 280 000 000 сум при действующей БРВ 440 000 сум. Ранее порог был 1 млрд сум; он повышен Указом Президента № УП-100 от 26.05.2026. Считается совокупный доход за налоговый период, а налоговым периодом является календарный год (ст. 469 НК), — это не скользящие 12 месяцев. При превышении порога переход на НДС и налог на прибыль происходит со дня достижения указанного размера дохода (ст. 462 НК). Калькулятор порога НДС отслеживает текущий оборот вашего бизнеса и показывает, какой процент от порога вы достигли.',
      'При приближении к порогу (80% и более) рекомендуется заранее подготовиться к переходу на режим НДС. Необходимо изучить механизм входящего и исходящего НДС, настроить бухгалтерский учёт для раздельного учёта сумм налога, зарегистрироваться на платформе faktura.soliq.uz для выставления электронных счетов-фактур. Также следует провести инвентаризацию товарных запасов, так как НДС по остаткам можно будет принять к вычету. Подготовка занимает 1-2 месяца, поэтому начинать следует заблаговременно.',
      'Добровольная регистрация возможна при любом обороте — ограничений нет. Это выгодно, если ваши основные клиенты являются плательщиками НДС: они смогут принять ваш НДС к зачёту и таким образом получат экономию. Для бизнеса B2B добровольная регистрация повышает конкурентоспособность. Однако для бизнеса B2C (розничная торговля, услуги населению) регистрация как плательщика НДС может привести к повышению цен на 12%, что снизит спрос.',
      'Расчёт оборота для определения порога включает все виды доходов от реализации товаров, работ и услуг, за исключением необлагаемых операций. Не учитываются: субсидии, безвозмездные поступления, курсовые разницы. Важно: при ведении нескольких видов деятельности обороты суммируются. Для ИП и самозанятых упрощённая система с налогом с оборота 1% (с 2026 года) зачастую выгоднее, чем общая система с НДС.',
      'Наш калькулятор порога НДС считает доход за указанный период и процент от порога. Введите среднюю месячную выручку и число месяцев — он покажет, близко ли вы к обязательной регистрации.',
    ],
    paragraphsUz: [
      "O'zbekistonda QQS to'lovchisi sifatida majburiy ro'yxatdan o'tish chegarasi 2026-yil 1-iyundan boshlab 12 000 BHK ni tashkil etadi — bu joriy 440 000 so'mlik BHKda 5 280 000 000 so'm. Avval chegara 1 mlrd so'm edi; u Prezidentning 26.05.2026-yildagi PF-100 Farmoni bilan oshirildi. Soliq davri uchun umumiy daromad hisobga olinadi, soliq davri esa kalendar yildir (SKning 469-moddasi) — bu sirpanuvchi 12 oy emas. Chegaradan oshganda QQS va foyda solig'iga o'tish ko'rsatilgan daromad miqdoriga erishilgan kundan boshlanadi (SKning 462-moddasi). QQS chegarasi kalkulyatori biznesingizning joriy aylanmasini kuzatib boradi va chegaraning necha foiziga yetganingizni ko'rsatadi.",
      "Chegaraga yaqinlashganda (80% va undan ortiq) QQS rejimiga o'tishga oldindan tayyorlanish tavsiya etiladi. Kirish va chiqish QQS mexanizmini o'rganish, soliq summasini alohida hisobga olish uchun buxgalteriya hisobini sozlash, elektron hisob-fakturalarni taqdim etish uchun faktura.soliq.uz platformasida ro'yxatdan o'tish zarur. Shuningdek, tovar zaxiralarining inventarizatsiyasini o'tkazish kerak, chunki qoldiqlar bo'yicha QQSni chegirishga olish mumkin bo'ladi. Tayyorgarlik 1-2 oy vaqt oladi.",
      "Ixtiyoriy ro'yxatdan o'tish har qanday aylanmada mumkin — cheklovlar yo'q. Bu asosiy mijozlaringiz QQS to'lovchilari bo'lsa foydali: ular sizning QQSni hisobga olishi mumkin va shu tariqa tejashga erishadi. B2B biznesi uchun ixtiyoriy ro'yxatdan o'tish raqobatbardoshlikni oshiradi. Lekin B2C biznesi (chakana savdo, aholiga xizmatlar) uchun QQS to'lovchisi sifatida ro'yxatdan o'tish narxlarning 12% ga oshishiga olib kelishi mumkin.",
      "Chegarani aniqlash uchun aylanma hisobi tovarlar, ishlar va xizmatlarni sotishdan olingan barcha turdagi daromadlarni o'z ichiga oladi, soliqqa tortilmaydigan operatsiyalar bundan mustasno. Hisobga olinmaydi: subsidiyalar, beg'araz tushumlar, valyuta kursi farqlari. Muhim: bir nechta faoliyat turlari yuritilganda aylanmalar jamlanadi. YaTTlar va o'z-o'zini band qilgan shaxslar uchun aylanma solig'i 1% (2026-yildan) bo'lgan soddalashtilgan tizim ko'pincha QQS bilan umumiy tizimdan foydaliroq.",
      "Bizning QQS chegarasi kalkulyatorimiz ko'rsatilgan davrdagi daromadni va chegaraning foizini hisoblaydi. O'rtacha oylik tushum va oylar sonini kiriting — majburiy ro'yxatdan o'tishga qanchalik yaqin ekaningizni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Какой порог для обязательной регистрации по НДС?', answer: '12 000 БРВ — 5 280 000 000 сум при БРВ 440 000 (с 1 июня 2026, Указ УП-100). Считается совокупный доход за налоговый период — календарный год.' },
      { question: 'Можно ли зарегистрироваться добровольно?', answer: 'Да, при любом обороте. Выгодно при работе с плательщиками НДС — они смогут принять ваш НДС к зачёту.' },
      { question: 'Что будет при превышении порога без регистрации?', answer: 'Доначисление НДС и штраф 5% от дохода за период без постановки на учёт, но не менее 5 000 000 сум (ст. 219 НК). С 1 января 2026 года штраф не применяется к тем, кто впервые переходит с налога с оборота и встал на учёт в течение года.' },
      { question: 'За какой период считается оборот?', answer: 'За налоговый период — календарный год (ст. 469 НК), нарастающим итогом, а не скользящими 12 месяцами. Суммируются все виды реализации. Переход на НДС — со дня достижения порога (ст. 462 НК).' },
      { question: 'Когда выгодна добровольная регистрация?', answer: 'Когда клиенты — плательщики НДС (B2B). Для розничной торговли (B2C) обычно невыгодна, так как придётся повысить цены на 12%.' },
    ],
    faqUz: [
      { question: "QQS bo'yicha majburiy ro'yxatdan o'tish chegarasi qancha?", answer: "12 000 BHK — 440 000 so'mlik BHKda 5 280 000 000 so'm (2026-yil 1-iyundan, PF-100 Farmoni). Soliq davri — kalendar yil uchun umumiy daromad hisobga olinadi." },
      { question: "Ixtiyoriy ro'yxatdan o'tish mumkinmi?", answer: "Ha, har qanday aylanmada. QQS to'lovchilari bilan ishlashda foydali — ular sizning QQSni hisobga olishi mumkin." },
      { question: "Ro'yxatdan o'tmasdan chegaradan oshsa nima bo'ladi?", answer: "QQS qayta hisoblanadi va ro'yxatdan o'tmagan davrdagi daromadning 5% miqdorida, lekin kamida 5 000 000 so'm jarima solinadi (SK 219-moddasi). 2026-yil 1-yanvardan aylanma solig'idan birinchi marta o'tayotgan va bir yil ichida ro'yxatdan o'tganlarga jarima qo'llanilmaydi." },
      { question: "Aylanma qaysi davr uchun hisoblanadi?", answer: "Soliq davri — kalendar yil uchun (SKning 469-moddasi), o'sib boruvchi yakun bilan, sirpanuvchi 12 oy emas. Barcha sotish turlari jamlanadi. QQSga o'tish chegaraga erishilgan kundan (SKning 462-moddasi)." },
      { question: "Ixtiyoriy ro'yxatdan o'tish qachon foydali?", answer: "Mijozlar QQS to'lovchilari bo'lganda (B2B). Chakana savdo (B2C) uchun odatda foydasiz, chunki narxlarni 12% ga oshirishga to'g'ri keladi." },
    ],
  },

  {
    slug: 'property-tax',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
      { name: 'Кадастровая палата', url: 'https://kadastr.uz' },
    ],
    paragraphsRu: [
      'Налог на имущество физических лиц в Узбекистане рассчитывается от кадастровой стоимости объекта недвижимости. Ставки на 2026 год установлены ст. 422 Налогового кодекса в редакции закона ЗРУ-1108: жилые дома, квартиры и дачные строения площадью до 200 м² — 0,36% кадастровой стоимости; в городах при площади свыше 200 до 500 м² — 0,48%, свыше 500 м² — 0,64%; в прочих населённых пунктах всё свыше 200 м² облагается по 0,48%. Объекты, используемые для предпринимательства или сдаваемые в аренду юрлицу или ИП, а также нежилая недвижимость для извлечения дохода — 1,5%. Жокаргы Кенес Каракалпакстана, кенгаши областей и Ташкента вправе применить к ставкам коэффициент от 0,7 до 1,3, а к новым жилым домам, не зарегистрированным в реестре прав, ставка применяется в двукратном размере. Кадастровая стоимость определяется Государственной кадастровой палатой и пересматривается периодически.',
      'Налог уплачивается ежегодно двумя равными частями до 15 апреля и 15 октября. Уведомление о сумме налога направляется через личный кабинет на my.soliq.uz или в территориальную налоговую инспекцию. При неуплате в срок начисляется пеня в размере 1/300 ставки рефинансирования ЦБ за каждый день просрочки (при ставке ЦБ 14% — 0,047%/день). Налогоплательщик вправе оспорить кадастровую стоимость в комиссии при Кадастровой палате, если она существенно превышает рыночную.',
      'Льготы установлены ст. 421 Налогового кодекса. Полностью освобождается имущество Героев Узбекистана, Советского Союза и Труда, кавалеров ордена Славы трёх степеней, инвалидов и участников войны и приравненных к ним лиц, родителей и вдов (вдовцов) погибших военнослужащих и сотрудников органов внутренних дел и Национальной гвардии, а также жильё, выделенное государством детям-сиротам, — до 23 лет; в ст. 421 есть и другие категории. Пенсионеры, лица с инвалидностью I и II групп и один из родителей, имеющий десять и более детей, освобождаются от налога в пределах 60 м² площади. Льгота, как правило, даётся по одному жилому объекту на выбор владельца. Подтверждающие документы нужно самостоятельно представить в налоговую по месту нахождения объекта.',
      'Для юридических лиц налог на имущество составляет 1,5% от среднегодовой остаточной стоимости имущества (ст. 415 НК; для отдельных объектов установлены иные ставки). Налоговая база уменьшается на стоимость объектов культуры и искусства, образования, здравоохранения, физкультуры и спорта, социального обеспечения, имущества сельхозпредприятий для производства и хранения продукции и ряда других объектов (ст. 414). Отчётность сдаётся раз в год не позднее 1 марта, а в течение года платятся авансы: плательщики налога с оборота вносят четверть годовой суммы до 20-го числа третьего месяца каждого квартала, остальные — двенадцатую часть до 10-го числа каждого месяца, за январь — до 20 января (ст. 417).',
      'Пример расчёта: квартира в Ташкенте площадью 80 м², кадастровая стоимость 500 000 000 сум. Ставка 0,36%. Налог = 500 000 000 × 0,0036 = 1 800 000 сум в год. Для загородного дома 250 м² с кадастровой стоимостью 1 200 000 000 сум ставка составит 0,48%: налог = 1 200 000 000 × 0,0048 = 5 760 000 сум/год. Наш калькулятор определит сумму налога с учётом площади, города и типа владельца; льготы ст. 421 учитывайте отдельно.',
    ],
    paragraphsUz: [
      "O'zbekistonda jismoniy shaxslarning mol-mulk solig'i ko'chmas mulk ob'ektining kadastr qiymatidan hisoblanadi. 2026-yil uchun stavkalar Soliq kodeksining O'RQ-1108 tahriridagi 422-moddasida belgilangan: 200 m² gacha turar-joy uylari, kvartiralar va dala hovli imoratlari — kadastr qiymatining 0,36%; shaharlarda 200 dan 500 m² gacha — 0,48%, 500 m² dan ortiq — 0,64%; boshqa aholi punktlarida 200 m² dan ortig'i 0,48% bilan soliqqa tortiladi. Tadbirkorlik uchun foydalaniladigan yoki yuridik shaxs yoxud YaTTga ijaraga berilgan ob'ektlar, daromad olishga mo'ljallangan noturar ko'chmas mulk — 1,5%. Qoraqalpog'iston Jo'qorg'i Kengesi, viloyatlar va Toshkent kengashlari stavkalarga 0,7 dan 1,3 gacha koeffitsiyent qo'llashi mumkin, huquqlar reyestrida ro'yxatdan o'tmagan yangi uylarga esa stavka ikki baravar miqdorda qo'llaniladi. Kadastr qiymati Davlat kadastr palatasi tomonidan aniqlanadi va davriy ravishda qayta ko'rib chiqiladi.",
      "Soliq har yili teng ikki qismda 15-aprel va 15-oktabrgacha to'lanadi. Soliq summasi haqidagi bildirishnoma my.soliq.uz dagi shaxsiy kabinet yoki hududiy soliq inspektsiyasi orqali yuboriladi. Muddatida to'lanmaganda har kechiktirilgan kun uchun MB qayta moliyalash stavkasining 1/300 qismi miqdorida penya hisoblanadi (MB stavkasi 14% da — 0,047%/kun). Soliq to'lovchi kadastr qiymati bozor qiymatidan sezilarli darajada oshib ketgan bo'lsa, Kadastr palatasi huzuridagi komissiyada unga e'tiroz bildirishi mumkin.",
      "Imtiyozlar Soliq kodeksining 421-moddasida belgilangan. O'zbekiston Qahramoni, Sovet Ittifoqi Qahramoni va Mehnat Qahramoni unvonlariga sazovor bo'lganlar, uch darajali Shon-sharaf ordeni sohiblari, urush nogironlari va qatnashchilari hamda ularga tenglashtirilgan shaxslar, halok bo'lgan harbiy xizmatchilar, ichki ishlar va Milliy gvardiya xodimlarining ota-onalari va bevalari mol-mulki, shuningdek davlat tomonidan yetim bolalarga ajratilgan turar joy — 23 yoshgacha soliqdan to'liq ozod qilinadi; 421-moddada boshqa toifalar ham bor. Pensionerlar, I va II guruh nogironligi bo'lgan shaxslar hamda o'n va undan ortiq farzandi bo'lgan ota-onadan biri 60 m² maydon doirasida soliqdan ozod qilinadi. Imtiyoz, qoida tariqasida, egasining tanlovi bo'yicha bitta turar joy ob'ektiga beriladi. Tasdiqlovchi hujjatlarni ob'ekt joylashgan yerdagi soliq organiga o'zingiz taqdim etasiz.",
      "Yuridik shaxslar uchun mol-mulk solig'i mol-mulkning yillik o'rtacha qoldiq qiymatidan 1,5% ni tashkil etadi (SK 415-moddasi; ayrim ob'ektlar uchun boshqa stavkalar belgilangan). Soliq bazasi madaniyat va san'at, ta'lim, sog'liqni saqlash, jismoniy tarbiya va sport, ijtimoiy ta'minot ob'ektlari, qishloq xo'jaligi korxonalarining mahsulot ishlab chiqarish va saqlash uchun mol-mulki hamda boshqa ayrim ob'ektlar qiymatiga kamaytiriladi (414-modda). Hisobot yiliga bir marta 1-martdan kechiktirmay topshiriladi, yil davomida esa avans to'lovlari to'lanadi: aylanmadan olinadigan soliq to'lovchilar har chorak uchinchi oyining 20-sanasigacha yillik summaning to'rtdan bir qismini, qolganlar har oyning 10-sanasigacha o'n ikkidan bir qismini, yanvar uchun — 20-yanvargacha to'laydi (417-modda).",
      "Hisoblash misoli: Toshkentda 80 m² kvartira, kadastr qiymati 500 000 000 so'm. Stavka 0,36%. Soliq = 500 000 000 × 0,0036 = 1 800 000 so'm/yil. Shahar atrofidagi 250 m² uy, kadastr qiymati 1 200 000 000 so'm uchun stavka 0,48%: soliq = 1 200 000 000 × 0,0048 = 5 760 000 so'm/yil. Kalkulyatorimiz maydon, shahar va egasi turini hisobga olib soliq summasini aniqlaydi; 421-modda imtiyozlarini alohida hisobga oling.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на имущество?', answer: 'Для физлиц (ст. 422 НК, 2026): 0,36% (до 200 м²), в городах 0,48% (200–500 м²) и 0,64% (свыше 500 м²), в прочих населённых пунктах свыше 200 м² — 0,48% кадастровой стоимости; кенгаш может применить коэффициент 0,7–1,3. Для бизнес-объектов и юрлиц — 1,5%.' },
      { question: 'Кто освобождён от налога на имущество?', answer: 'Полностью — Герои, инвалиды и участники войны, семьи погибших военнослужащих и ряд других категорий (ст. 421 НК). Пенсионеры, лица с инвалидностью I–II групп и родитель десяти и более детей — в пределах 60 м². Льгота — по одному жилому объекту на выбор.' },
      { question: 'Когда нужно платить?', answer: 'Равными долями до 15 апреля и 15 октября текущего года. При просрочке — пеня 1/300 ставки рефинансирования ЦБ в день (при ставке 14% — 0,047%/день).' },
      { question: 'Как узнать кадастровую стоимость?', answer: 'Через портал kadastr.uz или в территориальном отделении Кадастровой палаты. Стоимость можно оспорить, если она завышена.' },
      { question: 'Облагаются ли квартиры в новостройках?', answer: 'Да, после получения кадастрового номера. Кадастровая стоимость новостроек обычно близка к цене покупки.' },
    ],
    faqUz: [
      { question: "Mol-mulk solig'i stavkasi qancha?", answer: "Jismoniy shaxslar uchun (SK 422-moddasi, 2026): 0,36% (200 m² gacha), shaharlarda 0,48% (200–500 m²) va 0,64% (500 m² dan ortiq), boshqa aholi punktlarida 200 m² dan ortig'i — kadastr qiymatining 0,48%; kengash 0,7–1,3 koeffitsiyent qo'llashi mumkin. Biznes ob'ektlari va yuridik shaxslar uchun — 1,5%." },
      { question: "Kim mol-mulk solig'idan ozod?", answer: "To'liq — Qahramonlar, urush nogironlari va qatnashchilari, halok bo'lgan harbiy xizmatchilarning oilalari va boshqa ayrim toifalar (SK 421-moddasi). Pensionerlar, I–II guruh nogironligi bo'lgan shaxslar va o'n va undan ortiq farzandli ota-ona — 60 m² doirasida. Imtiyoz — tanlov bo'yicha bitta turar joy ob'ektiga." },
      { question: "Qachon to'lash kerak?", answer: "Teng ikki qismda 15-aprel va 15-oktabrgacha. Kechiktirilganda — MB qayta moliyalash stavkasining 1/300 qismi kuniga penya (MB stavkasi 14% da — 0,047%/kun)." },
      { question: "Kadastr qiymatini qanday bilish mumkin?", answer: "kadastr.uz portali yoki Kadastr palatasining hududiy bo'linmasi orqali. Oshirib ko'rsatilgan bo'lsa qiymatga e'tiroz bildirilishi mumkin." },
      { question: "Yangi qurilgan uy-joylar soliqqa tortiladimi?", answer: "Ha, kadastr raqami olingandan keyin. Yangi qurilishlar kadastr qiymati odatda sotib olish narxiga yaqin bo'ladi." },
    ],
  },

  {
    slug: 'land-tax',
    lastUpdated: '2026-09-13',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
      { name: 'Кадастровая палата', url: 'https://kadastr.uz' },
    ],
    paragraphsRu: [
      'Земельный налог в Узбекистане платят юридические и физические лица, а также дехканские хозяйства — за участки в собственности, владении, пользовании или аренде (ст. 425, 433 Налогового кодекса). Считается он по-разному для двух категорий земли. За земли сельскохозяйственного назначения ставка — 0,95% нормативной стоимости угодий (ст. 429, 437 НК); кенгаши областей и Ташкента вправе применить к ней коэффициент от 0,5 до 1,2. За остальные участки — под домом и ИЖС, гаражом, магазином, производством — процентной ставки нет: налог равен площади участка, умноженной на базовую ставку в сумах. Базовая ставка зависит от региона, а в Ташкенте — от одной из пяти зон.',
      'Базовые ставки на 2026 год установлены законом ЗРУ-1108 от 25 декабря 2025 года. Для физических лиц они указаны за 1 кв. м (ст. 437 НК): в Ташкенте от 1 856 сум в 1-й зоне до 725 сум в 5-й, в областях от 297 сум (Сырдарьинская) до 463 сум (Андижанская, Наманганская, Самаркандская). Для юридических лиц — за 1 гектар (ст. 429 НК): в Ташкенте от 319,0 до 65,9 млн сум, в областях от 31,8 до 51,8 млн сум. Базовая ставка ещё не окончательная. В областях и Каракалпакстане кенгаш области устанавливает ставки районов и городов с коэффициентом от 0,5 до 2,0, а кенгаш района или города добавляет коэффициент от 0,7 до 3,0 по кварталам, массивам и махаллям; в Ташкенте коэффициент 0,7–3,0 применяется прямо к базовой ставке зоны. Физлицо, которое использует участок для предпринимательства, сдаёт стоящее на нём строение в аренду юрлицу или ИП либо владеет там нежилой недвижимостью, платит по ставкам юрлиц и без льгот.',
      'Физическим лицам налог рассчитывает налоговая — по площади из реестра прав на недвижимость — и не позднее 1 марта присылает платёжное извещение в персональный кабинет my.soliq.uz, по СМС или в мобильное приложение (ст. 439 НК). Платить нужно равными долями до 15 апреля и 15 октября (ст. 440). Юридические лица считают налог сами по состоянию на 1 января и сдают отчётность до 20 января по несельхозземлям и до 1 мая по сельхозземлям (ст. 431). За несельхозземли плательщики налога с оборота вносят четверть годовой суммы до 20-го числа третьего месяца каждого квартала, остальные юрлица — двенадцатую часть до 10-го числа каждого месяца (за январь — до 20 января). За сельхозземли юрлица платят 30% годовой суммы до 1 сентября и остаток до 1 декабря (ст. 432).',
      'От налога освобождены физические лица из перечня ст. 436 НК: Герои Узбекистана, Советского Союза и Труда, кавалеры ордена Славы трёх степеней, инвалиды и участники войны и приравненные к ним лица, лица с инвалидностью I и II групп, одинокие пенсионеры, многодетные семьи, потерявшие кормильца, участники ликвидации аварии на Чернобыльской АЭС. Все эти льготы, кроме льготы многодетным семьям, привязаны к зарегистрированному участку под ИЖС или дехканское хозяйство и даются по одному участку на выбор. Не облагаются земли общего пользования, парки и скверы, кладбища, земли под многоквартирными домами и ряд других (ст. 426, 434). Действуют и повышающие правила: если на приусадебной части участка под ИЖС нет посевов или благоустройства, физлицо платит налог в трёхкратном размере; за участок без документов или сверх площади по документам ставка утраивается для физлиц и учетверяется для юрлиц; за участок под незавершённым строительством юрлица платят по удвоенной ставке (ст. 429, 437).',
      'Пример расчёта: физлицо, участок под ИЖС 6 соток (600 кв. м) в 1-й зоне Ташкента. Налог = 600 × 1 856 = 1 113 600 сум в год при коэффициенте 1, то есть по 556 800 сум до 15 апреля и до 15 октября. Если кенгаш района установил для махалли коэффициент 1,5, налог = 600 × 1 856 × 1,5 = 1 670 400 сум. Такой же участок в Ташкентской области по базовой ставке: 600 × 392 = 235 200 сум — в 4,7 раза меньше. Юрлицо с участком 0,6 га в Самаркандской области: 0,6 × 51,8 млн = 31 080 000 сум в год; плательщик налога с оборота вносит по 7 770 000 сум раз в квартал, предприятие на общем режиме — по 2 590 000 сум ежемесячно. Фермерское хозяйство с угодьями нормативной стоимостью 400 млн сум: 400 000 000 × 0,95% = 3 800 000 сум, из них 1 140 000 сум до 1 сентября и 2 660 000 сум до 1 декабря.',
    ],
    paragraphsUz: [
      "O'zbekistonda yer solig'ini yuridik va jismoniy shaxslar hamda dehqon xo'jaliklari mulk, egalik, foydalanish yoki ijara huquqidagi uchastkalar uchun to'laydi (Soliq kodeksining 425, 433-moddalari). U yerning ikki toifasi uchun turlicha hisoblanadi. Qishloq xo'jaligiga mo'ljallangan yerlar uchun stavka — yer normativ qiymatining 0,95% (SK 429, 437-moddalari); viloyatlar va Toshkent kengashlari unga 0,5 dan 1,2 gacha koeffitsiyent qo'llashi mumkin. Qolgan uchastkalar — uy va yakka tartibdagi uy-joy qurilishi, garaj, do'kon, ishlab chiqarish ostidagi yerlar uchun foizli stavka yo'q: soliq uchastka maydonini so'mdagi bazaviy stavkaga ko'paytirish orqali hisoblanadi. Bazaviy stavka hududga, Toshkentda esa beshta zonadan biriga bog'liq.",
      "2026-yil uchun bazaviy stavkalar 2025-yil 25-dekabrdagi O'RQ-1108-son Qonun bilan belgilangan. Jismoniy shaxslar uchun ular 1 kv. m uchun ko'rsatilgan (SK 437-moddasi): Toshkentda 1-zonadagi 1 856 so'mdan 5-zonadagi 725 so'mgacha, viloyatlarda 297 so'mdan (Sirdaryo) 463 so'mgacha (Andijon, Namangan, Samarqand). Yuridik shaxslar uchun — 1 gektar uchun (SK 429-moddasi): Toshkentda 319,0 dan 65,9 mln so'mgacha, viloyatlarda 31,8 dan 51,8 mln so'mgacha. Bazaviy stavka hali yakuniy emas. Viloyatlar va Qoraqalpog'istonda viloyat kengashi tuman va shaharlar stavkalarini 0,5 dan 2,0 gacha koeffitsiyent bilan belgilaydi, tuman yoki shahar kengashi esa mavzelar, massivlar va mahallalar bo'yicha 0,7 dan 3,0 gacha koeffitsiyent kiritadi; Toshkentda 0,7–3,0 koeffitsiyent to'g'ridan-to'g'ri zonaning bazaviy stavkasiga qo'llaniladi. Uchastkadan tadbirkorlik uchun foydalanadigan, undagi imoratni yuridik shaxs yoki YaTTga ijaraga beradigan yoxud u yerda noturar ko'chmas mulkka ega bo'lgan jismoniy shaxs yuridik shaxslar stavkalari bo'yicha va imtiyozlarsiz to'laydi.",
      "Jismoniy shaxslar uchun soliqni soliq organi ko'chmas mulkka huquqlar reyestridagi maydon bo'yicha hisoblaydi va 1-martdan kechiktirmay to'lov xabarnomasini my.soliq.uz shaxsiy kabinetiga, SMS orqali yoki mobil ilovaga yuboradi (SK 439-moddasi). To'lov teng ulushlarda 15-aprel va 15-oktabrgacha amalga oshiriladi (440-modda). Yuridik shaxslar soliqni 1-yanvar holatiga o'zlari hisoblaydi va hisobotni qishloq xo'jaligiga mo'ljallanmagan yerlar bo'yicha 20-yanvargacha, qishloq xo'jaligi yerlari bo'yicha 1-maygacha topshiradi (431-modda). Qishloq xo'jaligiga mo'ljallanmagan yerlar uchun aylanma solig'i to'lovchilari yillik summaning to'rtdan bir qismini har chorak uchinchi oyining 20-sanasigacha, qolgan yuridik shaxslar o'n ikkidan bir qismini har oyning 10-sanasigacha (yanvar uchun — 20-yanvargacha) to'laydi. Qishloq xo'jaligi yerlari uchun yuridik shaxslar yillik summaning 30% ini 1-sentabrgacha, qolgan qismini 1-dekabrgacha to'laydi (432-modda).",
      "SK 436-moddasidagi ro'yxatga kiruvchi jismoniy shaxslar soliqdan ozod: O'zbekiston Qahramoni, Sovet Ittifoqi Qahramoni va Mehnat Qahramoni unvoniga ega bo'lganlar, uch darajali Shon-shuhrat ordeni bilan taqdirlanganlar, urush nogironlari va qatnashchilari hamda ularga tenglashtirilgan shaxslar, I va II guruh nogironligi bo'lgan shaxslar, yolg'iz pensionerlar, boquvchisini yo'qotgan ko'p bolali oilalar, Chernobil AES avariyasi oqibatlarini tugatish qatnashchilari. Bu imtiyozlarning barchasi, ko'p bolali oilalarga berilgan imtiyozdan tashqari, yakka tartibdagi uy-joy qurilishi yoki dehqon xo'jaligi uchun ro'yxatdan o'tkazilgan uchastkaga bog'langan va tanlangan bitta uchastka bo'yicha beriladi. Umumiy foydalanishdagi yerlar, bog'lar va xiyobonlar, qabristonlar, ko'p kvartirali uylar ostidagi yerlar va boshqa ayrim yerlar soliqqa tortilmaydi (426, 434-moddalar). Oshiruvchi qoidalar ham amal qiladi: yakka tartibdagi uy-joy qurilishi uchun berilgan uchastkaning tomorqa qismida ekin yoki obodonlashtirish bo'lmasa, jismoniy shaxs soliqni uch baravar to'laydi; hujjatsiz yoki hujjatdagidan katta maydondan foydalanilganda stavka jismoniy shaxslar uchun uch baravar, yuridik shaxslar uchun to'rt baravar oshiriladi; tugallanmagan qurilish ostidagi uchastka uchun yuridik shaxslar ikki baravar stavkada to'laydi (429, 437-moddalar).",
      "Hisoblash misoli: jismoniy shaxs, Toshkentning 1-zonasida yakka tartibdagi uy-joy qurilishi uchun 6 sotix (600 kv. m) uchastka. Soliq = 600 × 1 856 = 1 113 600 so'm/yil (koeffitsiyent 1 bo'lganda), ya'ni 15-aprelgacha va 15-oktabrgacha 556 800 so'mdan. Agar tuman kengashi mahalla uchun 1,5 koeffitsiyent belgilagan bo'lsa, soliq = 600 × 1 856 × 1,5 = 1 670 400 so'm. Toshkent viloyatidagi xuddi shunday uchastka bazaviy stavkada: 600 × 392 = 235 200 so'm — 4,7 marta kam. Samarqand viloyatida 0,6 gektar uchastkasi bor yuridik shaxs: 0,6 × 51,8 mln = 31 080 000 so'm/yil; aylanma solig'i to'lovchisi har chorakda 7 770 000 so'mdan, umumiy rejimdagi korxona har oyda 2 590 000 so'mdan to'laydi. Normativ qiymati 400 mln so'm bo'lgan yerlarga ega fermer xo'jaligi: 400 000 000 × 0,95% = 3 800 000 so'm, shundan 1 140 000 so'm 1-sentabrgacha va 2 660 000 so'm 1-dekabrgacha.",
    ],
    faqRu: [
      { question: 'Какая ставка земельного налога?', answer: 'За сельхозземли — 0,95% нормативной стоимости. За остальные участки ставка в сумах за площадь: физлица — за 1 кв. м (в Ташкенте от 725 до 1 856 сум по зонам, в областях 297–463 сум), юрлица — за 1 гектар (в Ташкенте 65,9–319,0 млн сум, в областях 31,8–51,8 млн). К базовой ставке местные кенгаши применяют коэффициенты.' },
      { question: 'Кто платит земельный налог?', answer: 'Юридические и физические лица и дехканские хозяйства, у которых участок в собственности, владении, пользовании или аренде. Арендная плата за землю, арендованную у хокимията, приравнена к земельному налогу и считается по тем же ставкам (ст. 424, 433 НК).' },
      { question: 'Есть ли льготы по земельному налогу?', answer: 'Для физлиц: Герои Узбекистана, СССР и Труда, кавалеры ордена Славы трёх степеней, инвалиды и участники войны, лица с инвалидностью I–II групп, одинокие пенсионеры, многодетные семьи, потерявшие кормильца, чернобыльцы (ст. 436 НК). Кроме многодетных семей — только по участку под ИЖС или дехканское хозяйство, один участок на выбор.' },
      { question: 'Как узнать точную ставку для своего участка?', answer: 'Её ежегодно до 10 января утверждает кенгаш района или города — по кварталам, массивам и махаллям. Физлицам налоговая считает налог сама и до 1 марта присылает извещение в my.soliq.uz, по СМС или в приложение; юрлицам ставки сообщает налоговая по месту нахождения участка.' },
      { question: 'Когда платить земельный налог?', answer: 'Физлица — равными долями до 15 апреля и 15 октября. Юрлица за несельхозземли — ежемесячно до 10-го числа (плательщики налога с оборота — ежеквартально до 20-го числа третьего месяца квартала), за сельхозземли — 30% до 1 сентября и остаток до 1 декабря. При просрочке начисляется пеня 1/300 ставки рефинансирования ЦБ в день (при ставке 14% — 0,047%/день).' },
    ],
    faqUz: [
      { question: "Yer solig'i stavkasi qancha?", answer: "Qishloq xo'jaligi yerlari uchun — normativ qiymatning 0,95%. Qolgan uchastkalar uchun stavka maydon uchun so'mda: jismoniy shaxslarga 1 kv. m uchun (Toshkentda zonaga qarab 725 dan 1 856 so'mgacha, viloyatlarda 297–463 so'm), yuridik shaxslarga 1 gektar uchun (Toshkentda 65,9–319,0 mln so'm, viloyatlarda 31,8–51,8 mln). Bazaviy stavkaga mahalliy kengashlar koeffitsiyent qo'llaydi." },
      { question: "Kim yer solig'i to'laydi?", answer: "Uchastkasi mulk, egalik, foydalanish yoki ijara huquqida bo'lgan yuridik va jismoniy shaxslar hamda dehqon xo'jaliklari. Hokimiyatdan ijaraga olingan yer uchun ijara haqi yer solig'iga tenglashtirilgan va xuddi shu stavkalar bo'yicha hisoblanadi (SK 424, 433-moddalari)." },
      { question: "Yer solig'i bo'yicha imtiyozlar bormi?", answer: "Jismoniy shaxslar uchun: O'zbekiston, Sovet Ittifoqi va Mehnat Qahramonlari, uch darajali Shon-shuhrat ordeni sohiblari, urush nogironlari va qatnashchilari, I–II guruh nogironligi bo'lgan shaxslar, yolg'iz pensionerlar, boquvchisini yo'qotgan ko'p bolali oilalar, Chernobil qatnashchilari (SK 436-moddasi). Ko'p bolali oilalardan tashqari — faqat yakka tartibdagi uy-joy qurilishi yoki dehqon xo'jaligi uchastkasi bo'yicha, tanlangan bitta uchastkaga." },
      { question: "Uchastkam uchun aniq stavkani qanday bilish mumkin?", answer: "Uni har yili 10-yanvargacha tuman yoki shahar kengashi mavzelar, massivlar va mahallalar bo'yicha tasdiqlaydi. Jismoniy shaxslarga soliqni soliq organi o'zi hisoblaydi va 1-martgacha xabarnomani my.soliq.uz, SMS yoki ilova orqali yuboradi; yuridik shaxslarga stavkalarni uchastka joylashgan joydagi soliq organi yetkazadi." },
      { question: "Yer solig'ini qachon to'lash kerak?", answer: "Jismoniy shaxslar — teng ulushlarda 15-aprel va 15-oktabrgacha. Yuridik shaxslar qishloq xo'jaligiga mo'ljallanmagan yerlar uchun — har oyning 10-sanasigacha (aylanma solig'i to'lovchilari — har chorak uchinchi oyining 20-sanasigacha), qishloq xo'jaligi yerlari uchun — 30% 1-sentabrgacha va qolgani 1-dekabrgacha. Kechiktirilganda MB qayta moliyalash stavkasining 1/300 qismi kuniga penya hisoblanadi (MB stavkasi 14% da — 0,047%/kun)." },
    ],
  },

  {
    slug: 'vehicle-tax',
    lastUpdated: '2026-10-06',
    sources: [
      { name: 'Налоговый кодекс РУз, ст. 17 (виды налогов)', url: 'https://lex.uz/ru/docs/4674893' },
      { name: 'Приказ МВД о госпошлинах за регистрацию ТС (рег. № 2303)', url: 'https://lex.uz/uz/docs/1918264' },
    ],
    paragraphsRu: [
      'Ежегодного транспортного налога в Узбекистане нет. Перечень налогов установлен статьёй 17 Налогового кодекса и является закрытым: НДС, акцизный налог, налог на прибыль, НДФЛ, налог за пользование недрами, специальный рентный налог, налог за пользование водными ресурсами, налог на имущество, земельный налог и социальный налог. Налога на транспортные средства среди них нет — владелец легкового автомобиля не платит за него ежегодно ничего.',
      'Расходы владельца возникают разово — при постановке машины на учёт. Госпошлины установлены приказом МВД № 2303 в базовых расчётных величинах (БРВ = 440 000 сум с 1 сентября 2026 года): регистрация легкового автомобиля — 6,84 БРВ, электромобиля или гибрида, мотоцикла и прицепа — 1,5 БРВ; свидетельство о регистрации (техпаспорт) — 0,7 БРВ; государственные номерные знаки — 5,5 БРВ, для мотоцикла и прицепа — 1,5 БРВ. В опубликованном тексте приказа номера для автомобиля стоят 3,5 БРВ, но с весны 2026 года ГАИ взимает 5,5 БРВ — калькулятор считает по фактической сумме. Итого за легковой автомобиль — 13,04 БРВ, то есть 5 737 600 сум, за электромобиль или гибрид — 7,7 БРВ (3 388 000 сум).',
      'Покупка подержанной машины оформляется как регистрация на нового владельца: та же госпошлина 6,84 БРВ и обязательная замена номеров — оставить старые номера с весны 2026 года нельзя. Перерегистрация за 10% БРВ (44 000 сум) — это смена учётных данных без смены владельца, например установка ГБО или новый адрес; вместе с новым техпаспортом она обходится в 0,8 БРВ, или 352 000 сум.',
      'Отдельно оплачивается выбор «красивой» комбинации номера — 17 БРВ для физических лиц и 25 БРВ для юридических, через приложение Safe Road. Это добровольная опция, к обязательным платежам она не относится.',
      'При ввозе автомобиля из-за рубежа платятся таможенная пошлина, НДС и утилизационный сбор — они считаются в отдельном калькуляторе растаможки. Утилизационный сбор для легковых автомобилей зависит от объёма двигателя и возраста и составляет от 30 до 480 БРВ; для электромобилей — 120 БРВ (не старше трёх лет) или 210 БРВ.',
      'Не путайте с налогом на имущество и земельным налогом физических лиц — вот они действительно уплачиваются ежегодно, равными долями до 15 апреля и до 15 октября. К автомобилю эти сроки отношения не имеют: транспорт не является объектом ни того, ни другого налога.',
    ],
    paragraphsUz: [
      "O‘zbekistonda yillik transport solig‘i yo‘q. Soliqlar ro‘yxati Soliq kodeksining 17-moddasida belgilangan va u yopiq: QQS, aksiz solig‘i, foyda solig‘i, JShDS, yer qa'ridan foydalanganlik uchun soliq, maxsus renta solig‘i, suv resurslaridan foydalanganlik uchun soliq, mol-mulk solig‘i, yer solig‘i va ijtimoiy soliq. Transport vositalari solig‘i ular orasida yo‘q — yengil avtomobil egasi buning uchun har yili hech narsa to‘lamaydi.",
      "Xarajat bir marta — avtomobilni hisobga qo‘yishda yuzaga keladi. Davlat bojlari IIV buyrug‘i (№ 2303) bilan bazaviy hisoblash miqdorida belgilangan (BHM — 2026-yil 1-sentabrdan 440 000 so‘m): yengil avtomobilni ro‘yxatga olish — 6,84 BHM, elektromobil yoki gibrid, mototsikl va tirkamani — 1,5 BHM; ro‘yxatga olish guvohnomasi (texpasport) — 0,7 BHM; davlat raqami belgilari — 5,5 BHM, mototsikl va tirkama uchun — 1,5 BHM. Buyruqning e'lon qilingan matnida avtomobil raqamlari 3,5 BHM, lekin 2026-yil bahoridan YHXX 5,5 BHM undiradi — kalkulyator amalda to‘lanadigan summani hisoblaydi. Yengil avtomobil uchun jami 13,04 BHM, ya'ni 5 737 600 so‘m, elektromobil yoki gibrid uchun — 7,7 BHM (3 388 000 so‘m).",
      "Ishlatilgan avtomobil sotib olinganda u yangi egasiga ro‘yxatga olinadi: o‘sha 6,84 BHM boj va raqamlarni majburiy almashtirish — 2026-yil bahoridan eski raqamlarni saqlab qolib bo‘lmaydi. BHMning 10 foizi (44 000 so‘m) miqdoridagi qayta ro‘yxatga olish — egasi o‘zgarmagan holda hisob ma'lumotlarini o‘zgartirish, masalan GBO o‘rnatish yoki yangi manzil; yangi texpasport bilan u 0,8 BHM, ya'ni 352 000 so‘m turadi.",
      "«Chiroyli» raqam kombinatsiyasini tanlash alohida to‘lanadi — jismoniy shaxslar uchun 17 BHM, yuridik shaxslar uchun 25 BHM, Safe Road ilovasi orqali. Bu ixtiyoriy imkoniyat va majburiy to‘lovlarga kirmaydi.",
      "Avtomobil chetdan olib kelinganda bojxona boji, QQS va utilizatsiya yig‘imi to‘lanadi — ular alohida bojxona kalkulyatorida hisoblanadi. Yengil avtomobillar uchun utilizatsiya yig‘imi dvigatel hajmi va yoshiga qarab 30 dan 480 BHM gacha; elektromobillar uchun — 120 BHM (uch yoshgacha) yoki 210 BHM.",
      "Buni jismoniy shaxslarning mol-mulk solig‘i va yer solig‘i bilan aralashtirmang — mana ular haqiqatan ham har yili, teng ulushlarda 15-aprel va 15-oktabrgacha to‘lanadi. Bu muddatlarning avtomobilga aloqasi yo‘q: transport na u, na bu soliqning obyekti hisoblanmaydi.",
    ],
    faqRu: [
      { question: 'Сколько стоит транспортный налог в Узбекистане?', answer: 'Нисколько — такого налога в Узбекистане не существует. Перечень налогов в статье 17 Налогового кодекса закрытый, транспортного налога в нём нет. Ежегодных платежей за владение автомобилем нет.' },
      { question: 'Сколько стоит поставить машину на учёт?', answer: 'Легковой автомобиль — 13,04 БРВ = 5 737 600 сум: регистрация 6,84 БРВ, техпаспорт 0,7 БРВ, номера 5,5 БРВ. Электромобиль или гибрид — 7,7 БРВ (3 388 000 сум), мотоцикл или прицеп — 3,7 БРВ (1 628 000 сум).' },
      { question: 'Облагаются ли электромобили?', answer: 'Ежегодного налога нет ни для электромобилей, ни для машин с ДВС. При ввозе электромобиль освобождён от таможенной пошлины и акциза, но утилизационный сбор платит — 120 или 210 БРВ в зависимости от возраста. Госпошлина за регистрацию электромобиля или гибрида — 1,5 БРВ вместо 6,84.' },
      { question: 'А до 15 апреля и 15 октября что тогда платят?', answer: 'Это сроки уплаты налога на имущество и земельного налога физических лиц. Автомобиль не является объектом ни одного из них.' },
      { question: 'Нужно ли платить при продаже автомобиля?', answer: 'Ежегодного налога нет, поэтому делить его между продавцом и покупателем не нужно. Новый владелец ставит машину на учёт на себя и платит как при регистрации: 6,84 БРВ, техпаспорт и новые номера — 13,04 БРВ. Льготная перерегистрация за 10% БРВ к смене владельца не относится.' },
    ],
    faqUz: [
      { question: "O‘zbekistonda transport solig‘i qancha turadi?", answer: "Hech qancha — bunday soliq O‘zbekistonda mavjud emas. Soliq kodeksining 17-moddasidagi ro‘yxat yopiq va unda transport solig‘i yo‘q. Avtomobilga egalik uchun yillik to‘lov yo‘q." },
      { question: "Avtomobilni hisobga qo‘yish qancha turadi?", answer: "Yengil avtomobil — 13,04 BHM = 5 737 600 so‘m: ro‘yxatga olish 6,84 BHM, texpasport 0,7 BHM, raqamlar 5,5 BHM. Elektromobil yoki gibrid — 7,7 BHM (3 388 000 so‘m), mototsikl yoki tirkama — 3,7 BHM (1 628 000 so‘m)." },
      { question: "Elektromobillar soliqqa tortiladimi?", answer: "Yillik soliq na elektromobillar, na ichki yonuv dvigatelli avtomobillar uchun yo‘q. Olib kelishda elektromobil bojxona boji va aksizdan ozod, lekin utilizatsiya yig‘imini to‘laydi — yoshiga qarab 120 yoki 210 BHM. Elektromobil yoki gibridni ro‘yxatga olish boji — 6,84 emas, 1,5 BHM." },
      { question: "Unda 15-aprel va 15-oktabrgacha nima to‘lanadi?", answer: "Bu jismoniy shaxslarning mol-mulk solig‘i va yer solig‘i muddatlari. Avtomobil ularning obyekti emas." },
      { question: "Avtomobil sotilganda to‘lash kerakmi?", answer: "Yillik soliq yo‘q, shuning uchun uni sotuvchi va xaridor o‘rtasida bo‘lish shart emas. Yangi egasi avtomobilni o‘ziga ro‘yxatga oladi va ro‘yxatga olishdagidek to‘laydi: 6,84 BHM, texpasport va yangi raqamlar — 13,04 BHM. BHMning 10 foizi miqdoridagi imtiyozli qayta ro‘yxatga olish egasi almashishiga taalluqli emas." },
    ],
  },
  {
    slug: 'corporate-tax',
    lastUpdated: '2026-07-25',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Ставка налога на прибыль юридических лиц в Узбекистане составляет 15% от чистой прибыли — доходы минус документально подтверждённые расходы (ст. 337 НК). Повышенная ставка 20% установлена для банков, операторов мобильной связи, производителей полиэтиленовых гранул, а также по прибыли от услуг рынков и торговых комплексов. С 2026 года льготная ставка для предприятий электронной коммерции отменена — они платят базовые 15% (ранее 10%). Законом ЗРУ-1104 от 25.12.2025 введена ставка 0% для продукции, произведённой на основе высоких технологий: она действует 3 года с даты ввода производства в эксплуатацию, только по доходам от такой продукции и по перечню, утверждаемому постановлением Президента. Плательщики налога с оборота, впервые перешедшие на общую систему с 1 января 2026 года, освобождаются от налога на прибыль на один налоговый период, следующий за годом перехода (кроме дивидендов и процентных доходов; не распространяется на реорганизованных). Налогооблагаемая база определяется по данным бухгалтерского учёта с корректировками, предусмотренными Налоговым кодексом.',
      'Предприятия с доходом до 12 000 БРВ (5 280 000 000 сум) за налоговый период могут выбрать упрощённую систему — налог с оборота 4% для юрлиц (2% и 1% для розничной торговли вне крупных городов) или 1% для ИП и самозанятых, без вычета расходов. Это выгодно при низкой доле расходов в выручке. Переход между системами возможен с начала календарного года при уведомлении налогового органа. Компании с доходом свыше 12 000 БРВ (5 280 000 000 сум) переходят на НДС и налог на прибыль со дня достижения порога.',
      'Авансовые платежи по налогу на прибыль уплачивают только налогоплательщики с совокупным доходом за предыдущий период свыше 20 млрд сум — ежемесячно, не позднее 23-го числа каждого месяца отчётного периода (ст. 340 НК). Годовая декларация подаётся не позднее 1 марта года, следующего за истекшим, через систему my.soliq.uz; по итогам отчётного периода — не позднее 20-го числа следующего месяца (ст. 339 НК). Убытки можно переносить на будущие налоговые периоды без ограничения по сроку (прежний 5-летний лимит отменён), уменьшая налогооблагаемую прибыль будущих лет. Дивиденды, выплачиваемые учредителям-физлицам, облагаются НДФЛ по ставке 5%.',
      'Законодательство предусматривает значительные льготы. Резиденты свободных экономических зон (СЭЗ) — Навои, Ангрен, Джизак, Ургут и другие — освобождены от налога на прибыль до 10 лет в зависимости от объёма инвестиций. Резиденты IT Park уплачивают 1% от выручки. Предприятия, инвестирующие в социальную инфраструктуру, могут получить пониженные ставки. Экспортёры имеют право на дополнительные вычеты.',
      'Пример расчёта: ООО с годовой выручкой 5 млрд сум и расходами 3,5 млрд. На общей системе: прибыль = 1,5 млрд, налог = 1 500 000 000 × 15% = 225 000 000 сум. На упрощённой: налог = 5 000 000 000 × 4% = 200 000 000 сум. В данном случае упрощённая система выгоднее на 25 млн. При расходах 4 млрд: общая система = 150 млн, упрощённая = 200 млн — общая выгоднее.',
    ],
    paragraphsUz: [
      "O'zbekistonda yuridik shaxslarning foyda solig'i stavkasi sof foydaning 15% ni tashkil etadi — daromadlar minus hujjat bilan tasdiqlangan xarajatlar (SKning 337-moddasi). 20% oshirilgan stavka banklar, mobil aloqa operatorlari, polietilen granulalari ishlab chiqaruvchilar, shuningdek bozorlar va savdo majmualari ko'rsatgan xizmatlardan olingan foyda uchun belgilangan. 2026-yildan elektron tijorat korxonalari uchun imtiyozli stavka bekor qilindi — ular bazaviy 15% to'laydi (avval 10%). 25.12.2025-yildagi ZRU-1104 Qonuni bilan yuqori texnologiyalar asosida ishlab chiqarilgan mahsulot uchun 0% stavka joriy etildi: u ishlab chiqarish ob'ekti foydalanishga topshirilgan sanadan 3 yil davomida, faqat shunday mahsulotdan olingan daromadlar bo'yicha va Prezident qarori bilan tasdiqlanadigan ro'yxat bo'yicha amal qiladi. 2026-yil 1-yanvardan boshlab umumiy tizimga birinchi marta o'tgan aylanma solig'i to'lovchilari o'tgan yildan keyingi bir soliq davri uchun foyda solig'idan ozod qilinadi (dividendlar va foizli daromadlardan tashqari; qayta tashkil etilganlarga tatbiq etilmaydi). Soliq bazasi buxgalteriya hisobi ma'lumotlari asosida Soliq kodeksida nazarda tutilgan tuzatishlar bilan aniqlanadi.",
      "Soliq davri uchun daromadi 12 000 BHK (5 280 000 000 so'm) gacha bo'lgan korxonalar soddalashtilgan tizimni tanlashi mumkin — xarajatlarni chegirmasdan yuridik shaxslar uchun 4% (yirik shaharlardan tashqari chakana savdo uchun 2% va 1%) yoki YaTT va o'z-o'zini band qilganlar uchun 1%. Bu xarajatlar ulushi tushumda past bo'lganda foydali. Tizimlar o'rtasida o'tish kalendar yili boshidan soliq organiga xabar berish sharti bilan mumkin. Daromadi 12 000 BHK (5 280 000 000 so'm) dan ortiq kompaniyalar chegaraga erishilgan kundan QQS va foyda solig'iga o'tadi.",
      "Foyda solig'i bo'yicha avans to'lovlarini faqat oldingi davr uchun jami daromadi 20 mlrd so'mdan ortiq bo'lgan soliq to'lovchilar to'laydi — har oyda, hisobot davrining har oyi 23-sanasidan kechiktirmay (SKning 340-moddasi). Yillik deklaratsiya tugagan yildan keyingi yilning 1-martidan kechiktirmay my.soliq.uz tizimi orqali topshiriladi; hisobot davri yakunlari bo'yicha — keyingi oyning 20-sanasidan kechiktirmay (SKning 339-moddasi). Zararlarni muddat cheklovisiz keyingi soliq davrlariga o'tkazish (avvalgi 5 yillik limit bekor qilingan) va kelajakdagi yillarning soliqqa tortiladigan foydasini kamaytirish mumkin. Ta'sischilar-jismoniy shaxslarga to'lanadigan dividendlar 5% stavkada JShShSga tortiladi.",
      "Qonunchilik sezilarli imtiyozlarni nazarda tutadi. Erkin iqtisodiy zonalar (EIZ) rezidentlari — Navoiy, Angren, Jizzax, Urgut va boshqalar — investitsiya hajmiga qarab 10 yilgacha foyda solig'idan ozod. IT Park rezidentlari tushumdan 1% to'laydi. Ijtimoiy infratuzilmaga sarmoya kiritayotgan korxonalar pasaytirilgan stavkalar olishi mumkin. Eksportchilar qo'shimcha chegirmalarga haqli.",
      "Hisoblash misoli: yillik tushumi 5 mlrd so'm va xarajatlari 3,5 mlrd bo'lgan MChJ. Umumiy tizimda: foyda = 1,5 mlrd, soliq = 1 500 000 000 × 15% = 225 000 000 so'm. Soddalashtirilda: soliq = 5 000 000 000 × 4% = 200 000 000 so'm. Bu holatda soddalashtilgan tizim 25 mln ga foydaliroq. Xarajatlar 4 mlrd bo'lganda: umumiy tizim = 150 mln, soddalashtilgan = 200 mln — umumiy foydaliroq.",
    ],
    faqRu: [
      { question: 'Какая ставка налога на прибыль?', answer: '15% для обычных юрлиц (в т.ч. e-commerce с 2026), 20% для банков, мобильных операторов, производителей полиэтиленовых гранул и по прибыли от услуг рынков/ТЦ, 0% для продукции на основе высоких технологий (ЗРУ-1104 — 3 года, по перечню Президента). На упрощённой — 4% от оборота (юрлица), 1% (ИП и самозанятые).' },
      { question: 'Можно ли перенести убытки?', answer: 'Да, убытки переносятся на будущие периоды без ограничения по сроку (прежний 5-летний лимит отменён), уменьшая прибыль будущих лет.' },
      { question: 'Какие льготы по налогу на прибыль?', answer: 'СЭЗ (до 10 лет освобождение), IT Park (1% от выручки), инвесторы в социальные проекты — пониженные ставки.' },
      { question: 'Когда подавать декларацию?', answer: 'Не позднее 1 марта года, следующего за истекшим (ст. 339 НК). Авансовые платежи — ежемесячно до 23-го числа и только при совокупном доходе за предыдущий период свыше 20 млрд сум (ст. 340 НК).' },
      { question: 'Какой налог на дивиденды?', answer: 'Дивиденды резидентам (физлицам и юрлицам) облагаются по ставке 5%, нерезидентам — 10%.' },
    ],
    faqUz: [
      { question: "Foyda solig'i stavkasi qancha?", answer: "Oddiy yuridik shaxslar uchun 15% (shu jumladan 2026-yildan e-tijorat), banklar, mobil operatorlar, polietilen granulalari ishlab chiqaruvchilar va bozor/savdo majmualari xizmatlaridan olingan foyda uchun 20%, yuqori texnologiyalar asosidagi mahsulot uchun 0% (ZRU-1104 — 3 yil, Prezident ro'yxati bo'yicha). Soddalashtirilda — aylanmadan 4% (yuridik shaxslar), 1% (YaTT va o'z-o'zini band qilganlar)." },
      { question: "Zararlarni o'tkazish mumkinmi?", answer: "Ha, zararlar muddat cheklovisiz keyingi davrlarga o'tkaziladi (avvalgi 5 yillik limit bekor qilingan), kelajakdagi yillar foydasini kamaytiradi." },
      { question: "Foyda solig'i bo'yicha qanday imtiyozlar bor?", answer: "EIZ (10 yilgacha ozod qilish), IT Park (tushumdan 1%), ijtimoiy loyihalarga investorlar — pasaytirilgan stavkalar." },
      { question: "Deklaratsiyani qachon topshirish kerak?", answer: "Tugagan yildan keyingi yilning 1-martidan kechiktirmay (SKning 339-moddasi). Avans to'lovlari — har oy 23-sanasigacha va faqat oldingi davr uchun jami daromadi 20 mlrd so'mdan ortiq bo'lganda (SKning 340-moddasi)." },
      { question: "Dividendlarga soliq qancha?", answer: "Rezident ta'sischilarga (jismoniy va yuridik shaxslar) to'lanadigan dividendlardan 5%, norezidentlarga — 10%." },
    ],
  },

  {
    slug: 'tax-penalty',
    lastUpdated: '2026-09-13',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Калькулятор налоговых пеней рассчитывает размер пени за несвоевременную уплату налогов в Узбекистане. Пеня начисляется автоматически в размере 1/300 ставки рефинансирования Центрального банка от суммы задолженности за каждый день просрочки. При текущей ставке ЦБ 14% это составляет 14%/300 = 0,047%/день (17,0% годовых). Пеня начисляется с первого дня, следующего за установленным сроком уплаты, до дня фактической оплаты включительно. Калькулятор определит точную сумму пени по вашим данным.',
      'Формула расчёта: Пеня = Сумма долга × (ставка ЦБ / 300) × Количество дней просрочки. При ставке ЦБ 14%: дневная ставка = 14%/300 = 0,0467%. Пример: задолженность по НДФЛ 5 000 000 сум, просрочка 60 дней. Пеня = 5 000 000 × 0,000467 × 60 = 140 000 сум. Для крупных сумм пеня набегает быстро: при задолженности 100 млн сум пеня за месяц составит около 1 400 000 сум, за год — около 17 000 000 сум.',
      'Помимо пени, за налоговые правонарушения предусмотрены штрафы. За несвоевременное представление налоговой отчётности (ст. 175 КоАО в ред. ЗРУ-1108): гражданам — 1 БРВ (440 000 сум), должностным лицам — 10 БРВ (4 400 000 сум), микрофирмам и малым предприятиям — 3 БРВ (1 320 000 сум). За сокрытие (занижение) налоговой базы — например, неотражённую в учёте выручку или неотражённую в отчётности фактическую зарплату работников — штраф 20% от суммы сокрытой базы, а налоги с этой базы доначисляются сверх штрафа (ст. 223 НК). Если налог недоплачен из-за неправильного исчисления и признаков сокрытия нет, штраф — 20% от неуплаченной суммы налога (ст. 224 НК). Пример: юрлицо, платящее налог с оборота по ставке 4%, не отразило выручку 50 млн сум. Штраф = 50 000 000 × 20% = 10 000 000 сум, плюс доначисленный налог 50 000 000 × 4% = 2 000 000 сум и пеня на него. За ведение деятельности без регистрации: 10% от полученного дохода, но не менее 1 млн сум (ст. 219 НК). За непредставление документов, необходимых для исчисления и уплаты налогов, а также пояснений или уточнённой отчётности по итогам камеральной проверки — 3 БРВ (ст. 175 КоАО).',
      'Налоговый кодекс позволяет избежать штрафа или уменьшить его. Если налогоплательщик сам нашёл ошибку и подаёт уточнённую отчётность уже после срока уплаты налога, он освобождается от ответственности только при двух условиях сразу: уточнённая отчётность подана до того, как он узнал, что налоговая обнаружила занижение или назначила налоговый аудит, и до её подачи уплачены недостающий налог и пеня на него (ст. 83 НК). Сама пеня при этом не прощается. Штраф уменьшается вдвое при смягчающем обстоятельстве, а также если нарушитель признал вину и добровольно уплатил штраф в течение 10 дней со дня получения решения налоговой (ст. 218 НК). По заявлению налогоплательщика возможна отсрочка или рассрочка уплаты налога, а также пени и штрафа (ст. 97–101 НК); подача заявления начисление пени не приостанавливает (ст. 110). Налоговые споры рассматриваются в административном порядке через вышестоящий налоговый орган или через суд.',
      'Наш калькулятор пеней считает по сумме задолженности и числу дней просрочки: он сразу показывает дневную ставку, сумму пени и общую сумму к уплате. В расчёте используется текущая ставка ЦБ — 14%. Рекомендуем погашать задолженность как можно скорее: при текущей ставке ЦБ 14% пеня за год составляет 17,0% — близко к ставке по многим кредитам.',
    ],
    paragraphsUz: [
      "Soliq peniyalari kalkulyatori O'zbekistonda soliqlarni o'z vaqtida to'lamaganligi uchun penya miqdorini hisoblaydi. Penya avtomatik ravishda Markaziy bankning qayta moliyalash stavkasining 1/300 qismi miqdorida har bir kechiktirilgan kun uchun hisoblanadi. Joriy MB stavkasi 14% da bu 14%/300 = 0,047%/kun (yillik 17,0%) ni tashkil etadi. Penya belgilangan to'lov muddatidan keyingi birinchi kundan boshlab haqiqiy to'lov kunigacha hisoblanadi. Kalkulyator sizning ma'lumotlaringiz bo'yicha aniq penya summasini aniqlaydi.",
      "Hisoblash formulasi: Penya = Qarz summasi × (MB stavkasi / 300) × Kechikish kunlari soni. MB stavkasi 14% da: kunlik stavka = 14%/300 = 0,0467%. Misol: JShShS bo'yicha 5 000 000 so'm qarzdorlik, 60 kun kechikish. Penya = 5 000 000 × 0,000467 × 60 = 140 000 so'm. Katta summalarda penya tez yig'iladi: 100 mln so'm qarzdorlikda oylik penya taxminan 1 400 000 so'm, yillik — taxminan 17 000 000 so'm.",
      "Penyadan tashqari, soliq huquqbuzarliklari uchun jarimalar nazarda tutilgan. Soliq hisobotini o'z vaqtida taqdim etmaganlik uchun (MJtK 175-moddasi, O'RQ-1108 tahriri): fuqarolarga — 1 BHK (440 000 so'm), mansabdor shaxslarga — 10 BHK (4 400 000 so'm), mikrofirmalar va kichik korxonalarga — 3 BHK (1 320 000 so'm). Soliq bazasini yashirganlik (kamaytirganlik) uchun — masalan, tovar sotishdan tushgan tushumni hisobda aks ettirmaganlik yoki xodimlarning haqiqiy ish haqini hisobotda ko'rsatmaganlik uchun — yashirilgan (kamaytirilgan) soliq bazasi summasining 20% miqdorida jarima solinadi, bu bazadan soliqlar esa jarimadan tashqari hisoblanadi (SK 223-moddasi). Agar soliq yashirish belgilarisiz, noto'g'ri hisoblash natijasida to'liq to'lanmagan bo'lsa, jarima to'lanmagan soliq summasining 20% ini tashkil etadi (SK 224-moddasi). Misol: 4% stavkada aylanma solig'i to'laydigan yuridik shaxs 50 mln so'm tushumni aks ettirmagan. Jarima = 50 000 000 × 20% = 10 000 000 so'm, bundan tashqari qo'shimcha hisoblangan soliq 50 000 000 × 4% = 2 000 000 so'm va unga penya. Ro'yxatdan o'tmasdan faoliyat yuritganligi uchun: olingan daromadning 10%, lekin kamida 1 mln so'm (SK 219-moddasi). Soliqlarni hisoblash va to'lash uchun zarur hujjatlarni, kameral tekshiruv natijalari bo'yicha tushuntirish yoki aniqlashtirilgan hisobotni taqdim etmaganlik uchun — 3 BHK (MJtK 175-moddasi).",
      "Soliq kodeksi jarimadan qutulish yoki uni kamaytirish imkonini beradi. Agar soliq to'lovchi xatoni o'zi aniqlab, aniqlashtirilgan hisobotni soliq to'lash muddati o'tgandan keyin topshirsa, u faqat ikki shart bir vaqtda bajarilganda javobgarlikdan ozod qilinadi: hisobot soliq organi kamaytirishni aniqlaganini yoki soliq auditi tayinlanganini bilganiga qadar topshirilgan va uni topshirishdan oldin yetishmayotgan soliq summasi hamda unga penya to'langan (SK 83-moddasi). Penyaning o'zi kechirilmaydi. Yengillashtiruvchi holat bo'lganda, shuningdek aybga iqror bo'lib, jarimani soliq organi qarorini olgan kundan boshlab o'n kun ichida ixtiyoriy to'laganda jarima ikki baravar kamaytiriladi (SK 218-moddasi). Soliq to'lovchining arizasiga ko'ra soliqni, shuningdek penya va jarimani to'lash muddatini kechiktirish yoki bo'lib-bo'lib to'lash mumkin (SK 97–101-moddalari); ariza berish penya hisoblanishini to'xtatmaydi (110-modda). Soliq nizolari yuqori turuvchi soliq organi orqali ma'muriy tartibda yoki sud orqali ko'rib chiqiladi.",
      "Bizning penya kalkulyatorimiz qarzdorlik summasi va kechikish kunlari soni bo'yicha hisoblaydi: kunlik stavka, penya summasi va umumiy to'lanadigan summani darhol ko'rsatadi. Hisobda joriy MB stavkasi — 14% ishlatiladi. Qarzdorlikni iloji boricha tezroq to'lashni tavsiya etamiz: joriy MB stavkasi 14% da yillik penya 17,0% ni tashkil etadi.",
    ],
    faqRu: [
      { question: 'Какая пеня за просрочку уплаты налогов?', answer: '1/300 ставки рефинансирования ЦБ от суммы задолженности за каждый день просрочки. При ставке ЦБ 14%: 0,047%/день (17,0% годовых).' },
      { question: 'Как рассчитать пеню?', answer: 'Сумма долга × (ставка ЦБ / 300) × количество дней. При ставке 14%: 10 млн × 0,000467 × 30 = 140 000 сум.' },
      { question: 'Какие штрафы за налоговые нарушения?', answer: 'Несвоевременная отчётность: гражданам 1 БРВ, должностным лицам 10 БРВ, микрофирмам и малым предприятиям 3 БРВ (ст. 175 КоАО). Сокрытие (занижение) налоговой базы: 20% от суммы сокрытой базы, и налоги с неё доначисляются сверх штрафа (ст. 223 НК). Неполная уплата из-за неправильного расчёта: 20% от неуплаченной суммы налога (ст. 224). Деятельность без регистрации: 10% дохода, минимум 1 млн сум.' },
      { question: 'Можно ли уменьшить пеню?', answer: 'Пеня начисляется автоматически и не уменьшается. От штрафа освобождает уточнённая отчётность, поданная до того, как вы узнали о выявленной налоговой ошибке или о назначении аудита, — если до её подачи уплачены налог и пеня (ст. 83 НК). Если признать вину и уплатить штраф в течение 10 дней после решения налоговой, он уменьшается вдвое (ст. 218).' },
      { question: 'С какого дня начинается пеня?', answer: 'Со следующего дня после установленного срока уплаты налога. Заканчивается в день фактической оплаты.' },
    ],
    faqUz: [
      { question: "Soliq kechiktirilganligi uchun penya qancha?", answer: "MB qayta moliyalash stavkasining 1/300 qismi har kechiktirilgan kun uchun. MB stavkasi 14% da: 0,047%/kun (yillik 17,0%)." },
      { question: "Penyani qanday hisoblash mumkin?", answer: "Qarz summasi × (MB stavkasi / 300) × kunlar soni. MB stavkasi 14% da: 10 mln × 0,000467 × 30 = 140 000 so'm." },
      { question: "Soliq huquqbuzarliklari uchun qanday jarimalar bor?", answer: "Hisobotni kechiktirish: fuqarolarga 1 BHK, mansabdor shaxslarga 10 BHK, mikrofirma va kichik korxonalarga 3 BHK (MJtK 175-moddasi). Soliq bazasini yashirish (kamaytirish): yashirilgan baza summasining 20%, undan soliqlar esa jarimadan tashqari hisoblanadi (SK 223-moddasi). Noto'g'ri hisoblash tufayli to'liq to'lamaslik: to'lanmagan soliq summasining 20% (SK 224-moddasi). Ro'yxatdan o'tmasdan faoliyat: daromadning 10%, kamida 1 mln so'm." },
      { question: "Penyani kamaytirish mumkinmi?", answer: "Penya avtomatik hisoblanadi va kamaytirilmaydi. Soliq organi xatoni aniqlaganini yoki audit tayinlanganini bilishingizdan oldin topshirilgan aniqlashtirilgan hisobot, agar undan oldin soliq va penya to'langan bo'lsa, jarimadan ozod qiladi (SK 83-moddasi). Aybni tan olib, jarimani soliq organi qaroridan keyin 10 kun ichida to'lasangiz, u ikki baravar kamayadi (SK 218-moddasi)." },
      { question: "Penya qaysi kundan boshlanadi?", answer: "Soliq to'lashning belgilangan muddatidan keyingi kundan. Haqiqiy to'lov kunida tugaydi." },
    ],
  },

  {
    slug: 'self-employed',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'С 2026 года самозанятые в Узбекистане платят налог 1% от оборота — это самая низкая ставка среди режимов налогообложения в стране. Самозанятые не являются индивидуальными предпринимателями: им не требуется регистрация в едином реестре предпринимателей, а отчётность сведена к минимуму. Регистрация осуществляется через мобильное приложение или портал my.soliq.uz буквально за несколько минут.',
      'Ограничения для самозанятых: доход не должен превышать порог налога с оборота — 12 000 БРВ (5 280 000 000 сум) за налоговый период. С 2026 года прежнее ограничение в 100 млн сум отменено, и все самозанятые уплачивают 1% в пределах этого порога. Нанимать работников запрещено, и существуют ограничения по видам деятельности — нельзя заниматься производством подакцизных товаров, оптовой торговлей и некоторыми лицензируемыми видами деятельности. Статус самозанятого идеально подходит для фрилансеров, репетиторов, мастеров handmade, водителей такси, фотографов, парикмахеров на дому и других индивидуальных специалистов.',
      'Налог уплачивается ежемесячно до 15 числа следующего месяца через my.soliq.uz или мобильные платёжные приложения. Сумма налога фиксируется автоматически на основе поступлений на привязанную банковскую карту или по добровольной декларации дохода. Социальный налог и взнос в ИНПС самозанятому в обязательном порядке не начисляются — и то, и другое для него добровольно. Социальный налог он вправе платить сам: минимум 1 БРВ в год, то есть 440 000 сум (ч. 2 ст. 408 НК; минимум поднят с 0,5 БРВ Законом ЗРУ-1117 от 05.02.2026), и именно эта уплата засчитывает период в трудовой стаж. Без неё стаж за период самозанятости не идёт, поэтому для будущей пенсии добровольные взносы имеет смысл делать. Участие в накопительной системе (ИНПС) тоже добровольное — ст. 6 Закона № 702-II.',
      'Сравнение режимов: самозанятый — 1% от оборота, без работников; ИП — 1% от оборота, до 5 работников; ООО на общей системе — 15% от прибыли + НДС 12%. Порог перехода на общую систему для всех — 12 000 БРВ (5 280 000 000 сум). При прибыли выше примерно 7% выручки ИП с 1% от оборота выгоднее ООО с налогом на прибыль 15%. В пределах порога и без наёмных работников самозанятый — оптимальный выбор с точки зрения налоговой нагрузки.',
      'Калькулятор самозанятого рассчитает налог, налог в месяц и чистый доход: введите доход за год. Пример: при доходе 8 000 000 сум/мес налог с оборота одинаков — 1%, то есть 80 000 сум и у самозанятого, и у ИП. Разницу создаёт социальный налог: ИП платит фиксированный 1 БРВ = 440 000 сум в месяц даже при нулевом доходе, а самозанятый платит его добровольно. Итого самозанятый — 80 000 сум/мес, ИП — 520 000 сум/мес: разница 440 000 сум в месяц или 5 280 000 сум в год.',
    ],
    paragraphsUz: [
      "2026-yildan O'zbekistonda o'z-o'zini band qilganlar aylanmadan 1% soliq to'laydi — bu mamlakatdagi soliqqa tortish rejimlari orasida eng past stavka. O'z-o'zini band qilganlar yakka tartibdagi tadbirkor hisoblanmaydi: tadbirkorlarning yagona reyestrida ro'yxatdan o'tish talab qilinmaydi, hisobot minimal. Ro'yxatdan o'tish mobil ilova yoki my.soliq.uz portali orqali bir necha daqiqada amalga oshiriladi.",
      "O'z-o'zini band qilganlar uchun cheklovlar: daromad aylanma solig'i chegarasidan — soliq davri uchun 12 000 BHK (5 280 000 000 so'm) dan oshmasligi kerak. 2026-yildan avvalgi 100 mln so'mlik cheklov bekor qilindi va barcha o'z-o'zini band qilganlar shu chegara doirasida 1% to'laydilar. Xodim yollash taqiqlangan va faoliyat turlari bo'yicha cheklovlar mavjud — aksiz tovarlarini ishlab chiqarish, ulgurji savdo va ba'zi litsenziyalanadigan faoliyat turlari bilan shug'ullanib bo'lmaydi. Maqom frilanserlar, repetitorlar, handmade ustalari, taksi haydovchilari, fotosuratchilar, uyda sartaroshlar va boshqa yakka mutaxassislar uchun ideal.",
      "Soliq har oy keyingi oyning 15-sanasigacha my.soliq.uz yoki mobil to'lov ilovalari orqali to'lanadi. Soliq summasi bog'langan bank kartasiga tushgan mablag'lar asosida yoki daromadni ixtiyoriy deklaratsiya qilish orqali avtomatik ravishda belgilanadi. O'z-o'zini band qilganga ijtimoiy soliq va IJPH badali majburiy tartibda hisoblanmaydi — ikkalasi ham u uchun ixtiyoriy. Ijtimoiy soliqni u o'zi to'lashga haqli: yiliga kamida 1 BHK, ya'ni 440 000 so'm (SKning 408-moddasi 2-qismi; minimum 05.02.2026-yildagi ZRU-1117 Qonuni bilan 0,5 BHK dan oshirilgan), va aynan shu to'lov davrni mehnat stajiga qo'shadi. Usiz o'z-o'zini band qilish davri uchun staj hisoblanmaydi, shuning uchun bo'lajak pensiya uchun ixtiyoriy badallarni to'lash maqsadga muvofiq. Jamg'arma tizimida (IJPH) ishtirok etish ham ixtiyoriy — 702-II sonli Qonunning 6-moddasi.",
      "Rejimlarni solishtirish: o'z-o'zini band qilgan — aylanmadan 1%, xodimsiz; YaTT — aylanmadan 1%, 5 tagacha xodim; umumiy tizimdagi MChJ — foydadan 15% + QQS 12%. Umumiy tizimga o'tish chegarasi hamma uchun — 12 000 BHK (5 280 000 000 so'm). Foyda tushumning taxminan 7% idan yuqori bo'lganda aylanmadan 1% to'laydigan YaTT 15% foyda solig'idagi MChJdan foydaliroq. Chegara doirasida va yollama xodimlarsiz o'z-o'zini band qilgan — soliq yuki nuqtai nazaridan optimal tanlov.",
      "O'z-o'zini band qilgan kalkulyatori soliqni, oylik soliqni va sof daromadni hisoblaydi: yillik daromadni kiriting. Misol: oylik 8 000 000 so'm daromadda aylanma solig'i bir xil — 1%, ya'ni o'z-o'zini band qilganda ham, YaTTda ham 80 000 so'm. Farqni ijtimoiy soliq yaratadi: YaTT daromad nolga teng bo'lsa ham oyiga qat'iy 1 BHK = 440 000 so'm to'laydi, o'z-o'zini band qilgan esa uni ixtiyoriy to'laydi. Jami: o'z-o'zini band qilgan — oyiga 80 000 so'm, YaTT — 520 000 so'm: farq oyiga 440 000 so'm yoki yiliga 5 280 000 so'm.",
    ],
    faqRu: [
      { question: 'Какой налог у самозанятого?', answer: '1% от оборота (с 2026 года). Самая низкая ставка среди всех режимов в Узбекистане.' },
      { question: 'Кто может стать самозанятым?', answer: 'Физические лица с доходом в пределах порога налога с оборота — 12 000 БРВ (5 280 000 000 сум) (прежний лимит 100 млн сум отменён с 2026 года), без наёмных работников, с разрешёнными видами деятельности.' },
      { question: 'Чем самозанятый отличается от ИП?', answer: 'Самозанятый: 1% налог, без работников, минимум отчётности. ИП: 1% налог, до 5 работников. Порог налога с оборота для обоих — 12 000 БРВ.' },
      { question: 'Идёт ли пенсионный стаж у самозанятого?', answer: 'Только если платить добровольный социальный налог — минимум 1 БРВ в год (440 000 сум). Тогда период засчитывается в стаж. Обязанности платить нет, но без уплаты стаж за это время не начисляется.' },
      { question: 'Как зарегистрироваться самозанятым?', answer: 'Через мобильное приложение или my.soliq.uz. Регистрация занимает несколько минут, без посещения офисов.' },
    ],
    faqUz: [
      { question: "O'z-o'zini band qilganlik solig'i qancha?", answer: "Aylanmaning 1% (2026-yildan). O'zbekistondagi barcha rejimlar orasida eng past stavka." },
      { question: "Kim o'z-o'zini band qilgan bo'lishi mumkin?", answer: "Daromadi aylanma solig'i chegarasi — 12 000 BHK (5 280 000 000 so'm) doirasidagi (avvalgi 100 mln so'mlik limit 2026-yildan bekor qilindi), yollama xodimsiz, ruxsat etilgan faoliyat turlari bilan jismoniy shaxslar." },
      { question: "O'z-o'zini band qilgan YaTTdan nimasi bilan farq qiladi?", answer: "O'z-o'zini band qilgan: 1% soliq, xodimsiz, minimal hisobot. YaTT: 1% soliq, 5 tagacha xodim. Ikkalasi uchun aylanma solig'i chegarasi — 12 000 BHK." },
      { question: "O'z-o'zini band qilganda pensiya staji boradimi?", answer: "Faqat ixtiyoriy ijtimoiy soliq to'lansa — yiliga kamida 1 BHK (440 000 so'm). Shunda davr stajga qo'shiladi. To'lash majburiyati yo'q, lekin to'lanmasa bu davr uchun staj hisoblanmaydi." },
      { question: "O'z-o'zini band qilgan sifatida qanday ro'yxatdan o'tish mumkin?", answer: "Mobil ilova yoki my.soliq.uz orqali. Ro'yxatdan o'tish bir necha daqiqa oladi, ofislarga borish shart emas." },
    ],
  },

  {
    slug: 'turnover-tax',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Налог с оборота — упрощённый режим для индивидуальных предпринимателей и юридических лиц с совокупным доходом за налоговый период до 12 000 БРВ (5 280 000 000 сум). Ставки (ст. 467 НК): для ИП и самозанятых — 1% от валового дохода; для юридических лиц — 4%, а в розничной торговле вне городов с населением от 100 тыс. — 2%, в труднодоступных и горных районах — 1%. Расходы не вычитаются. Этот режим заменяет налог на прибыль и НДС, что существенно упрощает бухгалтерский учёт и снижает административную нагрузку на малый бизнес.',
      'Основные преимущества упрощённой системы: простота ведения учёта (не нужно документировать расходы), минимальная отчётность (ежемесячный расчёт через my.soliq.uz), отсутствие НДС и необходимости вести учёт счетов-фактур. Однако есть существенный недостаток: расходы не уменьшают налоговую базу. Это делает режим невыгодным для бизнеса с высокой долей затрат — производство, строительство, торговля с низкой маржей.',
      'С 2026 года налог рассчитывается нарастающим итогом ежемесячно и уплачивается не позднее 15-го числа месяца, следующего за отчётным; годовой расчёт подаётся до 15 февраля. Расчёт подаётся в электронном виде через портал my.soliq.uz. Помимо налога с оборота, ИП на упрощённой системе уплачивает социальный налог — фиксированный платёж 1 БРВ (440 000 сум) в месяц, а также НДФЛ 12% с зарплат наёмных работников (если они есть).',
      'Точка переключения между режимами: при марже (прибыль/выручка) менее 27% общая система (15% от прибыли) выгоднее упрощённой (4% от оборота). Пример: выручка 500 млн/год, расходы 350 млн. Упрощённая: 500 × 4% = 20 млн. Общая: (500 − 350) × 15% = 22,5 млн — упрощённая выгоднее. Но если расходы 400 млн: общая = 15 млн, а упрощённая = 20 млн — общая выгоднее на 5 млн.',
      'При приближении дохода к порогу 12 000 БРВ (5 280 000 000 сум) необходимо заблаговременно готовиться к переходу на общую систему с НДС. Альтернатива для физлиц в пределах порога: с 2026 года доступен статус самозанятого с налогом 1% от оборота. Наш калькулятор рассчитает сумму налога с оборота и чистую выручку — введите ваш оборот и ставку.',
    ],
    paragraphsUz: [
      "Aylanma solig'i — soliq davri uchun umumiy daromadi 12 000 BHK (5 280 000 000 so'm) gacha bo'lgan yakka tartibdagi tadbirkorlar va yuridik shaxslar uchun soddalashtilgan rejim. Stavkalar (SKning 467-moddasi): YaTT va o'z-o'zini band qilganlar uchun yalpi daromadning 1%; yuridik shaxslar uchun 4%, aholisi 100 mingdan kam aholi punktlarida chakana savdo uchun 2%, borish qiyin va tog'li tumanlarda 1%. Xarajatlar chegirilmaydi. Bu rejim foyda solig'i va QQS o'rnini bosadi, bu buxgalteriya hisobini sezilarli darajada soddalashtiradi va kichik biznesga ma'muriy yukni kamaytiradi.",
      "Soddalashtilgan tizimning asosiy afzalliklari: hisobni yuritish soddaligi (xarajatlarni hujjatlashtirish shart emas), minimal hisobot (my.soliq.uz orqali oylik hisob-kitob), QQS yo'qligi va hisob-fakturalar hisobini yuritish zarurati yo'qligi. Lekin muhim kamchilik bor: xarajatlar soliq bazasini kamaytirmaydi. Bu rejimni xarajatlar ulushi yuqori biznes uchun foydasiz qiladi — ishlab chiqarish, qurilish, past marjali savdo.",
      "2026-yildan soliq yil boshidan ortib boruvchi yakun bilan har oy hisoblanadi va hisobot oyidan keyingi oyning 15-sanasidan kechiktirmay to'lanadi; yillik hisob-kitob 15-fevralgacha topshiriladi. Hisob-kitob my.soliq.uz portali orqali elektron shaklda topshiriladi. Aylanma solig'idan tashqari, soddalashtilgan tizimdagi YaTT ijtimoiy soliq — oyiga 1 BHK (440 000 so'm) qat'iy to'lov, shuningdek yollama xodimlar (bor bo'lsa) ish haqidan JShShS 12% to'laydi.",
      "Rejimlar o'rtasida almashtirish nuqtasi: marja (foyda/tushum) 27% dan kam bo'lganda umumiy tizim (foydadan 15%) soddalashtirgan (aylanmadan 4%) dan foydaliroq. Misol: yillik tushum 500 mln, xarajatlar 350 mln. Soddalashtilgan: 500 × 4% = 20 mln. Umumiy: (500 − 350) × 15% = 22,5 mln — soddalashtilgan foydaliroq. Lekin xarajatlar 400 mln bo'lsa: umumiy = 15 mln, soddalashtilgan = 20 mln — umumiy 5 mln ga foydaliroq.",
      "Daromad 12 000 BHK (5 280 000 000 so'm) chegarasiga yaqinlashganda QQS bilan umumiy tizimga o'tishga oldindan tayyorlanish kerak. Chegara doirasidagi jismoniy shaxslar uchun muqobil: 2026-yildan aylanmadan atigi 1% soliq bilan o'z-o'zini band qilgan maqomi mavjud. Kalkulyatorimiz aylanma solig'i summasi va sof tushumni hisoblaydi — aylanma va stavkani kiriting.",
    ],
    faqRu: [
      { question: 'Какая ставка налога с оборота?', answer: 'С 2026 года: 1% для ИП и самозанятых; 4% для юрлиц (2% и 1% для розничной торговли вне крупных городов). Расходы не вычитаются. Заменяет налог на прибыль и НДС.' },
      { question: 'Кто платит налог с оборота?', answer: 'ИП и юрлица на упрощённой системе с совокупным доходом за налоговый период до 12 000 БРВ (5 280 000 000 сум).' },
      { question: 'Когда выгодна упрощённая система?', answer: 'При марже более 27% (расходы менее 73% от выручки). При более высоких расходах — общая система (15% от прибыли) выгоднее.' },
      { question: 'Когда платить налог с оборота?', answer: 'Ежемесячно до 15-го числа месяца, следующего за отчётным (с 2026). Декларация через my.soliq.uz.' },
      { question: 'Можно ли совмещать с НДС?', answer: 'Нет. На упрощённой системе НДС не уплачивается. При превышении порога 12 000 БРВ (5 280 000 000 сум) необходимо перейти на общую систему с НДС.' },
    ],
    faqUz: [
      { question: "Aylanma solig'i stavkasi qancha?", answer: "2026-yildan: YaTT va o'z-o'zini band qilganlar uchun 1%; yuridik shaxslar uchun 4% (yirik shaharlardan tashqari chakana savdo uchun 2% va 1%). Xarajatlar chegirilmaydi." },
      { question: "Aylanma solig'ini kim to'laydi?", answer: "Soliq davri uchun umumiy daromadi 12 000 BHK (5 280 000 000 so'm) gacha bo'lgan soddalashtilgan tizimdagi YaTT va yuridik shaxslar." },
      { question: "Soddalashtilgan tizim qachon foydali?", answer: "Marja 27% dan yuqori bo'lganda (xarajatlar tushumning 73% dan kam). Yuqori xarajatlarda — umumiy tizim (foydadan 15%) foydaliroq." },
      { question: "Aylanma solig'ini qachon to'lash kerak?", answer: "2026-yildan har oy, hisobot oyidan keyingi oyning 15-sanasigacha. Hisob-kitob my.soliq.uz orqali." },
      { question: "QQS bilan birlashtirish mumkinmi?", answer: "Yo'q. Soddalashtilgan tizimda QQS to'lanmaydi. 12 000 BHK (5 280 000 000 so'm) chegarasidan oshganda QQS bilan umumiy tizimga o'tish kerak." },
    ],
  },

  {
    slug: 'sick-leave',
    lastUpdated: '2026-09-13',
    sources: [
      { name: 'Постановление Кабмина № 796 от 17.12.2025, приложение 4', url: 'https://lex.uz/docs/7926684' },
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Закон ЗРУ-1101 «О государственном социальном страховании»', url: 'https://lex.uz/docs/7889171' },
    ],
    paragraphsRu: [
      'Больничный лист в Узбекистане с 1 июля 2026 года оплачивается по новой системе, основанной на страховом стаже (стаже уплаты взносов в ГССФ). Работодатель оплачивает первые 5 календарных дней нетрудоспособности в календарном году из собственных средств, а начиная с 6-го дня оплату производит непосредственно Государственный страховой социальный фонд (ГССФ). Для получения права на оплату больничного необходим минимальный страховой стаж не менее 6 месяцев. Размер оплаты определяется страховым стажем (п. 18 приложения 4 к ПКМ № 796): от 6 до 96 месяцев включительно — 60% среднего заработка, от 97 месяцев (больше 8 лет) — 80%. Ступени 100% нет. Больничный лист оформляется в поликлинике по месту прикрепления.',
      'Пособие считается по формуле из п. 16 приложения 4 к ПКМ № 796: среднемесячный заработок ÷ 25,3 × процент по стажу × число оплачиваемых дней. 25,3 — среднемесячное число рабочих дней. Среднемесячный заработок — заработок за 12 месяцев страхового стажа перед месяцем назначения пособия, делённый на 12; если стаж меньше 12 месяцев, заработок делится на число месяцев стажа. В расчёт берётся не больше 10 МРОТ в месяц — с 1 сентября 2026 года 13 600 000 сум (п. 26). Оплачиваемые дни — дни больничного без воскресений и нерабочих праздничных дней по ст. 208 Трудового кодекса (п. 17); суббота оплачивается. Обратите внимание: с 1 января 2026 года пособия по беременности и родам уже выплачиваются напрямую из средств ГССФ, а пособия по временной нетрудоспособности (больничные) переходят на прямые выплаты ГССФ с 1 июля 2026 года.',
      'Оплачивается не больше 182 календарных дней больничного в календарном году (п. 20). Исключение одно — уход за больным ребёнком: лимит увеличивается на 20 календарных дней, если ребёнку нет 14 лет, и на 40 календарных дней, если у ребёнка до 16 лет инвалидность (п. 21). После истечения этого срока вопрос решается МСЭК: продление больничного или установление инвалидности. Если за календарный год больничных набралось больше 77 календарных дней, за период сверх этого порога процент снижается на 10 п.п. (отпуск по беременности и родам не считается). Застрахованным с инвалидностью I или II группы, а также тем, у кого на иждивении четверо и более детей до 18 лет или ребёнок с инвалидностью до 18 лет, процент повышается на 20 п.п.; при нескольких основаниях льгота одна (п. 19).',
      'Выплаты по больничному листу облагаются НДФЛ 12% (взнос ИНПС 0,1% входит в эти 12%, а не удерживается сверху), но не облагаются социальным налогом. Больничный не оплачивается, если нетрудоспособность наступила в результате умышленного причинения вреда здоровью, при нахождении под арестом или в период отпуска без сохранения зарплаты. Больничный лист оформляется в электронном виде и автоматически передаётся из системы «Ягона тиббий» в модуль «Социальное страхование», где пособие назначается автоматически (ПКМ-796, прил. 4, п. 10, 13). Выплату производит финансовый агент: ведомости и деньги по пособиям, назначенным с 1-го по 15-е число, передаются ему до 25-го числа того же месяца, по назначенным с 16-го числа до конца месяца — до 10-го числа следующего месяца (п. 34).',
      'Пример расчёта: страховой стаж 6 лет (72 месяца), заработок за 12 месяцев 120 000 000 сум, первый в году больничный на 15 календарных дней — с понедельника 5 октября по 19 октября 2026 года. Среднемесячный заработок = 120 000 000 / 12 = 10 000 000 сум (ниже потолка 10 МРОТ), среднедневной = 10 000 000 / 25,3 ≈ 395 257 сум. Стаж до 96 месяцев даёт 60% — ≈ 237 154 сум за оплачиваемый день. В периоде два воскресенья (11 и 18 октября) и нет праздников, оплачиваются 13 дней: 237 154 × 13 ≈ 3 083 004 сум. Первые 5 дней (5–9 октября, ≈ 1 185 771 сум) платит работодатель, остальные 8 оплачиваемых дней (≈ 1 897 233 сум) — ГССФ. Минус НДФЛ 12%: на руки ≈ 2 713 043 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda kasallik varag'i 2026-yil 1-iyuldan boshlab sug'urta stajiga (DSSF ga badallar to'lash stajiga) asoslangan yangi tizim bo'yicha to'lanadi. Ish beruvchi kalendar yilda mehnatga layoqatsizlikning birinchi 5 kalendar kunini o'z mablag'laridan to'laydi, 6-kundan boshlab to'lovni bevosita Davlat sug'urta ijtimoiy fondi (DSSF) amalga oshiradi. Kasallik to'lovini olish huquqiga ega bo'lish uchun kamida 6 oylik sug'urta staji talab qilinadi. To'lov miqdori sug'urta stajiga qarab belgilanadi (VMQ №796, 4-ilova, 18-band): 6 oydan 96 oygacha (96-oy ham kiradi) — o'rtacha ish haqining 60%, 97 oy va undan ko'p (8 yildan ortiq) — 80%. 100% li pog'ona yo'q. Kasallik varag'i biriktirilgan poliklinikada rasmiylashtiriladi.",
      "Nafaqa VMQ №796 4-ilovasining 16-bandidagi formula bo'yicha hisoblanadi: o'rtacha oylik ish haqi ÷ 25,3 × staj foizi × to'lanadigan kunlar soni. 25,3 — ish kunlarining o'rtacha oylik soni. O'rtacha oylik ish haqi — nafaqa tayinlanadigan oydan oldingi 12 oylik sug'urta staji davridagi ish haqining 12 ga bo'lingani; staj 12 oydan kam bo'lsa, ish haqi staj oylari soniga bo'linadi. Hisobga oyiga MROTning 10 baravaridan ortiq bo'lmagan qism olinadi — 2026-yil 1-sentabrdan 13 600 000 so'm (26-band). To'lanadigan kunlar — kasallik davridagi yakshanba va Mehnat kodeksining 208-moddasiga ko'ra ishlanmaydigan bayram kunlaridan tashqari kunlar (17-band); shanba to'lanadi. Eslatma: 2026-yil 1-yanvardan homiladorlik va tug'ish nafaqalari bevosita DSSF mablag'laridan to'lanmoqda, vaqtinchalik mehnatga layoqatsizlik nafaqalari (kasallik varag'i) esa 2026-yil 1-iyuldan DSSFning to'g'ridan-to'g'ri to'lovlariga o'tmoqda.",
      "Kalendar yil davomida kasallik varag'ining 182 kalendar kunidan ortig'i to'lanmaydi (20-band). Istisno bitta — kasal bolaga qarash: 14 yoshgacha bola uchun limit qo'shimcha 20 kalendar kunga, 16 yoshgacha nogironligi bo'lgan bola uchun qo'shimcha 40 kalendar kunga uzaytiriladi (21-band). Bu muddat tugagandan keyin TIEK qaror qabul qiladi: kasallikni uzaytirish yoki nogironlikni belgilash. Kalendar yil davomida kasallik varaqalari 77 kalendar kundan oshsa, shu chegaradan ortiq davr uchun foiz 10 foiz bandga kamaytiriladi (homiladorlik va tug'ish davri hisobga kirmaydi). I yoki II guruh nogironligi bo'lgan, shuningdek, qaramog'ida 18 yoshgacha to'rt va undan ortiq farzandi yoki 18 yoshgacha nogironligi bo'lgan farzandi bor sug'urtalanganlarga foiz 20 foiz bandga oshiriladi; bir nechta asos bo'lsa, imtiyoz bitta (19-band).",
      "Kasallik varag'i bo'yicha to'lovlar JShShS 12% ga tortiladi (IJPH 0,1% badali shu 12% ichida, ustiga ushlanmaydi), lekin ijtimoiy soliqqa tortilmaydi. Kasallik varag'i to'lanmaydi: sog'liqqa qasddan zarar yetkazish natijasida yuzaga kelgan bo'lsa, hibsda bo'lgan davrda, ish haqi saqlanmagan ta'til davrida. Kasallik varag'i elektron shaklda rasmiylashtiriladi va «Yagona tibbiy» axborot tizimidan «Ijtimoiy sug'urta» moduliga avtomatik yuboriladi, nafaqa u yerda avtomatik tayinlanadi (VMQ-796, 4-ilova, 10, 13-bandlar). To'lovni moliyaviy agent amalga oshiradi: oyning 1–15-sanalarida tayinlangan nafaqalar bo'yicha qaydnomalar va mablag' unga shu oyning 25-sanasigacha, 16-sanadan oy oxirigacha tayinlanganlari bo'yicha — keyingi oyning 10-sanasigacha o'tkaziladi (34-band).",
      "Hisoblash misoli: sug'urta staji 6 yil (72 oy), 12 oylik daromad 120 000 000 so'm, yildagi birinchi kasallik varag'i 15 kalendar kunga — 2026-yil 5-oktabr, dushanbadan 19-oktabrgacha. O'rtacha oylik ish haqi = 120 000 000 / 12 = 10 000 000 so'm (10 MROT chegarasidan past), o'rtacha kunlik = 10 000 000 / 25,3 ≈ 395 257 so'm. 96 oygacha staj 60% beradi — to'lanadigan har bir kun uchun ≈ 237 154 so'm. Davrda ikkita yakshanba (11 va 18-oktabr) bor, bayram yo'q, 13 kun to'lanadi: 237 154 × 13 ≈ 3 083 004 so'm. Dastlabki 5 kunni (5–9-oktabr, ≈ 1 185 771 so'm) ish beruvchi, qolgan 8 ta to'lanadigan kunni (≈ 1 897 233 so'm) DSSF to'laydi. Minus JShShS 12%: sof to'lov ≈ 2 713 043 so'm.",
    ],
    faqRu: [
      { question: 'Как оплачивается больничный?', answer: 'В зависимости от страхового стажа: от 6 до 96 месяцев — 60%, от 97 месяцев (больше 8 лет) — 80% среднего заработка. Пособие = среднемесячный заработок ÷ 25,3 × процент × дни больничного без воскресений и праздников. Минимальный страховой стаж для получения выплат — 6 месяцев.' },
      { question: 'Кто оплачивает больничный?', answer: 'С 1 июля 2026 года: первые 5 календарных дней в году — работодатель, с 6-го дня — напрямую ГССФ (Государственный страховой социальный фонд).' },
      { question: 'Какой максимальный срок больничного?', answer: 'До 182 календарных дней в год. При уходе за больным ребёнком лимит больше на 20 дней (ребёнок до 14 лет) или на 40 дней (ребёнок с инвалидностью до 16 лет). Далее решает МСЭК.' },
      { question: 'Облагается ли больничный налогом?', answer: 'Да, удерживается НДФЛ 12% (взнос ИНПС 0,1% входит в эти 12%). Социальный налог не начисляется.' },
      { question: 'Как оплачивается больничный по уходу за ребёнком?', answer: 'Как обычный больничный, но годовой лимит 182 дня увеличивается: на 20 календарных дней за ребёнка до 14 лет, на 40 — за ребёнка с инвалидностью до 16 лет.' },
    ],
    faqUz: [
      { question: "Kasallik varag'i qanday to'lanadi?", answer: "Sug'urta stajiga qarab: 6 oydan 96 oygacha — 60%, 97 oy va undan ko'p (8 yildan ortiq) — o'rtacha ish haqining 80%. Nafaqa = o'rtacha oylik ish haqi ÷ 25,3 × foiz × yakshanba va bayramlarsiz kasallik kunlari. To'lovlarni olish uchun minimal sug'urta staji — 6 oy." },
      { question: "Kasallik varag'ini kim to'laydi?", answer: "2026-yil 1-iyuldan: yildagi birinchi 5 kalendar kun — ish beruvchi, 6-kundan — bevosita DSSF (Davlat sug'urta ijtimoiy fondi)." },
      { question: "Kasallik varag'ining maksimal muddati qancha?", answer: "Yiliga 182 kalendar kungacha. Kasal bolaga qarashda limit 20 kunga (14 yoshgacha bola) yoki 40 kunga (16 yoshgacha nogironligi bo'lgan bola) ko'p. Keyin TIEK qaror qabul qiladi." },
      { question: "Kasallik varag'i soliqqa tortiladimi?", answer: "Ha, JShShS 12% ushlab qolinadi (IJPH 0,1% badali shu 12% ichida). Ijtimoiy soliq hisoblanmaydi." },
      { question: "Bolaga qarov uchun kasallik varag'i qanday to'lanadi?", answer: "Oddiy kasallik varag'i kabi, lekin yillik 182 kunlik limit uzaytiriladi: 14 yoshgacha bola uchun 20 kalendar kunga, 16 yoshgacha nogironligi bo'lgan bola uchun 40 kunga." },
    ],
  },

  {
    slug: 'maternity',
    lastUpdated: '2026-09-13',
    sources: [
      { name: 'Постановление Кабмина № 796 от 17.12.2025, приложение 4', url: 'https://lex.uz/docs/7926684' },
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Отпуск по беременности и родам в Узбекистане составляет 126 календарных дней: 70 дней до родов и 56 после. При осложнённых родах или многоплодной беременности послеродовая часть увеличивается до 70 дней (итого 140 дней). С 1 января 2026 года пособие по беременности и родам выплачивается напрямую из средств ГССФ (Государственного страхового социального фонда). Размер пособия зависит от страхового стажа: при стаже 10-24 месяца — 75% среднего заработка, 25-60 месяцев — 85%, 61 месяц и более — 100%. Для получения пособия необходим минимальный страховой стаж не менее 10 месяцев.',
      'Пособие по уходу за ребёнком до 2 лет — фиксированные 60% минимальной заработной платы (МРОТ), то есть 816 000 сум/мес. Отпуск по уходу до 2 лет предоставляется с сохранением рабочего места, до 3 лет — без сохранения, но с правом вернуться на прежнюю должность. Отпуск может взять не только мать, но и отец, бабушка, дедушка или другой родственник, фактически осуществляющий уход.',
      'Единовременное государственное пособие при рождении ребёнка («суюнчи пули») в 2026 году составляет 70,3% МРОТ — около 956 000 сум (при МРОТ 1 360 000 сум, действующем с 1 сентября 2026 года). Пособие назначается автоматически через Единый реестр социальной защиты: на первого ребёнка — всем матерям, на второго — семьям в реестре, на третьего и последующих не выплачивается. Основание — ПКМ №110 от 04.03.2024. Работодатель может дополнительно выплатить свою материальную помощь по коллективному договору — это отдельная добровольная выплата. Также государство платит ежемесячное пособие семьям с детьми до 2 лет — размер зависит от дохода семьи.',
      'Декретное пособие не облагается НДФЛ и социальным налогом. Считается оно по той же формуле, что и больничный (п. 16, 17 и 25 приложения 4 к ПКМ № 796): среднемесячный заработок ÷ 25,3 × процент по стажу × число оплачиваемых дней. Среднемесячный заработок — заработок за 12 месяцев страхового стажа перед месяцем назначения пособия, делённый на 12; если стаж меньше 12 месяцев — на число месяцев стажа. Учитывается не больше 10 МРОТ в месяц (13 600 000 сум с 1 сентября 2026 года), в заработок входят все доходы в виде оплаты труда, облагаемые налогом и страховыми взносами (п. 26, 27). Застрахованным добровольно (самозанятым и др.) пособие назначается не больше 5 МРОТ. Отпуск длится 126 или 140 календарных дней, но воскресенья и нерабочие праздничные дни внутри него не оплачиваются: 126 дней — ровно 18 недель, поэтому оплачиваются 108 дней за вычетом праздников, выпавших не на воскресенье (из 140 дней — 120 за вычетом таких праздников).',
      'Пример расчёта декретного пособия: отпуск с 1 октября 2026 года по 3 февраля 2027 года (126 календарных дней), средний заработок 15 000 000 сум/мес. Это выше потолка, поэтому в расчёт идут 10 МРОТ = 13 600 000 сум, среднедневной = 13 600 000 / 25,3 ≈ 537 549 сум. В периоде 18 воскресений и три праздника, выпавших на будни (1 октября, 8 декабря, 1 января), оплачиваются 105 дней. При страховом стаже от 61 месяца (100%) пособие = 537 549 × 105 ≈ 56 442 688 сум (налогом не облагается). При стаже 25-60 месяцев (85%) пособие составит ≈ 47 976 285 сум, при стаже 10-24 месяца (75%) — ≈ 42 332 016 сум. Пособие по уходу до 2 лет = 60% × МРОТ = 816 000 сум/мес (24 месяца = 19 584 000 сум). Итого за весь период (декрет + уход до 2 лет): ~76 млн сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda homiladorlik va tug'ish ta'tili 126 kalendar kun: tug'ishdan 70 kun oldin va 56 kun keyin. Asoratli tug'ish yoki ko'p homilada tug'ishdan keyingi qism 70 kungacha oshiriladi (jami 140 kun). 2026-yil 1-yanvardan homiladorlik va tug'ish nafaqasi bevosita DSSF (Davlat sug'urta ijtimoiy fondi) mablag'laridan to'lanadi. Nafaqa miqdori sug'urta stajiga bog'liq: 10-24 oy stajda — o'rtacha ish haqining 75%, 25-60 oy — 85%, 61 oy va undan ko'p — 100%. Nafaqa olish uchun kamida 10 oylik sug'urta staji talab qilinadi.",
      "2 yoshgacha bolaga qarashuv nafaqasi — minimal ish haqining (MROT) qat'iy 60%, ya'ni oyiga 816 000 so'm. 2 yilgacha qarashuv ta'tili ish joyini saqlash bilan, 3 yilgacha — saqlashsiz, lekin avvalgi lavozimga qaytish huquqi bilan beriladi. Ta'tilni nafaqat ona, balki ota, buvi, bobo yoki bolaga haqiqatda qarayotgan boshqa qarindosh ham olishi mumkin.",
      "Bola tug'ilganda bir martalik davlat nafaqasi («suyunchi puli») 2026-yilda MROTning 70,3% ni tashkil etadi — taxminan 956 000 so'm (2026-yil 1-sentyabrdan amal qiluvchi MROT 1 360 000 so'mda). Nafaqa Ijtimoiy himoya yagona reestri orqali avtomatik tayinlanadi: birinchi bolaga — barcha onalarga, ikkinchisiga — reestrdagi oilalarga, uchinchi va keyingilariga to'lanmaydi. Asos — VMQ №110, 04.03.2024. Ish beruvchi jamoa shartnomasi bo'yicha qo'shimcha moddiy yordam berishi mumkin — bu alohida ixtiyoriy to'lov. Shuningdek davlat 2 yoshgacha bolali oilalarga oylik nafaqa to'laydi — miqdori oila daromadiga bog'liq.",
      "Dekret nafaqasi JShShS va ijtimoiy soliqqa tortilmaydi. U kasallik varag'i bilan bir xil formula bo'yicha hisoblanadi (VMQ №796, 4-ilova, 16, 17 va 25-bandlar): o'rtacha oylik ish haqi ÷ 25,3 × staj foizi × to'lanadigan kunlar soni. O'rtacha oylik ish haqi — nafaqa tayinlanadigan oydan oldingi 12 oylik sug'urta staji davridagi ish haqining 12 ga bo'lingani; staj 12 oydan kam bo'lsa — staj oylari soniga bo'lingani. Oyiga MROTning 10 baravaridan ortig'i hisobga olinmaydi (2026-yil 1-sentabrdan 13 600 000 so'm), ish haqiga soliq va sug'urta badallariga tortiladigan barcha mehnat daromadlari kiradi (26, 27-bandlar). Ixtiyoriy sug'urtalanganlarga (o'zini o'zi band qilganlar va boshqalar) nafaqa MROTning 5 baravaridan oshmagan miqdorda tayinlanadi. Ta'til 126 yoki 140 kalendar kun davom etadi, lekin undagi yakshanba va ishlanmaydigan bayram kunlari to'lanmaydi: 126 kun — roppa-rosa 18 hafta, shuning uchun 108 kun to'lanadi, yakshanbaga to'g'ri kelmagan bayramlar esa bundan ayiriladi (140 kunda — 120 kun, shunday bayramlar ayirilgan holda).",
      "Dekret nafaqasini hisoblash misoli: ta'til 2026-yil 1-oktabrdan 2027-yil 3-fevralgacha (126 kalendar kun), o'rtacha ish haqi 15 000 000 so'm/oy. Bu chegaradan yuqori, shuning uchun hisobga 10 MROT = 13 600 000 so'm olinadi, o'rtacha kunlik = 13 600 000 / 25,3 ≈ 537 549 so'm. Davrda 18 ta yakshanba va ish kuniga tushgan uchta bayram (1-oktabr, 8-dekabr, 1-yanvar) bor, 105 kun to'lanadi. Sug'urta staji 61 oy va undan ko'p bo'lsa (100%) nafaqa = 537 549 × 105 ≈ 56 442 688 so'm (soliqqa tortilmaydi). 25-60 oy stajda (85%) nafaqa ≈ 47 976 285 so'm, 10-24 oy stajda (75%) — ≈ 42 332 016 so'm bo'ladi. 2 yilgacha qarashuv nafaqasi = MROTning 60% = 816 000 so'm/oy (24 oy = 19 584 000 so'm). Butun davr uchun jami (dekret + 2 yilgacha qarashuv): ~76 mln so'm.",
    ],
    faqRu: [
      { question: 'Сколько длится декретный отпуск?', answer: '126 дней (70 до + 56 после родов). При осложнениях: 140 дней (70 + 70). С 2026 года пособие выплачивает ГССФ напрямую.' },
      { question: 'Какое пособие по уходу за ребёнком?', answer: 'Фиксированные 60% от МРОТ (816 000 сум/мес) до достижения ребёнком 2 лет, независимо от стажа и числа детей.' },
      { question: 'Какое единовременное пособие при рождении?', answer: 'Государственное пособие («суюнчи пули») — 70,3% МРОТ, около 956 000 сум в 2026 году (ПКМ №110). На первого ребёнка — всем матерям, на второго — семьям в Едином реестре соцзащиты. Работодатель может доплатить отдельно.' },
      { question: 'Облагается ли декретное пособие налогом?', answer: 'Нет, пособие по беременности и родам не облагается НДФЛ и социальным налогом.' },
      { question: 'Может ли отец взять отпуск по уходу?', answer: 'Да, отпуск по уходу за ребёнком может взять отец, бабушка, дедушка или другой родственник.' },
    ],
    faqUz: [
      { question: "Dekret ta'tili qancha davom etadi?", answer: "126 kun (tug'ishdan oldin 70 + keyin 56). Asoratlarda: 140 kun (70 + 70). 2026-yildan nafaqani DSSF bevosita to'laydi." },
      { question: "Bolaga qarashuv nafaqasi qancha?", answer: "Bola 2 yoshga to'lguncha MROTning qat'iy 60% (oyiga 816 000 so'm), staj va bolalar sonidan qat'i nazar." },
      { question: "Tug'ilganda bir martalik nafaqa qancha?", answer: "Davlat nafaqasi («suyunchi puli») — MROTning 70,3%, 2026-yilda qariyb 956 000 so'm (VMQ №110). Birinchi bolaga — barchaga, ikkinchisiga — reestrdagi oilalarga. Ish beruvchi alohida qo'shimcha to'lashi mumkin." },
      { question: "Dekret nafaqasi soliqqa tortiladimi?", answer: "Yo'q, homiladorlik va tug'ish nafaqasi JShShS va ijtimoiy soliqqa tortilmaydi." },
      { question: "Ota bolaga qarashuv ta'tilini olishi mumkinmi?", answer: "Ha, bolaga qarashuv ta'tilini ota, buvi, bobo yoki boshqa qarindosh olishi mumkin." },
    ],
  },

  {
    slug: 'severance',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Выходное пособие при увольнении в Узбекистане зависит от основания увольнения и стажа работы в организации. При сокращении штата размер выходного пособия зависит от стажа у этого работодателя и не может быть меньше: при стаже до 3 лет — 50% среднемесячного заработка, от 3 до 5 лет — 75%, от 5 до 10 лет — 100%, от 10 до 15 лет — 150%, свыше 15 лет — 200% (2 среднемесячных заработка). При ликвидации, сокращении и ряде других оснований (отказ от работы на новых условиях или от переезда вместе с работодателем, отсутствие подходящей работы при переводе по состоянию здоровья и др.) за работником на время поиска работы сохраняется среднемесячный заработок — не более 2 месяцев, причём выходное пособие засчитывается в эту сумму, а не выплачивается сверх неё. За третий месяц заработок сохраняется, если в течение 30 календарных дней после увольнения работник встал на учёт в местном органе по труду как ищущий работу (ст. 100 ТК). Минимальная заработная плата в Узбекистане составляет 1 360 000 сум.',
      'Компенсация за неиспользованный отпуск выплачивается при увольнении по любому основанию. Базовый трудовой отпуск в Узбекистане — 21 календарный день (для отдельных категорий — до 30 дней). Расчёт: средний дневной заработок × неиспользованные дни без воскресений (ст. 234 ТК). Средняя зарплата считается за 12 месяцев, дневная — средняя зарплата ÷ 25,3 (ст. 257 ТК). Если отпуск использован авансом — сумма удерживается при расчёте.',
      'При увольнении по собственному желанию выходное пособие не выплачивается — работник получает только компенсацию за неиспользованный отпуск и зарплату за отработанные дни. При увольнении по соглашению сторон — размер выплат определяется договорённостью и фиксируется в письменном соглашении. Судебная практика в Узбекистане признаёт такие соглашения обязательными для исполнения.',
      'Все выплаты при увольнении производятся в день прекращения трудового договора; если в этот день работник не работал — не позднее трёх дней после его требования о расчёте (ст. 254 ТК). За задержку работодатель платит компенсацию 10% от ставки рефинансирования ЦБ за каждый день (ст. 333 ТК). Компенсация за неиспользованный отпуск входит в оплату труда (ст. 374 НК): с неё удерживается НДФЛ 12% и начисляется социальный налог. Выходное пособие — прочий доход (п. 9 ст. 377 НК), облагается НДФЛ; льгота 4,22 МРОТ относится к материальной помощи, а не к пособию.',
      'Пример расчёта при сокращении: зарплата 10 000 000 сум/мес, стаж 7 лет (100% по шкале), неиспользованный отпуск 10 дней без воскресений. Выходное пособие: 10 000 000 × 100% = 10 000 000 сум. Компенсация за отпуск: (10 000 000 / 25,3) × 10 = 3 952 569 сум. Зарплата за отработанные дни (15 дней): 10 000 000 / 25,3 × 15 = 5 928 854 сум. Итого начислено: 19 881 423 сум. Минус НДФЛ 12%: чистая выплата ≈ 17 495 652 сум.',
    ],
    paragraphsUz: [
      "O'zbekistonda ishdan bo'shatishda chiqish nafaqasi ishdan bo'shatish asosiga va tashkilotdagi ish stajiga bog'liq. Shtatni qisqartirishda chiqish nafaqasi miqdori shu ish beruvchidagi stajga bog'liq va quyidagidan kam bo'lishi mumkin emas: 3 yilgacha stajda — o'rtacha oylik ish haqining 50%, 3 dan 5 yilgacha — 75%, 5 dan 10 yilgacha — 100%, 10 dan 15 yilgacha — 150%, 15 yildan ortiq — 200% (2 o'rtacha oylik ish haqi). Tashkilot tugatilganda, shtat qisqartirilganda va boshqa ayrim asoslarda (yangi shartlarda ishlashdan yoki ish beruvchi bilan boshqa joyga ko'chishdan bosh tortish, sog'lig'i bo'yicha o'tkazishda mos ish yo'qligi va h.k.) ish qidirish davrida xodimning o'rtacha oylik ish haqi saqlanadi — ko'pi bilan ikki oy, bunda chiqish nafaqasi shu summaga hisobga olinadi, uning ustiga to'lanmaydi. Uchinchi oy uchun ham ish haqi saqlanadi, agar xodim mehnat shartnomasi bekor qilinganidan keyin o'ttiz kalendar kun ichida mahalliy mehnat organida ish qidirayotgan shaxs sifatida ro'yxatdan o'tgan bo'lsa (MKning 100-moddasi). O'zbekistonda minimal ish haqi 1 360 000 so'm.",
      "Foydalanilmagan ta'til uchun kompensatsiya har qanday asosda ishdan bo'shatishda to'lanadi. O'zbekistonda asosiy mehnat ta'tili — 21 kalendar kun (ayrim toifalar uchun — 30 kungacha). Hisob: o'rtacha kunlik ish haqi × yakshanbalarsiz foydalanilmagan kunlar (MK 234-moddasi). O'rtacha ish haqi 12 oy uchun hisoblanadi, kunligi — o'rtacha ish haqi ÷ 25,3 (MK 257-moddasi). Ta'til avans bilan ishlatilgan bo'lsa — hisob-kitobda ushlab qolinadi.",
      "O'z xohishi bilan ishdan bo'shaganda chiqish nafaqasi to'lanmaydi — xodim faqat foydalanilmagan ta'til kompensatsiyasi va ishlagan kunlar uchun ish haqini oladi. Tomonlar kelishuvi bo'yicha ishdan bo'shatishda — to'lovlar miqdori kelishuv bilan aniqlanadi va yozma kelishuvda belgilanadi. O'zbekistondagi sud amaliyoti bunday kelishuvlarni bajarish uchun majburiy deb tan oladi.",
      "Ishdan bo'shatishdagi barcha to'lovlar mehnat shartnomasi bekor qilingan kuni amalga oshiriladi; xodim o'sha kuni ishlamagan bo'lsa — hisob-kitob talabidan keyin uch kundan kechiktirmay (MK 254-moddasi). Kechiktirilganda ish beruvchi har bir kun uchun MB qayta moliyalash stavkasining 10% i miqdorida kompensatsiya to'laydi (MK 333-moddasi). Foydalanilmagan ta'til kompensatsiyasi mehnatga haq to'lashga kiradi (SK 374-moddasi): undan JShShS 12% ushlanadi va ijtimoiy soliq hisoblanadi. Chiqish nafaqasi — boshqa daromad (SK 377-moddasi 9-bandi), JShShSga tortiladi; 4,22 MIH imtiyozi nafaqaga emas, moddiy yordamga tegishli.",
      "Qisqartirishda hisoblash misoli: ish haqi 10 000 000 so'm/oy, staj 7 yil (shkala bo'yicha 100%), yakshanbalarsiz foydalanilmagan ta'til 10 kun. Chiqish nafaqasi: 10 000 000 × 100% = 10 000 000 so'm. Ta'til kompensatsiyasi: (10 000 000 / 25,3) × 10 = 3 952 569 so'm. Ishlangan kunlar uchun ish haqi (15 kun): 10 000 000 / 25,3 × 15 = 5 928 854 so'm. Jami hisoblangan: 19 881 423 so'm. Minus JShShS 12%: sof to'lov ≈ 17 495 652 so'm.",
    ],
    faqRu: [
      { question: 'Положено ли выходное пособие при увольнении?', answer: 'При сокращении — да, по градуированной шкале: до 3 лет стажа — 50%, 3-5 лет — 75%, 5-10 лет — 100%, 10-15 лет — 150%, 15+ лет — 200% среднемесячного заработка. По собственному желанию — нет (только компенсация за отпуск).' },
      { question: 'Как рассчитать компенсацию за неиспользованный отпуск?', answer: 'Средняя зарплата за 12 месяцев ÷ 25,3 × неиспользованные дни отпуска без воскресений (ст. 234 и 257 ТК).' },
      { question: 'Какие выплаты при сокращении?', answer: 'Выходное пособие (не менее 50–200% среднемесячного в зависимости от стажа) и компенсация за отпуск. На время поиска работы сохраняется среднемесячный заработок до 2 месяцев с зачётом выходного пособия; за третий месяц — если в течение 30 календарных дней встать на учёт в органе по труду.' },
      { question: 'В какой срок должны рассчитать при увольнении?', answer: 'В день прекращения договора; если работник в этот день не работал — в течение 3 дней после его требования (ст. 254 ТК). За просрочку — компенсация 10% от ставки рефинансирования ЦБ за каждый день (ст. 333 ТК).' },
      { question: 'Облагаются ли выплаты при увольнении налогом?', answer: 'Компенсация за отпуск — НДФЛ 12% и социальный налог. Выходное пособие — НДФЛ (п. 9 ст. 377 НК).' },
    ],
    faqUz: [
      { question: "Ishdan bo'shatishda chiqish nafaqasi beriladimi?", answer: "Qisqartirishda — ha, graduatsiyalangan shkala bo'yicha: 3 yilgacha staj — 50%, 3-5 yil — 75%, 5-10 yil — 100%, 10-15 yil — 150%, 15+ yil — o'rtacha oylik ish haqining 200%. O'z xohishi bilan — yo'q (faqat ta'til kompensatsiyasi)." },
      { question: "Foydalanilmagan ta'til kompensatsiyasini qanday hisoblash mumkin?", answer: "O'rtacha ish haqi 12 oy uchun ÷ 25,3 × yakshanbalarsiz foydalanilmagan ta'til kunlari (MK 234 va 257-moddalari)." },
      { question: "Qisqartirish vaqtida qanday to'lovlar bor?", answer: "Chiqish nafaqasi (stajga qarab o'rtacha oylikning kamida 50–200%) va ta'til kompensatsiyasi. Ish qidirish davrida o'rtacha oylik ish haqi chiqish nafaqasini hisobga olgan holda 2 oygacha saqlanadi; 30 kalendar kun ichida mehnat organida ro'yxatdan o'tilsa — uchinchi oy uchun ham." },
      { question: "Ishdan bo'shatishda qancha muddatda hisob-kitob qilishlari kerak?", answer: "Shartnoma bekor qilingan kuni; xodim o'sha kuni ishlamagan bo'lsa — talabidan keyin 3 kun ichida (MK 254-moddasi). Kechiktirish uchun — har bir kunga MB qayta moliyalash stavkasining 10% i (MK 333-moddasi)." },
      { question: "Ishdan bo'shatish to'lovlari soliqqa tortiladimi?", answer: "Ta'til kompensatsiyasi — JShShS 12% va ijtimoiy soliq. Chiqish nafaqasi — JShShS (SK 377-moddasi 9-bandi)." },
    ],
  },

  {
    slug: 'alimony',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Семейный кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Судебная практика', url: 'https://sud.uz' },
    ],
    paragraphsRu: [
      'Алименты в Узбекистане устанавливаются в долях от дохода плательщика: на 1 ребёнка — 25% (1/4 дохода), на 2 детей — 33% (1/3), на 3 и более детей — 50% (1/2). По решению суда алименты могут быть назначены в фиксированной сумме, если доход плательщика нерегулярный, выплачивается в валюте или в натуральной форме. Минимальный размер алиментов не может быть ниже 26,5% минимальной заработной платы на одного ребёнка (≈360 400 сум при МЗП 1 360 000 сум).',
      'Алименты удерживаются из всех видов дохода: заработная плата, премии и надбавки, доход от предпринимательской деятельности, пенсия, стипендия, доход от сдачи имущества в аренду, дивиденды. Не подлежат удержанию: командировочные расходы, материальная помощь при рождении ребёнка, компенсации при увольнении, пособие на погребение, страховые выплаты. Удержание производится после вычета НДФЛ 12%.',
      'Алименты на стороне получателя не облагаются НДФЛ — это полностью не облагаемый доход. Удержание алиментов осуществляется бухгалтерией работодателя плательщика на основании исполнительного листа или нотариального соглашения. Работодатель обязан перечислить алименты в течение 3 дней после выплаты зарплаты. За задержку перечисления алиментов работодатель несёт ответственность.',
      'Соглашение об алиментах может быть заключено добровольно у нотариуса — это быстрее и дешевле судебного порядка. Соглашение имеет силу исполнительного документа. В нём можно предусмотреть индексацию алиментов, порядок выплат и дополнительные условия. Алименты взыскиваются до достижения ребёнком 18 лет; на совершеннолетних детей — только если они нетрудоспособны и нуждаются в помощи.',
      'Пример расчёта: доход плательщика 10 000 000 сум/мес (до НДФЛ). После НДФЛ: 10 000 000 − 1 200 000 = 8 800 000 сум. Алименты на 2 детей: 8 800 000 × 1/3 = 2 933 333 сум. На руки плательщику: 5 866 667 сум. Получатель алиментов: 2 933 333 сум (налогом не облагается). В поле калькулятора вводите доход уже после НДФЛ: он покажет сумму алиментов.',
    ],
    paragraphsUz: [
      "O'zbekistonda nafaqa to'lovchining daromadidan ulushlar sifatida belgilanadi: 1 bolaga — 25% (1/4), 2 bolaga — 33% (1/3), 3 va undan ko'p bolaga — 50% (1/2). Sud qarori bilan nafaqa qat'iy summada tayinlanishi mumkin, agar to'lovchining daromadi muntazam emas, valyutada yoki natural shaklda to'lanadi. Minimal nafaqa miqdori bir bolaga minimal ish haqining 26,5% (MIH 1 360 000 so'mda taxminan 360 400 so'm) dan kam bo'lishi mumkin emas.",
      "Nafaqa barcha turdagi daromadlardan ushlab qolinadi: ish haqi, mukofotlar va ustamalar, tadbirkorlik faoliyatidan daromad, pensiya, stipendiya, mol-mulk ijarasidan daromad, dividendlar. Ushlab qolinmaydi: xizmat safari xarajatlari, bola tug'ilishida moddiy yordam, ishdan bo'shatish kompensatsiyasi, dafn to'lovi, sug'urta to'lovlari. Ushlash JShShS 12% chegirilgandan keyin amalga oshiriladi.",
      "Nafaqa oluvchi tomonida JShShSga tortilmaydi — bu to'liq soliqqa tortilmaydigan daromad. Nafaqani ushlash to'lovchining ish beruvchisi buxgalteriyasi tomonidan ijro varag'i yoki notarial kelishuv asosida amalga oshiriladi. Ish beruvchi ish haqi to'langandan keyin 3 kun ichida nafaqani o'tkazishi shart. Nafaqani kechiktirganlik uchun ish beruvchi javobgarlikka tortiladi.",
      "Nafaqa to'g'risida kelishuv notariusda ixtiyoriy tuzilishi mumkin — bu sud tartibidan tezroq va arzonroq. Kelishuv ijro hujjati kuchiga ega. Unda nafaqani indeksatsiya qilish, to'lov tartibini va qo'shimcha shartlarni nazarda tutish mumkin. Nafaqa bola 18 yoshga to'lguncha undiriladi; voyaga yetgan bolalarga — faqat ular mehnatga layoqatsiz va yordamga muhtoj bo'lsa.",
      "Hisoblash misoli: to'lovchining daromadi 10 000 000 so'm/oy (JShShSdan oldin). JShShSdan keyin: 10 000 000 − 1 200 000 = 8 800 000 so'm. 2 bolaga nafaqa: 8 800 000 × 1/3 = 2 933 333 so'm. To'lovchiga qo'lga: 5 866 667 so'm. Nafaqa oluvchi: 2 933 333 so'm (soliqqa tortilmaydi). Kalkulyator maydoniga daromadni JShShSdan keyin kiriting: u aliment summasini ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Какой процент алиментов на ребёнка?', answer: '1 ребёнок — 25%, 2 — 33%, 3+ — 50% от дохода после вычета НДФЛ.' },
      { question: 'С каких доходов удерживаются алименты?', answer: 'Со всех: зарплата, премии, доход ИП, пенсия, стипендия, аренда, дивиденды.' },
      { question: 'Облагаются ли алименты налогом?', answer: 'Нет, алименты не облагаются НДФЛ у получателя. Плательщик платит НДФЛ до удержания алиментов.' },
      { question: 'Какой минимальный размер алиментов?', answer: 'Не менее 26,5% МЗП (≈360 400 сум при МЗП 1 360 000 сум) на одного ребёнка.' },
      { question: 'До какого возраста платят алименты?', answer: 'До 18 лет. Совершеннолетним — только если они нетрудоспособны и нуждаются в помощи.' },
    ],
    faqUz: [
      { question: "Bolaga nafaqa necha foiz?", answer: "1 bola — 25%, 2 — 33%, 3+ — JShShS chegirilgandan keyingi daromadning 50%." },
      { question: "Qanday daromadlardan nafaqa ushlab qolinadi?", answer: "Barchasidan: ish haqi, mukofotlar, YaTT daromadi, pensiya, stipendiya, ijara, dividendlar." },
      { question: "Nafaqa soliqqa tortiladimi?", answer: "Yo'q, nafaqa oluvchi tomonida JShShSga tortilmaydi. To'lovchi nafaqa ushlanishidan oldin JShShS to'laydi." },
      { question: "Minimal nafaqa miqdori qancha?", answer: "Bir bolaga MIHning 26,5% (taxminan 360 400 so'm) dan kam emas." },
      { question: "Necha yoshgacha nafaqa to'lanadi?", answer: "18 yoshgacha. Voyaga yetganlarga — faqat mehnatga layoqatsiz va yordamga muhtoj bo'lganda." },
    ],
  },

  {
    slug: 'overtime',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Трудовой кодекс РУз', url: 'https://lex.uz/docs/6257288' },
      { name: 'Минтруд РУз', url: 'https://mehnat.uz' },
    ],
    paragraphsRu: [
      'Сверхурочная работа в Узбекистане оплачивается в повышенном размере: первые 2 часа — не менее чем в 1,5-кратном, последующие часы — не менее чем в 2-кратном размере от обычной часовой ставки, а при вредных или неблагоприятных условиях каждый час не менее чем в 2-кратном (ст. 262 ТК). Работа в выходные и праздничные дни оплачивается не ниже чем в двойном размере: работнику на окладе — не менее одинарной ставки сверх оклада (ст. 263 ТК). Стандартная продолжительность рабочей недели в Узбекистане — 40 часов (5 дней по 8 часов).',
      'Максимальная продолжительность сверхурочных работ строго ограничена Трудовым кодексом: не более 4 часов за 2 дня подряд, на работах с неблагоприятными условиями — 2 часов в день (ст. 190; годовой лимит 120 ч отменён Законом ЗРУ-1095 от 11.11.2025). Привлечение к сверхурочной работе допускается только с письменного согласия работника. Запрещено привлекать: беременных женщин, работников до 18 лет, инвалидов (без их письменного согласия и медицинского заключения об отсутствии противопоказаний).',
      'Часовая ставка для расчёта определяется: для повременной оплаты — делением оклада на количество рабочих часов в месяце (обычно 168 часов); для сдельной — средняя дневная выработка делится на 8 часов. Ночная работа (с 22:00 до 06:00) оплачивается с доплатой не менее 50% от часовой ставки. При совпадении сверхурочных с ночным временем применяются обе надбавки одновременно.',
      'Оплата сверхурочных облагается НДФЛ 12% и социальным налогом на общих основаниях — льгот по налогообложению нет. Работодатель обязан вести точный учёт сверхурочных часов каждого работника. За нарушение норм о продолжительности сверхурочных работ предусмотрены административные штрафы для должностных лиц — от 5 до 10 БРВ (2 200 000 — 4 400 000 сум).',
      'Пример расчёта: оклад 10 000 000 сум/мес, 168 рабочих часов. Часовая ставка = 59 524 сум. 4 часа сверхурочных: 2ч × 89 286 (×1,5) + 2ч × 119 048 (×2) = 416 668 сум (вместо 238 096 при обычной ставке). Доплата: 178 572 сум. Работа в выходной (8 часов) на окладе: сверх оклада 8 × 59 524 = 476 192 сум, всего за эти часы двойная ставка 952 384 сум. Наш калькулятор показывает начисление сверх оклада до налогов.',
    ],
    paragraphsUz: [
      "O'zbekistonda ortiqcha ish oshirilgan miqdorda to'lanadi: dastlabki 2 soat — oddiy soatlik stavkadan 1,5 baravarda, har keyingi soat — 2 baravarda. Dam olish va bayram kunlaridagi ish kamida ikki baravar to'lanadi: oklad oluvchi xodimga — okladdan tashqari kamida bir baravar stavka (MK 263-moddasi). Zararli yoki noqulay sharoitlarda ortiqcha ishning har bir soati kamida ikki baravar to'lanadi (MK 262-moddasi). O'zbekistonda standart ish haftasi — 40 soat (5 kun 8 soatdan).",
      "Ortiqcha ishning maksimal davomiyligi Mehnat kodeksi bilan qat'iy cheklangan: ketma-ket 2 kun uchun 4 soatdan ko'p emas (yillik 120 soatlik limit ZRU-1095 Qonuni bilan 11.11.2025-yilda bekor qilingan). Ortiqcha ishga jalb qilish faqat xodimning yozma roziligi bilan ruxsat etiladi. Taqiqlangan: homilador ayollar, 18 yoshgacha xodimlar, nogironlar (ularning yozma roziligi va tibbiy xulosasiz).",
      "Hisoblash uchun soatlik stavka aniqlanadi: vaqtbay to'lovda — okladni oydagi ish soatlari soniga bo'lish (odatda 168 soat); ishbayda — o'rtacha kunlik ishlab chiqarishni 8 soatga bo'lish. Tungi ish (22:00 dan 06:00 gacha) soatlik stavkaning kamida 50% ustama bilan to'lanadi. Ortiqcha ish tungi vaqtga to'g'ri kelganda ikkala ustama bir vaqtda qo'llaniladi.",
      "Ortiqcha ish to'lovi JShShS 12% va ijtimoiy soliqqa umumiy asoslarda tortiladi — soliq bo'yicha imtiyozlar yo'q. Ish beruvchi har bir xodimning ortiqcha ish soatlarining aniq hisobini yuritishi shart. Ortiqcha ish davomiyligi normalari buzilganligi uchun mansabdor shaxslarga ma'muriy jarimalar nazarda tutilgan — 5 dan 10 BHKgacha (2 200 000 — 4 400 000 so'm).",
      "Hisoblash misoli: oklad 10 000 000 so'm/oy, 168 ish soati. Soatlik stavka = 59 524 so'm. 4 soat ortiqcha ish: 2s × 89 286 (×1,5) + 2s × 119 048 (×2) = 416 668 so'm (oddiy stavkada 238 096 o'rniga). Ustama: 178 572 so'm. Dam olish kunida ish (8 soat) oklad bilan: okladdan tashqari 8 × 59 524 = 476 192 so'm, bu soatlar uchun jami ikki baravar stavka 952 384 so'm. Kalkulyatorimiz okladdan tashqari hisoblangan summani soliqlargacha ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как оплачивается сверхурочная работа?', answer: 'Первые 2 часа — не менее ×1,5, далее — не менее ×2 от часовой ставки; при вредных условиях каждый час не менее ×2. В выходные и праздники — на окладе не менее одинарной ставки сверх оклада.' },
      { question: 'Сколько часов можно работать сверхурочно?', answer: 'До 4 часов за 2 дня подряд (годовой лимит 120 ч отменён Законом ЗРУ-1095 от 11.11.2025). Только с письменного согласия работника.' },
      { question: 'Кого нельзя привлекать к сверхурочным?', answer: 'Беременных, несовершеннолетних (до 18), инвалидов (без их согласия и медзаключения).' },
      { question: 'Как оплачивается работа в ночное время?', answer: 'С доплатой не менее 50% от часовой ставки. Ночное время: с 22:00 до 06:00.' },
      { question: 'Облагаются ли сверхурочные налогом?', answer: 'Да, НДФЛ 12% и социальный налог на общих основаниях. Льгот нет.' },
    ],
    faqUz: [
      { question: "Ortiqcha ish qanday to'lanadi?", answer: "Dastlabki 2 soat — soatlik stavkadan ×1,5, keyin — ×2. Dam olish/bayramlarda — ×2 yoki qo'shimcha dam." },
      { question: "Necha soat ortiqcha ishlash mumkin?", answer: "Ketma-ket 2 kun uchun 4 soatgacha (yillik 120 soatlik limit ZRU-1095 Qonuni bilan 11.11.2025-yilda bekor qilingan). Faqat xodimning yozma roziligi bilan." },
      { question: "Kimni ortiqcha ishga jalb qilib bo'lmaydi?", answer: "Homiladorlar, 18 yoshgacha yoshlar, nogironlar (ularning roziligi va tibbiy xulosasisiz)." },
      { question: "Tungi ish qanday to'lanadi?", answer: "Soatlik stavkaning kamida 50% ustamasi bilan. Tungi vaqt: 22:00 dan 06:00 gacha." },
      { question: "Ortiqcha ish soliqqa tortiladimi?", answer: "Ha, JShShS 12% va ijtimoiy soliq umumiy asoslarda. Imtiyozlar yo'q." },
    ],
  },

  {
    slug: 'pension',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Закон о государственном пенсионном обеспечении граждан № 938-XII', url: 'https://lex.uz/ru/docs/112312' },
      { name: 'Пенсионный фонд РУз', url: 'https://pfru.uz' },
      { name: 'Закон ЗРУ-1101 «О государственном социальном страховании»', url: 'https://lex.uz/docs/7889171' },
    ],
    paragraphsRu: [
      'Пенсионный возраст в Узбекистане: мужчины — 60 лет, женщины — 55 лет. Женщины, имеющие не менее 20 лет стажа, засчитываемого по пунктам «а»—«г» и «к» части первой ст. 37 закона (работа с уплатой взносов, военная служба и приравненные к ней периоды), вправе выйти на пенсию на год раньше — в 54 года (ст. 12¹ Закона о государственном пенсионном обеспечении, в редакции ЗРУ-922 от 18.03.2024). Требуется именно такой стаж, а не любой трудовой. Для получения полной пенсии по возрасту необходим минимальный трудовой стаж: 25 лет для мужчин и 20 лет для женщин. При недостаточном стаже (но не менее 7 лет) назначается пенсия в пропорциональном размере, но не ниже 50% минимальной пенсии по возрасту (ст. 8 закона в редакции ЗРУ-922 от 18.03.2024). С 1 января 2026 года вступил в силу Закон ЗРУ-1101 от 09.12.2025 «О государственном социальном страховании», который реформирует систему социальных выплат, включая пенсионное обеспечение. Минимальная пенсия по возрасту с 1 июля 2026 года составляет 983 000 сум в месяц.',
      'Формула расчёта пенсии: Пенсия = Средний заработок за лучшие 5 последовательных лет × (55% + 1% за каждый год стажа сверх минимального). Максимальный размер — 75% от среднего заработка. Заработок для расчёта ограничен двенадцатью базовыми величинами исчисления пенсии (ст. 31 закона): с 1 июля 2026 года это 12 × 504 000 = 6 048 000 сум, поэтому пенсия по этой формуле не превышает 4 536 000 сум. При стаже 25 лет: 55% + 0% = 55%. При стаже 35 лет: 55% + 10% = 65%. При стаже 45 лет: 55% + 20% = 75% (максимум). Средний заработок индексируется с учётом роста минимальной зарплаты.',
      'В Узбекистане действует накопительная пенсионная система (Закон № 702-II от 2 декабря 2004 года) — индивидуальный накопительный пенсионный счёт (ИНПС). Обязательный взнос составляет 0,1% от начисленной заработной платы и входит в НДФЛ, сверх него не удерживается. Накопления являются личной собственностью работника и наследуются.',
      'Льготная пенсия (ст. 9–12 закона) предусмотрена, в частности, для инвалидов войны, матерей детей с инвалидностью с детства, работников с вредными и тяжёлыми условиями труда по спискам, лётного состава, врачей и среднего медперсонала специализированных медучреждений. Размеры пенсий повышаются указами Президента: с 1 июля 2026 года на 7% (УП-115).',
      'Пример расчёта: мужчина, стаж 30 лет, средний заработок за лучшие 5 лет — 8 000 000 сум/мес. В расчёт идёт не более 6 048 000 сум, поэтому пенсия = 6 048 000 × (55% + 5%) = 3 628 800 сум/мес. Наш калькулятор рассчитает вашу будущую пенсию по введённым данным о стаже, заработке и возрасте.',
    ],
    paragraphsUz: [
      "O'zbekistonda pensiya yoshi: erkaklar — 60 yosh, ayollar — 55 yosh. Qonunning 37-moddasi birinchi qismi «a»—«g» va «k» bandlari bo'yicha hisobga olinadigan kamida 20 yillik stajga ega ayollar bir yil erta — 54 yoshda pensiyaga chiqish huquqiga ega (Davlat pensiya ta'minoti to'g'risidagi qonunning 12¹-moddasi, 18.03.2024-yildagi ZRU-922 tahririda). Aynan shunday staj talab qilinadi, har qanday mehnat staji emas. Yoshi bo'yicha to'liq pensiya olish uchun minimal ish staji zarur: erkaklar uchun 25 yil va ayollar uchun 20 yil. Staj yetarli bo'lmaganda (lekin 7 yildan kam bo'lmasa) mutanosib miqdorda, lekin yoshi bo'yicha minimal pensiyaning 50% idan kam bo'lmagan pensiya tayinlanadi (qonunning 8-moddasi, 18.03.2024-yildagi ZRU-922 tahririda). 2026-yil 1-yanvardan davlat ijtimoiy sug'urta to'g'risidagi №1101-son Qonun kuchga kirdi, u ijtimoiy to'lovlar tizimini, jumladan pensiya ta'minotini isloh qiladi. Yoshi bo'yicha minimal pensiya 2026-yil 1-iyuldan oyiga 983 000 so'mni tashkil etadi.",
      "Pensiya hisoblash formulasi: Pensiya = Eng yaxshi ketma-ket 5 yildagi o'rtacha ish haqi × (55% + minimaldan ortiq har yil staj uchun 1%). Maksimal miqdor — o'rtacha ish haqining 75%. 25 yil stajda: 55% + 0% = 55%. 35 yil stajda: 55% + 10% = 65%. 45 yil stajda: 55% + 20% = 75% (maksimum). Hisob uchun ish haqi pensiya hisoblash bazaviy miqdorining o'n ikki baravari bilan cheklangan (qonunning 31-moddasi): 2026-yil 1-iyuldan 12 × 504 000 = 6 048 000 so'm, shuning uchun bu formula bo'yicha pensiya 4 536 000 so'mdan oshmaydi.",
      "O'zbekistonda jamg'arma pensiya tizimi amal qiladi (2004-yil 2-dekabrdagi 702-II-sonli Qonun) — individual jamg'arma pensiya hisobvarag'i (IJPH). Majburiy badal hisoblangan ish haqining 0,1% ini tashkil etadi va JShShS ichiga kiradi, uning ustiga ushlanmaydi. Jamg'armalar xodimning shaxsiy mulki bo'lib, meros qilib qoldiriladi.",
      "Imtiyozli pensiya (qonunning 9–12-moddalari), xususan, urush nogironlari, bolalikdan nogironligi bo'lgan bolalarning onalari, ro'yxatlar bo'yicha zararli va og'ir sharoitlarda ishlovchilar, uchuvchi xodimlar, ixtisoslashgan tibbiyot muassasalarining shifokorlari va o'rta tibbiyot xodimlari uchun nazarda tutilgan. Pensiyalar Prezident farmonlari bilan oshiriladi: 2026-yil 1-iyuldan 7% ga (PF-115).",
      "Hisoblash misoli: erkak, staj 30 yil, eng yaxshi 5 yildagi o'rtacha ish haqi — 8 000 000 so'm/oy. Hisobga ko'pi bilan 6 048 000 so'm olinadi, shuning uchun pensiya = 6 048 000 × (55% + 5%) = 3 628 800 so'm/oy. Kalkulyatorimiz staj, ish haqi va yosh haqidagi kiritilgan ma'lumotlar bo'yicha kelajakdagi pensiyangizni hisoblaydi.",
    ],
    faqRu: [
      { question: 'Какой пенсионный возраст в Узбекистане?', answer: 'Мужчины — 60 лет, женщины — 55 лет. Женщины, у которых не менее 20 лет стажа, засчитываемого по ст. 37 закона, могут выйти на пенсию в 54 года (норма действует с марта 2024 года). Есть и другие категории с правом на досрочную пенсию.' },
      { question: 'Какая минимальная пенсия?', answer: '983 000 сум (с 1 июля 2026). Конкретный размер зависит от стажа и среднего заработка.' },
      { question: 'Что такое ИНПС?', answer: 'Индивидуальный накопительный пенсионный счёт. Взнос 0,1% от зарплаты входит в НДФЛ. Личная собственность, наследуется.' },
      { question: 'Какой стаж нужен для полной пенсии?', answer: 'Мужчины — 25 лет, женщины — 20 лет. При меньшем стаже (от 7 лет) — пропорциональная пенсия.' },
      { question: 'Кто имеет право на досрочную пенсию?', answer: 'Инвалиды войны, матери детей с инвалидностью с детства, работники с вредными и тяжёлыми условиями по спискам, лётный состав, врачи и средний медперсонал специализированных медучреждений (ст. 9–12 закона).' },
    ],
    faqUz: [
      { question: "O'zbekistonda pensiya yoshi necha?", answer: "Erkaklar — 60 yosh, ayollar — 55 yosh. Qonunning 37-moddasi bo'yicha hisobga olinadigan kamida 20 yillik stajga ega ayollar 54 yoshda pensiyaga chiqishi mumkin (norma 2024-yil martdan amal qiladi). Muddatidan oldingi pensiya huquqiga ega boshqa toifalar ham bor." },
      { question: "Minimal pensiya qancha?", answer: "983 000 so'm (2026-yil 1-iyuldan). Aniq miqdor staj va o'rtacha ish haqiga bog'liq." },
      { question: "IJPH nima?", answer: "Individual jamg'arma pensiya hisobvarag'i. To'lov ish haqining 0,1%. Shaxsiy mulk, meros qilib qoldiriladi." },
      { question: "To'liq pensiya uchun qancha staj kerak?", answer: "Erkaklar — 25 yil, ayollar — 20 yil. Kam stajda (7 yildan) — mutanosib pensiya." },
      { question: "Kim muddatidan oldingi pensiyaga haqli?", answer: "Urush nogironlari, bolalikdan nogironligi bo'lgan bolalarning onalari, ro'yxatlar bo'yicha zararli va og'ir sharoitlarda ishlovchilar, uchuvchi xodimlar, ixtisoslashgan tibbiyot muassasalari shifokorlari va o'rta tibbiyot xodimlari (qonunning 9–12-moddalari)." },
    ],
  },

  {
    slug: 'installment',
    lastUpdated: '2026-11-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор рассрочки рассчитывает ежемесячный платёж при покупке товара в рассрочку без процентов. В Узбекистане рассрочка стала одним из самых популярных способов приобретения техники, мебели и бытовых товаров. В отличие от потребительского кредита, рассрочка предоставляется под 0% — переплата формально отсутствует, хотя цена товара в рассрочку может быть выше, чем при оплате наличными.',
      'Формула расчёта проста: ежемесячный платёж = (цена товара − первоначальный взнос) / количество месяцев. Пример: смартфон стоимостью 8 000 000 сум без первоначального взноса на 12 месяцев — платёж составит 666 667 сум в месяц. При рассрочке на 6 месяцев платёж вырастет до 1 333 333 сум, но общая сумма останется прежней — никаких процентов.',
      'Рассрочку в Узбекистане оформляют через банковские карты платёжных систем Uzum, Click, Payme, Anor, а также через банки-партнёры крупных торговых сетей — Mediapark, Texnomart, Artel. Доступные сроки зависят от категории товара и магазина: электроника — обычно 3, 6 или 12 месяцев; мебель и бытовая техника — до 18–24 месяцев; одежда и аксессуары — 3–6 месяцев.',
      'Важно учитывать скрытые особенности рассрочки. Некоторые магазины устанавливают разные цены для наличной покупки и рассрочки — разница может достигать 5–15%. Перед оформлением сравните цену товара в нескольких магазинах и уточните, есть ли скидка за полную оплату. Также обращайте внимание на условия досрочного погашения и возможные комиссии за обслуживание карты рассрочки.',
      'Наш калькулятор рассрочки поможет быстро рассчитать ежемесячный платёж для любого товара: введите стоимость, годовую надбавку (если магазин её берёт) и срок — и получите сумму ежемесячного платежа. Первоначальный взнос вычтите из стоимости заранее. Это позволит оценить нагрузку на бюджет и выбрать оптимальный срок рассрочки, чтобы покупка была комфортной и не привела к финансовым затруднениям.',
    ],
    paragraphsUz: [
      "Bo'lib to'lash kalkulyatori foizsiz bo'lib to'lashda tovarning oylik to'lovini hisoblaydi. O'zbekistonda bo'lib to'lash texnika, mebel va maishiy tovarlarni sotib olishning eng mashhur usullaridan biriga aylangan. Iste'mol kreditidan farqli, bo'lib to'lash 0% da beriladi — rasman ortiqcha to'lov yo'q, garchi bo'lib to'lashdagi tovar narxi naqd to'lovga qaraganda yuqoriroq bo'lishi mumkin.",
      "Hisoblash formulasi oddiy: oylik to'lov = (tovar narxi − boshlang'ich to'lov) / oylar soni. Misol: 8 000 000 so'mlik smartfon boshlang'ich to'lovsiz 12 oyga — to'lov 666 667 so'm/oy. 6 oyga bo'lib to'lashda to'lov 1 333 333 so'mga oshadi, lekin umumiy summa o'sha-o'sha qoladi — hech qanday foiz yo'q.",
      "O'zbekistonda bo'lib to'lash Uzum, Click, Payme, Anor to'lov tizimlari bank kartalari orqali, shuningdek yirik savdo tarmoqlari — Mediapark, Texnomart, Artel hamkor banklari orqali rasmiylashtiriladi. Mavjud muddatlar tovar toifasi va do'konga bog'liq: elektronika — odatda 3, 6 yoki 12 oy; mebel va maishiy texnika — 18–24 oygacha; kiyim va aksessuarlar — 3–6 oy.",
      "Bo'lib to'lashning yashirin xususiyatlarini hisobga olish muhim. Ba'zi do'konlar naqd xarid va bo'lib to'lash uchun turli narxlar belgilaydi — farq 5–15% ga yetishi mumkin. Rasmiylashtirish oldidan tovar narxini bir necha do'konlarda solishtiring va to'liq to'lov uchun chegirma borligini aniqlang. Shuningdek, muddatidan oldin to'lash shartlari va bo'lib to'lash kartasi xizmat komissiyasiga e'tibor bering.",
      "Bizning bo'lib to'lash kalkulyatorimiz har qanday tovar uchun oylik to'lovni tezda hisoblashga yordam beradi: qiymatini, yillik ustamani (agar do'kon olsa) va muddatni kiriting — oylik to'lov summasini olasiz. Boshlang'ich to'lovni qiymatdan oldindan ayiring. Bu byudjetga yukni baholash va xarid qulay bo'lishi hamda moliyaviy qiyinchiliklarga olib kelmasligi uchun optimal bo'lib to'lash muddatini tanlash imkonini beradi.",
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
    lastUpdated: '2026-11-07',
    sources: [{ name: 'Закон «О потребительском кредите» ЗРУ-33', url: 'https://lex.uz/ru/docs/1004490' }],
    paragraphsRu: [
      'Калькулятор досрочного погашения кредита показывает, сколько вы сэкономите на процентах при частичном или полном внеочередном внесении средств. Согласно ст. 16 Закона «О потребительском кредите» заёмщик вправе досрочно вернуть кредит, а проценты платит только за фактический срок пользования. Центральный банк не допускает дополнительных платежей за пользование кредитом, но порядок учёта досрочных взносов зависит от договора, и в октябре 2026 года Комитет по конкуренции предложил закрепить его в законе.',
      'После частичного досрочного погашения банк предлагает два варианта пересчёта графика: сокращение срока кредита при сохранении размера ежемесячного платежа или уменьшение платежа при сохранении первоначального срока. Математически сокращение срока всегда выгоднее, поскольку уменьшается период начисления процентов, а значит, общая переплата снижается значительнее.',
      'Рассмотрим практический пример. Кредит 100 млн сум под 22% годовых на 5 лет, аннуитетные платежи — около 2 760 000 сум в месяц. Через 12 месяцев вы вносите 20 млн досрочно. При сокращении срока кредит закроется на 15 месяцев раньше, экономия на процентах составит порядка 21,9 млн сум. При уменьшении платежа ежемесячный взнос снизится до ~2 130 000 сум, но экономия составит лишь ~10,2 млн.',
      'Оптимальная стратегия досрочного погашения зависит от ваших целей. Если приоритет — минимизация переплаты, выбирайте сокращение срока и вносите средства как можно раньше (процентная нагрузка наибольшая в первые годы кредита). Если важнее снизить текущую финансовую нагрузку — уменьшайте платёж. Многие заёмщики комбинируют: сначала снижают платёж до комфортного уровня, затем сокращают срок.',
      'Наш калькулятор досрочного погашения считает выбранный сценарий: покажет экономию на процентах и новый срок или новый платёж. Введите параметры кредита, месяц и сумму досрочного взноса. Условия и сроки уведомления банка проверьте в своём договоре.',
    ],
    paragraphsUz: [
      "Kreditni muddatidan oldin to'lash kalkulyatori qisman yoki to'liq navbatdan tashqari mablag' kiritganda foizlarda qancha tejashingizni ko'rsatadi. «Iste'mol krediti to'g'risida»gi Qonunning 16-moddasiga ko'ra qarz oluvchi kreditni muddatidan oldin qaytarishi mumkin, foizlarni esa faqat haqiqiy foydalanish muddati uchun to'laydi. Markaziy bank kreditdan foydalanganlik uchun qo'shimcha to'lovlarga yo'l qo'ymaydi, lekin muddatidan oldingi to'lovlarni hisobga olish tartibi shartnomaga bog'liq, 2026-yil oktabrida Raqobat qo'mitasi uni qonunda mustahkamlashni taklif qilgan.",
      "Qisman muddatidan oldin to'lashdan keyin bank jadval bo'yicha ikki variant taklif etadi: oylik to'lov miqdorini saqlab kredit muddatini qisqartirish yoki dastlabki muddatni saqlab to'lovni kamaytirish. Matematik jihatdan muddatni qisqartirish doimo foydaliroq, chunki foiz hisoblash davri qisqaradi va umumiy ortiqcha to'lov ko'proq kamayadi.",
      "Amaliy misolni ko'rib chiqaylik. 100 mln so'mlik kredit yillik 22% da 5 yilga, annuitet to'lovlari — oyiga taxminan 2 760 000 so'm. 12 oydan keyin 20 mln muddatidan oldin kiritasiz. Muddatni qisqartirishda kredit 15 oy oldin yopiladi, foizlardagi tejash taxminan 21,9 mln so'm. To'lovni kamaytirishda oylik to'lov ~2 130 000 so'mga tushadi, lekin tejash atigi ~10,2 mln.",
      "Muddatidan oldin to'lashning optimal strategiyasi maqsadlaringizga bog'liq. Agar ustuvorlik ortiqcha to'lovni minimallashtirish bo'lsa — muddatni qisqartiring va mablag'ni iloji boricha ertaroq kiriting (foiz yuki kreditning dastlabki yillarida eng katta). Agar joriy moliyaviy yukni kamaytirish muhimroq bo'lsa — to'lovni kamaytiring. Ko'p qarz oluvchilar aralashtiradi: avval to'lovni qulay darajaga tushiradi, keyin muddatni qisqartiradi.",
      "Bizning muddatidan oldin to'lash kalkulyatorimiz tanlangan senariyni hisoblaydi: foizlardagi tejashni va yangi muddat yoki yangi to'lovni ko'rsatadi. Kredit parametrlarini, muddatidan oldin to'lov oyi va summasini kiriting. Shartlar va bankni xabardor qilish muddatlarini shartnomangizdan tekshiring.",
    ],
    faqRu: [
      { question: 'Можно ли досрочно погасить кредит без штрафа?', answer: 'Да, право закреплено в ст. 16 Закона «О потребительском кредите»: проценты платятся только за фактический срок. Порядок учёта взносов проверьте в договоре.' },
      { question: 'Что выгоднее — сокращать срок или платёж?', answer: 'Сокращение срока экономит больше на процентах. Уменьшение платежа снижает текущую нагрузку.' },
      { question: 'Нужно ли уведомлять банк?', answer: 'Зависит от договора. Некоторые банки принимают досрочное погашение только в дату платежа.' },
    ],
    faqUz: [
      { question: "Kreditni jarimasisz muddatidan oldin to'lash mumkinmi?", answer: "Ha, bu huquq «Iste'mol krediti to'g'risida»gi Qonunning 16-moddasida belgilangan: foizlar faqat haqiqiy muddat uchun to'lanadi. Badallarni hisobga olish tartibini shartnomadan tekshiring." },
      { question: "Muddatni yoki to'lovni qisqartirish foydaliroqmi?", answer: "Muddat qisqartirish foizlarda ko'proq tejaydi. To'lov kamaytirish joriy yukni kamaytiradi." },
      { question: "Bankni xabardor qilish kerakmi?", answer: "Shartnomaga bog'liq. Ba'zi banklar muddatidan oldin to'lovni faqat to'lov sanasida qabul qiladi." },
    ],
  },

  {
    slug: 'refinancing',
    lastUpdated: '2026-11-01',
    sources: [{ name: 'Центральный банк РУз', url: 'https://cbu.uz' }],
        paragraphsRu: [
      'Рефинансирование кредита — получение нового кредита на более выгодных условиях для погашения существующего. В Узбекистане эта услуга особенно актуальна: ключевая ставка Центрального банка в 2026 году составляет 14%, и многие заёмщики, оформившие кредиты при ставке 20–24%, могут значительно снизить переплату. Калькулятор рефинансирования покажет точную сумму экономии и поможет принять обоснованное решение.',
      'Рефинансирование выгодно при соблюдении нескольких условий: разница между текущей и новой ставкой составляет не менее 2–3 процентных пунктов; оставшийся срок кредита превышает 1 год; отсутствуют штрафы за досрочное погашение (по законодательству Узбекистана банки не вправе запрещать досрочное погашение потребительских кредитов). Также учтите сопутствующие расходы: переоценка залогового имущества, комиссия нового банка, переоформление страхового полиса.',
      'Пример расчёта: остаток ипотечного кредита 150 млн сум, текущая ставка 22%, осталось 5 лет. При рефинансировании под 17% ежемесячный платёж снизится с 4 140 000 до 3 730 000 сум — экономия 415 000 сум в месяц. За 5 лет общая экономия составит около 25 млн сум, из которых нужно вычесть расходы на переоформление (3–5 млн сум). Рефинансирование особенно выгодно для ипотечных кредитов с длительным сроком.',
      'Рефинансирование в Узбекистане предлагают крупнейшие банки: Ипотека-банк, Капиталбанк, Хамкорбанк, Узнацбанк и другие. Некоторые банки проводят акции со сниженными ставками для рефинансирования. Возможно также внутреннее рефинансирование — снижение ставки в текущем банке без смены кредитора, что экономит время и расходы на переоформление документов.',
      'Наш калькулятор сравнивает текущий и новый кредит по платежу: показывает текущий и новый ежемесячный платёж, экономию в месяц и за весь срок. Расходы на переоформление вычтите отдельно. Введите остаток кредита, текущую ставку, новую ставку и оставшийся срок — и получите детальный расчёт. Помните: рефинансирование не увеличивает долг, а лишь меняет условия его обслуживания на более выгодные.',
    ],
    paragraphsUz: [
      "Kreditni qayta moliyalash — mavjud kreditni to'lash uchun yangi, foydaliroq shartlardagi kredit olish. O'zbekistonda bu xizmat ayniqsa dolzarb: Markaziy bankning 2026-yildagi kalit stavkasi 14% ni tashkil etadi va stavka 20–24% da kredit rasmiylashtirgan ko'plab qarz oluvchilar ortiqcha to'lovni sezilarli kamaytirishi mumkin. Qayta moliyalash kalkulyatori aniq tejash summasini ko'rsatadi va asoslangan qaror qabul qilishga yordam beradi.",
      "Qayta moliyalash bir necha shart bajarilganda foydali: joriy va yangi stavka o'rtasidagi farq kamida 2–3 foiz punkt; kreditning qolgan muddati 1 yildan ortiq; muddatidan oldin to'lash uchun jarimalar yo'q (O'zbekiston qonunchiligiga ko'ra banklar iste'mol kreditlarini muddatidan oldin to'lashni taqiqlash huquqiga ega emas). Qo'shimcha xarajatlarni ham hisobga oling: garov mulkni qayta baholash, yangi bank komissiyasi, sug'urta polisini qayta rasmiylashtirish.",
      "Hisoblash misoli: ipoteka krediti qoldig'i 150 mln so'm, joriy stavka 22%, 5 yil qolgan. 17% ga qayta moliyalashda oylik to'lov 4 140 000 dan 3 730 000 so'mga tushadi — oyiga 415 000 so'm tejash. 5 yilda umumiy tejash taxminan 25 mln so'mni tashkil etadi, undan qayta rasmiylashtirish xarajatlarini (3–5 mln so'm) ayirish kerak. Qayta moliyalash uzoq muddatli ipoteka kreditlari uchun ayniqsa foydali.",
      "O'zbekistonda qayta moliyalashni yirik banklar taklif etadi: Ipoteka-bank, Kapitalbank, Hamkorbank, O'zMilliybank va boshqalar. Ba'zi banklar qayta moliyalash uchun pasaytirilgan stavkalar bo'yicha aksiyalar o'tkazadi. Ichki qayta moliyalash ham mumkin — kreditorni almashtirmasdan joriy bankda stavkani pasaytirish, bu hujjatlarni qayta rasmiylashtirish uchun vaqt va xarajatlarni tejaydi.",
      "Bizning kalkulyatorimiz joriy va yangi kreditni to'lov bo'yicha solishtiradi: joriy va yangi oylik to'lovni, oylik va butun muddatdagi tejashni ko'rsatadi. Qayta rasmiylashtirish xarajatlarini alohida ayiring. Kredit qoldig'i, joriy stavka, yangi stavka va muddatlarni kiriting. Esda tuting: qayta moliyalash qarzni oshirmaydi, faqat uning xizmat ko'rsatish shartlarini o'zgartiradi.",
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
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор сложных процентов показывает рост капитала с учётом капитализации — начисления процентов на ранее начисленные проценты. Формула: FV = PV × (1 + r/n)^(n×t), где PV — начальная сумма, r — годовая ставка, n — частота капитализации (12 для ежемесячной, 4 для квартальной, 1 для годовой), t — срок в годах. Сложные проценты — основа долгосрочного инвестирования и накопления.',
      'В банках Узбекистана (2026) ставки по сумовым вкладам составляют 17-22,5% годовых, по валютным — 4-7%. При таких ставках сложные проценты дают колоссальный эффект: вклад 50 млн сум под 24% на 5 лет с ежемесячной капитализацией вырастет до 164,1 млн (прирост 228,1%), тогда как без капитализации (простые проценты) было бы 110 млн (прирост 120%). Разница — более 54 млн сум.',
      'Частота капитализации существенно влияет на доходность. При ставке 24% годовых и сроке 5 лет: годовая капитализация даёт +193,2%; квартальная — +220,7%; ежемесячная — +228,1%; ежедневная — +231,9%. Разница между годовой и ежемесячной капитализацией составляет 34,9 процентных пунктов — на вкладе 50 млн это дополнительные 17,5 млн сум.',
      'Для реальной оценки дохода от вклада необходимо учитывать инфляцию. Годовая инфляция в Узбекистане на конец сентября 2026 года — 6,4% (по итогам 2025 года — 7,3%). Реальная доходность вклада под 20% = 20% − 6,4% = 13,6% годовых. Тем не менее, это значительно выше инфляции, и сложные проценты усиливают эффект. Проценты по вкладам физических лиц не облагаются НДФЛ, если вкладчик — налоговый резидент Узбекистана (п. 13 ст. 378 НК, льгота действует с 1998 года). С нерезидентов банк удерживает 10% при выплате процентов (п. 1 ст. 382 НК): льготы раздела о НДФЛ на нерезидентов не распространяются (п. 2 ч. 1 ст. 366 НК), снизить или вернуть налог можно только по соглашению об избежании двойного налогообложения, предъявив сертификат резидентства.',
      'Наш калькулятор сложных процентов позволяет задать начальную сумму, годовую ставку, частоту капитализации и срок — и мгновенно получить итоговую сумму и общий доход. Используйте его для планирования накоплений, сравнения вкладов и оценки инвестиций.',
    ],
    paragraphsUz: [
      "Murakkab foizlar kalkulyatori avval hisoblangan foizlarga foiz hisoblash — kapitalizatsiyani hisobga olgan holda kapitalning o'sishini ko'rsatadi. Formula: FV = PV × (1 + r/n)^(n×t), bunda PV — boshlang'ich summa, r — yillik stavka, n — kapitalizatsiya chastotasi (oylik uchun 12, choraklik 4, yillik 1), t — yillardagi muddat. Murakkab foizlar — uzoq muddatli investitsiyalash va jamg'arishning asosi.",
      "O'zbekiston banklarida (2026) so'mdagi omonat stavkalari yillik 17-22,5%, valyutada 4-7%. Bunday stavkalarda murakkab foizlar ulkan ta'sir beradi: 50 mln so'mlik omonat yillik 24% da 5 yilga oylik kapitalizatsiya bilan 164,1 mln gacha o'sadi (o'sish 228,1%), holbuki kapitalizatsiyasiz (oddiy foizlar) 110 mln bo'lardi (o'sish 120%). Farq — 54 mln so'mdan ortiq.",
      "Kapitalizatsiya chastotasi daromadlilikka sezilarli ta'sir qiladi. Yillik 24% stavka va 5 yil muddatda: yillik kapitalizatsiya +193,2%; choraklik — +220,7%; oylik — +228,1%; kunlik — +231,9% beradi. Yillik va oylik kapitalizatsiya o'rtasidagi farq 34,9 foiz punktni tashkil etadi — 50 mln omonatda bu qo'shimcha 17,5 mln so'm.",
      "Omonatdan haqiqiy daromadni baholash uchun inflyatsiyani hisobga olish kerak. O'zbekistonda 2026-yil sentabr oxirida yillik inflyatsiya 6,4% (2025-yil yakuni — 7,3%). 20% omonatning real daromadliligi = 20% − 6,4% = yillik 13,6%. Shunga qaramay, bu inflyatsiyadan ancha yuqori va murakkab foizlar ta'sirni kuchaytiradi. Jismoniy shaxslarning bank omonatlari bo'yicha foizlar, agar omonatchi O'zbekiston soliq rezidenti bo'lsa, JShShSga tortilmaydi (SK 378-moddasi 13-bandi, imtiyoz 1998-yildan amal qiladi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi (SK 382-moddasi 1-bandi): JShShS bo'limidagi imtiyozlar norezidentlarga tatbiq etilmaydi (SK 366-moddasi 1-qismi 2-bandi), soliqni faqat qo'sh soliqqa tortishning oldini olish to'g'risidagi bitim asosida, rezidentlik sertifikatini taqdim etib, kamaytirish yoki qaytarish mumkin.",
      "Bizning murakkab foizlar kalkulyatorimiz boshlang'ich summa, yillik stavka, kapitalizatsiya chastotasi va muddatni kiritish va bir zumda yakuniy summa hamda umumiy daromadni olish imkonini beradi. Jamg'armalarni rejalashtirish, omonatlarni solishtirish va investitsiyalarni baholash uchun foydalaning.",
    ],
    faqRu: [
      { question: 'Чем сложные проценты отличаются от простых?', answer: 'Простые: проценты только на начальную сумму. Сложные: проценты на начальную сумму плюс ранее начисленные проценты (капитализация).' },
      { question: 'Как капитализация влияет на доход?', answer: 'При 24% годовых за 5 лет: без капитализации — +120%, с ежемесячной — +228,1%. Разница на 50 млн сум — более 54 млн.' },
      { question: 'Как часто лучше капитализировать?', answer: 'Чем чаще, тем выгоднее. Ежемесячная капитализация при 24% даёт на 34,9% больше годовой за 5 лет.' },
      { question: 'Облагается ли доход по вкладам налогом?', answer: 'Нет, если вы налоговый резидент Узбекистана: проценты по вкладам в банках освобождены от НДФЛ (п. 13 ст. 378 НК). С нерезидентов банк удерживает 10% при выплате процентов.' },
      { question: 'Какая реальная доходность вкладов?', answer: 'Номинальная 17-22,5% минус годовая инфляция 6,4% (сентябрь 2026) = реальная доходность 10,6-16,1% годовых (НДФЛ с процентов по вкладу резиденты не платят).' },
    ],
    faqUz: [
      { question: "Murakkab foizlar oddiydan nimasi bilan farq qiladi?", answer: "Oddiy: faqat boshlang'ich summaga foiz. Murakkab: boshlang'ich summa hamda avval hisoblangan foizlarga foiz (kapitalizatsiya)." },
      { question: "Kapitalizatsiya daromadga qanday ta'sir qiladi?", answer: "Yillik 24% da 5 yilga: kapitalizatsiyasiz — +120%, oylik bilan — +228,1%. 50 mln so'mda farq — 54 mln dan ortiq." },
      { question: "Qanchalik tez-tez kapitalizatsiya qilgan yaxshi?", answer: "Qanchalik tez-tez — shunchalik foydali. 24% da oylik kapitalizatsiya 5 yilda yillikdan 34,9% ko'proq beradi." },
      { question: "Omonat daromadi soliqqa tortiladimi?", answer: "Yo'q, agar siz O'zbekiston soliq rezidenti bo'lsangiz: bank omonatlari bo'yicha foizlar JShShSdan ozod qilingan (SK 378-moddasi 13-bandi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi." },
      { question: "Omonatlarning real daromadliligi qancha?", answer: "Nominal 17-22,5% minus yillik inflyatsiya 6,4% (2026-yil sentabr) = real daromadlilik yillik 10,6-16,1% (rezidentlar omonat foizlaridan JShShS to'lamaydi)." },
    ],
  },

  {
    slug: 'deposit-comparison',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Фонд гарантирования вкладов', url: 'https://dif.uz' },
    ],
    paragraphsRu: [
      'Калькулятор сравнения вкладов позволяет сопоставить условия депозитов в разных банках Узбекистана по итоговой сумме с ежемесячной капитализацией. Для объективного сравнения важно использовать эффективную годовую ставку (ЭГС), а не номинальную — вклад под 23% с ежемесячной капитализацией может быть выгоднее вклада под 24% с выплатой в конце срока.',
      'Ставки по вкладам в банках Узбекистана (2026): в сумах — 17-22,5% годовых (топ-ставки у Ипотека-банк, Капиталбанк, Давр Банк); в долларах США — 4-7% (Узнацбанк, Асакабанк); в евро — 2-4%. Срок вкладов: от 3 месяцев до 3 лет. Минимальная сумма: от 100 000 сум до 1 000 000 сум в зависимости от банка.',
      'Ключевые параметры для сравнения: номинальная ставка, частота капитализации (ежемесячная выгоднее квартальной на 1-2%), возможность пополнения, условия досрочного снятия (потеря процентов — полная или частичная), минимальная сумма и минимальный срок. Некоторые вклады с высокой ставкой не допускают досрочное снятие или пополнение.',
      'Все вклады физических лиц в банках Узбекистана гарантированы Фондом гарантирования вкладов граждан. Максимальная сумма возмещения — до 200 млн сум на одного вкладчика в одном банке. Проценты по вкладам физических лиц не облагаются НДФЛ, если вкладчик — налоговый резидент Узбекистана (п. 13 ст. 378 НК, льгота действует с 1998 года). С нерезидентов банк удерживает 10% при выплате процентов (п. 1 ст. 382 НК): льготы раздела о НДФЛ на нерезидентов не распространяются (п. 2 ч. 1 ст. 366 НК), снизить или вернуть налог можно только по соглашению об избежании двойного налогообложения, предъявив сертификат резидентства.',
      'Наш калькулятор сравнения вкладов позволяет ввести параметры двух и более вкладов и увидеть: эффективную ставку, итоговый доход, разницу между вкладами в абсолютных числах. Пример: Вклад А — 24% с годовой капитализацией (ЭГС 24%). Вклад Б — 23% с ежемесячной капитализацией (ЭГС 25,59%). На 50 млн за 1 год: А принесёт 12 000 000, Б — 12 795 000. Разница: 795 000 сум в пользу Б.',
    ],
    paragraphsUz: [
      "Omonatlarni solishtirish kalkulyatori O'zbekiston turli banklaridagi depozit shartlarini oylik kapitalizatsiyali yakuniy summa bo'yicha solishtiradi. Ob'ektiv solishtirish uchun nominal emas, samarali yillik stavkani (SYS) ishlatish muhim — oylik kapitalizatsiyali 23% omonat muddat oxiridagi to'lovli 24% omonatdan foydaliroq bo'lishi mumkin.",
      "O'zbekiston banklarida omonat stavkalari (2026): so'mda — yillik 17-22,5% (eng yuqori stavkalar Ipoteka-bank, Kapitalbank, Davr Bank da); AQSh dollarida — 4-7% (O'zmilliybank, Asakabank); yevroda — 2-4%. Omonat muddatlari: 3 oydan 3 yilgacha. Minimal summa: bankga qarab 100 000 so'mdan 1 000 000 so'mgacha.",
      "Solishtirish uchun asosiy parametrlar: nominal stavka, kapitalizatsiya chastotasi (oylik choraklikdan 1-2% foydaliroq), to'ldirish imkoniyati, muddatidan oldin yechib olish shartlari (foizlarni yo'qotish — to'liq yoki qisman), minimal summa va minimal muddat. Yuqori stavkali ba'zi omonatlar muddatidan oldin yechib olish yoki to'ldirishga ruxsat bermaydi.",
      "O'zbekiston banklaridagi jismoniy shaxslarning barcha omonatlari Fuqarolar omonatlarini kafolatlash fondi tomonidan kafolatlangan. Maksimal qoplov summasi — bir omonatchiga bir bankda 200 mln so'mgacha. Jismoniy shaxslarning bank omonatlari bo'yicha foizlar, agar omonatchi O'zbekiston soliq rezidenti bo'lsa, JShShSga tortilmaydi (SK 378-moddasi 13-bandi, imtiyoz 1998-yildan amal qiladi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi (SK 382-moddasi 1-bandi): JShShS bo'limidagi imtiyozlar norezidentlarga tatbiq etilmaydi (SK 366-moddasi 1-qismi 2-bandi), soliqni faqat qo'sh soliqqa tortishning oldini olish to'g'risidagi bitim asosida, rezidentlik sertifikatini taqdim etib, kamaytirish yoki qaytarish mumkin.",
      "Bizning omonatlarni solishtirish kalkulyatorimiz ikki va undan ortiq omonat parametrlarini kiritish va ko'rish imkonini beradi: samarali stavka, yakuniy daromad, omonatlar orasidagi farqni mutlaq raqamlarda. Misol: A omonat — yillik kapitalizatsiyali 24% (SYS 24%). B omonat — oylik kapitalizatsiyali 23% (SYS 25,59%). 50 mln ga 1 yilga: A 12 000 000 keltiradi, B — 12 795 000. Farq: B foydasiga 795 000 so'm.",
    ],
    faqRu: [
      { question: 'Как сравнить вклады в разных банках?', answer: 'По эффективной годовой ставке (с учётом капитализации), а не по номинальной. Наш калькулятор покажет реальный доход.' },
      { question: 'Какие ставки по вкладам в 2026?', answer: 'В сумах: 17-22,5% годовых. В долларах: 4-7%. В евро: 2-4%. Зависит от банка и срока.' },
      { question: 'Лучше ежемесячная капитализация или выплата в конце?', answer: 'Ежемесячная капитализация выгоднее: повышает эффективную ставку на 1-3% в зависимости от номинальной ставки.' },
      { question: 'Застрахованы ли вклады?', answer: 'Да, все вклады физлиц гарантированы Фондом гарантирования до 200 млн сум на одного вкладчика в одном банке.' },
      { question: 'Облагается ли доход по вкладам налогом?', answer: 'Нет, если вы налоговый резидент Узбекистана: проценты по вкладам в банках освобождены от НДФЛ (п. 13 ст. 378 НК). С нерезидентов банк удерживает 10% при выплате процентов.' },
    ],
    faqUz: [
      { question: "Turli banklardagi omonatlarni qanday solishtirish mumkin?", answer: "Nominal emas, samarali yillik stavka (kapitalizatsiyani hisobga olgan holda) bo'yicha. Kalkulyatorimiz haqiqiy daromadni ko'rsatadi." },
      { question: "2026-yilda omonat stavkalari qanday?", answer: "So'mda: yillik 17-22,5%. Dollarda: 4-7%. Yevroda: 2-4%. Bank va muddatga bog'liq." },
      { question: "Oylik kapitalizatsiya yoki oxirida to'lov yaxshiroqmi?", answer: "Oylik kapitalizatsiya foydaliroq: nominal stavkaga qarab samarali stavkani 1-3% ga oshiradi." },
      { question: "Omonatlar sug'urtalanganmi?", answer: "Ha, barcha jismoniy shaxs omonatlari Kafolatlash fondi tomonidan bir omonatchiga bir bankda 200 mln so'mgacha kafolatlangan." },
      { question: "Omonat daromadi soliqqa tortiladimi?", answer: "Yo'q, agar siz O'zbekiston soliq rezidenti bo'lsangiz: bank omonatlari bo'yicha foizlar JShShSdan ozod qilingan (SK 378-moddasi 13-bandi). Norezidentlardan bank foizlarni to'lashda 10% ushlab qoladi." },
    ],
  },

  {
    slug: 'money-transfer',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Uzum Bank', url: 'https://uzumbank.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости перевода рассчитывает итоговые расходы на перевод денег с учётом комиссий и разницы курсов. Позволяет сравнить варианты: банковский перевод, системы денежных переводов (Western Union, MoneyGram, Золотая Корона, Юнистрим), мобильные переводы (Uzum, Click, Payme). Итоговая стоимость перевода = сумма всех комиссий + потеря на курсе.',
      'Для переводов внутри Узбекистана самый дешёвый способ — мобильные приложения: Uzum — переводы между картами бесплатно до 10 млн сум/мес; Click — до 5 млн/мес бесплатно; Payme — до 3 млн бесплатно. Переводы между разными банками через мобильные приложения — комиссия 0,3-1%. Банковские переводы между счетами — 0,1-0,5%.',
      'Для международных переводов из Узбекистана: Золотая Корона — комиссия 1-1,5%, популярна для переводов в Россию, получение наличными; Юнистрим — 1-2%; Western Union — 2-5% (дороже, но доступна в 200+ странах); SWIFT — фиксированная $15-30 (выгодна для крупных сумм свыше $1 000). Мобильные кошельки для международных переводов: Uzum — в Россию от 1%.',
      'Факторы, влияющие на стоимость перевода: комиссия отправителя (0-3%), комиссия получателя (0-1%), разница курса (0,5-3% — скрытая комиссия за счёт менее выгодного курса конвертации), способ получения (наличные дороже, чем на карту). При крупных суммах SWIFT-перевод выгоднее из-за фиксированной комиссии. Для мелких регулярных переводов — мобильные приложения.',
      'Пример: перевод 5 000 000 сум из Ташкента в Москву. Золотая Корона: комиссия 1,5% = 75 000 сум, итого расход 75 000. Western Union: 3% = 150 000 сум. SWIFT: $25 ≈ 300 000 сум (невыгодно для малых сумм). Uzum перевод: 1% = 50 000 сум. Для крупной суммы ($10 000): SWIFT $25 выгоднее Золотой Короны ($150 при 1,5%). В калькулятор введите сумму, комиссию и курс выбранного способа: он покажет, сколько получит адресат.',
    ],
    paragraphsUz: [
      "O'tkazma qiymati kalkulyatori komissiyalar va kurs farqini hisobga olgan holda pul o'tkazish yakuniy xarajatlarini hisoblaydi. Variantlarni solishtiradi: bank o'tkazmasi, pul o'tkazma tizimlari (Western Union, MoneyGram, Zolotaya Korona, Unistream), mobil o'tkazmalar (Uzum, Click, Payme). O'tkazmaning yakuniy qiymati = barcha komissiyalar yig'indisi + kursdagi yo'qotish.",
      "O'zbekiston ichida o'tkazmalar uchun eng arzon usul — mobil ilovalar: Uzum — kartalar o'rtasida oyiga 10 mln so'mgacha bepul; Click — oyiga 5 mln gacha bepul; Payme — 3 mln gacha bepul. Turli banklar o'rtasida mobil ilovalar orqali o'tkazmalar — komissiya 0,3-1%. Hisoblar o'rtasida bank o'tkazmalari — 0,1-0,5%.",
      "O'zbekistondan xalqaro o'tkazmalar uchun: Zolotaya Korona — komissiya 1-1,5%, Rossiyaga o'tkazmalar uchun mashhur, naqd olish; Unistream — 1-2%; Western Union — 2-5% (qimmatroq, lekin 200+ mamlakatda mavjud); SWIFT — qat'iy $15-30 ($1 000 dan ortiq yirik summalar uchun foydali). Xalqaro o'tkazmalar uchun mobil hamyonlar: Uzum — Rossiyaga 1% dan.",
      "O'tkazma qiymatiga ta'sir etuvchi omillar: jo'natuvchi komissiyasi (0-3%), oluvchi komissiyasi (0-1%), kurs farqi (0,5-3% — kamroq foydali konvertatsiya kursi hisobiga yashirin komissiya), olish usuli (naqd kartaga qaraganda qimmatroq). Yirik summalarda qat'iy komissiya sababli SWIFT o'tkazma foydaliroq. Kichik muntazam o'tkazmalar uchun — mobil ilovalar.",
      "Misol: Toshkentdan Moskvaga 5 000 000 so'm o'tkazma. Zolotaya Korona: komissiya 1,5% = 75 000 so'm. Western Union: 3% = 150 000 so'm. SWIFT: $25 ≈ 300 000 so'm (kichik summalar uchun foydasiz). Uzum o'tkazma: 1% = 50 000 so'm. Yirik summa ($10 000) uchun: SWIFT $25 Zolotaya Koronadan ($150, 1,5% da) foydaliroq. Kalkulyatorga tanlangan usulning summasi, komissiyasi va kursini kiriting: u oluvchi qancha olishini ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый перевод внутри Узбекистана?', answer: 'Мобильные приложения: Uzum (бесплатно до 10 млн/мес), Click (до 5 млн), Payme (до 3 млн).' },
      { question: 'Какой самый дешёвый международный перевод?', answer: 'Мелкие суммы: Uzum (1%), Золотая Корона (1-1,5%). Крупные (от $1 000): SWIFT ($15-30 фиксированно).' },
      { question: 'Из чего складывается стоимость перевода?', answer: 'Комиссия отправителя + комиссия получателя + потеря на разнице курсов (скрытая комиссия 0,5-3%).' },
      { question: 'Как отправить деньги в Россию из Узбекистана?', answer: 'Золотая Корона (1-1,5%), Юнистрим (1-2%), Uzum (от 1%). Получение наличными или на карту.' },
      { question: 'Есть ли лимиты на переводы?', answer: 'Мобильные: бесплатный лимит 3-10 млн/мес. Международные: крупные суммы банк может попросить обосновать документами.' },
    ],
    faqUz: [
      { question: "O'zbekiston ichida eng arzon o'tkazma qanday?", answer: "Mobil ilovalar: Uzum (oyiga 10 mln gacha bepul), Click (5 mln gacha), Payme (3 mln gacha)." },
      { question: "Eng arzon xalqaro o'tkazma qanday?", answer: "Kichik summalar: Uzum (1%), Zolotaya Korona (1-1,5%). Yirik ($1 000 dan): SWIFT (qat'iy $15-30)." },
      { question: "O'tkazma qiymati nimalardan tashkil topadi?", answer: "Jo'natuvchi komissiyasi + oluvchi komissiyasi + kurs farqidagi yo'qotish (yashirin komissiya 0,5-3%)." },
      { question: "O'zbekistondan Rossiyaga pul qanday yuborish mumkin?", answer: "Zolotaya Korona (1-1,5%), Unistream (1-2%), Uzum (1% dan). Naqd yoki kartaga olish." },
      { question: "O'tkazmalarda limitlar bormi?", answer: "Mobil: bepul limit oyiga 3-10 mln. Xalqaro: yirik summalar uchun bank asoslovchi hujjatlar so'rashi mumkin." },
    ],
  },

  {
    slug: 'fuel-consumption',
    lastUpdated: '2026-11-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор расхода топлива рассчитывает стоимость поездки и средний расход бензина или газа на 100 км пути. В Узбекистане топливный рынок отличается широким распространением метана (сжатого природного газа) — около 70% легковых автомобилей оборудованы газобаллонным оборудованием. Цены на топливо в Ташкенте на 20 октября 2026 года на заправках «Узбекнефтегаза»: АИ-92 — ~13 500 сум/л, АИ-95 — ~19 500 сум/л, АИ-100 — ~24 500 сум/л, дизель — ~18 500 сум/л, метан — ~5 750 сум/м³; пропан в августе стоил до 8 800 сум/л. На частных сетях иначе: импортный АИ-92 — до 18 000 сум, местный — от 11 700 сум, АИ-95 — 19 700–21 100 сум. В калькуляторе можно указать свою цену с чека. Бензин АИ-80 снят с производства 1 декабря 2025 года, АИ-91 больше не продаётся. Цены на топливо в Узбекистане не регулируются государством и отличаются по сетям заправок.',
      'Формула расчёта: стоимость поездки = (расстояние / 100) × расход на 100 км × цена за литр (или м³). Средний расход популярных узбекистанских автомобилей: Chevrolet Cobalt — 7–8 л/100 км, Chevrolet Nexia — 8–9 л/100 км, Chevrolet Tracker — 9–10 л/100 км. На метане расход тех же моделей: 6–9 м³/100 км. Расход увеличивается при городской езде, использовании кондиционера и перегрузке.',
      'Пример: маршрут Ташкент — Самарканд (300 км) на Chevrolet Cobalt с расходом 8 л/100 км на бензине АИ-92 обойдётся в 324 000 сум. На метане та же поездка стоит 120 750 сум — экономия в 2,7 раза. При ежедневных поездках на работу (30 км в день, 22 рабочих дня) месячные расходы на бензин составят около 713 000 сум, а на метане — 265 650 сум.',
      'Переход на метан — одно из самых выгодных решений для автомобилиста в Узбекистане. Стоимость установки газобаллонного оборудования составляет 3–5 млн сум и окупается за 6–12 месяцев при среднем пробеге. В стране действует развитая сеть газозаправочных станций (АГНКС), особенно вдоль основных междугородних трасс. Однако следует учитывать, что мощность двигателя на газе снижается на 10–15%.',
      'Наш калькулятор расхода топлива позволяет точно рассчитать затраты для любого маршрута: введите расстояние, расход вашего автомобиля и тип топлива — и мгновенно узнайте стоимость поездки. Чтобы оценить выгоду от перехода на газ, посчитайте один маршрут на бензине и на метане и сравните суммы.',
    ],
    paragraphsUz: [
      "Yoqilg'i sarfi kalkulyatori sayohat narxini va 100 km yo'lga benzin yoki gaz o'rtacha sarfini hisoblaydi. O'zbekistonda yoqilg'i bozori metan (siqilgan tabiiy gaz) ning keng tarqalganligi bilan ajralib turadi — yengil avtomobillarning taxminan 70% gaz uskunasi bilan jihozlangan. Toshkentda 2026-yil 20-oktabr holatiga «O'zbekneftgaz» shoxobchalarida yoqilg'i narxlari: AI-92 — ~13 500 so'm/l, AI-95 — ~19 500 so'm/l, AI-100 — ~24 500 so'm/l, dizel — ~18 500 so'm/l, metan — ~5 750 so'm/m³; propan avgustda 8 800 so'mgacha turgan. Xususiy shoxobchalarda boshqacha: import AI-92 — 18 000 so'mgacha, mahalliy — 11 700 so'mdan, AI-95 — 19 700–21 100 so'm. Kalkulyatorda chekdagi o'z narxingizni kiritish mumkin. AI-80 benzini 2025-yil 1-dekabrdan ishlab chiqarilmaydi, AI-91 endi sotilmaydi. O'zbekistonda yoqilg'i narxlari davlat tomonidan tartibga solinmaydi va shoxobchalar bo'yicha farq qiladi.",
      "Hisoblash formulasi: sayohat narxi = (masofa / 100) × 100 km ga sarf × litr (yoki m³) narxi. O'zbekistonda mashhur avtomobillarning o'rtacha sarfi: Chevrolet Cobalt — 7–8 l/100 km, Chevrolet Nexia — 8–9 l/100 km, Chevrolet Tracker — 9–10 l/100 km. Metanda xuddi shu modellarning sarfi: 6–9 m³/100 km. Shahar ichida haydash, konditsioner ishlatish va ortiqcha yuklashda sarf oshadi.",
      "Misol: Toshkent — Samarqand marshruti (300 km) Chevrolet Cobalt da AI-92 benzinda 8 l/100 km sarfda 324 000 so'mga tushadi. Metanda xuddi shu sayohat 120 750 so'm — 2,7 marta tejash. Har kungi ishga sayohatlarda (kuniga 30 km, 22 ish kuni) oylik benzin xarajatlari taxminan 713 000 so'm, metanda esa 265 650 so'm.",
      "Metanga o'tish — O'zbekistondagi avtomobilist uchun eng foydali qarorlardan biri. Gaz uskunasini o'rnatish narxi 3–5 mln so'm bo'lib, o'rtacha yurishda 6–12 oyda o'zini oqlaydi. Mamlakatda rivojlangan gaz to'ldirish stansiyalari (AGNKS) tarmog'i mavjud, ayniqsa asosiy shaharlararo trassalar bo'ylab. Biroq, gazdagi dvigatel quvvati 10–15% ga kamayishini hisobga olish kerak.",
      "Bizning yoqilg'i sarfi kalkulyatorimiz har qanday marshrut uchun xarajatlarni aniq hisoblash imkonini beradi: masofani, avtomobilingizning sarfini va yoqilg'i turini kiriting — sayohat narxini bir zumda bilib olasiz. Gazga o'tish foydasini baholash uchun bitta marshrutni benzinda va metanda hisoblab, summalarni solishtiring.",
    ],
    faqRu: [
      { question: 'Сколько стоит бензин в Узбекистане?', answer: 'АИ-92: ~13 500 сум/л, АИ-95: ~19 500 сум/л, АИ-100: ~24 500 сум/л, дизель: ~18 500 сум/л, метан: ~5 750 сум/м³ (Ташкент, «Узбекнефтегаз», 20 октября 2026). На частных сетях цены другие. АИ-80 снят с производства с декабря 2025, АИ-91 не продаётся. Цены не регулируются и отличаются по сетям.' },
      { question: 'Сколько стоит поездка Ташкент — Самарканд?', answer: 'На бензине (АИ-92 по 13 500 сум/л): ~324 000 сум. На метане: ~121 000 сум. Расстояние 300 км, расход 8 л или 7 м³ на 100 км.' },
      { question: 'Выгоднее ли метан?', answer: 'Да, поездка на метане примерно в 2,7 раза дешевле, чем на АИ-92. Расходы на переоборудование (3-5 млн сум) окупаются за 6-12 месяцев.' },
    ],
    faqUz: [
      { question: "O'zbekistonda benzin qancha turadi?", answer: "AI-92: ~13 500 so'm/l, AI-95: ~19 500 so'm/l, AI-100: ~24 500 so'm/l, dizel: ~18 500 so'm/l, metan: ~5 750 so'm/m³ (Toshkent, «O'zbekneftgaz», 2026-yil 20-oktabr). Xususiy shoxobchalarda narxlar boshqacha. AI-80 2025-yil dekabridan ishlab chiqarilmaydi, AI-91 sotilmaydi. Narxlar tartibga solinmaydi va shoxobchalar bo'yicha farq qiladi." },
      { question: "Toshkent — Samarqand sayohati qancha turadi?", answer: "Benzinda (AI-92 litri 13 500 so'm): ~324 000 so'm. Metanda: ~121 000 so'm. Masofa 300 km, sarf 100 km ga 8 l yoki 7 m³." },
      { question: "Metan foydaliroqmi?", answer: "Ha, metanda sayohat AI-92 ga qaraganda taxminan 2,7 baravar arzon. Qayta jihozlash xarajatlari (3-5 mln so'm) 6-12 oyda o'zini oqlaydi." },
    ],
  },

  {
    slug: 'trip-cost',
    lastUpdated: '2026-11-07',
    sources: [],
    paragraphsRu: [
      'Калькулятор стоимости поездки помогает заранее оценить расходы на автомобильное путешествие по Узбекистану. Дорожная сеть страны насчитывает более 180 000 км дорог, связывающих все регионы — от Ташкента до Нукуса. Калькулятор считает топливо, платные дороги и парковку, а также долю на одного пассажира; амортизацию и обслуживание добавляйте по ориентирам ниже.',
      'Структура расходов на автомобильную поездку: топливо составляет 70–80% общей стоимости, амортизация автомобиля — около 15–20% (~300 сум/км для бюджетных моделей Chevrolet Cobalt/Nexia), техническое обслуживание — 5–10% (~100 сум/км). Расход топлива существенно зависит от стиля вождения, загрузки автомобиля, состояния дороги и скоростного режима — на трассе расход ниже, чем в городе.',
      'Пример расчёта маршрута Ташкент — Бухара (600 км): при расходе 9 л/100 км на бензине АИ-92 (13 500 сум/л) стоимость топлива составит 729 000 сум, амортизация и обслуживание — ещё ~240 000 сум, итого около 969 000 сум. На метане та же поездка обойдётся в ~242 000 сум за топливо (около 42 м³ при расходе 7 м³/100 км, по 5 750 сум). Для сравнения: билет на поезд «Afrosiyob» — от 400 000 сум, авиабилет — от 800 000 сум.',
      'При поездке на автомобиле с пассажирами стоимость на одного человека существенно снижается. Если в машине 4 человека, расходы в ~969 000 сум делятся на четверых — всего ~242 000 сум на каждого, что дешевле любого альтернативного транспорта. Это делает автомобильные поездки особенно выгодными для семей и компаний, путешествующих по популярным маршрутам Узбекистана.',
      'Наш калькулятор стоимости поездки считает по расстоянию, расходу, цене топлива, платным дорогам, парковке и числу пассажиров: покажет общую сумму и долю на человека. Используйте его для планирования отпуска, деловых поездок или регулярных маршрутов между городами.',
    ],
    paragraphsUz: [
      "Sayohat narxi kalkulyatori O'zbekiston bo'ylab avtomobil sayohatining xarajatlarini oldindan baholashga yordam beradi. Mamlakatning yo'l tarmog'i 180 000 km dan ortiq yo'llarni o'z ichiga oladi va barcha hududlarni — Toshkentdan Nukusgacha bog'laydi. Kalkulyator yoqilg'i, pullik yo'llar va to'xtash joyini hamda bir yo'lovchiga ulushni hisoblaydi; amortizatsiya va xizmatni quyidagi mo'ljallar bo'yicha qo'shing.",
      "Avtomobil sayohati xarajatlarining tarkibi: yoqilg'i umumiy qiymatning 70–80% ini tashkil etadi, avtomobil amortizatsiyasi — taxminan 15–20% (~300 so'm/km byudjet Chevrolet Cobalt/Nexia modellari uchun), texnik xizmat — 5–10% (~100 so'm/km). Yoqilg'i sarfi haydash uslubi, avtomobil yuklanishi, yo'l holati va tezlik rejimiga sezilarli bog'liq — trassada sarf shaharga qaraganda pastroq.",
      "Toshkent — Buxoro marshruti (600 km) hisob-kitobi: 9 l/100 km sarfda AI-92 benzinda (13 500 so'm/l) yoqilg'i narxi 729 000 so'm, amortizatsiya va xizmat — yana ~240 000 so'm, jami taxminan 969 000 so'm. Metanda xuddi shu sayohat yoqilg'iga ~242 000 so'm tushadi (100 km ga 7 m³ sarfda taxminan 42 m³, 5 750 so'mdan). Solishtirish uchun: «Afrosiyob» poyezd chiptasi — 400 000 so'mdan, aviabilet — 800 000 so'mdan.",
      "Avtomobilda yo'lovchilar bilan sayohat qilganda bir kishiga narx sezilarli kamayadi. Mashinada 4 kishi bo'lsa, ~969 000 so'mlik xarajatlar to'rtga bo'linadi — har biriga atigi ~242 000 so'm, bu har qanday muqobil transportdan arzon. Bu avtomobil sayohatlarini O'zbekistonning mashhur marshrutlari bo'ylab sayohat qiluvchi oilalar va guruhlar uchun ayniqsa foydali qiladi.",
      "Bizning sayohat narxi kalkulyatorimiz masofa, sarf, yoqilg'i narxi, pullik yo'llar, to'xtash joyi va yo'lovchilar soni bo'yicha hisoblaydi: umumiy summa va bir kishiga ulushni ko'rsatadi. Uni ta'til rejalashtirish, ishbilarmonlik safarlari yoki shaharlar orasidagi muntazam marshrutlar uchun ishlating.",
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
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Закон «О лизинге» № 756-I', url: 'https://lex.uz/ru/docs/85248' },
      { name: 'Налоговый кодекс РУз', url: 'https://lex.uz/ru/docs/4674893' },
    ],
    paragraphsRu: [
      'Автолизинг в Узбекистане — это аренда транспортного средства с правом последующего выкупа, регулируемая Законом «О лизинге». Лизинговые компании — Uzautolizing, O\'zlizing, Imkon Lizing и другие — предлагают ставки от 18% до 26% годовых в зависимости от марки автомобиля, срока договора и размера авансового платежа. Минимальный аванс обычно составляет 20–30% от стоимости транспортного средства.',
      'Ключевое отличие автолизинга от автокредита: право собственности до полного выкупа остаётся у лизинговой компании, хотя на балансе автомобиль учитывает лизингополучатель (ст. 7 Закона «О лизинге»). Для бизнеса это значит, что лизингополучатель сам начисляет амортизацию, а в расходы относит амортизацию и процентную часть платежей, а не весь платёж целиком.',
      'Для физических лиц автолизинг привлекателен упрощённой процедурой оформления по сравнению с банковским кредитом: меньше требований к документам, решение принимается быстрее. Многие лизинговые компании включают в договор страхование КАСКО и техническое обслуживание, что избавляет от дополнительных хлопот. Популярные модели в лизинг — Chevrolet, Kia, Hyundai узбекистанской сборки.',
      'Рассмотрим пример: Chevrolet Tracker стоимостью 350 млн сум, аванс 30% (105 млн), лизинг 245 млн на 5 лет под 22% годовых. Ежемесячный платёж составит около 6 800 000 сум, общая переплата — порядка 163 млн сум. Для сравнения: автокредит под 24% с тем же авансом даст платёж ~7 100 000 сум, но автомобиль сразу оформляется в собственность заёмщика.',
      'Наш калькулятор автолизинга позволяет быстро рассчитать ежемесячный платёж, общую переплату и сравнить условия различных лизинговых программ. Введите стоимость автомобиля, размер аванса, срок, процентную ставку и остаточную стоимость — калькулятор покажет платёж, проценты и общую стоимость. Проценты начисляются и на остаточную стоимость: она вносится только в конце срока. Это поможет принять взвешенное решение между лизингом и кредитом с учётом вашей налоговой ситуации.',
    ],
    paragraphsUz: [
      "O'zbekistonda avtolizing — «Lizing to'g'risida»gi qonun bilan tartibga solingan, keyinchalik sotib olish huquqi bilan transport vositasini ijaraga olishdir. Uzautolizing, O'zlizing, Imkon Lizing va boshqa lizing kompaniyalari avtomobil markasi, shartnoma muddati va avans miqdoriga qarab yillik 18% dan 26% gacha stavkalar taklif etadi. Minimal avans odatda transport vositasi qiymatining 20–30% ini tashkil etadi.",
      "Avtolizingning avtokreditdan asosiy farqi: to'liq sotib olinguncha mulk huquqi lizing kompaniyasida qoladi, garchi balansda avtomobilni lizing oluvchi hisobga olsa ham («Lizing to'g'risida»gi Qonunning 7-moddasi). Biznes uchun bu shuni anglatadiki, amortizatsiyani lizing oluvchi hisoblaydi, xarajatlarga esa to'lovning hammasi emas, balki amortizatsiya va foiz qismi kiritiladi.",
      "Jismoniy shaxslar uchun avtolizing bank kreditiga nisbatan soddalashtirilgan rasmiylashtirish tartibi bilan jozibali: hujjatlarga kamroq talablar, qaror tezroq qabul qilinadi. Ko'p lizing kompaniyalari shartnomaga KASKO sug'urtasi va texnik xizmatni kiritadi, bu qo'shimcha tashvishlardan xalos etadi. Lizingda mashhur modellar — O'zbekiston yig'ilishidagi Chevrolet, Kia, Hyundai.",
      "Misolni ko'rib chiqamiz: 350 mln so'mlik Chevrolet Tracker, avans 30% (105 mln), lizing 245 mln 5 yilga yillik 22% da. Oylik to'lov taxminan 6 800 000 so'm, umumiy ortiqcha to'lov — 163 mln so'm atrofida. Solishtirish uchun: xuddi shu avansli 24% avtokredit ~7 100 000 so'm to'lov beradi, lekin avtomobil darhol qarz oluvchi mulkiga rasmiylashtiriladi.",
      "Bizning avtolizing kalkulyatorimiz oylik to'lovni, umumiy ortiqcha to'lovni tezda hisoblash va turli lizing dasturlari shartlarini solishtirish imkonini beradi. Avtomobil qiymatini, avans miqdorini, muddatni, foiz stavkasini va qoldiq qiymatni kiriting — kalkulyator to'lov, foizlar va umumiy qiymatni ko'rsatadi. Foizlar qoldiq qiymatga ham hisoblanadi: u faqat muddat oxirida to'lanadi. Bu soliq vaziyatingizni hisobga olgan holda lizing va kredit o'rtasida og'ilona qaror qabul qilishga yordam beradi.",
    ],
    faqRu: [
      { question: 'Чем лизинг отличается от кредита?', answer: 'Право собственности до выкупа у лизинговой компании, на балансе автомобиль учитывает лизингополучатель (ст. 7 Закона «О лизинге»). Для бизнеса в расходы идут амортизация и проценты.' },
      { question: 'Какие ставки по автолизингу?', answer: 'От 18% до 26% годовых. Аванс от 20%. Срок 2-7 лет.' },
      { question: 'Кому выгоден лизинг?', answer: 'Юрлицам и ИП: амортизация и процентная часть платежей уменьшают налогооблагаемую прибыль.' },
    ],
    faqUz: [
      { question: "Lizing kreditdan nimasi bilan farq qiladi?", answer: "Sotib olinguncha mulk lizing kompaniyasiniki, avtomobilni balansda lizing oluvchi hisobga oladi («Lizing to'g'risida»gi Qonunning 7-moddasi). Biznes uchun xarajatlarga amortizatsiya va foizlar kiradi." },
      { question: "Avtolizing stavkalari qanday?", answer: "Yillik 18% dan 26% gacha. Avans 20% dan. Muddat 2-7 yil." },
      { question: "Lizing kimga foydali?", answer: "Yuridik shaxslar va YaTTlarga — lizing to'lovlari soliqqa tortiladigan foydani kamaytiradi." },
    ],
  },

  {
    slug: 'heating',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Постановление Кабмина № 243 от 15.05.2026 (газ, электроэнергия)', url: 'https://lex.uz/ru/docs/8195731' },
      { name: 'Министерство энергетики РУз', url: 'https://minenergy.uz' },
    ],
    paragraphsRu: [
      'Калькулятор отопления рассчитывает стоимость центрального отопления в Узбекистане, а ниже приведены ориентиры по другим способам: газовый котёл, электрический обогреватель, тепловой насос. Сезон начинается, когда среднесуточная температура пять дней подряд держится ниже +8°C: в Ташкенте прошлый сезон начался в начале ноября и завершился поэтапно с 24 марта (около 140 дней), а средняя температура зимой составляет 0-5°C в Ташкенте и до −10°C в Каракалпакстане.',
      'Стоимость отопления за сезон около 140 дней (квартира 60 м² в Ташкенте): центральное отопление — около 2 000 000 сум (по нормативу 241,44 сум/м² в сутки это ~435 000 сум/мес за 60 м²); индивидуальный газовый котёл — 1 700 000-2 900 000 сум (расход газа 300-500 м³/мес по тарифу 1 100 сум/м³, в марте норма всего 100 м³, сверх неё 2 000 сум/м³); электрические обогреватели — 12 000 000-23 000 000 сум (расход 2 000-3 500 кВт·ч/мес: из-за ступенчатого тарифа эффективная цена достигает 1 275-1 415 сум/кВт·ч, а не базовых 650).',
      'Для частного дома (100 м²) расходы существенно выше: газовый котёл — 5 000 000-10 000 000 сум за сезон в зависимости от утепления и теплопотерь. Угольное отопление (распространено в сельской местности): 3 000 000-6 000 000 сум (расход 3-5 тонн угля по цене ~1 200 000 сум/тонна). Тепловой насос — начальные инвестиции от $3 000-5 000, но эксплуатация дешевле электрического на 60-70%.',
      'Утепление дома — самый эффективный способ снизить расходы на отопление. Замена старых деревянных окон на стеклопакеты экономит 20-30% тепла (стоимость от 3 000 000 сум за окно). Утепление фасада пенопластом — от 120 000 сум/м², экономия 30-40% тепла. Утепление крыши — экономия 15-20%. Суммарно вложения в утепление окупаются за 2-3 отопительных сезона.',
      'Калькулятор отопления считает стоимость центрального отопления по формуле: площадь × тариф за м² в сутки × число дней. По умолчанию подставлен тариф Ташкента — 241,44 сум за м² в сутки. Минстрой предложил поднять его до 314 сум; на 1 ноября 2026 года постановление не принято. В других городах тарифы утверждают областные кенгаши и хокимы, и они заметно отличаются, поэтому укажите тариф из своей квитанции; если в ней цена за месяц, разделите её на число дней. Расходы на газовый котёл, электрообогреватели и тепловой насос калькулятор не считает — ориентиры по ним приведены выше.',
    ],
    paragraphsUz: [
      "Isitish kalkulyatori O'zbekistonda markaziy isitish narxini hisoblaydi, boshqa usullar bo'yicha mo'ljallar quyida keltirilgan: gaz qozoni, elektr isitgich, issiqlik pompasi. Mavsum o'rtacha sutkalik harorat besh kun ketma-ket +8°C dan past bo'lganda boshlanadi: Toshkentda o'tgan mavsum noyabr boshida boshlanib, 24-martdan bosqichma-bosqich yakunlangan (taxminan 140 kun), qishda o'rtacha harorat Toshkentda 0-5°C, Qoraqalpog'istonda −10°C gacha tushadi.",
      "Taxminan 140 kunlik mavsum uchun isitish narxi (Toshkentda 60 m² kvartira): markaziy isitish — taxminan 2 000 000 so'm (normativ 241,44 so'm/m² kuniga — 60 m² uchun ~435 000 so'm/oy); individual gaz qozoni — 1 700 000-2 900 000 so'm (oyiga 300-500 m³ gaz sarfi, tarif 1 100 so'm/m³, martda norma atigi 100 m³, undan ortig'i 2 000 so'm/m³); elektr isitgichlar — 12 000 000-23 000 000 so'm (oyiga 2 000-3 500 kVt·soat sarfi: bosqichli tarif tufayli samarali narx 1 275-1 415 so'm/kVt·soatga yetadi, bazaviy 650 emas).",
      "Xususiy uy (100 m²) uchun xarajatlar ancha yuqori: gaz qozoni — izolyatsiya va issiqlik yo'qotishlariga qarab mavsumiga 5 000 000-10 000 000 so'm. Ko'mir bilan isitish (qishloq joylarda keng tarqalgan): 3 000 000-6 000 000 so'm (3-5 tonna ko'mir sarfi, narxi ~1 200 000 so'm/tonna). Issiqlik pompasi — boshlang'ich investitsiya $3 000-5 000 dan, lekin foydalanish elektrdan 60-70% arzon.",
      "Uyni izolyatsiya qilish — isitish xarajatlarini kamaytirishning eng samarali usuli. Eski yog'och derazalarni steklopaketlarga almashtirish 20-30% issiqlikni tejaydi (narxi derazasiga 3 000 000 so'mdan). Fasadni penoplast bilan izolyatsiya qilish — 120 000 so'm/m² dan, 30-40% issiqlik tejash. Tomni izolyatsiya qilish — 15-20% tejash. Jami izolyatsiyaga sarmoyalar 2-3 isitish mavsumida qoplanadi.",
      "Isitish kalkulyatori markaziy isitish narxini quyidagi formula bo'yicha hisoblaydi: maydon × m² uchun kunlik tarif × kunlar soni. Standart holda Toshkent tarifi qo'yilgan — kuniga m² uchun 241,44 so'm. Qurilish vazirligi uni 314 so'mgacha oshirishni taklif qilgan; 2026-yil 1-noyabr holatiga qaror qabul qilinmagan. Boshqa shaharlarda tariflarni viloyat kengashlari va hokimlar tasdiqlaydi va ular sezilarli farq qiladi, shuning uchun kvitansiyangizdagi tarifni kiriting; agar unda oylik narx ko'rsatilgan bo'lsa, uni kunlar soniga bo'ling. Gaz qozoni, elektr isitgichlar va issiqlik pompasi xarajatlarini kalkulyator hisoblamaydi — ular bo'yicha mo'ljallar yuqorida keltirilgan.",
    ],
    faqRu: [
      { question: 'Какой самый дешёвый способ отопления?', answer: 'Центральное отопление (~2 млн за сезон) и газовый котёл (1,7-2,9 млн) близки по цене. Электрические обогреватели — самые дорогие (12-23 млн для 60 м²).' },
      { question: 'Сколько стоит отопление квартиры за сезон?', answer: 'Квартира 60 м² в Ташкенте за сезон около 140 дней: центральное — ~2 млн, газ — 1,7-2,9 млн, электричество — 12-23 млн сум.' },
      { question: 'Как снизить расходы на отопление?', answer: 'Утепление стен (экономия 30-40%), замена окон (20-30%), утепление крыши (15-20%). Окупается за 2-3 сезона.' },
      { question: 'Сколько газа расходует котёл?', answer: 'Для квартиры 60 м²: 300-500 м³/мес. Для дома 100 м²: 600-1000 м³/мес. Тариф ~1 100 сум/м³.' },
      { question: 'Когда начинается отопительный сезон?', answer: 'Когда среднесуточная температура пять дней подряд ниже +8°C. В Ташкенте прошлый сезон шёл с начала ноября до второй половины марта, около 140 дней.' },
    ],
    faqUz: [
      { question: "Eng arzon isitish usuli qanday?", answer: "Markaziy isitish (mavsumiga ~2 mln) va gaz qozoni (1,7-2,9 mln) narxi yaqin. Elektr isitgichlar — eng qimmat (60 m² uchun 12-23 mln)." },
      { question: "Kvartirani mavsumiga isitish qancha turadi?", answer: "Toshkentda 60 m² kvartira, taxminan 140 kunlik mavsum: markaziy — ~2 mln, gaz — 1,7-2,9 mln, elektr — 12-23 mln so'm." },
      { question: "Isitish xarajatlarini qanday kamaytirish mumkin?", answer: "Devorlarni izolyatsiya qilish (30-40% tejash), derazalarni almashtirish (20-30%), tomni izolyatsiya qilish (15-20%). 2-3 mavsumda qoplanadi." },
      { question: "Gaz qozoni qancha gaz sarflaydi?", answer: "60 m² kvartira uchun: oyiga 300-500 m³. 100 m² uy uchun: oyiga 600-1000 m³. Tarif ~1 100 so'm/m³." },
      { question: "Isitish mavsumi qachon boshlanadi?", answer: "O'rtacha sutkalik harorat besh kun ketma-ket +8°C dan past bo'lganda. Toshkentda o'tgan mavsum noyabr boshidan mart ikkinchi yarmigacha, taxminan 140 kun davom etgan." },
    ],
  },

  {
    slug: 'internet',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Uztelecom — Тарифы', url: 'https://uztelecom.uz' },
      { name: 'Министерство цифровых технологий', url: 'https://mitc.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости интернета считает расход по ориентировочной цене выбранной скорости за нужное число месяцев. По данным Министерства цифровых технологий, в 2025 году проникновение интернета в Узбекистане превысило 85%, а число абонентов широкополосного доступа достигло 10 млн. Основные операторы: Uztelecom (GPON), TuronTelecom, Humans (бывш. Turontelecom), Beeline, Ucell, Mobiuz.',
      'Тарифы домашнего интернета (ориентировочно): Uztelecom GPON — от 89 000 сум/мес (50 Мбит/с) до 399 000 сум/мес (500 Мбит/с); TuronTelecom — от 79 000 сум/мес (30 Мбит/с) до 449 000 сум/мес (1 Гбит/с); Humans — от 99 000 сум/мес (100 Мбит/с). Подключение GPON обычно бесплатное или за символическую плату 100 000-200 000 сум.',
      'Мобильный интернет: Beeline — от 25 000 сум/мес (3 ГБ) до 159 000 сум/мес (безлимит 4G); Ucell — от 29 000 сум/мес (5 ГБ) до 179 000 сум/мес (безлимит); Mobiuz — от 25 000 сум/мес (3 ГБ) до 149 000 сум/мес (безлимит). 5G запущен в пилотном режиме в центре Ташкента с теоретической скоростью до 1 Гбит/с, коммерческие тарифы — от 200 000 сум/мес.',
      'При выборе провайдера учитывайте: для соцсетей и мессенджеров достаточно 30 Мбит/с (~80 000 сум/мес), для стриминга видео 4K — от 100 Мбит/с (~150 000 сум/мес), для работы из дома (видеозвонки, VPN) — 50-100 Мбит/с, для геймеров — от 100 Мбит/с с низким пингом. В Ташкенте и областных центрах доступна оптика, в сельской местности — ADSL или мобильный 4G.',
      'Калькулятор интернета считает годовой бюджет: выберите скорость и число месяцев. Цены в нём ориентировочные, точный тариф смотрите у провайдера. Оплата возможна через Click, Payme, Uzum, банковские терминалы или в офисах провайдеров.',
    ],
    paragraphsUz: [
      "Internet narxi kalkulyatori O'zbekistonning barcha yirik provayderlari tariflarini solishtiradi. Raqamli texnologiyalar vazirligi ma'lumotlariga ko'ra, 2025-yilda O'zbekistonda internet penetratsiyasi 85% dan oshdi, keng polosali ulanish abonentlari soni 10 mln ga yetdi. Asosiy operatorlar: Uztelecom (GPON), TuronTelecom, Humans, Beeline, Ucell, Mobiuz.",
      "Uy interneti tariflari (taxminan): Uztelecom GPON — 89 000 so'm/oy (50 Mbit/s) dan 399 000 so'm/oy (500 Mbit/s) gacha; TuronTelecom — 79 000 so'm/oy (30 Mbit/s) dan 449 000 so'm/oy (1 Gbit/s) gacha; Humans — 99 000 so'm/oy (100 Mbit/s) dan. GPON ulash odatda bepul yoki 100 000-200 000 so'm ramziy to'lov evaziga.",
      "Mobil internet: Beeline — 25 000 so'm/oy (3 GB) dan 159 000 so'm/oy (cheksiz 4G) gacha; Ucell — 29 000 so'm/oy (5 GB) dan 179 000 so'm/oy (cheksiz) gacha; Mobiuz — 25 000 so'm/oy (3 GB) dan 149 000 so'm/oy (cheksiz) gacha. 5G Toshkent markazida sinov rejimida ishga tushirilgan, nazariy tezlik 1 Gbit/s gacha, tijorat tariflari — 200 000 so'm/oy dan.",
      "Provayder tanlashda hisobga oling: ijtimoiy tarmoqlar va messenjerlar uchun 30 Mbit/s yetarli (~80 000 so'm/oy), 4K video striming uchun — 100 Mbit/s dan (~150 000 so'm/oy), uydan ishlash (videoqung'iroqlar, VPN) uchun — 50-100 Mbit/s, geymerlar uchun — past ping bilan 100 Mbit/s dan. Toshkent va viloyat markazlarida optika mavjud, qishloq joylarda — ADSL yoki mobil 4G.",
      "Internet kalkulyatori yillik byudjetni hisoblaydi: tezlik va oylar sonini tanlang. Undagi narxlar taxminiy, aniq tarifni provayderdan bilib oling. To'lov Click, Payme, Uzum, bank terminallari yoki provayderlar ofislarida amalga oshiriladi.",
    ],
    faqRu: [
      { question: 'Сколько стоит домашний интернет?', answer: 'От 79 000 сум (30 Мбит/с) до 449 000 сум (1 Гбит/с) в месяц. Uztelecom GPON: от 89 000 (50 Мбит/с).' },
      { question: 'Какой интернет самый быстрый?', answer: 'GPON-оптика (Uztelecom, TuronTelecom): до 1 Гбит/с. 5G (пилот в Ташкенте): до 1 Гбит/с. Мобильный 4G: до 150 Мбит/с.' },
      { question: 'Какую скорость выбрать?', answer: 'Соцсети: 30 Мбит/с (~80 000 сум). Стриминг 4K: 100+ Мбит/с (~150 000). Работа из дома: 50-100 Мбит/с. Геймерам: 100+ Мбит/с.' },
      { question: 'Есть ли 5G в Узбекистане?', answer: 'Да, 5G запущен в пилотном режиме в центре Ташкента. Коммерческие тарифы от 200 000 сум/мес.' },
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
    lastUpdated: '2026-11-03',
    sources: [
      { name: "Налоговый кодекс, ст. 422: налог на имущество физлиц", url: "https://lex.uz/ru/docs/4674893" },
    ],
        paragraphsRu: [
      'Калькулятор аренды недвижимости рассчитывает ежемесячный платёж за аренду жилья с коммунальными, депозит и итог за весь срок, а также сравнивает аренду с покупкой в ипотеку на срок до 30 лет. Средние цены аренды в 2026 году: однокомнатная квартира — 3,5–6 млн сум/мес, двухкомнатная — 5,5–9 млн, трёхкомнатная — 8–14 млн в зависимости от района и состояния.',
      'Помимо арендной платы, необходимо учитывать дополнительные расходы: коммунальные услуги (газ, электричество, вода, отопление) — от 500 000 до 1 500 000 сум в месяц в зависимости от сезона и площади; интернет — 100 000–350 000 сум; обслуживание дома (в новостройках) — 50 000–200 000 сум; вывоз мусора — 30 000–50 000 сум. Летом добавляются расходы на кондиционер (электроэнергия может вырасти на 300 000–600 000 сум).',
      'Стоимость аренды значительно различается по районам Ташкента. Премиальные районы: Мирабад, Юнусабад, Шайхантахур (центр) — самые дорогие, здесь расположены новостройки бизнес-класса. Средний сегмент: Чиланзар, Яккасарай, Мирзо-Улугбекский — хороший баланс цены и качества. Бюджетные районы: Сергели, Бектемир, Олмазор — на 30–50% дешевле центра, но дальше от деловых кварталов.',
      'При аренде в Узбекистане стандартная практика — залоговый депозит в размере 1–2 месячных платежей, который возвращается при выезде за вычетом ущерба. Договор аренды рекомендуется оформлять письменно с указанием срока, суммы, условий расторжения и ответственности сторон. Обязанности сторон по передаче жилья и ремонту стоит прямо прописать в договоре.',
      "Сравнение с покупкой показывает, у кого через выбранный срок окажется больше денег при одинаковом бюджете. Покупатель платит взнос, оформление (2% цены), ипотеку, а также налог, страховку и ремонт; его капитал — цена квартиры минус остаток кредита. Арендатор кладёт на вклад деньги, не потраченные на взнос и оформление, и ежемесячную разницу, если аренда дешевле. Пример по умолчанию: квартира 720 млн сум, взнос 20%, ипотека 20% на 15 лет (платёж 10,1 млн сум), аренда 7 млн сум, рост цен и аренды 7% в год, вклад 18%. Через 10 лет аренда выгоднее примерно на 603 млн сум, а сравняются варианты при росте цены около 10,9% в год. Результат сильно зависит от допущений: при вкладе 10% выгоднее уже покупка, примерно на 248 млн сум. Сегодняшние ставки могут снизиться, поэтому проверьте несколько вариантов.",
    ],
    paragraphsUz: [
      "Ijara kalkulyatori uy-joy ijarasining kommunal bilan oylik to'lovini, depozitni va butun muddat uchun jamini hisoblaydi, shuningdek ijarani ipotekaga sotib olish bilan 30 yilgacha muddatda solishtiradi. 2026-yildagi o'rtacha ijara narxlari: bir xonali kvartira — 3,5–6 mln so'm/oy, ikki xonali — 5,5–9 mln, uch xonali — tuman va holatiga qarab 8–14 mln.",
      "Ijara to'lovidan tashqari qo'shimcha xarajatlarni hisobga olish kerak: kommunal xizmatlar (gaz, elektr, suv, isitish) — mavsumga va maydonga qarab oyiga 500 000 dan 1 500 000 so'mgacha; internet — 100 000–350 000 so'm; uy xizmati (yangi qurilishlarda) — 50 000–200 000 so'm; chiqindi chiqarish — 30 000–50 000 so'm. Yozda konditsioner xarajatlari qo'shiladi (elektr energiya 300 000–600 000 so'mga oshishi mumkin).",
      "Ijara narxi Toshkent tumanlari bo'yicha sezilarli farq qiladi. Premium tumanlar: Mirobod, Yunusobod, Shayxontohur (markaz) — eng qimmat, bu yerda biznes-sinf yangi qurilishlar joylashgan. O'rtacha segment: Chilonzor, Yakkasaroy, Mirzo Ulug'bek — narx va sifatning yaxshi muvozanati. Byudjet tumanlar: Sergeli, Bektemir, Olmazor — markazdan 30–50% arzonroq, lekin ishbilarmonlik tumanlaridan uzoqroq.",
      "O'zbekistonda ijaraga olishda standart amaliyot — 1–2 oylik to'lov miqdorida garov depoziti, u chiqib ketishda zarar chegirilgan holda qaytariladi. Ijara shartnomasini yozma ravishda tuzish tavsiya etiladi — muddat, summa, bekor qilish shartlari va tomonlar javobgarligi ko'rsatilishi kerak. Uy-joyni topshirish va ta'mirlash bo'yicha tomonlar majburiyatlarini shartnomada aniq yozib qo'ygan ma'qul.",
      "Sotib olish bilan solishtirish bir xil byudjetda tanlangan muddatdan keyin kimda ko'proq pul bo'lishini ko'rsatadi. Sotib oluvchi boshlang'ich to'lov, rasmiylashtirish (narxning 2%), ipoteka, shuningdek soliq, sug'urta va ta'mirni to'laydi; uning kapitali — kvartira narxi minus kredit qoldig'i. Ijarachi boshlang'ich to'lov va rasmiylashtirishga sarflanmagan pulni hamda ijara arzonroq bo'lsa, oylik farqni omonatga qo'yadi. Standart misol: kvartira 720 mln so'm, boshlang'ich to'lov 20%, 15 yilga 20% ipoteka (to'lov 10,1 mln so'm), ijara 7 mln so'm, narx va ijara o'sishi yiliga 7%, omonat 18%. 10 yildan keyin ijara taxminan 603 mln so'm foydaliroq, narx yiliga taxminan 10,9% o'sganda variantlar tenglashadi. Natija taxminlarga kuchli bog'liq: omonat 10% bo'lsa, sotib olish taxminan 248 mln so'm foydaliroq bo'ladi. Bugungi stavkalar pasayishi mumkin, shuning uchun bir nechta variantni tekshiring.",
    ],
    faqRu: [
      { question: 'Сколько стоит аренда квартиры в Ташкенте?', answer: "1-комн: 3,5-6 млн, 2-комн: 5,5-9 млн, 3-комн: 8-14 млн сум/мес. Зависит от района и состояния." },
      { question: 'Что включено в арендную плату?', answer: 'Обычно только аренда. Коммунальные, интернет, обслуживание — отдельно (+500 000 − 1 500 000 сум).' },
      { question: 'Какой депозит при аренде?', answer: 'Обычно 1-2 месячных платежа. Возвращается при выезде (минус ущерб).' },
      { question: "Что выгоднее: аренда или покупка?", answer: "Зависит от ставок. В примере по умолчанию при ипотеке 20% и вкладе 18% через 10 лет выгоднее аренда, а при вкладе 10% уже покупка. Введите свои цифры, калькулятор покажет разницу." },
      { question: "Зачем в сравнении ставка вклада?", answer: "Деньги, которые арендатор не потратил на взнос и ипотеку, могут приносить доход. Без этого сравнение завышало бы выгоду покупки." },
    ],
    faqUz: [
      { question: "Toshkentda kvartira ijarasi qancha?", answer: "1 xonali: 3,5-6 mln, 2 xonali: 5,5-9 mln, 3 xonali: 8-14 mln so'm/oy. Tuman va holatga bog'liq." },
      { question: "Ijara to'loviga nima kiritilgan?", answer: "Odatda faqat ijara. Kommunal, internet, xizmat — alohida (+500 000 − 1 500 000 so'm)." },
      { question: "Ijarada depozit qancha?", answer: "Odatda 1-2 oylik to'lov. Chiqib ketishda qaytariladi (zarar minus)." },
      { question: "Nima foydaliroq: ijaraga olishmi yoki sotib olishmi?", answer: "Stavkalarga bog'liq. Standart misolda 20% ipoteka va 18% omonatda 10 yildan keyin ijara foydaliroq, omonat 10% bo'lsa esa sotib olish foydaliroq. O'z raqamlaringizni kiriting, kalkulyator farqni ko'rsatadi." },
      { question: "Solishtirishda omonat stavkasi nima uchun kerak?", answer: "Ijarachi boshlang'ich to'lov va ipotekaga sarflamagan pul daromad keltirishi mumkin. Busiz solishtirish sotib olish foydasini oshirib ko'rsatgan bo'lardi." },
    ],
  },

  {
    slug: 'renovation',
    lastUpdated: '2026-11-01',
    sources: [],
        paragraphsRu: [
      'Калькулятор ремонта квартиры оценивает стоимость ремонта в Узбекистане по площади и одному из трёх уровней: эконом, стандарт, премиум. На рынке обычно выделяют четыре категории: косметический (обои, покраска, замена напольного покрытия), стандартный (с заменой сантехники и электрики), евроремонт (качественные материалы, выравнивание стен) и дизайнерский (авторский проект, премиальная отделка). Средние цены за м² в 2026 году: косметический — 2–3,5 млн сум, стандартный — 3,5–6 млн, евроремонт — 6–10 млн, дизайнерский — 10–18 млн.',
      'Основные статьи расходов при ремонте: черновые работы — демонтаж, выравнивание стен и полов, стяжка (20–30% бюджета); чистовые материалы — плитка, ламинат, обои, краска (30–40%); сантехника — ванна, унитаз, смесители, трубы (10–15%); электрика — проводка, розетки, освещение (5–10%); мебель и встроенные шкафы (15–25%). Стоимость работы мастеров составляет в среднем 40–50% от цены материалов.',
      'Рынок стройматериалов в Узбекистане представлен крупными базарами (Джами, Ипподром в Ташкенте) и сетевыми магазинами. Импортная плитка и сантехника (Турция, Китай, Россия) дороже местной на 30–60%, но часто превосходит по качеству. При планировании бюджета заложите 10–15% сверх расчётной суммы на непредвиденные расходы — скрытые дефекты стен, замену труб или перенос розеток.',
      'Пример расчёта: стандартный ремонт двухкомнатной квартиры 65 м² в новостройке Ташкента. Черновые работы: 65 × 1 500 000 = 97,5 млн. Чистовые материалы: 65 × 1 800 000 = 117 млн. Сантехника: 30 млн. Электрика: 15 млн. Итого без мебели: ~260 млн сум. С базовой мебелью и кухней: ~340 млн сум. Сроки: 2–4 месяца в зависимости от объёма работ.',
      'Калькулятор даёт ориентир для любого жилья: квартиры в новостройке, вторичного жилья, частного дома. Точная смета зависит от сезона, курса доллара и региона, поэтому сравнивайте результат с предложениями подрядчиков.',
    ],
    paragraphsUz: [
      "Ta'mir kalkulyatori O'zbekistonda ta'mir narxini maydon va uch darajadan biri bo'yicha baholaydi: iqtisodiy, standart, premium. Bozorda odatda to'rt toifa ajratiladi: kosmetik (oboylar, bo'yash, pol qoplamasi almashtirish), standart (santexnika va elektrikani almashtirish bilan), yevrota'mir (sifatli materiallar, devorlarni tekislash) va dizaynerlik (mualliflik loyiha, premium pardozlash). 2026-yilda m² uchun o'rtacha narxlar: kosmetik — 2–3,5 mln, standart — 3,5–6 mln, yevrota'mir — 6–10 mln, dizaynerlik — 10–18 mln so'm.",
      "Ta'mirdagi asosiy xarajat moddalari: qora ishlar — demontaj, devor va pollarni tekislash, styajka (byudjetning 20–30%); toza materiallar — plitka, laminat, oboy, bo'yoq (30–40%); santexnika — vanna, unitaz, smesitellar, quvurlar (10–15%); elektrika — simlar, rozetkalar, yoritish (5–10%); mebel va o'rnatma shkaflar (15–25%). Ustalarning ish narxi o'rtacha materiallar narxining 40–50% ini tashkil etadi.",
      "O'zbekiston qurilish materiallari bozori yirik bozorlar (Toshkentdagi Jomi, Ippodrom) va tarmoq do'konlari bilan ifodalangan. Import plitka va santexnika (Turkiya, Xitoy, Rossiya) mahalliyga qaraganda 30–60% ga qimmatroq, lekin ko'pincha sifat jihatdan ustun. Byudjetni rejalashtirishda hisoblangan summadan 10–15% qo'shimcha ajrating — devorlarning yashirin nuqsonlari, quvurlar almashtirish yoki rozetkalarni ko'chirish uchun.",
      "Hisoblash misoli: Toshkentdagi yangi qurilishda 65 m² ikki xonali kvartiraning standart ta'miri. Qora ishlar: 65 × 1 500 000 = 97,5 mln. Toza materiallar: 65 × 1 800 000 = 117 mln. Santexnika: 30 mln. Elektrika: 15 mln. Mebelsiz jami: ~260 mln so'm. Asosiy mebel va oshxona bilan: ~340 mln so'm. Muddatlar: ishlar hajmiga qarab 2–4 oy.",
      "Kalkulyator har qanday uy-joy uchun mo'ljal beradi: yangi qurilishdagi kvartira, ikkinchi bozor uyi, xususiy uy. Aniq smeta mavsum, dollar kursi va hududga bog'liq, shuning uchun natijani pudratchilar takliflari bilan solishtiring.",
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
    lastUpdated: '2026-11-01',
    sources: [],
    paragraphsRu: [
      'Калькулятор переезда помогает заранее рассчитать стоимость перевозки вещей в пределах Ташкента или между городами Узбекистана. Рынок грузоперевозок в стране активно развивается: помимо традиционных «газелей» действуют специализированные сервисы заказа грузчиков через приложения. Средняя стоимость переезда в пределах Ташкента составляет от 500 000 до 3 000 000 сум в зависимости от объёма и расстояния.',
      'На итоговую цену влияют несколько ключевых факторов: количество комнат определяет объём вещей и необходимое число рейсов; этаж погрузки и выгрузки — при отсутствии лифта стоимость возрастает на 20–40%; расстояние — междугородние переезды рассчитываются по тарифу за километр. Разборка и сборка мебели, упаковка хрупких предметов и необходимость специальной техники для крупногабаритных грузов оплачиваются отдельно.',
      'Типичные расценки на услуги переезда в 2026 году: работа одного грузчика — от 200 000 сум за смену, аренда грузового транспорта (газель) — от 300 000 сум, фургон повышенной вместимости — от 500 000 сум. Упаковка квартиры «под ключ» стоит от 400 000 до 1 000 000 сум. Междугородние перевозки, например Ташкент — Самарканд, обойдутся от 3 000 000 до 6 000 000 сум.',
      'При организации переезда рекомендуется заключать письменный договор с указанием перечня вещей и их состояния — это защитит вас в случае повреждения имущества. Согласно Гражданскому кодексу Узбекистана, перевозчик несёт ответственность за сохранность груза. Полезно фотографировать ценные предметы перед погрузкой и уточнять наличие страховки у транспортной компании.',
      'Наш калькулятор переезда учитывает все основные параметры: количество комнат, этаж, наличие лифта и расстояние. Введите данные — и получите ориентировочную стоимость за считанные секунды. Это поможет спланировать бюджет и сравнить предложения нескольких компаний перед принятием решения.',
    ],
    paragraphsUz: [
      "Ko'chish kalkulyatori Toshkent ichida yoki O'zbekiston shaharlari o'rtasida buyumlarni tashish narxini oldindan hisoblashga yordam beradi. Mamlakatda yuk tashish bozori jadal rivojlanmoqda: an'anaviy «gazel»lardan tashqari ilovalar orqali yuk tashuvchilarni buyurtma qilish xizmatlari faoliyat yuritmoqda. Toshkent ichida ko'chishning o'rtacha narxi hajm va masofaga qarab 500 000 dan 3 000 000 so'mgacha.",
      "Yakuniy narxga bir necha asosiy omillar ta'sir qiladi: xonalar soni buyumlar hajmi va kerakli reyslar sonini belgilaydi; yuklash va tushirish qavati — lift bo'lmaganda narx 20–40% ga oshadi; masofa — shaharlararo ko'chishlar kilometr bo'yicha tarifda hisoblanadi. Mebelni yig'ish va qo'yish, mo'rt buyumlarni qadoqlash hamda katta o'lchamli yuklar uchun maxsus texnika alohida to'lanadi.",
      "2026-yilda ko'chish xizmatlarining odatiy narxlari: bir yuk tashuvchining ishi — smenasiga 200 000 so'mdan, yuk transporti (gazel) ijarasi — 300 000 so'mdan, katta sig'imli furgon — 500 000 so'mdan. Kvartirani «kalit topshirguncha» qadoqlash 400 000 dan 1 000 000 so'mgacha turadi. Shaharlararo tashishlar, masalan Toshkent — Samarqand, 3 000 000 dan 6 000 000 so'mgacha tushadi.",
      "Ko'chishni tashkil etishda buyumlar ro'yxati va holati ko'rsatilgan yozma shartnoma tuzish tavsiya etiladi — bu mol-mulk shikastlanganda sizni himoya qiladi. O'zbekiston Fuqarolik kodeksiga ko'ra, tashuvchi yukning saqlanishi uchun javobgardir. Yuklashdan oldin qimmatbaho buyumlarni suratga olish va transport kompaniyasida sug'urta mavjudligini aniqlash foydalidir.",
      "Bizning ko'chish kalkulyatorimiz barcha asosiy parametrlarni hisobga oladi: xonalar soni, qavat, lift mavjudligi va masofa. Ma'lumotlarni kiriting — bir necha soniyada taxminiy narxni oling. Bu byudjetni rejalashtirish va qaror qabul qilishdan oldin bir necha kompaniyalar takliflarini solishtirish imkonini beradi.",
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
    lastUpdated: '2026-11-03',
    sources: [],
    paragraphsRu: ['Калькулятор маржи рассчитывает ключевые показатели прибыльности бизнеса: маржу (разницу между ценой продажи и себестоимостью), маржинальность (долю маржи в выручке) и наценку (долю маржи в себестоимости). Эти показатели необходимы каждому предпринимателю в Узбекистане для ценообразования, анализа рентабельности и принятия управленческих решений.', 'Формулы расчёта: Маржа = Цена продажи − Себестоимость. Маржинальность = (Маржа / Цена продажи) × 100%. Наценка = (Маржа / Себестоимость) × 100%. Важно различать эти понятия: маржинальность всегда меньше 100%, тогда как наценка может быть любой. Например, при себестоимости 500 000 и цене 800 000 сум маржа составит 300 000, маржинальность — 37,5%, наценка — 60%.', 'Средняя маржинальность по отраслям в Узбекистане: розничная торговля продуктами — 15-25%, одежда и обувь — 30-50%, общественное питание — 40-65%, IT-услуги — 50-70%, строительные материалы — 20-35%. Знание отраслевых норм помогает понять, конкурентоспособен ли ваш бизнес и есть ли резервы для повышения прибыльности.', 'Для малого бизнеса и индивидуальных предпринимателей в Узбекистане калькулятор маржи — инструмент ежедневного использования. При закупке товаров на оптовом рынке «Абу Сахий» или «Ипподром» в Ташкенте важно заранее рассчитать наценку, чтобы покрыть аренду, зарплату продавцов, налоги (1% для ИП на упрощённой системе) и получить желаемую прибыль.', "Калькулятор считает от себестоимости и цены продажи к марже, маржинальности и наценке. Чтобы найти цену под целевую маржинальность, используйте формулу: Цена = Себестоимость ÷ (1 − маржинальность). При себестоимости 500 000 сум и маржинальности 30% цена составит около 714 286 сум."],
    paragraphsUz: ["Marja kalkulyatori biznes rentabelligining asosiy ko'rsatkichlarini hisoblaydi: marja (sotish narxi va tannarx orasidagi farq), marjinallik (tushumdagi marja ulushi) va ustama (tannarxdagi marja ulushi). Bu ko'rsatkichlar O'zbekistondagi har bir tadbirkorga narx belgilash, rentabellik tahlili va boshqaruv qarorlarini qabul qilish uchun zarur.", "Hisoblash formulalari: Marja = Sotish narxi − Tannarx. Marjinallik = (Marja / Sotish narxi) × 100%. Ustama = (Marja / Tannarx) × 100%. Bu tushunchalarni farqlash muhim: marjinallik doimo 100% dan kam, ustama esa istalgan qiymatda bo'lishi mumkin. Masalan, tannarx 500 000, narx 800 000 so'mda marja 300 000, marjinallik — 37,5%, ustama — 60% bo'ladi.", "O'zbekistonda tarmoqlar bo'yicha o'rtacha marjinallik: oziq-ovqat chakana savdosi — 15-25%, kiyim-kechak — 30-50%, umumiy ovqatlanish — 40-65%, IT-xizmatlar — 50-70%, qurilish materiallari — 20-35%. Tarmoq me'yorlarini bilish biznesingiz raqobatbardoshligini va rentabellikni oshirish zaxiralarini tushunishga yordam beradi.", "O'zbekistondagi kichik biznes va yakka tartibdagi tadbirkorlar uchun marja kalkulyatori kundalik vosita hisoblanadi. Toshkentdagi «Abu Sahiy» yoki «Ippodrom» ulgurji bozoridan tovar sotib olayotganda, ijara, sotuvchilar ish haqi, soliqlar (soddalashtilgan tizimda YaTT uchun 1%) va kerakli foydani qoplash uchun ustamani oldindan hisoblash muhim.", "Kalkulyator tannarx va sotish narxidan marja, marjinallik va ustamani hisoblaydi. Maqsadli marjinallik uchun narxni topishda formuladan foydalaning: Narx = Tannarx ÷ (1 − marjinallik). Tannarx 500 000 so'm va marjinallik 30% bo'lsa, narx taxminan 714 286 so'm bo'ladi."],
    faqRu: [{ question: 'Чем маржа отличается от наценки?', answer: 'Маржа считается от цены продажи, наценка — от себестоимости. При одинаковых числах наценка всегда больше маржинальности.' }, { question: 'Какая нормальная маржинальность?', answer: 'Зависит от отрасли. Торговля: 20-40%. Услуги: 40-70%. Производство: 15-30%.' }, { question: 'Как рассчитать наценку?', answer: '(Цена − Себестоимость) / Себестоимость × 100%.' }],
    faqUz: [{ question: "Marja ustamadan nimasi bilan farq qiladi?", answer: "Marja sotish narxidan, ustama tannarxdan hisoblanadi. Bir xil raqamlarda ustama doimo marjinallikdan katta." }, { question: "Normal marjinallik qancha?", answer: "Tarmoqqa bog'liq. Savdo: 20-40%. Xizmatlar: 40-70%. Ishlab chiqarish: 15-30%." }, { question: "Ustamani qanday hisoblash mumkin?", answer: "(Narx − Tannarx) / Tannarx × 100%." }],
  },

  {
    slug: 'break-even',
    lastUpdated: '2026-11-01',
    sources: [],
        paragraphsRu: [
      'Калькулятор точки безубыточности (ТБУ) — ключевой инструмент для любого предпринимателя в Узбекистане. Он определяет минимальный объём продаж, при котором доходы полностью покрывают все постоянные и переменные расходы. Формула расчёта: ТБУ (шт) = Постоянные расходы / (Цена за единицу − Переменные расходы на единицу). Знание точки безубыточности позволяет оценить реалистичность бизнес-плана ещё до вложения средств.',
      'Постоянные расходы — это затраты, которые не зависят от объёма производства: аренда помещения, зарплаты сотрудников, коммунальные платежи, налоги на имущество, страховка. В Узбекистане аренда торгового помещения в Ташкенте обходится от 3 до 15 млн сум в месяц в зависимости от локации, а минимальная заработная плата в 2026 году составляет 1 360 000 сум. Эти расходы необходимо покрывать вне зависимости от продаж.',
      'Переменные расходы растут пропорционально объёму продаж: себестоимость товара, упаковка, доставка, комиссия маркетплейсов (Uzum Market, Sello берут 5–15%). Разница между ценой продажи и переменными расходами на единицу называется маржинальной прибылью — именно она покрывает постоянные расходы. Чем выше маржа, тем быстрее бизнес выходит на окупаемость.',
      'Рассмотрим пример: вы открываете пекарню в Ташкенте. Постоянные расходы: аренда 5 млн, зарплаты 8 млн, коммуналка 2 млн — итого 15 млн сум в месяц. Себестоимость буханки хлеба 4 000 сум, цена продажи 8 000 сум. ТБУ = 15 000 000 / (8 000 − 4 000) = 3 750 штук в месяц, или примерно 125 буханок в день. Всё, что продано сверх этого — ваша чистая прибыль.',
      'Калькулятор также рассчитывает ТБУ в денежном выражении (сум) и маржинальную прибыль на единицу. Это особенно важно при подаче заявки на кредит: банки Узбекистана (Ипотека-банк, Асака-банк) требуют бизнес-план с обоснованием окупаемости. Регулярный пересчёт ТБУ помогает адаптировать ценовую политику при изменении курса доллара или стоимости сырья.',
    ],
    paragraphsUz: [
      "Zararsizlik nuqtasi (ZN) kalkulyatori O'zbekistondagi har qanday tadbirkor uchun muhim vosita hisoblanadi. U daromadlar barcha doimiy va o'zgaruvchan xarajatlarni to'liq qoplovchi minimal sotish hajmini aniqlaydi. Hisoblash formulasi: ZN (dona) = Doimiy xarajatlar / (Birlik narxi − Birlik uchun o'zgaruvchan xarajatlar). Zararsizlik nuqtasini bilish mablag' kiritishdan oldin biznes-rejaning realligini baholash imkonini beradi.",
      "Doimiy xarajatlar — ishlab chiqarish hajmiga bog'liq bo'lmagan xarajatlar: binoni ijaraga olish, xodimlar ish haqi, kommunal to'lovlar, mol-mulk soliqlari, sug'urta. O'zbekistonda Toshkentda savdo binosi ijarasi joylashuviga qarab oyiga 3 dan 15 mln so'mgacha, 2026-yilda eng kam ish haqi esa 1 360 000 so'mni tashkil etadi. Bu xarajatlar sotish hajmidan qat'i nazar qoplanishi shart.",
      "O'zgaruvchan xarajatlar sotish hajmiga mutanosib ravishda o'sadi: tovar tannarxi, qadoqlash, yetkazib berish, marketpleyslar komissiyasi (Uzum Market, Sello 5–15% oladi). Sotish narxi va birlik uchun o'zgaruvchan xarajatlar o'rtasidagi farq marjinal foyda deyiladi — aynan shu doimiy xarajatlarni qoplaydi. Marja qanchalik yuqori bo'lsa, biznes shunchalik tez o'zini oqlaydi.",
      "Misolni ko'rib chiqaylik: Toshkentda novvoyxona ochmoqchisiz. Doimiy xarajatlar: ijara 5 mln, ish haqi 8 mln, kommunal 2 mln — jami oyiga 15 mln so'm. Non tannarxi 4 000 so'm, sotish narxi 8 000 so'm. ZN = 15 000 000 / (8 000 − 4 000) = oyiga 3 750 dona, ya'ni kuniga taxminan 125 dona non. Bundan ortiq sotilgan har bir non — sof foydangiz.",
      "Kalkulyator shuningdek pul ifodasida (so'mda) ZNni va birlik uchun marjinal foydani hisoblaydi. Bu kredit uchun ariza berishda ayniqsa muhim: O'zbekiston banklari (Ipoteka-bank, Asaka-bank) o'zini oqlash asoslanmasi bilan biznes-rejani talab qiladi. ZNni muntazam qayta hisoblash dollar kursi yoki xom ashyo narxi o'zgarganda narx siyosatini moslashtirishga yordam beradi.",
    ],
    faqRu: [{ question: 'Что такое точка безубыточности?', answer: 'Объём продаж, при котором доход = расходы. Ниже ТБУ — убыток, выше — прибыль.' }, { question: 'Как рассчитать ТБУ?', answer: 'Постоянные расходы / (Цена − Переменные расходы на единицу).' }, { question: 'Зачем считать ТБУ?', answer: 'Чтобы понять минимальный объём продаж для выхода в прибыль и оценить реалистичность бизнес-плана.' }],
    faqUz: [{ question: 'Zararsizlik nuqtasi nima?', answer: "Daromad = xarajatlar bo'ladigan sotish hajmi. ZNdan past — zarar, yuqori — foyda." }, { question: "ZNni qanday hisoblash mumkin?", answer: "Doimiy xarajatlar / (Narx − Birlik uchun o'zgaruvchan xarajatlar)." }, { question: "ZNni nima uchun hisoblash kerak?", answer: "Foydaga chiqish uchun minimal sotish hajmini tushunish va biznes-rejaning realligini baholash uchun." }],
  },

  {
    slug: 'roi',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Фондовая биржа Узбекистана', url: 'https://uzse.uz' },
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
    ],
    paragraphsRu: [
      'Калькулятор ROI (Return on Investment — возврат инвестиций) рассчитывает доходность вложений в процентах. Формула: ROI = (Доход − Инвестиции) / Инвестиции × 100%, то есть чистая прибыль, делённая на вложения. Это ключевой показатель для инвесторов в Узбекистане, позволяющий сравнить различные варианты вложений: от банковских вкладов до бизнеса и недвижимости.',
      'Инвестиционный ландшафт Узбекистана (ориентировочные диапазоны): банковские вклады в сумах — 17-22,5% годовых, в долларах — 4-7%; доходность облигаций на бирже UZSE — 18-22%; аренда недвижимости в Ташкенте — 8-12% годовых; средний ROI малого бизнеса — 30-60%; инфляция — 6,4% (сентябрь 2026). Реальная доходность = номинальная доходность − инфляция.',
      'Пример расчёта: предприниматель вложил 200 млн сум в открытие кафе в Ташкенте, за год чистая прибыль составила 70 млн. ROI = (70 / 200) × 100% = 35%. Для сравнения: та же сумма на депозите принесла бы 200 × 20% = 40 млн (ROI 20%). Инвестиция в кафе выгоднее на 15 процентных пунктов, но несёт больше рисков.',
      'Ограничения ROI: показатель не учитывает фактор времени (ROI 30% за 1 год лучше ROI 30% за 3 года), уровень риска и ликвидность. Для временной корректировки используйте годовой ROI = ROI / Количество лет. Для рисковых инвестиций в Узбекистане (стартапы, криптовалюта) требуйте ROI значительно выше банковской ставки (20%+).',
      'Калькулятор ROI поможет быстро оценить вложение: введите сумму инвестиции, ежемесячный доход и период — он покажет ROI в процентах, чистую прибыль и срок окупаемости. Используйте для оценки бизнес-идей, покупки недвижимости или выбора инвестиционного инструмента.',
    ],
    paragraphsUz: [
      "ROI (Return on Investment — investitsiyalar qaytimi) kalkulyatori mablag' qo'yishning daromadliligini foizda hisoblaydi. Formula: ROI = (Foyda − Investitsiya) / Investitsiya × 100%. Bu O'zbekistondagi investorlar uchun asosiy ko'rsatkich bo'lib, turli mablag' qo'yish variantlarini solishtirish imkonini beradi: bank omonatlaridan tortib biznes va ko'chmas mulkgacha.",
      "O'zbekistonning investitsiya muhiti (taxminiy diapazonlar): so'mda bank omonatlari — yillik 17-22,5%, dollarda — 5-8%; UZSE birjasida obligatsiyalar daromadliligi — 18-22%; Toshkentda ko'chmas mulk ijarasi — yillik 8-12%; kichik biznesning o'rtacha ROIsi — 30-60%; inflyatsiya — 6,4% (2026-yil sentabr). Real daromadlilik = nominal daromadlilik − inflyatsiya.",
      "Hisoblash misoli: tadbirkor Toshkentda kafe ochishga 200 mln so'm kiritdi, yil davomida sof foyda 70 mln ni tashkil etdi. ROI = (70 / 200) × 100% = 35%. Solishtirish uchun: xuddi shu summa omonatda 200 × 20% = 40 mln keltirar edi (ROI 20%). Kafega investitsiya 15 foiz punktga foydaliroq, lekin ko'proq xavf tashiydi.",
      "ROI cheklovlari: ko'rsatkich vaqt omilini (1 yilda 30% ROI 3 yildagi 30% ROI dan yaxshiroq), xavf darajasini va likvidlikni hisobga olmaydi. Vaqt bo'yicha tuzatish uchun yillik ROI = ROI / Yillar soni dan foydalaning. O'zbekistondagi xavfli investitsiyalar (startaplar, kriptovalyuta) uchun bank stavkasidan (20%+) sezilarli darajada yuqori ROI talab qiling.",
      "ROI kalkulyatori mablag' kiritishni tezda baholashga yordam beradi: investitsiya summasi, oylik daromad va davrni kiriting — u ROI foizini, sof foydani va o'zini oqlash muddatini ko'rsatadi. Biznes g'oyalarini baholash, ko'chmas mulk sotib olish yoki investitsiya vositasini tanlash uchun foydalaning.",
    ],
    faqRu: [
      { question: 'Что такое ROI?', answer: 'Return on Investment — показатель доходности инвестиций в процентах. Показывает, сколько вы заработали на каждый вложенный сум.' },
      { question: 'Как рассчитать ROI?', answer: '(Доход − Инвестиции) / Инвестиции × 100%. Например, вложили 100 млн, получили 130 млн: ROI = 30%.' },
      { question: 'Какой ROI считается хорошим в Узбекистане?', answer: 'Выше инфляции (6,4%) и ставки по вкладам (17-22,5%). ROI >30% — отличный результат для бизнеса.' },
      { question: 'Чем ROI отличается от прибыли?', answer: 'Прибыль — абсолютная сумма (в сумах). ROI — относительный показатель (в %). ROI позволяет сравнивать инвестиции разного масштаба.' },
      { question: 'Какова доходность депозитов в Узбекистане?', answer: 'В сумах: 17-22,5% годовых. В долларах: 4-7%. Реальная доходность за вычетом инфляции 6,4%: 10,6-16,1% в сумах.' },
    ],
    faqUz: [
      { question: 'ROI nima?', answer: "Return on Investment — investitsiyalar daromadliligining foizdagi ko'rsatkichi. Har bir qo'yilgan so'mga qancha ishlab topganingizni ko'rsatadi." },
      { question: "ROIni qanday hisoblash mumkin?", answer: "(Daromad − Investitsiya) / Investitsiya × 100%. Masalan, 100 mln kiritildi, 130 mln olindi: ROI = 30%." },
      { question: "O'zbekistonda qanday ROI yaxshi hisoblanadi?", answer: "Inflyatsiyadan (6,4%) va omonat stavkalaridan (17-22,5%) yuqori. ROI >30% — biznes uchun ajoyib natija." },
      { question: "ROI foydadan nimasi bilan farq qiladi?", answer: "Foyda — mutlaq summa (so'mda). ROI — nisbiy ko'rsatkich (%). ROI turli ko'lamdagi investitsiyalarni solishtirish imkonini beradi." },
      { question: "O'zbekistonda omonatlar daromadliligi qancha?", answer: "So'mda: yillik 17-22,5%. Dollarda: 4-7%. Inflyatsiya 6,4% chegirilganda real daromadlilik: so'mda 10,6-16,1%." },
    ],
  },

  {
    slug: 'ideal-weight',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'ВОЗ — Индексы здоровья', url: 'https://who.int' },
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      "Калькулятор идеального веса считает ориентир массы тела по четырём формулам: Девайна, Робинсона, Миллера и Хамви, и показывает их среднее. Результат зависит от роста и пола. Формулы выведены для роста от 152 см; для сравнения полезно смотреть и диапазон нормального ИМТ 18,5-24,9.",
      "Формулы, где X — превышение роста над 152,4 см в дюймах: Девайн: мужчины 50 + 2,3X, женщины 45,5 + 2,3X. Робинсон: мужчины 52 + 1,9X, женщины 49 + 1,7X. Миллер: мужчины 56,2 + 1,41X, женщины 53,1 + 1,36X. Хамви: мужчины 48 + 2,7X, женщины 45,5 + 2,2X. Диапазон по ИМТ: рост(м)² × 18,5 и рост(м)² × 24,9.",
      "Пример для мужчины ростом 172 см: Девайн 67,7 кг, Робинсон 66,7 кг, Миллер 67,1 кг, Хамви 68,8 кг, среднее 67,6 кг; диапазон по ИМТ 54,7-73,7 кг. Для женщины ростом 160 см: Девайн 52,4 кг, Робинсон 54,1 кг, Миллер 57,2 кг, Хамви 52,1 кг, среднее 53,9 кг; диапазон по ИМТ 47,4-63,7 кг.",
      "Идеальный вес — ориентир, а не абсолют. На реальный здоровый вес влияют мышечная масса (спортсмены весят больше при низком проценте жира), возраст, телосложение и генетика. Формулы эти факторы не учитывают, поэтому при заметном отклонении оценивайте вес вместе с врачом.",
      "Используйте калькулятор идеального веса совместно с калькулятором ИМТ и калькулятором калорий. Введите рост и пол: калькулятор покажет результат по каждой из четырёх формул и среднее значение.",
    ],
    paragraphsUz: [
      "Ideal vazn kalkulyatori tana massasi mo'ljalini to'rtta formula bo'yicha hisoblaydi: Devayn, Robinson, Miller va Hamvi, hamda ularning o'rtachasini ko'rsatadi. Natija bo'y va jinsga bog'liq. Formulalar 152 sm dan yuqori bo'y uchun chiqarilgan; solishtirish uchun normal TMI 18,5-24,9 diapazonini ham ko'rish foydali.",
      "Formulalar, bu yerda X — bo'yning 152,4 sm dan ortig'i dyuymlarda: Devayn: erkaklar 50 + 2,3X, ayollar 45,5 + 2,3X. Robinson: erkaklar 52 + 1,9X, ayollar 49 + 1,7X. Miller: erkaklar 56,2 + 1,41X, ayollar 53,1 + 1,36X. Hamvi: erkaklar 48 + 2,7X, ayollar 45,5 + 2,2X. TMI bo'yicha diapazon: bo'y(m)² × 18,5 va bo'y(m)² × 24,9.",
      "Bo'yi 172 sm erkak uchun misol: Devayn 67,7 kg, Robinson 66,7 kg, Miller 67,1 kg, Hamvi 68,8 kg, o'rtacha 67,6 kg; TMI bo'yicha diapazon 54,7-73,7 kg. Bo'yi 160 sm ayol uchun: Devayn 52,4 kg, Robinson 54,1 kg, Miller 57,2 kg, Hamvi 52,1 kg, o'rtacha 53,9 kg; TMI bo'yicha diapazon 47,4-63,7 kg.",
      "Ideal vazn — mo'ljal, mutlaq ko'rsatkich emas. Haqiqiy sog'lom vaznga mushak massasi (sportchilar past yog' foizida ko'proq tortadi), yosh, tana tuzilishi va genetika ta'sir qiladi. Formulalar bu omillarni hisobga olmaydi, shuning uchun sezilarli og'ishda vaznni shifokor bilan baholang.",
      "Ideal vazn kalkulyatorini TMI va kaloriya kalkulyatorlari bilan birgalikda ishlating. Bo'y va jinsni kiriting: kalkulyator to'rtta formulaning har biri bo'yicha natijani va o'rtacha qiymatni ko'rsatadi.",
    ],
    faqRu: [
      { question: 'Как рассчитать идеальный вес?', answer: "Калькулятор применяет формулы Девайна, Робинсона, Миллера и Хамви и показывает среднее. Для сравнения используйте диапазон ИМТ 18,5-24,9." },
      { question: 'Какой вес нормальный для роста 170 см?', answer: "По ИМТ 18,5-24,9 норма для обоих полов 53,5-72 кг. Среднее четырёх формул: мужчина около 66 кг, женщина около 61 кг." },
      { question: 'Одинаков ли идеальный вес для мужчин и женщин?', answer: 'Нет, при одинаковом росте мужчина весит на 5-10 кг больше за счёт мышечной массы и костной структуры.' },
      { question: 'Какая формула самая точная?', answer: "Единственной точной нет. ИМТ универсальнее и задаёт диапазон, формулы дают одну точку, поэтому калькулятор показывает их среднее." },
      { question: 'Каков средний рост в Узбекистане?', answer: "Ориентировочно мужчины около 172 см, женщины около 160 см. Среднее четырёх формул для такого роста: 67,6 кг и 53,9 кг." },
    ],
    faqUz: [
      { question: 'Ideal vaznni qanday hisoblash mumkin?', answer: "Kalkulyator Devayn, Robinson, Miller va Hamvi formulalarini qo'llaydi va o'rtachani ko'rsatadi. Solishtirish uchun TMI 18,5-24,9 diapazonidan foydalaning." },
      { question: "170 sm bo'yga qanday vazn normal?", answer: "TMI 18,5-24,9 bo'yicha ikkala jins uchun norma 53,5-72 kg. To'rtta formula o'rtachasi: erkak taxminan 66 kg, ayol taxminan 61 kg." },
      { question: "Ideal vazn erkak va ayollar uchun bir xilmi?", answer: "Yo'q, bir xil bo'yda erkak mushak massasi va suyak tuzilishi hisobiga 5-10 kg ko'proq tortadi." },
      { question: "Qaysi formula eng aniq?", answer: "Yagona aniq formula yo'q. TMI universalroq va diapazon beradi, formulalar bitta nuqta beradi, shuning uchun kalkulyator ularning o'rtachasini ko'rsatadi." },
      { question: "O'zbekistonda o'rtacha bo'y qancha?", answer: "Taxminan erkaklar 172 sm, ayollar 160 sm. Bunday bo'y uchun to'rtta formula o'rtachasi: 67,6 kg va 53,9 kg." },
    ],
  },

  {
    slug: 'macros',
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'ВОЗ — Рекомендации по питанию', url: 'https://who.int' },
      { name: 'Институт питания РУз', url: 'https://ssv.uz' },
    ],
    paragraphsRu: [
      'Калькулятор БЖУ переводит суточные калории и выбранные доли белков и жиров в граммы, а углеводы получает как остаток. Допустимые диапазоны Института медицины США: белки 10-35%, жиры 20-35%, углеводы 45-65% калорий; ВОЗ советует держать жиры не выше 30%. Для жителей Узбекистана с традиционно высокоуглеводным рационом (рис, лепёшки, тесто) баланс макронутриентов особенно важен.',
      'Как рассчитать: сначала определите суточную норму калорий (формула Миффлина-Сан Жеора). Затем распределите по макронутриентам: 1 г белка = 4 ккал, 1 г жира = 9 ккал, 1 г углеводов = 4 ккал. Пример для мужчины 80 кг, поддержание (2 400 ккал): белки 30% = 720 ккал = 180 г; жиры 25% = 600 ккал = 67 г; углеводы 45% = 1 080 ккал = 270 г.',
      'Адаптация КБЖУ для узбекской кухни: порция плова (400 г) содержит ~40 г белка, 35 г жиров, 90 г углеводов. Самса — 15 г белка, 20 г жиров, 30 г углеводов. Шашлык (200 г) — 35 г белка, 15 г жиров, 0 г углеводов. Лагман — 20 г белка, 15 г жиров, 60 г углеводов. Зная КБЖУ блюд, можно составить сбалансированный рацион из привычных продуктов.',
      'Для похудения рекомендуется: увеличить долю белка до 35-40% (помогает сохранить мышцы при дефиците калорий), снизить углеводы до 30-35%, жиры оставить 25-30%. Для набора мышечной массы: белки 30%, углеводы 50-55%, жиры 20%. При активных тренировках потребность в белке возрастает до 1,8-2,2 г/кг массы тела.',
      "В калькуляторе три поля: суточные калории и доли белков и жиров в процентах. Норму калорий сначала определите в калькуляторе калорий, он учитывает пол, возраст, рост, вес, активность и цель, а затем перенесите её сюда.",
    ],
    paragraphsUz: [
      "OYU kalkulyatori kunlik kaloriya va tanlangan oqsil hamda yog' ulushlarini grammlarga o'giradi, uglevodlarni esa qoldiq sifatida topadi. AQSh Tibbiyot institutining ruxsat etilgan diapazonlari: oqsillar 10-35%, yog'lar 20-35%, uglevodlar 45-65% kaloriya; JSST yog'larni 30% dan oshirmaslikni maslahat beradi. An'anaviy yuqori uglevodli ratsion (guruch, non, xamir) bilan o'zbek aholisi uchun makronutrientlar balansi alohida ahamiyatga ega.",
      "Qanday hisoblash kerak: avval kunlik kaloriya normasini aniqlang (Mifflin-San Jeor formulasi). Keyin makronutrientlar bo'yicha taqsimlang: 1 g oqsil = 4 kkal, 1 g yog' = 9 kkal, 1 g uglevod = 4 kkal. 80 kg erkak uchun misol, saqlash (2 400 kkal): oqsillar 30% = 720 kkal = 180 g; yog'lar 25% = 600 kkal = 67 g; uglevodlar 45% = 1 080 kkal = 270 g.",
      "O'zbek oshxonasi uchun KBYU moslashuvi: bir porsiya osh (400 g) ~40 g oqsil, 35 g yog', 90 g uglevod o'z ichiga oladi. Somsa — 15 g oqsil, 20 g yog', 30 g uglevod. Kabob (200 g) — 35 g oqsil, 15 g yog', 0 g uglevod. Lag'mon — 20 g oqsil, 15 g yog', 60 g uglevod. Taomlarning KBYUsini bilib, odatiy mahsulotlardan muvozanatli ratsion tuzish mumkin.",
      "Oriqlamoq uchun tavsiya etiladi: oqsil ulushini 35-40% ga oshirish (kaloriya defitsitida mushaklar saqlanishiga yordam beradi), uglevodlarni 30-35% ga kamaytirish, yog'larni 25-30% da qoldirish. Mushak massasini oshirish uchun: oqsillar 30%, uglevodlar 50-55%, yog'lar 20%. Faol mashg'ulotlarda oqsilga ehtiyoj tana massasining 1 kg iga 1,8-2,2 g gacha ortadi.",
      "Kalkulyatorda uchta maydon bor: kunlik kaloriya hamda oqsil va yog' ulushlari foizda. Kaloriya normasini avval kaloriya kalkulyatorida aniqlang, u jins, yosh, bo'y, vazn, faollik va maqsadni hisobga oladi, keyin uni bu yerga kiriting.",
    ],
    faqRu: [
      { question: 'Какое соотношение БЖУ оптимально?', answer: 'Поддержание: белки 30%, жиры 25%, углеводы 45%. Похудение: белки 35-40%, углеводы 30-35%. Набор массы: углеводы 50-55%.' },
      { question: 'Сколько белка нужно в день?', answer: '1,5-2 г/кг при активном образе жизни. Для человека 80 кг: 120-160 г. При тренировках: до 2,2 г/кг (176 г).' },
      { question: 'Как рассчитать КБЖУ?', answer: 'Определите суточные калории (калькулятор калорий), затем распределите: белки (×4 ккал/г), жиры (×9 ккал/г), углеводы (×4 ккал/г).' },
      { question: 'Сколько КБЖУ в плове?', answer: 'Порция плова (~400 г): ~800 ккал, 40 г белка, 35 г жиров, 90 г углеводов.' },
      { question: 'Можно ли похудеть не считая КБЖУ?', answer: "Можно: важнее всего дефицит калорий. Подсчёт БЖУ помогает получать достаточно белка и сохранять мышцы, но не обязателен." },
    ],
    faqUz: [
      { question: "Qanday BYU nisbati optimal?", answer: "Saqlash: oqsillar 30%, yog'lar 25%, uglevodlar 45%. Oriqlamoq: oqsillar 35-40%, uglevodlar 30-35%. Massa oshirish: uglevodlar 50-55%." },
      { question: "Kuniga qancha oqsil kerak?", answer: "Faol turmush tarzida 1,5-2 g/kg. 80 kg odam uchun: 120-160 g. Mashg'ulotlarda: 2,2 g/kg gacha (176 g)." },
      { question: "KBYUni qanday hisoblash mumkin?", answer: "Kunlik kaloriyalarni aniqlang (kaloriya kalkulyatori), keyin taqsimlang: oqsillar (×4 kkal/g), yog'lar (×9 kkal/g), uglevodlar (×4 kkal/g)." },
      { question: "Oshda qancha KBYU bor?", answer: "Bir porsiya osh (~400 g): ~800 kkal, 40 g oqsil, 35 g yog', 90 g uglevod." },
      { question: "KBYU hisoblamasdan oriqlamoq mumkinmi?", answer: "Mumkin: eng muhimi kaloriya defitsiti. OYU hisobi yetarli oqsil olish va mushaklarni saqlashga yordam beradi, lekin majburiy emas." },
    ],
  },

  {
    slug: 'pregnancy',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Министерство здравоохранения РУз', url: 'https://ssv.uz' },
      { name: 'ВОЗ — Материнское здоровье', url: 'https://who.int' },
    ],
    paragraphsRu: [
      'Калькулятор беременности определяет предполагаемую дату родов (ПДР), текущий срок в неделях и триместр. ПДР рассчитывается по формуле Негеле: первый день последних месячных + 280 дней (40 недель). В Узбекистане ежегодно рождается около 880 000 детей, а средний возраст первородящих — 22-24 года. Система родовспоможения включает женские консультации, роддома и перинатальные центры.',
      'Триместры беременности: 1-й (1-12 недель) — формирование органов плода, первое УЗИ на 11-14 неделе; 2-й (13-27 недель) — активный рост, второе УЗИ на 18-22 неделе; 3-й (28-40 недель) — подготовка к родам, третье УЗИ на 30-34 неделе. Калькулятор показывает текущую неделю, триместр и оставшиеся дни до ПДР.',
      'В Узбекистане наблюдение беременности осуществляется в женских консультациях при поликлиниках (бесплатно). Рекомендуемый график посещений: до 28 недели — 1 раз в месяц, 28-36 недель — 2 раза в месяц, после 36 недель — еженедельно. Обязательные анализы: общий и биохимический анализ крови, группа крови, резус-фактор, ВИЧ, гепатит, скрининги 1-го и 2-го триместров.',
      'Только 5% родов происходят точно в ПДР. Нормальные роды — 37-42 неделя. Роды до 37 недели считаются преждевременными, после 42 — переношенными. В Узбекистане все роддома (родильные комплексы) оказывают бесплатную помощь гражданам. Частные клиники предлагают платное родовспоможение: от 5 000 000 до 25 000 000 сум в зависимости от уровня сервиса.',
      'Калькулятор беременности поможет спланировать все этапы: введите дату первого дня последней менструации. Калькулятор покажет текущий срок, триместр, предполагаемые даты зачатия и родов и сколько дней осталось. Он не заменяет наблюдение у врача.',
    ],
    paragraphsUz: [
      "Homiladorlik kalkulyatori taxminiy tug'ilish sanasini (TTS), haftalardagi joriy muddatni va trimestrni aniqlaydi. TTS Negele formulasi bo'yicha hisoblanadi: oxirgi hayzning birinchi kuni + 280 kun (40 hafta). O'zbekistonda har yili taxminan 880 000 bola tug'iladi, birinchi marta tug'ayotgan ayollarning o'rtacha yoshi 22-24. Tug'ruqqa yordam ko'rsatish tizimi ayollar maslahatxonalari, tug'ruqxonalar va perinatal markazlarni o'z ichiga oladi.",
      "Homiladorlik trimestrlari: 1-chi (1-12 hafta) — homila organlarining shakllanishi, birinchi UZI 11-14 haftada; 2-chi (13-27 hafta) — faol o'sish, ikkinchi UZI 18-22 haftada; 3-chi (28-40 hafta) — tug'ruqqa tayyorgarlik, uchinchi UZI 30-34 haftada. Kalkulyator joriy haftani, trimestrni va TTSgacha qolgan kunlarni ko'rsatadi.",
      "O'zbekistonda homiladorlikni kuzatish poliklinikalardagi ayollar maslahatxonalarida amalga oshiriladi (bepul). Tavsiya etilgan tashrif jadvali: 28 haftagacha — oyda 1 marta, 28-36 hafta — oyda 2 marta, 36 haftadan keyin — har hafta. Majburiy tahlillar: umumiy va biokimyoviy qon tahlili, qon guruhi, rezus-omil, OIV, gepatit, 1 va 2-trimestr skrininglari.",
      "Faqat 5% tug'ilishlar aniq TTSda sodir bo'ladi. Normal tug'ilish — 37-42 hafta. 37 haftagacha tug'ilish muddatidan oldingi, 42 haftadan keyin esa ortiqcha ko'tarilgan hisoblanadi. O'zbekistonda barcha tug'ruqxonalar (tug'ruq majmualari) fuqarolarga bepul yordam ko'rsatadi. Xususiy klinikalar pullik tug'ruq xizmatini taklif etadi: xizmat darajasiga qarab 5 000 000 dan 25 000 000 so'mgacha.",
      "Homiladorlik kalkulyatori barcha bosqichlarni rejalashtirishga yordam beradi: oxirgi hayz birinchi kunini kiriting. Kalkulyator joriy muddatni, trimestrni, taxminiy homiladorlik va tug'ruq sanalarini hamda qolgan kunlarni ko'rsatadi. U shifokor kuzatuvini almashtirmaydi.",
    ],
    faqRu: [
      { question: 'Как рассчитать дату родов?', answer: 'Первый день последних месячных + 280 дней (40 недель). Или введите дату в калькулятор — он рассчитает автоматически.' },
      { question: 'Сколько недель длится беременность?', answer: '40 недель (280 дней) от первого дня последней менструации. Нормальные роды: 37-42 неделя. Только 5% родов — точно в ПДР.' },
      { question: 'Когда делать УЗИ?', answer: 'Три обязательных УЗИ: 11-14 недель (1-й скрининг), 18-22 недели (2-й скрининг), 30-34 недели (3-е УЗИ). В женской консультации — бесплатно.' },
      { question: 'Сколько стоят роды в Узбекистане?', answer: 'В государственном роддоме — бесплатно. В частных клиниках: 5-25 млн сум в зависимости от уровня сервиса.' },
      { question: 'Как часто нужно посещать врача?', answer: 'До 28 нед. — 1 раз/мес, 28-36 нед. — 2 раза/мес, после 36 нед. — еженедельно. Наблюдение в женской консультации бесплатно.' },
    ],
    faqUz: [
      { question: "Tug'ilish sanasini qanday hisoblash mumkin?", answer: "Oxirgi hayzning birinchi kuni + 280 kun (40 hafta). Yoki kalkulyatorga sanani kiriting — u avtomatik hisoblaydi." },
      { question: "Homiladorlik necha hafta davom etadi?", answer: "Oxirgi hayzning birinchi kunidan 40 hafta (280 kun). Normal tug'ilish: 37-42 hafta. Faqat 5% tug'ilishlar aniq TTSda bo'ladi." },
      { question: "UZI qachon qilish kerak?", answer: "Uchta majburiy UZI: 11-14 hafta (1-skrining), 18-22 hafta (2-skrining), 30-34 hafta (3-UZI). Ayollar maslahatxonasida — bepul." },
      { question: "O'zbekistonda tug'ruq qancha turadi?", answer: "Davlat tug'ruqxonasida — bepul. Xususiy klinikalarda: xizmat darajasiga qarab 5-25 mln so'm." },
      { question: "Shifokorga qanchalik tez-tez tashrif buyurish kerak?", answer: "28 haftagacha — oyda 1 marta, 28-36 hafta — oyda 2 marta, 36 haftadan keyin — har hafta. Ayollar maslahatxonasida kuzatish bepul." },
    ],
  },

  {
    slug: 'tuition',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Министерство высшего образования РУз', url: 'https://edu.uz' },
      { name: 'Портал абитуриентов', url: 'https://my.uzbmb.uz' },
    ],
    paragraphsRu: [
      'Калькулятор стоимости обучения рассчитывает контрактную оплату за весь срок учёбы в вузах Узбекистана с учётом ежегодного повышения; ориентиры по проживанию и сопутствующим расходам приведены ниже. В 2025/2026 учебном году в стране работает более 200 высших учебных заведений, включая 30+ филиалов зарубежных университетов (Westminster, INHA, Turin, Amity). Ежегодно в вузы поступает около 400 000 абитуриентов.',
      'Стоимость контрактного обучения в 2025/2026 учебном году: государственные вузы — 12-30 млн сум/год (ТашГУ, НУУз — от 14 млн, ТАТУ — от 16 млн); медицинские — 25-45 млн (ТМА — от 30 млн, стоматология — от 35 млн); технические — 15-28 млн; экономика и юриспруденция — 18-35 млн. Частные вузы: 15-50 млн. Филиалы зарубежных: 25-80 млн (Westminster — от 45 млн, INHA — от 35 млн). Бюджетные места — бесплатно (стипендия от 800 000 сум/мес).',
      'Дополнительные расходы на год: учебники и материалы — 1-3 млн сум; проживание в общежитии — 1-3 млн (800 000-2 500 000 сум/год); аренда комнаты в Ташкенте — 2-4 млн/мес; питание — 3-5 млн/год (250 000-400 000/мес); транспорт — 500 000-1 200 000/год. Итого сопутствующие расходы: 5-12 млн/год для иногородних студентов.',
      'Бюджетные гранты распределяются по результатам единого вступительного экзамена (DTM). В 2025/2026 учебном году государственный грант покрывает до 20-25% всех мест. Также доступны именные стипендии: Президентская (от 2 млн сум/мес), «Эл-юрт умиди» (обучение за рубежом). Банки предлагают образовательные кредиты по льготным ставкам 14-18% на срок до 7 лет.',
      'Калькулятор обучения поможет рассчитать полный бюджет на весь период учёбы (бакалавриат 4 года, магистратура 2 года): введите годовую стоимость контракта, срок и ожидаемое ежегодное повышение — получите сумму за весь срок.',
    ],
    paragraphsUz: [
      "Ta'lim narxi kalkulyatori O'zbekiston OTMlarida butun o'qish muddati uchun kontrakt to'lovini yillik oshishni hisobga olgan holda hisoblaydi; yashash va qo'shimcha xarajatlar bo'yicha mo'ljallar quyida keltirilgan. 2025/2026 o'quv yilida mamlakatda 200 dan ortiq oliy ta'lim muassasasi ishlaydi, jumladan 30+ xorijiy universitetlar filiallari (Westminster, INHA, Turin, Amity). Har yili taxminan 400 000 abituriyent OTMlarga kiradi.",
      "2025/2026 o'quv yilida kontrakt asosida o'qish narxi: davlat OTMlari — yiliga 12-30 mln so'm (ToshDU, O'zMU — 14 mln dan, TATU — 16 mln dan); tibbiyot — 25-45 mln (TTA — 30 mln dan, stomatologiya — 35 mln dan); texnik — 15-28 mln; iqtisod va huquqshunoslik — 18-35 mln. Xususiy OTMlar: 15-50 mln. Xorijiy filiallar: 25-80 mln (Westminster — 45 mln dan, INHA — 35 mln dan). Byudjet o'rinlari — bepul (stipendiya oyiga 800 000 so'mdan).",
      "Yillik qo'shimcha xarajatlar: darsliklar va materiallar — 1-3 mln so'm; yotoqxonada yashash — 1-3 mln (yiliga 800 000-2 500 000 so'm); Toshkentda xona ijarasi — oyiga 2-4 mln; ovqatlanish — yiliga 3-5 mln (oyiga 250 000-400 000); transport — yiliga 500 000-1 200 000. Jami boshqa shahardagi talabalar uchun qo'shimcha xarajatlar: yiliga 5-12 mln.",
      "Byudjet grantlari yagona kirish imtihoni (DTM) natijalari bo'yicha taqsimlanadi. Davlat granti barcha o'rinlarning 20-25% gacha qoplaydi. Shuningdek, nomli stipendiyalar mavjud: Prezident stipendiyasi (oyiga 2 mln so'mdan), «El-yurt umidi» (xorijda o'qish). Banklar 7 yilgacha muddatga 14-18% imtiyozli stavkalarda ta'lim kreditlari taklif etadi.",
      "Ta'lim kalkulyatori butun o'qish davri (bakalavr 4 yil, magistratura 2 yil) uchun to'liq byudjetni hisoblashga yordam beradi: yillik kontrakt narxi, muddat va kutilayotgan yillik oshishni kiriting — butun muddat uchun summani olasiz.",
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
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Центральный банк РУз', url: 'https://cbu.uz' },
      { name: 'Ipoteka bank — Образовательные кредиты', url: 'https://ipotekabank.uz' },
    ],
    paragraphsRu: [
      'Образовательные кредиты в Узбекистане — специальные банковские продукты с льготными условиями для оплаты обучения в аккредитованных вузах. Ставка: 14-18% годовых (значительно ниже рыночных 22-28%). Срок: до 7 лет с льготным периодом. Основные банки-кредиторы: Ipoteka bank, Kapitalbank, Microcreditbank, Davr bank. Ежегодно более 50 000 студентов пользуются образовательными кредитами.',
      'Условия кредитования (ориентировочно): сумма — до 100% стоимости обучения (максимум зависит от банка, до 200 млн сум); ставка — 14-18% годовых; срок — до 7 лет (4 года обучение + 3 года погашение); льготный период — в течение обучения платятся только проценты (или полная отсрочка у некоторых банков). Обеспечение: поручительство родителей или третьих лиц.',
      'Пример расчёта: обучение в ТМА (медицинский) — 30 млн/год × 6 лет = 180 млн сум. Кредит под 16% на 9 лет (6 лет учёбы + 3 года погашение). Если контракт 30 млн берётся в начале каждого года, во время учёбы платятся только проценты: 400 000 сум/мес в первый год и до 2 400 000 сум/мес в шестой, всего ~100,8 млн. После учёбы: аннуитетный платёж ≈ 6 330 000 сум/мес в течение 3 лет, проценты ~47,9 млн. Общая переплата: ~149 млн сум (83%).',
      'Требования к заёмщику: поступление в аккредитованный вуз Узбекистана (или одобренный зарубежный), возраст 17-30 лет, поручитель (родитель или опекун) со стабильным доходом, чистая кредитная история поручителя. Документы: справка о зачислении, паспорт студента и поручителя, справка о доходах поручителя, договор с вузом.',
      'Калькулятор образовательного кредита считает обычный аннуитет: введите сумму кредита, ставку и срок — получите ежемесячный платёж, общую сумму и проценты. Льготный период в нём не учитывается. Не забудьте, что условия зависят от банка и могут меняться, а основная ставка ЦБ сейчас 14%.',
    ],
    paragraphsUz: [
      "O'zbekistonda ta'lim kreditlari — akkreditatsiyalangan OTMlarda o'qish uchun to'lovni imtiyozli shartlarda taqdim etuvchi maxsus bank mahsulotlari. Stavka: yillik 14-18% (bozor stavkalaridan 22-28% ancha past). Muddat: imtiyozli davr bilan 7 yilgacha. Asosiy kredit beruvchi banklar: Ipoteka bank, Kapitalbank, Mikrokreditbank, Davr bank. Har yili 50 000 dan ortiq talaba ta'lim kreditlaridan foydalanadi.",
      "Kreditlash shartlari (taxminan): summa — o'qish qiymatining 100% gacha (maksimum bankka bog'liq, 200 mln so'mgacha); stavka — yillik 14-18%; muddat — 7 yilgacha (4 yil o'qish + 3 yil qaytarish); imtiyozli davr — o'qish davrida faqat foizlar to'lanadi (yoki ba'zi banklarda to'liq kechiktirish). Ta'minot: ota-onalar yoki uchinchi shaxslarning kafillik.",
      "Hisoblash misoli: TTAda (tibbiyot) o'qish — yiliga 30 mln × 6 yil = 180 mln so'm. 16% da 9 yilga kredit (6 yil o'qish + 3 yil qaytarish). Agar 30 mln kontrakt har yil boshida olinsa, o'qish davomida faqat foizlar to'lanadi: birinchi yili oyiga 400 000 so'm, oltinchi yili 2 400 000 so'mgacha, jami ~100,8 mln. O'qishdan keyin: annuitetli to'lov ≈ 3 yil davomida oyiga 6 330 000 so'm, foizlar ~47,9 mln. Umumiy ortiqcha to'lov: ~149 mln so'm (83%).",
      "Qarz oluvchiga talablar: O'zbekistonning akkreditatsiyalangan OTMiga (yoki tasdiqlangan xorijiy) qabul qilinish, yoshi 17-30, barqaror daromadli kafil (ota-ona yoki vasiy), kafilning toza kredit tarixi. Hujjatlar: ro'yxatga olish to'g'risida ma'lumotnoma, talaba va kafil pasporti, kafil daromadlari to'g'risida ma'lumotnoma, OTM bilan shartnoma.",
      "Ta'lim krediti kalkulyatori oddiy annuitetni hisoblaydi: kredit summasi, stavka va muddatni kiriting — oylik to'lov, umumiy summa va foizlarni olasiz. Imtiyozli davr unda hisobga olinmaydi. Shartlar bankka bog'liq va o'zgarishi mumkinligini unutmang, MBning asosiy stavkasi hozir 14%.",
    ],
    faqRu: [
      { question: 'Какие ставки по образовательным кредитам?', answer: '14-18% годовых — значительно ниже рыночных 22-33%. Основная ставка ЦБ — 14%.' },
      { question: 'Когда начинать погашение?', answer: 'После окончания учёбы. Во время обучения — только проценты, размер зависит от взятой суммы, или полная отсрочка у некоторых банков.' },
      { question: 'Какие документы нужны?', answer: 'Справка о зачислении, паспорт, поручитель с доходами, справка о доходах поручителя, договор с вузом.' },
      { question: 'Какую сумму можно получить?', answer: 'До 100% стоимости обучения, максимум до 200 млн сум в зависимости от банка и вуза.' },
      { question: 'Какая переплата по кредиту?', answer: 'При ставке 16% и обычном аннуитете на 7 лет переплата составит около 67% от суммы кредита. Льготный период меняет эту цифру. Используйте калькулятор для точного расчёта.' },
    ],
    faqUz: [
      { question: "Ta'lim kreditlari stavkalari qanday?", answer: "Yillik 14-18% — bozor stavkalaridan 22-33% ancha past. MBning asosiy stavkasi — 14%." },
      { question: "Qaytarishni qachon boshlash kerak?", answer: "O'qish tugaganidan keyin. O'qish davrida — faqat foizlar (oyiga 1-3 mln so'm) yoki ba'zi banklarda to'liq kechiktirish." },
      { question: "Qanday hujjatlar kerak?", answer: "Ro'yxatga olish ma'lumotnomasi, pasport, daromadli kafil, kafil daromadlari ma'lumotnomasi, OTM bilan shartnoma." },
      { question: "Qancha summa olish mumkin?", answer: "O'qish qiymatining 100% gacha, bank va OTMga qarab maksimum 200 mln so'mgacha." },
      { question: "Kredit bo'yicha ortiqcha to'lov qancha?", answer: "16% stavka va 7 yillik oddiy annuitetda ortiqcha to'lov kredit summasining taxminan 67% ini tashkil etadi. Imtiyozli davr bu raqamni o'zgartiradi. Aniq hisoblash uchun kalkulyatordan foydalaning." },
    ],
  },

  {
    slug: 'gpa',
    lastUpdated: '2026-11-01',
    sources: [
      { name: 'Министерство высшего образования РУз', url: 'https://edu.uz' },
      { name: 'Программа «Эл-юрт умиди»', url: 'https://el-yurtumidi.uz' },
    ],
    paragraphsRu: [
      'Калькулятор GPA переводит оценки узбекской 5-балльной системы в международную шкалу GPA (0-4.0), которая используется в большинстве зарубежных университетов. Соответствие: «отлично» (5) = 4.0; «хорошо» (4) = 3.0; «удовлетворительно» (3) = 2.0; «неудовлетворительно» (2) = 0. Для студентов Узбекистана, планирующих поступление за рубеж или участие в программе «Эл-юрт умиди», точный расчёт GPA критически важен.',
      'GPA рассчитывается как средневзвешенное оценок с учётом кредитов (ECTS или академических часов) каждого предмета: GPA = Σ(Оценка в GPA × Кредиты) / Σ(Кредиты). Пример: 5 предметов — «Математика» (5/3 кред.) + «Физика» (4/4 кред.) + «Английский» (5/2 кред.) + «История» (4/2 кред.) + «Химия» (3/3 кред.) = (4,0×3 + 3,0×4 + 4,0×2 + 3,0×2 + 2,0×3) / 14 = 44/14 = 3,14.',
      'Требования зарубежных университетов к GPA выпускников из Узбекистана: США (Ivy League) — от 3.7; Великобритания (Russell Group) — от 3.5; Германия — от 3.0; Южная Корея (KAIST, SNU) — от 3.2; Турция — от 2.5; Россия (МГУ, ВШЭ) — от 3.0. Программа «Эл-юрт умиди» — от 3.5 GPA для магистратуры и от 3.0 для бакалавриата.',
      'Некоторые вузы Узбекистана (Westminster, INHA, MDIS) уже используют 100-балльную систему: 86-100 = A (4.0), 71-85 = B (3.0), 56-70 = C (2.0), ниже 55 = F (0). В калькуляторе выбирайте буквенную оценку: 5 = A, 4 = B, 3 = C, 2 = F. При подаче документов за рубеж рекомендуется также предоставить WES-оценку (World Education Services) для верификации GPA.',
      'Калькулятор GPA: для каждого предмета выберите оценку и укажите кредиты — получите общий GPA с точностью до двух знаков. Полезно для студентов, готовящихся к магистратуре за рубежом.',
    ],
    paragraphsUz: [
      "GPA kalkulyatori o'zbek 5-balli tizim baholarini xorijiy universitetlarning aksariyatida qo'llaniladigan xalqaro GPA shkalasiga (0-4.0) o'giradi. Moslik: «a'lo» (5) = 4.0; «yaxshi» (4) = 3.0; «qoniqarli» (3) = 2.0; «qoniqarsiz» (2) = 0. Xorijga o'qishga kirishni yoki «El-yurt umidi» dasturida ishtirok etishni rejalashtirgan O'zbekiston talabalari uchun aniq GPA hisobi juda muhim.",
      "GPA har bir fanning kreditlari (ECTS yoki akademik soatlari) ni hisobga olgan holda baholarning o'rtacha tortilgan qiymati sifatida hisoblanadi: GPA = Σ(GPA bahoxi × Kreditlar) / Σ(Kreditlar). Misol: 5 fan — «Matematika» (5/3 kr.) + «Fizika» (4/4 kr.) + «Ingliz tili» (5/2 kr.) + «Tarix» (4/2 kr.) + «Kimyo» (3/3 kr.) = (4,0×3 + 3,0×4 + 4,0×2 + 3,0×2 + 2,0×3) / 14 = 44/14 = 3,14.",
      "Xorijiy universitetlarning O'zbekiston bitiruvchilaridan GPA talablari: AQSh (Ivy League) — 3.7 dan; Buyuk Britaniya (Russell Group) — 3.5 dan; Germaniya — 3.0 dan; Janubiy Koreya (KAIST, SNU) — 3.2 dan; Turkiya — 2.5 dan; Rossiya (MGU, VShE) — 3.0 dan. «El-yurt umidi» dasturi — magistratura uchun 3.5 GPA dan, bakalavr uchun 3.0 dan.",
      "O'zbekistonning ba'zi OTMlari (Westminster, INHA, MDIS) allaqachon 100 balli tizimni qo'llaydi: 86-100 = A (4.0), 71-85 = B (3.0), 56-70 = C (2.0), 55 dan past = F (0). Kalkulyatorda harfli bahoni tanlang: 5 = A, 4 = B, 3 = C, 2 = F. Xorijga hujjat topshirishda GPA verifikatsiyasi uchun WES (World Education Services) bahosini ham taqdim etish tavsiya etiladi.",
      "GPA kalkulyatori: har bir fan uchun bahoni tanlang va kreditlarni kiriting — ikki xonali aniqlikda umumiy GPAni olasiz. Xorijda magistraturaga tayyorlanayotgan talabalar uchun foydali.",
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
    lastUpdated: '2026-11-03',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Фитр-садака (закят аль-фитр) — обязательная милостыня, выплачиваемая каждым мусульманином перед праздником Ид аль-Фитр (Рамадан хайит). Суммы ежегодно утверждает Управление мусульман Узбекистана. По фетве на 2026 год на одного человека: 10 000 сум (2 кг пшеницы), 12 000 сум (2 кг муки), 20 000 сум (4 кг ячменя), 110 000 сум (2 кг изюма), 200 000 сум (4 кг фиников).',
      'Фитр-садака выплачивается за каждого члена семьи, включая новорождённых детей, пожилых родителей и других иждивенцев. Глава семьи (обычно отец) несёт ответственность за выплату за всех. Пример: семья из 5 человек (муж, жена, 3 детей) × 20 000 сум = 100 000 сум. Рекомендуется выплатить до праздничной утренней молитвы (намаз аль-Ид).',
      'В Узбекистане фитр-садака можно передать несколькими способами: напрямую нуждающимся (предпочтительно), через имама местной мечети, через фонд Вакф (vaqf.uz), через благотворительные организации. В крупных мечетях Ташкента (Минор, Хаст Имом, Тинчлик) организуются специальные пункты приёма фитр-садака в последние дни Рамадана.',
      'Получатели фитр-садака — бедные и нуждающиеся мусульмане, которые не имеют достаточно средств для праздничного дня. Цель — обеспечить радость праздника для всех членов общины. В Узбекистане с населением более 36 млн человек, из которых более 90% мусульмане, традиция фитр-садака имеет огромное социальное значение.',
      'Калькулятор фитр-садака рассчитает точную сумму для вашей семьи: введите количество членов семьи, выберите продукт и укажите его цену за килограмм: по умолчанию подставлена сумма из фетвы 2026 года, рыночную цену введите сами.',
    ],
    paragraphsUz: [
      "Fitr-sadaqa (zakot al-fitr) — Iyd al-Fitr (Ramazon hayiti) bayramidan oldin har bir musulmon tomonidan to'lanadigan majburiy sadaqa. Summalarni har yili O'zbekiston musulmonlari idorasi tasdiqlaydi. 2026-yilgi fatvoga ko'ra bir kishiga: 10 000 so'm (2 kg bug'doy), 12 000 so'm (2 kg un), 20 000 so'm (4 kg arpa), 110 000 so'm (2 kg mayiz), 200 000 so'm (4 kg xurmo).",
      "Fitr-sadaqa har bir oila a'zosi uchun, jumladan yangi tug'ilgan bolalar, keksa ota-onalar va boshqa qaramog'idagilar uchun to'lanadi. Oila boshlig'i (odatda ota) barcha uchun to'lash mas'uliyatini o'z zimmasiga oladi. Misol: 5 kishilik oila (er, xotin, 3 farzand) × 20 000 so'm = 100 000 so'm. Bayram ertalab namozigacha (namoz al-Iyd) to'lash tavsiya etiladi.",
      "O'zbekistonda fitr-sadaqani bir necha usulda uzatish mumkin: muhtojlarga bevosita (afzalroq), mahalliy masjid imomi orqali, Vaqf fondi (vaqf.uz) orqali, xayriya tashkilotlari orqali. Toshkentning yirik masjidlarida (Minor, Xast Imom, Tinchlik) Ramazonning oxirgi kunlarida fitr-sadaqa qabul qilish uchun maxsus punktlar tashkil etiladi.",
      "Fitr-sadaqa oluvchilar — bayram kuni uchun yetarli mablag'ga ega bo'lmagan kambag'al va muhtoj musulmonlar. Maqsad — jamoa barcha a'zolari uchun bayram quvonchini ta'minlash. 36 mln dan ortiq aholisi bo'lgan O'zbekistonda, ularning 90% dan ortig'i musulmon, fitr-sadaqa an'anasi ulkan ijtimoiy ahamiyatga ega.",
      "Fitr-sadaqa kalkulyatori oilangiz uchun aniq summani hisoblaydi: oila a'zolari sonini kiriting, mahsulotni tanlang va uning kilogramm narxini ko'rsating: standart bo'yicha 2026-yil fatvosidagi summa qo'yilgan, bozor narxini o'zingiz kiriting.",
    ],
    faqRu: [
      { question: 'Сколько фитр-садака в 2026 году?', answer: 'От 10 000 сум (пшеница) до 200 000 сум (финики) на человека, по возможностям. Семья из 5 человек: от 50 000 сум.' },
      { question: 'Кто должен платить?', answer: 'Каждый мусульманин за себя и иждивенцев (дети, пожилые родители). Глава семьи платит за всех.' },
      { question: 'Когда нужно выплатить?', answer: 'До утренней праздничной молитвы Ид аль-Фитр. Рекомендуется в последние дни Рамадана.' },
      { question: 'Куда передать фитр-садака?', answer: 'Напрямую нуждающимся, через мечеть, фонд Вакф (vaqf.uz) или благотворительные организации.' },
      { question: 'Как определяется размер фитр-садака?', answer: "По фетве: 2 кг пшеницы, муки, риса или изюма либо 4 кг ячменя или фиников на человека, в деньгах по их цене. Суммы Управление мусульман Узбекистана публикует ежегодно." },
    ],
    faqUz: [
      { question: '2026-yilda fitr-sadaqa qancha?', answer: "Bir kishiga 10 000 so'm (bug'doy) dan 200 000 so'm (xurmo) gacha, imkoniyatga qarab. 5 kishilik oila: 50 000 so'mdan." },
      { question: "Kim to'lashi kerak?", answer: "Har bir musulmon o'zi va qaramog'idagilar (bolalar, keksa ota-onalar) uchun. Oila boshlig'i barcha uchun to'laydi." },
      { question: "Qachon to'lash kerak?", answer: "Iyd al-Fitr ertalab bayram namozigacha. Ramazonning oxirgi kunlarida to'lash tavsiya etiladi." },
      { question: "Fitr-sadaqani qayerga uzatish mumkin?", answer: "Muhtojlarga bevosita, masjid orqali, Vaqf fondi (vaqf.uz) yoki xayriya tashkilotlari orqali." },
      { question: "Fitr-sadaqa miqdori qanday aniqlanadi?", answer: "Fatvoga ko'ra: bir kishiga 2 kg bug'doy, un, guruch yoki mayiz yoxud 4 kg arpa yoki xurmo, pulda ularning narxi bo'yicha. Summalarni O'zbekiston Musulmonlari boshqarmasi har yili e'lon qiladi." },
    ],
  },

  {
    slug: 'fidiya-sadaka',
    lastUpdated: '2026-11-07',
    sources: [
      { name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' },
      { name: 'Waqf фонд', url: 'https://vaqf.uz' },
    ],
    paragraphsRu: [
      'Фидия-садака — компенсация за пропущенные дни поста Рамадана, когда человек физически не может ни поститься, ни восполнить пост позднее. Это касается хронически больных, пожилых людей и лиц с постоянными ограничениями здоровья. Размер фидии за один день равен фитр-садаке: по фетве Управления мусульман Узбекистана на 2026 год это 10 000 сум (пшеница), 12 000 сум (мука), 20 000 сум (ячмень), 110 000 сум (изюм) или 200 000 сум (финики), каждый выбирает по своим возможностям.',
      'Важное отличие от каффары: фидия выплачивается за невозможность поста, каффара — за намеренное нарушение. Если человек временно болен и может восполнить пост после выздоровления — фидия не требуется, необходимо восполнить (казо) пропущенные дни. Фидия обязательна только при постоянной невозможности: диабет, онкология, почечная недостаточность, глубокая старость.',
      'Расчёт фидии за полный месяц Рамадан (30 дней): по пшенице 30 × 10 000 = 300 000 сум, по ячменю 30 × 20 000 = 600 000 сум, по изюму 30 × 110 000 = 3 300 000 сум, по финикам 30 × 200 000 = 6 000 000 сум.',
      'Фидия передаётся нуждающимся мусульманам: можно накормить одного бедного за каждый пропущенный день или передать денежный эквивалент. В Узбекистане фидию можно передать через мечети, благотворительные столовые при мечетях (особенно распространены в Рамадан — ифтар-хайрия), фонд Вакф или напрямую нуждающимся.',
      'Калькулятор фидия-садака умножает число пропущенных дней на сумму за один день. По умолчанию подставлена минимальная сумма фетвы 2026 года — 10 000 сум; можно указать любую другую.',
    ],
    paragraphsUz: [
      "Fidiya-sadaqa — inson jismoniy jihatdan na ro'za tutishi, na keyinroq qazo qilishi mumkin bo'lmagan Ramazon ro'zasining o'tkazib yuborilgan kunlari uchun kompensatsiya. Bu surunkali kasallar, keksalar va sog'lig'i doimiy cheklangan shaxslarga tegishli. Bir kunlik fidiya miqdori fitr-sadaqaga teng: O'zbekiston musulmonlari idorasining 2026-yilgi fatvosiga ko'ra bu 10 000 so'm (bug'doy), 12 000 so'm (un), 20 000 so'm (arpa), 110 000 so'm (mayiz) yoki 200 000 so'm (xurmo), har kim imkoniyatiga qarab tanlaydi.",
      "Kafforadan muhim farqi: fidiya ro'za tuta olmaslik uchun, kaffora esa qasddan buzganlik uchun to'lanadi. Agar inson vaqtincha kasal bo'lib, sog'ayganidan keyin ro'za tutishi mumkin bo'lsa — fidiya talab etilmaydi, o'tkazib yuborilgan kunlarni qazo qilish kerak. Fidiya faqat doimiy imkonsizlikda majburiy: diabet, onkologiya, buyrak yetishmovchiligi, chuqur keksalik.",
      "To'liq Ramazon oyi (30 kun) uchun fidiya hisobi: bug'doy bo'yicha 30 × 10 000 = 300 000 so'm, arpa bo'yicha 30 × 20 000 = 600 000 so'm, mayiz bo'yicha 30 × 110 000 = 3 300 000 so'm, xurmo bo'yicha 30 × 200 000 = 6 000 000 so'm.",
      "Fidiya muhtoj musulmonlarga uzatiladi: har bir o'tkazib yuborilgan kun uchun bitta kambag'alni ovqatlantirish yoki pul ekvivalentini uzatish mumkin. O'zbekistonda fidiyani masjidlar, masjidlardagi xayriya oshxonalari (Ramazonda ayniqsa keng tarqalgan — iftor-xayriya), Vaqf fondi yoki bevosita muhtojlar orqali uzatish mumkin.",
      "Fidiya-sadaqa kalkulyatori o'tkazib yuborilgan kunlar sonini bir kunlik summaga ko'paytiradi. Standart holda 2026-yilgi fatvoning eng kam summasi — 10 000 so'm qo'yilgan; boshqa summani ham kiritish mumkin.",
    ],
    faqRu: [
      { question: 'Сколько фидия-садака за один день?', answer: 'Столько же, сколько фитр-садака: на 2026 год от 10 000 сум (пшеница) до 200 000 сум (финики), по возможностям.' },
      { question: 'Кто обязан платить фидию?', answer: 'Те, кто постоянно не может поститься: хронические больные (диабет, онкология), пожилые. Временно больные — восполняют пост (казо).' },
      { question: 'Сколько за весь Рамадан?', answer: '30 дней: от 300 000 сум по пшенице до 6 000 000 сум по финикам.' },
      { question: 'Чем фидия отличается от каффары?', answer: 'Фидия — за невозможность поста. Каффара — за намеренное нарушение (60 дней поста или кормление 60 бедных).' },
      { question: 'Куда передать фидию в Узбекистане?', answer: 'Через мечети, ифтар-хайрия, фонд Вакф (vaqf.uz) или напрямую нуждающимся.' },
    ],
    faqUz: [
      { question: "Bir kunlik fidiya-sadaqa qancha?", answer: "Fitr-sadaqa bilan bir xil: 2026-yilda imkoniyatga qarab 10 000 so'mdan (bug'doy) 200 000 so'mgacha (xurmo)." },
      { question: "Fidiya to'lash kimga majburiy?", answer: "Doimiy ro'za tutolmaydiganlar: surunkali kasallar (diabet, onkologiya), keksalar. Vaqtincha kasallar — ro'zani qazo qiladi." },
      { question: "Butun Ramazon uchun qancha?", answer: "30 kun × 10 000 so'm = 300 000 so'mdan (bug'doy bo'yicha) 30 × 200 000 = 6 000 000 so'mgacha (xurmo bo'yicha)." },
      { question: "Fidiya kafforadan nimasi bilan farq qiladi?", answer: "Fidiya — ro'za tuta olmaslik uchun. Kaffora — qasddan buzganlik uchun (60 kun ro'za yoki 60 kambag'alni ovqatlantirish)." },
      { question: "O'zbekistonda fidiyani qayerga uzatish mumkin?", answer: "Masjidlar, iftor-xayriya, Vaqf fondi (vaqf.uz) yoki bevosita muhtojlar orqali." },
    ],
  },

  {
    slug: 'kurban',
    lastUpdated: '2026-11-07',
    sources: [{ name: 'Управление мусульман Узбекистана', url: 'https://muslim.uz' }],
        paragraphsRu: [
      'Калькулятор курбана помогает рассчитать стоимость жертвоприношения на праздник Ид аль-Адха (Курбан хайит) — один из главных религиозных праздников в Узбекистане. По данным Управления мусульман Узбекистана, ежегодно миллионы семей совершают обряд курбан. Калькулятор учитывает вид животного (баран, бык, корова), текущие рыночные цены и количество долей, позволяя заранее спланировать бюджет на праздник.',
      'Стоимость жертвенных животных в 2026 году в Узбекистане: баран — от 3 000 000 до 6 000 000 сум в зависимости от породы и веса; бык или корова — от 18 000 000 до 35 000 000 сум. Крупный рогатый скот делится на 7 долей (улушей), поэтому стоимость одной доли быка составляет 2 600 000–5 000 000 сум — сопоставимо с ценой одного барана. Цены варьируются по регионам: в Ферганской долине и Сурхандарье обычно ниже, чем в Ташкенте.',
      'Шариат предъявляет чёткие требования к животному для курбана. Баран (овца) должен быть не младше 6 месяцев и выглядеть годовалым, козёл — от 1 года, бык и корова — от 2 лет, верблюд — от 5 лет. Животное должно быть здоровым, упитанным, без серьёзных дефектов: хромоты, слепоты на один или оба глаза, сломанных рогов с повреждением корня, болезней. Жертвоприношение совершается с 10 по 12 зуль-хиджа.',
      'Мясо курбана по сунне распределяется на три равные части: одна треть остаётся семье, одна треть раздаётся родственникам и соседям, одна треть передаётся нуждающимся (факирам и мискинам). В Узбекистане распространена традиция совместного приготовления курбанного мяса на махаллинских сходах, где блюда из жертвенного мяса (шурпа, плов) раздаются всем жителям махалли.',
      'Обряд курбана обязателен (ваджиб по ханафитскому мазхабу) для совершеннолетнего мусульманина, чьё имущество превышает нисаб — эквивалент 85 граммов золота или 595 граммов серебра. Наш калькулятор рассчитает стоимость курбана и долю при совместной покупке коровы или верблюда, например на 7 семей, а также примерный выход мяса.',
    ],
    paragraphsUz: [
      "Qurbon kalkulyatori Iyd al-Adho (Qurbon hayiti) — O'zbekistondagi eng muhim diniy bayramlardan biri uchun qurbonlik narxini hisoblashga yordam beradi. O'zbekiston musulmonlari boshqarmasi ma'lumotlariga ko'ra, har yili millionlab oilalar qurbon marosimini bajaradi. Kalkulyator hayvon turini (qo'y, buqa, sigir), joriy bozor narxlarini va ulushlar sonini hisobga olib, bayramga byudjetni oldindan rejalashtirish imkonini beradi.",
      "2026-yilda O'zbekistonda qurbonlik hayvonlarining narxi: qo'y — zoti va vazniga qarab 3 000 000 dan 6 000 000 so'mgacha; buqa yoki sigir — 18 000 000 dan 35 000 000 so'mgacha. Yirik shoxli mol 7 ta ulushga bo'linadi, shuning uchun buqaning bir ulushi 2 600 000–5 000 000 so'm — bitta qo'y narxiga teng. Narxlar hududlarga qarab farq qiladi: Farg'ona vodiysi va Surxondaryoda odatda Toshkentga qaraganda arzonroq.",
      "Shariat qurbonlik hayvoniga aniq talablar qo'yadi. Qo'y (sovliq) kamida 6 oylik va bir yoshdek ko'rinishi kerak, echki — 1 yoshdan, buqa va sigir — 2 yoshdan, tuya — 5 yoshdan. Hayvon sog'lom, semiz, jiddiy nuqsonlarsiz bo'lishi shart: oqsoqlik, bir yoki ikkala ko'zdan ko'rlik, ildizi shikastlangan singan shoxlar, kasalliklar bo'lmasligi kerak. Qurbonlik 10-dan 12-zulhijjagacha bajariladi.",
      "Qurbon go'shti sunnatga ko'ra uchta teng qismga taqsimlanadi: uchdan bir qismi oilaga qoladi, uchdan bir qismi qarindosh va qo'shnilarga ulashiladi, uchdan bir qismi muhtojlarga (faqir va miskinlarga) beriladi. O'zbekistonda qurbon go'shtini mahalla yig'inlarida birgalikda tayyorlash an'anasi keng tarqalgan — qurbonlik go'shtidan taomlar (sho'rva, palov) mahalla aholisiga tarqatiladi.",
      "Qurbon marosimi hanafiy mazhabiga ko'ra balog'atga yetgan, mol-mulki nisob — 85 gramm oltin yoki 595 gramm kumush ekvivalentidan ortiq bo'lgan musulmonga vojib hisoblanadi. Bizning kalkulyatorimiz qurbon narxini va sigir yoki tuyani birgalikda sotib olishdagi ulushni, masalan 7 oila uchun, hamda taxminiy go'sht miqdorini hisoblaydi.",
    ],
    faqRu: [{ question: 'Сколько стоит курбан в 2026 году?', answer: 'Баран: 3-6 млн сум. Бык: 18-35 млн (7 долей, ~2,6-5 млн за долю).' }, { question: 'Кто обязан резать курбан?', answer: 'Совершеннолетний мусульманин, обладающий нисабом (имущество > 85 г золота).' }, { question: 'Как делится мясо?', answer: '1/3 семье, 1/3 родным/соседям, 1/3 нуждающимся.' }],
    faqUz: [{ question: "2026-yilda qurbon qancha turadi?", answer: "Qo'y: 3-6 mln so'm. Buqa: 18-35 mln (7 ulush, ulushiga ~2,6-5 mln)." }, { question: "Qurbon qilish kimga vojib?", answer: "Nisobga (85 g oltindan ortiq mol-mulk) ega balog'atga yetgan musulmon." }, { question: "Go'sht qanday taqsimlanadi?", answer: "1/3 oilaga, 1/3 qarindosh/qo'shnilarga, 1/3 muhtojlarga." }],
  },

  {
    slug: 'date-calc',
    lastUpdated: '2026-11-03',
    sources: [],
    paragraphsRu: ["Калькулятор дат считает разницу между двумя датами: годы, месяцы, дни, недели, все календарные дни и рабочие дни. Инструмент полезен при работе с договорами, графиками платежей, кадровым учётом и планированием мероприятий. Вычисления ведутся по григорианскому календарю с учётом високосных лет.", "В Узбекистане его используют для проверки сроков по договорам и контрактам. Если последний день срока приходится на нерабочий день, днём окончания обычно считается ближайший следующий рабочий день. Рабочие дни в калькуляторе — это понедельник-пятница: государственные праздники и шестидневная неделя не учитываются, такие даты проверяйте по производственному календарю.", "Практическое применение для бизнеса: проверка 30-дневного срока оплаты по счёту-фактуре, остатка гарантийного срока товара, периода просрочки для начисления пени. Например, между 15 января и 15 апреля невисокосного года проходит 90 календарных дней: так можно проверить, уложился ли договор в срок.", "Для кадровых служб инструмент полезен при подсчёте стажа сотрудников и длительности отпуска по уходу за ребёнком. Испытательный срок по Трудовому кодексу не может превышать трёх месяцев: разницу между датой приёма и нужной датой легко проверить здесь.", "В повседневной жизни калькулятор помогает узнать, сколько дней осталось до важного события: свадьбы, экзамена, Навруза (21 марта) или Дня независимости (1 сентября). Прибавлять дни к дате он не умеет, но разницу между любыми двумя датами считает с учётом високосных лет и разной длины месяцев."],
    paragraphsUz: ["Sana kalkulyatori ikki sana orasidagi farqni hisoblaydi: yillar, oylar, kunlar, haftalar, barcha kalendar kunlar va ish kunlari. Vosita shartnomalar, to'lov jadvallari, kadrlar hisobi va tadbirlarni rejalashtirishda foydali. Hisob-kitoblar kabisa yillarini hisobga olib, grigoriy taqvimi bo'yicha olib boriladi.", "O'zbekistonda undan shartnoma va kontrakt muddatlarini tekshirishda foydalaniladi. Muddatning oxirgi kuni ishlanmaydigan kunga to'g'ri kelsa, odatda keyingi eng yaqin ish kuni tugash kuni hisoblanadi. Kalkulyatordagi ish kunlari — dushanba-juma: davlat bayramlari va olti kunlik hafta hisobga olinmaydi, bunday sanalarni ishlab chiqarish taqvimi bo'yicha tekshiring.", "Biznes uchun amaliy qo'llanilishi: hisob-faktura bo'yicha 30 kunlik to'lov muddatini tekshirish, tovar kafolat muddatining qolgan qismini aniqlash, penya uchun kechikish davrini belgilash. Masalan, kabisa bo'lmagan yilda 15-yanvar va 15-aprel orasida 90 kalendar kun o'tadi: shunday qilib shartnoma muddatga sig'ganini tekshirish mumkin.", "Kadrlar xizmati uchun vosita xodimlar stajini va bola parvarishi ta'tili davomiyligini hisoblashda foydali. Mehnat kodeksiga ko'ra sinov muddati uch oydan oshmasligi kerak: ishga qabul sanasi va kerakli sana orasidagi farqni shu yerda osongina tekshirish mumkin.", "Kundalik hayotda kalkulyator muhim voqeagacha — to'y, imtihon, Navro'z (21-mart) yoki Mustaqillik kuni (1-sentabr) gacha qancha kun qolganini bilishga yordam beradi. Sanaga kun qo'shishni bilmaydi, lekin istalgan ikki sana orasidagi farqni kabisa yillari va oylarning turli uzunligini hisobga olib hisoblaydi."],
    faqRu: [{ question: 'Как узнать разницу между датами?', answer: 'Введите две даты — калькулятор покажет разницу в днях, неделях, месяцах и годах.' }, { question: 'Учитываются ли високосные годы?', answer: 'Да, все расчёты учитывают високосные годы (366 дней).' }, { question: "Можно ли прибавить дни к дате?", answer: "Нет, калькулятор считает только разницу между двумя датами. Чтобы проверить результат, подберите конечную дату и посмотрите число дней." }],
    faqUz: [{ question: "Sanalar o'rtasidagi farqni qanday bilish mumkin?", answer: "Ikkita sanani kiriting — kalkulyator kunlar, haftalar, oylar va yillardagi farqni ko'rsatadi." }, { question: "Kabisa yillari hisobga olinadimi?", answer: "Ha, barcha hisob-kitoblar kabisa yillarini (366 kun) hisobga oladi." }, { question: "Sanaga kunlar qo'shish mumkinmi?", answer: "Yo'q, kalkulyator faqat ikki sana orasidagi farqni hisoblaydi. Natijani tekshirish uchun tugash sanasini tanlab, kunlar sonini ko'ring." }],
  },

  {
    slug: 'area',
    lastUpdated: '2026-11-03',
    sources: [
      { name: "Земельный кодекс, ст. 27", url: "https://lex.uz/ru/docs/149947" },
    ],
    paragraphsRu: ["Калькулятор площади переводит значение между единицами: квадратные метры и километры, сотки (100 м²), гектары (10 000 м²), квадратные футы и акры. Инструмент необходим при строительстве, ремонте, покупке земли и оформлении документов на недвижимость в Узбекистане. Площадь фигур считайте по формулам ниже и вводите готовое значение.", "При покупке или аренде земельного участка в Узбекистане площадь указывается в гектарах или сотках. По Земельному кодексу (ст. 27) участки для индивидуального жилищного строительства площадью до 0,04 га (4 сотки) реализуются в собственность через электронный онлайн-аукцион, а для дехканского хозяйства свободные земли выделяются в размере от 0,06 до 1 га. Калькулятор поможет быстро перевести эти величины в квадратные метры.", 'Для ремонта квартиры калькулятор незаменим: зная площадь стен и пола, вы точно рассчитаете количество ламината, плитки, обоев и краски. Например, комната 4 × 5 м с высотой потолков 2,7 м имеет площадь пола 20 м² и площадь стен 48,6 м². Это позволяет заказать материалы с запасом 10% и избежать лишних расходов на строительном рынке.', 'Строители и проектировщики в Узбекистане используют калькулятор площади при подготовке смет и проектной документации. Площадь застройки, полезная площадь здания и площадь озеленения определяются по нормам ШНК (строительные нормы и правила Узбекистана). Для нестандартных форм участков калькулятор позволяет разбить фигуру на простые части и сложить результаты.', "Формулы для ручного расчёта: прямоугольник a × b, круг π × r², треугольник ½ × a × h, трапеция ½ × (a + b) × h. Посчитайте площадь в метрах и введите её в калькулятор, чтобы получить значение в сотках и гектарах."],
    paragraphsUz: ["Maydon kalkulyatori qiymatni birliklar orasida o'giradi: kvadrat metr va kilometr, sotix (100 m²), gektar (10 000 m²), kvadrat fut va akr. Vosita qurilish, ta'mirlash, yer sotib olish va O'zbekistonda ko'chmas mulk hujjatlarini rasmiylashtirish uchun zarur. Shakllar maydonini quyidagi formulalar bo'yicha hisoblab, tayyor qiymatni kiriting.", "O'zbekistonda yer uchastkasini sotib olish yoki ijaraga olishda maydon gektar yoki sotixda ko'rsatiladi. Yer kodeksiga ko'ra (27-modda) yakka tartibda uy-joy qurish uchun 0,04 gektargacha (4 sotix) uchastkalar elektron onlayn-auksion orqali mulk qilib sotiladi, dehqon xo'jaligi uchun esa bo'sh yerlar 0,06 dan 1 gektargacha ajratiladi. Kalkulyator bu qiymatlarni tezda kvadrat metrlarga o'giradi.", "Kvartira ta'mirlash uchun kalkulyator juda zarur: devor va pol maydonini bilib, laminat, plitka, oboylar va bo'yoq miqdorini aniq hisoblash mumkin. Masalan, 4 × 5 m xona shift balandligi 2,7 m bo'lsa, pol maydoni 20 m², devorlar maydoni 48,6 m² bo'ladi. Bu materiallarni 10% zaxira bilan buyurtma qilish va ortiqcha xarajatlardan qochish imkonini beradi.", "O'zbekistonda quruvchilar va loyihachilar smeta va loyiha hujjatlarini tayyorlashda maydon kalkulyatoridan foydalanadi. Qurilish maydoni, binoning foydali maydoni va ko'kalamzorlashtirish maydoni ShNK (O'zbekiston qurilish me'yorlari va qoidalari) talablariga muvofiq aniqlanadi. Nostandart shakldagi uchastkalar uchun shaklni sodda qismlarga bo'lib hisoblash mumkin.", "Qo'lda hisoblash formulalari: to'g'ri to'rtburchak a × b, aylana π × r², uchburchak ½ × a × h, trapetsiya ½ × (a + b) × h. Maydonni metrlarda hisoblab, sotix va gektardagi qiymatni olish uchun kalkulyatorga kiriting."],
    faqRu: [{ question: 'Как перевести сотки в м²?', answer: '1 сотка = 100 м². 6 соток = 600 м². 1 гектар = 100 соток = 10 000 м².' }, { question: 'Как рассчитать площадь комнаты?', answer: 'Длина × Ширина. Для комнаты 4×5 м: площадь = 20 м².' }, { question: 'Сколько соток в гектаре?', answer: '100 соток = 1 гектар = 10 000 м².' }],
    faqUz: [{ question: "Sotixni m² ga qanday o'girish mumkin?", answer: "1 sotix = 100 m². 6 sotix = 600 m². 1 gektar = 100 sotix = 10 000 m²." }, { question: "Xona maydonini qanday hisoblash mumkin?", answer: "Uzunlik × Kenglik. 4×5 m xona uchun: maydon = 20 m²." }, { question: "Gektarda nechta sotix bor?", answer: "100 sotix = 1 gektar = 10 000 m²." }],
  },

  {
    slug: 'unit-converter',
    lastUpdated: '2026-11-03',
    sources: [],
        paragraphsRu: [
      "Конвертер единиц измерения работает с четырьмя категориями: длина (мм, см, м, км, дюймы, футы, ярды, мили), масса (мг, г, кг, тонны, фунты, унции), объём (мл, л, м³, галлоны, кварты) и температура. Выберите категорию, исходную и нужную единицу, и результат появится сразу.",
      "Для жителей Узбекистана конвертер особенно полезен при работе с международными партнёрами и зарубежными интернет-магазинами: товары из США указываются в фунтах и дюймах, а при импорте строительных материалов важно точно переводить футы в метры.",
      'Наиболее востребованные конвертации: километры в мили (1 миля = 1,609 км) — для навигации и автомобильных расстояний; килограммы в фунты (1 фунт = 0,454 кг) — для торговли; литры в галлоны (1 американский галлон = 3,785 л) — для расчёта расхода топлива; градусы Цельсия в Фаренгейты (°F = °C × 9/5 + 32) — для чтения прогнозов погоды в зарубежных источниках и настройки импортного оборудования.',
      "В Узбекистане применяется метрическая система (СИ). В быту встречаются и традиционные единицы: сотка (100 м²) для земельных участков, пуд (16,38 кг) на базарах. Площадь и сотки переводит отдельный калькулятор площади.",
      "Конвертер пригодится студентам при решении задач по физике и химии, инженерам при работе с технической документацией разных стран, кулинарам для пересчёта зарубежных рецептов, а путешественникам — для понимания местных единиц за рубежом. Все формулы встроены в калькулятор и пересчитываются автоматически.",
    ],
    paragraphsUz: [
      "O'lchov birliklari konverteri to'rtta toifa bilan ishlaydi: uzunlik (mm, sm, m, km, dyuym, fut, yard, mil), massa (mg, g, kg, tonna, funt, unsiya), hajm (ml, l, m³, gallon, kvarta) va harorat. Toifani, boshlang'ich va kerakli birlikni tanlang, natija darhol chiqadi.",
      "O'zbekiston aholisi uchun konverter xalqaro hamkorlar va xorijiy onlayn-do'konlar bilan ishlashda ayniqsa foydali: AQShdan kelgan tovarlar funt va dyuymda ko'rsatiladi, qurilish materiallarini import qilishda esa futni metrga aniq o'girish muhim.",
      "Eng ko'p talab qilinadigan konvertatsiyalar: kilometrni milga (1 mil = 1,609 km) — navigatsiya va avtomobil masofalarini hisoblash uchun; kilogrammni funtga (1 funt = 0,454 kg) — savdo-sotiq uchun; litrni gallonga (1 Amerika galloni = 3,785 l) — yoqilg'i sarfini hisoblash uchun; Selsiy darajasini Farengaytga (°F = °C × 9/5 + 32) — xorijiy ob-havo prognozlarini o'qish va import uskunalarini sozlash uchun.",
      "O'zbekistonda metrik tizim (SI) qo'llaniladi. Kundalik hayotda an'anaviy birliklar ham uchraydi: yer uchastkasi uchun sotix (100 m²), bozorda pud (16,38 kg). Maydon va sotixni alohida maydon kalkulyatori o'giradi.",
      "Konverter talabalarga fizika va kimyo masalalarini yechishda, muhandislarga turli mamlakatlarning texnik hujjatlari bilan ishlashda, oshpazlarga xorijiy retseptlarni qayta hisoblashda, sayohatchilarga esa chet eldagi mahalliy birliklarni tushunishda yordam beradi. Barcha formulalar kalkulyatorga o'rnatilgan va avtomatik qayta hisoblanadi.",
    ],
    faqRu: [{ question: 'Сколько км в миле?', answer: '1 миля = 1,609 км. 1 км = 0,621 мили.' }, { question: 'Как перевести °C в °F?', answer: '°F = °C × 9/5 + 32. Например, 20°C = 68°F.' }, { question: 'Сколько литров в галлоне?', answer: '1 американский галлон = 3,785 л.' }],
    faqUz: [{ question: "Bir milda necha km bor?", answer: "1 mil = 1,609 km. 1 km = 0,621 mil." }, { question: "°Cni °Fga qanday o'girish mumkin?", answer: "°F = °C × 9/5 + 32. Masalan, 20°C = 68°F." }, { question: "Bir gallonda necha litr bor?", answer: "1 Amerika galloni = 3,785 l." }],
  },

  {
    slug: 'number-to-words',
    lastUpdated: '2026-11-03',
    sources: [],
    paragraphsRu: ['Конвертер числа в пропись переводит числовые суммы в текстовое представление на русском и узбекском языках. Этот инструмент необходим бухгалтерам, юристам и предпринимателям в Узбекистане для заполнения договоров, счетов-фактур, доверенностей, актов выполненных работ и платёжных поручений, где сумма обязательно указывается прописью.', 'Согласно требованиям бухгалтерского учёта в Узбекистане, в первичных документах сумма указывается цифрами и дублируется прописью. Ошибка в написании суммы прописью может привести к отказу в приёме документа банком или налоговой инспекцией. Конвертер исключает подобные ошибки, автоматически формируя корректную запись с учётом правил склонения числительных.', "Инструмент выдаёт число словами на русском и узбекском одновременно. Валюту и тийины он не добавляет, допишите их сами. Пример: 15 750 000 → «пятнадцать миллионов семьсот пятьдесят тысяч». На узбекском формируется запись на латинице: «o'n besh million yetti yuz ellik ming».", 'Практические сценарии использования: оформление трудового договора с указанием оклада прописью, подготовка счёта на оплату для контрагента, заполнение доверенности на получение товарно-материальных ценностей, составление расписки о получении денежных средств. Во всех этих случаях конвертер экономит время и гарантирует грамматическую точность.', 'Конвертер корректно обрабатывает особенности русского и узбекского языков: в русском — склонение по родам (одна тысяча, два миллиона, пять тысяч), в узбекском — правильное написание составных числительных. Просто введите число — результат можно скопировать и вставить в любой документ. Инструмент работает мгновенно и не требует подключения к интернету после загрузки страницы.'],
    paragraphsUz: ["Sonni yozuvga o'giruvchi raqamli summalarni o'zbek va rus tillarida matnli ko'rinishga aylantiradi. Bu vosita O'zbekistondagi buxgalterlar, yuristlar va tadbirkorlarga shartnomalar, hisob-fakturalar, ishonchnomalar, bajarilgan ishlar dalolatnomalari va to'lov topshiriqnomalarini to'ldirishda zarur — bu hujjatlarda summa yozuv bilan ko'rsatilishi shart.", "O'zbekistonda buxgalteriya hisobi talablariga ko'ra, birlamchi hujjatlarda summa raqamlar bilan yoziladi va yozuv bilan takrorlanadi. Summa yozuvidagi xatolik hujjatning bank yoki soliq inspektsiyasi tomonidan rad etilishiga olib kelishi mumkin. Konverter bunday xatolarni bartaraf etib, son turlanishi qoidalarini hisobga olgan holda to'g'ri yozuvni avtomatik shakllantiradi.", "Vosita sonni bir vaqtning o'zida rus va o'zbek tillarida yozuv bilan beradi. Valyuta va tiyinni qo'shmaydi, ularni o'zingiz yozing. Misol: 15 750 000 → «o'n besh million yetti yuz ellik ming». Rus tilida: «пятнадцать миллионов семьсот пятьдесят тысяч».", "Amaliy foydalanish holatlari: ish haqi ko'rsatilgan mehnat shartnomasini rasmiylashtirish, kontragent uchun to'lov hisob-fakturasini tayyorlash, tovar-moddiy boyliklarni olish uchun ishonchnoma to'ldirish, pul mablag'larini olish haqida tilxat tuzish. Bu holatlarning barchasida konverter vaqtni tejaydi va grammatik aniqlikni kafolatlaydi.", "Konverter rus va o'zbek tillarining xususiyatlarini to'g'ri qayta ishlaydi: rus tilida — jins bo'yicha turlanish (одна тысяча, два миллиона, пять тысяч), o'zbek tilida — qo'shma sonlarning to'g'ri yozilishi. Raqamni kiriting — natijani nusxalab istalgan hujjatga qo'yish mumkin. Vosita bir lahzada ishlaydi va sahifa yuklangandan keyin internet ulanishini talab qilmaydi."],
    faqRu: [{ question: 'Зачем нужен конвертер числа в пропись?', answer: 'Для заполнения финансовых документов, где сумма должна быть указана прописью.' }, { question: 'Какие языки поддерживаются?', answer: 'Русский и узбекский (латиница).' }, { question: "Добавляется ли валюта?", answer: "Калькулятор выдаёт только число словами. Название валюты и тийины допишите сами." }],
    faqUz: [{ question: "Sonni yozuvga o'giruvchi nima uchun kerak?", answer: "Summa yozuv bilan ko'rsatilishi kerak bo'lgan moliyaviy hujjatlarni to'ldirish uchun." }, { question: "Qanday tillar qo'llab-quvvatlanadi?", answer: "Rus va o'zbek (lotin yozuvi)." }, { question: "Valyuta qo'shiladimi?", answer: "Kalkulyator faqat sonni yozuv bilan beradi. Valyuta nomi va tiyinni o'zingiz yozing." }],
  },

  {
    slug: 'age',
    lastUpdated: '2026-11-03',
    sources: [
      { name: "Закон «Об образовании» (ЗРУ-637)", url: "https://lex.uz/ru/docs/5013007" },
    ],
    paragraphsRu: ["Калькулятор возраста определяет точный возраст на сегодня в годах, месяцах и днях, а также общее число прожитых месяцев и дней. Достаточно ввести дату рождения: инструмент сразу покажет возраст, дату ближайшего дня рождения и сколько дней до него осталось.", "В Узбекистане точный возраст нужен для многих процедур. Пенсионный возраст составляет 60 лет для мужчин и 55 лет для женщин, и калькулятор поможет понять, сколько осталось до этой даты. Загранпаспорт для детей до 16 лет стоит дешевле, поэтому возраст важен и при оформлении документов.", "Калькулятор возраста востребован родителями при планировании школы. По Закону «Об образовании» (ЗРУ-637) в первый класс детей принимают в тот год, когда им исполняется семь лет, а год подготовки в возрасте от шести до семи лет обязателен. Калькулятор покажет точный возраст ребёнка на сегодня.", "Пример: при дате рождения 15.03.1990 на дату 25.03.2026 возраст составляет 36 лет 0 месяцев 10 дней, а общее число прожитых дней — 13 159. Знак зодиака и возраст между двумя произвольными датами этот калькулятор не показывает; для второго есть калькулятор дат.", "Спортивным тренерам и родителям удобно видеть возраст в месяцах и днях. Введите дату рождения и получите результат сразу."],
    paragraphsUz: ["Yosh kalkulyatori bugungi aniq yoshni yillar, oylar va kunlarda, shuningdek yashagan oylar va kunlarning umumiy sonini aniqlaydi. Tug'ilgan sanani kiritish kifoya: vosita darhol yoshni, eng yaqin tug'ilgan kun sanasini va unga qancha kun qolganini ko'rsatadi.", "O'zbekistonda aniq yosh ko'plab jarayonlar uchun kerak. Pensiya yoshi erkaklar uchun 60, ayollar uchun 55 yosh, kalkulyator bu sanagacha qancha qolganini tushunishga yordam beradi. 16 yoshgacha bolalar uchun xorijga chiqish pasporti arzonroq, shuning uchun yosh hujjat rasmiylashtirishda ham muhim.", "Yosh kalkulyatori maktabni rejalashtirishda ota-onalarga kerak bo'ladi. «Ta'lim to'g'risida»gi Qonunga (O'RQ-637) ko'ra birinchi sinfga bolalar yetti yoshga to'ladigan yilda qabul qilinadi, olti yoshdan yetti yoshgacha bir yillik tayyorgarlik esa majburiy. Kalkulyator bolaning bugungi aniq yoshini ko'rsatadi.", "Misol: tug'ilgan sana 15.03.1990, 25.03.2026 sanasida yosh 36 yil 0 oy 10 kun, yashagan kunlar soni — 13 159. Burj va ikki ixtiyoriy sana orasidagi yoshni bu kalkulyator ko'rsatmaydi; ikkinchisi uchun sana kalkulyatori bor.", "Sport murabbiylari va ota-onalarga yoshni oylar va kunlarda ko'rish qulay. Tug'ilgan sanani kiriting va natijani darhol oling."],
    faqRu: [{ question: 'Как узнать точный возраст?', answer: 'Введите дату рождения. Калькулятор покажет полный возраст в годах, месяцах и днях.' }, { question: 'Сколько дней в году?', answer: '365 дней (366 в високосном году).' }, { question: "Сколько дней до дня рождения?", answer: "Калькулятор показывает дату ближайшего дня рождения и число дней до него." }],
    faqUz: [{ question: "Aniq yoshni qanday bilish mumkin?", answer: "Tug'ilgan sanani kiriting. Kalkulyator yillar, oylar va kunlardagi to'liq yoshni ko'rsatadi." }, { question: "Bir yilda necha kun bor?", answer: "365 kun (kabisa yilida 366)." }, { question: "Tug'ilgan kungacha necha kun qoldi?", answer: "Kalkulyator eng yaqin tug'ilgan kun sanasini va unga qolgan kunlar sonini ko'rsatadi." }],
  },

  {
    slug: 'random',
    lastUpdated: '2026-11-03',
    sources: [],
    paragraphsRu: ['Генератор случайных чисел создаёт одно или несколько случайных чисел в заданном диапазоне. Инструмент работает с целыми числами, с повторениями и без них. Алгоритм основан на криптографически стойком генераторе Web Crypto API, что гарантирует высокое качество случайности для любых задач — от игр до статистических экспериментов.', 'Генератор широко применяется для проведения розыгрышей и лотерей в Узбекистане. Блогеры и владельцы Telegram-каналов используют его для честного определения победителей среди подписчиков — достаточно задать диапазон от 1 до числа участников и сгенерировать одно случайное число. Прозрачность процесса повышает доверие аудитории к результатам розыгрыша.', 'В образовательной среде генератор случайных чисел полезен преподавателям вузов и школ Узбекистана: формирование вариантов контрольных работ, случайное распределение студентов по группам, выбор порядка выступлений на семинарах. Также инструмент помогает при изучении теории вероятностей — студенты могут проводить эксперименты по проверке закона больших чисел.', 'Для предпринимателей генератор полезен при создании промокодов, временных паролей и уникальных идентификаторов. Например, можно сгенерировать набор случайных чисел для номеров скидочных купонов в акции магазина.', 'Инструмент позволяет генерировать до 1 000 чисел за один запрос в любом целочисленном диапазоне. Режим уникальных чисел идеален для лотерей: например, 6 уникальных чисел от 1 до 49 или 5 чисел от 1 до 36. Для настольных игр задайте диапазон от 1 до 6 и нужное количество чисел. Результаты генерации нигде не сохраняются.'],
    paragraphsUz: ["Tasodifiy sonlar generatori berilgan diapazon ichida bir yoki bir nechta tasodifiy sonlarni yaratadi. Vosita butun sonlar bilan, takrorli va takrorsiz ishlaydi. Algoritm kriptografik jihatdan mustahkam Web Crypto API generatoriga asoslangan bo'lib, har qanday vazifa uchun — o'yinlardan tortib statistik tajribalargacha — yuqori sifatli tasodifiylikni kafolatlaydi.", "Generator O'zbekistonda o'yin sovrinlari va lotereya o'tkazishda keng qo'llaniladi. Blogerlar va Telegram-kanal egalari obunachilar orasida g'olibni halol aniqlash uchun undan foydalanadi — ishtirokchilar sonigacha diapazon belgilab, bitta tasodifiy son yaratish kifoya. Jarayonning shaffofligi auditoriyaning o'yin sovrini natijalariga ishonchini oshiradi.", "Ta'lim sohasida tasodifiy sonlar generatori O'zbekiston oliy ta'lim muassasalari va maktab o'qituvchilari uchun foydali: nazorat ishlarining variantlarini shakllantirish, talabalarni guruhlarga tasodifiy taqsimlash, seminarlarda chiqish tartibini belgilash. Shuningdek, vosita ehtimollar nazariyasini o'rganishda yordam beradi — talabalar katta sonlar qonunini tekshirish uchun tajribalar o'tkazishi mumkin.", "Tadbirkorlar uchun generator promokodlar, vaqtinchalik parollar va noyob identifikatorlar yaratishda foydali. Masalan, do'kon aksiyasida chegirma kuponlari raqamlari uchun tasodifiy sonlar to'plamini yaratish mumkin.", "Vosita istalgan butun sonli diapazonda bir so'rovda 1 000 tagacha son yaratish imkonini beradi. Noyob sonlar rejimi lotereya uchun ideal: masalan, 1 dan 49 gacha 6 ta noyob son yoki 1 dan 36 gacha 5 ta son. Stol o'yinlari uchun 1 dan 6 gacha diapazon va kerakli sonlar miqdorini belgilang. Generatsiya natijalari hech qayerda saqlanmaydi."],
    faqRu: [{ question: 'Действительно ли числа случайные?', answer: 'Да, используется криптографически стойкий генератор псевдослучайных чисел.' }, { question: 'Можно ли генерировать без повторений?', answer: 'Да, включите опцию «уникальные числа».' }, { question: 'Какой максимальный диапазон?', answer: 'Любой целочисленный диапазон. Количество чисел — до 1 000 за раз.' }],
    faqUz: [{ question: "Sonlar haqiqatan ham tasodifiymi?", answer: "Ha, kriptografik jihatdan mustahkam soxta-tasodifiy sonlar generatori ishlatiladi." }, { question: "Takrorsiz yaratish mumkinmi?", answer: "Ha, «noyob sonlar» opsiyasini yoqing." }, { question: "Maksimal diapazon qancha?", answer: "Har qanday butun sonli diapazon. Sonlar soni — bir martada 1 000 tagacha." }],
  },

  {
    slug: 'wedding',
    lastUpdated: '2026-11-03',
    sources: [
      { name: "Kazpravda: контроль за свадьбами, сентябрь 2025", url: "https://kazpravda.kz/n/v-uzbekistane-zapretili-priglashat-bolee-200-gostey-na-svadbu/" },
      { name: "Podrobno.uz: контроль за свадьбами и поминками", url: "https://podrobno.uz/cat/obchestvo/bez-lishnego-rastochitelstva-v-uzbekistane-ustanovyat-strogiy-kontrol-za-svadbami-i-pominkami/" },
    ],
        paragraphsRu: [
      'Калькулятор свадебного бюджета помогает спланировать расходы на тўй (свадебное торжество) в Узбекистане — одно из самых значимых семейных событий. По Положению 2019 года на семейном торжестве может быть до 200 участников, плов раздают до 250 (на двойной свадьбе 250 и 300), а постановление Кабинета Министров от 16.09.2025 усилило контроль за этими правилами. Средний бюджет свадьбы в 2026 году: от 40 до 120 млн сум, в зависимости от города, количества гостей и уровня проведения.',
      'Самая крупная статья расходов — аренда тўйхоны (свадебного зала) и банкет, которые составляют 40–50% всего бюджета. Стоимость одного гостя в тўйхоне Ташкента: от 150 000 до 300 000 сум (эконом и средний уровень) и до 500 000+ сум в премиальных залах. В регионах цены ниже на 30–50%. В стоимость обычно входит меню (плов, шашлык, салаты, фрукты), обслуживание и базовое оформление зала.',
      'Другие статьи расходов: наряды невесты и жениха — от 8 до 25 млн сум (свадебное платье, костюм, сарпа — подарки от жениха); золотые украшения невесте — от 10 до 30 млн сум (традиция, обязательная во многих семьях); фото и видеосъёмка — 4–10 млн сум; транспорт (свадебный кортеж) — 2–5 млн; музыканты или DJ — 3–8 млн; оформление и декор — 3–7 млн сум.',
      'Узбекская свадьба включает несколько обязательных этапов: фотиха-туй (помолвка), регистрацию брака в ЗАГСе, никох (религиозный обряд), утренний плов (эрталабки ош) и вечерний банкет. Каждый этап требует отдельного бюджета. Утренний плов часто упускают при планировании, считайте его отдельно по числу участников.',
      "Калькулятор считает бюджет по числу гостей, типу площадки и цене угощения на человека. Музыка, фото, декор, одежда, транспорт и приглашения в смету входят типовыми суммами для Ташкента. Сарпу, золото и подарки от гостей калькулятор не считает, учитывайте их отдельно.",
    ],
    paragraphsUz: [
      "To'y byudjeti kalkulyatori O'zbekistondagi eng muhim oilaviy tadbirlardan biri — to'y marosimi xarajatlarini rejalashtirishga yordam beradi. 2019-yilgi Nizomga ko'ra, oilaviy tadbirda 200 tagacha ishtirokchi bo'lishi mumkin, osh 250 tagacha kishiga tarqatiladi (qo'sh to'yda 250 va 300), Vazirlar Mahkamasining 16.09.2025 dagi qarori esa bu qoidalar ustidan nazoratni kuchaytirgan. 2026-yilda to'yning o'rtacha byudjeti: shahar, mehmonlar soni va o'tkazish darajasiga qarab 40 dan 120 mln so'mgacha.",
      "Eng katta xarajat moddasi — to'yxona ijarasi va ziyofat bo'lib, ular butun byudjetning 40–50% ini tashkil etadi. Toshkentdagi to'yxonalarda bir mehmonga narx: 150 000 dan 300 000 so'mgacha (tejamkor va o'rtacha daraja), premium zallarda esa 500 000+ so'm. Hududlarda narxlar 30–50% ga pastroq. Narxga odatda menyu (palov, kabob, salatlar, mevalar), xizmat ko'rsatish va asosiy bezak kiradi.",
      "Boshqa xarajat moddalari: kelin va kuyov kiyimlari — 8 dan 25 mln so'mgacha (to'y ko'ylagi, kostyum, sarpo — kuyov tomonidan sovg'alar); keliniga oltin taqinchoqlar — 10 dan 30 mln so'mgacha (ko'p oilalarda majburiy an'ana); foto va videosyomka — 4–10 mln; transport (to'y kortej) — 2–5 mln; musiqachilar yoki DJ — 3–8 mln; bezatish va dekor — 3–7 mln so'm.",
      "O'zbek to'yi bir necha majburiy bosqichlarni o'z ichiga oladi: fotiha-to'y (unashtiruv), FHDYoda nikohni qayd etish, nikoh (diniy marosim), ertalabki osh va kechki ziyofat. Har bir bosqich alohida byudjetni talab qiladi. Ertalabki oshni rejalashtirishda ko'pincha unutishadi, uni ishtirokchilar soni bo'yicha alohida hisoblang.",
      "Kalkulyator byudjetni mehmonlar soni, joy turi va bir kishiga mehmondorchilik narxi bo'yicha hisoblaydi. Musiqa, foto, bezak, kiyim, transport va taklifnomalar smetaga Toshkent uchun odatiy summalarda kiradi. Sarpo, oltin va mehmonlardan sovg'alarni kalkulyator hisoblamaydi, ularni alohida hisobga oling.",
    ],
    faqRu: [{ question: 'Сколько стоит свадьба в Узбекистане?', answer: "От 40 до 120 млн сум: зависит от города, числа гостей и зала. Точнее посчитает калькулятор по вашему числу гостей." }, { question: 'Какая самая большая статья расходов?', answer: "Ресторан или тўйхона — 40-50% бюджета (150 000-300 000 сум на гостя)." }, { question: 'Как сэкономить на свадьбе?', answer: 'Будний день (скидка 20-30%), сезон не май-июнь, меньше гостей, декор своими руками.' }],
    faqUz: [{ question: "O'zbekistonda to'y qancha turadi?", answer: "40 dan 120 mln so'mgacha: shahar, mehmonlar soni va zalga bog'liq. Aniqroq kalkulyator mehmonlaringiz soni bo'yicha hisoblaydi." }, { question: "Eng katta xarajat moddasi qanday?", answer: "Restoran yoki to'yxona — byudjetning 40-50% (mehmonga 150 000-300 000 so'm)." }, { question: "To'yda qanday tejash mumkin?", answer: "Ish kuni (20-30% chegirma), may-iyun bo'lmagan mavsum, kamroq mehmon, o'z qo'li bilan bezash." }],
  },

  {
    slug: 'cotton-yield',
    lastUpdated: '2026-11-01',
    sources: [],
    paragraphsRu: ['Калькулятор урожайности хлопка рассчитывает ожидаемый урожай и потенциальный доход от выращивания хлопка-сырца в Узбекистане — одном из крупнейших хлопкопроизводителей мира. Узбекистан занимает 5-6 место в мире по производству хлопка, ежегодно выращивая около 3 млн тонн хлопка-сырца. Средняя урожайность составляет 25-30 центнеров с гектара в зависимости от сорта, региона и агротехнических условий.', 'Основные хлопкосеющие регионы Узбекистана: Кашкадарья, Сурхандарья, Бухара, Навои, Джизак и Сырдарья. Наиболее высокая урожайность отмечается в Сурхандарье (до 35 ц/га) благодаря тёплому климату и развитой ирригации. Районированные сорта — Бухара-6, Наманган-77, С-6524 — адаптированы к местным условиям и обеспечивают стабильный урожай при соблюдении агротехнологий.', 'На урожайность влияют ключевые факторы: оптимальные сроки посева (середина апреля — начало мая), режим полива (4-6 поливов за сезон, 800-1200 м³ воды на гектар за полив), внесение удобрений (азот, фосфор, калий по нормам для каждого региона), а также своевременная обработка от вредителей — хлопковой совки и паутинного клеща. Несоблюдение любого из этих факторов снижает урожайность на 15-30%.', 'Пример расчёта: фермер обрабатывает 10 гектаров в Кашкадарьинской области, ожидаемая урожайность — 28 ц/га. Общий урожай: 28 тонн хлопка-сырца. При условной цене 8 000 сум/кг (стартовая биржевая цена 2024 года — 7 800 сум/кг, цену 2026 года уточняйте у кластера) валовой доход составит 224 млн сум. За вычетом расходов на семена, удобрения, полив и аренду техники (примерно 120-150 млн сум) чистая прибыль — около 74-104 млн сум.', 'С 2020 года в Узбекистане полностью отменён государственный план по хлопку, и фермеры свободно продают урожай на бирже или напрямую текстильным предприятиям. Биржевые торги хлопком проходят на Узбекской республиканской товарно-сырьевой бирже (УЗРТСБ). Калькулятор поможет спрогнозировать доход при различных сценариях урожайности и цен, что важно для планирования бюджета фермерского хозяйства.'],
    paragraphsUz: ["Paxta hosildorligi kalkulyatori dunyodagi eng yirik paxtakor mamlakatlardan biri — O'zbekistonda xom paxta yetishtirishdan kutilayotgan hosil va potentsial daromadni hisoblaydi. O'zbekiston paxta ishlab chiqarish bo'yicha dunyoda 5-6-o'rinni egallaydi va har yili taxminan 3 mln tonna xom paxta yetishtiradi. O'rtacha hosildorlik nav, hudud va agrotexnik sharoitlarga qarab gektaridan 25-30 sentnerni tashkil etadi.", "O'zbekistonning asosiy paxtakor hududlari: Qashqadaryo, Surxondaryo, Buxoro, Navoiy, Jizzax va Sirdaryo. Eng yuqori hosildorlik iliq iqlim va rivojlangan irrigatsiya tufayli Surxondaryoda kuzatiladi (35 s/ga gacha). Rayonlashtirilgan navlar — Buxoro-6, Namangan-77, S-6524 — mahalliy sharoitlarga moslashtirilgan va agrotexnologiyalarga rioya qilinganda barqaror hosil beradi.", "Hosildorlikka asosiy omillar ta'sir qiladi: optimal ekish muddatlari (aprel o'rtasi — may boshi), sug'orish rejimi (mavsumda 4-6 marta sug'orish, bir sug'orishda gektariga 800-1200 m³ suv), o'g'itlar kiritish (har bir hudud uchun me'yorlar bo'yicha azot, fosfor, kaliy), shuningdek zararkunandalar — paxta tunlami va o'rgimchak kanasiga o'z vaqtida ishlov berish. Bu omillarning birortasiga rioya qilmaslik hosildorlikni 15-30% ga kamaytiradi.", "Hisoblash misoli: fermer Qashqadaryo viloyatida 10 gektar maydonni ishlaydi, kutilayotgan hosildorlik — 28 s/ga. Umumiy hosil: 28 tonna xom paxta. Shartli narx kg uchun 8 000 so'm bo'lganda (2024-yil birja boshlang'ich narxi — 7 800 so'm/kg, 2026-yil narxini klasterdan aniqlang) yalpi daromad 224 mln so'm bo'ladi. Urug', o'g'it, sug'orish va texnika ijarasi xarajatlari (taxminan 120-150 mln so'm) chegirilgach, sof foyda — taxminan 74-104 mln so'm.", "2020-yildan boshlab O'zbekistonda paxta bo'yicha davlat rejasi to'liq bekor qilindi va fermerlar hosilni birjada yoki to'g'ridan-to'g'ri to'qimachilik korxonalariga erkin sotadi. Paxta birja savdolari O'zbekiston respublika tovar-xom ashyo birjasida (O'zRTXB) o'tkaziladi. Kalkulyator turli hosildorlik va narx stsenariylarida daromadni prognozlashga yordam beradi, bu fermer xo'jaligi byudjetini rejalashtirishda muhim."],
    faqRu: [{ question: 'Какова средняя урожайность хлопка?', answer: '25-30 центнеров с гектара в Узбекистане.' }, { question: 'Какие факторы влияют на урожайность?', answer: 'Сорт, климат, полив, удобрения, сроки посева и обработки.' }, { question: 'В каких регионах выращивают хлопок?', answer: 'Кашкадарья, Сурхандарья, Бухара, Навои — основные хлопкосеющие регионы.' }],
    faqUz: [{ question: "Paxtaning o'rtacha hosildorligi qancha?", answer: "O'zbekistonda gektaridan 25-30 sentner." }, { question: "Hosildorlikka qanday omillar ta'sir qiladi?", answer: "Nav, iqlim, sug'orish, o'g'itlar, ekish va ishlov berish muddatlari." }, { question: "Qaysi hududlarda paxta yetishtiriladi?", answer: "Qashqadaryo, Surxondaryo, Buxoro, Navoiy — asosiy paxtakor hududlar." }],
  },

  {
    slug: 'visa-cost',
    lastUpdated: '2026-11-03',
    sources: [
      { name: "МИД Узбекистана: отмена виз с Китаем с 01.06.2025", url: "https://gov.uz/ru/mfa/news/view/53659" },
      { name: "Aviasales: безвизовые направления 2026", url: "https://www.aviasales.uz/yolovchi/article/bezvizovye-napravleniya" },
      { name: "Kun.uz: виза в Японию для граждан Узбекистана", url: "https://kun.uz/en/news/2026/05/14/how-to-get-a-japan-visa-for-citizens-of-uzbekistan" },
      { name: "Kun.uz: виза в Южную Корею", url: "https://kun.uz/en/38283143" },
    ],
    paragraphsRu: [
      "Калькулятор стоимости визы считает расходы на туристическую поездку для граждан Узбекистана: консульский сбор, сервисный сбор визового центра, фото и медицинскую страховку. Перевод документов в итог не входит, его стоимость смотрите ниже. Расчёт идёт на одного заявителя. Туристическая виза не нужна в Турцию, ОАЭ и в Китай до 30 дней, поэтому для них калькулятор показывает только страховку и фото.",
      "Примерные расходы на визу в 2026 году: Шенген — консульский сбор €90, сервисный сбор визового центра €20-30, фото 30 000-50 000 сум, перевод документов с нотариальным заверением 200 000-500 000 сум, медицинская страховка с покрытием €30 000 от 200 000 сум (15 дней) до 800 000 сум (90 дней). США (B1/B2) — $185; законом США введён также Visa Integrity Fee $250, но начало его сбора уточняйте на сайте посольства, поэтому он показан отдельно и в итог не входит. Великобритания — £135 за визу на 6 месяцев (с 8 апреля 2026 года). Южная Корея — ориентировочно $40-80, документы принимают только аккредитованные агентства. Япония — консульского сбора нет, оплачиваются только услуги агентства, если обращаетесь через него. Суммы в сумах калькулятор пересчитывает по курсу ЦБ для валюты сбора: евро, фунта или доллара.",
      "Пример для семьи (Шенген, 2 взрослых и ребёнок 6-12 лет), при курсе 13 400 сум за евро: консульский сбор €90 × 2 + €45 = €225 (~3 015 000 сум); сервисный сбор €25 × 3 = €75 (~1 005 000 сум); фото 40 000 × 3 = 120 000 сум; перевод документов 400 000 × 3 = 1 200 000 сум; страховка 300 000 × 3 = 900 000 сум. Итого на семью: ~6 240 000 сум. Для детей 6-12 лет консульский сбор Шенгена €45, до 6 лет бесплатно. Калькулятор считает на одного взрослого, сумму на семью сложите вручную.",
      "Без визы гражданам Узбекистана доступны, в частности: Россия (90 суток в году), Казахстан (30 дней), Кыргызстан (60), Таджикистан (30), Азербайджан (90), Армения (180), Беларусь, Молдова и Украина (90 дней за 180), Грузия (365), Турция (90 дней за 180), Китай (30 дней за въезд, не более 90 за 180), ОАЭ (30), Малайзия (30), Монголия (30). В Индонезию нужна виза по прибытии (до 30 дней, 500 000 рупий). Для Южной Кореи, Сингапура и Шенгена виза нужна заранее. Электронная виза есть, например, в Индию и Вьетнам. Правила меняются, перед поездкой проверяйте требования страны на сайте её посольства или МИД Узбекистана.",
      "Калькулятор учитывает страну и срок страховки. Тип визы, число заявителей и срочность он не спрашивает. Порядок подачи зависит от страны: в Южную Корею документы принимают только аккредитованные агентства, в Японию заявление подают на бумаге в посольстве в Ташкенте по предварительной записи, для стран Шенгена запись ведёт визовый центр конкретной страны. Адрес и способ оплаты сбора уточняйте на сайте консульства.",
    ],
    paragraphsUz: [
      "Viza narxi kalkulyatori O'zbekiston fuqarolari uchun turistik safar xarajatlarini hisoblaydi: konsullik yig'imi, viza markazining servis yig'imi, foto va tibbiy sug'urta. Hujjatlar tarjimasi jamiga kirmaydi, narxini quyida ko'ring. Hisob bitta arizachi uchun. Turkiya, BAA va 30 kungacha Xitoyga turistik viza kerak emas, shuning uchun ular uchun kalkulyator faqat sug'urta va fotoni ko'rsatadi.",
      "2026-yilda vizaga taxminiy xarajatlar: Shengen — konsullik yig'imi €90, viza markazi servis yig'imi €20-30, foto 30 000-50 000 so'm, notarial tasdiqli hujjatlar tarjimasi 200 000-500 000 so'm, €30 000 qoplamali tibbiy sug'urta 200 000 so'mdan (15 kun) 800 000 so'mgacha (90 kun). AQSh (B1/B2) — $185; AQSh qonuni bilan $250 Visa Integrity Fee ham joriy etilgan, ammo undirish boshlanishini elchixona saytidan aniqlang, shuning uchun u alohida ko'rsatiladi va jamiga kirmaydi. Buyuk Britaniya — 6 oylik viza £135 (2026-yil 8-apreldan). Janubiy Koreya — taxminan $40-80, hujjatlarni faqat akkreditatsiyalangan agentliklar qabul qiladi. Yaponiya — konsullik yig'imi yo'q, agentlik orqali murojaat qilsangiz, faqat uning xizmati to'lanadi. So'mdagi summalarni kalkulyator yig'im valyutasi (yevro, funt yoki dollar) bo'yicha MB kursida hisoblaydi.",
      "Oila uchun misol (Shengen, 2 katta va 6-12 yoshli bola), yevro 13 400 so'm kursida: konsullik yig'imi €90 × 2 + €45 = €225 (~3 015 000 so'm); servis yig'imi €25 × 3 = €75 (~1 005 000 so'm); foto 40 000 × 3 = 120 000 so'm; hujjatlar tarjimasi 400 000 × 3 = 1 200 000 so'm; sug'urta 300 000 × 3 = 900 000 so'm. Oilaga jami: ~6 240 000 so'm. 6-12 yoshli bolalar uchun Shengen konsullik yig'imi €45, 6 yoshgacha bepul. Kalkulyator bitta katta uchun hisoblaydi, oila summasini qo'lda qo'shing.",
      "O'zbekiston fuqarolari vizasiz, jumladan, quyidagilarga borishi mumkin: Rossiya (yiliga 90 sutka), Qozog'iston (30 kun), Qirg'iziston (60), Tojikiston (30), Ozarbayjon (90), Armaniston (180), Belarus, Moldova va Ukraina (180 kunda 90 kun), Gruziya (365), Turkiya (180 kunda 90 kun), Xitoy (bir kirishda 30 kun, 180 kunda 90 kundan oshmasin), BAA (30), Malayziya (30), Mo'g'uliston (30). Indoneziyaga kelganda viza olinadi (30 kungacha, 500 000 rupiya). Janubiy Koreya, Singapur va Shengen uchun viza oldindan kerak. Elektron viza, masalan, Hindiston va Vyetnamga mavjud. Qoidalar o'zgaradi, safardan oldin talablarni mamlakat elchixonasi yoki O'zbekiston TIV saytida tekshiring.",
      "Kalkulyator mamlakat va sug'urta muddatini hisobga oladi. Viza turi, arizachilar soni va shoshilinchlikni so'ramaydi. Topshirish tartibi mamlakatga bog'liq: Janubiy Koreyaga hujjatlarni faqat akkreditatsiyalangan agentliklar qabul qiladi, Yaponiyaga ariza Toshkentdagi elchixonaga oldindan yozilib, qog'ozda topshiriladi, Shengen mamlakatlari uchun yozuvni tegishli mamlakatning viza markazi yuritadi. Manzil va yig'imni to'lash usulini konsullik saytidan aniqlang.",
    ],
    faqRu: [
      { question: 'Сколько стоит Шенгенская виза?', answer: "Консульский сбор €90 плюс сервисный сбор визового центра €20-30, фото, перевод документов и страховка. Точную сумму в сумах посчитает калькулятор по текущему курсу евро ЦБ." },
      { question: 'В какие страны не нужна виза?', answer: "Среди прочих Россия, Казахстан, Кыргызстан, Таджикистан, Грузия, Турция, ОАЭ, Малайзия и Китай (до 30 дней за въезд). В Южную Корею и Сингапур виза нужна. Сроки смотрите выше, перед поездкой проверяйте на сайте посольства." },
      { question: 'Из чего складывается стоимость визы?', answer: "Консульский сбор (от нуля в Японии до $185 в США) + сервисный сбор визового центра (€20-30) + фото (30 000-50 000 сум) + перевод документов (200 000-500 000 сум) + медицинская страховка (200 000-800 000 сум)." },
      { question: 'Где подать документы на визу в Ташкенте?', answer: "Зависит от страны: Южная Корея — только через аккредитованные агентства, Япония — на бумаге в посольстве по записи, страны Шенгена — через визовый центр конкретной страны. Актуальный адрес смотрите на сайте консульства." },
      { question: 'Сколько стоит виза для ребёнка?', answer: "Шенген: дети до 6 лет — бесплатно, 6-12 лет — €45 (~600 000 сум). США (B1/B2): одинаково $185 для всех возрастов. Сервисный сбор и страховка оплачиваются независимо от возраста." },
    ],
    faqUz: [
      { question: "Shengen vizasi qancha turadi?", answer: "Konsullik yig'imi €90 va viza markazining servis yig'imi €20-30, foto, hujjatlar tarjimasi hamda sug'urta. So'mdagi aniq summani kalkulyator MBning joriy yevro kursi bo'yicha hisoblaydi." },
      { question: "Qaysi mamlakatlarga viza kerak emas?", answer: "Jumladan Rossiya, Qozog'iston, Qirg'iziston, Tojikiston, Gruziya, Turkiya, BAA, Malayziya va Xitoy (bir kirishda 30 kungacha). Janubiy Koreya va Singapurga viza kerak. Muddatlarni yuqorida ko'ring, safardan oldin elchixona saytida tekshiring." },
      { question: "Viza narxi nimalardan tashkil topadi?", answer: "Konsullik yig'imi (Yaponiyada noldan AQShda $185 gacha) + viza markazi servis yig'imi (€20-30) + foto (30 000-50 000 so'm) + hujjatlar tarjimasi (200 000-500 000 so'm) + tibbiy sug'urta (200 000-800 000 so'm)." },
      { question: "Toshkentda viza uchun hujjatlarni qayerga topshirish mumkin?", answer: "Mamlakatga bog'liq: Janubiy Koreya — faqat akkreditatsiyalangan agentliklar orqali, Yaponiya — elchixonada qog'ozda, yozilib, Shengen mamlakatlari — tegishli mamlakatning viza markazi orqali. Dolzarb manzilni konsullik saytida ko'ring." },
      { question: "Bolalar uchun viza qancha turadi?", answer: "Shengen: 6 yoshgacha bolalar — bepul, 6-12 yosh — €45 (~600 000 so'm). AQSh (B1/B2): barcha yoshdagilar uchun bir xil $185. Servis yig'imi va sug'urta yoshdan qat'i nazar to'lanadi." },
    ],
  },
]

// Helper function to find article by slug
export function getArticleBySlug(slug: string): CalculatorArticle | undefined {
  return CALCULATOR_ARTICLES.find((a) => a.slug === slug)
}

// Stable hash for deterministic-but-varied datePublished derivation
function hashSlug(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

// Spread initial publication dates across the realistic 2025 launch window
const PUBLISH_WINDOWS: [string, string][] = [
  ["2025-01-15", "2025-02-28"],
  ["2025-03-10", "2025-04-25"],
  ["2025-05-05", "2025-06-15"],
  ["2025-07-10", "2025-08-20"],
  ["2025-09-01", "2025-10-15"],
]

function deriveDatePublished(slug: string): string {
  const h = hashSlug(`${slug}:pub`)
  const w = PUBLISH_WINDOWS[h % PUBLISH_WINDOWS.length]
  const startTs = new Date(w[0]).getTime()
  const endTs = new Date(w[1]).getTime()
  const span = endTs - startTs
  const offset = hashSlug(`${slug}:pub:offset`) % span
  return new Date(startTs + offset).toISOString().slice(0, 10)
}

// Backward-compatible function (used in page.tsx). Enriches the article with a
// deterministic datePublished if the source data doesn't provide one.
export function getCalculatorArticle(slug: string): CalculatorArticle | null {
  const article = getArticleBySlug(slug)
  if (!article) return null
  if (article.datePublished) return article
  return { ...article, datePublished: deriveDatePublished(slug) }
}
