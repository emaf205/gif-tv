/**
 * GIF-TV: Net Art CRT Television
 * Channels, Absurd GIFs Lineup, MTV Bumpers & Fallback Procedural Generators
 */

const TV_CHANNELS = [
  {
    id: 'ch01',
    number: '01',
    name: 'LIQUID MTV',
    category: '90s BUMPERS & EXPERIMENTAL',
    frequency: '181.25 MHz',
    description: 'Bumper underground, Liquid Television, loghi morphing e visual d\'autore anni \'90.',
    items: [
      {
        url: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
        title: 'LIQUID DREAMS & CHROMIUM',
        artist: 'MTV EXPERIMENTAL LAB',
        year: '1993',
        album: 'BUMPER SEASONS VOL. 4'
      },
      {
        url: 'https://media.giphy.com/media/3o7TKTDnUxE0gpnPNe/giphy.gif',
        title: 'ANALOG BRAIN SCAN',
        artist: 'NEON BROADCAST SYSTEM',
        year: '1995',
        album: 'MIDNIGHT TRANSMISSION'
      },
      {
        url: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
        title: 'MORPHING CATHODE RAY',
        artist: 'LIQUID TV COLLECTIVE',
        year: '1992',
        album: 'ACID ANIMATION HOUR'
      },
      {
        url: 'https://media.giphy.com/media/l3vR16pONsV8cK36w/giphy.gif',
        title: 'CYBER EYE PULSE',
        artist: 'STUDIO PHOSPHOR',
        year: '1994',
        album: 'RGB NOISE ODYSSEY'
      },
      {
        url: 'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
        title: 'SUPER RECEPTOR 3000',
        artist: 'THE SIGNAL BENDERS',
        year: '1996',
        album: 'OFF-AIR REEL #8'
      }
    ]
  },
  {
    id: 'ch02',
    number: '02',
    name: 'WEIRDCORE & SURREAL',
    category: 'ABSURDIST NET ART',
    frequency: '215.75 MHz',
    description: 'Fisica impossibile, mondi liminali, creature poligonali e loop senza senso.',
    items: [
      {
        url: 'https://media.giphy.com/media/d2Z4NRCUxsxZBvag/giphy.gif',
        title: 'INFINITE POLYGONAL HEAD',
        artist: 'DIMENSIONAL DRIFT',
        year: '1998',
        album: 'LIMINAL FREQUENCY'
      },
      {
        url: 'https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif',
        title: 'SURREAL JELLY DANCE',
        artist: 'BLENDER SHADOWS',
        year: '1997',
        album: 'PHYSICS ENGINE BREAKDOWN'
      },
      {
        url: 'https://media.giphy.com/media/l0HlTy9x8FxqyV0go/giphy.gif',
        title: 'THE DISCO CYCLOPS',
        artist: 'UNREAL ENTITY',
        year: '1994',
        album: 'DREAMCORE HIGHWAY'
      },
      {
        url: 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif',
        title: 'TELEPATHIC HANDS',
        artist: 'GLITCH FAIRY',
        year: '1999',
        album: 'BIZARRE LOOPS'
      },
      {
        url: 'https://media.giphy.com/media/3ohhwkKqF2lB5B8StW/giphy.gif',
        title: 'GRAVITY MALFUNCTION',
        artist: 'NET.VOID ARCHIVE',
        year: '1995',
        album: 'ZERO G DREAMS'
      }
    ]
  },
  {
    id: 'ch03',
    number: '03',
    name: '90s CYBERSPACE',
    category: 'RETRO 3D & VAPORWAVE',
    frequency: '243.50 MHz',
    description: 'Silicon Graphics, griglie poligonali neon, occhiali VR e sogni digitali arcaici.',
    items: [
      {
        url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
        title: 'HIGHWAY TO THE MAINFRAME',
        artist: 'SILICON DREAMSCAPE',
        year: '1995',
        album: 'CYBERDELIA V1'
      },
      {
        url: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
        title: 'NEON GEOMETRY VECTOR',
        artist: 'AMIGA POWER LAB',
        year: '1991',
        album: 'WIREFRAME HORIZON'
      },
      {
        url: 'https://media.giphy.com/media/l41lT4n6ylgW2hh04/giphy.gif',
        title: 'VIRTUAL SURFER 64',
        artist: 'CYBERPUNK COMMODORE',
        year: '1996',
        album: 'DATAPOOL DRIFT'
      },
      {
        url: 'https://media.giphy.com/media/26AHONQ99Rn7mMrVy/giphy.gif',
        title: 'THE RENDERED PYRAMID',
        artist: 'RAYTRACED REALITY',
        year: '1994',
        album: 'POLYGON OASIS'
      },
      {
        url: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
        title: 'MODEM HANDSHAKE DREAMS',
        artist: 'DIAL-UP BREEZE',
        year: '1997',
        album: '56K KINETIC'
      }
    ]
  },
  {
    id: 'ch04',
    number: '04',
    name: 'ANALOG GLITCH',
    category: 'VHS DISTORTION & BENDING',
    frequency: '298.15 MHz',
    description: 'Nastri magnetici masticati dal videoregistratore, tracking rotto e barre SMPTE.',
    items: [
      {
        url: 'https://media.giphy.com/media/xUPGcz2H1TXdCz4suY/giphy.gif',
        title: 'TRACKING DECAY 001',
        artist: 'MAGNETIC DECAY',
        year: '1989',
        album: 'TAPE CORROSION'
      },
      {
        url: 'https://media.giphy.com/media/3ohs4w0OrUm5GIkB0I/giphy.gif',
        title: 'VCR PAUSE DRAG',
        artist: 'CIRCUIT BENDER X',
        year: '1992',
        album: 'REWIND HYSTERIA'
      },
      {
        url: 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif',
        title: 'CATHODE STATIC EXPLOSION',
        artist: 'ANALOG VOID',
        year: '1990',
        album: 'INTERLACE TEAR'
      },
      {
        url: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',
        title: 'SMPTE RAVE BARS',
        artist: 'RGB DESYNC',
        year: '1996',
        album: 'BROADCAST TEST PATTERN'
      },
      {
        url: 'https://media.giphy.com/media/3oKIPwoeGErMmaI43S/giphy.gif',
        title: 'GHOST IN THE PHOSPHOR',
        artist: 'NULL FREQUENCY',
        year: '1993',
        album: 'FEEDBACK LOOP #2'
      }
    ]
  },
  {
    id: 'ch05',
    number: '05',
    name: 'ACID CARTOON',
    category: 'PSYCHEDELIC RUBBERHOSE',
    frequency: '331.40 MHz',
    description: 'Cartoni animati d\'epoca deformati da acidi visivi e metamorfosi elastiche continue.',
    items: [
      {
        url: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
        title: 'BLINKING DISBELIEF',
        artist: 'OPTICAL CARTOON DEPT',
        year: '1994',
        album: 'HYPNOTIC SATURDAY MORNING'
      },
      {
        url: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
        title: 'BRAIN EXPANSION PARADE',
        artist: 'PSYCHEDELIC FLEISCHER',
        year: '1992',
        album: 'RUBBERHOSE HALLUCINATION'
      },
      {
        url: 'https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif',
        title: 'THE DANCING CAT SHADOW',
        artist: 'INK & DISTORTION',
        year: '1997',
        album: 'NIGHTMARE CARTOON NETWORK'
      },
      {
        url: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
        title: 'MELTING EYE SMILE',
        artist: 'SURREAL CEL ANIMATION',
        year: '1995',
        album: 'LIQUID FACES'
      },
      {
        url: 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif',
        title: 'ELASTIC JUMP CYCLE',
        artist: 'FRAME BY FRAME ECSTASY',
        year: '1991',
        album: 'INKBLOT GROOVE'
      }
    ]
  },
  {
    id: 'ch06',
    number: '06',
    name: 'DEEP NET ART',
    category: 'EARLY WEB & CYBER OCCULT',
    frequency: '412.00 MHz',
    description: 'Estetica geocities, ASCII ipnotica, finestre pop-up infinite e dadaismo digitale.',
    items: [
      {
        url: 'https://media.giphy.com/media/ule4akeXnY9Mb2kfTM/giphy.gif',
        title: 'ASCII RAIN MATRIX',
        artist: 'JODI.ORGANISM',
        year: '1996',
        album: 'SOURCE CODE VISUAL'
      },
      {
        url: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
        title: 'UNDER CONSTRUCTION HELL',
        artist: 'GEOCITIES REVENANT',
        year: '1997',
        album: 'NET.ESCAPE'
      },
      {
        url: 'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif',
        title: 'GLITCHED CURSOR RITUAL',
        artist: 'DADA HYPERTEXT',
        year: '1995',
        album: 'HTML 1.0 PARADOX'
      },
      {
        url: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
        title: 'WEB CRAWLER FEVER',
        artist: 'NET ART PROTOCOL',
        year: '1998',
        album: 'HYPERLINK LABYRINTH'
      }
    ]
  },
  {
    id: 'ch07',
    number: '07',
    name: 'COSMIC HYPNOSIS',
    category: 'FRACTALS & VOID TRANCE',
    frequency: '475.25 MHz',
    description: 'Tunnel temporali a velocità curvatura, geometrie sacre lofi e viaggi cosmici.',
    items: [
      {
        url: 'https://media.giphy.com/media/26BROqpt7pZ7sD1sc/giphy.gif',
        title: 'INFINITE TUNNEL 2000',
        artist: 'CELESTIAL RAYTRACE',
        year: '1994',
        album: 'WARP SPEED CASSETTE'
      },
      {
        url: 'https://media.giphy.com/media/3o85xG8Xm4B6fUaUaA/giphy.gif',
        title: 'FRACTAL MANDALA ZOOM',
        artist: 'ASTRAL CRT',
        year: '1993',
        album: 'KALEIDOSCOPE ODYSSEY'
      },
      {
        url: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
        title: 'NEON BLACK HOLE',
        artist: 'SUPERNOVA VISUALS',
        year: '1996',
        album: 'SINGULARITY FM'
      },
      {
        url: 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif',
        title: 'QUANTUM PULSAR',
        artist: 'DEEP SPACE RADIOTELEMETRY',
        year: '1998',
        album: 'COSMIC DUST'
      }
    ]
  },
  {
    id: 'ch08',
    number: '08',
    name: '16-BIT NOSTALGIA',
    category: 'CORRUPTED RETRO GAMING',
    frequency: '522.60 MHz',
    description: 'Cartucce NES inclinate nello slot, sprite esplosi e schermate di game over surreali.',
    items: [
      {
        url: 'https://media.giphy.com/media/3o6Zt8sE5AEUTNPQTC/giphy.gif',
        title: 'TILTED CARTRIDGE GLITCH',
        artist: 'ROM CORRUPTOR 99',
        year: '1992',
        album: 'RAM OVERFLOW BAZAAR'
      },
      {
        url: 'https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif',
        title: 'SPRITE COLLISION MADNESS',
        artist: 'ARCADE PHANTOM',
        year: '1994',
        album: 'INSERT COIN ETERNITY'
      },
      {
        url: 'https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif',
        title: 'CORRUPT BOSS BATTLE',
        artist: 'MEGA DRIVE CORRUPTION',
        year: '1993',
        album: 'STAGE 99 - UNKNOWN'
      },
      {
        url: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
        title: 'PIXEL VOID RUNNER',
        artist: 'DITHERING SOCIETY',
        year: '1995',
        album: 'CHIP TUNE ECHOES'
      }
    ]
  },
  {
    id: 'ch09',
    number: '09',
    name: 'LIVE FREQUENCY',
    category: 'DYNAMIC PSYCHEDELIC STREAM',
    frequency: '614.80 MHz',
    description: 'Sintonizzatore dinamico continuo di stranezze digitali e visual net art.',
    items: [
      {
        url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
        title: 'TRANSMISSION PROTOCOL ALPHA',
        artist: 'LIVE STREAM BENDER',
        year: '1999',
        album: 'ETHER SEARCH'
      },
      {
        url: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
        title: 'INTERNET BROADCAST LOOP',
        artist: 'OPEN SIGNAL CO.',
        year: '1997',
        album: 'RAW FEED ZERO'
      },
      {
        url: 'https://media.giphy.com/media/d2Z4NRCUxsxZBvag/giphy.gif',
        title: 'SPECTRUM ANOMALY',
        artist: 'ANONYMOUS TRANSMITTER',
        year: '1996',
        album: 'TELEMETRY ECHO'
      }
    ]
  },
  {
    id: 'ch00',
    number: '00',
    name: 'THE VOID',
    category: 'PURE ANALOG SNOW & GHOSTS',
    frequency: '000.00 MHz',
    description: 'Il canale non sintonizzato. Neve pura a 60Hz con segnali subliminali clandestini.',
    isStaticChannel: true,
    items: [
      {
        url: '',
        title: 'CANALE NON SINTONIZZATO',
        artist: 'IL RUMORE COSMICO DI FONDO',
        year: 'ETERNAL',
        album: 'WHITE NOISE FREQUENCY'
      }
    ]
  }
];

/**
 * Procedural Fallback Engine
 * Renders mesmerizing canvas net-art loops if an external GIF is unreachable or offline
 */
class ProceduralNetArt {
  static renderFallback(canvas, type = 'wireframe', time = 0) {
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
        // Hypnotic wireframe tunnel
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
        // Digital cyber text rain
        ctx.fillStyle = '#39ff14';
        ctx.font = '14px monospace';
        const chars = '01#%*MTVNETART_CRT_GLITCH';
        for (let x = 10; x < w; x += 18) {
          const char = chars[(Math.floor(x + time * 10) % chars.length)];
          const y = (Math.sin(x + time * 2) * 0.5 + 0.5) * h;
          ctx.fillText(char, x, y);
        }
        break;

      case 'mtv-logo':
        // Bouncing wireframe MTV Net-Art Box
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
        // Rainbow psychedelic color bands
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

window.TV_CHANNELS = TV_CHANNELS;
window.ProceduralNetArt = ProceduralNetArt;
