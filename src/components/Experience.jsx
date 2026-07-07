import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

// Crosshair-style timeline node
const TimelineNode = ({ active, color, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.4, delay, type: 'spring', stiffness: 260 }}
    className="relative flex items-center justify-center shrink-0 w-10 h-10 z-10"
  >
    {/* Outer ring */}
    <div className="absolute w-10 h-10 rounded-full border"
      style={{ borderColor: `${color}40` }} />
    {/* Crosshair lines */}
    <div className="absolute w-6 h-[1px]" style={{ backgroundColor: `${color}50` }} />
    <div className="absolute w-[1px] h-6" style={{ backgroundColor: `${color}50` }} />
    {/* Center dot */}
    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: active ? color : `${color}70` }} />
    {/* Pulse ring for active */}
    {active && (
      <motion.div
        className="absolute w-10 h-10 rounded-full"
        style={{ border: `1px solid ${color}` }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    )}
  </motion.div>
)

const experiences = [
  {
    title:   'Mechanical Engineering Intern',
    company: 'Cirtronics Corporation',
    location:'Milford, NH',
    period:  'May 2026 – Present',
    active:  true,
    color:   '#CFB87C',
    dwg:     'EXP-001',
    description: [
      'Support mechanical engineers at an FDA- and ITAR-registered contract manufacturer serving the medical device, robotics, and defense industries.',
      'Assist with electro-mechanical assembly and complex box-build projects, contributing to fixturing, assembly documentation, and design-for-manufacturability reviews.',
      'Shadow senior engineers through new product introduction (NPI), gaining hands-on exposure to production processes, testing, and quality standards (ISO 9001/13485).',
    ],
    technologies: ['Contract Manufacturing', 'DFM', 'NPI', 'ISO 9001/13485'],
  },
  {
    title:   'Sales Intern',
    company: 'ALKU',
    location:'Andover, MA',
    period:  'June 2025 – Dec 2025',
    active:  false,
    color:   '#38bdf8',
    dwg:     'EXP-002',
    description: [
      'Sourced and screened candidates for specialized engineering roles, supporting full-cycle recruiting in a fast-paced consulting environment.',
      'Gained valuable communication skills by engaging with PhD engineers with 20+ years of experience, helping to place them in highly competitive roles.',
    ],
    technologies: ['Recruiting', 'Communication', 'Engineering Talent', 'Networking'],
  },
  {
    title:   'Maintenance Crew',
    company: 'Passaconaway Country Club',
    location:'Litchfield, NH',
    period:  'Apr 2024 – Sep 2024',
    active:  false,
    color:   '#f59e0b',
    dwg:     'EXP-003',
    description: [
      'Collected golf balls daily from the driving range to ensure smooth flow of play and maintained all equipment.',
      'Cleaned and maintained every cart after use, worked the cash register, and provided customer assistance.',
    ],
    technologies: ['Operations', 'Customer Service', 'Equipment Maintenance'],
  },
  {
    title:   'Medical Records Technician',
    company: 'Derry Medical Center',
    location:'Derry, NH',
    period:  'May 2023 – Aug 2023',
    active:  false,
    color:   '#8b5cf6',
    dwg:     'EXP-004',
    description: [
      'Assisted in evaluation and selection of medical records, identifying those that were current and those requiring re-evaluation.',
    ],
    technologies: ['Data Management', 'Organization', 'Attention to Detail'],
  },
  {
    title:   'Landscaping Crew',
    company: "Trey's Amigos",
    location:'Windham, NH',
    period:  'May 2021 – Sep 2022',
    active:  false,
    color:   '#10b981',
    dwg:     'EXP-005',
    description: [
      'Performed mowing, trimming, edging, weeding, and mulching lawns. Installed underground piping systems.',
    ],
    technologies: ['Physical Labor', 'Piping Installation', 'Teamwork'],
  },
]

