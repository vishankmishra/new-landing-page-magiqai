"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { getIcon } from "@/utils/iconMap";

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
  notes: Array<{ icon: string; text: string }>;
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
  // Track selected pack index - initialize to popular one if exists
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    creditPacks.findIndex((pack) => pack.popular) !== -1
      ? creditPacks.findIndex((pack) => pack.popular)
      : null
  );

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#141414] tracking-tight mb-4"
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
          {creditPacks.map((pack, index) => {
            const isSelected = selectedIndex === index;
            const isPopular = pack.popular;
            const isHighlighted = isSelected || isPopular;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className={`relative bg-white rounded-3xl overflow-hidden cursor-pointer ${
                  isHighlighted
                    ? "shadow-2xl ring-4 ring-primary-500 scale-105"
                    : "shadow-lg"
                } transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
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

                  {/* Credits Display - Calculate total with extra credits */}
                  {(() => {
                    let totalCredits = pack.credits;
                    if (pack.extraInfo) {
                      const extraMatch = pack.extraInfo.match(/(\d+)%/);
                      if (extraMatch) {
                        const extraPercent = parseInt(extraMatch[1]);
                        totalCredits = Math.round(
                          pack.credits * (1 + extraPercent / 100)
                        );
                      }
                    }
                    return (
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-gray-900">
                          {totalCredits.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Credits</div>
                      </div>
                    );
                  })()}

                  {/* Price Display */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      ${pack.price.toLocaleString()}
                    </div>
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
                    href="https://app.magiqai.io/payment"
                    onClick={(e) => e.stopPropagation()}
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      isHighlighted
                        ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl hover:scale-105"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started →
                  </a>
                </div>
              </motion.div>
            );
          })}
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
              const NoteIcon = getIcon(note.icon);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <NoteIcon className="w-6 h-6 text-primary-600 flex-shrink-0" strokeWidth={2} />
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {note.text}
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
