import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TopHeader() {
  const iconButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#0d6a32",
        color: "white",
        padding: "6px 0",
        fontSize: "0.9rem",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <MdEmail size={17} />
          <a
            href="mailto:Soorajcropscience@gmail.com"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            SoorajCropScience@gmail.com
          </a>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={iconButtonStyle}
            onClick={() =>
              window.open(
                "https://www.facebook.com/p/Sooraj-Crop-Sciences-61555305478429/",
                "_blank"
              )
            }
          >
            <FaFacebookF size={16} />
          </button>
          <button
            style={iconButtonStyle}
            onClick={() => window.open("https://instagram.com/soorajcropsciences", "_blank")}
          >
            <FaInstagram size={16} />
          </button>
          <button
            style={iconButtonStyle}
            onClick={() => window.open("https://wa.me/04235111003", "_blank")}
          >
            <FaWhatsapp size={16} />
          </button>
          <button
            style={iconButtonStyle}
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <FaLinkedinIn size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
