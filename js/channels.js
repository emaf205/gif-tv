/**
 * GIF-TV: Net Art CRT Television
 * Single Infinite Stream: Absurd Loops, Online Grabbing & Procedural Net Art
 */

const ABSURD_GIF_COLLECTION = [
  // 90s MTV Liquid & Experimental Loops
  { id: 'l41lI4bYmcsPJX9Go', title: 'LIQUID DREAMS & CHROMIUM', artist: 'MTV EXPERIMENTAL LAB', year: '1993' },
  { id: 'xT9IgzoKnwFNmISR8I', title: 'MORPHING CATHODE RAY', artist: 'LIQUID TV COLLECTIVE', year: '1992' },
  { id: 'l3vR16pONsV8cK36w', title: 'CYBER EYE PULSE', artist: 'STUDIO PHOSPHOR', year: '1994' },
  { id: '3o7TKsQ8ePqQyN1X6M', title: 'NEON TRANSMISSION 95', artist: 'MTV NETWORK EUROPE', year: '1995' },
  { id: 'xT9IgL6x9sT6wG7Hhe', title: 'PLASTICINE METAMORPHOSIS', artist: 'CLAYMATION DADA', year: '1991' },

  // Weirdcore & Surreal Physics
  { id: 'd2Z4NRCUxsxZBvag', title: 'INFINITE POLYGONAL HEAD', artist: 'DIMENSIONAL DRIFT', year: '1998' },
  { id: '3o85xsGXVuYh8lM3EQ', title: 'SURREAL JELLY DANCE', artist: 'BLENDER SHADOWS', year: '1997' },
  { id: '3ohhwkKqF2lB5B8StW', title: 'GRAVITY MALFUNCTION', artist: 'NET.VOID ARCHIVE', year: '1995' },
  { id: '3o7TKMt1VVNkHV2PaE', title: 'TELEPATHIC HANDS', artist: 'GLITCH FAIRY', year: '1999' },
  { id: '3o7TKF5DTH20UyoE8w', title: 'THE RUBBER MONOLITH', artist: 'ANOMALY COLLECTIVE', year: '1996' },

  // 90s Cyberspace & Vaporwave
  { id: '3oEjI6SIIHBdRxXI40', title: 'HIGHWAY TO THE MAINFRAME', artist: 'SILICON DREAMSCAPE', year: '1995' },
  { id: '3o7abKhOpu0NwenH3O', title: 'NEON GEOMETRY VECTOR', artist: 'AMIGA POWER LAB', year: '1991' },
  { id: '26AHONQ99Rn7mMrVy', title: 'THE RENDERED PYRAMID', artist: 'RAYTRACED REALITY', year: '1994' },
  { id: '3oKIPnAiaMCws8nOsE', title: 'MODEM HANDSHAKE DREAMS', artist: 'DIAL-UP BREEZE', year: '1997' },
  { id: 'l41lT4n6ylgW2hh04', title: 'VIRTUAL SURFER 64', artist: 'CYBERPUNK COMMODORE', year: '1996' },

  // Analog Glitch & VHS Tracking Tears
  { id: '3ohs4w0OrUm5GIkB0I', title: 'REWIND HYSTERIA', artist: 'CIRCUIT BENDER X', year: '1992' },
  { id: 'l41lFw057lAJQMwg0', title: 'CATHODE STATIC EXPLOSION', artist: 'ANALOG VOID', year: '1990' },
  { id: '26tn33aiTi1jkl6H6', title: 'SMPTE RAVE BARS', artist: 'RGB DESYNC', year: '1996' },
  { id: '3oKIPwoeGErMmaI43S', title: 'GHOST IN THE PHOSPHOR', artist: 'NULL FREQUENCY', year: '1993' },
  { id: 'l41YkxUUvM3iM7qPm', title: 'TRACKING DRIFT 1994', artist: 'MAGNETIC DECAY', year: '1994' },

  // Acid Vintage Cartoons
  { id: 'l3q2K5jinAlChoCLS', title: 'BLINKING DISBELIEF', artist: 'OPTICAL CARTOON DEPT', year: '1994' },
  { id: '26ufdipQqU2lhNA4g', title: 'BRAIN EXPANSION PARADE', artist: 'PSYCHEDELIC FLEISCHER', year: '1992' },
  { id: '3o6Zt6KHxJTbXCnSvu', title: 'THE DANCING CAT SHADOW', artist: 'INK & DISTORTION', year: '1997' },
  { id: 'l0MYt5jPR6QX5pnqM', title: 'MELTING EYE SMILE', artist: 'SURREAL CEL ANIMATION', year: '1995' },
  { id: '3o7TKSjRrfIPjeiVyM', title: 'ELASTIC JUMP CYCLE', artist: 'FRAME BY FRAME ECSTASY', year: '1991' },

  // Early Deep Web Art & ASCII
  { id: 'ule4akeXnY9Mb2kfTM', title: 'ASCII RAIN MATRIX', artist: 'JODI.ORGANISM', year: '1996' },
  { id: 'l0ExncehJzexFpRHq', title: 'GLITCHED CURSOR RITUAL', artist: 'DADA HYPERTEXT', year: '1995' },
  { id: '26FPnsRww5znqykIo', title: 'DIAL-UP PSYCHOSIS', artist: 'TELNET PHANTOM', year: '1996' },
  { id: 'xT5LMHxhOfscxPfIfm', title: 'THE FLOATING WINDOW', artist: 'BROWSER WANDERER', year: '1998' },
  { id: 'l0HlQXkhXBukbpxLy', title: 'CYBER ENCRYPTION DANCE', artist: 'ANONYMOUS SYSOP', year: '1997' },

  // Cosmic Trance & Fractals
  { id: '26BROqpt7pZ7sD1sc', title: 'INFINITE TUNNEL 2000', artist: 'CELESTIAL RAYTRACE', year: '1994' },
  { id: '3o85xG8Xm4B6fUaUaA', title: 'FRACTAL MANDALA ZOOM', artist: 'ASTRAL CRT', year: '1993' },
  { id: 'xT0xeJpnrWC4XWblEk', title: 'NEON BLACK HOLE', artist: 'SUPERNOVA VISUALS', year: '1996' },
  { id: '3o7bu3X7X6f5kPGuCA', title: 'COSMIC TIME TRAVEL', artist: 'HYPERSPACE RADIO', year: '1995' },
  { id: 'l3V0ls4Nsz70K5x0A', title: 'INTERSTELLAR PULSE', artist: 'RADIO ASTRONOMY LAB', year: '1998' },

  // 16-Bit Corrupted Arcade
  { id: '3o6Zt8sE5AEUTNPQTC', title: 'TILTED CARTRIDGE GLITCH', artist: 'ROM CORRUPTOR 99', year: '1992' },
  { id: 'xT9IgG50Fb7Mi0prBC', title: 'PIXEL VOID FIGHTER', artist: 'ARCADE SURREALIST', year: '1994' },
  { id: 'l3q2w7T4R7lVn8b64', title: 'SPRITE EXPLOSION PARADE', artist: 'DITHER MATRIX', year: '1993' },
  { id: '3o7TKT7g8zFzK78fZe', title: 'CORRUPT LEVEL 99', artist: 'CHIP GLITCH COLLECTIVE', year: '1995' },
  { id: '3o7TKwmnDg59TFCbH2', title: 'GAME OVER HALLUCINATION', artist: 'COIN OP PHANTOM', year: '1991' },

  // Live Synthesis Stream
  { id: 'xT9IgH5uFmQn4R9Vq8', title: 'SPECTRUM ANOMALY', artist: 'ANONYMOUS TRANSMITTER', year: '1996' },
  { id: '3o7TKx6j3rF8Z8z5kI', title: 'SYNCHRONIC DRIFT', artist: 'WAVE SHAPER 01', year: '1997' },
  { id: 'xT9IgxO0f2qF8e4e76', title: 'ELECTRO-PLASTIC SURGE', artist: 'NEURAL BENDER', year: '1998' },
  { id: '3o7TKsR9e2r8j4t7k8', title: 'CHROMATIC HYPNOSIS', artist: 'OPTICAL BROADCAST', year: '1995' },
  { id: 'l3vR88x4d320m7k0e', title: 'KINETIC VORTEX 94', artist: 'THE SIGNAL MACHINE', year: '1994' },
  { id: '3o7TKVm3s5k4j4t7k8', title: 'CYBER HORIZON 2000', artist: 'VIRTUAL HORIZON', year: '1999' },
  { id: 'l3vR5j5j5j5j5j5j5j', title: 'ETERNAL REPEAT ODYSSEY', artist: 'INFINITE LOOP LAB', year: '1997' }
];

