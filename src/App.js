import React, { useEffect, useState } from "react";
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

/* ===========================
   SEARCH RESULTS DROPDOWN
=========================== */
function SearchResults({ search }) {
  const navigate = useNavigate();

  if (!search) return null;

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 85,
        right: 80,
        width: 260,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        zIndex: 999,
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
            borderBottom: "1px solid #eeeeee",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

/* ===========================
   APP ROOT
=========================== */
export default function App() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation(); // ✅ get i18n here
  const isUrdu = i18n.language === "ur"; // ✅ check if language is Urdu

  /* Fix mobile viewport height issues */
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  return (
    <Router>
      {/* ✅ Apply Urdu font if needed */}
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
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
