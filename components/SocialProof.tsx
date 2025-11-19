'use client'

import { motion } from 'framer-motion'

interface SocialProofProps {
  title: string
  logos: Array<{
    name: string
    image?: string
  }>
}

export default function SocialProof({ title, logos }: SocialProofProps) {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-base font-medium text-gray-600 mb-8"
        >
          {title}
        </motion.p>
        
        {/* Logo Grid - Matching Perspective.co style */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              {/* Logo placeholder - replace with actual images */}
              <div className="text-gray-400 font-semibold text-sm">
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
