import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.S. Mechanical Engineering",
      school: "University of Colorado Boulder",
      location: "Boulder, CO",
      period: "Expected December 2027",
      honors: "3.6 GPA | ABET Accredited",
      minors: "Math & Aerospace Engineering",
      current: true
    },
    {
      degree: "Mechanical Engineering",
      school: "University of Massachusetts Lowell",
      location: "Lowell, MA",
      period: "Completed May 2025",
      honors: "Dean's List | Honors College | 3.6 GPA",
      minors: "Math & Finance",
      current: false
    }
  ]

  const highlights = [
    {
      icon: Award,
      title: "Dean's List",
      detail: "Fall 2024 / Spring 2025"
    },
    {
      icon: GraduationCap,
      title: "Naval Academy Accepted",
      detail: "Class of 2028"
    }
  ]

  const clubs = [
    { name: "Business Analytics Society", status: "Member" },
    { name: "Engineers for a Sustainable World", status: "Member" },
    { name: "Leaders in Action", status: "Member" },
  ]

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            Building a strong engineering foundation through rigorous academics and campus involvement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-cu-gold font-medium">{edu.school}</p>
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-dark-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cu-gold rounded-full shrink-0" />
                    {edu.honors}
                  </p>
                  <p className="text-dark-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cu-gold rounded-full shrink-0" />
                    Minors: {edu.minors}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-5 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-cu-gold/10 flex items-center justify-center mb-3">
                    <item.icon className="text-cu-gold" size={20} />
                  </div>
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-dark-400 text-xs mt-1">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar: CU photo + clubs */}
          <div className="space-y-6">
            {/* CU Boulder campus photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative overflow-hidden rounded-xl"
            >
              <img
                src="/images/cu-boulder.webp"
                alt="University of Colorado Boulder"
                width="1200"
                height="800"
                loading="lazy"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <div>
                  <p className="font-mono text-[9px] text-cu-gold tracking-[0.25em] uppercase">University of Colorado</p>
                  <p className="font-mono text-[8px] text-white/50 mt-0.5">Boulder, CO · Est. 1876</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 w-5 h-5 border-l border-t border-cu-gold/60" />
              <div className="absolute top-2 right-2 w-5 h-5 border-r border-t border-cu-gold/60" />
            </motion.div>

            {/* Clubs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6 h-fit"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cu-gold rounded-full" />
                Clubs & Activities
              </h3>
              <div className="space-y-3">
                {clubs.map((club) => (
                  <div
                    key={club.name}
                    className="p-3 rounded-lg bg-dark-800/50 border border-dark-700/50"
                  >
                    <p className="text-dark-300 font-medium text-sm">{club.name}</p>
                    <p className="text-xs text-dark-500 mt-1">{club.status}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
