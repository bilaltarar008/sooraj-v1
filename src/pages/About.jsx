import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div
      style={{
        fontFamily:
          lang === "ur" ? "Noori Nastaleeq, serif" : "'Inter', sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          height: "380px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1650&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          }}
        ></div>

        <h1
          style={{
            position: "relative",
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          {t("about.heroTitle")}
        </h1>

        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.2)",
            padding: "10px 20px",
            borderRadius: "8px",
            backdropFilter: "blur(3px)",
            fontSize: "1rem",
          }}
        >
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            {t("Home")}
          </a>{" "}
          › <span>{t("About")}</span>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section
        style={{ width: "85%", margin: "60px auto", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2rem", color: "#127a3a", fontWeight: "700" }}>
          {t("about.whoTitle")}
        </h2>

        <p style={{ fontSize: "1rem", color: "#555" }}>{t("about.whoDesc")}</p>
      </section>

      {/* MISSION / VISION / COMMITMENT */}
      <section style={{ background: "#f5f9f6", padding: "60px 0" }}>
        <div
          style={{
            width: "85%",
            margin: "0 auto",
            display: "grid",
            gap: "25px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={cardStyle}>
            <h3 style={titleStyle}>🌱 {t("about.missionTitle")}</h3>
            <p>{t("about.missionDesc")}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>🌾 {t("about.visionTitle")}</h3>
            <p>{t("about.visionDesc")}</p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>🛡️ {t("about.commitmentTitle")}</h3>
            <p>{t("about.commitmentDesc")}</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          width: "85%",
          margin: "70px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {[
          { number: "10+", label: t("about.stats.exp") },
          { number: "50+", label: t("about.stats.products") },
          { number: "500+", label: t("about.stats.dealers") },
          { number: "100k+", label: t("about.stats.farmers") },
        ].map((stat, index) => (
          <div key={index} style={statStyle}>
            <h2 style={{ color: "#127a3a", fontSize: "2.2rem" }}>
              {stat.number}
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: "#f0f7f2", padding: "70px 0" }}>
        <div style={{ width: "85%", margin: "0 auto" }}>
          <h2
            style={{ textAlign: "center", color: "#127a3a", fontSize: "2rem" }}
          >
            {t("about.whyTitle")}
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: "25px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <li style={cardStyle}>✔️ {t("about.why1")}</li>
            <li style={cardStyle}>✔️ {t("about.why2")}</li>
            <li style={cardStyle}>✔️ {t("about.why3")}</li>
            <li style={cardStyle}>✔️ {t("about.why4")}</li>
            <li style={cardStyle}>✔️ {t("about.why5")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
  color: "#555",
};

const titleStyle = {
  color: "#127a3a",
  fontSize: "1.4rem",
  marginBottom: "12px",
};

const statStyle = {
  background: "#f5f9f6",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
};
