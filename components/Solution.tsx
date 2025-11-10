"use client";

import { motion } from "framer-motion";

interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

interface SolutionProps {
  headline: string;
  subheadline: string;
  valueProps: ValueProp[];
  callout: string;
}

export default function Solution({
  headline,
  subheadline,
  valueProps,
  callout,
}: SolutionProps) {
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

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{prop.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-gray-900 max-w-3xl mx-auto">
            {callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
