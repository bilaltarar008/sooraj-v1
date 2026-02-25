// import React, { useState, useRef, useEffect } from "react";
// import MessageBubble from "./MessageBubble";
// import "./chatbot.css";

// const ChatWindow = ({ onClose }) => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "السلام علیکم! آپ اپنا سوال اردو، انگریزی یا پنجابی میں پوچھ سکتے ہیں۔",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [direction, setDirection] = useState("rtl");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom when messages update
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Handle typing direction for input field
//   const handleTypingDirection = (text) => {
//     const urduRegex = /[\u0600-\u06FF]/;
//     setDirection(urduRegex.test(text) ? "rtl" : "ltr");
//   };

//   // Detect language locally (optional, for your frontend logic)
//   // const detectLanguage = (text) => {
//   //   const urduRegex = /[\u0600-\u06FF]/;
//   //   return urduRegex.test(text) ? "ur" : "en";
//   // };

//   // ---- Send user message to backend ----
//   const sendMessageToBackend = async (message) => {
//     if (!message.trim()) return;

//     // Add user's message to chat
//     setMessages((prev) => [...prev, { sender: "user", text: message }]);
//     handleTypingDirection(message);
//     setInput("");
//     setIsTyping(true);

//     try {
//       // Prepare form data for POST request
//       const formData = new FormData();
// formData.append("message", message);
//       // const apiUrl = process.env.REACT_APP_API_URL;
//       // Call your FastAPI backend
//   const response = await fetch("http://127.0.0.1:8000/api/chat/text", {
//   method: "POST",
//   body: formData,
// });


//       if (!response.ok) throw new Error("Backend API error");

//       const data = await response.json();

//       if (data.reply) {
//         // Add backend's reply to chat
//         setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { sender: "bot", text: "⚠️ کوئی جواب نہیں ملا۔" },
//         ]);
//       }
//     } catch (err) {
//       console.error("Error sending message:", err);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ سرور سے رابطہ نہیں ہو سکا۔" },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   // Triggered when user presses Enter or clicks Send
//   const sendMessage = () => {
//     if (!input.trim()) return;
//     sendMessageToBackend(input);
//   };

//   return (
//     <div className="chatbot-window">
//       <div className="chatbot-header">
//         <span>زرعی معلومات</span>
//         <button onClick={onClose}>✖</button>
//       </div>

//       <div className="chatbot-messages">
//         {messages.map((msg, index) => (
//           <MessageBubble key={index} sender={msg.sender} text={msg.text} />
//         ))}
//         {isTyping && <MessageBubble sender="bot" text="⏳ جواب آ رہا ہے..." />}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chatbot-input">
//         <input
//           type="text"
//           placeholder="اپنا سوال یہاں لکھیں..."
//           value={input}
//           style={{ direction }}
//           onChange={(e) => {
//             setInput(e.target.value);
//             handleTypingDirection(e.target.value);
//           }}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>بھیجیں</button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import "./chatbot.css";

/* 🎙️ Voice Recorder */
const VoiceRecorder = ({ onSend }) => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const file = new File([blob], "voice.webm");
      onSend(file);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <button
      className={`voice-btn ${recording ? "recording" : ""}`}
      onClick={recording ? stopRecording : startRecording}
    >
      🎤
    </button>
  );
};

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "السلام علیکم! آپ اردو، پنجابی یا انگریزی میں سوال پوچھ سکتے ہیں",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* 📩 Text Message */
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    const formData = new FormData();
    formData.append("message", userMsg);

    try {
      const res = await fetch("https://sooraj-ai-598501827987.asia-south1.run.app/api/chat/text", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ سرور سے رابطہ نہیں ہو سکا۔" },
      ]);
    }

    setIsTyping(false);
  };

  /* 🎙️ Voice Message */
  const sendVoiceMessage = async (file) => {
    const audioURL = URL.createObjectURL(file);

    setMessages((prev) => [
      ...prev,
      { sender: "user", audio: audioURL },
    ]);

    setIsTyping(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(
  "https://sooraj-ai-598501827987.asia-south1.run.app/api/chat/voice",
  {
    method: "POST",
    body: formData,
  }
);

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ وائس پراسیس نہیں ہو سکی" },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <div className="chatbot-window">

      <div className="chatbot-header">
  <div className="chatbot-header-left">
    <div className="bot-avatar">🌾</div>
    <div>
      زرعی معلومات
      <div className="bot-status">online</div>
    </div>
  </div>

  <button className="chatbot-close-btn" onClick={onClose}>
  ✕
</button>

</div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}

        {isTyping && (
          <div className="typing">
            <span></span><span></span><span></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اپنا سوال لکھیں..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-btn" onClick={sendMessage}>➤</button>

        <VoiceRecorder onSend={sendVoiceMessage} />
      </div>
    </div>

    
  );
};

export default ChatWindow;
