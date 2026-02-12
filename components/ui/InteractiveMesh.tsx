'use client';

import { useEffect, useRef } from 'react';

export function InteractiveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = 0;
    let mouseY = 0;

    const points: { x: number; y: number; ox: number; oy: number }[] = [];
    const spacing = 80;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      points.length = 0;
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          points.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)'; // Cyan-400
      ctx.lineWidth = 1;

      points.forEach((p) => {
        const dx = mouseX - p.ox;
        const dy = mouseY - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;

        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) / maxDist;
          p.x = p.ox + Math.cos(angle) * force * 50;
          p.y = p.oy + Math.sin(angle) * force * 50;
        } else {
          p.x += (p.ox - p.x) * 0.1;
          p.y += (p.oy - p.y) * 0.1;
        }
      });

      // Draw grid lines
      ctx.beginPath();
      const rows = Math.ceil(height / spacing) + 1;
      const cols = Math.ceil(width / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          const nextRow = idx + 1;
          const nextCol = idx + rows;

          if (j < rows - 1 && points[nextRow]) {
            ctx.moveTo(points[idx].x, points[idx].y);
            ctx.lineTo(points[nextRow].x, points[nextRow].y);
          }
          if (i < cols - 1 && points[nextCol]) {
            ctx.moveTo(points[idx].x, points[idx].y);
            ctx.lineTo(points[nextCol].x, points[nextCol].y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    draw();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
}
