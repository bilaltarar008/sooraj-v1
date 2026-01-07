import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/sooraj-logo.PNG";
import products from "../data/products";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import "./Navbar.css";

export default function Navbar({ search, setSearch }) {
  const location = useLocation();
  const { t } = useTranslation();

  const pages = [
    { key: "Home", path: "/" },
    { key: "About", path: "/about" },
    { key: "Products", path: "/products" },
    { key: "Contact", path: "/contact" },
    { key: "Testimonials", path: "/testimonials" },
    { key: "Career", path: "/career" },
  ];

  const [isOpen, setIsOpen] = useState(false); // search input toggle
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [results, setResults] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value);

    if (!value || value.trim() === "") {
      setResults([]);
      return;
    }

    const q = value.toLowerCase();
    const filtered = products.filter((item) => {
      const enName = item?.name?.en?.toLowerCase?.() || "";
      const urName = item?.name?.ur?.toLowerCase?.() || "";
      const brandEn = item?.brand?.en?.toLowerCase?.() || "";
      const brandUr = item?.brand?.ur?.toLowerCase?.() || "";

      return (
        enName.includes(q) ||
        urName.includes(q) ||
        brandEn.includes(q) ||
        brandUr.includes(q)
      );
    });

    setResults(filtered);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LEFT — Logo */}
        <Link to="/" className="nav-left" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Sooraj Logo" className="nav-logo" />
          <h1 className="nav-title">Sooraj Crop Sciences</h1>
        </Link>

        {/* MOBILE LEFT CONTROLS */}
        <div className="mobile-left-controls">
          <LanguageToggle />
          <div className="hamburger" onClick={() => setMenuOpen((s) => !s)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>

        {/* LINKS */}
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {pages.map((page) => {
            const active = location.pathname === page.path;
            return (
              <Link
                key={page.key}
                to={page.path}
                className={`nav-link ${active ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {t(page.key)}
              </Link>
            );
          })}

          {/* Mobile search (inside mobile menu) */}
          <div className="mobile-search">
            <input
              type="text"
              placeholder={t("search")}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </nav>

        {/* SEARCH (desktop) */}
        <div className="nav-search" role="search">
          <div
            className="search-icon"
            onClick={() => setIsOpen((s) => !s)}
            title={t("search")}
          >
            <FaSearch size={15} />
          </div>

          <input
            type="text"
            value={search}
            placeholder={t("search")}
            onChange={(e) => handleSearchChange(e.target.value)}
            className={`search-input ${isOpen ? "open" : ""}`}
            aria-label={t("search")}
          />

          {/* search results panel — absolute so it won't resize the navbar */}
          {results.length > 0 && (
            <div className="search-results" role="listbox">
              {results.slice(0, 8).map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="search-result-item"
                  onClick={() => setResults([])}
                >
                  {/* Prefer english name when available otherwise urdu */}
                  {item?.name?.en ? item.name.en : item?.name?.ur}
                  {/* optionally show brand short: */}
                  <span className="search-result-sub">
                    {" "}
                    — {item?.brand?.en ? item.brand.en : item?.brand?.ur}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Language toggle (desktop) */}
        <div className="desktop-lang">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
