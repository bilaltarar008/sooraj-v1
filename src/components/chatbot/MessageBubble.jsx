import React from "react";
import "./chatbot.css";

const MessageBubble = ({ sender, text, audio }) => {
  return (
    <div className={`message ${sender}`}>
      {text && <p>{text}</p>}
      {audio && <audio controls src={audio} className="audio-player" />}
    </div>
  );
};

export default MessageBubble;