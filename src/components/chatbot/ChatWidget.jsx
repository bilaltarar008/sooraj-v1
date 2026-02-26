import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [wasClosed, setWasClosed] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setWasClosed(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* 💬 CHAT WINDOW */}
      {isOpen && <ChatWindow onClose={handleClose} />}

      {/* 💬 FLOATING LAUNCHER */}
      {!isOpen && wasClosed && (
        <button className="chatbot-launcher" onClick={handleOpen}>
          💬
        </button>
      )}
    </>
  );
};

export default ChatWidget;
