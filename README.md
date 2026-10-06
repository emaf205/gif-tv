# 📺 GIF-TV // Net Art CRT Television (Stile MTV Anni '90)

> Un'opera di Net Art interattiva, minimale e ipnotica. Un televisore a tubo catodico (CRT) a fosfori che trasmette canali infiniti di GIF assurde, surrealismo, estetica cyberpunk, vaporwave e bumper sperimentali in puro stile **MTV Liquid Television**.

![GIF-TV Preview](https://img.shields.io/badge/NetArt-MTV%20CRT-ff007f?style=for-the-badge)
![Vanilla Web](https://img.shields.io/badge/Vanilla-JS%20%7C%20CSS%20%7C%20HTML5-00f0ff?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-ZERO-39ff14?style=for-the-badge)
![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-ffea00?style=for-the-badge)

---

## ⚡ Caratteristiche

- **Simulatore Televisivo CRT a Fosfori**:
  - Telaio vintage anni '90 ispirato ai monitor Sony Trinitron e Mivar con curvatura dello schermo realistica (*barrel distortion*).
  - Maschera subpixel RGB (*aperture grille*), linee di scansione orizzontali (*scanlines*) e riflesso curvo del vetro.
  - **Degauss Magnetico**: Bobina di smagnetizzazione a 60Hz con scossa elastica, sfarfallio arcobaleno e audio "BWWOOOOOMP".
  - **Fascio Catodico Spegnimento/Accensione**: Collasso dell'immagine in una sottile linea orizzontale luminosa, punto di fosforo centrale e dissolvenza nel buio.
- **10 Canali Tematici di Loop Assurdi**:
  1. `CH 01 - LIQUID MTV`: Bumper underground, animazioni liquide e ident storici di MTV Europe/Liquid Television.
  2. `CH 02 - WEIRDCORE & SURREAL`: Liminal spaces, fisica impossibile e animazioni 3D senza senso.
  3. `CH 03 - 90s CYBERSPACE`: Silicon Graphics, griglie wireframe neon e realtà virtuale 1995.
  4. `CH 04 - ANALOG GLITCH`: Nastri magnetici VHS consumati, errori di tracking e barre SMPTE.
  5. `CH 05 - ACID CARTOON`: Cartoni animati d'epoca rubberhose sotto trip allucinogeno.
  6. `CH 06 - DEEP NET ART`: ASCII rain dinamica, finestre pop-up e dadaismo delle origini del web.
  7. `CH 07 - COSMIC HYPNOSIS`: Viaggi spaziali a curvatura, tunnel dimensionali e geometrie sacre lofi.
  8. `CH 08 - 16-BIT NOSTALGIA`: Cartucce per console inclinate nello slot ed errori di rendering degli sprite.
  9. `CH 09 - LIVE FREQUENCY`: Sintonizzatore continuo di visual e frequenze aperte.
  10. `CH 00 - THE VOID`: Neve analogica pura a 60Hz con rumore bianco e segnali subliminali.
- **Sintesi Audio Procedurale (Web Audio API)**:
  - Nessun file MP3/WAV esterno da scaricare: 100% dell'audio viene generato matematicamente in tempo reale.
  - Rumore bianco RF di sintonizzazione durante il cambio canale.
  - Click plastico meccanico sui pulsanti.
  - Scarica di risonanza sub-bass sul degauss e sibilio catodico all'accensione.
- **Identità Visiva MTV & On-Screen Display**:
  - Watermark logo MTV Bizarre Net Art con glitch cromatico e sfarfallio.
  - Testo OSD verde fosforo vintage per canale, audio e stato.
  - Targhetta stile clip musicale MTV ("Lower-Third") all'inizio di ogni trasmissione.
- **Resilienza e Funzionamento Offline (PWA)**:
  - In assenza di connessione o con file esterni non raggiungibili, si attiva automaticamente un motore di animazioni procedurali Canvas (tunnel wireframe, ASCII rain, logo MTV vettoriale) che non lascia mai lo schermo spento o rotto.

---

## 🎮 Comandi e Scorciatoie da Tastiera

| Tasto | Azione |
| :--- | :--- |
| `↑` / `Spazio` | Canale successivo (`CH +`) |
| `↓` | Canale precedente (`CH -`) |
| `G` | Prossima GIF sul canale corrente (`LOOP`) |
| `D` | Smagnetizza schermo (`DEGAUSS`) |
| `Z` | Zapping automatico continuo ogni 7 secondi |
| `M` | Attiva / Disattiva sintesi audio analogica (`AUDIO`) |
| `P` | Accendi / Spegni televisore a tubo catodico (`POWER`) |
| `F` | Schermo Intero (*Fullscreen Art Installation*) |

### Su Dispositivi Touch (Smartphone & Tablet)
- **Swipe Sinistra / Destra**: Cambio canale avanti / indietro.
- **Swipe Su**: Prossimo loop sullo stesso canale.
- **Swipe Giù**: Attivazione Degauss.
- **Tap sullo Schermo**: Cambio loop e attivazione audio contestuale.

---

## 🛠️ Tecnologie Utilizzate

- **HTML5 Semantico**
- **CSS3 Moderno**: GPU acceleration, Custom Properties, Glassmorphism, CSS Masking, Filter Shaders.
- **JavaScript Moderno (ES6+)**: Zero framework (Vanilla JS).
- **HTML5 Canvas API**: Rendering 32-bit procedurale a 60 FPS per rumore bianco e fallback net art.
- **Web Audio API**: Sintesi sonora FM/sub-bass e modellazione acustica analogica.
- **PWA Service Worker & Web Manifest**: Esperienza installabile a tutto schermo.

---

## 🚀 Avvio Locale Rapido

È possibile aprire direttamente `index.html` in qualsiasi browser moderno, oppure avviare un server locale leggero:

```bash
# Avvio con server Python
python3 -m http.server 8080

# Oppure con npx serve
npx serve .
```

Aprire `http://localhost:8080` nel browser.
