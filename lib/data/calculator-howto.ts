export interface HowToStep {
  name: string
  text: string
}

export interface CalculatorHowTo {
  slug: string
  stepsRu: HowToStep[]
  stepsUz: HowToStep[]
  totalTimeMinutes: number
}

export const CALCULATOR_HOWTOS: CalculatorHowTo[] = [
  {
    slug: 'salary',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите зарплату', text: 'Укажите сумму начисленной (gross) заработной платы в сумах.' },
      { name: 'Выберите тип расчёта', text: 'Укажите, вводите ли вы «грязную» зарплату (до вычетов) или «чистую» (на руки).' },
      { name: 'Укажите льготы', text: 'Если у вас есть льготы по НДФЛ (инвалидность, участник войны и др.), отметьте их.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» и получите сумму на руки, НДФЛ, ИНПС и все отчисления.' },
    ],
    stepsUz: [
      { name: 'Ish haqini kiriting', text: "Hisoblangan (gross) ish haqi summasini so'mda kiriting." },
      { name: 'Hisoblash turini tanlang', text: "«Yalpi» (ajratmalardan oldin) yoki «sof» (qo'lga tegadigan) ish haqini kiritayotganingizni tanlang." },
      { name: "Imtiyozlarni ko'rsating", text: "JShShS bo'yicha imtiyozlaringiz bo'lsa (nogironlik, urush qatnashchisi va boshq.), belgilang." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing va qo'lga tegadigan summa, JShShS, INPS va barcha ajratmalarni ko'ring." },
    ],
  },
  {
    slug: 'income-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите сумму дохода за период в узбекских сумах.' },
      { name: 'Выберите вычеты', text: 'Отметьте применимые налоговые вычеты и льготы (IT Park, инвалидность и др.).' },
      { name: 'Нажмите «Рассчитать»', text: 'Калькулятор применит ставку НДФЛ 12% и учтёт указанные вычеты.' },
      { name: 'Изучите результат', text: 'Получите сумму НДФЛ к уплате, эффективную ставку и чистый доход после налога.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: "Davr uchun daromad summasini o'zbek so'mida kiriting." },
      { name: 'Chegirmalarni tanlang', text: "Tegishli soliq chegirmalari va imtiyozlarni belgilang (IT Park, nogironlik va boshq.)." },
      { name: '«Hisoblash» tugmasini bosing', text: "Kalkulyator JShShS 12% stavkasini qo'llaydi va ko'rsatilgan chegirmalarni hisobga oladi." },
      { name: "Natijani o'rganing", text: "To'lanadigan JShShS summasini, samarali stavkani va soliqdan keyingi sof daromadni ko'ring." },
    ],
  },
  {
    slug: 'credit',
    totalTimeMinutes: 3,
    stepsRu: [
      { name: 'Введите сумму кредита', text: 'Укажите желаемую сумму кредита в узбекских сумах.' },
      { name: 'Укажите процентную ставку', text: 'Введите годовую процентную ставку банка.' },
      { name: 'Выберите срок кредита', text: 'Укажите срок кредитования в месяцах или годах.' },
      { name: 'Выберите тип платежей', text: 'Выберите аннуитетный (равными частями) или дифференцированный (убывающий) тип.' },
      { name: 'Получите график платежей', text: 'Нажмите «Рассчитать» и получите ежемесячный платёж, переплату и полный график.' },
    ],
    stepsUz: [
      { name: 'Kredit summasini kiriting', text: "Kerakli kredit summasini o'zbek so'mida kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Bankning yillik foiz stavkasini kiriting." },
      { name: 'Kredit muddatini tanlang', text: "Kreditlash muddatini oylar yoki yillarda ko'rsating." },
      { name: "To'lov turini tanlang", text: "Annuitet (teng qismlar) yoki differensial (kamayuvchi) turni tanlang." },
      { name: "To'lov jadvalini oling", text: "«Hisoblash» tugmasini bosing va oylik to'lov, ortiqcha to'lov va to'liq jadvalni ko'ring." },
    ],
  },
  {
    slug: 'mortgage',
    totalTimeMinutes: 3,
    stepsRu: [
      { name: 'Введите стоимость жилья', text: 'Укажите полную стоимость квартиры или дома в сумах.' },
      { name: 'Укажите первоначальный взнос', text: 'Введите сумму или процент первоначального взноса.' },
      { name: 'Установите процентную ставку', text: 'Введите годовую ставку ипотечного кредита.' },
      { name: 'Выберите срок ипотеки', text: 'Укажите срок кредитования (обычно 10–20 лет).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» и узнайте ежемесячный платёж, общую переплату и сумму кредита.' },
    ],
    stepsUz: [
      { name: 'Uy-joy narxini kiriting', text: "Kvartira yoki uyning to'liq narxini so'mda kiriting." },
      { name: "Boshlang'ich badalni ko'rsating", text: "Boshlang'ich badal summasini yoki foizini kiriting." },
      { name: "Foiz stavkasini o'rnating", text: "Ipoteka kreditining yillik stavkasini kiriting." },
      { name: 'Ipoteka muddatini tanlang', text: "Kreditlash muddatini ko'rsating (odatda 10-20 yil)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing va oylik to'lov, umumiy ortiqcha to'lov va kredit summasini bilib oling." },
    ],
  },
  {
    slug: 'deposit',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму вклада', text: 'Укажите сумму, которую хотите разместить на депозит.' },
      { name: 'Укажите процентную ставку', text: 'Введите годовую процентную ставку банка по вкладу.' },
      { name: 'Выберите срок вклада', text: 'Укажите срок размещения депозита в месяцах.' },
      { name: 'Получите доходность', text: 'Нажмите «Рассчитать» — узнайте сумму начисленных процентов и итоговую сумму.' },
    ],
    stepsUz: [
      { name: 'Omonat summasini kiriting', text: "Depozitga joylashtirmoqchi bo'lgan summaningizni kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Bankning omonat bo'yicha yillik foiz stavkasini kiriting." },
      { name: 'Omonat muddatini tanlang', text: "Depozit joylashtirish muddatini oylarda ko'rsating." },
      { name: 'Daromadni oling', text: "«Hisoblash» tugmasini bosing — hisoblangan foiz summasini va yakuniy summani bilib oling." },
    ],
  },
  {
    slug: 'customs',
    totalTimeMinutes: 3,
    stepsRu: [
      { name: 'Выберите тип автомобиля', text: 'Укажите, ввозите вы легковой автомобиль, грузовой или мотоцикл.' },
      { name: 'Укажите объём двигателя', text: 'Введите объём двигателя в кубических сантиметрах.' },
      { name: 'Выберите год выпуска', text: 'Укажите год выпуска транспортного средства.' },
      { name: 'Введите стоимость', text: 'Укажите таможенную стоимость автомобиля в долларах или сумах.' },
      { name: 'Получите расчёт пошлин', text: 'Нажмите «Рассчитать» — получите акциз, таможенную пошлину, НДС и общую сумму.' },
    ],
    stepsUz: [
      { name: 'Avtomobil turini tanlang', text: "Yengil, yuk yoki mototsikl olib kirayotganingizni ko'rsating." },
      { name: "Dvigatel hajmini ko'rsating", text: "Dvigatel hajmini kub santimetrlarda kiriting." },
      { name: 'Ishlab chiqarilgan yilini tanlang', text: "Transport vositasining ishlab chiqarilgan yilini ko'rsating." },
      { name: 'Narxini kiriting', text: "Avtomobilning bojxona qiymatini dollar yoki so'mda kiriting." },
      { name: "Bojlar hisobini oling", text: "«Hisoblash» tugmasini bosing — aksiz, bojxona boji, QQS va umumiy summani ko'ring." },
    ],
  },
  {
    slug: 'electricity',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите потребление', text: 'Укажите количество потреблённых киловатт-часов (кВт·ч) за месяц.' },
      { name: 'Выберите тариф', text: 'Выберите тип тарифа (бытовой, льготный, с газовой плитой / электроплитой).' },
      { name: 'Получите сумму оплаты', text: 'Нажмите «Рассчитать» и узнайте сумму к оплате за электричество.' },
    ],
    stepsUz: [
      { name: "Iste'mol miqdorini kiriting", text: 'Oyiga sarflangan kilovatt-soat (kVt·s) miqdorini kiriting.' },
      { name: 'Tarifni tanlang', text: "Tarif turini tanlang (maishiy, imtiyozli, gaz plita / elektr plita bilan)." },
      { name: "To'lov summasini oling", text: "«Hisoblash» tugmasini bosing va elektr energiya uchun to'lov summasini bilib oling." },
    ],
  },
  {
    slug: 'gas',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите потребление газа', text: 'Укажите объём потреблённого газа в кубометрах (м³) за месяц.' },
      { name: 'Выберите тариф', text: 'Выберите тип тарифа (бытовой, с отоплением / без отопления).' },
      { name: 'Получите сумму оплаты', text: 'Нажмите «Рассчитать» — узнайте стоимость потреблённого газа.' },
    ],
    stepsUz: [
      { name: "Gaz iste'molini kiriting", text: "Oyiga sarflangan gaz hajmini kub metrda (m³) kiriting." },
      { name: 'Tarifni tanlang', text: "Tarif turini tanlang (maishiy, isitish bilan / isitishsiz)." },
      { name: "To'lov summasini oling", text: "«Hisoblash» tugmasini bosing — sarflangan gaz narxini bilib oling." },
    ],
  },
  {
    slug: 'water',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите потребление воды', text: 'Укажите объём потреблённой воды в кубометрах (м³) за месяц.' },
      { name: 'Выберите тип водоснабжения', text: 'Выберите холодное, горячее водоснабжение или оба.' },
      { name: 'Получите сумму оплаты', text: 'Нажмите «Рассчитать» — узнайте стоимость водоснабжения и водоотведения.' },
    ],
    stepsUz: [
      { name: "Suv iste'molini kiriting", text: "Oyiga sarflangan suv hajmini kub metrda (m³) kiriting." },
      { name: "Suv ta'minoti turini tanlang", text: "Sovuq, issiq suv yoki ikkalasini tanlang." },
      { name: "To'lov summasini oling", text: "«Hisoblash» tugmasini bosing — suv ta'minoti va kanalizatsiya narxini bilib oling." },
    ],
  },
  {
    slug: 'vat',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите сумму', text: 'Укажите сумму, для которой нужно рассчитать НДС.' },
      { name: 'Выберите операцию', text: 'Выберите «Начислить НДС» (добавить 12%) или «Выделить НДС» (извлечь из суммы).' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — получите сумму НДС, сумму без НДС и сумму с НДС.' },
    ],
    stepsUz: [
      { name: 'Summani kiriting', text: 'QQS hisoblash kerak bo\'lgan summani kiriting.' },
      { name: 'Amalni tanlang', text: "«QQS hisoblash» (12% qo'shish) yoki «QQS ajratish» (summadan ajratish) ni tanlang." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — QQS summasini, QQSsiz va QQS bilan summani ko'ring." },
    ],
  },
  {
    slug: 'ip-calculator',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите выручку', text: 'Укажите ожидаемую годовую или месячную выручку ИП.' },
      { name: 'Выберите налоговый режим', text: 'Выберите систему налогообложения: единый налоговый платёж, общая система или IT Park.' },
      { name: 'Укажите количество сотрудников', text: 'Введите число работников (если есть) для расчёта отчислений.' },
      { name: 'Получите расчёт налогов', text: 'Нажмите «Рассчитать» — получите все налоги, взносы и чистый доход ИП.' },
    ],
    stepsUz: [
      { name: 'Tushumni kiriting', text: "YaTTning kutilayotgan yillik yoki oylik tushumini ko'rsating." },
      { name: 'Soliq rejimini tanlang', text: "Soliq tizimini tanlang: yagona soliq to'lovi, umumiy tizim yoki IT Park." },
      { name: "Xodimlar sonini ko'rsating", text: "Ajratmalarni hisoblash uchun ishchilar sonini kiriting (agar bo'lsa)." },
      { name: 'Soliqlar hisobini oling', text: "«Hisoblash» tugmasini bosing — barcha soliqlar, badal va YaTTning sof daromadini ko'ring." },
    ],
  },
  {
    slug: 'currency-converter',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите валюты', text: 'Выберите исходную и целевую валюту из списка (USD, EUR, RUB, UZS и др.).' },
      { name: 'Введите сумму', text: 'Укажите сумму для конвертации.' },
      { name: 'Получите результат', text: 'Курс обновляется автоматически по данным ЦБ РУз — результат отобразится мгновенно.' },
    ],
    stepsUz: [
      { name: 'Valyutalarni tanlang', text: "Ro'yxatdan boshlang'ich va maqsad valyutani tanlang (USD, EUR, RUB, UZS va boshq.)." },
      { name: 'Summani kiriting', text: "Konvertatsiya qilish uchun summani ko'rsating." },
      { name: 'Natijani oling', text: "Kurs O'zR MB ma'lumotlari bo'yicha avtomatik yangilanadi — natija darhol ko'rinadi." },
    ],
  },
  {
    slug: 'bmi',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите рост', text: 'Укажите ваш рост в сантиметрах.' },
      { name: 'Введите вес', text: 'Укажите ваш вес в килограммах.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — получите индекс массы тела и категорию (норма, избыток, ожирение).' },
    ],
    stepsUz: [
      { name: "Bo'yingizni kiriting", text: "Bo'yingizni santimetrlarda ko'rsating." },
      { name: 'Vazningizni kiriting', text: 'Vazningizni kilogrammlarda kiriting.' },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — tana massasi indeksini va toifasini (norma, ortiqcha, semizlik) bilib oling." },
    ],
  },
  {
    slug: 'calories',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите возраст', text: 'Укажите ваш возраст в годах.' },
      { name: 'Введите рост и вес', text: 'Укажите рост в сантиметрах и вес в килограммах.' },
      { name: 'Выберите пол', text: 'Укажите ваш пол для точного расчёта.' },
      { name: 'Выберите уровень активности', text: 'Укажите уровень физической активности (сидячий, умеренный, активный).' },
      { name: 'Получите норму калорий', text: 'Нажмите «Рассчитать» — получите суточную норму калорий для поддержания, снижения и набора веса.' },
    ],
    stepsUz: [
      { name: 'Yoshingizni kiriting', text: "Yoshingizni yillarda ko'rsating." },
      { name: "Bo'y va vaznni kiriting", text: "Bo'yingizni santimetrlarda va vazningizni kilogrammlarda kiriting." },
      { name: 'Jinsni tanlang', text: "Aniq hisoblash uchun jinsingizni ko'rsating." },
      { name: 'Faollik darajasini tanlang', text: "Jismoniy faollik darajasini ko'rsating (kam harakatli, o'rtacha, faol)." },
      { name: 'Kaloriya normasini oling', text: "«Hisoblash» tugmasini bosing — vaznni saqlash, kamaytirish va oshirish uchun kunlik kaloriya normasini oling." },
    ],
  },
  {
    slug: 'alimony',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите ежемесячный чистый доход плательщика алиментов.' },
      { name: 'Укажите количество детей', text: 'Выберите количество детей (1, 2, 3 и более).' },
      { name: 'Получите сумму алиментов', text: 'Нажмите «Рассчитать» — получите размер алиментов согласно Семейному кодексу РУз.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: "Aliment to'lovchining oylik sof daromadini kiriting." },
      { name: "Bolalar sonini ko'rsating", text: "Bolalar sonini tanlang (1, 2, 3 va undan ko'p)." },
      { name: 'Aliment summasini oling', text: "«Hisoblash» tugmasini bosing — O'zR Oila kodeksiga muvofiq aliment miqdorini bilib oling." },
    ],
  },
  {
    slug: 'vacation-pay',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную зарплату за последние 12 месяцев.' },
      { name: 'Укажите количество дней отпуска', text: 'Введите количество дней ежегодного оплачиваемого отпуска.' },
      { name: 'Получите сумму отпускных', text: 'Нажмите «Рассчитать» — узнайте сумму отпускных за вычетом НДФЛ.' },
    ],
    stepsUz: [
      { name: "O'rtacha ish haqini kiriting", text: "Oxirgi 12 oydagi o'rtacha oylik ish haqini kiriting." },
      { name: "Ta'til kunlarini ko'rsating", text: "Yillik haq to'lanadigan ta'til kunlari sonini kiriting." },
      { name: "Ta'til pulini oling", text: "«Hisoblash» tugmasini bosing — JShShS chegirilgandan keyin ta'til puli summasini bilib oling." },
    ],
  },
  {
    slug: 'sick-leave',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стаж работы', text: 'Укажите общий трудовой стаж для определения процента оплаты.' },
      { name: 'Укажите дни больничного', text: 'Введите количество дней нетрудоспособности по больничному листу.' },
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную зарплату для расчёта пособия.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — получите сумму пособия по временной нетрудоспособности.' },
    ],
    stepsUz: [
      { name: "Ish stajini kiriting", text: "To'lov foizini aniqlash uchun umumiy mehnat stajini ko'rsating." },
      { name: "Kasallik kunlarini ko'rsating", text: "Kasallik varaqasi bo'yicha mehnatga layoqatsizlik kunlari sonini kiriting." },
      { name: "O'rtacha ish haqini kiriting", text: "Nafaqa hisoblash uchun o'rtacha oylik ish haqini ko'rsating." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — vaqtinchalik mehnatga layoqatsizlik nafaqasi summasini oling." },
    ],
  },
  {
    slug: 'maternity',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную зарплату за последние 6 месяцев.' },
      { name: 'Укажите срок декрета', text: 'Выберите продолжительность декретного отпуска (126 или 140 дней).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте размер пособия по беременности и родам.' },
    ],
    stepsUz: [
      { name: "O'rtacha ish haqini kiriting", text: "Oxirgi 6 oydagi o'rtacha oylik ish haqini ko'rsating." },
      { name: "Dekret muddatini ko'rsating", text: "Tug'ruq ta'tili davomiyligini tanlang (126 yoki 140 kun)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — homiladorlik va tug'ruq nafaqasi miqdorini bilib oling." },
    ],
  },
  {
    slug: 'pension',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стаж работы', text: 'Укажите общий трудовой стаж в годах.' },
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную заработную плату.' },
      { name: 'Укажите возраст', text: 'Введите текущий возраст и пол для определения пенсионного возраста.' },
      { name: 'Получите расчёт пенсии', text: 'Нажмите «Рассчитать» — узнайте примерный размер пенсии и возраст выхода.' },
    ],
    stepsUz: [
      { name: 'Ish stajini kiriting', text: "Umumiy mehnat stajini yillarda ko'rsating." },
      { name: "O'rtacha ish haqini kiriting", text: "O'rtacha oylik ish haqini ko'rsating." },
      { name: "Yoshni ko'rsating", text: "Pensiya yoshini aniqlash uchun hozirgi yosh va jinsni kiriting." },
      { name: 'Pensiya hisobini oling', text: "«Hisoblash» tugmasini bosing — taxminiy pensiya miqdorini va chiqish yoshini bilib oling." },
    ],
  },
  {
    slug: 'auto-credit',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость автомобиля', text: 'Укажите полную стоимость автомобиля в сумах.' },
      { name: 'Укажите первоначальный взнос', text: 'Введите сумму или процент первоначального взноса.' },
      { name: 'Установите ставку и срок', text: 'Введите годовую процентную ставку и срок автокредита.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — получите ежемесячный платёж, переплату и график.' },
    ],
    stepsUz: [
      { name: 'Avtomobil narxini kiriting', text: "Avtomobilning to'liq narxini so'mda kiriting." },
      { name: "Boshlang'ich badalni ko'rsating", text: "Boshlang'ich badal summasini yoki foizini kiriting." },
      { name: "Stavka va muddatni o'rnating", text: "Yillik foiz stavkasini va avtokredit muddatini kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — oylik to'lov, ortiqcha to'lov va jadvalni ko'ring." },
    ],
  },
  {
    slug: 'compound-interest',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите начальную сумму', text: 'Укажите начальную сумму инвестиции или вклада.' },
      { name: 'Укажите процентную ставку', text: 'Введите годовую процентную ставку.' },
      { name: 'Выберите период и капитализацию', text: 'Укажите срок в годах и частоту капитализации (ежемесячно, ежеквартально, ежегодно).' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — получите итоговую сумму и график роста вклада.' },
    ],
    stepsUz: [
      { name: "Boshlang'ich summani kiriting", text: "Investitsiya yoki omonatning boshlang'ich summasini kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Yillik foiz stavkasini kiriting." },
      { name: 'Davr va kapitalizatsiyani tanlang', text: "Yillardagi muddatni va kapitalizatsiya chastotasini (oylik, choraklik, yillik) ko'rsating." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — yakuniy summa va omonat o'sish jadvalini ko'ring." },
    ],
  },
  {
    slug: 'osago',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите тип ТС', text: 'Укажите тип транспортного средства (легковой, грузовой, автобус).' },
      { name: 'Укажите регион регистрации', text: 'Выберите область регистрации автомобиля в Узбекистане.' },
      { name: 'Введите данные водителей', text: 'Укажите возраст и стаж водителей для расчёта коэффициента.' },
      { name: 'Получите стоимость полиса', text: 'Нажмите «Рассчитать» — узнайте стоимость полиса ОСАГО.' },
    ],
    stepsUz: [
      { name: 'TV turini tanlang', text: "Transport vositasi turini ko'rsating (yengil, yuk, avtobus)." },
      { name: "Ro'yxatga olingan hududni ko'rsating", text: "O'zbekistonda avtomobil ro'yxatga olingan viloyatni tanlang." },
      { name: "Haydovchilar ma'lumotini kiriting", text: "Koeffitsientni hisoblash uchun haydovchilarning yoshi va stajini ko'rsating." },
      { name: 'Polis narxini oling', text: "«Hisoblash» tugmasini bosing — OSAGO polisi narxini bilib oling." },
    ],
  },
  {
    slug: 'fuel-consumption',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите расстояние', text: 'Укажите расстояние поездки в километрах.' },
      { name: 'Укажите расход топлива', text: 'Введите средний расход топлива (л/100 км).' },
      { name: 'Введите цену топлива', text: 'Укажите текущую цену бензина или дизеля за литр.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте объём и стоимость топлива на поездку.' },
    ],
    stepsUz: [
      { name: 'Masofani kiriting', text: 'Sayohat masofasini kilometrlarda kiriting.' },
      { name: "Yoqilg'i sarfini ko'rsating", text: "O'rtacha yoqilg'i sarfini (l/100 km) kiriting." },
      { name: "Yoqilg'i narxini kiriting", text: "Hozirgi benzin yoki dizel narxini litr uchun kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — sayohat uchun yoqilg'i hajmi va narxini bilib oling." },
    ],
  },
  {
    slug: 'heating',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите площадь помещения', text: 'Укажите отапливаемую площадь в квадратных метрах.' },
      { name: 'Выберите тип отопления', text: 'Выберите централизованное отопление или индивидуальное.' },
      { name: 'Получите сумму оплаты', text: 'Нажмите «Рассчитать» — узнайте стоимость отопления за месяц.' },
    ],
    stepsUz: [
      { name: "Xona maydonini kiriting", text: "Isitilayotgan maydonni kvadrat metrlarda kiriting." },
      { name: 'Isitish turini tanlang', text: 'Markazlashtirilgan yoki individual isitishni tanlang.' },
      { name: "To'lov summasini oling", text: "«Hisoblash» tugmasini bosing — oylik isitish narxini bilib oling." },
    ],
  },
  {
    slug: 'property-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите тип объекта', text: 'Укажите тип имущества: квартира, дом, коммерческая недвижимость.' },
      { name: 'Введите площадь', text: 'Укажите общую площадь объекта в квадратных метрах.' },
      { name: 'Укажите кадастровую стоимость', text: 'Введите кадастровую стоимость объекта (если известна).' },
      { name: 'Получите расчёт налога', text: 'Нажмите «Рассчитать» — узнайте годовой налог на имущество.' },
    ],
    stepsUz: [
      { name: 'Obyekt turini tanlang', text: "Mulk turini ko'rsating: kvartira, uy, tijorat ko'chmas mulki." },
      { name: 'Maydonni kiriting', text: "Obyektning umumiy maydonini kvadrat metrlarda kiriting." },
      { name: "Kadastr qiymatini ko'rsating", text: "Obyektning kadastr qiymatini kiriting (agar ma'lum bo'lsa)." },
      { name: 'Soliq hisobini oling', text: "«Hisoblash» tugmasini bosing — yillik mol-mulk solig'ini bilib oling." },
    ],
  },
  {
    slug: 'vehicle-tax',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип ТС', text: 'Укажите тип транспортного средства.' },
      { name: 'Введите объём двигателя', text: 'Укажите объём двигателя в кубических сантиметрах.' },
      { name: 'Выберите год выпуска', text: 'Укажите год выпуска автомобиля.' },
      { name: 'Получите расчёт налога', text: 'Нажмите «Рассчитать» — узнайте годовой транспортный налог.' },
    ],
    stepsUz: [
      { name: 'TV turini tanlang', text: "Transport vositasi turini ko'rsating." },
      { name: 'Dvigatel hajmini kiriting', text: 'Dvigatel hajmini kub santimetrlarda kiriting.' },
      { name: 'Ishlab chiqarilgan yilini tanlang', text: "Avtomobilning ishlab chiqarilgan yilini ko'rsating." },
      { name: 'Soliq hisobini oling', text: "«Hisoblash» tugmasini bosing — yillik transport solig'ini bilib oling." },
    ],
  },
  {
    slug: 'zakat',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите имущество', text: 'Укажите общую стоимость имущества, подлежащего закяту (деньги, золото, товар).' },
      { name: 'Укажите долги', text: 'Введите сумму текущих долгов для вычета из базы закята.' },
      { name: 'Получите расчёт закята', text: 'Нажмите «Рассчитать» — узнайте, достигнут ли нисаб и сумму закята (2,5%).' },
    ],
    stepsUz: [
      { name: 'Mulkni kiriting', text: "Zakotga tegishli mulkning umumiy qiymatini ko'rsating (pul, oltin, tovar)." },
      { name: "Qarzlarni ko'rsating", text: "Zakot bazasidan chegirib tashlash uchun joriy qarzlar summasini kiriting." },
      { name: 'Zakot hisobini oling', text: "«Hisoblash» tugmasini bosing — nisob yetganligini va zakot summasini (2,5%) bilib oling." },
    ],
  },
  {
    slug: 'percentage',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип расчёта', text: 'Выберите: найти процент от числа, число по проценту или процентное соотношение.' },
      { name: 'Введите значения', text: 'Заполните числовые поля в зависимости от выбранного типа.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — результат отобразится мгновенно.' },
    ],
    stepsUz: [
      { name: 'Hisoblash turini tanlang', text: "Tanlang: sondan foiz topish, foizdan son topish yoki foiz nisbatini aniqlash." },
      { name: 'Qiymatlarni kiriting', text: "Tanlangan turga qarab raqamli maydonlarni to'ldiring." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — natija darhol ko'rinadi." },
    ],
  },
  {
    slug: 'discount',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите первоначальную цену', text: 'Укажите цену товара до скидки.' },
      { name: 'Укажите размер скидки', text: 'Введите процент скидки.' },
      { name: 'Получите итоговую цену', text: 'Нажмите «Рассчитать» — узнайте цену со скидкой и сумму экономии.' },
    ],
    stepsUz: [
      { name: "Boshlang'ich narxni kiriting", text: "Tovarning chegirmadan oldingi narxini kiriting." },
      { name: "Chegirma miqdorini ko'rsating", text: 'Chegirma foizini kiriting.' },
      { name: 'Yakuniy narxni oling', text: "«Hisoblash» tugmasini bosing — chegirmali narx va tejamkorlik summasini bilib oling." },
    ],
  },
  {
    slug: 'margin',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите себестоимость', text: 'Укажите себестоимость товара или услуги.' },
      { name: 'Введите цену продажи', text: 'Укажите цену, по которой вы продаёте товар.' },
      { name: 'Получите маржу и наценку', text: 'Нажмите «Рассчитать» — получите маржу (%), наценку (%) и прибыль.' },
    ],
    stepsUz: [
      { name: 'Tannarxni kiriting', text: "Tovar yoki xizmatning tannarxini ko'rsating." },
      { name: 'Sotuv narxini kiriting', text: "Tovarni sotayotgan narxingizni ko'rsating." },
      { name: 'Marja va ustamani oling', text: "«Hisoblash» tugmasini bosing — marjani (%), ustamani (%) va foydani ko'ring." },
    ],
  },
  {
    slug: 'vat-threshold',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите выручку', text: 'Укажите годовую выручку вашего бизнеса в сумах.' },
      { name: 'Выберите тип деятельности', text: 'Укажите вид деятельности для определения порога НДС.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — узнайте, обязаны ли вы платить НДС при текущей выручке.' },
    ],
    stepsUz: [
      { name: 'Tushumni kiriting', text: "Biznesingizning yillik tushumini so'mda kiriting." },
      { name: 'Faoliyat turini tanlang', text: "QQS chegarasini aniqlash uchun faoliyat turini ko'rsating." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — joriy tushum bilan QQS to'lash majburiyatingiz borligini bilib oling." },
    ],
  },
  {
    slug: 'land-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите местоположение', text: 'Выберите область и район расположения земельного участка.' },
      { name: 'Введите площадь участка', text: 'Укажите площадь земельного участка в квадратных метрах или гектарах.' },
      { name: 'Выберите назначение земли', text: 'Укажите целевое назначение участка (жилой, сельскохозяйственный, коммерческий).' },
      { name: 'Получите расчёт налога', text: 'Нажмите «Рассчитать» — узнайте годовой земельный налог.' },
    ],
    stepsUz: [
      { name: "Joylashuvni ko'rsating", text: "Yer uchastkasi joylashgan viloyat va tumanni tanlang." },
      { name: "Uchastka maydonini kiriting", text: "Yer uchastkasi maydonini kvadrat metr yoki gektarda kiriting." },
      { name: "Yer maqsadini tanlang", text: "Uchastkaning maqsadli tayinlanishini ko'rsating (turar-joy, qishloq xo'jalik, tijorat)." },
      { name: 'Soliq hisobini oling', text: "«Hisoblash» tugmasini bosing — yillik yer solig'ini bilib oling." },
    ],
  },
  {
    slug: 'corporate-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите доходы предприятия', text: 'Укажите совокупный доход юридического лица за период.' },
      { name: 'Укажите вычитаемые расходы', text: 'Введите сумму расходов, подлежащих вычету.' },
      { name: 'Выберите налоговый режим', text: 'Укажите систему налогообложения (общая, упрощённая, IT Park).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — получите сумму налога на прибыль и эффективную ставку.' },
    ],
    stepsUz: [
      { name: 'Korxona daromadini kiriting', text: "Yuridik shaxsning davr uchun jami daromadini ko'rsating." },
      { name: "Chegiriladigan xarajatlarni ko'rsating", text: "Chegirmaga tegishli xarajatlar summasini kiriting." },
      { name: 'Soliq rejimini tanlang', text: "Soliqqa tortish tizimini ko'rsating (umumiy, soddalashtirilgan, IT Park)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — foyda solig'i summasini va samarali stavkani ko'ring." },
    ],
  },
  {
    slug: 'tax-penalty',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму задолженности', text: 'Укажите сумму неуплаченного налога в сумах.' },
      { name: 'Укажите даты', text: 'Введите дату крайнего срока уплаты и текущую дату.' },
      { name: 'Выберите вид налога', text: 'Выберите вид налога, по которому образовалась задолженность.' },
      { name: 'Получите расчёт пени', text: 'Нажмите «Рассчитать» — узнайте сумму пени и штрафа за просрочку.' },
    ],
    stepsUz: [
      { name: "Qarzdorlik summasini kiriting", text: "To'lanmagan soliq summasini so'mda kiriting." },
      { name: "Sanalarni ko'rsating", text: "To'lash muddati va joriy sanani kiriting." },
      { name: 'Soliq turini tanlang', text: "Qarzdorlik paydo bo'lgan soliq turini tanlang." },
      { name: "Penya hisobini oling", text: "«Hisoblash» tugmasini bosing — kechikish uchun penya va jarima summasini bilib oling." },
    ],
  },
  {
    slug: 'self-employed',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите ежемесячный или годовой доход от самозанятости.' },
      { name: 'Выберите вид деятельности', text: 'Укажите вид деятельности для определения ставки налога.' },
      { name: 'Укажите регион', text: 'Выберите регион ведения деятельности.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте налоги и взносы самозанятого.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: "O'z-o'zini band qilishdan oylik yoki yillik daromadni kiriting." },
      { name: 'Faoliyat turini tanlang', text: "Soliq stavkasini aniqlash uchun faoliyat turini ko'rsating." },
      { name: "Hududni ko'rsating", text: "Faoliyat yuritiladigan hududni tanlang." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — o'z-o'zini band qilganlarning soliq va badallarini bilib oling." },
    ],
  },
  {
    slug: 'turnover-tax',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите оборот', text: 'Укажите совокупный оборот предприятия за период в сумах.' },
      { name: 'Выберите вид деятельности', text: 'Укажите вид деятельности для определения ставки налога с оборота.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте сумму налога с оборота.' },
    ],
    stepsUz: [
      { name: 'Aylanmani kiriting', text: "Korxonaning davr uchun jami aylanmasini so'mda kiriting." },
      { name: 'Faoliyat turini tanlang', text: "Aylanma solig'i stavkasini aniqlash uchun faoliyat turini ko'rsating." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — aylanma solig'i summasini bilib oling." },
    ],
  },
  {
    slug: 'severance',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную зарплату за последние 3 месяца.' },
      { name: 'Укажите стаж работы', text: 'Введите стаж работы на последнем месте.' },
      { name: 'Выберите основание увольнения', text: 'Укажите причину увольнения (сокращение, соглашение сторон и др.).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте размер выходного пособия.' },
    ],
    stepsUz: [
      { name: "O'rtacha ish haqini kiriting", text: "Oxirgi 3 oydagi o'rtacha oylik ish haqini kiriting." },
      { name: "Ish stajini ko'rsating", text: "Oxirgi ish joyidagi stajni kiriting." },
      { name: "Ishdan bo'shatish asosini tanlang", text: "Ishdan bo'shatish sababini ko'rsating (qisqartirish, tomonlar kelishuvi va boshq.)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — ishdan bo'shatish nafaqasi miqdorini bilib oling." },
    ],
  },
  {
    slug: 'overtime',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите оклад', text: 'Укажите ваш ежемесячный должностной оклад.' },
      { name: 'Укажите часы переработки', text: 'Введите количество часов сверхурочной работы.' },
      { name: 'Выберите тип переработки', text: 'Укажите — работа в будни, выходные или праздничные дни.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте доплату за сверхурочные часы.' },
    ],
    stepsUz: [
      { name: 'Maoshni kiriting', text: "Oylik lavozim maoshingizni ko'rsating." },
      { name: "Ortiqcha soatlarni ko'rsating", text: "Ortiqcha ishlangan soatlar sonini kiriting." },
      { name: "Ortiqcha ish turini tanlang", text: "Ish kunlari, dam olish yoki bayram kunlaridagi ishni ko'rsating." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — ortiqcha soatlar uchun qo'shimcha haqni bilib oling." },
    ],
  },
  {
    slug: 'installment',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость товара', text: 'Укажите полную стоимость товара, приобретаемого в рассрочку.' },
      { name: 'Укажите первоначальный взнос', text: 'Введите сумму или процент первоначального взноса.' },
      { name: 'Выберите срок рассрочки', text: 'Укажите количество месяцев рассрочки.' },
      { name: 'Получите график платежей', text: 'Нажмите «Рассчитать» — получите ежемесячный платёж и полный график.' },
    ],
    stepsUz: [
      { name: 'Tovar narxini kiriting', text: "Bo'lib to'lashda sotiladigan tovarning to'liq narxini kiriting." },
      { name: "Boshlang'ich badalni ko'rsating", text: "Boshlang'ich badal summasini yoki foizini kiriting." },
      { name: "Bo'lib to'lash muddatini tanlang", text: "Bo'lib to'lash oylar sonini ko'rsating." },
      { name: "To'lov jadvalini oling", text: "«Hisoblash» tugmasini bosing — oylik to'lov va to'liq jadvalni ko'ring." },
    ],
  },
  {
    slug: 'early-repayment',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите параметры кредита', text: 'Укажите остаток долга, процентную ставку и оставшийся срок.' },
      { name: 'Укажите сумму досрочного платежа', text: 'Введите сумму, которую хотите внести досрочно.' },
      { name: 'Выберите тип досрочного погашения', text: 'Выберите: уменьшить срок кредита или ежемесячный платёж.' },
      { name: 'Получите расчёт экономии', text: 'Нажмите «Рассчитать» — узнайте экономию на процентах и новый график.' },
    ],
    stepsUz: [
      { name: 'Kredit parametrlarini kiriting', text: "Qarz qoldig'i, foiz stavkasi va qolgan muddatni ko'rsating." },
      { name: "Muddatidan oldin to'lov summasini kiriting", text: "Muddatidan oldin kiritmoqchi bo'lgan summani kiriting." },
      { name: "Muddatidan oldin to'lash turini tanlang", text: "Tanlang: kredit muddatini qisqartirish yoki oylik to'lovni kamaytirish." },
      { name: 'Tejamkorlik hisobini oling', text: "«Hisoblash» tugmasini bosing — foizlar bo'yicha tejamkorlik va yangi jadvalni ko'ring." },
    ],
  },
  {
    slug: 'refinancing',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите текущий кредит', text: 'Укажите остаток долга, ставку и оставшийся срок текущего кредита.' },
      { name: 'Укажите условия нового кредита', text: 'Введите процентную ставку и срок нового кредита.' },
      { name: 'Получите сравнение', text: 'Нажмите «Рассчитать» — сравните переплату по текущему и новому кредиту.' },
    ],
    stepsUz: [
      { name: 'Joriy kreditni kiriting', text: "Qarz qoldig'i, stavka va joriy kreditning qolgan muddatini ko'rsating." },
      { name: "Yangi kredit shartlarini ko'rsating", text: "Yangi kreditning foiz stavkasi va muddatini kiriting." },
      { name: 'Solishtirishni oling', text: "«Hisoblash» tugmasini bosing — joriy va yangi kredit bo'yicha ortiqcha to'lovlarni solishtiring." },
    ],
  },
  {
    slug: 'deposit-comparison',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму вклада', text: 'Укажите сумму, которую планируете разместить.' },
      { name: 'Укажите условия банков', text: 'Введите ставки и сроки по вкладам разных банков (до 3).' },
      { name: 'Получите сравнение', text: 'Нажмите «Рассчитать» — сравните доходность вкладов и выберите лучший вариант.' },
    ],
    stepsUz: [
      { name: 'Omonat summasini kiriting', text: "Joylashtirmoqchi bo'lgan summangizni kiriting." },
      { name: "Banklar shartlarini ko'rsating", text: "Turli banklarning (3 tagacha) omonat stavkalari va muddatlarini kiriting." },
      { name: 'Solishtirishni oling', text: "«Hisoblash» tugmasini bosing — omonatlar daromadliligini solishtiring va eng yaxshisini tanlang." },
    ],
  },
  {
    slug: 'bank-rates',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип продукта', text: 'Укажите: вклад, кредит или ипотека.' },
      { name: 'Укажите сумму и срок', text: 'Введите желаемую сумму и срок для поиска лучших ставок.' },
      { name: 'Изучите результат', text: 'Получите сравнительную таблицу ставок банков Узбекистана.' },
    ],
    stepsUz: [
      { name: 'Mahsulot turini tanlang', text: "Ko'rsating: omonat, kredit yoki ipoteka." },
      { name: "Summa va muddatni ko'rsating", text: "Eng yaxshi stavkalarni topish uchun kerakli summa va muddatni kiriting." },
      { name: "Natijani o'rganing", text: "O'zbekiston banklari stavkalarining qiyosiy jadvalini oling." },
    ],
  },
  {
    slug: 'money-transfer',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите направление перевода', text: 'Укажите страну отправления и получения.' },
      { name: 'Введите сумму перевода', text: 'Укажите сумму в валюте отправления.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте комиссию и сумму к получению.' },
    ],
    stepsUz: [
      { name: "O'tkazma yo'nalishini tanlang", text: "Jo'natuvchi va qabul qiluvchi mamlakatni ko'rsating." },
      { name: "O'tkazma summasini kiriting", text: "Jo'natish valyutasida summani kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — komissiya va qabul qilinadigan summani bilib oling." },
    ],
  },
  {
    slug: 'trip-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите маршрут', text: 'Введите пункт отправления и пункт назначения.' },
      { name: 'Выберите транспорт', text: 'Укажите тип транспорта (автомобиль, автобус, поезд).' },
      { name: 'Укажите расход топлива', text: 'Для авто введите средний расход (л/100 км) и цену топлива.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте стоимость поездки.' },
    ],
    stepsUz: [
      { name: "Yo'nalishni ko'rsating", text: "Jo'nab chiqish va borish manzilini kiriting." },
      { name: 'Transportni tanlang', text: "Transport turini ko'rsating (avtomobil, avtobus, poyezd)." },
      { name: "Yoqilg'i sarfini ko'rsating", text: "Avto uchun o'rtacha sarfni (l/100 km) va yoqilg'i narxini kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — sayohat narxini bilib oling." },
    ],
  },
  {
    slug: 'car-leasing',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость автомобиля', text: 'Укажите полную стоимость автомобиля в лизинге.' },
      { name: 'Укажите аванс и срок', text: 'Введите авансовый платёж и срок лизинга в месяцах.' },
      { name: 'Укажите удорожание', text: 'Введите процент удорожания или ставку лизинга.' },
      { name: 'Получите график платежей', text: 'Нажмите «Рассчитать» — получите ежемесячный платёж и полную стоимость лизинга.' },
    ],
    stepsUz: [
      { name: 'Avtomobil narxini kiriting', text: "Lizingdagi avtomobilning to'liq narxini kiriting." },
      { name: "Avans va muddatni ko'rsating", text: "Avans to'lov va lizing muddatini oylarda kiriting." },
      { name: "Qimmatlanishni ko'rsating", text: "Qimmatlanish foizi yoki lizing stavkasini kiriting." },
      { name: "To'lov jadvalini oling", text: "«Hisoblash» tugmasini bosing — oylik to'lov va lizingning to'liq narxini ko'ring." },
    ],
  },
  {
    slug: 'internet',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите провайдера', text: 'Выберите интернет-провайдера из списка (Uztelecom, Turon и др.).' },
      { name: 'Укажите параметры', text: 'Выберите желаемую скорость интернета и объём трафика.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте ежемесячную стоимость интернета.' },
    ],
    stepsUz: [
      { name: 'Provayderni tanlang', text: "Ro'yxatdan internet-provayderni tanlang (Uztelecom, Turon va boshq.)." },
      { name: "Parametrlarni ko'rsating", text: "Kerakli internet tezligi va trafik hajmini tanlang." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — oylik internet narxini bilib oling." },
    ],
  },
  {
    slug: 'utilities-total',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите показания счётчиков', text: 'Укажите потребление электричества (кВт·ч), газа (м³) и воды (м³).' },
      { name: 'Укажите площадь жилья', text: 'Введите площадь квартиры для расчёта отопления и вывоза мусора.' },
      { name: 'Выберите тарифы', text: 'Выберите применимые тарифы (бытовой, льготный).' },
      { name: 'Получите общую сумму', text: 'Нажмите «Рассчитать» — узнайте общую сумму коммунальных платежей за месяц.' },
    ],
    stepsUz: [
      { name: "Hisoblagich ko'rsatkichlarini kiriting", text: "Elektr (kVt·s), gaz (m³) va suv (m³) sarfini ko'rsating." },
      { name: "Uy-joy maydonini ko'rsating", text: "Isitish va chiqindi chiqarish hisobi uchun kvartira maydonini kiriting." },
      { name: 'Tariflarni tanlang', text: "Tegishli tariflarni tanlang (maishiy, imtiyozli)." },
      { name: "Umumiy summani oling", text: "«Hisoblash» tugmasini bosing — oylik kommunal to'lovlarning umumiy summasini bilib oling." },
    ],
  },
  {
    slug: 'apartment-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите город и район', text: 'Укажите город и район, где хотите приобрести квартиру.' },
      { name: 'Укажите площадь', text: 'Введите площадь квартиры в квадратных метрах.' },
      { name: 'Выберите тип жилья', text: 'Укажите: новостройка или вторичное жильё.' },
      { name: 'Получите оценку стоимости', text: 'Нажмите «Рассчитать» — узнайте примерную стоимость квартиры.' },
    ],
    stepsUz: [
      { name: 'Shahar va tumanni tanlang', text: "Kvartira sotib olmoqchi bo'lgan shahar va tumanni ko'rsating." },
      { name: "Maydonni ko'rsating", text: "Kvartira maydonini kvadrat metrlarda kiriting." },
      { name: "Uy-joy turini tanlang", text: "Ko'rsating: yangi qurilish yoki ikkilamchi uy-joy." },
      { name: 'Narx baholashini oling', text: "«Hisoblash» tugmasini bosing — kvartiraning taxminiy narxini bilib oling." },
    ],
  },
  {
    slug: 'rental',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип жилья', text: 'Укажите тип аренды: квартира, дом, комната.' },
      { name: 'Укажите район и площадь', text: 'Выберите район и введите площадь жилья.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте рекомендуемую стоимость аренды.' },
    ],
    stepsUz: [
      { name: "Uy-joy turini tanlang", text: "Ijara turini ko'rsating: kvartira, uy, xona." },
      { name: "Tuman va maydonni ko'rsating", text: "Tumanni tanlang va uy-joy maydonini kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — tavsiya etilgan ijara narxini bilib oling." },
    ],
  },
  {
    slug: 'renovation',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите площадь помещения', text: 'Укажите общую площадь ремонтируемого помещения в кв. м.' },
      { name: 'Выберите тип ремонта', text: 'Укажите тип: косметический, капитальный или евроремонт.' },
      { name: 'Укажите дополнительные работы', text: 'Отметьте нужные работы (сантехника, электрика, мебель).' },
      { name: 'Получите смету', text: 'Нажмите «Рассчитать» — получите примерную стоимость ремонта.' },
    ],
    stepsUz: [
      { name: "Xona maydonini kiriting", text: "Ta'mirlanadigan xonaning umumiy maydonini kv.m da kiriting." },
      { name: "Ta'mir turini tanlang", text: "Turini ko'rsating: kosmetik, kapital yoki yevrota'mir." },
      { name: "Qo'shimcha ishlarni ko'rsating", text: "Kerakli ishlarni belgilang (santexnika, elektrika, mebel)." },
      { name: 'Smetani oling', text: "«Hisoblash» tugmasini bosing — ta'mirning taxminiy narxini ko'ring." },
    ],
  },
  {
    slug: 'moving',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите маршрут', text: 'Введите адрес отправления и назначения.' },
      { name: 'Опишите объём вещей', text: 'Укажите количество комнат или примерный объём груза.' },
      { name: 'Выберите дополнительные услуги', text: 'Отметьте услуги (грузчики, упаковка, подъём на этаж).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте примерную стоимость переезда.' },
    ],
    stepsUz: [
      { name: "Yo'nalishni ko'rsating", text: "Jo'natish va yetkazish manzilini kiriting." },
      { name: "Yuk hajmini tavsiflang", text: "Xonalar sonini yoki yuk hajmini taxminiy ko'rsating." },
      { name: "Qo'shimcha xizmatlarni tanlang", text: "Xizmatlarni belgilang (yukchilar, qadoqlash, qavatga ko'tarish)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — ko'chishning taxminiy narxini bilib oling." },
    ],
  },
  {
    slug: 'llc-calculator',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите вид деятельности', text: 'Укажите планируемый вид деятельности ООО.' },
      { name: 'Укажите уставный капитал', text: 'Введите размер уставного капитала.' },
      { name: 'Укажите количество учредителей', text: 'Введите число учредителей компании.' },
      { name: 'Получите расчёт расходов', text: 'Нажмите «Рассчитать» — узнайте затраты на регистрацию ООО.' },
    ],
    stepsUz: [
      { name: 'Faoliyat turini tanlang', text: "MChJning rejalashtirilgan faoliyat turini ko'rsating." },
      { name: "Ustav kapitalini ko'rsating", text: "Ustav kapitali miqdorini kiriting." },
      { name: "Ta'sischilar sonini ko'rsating", text: "Kompaniya ta'sischilar sonini kiriting." },
      { name: 'Xarajatlar hisobini oling', text: "«Hisoblash» tugmasini bosing — MChJ ro'yxatdan o'tkazish xarajatlarini bilib oling." },
    ],
  },
  {
    slug: 'break-even',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите постоянные расходы', text: 'Укажите ежемесячные постоянные расходы бизнеса (аренда, зарплаты и др.).' },
      { name: 'Укажите переменные расходы', text: 'Введите переменные расходы на единицу продукции.' },
      { name: 'Введите цену продажи', text: 'Укажите цену реализации единицы товара или услуги.' },
      { name: 'Получите точку безубыточности', text: 'Нажмите «Рассчитать» — узнайте объём продаж для выхода в ноль.' },
    ],
    stepsUz: [
      { name: "Doimiy xarajatlarni kiriting", text: "Biznesning oylik doimiy xarajatlarini ko'rsating (ijara, ish haqi va boshq.)." },
      { name: "O'zgaruvchan xarajatlarni ko'rsating", text: "Bir birlik mahsulot uchun o'zgaruvchan xarajatlarni kiriting." },
      { name: 'Sotuv narxini kiriting', text: "Tovar yoki xizmat birligining sotuv narxini ko'rsating." },
      { name: "Zararsizlik nuqtasini oling", text: "«Hisoblash» tugmasini bosing — nolga chiqish uchun kerakli sotuv hajmini bilib oling." },
    ],
  },
  {
    slug: 'roi',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму инвестиции', text: 'Укажите начальную сумму вложений.' },
      { name: 'Укажите полученный доход', text: 'Введите сумму дохода или прибыли от инвестиции.' },
      { name: 'Укажите период', text: 'Введите срок инвестирования в месяцах или годах.' },
      { name: 'Получите ROI', text: 'Нажмите «Рассчитать» — узнайте рентабельность инвестиции в процентах.' },
    ],
    stepsUz: [
      { name: 'Investitsiya summasini kiriting', text: "Boshlang'ich qo'yilma summasini kiriting." },
      { name: "Olingan daromadni ko'rsating", text: "Investitsiyadan olingan daromad yoki foyda summasini kiriting." },
      { name: "Davrni ko'rsating", text: "Investitsiya muddatini oylar yoki yillarda kiriting." },
      { name: 'ROI ni oling', text: "«Hisoblash» tugmasini bosing — investitsiya rentabelligini foizda bilib oling." },
    ],
  },
  {
    slug: 'employer-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите зарплату сотрудника', text: 'Укажите начисленную заработную плату работника.' },
      { name: 'Укажите количество сотрудников', text: 'Введите число работников для расчёта.' },
      { name: 'Выберите льготы', text: 'Отметьте применимые льготы и особые условия.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте полную стоимость сотрудника для работодателя.' },
    ],
    stepsUz: [
      { name: 'Xodim ish haqini kiriting', text: "Xodimning hisoblangan ish haqini ko'rsating." },
      { name: "Xodimlar sonini ko'rsating", text: "Hisoblash uchun ishchilar sonini kiriting." },
      { name: 'Imtiyozlarni tanlang', text: "Tegishli imtiyozlar va maxsus shartlarni belgilang." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — ish beruvchi uchun xodimning to'liq qiymatini bilib oling." },
    ],
  },
  {
    slug: 'ideal-weight',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите рост', text: 'Укажите ваш рост в сантиметрах.' },
      { name: 'Выберите пол и возраст', text: 'Укажите пол и возраст для точного расчёта.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — узнайте идеальный вес по нескольким формулам.' },
    ],
    stepsUz: [
      { name: "Bo'yingizni kiriting", text: "Bo'yingizni santimetrlarda ko'rsating." },
      { name: 'Jins va yoshni tanlang', text: "Aniq hisoblash uchun jins va yoshni ko'rsating." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — bir necha formula bo'yicha ideal vaznni bilib oling." },
    ],
  },
  {
    slug: 'macros',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите личные данные', text: 'Укажите возраст, пол, рост и вес.' },
      { name: 'Выберите цель', text: 'Укажите цель: похудение, поддержание веса или набор массы.' },
      { name: 'Укажите уровень активности', text: 'Выберите уровень физической активности.' },
      { name: 'Получите нормы БЖУ', text: 'Нажмите «Рассчитать» — получите суточные нормы белков, жиров и углеводов.' },
    ],
    stepsUz: [
      { name: "Shaxsiy ma'lumotlarni kiriting", text: "Yosh, jins, bo'y va vaznni ko'rsating." },
      { name: 'Maqsadni tanlang', text: "Maqsadni ko'rsating: ozish, vaznni saqlash yoki massa yig'ish." },
      { name: "Faollik darajasini ko'rsating", text: "Jismoniy faollik darajasini tanlang." },
      { name: 'OYU normalarini oling', text: "«Hisoblash» tugmasini bosing — kunlik oqsil, yog' va uglevodlar normasini oling." },
    ],
  },
  {
    slug: 'pregnancy',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите дату', text: 'Введите дату первого дня последней менструации или дату зачатия.' },
      { name: 'Выберите метод расчёта', text: 'Выберите расчёт по дате менструации или по дате зачатия.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — узнайте предполагаемую дату родов и срок беременности.' },
    ],
    stepsUz: [
      { name: 'Sanani kiriting', text: "Oxirgi hayz birinchi kuni yoki homiladorlik sanasini kiriting." },
      { name: 'Hisoblash usulini tanlang', text: "Hayz sanasi yoki homiladorlik sanasi bo'yicha hisoblashni tanlang." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — taxminiy tug'ilish sanasi va homiladorlik muddatini bilib oling." },
    ],
  },
  {
    slug: 'tuition',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите университет', text: 'Выберите вуз из списка университетов Узбекистана.' },
      { name: 'Укажите специальность', text: 'Выберите направление обучения и форму (очная, заочная).' },
      { name: 'Выберите курс', text: 'Укажите текущий или планируемый курс обучения.' },
      { name: 'Получите стоимость', text: 'Нажмите «Рассчитать» — узнайте стоимость контракта за год.' },
    ],
    stepsUz: [
      { name: 'Universitetni tanlang', text: "O'zbekiston universitetlari ro'yxatidan OTMni tanlang." },
      { name: "Mutaxassislikni ko'rsating", text: "Ta'lim yo'nalishi va shakli (kunduzgi, sirtqi) ni tanlang." },
      { name: 'Kursni tanlang', text: "Joriy yoki rejalashtirilgan o'quv kursni ko'rsating." },
      { name: 'Narxni oling', text: "«Hisoblash» tugmasini bosing — yillik kontrakt narxini bilib oling." },
    ],
  },
  {
    slug: 'education-loan',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость обучения', text: 'Укажите годовую стоимость контракта.' },
      { name: 'Укажите срок обучения', text: 'Введите количество лет обучения.' },
      { name: 'Выберите условия кредита', text: 'Укажите процентную ставку и срок погашения.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте ежемесячный платёж и общую стоимость кредита.' },
    ],
    stepsUz: [
      { name: "O'qish narxini kiriting", text: "Yillik kontrakt narxini kiriting." },
      { name: "O'qish muddatini ko'rsating", text: "O'qish yillar sonini kiriting." },
      { name: 'Kredit shartlarini tanlang', text: "Foiz stavkasi va to'lash muddatini ko'rsating." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — oylik to'lov va kreditning umumiy narxini bilib oling." },
    ],
  },
  {
    slug: 'gpa',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите предметы', text: 'Добавьте названия предметов и полученные оценки.' },
      { name: 'Укажите кредиты', text: 'Введите количество кредитов (часов) по каждому предмету.' },
      { name: 'Получите GPA', text: 'Нажмите «Рассчитать» — узнайте средний балл (GPA) по всем предметам.' },
    ],
    stepsUz: [
      { name: 'Fanlarni kiriting', text: "Fan nomlarini va olingan baholarni qo'shing." },
      { name: "Kreditlarni ko'rsating", text: "Har bir fan bo'yicha kreditlar (soatlar) sonini kiriting." },
      { name: 'GPA ni oling', text: "«Hisoblash» tugmasini bosing — barcha fanlar bo'yicha o'rtacha ballni (GPA) bilib oling." },
    ],
  },
  {
    slug: 'fitr-sadaka',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите продукт', text: 'Укажите продукт для расчёта фитр-садака (пшеница, рис, мука и др.).' },
      { name: 'Укажите количество членов семьи', text: 'Введите число человек, за которых выплачивается садака.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте сумму фитр-садака на каждого человека.' },
    ],
    stepsUz: [
      { name: 'Mahsulotni tanlang', text: "Fitr-sadaqa hisoblash uchun mahsulotni ko'rsating (bug'doy, guruch, un va boshq.)." },
      { name: "Oila a'zolari sonini ko'rsating", text: "Sadaqa to'lanadigan kishilar sonini kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — har bir kishi uchun fitr-sadaqa summasini bilib oling." },
    ],
  },
  {
    slug: 'fidiya-sadaka',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите количество дней', text: 'Введите число пропущенных дней поста.' },
      { name: 'Выберите продукт', text: 'Укажите продукт для расчёта фидия-садака.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте общую сумму фидия-садака.' },
    ],
    stepsUz: [
      { name: "Kunlar sonini ko'rsating", text: "O'tkazib yuborilgan ro'za kunlari sonini kiriting." },
      { name: 'Mahsulotni tanlang', text: "Fidiya-sadaqa hisoblash uchun mahsulotni ko'rsating." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — fidiya-sadaqaning umumiy summasini bilib oling." },
    ],
  },
  {
    slug: 'kurban',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип животного', text: 'Укажите вид жертвенного животного (баран, корова, верблюд).' },
      { name: 'Укажите количество долей', text: 'Введите число долей (для крупного животного до 7 долей).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте стоимость курбана и вашу долю.' },
    ],
    stepsUz: [
      { name: 'Hayvon turini tanlang', text: "Qurbonlik hayvoni turini ko'rsating (qo'y, sigir, tuya)." },
      { name: "Ulushlar sonini ko'rsating", text: "Ulushlar sonini kiriting (yirik hayvon uchun 7 taga)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — qurbonlik narxi va sizning ulushingizni bilib oling." },
    ],
  },
  {
    slug: 'date-calc',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите начальную дату', text: 'Укажите дату, от которой нужно вести расчёт.' },
      { name: 'Выберите операцию', text: 'Выберите: добавить/вычесть дни или найти разницу между датами.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — получите итоговую дату или количество дней.' },
    ],
    stepsUz: [
      { name: "Boshlang'ich sanani kiriting", text: "Hisob-kitob qilinadigan sanani kiriting." },
      { name: 'Amalni tanlang', text: "Tanlang: kunlar qo'shish/ayirish yoki sanalar orasidagi farqni topish." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — yakuniy sana yoki kunlar sonini oling." },
    ],
  },
  {
    slug: 'area',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите фигуру', text: 'Выберите геометрическую фигуру (круг, прямоугольник, треугольник и др.).' },
      { name: 'Введите размеры', text: 'Укажите необходимые параметры (длину, ширину, радиус).' },
      { name: 'Получите площадь', text: 'Нажмите «Рассчитать» — получите площадь и периметр фигуры.' },
    ],
    stepsUz: [
      { name: 'Shaklni tanlang', text: "Geometrik shaklni tanlang (doira, to'g'ri to'rtburchak, uchburchak va boshq.)." },
      { name: "O'lchamlarni kiriting", text: "Kerakli parametrlarni (uzunlik, kenglik, radius) kiriting." },
      { name: 'Yuzani oling', text: "«Hisoblash» tugmasini bosing — shaklning yuzi va perimetrini oling." },
    ],
  },
  {
    slug: 'unit-converter',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите категорию', text: 'Выберите категорию единиц (длина, масса, объём, температура и др.).' },
      { name: 'Введите значение', text: 'Укажите числовое значение и исходную единицу измерения.' },
      { name: 'Получите результат', text: 'Результат конвертации в целевую единицу отобразится мгновенно.' },
    ],
    stepsUz: [
      { name: 'Kategoriyani tanlang', text: "Birliklar kategoriyasini tanlang (uzunlik, massa, hajm, harorat va boshq.)." },
      { name: 'Qiymatni kiriting', text: "Raqamli qiymat va boshlang'ich o'lchov birligini ko'rsating." },
      { name: 'Natijani oling', text: "Maqsad birligiga konvertatsiya natijasi darhol ko'rinadi." },
    ],
  },
  {
    slug: 'number-to-words',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите число', text: 'Укажите число, которое нужно записать прописью.' },
      { name: 'Выберите язык и валюту', text: 'Выберите язык (русский, узбекский) и валюту (сум, доллар).' },
      { name: 'Получите результат', text: 'Число прописью и сумма в валюте отобразятся автоматически.' },
    ],
    stepsUz: [
      { name: 'Raqamni kiriting', text: "Yozma shaklda yozilishi kerak bo'lgan raqamni kiriting." },
      { name: "Til va valyutani tanlang", text: "Tilni (rus, o'zbek) va valyutani (so'm, dollar) tanlang." },
      { name: 'Natijani oling', text: "Raqam yozma shaklda va valyutadagi summa avtomatik ko'rinadi." },
    ],
  },
  {
    slug: 'age',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите дату рождения', text: 'Укажите дату рождения в формате ДД.ММ.ГГГГ.' },
      { name: 'Получите результат', text: 'Нажмите «Рассчитать» — узнайте точный возраст в годах, месяцах и днях.' },
    ],
    stepsUz: [
      { name: "Tug'ilgan sanani kiriting", text: "Tug'ilgan sanani KK.OO.YYYY formatida kiriting." },
      { name: 'Natijani oling', text: "«Hisoblash» tugmasini bosing — aniq yoshni yillar, oylar va kunlarda bilib oling." },
    ],
  },
  {
    slug: 'random',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите диапазон', text: 'Введите минимальное и максимальное значения.' },
      { name: 'Выберите количество', text: 'Укажите, сколько случайных чисел нужно сгенерировать.' },
      { name: 'Получите результат', text: 'Нажмите «Сгенерировать» — получите случайные числа из указанного диапазона.' },
    ],
    stepsUz: [
      { name: 'Diapazonni kiriting', text: "Minimal va maksimal qiymatlarni kiriting." },
      { name: "Miqdorni tanlang", text: "Nechta tasodifiy son kerakligini ko'rsating." },
      { name: 'Natijani oling', text: "«Generatsiya» tugmasini bosing — ko'rsatilgan diapazondagi tasodifiy sonlarni oling." },
    ],
  },
  {
    slug: 'passport-fees',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип паспорта', text: 'Укажите тип: биометрический, служебный, дипломатический.' },
      { name: 'Укажите срочность', text: 'Выберите срок оформления (обычный, ускоренный, срочный).' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте госпошлину за оформление паспорта.' },
    ],
    stepsUz: [
      { name: 'Pasport turini tanlang', text: "Turni ko'rsating: biometrik, xizmat, diplomatik." },
      { name: "Shoshilinchligini ko'rsating", text: "Rasmiylashtirish muddatini tanlang (oddiy, tezlashtirilgan, shoshilinch)." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — pasport rasmiylashtirishning davlat boji summasini bilib oling." },
    ],
  },
  {
    slug: 'state-duties',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите вид услуги', text: 'Укажите государственную услугу (регистрация, лицензирование и др.).' },
      { name: 'Укажите параметры', text: 'Введите дополнительные параметры, если требуется.' },
      { name: 'Получите сумму пошлины', text: 'Нажмите «Рассчитать» — узнайте размер государственной пошлины.' },
    ],
    stepsUz: [
      { name: 'Xizmat turini tanlang', text: "Davlat xizmatini ko'rsating (ro'yxatga olish, litsenziyalash va boshq.)." },
      { name: "Parametrlarni ko'rsating", text: "Agar kerak bo'lsa, qo'shimcha parametrlarni kiriting." },
      { name: 'Boj summasini oling', text: "«Hisoblash» tugmasini bosing — davlat boji miqdorini bilib oling." },
    ],
  },
  {
    slug: 'wedding',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите количество гостей', text: 'Введите ожидаемое число гостей на свадьбу.' },
      { name: 'Выберите формат мероприятия', text: 'Укажите тип: ресторан, банкетный зал, дома.' },
      { name: 'Отметьте дополнительные расходы', text: 'Добавьте расходы: фото/видео, музыка, декор, транспорт и др.' },
      { name: 'Получите смету', text: 'Нажмите «Рассчитать» — получите примерный бюджет свадьбы.' },
    ],
    stepsUz: [
      { name: "Mehmonlar sonini ko'rsating", text: "To'yga kutilayotgan mehmonlar sonini kiriting." },
      { name: "Tadbir formatini tanlang", text: "Turini ko'rsating: restoran, banket zali, uyda." },
      { name: "Qo'shimcha xarajatlarni belgilang", text: "Xarajatlarni qo'shing: foto/video, musiqa, bezak, transport va boshq." },
      { name: 'Smetani oling', text: "«Hisoblash» tugmasini bosing — to'yning taxminiy byudjetini ko'ring." },
    ],
  },
  {
    slug: 'cotton-yield',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите площадь посева', text: 'Укажите площадь хлопкового поля в гектарах.' },
      { name: 'Укажите урожайность', text: 'Введите ожидаемую урожайность (ц/га) или используйте среднюю по региону.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте ожидаемый объём урожая и его стоимость.' },
    ],
    stepsUz: [
      { name: "Ekish maydonini kiriting", text: "Paxta dala maydonini gektarlarda kiriting." },
      { name: "Hosildorlikni ko'rsating", text: "Kutilayotgan hosildorlikni (s/ga) kiriting yoki hudud bo'yicha o'rtachadan foydalaning." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — kutilayotgan hosil hajmi va narxini bilib oling." },
    ],
  },
  {
    slug: 'remittances',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите страну отправки', text: 'Укажите страну, из которой отправляется перевод.' },
      { name: 'Введите сумму', text: 'Укажите сумму перевода в валюте отправления.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте сумму к получению в сумах с учётом комиссии.' },
    ],
    stepsUz: [
      { name: "Jo'natish mamlakatini tanlang", text: "Pul o'tkazma jo'natiladigan mamlakatni ko'rsating." },
      { name: 'Summani kiriting', text: "Jo'natish valyutasida o'tkazma summasini kiriting." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — komissiyani hisobga olgan holda so'mda qabul qilinadigan summani bilib oling." },
    ],
  },
  {
    slug: 'visa-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите страну', text: 'Укажите страну, для которой оформляется виза.' },
      { name: 'Выберите тип визы', text: 'Укажите тип: туристическая, рабочая, студенческая, транзитная.' },
      { name: 'Укажите срочность', text: 'Выберите обычный или ускоренный срок оформления.' },
      { name: 'Получите расчёт', text: 'Нажмите «Рассчитать» — узнайте консульский сбор и общие расходы на визу.' },
    ],
    stepsUz: [
      { name: 'Mamlakatni tanlang', text: "Viza rasmiylashtirilayotgan mamlakatni ko'rsating." },
      { name: 'Viza turini tanlang', text: "Turini ko'rsating: turistik, ishchi, talaba, tranzit." },
      { name: "Shoshilinchligini ko'rsating", text: "Oddiy yoki tezlashtirilgan rasmiylashtirish muddatini tanlang." },
      { name: 'Hisobni oling', text: "«Hisoblash» tugmasini bosing — konsullik yig'imi va viza uchun umumiy xarajatlarni bilib oling." },
    ],
  },
  {
    slug: 'brv',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите количество БРВ', text: 'Укажите количество базовых расчётных величин.' },
      { name: 'Выберите период', text: 'Выберите год для определения актуального размера БРВ.' },
      { name: 'Получите сумму', text: 'Нажмите «Рассчитать» — узнайте сумму в сумах для указанного количества БРВ.' },
    ],
    stepsUz: [
      { name: 'BHM miqdorini kiriting', text: "Bazaviy hisoblash miqdorlari sonini ko'rsating." },
      { name: 'Davrni tanlang', text: "Dolzarb BHM miqdorini aniqlash uchun yilni tanlang." },
      { name: 'Summani oling', text: "«Hisoblash» tugmasini bosing — ko'rsatilgan BHM soni uchun so'mdagi summani bilib oling." },
    ],
  },
]

export function getCalculatorHowTo(slug: string): CalculatorHowTo | undefined {
  return CALCULATOR_HOWTOS.find((h) => h.slug === slug)
}
