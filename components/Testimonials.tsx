'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  metric?: string
}

interface TestimonialsProps {
  title: string
  subtitle?: string
  items: Testimonial[]
}

export default function Testimonials({ title, subtitle, items }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-padding bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              {/* Metric badge */}
              {testimonial.metric && (
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white text-sm font-bold rounded-full mb-6">
                  {testimonial.metric}
                </div>
              )}

              <p className="text-gray-900 text-lg font-medium leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
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

