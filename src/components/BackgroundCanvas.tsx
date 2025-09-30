import { useEffect, useRef } from 'react';
import Particle from '../utils/Particle';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  // Emitter animation state
  const tRef = useRef(0); // progress along the curve (0..1)
  const emitterActiveRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Set up canvas size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    resizeCanvas();

    // Curve points
    const getCurvePoints = () => {
      const w = canvas.width;
      const h = canvas.height;
      return {
        start: { x: 0.1 * w, y: 0.9 * h },
        control: { x: 0.5 * w, y: 0.2 * h },
        end: { x: 1 * w, y: 0.5 * h },
      };
    };

    // Quadratic Bezier interpolation
    const getEmitterPos = (t: number) => {
      const { start, control, end } = getCurvePoints();
      const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * control.x + t * t * end.x;
      const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * control.y + t * t * end.y;
      return { x, y };
    };

    let animationId: number;
    let hue = 0;
    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue++;

      // Move emitter along curve
      if (emitterActiveRef.current && tRef.current <= 1) {
        const { x, y } = getEmitterPos(tRef.current);
        // Draw emitter (optional)
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.25)'; // transparent blue
        ctx.fill();
        // Emit particles
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(new Particle(x, y));
        }
        tRef.current += 0.003; // slower speed
      } else {
        emitterActiveRef.current = false;
      }

   
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.setHue(hue); 
        p.update();
        p.draw(ctx);

        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const q = particlesRef.current[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
         if (p.size <= 0.3) {
           particlesRef.current.splice(i, 1);
           i--;
         }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
};

export default BackgroundCanvas;



