"use client";

import { getIcon } from "@/utils/iconMap";
import { motion } from "framer-motion";
import React, { useState } from "react";

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
      : 0 // Default to first card if no popular card
  );

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Gradient Blob Overlays - Top Left & Bottom Right (Perspective.co style) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-magiq-100/25 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-200/25 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-magiq-200/20 rounded-full blur-3xl -z-10 pointer-events-none opacity-40" />

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
            {headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-600"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* Credit Pack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch pt-6">
          {creditPacks.map((pack, index) => {
            const isSelected = selectedIndex === index;
            const isPopular = pack.popular;
            // Only selected card gets highlighted styling
            const isHighlighted = isSelected;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className={`relative rounded-2xl overflow-visible cursor-pointer transition-all duration-300 flex flex-col h-full ${
                  isHighlighted
                    ? "bg-gradient-to-br from-magiq-100/80 via-white to-accent-100/60 ring-4 ring-primary-500 scale-105 shadow-2xl shadow-primary-500/30"
                    : "glass-panel glass-panel-hover"
                }`}
              >
                {/* Popular Badge - Only show on popular card */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 overflow-hidden rounded-2xl flex flex-col flex-grow">
                  {/* Pack Name */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 text-center">
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
                        <div className="text-4xl font-bold text-neutral-900">
                          {totalCredits.toLocaleString()}
                        </div>
                        <div className="text-sm text-neutral-600">Credits</div>
                      </div>
                    );
                  })()}

                  {/* Price Display */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-neutral-900">
                      ${pack.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 text-center mb-2">
                    {pack.description}
                  </p>

                  {/* Extra Info */}
                  {pack.extraInfo ? (
                    <p className="text-sm font-semibold text-primary-600 text-center mb-auto">
                      {pack.extraInfo}
                    </p>
                  ) : (
                    <div className="mb-auto" />
                  )}

                  {/* CTA - Fixed at bottom with consistent padding */}
                  <div className="mt-6">
                    <a
                      href="https://app.magiqai.io/payment"
                      onClick={(e) => e.stopPropagation()}
                      className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isHighlighted
                          ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 focus:ring-primary-500"
                          : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-400"
                      }`}
                    >
                      Get Started →
                    </a>
                  </div>
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
                  className="glass-panel p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <NoteIcon
                    className="w-6 h-6 text-primary-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <p className="text-lg font-semibold text-neutral-900 leading-relaxed">
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
