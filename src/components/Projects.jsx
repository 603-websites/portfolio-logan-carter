import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Linkedin, Cog, TreePine, Globe, Play, ExternalLink, Zap, DollarSign, Building2, Code2 } from 'lucide-react'

// Lazy-loaded YouTube embed
const YouTubeEmbed = ({ videoId }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded,  setHasLoaded]  = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasLoaded) { setIsVisible(true); setHasLoaded(true) } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasLoaded])

  return (
    <div ref={ref} className="relative w-full aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden bg-dark-800 border border-cu-gold/15">
      {!isVisible ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900">
          <div className="w-14 h-14 rounded-full bg-cu-gold/15 flex items-center justify-center mb-3">
            <Play size={24} className="text-cu-gold ml-1" />
          </div>
          <p className="font-mono text-[10px] text-dark-500 tracking-wider">SCROLL TO LOAD</p>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="GEEN 1400 Engineering Design Project"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}

// Lazy-loaded local video embed (same styling as YouTubeEmbed)
const LocalVideoEmbed = ({ src, label }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded,  setHasLoaded]  = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasLoaded) { setIsVisible(true); setHasLoaded(true) } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasLoaded])

  return (
    <div ref={ref} className="relative w-full aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden bg-dark-800 border border-cu-gold/15">
      {!isVisible ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900">
          <div className="w-14 h-14 rounded-full bg-cu-gold/15 flex items-center justify-center mb-3">
            <Play size={24} className="text-cu-gold ml-1" />
          </div>
          <p className="font-mono text-[10px] text-dark-500 tracking-wider">SCROLL TO LOAD</p>
        </div>
      ) : (
        <video
          src={src}
          title={label}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  )
}

// Engineering drawing title block badge
const TitleBlock = ({ dwgNo, rev, date }) => (
  <div className="flex items-stretch border border-dark-700/60 rounded overflow-hidden font-mono text-[8px] text-dark-600">
    <div className="px-2 py-1 border-r border-dark-700/60 flex flex-col gap-0.5">
      <span>DWG: {dwgNo}</span>
      <span>REV: {rev}</span>
    </div>
    <div className="px-2 py-1 flex flex-col gap-0.5">
      <span>DATE: {date}</span>
      <span>DRAWN: LC</span>
    </div>
  </div>
)

const projects = [
  {
    title:        'GEEN 1400 - Engineering Design Project',
    description:  'Multi-phase engineering design project at CU Boulder encompassing concept development, CAD modeling, fabrication, and testing of working prototypes with iterative design improvements.',
    icon:         Cog,
    highlights:   ['Full design lifecycle execution', 'CAD modeling & prototyping', 'Testing & validation process', 'Design Expo final presentation'],
    technologies: ['SolidWorks', 'Prototyping', '3D Printing', 'Team Collaboration', 'Testing'],
    featured:     true,
    accent:       '#0ea5e9',
    dwgNo:        'LC-001',
    rev:          'B',
    date:         '2025',
    videoId:      'sggqbIs09tU',
  },
  {
    title:        'Trail Design & Construction',
    description:  'Led a team of track athletes to plan, design, and construct a major trail renovation project through wooded terrain using structural engineering principles.',
    icon:         TreePine,
    highlights:   ['Project planning & leadership', 'Technical structural designs', 'Gravel path engineering', 'Team coordination & execution'],
    technologies: ['Project Management', 'Structural Design', 'Leadership', 'Construction'],
    featured:     false,
    accent:       '#f59e0b',
    dwgNo:        'LC-002',
    rev:          'A',
    date:         '2024',
    videoId:      null,
  },
  {
    title:        'REPS - Renewable Energy Power System',
    description:  'GEEN 1400 final project: a rowing machine that harvests human power to charge a phone. Pulling the handle spins a screw-pulley drivetrain that back-drives a DC motor as a generator; the raw output runs through a bridge rectifier and buck converter, with voltage and current sensors feeding an Arduino that manages battery storage and a regulated 5V USB output.',
    icon:         Zap,
    highlights:   ['Screw-pulley generator drivetrain', 'Rectifier + buck converter power electronics', 'Arduino voltage/current monitoring', 'Tested 200–500 RPM · ≥5V USB output', 'Prototype built for $44.75', 'Est. $6–$15/unit at production scale'],
    technologies: ['SolidWorks', 'Arduino', 'Fusion 360', 'MATLAB', '3D Printing', 'Power Electronics'],
    featured:     true,
    accent:       '#10b981',
    dwgNo:        'LC-004',
    rev:          'A',
    date:         '2026',
    videoSrc:     '/videos/reps-demo.mp4',
  },
]

