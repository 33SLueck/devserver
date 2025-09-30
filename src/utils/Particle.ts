class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    hue: number;
    alpha: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.hue = 0;
        this.alpha = 0.0; 
    }

    update() {
        this.alpha += 0.02;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        this.update();
    }

    setHue(hue: number) {
        this.hue = hue;
    }
}

export default Particle;