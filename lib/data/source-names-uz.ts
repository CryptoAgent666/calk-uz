/**
 * Узбекские названия источников для блока «Источники» на страницах калькуляторов.
 *
 * Массив `sources` в calculator-articles.ts хранит одно поле `name`, поэтому на
 * узбекских страницах названия оставались русскими. Таблица переводит их по
 * ключу — русскому названию; для отсутствующих ключей показывается оригинал.
 */
const SOURCE_NAMES_UZ: Record<string, string> = {
  'IT Park': 'IT Park',
  'Ipoteka bank — Образовательные кредиты': "Ipoteka bank — Ta'lim kreditlari",
  'Uztelecom — Тарифы': 'Uztelecom — Tariflar',
  'Uzum Bank': 'Uzum Bank',
  'Uzum Market': 'Uzum Market',
  'Waqf фонд': 'Vaqf jamg\'armasi',
  'Waqf фонд Узбекистана': "O'zbekiston vaqf jamg'armasi",
  'Банковское законодательство': 'Bank qonunchiligi',
  'ВОЗ — Индекс массы тела': 'JSST — Tana massa indeksi',
  'ВОЗ — Индексы здоровья': "JSST — Sog'liq indekslari",
  'ВОЗ — Материнское здоровье': "JSST — Ona salomatligi",
  'ВОЗ — Рекомендации по питанию': "JSST — Ovqatlanish bo'yicha tavsiyalar",
  'Всемирный банк — Миграция': 'Jahon banki — Migratsiya',
  'Государственная программа ипотеки': 'Davlat ipoteka dasturi',
  'Государственный таможенный комитет': 'Davlat bojxona qo\'mitasi',
  'Единый портал интерактивных услуг': 'Yagona interaktiv xizmatlar portali',
  'Закон ЗРУ-1101 «О государственном социальном страховании»': "ZRU-1101 «Davlat ijtimoiy sug'urtasi to'g'risida» qonuni",
  'Закон о банковской деятельности': "Bank faoliyati to'g'risidagi qonun",
  'Закон о пенсионном обеспечении': "Pensiya ta'minoti to'g'risidagi qonun",
  'Закон об ОСАГО': "OSAGO to'g'risidagi qonun",
  'Институт питания РУз': "O'zbekiston Respublikasi Ovqatlanish instituti",
  'Кадастровая палата': 'Kadastr palatasi',
  'МИД Узбекистана': "O'zbekiston Tashqi ishlar vazirligi",
  'Министерство высшего образования РУз': "O'zbekiston Respublikasi Oliy ta'lim vazirligi",
  'Министерство здравоохранения РУз': "O'zbekiston Respublikasi Sog'liqni saqlash vazirligi",
  'Министерство цифровых технологий': 'Raqamli texnologiyalar vazirligi',
  'Министерство юстиции РУз': "O'zbekiston Respublikasi Adliya vazirligi",
  'Минтруд РУз': "O'zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi",
  'Налоговый кодекс РУз': "O'zbekiston Respublikasi Soliq kodeksi",
  'Налоговый кодекс РУз, ст. 17 (виды налогов)': "O'zbekiston Respublikasi Soliq kodeksi, 17-modda (soliq turlari)",
  'Налоговый кодекс — Госпошлины': 'Soliq kodeksi — Davlat bojlari',
  'Пенсионный фонд РУз': "O'zbekiston Respublikasi Pensiya jamg'armasi",
  'Портал абитуриентов': 'Abituriyentlar portali',
  'Постановление о госпошлинах': "Davlat bojlari to'g'risidagi qaror",
  'Постановление о тарифах на воду': "Suv tariflari to'g'risidagi qaror",
  'Постановление о тарифах на газ': "Gaz tariflari to'g'risidagi qaror",
  'Постановление о тарифах на электроэнергию': "Elektr energiya tariflari to'g'risidagi qaror",
  'Приказ МВД о госпошлинах за регистрацию ТС (рег. № 2303)': "IIVning transport vositalarini ro'yxatdan o'tkazish bojlari to'g'risidagi buyrug'i (ro'yxat № 2303)",
  'Программа «Эл-юрт умиди»': "«El-yurt umidi» dasturi",
  'Рынок недвижимости Узбекистана': "O'zbekiston ko'chmas mulk bozori",
  'Семейный кодекс РУз': "O'zbekiston Respublikasi Oila kodeksi",
  'Судебная практика': 'Sud amaliyoti',
  'Таможенный кодекс РУз': "O'zbekiston Respublikasi Bojxona kodeksi",
  'Тарифы на коммунальные услуги': 'Kommunal xizmatlar tariflari',
  'Трудовой кодекс РУз': "O'zbekiston Respublikasi Mehnat kodeksi",
  'Узбекэнерго — Тарифы': "O'zbekenergo — Tariflar",
  'Узсувтаъминот': "O'zsuvta'minot",
  'Узтрансгаз — Тарифы': "O'ztransgaz — Tariflar",
  'Узэнерго': "O'zenergo",
  'Указ Президента о БРВ': "BHM to'g'risidagi Prezident farmoni",
  'Управление мусульман Узбекистана': "O'zbekiston musulmonlari idorasi",
  'Фонд гарантирования вкладов': "Omonatlarni kafolatlash jamg'armasi",
  'Фондовая биржа Узбекистана': "O'zbekiston fond birjasi",
  'Худудгазтаъминот': "Hududgazta'minot",
  'Центральный банк РУз': "O'zbekiston Respublikasi Markaziy banki",
  'Центральный банк РУз — Ставки': "O'zbekiston Respublikasi Markaziy banki — Stavkalar",
  'Центральный банк РУз — курсы валют': "O'zbekiston Respublikasi Markaziy banki — valyuta kurslari",
}

/** Название источника на языке страницы; для узбекского — перевод, если он есть. */
export function localizedSourceName(name: string, locale: string): string {
  return locale === 'uz' ? SOURCE_NAMES_UZ[name] ?? name : name
}
