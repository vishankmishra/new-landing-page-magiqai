"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import YouTubePlayer from "./YouTubePlayer";
import { getIcon } from "@/utils/iconMap";
import CountryFlags from "./CountryFlags";

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  trustBar?: string;
  countries?: Array<{
    code: string;
    name: string;
  }>;
  badges: Array<{
    icon: string;
    text: string;
  }>;
}

export default function HeroRedesign({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustBar,
  countries,
  badges,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 3D Tilt Animation: Start at 15deg, end at 0deg as user scrolls 0px to 400px
  const rotateX = useTransform(scrollY, [0, 400], [15, 0]);

  // Scale Animation: Start at 0.9, animate to 1.0
  const scale = useTransform(scrollY, [0, 400], [0.9, 1.0]);

  // Opacity Animation: Start at 0.8, animate to 1.0
  const opacity = useTransform(scrollY, [0, 400], [0.8, 1.0]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Column Centered Layout */}
        <div className="flex flex-col items-center text-center">
          {/* 1. Headline - Large, 6xl+, Bold - Matching Perspective.co */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[72px] font-bold text-[#141414] mb-6 tracking-[-0.72px] leading-[79.2px] max-w-5xl"
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          {/* 2. Subheadline - Gray, max-w-2xl */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            {subheadline}
          </motion.p>

          {/* 3. Buttons - Gap-4 - Matching Perspective.co button style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white bg-[#0071eb] rounded-xl hover:bg-[#0056b8] transition-all shadow-lg hover:shadow-xl"
            >
              {primaryCTA.text}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-[#141414] bg-white rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-sm hover:shadow-md"
            >
              {secondaryCTA.text}
            </a>
          </motion.div>

          {/* Trust Bar & Badges */}
          {badges && badges.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 justify-center items-center mb-12"
            >
              {badges.map((badge, index) => {
                const IconComponent = getIcon(badge.icon);
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-primary-600" strokeWidth={2} />
                    <span className="text-base font-medium text-gray-700">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Trust Bar Text with Country Flags */}
          {(trustBar || countries) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-gray-500 mb-12"
            >
              {countries && countries.length > 0 ? (
                <CountryFlags countries={countries} />
              ) : trustBar ? (
                <p>{trustBar}</p>
              ) : null}
            </motion.div>
          )}

          {/* 4. The 3D Video Container - Must be at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glowing Border Container with Masking Technique */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{ rotateX, scale, opacity }}
            >
              {/* The Rotating Background Image (The Glow) - Visible around edges */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-spin-slower opacity-100 blur-xl">
                  <Image
                    src="/images/bg-01-s.avif"
                    alt="Gradient Glow"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>

              {/* Border Gradient Layer - Creates the glowing border effect */}
              <div className="absolute inset-0 rounded-2xl p-[4px] z-10 pointer-events-none">
                <div className="w-full h-full rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>

              {/* The Video Content (On top) - Leaves border visible */}
              <div className="relative z-20 rounded-2xl bg-gray-900 overflow-hidden w-full h-full shadow-2xl shadow-purple-500/20 m-[4px]">
                <div className="aspect-video">
                  <YouTubePlayer
                    videoId="QT67KkYvhIc"
                    defaultSpeed={2}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
