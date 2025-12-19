// add comment in footer
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT — COMPANY INFO */}
        <div style={{ ...styles.column }}>
          <h2 style={styles.brand}>{t("footer.brand")}</h2>

          <p style={styles.text}>📍 {t("footer.address")}</p>
          <p style={styles.text}>📞 {t("footer.phone")}</p>
          <p style={styles.text}>✉️ {t("footer.email")}</p>

          {/* SOCIAL ICONS */}
          <div style={styles.socialRow}>
            <SocialIcon
              url="https://www.facebook.com/p/Sooraj-Crop-Sciences-61555305478429/"
              icon={<FaFacebookF />}
            />
            <SocialIcon
              url="https://www.instagram.com/soorajcropsciences/"
              icon={<FaInstagram />}
            />
            <SocialIcon url="https://linkedin.com" icon={<FaLinkedinIn />} />
            <SocialIcon url="https://youtube.com" icon={<FaYoutube />} />
            <SocialIcon url="https://wa.me/04235111003" icon={<FaWhatsapp />} />
          </div>
        </div>

        {/* CENTER — NAVIGATION */}
        <div style={{ ...styles.column, textAlign: "center" }}>
          <h3 style={styles.heading}>{t("footer.quickLinks")}</h3>

          <div style={styles.links}>
            <FooterLink label={t("nav.home")} to="/" />
            <FooterLink label={t("nav.about")} to="/about" />
            <FooterLink label={t("nav.productPage")} to="/products" />
            <FooterLink label={t("nav.contact")} to="/contact" />
            <FooterLink label={t("nav.career")} to="/career" />
          </div>
        </div>

        {/* CATEGORY LINKS */}
        <div style={{ ...styles.column, textAlign: "center" }}>
          <h3 style={styles.heading}>{t("footer.categories")}</h3>

          <div style={styles.links}>
            <FooterLink
              label={t("categories.all")}
              to="/products?category=All"
            />
            <FooterLink
              label={t("categories.fungicide")}
              to="/products?category=Fungicide"
            />
            <FooterLink
              label={t("categories.insecticide")}
              to="/products?category=Insecticide"
            />
            <FooterLink
              label={t("categories.micronutrients")}
              to="/products?category=Micronutrients"
            />
          </div>
        </div>

        {/* RIGHT — MAP */}
        <div style={{ ...styles.column, textAlign: "center" }}>
          <h3 style={styles.heading}>{t("footer.findUs")}</h3>

          <iframe
            title="office-map-footer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8676070868432!2d74.2161747!3d31.460239899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdb317556ee1%3A0xa86cfb82b905c2d0!2sSooraj%20Crop%20Sciences%20Warehouse!5e1!3m2!1sen!2s!4v1765800819286!5m2!1sen!2s"           width="100%"
            height="180"
            style={styles.map}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
}

/* 🔗 NAVIGATION LINK COMPONENT */
function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      style={styles.link}
      onMouseOver={(e) => (e.target.style.color = "#caffd0")}
      onMouseOut={(e) => (e.target.style.color = "white")}
    >
      {label}
    </Link>
  );
}

/* 🟢 SOCIAL ICON BUTTON COMPONENT */
function SocialIcon({ url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialIcon}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#1c8c43";
        e.target.style.transform = "translateY(-4px)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#ffffff15";
        e.target.style.transform = "translateY(0)";
      }}
    >
      {icon}
    </a>
  );
}

/* ✅ RESPONSIVE INLINE STYLES */
const styles = {
  footer: {
    background: "linear-gradient(135deg, #0b5a27, #0d6a2f)",
    color: "white",
    padding: "30px 20px 20px",
    fontFamily: "Inter, Arial, sans-serif",
    marginTop: "80px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "22px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center",
  },

  brand: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "10px",
    textAlign: "center",
  },

  heading: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#c8ffcc",
  },

  text: {
    fontSize: "14px",
    fontWeight: "500",
    opacity: 0.9,
    textAlign: "center",
  },

  links: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },

  link: {
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
  },

  socialRow: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
    justifyContent: "center",
  },

  socialIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff15",
    fontSize: "20px",
    color: "white",
  },

  map: {
    border: 0,
    borderRadius: "12px",
  },

  bottom: {
    marginTop: "30px",
    paddingTop: "15px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    textAlign: "center",
    fontSize: "14px",
  },
};
