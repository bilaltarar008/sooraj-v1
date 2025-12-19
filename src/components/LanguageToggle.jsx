import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button
        onClick={() => i18n.changeLanguage("en")}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: i18n.language === "en" ? "#127a3a" : "#fff",
          color: i18n.language === "en" ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        ENG
      </button>

      <button
        onClick={() => i18n.changeLanguage("ur")}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: i18n.language === "ur" ? "#127a3a" : "#fff",
          color: i18n.language === "ur" ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        ار
      </button>
    </div>
  );
}

// import { useTranslation } from "react-i18next";

// export default function LanguageToggle() {
//   const { i18n } = useTranslation();

//   const changeLang = (lng) => {
//     i18n.changeLanguage(lng);
//     document.body.dir = lng === "ur" ? "rtl" : "ltr";
//   };

//   return (
//     <div>
//       <button onClick={() => changeLang("en")}>EN</button>
//       <button onClick={() => changeLang("ur")}>UR</button>
//     </div>
//   );
// }
