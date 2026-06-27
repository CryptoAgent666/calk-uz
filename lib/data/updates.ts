/**
 * Single source of truth for the changelog shown both on /updates and on
 * the homepage "Что недавно обновили" block. Edit only here.
 */

export interface UpdateItem {
  titleRu: string
  titleUz: string
  descRu: string
  descUz: string
}

export interface UpdateBlock {
  /** ISO date — used for sorting and JSON-LD `dateModified` */
  date: string
  dateLabelRu: string
  dateLabelUz: string
  items: UpdateItem[]
}

export const UPDATES: UpdateBlock[] = [
  {
    date: "2026-06-27",
    dateLabelRu: "27 июня 2026",
    dateLabelUz: "2026-yil 27-iyun",
    items: [
      {
        titleRu: "Коммунальные тарифы — повышение электричества и газа с 1 июня 2026",
        titleUz: "Kommunal tariflar — elektr va gaz 2026-yil 1-iyundan oshdi",
        descRu:
          "Калькуляторы ЖКУ обновлены под новые ставки (ПКМ-243): электричество 650–2200 сум/кВт·ч по ступеням, газ от 1100 сум/м³. Тарифы 2025 года заменены актуальными.",
        descUz:
          "Kommunal kalkulyatorlar yangi tariflarga moslandi (243-son qaror): elektr energiyasi pog'onalar bo'yicha 650–2200 so'm/kVt·s, gaz 1100 so'm/m³ dan. 2025-yil tariflari yangilandi.",
      },
      {
        titleRu: "Налог на имущество физлиц — ставки и площади 2026",
        titleUz: "Jismoniy shaxslar mol-mulk solig'i — 2026 stavkalari va maydonlari",
        descRu:
          "Ставки проиндексированы: 0,36% (до 200 м²), 0,48% (200–500 м²), 0,64% (свыше 500 м²). Исправлены площадные диапазоны — раньше использовались устаревшие границы 100/200 м².",
        descUz:
          "Stavkalar indeksatsiya qilindi: 0,36% (200 m² gacha), 0,48% (200–500 m²), 0,64% (500 m² dan ortiq). Maydon oraliqlari to'g'rilandi — avval 100/200 m² eskirgan chegaralar edi.",
      },
      {
        titleRu: "Растаможка авто — пересчитанная модель пошлины",
        titleUz: "Avto bojxonasi — qayta hisoblangan boj modeli",
        descRu:
          "Таможенный калькулятор приведён к реальной схеме 2026: пошлина 15% (новые) / 40% (б/у) + надбавка 0,4–1,0 $/см³, корректный утильсбор и регистрация (~13 БРВ). Льгота на импорт электромобилей продлена до 2030 года.",
        descUz:
          "Bojxona kalkulyatori 2026-yilgi haqiqiy sxemaga keltirildi: boj 15% (yangi) / 40% (ishlatilgan) + sm³ uchun 0,4–1,0 $, to'g'ri utilizatsiya yig'imi va ro'yxatga olish (~13 BHM). Elektromobil importiga imtiyoz 2030-yilgacha.",
      },
      {
        titleRu: "Налоги: порог НДС, НДФЛ нерезидентов, сроки уплаты",
        titleUz: "Soliqlar: QQS bo'sag'asi, norezident JShShS, to'lov muddatlari",
        descRu:
          "Порог обязательной регистрации НДС и упрощёнки — 1 млрд сум оборота (вместо устаревших значений). НДФЛ нерезидентов — 12% (был 20%). Имущественный, земельный и транспортный налог физлица платят до 15 апреля и 15 октября. Перенос убытков — без ограничения по сроку.",
        descUz:
          "QQS va soddalashtirilgan soliqqa ro'yxatdan o'tish bo'sag'asi — 1 mlrd so'm aylanma. Norezident JShShS — 12% (20% edi). Mol-mulk, yer va transport solig'ini jismoniy shaxslar 15 aprel va 15 oktyabrgacha to'laydi. Zararlarni o'tkazish — muddat cheklovisiz.",
      },
      {
        titleRu: "Трудовое и социальное: отпуск, больничный, алименты, пенсия",
        titleUz: "Mehnat va ijtimoiy: ta'til, kasallik varaqasi, aliment, pensiya",
        descRu:
          "Минимальный отпуск — 21 календарный день, 9 праздничных дней, годовой лимит сверхурочных отменён. Больничный: до 8 лет стажа — 60%, свыше — 80%. Алименты — не менее 26,5% МРОТ; пособие по уходу за ребёнком до 2 лет — 60% МРОТ. Минимальная пенсия — 983 000 сум с 1 июля 2026.",
        descUz:
          "Eng kam ta'til — 21 kalendar kun, 9 bayram kuni, ortiqcha ish soatining yillik chegarasi bekor qilindi. Kasallik varaqasi: 8 yilgacha — 60%, undan ortiq — 80%. Aliment — MROTning kamida 26,5%; 2 yoshgacha bola parvarishi nafaqasi — MROTning 60%. Eng kam pensiya — 2026-yil 1-iyuldan 983 000 so'm.",
      },
      {
        titleRu: "Госпошлины и ОСАГО",
        titleUz: "Davlat bojlari va OSAGO",
        descRu:
          "Госпошлины уточнены: регистрация брака 0,2 БРВ, ООО — 1 БРВ, иск в суд — 4% цены иска. ОСАГО: максимальная выплата — до 80 млн сум, штраф за вождение без полиса — 1 БРВ.",
        descUz:
          "Davlat bojlari aniqlandi: nikoh ro'yxati 0,2 BHM, MChJ — 1 BHM, sudga da'vo — da'vo qiymatining 4%. OSAGO: maksimal to'lov — 80 mln so'mgacha, polissiz haydash uchun jarima — 1 BHM.",
      },
    ],
  },
  {
    date: "2026-05-23",
    dateLabelRu: "23 мая 2026",
    dateLabelUz: "2026-yil 23-may",
    items: [
      {
        titleRu: "Блок «Краткий ответ» на страницах калькуляторов",
        titleUz: "Kalkulyator sahifalarida «Qisqa javob» bloki",
        descRu:
          "Над основной статьёй калькуляторов добавлен блок «Краткий ответ» — прямой ответ в 1–3 предложениях с актуальными цифрами (ставки и суммы 2026 года). Помогает мгновенно получить суть расчёта и повышает цитируемость сайта в AI-поиске (ChatGPT, Perplexity, Google AI Overviews). Охвачено более 20 калькуляторов.",
        descUz:
          "Kalkulyatorlarning asosiy maqolasi tepasiga «Qisqa javob» bloki qo'shildi — dolzarb raqamlar (2026-yil stavkalari va summalari) bilan 1–3 jumlalik to'g'ridan-to'g'ri javob. Hisob mohiyatini darhol tushunishga yordam beradi va saytning AI-qidiruvda (ChatGPT, Perplexity, Google AI Overviews) iqtibos keltirilishini oshiradi. 20 dan ortiq kalkulyator qamrab olindi.",
      },
      {
        titleRu: "Точность отображения процентных ставок",
        titleUz: "Foiz stavkalarini ko'rsatish aniqligi",
        descRu:
          "Исправлены артефакты округления чисел с плавающей точкой в справочных таблицах ставок: теперь отображается, например, 0,34% вместо 0,33999999%. На сами расчёты это не влияло — только на отображение чисел в таблицах.",
        descUz:
          "Stavkalar jadvallaridagi suzuvchi nuqtali sonlarni yaxlitlash xatolari tuzatildi: endi, masalan, 0,33999999% o'rniga 0,34% ko'rsatiladi. Bu hisob-kitoblarning o'ziga ta'sir qilmadi — faqat jadvallardagi sonlar ko'rinishiga.",
      },
      {
        titleRu: "Структурированные данные и страница автора",
        titleUz: "Strukturalashgan ma'lumotlar va muallif sahifasi",
        descRu:
          "Углублена разметка Schema.org — поисковикам и AI-сервисам проще понимать содержимое страниц. Биография автора сокращена и приведена в соответствие с фактами (хронология проектов: Zanimaem.kz — 2016, Calk.kz — 2025, Profinance.kz и Calk.UZ — 2026).",
        descUz:
          "Schema.org razmetkasi chuqurlashtirildi — qidiruv tizimlari va AI-xizmatlar sahifa mazmunini osonroq tushunadi. Muallif biografiyasi qisqartirildi va faktlarga muvofiqlashtirildi (loyihalar xronologiyasi: Zanimaem.kz — 2016, Calk.kz — 2025, Profinance.kz va Calk.UZ — 2026).",
      },
    ],
  },
  {
    date: "2026-05-03",
    dateLabelRu: "3 мая 2026",
    dateLabelUz: "2026-yil 3-may",
    items: [
      {
        titleRu: "Транспортный налог — ставки приведены в соответствие с НК ст. 446",
        titleUz: "Transport solig'i — stavkalar Soliq kodeksining 446-moddasiga muvofiqlashtirildi",
        descRu:
          "Калькулятор использовал самодельные ставки (1, 2, 3, 5, 7, 10 БРВ). Теперь ставки соответствуют закону: до 1.5 л — 1.5 БРВ (618 000), 1.5–2.0 л — 3 БРВ (1 236 000), 2.0–3.0 л — 5 БРВ (2 060 000), свыше 3.0 л — 7.5 БРВ (3 090 000). Возрастной коэффициент убран — НК Узбекистана его не предусматривает (ставка зависит только от объёма двигателя).",
        descUz:
          "Kalkulyator o'zboshimcha stavkalardan foydalanardi (1, 2, 3, 5, 7, 10 BHK). Endi stavkalar qonunga muvofiq: 1.5 l gacha — 1.5 BHK (618 000), 1.5–2.0 l — 3 BHK (1 236 000), 2.0–3.0 l — 5 BHK (2 060 000), 3.0 l dan ortiq — 7.5 BHK (3 090 000). Yosh koeffitsiyenti olib tashlandi — Soliq kodeksi uni nazarda tutmaydi (stavka faqat dvigatel hajmiga bog'liq).",
      },
      {
        titleRu: "Курс USD по умолчанию обновлён",
        titleUz: "Standart USD kursi yangilandi",
        descRu:
          "Резервный курс USD/UZS снижен с 12 780 до 11 938 сум — это курс ЦБ на 1 мая 2026. Затрагивает калькуляторы таможни, виз и переводов в случаях, когда live-курс с cbu.uz недоступен. Сум укрепился к доллару примерно на 6,6% за две недели.",
        descUz:
          "USD/UZS zaxira kursi 12 780 dan 11 938 so'mga tushirildi — bu MB ning 2026-yil 1-may holati. Cbu.uz ning jonli kursi mavjud bo'lmaganda bojxona, viza va pul o'tkazmalari kalkulyatorlariga ta'sir qiladi. So'm ikki hafta ichida dollarga nisbatan taxminan 6,6% ga mustahkamlandi.",
      },
    ],
  },
  {
    date: "2026-04-29",
    dateLabelRu: "29 апреля 2026",
    dateLabelUz: "2026-yil 29-aprel",
    items: [
      {
        titleRu: "ИНПС теперь считается отдельно от НДФЛ",
        titleUz: "IJPH endi JShShSdan alohida hisoblanadi",
        descRu:
          "Зарплатный калькулятор и расчёт расходов работодателя обновлены. ИНПС 0,1% — это отдельное удержание поверх НДФЛ 12%, а не его часть. Итого с зарплаты удерживается 12,1% (7,6% для IT Park). Раньше формула давала на 0,1% больше «на руки».",
        descUz:
          "Ish haqi kalkulyatori va ish beruvchi xarajatlari yangilandi. IJPH 0,1% — bu JShShS 12% ustiga alohida ushlanma, uning bir qismi emas. Ish haqidan jami 12,1% ushlanadi (IT Park uchun 7,6%). Ilgari formula qo'lga 0,1% ko'p natija berardi.",
      },
      {
        titleRu: "Транспортный налог — возрастной коэффициент исправлен",
        titleUz: "Transport solig'i — yosh koeffitsiyenti tuzatildi",
        descRu:
          "Раньше старые автомобили платили меньше налога — это было неверно. По НК ст. 446 коэффициент идёт В СТОРОНУ ПОВЫШЕНИЯ: 0–3 года 1,0×, 3–7 лет 1,2×, 7–10 лет 1,4×, старше 10 лет — 1,5×. Налог на 10-летнее авто теперь рассчитывается корректно.",
        descUz:
          "Ilgari eski avtomobillar kamroq soliq to'lardi — bu noto'g'ri edi. Soliq kodeksining 446-moddasiga ko'ra koeffitsiyent OSHIRILADI: 0–3 yil 1,0×, 3–7 yil 1,2×, 7–10 yil 1,4×, 10 yildan eski 1,5×. 10 yillik avtoga soliq endi to'g'ri hisoblanadi.",
      },
      {
        titleRu: "ИП на общем режиме — соцналог 12% от чистого дохода",
        titleUz: "Umumiy rejimdagi YaTT — ijtimoiy soliq sof daromaddan 12%",
        descRu:
          "Калькулятор ИП теперь учитывает фактическую соцналоговую нагрузку: max(12 БРВ минимум, 12% от чистого дохода). Раньше всегда считалось только 12 БРВ — для ИП с большим доходом это занижало сумму налога.",
        descUz:
          "YaTT kalkulyatori endi haqiqiy ijtimoiy soliq yukini hisobga oladi: max(12 BHK minimum, sof daromaddan 12%). Ilgari faqat 12 BHK hisoblanardi — bu yuqori daromadli YaTTlar uchun soliq summasini kamaytirardi.",
      },
      {
        titleRu: "ООО — отдельная строка «общий отток средств с НДС»",
        titleUz: "MChJ — «QQS bilan jami pul oqimi» alohida qatori",
        descRu:
          "В калькуляторе ООО НДС теперь показывается отдельной строкой totalCashOutflow для планирования cash-flow. Сама нагрузка на прибыль (totalTaxBurden) НДС не включает — НДС платит покупатель, организация лишь перечисляет.",
        descUz:
          "MChJ kalkulyatorida QQS endi cash-flow rejalashtirish uchun alohida totalCashOutflow qatorida ko'rsatiladi. Foyda yuki (totalTaxBurden) QQSni o'z ichiga olmaydi — QQSni xaridor to'laydi, tashkilot esa faqat o'tkazadi.",
      },
      {
        titleRu: "США — добавлен Visa Integrity Fee $250",
        titleUz: "AQSh — Visa Integrity Fee $250 qo'shildi",
        descRu:
          "С октября 2024 США взимают дополнительный Visa Integrity Fee — $250 при выдаче туристической визы (B1/B2) сверх консульского сбора $185. Калькулятор виз теперь учитывает оба сбора. Шенген — €80 → €90 (с июня 2024).",
        descUz:
          "2024-yil oktyabrdan AQSh turistik viza (B1/B2) berilganda $185 konsullik to'lovidan tashqari qo'shimcha Visa Integrity Fee — $250 oladi. Viza kalkulyatori endi ikkala to'lovni hisobga oladi. Shengen — €80 → €90 (2024-yil iyundan).",
      },
      {
        titleRu: "ОСАГО — реальный региональный множитель",
        titleUz: "OSAGO — real hududiy ko'paytuvchi",
        descRu:
          "Поле «коэффициент региона» теперь показывает фактический множитель: 1,2 для Ташкента и области, 1,0 для других регионов. Раньше всегда отображалось «1» — было неинформативно.",
        descUz:
          "«Hudud koeffitsiyenti» maydoni endi haqiqiy ko'paytuvchini ko'rsatadi: Toshkent va viloyati uchun 1,2, boshqa hududlar uchun 1,0. Ilgari har doim «1» ko'rinardi — bu informativ emas edi.",
      },
      {
        titleRu: "Свадьба, хлопок — цены актуализированы на 2026",
        titleUz: "To'y, paxta — narxlar 2026-yilga yangilandi",
        descRu:
          "Свадебный калькулятор: блюдо 150 → 200 тыс., музыка 5 → 6,5 млн, платье 10 → 13 млн, фото 3 → 4 млн сум. Хлопок: урожайность 2800 → 3000 кг/га, закупочная цена 6 000 → 9 000 сум/кг (по данным Узпахтасаноат на 2026).",
        descUz:
          "To'y kalkulyatori: taom 150 → 200 ming, musiqa 5 → 6,5 mln, libos 10 → 13 mln, foto 3 → 4 mln so'm. Paxta: hosildorlik 2800 → 3000 kg/ga, xarid narxi 6 000 → 9 000 so'm/kg (Uzpaxtasanoat 2026 ma'lumoti).",
      },
      {
        titleRu: "Курс USD как параметр",
        titleUz: "USD kursi parametr sifatida",
        descRu:
          "Калькуляторы таможни, переводов и виз теперь принимают курс USD/UZS параметром, что позволяет передавать актуальный курс с cbu.uz без переразвёртывания. Курс по умолчанию обновлён до 12 780 сум (CBU, конец апреля 2026).",
        descUz:
          "Bojxona, pul o'tkazmalari va viza kalkulyatorlari endi USD/UZS kursini parametr sifatida qabul qiladi, bu cbu.uz dagi joriy kursni qayta yoyishsiz uzatish imkonini beradi. Standart kurs 12 780 so'mga yangilandi (CBU, 2026-yil aprel oxiri).",
      },
    ],
  },
  {
    date: "2026-04-18",
    dateLabelRu: "18 апреля 2026",
    dateLabelUz: "2026-yil 18-aprel",
    items: [
      {
        titleRu: "Больничный и декретный — новая формула 2026",
        titleUz: "Kasallik varaqasi va dekret — 2026-yildagi yangi formula",
        descRu:
          "С 1 января 2026 пособия платит Фонд государственного социального страхования. Расчёт теперь по страховому стажу (в месяцах), а не по общему стажу. Больничный — нужно минимум 6 месяцев стажа, декретный — минимум 10 месяцев.",
        descUz:
          "2026-yil 1-yanvardan nafaqalarni Davlat ijtimoiy sug'urta jamg'armasi to'laydi. Hisob-kitob sug'urta staji bo'yicha (oylarda), umumiy staj bo'yicha emas. Kasallik varaqasi uchun — kamida 6 oy, dekret uchun — kamida 10 oy staj talab qilinadi.",
      },
      {
        titleRu: "Пенсия — возраст женщин 55 лет",
        titleUz: "Pensiya — ayollar uchun 55 yosh",
        descRu:
          "Исправлен возраст выхода на пенсию для женщин: 55 лет (54 года при стаже от 20 лет). Для мужчин — 60 лет, без изменений.",
        descUz:
          "Ayollar uchun pensiya yoshi tuzatildi: 55 yil (20 yildan ortiq staj bilan 54 yil). Erkaklar uchun — 60 yil, o'zgarishsiz.",
      },
      {
        titleRu: "Закят — актуальная цена золота",
        titleUz: "Zakat — oltinning joriy narxi",
        descRu:
          "Цена грамма золота по умолчанию поднята до 1 900 000 сум — это рыночная цена на апрель 2026. Нисаб теперь считается корректно.",
        descUz:
          "Gram oltinning standart narxi 1 900 000 so'mga ko'tarildi — bu 2026-yil apreldagi bozor narxi. Nisob endi to'g'ri hisoblanadi.",
      },
      {
        titleRu: "Фитр-садака — все 6 вариантов на Рамадан-2026",
        titleUz: "Fitr-sadaqa — Ramazon-2026 uchun 6 ta variant",
        descRu:
          "По данным Управления мусульман Узбекистана: пшеница 10 000, мука 12 000, ячмень 20 000, изюм 110 000, финики 200 000 сум на человека. Цена подставляется автоматически при выборе продукта.",
        descUz:
          "O'zbekiston musulmonlari idorasi ma'lumotlariga ko'ra: bug'doy 10 000, un 12 000, arpa 20 000, mayiz 110 000, xurmo 200 000 so'm kishi boshiga. Mahsulot tanlanganda narx avtomatik qo'yiladi.",
      },
      {
        titleRu: "Цены на топливо — апрель 2026",
        titleUz: "Yoqilg'i narxlari — 2026-yil aprel",
        descRu:
          "АИ-92 — 11 200, АИ-95 — 13 500, АИ-100 — 16 000, дизель — 12 500, метан — 5 350, пропан — 5 500 сум. AI-91 убран — больше не продаётся.",
        descUz:
          "AI-92 — 11 200, AI-95 — 13 500, AI-100 — 16 000, dizel — 12 500, metan — 5 350, propan — 5 500 so'm. AI-91 olib tashlandi — endi sotilmaydi.",
      },
      {
        titleRu: "Ставки банков — реальный рынок на апрель 2026",
        titleUz: "Banklar stavkalari — 2026-yil aprelgi real bozor",
        descRu:
          "Обновлены ставки 16 банков. Вклады в сумах — 18–22,5% годовых, кредиты — 22–28%, ипотека — 17–23%. Частные банки дают чуть больше, государственные — стабильнее.",
        descUz:
          "16 ta bankning stavkalari yangilandi. So'mdagi omonatlar — yillik 18–22,5%, kreditlar — 22–28%, ipoteka — 17–23%. Xususiy banklar biroz yuqoriroq, davlat banklari esa barqarorroq.",
      },
      {
        titleRu: "Тариф канализации — 1 456 сум/м³",
        titleUz: "Kanalizatsiya tarifi — 1 456 so'm/m³",
        descRu:
          "Обновлён на актуальный тариф Ташкентской области с июля 2025 (с НДС). Раньше калькулятор считал по устаревшему тарифу 2 182 сум/м³.",
        descUz:
          "2025-yil iyuldan Toshkent viloyati uchun amaldagi tarifga yangilandi (QQS bilan). Ilgari kalkulyator eskirgan 2 182 so'm/m³ bo'yicha hisoblab kelgan.",
      },
    ],
  },
  {
    date: "2026-04-16",
    dateLabelRu: "16 апреля 2026",
    dateLabelUz: "2026-yil 16-aprel",
    items: [
      {
        titleRu: "ОСАГО — новые тарифы 2026",
        titleUz: "OSAGO — 2026-yildagi yangi tariflar",
        descRu:
          "С 1 января 2026 ОСАГО подорожало: Ташкент и область — 192 000 сум, другие регионы — 160 000. Лимит страховой выплаты удвоен — до 80 млн сум.",
        descUz:
          "2026-yil 1-yanvardan OSAGO qimmatladi: Toshkent shahri va viloyati — 192 000 so'm, boshqa hududlar — 160 000. Sug'urta to'lovi chegarasi ikki barobar oshib, 80 mln so'mga yetdi.",
      },
      {
        titleRu: "Живые курсы Центрального банка",
        titleUz: "Markaziy bankning jonli valyuta kurslari",
        descRu:
          "Валютные калькуляторы (конвертер, переводы, таможня и др.) теперь подтягивают актуальные курсы USD, EUR, RUB и других валют с сайта ЦБ РУз автоматически.",
        descUz:
          "Valyuta kalkulyatorlari (konverter, pul o'tkazmalari, bojxona va boshq.) endi USD, EUR, RUB va boshqa valyutalarning joriy kurslarini O'zR Markaziy banki saytidan avtomatik oladi.",
      },
      {
        titleRu: "Сверхурочные по Трудовому кодексу",
        titleUz: "Mehnat kodeksi bo'yicha ish vaqtidan tashqari ishlar",
        descRu:
          "Калькулятор переработки теперь считает правильно: первые 2 часа — 1,5×, дальше — 2×. В праздники — всегда 2×.",
        descUz:
          "Ish vaqtidan tashqari soatlar kalkulyatori endi to'g'ri hisoblaydi: dastlabki 2 soat — 1,5×, keyingi soatlar — 2×. Bayram kunlarida har doim 2×.",
      },
      {
        titleRu: "Мобильное приложение в Google Play",
        titleUz: "Google Play'dagi mobil ilova",
        descRu:
          "Теперь Calk.UZ доступен как приложение на Android. Ссылка в футере сайта.",
        descUz:
          "Endi Calk.UZ Android uchun ilova ko'rinishida ham mavjud. Havola sayt footerida.",
      },
    ],
  },
]
