"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  headline: string;
  items: FAQItem[];
  calendlyLink?: string;
}

export default function FAQMagiq({ headline, items, calendlyLink }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141414] tracking-tight mb-8">
            {headline}
          </h2>

          {/* Talk to Sales CTA */}
          {calendlyLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-lg text-gray-600 mb-2">
                Have questions? Let&apos;s chat about how MagiQ AI can help your
                sales team.
              </p>
              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Talk to Sales
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* FAQ Items - Only render if items exist */}
        {items && items.length > 0 && (
          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
