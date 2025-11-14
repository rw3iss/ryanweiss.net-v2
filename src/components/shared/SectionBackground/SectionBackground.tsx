import { useEffect, useRef } from 'preact/hooks';
import './SectionBackground.scss';

interface SectionBackgroundProps {
    theme: 'space' | 'nebula' | 'ocean' | 'cosmic';
}

export const SectionBackground = ({ theme }: SectionBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = () => {
            if (!ctx || !canvas) return;
            timeRef.current += 1;
            const time = timeRef.current;

            switch (theme) {
                case 'space':
                    drawSpaceTheme(ctx, canvas, time);
                    break;
                case 'nebula':
                    drawNebulaTheme(ctx, canvas, time);
                    break;
                case 'ocean':
                    drawOceanTheme(ctx, canvas, time);
                    break;
                case 'cosmic':
                    drawCosmicTheme(ctx, canvas, time);
                    break;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [theme]);

    // Space theme - stars and galaxies
    const drawSpaceTheme = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
        ctx.fillStyle = '#030510';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        for (let i = 0; i < 100; i++) {
            const x = (i * 137.5) % canvas.width;
            const y = (i * 217.3) % canvas.height;
            const size = Math.sin(time * 0.01 + i) * 1.5 + 2;
            const opacity = Math.sin(time * 0.02 + i * 0.5) * 0.3 + 0.7;

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
            gradient.addColorStop(0, `rgba(200, 220, 255, ${opacity})`);
            gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, size * 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw distant galaxy
        const galaxyX = canvas.width * 0.7;
        const galaxyY = canvas.height * 0.3;
        const galaxyGradient = ctx.createRadialGradient(galaxyX, galaxyY, 0, galaxyX, galaxyY, 200);
        galaxyGradient.addColorStop(0, 'rgba(100, 150, 255, 0.15)');
        galaxyGradient.addColorStop(0.5, 'rgba(80, 120, 200, 0.08)');
        galaxyGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = galaxyGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Nebula theme - colorful clouds
    const drawNebulaTheme = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
        ctx.fillStyle = '#0a0520';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw nebula clouds
        for (let i = 0; i < 5; i++) {
            const x = (Math.sin(time * 0.0003 + i) * 200 + canvas.width * (0.2 + i * 0.15));
            const y = (Math.cos(time * 0.0004 + i) * 150 + canvas.height * (0.3 + i * 0.1));
            const radius = 250 + Math.sin(time * 0.001 + i) * 50;

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            const hue = (280 + i * 20) % 360;
            gradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.15)`);
            gradient.addColorStop(0.5, `hsla(${hue + 20}, 60%, 40%, 0.08)`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    // Ocean theme - underwater with light rays
    const drawOceanTheme = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
        // Deep blue gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#001a2e');
        gradient.addColorStop(1, '#000a15');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw light rays from above
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 5; i++) {
            const x = canvas.width * (0.2 + i * 0.15) + Math.sin(time * 0.001 + i) * 50;
            const rayGradient = ctx.createLinearGradient(x, 0, x + 100, canvas.height);
            rayGradient.addColorStop(0, 'rgba(100, 200, 255, 0.08)');
            rayGradient.addColorStop(1, 'rgba(0, 150, 200, 0)');

            ctx.fillStyle = rayGradient;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x + 150, canvas.height);
            ctx.lineTo(x + 50, canvas.height);
            ctx.lineTo(x - 100, 0);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // Draw floating particles
        for (let i = 0; i < 30; i++) {
            const x = (i * 73.5) % canvas.width;
            const y = ((i * 127.3 + time * 0.2) % canvas.height);
            const size = Math.random() * 3 + 1;

            ctx.fillStyle = `rgba(150, 220, 255, ${0.3 + Math.sin(time * 0.01 + i) * 0.2})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    // Cosmic theme - energy fields and grid
    const drawCosmicTheme = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, time: number) => {
        ctx.fillStyle = '#05050f';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw energy grid
        ctx.strokeStyle = 'rgba(0, 255, 200, 0.08)';
        ctx.lineWidth = 1;
        const gridSize = 50;
        const offset = (time * 0.5) % gridSize;

        for (let x = -offset; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = -offset; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Draw energy orbs
        for (let i = 0; i < 3; i++) {
            const x = canvas.width * (0.3 + i * 0.2) + Math.sin(time * 0.002 + i) * 100;
            const y = canvas.height * 0.5 + Math.cos(time * 0.003 + i) * 150;
            const radius = 80 + Math.sin(time * 0.004 + i) * 20;

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0, 255, 200, 0.2)');
            gradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    return (
        <div className="section-background">
            <canvas ref={canvasRef} className="section-background__canvas" />
        </div>
    );
};
