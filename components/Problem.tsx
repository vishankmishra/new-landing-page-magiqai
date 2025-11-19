'use client'

import { motion } from 'framer-motion'

interface PainPoint {
  icon: string
  title: string
  shortTag?: string
  stats: Array<string>
  description: string
}

interface ProblemProps {
  headline: string
  subheadline: string
  painPoints: PainPoint[]
  transition: string
}

export default function Problem({ headline, subheadline, painPoints, transition }: ProblemProps) {
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

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
            >
              {/* Short Tag Badge */}
              {point.shortTag && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-lg">
                    {point.shortTag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-7xl mb-4">{point.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                {point.title}
              </h3>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                {point.stats.map((stat, statIndex) => (
                  <p key={statIndex} className="text-sm font-medium text-gray-900">
                    {stat}
                  </p>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-gray-900">
            {transition}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

