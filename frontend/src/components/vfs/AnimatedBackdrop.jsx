import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackdrop — flowing, breathing glow orbs rendered on Canvas 2D.
 * Works everywhere (no WebGL required), respects prefers-reduced-motion,
 * DPR-aware, subtle by design so it doesn't fight page content.
 */
export default function AnimatedBackdrop() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let W = 0, H = 0, DPR = 1;

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Orbs with gentle drift
    const orbs = [
      { color: 'rgba(127,219,255,',  base: 0.16, r: 520, ax: 0.18, ay: 0.10, px: 0.30, py: 0.30, sx: 0.00012, sy: 0.00009 },
      { color: 'rgba(214,191,163,', base: 0.18, r: 460, ax: 0.14, ay: 0.13, px: 0.75, py: 0.65, sx: 0.00010, sy: 0.00013 },
      { color: 'rgba(127,219,255,',  base: 0.10, r: 380, ax: 0.20, ay: 0.16, px: 0.20, py: 0.80, sx: 0.00015, sy: 0.00011 },
      { color: 'rgba(214,191,163,', base: 0.12, r: 340, ax: 0.16, ay: 0.14, px: 0.85, py: 0.20, sx: 0.00013, sy: 0.00015 },
      { color: 'rgba(127,219,255,',  base: 0.08, r: 620, ax: 0.10, ay: 0.06, px: 0.50, py: 0.50, sx: 0.00008, sy: 0.00007 },
    ];

    // Sparkling particle field
    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: 0.4 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 1.6,
    }));

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let start = performance.now();

    const render = (now) => {
      const t = now - start;
      ctx.clearRect(0, 0, W, H);

      // Base vignette
      const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.75);
      bg.addColorStop(0, 'rgba(20,20,25,0)');
      bg.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Orbs
      ctx.globalCompositeOperation = 'lighter';
      for (const o of orbs) {
        const cx = (o.px + Math.sin(t * o.sx + o.phase || 0) * o.ax) * W;
        const cy = (o.py + Math.cos(t * o.sy) * o.ay) * H;
        const pulse = 0.85 + 0.15 * Math.sin(t * 0.0008 + o.px * 6);
        const rad = o.r * pulse * (Math.min(W, H) / 900);
        const alpha = o.base * pulse;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grad.addColorStop(0, `${o.color}${alpha.toFixed(3)})`);
        grad.addColorStop(0.55, `${o.color}${(alpha * 0.35).toFixed(3)})`);
        grad.addColorStop(1, `${o.color}0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Stars
      if (!reduced) {
        for (const st of stars) {
          const a = 0.15 + 0.35 * (0.5 + 0.5 * Math.sin(t * 0.001 * st.speed + st.phase));
          ctx.fillStyle = `rgba(214,191,163,${a.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(st.x * W, st.y * H, st.s, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = 'source-over';

      // Soft top mask (fade near very top and very bottom is handled by CSS on the wrapper)
      rafRef.current = requestAnimationFrame(render);
    };

    if (reduced) {
      // one static frame is enough
      render(performance.now());
    } else {
      rafRef.current = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
