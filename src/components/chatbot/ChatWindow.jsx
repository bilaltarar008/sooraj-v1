import React, { useState } from "react";
import { useRef, useEffect } from "react";

import MessageBubble from "./MessageBubble";
import "./chatbot.css";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [direction, setDirection] = useState("rtl");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch initial greeting from backend when chat opens
  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/chat/text", {
          method: "POST",
          body: new FormData(), // sending empty message
        });
        const data = await response.json();
        setMessages([{ sender: "bot", text: data.reply }]);
      } catch (err) {
        setMessages([
          {
            sender: "bot",
            text: " پ اپنا سوال اردو، انگریزی، یا پنجابی میں لکھ سکتے ہیں۔",
          },
        ]);
      }
    };

    fetchGreeting();
  }, []); // runs once when component mounts

  const [isTyping, setIsTyping] = useState(false);

  const handleTypingDirection = (text) => {
    const urduRegex = /[\u0600-\u06FF]/;

    if (urduRegex.test(text)) {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    // 1️⃣ Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setIsTyping(true);

    try {
      // 2️⃣ Send message to backend
      const formData = new FormData();
      formData.append("message", userText);

      const response = await fetch("http://127.0.0.1:8000/api/chat/text", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // 3️⃣ Show backend reply
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "معاف کریں، سرور سے رابطہ نہیں ہو سکا۔",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>زرعی معلومات</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}

        {isTyping && (
          <MessageBubble sender="bot" text="جواب تیار ہو رہا ہے..." />
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="اپنا سوال یہاں لکھیں..."
          value={input}
          style={{ direction: direction }}
          onChange={(e) => {
            setInput(e.target.value);
            handleTypingDirection(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>بھیجیں</button>
      </div>
    </div>
  );
};

export default ChatWindow;
