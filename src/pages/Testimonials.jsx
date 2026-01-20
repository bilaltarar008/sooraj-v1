import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/testimonials.css";

export default function Testimonials() {
  const { t } = useTranslation();

  const reels = [
    "https://www.facebook.com/reel/1641404513891525/",
    "https://www.facebook.com/reel/627314713646157/",
    "https://www.facebook.com/reel/627314713646157/",
  ];

  const reviews = [
    {
      name: t("testimonials.reviews.0.name"),
      role: t("testimonials.reviews.0.role"),
      review: t("testimonials.reviews.0.text"),
      rating: 5,
    },
    {
      name: t("testimonials.reviews.1.name"),
      role: t("testimonials.reviews.1.role"),
      review: t("testimonials.reviews.1.text"),
      rating: 4,
    },
    {
      name: t("testimonials.reviews.2.name"),
      role: t("testimonials.reviews.2.role"),
      review: t("testimonials.reviews.2.text"),
      rating: 4.5,
    },
    {
      name: t("testimonials.reviews.3.name"),
      role: t("testimonials.reviews.3.role"),
      review: t("testimonials.reviews.3.text"),
      rating: 3.5,
    },
  ];

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [t]); // re-parse when language changes

  return (
    <div className="testimonials-page">
      {/* HERO */}
      <section
        className="testimonials-hero"
        style={{
          backgroundImage: `url("/images/testimonials-hero-image.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t("testimonials.heroTitle")}</h1>
          <p>{t("testimonials.heroDescription")}</p>
        </div>
      </section>

      {/* FACEBOOK REELS */}
      <section className="videos-section">
        <h2>{t("testimonials.videoSectionTitle")}</h2>

        <div className="video-grid">
          {reels.map((url, index) => (
            <div key={index} className="video-card">
              <div
                className="fb-video"
                data-href={url}
                data-width="300"
                data-show-text="false"
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* WRITTEN REVIEWS */}
      <section className="reviews-section">
        <h2>{t("testimonials.reviewsSectionTitle")}</h2>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => {
                  if (r.rating >= star) {
                    return (
                      <span key={star} className="star filled">
                        ★
                      </span>
                    );
                  } else if (r.rating >= star - 0.5) {
                    return (
                      <span key={star} className="star half">
                        <span className="half-filled">★</span>
                        <span className="half-empty">★</span>
                      </span>
                    );
                  } else {
                    return (
                      <span key={star} className="star unfilled">
                        ★
                      </span>
                    );
                  }
                })}
              </div>

              <p className="review-text">"{r.review}"</p>
              <h4 className="reviewer-name">{r.name}</h4>
              <span className="reviewer-role">{r.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
