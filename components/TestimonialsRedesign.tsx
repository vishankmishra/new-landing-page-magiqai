'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  companyInfo: string
  metrics: Array<{
    icon: string
    text: string
  }>
  image?: string
}

interface TestimonialsProps {
  headline: string
  subheadline: string
  items: Testimonial[]
  aggregateMetrics: {
    title: string
    items: Array<{
      icon: string
      text: string
    }>
  }
}

export default function TestimonialsRedesign({ headline, subheadline, items, aggregateMetrics }: TestimonialsProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 relative group overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />

              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-primary-100 font-serif">&ldquo;</div>

              {/* Quote */}
              <p className="text-gray-900 leading-relaxed mb-6 relative z-10 pt-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author with Avatar */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.companyInfo}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-900 mb-3">Impact Metrics:</p>
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-start gap-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                    <span className="text-lg">{metric.icon}</span>
                    <span className="text-sm text-gray-700 font-medium">{metric.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-8 relative z-10">{aggregateMetrics.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {aggregateMetrics.items.map((metric, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <span className="text-3xl">{metric.icon}</span>
                <span className="text-sm font-medium leading-snug">{metric.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

