"use client";

import { motion } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
  details?: Array<string>;
}

interface HowItWorksProps {
  headline: string;
  subheadline: string;
  steps: Step[];
  timeSaving: {
    before: string;
    after: string;
  };
}

export default function HowItWorks({
  headline,
  subheadline,
  steps,
  timeSaving,
}: HowItWorksProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4"
          >
            {headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Steps - Horizontal Timeline for Desktop, Vertical for Mobile */}
        <div className="mb-16">
          {/* Mobile View - Vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent" />
                )}
                
                <div className="flex gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-1.5">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-2 text-xs text-gray-600"
                          >
                            <svg className="w-3 h-3 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" />
              
              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div className="flex justify-center mb-6 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white">
                        {step.number}
                      </div>
                    </div>

                    {/* Arrow Between Steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-full w-4 h-0.5 flex items-center justify-center z-0">
                        <svg className="w-3 h-3 text-primary-400 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {step.details && step.details.length > 0 && (
                        <ul className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start gap-1.5 text-xs text-gray-600"
                            >
                              <svg className="w-3 h-3 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="leading-tight">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Time Saving Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">
                Before MagiQ AI
              </p>
              <p className="text-3xl font-bold">{timeSaving.before}</p>
            </div>
            <div className="text-4xl">→</div>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">
                After MagiQ AI
              </p>
              <p className="text-3xl font-bold">{timeSaving.after} ⚡</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
