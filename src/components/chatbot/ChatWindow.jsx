import React, { useState } from "react";
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
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    // User message (any language allowed)
    const userMessage = { sender: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Dummy Urdu-only bot reply (AI later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "میں آپ کی بات سمجھنے کی کوشش کر رہا ہوں۔ براہِ کرم فصل یا مسئلہ واضح کریں۔",
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="chatbot-window rtl">
      <div className="chatbot-header">
        <span>زرعی معاون</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} sender={msg.sender} text={msg.text} />
        ))}

        {isTyping && (
          <MessageBubble sender="bot" text="جواب تیار ہو رہا ہے..." />
        )}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="اپنا سوال یہاں لکھیں..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>بھیجیں</button>
      </div>
    </div>
  );
};

export default ChatWindow;
