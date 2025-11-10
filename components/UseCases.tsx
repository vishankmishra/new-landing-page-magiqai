"use client";

import { motion } from "framer-motion";

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
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
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

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{useCase.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {useCase.title}
                </h3>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Your Challenge:
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {useCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  How MagiQ AI Helps:
                </p>
                <ul className="space-y-2">
                  {useCase.solution.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-gray-400 text-sm mt-0.5">•</span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Typical Results:
                </p>
                <ul className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start gap-2">
                      <span className="text-gray-400 text-sm mt-0.5">•</span>
                      <span className="text-sm text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  BEST FOR:
                </p>
                <p className="text-sm text-gray-700">{useCase.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
