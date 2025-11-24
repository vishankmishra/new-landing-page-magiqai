"use client";

import { getIcon } from "@/utils/iconMap";
import { motion } from "framer-motion";
import React from "react";

interface PainPoint {
  icon: string;
  title: string;
  shortTag?: string;
  stats: Array<string>;
  description: string;
}

interface ProblemProps {
  headline: string;
  subheadline: string;
  painPoints: PainPoint[];
  transition: string;
}

export default function Problem({
  headline,
  subheadline,
  painPoints,
  transition,
}: ProblemProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Gradient Blob Overlay - Center (Perspective.co style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magiq-100/25 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-accent-200/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4"
          >
            {headline.split(" ").map((word, i) => {
              const emphasisWords = ["AI-Powered", "Intelligence", "AI"];
              const shouldEmphasize = emphasisWords.some((ew) =>
                word.includes(ew)
              );
              return shouldEmphasize ? (
                <span
                  key={i}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-magiq-600 to-accent-600"
                >
                  {word}
                  {i < headline.split(" ").length - 1 ? " " : ""}
                </span>
              ) : (
                <span key={i}>
                  {word}
                  {i < headline.split(" ").length - 1 ? " " : ""}
                </span>
              );
            })}
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

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Short Tag Badge */}
              {point.shortTag && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-lg">
                    {point.shortTag}
                  </span>
                </div>
              )}

              {/* Icon with Glowing Circle */}
              <div className="mb-4">
                {(() => {
                  const IconComponent = getIcon(point.icon);
                  return (
                    <div className="inline-flex items-center justify-center bg-magiq-50 rounded-full p-4">
                      <IconComponent
                        className="w-12 h-12 text-primary-600"
                        strokeWidth={1.5}
                      />
                    </div>
                  );
                })()}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {point.title}
              </h3>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                {point.stats.map((stat, statIndex) => (
                  <p
                    key={statIndex}
                    className="text-sm font-medium text-neutral-900"
                  >
                    {stat}
                  </p>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-neutral-900">{transition}</p>
        </motion.div>
      </div>
    </section>
  );
}
