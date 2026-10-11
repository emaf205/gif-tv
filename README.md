# 📺 GIF-TV // Net Art CRT Television & Lo-Fi Broadcast Stream

<p align="center">
  <img src="https://emaf205.com/github/assets/covers/gif-tv.jpg" alt="GIF-TV Cover Artwork" width="100%">
</p>

> **"A vintage phosphor cathode ray tube tuned into an endless, surreal broadcast of 90s MTV Liquid Television loops."**  
> An interactive Net Art installation recreating physical CRT physics: barrel distortion curvature, magnetic degauss coils, drifting scanlines, and real-time procedural Web Audio synthesis.

[![Live Installation](https://img.shields.io/badge/Live_Installation-emaf205.com%2Fideas%2Fgif--tv-dfff00?style=for-the-badge&logo=googlechrome&logoColor=000000)](https://emaf205.com/ideas/gif-tv/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-emaf205%2Fgif--tv-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emaf205/gif-tv)
[![License: MIT](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)](LICENSE)

---

## ✦ The Genesis & Why This Exists

Remember late-night 1990s television? Flipping channels at 2:00 AM between static snow, public access broadcasts, Japanese commercials, experimental MTV bumpers, and hypnotic animation loops?

Modern video feeds (TikTok, Instagram Reels, YouTube Shorts) are hyper-monetized algorithmic treadmills. They demand your active attention while collecting behavioral telemetry.

I built **GIF-TV** as a contemplative Net Art sanctuary:
- **Zero Algorithms**: No recommendation engines, no accounts, no metrics.
- **Physical CRT Authenticity**: A meticulously engineered WebGL/CSS cathode ray tube that accurately models optical barrel distortion, phosphor decay, and chromatic aberration.
- **Procedural Acoustic Synthesis**: White noise static, click switches, and the deep magnetic degauss coil pulse are generated purely through mathematical oscillators in the browser—zero external audio files downloaded.

---

## ✦ Live Interface Preview

<p align="center">
  <img src="preview.jpg" alt="GIF-TV Net Art CRT Television Preview" width="100%" style="border-radius: 12px; box-shadow: 0 16px 32px rgba(0,0,0,0.6);" />
</p>

---

## ✦ Interactive Features & Physics Engine

- **📺 Phosphor CRT Shader Simulation**:
  - Curved screen glass vignette and chromatic aberration at viewport borders.
  - Continuous vertical drifting scanlines and realistic RGB phosphor shadow mask.
- **🧲 Magnetic Degauss Coil (<kbd>D</kbd>)**:
  - Simulates the physical electromagnetic degaussing pulse: dramatic 60Hz mechanical elastic screen distortion accompanied by a synthesized sub-bass *"BWWOOOOOMP"* discharge.
- **⚡ Cathode Ray Collapse Power-Off (<kbd>P</kbd>)**:
  - Shuts down the TV with authentic electron beam collapse: the image flattens into a blinding horizontal line before decaying into a fading center phosphor point.
- **🔊 Procedural Web Audio Engine**:
  - Real-time white noise tuning static, rotary switch clicks, and high-frequency flyback transformer coil hum synthesized directly on the audio thread.
- **♾️ Endless Curated Stream**:
  - Cycles through weirdcore, cyberpunk glitch art, 90s demoscene visual loops, and surrealist animation.

---

## ✦ Keyboard & Remote Controls

| Key / Gesture | Action |
| :--- | :--- |
| <kbd>Space</kbd> or Tap TV Screen | Next random channel loop |
| <kbd>←</kbd> / <kbd>→</kbd> or <kbd>↑</kbd> / <kbd>↓</kbd> | Channel zapping forward / backward |
| <kbd>D</kbd> | Trigger magnetic Degauss coil |
| <kbd>Z</kbd> | Toggle Auto-Zapping mode (every 7s) |
| <kbd>M</kbd> | Toggle analog TV static audio |
| <kbd>P</kbd> | Power On / Off cathode collapse |
| <kbd>F</kbd> | Fullscreen (*Gallery Exhibition Mode*) |

---

## ✦ Technical Highlights

- **100% Vanilla Web Standards**: Built without React, Three.js, or external bloat. Single-purpose modular JS and CSS.
- **PWA Ready**: Installable as a standalone fullscreen desktop or mobile television app.

---

## ✦ Quickstart & Local Setup

```bash
# Clone the repository
git clone https://github.com/emaf205/gif-tv.git
cd gif-tv

# Run with any static server
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) and press <kbd>F</kbd> for fullscreen gallery mode.

---

## ✦ Author & Credits

Created by **[Emanuele BDC](https://emaf205.com)** in Milan.  
A nostalgic tribute to late-night broadcast television and net art culture.

Distributed under the **MIT License**. Free for personal and artistic enjoyment.
