/**
 * GIF-TV: Net Art CRT Television
 * Visual CRT Shaders, Canvas Static & Screen Physics Engine
 */

class CRTEffects {
  constructor(canvasEl, screenEl) {
    this.canvas = canvasEl;
    this.screen = screenEl;
    this.ctx = this.canvas ? this.canvas.getContext('2d', { alpha: true }) : null;
    this.isStaticActive = false;
    this.staticIntensity = 0; // 0 to 1
    this.animFrameId = null;
    this.imageData = null;
    this.buf32 = null;
    this.width = 0;
    this.height = 0;
    this.trackingOffset = 0;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (!this.canvas) return;
    // Lower internal resolution for authentic chunky analog noise & 60fps performance
    this.width = 320;
    this.height = 240;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    if (this.ctx) {
      this.imageData = this.ctx.createImageData(this.width, this.height);
      this.buf32 = new Uint32Array(this.imageData.data.buffer);
    }
  }

  /**
   * Fast 32-bit procedural analog TV noise renderer
   */
  renderStaticFrame() {
    if (!this.ctx || !this.buf32) return;

    const len = this.buf32.length;
    const intensity = this.staticIntensity;
    const alphaByte = Math.floor(Math.min(255, intensity * 255));

    if (alphaByte <= 0) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      return;
    }

    // Generate RF analog noise with occasional scan sync bands
    const time = Date.now() * 0.005;
    const syncBandY = Math.floor((Math.sin(time) * 0.5 + 0.5) * this.height);

    for (let i = 0; i < len; i++) {
      // 85% pure snow, 15% tinted phosphor noise
      const rand = (Math.random() * 255) | 0;
      const y = (i / this.width) | 0;

      // Analog sync disturbance line
      let noiseVal = rand;
      if (Math.abs(y - syncBandY) < 6) {
        noiseVal = (rand * 1.5) & 255;
      }

      // 0xAABBGGRR in little-endian
      this.buf32[i] = (alphaByte << 24) | (noiseVal << 16) | (noiseVal << 8) | noiseVal;
    }

    this.ctx.putImageData(this.imageData, 0, 0);
  }

  startStaticLoop() {
    if (this.animFrameId) return;
    const loop = () => {
      if (this.isStaticActive || this.staticIntensity > 0.01) {
        this.renderStaticFrame();
        this.animFrameId = requestAnimationFrame(loop);
      } else {
        if (this.ctx) this.ctx.clearRect(0, 0, this.width, this.height);
        this.animFrameId = null;
      }
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  /**
   * Trigger a temporary burst of static noise (e.g. during channel zapping)
   */
  burstStatic(duration = 260, maxIntensity = 0.95, onDone = null) {
    this.isStaticActive = true;
    this.staticIntensity = maxIntensity;
    this.startStaticLoop();

    const startTime = performance.now();
    const fade = () => {
      const elapsed = performance.now() - startTime;
      if (elapsed < duration) {
        // High static at start, fast fade out
        const progress = elapsed / duration;
        this.staticIntensity = maxIntensity * (1 - Math.pow(progress, 2));
        requestAnimationFrame(fade);
      } else {
        this.staticIntensity = 0;
        this.isStaticActive = false;
        if (this.ctx) this.ctx.clearRect(0, 0, this.width, this.height);
        if (onDone) onDone();
      }
    };

    setTimeout(() => {
      requestAnimationFrame(fade);
    }, Math.floor(duration * 0.4));
  }

  /**
   * Continuous static mode (e.g. CH 00 THE VOID)
   */
  setContinuousStatic(active = true, intensity = 0.88) {
    this.isStaticActive = active;
    this.staticIntensity = active ? intensity : 0;
    if (active) {
      this.startStaticLoop();
    } else {
      if (this.ctx) this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  /**
   * Magnetic Degaussing Shockwave
   */
  triggerDegauss() {
    if (!this.screen) return;
    this.screen.classList.remove('is-degaussing');
    // Force reflow
    void this.screen.offsetWidth;
    this.screen.classList.add('is-degaussing');

    // Add mild static glitch burst during degauss
    this.burstStatic(450, 0.45);

    setTimeout(() => {
      this.screen.classList.remove('is-degaussing');
    }, 1200);
  }

  /**
   * Cathode Beam Turn Off Animation
   */
  powerOff(callback) {
    if (!this.screen) return;
    this.screen.classList.remove('crt-turn-on');
    this.screen.classList.add('crt-turn-off');

    setTimeout(() => {
      if (callback) callback();
    }, 650);
  }

  /**
   * Cathode Beam Turn On Animation
   */
  powerOn(callback) {
    if (!this.screen) return;
    this.screen.classList.remove('crt-turn-off');
    this.screen.classList.add('crt-turn-on');

    // Initial white flash & static pop
    this.burstStatic(350, 0.7);

    setTimeout(() => {
      this.screen.classList.remove('crt-turn-on');
      if (callback) callback();
    }, 600);
  }
}

window.CRTEffects = CRTEffects;
