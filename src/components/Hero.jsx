import React, { useEffect, useState } from "react";
import img1 from "../assets/main-banner.jpg";
import img2 from "../assets/main-banner2.jpg";
import img3 from "../assets/main-banner3.jpg";
import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* LEFT TEXT */}
      <div className="hero-text">
  <h3 className="hero-title">{t("heroTitle")}</h3>
  <h5 className="hero-para primary">{t("heroPara1")}</h5>
  <h5 className="hero-para secondary">{t("heroPara2")}</h5>
</div>


      {/* HERO IMAGE SLIDER */}
      <div className="hero-carousel">
        <img key={index} src={images[index]} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
