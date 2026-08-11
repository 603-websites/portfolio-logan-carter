import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Accessibility as AccessibilityIcon } from 'lucide-react'

const Accessibility = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="accessibility" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Accessibility</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-cu-gold/10 flex items-center justify-center shrink-0">
              <AccessibilityIcon className="text-cu-gold" size={22} aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">Accessibility Statement</h3>
          </div>

          <div className="space-y-4 text-dark-300 leading-relaxed">
            <p>
              This site is built to be usable by everyone, including visitors who rely on
              assistive technologies.
            </p>
            <p>
              It aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
              The site uses semantic HTML and clear headings, supports keyboard navigation,
              respects your device's reduce-motion setting, provides text alternatives for
              meaningful images, and keeps color contrast readable.
            </p>
            <p>
              Accessibility is ongoing work and some areas may still fall short. If you
              encounter a barrier or have a suggestion, reach out through the{' '}
              <a
                href="#contact"
                className="text-cu-gold hover:text-cu-gold-light underline underline-offset-4 transition-colors"
              >
                contact section
              </a>{' '}
              and it will be addressed promptly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Accessibility
