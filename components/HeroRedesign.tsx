'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
  trustBar: string
  badges: Array<{
    icon: string
    text: string
  }>
}

export default function HeroRedesign({ eyebrow, headline, subheadline, primaryCTA, secondaryCTA, trustBar, badges }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">{eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {primaryCTA.text}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-gray-200"
              >
                {secondaryCTA.text}
              </a>
            </div>

            {/* Trust Bar */}
            <p className="text-sm text-gray-500 mb-6">{trustBar}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Product Screenshot Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-full h-full bg-white rounded-xl shadow-lg p-6 space-y-4">
                    {/* Mock Dashboard UI */}
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-32 bg-gradient-to-r from-primary-400 to-accent-400 rounded" />
                      <div className="flex gap-2">
                        <div className="h-8 w-8 bg-gray-200 rounded-full" />
                        <div className="h-8 w-8 bg-gray-200 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                        <div className="text-3xl font-bold mb-1">87%</div>
                        <div className="text-sm opacity-90">Win Rate</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
                        <div className="text-3xl font-bold mb-1">5X</div>
                        <div className="text-sm opacity-90">Conversion</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-100 rounded-lg" />
                      <div className="h-12 bg-gray-100 rounded-lg" />
                      <div className="h-12 bg-gray-100 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-green-200"
              >
                <div className="text-2xl font-bold text-green-600">+127%</div>
                <div className="text-xs text-gray-600">This Quarter</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-200"
              >
                <div className="text-2xl font-bold text-blue-600">2.4k</div>
                <div className="text-xs text-gray-600">New Leads</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

