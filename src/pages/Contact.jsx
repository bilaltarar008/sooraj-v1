import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

/* ================= STYLES ================= */

const inputStyle = {
  width: "100%",
  padding: "14px 12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "0.95rem",
  backgroundColor: "#fff",
};

const labelStyle = {
  position: "absolute",
  top: "-9px",
  left: "12px",
  background: "#fff",
  padding: "0 6px",
  fontSize: "0.75rem",
  color: "#0d6a32",
  fontWeight: "600",
};

/* ================= COMPONENT ================= */

export default function Contact() {
  const { t } = useTranslation();

  /* ✅ SHOW SUCCESS MESSAGE AFTER REDIRECT */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      alert("Thank you! Your message has been sent successfully.");
      window.history.replaceState({}, document.title, "/contact");
    }
  }, []);

  return (
    <section
      style={{
        padding: "40px 5% 70px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#0d6a32",
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        {t("contact.title")}
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* ================= FORM ================= */}
        <div
          style={{
            flex: "1 1 450px",
            background: "#ffffff",
            padding: "45px",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              color: "#0d6a32",
              marginBottom: "30px",
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {t("contact.sendMessage")}
          </h3>

          {/* ✅ FORM SUBMIT */}
          <form
  action="https://formsubmit.co/soorajcropsciences@gmail.com"
  method="POST"
  style={{ display: "flex", flexDirection: "column", gap: "20px" }}
>
  {/* 🔒 FormSubmit configuration */}
  <input type="hidden" name="_captcha" value="false" />

  <input
    type="hidden"
    name="_subject"
    value="New message from Sooraj Crop Sciences website"
  />

  {/* 🔁 Redirect after success */}
  <input
    type="hidden"
    name="_next"
    value="https://soorajcropsciences.com/contact"
  />

  <input type="hidden" name="_template" value="table" />

  {/* 👤 Name */}
  <div style={{ position: "relative" }}>
    <input
      type="text"
      name="name"
      required
      placeholder=" "
      style={inputStyle}
    />
    <label style={labelStyle}>{t("contact.name")}</label>
  </div>

  {/* 📧 Email */}
  <div style={{ position: "relative" }}>
    <input
      type="email"
      name="email"
      required
      placeholder=" "
      style={inputStyle}
    />
    <label style={labelStyle}>{t("contact.email")}</label>
  </div>

  {/* 💬 Message */}
  <div style={{ position: "relative" }}>
    <textarea
      name="message"
      rows="5"
      required
      placeholder=" "
      style={{ ...inputStyle, resize: "none" }}
    />
    <label style={labelStyle}>{t("contact.message")}</label>
  </div>

  {/* 🚀 Submit */}
  <button
    type="submit"
    style={{
      marginTop: "10px",
      background: "linear-gradient(135deg, #00A651, #0d6a32)",
      color: "#fff",
      border: "none",
      padding: "14px",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
    }}
  >
    {t("contact.send")}
  </button>
</form>

        </div>

        {/* ================= CONTACT INFO ================= */}
        <ContactInfo />
      </div>

      {/* ================= MAP ================= */}
<div style={{ marginTop: "60px", textAlign: "center" }}>
  <iframe
    title="office-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.8676070868432!2d74.2161747!3d31.460239899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fdb317556ee1%3A0xa86cfb82b905c2d0!2sSooraj%20Crop%20Sciences%20Warehouse!5e1!3m2!1sen!2s!4v1765800819286!5m2!1sen!2s"
    width="100%"
    height="350"
    style={{
      border: 0,
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

    </section>
  );
}

/* ================= CONTACT INFO ================= */

function ContactInfo() {
  return (
    <div
      style={{
        flex: "1 1 350px",
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #00A651, #0d6a32)",
          padding: "22px",
          color: "#ffffff",
          fontWeight: "700",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Contact Info
      </div>

      <div style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <Info icon={<FaEnvelope />} title="Email" value="SoorajCropScience@gmail.com" link="mailto:SoorajCropScience@gmail.com" />
        <Info icon={<FaWhatsapp />} title="WhatsApp" value="Chat Now" link="https://wa.me/924235111003" />
        <Info icon={<FaPhone />} title="Phone" value="04235111003" link="tel:04235111003" />
        <Info icon={<FaMapMarkerAlt />} title="Office" value="Apartment 01 Floor 02 Almeezan Arcade 24-CCA, Khayaban E Ameen, Lahore, 54770, Pakistan" />
        <Info icon={<FaClock />} title="Hours" value="Mon–Fri, 9AM–6PM" />
      </div>
    </div>
  );
}

function Info({ icon, title, value, link }) {
  return (
    <div style={{ display: "flex", gap: "14px", padding: "14px", borderRadius: "10px", background: "#f8f9fa" }}>
      <div
        style={{
          minWidth: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "#00A651",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
        }}
      >
        {icon}
      </div>

      <div>
        <div style={{ fontWeight: "700", color: "#0d6a32" }}>{title}</div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" style={{ color: "#2F59E6", textDecoration: "none" }}>
            {value}
          </a>
        ) : (
          <div style={{ color: "#555" }}>{value}</div>
        )}
      </div>
    </div>
  );
}
