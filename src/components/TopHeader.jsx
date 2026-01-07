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
    height: "100%",
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#0d6a32",
        color: "white",

        /* 🔒 LOCK HEIGHT */
        height: "36px",
        minHeight: "36px",

        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          width: "100%",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "0 20px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",

            /* 🔒 PREVENT HEIGHT CHANGE */
            lineHeight: "1",
            whiteSpace: "nowrap",
          }}
        >
          <MdEmail size={16} />
          <a
            href="mailto:Soorajcropscience@gmail.com"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "300",

              /* 🔒 FONT CONTROL */
              fontSize: "13px",
              lineHeight: "1",
              whiteSpace: "nowrap",
            }}
          >
            SoorajCropScience@gmail.com
          </a>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            height: "100%",
          }}
        >
          <button
            style={iconButtonStyle}
            onClick={() =>
              window.open(
                "https://www.facebook.com/p/Sooraj-Crop-Sciences-61555305478429/",
                "_blank"
              )
            }
          >
            <FaFacebookF size={15} />
          </button>

          <button
            style={iconButtonStyle}
            onClick={() =>
              window.open(
                "https://instagram.com/soorajcropsciences",
                "_blank"
              )
            }
          >
            <FaInstagram size={15} />
          </button>

          <button
            style={iconButtonStyle}
            onClick={() =>
              window.open("https://wa.me/04235111003", "_blank")
            }
          >
            <FaWhatsapp size={15} />
          </button>

          <button
            style={iconButtonStyle}
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            <FaLinkedinIn size={15} />
          </button>
        </div>
      </div>
    </div>
  );
  
}