const Experience = () => {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-cu-gold/40" />
            <span className="font-mono text-[10px] text-cu-gold/60 tracking-[0.35em] uppercase">
              Work Log
            </span>
            <div className="h-[1px] w-12 bg-cu-gold/40" />
          </div>
          <h2 className="section-heading">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading mx-auto">
            A diverse range of experience demonstrating leadership, work ethic, and adaptability.
          </p>
        </motion.div>

        {/* ── Zigzag timeline ─────────────────────────────────── */}
        <div className="relative">

          {/* Center vertical line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-[1px] bg-gradient-to-b from-cu-gold/30 via-dark-700/60 to-transparent hidden md:block"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0  // card goes left, node right of it
              const delay  = 0.3 + index * 0.18

              return (
                <motion.div
                  key={exp.dwg}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay }}
                  className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center"
                >
                  {/* ── LEFT SLOT ── */}
                  {isLeft ? (
                    // Card on left
                    <div className="relative group">
                      <div className="glass rounded-xl overflow-hidden card-hover">
                        {/* Accent bar */}
                        <div className="h-[2px]"
                          style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />
                        <div className="p-5">
                          {/* Title row */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-base font-semibold text-white leading-snug">
                                {exp.title}
                              </h3>
                              <p className="font-medium text-sm mt-0.5" style={{ color: exp.color }}>
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {exp.active && (
                                <span className="px-2 py-0.5 text-[10px] font-mono bg-green-500/15 text-green-400 rounded border border-green-500/25">
                                  RECENT
                                </span>
                              )}
                              <span className="font-mono text-[8px] text-dark-700">{exp.dwg}</span>
                            </div>
                          </div>
                          {/* Meta */}
                          <div className="flex flex-wrap gap-3 text-xs text-dark-500 mb-3 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />{exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={11} />{exp.location}
                            </span>
                          </div>
                          {/* Bullets */}
                          <ul className="space-y-1.5 mb-4">
                            {exp.description.map((d, i) => (
                              <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full mt-2 shrink-0"
                                  style={{ backgroundColor: exp.color }} />
                                {d}
                              </li>
                            ))}
                          </ul>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map(t => (
                              <span key={t} className="blueprint-badge">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Empty on left — date label
                    <div className="hidden md:flex justify-end pr-4">
                      <div className="text-right">
                        <p className="font-mono text-[10px] text-dark-600 tracking-wider">{exp.period}</p>
                        <p className="font-mono text-[9px] text-dark-700">{exp.location}</p>
                      </div>
                    </div>
                  )}

                  {/* ── CENTER NODE ── */}
                  <div className="flex justify-center">
                    <TimelineNode
                      active={exp.active}
                      color={exp.color}
                      delay={delay + 0.05}
                      isInView={isInView}
                    />
                  </div>

                  {/* ── RIGHT SLOT ── */}
                  {!isLeft ? (
                    // Card on right
                    <div className="relative group">
                      <div className="glass rounded-xl overflow-hidden card-hover">
                        <div className="h-[2px]"
                          style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />
                        <div className="p-5">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-base font-semibold text-white leading-snug">
                                {exp.title}
                              </h3>
                              <p className="font-medium text-sm mt-0.5" style={{ color: exp.color }}>
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {exp.active && (
                                <span className="px-2 py-0.5 text-[10px] font-mono bg-green-500/15 text-green-400 rounded border border-green-500/25">
                                  RECENT
                                </span>
                              )}
                              <span className="font-mono text-[8px] text-dark-700">{exp.dwg}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs text-dark-500 mb-3 font-mono">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />{exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={11} />{exp.location}
                            </span>
                          </div>
                          <ul className="space-y-1.5 mb-4">
                            {exp.description.map((d, i) => (
                              <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full mt-2 shrink-0"
                                  style={{ backgroundColor: exp.color }} />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map(t => (
                              <span key={t} className="blueprint-badge">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Empty on right — date label
                    <div className="hidden md:flex justify-start pl-4">
                      <div>
                        <p className="font-mono text-[10px] text-dark-600 tracking-wider">{exp.period}</p>
                        <p className="font-mono text-[9px] text-dark-700">{exp.location}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
