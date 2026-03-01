// // import React from "react";
// // import "./chatbot.css";

// // const MessageBubble = ({ sender, text }) => {
// //     const urduRegex = /[\u0600-\u06FF]/;
// //     const dir = urduRegex.test(text) ? "rtl" : "ltr";
  
// //     return (
// //       <div className={`message ${sender}`} style={{ direction: dir }}>
// //         <p>{text}</p>
// //       </div>
// //     );
// //   };
  

// // export default MessageBubble;


// import React from "react";
// import "./chatbot.css";

// const MessageBubble = ({ sender, text, audio }) => {
//   return (
//     <div className={`message ${sender}`}>
//       {text && <p>{text}</p>}
//       {audio && <audio controls src={audio}></audio>}
//     </div>
//   );
// };

// export default MessageBubble;
import React from "react";
import "./chatbot.css";

const MessageBubble = ({ sender, text, audio }) => {
  return (
    <div className={`message ${sender}`}>
      {audio ? (
        <>
          {text && <p>{text}</p>}
          <audio controls playsInline className="audio-player" src={audio} />
        </>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default MessageBubble;
