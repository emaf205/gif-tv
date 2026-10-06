/**
 * GIF-TV: Net Art CRT Television
 * Application Controller - Single Infinite Stream & Simplified Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const crtScreen = document.getElementById('crt-screen');
  const staticCanvas = document.getElementById('static-canvas');
  const fallbackCanvas = document.getElementById('fallback-canvas');
  const tvGif = document.getElementById('tv-gif');
  const ambientGlow = document.getElementById('ambient-glow');
  const powerLed = document.getElementById('power-led');

  // OSD & Lower-Third
  const crtOsd = document.getElementById('crt-osd');
  const osdChannel = document.getElementById('osd-channel');
  const osdSub = document.getElementById('osd-sub');
  const lowerThird = document.getElementById('lower-third');
  const ltTitle = document.getElementById('lt-title');
  const ltArtist = document.getElementById('lt-artist');
  const ltYear = document.getElementById('lt-year');
  const ltChannel = document.getElementById('lt-channel');

  // Header
  const headerFreq = document.getElementById('header-freq');
  const headerTime = document.getElementById('header-time');

  // Controls
  const btnPower = document.getElementById('btn-power');
  const btnPrevCh = document.getElementById('btn-prev-ch');
  const btnNextCh = document.getElementById('btn-next-ch');
  const btnZap = document.getElementById('btn-zap');
  const zapLabel = document.getElementById('zap-label');
  const btnDegauss = document.getElementById('btn-degauss');
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const screenArrowPrev = document.getElementById('screen-arrow-prev');
  const screenArrowNext = document.getElementById('screen-arrow-next');

  // State
  let isPowered = true;
  let isZapping = false;
  let zapTimer = null;
  let osdTimer = null;
  let lowerThirdTimer = null;
  let fallbackAnimId = null;
  let currentHue = 180;

  // Initialize CRT Visual Effects Engine
  const crtEffects = new CRTEffects(staticCanvas, crtScreen);

  // Real-time clock in header
  function updateClock() {
    const d = new Date();
    headerTime.textContent = d.toTimeString().split(' ')[0];
  }
  setInterval(updateClock, 1000);
  updateClock();

  /**
   * Display On-Screen Display (OSD) Message
   */
  function showOSD(mainText, subText = 'MTV BIZARRE // LIVE FEED') {
    if (!isPowered) return;
    osdChannel.textContent = mainText;
    osdSub.textContent = subText;
    crtOsd.classList.add('visible');

    if (osdTimer) clearTimeout(osdTimer);
    osdTimer = setTimeout(() => {
      crtOsd.classList.remove('visible');
    }, 3200);
  }

  /**
   * Display MTV Style Lower-Third Card
   */
  function showLowerThird(item) {
    if (!isPowered) {
      lowerThird.classList.remove('active');
      return;
    }

    ltTitle.textContent = `TITLE: ${item.title}`;
    ltArtist.textContent = item.artist;
    ltYear.textContent = item.year;
    ltChannel.textContent = `${item.channel} // ${item.frequency}`;

    lowerThird.classList.add('active');

    if (lowerThirdTimer) clearTimeout(lowerThirdTimer);
    lowerThirdTimer = setTimeout(() => {
      lowerThird.classList.remove('active');
    }, 4500);
  }

  /**
   * Procedural Fallback Net-Art Animation
   */
  function startFallbackAnimation(type = 'tunnel') {
    if (fallbackAnimId) cancelAnimationFrame(fallbackAnimId);
    fallbackCanvas.classList.add('active');
    tvGif.classList.add('hidden');

    const startTime = performance.now();
    const loop = (now) => {
      const elapsed = (now - startTime) * 0.001;
      ProceduralNetArt.renderFallback(fallbackCanvas, type, elapsed);
      fallbackAnimId = requestAnimationFrame(loop);
    };
    fallbackAnimId = requestAnimationFrame(loop);
  }

  function stopFallbackAnimation() {
    if (fallbackAnimId) {
      cancelAnimationFrame(fallbackAnimId);
      fallbackAnimId = null;
    }
    fallbackCanvas.classList.remove('active');
  }

  /**
   * Render a GIF item with analog zapping transitions
   */
  function renderItem(item, isInitial = false) {
    if (!isPowered || !item) return;

    // Analog Static Audio & Video Burst on change
    if (!isInitial) {
      window.tvAudio.playStaticBurst(0.22, 0.4);
      crtEffects.burstStatic(230, 0.9);
    }

    // Update Header Frequency
    headerFreq.textContent = item.frequency;

    // Shift ambient glow color
    currentHue = (currentHue + 47) % 360;
    ambientGlow.style.background = `radial-gradient(circle, hsla(${currentHue}, 90%, 55%, 0.12) 0%, hsla(${(currentHue + 40) % 360}, 90%, 45%, 0.04) 50%, transparent 75%)`;

    // OSD & Lower-Third updates
    showOSD('CH 01 - MTV BIZARRE', `${item.frequency} // STEREO`);
    showLowerThird(item);

    // Load Image
    const imgLoader = new Image();
    imgLoader.crossOrigin = 'anonymous';
    imgLoader.src = item.url;

    imgLoader.onload = () => {
      stopFallbackAnimation();
      tvGif.src = item.url;
      tvGif.classList.remove('hidden');
    };

    imgLoader.onerror = () => {
      console.warn('Fallback needed for item:', item.title);
      const fallbacks = ['tunnel', 'ascii', 'mtv-logo'];
      const picked = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      startFallbackAnimation(picked);
    };
  }

  /**
   * Zap to next random GIF
   */
  function zapNext() {
    window.tvAudio.playClick();
    const item = window.tvStream.getNextRandom();
    renderItem(item);
  }

  /**
   * Zap to previous GIF in history
   */
  function zapPrev() {
    window.tvAudio.playClick();
    const item = window.tvStream.getPrevious();
    renderItem(item);
  }

  /**
   * Auto Zapping Toggle (Continuous Surfing)
   */
  function toggleZapping() {
    window.tvAudio.playClick();
    isZapping = !isZapping;

    if (isZapping) {
      btnZap.classList.add('active');
      zapLabel.textContent = 'AUTO ON';
      showOSD('AUTO ZAP: ACTIVE', 'TIMER: EVERY 7 SECONDS');
      zapTimer = setInterval(() => {
        zapNext();
      }, 7000);
    } else {
      btnZap.classList.remove('active');
      zapLabel.textContent = 'AUTO OFF';
      showOSD('AUTO ZAP: OFF', 'MANUAL TUNING');
      if (zapTimer) clearInterval(zapTimer);
    }
  }

  /**
   * Degauss Shockwave
   */
  function triggerDegauss() {
    if (!isPowered) return;
    window.tvAudio.playDegauss();
    crtEffects.triggerDegauss();
    showOSD('DEGAUSS COIL', '60Hz MAGNETIC DISCHARGE');
  }

  /**
   * Audio Mute Toggle
   */
  function toggleAudio() {
    const isMuted = window.tvAudio.toggleMute();
    if (isMuted) {
      audioIcon.textContent = '🔇';
      audioLabel.textContent = 'MUTE';
      showOSD('AUDIO: MUTED', 'SYNTHESIS OFF');
    } else {
      audioIcon.textContent = '🔊';
      audioLabel.textContent = 'AUDIO';
      showOSD('AUDIO: ACTIVE', 'RF NOISE & SYNTH ON');
    }
  }

  /**
   * Power Switch (Cathode Collapse Physics)
   */
  function togglePower() {
    isPowered = !isPowered;

    if (isPowered) {
      powerLed.classList.add('on');
      crtScreen.classList.remove('screen-off');
      window.tvAudio.playPowerSwitch(true);
      crtEffects.powerOn(() => {
        const item = window.tvStream.getNextRandom();
        renderItem(item, true);
      });
    } else {
      if (isZapping) toggleZapping();
      window.tvAudio.playPowerSwitch(false);
      powerLed.classList.remove('on');
      crtEffects.powerOff(() => {
        crtScreen.classList.add('screen-off');
        stopFallbackAnimation();
      });
    }
  }

  /**
   * Fullscreen Toggle
   */
  function toggleFullscreen() {
    window.tvAudio.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      document.body.classList.add('is-fullscreen');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      document.body.classList.remove('is-fullscreen');
    }
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove('is-fullscreen');
    }
  });

  // Attach Event Listeners
  btnPower.addEventListener('click', togglePower);
  btnNextCh.addEventListener('click', zapNext);
  btnPrevCh.addEventListener('click', zapPrev);
  btnZap.addEventListener('click', toggleZapping);
  btnDegauss.addEventListener('click', triggerDegauss);
  btnAudio.addEventListener('click', toggleAudio);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Direct On-Screen Arrow Clickers
  if (screenArrowPrev) {
    screenArrowPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      zapPrev();
    });
  }
  if (screenArrowNext) {
    screenArrowNext.addEventListener('click', (e) => {
      e.stopPropagation();
      zapNext();
    });
  }

  // Click anywhere on TV screen to zap next GIF and unmute context
  crtScreen.addEventListener('click', () => {
    window.tvAudio.ensureContext();
    zapNext();
  });

  // Keyboard Shortcuts (Frecce, Spazio, D, Z, M, P, F)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key.toLowerCase()) {
      case 'arrowright':
      case 'arrowup':
      case ' ':
        e.preventDefault();
        zapNext();
        break;
      case 'arrowleft':
      case 'arrowdown':
        e.preventDefault();
        zapPrev();
        break;
      case 'd':
        triggerDegauss();
        break;
      case 'z':
        toggleZapping();
        break;
      case 'm':
        toggleAudio();
        break;
      case 'p':
        togglePower();
        break;
      case 'f':
        toggleFullscreen();
        break;
    }
  });

  // Touch Swipe on mobile/tablets
  let touchStartX = 0;
  let touchStartY = 0;

  crtScreen.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  crtScreen.addEventListener('touchend', (e) => {
    if (e.changedTouches.length > 0) {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;

      if (Math.abs(dx) > 40 || Math.abs(dy) > 40) {
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) zapNext();
          else zapPrev();
        } else {
          if (dy < 0) zapNext();
          else triggerDegauss();
        }
      }
    }
  }, { passive: true });

  // Start with first random GIF
  const initialItem = window.tvStream.getNextRandom();
  renderItem(initialItem, true);
});
