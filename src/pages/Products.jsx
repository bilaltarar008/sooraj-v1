import React, { useState, useEffect } from "react";
import products from "../data/products";
import { motion } from "framer-motion";
import "../styles/products.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Products() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "ur" ? "ur" : "en";

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  /* ===========================
     Scroll to top on load
  ============================ */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ===========================
     Scroll to top on page change
  ============================ */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  /* ===========================
     Categories (Translated)
  ============================ */
  const categories = [
    t("product.all", "All"),
    ...new Set(
      products.map((p) => p.category?.[lang] || p.category?.en || "Unknown")
    ),
  ];

  /* ===========================
     Filter products
  ============================ */
  const filteredProducts =
    selectedCategory === t("product.all", "All")
      ? products
      : products.filter((p) => {
          const cat = p.category?.[lang] || p.category?.en;
          return cat?.toLowerCase() === selectedCategory.toLowerCase();
        });

  /* ===========================
     Pagination logic
  ============================ */
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  /* ===========================
     Navigate to product detail
  ============================ */
  const goToProductDetail = (product) => {
    navigate(`/products/${product.id}`, {
      state: {
        product,
        lang,
      },
    });
  };

  return (
    <div className="products-container">
      <h1 className="page-title">{t("product.title", "Products")}</h1>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {currentProducts.map((p) => (
          <motion.div
            key={p.id}
            className="product-card"
            whileHover={{ scale: 1.03 }}
            onClick={() => goToProductDetail(p)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={p.image}
              alt={p.name?.[lang] || p.name?.en}
              className="product-image"
            />

            <h3 className="product-name">{p.name?.[lang] || p.name?.en}</h3>

            <div className="product-info">
              <p>{p.chemical?.[lang] || p.chemical?.en}</p>
              <p>
                <strong>{t("product.pack", "Pack Size")}:</strong>{" "}
                {p.packSize?.[lang] || p.packSize?.en}
              </p>
            </div>

            {/* READ MORE BUTTON */}
            <button
              className="read-more-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToProductDetail(p);
              }}
            >
              {t("product.readMore", "Read more")}
            </button>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
