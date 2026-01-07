import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/testimonials.css";

Modal.setAppElement("#root");

export default function Testimonials() {
  const [videos, setVideos] = useState([]);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    const fbVideos = [
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1641404513891525%2F&show_text=false&width=267&t=0",
        title: "Customer Video 1",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F627314713646157%2F&show_text=false&width=264&t=0",
        title: "Customer Video 2",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61555305478429%2Fvideos%2F1962449581187974%2F&show_text=false&width=476&t=0",
        title: "Customer Video 3",
      },
    ];

    fetch("/data/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos([...fbVideos, ...data]))
      .catch(() => setVideos(fbVideos));
  }, []);

  const reviews = [
    {
      name: "Mr. Ali Khan",
      role: "Farmer",
      review:
        "We have utilized the services for over a year. The technology is reliable and provides real-time information from the field.",
    },
    {
      name: "Mrs. Ayesha Raza",
      role: "Agri Consultant",
      review:
        "Highly recommend their services. The deployment in remote areas works flawlessly.",
    },
    {
      name: "Mr. Fahad Tariq",
      role: "Farm Owner",
      review:
        "The platform has simplified our monitoring and decision-making process.",
    },
  ];

  const openModal = (video) => setModalVideo(video);
  const closeModal = () => setModalVideo(null);

  return (
    <div className="testimonials-page" style={{ background: "#f7fdf7" }}>
      {/* HERO SECTION */}
      <section
        className="testimonials-hero"
        style={{
          backgroundImage: `url("/images/testimonials-hero-image.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Testimonials</h1>
          <p>
            Here are some quotes from professionals in the farming industry. 80%
            of these farmers would recommend our services to others. Take a look
            at what people are saying.
          </p>
        </div>
      </section>

      {/* VIDEOS GRID */}
      <section className="videos-section">
        <h2>Customer Video Testimonials</h2>
        <div className="video-grid">
          {videos.map((video, i) => (
            <div
              key={i}
              className="video-card"
              onClick={() => openModal(video)}
            >
              <div className="video-wrapper">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <Modal
        isOpen={!!modalVideo}
        onRequestClose={closeModal}
        className="video-modal"
        overlayClassName="video-overlay"
      >
        {modalVideo && (
          <div className="video-wrapper modal-wrapper">
            <iframe
              src={modalVideo.url}
              title={modalVideo.title}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button onClick={closeModal} className="modal-close">
          ×
        </button>
      </Modal>

      {/* WRITTEN REVIEWS */}
      <section className="reviews-section">
        <h2>What People Say</h2>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
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
