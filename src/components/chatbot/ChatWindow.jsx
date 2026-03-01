// import React, { useState, useRef, useEffect } from "react";
// import MessageBubble from "./MessageBubble";
// import "./chatbot.css";

// /* 🎙️ Voice Recorder */
// // const VoiceRecorder = ({ onSend }) => {
// //   const [recording, setRecording] = useState(false);
// //   const mediaRecorderRef = useRef(null);
// //   const chunksRef = useRef([]);

// //   const startRecording = async () => {
// //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

// //     const recorder = new MediaRecorder(stream);
// //     mediaRecorderRef.current = recorder;
// //     chunksRef.current = [];

// //     recorder.ondataavailable = (e) => {
// //       if (e.data.size > 0) chunksRef.current.push(e.data);
// //     };

// //     recorder.onstop = () => {
// //       const blob = new Blob(chunksRef.current, { type: "audio/webm" });
// //       const file = new File([blob], "voice.webm");
// //       onSend(file);
// //     };

// //     recorder.start();
// //     setRecording(true);
// //   };

// //   const stopRecording = () => {
// //     mediaRecorderRef.current.stop();
// //     setRecording(false);
// //   };

// //   return (
// //     <button
// //       className={`voice-btn ${recording ? "recording" : ""}`}
// //       onClick={recording ? stopRecording : startRecording}
// //     >
// //       🎤
// //     </button>
// //   );
// // };
// const VoiceRecorder = ({ onSend }) => {
//   const [recording, setRecording] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const chunksRef = useRef([]);
//   const streamRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       streamRef.current?.getTracks().forEach((t) => t.stop());
//     };
//   }, []);

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     streamRef.current = stream;

//     const recorder = new MediaRecorder(stream);
//     mediaRecorderRef.current = recorder;
//     chunksRef.current = [];

//     recorder.ondataavailable = (e) => {
//       if (e.data.size > 0) chunksRef.current.push(e.data);
//     };

//     recorder.onstop = () => {
//       const blob = new Blob(chunksRef.current, { type: "audio/webm" });
//       const file = new File([blob], "voice.webm");
//       onSend(file);
//     };

//     recorder.start();
//     setRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current?.stop();
//     streamRef.current?.getTracks().forEach((track) => track.stop());
//     streamRef.current = null;
//     setRecording(false);
//   };

//   return (
//     <button
//       className={`voice-btn ${recording ? "recording" : ""}`}
//       onClick={recording ? stopRecording : startRecording}
//     >
//       🎤
//     </button>
//   );
// };
// const ChatWindow = ({ onClose }) => {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "السلام علیکم! آپ اردو، پنجابی یا انگریزی میں سوال پوچھ سکتے ہیں۔",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   /* 📩 Text Message */
//   // const sendMessage = async () => {
//   //   if (!input.trim()) return;

//   //   const userMsg = input;
//   //   setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
//   //   setInput("");
//   //   setIsTyping(true);

//   //   const formData = new FormData();
//   //   formData.append("message", userMsg);

//   //   try {
//   //     const res = await fetch("http://127.0.0.1:8000/api/chat/text", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     const data = await res.json();

//   //     setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
//   //   } catch {
//   //     setMessages((prev) => [
//   //       ...prev,
//   //       { sender: "bot", text: "⚠️ سرور سے رابطہ نہیں ہو سکا۔" },
//   //     ]);
//   //   }

//   //   setIsTyping(false);
//   // };
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = input;
//     setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
//     setInput("");
//     setIsTyping(true);

//     const formData = new FormData();
//     formData.append("message", userMsg);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/chat/text", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);

//       // 🔊 Play bot reply audio if available
//       if (data.audio_url) {
//         const audio = new Audio(`http://127.0.0.1:8000${data.audio_url}`);
//         audio.play();
//       }
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ سرور سے رابطہ نہیں ہو سکا۔" },
//       ]);
//     }

//     setIsTyping(false);
//   };
//   /* 🎙️ Voice Message */
//   // const sendVoiceMessage = async (file) => {
//   //   const audioURL = URL.createObjectURL(file);

//   //   setMessages((prev) => [...prev, { sender: "user", audio: audioURL }]);

