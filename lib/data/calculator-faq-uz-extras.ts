/**
 * Additional Uzbek-locale-only FAQ items that go beyond a 1:1 translation
 * of the Russian FAQ. These capture culturally and contextually specific
 * questions (e.g. references to local institutions, mahalla, OTM, qishloq
 * realities) so the UZ pages don't read like machine translation.
 *
 * Rendered after the main faqUz list on calculator pages.
 */

export interface UzExtraFaqItem {
  question: string
  answer: string
}

export interface UzExtraFaq {
  slug: string
  items: UzExtraFaqItem[]
}

const FAQ_UZ_EXTRAS: UzExtraFaq[] = [
  {
    slug: 'income-tax',
    items: [
      {
        question: "Ish haqim mahalla orqali to'lansa, JShShS qanday ushlanadi?",
        answer:
          "Mahalla orqali rasmiy ish haqi to'lanadigan bo'lsa (masalan, ijtimoiy ish o'rinlari), to'lovchi tashkilot soliq agenti sifatida ishlaydi va 12% JShShSni o'zi ushlab qoladi. Sizning xatti-harakatingiz talab qilinmaydi.",
      },
      {
        question: "Frilanser bo'lsam, daromad solig'ini qanday to'layman?",
        answer:
          "2026-yildan boshlab samozanyat (o'z-o'zini band qilgan) shaxs sifatida ro'yxatdan o'tib, aylanmadan 1% stavkada soliq to'lashingiz mumkin — bu YaTTga o'tishdan ko'ra arzon. Ro'yxatdan o'tish my.soliq.uz orqali bepul.",
      },
      {
        question: "Daromadim 100 mln dan oshsa, qo'shimcha soliq bormi?",
        answer:
          "Yo'q — O'zbekistondagi JShShS yagona tekis stavkadir, daromad oshsa ham 12% qoladi (IT Park rezidentlari uchun 7,5%). Bu Rossiya yoki Qozog'istondagi progressiv tizimdan farq qiladi.",
      },
    ],
  },
  {
    slug: 'salary',
    items: [
      {
        question: "OTMda o'qiyotgan bo'lsam, ish beruvchi qo'shimcha imtiyoz beradimi?",
        answer:
          "OTM (oliy ta'lim muassasasi) talabasi bo'lib ishlasangiz, qonun bo'yicha ish beruvchi sizga maxsus soliq imtiyozi bermaydi. Lekin yiliga 4,22 BHK gacha bo'lgan moddiy yordam JShShSdan ozod (chegirma o'zingizning my.soliq.uz dagi deklaratsiyangiz orqali).",
      },
      {
        question: "Qishloqda joylashgan ishxonada ish haqi shaharnikidan farq qiladimi?",
        answer:
          "Soliq stavkalari bir xil. Lekin minimal ish haqi Vazirlar Mahkamasi qarorlari bilan barcha hududlar uchun bir xil belgilanadi. Tarmoq tarif kelishuvlari ba'zi sohalarda farq qilishi mumkin.",
      },
    ],
  },
  {
    slug: 'mortgage',
    items: [
      {
        question: "Yosh oilalar uchun «Ipoteka 7%» dasturi nima va qanday olinadi?",
        answer:
          "Davlat dasturi: 35 yoshgacha bo'lgan yosh oila yoki yakka tartibdagi onaga yiliga 7% stavkada ipoteka beriladi. Birinchi to'lov 15%, muddat — 20 yilgacha. Shartlar: O'zbekiston fuqarosi, ro'yxatda turish, ilgari uy-joyga ega bo'lmaslik.",
      },
      {
        question: "Mahalla referensiyasi ipoteka uchun kerakmi?",
        answer:
          "Ko'pchilik banklar mahalla raisidan tasdiq xatini so'raydi (mahalla referensiyasi). U sizning oilaviy holatingizni va ishonchliligingizni tasdiqlaydi. Ariza topshirishdan oldin tayyorlab qo'ying.",
      },
    ],
  },
  {
    slug: 'vat',
    items: [
      {
        question: "Bozorda sotuvchi bo'lsam, QQS to'lashim kerakmi?",
        answer:
          "Yo'q, agar 12 oylik aylanmangiz 60 000 BHK (24,72 mlrd so'm) dan kam bo'lsa, QQS to'lovchisi emassiz. Bozordagi ko'pchilik chakana sotuvchilar bu chegaradan oshmaydi.",
      },
      {
        question: "Faktura.soliq.uz da hisob-faktura qanday rasmiylashtirish?",
        answer:
          "Davlat soliq qo'mitasining faktura.soliq.uz portali orqali. EIMZO yoki Faol kalit bilan kiring, kontragent INNni kiriting, mahsulotni tanlang va imzolang. Hisob-faktura avtomatik kontragentga jo'natiladi.",
      },
    ],
  },
  {
    slug: 'currency-converter',
    items: [
      {
        question: "MB kursi va bank kursi orasidagi farq nima?",
        answer:
          "MB kursi (cbu.uz) — kunlik rasmiy o'rtacha kurs. Tijorat banklar undan ~30-80 so'm farq qiluvchi sotish/sotib olish kursini belgilaydi. Yirik miqdorlar uchun bir nechta bankni taqqoslang yoki bank arizasi orqali ariza qoldiring.",
      },
      {
        question: "Naqd dollar olishda chek beriladimi?",
        answer:
          "Ha, banklar valyuta ayirboshlashdan keyin spravka beradilar — bu bojxonada $5 000 dan ortiq olib chiqishda kerak bo'ladi. Spravkani kamida 1 yil saqlang.",
      },
    ],
  },
  {
    slug: 'utilities-total',
    items: [
      {
        question: "Hisoblagichlar yo'q bo'lsa, kommunal qanday hisoblanadi?",
        answer:
          "Hisoblagich bo'lmagan xonadonlar uchun me'yor bo'yicha hisob ishlatiladi: bir kishiga belgilangan miqdor (suv, gaz, elektr). Tariflar Vazirlar Mahkamasi qarorlari bilan tasdiqlanadi va tashkilotlar veb-saytlarida e'lon qilinadi.",
      },
      {
        question: "Mahallada elektr o'chsa, hisob qaytariladimi?",
        answer:
          "Yo'q, avtomatik qayta hisob amalga oshmaydi. Lekin uzilish 24 soatdan oshsa, «Hududiy elektr tarmoqlari» ga ariza yozsangiz, qisman kompensatsiya yoki hisobni qayta ko'rib chiqishni so'rashingiz mumkin.",
      },
    ],
  },
  {
    slug: 'osago',
    items: [
      {
        question: "OSAGOni qaysi sug'urta kompaniyalaridan xarid qilish mumkin?",
        answer:
          "O'zbekistondagi yetakchi sug'urtachilar: Kafolat, Uzagrosugurta, Alskom, Apex Insurance, Gross Insurance, Inson, Trust Insurance. Stavkalar O'zbekiston Respublikasi Moliya vazirligi tomonidan tasdiqlangan va bir xil — farq xizmat sifatida.",
      },
      {
        question: "OSAGO yo'q haydovchi jarima qancha?",
        answer:
          "Ma'muriy javobgarlik kodeksining 234-moddasi bo'yicha 1 BHK miqdorida jarima (hozir 412 000 so'm). Baxtsiz hodisada zarar o'z hisobingizdan to'lanadi.",
      },
    ],
  },
  {
    slug: 'customs',
    items: [
      {
        question: "BAA dan elektronika olib kirish chegarasi qancha?",
        answer:
          "Yakka shaxs uchun bojsiz olib kirish chegarasi — 1 000 EUR (~13,7 mln so'm joriy kursda) yoki 50 kg. Limitdan ortiq qiymatga 30% boj solinadi. Pochta yoki kuryer orqali kelgan paketlar uchun chegara 100 EUR.",
      },
      {
        question: "Avtomobil rasmiylashtirishda «utilizatsiya yig'imi» qancha?",
        answer:
          "Yengil avtomobillar uchun yig'im hajm va ishlab chiqarish yiliga bog'liq: yangi avto uchun 5-15 mln so'm, foydalanilgan uchun ko'proq. Aniq summa zip kalkulyatorda hisoblanadi.",
      },
    ],
  },
  {
    slug: 'brv',
    items: [
      {
        question: "BHK qachon va kim tomonidan tasdiqlanadi?",
        answer:
          "BHK (bazaviy hisoblash kattaligi) Vazirlar Mahkamasi qaroriga ko'ra yangilanadi. Odatda yiliga bir marta avgust-sentabr oylarida indeksatsiya qilinadi. Joriy 2026-yil holati: 412 000 so'm (2025-yil avgustdan).",
      },
      {
        question: "BHK va minimal ish haqi bir xilmi?",
        answer:
          "Yo'q, bu ikki turli ko'rsatkich. BHK — soliq, jarima, davlat boji va imtiyozlarni hisoblash uchun. Minimal ish haqi — eng past oylik ish haqi standarti. Ular alohida belgilanadi.",
      },
    ],
  },
  {
    slug: 'kurban',
    items: [
      {
        question: "Qurbonlik uchun jonzotni qanday tanlash kerak?",
        answer:
          "Imkon doirasida sog'lom, kamida 2 yoshga to'lgan qoramol (sigir, ho'kiz) yoki 1 yoshga to'lgan mol-qo'y (qo'y, echki) tanlanadi. Qoramol 7 oilaga, mol-qo'y 1 oilaga qurbonlik qilinadi. O'zbekiston Musulmonlari Idorasi tavsiyalariga rioya qiling.",
      },
    ],
  },
  {
    slug: 'fitr-sadaka',
    items: [
      {
        question: "Fitr-sadaqani kimga berish kerak?",
        answer:
          "Fitr-sadaqa Ramazon hayitidan oldin kambag'allarga, mahalladagi muhtoj oilalarga yoki vaqf orqali topshiriladi. Mahalla qo'mitasi yoki masjid orqali topshirish — qabul qilingan amaliyot. Hayit namozidan keyin topshirilsa, bu oddiy sadaqa hisoblanadi.",
      },
    ],
  },
  {
    slug: 'pension',
    items: [
      {
        question: "Pensiyaga chiqish yoshi va shartlari qanday?",
        answer:
          "Erkaklar uchun 60 yosh (kamida 25 yil staj), ayollar uchun 55 yosh (kamida 20 yil staj). 20+ yil staji bo'lgan ayollar 54 yoshda chiqishi mumkin. Imtiyozli kasblar (shaxtyor, kimyogar) uchun yosh kamayadi.",
      },
      {
        question: "Pensiya qaerda olinadi?",
        answer:
          "Pensiya bank kartasiga (Uzcard yoki Humo) yoki «Aloqabank», «Xalq banki» ofislariga o'tkaziladi. Ariza my.soliq.uz yoki tuman pensiya jamg'armasi bo'limiga topshiriladi. Tayyor hujjatlar — pasport, mehnat daftarchasi, INPS spravkasi.",
      },
    ],
  },
]

export function getUzExtraFaq(slug: string): UzExtraFaqItem[] {
  return FAQ_UZ_EXTRAS.find((f) => f.slug === slug)?.items ?? []
}
