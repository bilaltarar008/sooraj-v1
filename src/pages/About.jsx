import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import aboutBanner from "../assets/aboutbanner.jpg";
import aboutSideImage from "../assets/main-banner2.jpg";
/* Fix leaflet marker icons */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const items = document.querySelectorAll(
      ".fade-up, .slide-left, .slide-right"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
      {/* ================= HERO ================= */}
      <section style={{ height: "80vh", overflow: "hidden" }}>
        <img
          src={aboutBanner}
          alt="Sooraj Crop Sciences"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section style={{ padding: "80px 10% 50px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div className="slide-left">
            <h2
              style={{ color: "#127a3a", fontSize: "2.4rem", marginBottom: 22 }}
            >
              {t("about.whoTitle")}
            </h2>

            <p style={{ lineHeight: 1.9, marginBottom: 14 }}>
              {t("about.whoPara1")}
            </p>

            <p style={{ lineHeight: 1.9, marginBottom: 18 }}>
              {t("about.whoPara2")}
            </p>

            <p style={{ fontWeight: 600, color: "#127a3a" }}>
              {t("about.whoTagline")}
            </p>
          </div>

          <div className="slide-right">
            <img
              src={aboutSideImage}
              alt="Agricultural Support"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                boxShadow: "0 25px 55px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section style={{ padding: "40px 12% 70px", background: "#f3fbff" }}>
        <div
          className="slide-left"
          style={{
            background: "#dff4ea",
            padding: 34,
            borderRadius: 16,
            maxWidth: 760,
            marginBottom: 32,
          }}
        >
          <h2 style={{ color: "#127a3a", fontSize: "2rem", marginBottom: 14 }}>
            {t("about.missionTitle")}
          </h2>

          <p style={{ lineHeight: 1.8 }}>{t("about.missionDesc")}</p>
        </div>

        <div
          className="slide-right"
          style={{
            background: "#11563f",
            color: "#fff",
            padding: 34,
            borderRadius: 16,
            maxWidth: 760,
            marginLeft: "auto",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: 14 }}>
            {t("about.visionTitle")}
          </h2>

          <p style={{ lineHeight: 1.75 }}>{t("about.visionDesc")}</p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={{ padding: "80px 10%", textAlign: "center" }}>
        <h2 style={{ color: "#10582a", fontSize: "2.3rem", marginBottom: 50 }}>
          {t("about.servicesTitle")}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}
        >
          {services.map((s, i) => (
            <div key={i} className="service-box fade-up">
              {s.icon}
              <h4>{t(s.titleKey)}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DEALER MAP ================= */}
      <section style={{ padding: "70px 10%" }}>
        <h2
          style={{
            fontSize: "2.6rem",
            color: "#127a3a",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          {t("about.dealerMapTitle")}
        </h2>

        <div style={{ height: 420, borderRadius: 18, overflow: "hidden" }}>
          <MapContainer
            center={[30.3753, 69.3451]}
            zoom={6}
            style={{ height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {dealers.map((d, i) => (
              <Marker key={i} position={d.coords}>
                <Popup>
                  <strong>{d.name}</strong>
                  <br />
                  <span
                    style={{ color: "#127a3a", cursor: "pointer" }}
                    onClick={() => navigate("/contact")}
                  >
                    {t("about.contactDealer")}
                  </span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

      {/* ================= DEALER CTA ================= */}
      <section
        style={{
          background: "#e6f6ee",
          padding: "40px 10%",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 12, color: "#127a3a" }}>
          {t("about.dealerCtaTitle")}
        </h2>

        <p style={{ maxWidth: 600, margin: "0 auto 20px", lineHeight: 1.6 }}>
          {t("about.dealerCtaDesc")}
        </p>

        <button
          onClick={() => navigate("/contact")}
          style={{
            background: "#127a3a",
            color: "#fff",
            border: "none",
            padding: "12px 30px",
            borderRadius: 26,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {t("about.dealerCtaBtn")}
        </button>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`
        .fade-up, .slide-left, .slide-right {
          opacity: 0;
          transition: all 0.8s ease;
        }

        .fade-up { transform: translateY(40px); }
        .slide-left { transform: translateX(-60px); }
        .slide-right { transform: translateX(60px); }

        .fade-up.show, .slide-left.show, .slide-right.show {
          opacity: 1;
          transform: none;
        }

        .service-box {
          background: linear-gradient(180deg, #dff4ea, #bfe8d4);
          padding: 34px 24px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 45px rgba(0,0,0,0.12);
        }

        .service-box h4 {
          margin-top: 16px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .service-box svg {
          width: 40px;
          height: 40px;
          stroke: #0b5d3a;
          fill: none;
          stroke-width: 1.8;
        }

        @media (max-width: 900px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ================= DATA ================= */
const services = [
  {
    titleKey: "services.productsLabel",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l4 4-4 4-4-4z" />
        <path d="M2 12l4-4 4 4-4 4z" />
        <path d="M12 14l4-4 4 4-4 4z" />
      </svg>
    ),
  },
  {
    titleKey: "services.fieldAdvisory",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    titleKey: "services.dealerConsultancy",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    ),
  },
  {
    titleKey: "services.householdSolutions",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9" />
        <path d="M9 21V9h6v12" />
      </svg>
    ),
  },
];

const dealers = [
  { name: "Lahore Dealer", coords: [31.5204, 74.3587] },
  { name: "Karachi Dealer", coords: [24.8607, 67.0011] },
  { name: "Islamabad Dealer", coords: [33.6844, 73.0479] },
  { name: "Faisalabad Dealer", coords: [31.4504, 73.135] },
  { name: "Gujranwala Dealer", coords: [32.1877, 74.1945] },
  { name: "Sialkot Dealer", coords: [32.4945, 74.5229] },
  { name: "Daska Dealer", coords: [32.3244, 74.3539] },
];
