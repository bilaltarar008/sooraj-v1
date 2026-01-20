import React, { useEffect } from "react";
import "../styles/testimonials.css";

export default function Testimonials() {
  const reels = [
    "https://www.facebook.com/reel/1641404513891525/",
    "https://www.facebook.com/reel/627314713646157/",
    "https://www.facebook.com/reel/627314713646157/",
  ];

  const reviews = [
    {
      name: "Mr. Ali Khan",
      role: "Farmer",
      review:
        "We have utilized the services for over a year. The technology is reliable and provides real-time information from the field.",
      rating: 5,
    },
    {
      name: "Mrs. Ayesha Raza",
      role: "Agri Consultant",
      review:
        "Highly recommend their services. The deployment in remote areas works flawlessly.",
      rating: 4,
    },
    {
      name: "Mr. Fahad Tariq",
      role: "Farm Owner",
      review:
        "The platform has simplified our monitoring and decision-making process.",
      rating: 4.5,
    },
    {
      name: "Mr. Rana Iqbal",
      role: "Agriculture Researcher",
      review:
        "The insights provided have helped farmers make better decisions and increase productivity.",
      rating: 3.5,
    },
  ];

  useEffect(() => {
    // Parse Facebook embeds after render
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

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
          <h1>Testimonials</h1>
          <p>
            Here are some quotes from professionals in the farming industry. 80%
            of these farmers would recommend our services to others.
          </p>
        </div>
      </section>

      {/* FACEBOOK REELS */}
      <section className="videos-section">
        <h2>Customer Video Testimonials</h2>

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
        <h2>What People Say</h2>

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
