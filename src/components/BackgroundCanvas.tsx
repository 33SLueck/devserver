import { useEffect, useRef } from "react";

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to fill the window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    // Example draw function: simple gradient background
    const draw = () => {
      if (!ctx) return;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#e0e7ce");
      gradient.addColorStop(1, "#f0fdfa");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.arc(200, 300, 50, 0, Math.PI * 2);
    ctx.fill();
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