const SURREAL_TITLES = [
  'NEON HYPNOSIS LOOP', 'ACID MICROWAVE', 'VIRTUAL VOID PULSE', 'LIQUID CATHODE DREAMS',
  'CHROMA SIGNAL LOSS', 'TELEPATHIC INTERLACE', 'HYPER-DIMENSION 1994', 'ANALOG SOUP',
  'SUBATOMIC DRIFT', 'FRACTAL STATIC ECHO', 'CYBER-OCCULT VISUAL', 'DADA MATRIX PULSE',
  'INFINITE TAPE WARP', 'SILICON TRANSMISSION', 'AMIGA PARADOX', 'RETRO-WAVE PARADE'
];

const SURREAL_ARTISTS = [
  'LIQUID LABS MILANO', 'MTV EXPERIMENTAL DEPT', 'NET.ART COLLECTIVE', 'CIRCUIT BENDER X',
  'STUDIO PHOSPHOR 94', 'NEURAL VORTEX CO.', 'ANALOG DRAGON', 'SYNTHETIC PHANTOM',
  'GLITCH ARCHIVE 1995', 'DIMENSIONAL WANDERER', 'RADICAL TELEVISION', 'EMAF205 LAB'
];

/**
 * Infinite Stream Manager
 */
class InfiniteGifStream {
  constructor() {
    this.history = [];
    this.historyIndex = -1;
    this.recentIds = [];
    this.preloadedImages = new Map();
  }

