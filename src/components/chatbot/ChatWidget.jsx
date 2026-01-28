import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

const ChatWidget = () => {
  // Chat opens on first load
  const [isOpen, setIsOpen] = useState(true);

  // Track if user manually closed it
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
    setWasClosed(false);
  };

  return (
    <>
      {isOpen && <ChatWindow onClose={handleClose} />}

      {!isOpen && wasClosed && (
        <button className="chatbot-button" onClick={handleOpen}>
          💬
        </button>
      )}
    </>
  );
};

export default ChatWidget;