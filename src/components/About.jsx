import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Target, Users } from 'lucide-react'

const StatBlock = ({ value, label, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    <div className="text-5xl sm:text-6xl font-bold gradient-text leading-none mb-1 font-mono">
      {value}
    </div>
    <div className="font-mono text-[10px] text-dark-600 tracking-[0.2em] uppercase">{label}</div>
  </motion.div>
)

const highlights = [
  {
    icon: GraduationCap,
    title:  'B.S. Mechanical Engineering',
    sub:    'University of Colorado Boulder',
    detail: 'Minors: Mathematics & Aerospace',
    color:  '#CFB87C',
  },
  {
    icon: Award,
    title:  "Dean's List",
    sub:    'Fall 2024 / Spring 2025',
    detail: 'Honors College  |  3.6 GPA',
    color:  '#f59e0b',
  },
  {
    icon: Target,
    title:  'Naval Academy Accepted',
    sub:    'Class of 2028',
    detail: 'United States Naval Academy',
    color:  '#8b5cf6',
  },
  {
    icon: Users,
    title:  'Leadership & Service',
    sub:    'Engineers for a Sustainable World',
    detail: 'Leaders in Action',
    color:  '#10b981',
  },
]

const lifePhotos = [
  { src: '/images/ski-group.jpg',    label: 'Summit Run · CO' },
  { src: '/images/golf-course.jpg',  label: 'On the Course' },
  { src: '/images/rocky-mountain.jpg', label: 'Rocky Mountain NP' },
]

const About = () => {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section identifier ──────────────────────────────── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-cu-gold/60" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-cu-gold/60" />
            <span className="font-mono text-[10px] text-cu-gold/60 tracking-[0.35em] uppercase px-3">
              Section A-A
            </span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cu-gold/30 to-transparent" />
          <span className="font-mono text-[9px] text-dark-700 tracking-widest hidden sm:block">
            DWG: LC-ABOUT-001
          </span>
        </motion.div>

        {/* ── Big statement ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Meet the{' '}
            <span className="gradient-text">Engineer</span>
          </h2>
          <p className="text-dark-500 text-sm font-mono tracking-widest uppercase">
            Mechanical · Analytical · Driven
          </p>
        </motion.div>

        {/* ── Stats row ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-8 sm:gap-14 mb-16 pb-10 border-b border-dark-800/60"
        >
          <StatBlock value="3.6" label="GPA" delay={0.2} isInView={isInView} />
          <StatBlock value="2"   label="Universities" delay={0.3} isInView={isInView} />
          <StatBlock value="4+"  label="Yrs Experience" delay={0.4} isInView={isInView} />
          <StatBlock value="3"   label="Projects" delay={0.5} isInView={isInView} />
        </motion.div>

        {/* ── Two-column body ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              <>
                I'm a{' '}
                <span className="text-cu-gold-light font-medium">Mechanical Engineering student</span>{' '}
                at the University of Colorado Boulder with minors in Mathematics and Aerospace Engineering,
                currently interning at{' '}
                <span className="text-cu-gold-light font-medium">Cirtronics Corporation</span>, a contract
                manufacturer serving the medical device, robotics, and defense industries. My engineering
                journey is fueled by a deep curiosity for how things work and a drive to design innovative solutions.
              </>,
              <>
                Before transferring to CU Boulder, I completed coursework at{' '}
                <span className="text-cu-gold-light font-medium">UMass Lowell</span>{' '}
                where I made Dean's List and was part of the Honors College. I was also accepted into the{' '}
                <span className="text-cu-gold-light font-medium">United States Naval Academy</span>{' '}
                Class of 2028, demonstrating my commitment to discipline and service.
              </>,
              <>
                I bring a unique combination of{' '}
                <span className="text-cu-gold-light font-medium">technical expertise and leadership</span>{' '}
                to every project. Whether executing multi-phase design projects, leading construction
                initiatives, or building client websites — I thrive on challenges that push me to grow.
              </>,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                className="text-dark-300 leading-relaxed text-base border-l-2 border-cu-gold/20 pl-4"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.1 }}
                className="group relative glass rounded-xl p-5 card-hover overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}35` }}>
                  <item.icon size={20} style={{ color: item.color }} />
                </div>

                <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{item.title}</h3>
                <p className="text-dark-400 text-xs mb-1">{item.sub}</p>
                <p className="font-mono text-[10px]" style={{ color: `${item.color}90` }}>{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ── Life outside engineering ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-10 border-t border-dark-800/60"
        >
          <p className="font-mono text-[9px] text-dark-600 tracking-[0.3em] uppercase mb-6">
            Beyond the Blueprint
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {lifePhotos.map((photo) => (
              <div key={photo.src} className="relative group overflow-hidden rounded-lg aspect-video">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="font-mono text-[9px] text-white/80 tracking-wider">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
