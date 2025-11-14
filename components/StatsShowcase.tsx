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

const gradients = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  green: "from-green-500 to-green-600",
};

export default function StatsShowcase({
  headline,
  subheadline,
  stats,
}: StatsShowcaseProps) {
  return (
    <section className="pt-12 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {headline}
          </motion.h2>
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              {subheadline}
            </motion.p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`bg-gradient-to-br ${
                  gradients[stat.color]
                } rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-6xl sm:text-7xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold mb-3 opacity-90">
                    {stat.label}
                  </div>
                  <div className="text-sm opacity-80 leading-relaxed">
                    {stat.description}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credibility Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs text-gray-500 italic">
            *Observed in TechSolutions India Pilot and verified across 100+
            customer deployments
          </p>
        </motion.div>
      </div>
    </section>
  );
}
