import type { CategoryId } from '@/lib/types/calculator'

export interface CategoryDescription {
  titleRu: string
  titleUz: string
  descriptionRu: string
  descriptionUz: string
  seoTitleRu: string
  seoTitleUz: string
  seoDescriptionRu: string
  seoDescriptionUz: string
}

export const CATEGORY_DESCRIPTIONS: Record<CategoryId, CategoryDescription> = {
  tax: {
    titleRu: 'Налоговые калькуляторы',
    titleUz: 'Soliq kalkulyatorlari',
    descriptionRu:
      'Рассчитайте все виды налогов в Узбекистане: НДФЛ, НДС, налог на имущество, земельный и транспортный налоги, налог на прибыль и единый налоговый платёж. Наши калькуляторы основаны на актуальных ставках Налогового кодекса Республики Узбекистан и ежегодно обновляются в соответствии с постановлениями Президента и Кабинета Министров. Вы можете быстро определить сумму налога, проверить порог НДС, рассчитать пени за просрочку или узнать налоговую нагрузку для ИП и самозанятых. Все расчёты бесплатны и не требуют регистрации.',
    descriptionUz:
      "O'zbekistondagi barcha turdagi soliqlarni hisoblang: JShShS, QQS, mol-mulk solig'i, yer va transport soliqlari, foyda solig'i va yagona soliq to'lovi. Bizning kalkulyatorlarimiz O'zbekiston Respublikasi Soliq kodeksining dolzarb stavkalariga asoslangan va Prezident hamda Vazirlar Mahkamasi qarorlariga muvofiq har yili yangilanadi. Soliq summasini tez aniqlash, QQS chegarasini tekshirish, kechikish uchun peniya hisoblash yoki YaTT va o'z-o'zini band qilganlar uchun soliq yukini bilish mumkin. Barcha hisob-kitoblar bepul va ro'yxatdan o'tishni talab qilmaydi.",
    seoTitleRu: 'Налоговые калькуляторы Узбекистана — НДФЛ, НДС, налог на прибыль',
    seoTitleUz: "O'zbekiston soliq kalkulyatorlari — JShShS, QQS, foyda solig'i",
    seoDescriptionRu: 'Бесплатные онлайн калькуляторы налогов Узбекистана: НДФЛ 12%, НДС, налог на имущество, земельный и транспортный налоги. Актуальные ставки 2025–2026.',
    seoDescriptionUz: "O'zbekiston soliqlari uchun bepul onlayn kalkulyatorlar: JShShS 12%, QQS, mol-mulk solig'i, yer va transport soliqlari. 2025–2026 yil dolzarb stavkalari.",
  },
  salary: {
    titleRu: 'Калькуляторы зарплаты',
    titleUz: 'Ish haqi kalkulyatorlari',
    descriptionRu:
      'Рассчитайте чистую зарплату, отпускные, больничные, декретные выплаты, компенсацию при увольнении и алименты по нормам Трудового кодекса Узбекистана. Калькулятор зарплаты учитывает НДФЛ 12%, пенсионные отчисления ИНПС и все обязательные удержания. Узнайте точную сумму к выплате на руки, рассчитайте стоимость сотрудника для работодателя или определите размер пенсии. Все формулы соответствуют действующему законодательству и регулярно обновляются.',
    descriptionUz:
      "O'zbekiston Mehnat kodeksi normalariga muvofiq sof ish haqini, tatil pulini, kasallik varaqasini, tug'ruq ta'tilini, ishdan bo'shatish kompensatsiyasini va nafaqani hisoblang. Ish haqi kalkulyatori JShShS 12%, INPS pensiya ajratmalari va barcha majburiy ushlanmalarni hisobga oladi. Qo'lga tegadigan aniq summani bilib oling, ish beruvchi uchun xodim narxini hisoblang yoki pensiya miqdorini aniqlang. Barcha formulalar amaldagi qonunchilikka mos va muntazam yangilanadi.",
    seoTitleRu: 'Калькуляторы зарплаты Узбекистана — чистая зарплата, отпускные, больничные',
    seoTitleUz: "O'zbekiston ish haqi kalkulyatorlari — sof ish haqi, tatil puli, kasallik varaqasi",
    seoDescriptionRu: 'Рассчитайте зарплату на руки в Узбекистане с учётом НДФЛ и ИНПС. Калькуляторы отпускных, больничных, декретных, пенсии.',
    seoDescriptionUz: "JShShS va INPS hisobiga O'zbekistonda qo'lga tegadigan ish haqini hisoblang. Tatil puli, kasallik varaqasi, tug'ruq ta'tili, pensiya kalkulyatorlari.",
  },
  credit: {
    titleRu: 'Кредитные калькуляторы',
    titleUz: 'Kredit kalkulyatorlari',
    descriptionRu:
      'Рассчитайте ежемесячный платёж по кредиту, ипотеке или автокредиту в банках Узбекистана. Сравните аннуитетный и дифференцированный графики погашения, оцените переплату и определите выгоду досрочного погашения или рефинансирования. Наши калькуляторы поддерживают расчёт рассрочки и помогут выбрать оптимальные условия кредитования среди предложений узбекских банков.',
    descriptionUz:
      "O'zbekiston banklarida kredit, ipoteka yoki avtokredit bo'yicha oylik to'lovni hisoblang. Annuitet va differensial to'lov jadvallarini solishtiring, ortiqcha to'lovni baholang va muddatidan oldin to'lash yoki qayta moliyalashtirishning foydaliligini aniqlang. Bizning kalkulyatorlarimiz bo'lib to'lash hisobini qo'llab-quvvatlaydi va o'zbek banklari takliflari orasida optimal kreditlash shartlarini tanlashga yordam beradi.",
    seoTitleRu: 'Кредитные калькуляторы — ипотека, автокредит, рассрочка в Узбекистане',
    seoTitleUz: "Kredit kalkulyatorlari — ipoteka, avtokredit, bo'lib to'lash O'zbekistonda",
    seoDescriptionRu: 'Рассчитайте кредит, ипотеку, автокредит онлайн. Аннуитетный и дифференцированный графики, досрочное погашение, рефинансирование.',
    seoDescriptionUz: "Kredit, ipoteka, avtokreditni onlayn hisoblang. Annuitet va differensial jadvallar, muddatidan oldin to'lash, qayta moliyalashtirish.",
  },
  deposit: {
    titleRu: 'Калькуляторы вкладов',
    titleUz: 'Depozit kalkulyatorlari',
    descriptionRu:
      'Рассчитайте доходность банковского вклада в Узбекистане с учётом процентной ставки, капитализации и срока. Сравните условия депозитов разных банков, оцените эффект сложного процента и выберите наиболее выгодный вариант размещения средств. Калькуляторы используют актуальные ставки узбекских банков и помогают принять обоснованное решение о сбережениях.',
    descriptionUz:
      "O'zbekistondagi bank omonati daromadliligini foiz stavkasi, kapitalizatsiya va muddat hisobiga hisoblang. Turli banklar depozit shartlarini solishtiring, murakkab foiz ta'sirini baholang va mablag'larni joylashtirish uchun eng foydali variantni tanlang. Kalkulyatorlar o'zbek banklarining dolzarb stavkalaridan foydalanadi va jamg'armalar bo'yicha asosli qaror qabul qilishga yordam beradi.",
    seoTitleRu: 'Калькуляторы вкладов — депозиты, сложный процент, сравнение банков',
    seoTitleUz: "Depozit kalkulyatorlari — omonatlar, murakkab foiz, banklar taqqoslash",
    seoDescriptionRu: 'Рассчитайте доход по вкладу в банках Узбекистана. Сложный процент, сравнение депозитов, актуальные ставки.',
    seoDescriptionUz: "O'zbekiston banklarida omonat daromadini hisoblang. Murakkab foiz, depozitlarni solishtirish, dolzarb stavkalar.",
  },
  currency: {
    titleRu: 'Валютные калькуляторы',
    titleUz: 'Valyuta kalkulyatorlari',
    descriptionRu:
      'Конвертируйте валюту по актуальному курсу Центрального банка Узбекистана, сравните курсы коммерческих банков и рассчитайте стоимость денежных переводов. Наш конвертер поддерживает все основные мировые валюты и узбекский сум (UZS). Курсы обновляются ежедневно на основе данных ЦБ РУз.',
    descriptionUz:
      "O'zbekiston Markaziy banki dolzarb kursi bo'yicha valyutani konvertatsiya qiling, tijorat banklari kurslarini solishtiring va pul o'tkazmalar narxini hisoblang. Bizning konverterimiz barcha asosiy jahon valyutalari va o'zbek so'mini (UZS) qo'llab-quvvatlaydi. Kurslar O'zRMB ma'lumotlari asosida har kuni yangilanadi.",
    seoTitleRu: 'Конвертер валют Узбекистана — курсы ЦБ, сравнение банков, переводы',
    seoTitleUz: "O'zbekiston valyuta konvertori — MB kurslari, banklar taqqoslash, o'tkazmalar",
    seoDescriptionRu: 'Конвертер валют по курсу ЦБ Узбекистана. Сравнение курсов банков, расчёт переводов. USD, EUR, RUB → UZS.',
    seoDescriptionUz: "O'zbekiston MB kursi bo'yicha valyuta konvertori. Bank kurslarini solishtirish, o'tkazmalarni hisoblash. USD, EUR, RUB → UZS.",
  },
  auto: {
    titleRu: 'Автомобильные калькуляторы',
    titleUz: 'Avtomobil kalkulyatorlari',
    descriptionRu:
      'Рассчитайте стоимость растаможки автомобиля, ОСАГО, транспортный налог, расход топлива и стоимость поездки в Узбекистане. Калькулятор растаможки учитывает акцизы, таможенные пошлины и НДС для новых и подержанных автомобилей. Также доступен расчёт автолизинга и автокредита от узбекских банков.',
    descriptionUz:
      "O'zbekistonda avtomobil rastamozhkasi narxini, OSAGO, transport solig'ini, yoqilg'i sarfini va sayohat narxini hisoblang. Rastamozhka kalkulyatori yangi va ishlatilgan avtomobillar uchun aktsizlar, bojxona bojlari va QQSni hisobga oladi. Shuningdek, o'zbek banklaridan avto lizing va avtokredit hisobi mavjud.",
    seoTitleRu: 'Автомобильные калькуляторы — растаможка, ОСАГО, расход топлива',
    seoTitleUz: "Avtomobil kalkulyatorlari — rastamozhka, OSAGO, yoqilg'i sarfi",
    seoDescriptionRu: 'Рассчитайте растаможку авто, ОСАГО, транспортный налог и расход топлива в Узбекистане. Актуальные тарифы и пошлины.',
    seoDescriptionUz: "O'zbekistonda avto rastamozhkasi, OSAGO, transport solig'i va yoqilg'i sarfini hisoblang. Dolzarb tariflar va bojlar.",
  },
  utilities: {
    titleRu: 'Калькуляторы коммунальных услуг',
    titleUz: 'Kommunal xizmatlar kalkulyatorlari',
    descriptionRu:
      'Рассчитайте стоимость электроэнергии, газа, воды, отопления и интернета в Узбекистане по актуальным тарифам. Наши калькуляторы учитывают дифференцированные тарифы, нормы потребления и сезонные надбавки. Калькулятор общей коммуналки покажет итоговую сумму ежемесячных платежей за все коммунальные услуги.',
    descriptionUz:
      "O'zbekistonda dolzarb tariflar bo'yicha elektr energiya, gaz, suv, isitish va internet narxini hisoblang. Bizning kalkulyatorlarimiz differentsial tariflar, iste'mol normalari va mavsumiy ustamalarni hisobga oladi. Umumiy kommunal kalkulyator barcha kommunal xizmatlar uchun oylik to'lovlarning yakuniy summasini ko'rsatadi.",
    seoTitleRu: 'Коммунальные калькуляторы — электричество, газ, вода, отопление',
    seoTitleUz: "Kommunal kalkulyatorlar — elektr, gaz, suv, isitish",
    seoDescriptionRu: 'Рассчитайте коммунальные платежи в Узбекистане: электричество, газ, вода, отопление, интернет. Актуальные тарифы.',
    seoDescriptionUz: "O'zbekistonda kommunal to'lovlarni hisoblang: elektr, gaz, suv, isitish, internet. Dolzarb tariflar.",
  },
  realestate: {
    titleRu: 'Калькуляторы недвижимости',
    titleUz: "Ko'chmas mulk kalkulyatorlari",
    descriptionRu:
      'Оцените стоимость квартиры, сравните аренду и покупку жилья, рассчитайте стоимость ремонта и переезда в Узбекистане. Калькуляторы помогут принять обоснованное решение при выборе недвижимости с учётом ипотеки, налогов и коммунальных расходов.',
    descriptionUz:
      "O'zbekistonda kvartira narxini baholang, uy-joy ijarasi va sotib olishni solishtiring, ta'mirlash va ko'chish narxini hisoblang. Kalkulyatorlar ipoteka, soliqlar va kommunal xarajatlarni hisobga olgan holda ko'chmas mulkni tanlashda asosli qaror qabul qilishga yordam beradi.",
    seoTitleRu: 'Калькуляторы недвижимости — стоимость квартиры, аренда vs покупка',
    seoTitleUz: "Ko'chmas mulk kalkulyatorlari — kvartira narxi, ijara vs sotib olish",
    seoDescriptionRu: 'Рассчитайте стоимость квартиры, сравните аренду и покупку, оцените ремонт в Узбекистане.',
    seoDescriptionUz: "Kvartira narxini hisoblang, ijara va sotib olishni solishtiring, ta'mirlashni baholang.",
  },
  business: {
    titleRu: 'Бизнес-калькуляторы',
    titleUz: 'Biznes kalkulyatorlari',
    descriptionRu:
      'Калькуляторы для предпринимателей Узбекистана: расчёт налогов ИП и ООО, маржинальность, точка безубыточности, возврат инвестиций и стоимость сотрудника. Помогут оценить финансовые показатели бизнеса и выбрать оптимальную форму налогообложения для индивидуальных предпринимателей и юридических лиц.',
    descriptionUz:
      "O'zbekiston tadbirkorlari uchun kalkulyatorlar: YaTT va MChJ soliqlari hisobi, marjinallik, zararsizlik nuqtasi, investitsiya qaytimi va xodim narxi. Biznesning moliyaviy ko'rsatkichlarini baholash va yakka tartibdagi tadbirkorlar hamda yuridik shaxslar uchun optimal soliqqa tortish shaklini tanlashga yordam beradi.",
    seoTitleRu: 'Бизнес-калькуляторы — ИП, ООО, маржа, рентабельность',
    seoTitleUz: "Biznes kalkulyatorlari — YaTT, MChJ, marja, rentabellik",
    seoDescriptionRu: 'Калькуляторы для бизнеса в Узбекистане: налоги ИП и ООО, маржинальность, точка безубыточности, ROI.',
    seoDescriptionUz: "O'zbekistonda biznes uchun kalkulyatorlar: YaTT va MChJ soliqlari, marjinallik, zararsizlik nuqtasi, ROI.",
  },
  health: {
    titleRu: 'Калькуляторы здоровья',
    titleUz: 'Salomatlik kalkulyatorlari',
    descriptionRu:
      'Рассчитайте суточную норму калорий, индекс массы тела (ИМТ), идеальный вес и соотношение БЖУ. Калькулятор беременности поможет определить дату родов и отслеживать сроки. Все расчёты основаны на общепринятых медицинских формулах и адаптированы для жителей Узбекистана.',
    descriptionUz:
      "Kunlik kaloriya me'yorini, tana massa indeksini (TMI), ideal vaznni va OYU nisbatini hisoblang. Homiladorlik kalkulyatori tug'ilish sanasini aniqlash va muddatlarni kuzatishga yordam beradi. Barcha hisob-kitoblar umumqabul qilingan tibbiy formulalarga asoslangan va O'zbekiston aholisi uchun moslashtirilgan.",
    seoTitleRu: 'Калькуляторы здоровья — калории, ИМТ, идеальный вес, БЖУ',
    seoTitleUz: "Salomatlik kalkulyatorlari — kaloriya, TMI, ideal vazn, OYU",
    seoDescriptionRu: 'Рассчитайте калории, ИМТ, идеальный вес и БЖУ онлайн. Калькулятор беременности и сроков родов.',
    seoDescriptionUz: "Kaloriya, TMI, ideal vazn va OYUni onlayn hisoblang. Homiladorlik va tug'ilish muddati kalkulyatori.",
  },
  education: {
    titleRu: 'Образовательные калькуляторы',
    titleUz: "Ta'lim kalkulyatorlari",
    descriptionRu:
      'Рассчитайте стоимость обучения в вузах Узбекистана, ежемесячный платёж по образовательному кредиту и средний балл GPA. Калькуляторы помогут спланировать расходы на образование и оценить условия кредитования для студентов.',
    descriptionUz:
      "O'zbekiston oliy ta'lim muassasalarida o'qish narxini, ta'lim krediti bo'yicha oylik to'lovni va o'rtacha GPA ballni hisoblang. Kalkulyatorlar ta'lim xarajatlarini rejalashtirish va talabalar uchun kreditlash shartlarini baholashga yordam beradi.",
    seoTitleRu: 'Образовательные калькуляторы — стоимость обучения, GPA, кредит на учёбу',
    seoTitleUz: "Ta'lim kalkulyatorlari — o'qish narxi, GPA, ta'lim krediti",
    seoDescriptionRu: 'Рассчитайте стоимость обучения, GPA и образовательный кредит в Узбекистане.',
    seoDescriptionUz: "O'qish narxi, GPA va ta'lim kreditini O'zbekistonda hisoblang.",
  },
  religion: {
    titleRu: 'Религиозные калькуляторы',
    titleUz: 'Diniy kalkulyatorlar',
    descriptionRu:
      'Рассчитайте закят, фитр-садака, фидия-садака и стоимость курбана по нормам ислама. Калькуляторы учитывают актуальные цены на продовольствие в Узбекистане и помогают точно определить размер обязательных и добровольных пожертвований.',
    descriptionUz:
      "Islom normalari bo'yicha zakot, fitr-sadaqa, fidiya-sadaqa va qurbon narxini hisoblang. Kalkulyatorlar O'zbekistondagi dolzarb oziq-ovqat narxlarini hisobga oladi va majburiy hamda ixtiyoriy xayriya miqdorini aniq aniqlashga yordam beradi.",
    seoTitleRu: 'Религиозные калькуляторы — закят, фитр-садака, фидия, курбан',
    seoTitleUz: "Diniy kalkulyatorlar — zakot, fitr-sadaqa, fidiya, qurbon",
    seoDescriptionRu: 'Рассчитайте закят, фитр-садака, фидию и курбан онлайн. Актуальные цены для Узбекистана.',
    seoDescriptionUz: "Zakot, fitr-sadaqa, fidiya va qurbonni onlayn hisoblang. O'zbekiston uchun dolzarb narxlar.",
  },
  tools: {
    titleRu: 'Инструменты и утилиты',
    titleUz: 'Asboblar va utilitalar',
    descriptionRu:
      'Универсальные онлайн-инструменты: расчёт процентов и скидок, калькулятор дат и возраста, конвертер единиц измерения, вычисление площади, генератор случайных чисел и перевод числа в пропись. Удобные инструменты для повседневных расчётов.',
    descriptionUz:
      "Universal onlayn asboblar: foiz va chegirmalar hisobi, sana va yosh kalkulyatori, o'lchov birliklar konvertori, maydon hisoblash, tasodifiy sonlar generatori va sonni so'z bilan yozish. Kundalik hisob-kitoblar uchun qulay asboblar.",
    seoTitleRu: 'Онлайн инструменты — проценты, даты, площадь, конвертер единиц',
    seoTitleUz: "Onlayn asboblar — foiz, sana, maydon, birlik konvertori",
    seoDescriptionRu: 'Бесплатные онлайн инструменты: калькулятор процентов, дат, площади, конвертер единиц, генератор чисел.',
    seoDescriptionUz: "Bepul onlayn asboblar: foiz, sana, maydon kalkulyatori, birlik konvertori, son generatori.",
  },
  unique: {
    titleRu: 'Калькуляторы для Узбекистана',
    titleUz: "O'zbekiston kalkulyatorlari",
    descriptionRu:
      'Уникальные калькуляторы, специфичные для Узбекистана: расчёт госпошлин, паспортных сборов, стоимости визы, свадебного бюджета, денежных переводов из-за рубежа, урожайности хлопка и базовой расчётной величины (БРВ). Незаменимые инструменты для жителей и гостей Узбекистана.',
    descriptionUz:
      "O'zbekistonga xos noyob kalkulyatorlar: davlat boji, pasport yig'imlari, viza narxi, to'y byudjeti, xorijdan pul o'tkazmalari, paxta hosildorligi va bazaviy hisoblash miqdori (BHM) hisobi. O'zbekiston aholisi va mehmonlari uchun ajralmas asboblar.",
    seoTitleRu: 'Калькуляторы Узбекистана — БРВ, госпошлины, визы, переводы',
    seoTitleUz: "O'zbekiston kalkulyatorlari — BHM, davlat boji, viza, o'tkazmalar",
    seoDescriptionRu: 'Уникальные калькуляторы для Узбекистана: БРВ, госпошлины, паспортные сборы, стоимость визы, денежные переводы.',
    seoDescriptionUz: "O'zbekiston uchun noyob kalkulyatorlar: BHM, davlat boji, pasport yig'imlari, viza narxi, pul o'tkazmalari.",
  },
}
