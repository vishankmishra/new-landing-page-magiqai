"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  description: string;
  color: "blue" | "purple" | "green";
}

interface StatsShowcaseProps {
  headline: string;
  subheadline?: string;
  stats: Stat[];
}

export default function StatsShowcase({
  headline,
  subheadline,
  stats,
}: StatsShowcaseProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141414] mb-4"
          >
            {headline}
          </motion.h2>
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subheadline}
            </motion.p>
          )}
        </div>

        {/* Stats Grid - Clean cards matching Perspective.co */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl font-bold mb-2 text-[#141414]">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-3 text-[#141414]">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
