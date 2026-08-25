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
      { name: 'Отметьте IT Park', text: 'Для резидентов IT Park действует льготная ставка НДФЛ 7,5% вместо 12%.' },
      { name: 'Отметьте бюджетную организацию', text: 'У бюджетных организаций социальный налог работодателя 25%, а не 12%.' },
      { name: 'Получите результат', text: 'Результат появится сразу: вы получите сумму на руки, НДФЛ, ИНПС и все отчисления.' },
    ],
    stepsUz: [
      { name: 'Ish haqini kiriting', text: "Hisoblangan (gross) ish haqi summasini so'mda kiriting." },
      { name: 'IT Park rezidentini belgilang', text: "IT Park rezidentlari uchun JShShS 12% o'rniga imtiyozli 7,5% stavkasi amal qiladi." },
      { name: 'Byudjet tashkilotini belgilang', text: "Byudjet tashkilotlarida ish beruvchining ijtimoiy solig'i 12% emas, 25%." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — qo'lga tegadigan summa, JShShS, INPS va barcha ajratmalarni ko'ring." },
    ],
  },
  {
    slug: 'income-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму дохода', text: 'Укажите доход за период в сумах.' },
      { name: 'Отметьте резидентство IT Park', text: 'Для резидентов IT Park ставка НДФЛ 7,5% вместо стандартных 12%.' },
      { name: 'Получите результат', text: 'Результат появится сразу: ставка, сумма НДФЛ и чистый доход.' },
    ],
    stepsUz: [
      { name: 'Daromad summasini kiriting', text: 'Davr uchun daromadni so\'mda kiriting.' },
      { name: 'IT Park rezidentligini belgilang', text: 'IT Park rezidentlari uchun JShShS standart 12% emas, 7,5%.' },
      { name: 'Natijani oling', text: 'Natija darhol chiqadi: stavka, JShShS summasi va sof daromad.' },
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
      { name: 'Получите график платежей', text: 'Результат появится сразу: вы получите ежемесячный платёж, переплату и полный график.' },
    ],
    stepsUz: [
      { name: 'Kredit summasini kiriting', text: "Kerakli kredit summasini o'zbek so'mida kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Bankning yillik foiz stavkasini kiriting." },
      { name: 'Kredit muddatini tanlang', text: "Kreditlash muddatini oylar yoki yillarda ko'rsating." },
      { name: "To'lov turini tanlang", text: "Annuitet (teng qismlar) yoki differensial (kamayuvchi) turni tanlang." },
      { name: "To'lov jadvalini oling", text: "Natija darhol chiqadi — oylik to'lov, ortiqcha to'lov va to'liq jadvalni ko'ring." },
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
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете ежемесячный платёж, общую переплату и сумму кредита.' },
    ],
    stepsUz: [
      { name: 'Uy-joy narxini kiriting', text: "Kvartira yoki uyning to'liq narxini so'mda kiriting." },
      { name: "Boshlang'ich badalni ko'rsating", text: "Boshlang'ich badal summasini yoki foizini kiriting." },
      { name: "Foiz stavkasini o'rnating", text: "Ipoteka kreditining yillik stavkasini kiriting." },
      { name: 'Ipoteka muddatini tanlang', text: "Kreditlash muddatini ko'rsating (odatda 10-20 yil)." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — oylik to'lov, umumiy ortiqcha to'lov va kredit summasini bilib oling." },
    ],
  },
  {
    slug: 'deposit',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму вклада', text: 'Укажите сумму, которую хотите разместить на депозит.' },
      { name: 'Укажите процентную ставку', text: 'Введите годовую процентную ставку банка по вкладу.' },
      { name: 'Выберите срок вклада', text: 'Укажите срок размещения депозита в месяцах.' },
      { name: 'Получите доходность', text: 'Результат появится сразу — вы узнаете сумму начисленных процентов и итоговую сумму.' },
    ],
    stepsUz: [
      { name: 'Omonat summasini kiriting', text: "Depozitga joylashtirmoqchi bo'lgan summaningizni kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Bankning omonat bo'yicha yillik foiz stavkasini kiriting." },
      { name: 'Omonat muddatini tanlang', text: "Depozit joylashtirish muddatini oylarda ko'rsating." },
      { name: 'Daromadni oling', text: "Natija darhol chiqadi — hisoblangan foiz summasini va yakuniy summani bilib oling." },
    ],
  },
  {
    slug: 'customs',
    totalTimeMinutes: 3,
    stepsRu: [
      { name: 'Введите цену авто', text: 'Укажите таможенную стоимость автомобиля в долларах США.' },
      { name: 'Укажите объём двигателя', text: 'Введите объём двигателя в кубических сантиметрах.' },
      { name: 'Выберите тип топлива', text: 'Бензин, дизель, электро или гибрид — от этого зависят ставки и утильсбор.' },
      { name: 'Укажите возраст автомобиля', text: 'До 1 года, от 1 до 3 лет или старше 3 лет — по этим группам различаются ставки пошлины.' },
      { name: 'Получите расчёт пошлин', text: 'Результат появится сразу: таможенная пошлина, НДС, утильсбор, регистрация и итог.' },
    ],
    stepsUz: [
      { name: 'Avtomobil narxini kiriting', text: "Avtomobilning bojxona qiymatini AQSh dollarida kiriting." },
      { name: "Dvigatel hajmini ko'rsating", text: "Dvigatel hajmini kub santimetrlarda kiriting." },
      { name: "Yoqilg'i turini tanlang", text: "Benzin, dizel, elektro yoki gibrid — stavkalar va utilizatsiya yig'imi shunga bog'liq." },
      { name: "Avtomobil yoshini ko'rsating", text: "1 yilgacha, 1 yildan 3 yilgacha yoki 3 yildan katta — boj stavkalari shu guruhlar bo'yicha farq qiladi." },
      { name: "Bojlar hisobini oling", text: "Natija darhol chiqadi — bojxona boji, QQS, utilizatsiya yig'imi, ro'yxatga olish va jami." },
    ],
  },
  {
    slug: 'electricity',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите потребление', text: 'Укажите расход электроэнергии за месяц в кВт·ч.' },
      { name: 'Отметьте электроплиту', text: 'При наличии электроплиты действует скидка к тарифу.' },
      { name: 'Получите сумму оплаты', text: 'Результат появится сразу: разбивка по тарифным ступеням и итог.' },
    ],
    stepsUz: [
      { name: 'Iste\'molni kiriting', text: 'Oylik elektr energiya sarfini kVt·soatda ko\'rsating.' },
      { name: 'Elektr plitani belgilang', text: 'Elektr plita bo\'lsa tarifga chegirma qo\'llaniladi.' },
      { name: 'To\'lov summasini oling', text: 'Natija darhol chiqadi: tarif bosqichlari bo\'yicha taqsimot va jami.' },
    ],
  },
  {
    slug: 'gas',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите потребление газа', text: 'Укажите расход за месяц в кубометрах.' },
      { name: 'Отметьте летний период', text: 'Летом действует отдельный тариф — отметьте, если расчёт за летние месяцы.' },
      { name: 'Получите сумму оплаты', text: 'Результат появится сразу: сумма к оплате по действующему тарифу.' },
    ],
    stepsUz: [
      { name: 'Gaz iste\'molini kiriting', text: 'Oylik sarfni kub metrda ko\'rsating.' },
      { name: 'Yoz davrini belgilang', text: 'Yozda alohida tarif amal qiladi — hisob yoz oylari uchun bo\'lsa belgilang.' },
      { name: 'To\'lov summasini oling', text: 'Natija darhol chiqadi: amaldagi tarif bo\'yicha to\'lanadigan summa.' },
    ],
  },
  {
    slug: 'water',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите расход холодной воды', text: 'Укажите потребление за месяц в кубометрах.' },
      { name: 'Введите расход горячей воды', text: 'Горячая вода считается по отдельному, более высокому тарифу.' },
      { name: 'Получите сумму оплаты', text: 'Результат появится сразу: сумма по каждому виду воды и итог.' },
    ],
    stepsUz: [
      { name: 'Sovuq suv sarfini kiriting', text: 'Oylik iste\'molni kub metrda ko\'rsating.' },
      { name: 'Issiq suv sarfini kiriting', text: 'Issiq suv alohida, yuqoriroq tarif bo\'yicha hisoblanadi.' },
      { name: 'To\'lov summasini oling', text: 'Natija darhol chiqadi: har bir suv turi bo\'yicha summa va jami.' },
    ],
  },
  {
    slug: 'vat',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите сумму', text: 'Укажите сумму, для которой нужно рассчитать НДС.' },
      { name: 'Выберите операцию', text: 'Выберите «Начислить НДС» (добавить 12%) или «Выделить НДС» (извлечь из суммы).' },
      { name: 'Получите результат', text: 'Результат появится сразу: сумму НДС, сумму без НДС и сумму с НДС.' },
    ],
    stepsUz: [
      { name: 'Summani kiriting', text: 'QQS hisoblash kerak bo\'lgan summani kiriting.' },
      { name: 'Amalni tanlang', text: "«QQS hisoblash» (12% qo'shish) yoki «QQS ajratish» (summadan ajratish) ni tanlang." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — QQS summasini, QQSsiz va QQS bilan summani ko'ring." },
    ],
  },
  {
    slug: 'ip-calculator',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите годовой доход', text: 'Укажите выручку ИП за год в сумах.' },
      { name: 'Выберите налоговый режим', text: 'Налог с оборота 1% или общий режим 12% — калькулятор посчитает оба варианта.' },
      { name: 'Получите расчёт налогов', text: 'Результат появится сразу: налог, социальный налог, ИНПС и общая нагрузка.' },
    ],
    stepsUz: [
      { name: 'Yillik daromadni kiriting', text: 'YaTTning yillik tushumini so\'mda kiriting.' },
      { name: 'Soliq rejimini tanlang', text: 'Aylanma solig\'i 1% yoki umumiy rejim 12% — kalkulyator ikkalasini ham hisoblaydi.' },
      { name: 'Soliq hisobini oling', text: 'Natija darhol chiqadi: soliq, ijtimoiy soliq, MHTJ va umumiy yuk.' },
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
      { name: 'Получите результат', text: 'Результат появится сразу: индекс массы тела и категорию (норма, избыток, ожирение).' },
    ],
    stepsUz: [
      { name: "Bo'yingizni kiriting", text: "Bo'yingizni santimetrlarda ko'rsating." },
      { name: 'Vazningizni kiriting', text: 'Vazningizni kilogrammlarda kiriting.' },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — tana massasi indeksini va toifasini (norma, ortiqcha, semizlik) bilib oling." },
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
      { name: 'Получите норму калорий', text: 'Результат появится сразу: суточную норму калорий для поддержания, снижения и набора веса.' },
    ],
    stepsUz: [
      { name: 'Yoshingizni kiriting', text: "Yoshingizni yillarda ko'rsating." },
      { name: "Bo'y va vaznni kiriting", text: "Bo'yingizni santimetrlarda va vazningizni kilogrammlarda kiriting." },
      { name: 'Jinsni tanlang', text: "Aniq hisoblash uchun jinsingizni ko'rsating." },
      { name: 'Faollik darajasini tanlang', text: "Jismoniy faollik darajasini ko'rsating (kam harakatli, o'rtacha, faol)." },
      { name: 'Kaloriya normasini oling', text: "Natija darhol chiqadi — vaznni saqlash, kamaytirish va oshirish uchun kunlik kaloriya normasini oling." },
    ],
  },
  {
    slug: 'alimony',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите ежемесячный чистый доход плательщика алиментов.' },
      { name: 'Укажите количество детей', text: 'Выберите количество детей (1, 2, 3 и более).' },
      { name: 'Получите сумму алиментов', text: 'Результат появится сразу: размер алиментов согласно Семейному кодексу РУз.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: "Aliment to'lovchining oylik sof daromadini kiriting." },
      { name: "Bolalar sonini ko'rsating", text: "Bolalar sonini tanlang (1, 2, 3 va undan ko'p)." },
      { name: 'Aliment summasini oling', text: "Natija darhol chiqadi — O'zR Oila kodeksiga muvofiq aliment miqdorini bilib oling." },
    ],
  },
  {
    slug: 'vacation-pay',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите заработок за 12 месяцев', text: 'Укажите общую сумму заработка за последние 12 месяцев, а не среднемесячную зарплату.' },
      { name: 'Укажите дни отпуска', text: 'Введите количество дней отпуска — минимум по закону 21 календарный день в году.' },
      { name: 'Проверьте число рабочих дней', text: 'По умолчанию 247 рабочих дней за 12 месяцев — при другом графике измените.' },
      { name: 'Получите сумму отпускных', text: 'Результат появится сразу: среднедневной заработок, отпускные брутто, НДФЛ и на руки.' },
    ],
    stepsUz: [
      { name: '12 oylik daromadni kiriting', text: 'Oxirgi 12 oydagi umumiy daromadni kiriting — o\'rtacha oylik ish haqini emas.' },
      { name: 'Ta\'til kunlarini ko\'rsating', text: 'Ta\'til kunlari sonini kiriting — qonun bo\'yicha yiliga kamida 21 taqvim kuni.' },
      { name: 'Ish kunlari sonini tekshiring', text: 'Standart 12 oyda 247 ish kuni — boshqa grafikda o\'zgartiring.' },
      { name: 'Ta\'til pulini oling', text: 'Natija darhol chiqadi: o\'rtacha kunlik daromad, brutto ta\'til puli, JShShS va qo\'lga tegadigan summa.' },
    ],
  },
  {
    slug: 'sick-leave',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите заработок за 12 месяцев', text: 'Укажите общую сумму заработка за последние 12 месяцев, а не среднемесячную зарплату.' },
      { name: 'Укажите страховой стаж', text: 'Стаж в месяцах: 6-96 месяцев — 60% среднего заработка, от 97 месяцев — 80%.' },
      { name: 'Укажите дни болезни', text: 'Введите число календарных дней по больничному листу.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: среднедневной заработок, процент, пособие и НДФЛ.' },
    ],
    stepsUz: [
      { name: '12 oylik daromadni kiriting', text: 'Oxirgi 12 oydagi umumiy daromadni kiriting — o\'rtacha oylik ish haqini emas.' },
      { name: 'Sug\'urta stajini ko\'rsating', text: 'Staj oylarda: 6-96 oy — o\'rtacha daromadning 60% i, 97 oydan boshlab — 80%.' },
      { name: 'Kasallik kunlarini ko\'rsating', text: 'Kasallik varaqasidagi taqvim kunlari sonini kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: o\'rtacha kunlik daromad, foiz, nafaqa va JShShS.' },
    ],
  },
  {
    slug: 'maternity',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите заработок за 12 месяцев', text: 'Укажите общую сумму заработка за последние 12 месяцев, а не среднемесячную зарплату.' },
      { name: 'Укажите страховой стаж', text: 'Стаж в месяцах — от него зависит процент: 10-24 мес. 75%, 25-60 мес. 85%, от 61 мес. 100%.' },
      { name: 'Отметьте особые случаи', text: 'Осложнённые роды или многоплодная беременность продлевают отпуск со 126 до 140 дней.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете размер пособия по беременности и родам.' },
    ],
    stepsUz: [
      { name: "12 oylik daromadni kiriting", text: "Oxirgi 12 oydagi umumiy daromad summasini kiriting — o'rtacha oylik ish haqini emas." },
      { name: "Sug'urta stajini ko'rsating", text: "Staj oylarda — foiz shunga bog'liq: 10-24 oy 75%, 25-60 oy 85%, 61 oydan ortiq 100%." },
      { name: 'Maxsus hollarni belgilang', text: "Murakkab tug'ruq yoki ko'p homilalik ta'tilni 126 kundan 140 kunga uzaytiradi." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — homiladorlik va tug'ruq nafaqasi miqdorini bilib oling." },
    ],
  },
  {
    slug: 'pension',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стаж работы', text: 'Укажите общий трудовой стаж в годах.' },
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную заработную плату.' },
      { name: 'Укажите возраст', text: 'Введите текущий возраст и пол для определения пенсионного возраста.' },
      { name: 'Получите расчёт пенсии', text: 'Результат появится сразу — вы узнаете примерный размер пенсии и возраст выхода.' },
    ],
    stepsUz: [
      { name: 'Ish stajini kiriting', text: "Umumiy mehnat stajini yillarda ko'rsating." },
      { name: "O'rtacha ish haqini kiriting", text: "O'rtacha oylik ish haqini ko'rsating." },
      { name: "Yoshni ko'rsating", text: "Pensiya yoshini aniqlash uchun hozirgi yosh va jinsni kiriting." },
      { name: 'Pensiya hisobini oling', text: "Natija darhol chiqadi — taxminiy pensiya miqdorini va chiqish yoshini bilib oling." },
    ],
  },
  {
    slug: 'auto-credit',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость автомобиля', text: 'Укажите полную стоимость автомобиля в сумах.' },
      { name: 'Укажите первоначальный взнос', text: 'Введите сумму или процент первоначального взноса.' },
      { name: 'Установите ставку и срок', text: 'Введите годовую процентную ставку и срок автокредита.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: ежемесячный платёж, переплату и график.' },
    ],
    stepsUz: [
      { name: 'Avtomobil narxini kiriting', text: "Avtomobilning to'liq narxini so'mda kiriting." },
      { name: "Boshlang'ich badalni ko'rsating", text: "Boshlang'ich badal summasini yoki foizini kiriting." },
      { name: "Stavka va muddatni o'rnating", text: "Yillik foiz stavkasini va avtokredit muddatini kiriting." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — oylik to'lov, ortiqcha to'lov va jadvalni ko'ring." },
    ],
  },
  {
    slug: 'compound-interest',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите начальную сумму', text: 'Укажите начальную сумму инвестиции или вклада.' },
      { name: 'Укажите процентную ставку', text: 'Введите годовую процентную ставку.' },
      { name: 'Выберите период и капитализацию', text: 'Укажите срок в годах и частоту капитализации (ежемесячно, ежеквартально, ежегодно).' },
      { name: 'Получите результат', text: 'Результат появится сразу: итоговую сумму и график роста вклада.' },
    ],
    stepsUz: [
      { name: "Boshlang'ich summani kiriting", text: "Investitsiya yoki omonatning boshlang'ich summasini kiriting." },
      { name: "Foiz stavkasini ko'rsating", text: "Yillik foiz stavkasini kiriting." },
      { name: 'Davr va kapitalizatsiyani tanlang', text: "Yillardagi muddatni va kapitalizatsiya chastotasini (oylik, choraklik, yillik) ko'rsating." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — yakuniy summa va omonat o'sish jadvalini ko'ring." },
    ],
  },
  {
    slug: 'osago',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите регион', text: 'Ташкент и Ташкентская область или другие регионы — базовый тариф отличается.' },
      { name: 'Укажите круг водителей', text: 'Отметьте, если полис без ограничения числа водителей — тариф выше.' },
      { name: 'Укажите число ДТП по вине', text: 'От аварийности зависит коэффициент бонус-малус.' },
      { name: 'Получите стоимость полиса', text: 'Результат появится сразу: базовый тариф, КБМ и годовая премия.' },
    ],
    stepsUz: [
      { name: 'Hududni tanlang', text: 'Toshkent va Toshkent viloyati yoki boshqa hududlar — bazaviy tarif farq qiladi.' },
      { name: 'Haydovchilar doirasini ko\'rsating', text: 'Polis haydovchilar soni cheklanmagan bo\'lsa belgilang — tarif yuqoriroq.' },
      { name: 'Aybdor YTH sonini ko\'rsating', text: 'Bonus-malus koeffitsiyenti avariyalar soniga bog\'liq.' },
      { name: 'Polis narxini oling', text: 'Natija darhol chiqadi: bazaviy tarif, KBM va yillik sug\'urta mukofoti.' },
    ],
  },
  {
    slug: 'fuel-consumption',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите расстояние', text: 'Укажите расстояние поездки в километрах.' },
      { name: 'Укажите расход топлива', text: 'Введите средний расход топлива (л/100 км).' },
      { name: 'Введите цену топлива', text: 'Укажите текущую цену бензина или дизеля за литр.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете объём и стоимость топлива на поездку.' },
    ],
    stepsUz: [
      { name: 'Masofani kiriting', text: 'Sayohat masofasini kilometrlarda kiriting.' },
      { name: "Yoqilg'i sarfini ko'rsating", text: "O'rtacha yoqilg'i sarfini (l/100 km) kiriting." },
      { name: "Yoqilg'i narxini kiriting", text: "Hozirgi benzin yoki dizel narxini litr uchun kiriting." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — sayohat uchun yoqilg'i hajmi va narxini bilib oling." },
    ],
  },
  {
    slug: 'heating',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите площадь помещения', text: 'Укажите отапливаемую площадь в квадратных метрах.' },
      { name: 'Укажите число дней', text: 'Введите количество дней месяца, за которые начисляется отопление.' },
      { name: 'Получите сумму оплаты', text: 'Результат появится сразу — вы узнаете стоимость отопления за месяц.' },
    ],
    stepsUz: [
      { name: "Xona maydonini kiriting", text: "Isitilayotgan maydonni kvadrat metrlarda kiriting." },
      { name: "Kunlar sonini ko'rsating", text: "Isitish hisoblanadigan oy kunlari sonini kiriting." },
      { name: "To'lov summasini oling", text: "Natija darhol chiqadi — oylik isitish narxini bilib oling." },
    ],
  },
  {
    slug: 'property-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите кадастровую стоимость', text: 'Введите кадастровую стоимость объекта в сумах — налог считается от неё.' },
      { name: 'Введите площадь', text: 'Площадь в квадратных метрах определяет ставку: до 200 м², 200-500 м² или свыше 500 м².' },
      { name: 'Отметьте, если вы юрлицо', text: 'Для юридических лиц действует единая ставка вместо шкалы по площади.' },
      { name: 'Получите расчёт налога', text: 'Результат появится сразу — годовой налог и два платежа: к 15 апреля и к 15 октября.' },
    ],
    stepsUz: [
      { name: "Kadastr qiymatini ko'rsating", text: "Obyektning kadastr qiymatini so'mda kiriting — soliq shundan hisoblanadi." },
      { name: 'Maydonni kiriting', text: "Kvadrat metrdagi maydon stavkani belgilaydi: 200 m² gacha, 200-500 m² yoki 500 m² dan ortiq." },
      { name: 'Yuridik shaxs bo\'lsangiz belgilang', text: "Yuridik shaxslar uchun maydon shkalasi o'rniga yagona stavka amal qiladi." },
      { name: 'Soliq hisobini oling', text: "Natija darhol chiqadi — yillik soliq va ikki to'lov: 15-aprel va 15-oktabrgacha." },
    ],
  },
  {
    slug: 'vehicle-tax',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип ТС', text: 'Легковой автомобиль, мотоцикл или прицеп — ставки госпошлины различаются.' },
      { name: 'Укажите, нужны ли новые номера', text: 'При перерегистрации со своими номерами платёж меньше на 5,5 БРВ.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — разовая госпошлина при постановке на учёт, в сумах и в БРВ.' },
    ],
    stepsUz: [
      { name: 'TV turini tanlang', text: "Yengil avtomobil, mototsikl yoki tirkama — davlat boji stavkalari har xil." },
      { name: 'Yangi raqam kerakmi, belgilang', text: "O'z raqamlari bilan qayta ro'yxatdan o'tishda to'lov 5,5 BHM ga kam." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — hisobga qo'yishdagi bir martalik davlat boji, so'mda va BHM da." },
    ],
  },
  {
    slug: 'zakat',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите имущество', text: 'Укажите общую стоимость имущества, подлежащего закяту (деньги, золото, товар).' },
      { name: 'Укажите долги', text: 'Введите сумму текущих долгов для вычета из базы закята.' },
      { name: 'Получите расчёт закята', text: 'Результат появится сразу — узнайте, достигнут ли нисаб и сумму закята (2,5%).' },
    ],
    stepsUz: [
      { name: 'Mulkni kiriting', text: "Zakotga tegishli mulkning umumiy qiymatini ko'rsating (pul, oltin, tovar)." },
      { name: "Qarzlarni ko'rsating", text: "Zakot bazasidan chegirib tashlash uchun joriy qarzlar summasini kiriting." },
      { name: 'Zakot hisobini oling', text: "Natija darhol chiqadi — nisob yetganligini va zakot summasini (2,5%) bilib oling." },
    ],
  },
  {
    slug: 'percentage',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип расчёта', text: 'Выберите: найти процент от числа, число по проценту или процентное соотношение.' },
      { name: 'Введите значения', text: 'Заполните числовые поля в зависимости от выбранного типа.' },
      { name: 'Получите результат', text: 'Результат появится сразу — результат отобразится мгновенно.' },
    ],
    stepsUz: [
      { name: 'Hisoblash turini tanlang', text: "Tanlang: sondan foiz topish, foizdan son topish yoki foiz nisbatini aniqlash." },
      { name: 'Qiymatlarni kiriting', text: "Tanlangan turga qarab raqamli maydonlarni to'ldiring." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — natija darhol ko'rinadi." },
    ],
  },
  {
    slug: 'discount',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите первоначальную цену', text: 'Укажите цену товара до скидки.' },
      { name: 'Укажите размер скидки', text: 'Введите процент скидки.' },
      { name: 'Получите итоговую цену', text: 'Результат появится сразу — вы узнаете цену со скидкой и сумму экономии.' },
    ],
    stepsUz: [
      { name: "Boshlang'ich narxni kiriting", text: "Tovarning chegirmadan oldingi narxini kiriting." },
      { name: "Chegirma miqdorini ko'rsating", text: 'Chegirma foizini kiriting.' },
      { name: 'Yakuniy narxni oling', text: "Natija darhol chiqadi — chegirmali narx va tejamkorlik summasini bilib oling." },
    ],
  },
  {
    slug: 'margin',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите себестоимость', text: 'Укажите себестоимость товара или услуги.' },
      { name: 'Введите цену продажи', text: 'Укажите цену, по которой вы продаёте товар.' },
      { name: 'Получите маржу и наценку', text: 'Результат появится сразу: маржу (%), наценку (%) и прибыль.' },
    ],
    stepsUz: [
      { name: 'Tannarxni kiriting', text: "Tovar yoki xizmatning tannarxini ko'rsating." },
      { name: 'Sotuv narxini kiriting', text: "Tovarni sotayotgan narxingizni ko'rsating." },
      { name: 'Marja va ustamani oling', text: "Natija darhol chiqadi — marjani (%), ustamani (%) va foydani ko'ring." },
    ],
  },
  {
    slug: 'vat-threshold',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите месячную выручку', text: 'Укажите среднюю выручку за месяц в сумах.' },
      { name: 'Укажите число месяцев', text: 'Введите, сколько месяцев уже отработано в налоговом периоде.' },
      { name: 'Получите результат', text: 'Результат появится сразу: текущий оборот, сколько осталось до порога 12 000 БРВ и через сколько месяцев он будет достигнут.' },
    ],
    stepsUz: [
      { name: 'Oylik tushumni kiriting', text: 'O\'rtacha oylik tushumni so\'mda ko\'rsating.' },
      { name: 'Oylar sonini ko\'rsating', text: 'Soliq davrida nechta oy ishlanganini kiriting.' },
      { name: 'Natijani oling', text: 'Natija darhol chiqadi: joriy aylanma, 12 000 BHM chegarasiga qancha qolgani va necha oyda unga yetishi.' },
    ],
  },
  {
    slug: 'land-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите нормативную стоимость', text: 'Укажите нормативную стоимость участка в сумах — налог считается от неё.' },
      { name: 'Отметьте назначение земли', text: 'Для сельскохозяйственных земель действует отдельная, пониженная ставка.' },
      { name: 'Получите расчёт налога', text: 'Результат появится сразу: ставка, годовой налог и квартальный платёж.' },
    ],
    stepsUz: [
      { name: 'Normativ qiymatni kiriting', text: 'Yer uchastkasining normativ qiymatini so\'mda kiriting — soliq shundan hisoblanadi.' },
      { name: 'Yer maqsadini belgilang', text: 'Qishloq xo\'jaligi yerlari uchun alohida, pasaytirilgan stavka amal qiladi.' },
      { name: 'Soliq hisobini oling', text: 'Natija darhol chiqadi: stavka, yillik soliq va choraklik to\'lov.' },
    ],
  },
  {
    slug: 'corporate-tax',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите доход предприятия за период в сумах.' },
      { name: 'Укажите расходы', text: 'Введите документально подтверждённые расходы — налог считается с разницы.' },
      { name: 'Проверьте ставку', text: 'По умолчанию 15% — общая ставка налога на прибыль; при льготном режиме измените её.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: прибыль, сумма налога и чистая прибыль.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: 'Korxonaning davr uchun daromadini so\'mda kiriting.' },
      { name: 'Xarajatlarni ko\'rsating', text: 'Hujjat bilan tasdiqlangan xarajatlarni kiriting — soliq farqdan hisoblanadi.' },
      { name: 'Stavkani tekshiring', text: 'Standart 15% — foyda solig\'ining umumiy stavkasi; imtiyozli rejimda uni o\'zgartiring.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: foyda, soliq summasi va sof foyda.' },
    ],
  },
  {
    slug: 'tax-penalty',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму задолженности', text: 'Укажите недоимку по налогу в сумах.' },
      { name: 'Укажите дни просрочки', text: 'Введите число дней с установленного срока уплаты.' },
      { name: 'Получите расчёт пени', text: 'Результат появится сразу: дневная ставка 1/300 ставки ЦБ, сумма пени и общий долг.' },
    ],
    stepsUz: [
      { name: 'Qarzdorlik summasini kiriting', text: 'Soliq bo\'yicha qarzni so\'mda ko\'rsating.' },
      { name: 'Kechikish kunlarini ko\'rsating', text: 'Belgilangan to\'lov muddatidan beri o\'tgan kunlar sonini kiriting.' },
      { name: 'Penya hisobini oling', text: 'Natija darhol chiqadi: MB stavkasining 1/300 kunlik stavkasi, penya va umumiy qarz.' },
    ],
  },
  {
    slug: 'self-employed',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите доход', text: 'Укажите доход самозанятого за период в сумах.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: ставка 1%, сумма налога, средний налог в месяц и чистый доход.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: 'O\'z-o\'zini band qilgan shaxsning davr uchun daromadini so\'mda kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: 1% stavka, soliq summasi, o\'rtacha oylik soliq va sof daromad.' },
    ],
  },
  {
    slug: 'turnover-tax',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите выручку', text: 'Укажите оборот за период в сумах.' },
      { name: 'Проверьте ставку', text: '1% — для ИП и самозанятых, 4% — базовая ставка для юрлиц; при льготе измените её.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: сумма налога и чистая выручка.' },
    ],
    stepsUz: [
      { name: 'Tushumni kiriting', text: 'Davr uchun aylanmani so\'mda kiriting.' },
      { name: 'Stavkani tekshiring', text: '1% — YaTT va o\'z-o\'zini band qilganlar uchun, 4% — yuridik shaxslar uchun bazaviy; imtiyoz bo\'lsa o\'zgartiring.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: soliq summasi va sof tushum.' },
    ],
  },
  {
    slug: 'severance',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите среднюю зарплату', text: 'Укажите среднемесячную зарплату в сумах.' },
      { name: 'Укажите месяцы компенсации', text: 'Сколько среднемесячных заработков положено — зависит от стажа и основания увольнения.' },
      { name: 'Укажите неиспользованный отпуск', text: 'Введите число неотгулянных дней отпуска.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: выходное пособие, компенсация отпуска и итог к выплате.' },
    ],
    stepsUz: [
      { name: 'O\'rtacha ish haqini kiriting', text: 'O\'rtacha oylik ish haqini so\'mda ko\'rsating.' },
      { name: 'Kompensatsiya oylarini ko\'rsating', text: 'Nechta o\'rtacha oylik ish haqi tegishli — staj va ishdan bo\'shatish asosiga bog\'liq.' },
      { name: 'Ishlatilmagan ta\'tilni ko\'rsating', text: 'Foydalanilmagan ta\'til kunlari sonini kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: chiqish nafaqasi, ta\'til kompensatsiyasi va jami to\'lov.' },
    ],
  },
  {
    slug: 'overtime',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите оклад', text: 'Укажите ваш ежемесячный должностной оклад.' },
      { name: 'Укажите часы переработки', text: 'Введите количество часов сверхурочной работы.' },
      { name: 'Выберите тип переработки', text: 'Укажите — работа в будни, выходные или праздничные дни.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете доплату за сверхурочные часы.' },
    ],
    stepsUz: [
      { name: 'Maoshni kiriting', text: "Oylik lavozim maoshingizni ko'rsating." },
      { name: "Ortiqcha soatlarni ko'rsating", text: "Ortiqcha ishlangan soatlar sonini kiriting." },
      { name: "Ortiqcha ish turini tanlang", text: "Ish kunlari, dam olish yoki bayram kunlaridagi ishni ko'rsating." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — ortiqcha soatlar uchun qo'shimcha haqni bilib oling." },
    ],
  },
  {
    slug: 'installment',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость товара', text: 'Укажите цену покупки в сумах.' },
      { name: 'Укажите годовую надбавку', text: 'Введите процент удорожания, который называет магазин или банк.' },
      { name: 'Выберите срок', text: 'Укажите срок рассрочки в месяцах.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: ежемесячный платёж, общая сумма и переплата.' },
    ],
    stepsUz: [
      { name: 'Tovar narxini kiriting', text: 'Xarid narxini so\'mda ko\'rsating.' },
      { name: 'Yillik ustamani ko\'rsating', text: 'Do\'kon yoki bank aytgan ustama foizini kiriting.' },
      { name: 'Muddatni tanlang', text: 'Bo\'lib to\'lash muddatini oylarda ko\'rsating.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: oylik to\'lov, jami summa va ortiqcha to\'lov.' },
    ],
  },
  {
    slug: 'early-repayment',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите параметры кредита', text: 'Укажите остаток долга, процентную ставку и оставшийся срок.' },
      { name: 'Укажите сумму досрочного платежа', text: 'Введите сумму, которую хотите внести досрочно.' },
      { name: 'Выберите тип досрочного погашения', text: 'Выберите: уменьшить срок кредита или ежемесячный платёж.' },
      { name: 'Получите расчёт экономии', text: 'Результат появится сразу — вы узнаете экономию на процентах и новый график.' },
    ],
    stepsUz: [
      { name: 'Kredit parametrlarini kiriting', text: "Qarz qoldig'i, foiz stavkasi va qolgan muddatni ko'rsating." },
      { name: "Muddatidan oldin to'lov summasini kiriting", text: "Muddatidan oldin kiritmoqchi bo'lgan summani kiriting." },
      { name: "Muddatidan oldin to'lash turini tanlang", text: "Tanlang: kredit muddatini qisqartirish yoki oylik to'lovni kamaytirish." },
      { name: 'Tejamkorlik hisobini oling', text: "Natija darhol chiqadi — foizlar bo'yicha tejamkorlik va yangi jadvalni ko'ring." },
    ],
  },
  {
    slug: 'refinancing',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите текущий кредит', text: 'Укажите остаток долга, ставку и оставшийся срок текущего кредита.' },
      { name: 'Укажите условия нового кредита', text: 'Введите процентную ставку и срок нового кредита.' },
      { name: 'Получите сравнение', text: 'Результат появится сразу — сравните переплату по текущему и новому кредиту.' },
    ],
    stepsUz: [
      { name: 'Joriy kreditni kiriting', text: "Qarz qoldig'i, stavka va joriy kreditning qolgan muddatini ko'rsating." },
      { name: "Yangi kredit shartlarini ko'rsating", text: "Yangi kreditning foiz stavkasi va muddatini kiriting." },
      { name: 'Solishtirishni oling', text: "Natija darhol chiqadi — joriy va yangi kredit bo'yicha ortiqcha to'lovlarni solishtiring." },
    ],
  },
  {
    slug: 'deposit-comparison',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму вклада', text: 'Укажите сумму, которую планируете разместить.' },
      { name: 'Укажите условия банков', text: 'Введите ставки и сроки по вкладам разных банков (до 3).' },
      { name: 'Получите сравнение', text: 'Результат появится сразу — сравните доходность вкладов и выберите лучший вариант.' },
    ],
    stepsUz: [
      { name: 'Omonat summasini kiriting', text: "Joylashtirmoqchi bo'lgan summangizni kiriting." },
      { name: "Banklar shartlarini ko'rsating", text: "Turli banklarning (3 tagacha) omonat stavkalari va muddatlarini kiriting." },
      { name: 'Solishtirishni oling', text: "Natija darhol chiqadi — omonatlar daromadliligini solishtiring va eng yaxshisini tanlang." },
    ],
  },
  {
    slug: 'bank-rates',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите сумму', text: 'Укажите сумму в валюте, которую хотите пересчитать.' },
      { name: 'Сверьте курс ЦБ', text: 'Курс подтягивается автоматически с сайта Центрального банка.' },
      { name: 'Получите сумму в сумах', text: 'Результат появится сразу — итог по курсу ЦБ на текущую дату.' },
    ],
    stepsUz: [
      { name: 'Summani kiriting', text: 'Qayta hisoblamoqchi bo\'lgan valyuta summasini kiriting.' },
      { name: 'Markaziy bank kursini tekshiring', text: 'Kurs Markaziy bank saytidan avtomatik olinadi.' },
      { name: 'So\'mdagi summani oling', text: 'Natija darhol chiqadi — joriy sanadagi MB kursi bo\'yicha jami.' },
    ],
  },
  {
    slug: 'money-transfer',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите направление перевода', text: 'Укажите страну отправления и получения.' },
      { name: 'Введите сумму перевода', text: 'Укажите сумму в валюте отправления.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете комиссию и сумму к получению.' },
    ],
    stepsUz: [
      { name: "O'tkazma yo'nalishini tanlang", text: "Jo'natuvchi va qabul qiluvchi mamlakatni ko'rsating." },
      { name: "O'tkazma summasini kiriting", text: "Jo'natish valyutasida summani kiriting." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — komissiya va qabul qilinadigan summani bilib oling." },
    ],
  },
  {
    slug: 'trip-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите расстояние', text: 'Введите протяжённость поездки в километрах.' },
      { name: 'Укажите расход и цену топлива', text: 'Расход в литрах на 100 км и цена литра — отсюда считается топливная часть.' },
      { name: 'Добавьте платные дороги и парковку', text: 'Введите сопутствующие расходы, если они есть.' },
      { name: 'Укажите число пассажиров', text: 'Стоимость поездки будет разделена на каждого.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: топливо, общая стоимость и доля на пассажира.' },
    ],
    stepsUz: [
      { name: 'Masofani ko\'rsating', text: 'Safar uzunligini kilometrda kiriting.' },
      { name: 'Sarfiyot va yoqilg\'i narxini ko\'rsating', text: '100 km ga litr hisobida sarfiyot va bir litr narxi — yoqilg\'i qismi shundan hisoblanadi.' },
      { name: 'Pullik yo\'llar va avtoturargohni qo\'shing', text: 'Yondosh xarajatlar bo\'lsa kiriting.' },
      { name: 'Yo\'lovchilar sonini ko\'rsating', text: 'Safar narxi har biriga bo\'linadi.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: yoqilg\'i, umumiy xarajat va bir yo\'lovchiga to\'g\'ri keladigan ulush.' },
    ],
  },
  {
    slug: 'car-leasing',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость автомобиля', text: 'Укажите полную стоимость автомобиля в лизинге.' },
      { name: 'Укажите аванс и срок', text: 'Введите авансовый платёж и срок лизинга в месяцах.' },
      { name: 'Укажите удорожание', text: 'Введите процент удорожания или ставку лизинга.' },
      { name: 'Получите график платежей', text: 'Результат появится сразу: ежемесячный платёж и полную стоимость лизинга.' },
    ],
    stepsUz: [
      { name: 'Avtomobil narxini kiriting', text: "Lizingdagi avtomobilning to'liq narxini kiriting." },
      { name: "Avans va muddatni ko'rsating", text: "Avans to'lov va lizing muddatini oylarda kiriting." },
      { name: "Qimmatlanishni ko'rsating", text: "Qimmatlanish foizi yoki lizing stavkasini kiriting." },
      { name: "To'lov jadvalini oling", text: "Natija darhol chiqadi — oylik to'lov va lizingning to'liq narxini ko'ring." },
    ],
  },
  {
    slug: 'internet',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите скорость', text: 'Укажите скорость тарифа в Мбит/с — от неё зависит месячная плата.' },
      { name: 'Укажите число месяцев', text: 'Введите период, за который считать стоимость.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: подобранный тариф, месячная плата и итог за период.' },
    ],
    stepsUz: [
      { name: 'Tezlikni tanlang', text: 'Tarif tezligini Mbit/s da ko\'rsating — oylik to\'lov shunga bog\'liq.' },
      { name: 'Oylar sonini ko\'rsating', text: 'Hisob qilinadigan davrni kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: tanlangan tarif, oylik to\'lov va davr uchun jami.' },
    ],
  },
  {
    slug: 'utilities-total',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите показания счётчиков', text: 'Укажите потребление электричества (кВт·ч), газа (м³) и воды (м³).' },
      { name: 'Укажите площадь жилья', text: 'Введите площадь квартиры для расчёта отопления и вывоза мусора.' },
      { name: 'Выберите тарифы', text: 'Выберите применимые тарифы (бытовой, льготный).' },
      { name: 'Получите общую сумму', text: 'Результат появится сразу — вы узнаете общую сумму коммунальных платежей за месяц.' },
    ],
    stepsUz: [
      { name: "Hisoblagich ko'rsatkichlarini kiriting", text: "Elektr (kVt·s), gaz (m³) va suv (m³) sarfini ko'rsating." },
      { name: "Uy-joy maydonini ko'rsating", text: "Isitish va chiqindi chiqarish hisobi uchun kvartira maydonini kiriting." },
      { name: 'Tariflarni tanlang', text: "Tegishli tariflarni tanlang (maishiy, imtiyozli)." },
      { name: "Umumiy summani oling", text: "Natija darhol chiqadi — oylik kommunal to'lovlarning umumiy summasini bilib oling." },
    ],
  },
  {
    slug: 'apartment-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите площадь', text: 'Укажите площадь квартиры в квадратных метрах.' },
      { name: 'Укажите цену за м²', text: 'Введите цену квадратного метра в сумах — она зависит от города и района.' },
      { name: 'Получите оценку стоимости', text: 'Результат появится сразу: цена квартиры, регистрация, нотариальные расходы и итог.' },
    ],
    stepsUz: [
      { name: 'Maydonni kiriting', text: 'Kvartira maydonini kvadrat metrlarda ko\'rsating.' },
      { name: 'm² narxini ko\'rsating', text: 'Kvadrat metr narxini so\'mda kiriting — u shahar va tumanga bog\'liq.' },
      { name: 'Narx bahosini oling', text: 'Natija darhol chiqadi: kvartira narxi, ro\'yxatdan o\'tkazish, notarius xarajatlari va jami.' },
    ],
  },
  {
    slug: 'rental',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите месячную аренду', text: 'Укажите арендную плату за месяц в сумах.' },
      { name: 'Укажите коммунальные и депозит', text: 'Коммунальные за месяц и размер депозита в месячных платах.' },
      { name: 'Укажите срок аренды', text: 'Введите количество месяцев.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: платёж в месяц, депозит и итог за весь период.' },
    ],
    stepsUz: [
      { name: 'Oylik ijarani kiriting', text: 'Oylik ijara haqini so\'mda ko\'rsating.' },
      { name: 'Kommunal va depozitni ko\'rsating', text: 'Oylik kommunal to\'lov va depozit hajmi (oylar hisobida).' },
      { name: 'Ijara muddatini ko\'rsating', text: 'Oylar sonini kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: oylik to\'lov, depozit va butun davr uchun jami.' },
    ],
  },
  {
    slug: 'renovation',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите площадь помещения', text: 'Укажите общую площадь ремонтируемого помещения в кв. м.' },
      { name: 'Выберите тип ремонта', text: 'Укажите тип: косметический, капитальный или евроремонт.' },
      { name: 'Укажите дополнительные работы', text: 'Отметьте нужные работы (сантехника, электрика, мебель).' },
      { name: 'Получите смету', text: 'Результат появится сразу: примерную стоимость ремонта.' },
    ],
    stepsUz: [
      { name: "Xona maydonini kiriting", text: "Ta'mirlanadigan xonaning umumiy maydonini kv.m da kiriting." },
      { name: "Ta'mir turini tanlang", text: "Turini ko'rsating: kosmetik, kapital yoki yevrota'mir." },
      { name: "Qo'shimcha ishlarni ko'rsating", text: "Kerakli ishlarni belgilang (santexnika, elektrika, mebel)." },
      { name: 'Smetani oling', text: "Natija darhol chiqadi — ta'mirning taxminiy narxini ko'ring." },
    ],
  },
  {
    slug: 'moving',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите маршрут', text: 'Введите адрес отправления и назначения.' },
      { name: 'Опишите объём вещей', text: 'Укажите количество комнат или примерный объём груза.' },
      { name: 'Выберите дополнительные услуги', text: 'Отметьте услуги (грузчики, упаковка, подъём на этаж).' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете примерную стоимость переезда.' },
    ],
    stepsUz: [
      { name: "Yo'nalishni ko'rsating", text: "Jo'natish va yetkazish manzilini kiriting." },
      { name: "Yuk hajmini tavsiflang", text: "Xonalar sonini yoki yuk hajmini taxminiy ko'rsating." },
      { name: "Qo'shimcha xizmatlarni tanlang", text: "Xizmatlarni belgilang (yukchilar, qadoqlash, qavatga ko'tarish)." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — ko'chishning taxminiy narxini bilib oling." },
    ],
  },
  {
    slug: 'llc-calculator',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите выручку', text: 'Укажите доход ООО за период в сумах.' },
      { name: 'Укажите расходы и фонд оплаты труда', text: 'Расходы уменьшают прибыль, а с фонда оплаты труда считается социальный налог.' },
      { name: 'Отметьте плательщика НДС', text: 'Если оборот превысил порог, компания платит НДС 12%.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: прибыль, налог на прибыль, НДС, социальный налог и общая нагрузка.' },
    ],
    stepsUz: [
      { name: 'Daromadni kiriting', text: 'MChJning davr uchun daromadini so\'mda kiriting.' },
      { name: 'Xarajatlar va ish haqi fondini ko\'rsating', text: 'Xarajatlar foydani kamaytiradi, ish haqi fondidan esa ijtimoiy soliq hisoblanadi.' },
      { name: 'QQS to\'lovchisini belgilang', text: 'Aylanma chegaradan oshgan bo\'lsa, kompaniya 12% QQS to\'laydi.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: foyda, foyda solig\'i, QQS, ijtimoiy soliq va umumiy yuk.' },
    ],
  },
  {
    slug: 'break-even',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите постоянные расходы', text: 'Укажите ежемесячные постоянные расходы бизнеса (аренда, зарплаты и др.).' },
      { name: 'Укажите переменные расходы', text: 'Введите переменные расходы на единицу продукции.' },
      { name: 'Введите цену продажи', text: 'Укажите цену реализации единицы товара или услуги.' },
      { name: 'Получите точку безубыточности', text: 'Результат появится сразу — вы узнаете объём продаж для выхода в ноль.' },
    ],
    stepsUz: [
      { name: "Doimiy xarajatlarni kiriting", text: "Biznesning oylik doimiy xarajatlarini ko'rsating (ijara, ish haqi va boshq.)." },
      { name: "O'zgaruvchan xarajatlarni ko'rsating", text: "Bir birlik mahsulot uchun o'zgaruvchan xarajatlarni kiriting." },
      { name: 'Sotuv narxini kiriting', text: "Tovar yoki xizmat birligining sotuv narxini ko'rsating." },
      { name: "Zararsizlik nuqtasini oling", text: "Natija darhol chiqadi — nolga chiqish uchun kerakli sotuv hajmini bilib oling." },
    ],
  },
  {
    slug: 'roi',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите сумму инвестиции', text: 'Укажите начальную сумму вложений.' },
      { name: 'Укажите полученный доход', text: 'Введите сумму дохода или прибыли от инвестиции.' },
      { name: 'Укажите период', text: 'Введите срок инвестирования в месяцах или годах.' },
      { name: 'Получите ROI', text: 'Результат появится сразу — вы узнаете рентабельность инвестиции в процентах.' },
    ],
    stepsUz: [
      { name: 'Investitsiya summasini kiriting', text: "Boshlang'ich qo'yilma summasini kiriting." },
      { name: "Olingan daromadni ko'rsating", text: "Investitsiyadan olingan daromad yoki foyda summasini kiriting." },
      { name: "Davrni ko'rsating", text: "Investitsiya muddatini oylar yoki yillarda kiriting." },
      { name: 'ROI ni oling', text: "Natija darhol chiqadi — investitsiya rentabelligini foizda bilib oling." },
    ],
  },
  {
    slug: 'employer-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите зарплату брутто', text: 'Укажите начисленную зарплату сотрудника в сумах.' },
      { name: 'Отметьте бюджетную организацию', text: 'У бюджетных организаций социальный налог 25% вместо 12%.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: сколько получит сотрудник и во что зарплата обойдётся работодателю.' },
    ],
    stepsUz: [
      { name: 'Brutto maoshni kiriting', text: 'Xodimning hisoblangan ish haqini so\'mda kiriting.' },
      { name: 'Byudjet tashkilotini belgilang', text: 'Byudjet tashkilotlarida ijtimoiy soliq 12% emas, 25%.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: xodim qancha oladi va ish beruvchiga qancha turadi.' },
    ],
  },
  {
    slug: 'ideal-weight',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите рост', text: 'Укажите ваш рост в сантиметрах.' },
      { name: 'Выберите пол и возраст', text: 'Укажите пол и возраст для точного расчёта.' },
      { name: 'Получите результат', text: 'Результат появится сразу — вы узнаете идеальный вес по нескольким формулам.' },
    ],
    stepsUz: [
      { name: "Bo'yingizni kiriting", text: "Bo'yingizni santimetrlarda ko'rsating." },
      { name: 'Jins va yoshni tanlang', text: "Aniq hisoblash uchun jins va yoshni ko'rsating." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — bir necha formula bo'yicha ideal vaznni bilib oling." },
    ],
  },
  {
    slug: 'macros',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите суточную норму калорий', text: 'Укажите калорийность рациона — от неё считается распределение.' },
      { name: 'Задайте доли БЖУ', text: 'Укажите проценты белков, жиров и углеводов; сумма должна давать 100%.' },
      { name: 'Получите нормы БЖУ', text: 'Результат появится сразу: белки, жиры и углеводы в граммах.' },
    ],
    stepsUz: [
      { name: 'Kunlik kaloriya normasini kiriting', text: 'Ratsion kaloriyasini ko\'rsating — taqsimot shundan hisoblanadi.' },
      { name: 'OYU ulushlarini belgilang', text: 'Oqsil, yog\' va uglevodlar foizini kiriting; yig\'indisi 100% bo\'lishi kerak.' },
      { name: 'OYU normalarini oling', text: 'Natija darhol chiqadi: oqsil, yog\' va uglevodlar grammda.' },
    ],
  },
  {
    slug: 'pregnancy',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите дату последних месячных', text: 'Введите первый день последней менструации.' },
      { name: 'Получите результат', text: 'Результат появится сразу: срок в неделях, триместр, дата зачатия и предполагаемая дата родов.' },
    ],
    stepsUz: [
      { name: 'Oxirgi hayz sanasini kiriting', text: 'Oxirgi hayzning birinchi kunini ko\'rsating.' },
      { name: 'Natijani oling', text: 'Natija darhol chiqadi: haftalardagi muddat, trimestr, homiladorlik sanasi va taxminiy tug\'ruq sanasi.' },
    ],
  },
  {
    slug: 'tuition',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите годовую стоимость', text: 'Укажите стоимость контракта за один год в сумах.' },
      { name: 'Укажите срок обучения', text: 'Введите продолжительность программы в годах.' },
      { name: 'Укажите ежегодное повышение', text: 'Контракт дорожает каждый год — введите ожидаемый процент.' },
      { name: 'Получите стоимость', text: 'Результат появится сразу: расходы по годам и итог за всё обучение.' },
    ],
    stepsUz: [
      { name: 'Yillik to\'lovni kiriting', text: 'Bir yillik kontrakt narxini so\'mda ko\'rsating.' },
      { name: 'O\'qish muddatini ko\'rsating', text: 'Dastur davomiyligini yillarda kiriting.' },
      { name: 'Yillik oshishni ko\'rsating', text: 'Kontrakt har yili qimmatlashadi — kutilayotgan foizni kiriting.' },
      { name: 'Narxni oling', text: 'Natija darhol chiqadi: yillar bo\'yicha xarajat va butun o\'qish uchun jami.' },
    ],
  },
  {
    slug: 'education-loan',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Введите стоимость обучения', text: 'Укажите годовую стоимость контракта.' },
      { name: 'Укажите срок обучения', text: 'Введите количество лет обучения.' },
      { name: 'Выберите условия кредита', text: 'Укажите процентную ставку и срок погашения.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете ежемесячный платёж и общую стоимость кредита.' },
    ],
    stepsUz: [
      { name: "O'qish narxini kiriting", text: "Yillik kontrakt narxini kiriting." },
      { name: "O'qish muddatini ko'rsating", text: "O'qish yillar sonini kiriting." },
      { name: 'Kredit shartlarini tanlang', text: "Foiz stavkasi va to'lash muddatini ko'rsating." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — oylik to'lov va kreditning umumiy narxini bilib oling." },
    ],
  },
  {
    slug: 'gpa',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите предметы', text: 'Добавьте названия предметов и полученные оценки.' },
      { name: 'Укажите кредиты', text: 'Введите количество кредитов (часов) по каждому предмету.' },
      { name: 'Получите GPA', text: 'Результат появится сразу — вы узнаете средний балл (GPA) по всем предметам.' },
    ],
    stepsUz: [
      { name: 'Fanlarni kiriting', text: "Fan nomlarini va olingan baholarni qo'shing." },
      { name: "Kreditlarni ko'rsating", text: "Har bir fan bo'yicha kreditlar (soatlar) sonini kiriting." },
      { name: 'GPA ni oling', text: "Natija darhol chiqadi — barcha fanlar bo'yicha o'rtacha ballni (GPA) bilib oling." },
    ],
  },
  {
    slug: 'fitr-sadaka',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите число членов семьи', text: 'Фитр-садака платится за каждого члена семьи, включая новорождённых.' },
      { name: 'Выберите продукт', text: 'Пшеница, мука, рис, изюм — 2 кг на человека; ячмень и финики — 4 кг.' },
      { name: 'Укажите цену за килограмм', text: 'Введите текущую рыночную цену выбранного продукта.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: сумма на каждого, общий вес и итог за всю семью.' },
    ],
    stepsUz: [
      { name: 'Oila a\'zolari sonini ko\'rsating', text: 'Fitr-sadaqa har bir oila a\'zosi uchun, shu jumladan chaqaloqlar uchun ham to\'lanadi.' },
      { name: 'Mahsulotni tanlang', text: 'Bug\'doy, un, guruch, mayiz — kishi boshiga 2 kg; arpa va xurmo — 4 kg.' },
      { name: 'Bir kilogramm narxini kiriting', text: 'Tanlangan mahsulotning joriy bozor narxini kiriting.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: har bir kishi uchun summa, umumiy og\'irlik va butun oila uchun jami.' },
    ],
  },
  {
    slug: 'fidiya-sadaka',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Укажите количество дней', text: 'Введите число пропущенных дней поста.' },
      { name: 'Укажите стоимость питания', text: 'Введите стоимость одного приёма пищи в сумах — из неё считается фидия за день.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете общую сумму фидия-садака.' },
    ],
    stepsUz: [
      { name: "Kunlar sonini ko'rsating", text: "O'tkazib yuborilgan ro'za kunlari sonini kiriting." },
      { name: "Bir ovqat narxini kiriting", text: "Bir marta ovqatlanish narxini so'mda kiriting — kunlik fidiya shundan hisoblanadi." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — fidiya-sadaqaning umumiy summasini bilib oling." },
    ],
  },
  {
    slug: 'kurban',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите тип животного', text: 'Укажите вид жертвенного животного (баран, корова, верблюд).' },
      { name: 'Укажите количество долей', text: 'Введите число долей (для крупного животного до 7 долей).' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете стоимость курбана и вашу долю.' },
    ],
    stepsUz: [
      { name: 'Hayvon turini tanlang', text: "Qurbonlik hayvoni turini ko'rsating (qo'y, sigir, tuya)." },
      { name: "Ulushlar sonini ko'rsating", text: "Ulushlar sonini kiriting (yirik hayvon uchun 7 taga)." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — qurbonlik narxi va sizning ulushingizni bilib oling." },
    ],
  },
  {
    slug: 'date-calc',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите начальную дату', text: 'Укажите дату, от которой считать.' },
      { name: 'Введите конечную дату', text: 'Укажите вторую дату — калькулятор посчитает промежуток между ними.' },
      { name: 'Получите результат', text: 'Результат появится сразу: годы, месяцы, недели, календарные и рабочие дни.' },
    ],
    stepsUz: [
      { name: 'Boshlanish sanasini kiriting', text: 'Hisob boshlanadigan sanani ko\'rsating.' },
      { name: 'Tugash sanasini kiriting', text: 'Ikkinchi sanani kiriting — kalkulyator oradagi masofani hisoblaydi.' },
      { name: 'Natijani oling', text: 'Natija darhol chiqadi: yillar, oylar, haftalar, taqvim va ish kunlari.' },
    ],
  },
  {
    slug: 'area',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите значение', text: 'Укажите число в исходной единице площади.' },
      { name: 'Выберите единицу', text: 'Квадратные метры, километры, гектары, сотки, футы или акры.' },
      { name: 'Получите пересчёт', text: 'Результат появится сразу — значение во всех остальных единицах площади.' },
    ],
    stepsUz: [
      { name: 'Qiymatni kiriting', text: 'Sonni dastlabki maydon o\'lchov birligida kiriting.' },
      { name: 'O\'lchov birligini tanlang', text: 'Kvadrat metr, kilometr, gektar, sotka, fut yoki akr.' },
      { name: 'Qayta hisobni oling', text: 'Natija darhol chiqadi — qiymat qolgan barcha maydon birliklarida.' },
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
      { name: 'Введите число', text: 'Укажите сумму цифрами — до триллионов.' },
      { name: 'Получите пропись', text: 'Результат появится сразу на русском и узбекском одновременно — скопируйте нужный вариант.' },
    ],
    stepsUz: [
      { name: 'Raqamni kiriting', text: 'Summani raqamlarda kiriting — trillionlargacha.' },
      { name: 'Yozuvni oling', text: 'Natija darhol rus va o\'zbek tillarida birga chiqadi — kerakli variantni nusxalang.' },
    ],
  },
  {
    slug: 'age',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите дату рождения', text: 'Укажите дату рождения в формате ДД.ММ.ГГГГ.' },
      { name: 'Получите результат', text: 'Результат появится сразу — вы узнаете точный возраст в годах, месяцах и днях.' },
    ],
    stepsUz: [
      { name: "Tug'ilgan sanani kiriting", text: "Tug'ilgan sanani KK.OO.YYYY formatida kiriting." },
      { name: 'Natijani oling', text: "Natija darhol chiqadi — aniq yoshni yillar, oylar va kunlarda bilib oling." },
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
      { name: 'Выберите тип документа', text: 'ID-карта: новая, замена или взамен утерянной; детская до 16 лет; биометрический загранпаспорт.' },
      { name: 'Отметьте срочность', text: 'Срочное оформление сокращает срок изготовления, но госпошлину не меняет.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу: размер госпошлины и срок изготовления в днях.' },
    ],
    stepsUz: [
      { name: 'Hujjat turini tanlang', text: 'ID-karta: yangi, almashtirish yoki yo\'qolgan o\'rniga; 16 yoshgacha bolalar uchun; biometrik xorijiy pasport.' },
      { name: 'Shoshilinchlikni belgilang', text: 'Shoshilinch rasmiylashtirish tayyorlanish muddatini qisqartiradi, lekin davlat bojini o\'zgartirmaydi.' },
      { name: 'Hisobni oling', text: 'Natija darhol chiqadi: davlat boji miqdori va tayyorlanish muddati kunlarda.' },
    ],
  },
  {
    slug: 'state-duties',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите вид услуги', text: 'Укажите государственную услугу (регистрация, лицензирование и др.).' },
      { name: 'Укажите параметры', text: 'Введите дополнительные параметры, если требуется.' },
      { name: 'Получите сумму пошлины', text: 'Результат появится сразу — вы узнаете размер государственной пошлины.' },
    ],
    stepsUz: [
      { name: 'Xizmat turini tanlang', text: "Davlat xizmatini ko'rsating (ro'yxatga olish, litsenziyalash va boshq.)." },
      { name: "Parametrlarni ko'rsating", text: "Agar kerak bo'lsa, qo'shimcha parametrlarni kiriting." },
      { name: 'Boj summasini oling', text: "Natija darhol chiqadi — davlat boji miqdorini bilib oling." },
    ],
  },
  {
    slug: 'wedding',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Укажите количество гостей', text: 'Введите ожидаемое число гостей на свадьбу.' },
      { name: 'Выберите формат мероприятия', text: 'Укажите тип: ресторан, банкетный зал, дома.' },
      { name: 'Отметьте дополнительные расходы', text: 'Добавьте расходы: фото/видео, музыка, декор, транспорт и др.' },
      { name: 'Получите смету', text: 'Результат появится сразу: примерный бюджет свадьбы.' },
    ],
    stepsUz: [
      { name: "Mehmonlar sonini ko'rsating", text: "To'yga kutilayotgan mehmonlar sonini kiriting." },
      { name: "Tadbir formatini tanlang", text: "Turini ko'rsating: restoran, banket zali, uyda." },
      { name: "Qo'shimcha xarajatlarni belgilang", text: "Xarajatlarni qo'shing: foto/video, musiqa, bezak, transport va boshq." },
      { name: 'Smetani oling', text: "Natija darhol chiqadi — to'yning taxminiy byudjetini ko'ring." },
    ],
  },
  {
    slug: 'cotton-yield',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите площадь посева', text: 'Укажите площадь хлопкового поля в гектарах.' },
      { name: 'Укажите урожайность', text: 'Введите ожидаемую урожайность (ц/га) или используйте среднюю по региону.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете ожидаемый объём урожая и его стоимость.' },
    ],
    stepsUz: [
      { name: "Ekish maydonini kiriting", text: "Paxta dala maydonini gektarlarda kiriting." },
      { name: "Hosildorlikni ko'rsating", text: "Kutilayotgan hosildorlikni (s/ga) kiriting yoki hudud bo'yicha o'rtachadan foydalaning." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — kutilayotgan hosil hajmi va narxini bilib oling." },
    ],
  },
  {
    slug: 'remittances',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Выберите страну отправки', text: 'Укажите страну, из которой отправляется перевод.' },
      { name: 'Введите сумму', text: 'Укажите сумму перевода в валюте отправления.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете сумму к получению в сумах с учётом комиссии.' },
    ],
    stepsUz: [
      { name: "Jo'natish mamlakatini tanlang", text: "Pul o'tkazma jo'natiladigan mamlakatni ko'rsating." },
      { name: 'Summani kiriting', text: "Jo'natish valyutasida o'tkazma summasini kiriting." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — komissiyani hisobga olgan holda so'mda qabul qilinadigan summani bilib oling." },
    ],
  },
  {
    slug: 'visa-cost',
    totalTimeMinutes: 2,
    stepsRu: [
      { name: 'Выберите страну', text: 'Укажите страну, для которой оформляется виза.' },
      { name: 'Выберите тип визы', text: 'Укажите тип: туристическая, рабочая, студенческая, транзитная.' },
      { name: 'Укажите срочность', text: 'Выберите обычный или ускоренный срок оформления.' },
      { name: 'Получите расчёт', text: 'Результат появится сразу — вы узнаете консульский сбор и общие расходы на визу.' },
    ],
    stepsUz: [
      { name: 'Mamlakatni tanlang', text: "Viza rasmiylashtirilayotgan mamlakatni ko'rsating." },
      { name: 'Viza turini tanlang', text: "Turini ko'rsating: turistik, ishchi, talaba, tranzit." },
      { name: "Shoshilinchligini ko'rsating", text: "Oddiy yoki tezlashtirilgan rasmiylashtirish muddatini tanlang." },
      { name: 'Hisobni oling', text: "Natija darhol chiqadi — konsullik yig'imi va viza uchun umumiy xarajatlarni bilib oling." },
    ],
  },
  {
    slug: 'brv',
    totalTimeMinutes: 1,
    stepsRu: [
      { name: 'Введите коэффициент БРВ', text: 'Укажите, сколько БРВ содержит норма — например, 0,2 для пошлины за брак.' },
      { name: 'Получите сумму', text: 'Результат появится сразу: сумма в сумах по действующей БРВ.' },
    ],
    stepsUz: [
      { name: 'BHM koeffitsiyentini kiriting', text: 'Norma nechta BHM ekanini kiriting — masalan, nikoh boji uchun 0,2.' },
      { name: 'Summani oling', text: 'Natija darhol chiqadi: amaldagi BHM bo\'yicha so\'mdagi summa.' },
    ],
  },
]

export function getCalculatorHowTo(slug: string): CalculatorHowTo | undefined {
  return CALCULATOR_HOWTOS.find((h) => h.slug === slug)
}
