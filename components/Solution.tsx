"use client";

import React from "react";
import { motion } from "framer-motion";
import { getIcon } from "@/utils/iconMap";

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
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50/50">
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

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
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
              <div className="mb-4 flex justify-center">
                {(() => {
                  const IconComponent = getIcon(prop.icon);
                  return <IconComponent className="w-14 h-14 text-primary-600" strokeWidth={1.5} />;
                })()}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">
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
          <p className="text-xl font-semibold text-neutral-900 max-w-3xl mx-auto">
            {callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
