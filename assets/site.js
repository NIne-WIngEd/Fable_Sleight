(() => {
  'use strict';
  const steps = Array.from(document.querySelectorAll('.flow-step'));
  const stage = document.querySelector('.journey-stage');
  const state = document.querySelector('.journey-state');
  const captions = ['YOUR RECORDS. YOUR CHOICE.', 'A FOUNDATION BUILT AROUND YOU.', 'CORRECTIONS BECOME LEARNING.'];
  steps.forEach((step) => step.addEventListener('toggle', () => {
    if (!step.open || !stage) return;
    // Keep the interaction consistent in browsers without named-details support.
    steps.forEach(other => { if (other !== step) other.open = false; });
    stage.dataset.active = step.dataset.step;
    if (state) state.textContent = captions[Number(step.dataset.step)];
  }));

  const canvas = document.querySelector('#foundation-canvas');
  const toggle = document.querySelector('#motion-toggle');
  if (!canvas || !toggle) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false, visible = false, frame = 0, lastTime = 0, phase = 1.2;
  let width = 0, height = 0, pointer = 0, targetPointer = 0;
  const canAnimate = () => !paused && !reduced.matches && visible && !document.hidden && width > 0 && height > 0;

  function draw() {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    const scale = Math.min(width * .34, height * .32);
    const rotation = .4 + Math.sin(phase * .19) * .32 + pointer * .12;
    const cr = Math.cos(rotation), sr = Math.sin(rotation);
    const tilt = -.47, ct = Math.cos(tilt), st = Math.sin(tilt);
    for (let ring = 0; ring < 66; ring++) {
      const v = ring / 65 * Math.PI;
      context.beginPath();
      for (let point = 0; point <= 150; point++) {
        const u = point / 150 * Math.PI * 2;
        const radius = Math.sin(v) * (1 + .22 * Math.cos(u * 3 + v * 2 + phase * .13));
        const x = radius * Math.cos(u), y = Math.cos(v) * 1.27, z = radius * Math.sin(u);
        const rx = x * cr + z * sr, rz = -x * sr + z * cr;
        const ry = y * ct - rz * st, depth = y * st + rz * ct;
        const perspective = 1 / (1 - depth * .16);
        const px = width * .51 + rx * scale * perspective;
        const py = height * .50 + ry * scale * perspective;
        if (!point) context.moveTo(px, py); else context.lineTo(px, py);
      }
      context.strokeStyle = `rgba(36,87,231,${.29 + Math.sin(v) * .49})`;
      context.lineWidth = .75;
      context.stroke();
    }
  }
  function tick(now) {
    frame = 0;
    if (!canAnimate()) return;
    if (now - lastTime >= 33) {
      phase += Math.min(now - lastTime, 80) * .00033;
      pointer += (targetPointer - pointer) * .045;
      lastTime = now;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastTime = performance.now();
    toggle.hidden = reduced.matches || !width || !height;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.innerHTML = paused ? 'Play motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
    if (canAnimate()) frame = requestAnimationFrame(tick);
  }
  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width; height = rect.height;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    visible = rect.bottom > 0 && rect.top < innerHeight;
    draw();
    if (width && height) canvas.parentElement.classList.add('canvas-ready');
    sync();
  }
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  canvas.addEventListener('pointermove', event => {
    if (!canAnimate()) return;
    const rect = canvas.getBoundingClientRect();
    targetPointer = (event.clientX - rect.left) / rect.width - .5;
  });
  canvas.addEventListener('pointerleave', () => { targetPointer = 0; });
  document.addEventListener('visibilitychange', sync);
  const preferenceChanged = () => { targetPointer = pointer; draw(); sync(); };
  if (reduced.addEventListener) reduced.addEventListener('change', preferenceChanged);
  else reduced.addListener(preferenceChanged);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(canvas);
  } else {
    addEventListener('scroll', () => {
      const rect = canvas.getBoundingClientRect();
      const next = rect.bottom > 0 && rect.top < innerHeight;
      if (next !== visible) { visible = next; sync(); }
    }, {passive:true});
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
  addEventListener('resize', resize, {passive:true});
  resize();
})();
