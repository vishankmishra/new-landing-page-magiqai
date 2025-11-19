"use client";

import { motion } from "framer-motion";

interface CreditPack {
  name: string;
  credits: number;
  price: number;
  description: string;
  extraInfo?: string;
  popular?: boolean;
  gradient?: "blue" | "purple" | "green" | "indigo";
}

interface FeatureCost {
  name: string;
  description: string;
  credits: number;
}

interface PricingProps {
  headline: string;
  subheadline: string;
  creditPacks: CreditPack[];
  featureCosts?: FeatureCost[];
  notes: Array<string>;
}

const cardStyles = {
  blue: "from-blue-500 to-cyan-500",
  purple: "from-purple-500 to-pink-500",
  green: "from-green-500 to-emerald-500",
  indigo: "from-indigo-500 to-purple-500",
};

export default function PricingRedesign({
  headline,
  subheadline,
  creditPacks,
  featureCosts,
  notes,
}: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Credit Pack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {creditPacks.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden ${
                pack.popular
                  ? "shadow-2xl ring-4 ring-primary-500 scale-105"
                  : "shadow-lg"
              } transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Pack Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {pack.name}
                </h3>

                {/* Credits Display */}
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {pack.credits.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Credits</div>
                </div>

                {/* Price Display */}
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    ${pack.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">1 credit = $1</div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-2">
                  {pack.description}
                </p>

                {/* Extra Info */}
                {pack.extraInfo && (
                  <p className="text-sm font-semibold text-primary-600 text-center mb-6">
                    {pack.extraInfo}
                  </p>
                )}

                {!pack.extraInfo && <div className="mb-6" />}

                {/* CTA */}
                <a
                  href="#waitlist"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    pack.popular
                      ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map((note, index) => {
              const iconMatch = note.match(/^([^\s]+)\s/);
              const icon = iconMatch ? iconMatch[1] : "";
              const text = note.replace(/^[^\s]+\s/, "");
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <span className="text-3xl flex-shrink-0">{icon}</span>
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
