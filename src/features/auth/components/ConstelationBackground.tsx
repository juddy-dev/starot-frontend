import { useEffect, useRef } from "react";

const ConstellationBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let particles = [] as Particle[];
        let numParticles = getParticleCount();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = 2;
            }

            draw() {
                if (ctx) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = "white";
                    ctx.fill();    
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
        }

        function getParticleCount() {
            if (width < 768) return 25;
            if (width < 1024) return 50;
            return 80;
        };

        function init() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        }

        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100 && ctx) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                }
            }
        }

        function animate() {
            ctx?.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            drawLines();
            requestAnimationFrame(animate);
        }

        function resize() {
            if (canvas) {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                numParticles = getParticleCount();
                init();    
            }
        }
            
        window.addEventListener("resize", resize);
        init();
        animate();

        return () => window.removeEventListener("resize", resize);
        
    }
    }, []);

  return (
    <div className="mt-3 mb-3 md:m-0 p-6 relative w-full md:w-1/2 h-full md:h-auto flex items-center justify-center text-white">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full md:h-auto" />
      <h1 className="relative md:text-xl font-bold z-10 p-3 rounded-lg">
        Estos datos nos ayudarán a conocer las estrellas cuando nacistes
      </h1>
    </div>
  );
};

export default ConstellationBackground;