// Website Upgrader Pro feature cards
const studioFeatures = [
  {
    icon: Code2,
    title: 'AI-Powered, Built From Scratch',
    desc: 'No templates. Every site, including this one, is built from scratch in React, Vite, and Tailwind CSS using Claude AI to move fast without sacrificing quality.',
    color: '#CFB87C',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'We undercut agency rates dramatically. Professionals and small businesses get a premium product without the premium price tag.',
    color: '#A2A4A3',
  },
  {
    icon: Zap,
    title: 'Fast & Unique',
    desc: 'Every design is one-of-a-kind. Framer Motion animations, mobile-first layouts, and Vercel-hosted for lightning fast load times.',
    color: '#CFB87C',
  },
  {
    icon: Building2,
    title: 'Growing Into Companies',
    desc: "Our goal is to expand beyond portfolios, landing pages, marketing sites, and full web presences for businesses that need one.",
    color: '#A2A4A3',
  },
]

const Projects = () => {
  const ref      = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 relative bg-dark-900/20">
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
            <span className="font-mono text-[10px] text-cu-gold/60 tracking-[0.35em] uppercase">Project Archive</span>
            <div className="h-[1px] w-12 bg-cu-gold/40" />
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Engineering projects showcasing design thinking, technical execution, and leadership.
          </p>
        </motion.div>

        {/* ── LC-001: GEEN 1400 - Featured with video ── */}
        {(() => {
          const FeaturedIcon = projects[0].icon
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="relative mb-8 group"
            >
              <div className="relative glass rounded-2xl overflow-hidden card-hover">
                <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${projects[0].accent}, transparent)` }} />
                <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${projects[0].accent}20`, border: `1px solid ${projects[0].accent}40` }}>
                      <FeaturedIcon size={22} style={{ color: projects[0].accent }} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-dark-600 tracking-widest block">PROJECT - {projects[0].dwgNo}</span>
                      <h3 className="text-base font-semibold text-white group-hover:text-cu-gold-light transition-colors">
                        {projects[0].title}
                      </h3>
                    </div>
                  </div>
                  <TitleBlock dwgNo={projects[0].dwgNo} rev={projects[0].rev} date={projects[0].date} />
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="text-dark-400 text-sm mb-5 leading-relaxed">{projects[0].description}</p>
                      <div className="grid sm:grid-cols-2 gap-2 mb-5">
                        {projects[0].highlights.map(h => (
                          <div key={h} className="flex items-center gap-2 text-xs text-dark-300">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: projects[0].accent }} />
                            {h}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/40">
                        {projects[0].technologies.map(tech => (
                          <span key={tech} className="blueprint-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <YouTubeEmbed videoId={projects[0].videoId} />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="border-2 border-green-500/40 rounded px-2 py-0.5 rotate-[-12deg]">
                  <span className="font-mono text-[9px] text-green-500/60 tracking-widest font-bold">APPROVED</span>
                </div>
              </div>
            </motion.div>
          )
        })()}

        {/* ── LC-004: REPS - Featured with video ── */}
        {(() => {
          const reps = projects[2]
          const RepsIcon = reps.icon
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="relative mb-8 group"
            >
              <div className="relative glass rounded-2xl overflow-hidden card-hover">
                <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${reps.accent}, transparent)` }} />
                <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${reps.accent}20`, border: `1px solid ${reps.accent}40` }}>
                      <RepsIcon size={22} style={{ color: reps.accent }} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-dark-600 tracking-widest block">PROJECT - {reps.dwgNo}</span>
                      <h3 className="text-base font-semibold text-white group-hover:text-cu-gold-light transition-colors">
                        {reps.title}
                      </h3>
                    </div>
                  </div>
                  <TitleBlock dwgNo={reps.dwgNo} rev={reps.rev} date={reps.date} />
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="text-dark-400 text-sm mb-5 leading-relaxed">{reps.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2 mb-5">
                        {reps.highlights.map(h => (
                          <div key={h} className="flex items-center gap-2 text-xs text-dark-300">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: reps.accent }} />
                            {h}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/40">
                        {reps.technologies.map(tech => (
                          <span key={tech} className="blueprint-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <LocalVideoEmbed src={reps.videoSrc} label="REPS rowing machine charging a phone" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="border-2 border-green-500/40 rounded px-2 py-0.5 rotate-[-12deg]">
                  <span className="font-mono text-[9px] text-green-500/60 tracking-widest font-bold">TESTED</span>
                </div>
              </div>
            </motion.div>
          )
        })()}

        {/* ── LC-003: Website Upgrader Pro - Full featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="relative mb-8 group"
        >
          <div className="relative glass rounded-2xl overflow-hidden card-hover">
            {/* Gold accent bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-cu-gold via-cu-gold-light to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cu-gold/20 border border-cu-gold/40">
                  <Globe size={22} className="text-cu-gold" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-dark-600 tracking-widest block">PROJECT - LC-003</span>
                  <h3 className="text-base font-semibold text-white group-hover:text-cu-gold transition-colors">
                    Website Upgrader Pro - Web Design Studio
                  </h3>
                </div>
              </div>
              <TitleBlock dwgNo="LC-003" rev="B" date="2026" />
            </div>

            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-10 items-start">

                {/* Left: full story */}
                <div>
                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    I co-founded{' '}
                    <span className="text-cu-gold font-semibold">Website Upgrader Pro</span>{' '}
                    with Louis Sader, a registered web design studio.
                    We've grown it to <span className="text-white font-medium">3 retained clients generating $900/month in recurring revenue</span>,
                    building beautiful, unique, affordable websites for professionals and businesses who deserve more than a cookie-cutter template.
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed mb-6">
                    The portfolio you're looking at right now was <span className="text-white font-medium">built from scratch by me using Claude AI</span> in
                    React, Vite, and Tailwind CSS. No themes, no drag-and-drop builders. I'm fluent in the new
                    generation of AI tools and use them to design, build, and ship custom sites faster than
                    traditional development ever could. We also run targeted{' '}
                    <span className="text-white font-medium">Meta (Facebook & Instagram) ad campaigns</span> for clients,
                    using Claude AI to sharpen ad copy, audience targeting, and campaign performance.
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-dark-700/40">
                    {[
                      { value: '3',    label: 'Retained Clients' },
                      { value: '$900', label: 'Monthly Recurring' },
                      { value: '$0',   label: 'Templates Used' },
                    ].map((s, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-black font-mono gradient-text leading-none mb-1">{s.value}</div>
                        <div className="font-mono text-[9px] text-dark-600 tracking-[0.15em] uppercase">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'GitHub'].map(tech => (
                      <span key={tech} className="blueprint-badge">{tech}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://websiteupgraderpro.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cu-gold text-black text-sm font-bold tracking-[0.12em] uppercase hover:bg-cu-gold-light transition-colors duration-200 group/btn"
                  >
                    <Globe size={15} />
                    VIEW WEBSITE
                    <ExternalLink size={12} className="opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Right: feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {studioFeatures.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 14 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
                      className="relative rounded-xl p-4 bg-dark-800/60 border border-dark-700/50 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px]"
                        style={{ background: `linear-gradient(90deg, ${f.color}60, transparent)` }} />
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                        <f.icon size={15} style={{ color: f.color }} />
                      </div>
                      <h4 className="text-white text-xs font-semibold mb-1">{f.title}</h4>
                      <p className="text-dark-500 text-xs leading-relaxed">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* APPROVED stamp */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="border-2 border-cu-gold/40 rounded px-2 py-0.5 rotate-[-12deg]">
              <span className="font-mono text-[9px] text-cu-gold/60 tracking-widest font-bold">LIVE</span>
            </div>
          </div>
        </motion.div>

        {/* ── LC-002: Trail Design - smaller card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative group"
        >
          <div className="glass rounded-2xl overflow-hidden card-hover flex flex-col">
            <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${projects[1].accent}, transparent)` }} />
            <div className="flex items-center justify-between px-5 py-4 border-b border-dark-700/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${projects[1].accent}20`, border: `1px solid ${projects[1].accent}40` }}>
                  <TreePine size={18} style={{ color: projects[1].accent }} />
                </div>
                <span className="font-mono text-[9px] text-dark-600 tracking-widest">{projects[1].dwgNo}</span>
              </div>
              <TitleBlock dwgNo={projects[1].dwgNo} rev={projects[1].rev} date={projects[1].date} />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cu-gold-light transition-colors">
                {projects[1].title}
              </h3>
              <p className="text-dark-400 text-sm mb-4 leading-relaxed">{projects[1].description}</p>
              <div className="grid sm:grid-cols-2 gap-1.5 mb-4">
                {projects[1].highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs text-dark-300">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: projects[1].accent }} />
                    {h}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dark-700/40">
                {projects[1].technologies.map(tech => (
                  <span key={tech} className="blueprint-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.linkedin.com/in/logan-carter-35h/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-blueprint"
          >
            <Linkedin size={18} />
            View More on LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
