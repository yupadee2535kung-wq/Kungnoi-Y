import { BandMember, Song, LiveShow, NewsItem, FanMessage, GalleryItem } from '../types';
import { IMAGES } from './images';

export const BAND_INFO = {
  name: 'TRIPLETS',
  taglineEng: 'THREE SOULS • THREE VOICES • ONE STORY',
  taglineThai: '3 คน 3 เสียง 3 มุมมอง... หนึ่งเรื่องราว',
  genre: 'Emotion Rock / Pop-Rock / Modern Alternative',
  formedYear: 2022,
  label: 'Independent / Studio Tri-Eage',
  bio: `TRIPLETS (ทริปเพล็ตส์) วงดนตรีร็อกอารมณ์ลึกซึ้งจากการรวมตัวของ 3 เพื่อนสนิท - วิน (WIN), เท็น (Ten) และ ไทเกอร์ (Tiger) ผู้เชื่อในพลังของเสียงดนตรีที่ถ่ายทอดจากหัวใจจริง 

ดนตรีของ TRIPLETS โดดเด่นด้วยเมโลดี้ร็อกฟังติดหู เสียงร้องทรงพลังที่มีกลิ่นอายความเหงาและเว้าวอน ผสานไลน์เบสแน่นแน่นมีมิติ และจังหวะกลองกระแทกใจ โดยมีซิงเกิลล่าสุด "หากวันนั้น..." ที่จับมือกับนักร้องรับเชิญพิเศษ "โมนา (Mona)" สร้างปรากฏการณ์ฮิตติดชาร์ตเพลงทั่วประเทศ`,
  stats: {
    monthlyListeners: '1.2M+',
    youtubeViews: '45M+',
    totalShows: '180+',
    fanclubCount: '250,000+'
  },
  socials: {
    facebook: 'https://facebook.com/tripletsband.official',
    instagram: 'https://instagram.com/triplets.official',
    youtube: 'https://youtube.com/@tripletsband',
    tiktok: 'https://tiktok.com/@triplets.band',
    lineOA: 'https://lin.ee/tripletsofficial'
  },
  bookingContact: {
    phone: '081-987-6543 (คุณนก - Manager)',
    email: 'booking@tripletsband.com',
    line: '@tripletsbooking'
  }
};

