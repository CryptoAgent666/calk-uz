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
]

export function getCalculatorHowTo(slug: string): CalculatorHowTo | undefined {
  return CALCULATOR_HOWTOS.find((h) => h.slug === slug)
}
