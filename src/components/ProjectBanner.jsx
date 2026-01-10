import React, { useState, useEffect, useCallback } from "react";
import "./ProjectBanner.css";

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
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const slideDuration = 7000;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, slideDuration);
    return () => clearInterval(timer);
  }, [goToNext]);

  const handleStart = (x) => {
    setStartX(x);
    setIsDragging(true);
  };

  const handleEnd = (x) => {
    if (!isDragging || startX === null) return;

    const diff = startX - x;

    if (diff > 50) goToNext();     // swipe left
    if (diff < -50) goToPrev();   // swipe right

    setStartX(null);
    setIsDragging(false);
  };

  return (
    <div
      className="banner-container"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="banner-slide">
            <img
              src={slide.image}
              alt={slide.alt}
              className="banner-image"
              draggable="false"
            />
            <div className="banner-overlay">
              <div className="banner-text" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBanner;
