import React from "react";
import "./chatbot.css";

const MessageBubble = ({ sender, text }) => {
    const urduRegex = /[\u0600-\u06FF]/;
    const dir = urduRegex.test(text) ? "rtl" : "ltr";
  
    return (
      <div className={`message ${sender}`} style={{ direction: dir }}>
        <p>{text}</p>
      </div>
    );
  };
  

export default MessageBubble;
