import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import Brand from "../components/Brand.jsx";
import "../styles/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const lang = i18n.language === "ur" ? "ur" : "en";
  const isUrdu = lang === "ur";

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>{t("product.notFound", "Product not found")}</p>;
  }

  return (
    <>
      <div className="pd-main-container">
        {/* BACK BUTTON */}
        <button
          className="pd-back"
          onClick={() => navigate(-1)}
          style={{ borderRadius: "30px", padding: "10px 22px" }}
        >
          {t("product.backToProducts", "Back to Products")}
        </button>

        {/* TOP SECTION */}
        <div className="pd-top-section">
          {/* LEFT COLUMN */}
          <div className="pd-image-wrapper">
            <img
              src={product.image}
              alt={product.name?.[lang] || product.name?.en}
              className="pd-image"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className={`pd-info-wrapper ${isUrdu ? "urdu-text" : ""}`}>
            <h1 className="pd-title">
              {product.name?.[lang] || product.name?.en}
            </h1>

            <div className="pd-basic-info">
              {product.chemical && (
                <p>{product.chemical?.[lang] || product.chemical?.en}</p>
              )}

              {product.packSize && (
                <p>
                  <strong>{t("product.pack", "Pack Size")}:</strong>{" "}
                  {product.packSize?.[lang] || product.packSize?.en}
                </p>
              )}

              {product.category && (
                <p>
                  <strong>{t("product.category", "Category")}:</strong>{" "}
                  {product.category?.[lang] || product.category?.en}
                </p>
              )}
            </div>

            {/* PRODUCT DETAILS */}
            {product.details?.[lang]?.length > 0 && (
              <div className="pd-section-card">
                <h3>{t("product.details", "Product Details")}</h3>
                <ul>
                  {product.details[lang].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* COMPOSITION / INGREDIENTS */}
            {product.composition?.length > 0 && (
              <div className="pd-section-card">
                <h3>{t("product.composition", "Composition / Ingredients")}</h3>
                <ul>
                  {product.composition.map((item, idx) => (
                    <li key={idx}>{item?.[lang] || item?.en}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* GREEN SECTION */}
        <div className={`pd-green-section ${isUrdu ? "urdu-text" : ""}`}>
          {/* CROPS / TARGETED PLANTS */}
          {product.crops && (
            <div className="pd-section-card pd-span-two">
              <h3>{t("product.crops", "Crops / Targeted Plants")}</h3>
              <p>{product.crops?.[lang] || product.crops?.en}</p>
            </div>
          )}

          {product.usage && (
            <div className="pd-section-card">
              <h3>{t("product.usage", "Usage Instructions")}</h3>
              {Array.isArray(product.usage?.[lang]) ? (
                <ul>
                  {product.usage[lang].map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              ) : (
                <p>{product.usage?.[lang] || product.usage?.en}</p>
              )}
            </div>
          )}

          {product.season && (
            <div className="pd-section-card">
              <h3>{t("product.season", "Season / Timing")}</h3>
              <p>{product.season?.[lang] || product.season?.en}</p>
            </div>
          )}

          {product.problems && (
            <div className="pd-section-card">
              <h3>{t("product.problems", "Pest / Problem Control")}</h3>
              <p>{product.problems?.[lang] || product.problems?.en}</p>
            </div>
          )}
        </div>
      </div>

      {/* SUPPLIERS */}
      <div className="pd-suppliers-section">
        <h2 className={`pd-suppliers-heading ${isUrdu ? "urdu-text" : ""}`}>
          {t("product.ourSuppliers", "Our Suppliers")}
        </h2>
        <Brand />
      </div>
    </>
  );
}
