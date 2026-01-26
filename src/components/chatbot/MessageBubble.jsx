import React from "react";
import "./chatbot.css";

const MessageBubble = ({ sender, text }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default MessageBubble;
