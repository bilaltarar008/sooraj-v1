import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-main fade-up">

        {/* BRAND */}
        <div className="footer-col brand">
          <h2>{t("footer.brand")}</h2>
          <p>{t("footer.tagline")}</p>

          <div className="socials">
            <a href="https://www.facebook.com/p/Sooraj-Crop-Sciences-61555305478429/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/soorajcropsciences/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/sooraj-crop-sciences/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@soorajcropsciences5322" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://wa.me/04235111003" target="_blank" rel="noreferrer"><FaWhatsapp /></a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/about">{t("nav.about")}</Link></li>
            <li><Link to="/products">{t("nav.productPage")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
            <li><Link to="/career">{t("nav.career")}</Link></li>
          </ul>
        </div>

      {/* PRODUCTS */}
<div className="footer-col">
  <h4>{t("footer.products")}</h4>
  <ul>
    <li><Link to="/products">{t("footer.all")}</Link></li>
    <li><Link to="/products">{t("footer.fungicide")}</Link></li>
    <li><Link to="/products">{t("footer.insecticide")}</Link></li>
    <li><Link to="/products">{t("footer.herbicide")}</Link></li>
    <li><Link to="/products">{t("footer.micronutrient")}</Link></li>
    <li><Link to="/products">{t("footer.fertilizer")}</Link></li>
    <li><Link to="/products">{t("footer.granule")}</Link></li>
  </ul>
</div>


        {/* CONTACT + MAP */}
        <div className="footer-col contact">
          <h4>{t("nav.contact")}</h4>

          <div className="contact-row">
            <div className="contact-info">
              <p>📞 {t("footer.phone")}</p>
              <p>✉️ {t("footer.email")}</p>
              <p>📍 {t("footer.location")}</p>
            </div>

            <div className="map-wrapper small-map">
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8676070868432!2d74.2161747!3d31.460239899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdb317556ee1%3A0xa86cfb82b905c2d0!2sSooraj%20Crop%20Sciences%20Warehouse!5e1!3m2!1sen!2s!4v1765800819286!5m2!1sen!2s"           width="100%"
            loading="lazy"
                  title="Sooraj Crop Sciences Location"
                />
            </div>
          </div>
        </div>

      </div> {/* ✅ footer-main CLOSED HERE */}

      <div className="footer-bottom">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