export const MEMBERS: BandMember[] = [
  {
    id: 'win',
    nameThai: 'วิน',
    nameEng: 'WIN (Vocal)',
    role: 'Lead Vocal',
    roleDescription: 'เสียงร้องหลักถ่ายทอดอารมณ์ความรู้สึกตรงเข้าถึงหัวใจผู้ฟัง',
    quote: 'เสียงที่ถ่ายทอดความรู้สึกจากหัวใจ... ตรงถึงเธอ',
    bio: 'วินเป็นนักร้องนำผู้สร้างพลังและแรงดึงดูดบนเวที ด้วยน้ำเสียงเข้มมีเสน่ห์เฉพาะตัว สะท้อนทุกห้วงอารมณ์ทั้งความรัก ความเหงา และความหวัง',
    signatureGear: ['Shure KSM9 Microphone', 'Custom Fender Telecaster Thinline', 'Kemper Profiler Stage'],
    favoriteGenre: 'Alternative Rock, Britpop',
    image: IMAGES.winPortrait,
    socials: {
      instagram: '@win_triplets',
      tiktok: '@win.vocal'
    },
    keyTracks: ['หากวันนั้น...', 'ความรักที่หายไป', 'ย้อนเวลาเพื่อเธอ']
  },
  {
    id: 'ten',
    nameThai: 'เท็น',
    nameEng: 'Ten (Bass)',
    role: 'Bass',
    roleDescription: 'จังหวะและมิติที่เชื่อมทุกอารมณ์ให้เป็นหนึ่งเดียว',
    quote: 'จังหวะและมิติที่เชื่อมทุกอารมณ์ให้เป็นหนึ่งเดียว',
    bio: 'เท็นเป็นมือเบสผู้กุมจังหวะเบสหนาหนักลึก เป็นเสาหลักที่ผสานท่วงทำนองเสียงร้องและกลองให้หลอมรวมเป็นเนื้อเดียวกัน',
    signatureGear: ['Music Man StingRay Special 4-String', 'Ampeg SVT-CL Tube Amp', 'Darkglass B7K Ultra'],
    favoriteGenre: 'Post-Rock, Modern Metalcore',
    image: IMAGES.tenPortrait,
    socials: {
      instagram: '@ten_bassline',
      tiktok: '@ten.triplets'
    },
    keyTracks: ['เพราะขาดเธอ', 'รักที่ไม่ได้พูด', 'หากวันนั้น...']
  },
  {
    id: 'tiger',
    nameThai: 'ไทเกอร์',
    nameEng: 'Tiger (Drums)',
    role: 'Drums',
    roleDescription: 'พลังของจังหวะ ที่ผลักดันทุกความรู้สึกให้เดินต่อไป',
    quote: 'พลังของจังหวะ ที่ผลักดันทุกความรู้สึกให้เดินต่อไป',
    bio: 'ไทเกอร์คือขุมพลังหลังชุดกลอง Dynamic การตีทรงพลัง ดุดัน แต่แฝงด้วยลูกล่อลูกชนชั้นเชิงจังหวะที่ทำให้ทุกโชว์เต็มไปด้วยความตื่นเต้น',
    signatureGear: ['Tama Starclassic Walnut/Birch Drumkit', 'Zildjian K Custom Cymbals', 'Promark 5B Drumsticks'],
    favoriteGenre: 'Hard Rock, Progressive Pop',
    image: IMAGES.tigerPortrait,
    socials: {
      instagram: '@tiger_drums',
      tiktok: '@tiger.beat'
    },
    keyTracks: ['คิดถึงเธอเสมอ', 'หากวันนั้น...', 'ความรักที่หายไป']
  },
  {
    id: 'mona',
    nameThai: 'โมนา',
    nameEng: 'Mona (Guest Vocal)',
    role: 'Guest Vocal',
    roleDescription: 'เสียงที่เติมเต็ม... ให้เรื่องราวสมบูรณ์',
    quote: 'เสียงที่เติมเต็ม... ให้เรื่องราวสมบูรณ์',
    bio: 'โมนา นักร้องสาวรับเชิญสุดพิเศษในอัลบั้ม "หากวันนั้น..." เสียงร้องละมุนหวานแต่สะกดอารมณ์ที่มาช่วยเพิ่มมิติและเรื่องราวคู่ขนานให้กับบทเพลง',
    signatureGear: ['Neumann TLM 103', 'Sennheiser Digital Wireless Mic'],
    favoriteGenre: 'Neo-Soul, Emotional Pop-Rock',
    image: IMAGES.monaPortrait,
    socials: {
      instagram: '@mona_voice',
      tiktok: '@mona.official'
    },
    keyTracks: ['หากวันนั้น... (Feat. Mona)']
  }
];

export const ALBUM_INFO = {
  titleThai: 'ถ้าเธอยังไม่ลืม',
  titleEng: 'DEBUT ALBUM — Kungnoi Y.',
  releaseYear: '2024 - 2026',
  conceptQuote: 'A voice that feels like a memory. Feel it. Live it. Remember it.',
  coverImage: IMAGES.albumCover,
  producer: 'Mozart Music & Kungnoi Y.',
  genre: 'Dreamy Soul Pop ✦ R&B Pop',
  description: 'เดบิวต์อัลบั้มเต็ม 10 บทเพลง ถ่ายทอดน้ำเสียงทรงเสน่ห์และเรื่องราวความรัก ความทรงจำ และความรู้สึกที่ไม่อาจลบเลือน'
};

