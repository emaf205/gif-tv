/**
 * GIF-TV: Net Art CRT Television
 * Application Controller & State Machine
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
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
  const btnNextGif = document.getElementById('btn-next-gif');
  const btnZap = document.getElementById('btn-zap');
  const zapLabel = document.getElementById('zap-label');
  const btnDegauss = document.getElementById('btn-degauss');
  const btnAudio = document.getElementById('btn-audio');
  const audioIcon = document.getElementById('audio-icon');
  const audioLabel = document.getElementById('audio-label');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const channelDropdown = document.getElementById('channel-dropdown');

  // State
  let isPowered = true;
  let currentChannelIdx = 0;
  let currentGifIdx = 0;
  let isZapping = false;
  let zapTimer = null;
  let osdTimer = null;
  let lowerThirdTimer = null;
  let fallbackAnimId = null;

  // Initialize CRT Effects Engine
  const crtEffects = new CRTEffects(staticCanvas, crtScreen);

  // Populate Channel Dropdown
  TV_CHANNELS.forEach((ch, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `CH ${ch.number} - ${ch.name}`;
    channelDropdown.appendChild(opt);
  });

  // Clock Update
  function updateClock() {
    const d = new Date();
    headerTime.textContent = d.toTimeString().split(' ')[0];
  }
  setInterval(updateClock, 1000);
  updateClock();

  /**
   * Show On-Screen Display (OSD) Notification
   */
  function showOSD(mainText, subText = 'STEREO // AV-1') {
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
   * Show MTV Style Lower-Third Card
   */
  function showLowerThird(item, ch) {
    if (!isPowered || ch.isStaticChannel) {
      lowerThird.classList.remove('active');
      return;
    }

    ltTitle.textContent = `TITLE: ${item.title || 'UNTITLED TRANSMISSION'}`;
    ltArtist.textContent = item.artist || 'ANONYMOUS NET ART';
    ltYear.textContent = item.year || '199X';
    ltChannel.textContent = `CH ${ch.number} // ${ch.frequency} // ${ch.category}`;

    lowerThird.classList.add('active');

    if (lowerThirdTimer) clearTimeout(lowerThirdTimer);
    lowerThirdTimer = setTimeout(() => {
      lowerThird.classList.remove('active');
    }, 4500);
  }

  /**
   * Render Procedural Fallback Animation on Canvas
   */
  function startFallbackAnimation(type = 'tunnel') {
    if (fallbackAnimId) cancelAnimationFrame(fallbackAnimId);
    fallbackCanvas.classList.add('active');
    tvGif.classList.add('hidden');

    let startTime = performance.now();
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
   * Tune Channel and Load Content
   */
  function tuneChannel(chIdx, gifIdx = 0, isInitial = false) {
    if (!isPowered) return;

    // Constrain indices
    currentChannelIdx = (chIdx + TV_CHANNELS.length) % TV_CHANNELS.length;
    channelDropdown.value = currentChannelIdx;

    const ch = TV_CHANNELS[currentChannelIdx];
    currentGifIdx = (gifIdx + ch.items.length) % ch.items.length;
    const item = ch.items[currentGifIdx];

    // Audio & Visual Static Burst on Zapping
    if (!isInitial) {
      window.tvAudio.playStaticBurst(0.24, 0.4);
      crtEffects.burstStatic(240, 0.9);
    }

    // Update Header Frequency
    headerFreq.textContent = ch.frequency;

    // Update OSD & Lower Third
    showOSD(`CH ${ch.number} - ${ch.name}`, `${ch.frequency} // STEREO`);
    showLowerThird(item, ch);

    // Update Ambient Glow Color Palette
    const hue = (currentChannelIdx * 37) % 360;
    ambientGlow.style.background = `radial-gradient(circle, hsla(${hue}, 90%, 55%, 0.12) 0%, hsla(${(hue + 45) % 360}, 90%, 45%, 0.04) 50%, transparent 75%)`;

    // Static Channel Handling
    if (ch.isStaticChannel) {
      stopFallbackAnimation();
      tvGif.classList.add('hidden');
      crtEffects.setContinuousStatic(true, 0.9);
      return;
    } else {
      crtEffects.setContinuousStatic(false);
    }

    // Load GIF Media
    stopFallbackAnimation();
    tvGif.classList.remove('hidden');

    if (!item.url) {
      startFallbackAnimation('mtv-logo');
      return;
    }

    // Preload image to avoid flicker
    const imgLoader = new Image();
    imgLoader.crossOrigin = 'anonymous';
    imgLoader.src = item.url;

    imgLoader.onload = () => {
      stopFallbackAnimation();
      tvGif.src = item.url;
      tvGif.classList.remove('hidden');
    };

    imgLoader.onerror = () => {
      // Graceful fallback to generative net-art on canvas
      console.warn(`Could not load media for ${item.title}, using procedural fallback.`);
      const fallbackTypes = ['tunnel', 'ascii', 'mtv-logo', 'rainbow'];
      const chosenType = fallbackTypes[currentChannelIdx % fallbackTypes.length];
      startFallbackAnimation(chosenType);
    };
  }

  /**
   * Channel Navigation
   */
  function nextChannel() {
    window.tvAudio.playClick();
    tuneChannel(currentChannelIdx + 1, 0);
  }

  function prevChannel() {
    window.tvAudio.playClick();
    tuneChannel(currentChannelIdx - 1, 0);
  }

  function nextGif() {
    window.tvAudio.playClick();
    const ch = TV_CHANNELS[currentChannelIdx];
    tuneChannel(currentChannelIdx, currentGifIdx + 1);
  }

  /**
   * Zapping Auto Mode (Automated Channel Surfing)
   */
  function toggleZapping() {
    window.tvAudio.playClick();
    isZapping = !isZapping;

    if (isZapping) {
      btnZap.classList.add('active');
      zapLabel.textContent = 'ZAP ON';
      showOSD('AUTO ZAP: ON', 'INTERVAL: 7 SECONDS');
      zapTimer = setInterval(() => {
        // Jump to next or random channel
        const nextIdx = (currentChannelIdx + 1) % (TV_CHANNELS.length - 1); // skip static void
        tuneChannel(nextIdx, Math.floor(Math.random() * TV_CHANNELS[nextIdx].items.length));
      }, 7000);
    } else {
      btnZap.classList.remove('active');
      zapLabel.textContent = 'ZAP OFF';
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
      showOSD('AUDIO: MUTED', 'SYNTHESIS SILENCED');
    } else {
      audioIcon.textContent = '🔊';
      audioLabel.textContent = 'AUDIO';
      showOSD('AUDIO: ACTIVE', 'RF NOISE & TONE ON');
    }
  }

  /**
   * Power Switch (Cathode Collapse Physics)
   */
  function togglePower() {
    isPowered = !isPowered;

    if (isPowered) {
      // Turn On
      powerLed.classList.add('on');
      crtScreen.classList.remove('screen-off');
      window.tvAudio.playPowerSwitch(true);
      crtEffects.powerOn(() => {
        tuneChannel(currentChannelIdx, currentGifIdx, true);
      });
    } else {
      // Turn Off
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

  // Button Event Listeners
  btnPower.addEventListener('click', togglePower);
  btnNextCh.addEventListener('click', nextChannel);
  btnPrevCh.addEventListener('click', prevChannel);
  btnNextGif.addEventListener('click', nextGif);
  btnZap.addEventListener('click', toggleZapping);
  btnDegauss.addEventListener('click', triggerDegauss);
  btnAudio.addEventListener('click', toggleAudio);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  channelDropdown.addEventListener('change', (e) => {
    window.tvAudio.playClick();
    tuneChannel(parseInt(e.target.value, 10), 0);
  });

  // Click on TV Screen to interact & unmute on first touch
  crtScreen.addEventListener('click', () => {
    window.tvAudio.ensureContext();
    nextGif();
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Avoid interfering if focus is inside an input
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key.toLowerCase()) {
      case 'arrowup':
      case ' ':
        e.preventDefault();
        nextChannel();
        break;
      case 'arrowdown':
        e.preventDefault();
        prevChannel();
        break;
      case 'g':
        nextGif();
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

  // Touch Swipe for Mobile & Tablet
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
          if (dx < 0) nextChannel();
          else prevChannel();
        } else {
          if (dy < 0) nextGif();
          else triggerDegauss();
        }
      }
    }
  }, { passive: true });

  // Initial Tune
  tuneChannel(0, 0, true);
});
