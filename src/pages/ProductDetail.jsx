import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // routing
import { useTranslation } from "react-i18next"; // translations
import products from "../data/products"; // your products data
import Brand from "../components/Brand.jsx"; // full-width brand component
import "../styles/productDetail.css"; // CSS

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const lang = i18n.language === "ur" ? "ur" : "en";
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>{t("product.notFound") || "Product not found"}</p>;
  }

  return (
    <>
      <div className="pd-main-container">
        {/* BACK BUTTON */}
        <button className="pd-back" onClick={() => navigate(-1)}>
          ← {t("product.backToProducts") || "Back to Products"}
        </button>

        {/* TOP SECTION: IMAGE + INFO */}
        <div className="pd-top-section">
          {/* IMAGE */}
          <div className="pd-image-wrapper">
            <img
              src={product.image}
              alt={product.name?.[lang] || product.name?.en}
              className="pd-image"
            />
          </div>

          {/* INFO */}
          <div className="pd-info-wrapper">
            <h1 className="pd-title">
              {product.name?.[lang] || product.name?.en}
            </h1>

            <div className="pd-basic-info">
              {product.brand && (
                <p>
                  <strong>{t("product.brand") || "Brand"}:</strong>{" "}
                  {product.brand?.[lang] || product.brand?.en}
                </p>
              )}
              {product.packSize && (
                <p>
                  <strong>{t("product.pack") || "Pack Size"}:</strong>{" "}
                  {product.packSize?.[lang] || product.packSize?.en}
                </p>
              )}
              {product.category && (
                <p>
                  <strong>{t("product.category") || "Category"}:</strong>{" "}
                  {product.category?.[lang] || product.category?.en}
                </p>
              )}
            </div>

            {/* COMPOSITION */}
            {product.composition?.length > 0 && (
              <div className="pd-section-card">
                <h3>
                  {t("product.composition") || "Ingredients / Composition"}
                </h3>
                <ul>
                  {product.composition.map((item, idx) => (
                    <li key={idx}>{item?.[lang] || item?.en}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CROPS */}
            {product.crops && (
              <div className="pd-section-card">
                <h3>{t("product.crops") || "Crops / Targeted Plants"}</h3>
                <p>{product.crops?.[lang] || product.crops?.en}</p>
              </div>
            )}
          </div>
        </div>

        {/* GREEN SECTION: USAGE, SEASON, PROBLEMS */}
        <div className="pd-green-section">
          {product.usage && (
            <div className="pd-section-card">
              <h3>{t("product.usage") || "Usage Instructions"}</h3>
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
              <h3>{t("product.season") || "Season / Timing"}</h3>
              <p>{product.season?.[lang] || product.season?.en}</p>
            </div>
          )}
          {product.problems && (
            <div className="pd-section-card">
              <h3>{t("product.problems") || "Pest / Problem Control"}</h3>
              <p>{product.problems?.[lang] || product.problems?.en}</p>
            </div>
          )}
        </div>
      </div>

      {/* BRAND SECTION FULL WIDTH */}
      <Brand />
    </>
  );
}
