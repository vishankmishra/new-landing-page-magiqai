'use client'

import { motion } from 'framer-motion'

interface LogoCloudProps {
  title?: string
}

export default function LogoCloud({ title = "Used daily by more than 6,000 small and large businesses" }: LogoCloudProps) {
  // Company logo placeholders - replace with actual logos
  const logos = [
    "Google", "Microsoft", "Amazon", "Salesforce", "HubSpot",
    "Zoom", "Slack", "Shopify", "Meta", "LinkedIn",
    "Google", "Microsoft", "Amazon", "Salesforce", "HubSpot" // Duplicate for infinite scroll effect
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">{title}</p>
        
        {/* Scrolling Logo Strip */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100"
              >
                <div className="text-lg font-bold text-gray-400">{logo}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

