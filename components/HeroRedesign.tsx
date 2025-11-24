"use client";

import { getIcon } from "@/utils/iconMap";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import CountryFlags from "./CountryFlags";
import YouTubePlayer from "./YouTubePlayer";

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
      className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-transparent to-white/30"
    >
      {/* Abstract Blob Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Blob */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-magiq-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top Right Blob */}
        <motion.div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Bottom Center Blob */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-magiq-400/15 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Single Column Centered Layout */}
        <div className="flex flex-col items-center text-center relative z-20">
          {/* 1. Headline - Large, 6xl+, Bold - Matching Perspective.co */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-neutral-900 mb-6 tracking-tight lg:tracking-[-0.72px] leading-tight lg:leading-[79.2px] max-w-5xl relative z-30 px-4 sm:px-0"
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-magiq-600 to-accent-600 bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line.split(" ").map((word, j) => {
                    const emphasisWords = ["AI", "Intelligence", "AI-Powered"];
                    const shouldEmphasize = emphasisWords.some((ew) =>
                      word.includes(ew)
                    );
                    return shouldEmphasize ? (
                      <span
                        key={j}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-magiq-600 to-accent-600"
                      >
                        {word}
                        {j < line.split(" ").length - 1 ? " " : ""}
                      </span>
                    ) : (
                      <span key={j}>
                        {word}
                        {j < line.split(" ").length - 1 ? " " : ""}
                      </span>
                    );
                  })
                )}
              </span>
            ))}
          </motion.h1>

          {/* 2. Subheadline - Gray, max-w-2xl */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl relative z-30 px-4 sm:px-0"
          >
            {subheadline}
          </motion.p>

          {/* 3. Buttons - Gap-4 - Matching Perspective.co button style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8 relative z-30 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href={primaryCTA.href}
              className="btn-glow-primary inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full sm:w-auto"
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
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-semibold text-neutral-900 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all border-2 border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 w-full sm:w-auto"
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
              className="flex flex-wrap gap-6 justify-center items-center mb-12 relative z-30"
            >
              {badges.map((badge, index) => {
                const IconComponent = getIcon(badge.icon);
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent
                      className="w-5 h-5 text-primary-600"
                      strokeWidth={2}
                    />
                    <span className="text-base font-medium text-neutral-700">
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
              className="text-sm text-neutral-500 mb-12 relative z-30"
            >
              {countries && countries.length > 0 ? (
                <CountryFlags countries={countries} />
              ) : trustBar ? (
                <p>{trustBar}</p>
              ) : null}
            </motion.div>
          )}

          {/* 4. The 3D Video Container with Dynamic Rotating Border - Must be at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl relative z-30"
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Dynamic Rotating Border Container - Perspective.co style */}
            <motion.div
              className="hero-video-border relative"
              style={{ rotateX, scale, opacity }}
            >
              {/* The Video Content - Inner container with matching border-radius */}
              <div className="relative bg-gray-900 overflow-hidden w-full h-full shadow-2xl shadow-purple-500/20 hero-video-inner">
                <div className="aspect-video">
                  <YouTubePlayer
                    videoId="QT67KkYvhIc"
                    defaultSpeed={1.5}
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
