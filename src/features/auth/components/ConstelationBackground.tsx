import { useEffect, useRef } from "react";

const ConstellationBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        const canvasContex2d = canvas.getContext("2d");

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let particles = [] as Particle[];
        let numParticles = getParticleCount();

        const colors = ["#AECBFA", "#B0E0E6", "#FBF1E5"];

        class Particle {
            posX: number;
            posY: number;
            speedX: number;
            speedY: number;
            radius: number;
            color: string;

            constructor() {
                this.posX = Math.random() * width;
                this.posY = Math.random() * height;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (canvasContex2d) {
                    canvasContex2d.beginPath();
                    canvasContex2d.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
                    canvasContex2d.fillStyle = this.color;
                    canvasContex2d.fill();    
                }
            }

            update() {
                this.posX += this.speedX;
                this.posY += this.speedY;

                if (this.posX < 0 || this.posX > width) this.speedX *= -1;
                if (this.posY < 0 || this.posY > height) this.speedY *= -1;
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
                let dx = particles[i].posX - particles[j].posX;
                let dy = particles[i].posY - particles[j].posY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100 && canvasContex2d) {
                    canvasContex2d.beginPath();
                    canvasContex2d.moveTo(particles[i].posX, particles[i].posY);
                    canvasContex2d.lineTo(particles[j].posX, particles[j].posY);
                    canvasContex2d.strokeStyle = "rgba(255, 255, 255, 0.2)";
                    canvasContex2d.lineWidth = 1;
                    canvasContex2d.stroke();
                }
                }
            }
        }

        function animate() {
            canvasContex2d?.clearRect(0, 0, width, height);
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
