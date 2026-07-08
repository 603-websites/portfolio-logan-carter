import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EngineerScene = () => {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // draw: animates pathLength 0→1 + instant opacity reveal
  const draw = (delay, dur = 1.0) => ({
    initial:    { pathLength: 0, opacity: 0 },
    animate:    inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: {
      pathLength: { duration: dur, delay, ease: 'easeInOut' },
      opacity:    { duration: 0.01, delay },
    },
  })

  const fade = (delay, dur = 0.5) => ({
    initial:    { opacity: 0 },
    animate:    inView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: dur, delay },
  })

  const pop = (delay) => ({
    initial:    { opacity: 0, scale: 0 },
    animate:    inView ? { opacity: 1, scale: 1 } : {},
    transition: { duration: 0.4, delay, type: 'spring', stiffness: 240, damping: 16 },
  })

  const B = '#0ea5e9'               // blueprint blue
  const D = '#f59e0b'               // dimension amber
  const W = 'rgba(255,255,255,0.88)'

  return (
    <div ref={ref} className="w-full select-none pointer-events-none">
      <svg viewBox="0 0 700 460" className="w-full h-auto">

        {/* ══ DRAFTING BOARD ══════════════════════════════════════ */}
        <motion.rect x="20" y="12" width="425" height="436" rx="5"
          fill="rgba(14,165,233,0.02)" stroke={B} strokeWidth="2" strokeOpacity="0.4"
          {...draw(0, 1.5)} />
        <motion.rect x="34" y="26" width="397" height="408" rx="2"
          fill="none" stroke={B} strokeWidth="0.4" strokeOpacity="0.2"
          {...draw(0.1, 1.4)} />

        {/* Blueprint grid */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.line key={`gh${i}`}
            x1="34" y1={34 + i * 30} x2="431" y2={34 + i * 30}
            stroke={B} strokeWidth="0.22" strokeOpacity="0.1"
            {...fade(0.35 + i * 0.025, 0.5)} />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.line key={`gv${i}`}
            x1={34 + i * 28} y1="26" x2={34 + i * 28} y2="434"
            stroke={B} strokeWidth="0.22" strokeOpacity="0.1"
            {...fade(0.35 + i * 0.025, 0.5)} />
        ))}

        {/* ══ ROCKET CENTER LINE ══════════════════════════════════ */}
        <motion.line x1="226" y1="44" x2="226" y2="360"
          stroke={B} strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="8 5"
          {...draw(0.85, 1.2)} />

        {/* ══ ROCKET ══════════════════════════════════════════════ */}
        {/* Body */}
        <motion.path d="M186,138 L266,138 L266,292 L186,292 Z"
          fill="none" stroke={B} strokeWidth="2.5" {...draw(1.0, 1.0)} />

        {/* Nosecone */}
        <motion.path d="M226,60 L186,138 L266,138 Z"
          fill="none" stroke={B} strokeWidth="2.5" {...draw(1.8, 0.8)} />

        {/* Left fin */}
        <motion.path d="M186,222 L150,296 L186,283 Z"
          fill="none" stroke={B} strokeWidth="2" {...draw(2.5, 0.65)} />

        {/* Right fin */}
        <motion.path d="M266,222 L302,296 L266,283 Z"
          fill="none" stroke={B} strokeWidth="2" {...draw(2.9, 0.65)} />

        {/* Porthole outer */}
        <motion.circle cx="226" cy="183" r="23"
          fill="none" stroke={B} strokeWidth="2" {...draw(3.3, 0.8)} />

        {/* Porthole inner dashed ring */}
        <motion.circle cx="226" cy="183" r="11"
          fill="none" stroke={B} strokeWidth="1" strokeDasharray="4 3" {...draw(3.9, 0.5)} />

        {/* Nozzle */}
        <motion.path d="M200,292 L252,292 L264,324 L188,324 Z"
          fill="none" stroke={B} strokeWidth="2" {...draw(3.5, 0.65)} />

        {/* Exhaust outer */}
        <motion.path d="M195,324 Q210,367 226,350 Q242,367 257,324"
          fill="none" stroke="#f97316" strokeWidth="2.5" {...draw(4.0, 0.7)} />

        {/* Exhaust inner */}
        <motion.path d="M207,324 Q218,352 226,340 Q234,352 245,324"
          fill="none" stroke="#fbbf24" strokeWidth="1.5" {...draw(4.3, 0.5)} />

        {/* ══ DIMENSION LINES ══════════════════════════════════════ */}
        {/* Vertical height */}
        <motion.line x1="284" y1="60" x2="284" y2="324"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(4.7, 0.7)} />
        <motion.line x1="279" y1="60" x2="289" y2="60"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(4.75, 0.2)} />
        <motion.line x1="279" y1="324" x2="289" y2="324"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(4.8, 0.2)} />
        <motion.text x="292" y="197" fill={D} fontSize="8.5"
          fontFamily="JetBrains Mono, monospace" opacity="0.75" {...fade(4.9)}>
          264mm
        </motion.text>

        {/* Horizontal width */}
        <motion.line x1="186" y1="343" x2="266" y2="343"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(5.1, 0.5)} />
        <motion.line x1="186" y1="338" x2="186" y2="348"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(5.15, 0.15)} />
        <motion.line x1="266" y1="338" x2="266" y2="348"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(5.2, 0.15)} />
        <motion.text x="194" y="359" fill={D} fontSize="8.5"
          fontFamily="JetBrains Mono, monospace" opacity="0.75" {...fade(5.3)}>
          80mm
        </motion.text>

        {/* Leader line to porthole */}
        <motion.line x1="249" y1="177" x2="322" y2="153"
          stroke={D} strokeWidth="0.7" strokeOpacity="0.6" {...draw(5.4, 0.45)} />
        <motion.text x="326" y="151" fill={D} fontSize="8.5"
          fontFamily="JetBrains Mono, monospace" opacity="0.75" {...fade(5.6)}>
          Ø46mm
        </motion.text>

        {/* ══ TITLE BLOCK (board footer) ════════════════════════════ */}
        <motion.line x1="20" y1="416" x2="445" y2="416"
          stroke={B} strokeWidth="0.7" strokeOpacity="0.3" {...draw(0.3, 0.8)} />
        <motion.text x="36" y="430" fill={B} fontSize="6.5"
          fontFamily="JetBrains Mono, monospace" opacity="0.35" {...fade(0.7)}>
          DWG: LC-ROCKET-001  |  REV: A  |  SCALE: 1:10  |  DRAWN: LC  |  2025
        </motion.text>

        {/* ══ APPROVED STAMP ════════════════════════════════════════ */}
        <motion.g
          initial={{ opacity: 0, scale: 0.2, rotate: -35 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: -18 } : {}}
          transition={{ duration: 0.5, delay: 7.0, type: 'spring', stiffness: 260, damping: 18 }}
          style={{ transformOrigin: '356px 108px' }}
        >
          <rect x="296" y="76" width="120" height="52" rx="4"
            fill="rgba(34,197,94,0.06)" stroke="#22c55e" strokeWidth="2.5" strokeOpacity="0.65" />
          <text x="356" y="100" textAnchor="middle" fill="#22c55e" fontSize="15"
            fontFamily="JetBrains Mono, monospace" fontWeight="bold" opacity="0.65">
            APPROVED
          </text>
          <text x="356" y="118" textAnchor="middle" fill="#22c55e" fontSize="7.5"
            fontFamily="JetBrains Mono, monospace" opacity="0.45">
            DATE: 2025 // ENG: LC
          </text>
        </motion.g>

        {/* Stars after stamp */}
        {[
          { x: 270, y: 52,  d: 7.10 },
          { x: 356, y: 46,  d: 7.20 },
          { x: 432, y: 66,  d: 7.25 },
          { x: 258, y: 90,  d: 7.15 },
          { x: 424, y: 95,  d: 7.30 },
        ].map((s, i) => (
          <motion.text key={i} x={s.x} y={s.y} textAnchor="middle" fill="#fbbf24" fontSize="14"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: [0, 1, 0], scale: [0, 1.4, 0] } : {}}
            transition={{ duration: 1.3, delay: s.d }}>
            ★
          </motion.text>
        ))}

        {/* ══ STICK FIGURE ══════════════════════════════════════════ */}

        {/* Hard hat */}
        <motion.path d="M556,119 Q580,103 604,119"
          fill="#f59e0b" {...pop(0.1)} />
        <motion.rect x="553" y="118" width="54" height="6" rx="2" fill="#f59e0b"
          {...fade(0.1, 0.15)} />

        {/* Head */}
        <motion.circle cx="580" cy="143" r="21"
          fill="none" stroke={W} strokeWidth="2.2"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15, type: 'spring', stiffness: 240 }}
          style={{ transformOrigin: '580px 143px' }}
        />

        {/* Eyes */}
        <motion.circle cx="573" cy="140" r="2.2" fill={W} {...fade(0.35, 0.2)} />
        <motion.circle cx="587" cy="140" r="2.2" fill={W} {...fade(0.35, 0.2)} />

        {/* Smile */}
        <motion.path d="M574,150 Q580,156 586,150"
          fill="none" stroke={W} strokeWidth="1.8" {...draw(0.4, 0.3)} />

        {/* Body */}
        <motion.line x1="580" y1="164" x2="580" y2="254"
          stroke={W} strokeWidth="2.5" {...draw(0.28, 0.4)} />

        {/* Drawing arm - extends toward board, fades out when stamp appears */}
        <motion.line x1="580" y1="190" x2="444" y2="170"
          stroke={W} strokeWidth="2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: [0, 1, 1, 0] } : { pathLength: 0, opacity: 0 }}
          transition={{
            pathLength: { duration: 0.5, delay: 0.5, ease: 'easeInOut' },
            opacity:    { duration: 10, delay: 0.5, times: [0, 0.04, 0.70, 0.75] },
          }}
        />

        {/* Pencil at arm tip */}
        <motion.path d="M444,170 L430,162 L440,173 Z"
          fill={W} stroke={W} strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 10, delay: 0.7, times: [0, 0.04, 0.68, 0.73] }}
        />

        {/* Celebration arm - fades in after stamp */}
        <motion.line x1="580" y1="190" x2="543" y2="145"
          stroke={W} strokeWidth="2.5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 7.5 }}
        />

        {/* Right arm */}
        <motion.line x1="580" y1="190" x2="618" y2="230"
          stroke={W} strokeWidth="2.5" {...draw(0.38, 0.38)} />

        {/* Left leg */}
        <motion.line x1="580" y1="254" x2="553" y2="322"
          stroke={W} strokeWidth="2.5" {...draw(0.48, 0.38)} />
        <motion.line x1="553" y1="322" x2="537" y2="322"
          stroke={W} strokeWidth="2" {...draw(0.68, 0.18)} />

        {/* Right leg */}
        <motion.line x1="580" y1="254" x2="607" y2="322"
          stroke={W} strokeWidth="2.5" {...draw(0.53, 0.38)} />
        <motion.line x1="607" y1="322" x2="623" y2="322"
          stroke={W} strokeWidth="2" {...draw(0.73, 0.18)} />

        {/* Thought bubble */}
        <motion.g {...fade(1.8, 0.6)}>
          <circle cx="541" cy="98"  r="4"   fill="none" stroke={B} strokeWidth="0.9" opacity="0.28" />
          <circle cx="527" cy="82"  r="6.5" fill="none" stroke={B} strokeWidth="0.9" opacity="0.28" />
          <rect x="492" y="54" width="70" height="22" rx="6"
            fill="rgba(14,165,233,0.07)" stroke={B} strokeWidth="0.9" strokeOpacity="0.28" />
          <text x="527" y="66" textAnchor="middle" fill={B} fontSize="7"
            fontFamily="JetBrains Mono, monospace" opacity="0.5">TO THE</text>
          <text x="527" y="76" textAnchor="middle" fill={B} fontSize="7"
            fontFamily="JetBrains Mono, monospace" opacity="0.5">MOON!</text>
        </motion.g>

        {/* Progress label */}
        <motion.text x="226" y="452" textAnchor="middle" fill={B}
          fontSize="7" fontFamily="JetBrains Mono, monospace"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: [0, 0.4, 0.4, 0] } : {}}
          transition={{ duration: 7.5, delay: 1.0, times: [0, 0.04, 0.88, 1] }}>
          ● RENDERING IN PROGRESS...
        </motion.text>

      </svg>
    </div>
  )
}

export default EngineerScene
