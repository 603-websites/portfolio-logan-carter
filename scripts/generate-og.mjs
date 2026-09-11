import sharp from 'sharp'

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c0a09"/>
      <stop offset="100%" style="stop-color:#1c1917"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#ea580c"/>
    </linearGradient>
    <linearGradient id="orb1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0"/>
    </linearGradient>
    <linearGradient id="orb2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ea580c;stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:#ea580c;stop-opacity:0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative orbs -->
  <circle cx="200" cy="150" r="250" fill="url(#orb1)"/>
  <circle cx="1000" cy="480" r="300" fill="url(#orb2)"/>

  <!-- Top border accent -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- LC Logo -->
  <rect x="80" y="180" width="110" height="110" rx="22" fill="#1c1917" stroke="#44403c" stroke-width="1.5"/>
  <text x="135" y="252" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" text-anchor="middle" fill="url(#accent)">LC</text>

  <!-- Name -->
  <text x="220" y="225" font-family="Inter, system-ui, sans-serif" font-size="56" font-weight="800" fill="#fafaf9">Logan Carter</text>

  <!-- Title -->
  <text x="222" y="275" font-family="Inter, system-ui, sans-serif" font-size="26" font-weight="500" fill="#a8a29e">Mechanical Engineering Student</text>

  <!-- Divider line -->
  <rect x="80" y="320" width="200" height="3" rx="1.5" fill="url(#accent)"/>

  <!-- Description -->
  <text x="80" y="370" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#d6d3d1">University of Massachusetts Lowell</text>
  <text x="80" y="405" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#d6d3d1">SolidWorks  |  MATLAB  |  Ansys  |  3D Printing</text>

  <!-- Bottom tags -->
  <rect x="80" y="470" width="100" height="36" rx="18" fill="#1c1917" stroke="#44403c" stroke-width="1"/>
  <text x="130" y="494" font-family="monospace" font-size="14" text-anchor="middle" fill="#f59e0b">3.6 GPA</text>

  <rect x="200" y="470" width="160" height="36" rx="18" fill="#1c1917" stroke="#44403c" stroke-width="1"/>
  <text x="280" y="494" font-family="monospace" font-size="14" text-anchor="middle" fill="#f59e0b">Dean's List</text>

  <rect x="380" y="470" width="180" height="36" rx="18" fill="#1c1917" stroke="#44403c" stroke-width="1"/>
  <text x="470" y="494" font-family="monospace" font-size="14" text-anchor="middle" fill="#f59e0b">Honors College</text>

  <!-- Bottom border accent -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
</svg>
`

await sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png')

console.log('OG image generated: public/og-image.png')
