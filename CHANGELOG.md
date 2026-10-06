# Changelog - GIF-TV

Tutte le modifiche rilevanti a questo progetto saranno documentate in questo file.
Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/) e aderisce a [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-10-06

### Aggiunto
- **Simulatore Televisivo CRT Vintage**:
  - Telaio a tubo catodico realistico in stile anni '90 (Sony Trinitron / Mivar) con curvatura barrel dello schermo, vetro bombato e riflessi dinamici.
  - Scanlines orizzontali ad alta definizione con drift analogico e maschera subpixel ad apertura di fosforo RGB.
  - Effetto Degauss magnetico con distorsione elastica a 60Hz e aberrazione cromatica arcobaleno.
  - Collasso del fascio catodico in fase di spegnimento (spegnimento a linea laser e punto centrale a fosforo).
- **10 Canali Tematici di Net Art & GIF Assurde**:
  - `CH 01 - LIQUID MTV`: Bumper d'autore, loghi morphing, Liquid Television anni '90.
  - `CH 02 - WEIRDCORE & SURREAL`: Liminal spaces, fisica distorta e loop senza senso.
  - `CH 03 - 90s CYBERSPACE`: Silicon Graphics, wireframe neon e sogni preistorici di realtà virtuale.
  - `CH 04 - ANALOG GLITCH`: Nastri magnetici corrotti dal videoregistratore e barre SMPTE.
  - `CH 05 - ACID CARTOON`: Animazioni rubberhose vintage sotto trip psichedelico.
  - `CH 06 - DEEP NET ART`: ASCII rain dinamica, finestre pop-up e dadaismo arcaico.
  - `CH 07 - COSMIC HYPNOSIS`: Tunnel infiniti e viaggi frattali lofi.
  - `CH 08 - 16-BIT NOSTALGIA`: Cartucce retro-gaming inclinate e collisioni di sprite rotte.
  - `CH 09 - LIVE FREQUENCY`: Sintonizzatore continuo di visual e loop net art.
  - `CH 00 - THE VOID`: Neve analogica pura a 60Hz e messaggi subliminali.
- **Motore Audio Procedurale (Web Audio API)**:
  - Generazione in tempo reale di rumore bianco per lo zapping tra canali.
  - Click meccanico realistico per i pulsanti fisici in plastica dura.
  - Scarica magnetica degauss a 50Hz/60Hz con sweep sub-bass ("BWWOOOOOMP").
  - Suoni di accensione/spegnimento catodico a filamento.
- **Grafica On-Screen Display (OSD) & Lower-Third MTV**:
  - Indicatore di canale a fosforo verde vintage (`CH 01 - LIQUID MTV`, `STEREO // AV-1`).
  - Targhetta stile video musicale MTV a scomparsa con Autore, Titolo, Frequenza e Anno.
  - Bumper d'angolo lampeggiante con logo MTV Bizarre Net Art.
- **Controlli & Interazione**:
  - Telecomando dock galleggiante (Power, CH+/CH-, Loop, Zap Auto ogni 7s, Degauss, Mute, Fullscreen).
  - Scorciatoie da tastiera complete (`↑`/`↓`/`Spazio`, `G`, `D`, `Z`, `M`, `P`, `F`).
  - Supporto gesture swipe touch per dispositivi mobili e tablet.
- **PWA & Offline Resilience**:
  - `manifest.webmanifest` per installazione ed esecuzione standalone.
  - `sw.js` per cache offline della shell applicativa.
  - Canvas di rendering procedurale generativo di fallback in caso di disconnessione o URL esterni non raggiungibili.
