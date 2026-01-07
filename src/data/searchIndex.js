import products from "./products";
import en from "../locales/en.json";
import ur from "../locales/ur.json";

const normalize = (arr = []) =>
  arr
    .flat()
    .filter(Boolean)
    .map((v) => v.toString().toLowerCase());

// ===================== SEARCH INDEX =====================
export const searchIndex = [
  // ===================== HOME =====================
  {
    type: "page",
    label: en.Home,
    path: "/",
    keywords: normalize([
      // Translations
      en.Home,
      ur.Home,
      en.heroTitle,
      ur.heroTitle,
      en.heroDesc,
      ur.heroDesc,

      // General
      "home",
      "homepage",
      "landing page",
      "main page",
      "main",

      // Brand
      "sooraj",
      "sooraj sciences",
      "sooraj agriculture",

      // Agriculture intent
      "agriculture",
      "farming",
      "farm",
      "agriculture company",
      "pakistan agriculture",
      "pakistani farming",

      // Farmer language
      "farmer",
      "kisan",
      "kissan",
      "farmers solution",
      "better yield",
      "safe farming",
      "modern farming",

      // Urdu
      "کسان",
      "زراعت",
      "کھیتی باڑی",
      "زرعی کمپنی",
      "فصل",
      "پیداوار",
    ]),
  },

  // ===================== ABOUT =====================
  {
    type: "page",
    label: en.About,
    path: "/about",
    keywords: normalize([
      // Translations
      en.About,
      ur.About,
      en.about?.whoTitle,
      ur.about?.whoTitle,
      en.about?.missionTitle,
      ur.about?.missionTitle,
      en.about?.visionTitle,
      ur.about?.visionTitle,
      en.about?.servicesTitle,
      ur.about?.servicesTitle,

      // About intent
      "about",
      "about company",
      "who we are",
      "company profile",
      "company details",
      "our mission",
      "our vision",
      "our services",

      // Trust & brand
      "about sooraj",
      "sooraj company",
      "agriculture experts",
      "specialists",

      // Dealer related
      "dealer",
      "dealers",
      "dealer network",
      "dealer map",
      "authorized dealer",
      "become dealer",
      "dealership",
      "agriculture dealer",

      // Urdu
      "ہمارے بارے میں",
      "ہم کون ہیں",
      "زرعی خدمات",
      "ڈیلر",
      "ڈیلرشپ",
    ]),
  },

  // ===================== PRODUCTS PAGE =====================
  {
    type: "page",
    label: en.Products,
    path: "/products",
    keywords: normalize([
      // Translations
      en.Products,
      ur.Products,
      en.productsPage?.title,
      ur.productsPage?.title,

      // Product intent
      "products",
      "all products",
      "our products",
      "crop products",
      "farm products",
      "agriculture products",
      "crop solutions",
      "pesticide",

      // Categories
      "fungicide",
      "insecticide",
      "herbicide",
      "micronutrient",
      "fertilizer",
      "granules",

      // Farmer searches
      "spray",
      "spray medicine",
      "crop medicine",
      "plant medicine",
      "keera mar dawa",
      "bimari ki dawa",
      "growth booster",
      "yield booster",

      // Urdu / Roman Urdu
      "زرعی ادویات",
      "فصل کی دوا",
      "کیڑے مار دوا",
      "فنگس کش",
      "کھاد",
      "اسپرے",
    ]),
  },

  // ===================== CONTACT =====================
  {
    type: "page",
    label: en.Contact,
    path: "/contact",
    keywords: normalize([
      // Translations
      en.Contact,
      ur.Contact,
      en.contact?.title,
      ur.contact?.title,

      // Contact intent
      "contact",
      "contact us",
      "call",
      "call now",
      "phone",
      "phone number",
      "email",
      "email address",
      "office",
      "office location",
      "address",

      // Map & location
      "map",
      "location",
      "google map",
      "office map",
      "where is office",

      // Support
      "help",
      "support",
      "customer support",
      "contact",
      "sales contact",
      "whatsapp",
      "whatsapp support",

      // Urdu
      "رابطہ",
      "فون نمبر",
      "دفتر",
      "پتہ",
      "نقشہ",
      "واٹس ایپ",
    ]),
  },

  // ===================== CAREER =====================
  {
    type: "page",
    label: en.Career,
    path: "/career",
    keywords: normalize([
      // Translations
      en.Career,
      ur.Career,
      en.career?.heroTitle,
      ur.career?.heroTitle,

      // Career intent
      "career",
      "jobs",
      "job",
      "apply",
      "application",
      "vacancy",
      "hiring",

      // Agriculture jobs
      "agriculture job",
      "field job",
      "field officer job",
      "sales officer job",
      "agronomist job",
      "research job",

      // Urdu
      "کیریئر",
      "نوکری",
      "زرعی نوکری",
      "ملازمت",
      "درخواست دیں",
    ]),
  },

  // ===================== PRODUCTS (AUTO — DEEP FARMER SEARCH) =====================
  ...products.map((p) => ({
    type: "product",
    label: p?.name?.en || p?.name?.ur,
    path: `/products/${p.id}`,
    keywords: normalize([
      // Product identity
      p?.name?.en,
      p?.name?.ur,
      p?.brand?.en,
      p?.brand?.ur,

      // Category
      p?.category,
      "fungicide",
      "insecticide",
      "herbicide",
      "micronutrient",
      "fertilizer",
      "Fungicide",
      "Insecticide",
      "Herbicides",
      "Micronutrient",
      "Fertilizer",
      "Granule",
      "pesticide",

      // Technical
      p?.composition,
      p?.usage,
      p?.season,
      p?.problems,
      p?.crops,

      // Farmer intent
      "spray",
      "spray medicine",
      "crop medicine",
      "plant protection",
      "pest control",
      "disease control",
      "fungus control",
      "insect control",
      "yield improvement",
      "growth booster",
      "crops",

      // Roman Urdu
      "dawai",
      "keera",
      "bimari",
      "fasal",
      "spray kab karein",

      // Urdu
      "فصل",
      "فصل کی دوا",
      "کیڑا",
      "بیماری",
      "اسپرے",
      "پیداوار",
    ]),
  })),
];
