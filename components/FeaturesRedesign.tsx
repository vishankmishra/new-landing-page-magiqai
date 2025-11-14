'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Feature {
  icon: string
  title: string
  description: string
  benefits: Array<string>
  extra?: string
  gradient: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo'
}

interface FeaturesProps {
  headline: string
  subheadline: string
  items: Feature[]
}

const gradients = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-red-500',
  pink: 'from-pink-500 to-rose-500',
  indigo: 'from-indigo-500 to-blue-500',
}

export default function FeaturesRedesign({ headline, subheadline, items }: FeaturesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 197, 253, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[400px]"
              style={{ perspective: '1000px' }}
            >
              {/* Flip Card Container */}
              <div 
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <div className={`bg-gradient-to-br ${gradients[feature.gradient]} p-8 text-white h-full flex flex-col items-center justify-center text-center`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '16px 16px'
                      }} />
                    </div>

                    {/* Icon & Title & Description */}
                    <div className="relative z-10">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Back of Card (Benefits) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${gradients[feature.gradient]} p-4 rounded-lg mb-4`}>
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700 leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extra Info */}
                    {feature.extra && (
                      <div className="pt-4 mt-auto border-t border-gray-200">
                        <p className="text-xs text-gray-500">{feature.extra}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

