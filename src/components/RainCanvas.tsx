import  { useRef, useEffect } from 'react';
import RainParticle from '../utils/RainParticle';

const RainCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particles: RainParticle[] = [];
    const mappedImage: number[][][] = [];
    const numParticles = 1000;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const img = new window.Image();
        img.src = "/~sven/butterfly.png";
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const targetWidth = 200;
            const aspect = img.height / img.width;
            const targetHeight = Math.round(targetWidth * aspect);

            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = targetWidth;
            tempCanvas.height = targetHeight;
            const tempCtx = tempCanvas.getContext("2d");
            if (!tempCtx) return;
            tempCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
            const base64 = tempCanvas.toDataURL("image/png");
            console.log(base64);
            canvas.width = targetWidth;
            canvas.height = targetHeight;

            const pixels = tempCtx.getImageData(0, 0, targetWidth, targetHeight);

            const calculateRelativeBrightness = (red: number, green: number, blue: number) => {
                return Math.sqrt(
                    (red * red) * 0.299 +
                    (green * green) * 0.587 +
                    (blue * blue) * 0.114
                ) / 100;
            };
            for (let y = 0; y < canvas.height; y++) {
                const row = [];
                for (let x = 0; x < canvas.width; x++) {
                    const index = (y * pixels.width + x) * 4;
                    const red = pixels.data[index];
                    const green = pixels.data[index + 1];
                    const blue = pixels.data[index + 2];
                    const brightness = calculateRelativeBrightness(red, green, blue);
                    row.push([brightness]);
                }
                mappedImage.push(row);
            }

            // Init particles
            for (let i = 0; i < numParticles; i++) {
                particles.push(new RainParticle(canvas, mappedImage));
            }

            const animate = () => {
                ctx.globalAlpha = 1.0;
                ctx.globalCompositeOperation = "source-over";

                ctx.globalAlpha = 0.05;
                ctx.fillStyle = 'rgb(0,0,0)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    ctx.globalAlpha = Math.max(0.05, particles[i].speed * 0.25);
                    ctx.globalCompositeOperation = "source-over";
                    particles[i].draw(ctx);
                }
                ctx.globalAlpha = 1.0;
                ctx.globalCompositeOperation = "source-over";
                requestAnimationFrame(animate);
            };
            animate();
        };
    }, []);

   

   return (
    <canvas 
        ref={canvasRef} 
      style={{
    position: "absolute",
    top: "100px",
    left: "20px",
    maxWidth: "400px",
    border: "1px solid white",
    borderRadius: "32px",
}}
    />
);
}

export default RainCanvas