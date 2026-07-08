import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Logan.Carter1@me.com",
      href: "mailto:Logan.Carter1@me.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(603) 339-6170",
      href: "tel:+16033396170"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Windham, NH / Boulder, CO",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Currently a Mechanical Engineering Intern at Cirtronics, always open to what's next. Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <div className="space-y-6 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-cu-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-cu-gold" size={20} />
                </div>
                <div>
                  <p className="text-dark-500 text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-dark-200 hover:text-cu-gold transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-dark-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-dark-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/logan-carter-35h/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-cu-gold/50 transition-all flex-1"
              >
                <Linkedin className="text-dark-400 group-hover:text-cu-gold transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">LinkedIn</p>
                  <p className="text-dark-500 text-sm">Logan Carter</p>
                </div>
              </a>
              <a
                href="mailto:Logan.Carter1@me.com"
                className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-cu-gold/50 transition-all flex-1"
              >
                <Mail className="text-dark-400 group-hover:text-cu-gold transition-colors" size={24} />
                <div>
                  <p className="text-dark-300 font-medium group-hover:text-white transition-colors">Email</p>
                  <p className="text-dark-500 text-sm">Logan.Carter1@me.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-cu-gold/5 border border-cu-gold/20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Seeking Internships</span>
            </div>
            <p className="text-dark-400 text-sm">
              Open to mechanical engineering internships, co-ops, and project collaborations.
              I typically respond within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
