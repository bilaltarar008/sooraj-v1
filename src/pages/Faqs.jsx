import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/faqs.css"; // create this file for styling

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of fertilizers does your company offer?",
      answer:
        "We provide organic, granular, liquid, and slow-release fertilizers designed for home gardens, crops, and commercial farming. Each product is lab-tested for safety and nutrient balance.",
    },
    {
      question: "Are your fertilizers safe for vegetables and fruit plants?",
      answer:
        "Yes. All our fertilizers are made from high-quality, non-toxic ingredients that are safe for edible plants when used according to instructions.",
    },
    {
      question: "How long does shipping usually take?",
      answer:
        "Orders are typically processed within 24 hours and delivered within 2–4 business days, depending on your location.",
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer:
        "Yes! Farmers, nurseries, landscapers, and retailers can apply for bulk pricing. Contact our sales team for custom quotes.",
    },
    {
      question: "What is the shelf life of your fertilizers?",
      answer:
        "Most fertilizers have a shelf life of 1–2 years if stored in a cool, dry place. Liquid fertilizers should be tightly sealed to maintain potency.",
    },
    {
      question: "How can I choose the right fertilizer for my plants?",
      answer:
        "Our product detail pages list recommended plant types, nutrient ratios, and usage. You can also contact our support team for personalized guidance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className="faq-card"
              layout
              onClick={() => toggleFAQ(index)}
              transition={{ layout: { duration: 0.4, type: "spring" } }}
            >
              <div className="faq-question-row">
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