export const SONGS: Song[] = [
  {
    id: 'song-1',
    trackNumber: 1,
    titleThai: 'ถ้าเธอยังไม่ลืม',
    titleEng: 'If You Haven\'t Forgotten',
    duration: '4:18',
    durationSeconds: 258,
    story: 'เพลงไตเติลหลักสไตล์ Dreamy Soul Pop อารมณ์หวานปนเหงา กับน้ำเสียงละมุนสะกดใจ พูดถึงความทรงจำที่ยังคงชัดเจน และคำถามแสนแผ่วเบาในค่ำคืนที่เงียบเหงาว่าเธอยังคงคิดถึงกันอยู่ไหม',
    audioUrl: '/audio/01.mp3.mp3',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    youtubeUrls: [
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
      'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      'https://www.youtube.com/watch?v=RgKAFK5djSk'
    ],
    lyrics: [
      'มองย้อนไปในวันเก่า ที่เคยมีเธอตรงนี้',
      'ทุกภาพความทรงจำยังส่องแสงในใจ',
      'กลิ่นหอมของสายลมในคืนนั้น',
      'ยังคงคอยย้ำเตือนเรื่องราวของเรา...',
      '',
      '(Chorus - Kungnoi Y.)',
      'ถ้าเธอยังไม่ลืมช่วงเวลาเหล่านั้น',
      'โปรดรู้ไว้ว่าฉันยังอยู่ตรงนี้เสมอ',
      'แม้กาลเวลาจะหมุนผ่านไปไกลแสนไกล',
      'แต่หัวใจไม่เคยเปลี่ยนไปเลยสักนาที...',
      '',
      'ในยามค่ำคืนใต้แสงไฟระยิบระยับ',
      'เสียงกระซิบเบาๆ ยังคงเป็นชื่อของเธอ',
      'ถ้าเธอยังไม่ลืม... กลับมาหากันได้ไหม'
    ],
    chords: 'Intro: Fmaj7 | Am7 | Gm7 | C7\nVerse: Fmaj7 | Dm7 | Gm7 | C7\nChorus: Bbmaj7 | C/Bb | Am7 | Dm7 | Gm7 | C7 | Fmaj7',
    audioParams: {
      bpm: 102,
      key: 'F Major',
      style: 'soul_pop',
      rootNote: 65 // F4
    }
  },
  {
    id: 'song-2',
    trackNumber: 2,
    titleThai: 'อย่ามองแบบนั้น',
    titleEng: 'Don\'t Look At Me Like That',
    duration: '3:45',
    durationSeconds: 225,
    audioUrl: '/audio/02.mp3.mp3',
    story: 'แทร็ก R&B Pop กรูฟเซ็กซี่มีเสน่ห์ เล่าถึงสายตาคู่นั้นที่มองมาทีไรก็ทำเอาหัวใจเต้นไม่เป็นจังหวะ และทำให้ค่ำคืนธรรมดากลายเป็นช่วงเวลาที่ยากจะต้านทาน',
    lyrics: [
      'แววตาคู่นั้นที่เธอมองมา',
      'เหมือนมีมนต์สะกดตรึงใจไว้',
      'อย่าเข้ามาใกล้เกินไปกว่านี้',
      'เพราะใจดวงนี้เริ่มจะหวั่นไหว...',
      '',
      '(Chorus)',
      'อย่ามองแบบนั้น... ถ้าเธอไม่ได้คิดอะไร',
      'อย่าส่งยิ้มให้... ถ้าไม่ได้ตั้งใจจะรักกัน',
      'เพราะคนอย่างฉันมันตกหลุมรักง่ายเกินไป',
      'หยุดทำให้ใจสั่นไหว ด้วยสายตาคู่นั้นที'
    ],
    chords: 'Intro: Bbm7 | Ebm7 | Ab7 | Dbmaj7\nChorus: Ebm7 | F7 | Bbm7 | Gbmaj7 | Ebm7 | F7 | Bbm7',
    audioParams: {
      bpm: 108,
      key: 'Bb Minor',
      style: 'rnb_pop',
      rootNote: 58 // Bb3
    }
  },
  {
    id: 'song-3',
    trackNumber: 3,
    titleThai: 'ใจกลัว...แต่ยังรัก',
    titleEng: 'Afraid Heart... Still In Love',
    duration: '4:10',
    durationSeconds: 250,
    audioUrl: '/audio/03.mp3.mp3',
    story: 'บัลลาดโซลหวานซึ้งสุดประทับใจ ถ่ายทอดความสับสนระหว่างความกลัวที่จะต้องเสียใจซ้ำสอง กับความรักที่ล้นเอ่อจนไม่อาจหักห้ามใจ',
    lyrics: [
      'เคยบอกตัวเองจะไม่ยอมเจ็บอีกแล้ว',
      'จะปิดประตูหัวใจ ไม่ให้ใครเข้ามา',
      'แต่พอเป็นเธอ... ทุกกำแพงก็พังทลาย',
      '',
      '(Chorus)',
      'ใจกลัวจะต้องร้องไห้ แต่ข้างในยังคงรักเธอ',
      'แม้รู้ว่าอาจต้องเจ็บ ก็พร้อมจะเสี่ยงอีกครั้ง',
      'ขอเพียงแค่ได้รัก ได้เคียงข้างเธอในวันนี้',
      'ผลลัพธ์จะเป็นอย่างไร... ก็ยอม'
    ],
    chords: 'Intro: Ebmaj7 | Cm7 | Fm7 | Bb7\nChorus: Abmaj7 | Bb/Ab | Gm7 | Cm7 | Fm7 | Bb7 | Ebmaj7',
    audioParams: {
      bpm: 90,
      key: 'Eb Major',
      style: 'soul_pop',
      rootNote: 63 // Eb4
    }
  },
  {
    id: 'song-4',
    trackNumber: 4,
    titleThai: 'คืนที่ไม่มีคำลา',
    titleEng: 'Night Without Goodbye',
    duration: '3:55',
    durationSeconds: 235,
    audioUrl: '/audio/04.mp3.mp3',
    story: 'ค่ำคืนที่เงียบเหงาที่สุด เมื่อคนที่เคยอยู่เคียงข้างหายไปโดยไม่มีแม้แต่คำอธิบายหรือคำบอกลา ทิ้งไว้เพียงความว่างเปล่าและความคิดถึง',
    lyrics: [
      'ไฟข้างทางส่องลงมาบนถนนที่ว่างเปล่า',
      'ไม่มีแม้เงาของคนที่เคยเคียงกาย',
      'จากไปเฉยๆ ไม่บอกกล่าวสักคำ...',
      '',
      '(Chorus)',
      'ในคืนที่ไม่มีคำลา ทิ้งฉันไว้กับน้ำตา',
      'มองหาเธอทุกที่ แต่เจอเพียงความมืดมน',
      'ถ้าไม่รักกันแล้ว ทำไมไม่พูดให้ชัดเจน',
      'ปล่อยให้ฉันเคว้งคว้างคนเดียวทำไม...'
    ],
    chords: 'Intro: Cm7 | Fm7 | Bb7 | Ebmaj7\nChorus: Fm7 | G7 | Cm7 | Abmaj7 | Fm7 | G7 | Cm7',
    audioParams: {
      bpm: 95,
      key: 'C Minor',
      style: 'dreamy_pop',
      rootNote: 60 // C4
    }
  },
  {
    id: 'song-5',
    trackNumber: 5,
    titleThai: 'ปล่อยให้เวลาพาเธอไป',
    titleEng: 'Let Time Drift You Away',
    duration: '4:02',
    durationSeconds: 242,
    audioUrl: '/audio/05.mp3.mp3',
    story: 'เพลง Chill R&B ปลอบประโลมหัวใจที่เหนื่อยล้า การยอมรับความจริงอย่างสงบ และปล่อยให้สายลมกับกาลเวลาค่อยๆ พาความเจ็บปวดลอยผ่านไป',
    lyrics: [
      'เหนื่อยพอแล้วกับการยื้อสิ่งที่ไม่มีวันคืนมา',
      'ปล่อยวางทุกสิ่งไว้ตรงนี้...',
      '',
      '(Chorus)',
      'ปล่อยให้เวลาพาเธอไปตามสายลม',
      'ให้ความทรงจำค่อยๆ จางเป็นบทเรียน',
      'แม้จะยังคิดถึง แต่ฉันจะก้าวต่อไป',
      'สูดลมหายใจลึกๆ แล้วเริ่มต้นใหม่'
    ],
    chords: 'Intro: Abmaj7 | Fm7 | Bbm7 | Eb7\nChorus: Dbmaj7 | Eb/Db | Cm7 | Fm7 | Bbm7 | Eb7 | Abmaj7',
    audioParams: {
      bpm: 100,
      key: 'Ab Major',
      style: 'rnb_pop',
      rootNote: 56 // Ab3
    }
  },
  {
    id: 'song-6',
    trackNumber: 6,
    titleThai: 'ไม่ได้อยากเป็นคนพิเศษ',
    titleEng: 'Never Wanted To Be Special',
    duration: '3:38',
    durationSeconds: 218,
    audioUrl: '/audio/06.mp3.mp3',
    story: 'บทเพลงแทนใจคนที่ขอเพียงได้ยืนมองอยู่ห่างๆ อย่างห่วงใย ไม่ต้องการสถานะพิเศษใดๆ แค่ได้เห็นรอยยิ้มของเธอก็มีความสุขแล้ว',
    lyrics: [
      'รู้ตัวดีว่าเราอยู่ตรงจุดไหน',
      'ไม่เคยหวังสูงเกินเอื้อมไปครอบครอง',
      '',
      '(Chorus)',
      'ไม่ได้อยากเป็นคนพิเศษของเธอหรอกนะ',
      'แค่ได้เป็นคนที่เธอหันมาแล้วเจอก็พอ',
      'ยิ้มให้เธอในวันที่เธอมีความสุข',
      'คอยปลอบใจในวันที่เธอเสียน้ำตา... แค่นั้นก็พอ'
    ],
    chords: 'Intro: Gmaj7 | Em7 | Am7 | D7\nChorus: Cmaj7 | D/C | Bm7 | Em7 | Am7 | D7 | Gmaj7',
    audioParams: {
      bpm: 96,
      key: 'G Major',
      style: 'acoustic_ballad',
      rootNote: 55 // G3
    }
  },
  {
    id: 'song-7',
    trackNumber: 7,
    titleThai: 'Between Us',
    titleEng: 'Between Us',
    duration: '3:50',
    durationSeconds: 230,
    audioUrl: '/audio/07.mp3.mp3',
    story: 'กรูฟ R&B เมโลดี้สากลลื่นไหล เล่าถึงความรู้สึกพิเศษและสายสัมพันธ์ลับๆ ที่รู้กันแค่สองคน ท่ามกลางบรรยากาศเมืองใหญ่ยามค่ำคืน',
    lyrics: [
      'Late night in the city lights,',
      'Just you and me under neon skies.',
      'Nobody has to know what we feel inside...',
      '',
      '(Chorus)',
      'Between us, there is something real,',
      'A silent magic words can\'t conceal.',
      'Holding hands in the velvet night,',
      'Everything with you feels so right.'
    ],
    chords: 'Intro: Dm9 | G13 | Cmaj9 | Fmaj7\nChorus: Dm9 | Em7 | Fmaj7 | G7 | Cmaj9',
    audioParams: {
      bpm: 105,
      key: 'D Minor',
      style: 'rnb_pop',
      rootNote: 62 // D4
    }
  },
  {
    id: 'song-8',
    trackNumber: 8,
    titleThai: 'Still Think About Us',
    titleEng: 'Still Think About Us',
    duration: '4:15',
    durationSeconds: 255,
    audioUrl: '/audio/08.mp3.mp3',
    story: 'เพลงสไตล์ Neo-Soul เสียงร้องกระซิบอารมณ์ลึกซึ้ง ถึงแม้เส้นทางจะแยกจาก แต่ความทรงจำในฤดูนั้นยังคงสะท้อนอยู่ในหัวใจเสมอ',
    lyrics: [
      'Coffee shop on the corner street,',
      'Where we used to laugh and meet.',
      'I still order your favorite cup...',
      '',
      '(Chorus)',
      'I still think about us, late at night,',
      'When shadows dance in the candlelight.',
      'Did we lose what we had too soon?',
      'Singing melodies beneath the moon.'
    ],
    chords: 'Intro: Fm9 | Bb13 | Ebmaj9 | Abmaj7\nChorus: Bbm9 | C7 | Fm9 | Dbmaj7 | Bbm9 | C7 | Fm9',
    audioParams: {
      bpm: 92,
      key: 'F Minor',
      style: 'soul_pop',
      rootNote: 53 // F3
    }
  },
  {
    id: 'song-9',
    trackNumber: 9,
    titleThai: 'ลบไม่ได้...ช่วยไม่คิดถึง',
    titleEng: 'Can\'t Erase... Help Me Forget',
    duration: '4:25',
    durationSeconds: 265,
    audioUrl: '/audio/09.mp3.mp3',
    story: 'เพลงอารมณ์ดิ่งที่ร้องไต่ระดับความรู้สึก เมื่อรูปภาพและข้อความในโทรศัพท์ลบได้หมดแล้ว แต่ภาพในใจกลับยิ่งชัดเจนขึ้นทุกวัน',
    lyrics: [
      'กดปุ่มลบรูปถ่ายของเราจนหมดสิ้น',
      'ลบข้อความที่เคยส่งหากันทุกวัน',
      'นึกว่าจะช่วยให้ใจลืมเธอได้...',
      '',
      '(Chorus)',
      'แต่ลบไม่ได้... ยิ่งพยายามยิ่งคิดถึง',
      'ทุกมุมในห้องยังคงมีเงาของเธอ',
      'ช่วยบอกวิธีให้ใจนี้หยุดทรมาน',
      'จะทำยังไงให้ลืมเธอได้จริงๆ สักที'
    ],
    chords: 'Intro: Gm7 | Cm7 | F7 | Bbmaj7\nChorus: Ebmaj7 | F/Eb | Dm7 | Gm7 | Cm7 | D7 | Gm7',
    audioParams: {
      bpm: 88,
      key: 'G Minor',
      style: 'soul_pop',
      rootNote: 55 // G3
    }
  },
  {
    id: 'song-10',
    trackNumber: 10,
    titleThai: 'ถ้าเธอยังไม่ลืม (Acoustic Ver.)',
    titleEng: 'If You Haven\'t Forgotten (Acoustic)',
    duration: '4:05',
    durationSeconds: 245,
    audioUrl: '/audio/10.mp3.mp3',
    story: 'เวอร์ชันอะคูสติกเปียโนและกีตาร์โปร่ง ถ่ายทอดเสียงร้องสดอันบริสุทธิ์ของ Kungnoi Y. สัมผัสถึงลมหายใจและความรู้สึกที่จริงใจในทุกถ้อยคำ',
    lyrics: [
      'มองย้อนไปในวันเก่า ที่เคยมีเธอตรงนี้',
      'ทุกภาพความทรงจำยังส่องแสงในใจ...',
      '',
      '(Chorus - Acoustic Piano)',
      'ถ้าเธอยังไม่ลืมช่วงเวลาเหล่านั้น',
      'โปรดรู้ไว้ว่าฉันยังอยู่ตรงนี้เสมอ',
      'แม้กาลเวลาจะหมุนผ่านไปไกลแสนไกล',
      'แต่หัวใจไม่เคยเปลี่ยนไปเลยสักนาที...',
      '',
      'ถ้าเธอยังไม่ลืม... ได้โปรดกลับมาหากัน'
    ],
    chords: 'Intro: F | C/E | Dm | Bb\nVerse: F | C/E | Dm | Bb\nChorus: Bb | C | Am | Dm | Gm | C | F',
    audioParams: {
      bpm: 85,
      key: 'F Major',
      style: 'acoustic_ballad',
      rootNote: 65 // F4
    }
  }
];

