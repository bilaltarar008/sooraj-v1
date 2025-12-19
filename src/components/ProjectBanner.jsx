import React, { useState, useEffect, useCallback } from "react";
import "./ProjectBanner.css"; // We'll create this CSS file

// ====================== Banner Slider Component ======================
const ProjectBanner = () => {
  const slides = [
    {
      id: 1,
      image: require("../assets/main-solgan.jpeg"),
      alt: "Main Project Banner 1",
    },
    {
      id: 2,
      image: require("../assets/main-solgan1.jpeg"),
      alt: "Main Project Banner 2",
    },
    {
      id: 3,
      image: require("../assets/main-solgan2.jpeg"),
      alt: "Main Project Banner 3",
    //   caption: "Explore Our Latest Achievements",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 7000;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, slideDuration);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="banner-container">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="banner-slide">
            <img src={slide.image} alt={slide.alt} className="banner-image" />
            <div className="banner-overlay">
              <div className="banner-text">
                <h2>{slide.caption}</h2>
                {/* <button onClick={goToNext}>Learn More</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBanner;
