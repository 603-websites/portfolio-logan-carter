const items = [
  'CU BOULDER',
  'MECHANICAL ENGINEERING',
  'MATH MINOR',
  'AEROSPACE MINOR',
  'BOULDER, CO',
  'SOLIDWORKS',
  'MATLAB',
  'ANSYS FEA',
  '3D PRINTING',
  'WEB DEVELOPER',
  '603 WEBSITES',
  'SKI ENTHUSIAST',
  'GOLFER',
  'CIRTRONICS INTERN',
  'CLASS OF 2027',
]

const Marquee = () => {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="relative w-full overflow-hidden bg-cu-gold py-4 border-y border-cu-gold-dark">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-black font-black text-sm tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="text-black/40 text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
