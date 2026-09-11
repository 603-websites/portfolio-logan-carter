import { motion } from 'framer-motion'
import { Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Accessibility', href: '#accessibility' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/logan-carter-35h/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Logan.Carter1@me.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold gradient-text inline-block mb-2">
              LC
            </a>
            <p className="text-dark-500 text-sm">
              Mechanical Engineering Student
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-400 hover:text-cu-gold transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center
                         text-dark-400 hover:text-cu-gold hover:border-cu-gold/50 transition-all"
                whileHover={{ y: -3 }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1">
            {currentYear} Logan Carter. Built with
            <Heart size={14} className="text-red-500" />
            using React & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-dark-400 hover:text-cu-gold transition-colors text-sm"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
