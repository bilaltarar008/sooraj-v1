// src/components/CropGallery.jsx
import React, { useState } from "react";
import { crops } from "../data/cropData";
import "./CropGallery.css";
import { useTranslation } from "react-i18next";

const CropGallery = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const { t } = useTranslation();

  return (
    <section className="crop-section">
      <h2 className="crop-title">{t("cropGallery.title")}</h2>
      <h1 className="crop-subtitle">{t("cropGallery.subtitle")}</h1>

      {/* GRID */}
      <div className="crop-grid">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="crop-card"
            onClick={() => setSelectedCrop(crop)}
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="crop-image"
            />
            <span className="crop-name">{crop.name}</span>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedCrop && (
        <div className="popup-overlay" onClick={() => setSelectedCrop(null)}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCrop(null)}
            >
              ✕
            </button>

            {/* POPUP */}
{selectedCrop && (
  <div className="popup-overlay" onClick={() => setSelectedCrop(null)}>
    <div
      className="popup-box"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedCrop(null)}
      >
        ✕
      </button>

      <img
        src={selectedCrop.popupImage ? selectedCrop.popupImage : selectedCrop.image}
        alt={selectedCrop.name}
        className="popup-img"
      />

      <h2 className="popup-title">{selectedCrop.name}</h2>
      <p className="popup-desc">{selectedCrop.description}</p>
    </div>
  </div>
)}


            <h2 className="popup-title">{selectedCrop.name}</h2>
            <p className="popup-desc">{selectedCrop.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CropGallery;