  /**
   * Preload an image URL into browser cache
   */
  preload(url) {
    if (!url || this.preloadedImages.has(url)) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    this.preloadedImages.set(url, img);
  }

  /**
   * Format item with full URL and vintage MTV metadata
   */
  formatItem(rawItem) {
    const url = `https://media.giphy.com/media/${rawItem.id}/giphy.gif`;
    const randomFreq = (100 + Math.random() * 800).toFixed(2);
    return {
      url: url,
      id: rawItem.id,
      title: rawItem.title || SURREAL_TITLES[Math.floor(Math.random() * SURREAL_TITLES.length)],
      artist: rawItem.artist || SURREAL_ARTISTS[Math.floor(Math.random() * SURREAL_ARTISTS.length)],
      year: rawItem.year || (1990 + Math.floor(Math.random() * 9)).toString(),
      frequency: `${randomFreq} MHz`,
      channel: 'CH 01 // MTV BIZARRE LIVE'
    };
  }

  /**
   * Grab next random absurd GIF online
   */
  getNextRandom() {
    // If user was browsing backwards in history, advance forwards in history
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      return this.history[this.historyIndex];
    }

    // Filter out recently seen items to avoid repetition
    let pool = ABSURD_GIF_COLLECTION.filter(item => !this.recentIds.includes(item.id));
    if (pool.length === 0) {
      this.recentIds = [];
      pool = ABSURD_GIF_COLLECTION;
    }

    // Pick random item
    const picked = pool[Math.floor(Math.random() * pool.length)];
    this.recentIds.push(picked.id);
    if (this.recentIds.length > 20) this.recentIds.shift();

    const formatted = this.formatItem(picked);

    // Save to history
    this.history.push(formatted);
    this.historyIndex = this.history.length - 1;

    // Preload next candidate in advance
    const nextCandidate = pool[Math.floor(Math.random() * pool.length)];
    if (nextCandidate) {
      this.preload(`https://media.giphy.com/media/${nextCandidate.id}/giphy.gif`);
    }

    return formatted;
  }

  /**
   * Step back in history
   */
  getPrevious() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      return this.history[this.historyIndex];
    }
    // If at the beginning of history, generate another random
    return this.getNextRandom();
  }
}

/**
 * Procedural Fallback Engine
 * Generates hypnotic net-art animations on canvas if offline
 */
class ProceduralNetArt {
  static renderFallback(canvas, type = 'tunnel', time = 0) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = '#0a0a0c';
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    switch (type) {
      case 'tunnel':
        ctx.strokeStyle = '#00ffcc';
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= 10; i++) {
          const r = ((i * 30 + time * 40) % 240);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.stroke();
        }
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(a + time * 0.5) * w, cy + Math.sin(a + time * 0.5) * h);
          ctx.stroke();
        }
        break;

      case 'ascii':
        ctx.fillStyle = '#39ff14';
        ctx.font = '14px monospace';
        const chars = '01#%*MTVNETART_CRT_GLITCH_EMAF205_MILANO';
        for (let x = 10; x < w; x += 18) {
          const char = chars[(Math.floor(x + time * 10) % chars.length)];
          const y = (Math.sin(x + time * 2) * 0.5 + 0.5) * h;
          ctx.fillText(char, x, y);
        }
        break;

      case 'mtv-logo':
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.8);
        ctx.strokeStyle = '#ff007f';
        ctx.lineWidth = 3;
        ctx.strokeRect(-60, -60, 120, 120);
        ctx.strokeStyle = '#ffff00';
        ctx.strokeRect(-40, -40, 80, 80);
        ctx.fillStyle = '#00f0ff';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('MTV NET', 0, 0);
        ctx.restore();
        break;

      default:
        const grad = ctx.createLinearGradient(0, 0, w, h);
        const shift = (time * 0.2) % 1;
        grad.addColorStop((shift + 0.0) % 1, '#ff0055');
        grad.addColorStop((shift + 0.33) % 1, '#00ffcc');
        grad.addColorStop((shift + 0.66) % 1, '#ffe600');
        grad.addColorStop((shift + 1.0) % 1, '#ff0055');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('NO SATELLITE SIGNAL // ANALOG FALLBACK', cx, cy);
        break;
    }
  }
}

window.tvStream = new InfiniteGifStream();
window.ProceduralNetArt = ProceduralNetArt;
