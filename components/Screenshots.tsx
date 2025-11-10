'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Screenshot {
  image: string
  title: string
  description: string
  category?: string
}

interface ScreenshotsProps {
  title: string
  subtitle?: string
  items: Screenshot[]
}

export default function Screenshots({ title, subtitle, items }: ScreenshotsProps) {
  return (
    <section id="screenshots" className="section-padding">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-subtitle mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card overflow-hidden">
                {/* Image placeholder - TODO: Replace with actual screenshots */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* When you add real images, use: */}
                  {/* <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>
                
                {screenshot.category && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-3">
                    {screenshot.category}
                  </span>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

