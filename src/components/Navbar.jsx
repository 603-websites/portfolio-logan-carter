import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, FileText } from 'lucide-react'

const navLinks = [
  { name: 'About',      href: '#about'      },
  { name: 'Education',  href: '#education'  },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Contact',    href: '#contact'    },
]

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const s   = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(s > 50)
      setScrollPct(max > 0 ? Math.round((s / max) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cu-gold-dark to-cu-gold transition-all duration-100"
        style={{ width: `${scrollPct}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <rect x="1" y="1" width="34" height="34" rx="4" fill="none" stroke="#CFB87C" strokeWidth="0.8" strokeOpacity="0.35" />
                <line x1="1"  y1="18" x2="7"  y2="18" stroke="#CFB87C" strokeWidth="0.6" strokeOpacity="0.3" />
                <line x1="29" y1="18" x2="35" y2="18" stroke="#CFB87C" strokeWidth="0.6" strokeOpacity="0.3" />
                <line x1="18" y1="1"  x2="18" y2="7"  stroke="#CFB87C" strokeWidth="0.6" strokeOpacity="0.3" />
                <line x1="18" y1="29" x2="18" y2="35" stroke="#CFB87C" strokeWidth="0.6" strokeOpacity="0.3" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm gradient-text">LC</span>
            </div>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-dark-400 hover:text-white transition-colors font-medium text-sm tracking-wide group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-cu-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-mono text-[9px] text-dark-700 tracking-widest hidden lg:block select-none">
              Y:{String(scrollPct).padStart(3, '0')}%
            </span>
            <motion.a
              href="https://www.linkedin.com/in/logan-carter-35h/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-cu-gold transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="/documents/Logan_Carter_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={15} />
              Resume
            </motion.a>
          </div>

          <motion.button
            className="md:hidden text-dark-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-dark-300 hover:text-cu-gold transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 8 }}
                >
                  <span className="font-mono text-cu-gold-dark text-xs mr-2">▸</span>
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-dark-700/50">
                <a
                  href="https://www.linkedin.com/in/logan-carter-35h/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-cu-gold transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="/documents/Logan_Carter_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText size={15} />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
