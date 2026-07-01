export interface AuthorTimelineItem {
  yearRu: string
  yearUz: string
  titleRu: string
  titleUz: string
  descriptionRu: string
  descriptionUz: string
}

export interface AuthorExpertiseArea {
  iconKey: string
  titleRu: string
  titleUz: string
  descriptionRu: string
  descriptionUz: string
}

export interface AuthorSocialLink {
  label: string
  url: string
  iconKey: string
}

export interface Author {
  slug: string
  name: string
  alternateName: string
  jobTitleRu: string
  jobTitleUz: string
  shortBioRu: string
  shortBioUz: string
  longBioRu: string[]
  longBioUz: string[]
  expertiseRu: string[]
  expertiseUz: string[]
  expertiseAreas: AuthorExpertiseArea[]
  experienceYearsTotal: number
  experienceYearsFinance: number
  email: string
  location: string
  languages: string[]
  social: AuthorSocialLink[]
  projects: { name: string; url: string; descriptionRu: string; descriptionUz: string }[]
  timeline: AuthorTimelineItem[]
  imagePath: string
}

export const AUTHORS: Author[] = [
  {
    slug: 'konstantin-yakovlev',
    name: 'Konstantin Yakovlev',
    alternateName: 'Константин Яковлев',
    jobTitleRu: 'Основатель и руководитель проекта Calk.UZ',
    jobTitleUz: 'Calk.UZ loyihasi asoschisi va rahbari',
    shortBioRu:
      'Основатель Calk.UZ. Более 14 лет опыта в интернет-маркетинге, свыше 8 лет в финансовой аналитике. Создатель финансовых маркетплейсов Zanimaem.kz и Profinance.kz.',
    shortBioUz:
      "Calk.UZ asoschisi. Internet-marketingda 14 yildan ortiq, moliyaviy tahlilda 8 yildan ortiq tajriba. Zanimaem.kz va Profinance.kz moliyaviy marketpleyslarining yaratuvchisi.",
    longBioRu: [
      'Меня зовут Константин Яковлев, я — основатель Calk.UZ. Более 14 лет в интернет-маркетинге, свыше 8 лет в финансовой аналитике. Делаю онлайн-инструменты, которые помогают принимать грамотные финансовые решения.',
      'В 2016 году запустил Zanimaem.kz — один из первых финансовых маркетплейсов Казахстана. В 2025 — Calk.kz, в 2026 — Profinance.kz и Calk.UZ. Если заметили ошибку в расчётах — напишите мне напрямую: я лично читаю каждое сообщение.',
    ],
    longBioUz: [
      "Mening ismim Konstantin Yakovlev, men Calk.UZ asoschisiman. Internet-marketingda 14 yildan ortiq, moliyaviy tahlilda 8 yildan ortiq tajribaga egaman. Aqlli moliyaviy qarorlar qabul qilishga yordam beradigan onlayn vositalar yarataman.",
      "2016-yilda Zanimaem.kz ni — Qozog'istondagi birinchi moliyaviy marketpleyslardan birini ishga tushirdim. 2025-yilda — Calk.kz, 2026-yilda — Profinance.kz va Calk.UZ. Agar hisob-kitobda xatolikni sezsangiz, menga to'g'ridan-to'g'ri yozing: men har bir xabarni shaxsan o'qiyman.",
    ],
    expertiseRu: [
      'Налоговое законодательство Узбекистана и Казахстана',
      'Финансовая аналитика и кредитные продукты',
      'Разработка финансовых калькуляторов и маркетплейсов',
      'Методология расчётов НДФЛ, НДС, налога на прибыль',
      'Кредитные продукты: ипотека, автокредит, потребительский кредит',
      'Депозитные продукты и расчёт сложных процентов',
    ],
    expertiseUz: [
      "O'zbekiston va Qozog'iston soliq qonunchiligi",
      "Moliyaviy tahlil va kredit mahsulotlari",
      "Moliyaviy kalkulyatorlar va marketpleyslarni ishlab chiqish",
      "JShShS, QQS, foyda solig'i hisoblash metodologiyasi",
      "Kredit mahsulotlari: ipoteka, avtokredit, iste'mol krediti",
      "Depozit mahsulotlari va murakkab foizlar hisobi",
    ],
    expertiseAreas: [
      {
        iconKey: 'Receipt',
        titleRu: 'Налоги и НДФЛ',
        titleUz: 'Soliqlar va JShShS',
        descriptionRu:
          'Глубокое знание Налогового кодекса РУз: НДФЛ 12%, НДС 12%, налог на прибыль, налог с оборота, льготы IT Park.',
        descriptionUz:
          "O'zbekiston Soliq kodeksini chuqur bilish: JShShS 12%, QQS 12%, foyda solig'i, aylanma solig'i, IT Park imtiyozlari.",
      },
      {
        iconKey: 'CreditCard',
        titleRu: 'Кредиты и ипотека',
        titleUz: 'Kreditlar va ipoteka',
        descriptionRu:
          'Аннуитетные и дифференцированные платежи, ПСК, досрочное погашение, льготная ипотека для молодых семей в Узбекистане.',
        descriptionUz:
          "Annuitet va differensial to'lovlar, kredit umumiy qiymati, muddatidan oldin to'lash, yosh oilalar uchun imtiyozli ipoteka.",
      },
      {
        iconKey: 'PiggyBank',
        titleRu: 'Депозиты и сбережения',
        titleUz: 'Depozitlar va jamg\'armalar',
        descriptionRu:
          'Расчёт простых и сложных процентов, капитализация, валютные вклады, сравнение предложений банков Узбекистана.',
        descriptionUz:
          "Oddiy va murakkab foizlarni hisoblash, kapitalizatsiya, valyutadagi omonatlar, O'zbekiston banklari takliflarini taqqoslash.",
      },
      {
        iconKey: 'Banknote',
        titleRu: 'Зарплата и кадровый учёт',
        titleUz: 'Ish haqi va kadrlar hisobi',
        descriptionRu:
          'Расчёт зарплаты «на руки» и «грязными», ИНПС, социальный налог, отпускные, больничные, надбавки и удержания.',
        descriptionUz:
          "«Qo'lga» va «brutto» ish haqini hisoblash, IJPH, ijtimoiy soliq, ta'til puli, kasallik varaqasi, qo'shimchalar va ushlanmalar.",
      },
    ],
    experienceYearsTotal: 14,
    experienceYearsFinance: 8,
    email: 'info@calk.uz',
    location: 'Kazakhstan',
    languages: ['Русский'],
    social: [
      { label: 'Profinance.kz', url: 'https://profinance.kz', iconKey: 'BarChart3' },
      { label: 'Zanimaem.kz', url: 'https://zanimaem.kz', iconKey: 'Briefcase' },
      { label: 'Calk.kz', url: 'https://calk.kz', iconKey: 'Calculator' },
      { label: 'Telegram', url: 'https://t.me/calkuz_bot', iconKey: 'Send' },
      { label: 'Email', url: 'mailto:info@calk.uz', iconKey: 'Mail' },
    ],
    projects: [
      {
        name: 'Profinance.kz',
        url: 'https://profinance.kz',
        descriptionRu:
          'Аналитический портал о финансах в Казахстане. Обзоры банковских ставок, рейтинги МФО, материалы о личных финансах.',
        descriptionUz:
          "Qozog'iston moliya tahliliy portali. Bank stavkalari sharhlari, MMTlar reytinglari, shaxsiy moliya bo'yicha materiallar.",
      },
      {
        name: 'Zanimaem.kz',
        url: 'https://zanimaem.kz',
        descriptionRu:
          'Один из первых финансовых маркетплейсов Казахстана (с 2016 года). Сравнение кредитов, микрозаймов и банковских продуктов.',
        descriptionUz:
          "Qozog'istondagi birinchi moliyaviy marketpleyslardan biri (2016-yildan). Kreditlar, mikroqarzlar va bank mahsulotlarini taqqoslash.",
      },
      {
        name: 'Calk.kz',
        url: 'https://calk.kz',
        descriptionRu:
          'Платформа онлайн-калькуляторов для Казахстана. Налоги, кредиты, зарплаты по законодательству РК.',
        descriptionUz:
          "Qozog'iston uchun onlayn kalkulyatorlar platformasi. Qozog'iston Respublikasi qonunchiligiga muvofiq soliqlar, kreditlar, ish haqi.",
      },
    ],
    timeline: [
      {
        yearRu: '2011',
        yearUz: '2011',
        titleRu: 'Старт в интернет-маркетинге',
        titleUz: 'Internet-marketingda boshlanish',
        descriptionRu:
          'Первые проекты в digital-маркетинге: SEO, контент-стратегия, продуктовая аналитика для финансовых сервисов СНГ.',
        descriptionUz:
          "Raqamli marketingdagi birinchi loyihalar: SEO, kontent strategiyasi, MDH moliyaviy xizmatlari uchun mahsulot tahlili.",
      },
      {
        yearRu: '2016',
        yearUz: '2016',
        titleRu: 'Запуск Zanimaem.kz',
        titleUz: 'Zanimaem.kz ni ishga tushirish',
        descriptionRu:
          'Создание одного из первых финансовых маркетплейсов в Казахстане — сравнение кредитов и микрозаймов.',
        descriptionUz:
          "Qozog'istondagi birinchi moliyaviy marketpleyslardan birini yaratish — kreditlar va mikroqarzlarni taqqoslash.",
      },
      {
        yearRu: '2018',
        yearUz: '2018',
        titleRu: 'Профильная аналитика',
        titleUz: 'Mutaxassis tahliliyoti',
        descriptionRu:
          'Запуск Profinance.kz — портала с банковской аналитикой, обзорами ставок и рейтингами МФО.',
        descriptionUz:
          "Profinance.kz ni — bank tahliliyoti, stavkalar sharhlari va MMTlar reytinglari portalini ishga tushirish.",
      },
      {
        yearRu: '2024',
        yearUz: '2024',
        titleRu: 'Calk.kz',
        titleUz: 'Calk.kz',
        descriptionRu:
          'Запуск платформы онлайн-калькуляторов для жителей Казахстана с привязкой к Налоговому кодексу РК.',
        descriptionUz:
          "Qozog'iston aholisi uchun onlayn kalkulyatorlar platformasini Qozog'iston Soliq kodeksiga bog'lab ishga tushirish.",
      },
      {
        yearRu: '2025',
        yearUz: '2025',
        titleRu: 'Calk.UZ',
        titleUz: 'Calk.UZ',
        descriptionRu:
          'Адаптация методологии для Узбекистана: 78 калькуляторов, двуязычный интерфейс (русский и узбекский), привязка к lex.uz, cbu.uz, soliq.uz.',
        descriptionUz:
          "Metodologiyani O'zbekiston uchun moslashtirish: 78 kalkulyator, ikki tilli interfeys (rus va o'zbek), lex.uz, cbu.uz, soliq.uz ga bog'lash.",
      },
      {
        yearRu: '2026',
        yearUz: '2026',
        titleRu: 'Расширение Calk.UZ',
        titleUz: 'Calk.UZ ni kengaytirish',
        descriptionRu:
          'Обновление калькуляторов под новый Налоговый кодекс 2026, добавление мобильного приложения для Android, публикация методологии расчётов.',
        descriptionUz:
          "Kalkulyatorlarni 2026 yilgi yangi Soliq kodeksi ostida yangilash, Android uchun mobil ilovani qo'shish, hisoblash metodologiyasini nashr etish.",
      },
    ],
    imagePath: '/og/author-konstantin.jpg',
  },
]

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug)
}

export const PRIMARY_AUTHOR_SLUG = 'konstantin-yakovlev'
