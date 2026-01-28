import React, { useState } from "react";
import { useRef, useEffect } from "react";

import MessageBubble from "./MessageBubble";
import "./chatbot.css";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "السلام علیکم! آپ اپنا سوال اردو، انگریزی یا پنجابی میں پوچھ سکتے ہیں۔",
    },
  ]);

  const [input, setInput] = useState("");

  const detectLanguage = (text) => {
    const urduRegex = /[\u0600-\u06FF]/;
  
    if (urduRegex.test(text)) {
      return "ur";
    }
  
    return "en";
  };

  const [direction, setDirection] = useState("rtl");

  
  const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  const [isTyping, setIsTyping] = useState(false);

  const handleTypingDirection = (text) => {
    const urduRegex = /[\u0600-\u06FF]/;
  
    if (urduRegex.test(text)) {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  };
  

  const sendMessage = () => {
    if (!input.trim()) return;

    // User message (any language allowed)
    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Dummy Urdu-only bot reply (AI later)
    setTimeout(() => {
        const lang = detectLanguage(input);
      
        const botReply =
          lang === "ur"
            ? "میں آپ کی بات سمجھنے کی کوشش کر رہا ہوں۔ براہِ کرم فصل یا مسئلہ واضح کریں۔"
            : "I am trying to understand your query. Please mention the crop or the problem clearly.";
      
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: botReply,
          },
        ]);
      
        setIsTyping(false);
      }, 1000);
      
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