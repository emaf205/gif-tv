# Changelog - GIF-TV

Tutte le modifiche rilevanti a questo progetto saranno documentate in questo file.
Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/) e aderisce a [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-10-06

### Aggiunto
- **Frecce Cambio Canale a Schermo**:
  - Pulsanti freccia sovrimpressi direttamente sul tubo catodico (`◀` Canale Precedente, `▶` Canale Successivo) con estetica vintage in vetro satinato e glow neon al passaggio del mouse.
  - Supporto completo per le frecce della tastiera: `←` (Freccia Sinistra), `→` (Freccia Destra), `↑` (Freccia Su), `↓` (Freccia Giù) e barra `Spazio`.
  - Pulsanti `◀ CH -` e `▶ CH +` evidenziati sul telecomando.
- **Crediti Net Art**:
  - Aggiunti i crediti discreti ed eleganti *"Made with ♥ in Milan by EmaF205"* sia nella testata superiore che nel footer, con cuore pulsante e link diretto a [emaf205.com](https://emaf205.com).
- **Flusso GIF 100% Verificato & Resiliente**:
  - Aggiornato il catalogo con 47 loop surreali/assurdi testati e verificati con risposta HTTP 200 OK e CORS aperto su CDN Fastly/GIPHY.
  - Zero errori 404, rotazione dinamica continua e fallback generativo Canvas sempre attivo in caso di assenza di rete.

## [1.0.0] - 2026-10-06

### Aggiunto
- **Simulatore Televisivo CRT Vintage**:
  - Telaio a tubo catodico realistico in stile anni '90 (Sony Trinitron / Mivar) con curvatura barrel dello schermo, vetro bombato e riflessi dinamici.
  - Scanlines orizzontali ad alta definizione con drift analogico e maschera subpixel ad apertura di fosforo RGB.
  - Effetto Degauss magnetico con distorsione elastica a 60Hz e aberrazione cromatica arcobaleno.
  - Collasso del fascio catodico in fase di spegnimento (spegnimento a linea laser e punto centrale a fosforo).
- **10 Canali Tematici di Net Art & GIF Assurde**:
  - `CH 01 - LIQUID MTV`, `CH 02 - WEIRDCORE & SURREAL`, `CH 03 - 90s CYBERSPACE`, `CH 04 - ANALOG GLITCH`, `CH 05 - ACID CARTOON`, `CH 06 - DEEP NET ART`, `CH 07 - COSMIC HYPNOSIS`, `CH 08 - 16-BIT NOSTALGIA`, `CH 09 - LIVE FREQUENCY`, `CH 00 - THE VOID`.
- **Motore Audio Procedurale (Web Audio API)**:
  - Generazione in tempo reale di rumore bianco per lo zapping tra canali, click meccanici e degauss coil sweep ("BWWOOOOOMP").
- **Grafica OSD verde fosforo e lower-third MTV**.
