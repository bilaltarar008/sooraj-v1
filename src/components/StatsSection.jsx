// Stats Section — Smooth Professional Version
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useTranslation } from "react-i18next";

/* ===============================
   ICONS — BALANCED SIZE
================================ */
const IconWrap = ({ children }) => (
  <div style={{ marginBottom: "10px" }}>{children}</div>
);

const UsersIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.2" stroke="#4CAF50" strokeWidth="2" />
    <path d="M5 21v-2a7 7 0 0 1 14 0v2" stroke="#4CAF50" strokeWidth="2" />
  </svg>
);

const RocketIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C16.5 3.6 19.5 7.4 20 12C14.2 12.4 10.5 9.2 9.2 5.4L12 2Z"
      stroke="#76FF03"
      strokeWidth="2"
    />
  </svg>
);

const ClientsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.2" stroke="#2E7D32" strokeWidth="2" />
    <path d="M5 21v-1.5a7 7 0 0 1 14 0V21" stroke="#2E7D32" strokeWidth="2" />
  </svg>
);

const AwardIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4.2" stroke="#7CB342" strokeWidth="2" />
    <path d="M7 14h10l1.4 7-6-2-6 2 1.6-7z" stroke="#7CB342" strokeWidth="2" />
  </svg>
);

const ICONS = {
  users: <UsersIcon />,
  projects: <RocketIcon />,
  clients: <ClientsIcon />,
  awards: <AwardIcon />,
};

/* ===============================
   STAT CARD — SMOOTH & CLEAN
================================ */
function StatCard({ icon, label, target, index, isInView }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2.6,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "24px 18px",
        textAlign: "center",
        boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
      }}
    >
      <IconWrap>{ICONS[icon]}</IconWrap>

      <div
        style={{
          fontSize: "1.9rem",
          fontWeight: "800",
          color: "#0c6b2c",
          lineHeight: "1.2",
        }}
      >
        <motion.span>{rounded}</motion.span>+
      </div>

      <p
        style={{
          marginTop: "6px",
          fontSize: "0.95rem",
          fontWeight: "600",
          fontFamily: "Noto Nastaliq Urdu, Noori Nastaleeq, serif",
          color: "#333",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

/* ===============================
   MAIN SECTION — POLISHED SIZE
================================ */
export default function StatsSection() {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isUrdu = i18n.language === "ur";

  const stats = [
    { label: t("stats.members"), target: 1200, icon: "users" },
    { label: t("stats.projects"), target: 85, icon: "projects" },
    { label: t("stats.clients"), target: 240, icon: "clients" },
    { label: t("stats.awards"), target: 15, icon: "awards" },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "38px 0", // ✅ slightly bigger but still tight
        background: "#f4fff7",
        direction: "ltr",
      }}
    >
      <h1
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          fontWeight: "800",
          color: "#0d6a32",
          marginBottom: "24px",
          fontFamily: isUrdu
            ? "Noto Nastaliq Urdu, Noori Nastaleeq, serif"
            : "inherit",
        }}
      >
        {t("stats.title")}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "20px",
          width: "88%",
          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <StatCard
            key={index}
            index={index}
            {...item}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
