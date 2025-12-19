import React from "react";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import StatsSection from "../components/StatsSection";
import VideoSection from "../components/VideoSection";
import ProjectBanner from "../components/ProjectBanner";
import CropGallery from "../components/CropGallery";
import TopHeader from "../components/TopHeader";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

import products from "../data/products";

export default function Home({ search, setSearch }) {
  const featuredProducts = products.slice(0, 4);
  const { t } = useTranslation();

  return (
    <div>
      <ProjectBanner />

      <Hero search={search} setSearch={setSearch} />

      <VideoSection />

      <CropGallery />

      <StatsSection />

      {/* ✅ FEATURED PRODUCTS */}
      <section
        style={{
          padding: "20px 0",
          width: "85%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h4
          style={{
            color: "#127a3a",
            marginBottom: "25px",
            fontSize: "2.6rem",
            fontWeight: "700",
            fontFamily:
              i18n.language === "ur"
                ? "Noto Nastaliq Urdu, Noori Nastaleeq, serif"
                : "inherit",
          }}
        >
          {t("products.featured")}
        </h4>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                padding: "14px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                transition: "0.3s",
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* ✅ VIEW ALL BUTTON */}
        <div style={{ marginTop: "30px" }}>
          <a
            href="/products"
            style={{
              background: "#127a3a",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontFamily:
                i18n.language === "ur"
                  ? "Noto Nastaliq Urdu, Noori Nastaleeq, serif"
                  : "inherit",
            }}
          >
            {t("products.viewAll")}
          </a>
        </div>
      </section>
    </div>
  );
}
