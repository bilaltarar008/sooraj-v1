const products = [
  {
    id: 1,
    name: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" },
    brand: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" }, // Swapped
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "1 KG", ur: "1 کلو" },
    image: require("../assets/products/Sulphur.png"),
    composition: [{ en: "Sulphur 80%", ur: "سلفر 80٪" }],
    crops: { en: "Wheat, Cotton, Sugarcane", ur: "گندم، کپاس، گنے" },
    usage: {
      en: [
        "Mix recommended quantity with water.",
        "Spray evenly on crop leaves.",
        "Repeat after 10–15 days if needed.",
      ],
      ur: [
        "تجویز کردہ مقدار پانی کے ساتھ مکس کریں۔",
        "فصل کے پتے پر یکساں سپرے کریں۔",
        "ضرورت پڑنے پر 10–15 دن بعد دہرائیں۔",
      ],
    },
    season: { en: "Spring and Summer", ur: "بہار اور گرمیوں میں" },
    problems: {
      en: "Fungal infections like powdery mildew",
      ur: "پاؤڈر میلوی جیسی فنگس کی بیماری",
    },
    details: {
      en: [
        "Dust-free, easy-to-use sulphur granules with instant water dispersion.",
        "Triple action: fungicide, miticide, and sulphur nutrient.",
        "Long-lasting effect without burning crops.",
      ],
      ur: [
        "گرد سے پاک سلفر دانے جو فوراً پانی میں حل ہو جاتے ہیں۔",
        "تین گنا اثر: فنگس کش، مائٹ کش اور غذائی جزو۔",
        "طویل عرصے تک اثر بغیر فصل جلائے۔",
      ],
    },
  },

  {
    id: 2,
    name: {
      en: "Benziothiozolinonel 1.5% EW",
      ur: "بینزیوتھیازولینون 1.5٪ ای ڈبلیو",
    },
    brand: {
      en: "Benziothiozolinonel 1.5% EW",
      ur: "بینزیوتھیازولینون 1.5٪ ای ڈبلیو",
    }, // Swapped
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "200 ML", ur: "200 ملی لیٹر" },
    image: require("../assets/products/Nipa.png"),
    composition: [
      { en: "Benziothiozolinone 1.5%", ur: "بینزیوتھیازولینون 1.5٪" },
    ],
    crops: { en: "Tomato, Potato, Pepper", ur: "ٹماٹر، آلو، مرچ" },
    usage: {
      en: [
        "Shake well before use.",
        "Spray on affected areas.",
        "Avoid spraying during flowering.",
      ],
      ur: [
        "استعمال سے پہلے اچھی طرح ہلائیں۔",
        "متاثرہ حصوں پر سپرے کریں۔",
        "کھلنے کے دوران سپرے کرنے سے گریز کریں۔",
      ],
    },
    season: { en: "All growing seasons", ur: "تمام بڑھتی ہوئی موسموں میں" },
    problems: {
      en: "Fungal and bacterial diseases",
      ur: "فنگس اور بیکٹیریا کی بیماریوں کے لیے",
    },
    details: {
      en: [
        "Broad-spectrum fungicide for bacterial and fungal diseases.",
        "Dual active ingredients for enhanced performance.",
        "Boosts plant immunity.",
      ],
      ur: [
        "بیکٹیریائی اور فنگس بیماریوں کے خلاف وسیع اثر۔",
        "دو طاقتور اجزاء پر مشتمل۔",
        "پودے کی قوت مدافعت میں اضافہ کرتا ہے۔",
      ],
    },
  },

  {
    id: 3,
    name: {
      en: "Dinotifuron + Pymetrozine",
      ur: "ڈائنوٹیفیورون + پائمیٹروزین",
    },
    brand: {
      en: "Dinotifuron + Pymetrozine",
      ur: "ڈائنوٹیفیورون + پائمیٹروزین",
    }, // Swapped
    category: { en: "Insecticide", ur: "کیڑے مار" },
    packSize: { en: "100 GM", ur: "100 گرام" },
    image: require("../assets/products/Rippet.PNG"),
    composition: [
      { en: "Dinotifuron + Pymetrozine", ur: "ڈائنوٹیفیورون + پائمیٹروزین" },
    ],
    crops: { en: "Cotton, Vegetables", ur: "کپاس، سبزیاں" },
    usage: {
      en: [
        "Mix with water as instructed.",
        "Spray on crops early in the morning or late evening.",
        "Repeat after 7–10 days if infestation continues.",
      ],
      ur: [
        "ہدایات کے مطابق پانی کے ساتھ مکس کریں۔",
        "فصل پر صبح جلد یا شام دیر کو سپرے کریں۔",
        "اگر کیڑوں کی تعداد زیادہ ہو تو 7–10 دن بعد دہرائیں۔",
      ],
    },
    season: { en: "Summer", ur: "گرمیوں میں" },
    problems: {
      en: "Aphids, Whiteflies, Mealybugs",
      ur: "پتنگ، سفید مکھی، میلی بگز",
    },
    details: {
      en: [
        "Systemic insecticide protects new growth.",
        "Controls a wide range of pests.",
        "Improves crop vitality.",
      ],
      ur: [
        "نئی بڑھوتری کو محفوظ رکھنے والی دوا۔",
        "کیڑوں کی وسیع اقسام کے خلاف مؤثر۔",
        "فصل کی طاقت میں اضافہ کرتا ہے۔",
      ],
    },
  },

  {
    id: 4,
    name: { en: "Azoxystrobin 5.4% SC", ur: "ایزوکسسٹروبن 5.4٪ ایس سی" },
    brand: { en: "Azoxystrobin 5.4% SC", ur: "ایزوکسسٹروبن 5.4٪ ایس سی" }, // Swapped
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "250 ML", ur: "250 ملی لیٹر" },
    image: require("../assets/products/FaceUp.png"),
    composition: [{ en: "Azoxystrobin 5.4%", ur: "ایزوکسسٹروبن 5.4٪" }],
    crops: { en: "Potato, Tomato", ur: "آلو، ٹماٹر" },
    usage: {
      en: [
        "Use preventively or curatively.",
        "Spray on leaves until wet.",
        "Do not apply during high temperatures.",
      ],
      ur: [
        "بچاؤ یا علاج کے لیے استعمال کریں۔",
        "پتوں پر سپرے کریں جب تک گیلا نہ ہو جائے۔",
        "زیادہ گرمی میں نہ لگائیں۔",
      ],
    },
    season: { en: "Spring and Summer", ur: "بہار اور گرمیوں میں" },
    problems: { en: "Late blight, Downy mildew", ur: "لیٹ بلائیٹ، ڈاؤنی ملیو" },
    details: {
      en: [
        "Preventive and curative protection.",
        "Controls downy mildew and late blight.",
        "Perfect for potato and tomato crops.",
      ],
      ur: [
        "بچاؤ اور علاج دونوں کے لیے مؤثر۔",
        "ڈاؤنی ملیو اور لیٹ بلائیٹ پر قابو پاتا ہے۔",
        "آلو اور ٹماٹر کے لیے بہترین۔",
      ],
    },
  },

  {
    id: 5,
    name: { en: "Crop Supplement", ur: "فصل کا غذائی سپلیمنٹ" },
    brand: { en: "Crop Supplement", ur: "فصل کا غذائی سپلیمنٹ" }, // Swapped
    category: { en: "Micronutrients", ur: "خوردنی اجزاء" },
    packSize: { en: "4 KG", ur: "4 کلو" },
    image: require("../assets/products/WhatsApp.png"),
    composition: [{ en: "Zinc 10%", ur: "زنک 10٪" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Mix with soil before planting.",
        "Apply during growth stage.",
        "Use recommended dosage only.",
      ],
      ur: [
        "پلانٹنگ سے پہلے مٹی کے ساتھ مکس کریں۔",
        "بڑھوتری کے دوران لگائیں۔",
        "صرف تجویز شدہ مقدار استعمال کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Nutrient deficiencies", ur: "غذائی کمی" },
    details: {
      en: [
        "Strengthens roots and leaves.",
        "Improves resistance to stress.",
        "Enhances overall crop health.",
      ],
      ur: [
        "جڑوں اور پتوں کو مضبوط کرتا ہے۔",
        "دباؤ کے خلاف قوت مدافعت بڑھاتا ہے۔",
        "فصل کی مجموعی صحت بہتر بناتا ہے۔",
      ],
    },
  },

  // -----------------------------------------------------
  // NEW PRODUCT 6: Herbicide
  // -----------------------------------------------------
  {
    id: 6,
    name: { en: "Winsta 30% WP", ur: "ونسٹا 30٪ ڈبلیو پی" },
    brand: { en: "Winsta 30% WP", ur: "ونسٹا 30٪ ڈبلیو پی" },
    category: { en: "Herbicide", ur: "جڑی بوٹی مار" },
    packSize: { en: "100 GM", ur: "100 گرام" },
    image: require("../assets/products/winsta.png"), // Replace if you have image
    composition: [
      {
        en: "Bispyribac Sodium + Bensulfuron Methyl 30% WP",
        ur: "بسپیریبک سوڈیم + بینسلفیورون میتھائل 30٪ ڈبلیو پی",
      },
    ],
    crops: { en: "Rice", ur: "چاول" },
    usage: {
      en: ["Use as per recommended dose.", "Spray uniformly on field."],
      ur: ["تجویز کردہ مقدار استعمال کریں۔", "کھیت میں یکساں سپرے کریں۔"],
    },
    season: { en: "Kharif", ur: "خریف" },
    problems: {
      en: "Weeds in rice fields",
      ur: "چاول کی کھیتی میں جڑی بوٹیاں",
    },
    details: { en: [], ur: [] },
  },

  // -----------------------------------------------------
  // NEW PRODUCT 7: Fertilizer
  // -----------------------------------------------------
  {
    id: 7,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 8,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 9,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },

  {
    id: 10,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 11,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 12,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 13,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
  {
    id: 14,
    name: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    brand: { en: "Major SOP G (50:18)", ur: "میجر ایس او پی جی (50:18)" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "25 KG", ur: "25 کلو" },
    image: require("../assets/products/SOP.png"), // Replace if available
    composition: [
      { en: "Sulphate of Potassium (50:18)", ur: "سلفیٹ آف پوٹاشیم (50:18)" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Potassium deficiency", ur: "پوٹاشیم کی کمی" },
    details: { en: [], ur: [] },
  },
];

export default products;
