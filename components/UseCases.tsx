"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { getIcon } from "@/utils/iconMap";

interface UseCase {
  icon: string;
  title: string;
  challenge: string;
  solution: Array<string>;
  results: Array<string>;
  bestFor: string;
}

interface UseCasesProps {
  headline: string;
  subheadline: string;
  cases: UseCase[];
}

export default function UseCases({
  headline,
  subheadline,
  cases,
}: UseCasesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCase = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4"
          >
            {headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => toggleCase(index)}
            >
              {/* Icon & Title - Always Visible */}
              <div className="flex items-center justify-between gap-3 p-8">
                <div className="flex items-center gap-3">
                  {(() => {
                    const IconComponent = getIcon(useCase.icon);
                    return <IconComponent className="w-10 h-10 text-primary-600 flex-shrink-0" strokeWidth={1.5} />;
                  })()}
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {useCase.title}
                  </h3>
                </div>
                <svg 
                  className={`w-6 h-6 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 space-y-6">
                      {/* Challenge */}
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 mb-2">
                          Your Challenge:
                        </p>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {useCase.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 mb-3">
                          How MagiQ AI Helps:
                        </p>
                        <ul className="space-y-2">
                          {useCase.solution.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-neutral-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="pb-6 border-b border-neutral-200">
                        <p className="text-sm font-semibold text-neutral-900 mb-3">
                          Typical Results:
                        </p>
                        <ul className="space-y-2">
                          {useCase.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-neutral-800">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div>
                        <p className="text-xs font-semibold text-neutral-500 mb-1">
                          BEST FOR:
                        </p>
                        <p className="text-sm text-neutral-700">{useCase.bestFor}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