//   //   setIsTyping(true);

//   //   const formData = new FormData();
//   //   formData.append("file", file);

//   //   try {
//   //     const res = await fetch("http://127.0.0.1:8000/api/chat/voice", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     const data = await res.json();

//   //     setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
//   //   } catch {
//   //     setMessages((prev) => [
//   //       ...prev,
//   //       { sender: "bot", text: "⚠️ وائس پراسیس نہیں ہو سکی" },
//   //     ]);
//   //   }

//   //   setIsTyping(false);
//   // };
//   const sendVoiceMessage = async (file) => {
//     const audioURL = URL.createObjectURL(file);
//     setMessages((prev) => [...prev, { sender: "user", audio: audioURL }]);
//     setIsTyping(true);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/chat/voice", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);

//       // 🔊 Play TTS audio automatically
//       if (data.audio_url) {
//         const audio = new Audio(`http://127.0.0.1:8000${data.audio_url}`);
//         audio.play();
//       }
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ وائس پراسیس نہیں ہو سکی" },
//       ]);
//     }

//     setIsTyping(false);
//   };
//   return (
//     <div className="chatbot-window">
//       <div className="chatbot-header">
//         <div className="chatbot-header-left">
//           <div className="bot-avatar">🌾</div>
//           <div>
//             زرعی معلومات
//             <div className="bot-status">online</div>
//           </div>
//         </div>

//         <button className="chatbot-close-btn" onClick={onClose}>
//           ✕
//         </button>
//       </div>

//       <div className="chatbot-messages">
//         {messages.map((msg, i) => (
//           <MessageBubble key={i} {...msg} />
//         ))}

//         {isTyping && (
//           <div className="typing">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chatbot-input">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="اپنا سوال لکھیں..."
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button className="send-btn" onClick={sendMessage}>
//           ➤
//         </button>

//         <VoiceRecorder onSend={sendVoiceMessage} />
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import "./chatbot.css";

const BACKEND = "https://sooraj-ai-598501827987.asia-south1.run.app";

/* 🎙️ Voice Recorder */
const VoiceRecorder = ({ onSend }) => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    chunksRef.current = [];

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const mimeType = MediaRecorder.isTypeSupported("audio/mp4")
        ? "audio/mp4"
        : "audio/webm";

      const blob = new Blob(chunksRef.current, { type: mimeType });

      const file = new File(
        [blob],
        `voice.${mimeType.includes("mp4") ? "mp4" : "webm"}`,
        { type: mimeType }
      );

      onSend(file);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
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
  const [currentAudio, setCurrentAudio] = useState(null);

  const audioRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const playAudio = (url) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(url);
    audioRef.current = audio;
    setCurrentAudio(audio);

    audio.play().catch(() => {});
    audio.onended = () => setCurrentAudio(null);
  };

  /* 📩 TEXT MESSAGE */
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input;

    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    const formData = new FormData();
    formData.append("message", userMsg);

    try {
      const res = await fetch(`${BACKEND}/api/chat/text`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);

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

  /* 🎙️ VOICE MESSAGE */
  const sendVoiceMessage = async (file) => {
    const audioURL = URL.createObjectURL(file);

    // show user voice
    setMessages((prev) => [...prev, { sender: "user", audio: audioURL }]);
    setIsTyping(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${BACKEND}/api/chat/voice`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.audio_url) {
        const fullUrl = BACKEND + data.audio_url;

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.reply,
            audio: fullUrl,
          },
        ]);

        playAudio(fullUrl);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.reply },
        ]);
      }
    } catch (err) {
      console.error(err);

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
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 🎧 GLOBAL AUDIO CONTROLS */}
      {currentAudio && (
        <div className="audio-controls">
          <button
            onClick={() => {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              setCurrentAudio(null);
            }}
          >
            ⏹ Stop
          </button>

          <button
            onClick={() => {
              if (audioRef.current.paused) audioRef.current.play();
              else audioRef.current.pause();
            }}
          >
            ⏯ Play / Pause
          </button>
        </div>
      )}

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اپنا سوال لکھیں..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button className="send-btn" onClick={sendMessage}>
          ➤
        </button>

        <VoiceRecorder onSend={sendVoiceMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;