'use client'

import { motion } from 'framer-motion'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: Array<string>
  cta: {
    text: string
    href: string
  }
  badge?: string
  popular?: boolean
  gradient?: 'blue' | 'purple' | 'green'
}

interface PricingProps {
  headline: string
  subheadline: string
  plans: Plan[]
  notes: Array<string>
}

const cardStyles = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
}

export default function PricingRedesign({ headline, subheadline, plans, notes }: PricingProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden ${
                plan.popular ? 'shadow-2xl ring-4 ring-primary-500 scale-105 lg:scale-110' : 'shadow-lg'
              } transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className={`inline-block px-4 py-1 bg-gradient-to-r ${plan.popular ? 'from-primary-600 to-accent-600' : 'from-gray-700 to-gray-900'} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Gradient Header */}
              {plan.popular && (
                <div className={`bg-gradient-to-br ${cardStyles[plan.gradient || 'purple']} p-6 text-white`}>
                  <div className="text-left">
                    <div className="text-5xl font-bold mb-2">{plan.price}</div>
                    <div className="text-sm opacity-90">{plan.period}</div>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{plan.name}</h3>

                {/* Price (if not popular) */}
                {!plan.popular && (
                  <div className="text-left mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-6">{plan.description}</p>

                {/* CTA */}
                <a
                  href={plan.cta.href}
                  className={`block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta.text}
                </a>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-900 mb-3">What&apos;s Included:</p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-primary-600' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note, index) => (
              <p key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="flex-shrink-0">{note.split(' ')[0]}</span>
                <span>{note.substring(note.indexOf(' ') + 1)}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