export const LIVE_SHOWS: LiveShow[] = [
  {
    id: 'show-1',
    date: '15 ส.ค. 2026',
    isoDate: '2026-08-15',
    time: '21:30 น.',
    title: 'TRIPLETS Live in Bangkok - Album Launch Concert',
    venue: 'Thunder Dome, Muang Thong Thani',
    district: 'ปากเกร็ด',
    province: 'นนทบุรี / กรุงเทพฯ',
    type: 'Concert & Festival',
    status: 'Selling Fast',
    ticketPrice: '800 / 1,200 / 1,800 บาท',
    bookingUrl: '#booking',
    locationMapUrl: 'https://maps.google.com/?q=Thunder+Dome+Muang+Thong+Thani',
    description: 'คอนเสิร์ตใหญ่เปิดอัลบั้มใหม่ "หากวันนั้น..." พร้อมแขกรับเชิญพิเศษ Mona และโชว์เต็มรูปแบบ 2 ชั่วโมงเต็ม!'
  },
  {
    id: 'show-2',
    date: '22 ส.ค. 2026',
    isoDate: '2026-08-22',
    time: '22:45 น.',
    title: 'Rock Out Night Live Show',
    venue: 'Overground Bar & Live Music',
    district: 'เอกมัย',
    province: 'กรุงเทพมหานคร',
    type: 'Pub & Live House',
    status: 'Available',
    ticketPrice: 'สำรองโต๊ะล่วงหน้า / บัตรผ่านประตู 350 บาท (ฟรี 1 Drink)',
    tableReservationPhone: '082-111-2233',
    lineId: '@overgroundbar',
    locationMapUrl: 'https://maps.google.com/?q=Ekkamai+Bangkok',
    description: 'โชว์อคูสติกสลับร็อกเน้นๆ ใกล้ชิดแฟนคลับในบรรยากาศผับสุดชิลล์ใจกลางเอกมัย'
  },
  {
    id: 'show-3',
    date: '29 ส.ค. 2026',
    isoDate: '2026-08-29',
    time: '20:00 น.',
    title: 'Chiang Mai North Rock Fest 2026',
    venue: 'ศูนย์การค้าเซ็นทรัล เชียงใหม่ (เฟสติวัล)',
    district: 'เมือง',
    province: 'เชียงใหม่',
    type: 'Concert & Festival',
    status: 'Selling Fast',
    ticketPrice: '600 บาท (บัตรเหมาวัน)',
    bookingUrl: '#booking',
    locationMapUrl: 'https://maps.google.com/?q=Central+Chiangmai',
    description: 'ทัวร์ภาคเหนือครั้งแรกของปี โชว์เพลงใหม่ยกอัลบั้มกลางลมหนาวต้นฤดู'
  },
  {
    id: 'show-4',
    date: '05 ก.ย. 2026',
    isoDate: '2026-09-05',
    time: '19:00 น.',
    title: 'TRIPLETS Exclusive Fan Meeting & Acoustic Intimate Session',
    venue: 'GMM Live Studio, CentralWorld Class 8',
    district: 'ปทุมวัน',
    province: 'กรุงเทพมหานคร',
    type: 'Fan Meeting',
    status: 'Sold Out',
    ticketPrice: '1,500 บาท (จำกัด 300 ที่นั่ง + รับโปสเตอร์พร้อมลายเซ็นสด)',
    locationMapUrl: 'https://maps.google.com/?q=CentralWorld+Bangkok',
    description: 'กิจกรรมมีตติ้งสุดเอ็กซ์คลูซีฟ พูดคุย Q&A ร้องเพลงสดๆ อคูสติกเวอร์ชัน ถ่ายรูป Group Photo กับสมาชิกวง'
  },
  {
    id: 'show-5',
    date: '12 ก.ย. 2026',
    isoDate: '2026-09-12',
    time: '23:00 น.',
    title: 'Isan Rock Explosion Tour 2026',
    venue: 'ตะวันแดง มหาชน ขอนแก่น',
    district: 'เมือง',
    province: 'ขอนแก่น',
    type: 'Pub & Live House',
    status: 'Available',
    ticketPrice: 'เข้าชมฟรี (สำรองโต๊ะล่วงหน้า)',
    tableReservationPhone: '043-999-888',
    locationMapUrl: 'https://maps.google.com/?q=Khon+Kaen',
    description: 'เยือนถิ่นอีสานกับโชว์สุดมันส์ระเบิดความสนุกต่อเนื่องตลอดค่ำคืน'
  },
  {
    id: 'show-6',
    date: '19 ก.ย. 2026',
    isoDate: '2026-09-19',
    time: '21:00 น.',
    title: 'Chonburi Music Beach Party',
    venue: 'หาดบางแสน (เวทีกลาง)',
    district: 'เมือง',
    province: 'ชลบุรี',
    type: 'Concert & Festival',
    status: 'Free Entry',
    ticketPrice: 'เข้าชมฟรี!',
    locationMapUrl: 'https://maps.google.com/?q=Bangsaen+Beach',
    description: 'เทศกาลดนตรีริมหาดชลบุรี ฟังดนตรีร็อกเคล้าเสียงคลื่นและลมทะเล'
  },
  {
    id: 'show-7',
    date: '03 ต.ค. 2026',
    isoDate: '2026-10-03',
    time: '20:30 น.',
    title: 'Phuket Soundwave Live Fest',
    venue: 'สะพานหิน เทศบาลนครภูเก็ต',
    district: 'เมือง',
    province: 'ภูเก็ต',
    type: 'Concert & Festival',
    status: 'Available',
    ticketPrice: '500 บาท',
    bookingUrl: '#booking',
    locationMapUrl: 'https://maps.google.com/?q=Phuket+Saphan+Hin',
    description: 'ลุยทัวร์คอนเสิร์ตภาคใต้สุดตระการตาที่จังหวัดภูเก็ต'
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    title: 'TRIPLETS ปล่อยอัลบั้มใหม่ "หากวันนั้น..." พร้อมมิวสิกวิดีโอ Feat. Mona ยอดวิวพุ่ง 1 ล้านภายใน 24 ชม.!',
    category: 'อัลบั้มใหม่',
    date: '10 ส.ค. 2026',
    summary: 'สมการรอคอยของแฟนเพลง! TRIPLETS ปล่อยอัลบั้มเต็มชุดแรกพร้อมซิงเกิลไทเทิลดึง โมนา (Mona) มาร่วมฟีทเจอริ่ง กระแสตอบรับอบอุ่นถล่มทลายทั่วโซเชียล',
    content: [
      'สิ้นสุดการรอคอยสำหรับแฟนๆ วง TRIPLETS (ทริปเพล็ตส์) ที่ล่าสุดได้ประกาศปล่อยอัลบั้มเต็มอย่างเป็นทางการในชื่อ "หากวันนั้น..." (If That Day...) พร้อมเปิดตัวมิวสิกวิดีโอซิงเกิลหลักชื่อเดียวกับอัลบั้ม',
      'ไฮไลต์สำคัญของซิงเกิลนี้คือการดึงนักร้องสาวเสียงทรงเสน่ห์ "โมนา (Mona)" มาร่วมขับร้องแบบดูโอ้คู่กับ วิน (Lead Vocal) ถ่ายทอดมิติบทสนทนาของคู่รักที่ต้องแยกทางกัน สร้างความสะเทือนอารมณ์จนติดเทรนด์มิวสิกวิดีโอมาแรงอันดับ 1 บน YouTube Thailand',
      'วิน เล่าถึงเบื้องหลังว่า "อัลบั้มนี้คือการกลั่นกรองความรู้สึกจริงตลอด 3 ปีของพวกเรา ทั้งเสียงเบสของเท็น และกลองของไทเกอร์ ถูกดีไซน์มาเพื่อรองรับอารมณ์เพลงให้ลึกซึ้งที่สุด ขอบคุณแฟนเพลงทุกคนที่ช่วยกันฟังและซัพพอร์ตพวกเราครับ"'
    ],
    image: IMAGES.albumCover,
    featured: true,
    likesCount: 1240,
    commentsCount: 185
  },
  {
    id: 'news-2',
    title: 'เปิดขายอัลบั้มแล้ว! TRIPLETS อัลบั้มเต็ม "หากวันนั้น..."',
    category: 'อัลบั้มใหม่',
    date: '08 ส.ค. 2026',
    summary: 'แฟนคลับเตรียมตัวให้พร้อม! สั่งซื้ออัลบั้มพร้อมโฟโต้บุ๊กฉบับพิเศษสุดเอ็กซ์คลูซีฟ',
    content: [
      'ประกาศอย่างเป็นทางการแล้วสำหรับอัลบั้มเต็ม "หากวันนั้น..." ของวง TRIPLETS',
      'จัดเต็มทั้งเพลงฮิต คุณภาพดนตรีอันทรงพลัง และของแถมสุดพรีเมียมภายในบ็อกเซต',
      'แฟนๆ สามารถสั่งซื้อได้แล้ววันนี้ผ่านระบบหน้าเว็บไซต์ หรือตัวแทนจำหน่ายอย่างเป็นทางการ'
    ],
    image: IMAGES.heroBanner,
    featured: false,
    likesCount: 890,
    commentsCount: 94
  },
  {
    id: 'news-3',
    title: 'เปิดตัว Official Merch คอลเลกชันใหม่ "TRIPLETS Tri-Eage Limited Boxset"',
    category: 'สินค้าวง',
    date: '05 ส.ค. 2026',
    summary: 'เอาใจสายสะสม! เปิดตัวบ็อกเซตอัลบั้มพร้อมเสื้อยืด ลายเซ็นสด และพวงกุญแจโลหะสัญลักษณ์วง TRIPLETS',
    content: [
      'วง TRIPLETS เอาใจแฟนคลับด้วยการเปิดสั่งจอง "Tri-Eage Limited Boxset" จำนวนจำกัดเพียง 1,000 ชุดทั่วประเทศ',
      'ในบ็อกเซตประกอบด้วย: แผ่น CD Audio คุณภาพสูง, สมุดภาพถ่ายเบื้องหลัง (Photobook 48 หน้า), เสื้อยืดลายโลโก้สัญลักษณ์โลหะ, และปิ๊กดีดกีตาร์สกรีนลายเซ็น 3 สมาชิก'
    ],
    image: IMAGES.heroBanner,
    featured: false,
    likesCount: 650,
    commentsCount: 42
  }
];

