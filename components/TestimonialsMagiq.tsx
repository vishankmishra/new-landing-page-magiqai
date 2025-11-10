'use client'

import { motion } from 'framer-motion'

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

export default function TestimonialsMagiq({ headline, subheadline, items, aggregateMetrics }: TestimonialsProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
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
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              {/* Quote */}
              <p className="text-gray-900 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.companyInfo}</p>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-900">Impact Metrics:</p>
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-start gap-2">
                    <span className="text-lg">{metric.icon}</span>
                    <span className="text-sm text-gray-700">{metric.text}</span>
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
          className="bg-white rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">{aggregateMetrics.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aggregateMetrics.items.map((metric, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">{metric.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{metric.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

