// import React, { useState, useMemo } from "react";
// import { useTranslation } from "react-i18next";
// import "./VideoSection.css";

// // ====================== YOUTUBE ID EXTRACTOR ======================
// const getYouTubeId = (url) => {
//   if (!url) return "";
//   if (url.length === 11) return url;

//   const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//   const match = url.match(regex);

//   return match ? match[1] : "";
// };

// // ====================== SINGLE VIDEO CARD ======================
// const YouTubeCard = ({ link, title, large }) => {
//   const videoId = useMemo(() => getYouTubeId(link), [link]);
//   const [play, setPlay] = useState(false);
//   const [thumbUrl, setThumbUrl] = useState(
//     videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ""
//   );

//   const handleThumbError = () => {
//     if (thumbUrl.includes("maxresdefault")) {
//       setThumbUrl(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`);
//     } else if (thumbUrl.includes("sddefault")) {
//       setThumbUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
//     }
//   };

//   if (!videoId) return null;

//   const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

//   return (
//     <div className={`video-card ${large ? "large" : "small"}`}>
//       {play ? (
//         <iframe src={embedUrl} title={title} allow="autoplay; encrypted-media" allowFullScreen></iframe>
//       ) : (
//         <div
//           className="thumbnail"
//           style={{ backgroundImage: `url(${thumbUrl})` }}
//           onClick={() => setPlay(true)}
//         >
//           <img src={thumbUrl} alt={title} onError={handleThumbError} style={{ display: "none" }} />

//           <div className="overlay"></div>

//           <div className="playBtn">▶</div>

//           <h3 className="videoTitle">{title}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// // ====================== MAIN VIDEO SECTION ======================
// export default function VideoSection() {
//   const { t } = useTranslation();
//   const videos = [
//     { link: "https://www.youtube.com/watch?v=B8CJZX55D9s",
//        title: t("video1Title")
//     },

//     { link: "https://www.youtube.com/watch?v=ljrDiz5ExKI",
//        title: t("video2Title") 
//     },
    
//     { link: "https://www.youtube.com/watch?v=G7JEmNY1Rss", 
//       title: t("video3Title") 
//     },
//   ];

//   return (
//     <section className="video-container">
//       <div className="headerRow">
//         <h2>{t("videoHeading")}</h2>
//         <a
//           href="https://www.youtube.com/@soorajcropsciences5322"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="channelBtn"
//         >
//           {t("visitChannel")}
//         </a>
//       </div>

//       <div className="video-grid">
//         <YouTubeCard link={videos[0].link} title={videos[0].title} large />
//         <div className="smallVideos">
//           <YouTubeCard link={videos[1].link} title={videos[1].title} />
//           <YouTubeCard link={videos[2].link} title={videos[2].title} />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "./VideoSection.css";

// ====================== YOUTUBE ID EXTRACTOR ======================
const getYouTubeId = (url) => {
  if (!url) return "";
  if (url.length === 11) return url;

  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  return match ? match[1] : "";
};

// ====================== SINGLE VIDEO CARD ======================
const YouTubeCard = ({ link, title, large, thumbnail }) => { // Add thumbnail prop here
  const videoId = useMemo(() => getYouTubeId(link), [link]);
  const [play, setPlay] = useState(false);
  
  // Use custom thumbnail if provided, otherwise use YouTube's thumbnail
  const [thumbUrl, setThumbUrl] = useState(
    thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "")
  );

  const handleThumbError = () => {
    // If using custom thumbnail and it fails, fall back to YouTube thumbnails
    if (thumbnail) {
      // Custom thumbnail failed, switch to YouTube's thumbnails
      setThumbUrl(videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "");
    } else if (thumbUrl.includes("maxresdefault")) {
      setThumbUrl(`https://img.youtube.com/vi/${videoId}/sddefault.jpg`);
    } else if (thumbUrl.includes("sddefault")) {
      setThumbUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className={`video-card ${large ? "large" : "small"}`}>
      {play ? (
        <iframe src={embedUrl} title={title} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      ) : (
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${thumbUrl})` }}
          onClick={() => setPlay(true)}
        >
          <img 
            src={thumbUrl} 
            alt={title} 
            onError={handleThumbError} 
            style={{ display: "none" }} 
          />

          <div className="overlay"></div>

          <div className="playBtn">▶</div>

          <h3 className="videoTitle">{title}</h3>
        </div>
      )}
    </div>
  );
};

// ====================== MAIN VIDEO SECTION ======================
export default function VideoSection() {
  const { t } = useTranslation();
  const videos = [
    { 
      link: "https://www.youtube.com/watch?v=B8CJZX55D9s",
      title: t("video1Title"),
      thumbnail: null // No custom thumbnail for first video
    },
    { 
      link: "https://www.youtube.com/watch?v=t_VMUQRCVZc",
      title: t("video2Title"),
      thumbnail: "/thumbnails/main-banner2.jpg" // Custom thumbnail
    },
    { 
      link: "https://www.youtube.com/watch?v=G7JEmNY1Rss", 
      title: t("video3Title"),
      thumbnail: "/thumbnails/main-banner3.jpg" // Custom thumbnail
    },
  ];

  return (
    <section className="video-container">
      <div className="headerRow">
        <h2>{t("videoHeading")}</h2>
        <a
          href="https://www.youtube.com/@soorajcropsciences5322"
          target="_blank"
          rel="noopener noreferrer"
          className="channelBtn"
        >
          {t("visitChannel")}
        </a>
      </div>

      <div className="video-grid">
        <YouTubeCard 
          link={videos[0].link} 
          title={videos[0].title} 
          large 
          thumbnail={videos[0].thumbnail} // Pass thumbnail prop
        />
        <div className="smallVideos">
          <YouTubeCard 
            link={videos[1].link} 
            title={videos[1].title} 
            thumbnail={videos[1].thumbnail} // Pass thumbnail prop
          />
          <YouTubeCard 
            link={videos[2].link} 
            title={videos[2].title} 
            thumbnail={videos[2].thumbnail} // Pass thumbnail prop
          />
        </div>
      </div>
    </section>
  );
}