export const INITIAL_FAN_MESSAGES: FanMessage[] = [
  {
    id: 'fan-1',
    fanName: 'น้องมายด์ (Triplets_FC_BKK)',
    memberTag: 'WIN',
    favoriteSong: 'หากวันนั้น...',
    message: 'ฟังเพลง หากวันนั้น... แล้วร้องไห้เลยค่ะ เสียงพี่วินกับพี่โมนาเข้ากันมากกก! รอเชียร์และเป็นกำลังใจให้พี่ๆ TRIPLETS ทุกคนเสมอนะคะ ❤️',
    timestamp: '10 นาทีที่แล้ว',
    likes: 28,
    verifiedFan: true
  },
  {
    id: 'fan-2',
    fanName: 'กอล์ฟ สายร็อก',
    memberTag: 'Tiger',
    favoriteSong: 'ความรักที่หายไป',
    message: 'ไลน์กลองพี่ไทเกอร์ในเพลง ความรักที่หายไป ดุดันสะใจมากครับ! มือดรัมเมอร์ไอดอลของผมเลย ติดตามผลงานมาตั้งแต่อีพีแรกครับ!',
    timestamp: '1 ชั่วโมงที่แล้ว',
    likes: 19
  },
  {
    id: 'fan-3',
    fanName: 'นิว Bassist Girl',
    memberTag: 'Ten',
    favoriteSong: 'เพราะขาดเธอ',
    message: 'พี่เท็นซาวด์เบสแน่นมากค่ะ ฟังกับหูฟังเสียงเบสเดินเนียนกริ๊บ ชอบลุคใส่แจ็กเก็ตหนังมาก เท่ที่สุดในวง!',
    timestamp: '3 ชั่วโมงที่แล้ว',
    likes: 34,
    verifiedFan: true
  },
  {
    id: 'fan-4',
    fanName: 'Ploy_MonaFan',
    memberTag: 'Mona',
    favoriteSong: 'หากวันนั้น...',
    message: 'พี่โมนาขึ้นร้องเพลงด้วยคือเติมเต็มความรู้สึกสมชื่อจริงๆ ค่ะ หวังว่าจะมีทัวร์คอนเสิร์ตต่างจังหวัดเยอะๆ นะคะ!',
    timestamp: '5 ชั่วโมงที่แล้ว',
    likes: 15
  }
];
