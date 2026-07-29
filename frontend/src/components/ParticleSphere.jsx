import React, { useEffect, useRef } from 'react';

/**
 * ParticleSphere - animated 3D dot sphere rendered on Canvas 2D.
 * - Fibonacci lattice for uniform point distribution
 * - Rotates slowly around Y axis (and slight tilt on X)
 * - Perspective projection, points closer to viewer = brighter & larger
 * - Handles DPR + resize
 */
export default function ParticleSphere({
  count = 2400,
  radius = 220,
  color = 'rgba(255,255,255,',
  className = '',
  speed = 0.00035,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const pointsRef = useRef([]);

  // Build unit-sphere points once
  useEffect(() => {
    const pts = new Array(count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // -1..1
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts[i] = { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    }
    pointsRef.current = pts;
  }, [count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      sizeRef.current = { w: rect.width, h: rect.height, dpr };
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let start = performance.now();
    const tiltX = -0.35; // slight tilt so equator is visible
    const cosTx = Math.cos(tiltX);
    const sinTx = Math.sin(tiltX);

    const render = (now) => {
      const t = (now - start) * speed;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) / 2 * (radius / 220) * 0.85;
      // perspective camera distance
      const camZ = 3.2;

      const cosY = Math.cos(t);
      const sinY = Math.sin(t);

      const pts = pointsRef.current;
      // draw back-half first (lower alpha), then front-half
      const backBuf = [];
      const frontBuf = [];

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y;
        // tilt around X
        const y2 = y1 * cosTx - z1 * sinTx;
        const z2 = y1 * sinTx + z1 * cosTx;

        // perspective
        const zc = z2 + camZ;
        const f = 2.4 / zc;
        const px = cx + x1 * R * f;
        const py = cy + y2 * R * f;

        // depth 0..1 (1 = front)
        const depth = (z2 + 1) / 2;
        const size = 0.6 + depth * 1.6;
        const alpha = 0.06 + depth * 0.85;

        const rec = { px, py, size, alpha };
        if (z2 > 0) frontBuf.push(rec); else backBuf.push(rec);
      }

      // back layer
      for (let i = 0; i < backBuf.length; i++) {
        const p = backBuf[i];
        ctx.fillStyle = color + (p.alpha * 0.35).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size * 0.7, 0, 6.283);
        ctx.fill();
      }
      // front layer
      for (let i = 0; i < frontBuf.length; i++) {
        const p = frontBuf[i];
        ctx.fillStyle = color + p.alpha.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, 6.283);
        ctx.fill();
      }

      // subtle equator ring (faint)
      ctx.strokeStyle = 'rgba(249,115,22,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 1.1, R * 1.1 * Math.abs(sinTx) + 4, 0, 0, Math.PI * 2);
      ctx.stroke();

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [color, radius, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
