import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./i18n";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import products from "./data/products";

// Search dropdown
function SearchResults({ search }) {
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!search || filtered.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "85px",
        right: "80px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        borderRadius: "8px",
        zIndex: 999,
        width: "260px",
        padding: "8px 0",
      }}
    >
      {filtered.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/products/${item.id}`)}
          style={{
            padding: "10px 16px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();
  const isUrdu = i18n.language === "ur";

  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <Router>
      {/* ✅ ONLY FONT SWITCH — NO LAYOUT CHANGE */}
      <div className={isUrdu ? "urdu-font" : ""}>
        <TopHeader />

        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          search={search}
          setSearch={setSearch}
        />

        {isOpen && <SearchResults search={search} />}

        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="*" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
