// Custom High-Fidelity SVG & Visual Templates for Kungnoi Y. & Melody N. (Mozart Music)
// Recreating the exact aesthetic of Images 1, 2, 3, 4, and 5

export interface PresetSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  url: string;
}

// SVG Generator helper to create crisp luxury album artwork
function createAlbumSvg(params: {
  title: string;
  artist: string;
  subtitle: string;
  tagline: string;
  monogram: string;
  bgGradient: string;
  bokehColors: string[];
  tracklist?: string[];
  isWide?: boolean;
}): string {
  const width = params.isWide ? 1200 : 800;
  const height = params.isWide ? 675 : 800;

  const bokehCircles = params.bokehColors.map((color, idx) => {
    const cx = (idx * 173 + 120) % width;
    const cy = (idx * 137 + 90) % height;
    const r = 40 + (idx % 4) * 28;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.35" filter="url(#blur)" />`;
  }).join('');

  const tracksSvg = params.tracklist
    ? params.tracklist.map((track, i) => {
        const num = (i + 1).toString().padStart(2, '0');
        const y = 380 + i * 36;
        return `
          <text x="560" y="${y}" fill="#d4af37" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" letter-spacing="1">${num}</text>
          <text x="590" y="${y}" fill="#f5e6d3" font-family="'Noto Sans Thai', sans-serif" font-size="14" font-weight="500">${track}</text>
        `;
      }).join('')
    : '';

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
      <defs>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="35" />
        </filter>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fad0c4" />
          <stop offset="35%" stop-color="#ffd1ff" />
          <stop offset="70%" stop-color="#e29578" />
          <stop offset="100%" stop-color="#ffb5a7" />
        </linearGradient>
        <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c59b6d" />
          <stop offset="50%" stop-color="#e8c39e" />
          <stop offset="100%" stop-color="#8a5a36" />
        </linearGradient>
        <linearGradient id="darkBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0d0a0b" />
          <stop offset="50%" stop-color="#161114" />
          <stop offset="100%" stop-color="#080608" />
        </linearGradient>
        <pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="rgba(212,175,55,0.06)" stroke-width="1"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#darkBg)" />
      ${bokehCircles}
      <rect width="${width}" height="${height}" fill="url(#mesh)" />

      <!-- Vignette Overlay -->
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="40%" stop-color="transparent" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.85" />
      </radialGradient>
      <rect width="${width}" height="${height}" fill="url(#vignette)" />

      <!-- Top Header / Mozart Music Logo -->
      <g transform="translate(45, 45)">
        <text x="0" y="22" fill="#ffffff" font-family="'Playfair Display', serif" font-style="italic" font-weight="900" font-size="26" letter-spacing="1">Mozart</text>
        <text x="3" y="36" fill="#e29578" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="800" letter-spacing="4">M U S I C</text>
      </g>

      <!-- Genre Tag Top Middle -->
      <g transform="translate(${width / 2}, 55)" text-anchor="middle">
        <text fill="#fad0c4" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="3">D R E A M Y   S O U L   P O P   ✦   R &amp; B   P O P</text>
      </g>

      <!-- Huge Luxury Monogram / Letter -->
      <g transform="translate(${params.isWide ? 780 : 180}, ${params.isWide ? 80 : 50})" opacity="0.45">
        <text x="0" y="480" fill="url(#bronzeGrad)" font-family="'Cinzel', 'Playfair Display', serif" font-weight="900" font-size="${params.isWide ? 580 : 620}" letter-spacing="-20" stroke="rgba(255,209,255,0.4)" stroke-width="2">${params.monogram}</text>
      </g>

      <!-- Album Badge & Description -->
      <g transform="translate(50, 160)">
        <rect x="0" y="0" width="130" height="2" fill="#e29578" />
        <text x="0" y="24" fill="#fad0c4" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" letter-spacing="3">DEBUT ALBUM</text>
        <text x="0" y="60" fill="#f5e6d3" font-family="'Playfair Display', serif" font-style="italic" font-size="16" letter-spacing="0.5">A VOICE</text>
        <text x="0" y="82" fill="#f5e6d3" font-family="'Playfair Display', serif" font-style="italic" font-size="16" letter-spacing="0.5">THAT FEELS</text>
        <text x="0" y="104" fill="#f5e6d3" font-family="'Playfair Display', serif" font-style="italic" font-size="16" letter-spacing="0.5">LIKE A MEMORY.</text>
      </g>

      <!-- Main Script Typography: Kungnoi Y. / Melody N. -->
      <g transform="translate(${params.isWide ? 100 : 60}, ${params.isWide ? 460 : 540})">
        <text x="0" y="0" fill="url(#roseGoldGrad)" font-family="'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive" font-style="italic" font-size="${params.isWide ? 90 : 84}" font-weight="400" filter="url(#glow)">${params.artist}</text>
        <text x="8" y="55" fill="url(#bronzeGrad)" font-family="'Cinzel', 'Playfair Display', serif" font-size="64" font-weight="900" letter-spacing="4">Y.</text>
        <text x="14" y="90" fill="#f5e6d3" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" letter-spacing="6">D E B U T   A L B U M</text>
      </g>

      <!-- Tracklist (If enabled for Template 5) -->
      ${tracksSvg}

      <!-- Bottom Slogan & Signature -->
      <g transform="translate(${width - 45}, ${height - 65})" text-anchor="end">
        <text fill="#fad0c4" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="3">${params.tagline}</text>
        <text y="32" fill="url(#roseGoldGrad)" font-family="'Brush Script MT', 'Dancing Script', cursive" font-style="italic" font-size="28">${params.artist} ♡</text>
      </g>

      <!-- Barcode in bottom left corner -->
      <g transform="translate(45, ${height - 75})">
        <rect x="0" y="0" width="75" height="42" fill="#ffffff" rx="2" />
        <!-- Barcode lines -->
        <line x1="6" y1="5" x2="6" y2="30" stroke="#000000" stroke-width="2"/>
        <line x1="11" y1="5" x2="11" y2="30" stroke="#000000" stroke-width="1"/>
        <line x1="15" y1="5" x2="15" y2="30" stroke="#000000" stroke-width="3"/>
        <line x1="22" y1="5" x2="22" y2="30" stroke="#000000" stroke-width="1.5"/>
        <line x1="27" y1="5" x2="27" y2="30" stroke="#000000" stroke-width="2.5"/>
        <line x1="33" y1="5" x2="33" y2="30" stroke="#000000" stroke-width="1"/>
        <line x1="38" y1="5" x2="38" y2="30" stroke="#000000" stroke-width="3.5"/>
        <line x1="46" y1="5" x2="46" y2="30" stroke="#000000" stroke-width="1"/>
        <line x1="51" y1="5" x2="51" y2="30" stroke="#000000" stroke-width="2"/>
        <line x1="57" y1="5" x2="57" y2="30" stroke="#000000" stroke-width="1.5"/>
        <line x1="63" y1="5" x2="63" y2="30" stroke="#000000" stroke-width="3"/>
        <line x1="69" y1="5" x2="69" y2="30" stroke="#000000" stroke-width="1.5"/>
        <text x="37" y="38" fill="#000000" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="900" text-anchor="middle" letter-spacing="1">KUNGNOI Y.</text>
        
        <!-- Year vertical text -->
        <text x="88" y="25" fill="#888888" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" transform="rotate(-90 88 25)" letter-spacing="1">KNY 2024</text>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}

// 10 Preset Visual Slides matching Kungnoi Y. album visuals & user request:
// Slide 1: Image 1 Template (Kungnoi Y. Debut Album)
// Slide 2: Image 2 (Golden Hour City Bokeh)
// Slide 3: Image 3 (Elegance Hand-on-Chin)
// Slide 4: Image 4 (Personal Music Album Wide Banner)
// Slide 5: Image 5 (10-Track Tracklist Album Cover)
// Slide 6: Acoustic Sunset Edition
// Slide 7: Live Concert & Spotlight Atmosphere
// Slide 8: Between Us Special Single Edition
// Slide 9: Rose Gold Studio Monogram
// Slide 10: Mozart Music Luxury Master Collection

export const DEFAULT_SLIDES_PRESETS: PresetSlide[] = [
  {
    id: 'slide-1',
    title: 'แทร็ก 01 • ถ้าเธอยังไม่ลืม',
    subtitle: 'Track 01 ✦ If You Haven\'t Forgotten (Dreamy Soul Pop)',
    description: 'เพลงไตเติลหลักเดบิวต์อัลบั้ม Kungnoi Y. กับโทนแสงไฟโบเก้เมืองยามค่ำคืนและตัวอักษรโรสโกลด์หรูหรา',
    tag: 'Track 01 • Title Track',
    url: createAlbumSvg({
      title: 'ถ้าเธอยังไม่ลืม',
      artist: 'Kungnoi',
      subtitle: 'IF YOU HAVEN\'T FORGOTTEN',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#120d11',
      bokehColors: ['#ffb7b2', '#e29578', '#ffdac1', '#d4af37', '#9a8c98', '#ff9aa2']
    })
  },
  {
    id: 'slide-2',
    title: 'แทร็ก 02 • อย่ามองแบบนั้น',
    subtitle: 'Track 02 ✦ Don\'t Look At Me Like That (Warm City Glow)',
    description: 'ภาพพอร์ตเทรตศิลปินกุ้งน้อยมองตรงด้วยสายตามีเสน่ห์ ท่ามกลางไฟระยิบระยับริมสายน้ำ',
    tag: 'Track 02 • Single',
    url: createAlbumSvg({
      title: 'อย่ามองแบบนั้น',
      artist: 'Kungnoi',
      subtitle: 'DON\'T LOOK AT ME LIKE THAT',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#170f14',
      bokehColors: ['#f4a261', '#e76f51', '#2a9d8f', '#e9c46a', '#fad0c4']
    })
  },
  {
    id: 'slide-3',
    title: 'แทร็ก 03 • ใจกลัว...แต่ยังรัก',
    subtitle: 'Track 03 ✦ Afraid Heart... Still In Love (Elegance & Soul)',
    description: 'ภาพถ่ายโมเมนต์ความมั่นใจและอบอุ่น ลวดลายโมโนแกรมโรสโกลด์สะท้อนเอกลักษณ์',
    tag: 'Track 03 • Soul Pop',
    url: createAlbumSvg({
      title: 'ใจกลัว...แต่ยังรัก',
      artist: 'Kungnoi',
      subtitle: 'AFRAID HEART... STILL IN LOVE',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#1a1017',
      bokehColors: ['#ffb5a7', '#fcd5ce', '#f8edeb', '#e8c39e', '#d4af37']
    })
  },
  {
    id: 'slide-4',
    title: 'แทร็ก 04 • คืนที่ไม่มีคำลา',
    subtitle: 'Track 04 ✦ Night Without Goodbye (Tokyo Lights Wide)',
    description: 'แบนเนอร์กว้างพาโนรามา Personal Music Album: Your Song. Your Story. Your Moment...',
    tag: 'Track 04 • Midnight Mood',
    url: createAlbumSvg({
      title: 'คืนที่ไม่มีคำลา',
      artist: 'Kungnoi',
      subtitle: 'NIGHT WITHOUT GOODBYE',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#0f0a0d',
      bokehColors: ['#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'],
      isWide: true
    })
  },
  {
    id: 'slide-5',
    title: 'แทร็ก 05 • ปล่อยให้เวลาพาเธอไป',
    subtitle: 'Track 05 ✦ Let Time Drift You Away (Full Tracklist Cover)',
    description: 'ปกหลังพร้อมรายชื่อ 10 เพลงครบถ้วนตามภาพที่ 5 พร้อมให้เลือกฟังและร้องตาม',
    tag: 'Track 05 • Complete Album',
    url: createAlbumSvg({
      title: 'ปล่อยให้เวลาพาเธอไป',
      artist: 'Melody',
      subtitle: 'LET TIME DRIFT YOU AWAY',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'N',
      bgGradient: '#140c12',
      bokehColors: ['#e29578', '#ffddd2', '#83c5be', '#ffb703', '#fb8500'],
      tracklist: [
        'ถ้าเธอยังไม่ลืม',
        'อย่ามองแบบนั้น',
        'ใจกลัว...แต่ยังรัก',
        'คืนที่ไม่มีคำลา',
        'ปล่อยให้เวลาพาเธอไป',
        'ไม่ได้อยากเป็นคนพิเศษ',
        'Between Us',
        'Still Think About Us',
        'ลบไม่ได้...ช่วยไม่คิดถึง',
        'ถ้าเธอยังไม่ลืม (Acoustic Ver.)'
      ]
    })
  },
  {
    id: 'slide-6',
    title: 'แทร็ก 06 • ไม่ได้อยากเป็นคนพิเศษ',
    subtitle: 'Track 06 ✦ Never Wanted To Be Special (Sunset Sessions)',
    description: 'เวอร์ชันอบอุ่น บรรยากาศพระอาทิตย์ตกดินและเสียงร้องนุ่มนวล',
    tag: 'Track 06 • Acoustic Mood',
    url: createAlbumSvg({
      title: 'ไม่ได้อยากเป็นคนพิเศษ',
      artist: 'Kungnoi',
      subtitle: 'NEVER WANTED TO BE SPECIAL',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#1f1118',
      bokehColors: ['#ff7b00', '#ffb703', '#ffd166', '#f28482', '#f5cac3']
    })
  },
  {
    id: 'slide-7',
    title: 'แทร็ก 07 • Between Us',
    subtitle: 'Track 07 ✦ Between Us (Live Stage & Spotlight)',
    description: 'บรรยากาศบนเวทีคอนเสิร์ตใหญ่ แสงสปอตไลต์ส่องประกายออร่าระดับมืออาชีพ',
    tag: 'Track 07 • Live R&B',
    url: createAlbumSvg({
      title: 'BETWEEN US',
      artist: 'Kungnoi',
      subtitle: 'BETWEEN US ✦ SPOTLIGHT EDITION',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#110a14',
      bokehColors: ['#c77dff', '#e0aaff', '#ffc6ff', '#ffd6a5', '#ff9e00']
    })
  },
  {
    id: 'slide-8',
    title: 'แทร็ก 08 • Still Think About Us',
    subtitle: 'Track 08 ✦ Still Think About Us (Midnight Single)',
    description: 'ซิงเกิลพิเศษ Still Think About Us สไตล์ R&B Pop บรรยากาศไฟนีออนกลางคืนโรแมนติก',
    tag: 'Track 08 • Special Single',
    url: createAlbumSvg({
      title: 'STILL THINK ABOUT US',
      artist: 'Kungnoi',
      subtitle: 'STILL THINK ABOUT US ✦ MIDNIGHT VIBE',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#0e0b16',
      bokehColors: ['#480ca8', '#4cc9f0', '#f72585', '#b5179e', '#7209b7']
    })
  },
  {
    id: 'slide-9',
    title: 'แทร็ก 09 • ลบไม่ได้...ช่วยไม่คิดถึง',
    subtitle: 'Track 09 ✦ Can\'t Erase... Help Me Forget (Monogram Edition)',
    description: 'โมโนแกรมสัญลักษณ์ K ตัวอักษรศิลป์โรสโกลด์เปล่งประกายความสง่างาม',
    tag: 'Track 09 • Deep Emotion',
    url: createAlbumSvg({
      title: 'ลบไม่ได้...ช่วยไม่คิดถึง',
      artist: 'Kungnoi',
      subtitle: 'CAN\'T ERASE... HELP ME FORGET',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#180e15',
      bokehColors: ['#ffb703', '#fb8500', '#d4af37', '#e29578', '#ffccd5']
    })
  },
  {
    id: 'slide-10',
    title: 'แทร็ก 10 • ถ้าเธอยังไม่ลืม (Acoustic Ver.)',
    subtitle: 'Track 10 ✦ If You Haven\'t Forgotten - Acoustic (Master Collection)',
    description: 'เวอร์ชันอะคูสติกสุดพิเศษ คอลเลกชันภาพรวมระดับมาสเตอร์ พรีเซ็ตลำดับที่ 10',
    tag: 'Track 10 • Acoustic Master',
    url: createAlbumSvg({
      title: 'ถ้าเธอยังไม่ลืม (Acoustic)',
      artist: 'Kungnoi',
      subtitle: 'IF YOU HAVEN\'T FORGOTTEN (ACOUSTIC VER.)',
      tagline: 'FEEL IT. LIVE IT. REMEMBER IT.',
      monogram: 'K',
      bgGradient: '#140d13',
      bokehColors: ['#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#cdb4db'],
      isWide: true
    })
  }
];
