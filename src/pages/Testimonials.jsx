import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/testimonials.css";

Modal.setAppElement("#root"); // Required for accessibility

export default function Testimonials() {
  const [videos, setVideos] = useState([]);
  const [modalVideo, setModalVideo] = useState(null);

  // Facebook videos
  useEffect(() => {
    const fbVideos = [
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1641404513891525%2F&show_text=false&width=267&t=0",
        customer: "Ali Khan",
        text: "This product changed the way I handle my crops!",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F627314713646157%2F&show_text=false&width=264&t=0",
        customer: "Sara Ahmed",
        text: "Amazing results, highly recommend it to everyone.",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F61555305478429%2Fvideos%2F1962449581187974%2F&show_text=false&width=476&t=0",
        customer: "Hassan Raza",
        text: "Great product, excellent support from the team.",
      },
    ];

    fetch("/data/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos([...fbVideos, ...data]))
      .catch((err) => {
        console.error("Failed to load videos:", err);
        setVideos(fbVideos); // fallback to FB videos
      });
  }, []);

  const openModal = (video) => setModalVideo(video);
  const closeModal = () => setModalVideo(null);

  return (
    <div className="testimonials-container">
      <h1 className="page-title">Customer Testimonials</h1>
      <p className="page-subtitle">
        Hear directly from our customers about their experience with our
        products.
      </p>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-card"
            onClick={() => openModal(video)}
          >
            <div className="video-wrapper">
              <iframe
                src={video.url}
                title={`testimonial-${index}`}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{video.customer || "Customer"}</h3>
              <p>{video.text || "Amazing testimonial from our customer."}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal popup */}
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
              title="testimonial video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h3 style={{ color: "#fff", marginTop: "10px" }}>
              {modalVideo.customer}
            </h3>
            <p style={{ color: "#ddd" }}>{modalVideo.text}</p>
          </div>
        )}
        <button onClick={closeModal} className="modal-close">
          ×
        </button>
      </Modal>
    </div>
  );
}
