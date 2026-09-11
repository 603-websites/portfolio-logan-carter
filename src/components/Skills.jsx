import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── Circular Gauge ──────────────────────────────────────────
const CircularGauge = ({ skill, value, color, delay, isInView }) => {
  const r            = 36
  const stroke       = 4.5
  const circumference = 2 * Math.PI * r
  const offset       = circumference * (1 - value / 100)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative">
        <svg width="88" height="88" viewBox="0 0 88 88">
          {/* Outer tick ring */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a    = (i * 10 * Math.PI) / 180
            const major = i % 9 === 0
            const r1   = major ? 38 : 40
            return (
              <line
                key={i}
                x1={44 + 43 * Math.cos(a)} y1={44 + 43 * Math.sin(a)}
                x2={44 + r1 * Math.cos(a)} y2={44 + r1 * Math.sin(a)}
                stroke={color}
                strokeWidth={major ? 1.2 : 0.6}
                strokeOpacity={major ? 0.35 : 0.15}
              />
            )
          })}
          {/* Track */}
          <circle cx="44" cy="44" r={r} fill="none" stroke="#1e293b" strokeWidth={stroke} />
          {/* Progress arc */}
          <motion.circle
            cx="44" cy="44" r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.6, delay: delay + 0.25, ease: 'easeOut' }}
            transform="rotate(-90 44 44)"
            style={{ filter: `drop-shadow(0 0 4px ${color}80)` }}
          />
          {/* Value */}
          <text x="44" y="40" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="JetBrains Mono, monospace">{value}</text>
          <text x="44" y="52" textAnchor="middle" fill="#64748b" fontSize="7"  fontFamily="JetBrains Mono, monospace">PROF%</text>
        </svg>
      </div>
      <span className="font-mono text-[10px] text-dark-400 text-center leading-tight max-w-[80px] group-hover:text-white transition-colors">
        {skill}
      </span>
    </motion.div>
  )
}

// ── Main component ───────────────────────────────────────────
const gauges = [
  { skill: 'SolidWorks',       value: 90, color: '#CFB87C' },
  { skill: 'MATLAB',           value: 82, color: '#f59e0b' },
  { skill: 'Ansys FEA',        value: 75, color: '#8b5cf6' },
  { skill: 'Mech. Design',     value: 88, color: '#CFB87C' },
  { skill: '3D Printing',      value: 82, color: '#f97316' },
  { skill: 'Thermodynamics',   value: 78, color: '#10b981' },
  { skill: 'Materials Sci.',   value: 80, color: '#06b6d4' },
  { skill: 'Lean / 5S',        value: 72, color: '#f59e0b' },
]

const skillCategories = [
  { title: 'CAD & Design',             skills: ['SolidWorks (CAD)', 'Creo (Pro-E)', 'Mechanical Design', '3D Printing']            },
  { title: 'Analysis & Simulation',    skills: ['MATLAB', 'Ansys Workbench (FEA)', 'Data Analysis', 'Excel']                  },
  { title: 'Engineering Fundamentals', skills: ['Thermodynamics', 'Materials Science', 'Manufacturing Processes', 'Calculus / Diff Eq'] },
  { title: 'Manufacturing & Quality',  skills: ['5S Lean', 'Gemba Walk', 'Prototyping', 'Troubleshooting / Testing']               },
  { title: 'Professional',             skills: ['Leadership', 'Communication', 'Problem Solving', 'Time Management']          },
  { title: 'Additional Tools',         skills: ['Web Development (React / Tailwind)', 'Project Planning', 'Technical Writing', 'Claude AI Workflows'] },
]

const coursework = [
  'Materials Science', 'Computer Aided Design', 'Manufacturing Laboratory',
  'Thermodynamics', 'Calculus I-III', 'Differential Equations',
  'Engineering Projects', 'Physics I & II', 'Statics & Dynamics', 'Linear Algebra',
]

const Skills = () => {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 relative bg-dark-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            <span className="font-mono text-[10px] text-cu-gold/60 tracking-[0.35em] uppercase">Instrument Panel</span>
            <div className="h-[1px] w-12 bg-cu-gold/40" />
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit built through hands-on coursework, projects, and professional experience.
          </p>
        </motion.div>

        {/* ── Gauge Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative glass-blueprint rounded-2xl p-6 mb-10"
        >
          {/* Corner brackets */}
          <div className="corner-tl" /><div className="corner-tr" />
          <div className="corner-bl" /><div className="corner-br" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-cu-gold rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-cu-gold/60 tracking-widest uppercase">Core Proficiency Gauges</span>
            <div className="ml-auto font-mono text-[9px] text-dark-700">SYS: ACTIVE</div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 justify-items-center">
            {gauges.map((g, i) => (
              <CircularGauge
                key={g.skill}
                skill={g.skill}
                value={g.value}
                color={g.color}
                delay={0.15 + i * 0.08}
                isInView={isInView}
              />
            ))}
          </div>

          <p className="font-mono text-[8px] text-dark-700 text-right mt-4 tracking-widest">
            CALIBRATED: 2026 // UNIT: % PROFICIENCY
          </p>
        </motion.div>

        {/* ── Skill Categories ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              className="relative glass rounded-xl p-5 group hover:border-cu-gold/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-gradient-to-b from-cu-gold to-cu-gold-dark rounded-full" />
                <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span key={skill} className="blueprint-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Coursework ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[1px] w-8 bg-dark-700" />
            <span className="font-mono text-[10px] text-dark-500 tracking-[0.3em] uppercase">Relevant Coursework</span>
            <div className="h-[1px] w-8 bg-dark-700" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {coursework.map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                className="tech-badge text-sm"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
