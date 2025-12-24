const products = [
  {
    id: 1,
    name: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" },
    chemical: { en: "Sulphur 80% WDG", ur: "سلفر 80٪ ڈبلیو ڈی جی" }, // Swapped
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
      en: "NIPA",
      ur: "نیپا",
    },
    chemical: {
      en: "Benziothiozolinone 1.5% EW",
      ur: " بینزیوتھیازولینون 1.5٪ ای ڈبلیو",
    },
    category: { en: "Fungicide", ur: "فنگس کش" },
    packSize: { en: "200 ML", ur: "200 ملی لیٹر" },
    image: require("../assets/products/Nipa.png"),
    composition: [
      {
        en: "Benziothiozolinone 1.5% EW",
        ur: "بینزیوتھیازولینون 1.5٪ ای ڈبلیو",
      },
    ],
    crops: {
      en: "Vegetables and field crops",
      ur: "سبزیاں اور کھیتوں کی فصلیں",
    },
    usage: {
      en: [
        "Shake well before use.",
        "Dilute with water as per recommended dose.",
        "Spray evenly on affected plants.",
      ],
      ur: [
        "استعمال سے پہلے اچھی طرح ہلائیں۔",
        "تجویز کردہ مقدار کے مطابق پانی میں ملا کر استعمال کریں۔",
        "متاثرہ پودوں پر یکساں سپرے کریں۔",
      ],
    },
    season: {
      en: "All growing seasons",
      ur: "تمام بڑھتی ہوئی موسموں میں",
    },
    problems: {
      en: "Fungal and bacterial diseases",
      ur: "فنگس اور بیکٹیریا کی بیماریاں",
    },
    details: {
      en: [
        "Broad-spectrum fungicide",
        "Effective against bacterial and fungal pathogens",
        "Improves overall plant health",
      ],
      ur: [
        "وسیع اثر رکھنے والی فنگس کش دوا",
        "فنگس اور بیکٹیریا کے خلاف مؤثر",
        "پودوں کی مجموعی صحت کو بہتر بناتی ہے",
      ],
    },
  },
  {
    id: 3,
    name: {
      en: "Rippet",
      ur: "رِپٹ",
    },
    chemical: {
      en: "Dinotifuron + Pymetrozine",
      ur: " ڈائنوٹیفیورون + پائمیٹروزین",
    },
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
    name: { en: "FACEUP 56 %SC", ur: "فیس اپ 56 فیصد ایس سی" },
    chemical: { en: "Azoxystrobin 5.4% SC", ur: "ایزوکسسٹروبن 5.4٪ ایس سی" },
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
    name: { en: "Whats App (Zinc)", ur: "واٹس ایپ (زنک)" },
    chemical: { en: "Crop Supplement", ur: "کراپ سپلیمنٹ" },
    category: { en: "Micronutrient", ur: "مائیکرو نیوٹرینٹ" },
    packSize: { en: "4 KG", ur: "4 کلو" },
    image: require("../assets/products/WhatsApp.png"), // use existing image if same
    composition: [{ en: "Zinc", ur: "زنک" }],
    crops: {
      en: "All crops",
      ur: "تمام فصلیں",
    },
    usage: {
      en: [
        "Apply to soil or mix with irrigation water as per recommended dose.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق مٹی میں یا آبپاشی کے پانی کے ساتھ استعمال کریں۔",
      ],
    },
    season: {
      en: "All seasons",
      ur: "تمام موسم",
    },
    problems: {
      en: "Zinc deficiency",
      ur: "زنک کی کمی",
    },
    details: {
      en: [
        "Essential micronutrient for plant growth",
        "Improves leaf color and enzyme activity",
        "Enhances crop yield and quality",
      ],
      ur: [
        "پودوں کی نشوونما کے لیے ضروری مائیکرو نیوٹرینٹ",
        "پتوں کے رنگ اور انزائم سرگرمی کو بہتر بناتا ہے",
        "فصل کی پیداوار اور معیار میں اضافہ کرتا ہے",
      ],
    },
  },
  // -----------------------------------------------------
  // NEW PRODUCT 6: Herbicide
  // -----------------------------------------------------
  {
    id: 6,
    name: {
      en: "Winsta 30% WP",
      ur: "ونسٹا 30٪ ڈبلیو پی",
    },
    chemical: {
      en: "Bispyribac Sodium + Bensulfuron Methyl 30% WP",
      ur: " بسپیریبک سوڈیم + بینسلفیورون میتھائل 30٪ ڈبلیو پی",
    },
    category: {
      en: "Herbicide",
      ur: "جڑی بوٹی مار",
    },
    packSize: {
      en: "100 GM",
      ur: "100 گرام",
    },
    image: require("../assets/products/winsta.png"),
    composition: [
      {
        en: "Bispyribac Sodium + Bensulfuron Methyl 30% WP",
        ur: "بسپیریبک سوڈیم + بینسلفیورون میتھائل 30٪ ڈبلیو پی",
      },
    ],
    crops: {
      en: "Rice",
      ur: "چاول",
    },
    usage: {
      en: ["Use as per recommended dose.", "Spray uniformly on field."],
      ur: ["تجویز کردہ مقدار استعمال کریں۔", "کھیت میں یکساں سپرے کریں۔"],
    },
    season: {
      en: "Kharif",
      ur: "خریف",
    },
    problems: {
      en: "Weeds in rice fields",
      ur: "چاول کی کھیتی میں جڑی بوٹیاں",
    },
    details: {
      en: [
        "Wettable Powder (WP).",
        "Systemic herbicide; controls broadleaf & grassy weeds.",
        "Apply post-emergence at 2-4 leaf stage.",
        "Mix in water; wear protective gear.",
        "Store in a cool, dry place.",
      ],
      ur: [
        "ویٹیبل پاؤڈر (WP).",
        "سسٹیمک جڑی بوٹی مار؛ چوڑی اور گھاس نما جڑی بوٹیاں کنٹرول کرے۔",
        "2-4 پتوں کے مرحلے پر اسپرے کریں۔",
        "پانی میں مکس کریں؛ حفاظتی لباس پہنیں۔",
        "ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },

  // -----------------------------------------------------
  // NEW PRODUCT 7: Fertilizer
  // -----------------------------------------------------
  {
    id: 7, // make sure this ID is unique
    name: { en: "BABBAR SHER SULPHER (10KG)", ur: "ببر شیر سلفر (10 کلو)" },
    chemical: { en: "NITROGEN 11% SULPHER 75%", ur: "نائٹروجن 11%، سلفر 75%" },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "10 KG", ur: "10 کلو" },
    image: require("../assets/products/BabbarShair.png"),
    composition: [
      { en: "Nitrogen 11%, Sulphur 75%", ur: "نائٹروجن 11٪، سلفر 75٪" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil during growth cycle."],
      ur: ["بڑھوتری کے دوران مٹی میں شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Nitrogen and Sulphur deficiency",
      ur: "نائٹروجن اور سلفر کی کمی",
    },
    details: { en: [], ur: [] },
  },
  {
    id: 8,
    chemical: { en: "Crestor", ur: "کریسٹر" },
    name: { en: "Crestor Potassium Humate", ur: "کریسٹر پوٹاشیم ہیومیٹ" },
    category: { en: "Micronutrient", ur: "مائیکرو نیوٹرینٹ" },
    packSize: { en: "4 KG", ur: "4 کلو" },
    image: require("../assets/products/Crestor.png"), // update image if needed
    composition: [{ en: "Humic Acid 40%", ur: "ہیومک ایسڈ 40٪" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Apply to soil or through irrigation to improve nutrient uptake and soil health.",
      ],
      ur: [
        "غذائی اجزاء کے بہتر جذب اور مٹی کی صحت کے لیے مٹی یا آبپاشی کے ذریعے استعمال کریں۔",
      ],
    },
    season: { en: "All seasons", ur: "تمام موسم" },
    problems: {
      en: "Poor soil fertility and micronutrient deficiency",
      ur: "مٹی کی کم زرخیزی اور مائیکرو نیوٹرینٹس کی کمی",
    },
    details: {
      en: [
        "Organic potassium humate-based micronutrient",
        "Enhances root development and plant growth",
        "Improves soil structure and microbial activity",
      ],
      ur: [
        "نامیاتی پوٹاشیم ہیومیٹ پر مبنی مائیکرو نیوٹرینٹ",
        "جڑوں کی نشوونما اور پودوں کی بڑھوتری میں اضافہ کرتا ہے",
        "مٹی کی ساخت اور حیاتیاتی سرگرمی کو بہتر بناتا ہے",
      ],
    },
  },
  {
    id: 9,
    chemical: { en: "Duo + Star", ur: "ڈیو پلس اسٹار" },
    name: { en: "Duo + Star", ur: "ڈیو پلس اسٹار" },
    category: { en: "Herbicide", ur: "جڑی بوٹی مار دوا" },
    packSize: { en: "600 ML", ur: "600 ملی لیٹر" },
    image: require("../assets/products/Duo+Star.png"), // update image if available
    composition: [
      {
        en: "Rimsulfuron + Quizalofop 11 OD",
        ur: "رِمسلفیورون + کوئزالوفوپ 11 او ڈی",
      },
      {
        en: "Bentazone 48 SL",
        ur: "بینٹازون 48 ایس ایل",
      },
    ],
    crops: {
      en: "Maize, Wheat, and other field crops",
      ur: "مکئی، گندم اور دیگر کھیتوں کی فصلیں",
    },
    usage: {
      en: [
        "Apply as a post-emergence spray to control broadleaf and grassy weeds.",
      ],
      ur: [
        "چوڑی پتی اور گھاس نما جڑی بوٹیوں کے کنٹرول کے لیے اگاؤ کے بعد سپرے کریں۔",
      ],
    },
    season: {
      en: "During active weed growth",
      ur: "جڑی بوٹیوں کی فعال بڑھوتری کے دوران",
    },
    problems: {
      en: "Broadleaf and grassy weed infestation",
      ur: "چوڑی پتی اور گھاس نما جڑی بوٹیوں کا حملہ",
    },
    details: {
      en: [
        "Selective systemic formulation",
        "Controls both grassy and broadleaf weeds",
        "Ensures effective weed management with crop safety",
      ],
      ur: [
        "منتخب نظامی ترکیب",
        "گھاس نما اور چوڑی پتی جڑی بوٹیوں دونوں پر مؤثر",
        "فصل کے تحفظ کے ساتھ مؤثر جڑی بوٹی کنٹرول",
      ],
    },
  },
  {
    id: 10,
    name: { en: "Fertera Plus", ur: "فیرٹرا پلس" },
    chemical: { en: "CTPR+ChaIothinadin", ur: "CTPR+چالو تھیناڈن" },
    category: { en: "Granule", ur: "گرانول" },
    packSize: { en: "6 KG", ur: "6 کلو" },
    image: require("../assets/products/FerteraPlus.png"), // Replace with actual image
    composition: [{ en: "CTPR + Chalothinadin", ur: "CTPR + چالو تھیناڈن" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: ["Apply to soil as per recommended dose during growth period."],
      ur: ["بڑھوتری کے دوران مٹی میں تجویز کردہ مقدار کے مطابق شامل کریں۔"],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: { en: "Pest control", ur: "حشرات سے تحفظ" },
    details: {
      en: [
        "Form: Granules",
        "Mode: Systemic and contact action for pest control.",
        "Apply uniformly to affected areas.",
        "Wear protective clothing; store in a cool, dry place.",
      ],
      ur: [
        "فارم: گرانول",
        "طریقہ: حشرات سے تحفظ کے لیے سسٹیمک اور رابطہ عمل۔",
        "متاثرہ علاقوں میں یکساں طور پر لگائیں۔",
        "حفاظتی لباس پہنیں؛ ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 11,
    name: { en: "Mister", ur: "مسٹر" },
    chemical: {
      en: "Dinotifuron + Bifenthrine",
      ur: "ڈائنوٹیفیورون + بائیفین تھرین",
    },
    category: { en: "Insecticide", ur: "کیڑے مار" },
    packSize: { en: "100 ML", ur: "100 ملی لیٹر" },
    image: require("../assets/products/Mister.png"), // add actual image
    composition: [
      { en: "Dinotifuron + Bifenthrine", ur: "ڈائنوٹیفیورون + بائیفین تھرین" },
    ],
    crops: { en: "Cotton, Vegetables", ur: "کپاس، سبزیاں" },
    usage: {
      en: [
        "Shake well before use.",
        "Mix with water as per recommended dose.",
        "Spray on crops early in the morning or late evening.",
        "Repeat after 7–10 days if pest infestation continues.",
      ],
      ur: [
        "استعمال سے پہلے اچھی طرح ہلائیں۔",
        "تجویز کردہ مقدار کے مطابق پانی میں مکس کریں۔",
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
    id: 12,
    name: { en: "Monomehyp 05% G", ur: "مونومہائپ 05٪ جی" },
    chemical: { en: "Monomehyp 05% G", ur: "مونومہائپ 05٪ جی" },
    category: { en: "Granule", ur: "گرانول" },
    packSize: { en: "1 KG", ur: "1 کلو" },
    image: require("../assets/products/Monomehype.png"),
    composition: [{ en: "Monomehyp 05% G", ur: "مونومہائپ 05٪ جی" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Apply to soil as per recommended dose during growth period.",
        "Mix evenly in the soil before irrigation for best results.",
      ],
      ur: [
        "بڑھوتری کے دوران تجویز کردہ مقدار کے مطابق مٹی میں شامل کریں۔",
        "بہترین نتائج کے لیے آبپاشی سے پہلے مٹی میں یکساں مکس کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Pest control in soil-dwelling pests",
      ur: "مٹی میں رہنے والے کیڑوں سے تحفظ",
    },
    details: {
      en: [
        "Form: Granules",
        "Systemic and contact action for soil pests.",
        "Ensures uniform distribution in soil.",
        "Safe for crops when applied as directed.",
      ],
      ur: [
        "فارم: گرانول",
        "مٹی میں رہنے والے کیڑوں کے لیے سسٹیمک اور رابطہ عمل۔",
        "مٹی میں یکساں تقسیم کو یقینی بناتا ہے۔",
        "تجویز کے مطابق لگانے پر فصل کے لیے محفوظ۔",
      ],
    },
  },
  {
    id: 13,
    name: { en: "Multi-KClasic Potash 30%", ur: "ملٹی-کے کلازک پوٹاش 30٪" },
    chemical: { en: "Multi-KClasic", ur: "ملٹی-کے کلازک" },
    category: { en: "Micronutrient", ur: "مائیکرو نیوٹرینٹ" },
    packSize: { en: "1 Ltr", ur: "1 لٹر" },
    image: require("../assets/products/Multi-K.png"),
    composition: [{ en: "Potash 30%", ur: "پوٹاش 30٪" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Apply directly to soil as per recommended dose.",
        "Irrigate separately after application for proper absorption.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق براہ راست مٹی میں لگائیں۔",
        "صحیح جذب کے لیے لگانے کے بعد علیحدہ آبپاشی کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Potash deficiency",
      ur: "پوٹاش کی کمی",
    },
    details: {
      en: [
        "Traditional soil application for micronutrient supply.",
        "Simple and easy to use.",
        "Moderate nutrient absorption efficiency.",
      ],
      ur: [
        "مائیکرو نیوٹرینٹ کی فراہمی کے لیے روایتی مٹی میں لگانے کا طریقہ۔",
        "سادہ اور آسان استعمال۔",
        "معتدل غذائی جزو جذب کی کارکردگی۔",
      ],
    },
  },
  {
    id: 14,
    name: {
      en: "Multi-KClasic Potash 30% (Fertigation)",
      ur: "ملٹی-کے کلازک پوٹاش 30٪ (فرٹیگیشن)",
    },
    chemical: { en: "Multi-KClasic", ur: "ملٹی-کے کلازک" },
    category: { en: "Micronutrient", ur: "مائیکرو نیوٹرینٹ" },
    packSize: { en: "3 Ltr", ur: "3 لٹر" },
    image: require("../assets/products/Multi-K.png"),
    composition: [{ en: "Potash 30%", ur: "پوٹاش 30٪" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Dilute with water and apply through irrigation system.",
        "Apply in small doses multiple times for best nutrient uptake.",
      ],
      ur: [
        "پانی میں حل کر کے آبپاشی کے نظام کے ذریعے لگائیں۔",
        "بہترین غذائی جزو جذب کے لیے متعدد چھوٹے مقدار میں لگائیں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Potash deficiency",
      ur: "پوٹاش کی کمی",
    },
    details: {
      en: [
        "Fertigation ensures efficient micronutrient delivery.",
        "Directly reaches the root zone with irrigation water.",
        "Higher nutrient absorption efficiency compared to traditional method.",
      ],
      ur: [
        "فرٹیگیشن مائیکرو نیوٹرینٹ کی موثر فراہمی کو یقینی بناتا ہے۔",
        "آبپاشی کے پانی کے ساتھ جڑ کے علاقے تک براہ راست پہنچتا ہے۔",
        "روایتی طریقہ کے مقابلے میں زیادہ غذائی جزو جذب کی کارکردگی۔",
      ],
    },
  },
  {
    id: 15,
    name: { en: "Round-Up 48% SL", ur: "راؤنڈ-اپ 48٪ ایس ایل" },
    chemical: { en: "Glyphosate 48% SL", ur: "گلیفوسیت 48٪ ایس ایل" },
    category: { en: "Herbicide", ur: "جڑی بوٹی مار" },
    packSize: { en: "1000 ML", ur: "1000 ملی لیٹر" },
    image: require("../assets/products/RoundUp.png"), // add actual image
    composition: [{ en: "Glyphosate 48% SL", ur: "گلیفوسیت 48٪ ایس ایل" }],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Dilute with water as per recommended dose.",
        "Apply as a post-emergence spray to control weeds.",
        "Avoid spraying on windy days or on crops in flower.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق پانی میں حل کریں۔",
        "جڑی بوٹیوں کے کنٹرول کے لیے اگاؤ کے بعد سپرے کریں۔",
        "ہوا والے دن یا پھولوں میں موجود فصل پر سپرے نہ کریں۔",
      ],
    },
    season: { en: "All seasons", ur: "تمام موسم" },
    problems: {
      en: "Broadleaf and grassy weed infestation",
      ur: "چوڑی پتی اور گھاس نما جڑی بوٹیوں کا حملہ",
    },
    details: {
      en: [
        "Selective systemic herbicide.",
        "Controls a wide range of weeds in crops.",
        "Absorbed by leaves and translocated to roots for effective weed control.",
        "Wear protective clothing; store in a cool, dry place.",
      ],
      ur: [
        "منتخب نظامی جڑی بوٹی مار۔",
        "فصلوں میں مختلف قسم کی جڑی بوٹیاں کنٹرول کرتا ہے۔",
        "پتوں کے ذریعے جذب ہو کر جڑوں تک منتقل ہوتا ہے تاکہ مؤثر جڑی بوٹی کنٹرول ممکن ہو۔",
        "حفاظتی لباس پہنیں؛ ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 16,
    name: { en: "Atrazine 38% SC", ur: "ایٹرازین 38٪ ایس سی" },
    chemical: { en: "Atrazine 38% SC", ur: "ایٹرازین 38٪ ایس سی" },
    category: { en: "Herbicide", ur: "جڑی بوٹی مار" },
    packSize: { en: "500 ML", ur: "500 ملی لیٹر" },
    image: require("../assets/products/Atrazine.png"), // add actual image
    composition: [{ en: "Atrazine 38% SC", ur: "ایٹرازین 38٪ ایس سی" }],
    crops: { en: "Maize, Sorghum, Sugarcane", ur: "مکئی، سورگم، گنے" },
    usage: {
      en: [
        "Dilute with water as per recommended dose.",
        "Apply as pre-emergence or early post-emergence spray to control weeds.",
        "Do not apply on stressed or flowering crops.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق پانی میں حل کریں۔",
        "جڑی بوٹیوں کے کنٹرول کے لیے اگاؤ سے پہلے یا ابتدائی اگاؤ کے بعد سپرے کریں۔",
        "تناؤ والے یا پھولوں والے فصل پر نہ لگائیں۔",
      ],
    },
    season: { en: "All seasons", ur: "تمام موسم" },
    problems: {
      en: "Broadleaf and grassy weed infestation",
      ur: "چوڑی پتی اور گھاس نما جڑی بوٹیوں کا حملہ",
    },
    details: {
      en: [
        "Selective systemic herbicide.",
        "Controls a wide range of weeds in crops like maize, sorghum, and sugarcane.",
        "Absorbed by leaves and roots for long-lasting weed control.",
        "Wear protective clothing; store in a cool, dry place.",
      ],
      ur: [
        "منتخب نظامی جڑی بوٹی مار۔",
        "مکئی، سورگم اور گنے جیسی فصلوں میں مختلف قسم کی جڑی بوٹیاں کنٹرول کرتا ہے۔",
        "پتوں اور جڑوں کے ذریعے جذب ہو کر طویل عرصے تک جڑی بوٹیوں پر قابو پاتا ہے۔",
        "حفاظتی لباس پہنیں؛ ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 17,
    name: { en: "Wolf 25% OD", ur: "وولف 25٪ او ڈی" },
    chemical: {
      en: "TRIULTRA (Mesosulfuron Methyl 0.9% + Florasulam 0.6% + MACP 23.5%)",
      ur: "ٹرائی الٹرا (میسوسلفورون میتھائل 0.9٪ + فلوراسولم 0.6٪ + میکاپ 23.5٪)",
    },
    category: { en: "Herbicide", ur: "جڑی بوٹی مار" },
    packSize: { en: "4 CD-ML", ur: "4 سی ڈی-ملی" },
    image: require("../assets/products/Wolf.png"),
    composition: [
      {
        en: "Mesosulfuron Methyl 0.9% + Florasulam 0.6% + MACP 23.5%",
        ur: "میسوسلفورون میتھائل 0.9٪ + فلوراسولم 0.6٪ + میکاپ 23.5٪",
      },
    ],
    crops: { en: "Wheat, Barley, Rice", ur: "گندم، جو، چاول" },
    usage: {
      en: [
        "Dilute with water according to recommended dose.",
        "Apply as a post-emergence spray on actively growing weeds.",
        "Avoid spraying on stressed crops or during high temperatures.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق پانی میں حل کریں۔",
        "فصل میں بڑھتی ہوئی جڑی بوٹیوں پر اگاؤ کے بعد سپرے کریں۔",
        "تناؤ والی فصل یا زیادہ گرمی میں سپرے نہ کریں۔",
      ],
    },
    season: { en: "Spring and Summer", ur: "بہار اور گرمیوں میں" },
    problems: {
      en: "Broadleaf and grassy weed infestation",
      ur: "چوڑی پتی اور گھاس نما جڑی بوٹیوں کا حملہ",
    },
    details: {
      en: [
        "Selective systemic herbicide.",
        "Controls a wide spectrum of grassy and broadleaf weeds.",
        "Absorbed by leaves and translocated to roots for effective weed control.",
        "Wear protective clothing; store in a cool, dry place.",
      ],
      ur: [
        "منتخب نظامی جڑی بوٹی مار۔",
        "گھاس نما اور چوڑی پتی جڑی بوٹیوں کی وسیع رینج پر قابو پاتا ہے۔",
        "پتوں کے ذریعے جذب ہو کر جڑوں تک منتقل ہوتا ہے تاکہ مؤثر کنٹرول ممکن ہو۔",
        "حفاظتی لباس پہنیں؛ ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 18, // unique ID
    name: { en: "Ceedo 20% SC", ur: "سیڈو 20٪ ایس سی" },
    chemical: { en: "Clothianidin 20% SC", ur: "کلوٹھیانڈین 20٪ ایس سی" },
    category: { en: "Insecticide", ur: "کیڑے مار" },
    packSize: { en: "ISO ML", ur: "آئی ایس او ملی لیٹر" },
    image: require("../assets/products/Seedo.png"), // add actual image
    composition: [{ en: "Clothianidin 20% SC", ur: "کلوٹھیانڈین 20٪ ایس سی" }],
    crops: { en: "Vegetables, Cereals, Cotton", ur: "سبزیاں، اناج، کپاس" },
    usage: {
      en: [
        "Dilute with water as per recommended dose.",
        "Apply as foliar spray on affected crops.",
        "Repeat application if pest infestation continues, following recommended intervals.",
      ],
      ur: [
        "تجویز کردہ مقدار کے مطابق پانی میں حل کریں۔",
        "متاثرہ فصل پر پتوں پر سپرے کریں۔",
        "اگر کیڑوں کی تعداد زیادہ ہو تو تجویز کردہ وقفوں کے مطابق دوبارہ سپرے کریں۔",
      ],
    },
    season: { en: "All growing seasons", ur: "تمام بڑھتی ہوئی موسموں میں" },
    problems: {
      en: "Aphids, Whiteflies, Thrips, and other sucking pests",
      ur: "پتنگ، سفید مکھی، تھرپس اور دیگر چوسنے والے کیڑے",
    },
    details: {
      en: [
        "Systemic insecticide with long-lasting effect.",
        "Controls a wide range of sucking pests.",
        "Absorbed by leaves and transported throughout the plant.",
        "Wear protective clothing; store in a cool, dry place.",
      ],
      ur: [
        "سسٹیمک کیڑے مار جو طویل اثر رکھتا ہے۔",
        "چوسنے والے کیڑوں کی وسیع رینج پر قابو پاتا ہے۔",
        "پتوں کے ذریعے جذب ہو کر پورے پودے میں منتقل ہوتا ہے۔",
        "حفاظتی لباس پہنیں؛ ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 19,
    name: { en: "Sooraj Champion", ur: "سورج چیمپئن" },
    chemical: {
      en: "Nitrogen 17% + Phosphorus 44%",
      ur: "نائٹروجن 17٪ + فاسفورس 44٪",
    },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "10 KG", ur: "10 کلو" },
    image: require("../assets/products/SoorajChampionnew.png"),
    composition: [
      { en: "Nitrogen 17% + Phosphorus 44%", ur: "نائٹروجن 17٪ + فاسفورس 44٪" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Apply to soil during the growth cycle according to recommended dose.",
        "Mix thoroughly with soil for uniform nutrient distribution.",
      ],
      ur: [
        "بڑھوتری کے دوران تجویز کردہ مقدار کے مطابق مٹی میں لگائیں۔",
        "غذائی اجزاء کی یکساں تقسیم کے لیے مٹی میں اچھی طرح مکس کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Nitrogen and Phosphorus deficiency",
      ur: "نائٹروجن اور فاسفورس کی کمی",
    },
    details: {
      en: [
        "Balanced fertilizer for nitrogen and phosphorus supply.",
        "Promotes healthy plant growth and strong root development.",
        "Enhances crop yield and quality.",
        "Store in a cool, dry place.",
      ],
      ur: [
        "نائٹروجن اور فاسفورس کی فراہمی کے لیے متوازن کھاد۔",
        "صحت مند پودوں کی بڑھوتری اور مضبوط جڑوں کی نشوونما کو فروغ دیتا ہے۔",
        "فصل کی پیداوار اور معیار میں اضافہ کرتا ہے۔",
        "ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
  {
    id: 20,
    name: { en: "Sooraj N.P", ur: "سورج این۔پی" },
    chemical: {
      en: "Nitrogen 15% + Phosphorus 10%",
      ur: "نائٹروجن 15٪ + فاسفورس 10٪",
    },
    category: { en: "Fertilizer", ur: "کھاد" },
    packSize: { en: "50 KG", ur: "50 کلو" },
    image: require("../assets/products/NP.png"), // add actual image
    composition: [
      { en: "Nitrogen 15% + Phosphorus 10%", ur: "نائٹروجن 15٪ + فاسفورس 10٪" },
    ],
    crops: { en: "All crops", ur: "تمام فصلیں" },
    usage: {
      en: [
        "Apply to soil during the growth cycle according to recommended dose.",
        "Ensure even mixing with soil for proper nutrient absorption.",
      ],
      ur: [
        "بڑھوتری کے دوران تجویز کردہ مقدار کے مطابق مٹی میں لگائیں۔",
        "صحیح غذائی جذب کے لیے مٹی میں یکساں مکس کریں۔",
      ],
    },
    season: { en: "All year", ur: "تمام سال" },
    problems: {
      en: "Nitrogen and Phosphorus deficiency",
      ur: "نائٹروجن اور فاسفورس کی کمی",
    },
    details: {
      en: [
        "Balanced fertilizer providing essential nitrogen and phosphorus.",
        "Supports healthy plant growth and strong root development.",
        "Enhances overall crop yield and quality.",
        "Store in a cool, dry place.",
      ],
      ur: [
        "اہم نائٹروجن اور فاسفورس فراہم کرنے والی متوازن کھاد۔",
        "صحت مند پودوں کی بڑھوتری اور مضبوط جڑوں کی نشوونما میں مدد دیتی ہے۔",
        "مجموعی فصل کی پیداوار اور معیار کو بہتر بناتی ہے۔",
        "ٹھنڈی، خشک جگہ پر اسٹور کریں۔",
      ],
    },
  },
];

export default products;
