class RainParticle {
    x: number;
    y: number;
    speed: number;
    velocity :number;
    size: number;
    position1:number;
    position2:number;
    mappedImage: number[][][];
canvas : HTMLCanvasElement;
    constructor(canvas: HTMLCanvasElement, mappedImage: number[][][]) {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() *  0.5;
        this.size = Math.random() * 0.2 + 1;
        this.canvas = canvas;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.mappedImage = mappedImage;
    }

    update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
       
        this.speed = this.mappedImage[this.position1][this.position2][0];
        const movement =  (2.5 - this.speed) + this.velocity;
        this.y += movement;
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * this.canvas.width;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
            ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
export default RainParticle;