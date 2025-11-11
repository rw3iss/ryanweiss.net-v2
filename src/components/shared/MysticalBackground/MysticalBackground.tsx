import { useEffect, useRef } from 'preact/hooks';
import './MysticalBackground.scss';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    hue: number;
    life: number;
}

interface FlowField {
    x: number;
    y: number;
    angle: number;
    magnitude: number;
}

interface OrganicBlob {
    x: number;
    y: number;
    radius: number;
    vertices: { x: number; y: number; angle: number; baseRadius: number }[];
    rotationSpeed: number;
    pulseSpeed: number;
    pulsePhase: number;
    color: { h: number; s: number; l: number };
}

export const MysticalBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const flowFieldRef = useRef<FlowField[][]>([]);
    const blobsRef = useRef<OrganicBlob[]>([]);
    const scrollOffsetRef = useRef(0);
    const animationFrameRef = useRef<number>();
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 2; // Make it taller for scrolling
            initFlowField();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize flow field (Perlin-like noise simulation)
        const initFlowField = () => {
            const resolution = 30;
            const cols = Math.ceil(canvas.width / resolution);
            const rows = Math.ceil(canvas.height / resolution);
            flowFieldRef.current = [];

            for (let y = 0; y < rows; y++) {
                const row: FlowField[] = [];
                for (let x = 0; x < cols; x++) {
                    // Create organic flow patterns using sine/cosine
                    const angle =
                        Math.sin(x * 0.1 + y * 0.05) * Math.PI +
                        Math.cos(y * 0.1 - x * 0.05) * Math.PI * 0.5;
                    const magnitude = Math.sin(x * 0.05) * Math.cos(y * 0.05) * 0.5 + 0.5;
                    row.push({
                        x: x * resolution,
                        y: y * resolution,
                        angle,
                        magnitude
                    });
                }
                flowFieldRef.current.push(row);
            }
        };

        // Initialize organic blobs
        const initBlobs = () => {
            const blobs: OrganicBlob[] = [];
            for (let i = 0; i < 6; i++) {
                const vertexCount = 8 + Math.floor(Math.random() * 4);
                const vertices = [];
                const baseRadius = 150 + Math.random() * 200;

                for (let j = 0; j < vertexCount; j++) {
                    const angle = (j / vertexCount) * Math.PI * 2;
                    vertices.push({
                        x: 0,
                        y: 0,
                        angle,
                        baseRadius: baseRadius * (0.8 + Math.random() * 0.4)
                    });
                }

                blobs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: baseRadius,
                    vertices,
                    rotationSpeed: (Math.random() - 0.5) * 0.0005,
                    pulseSpeed: 0.001 + Math.random() * 0.002,
                    pulsePhase: Math.random() * Math.PI * 2,
                    color: {
                        h: 190 + Math.random() * 40, // Blue-cyan range
                        s: 60 + Math.random() * 30,
                        l: 30 + Math.random() * 20
                    }
                });
            }
            return blobs;
        };

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = [];
            for (let i = 0; i < 200; i++) {
                particles.push(createParticle());
            }
            return particles;
        };

        const createParticle = (): Particle => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.6 + 0.2,
                hue: 180 + Math.random() * 60,
                life: 1.0
            };
        };

        particlesRef.current = initParticles();
        blobsRef.current = initBlobs();
        initFlowField();

        // Handle scroll
        const handleScroll = () => {
            scrollOffsetRef.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        // Draw organic blob
        const drawBlob = (blob: OrganicBlob, time: number) => {
            const pulse = Math.sin(time * blob.pulseSpeed + blob.pulsePhase) * 0.3 + 1;

            ctx.beginPath();
            blob.vertices.forEach((vertex, i) => {
                const rotation = time * blob.rotationSpeed;
                const angle = vertex.angle + rotation;
                const waveOffset = Math.sin(angle * 3 + time * 0.002) * 20;
                const radius = (vertex.baseRadius + waveOffset) * pulse;

                const x = blob.x + Math.cos(angle) * radius;
                const y = blob.y + Math.sin(angle) * radius + scrollOffsetRef.current * 0.05;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    // Use quadratic curves for smooth organic shapes
                    const prevVertex = blob.vertices[i - 1];
                    const prevAngle = prevVertex.angle + rotation;
                    const prevRadius = (prevVertex.baseRadius + Math.sin(prevAngle * 3 + time * 0.002) * 20) * pulse;
                    const prevX = blob.x + Math.cos(prevAngle) * prevRadius;
                    const prevY = blob.y + Math.sin(prevAngle) * prevRadius + scrollOffsetRef.current * 0.05;

                    const cpX = (prevX + x) / 2;
                    const cpY = (prevY + y) / 2;
                    ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
                }
            });
            ctx.closePath();

            // Create gradient for blob
            const gradient = ctx.createRadialGradient(blob.x, blob.y + scrollOffsetRef.current * 0.05, 0, blob.x, blob.y + scrollOffsetRef.current * 0.05, blob.radius * pulse * 1.5);
            gradient.addColorStop(0, `hsla(${blob.color.h}, ${blob.color.s}%, ${blob.color.l + 10}%, 0.15)`);
            gradient.addColorStop(0.5, `hsla(${blob.color.h}, ${blob.color.s}%, ${blob.color.l}%, 0.08)`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fill();

            // Add subtle glow
            ctx.strokeStyle = `hsla(${blob.color.h + 20}, 80%, 60%, 0.1)`;
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            timeRef.current += 1;
            const time = timeRef.current;

            // Create dynamic gradient background - pure blues, no purple
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            const scrollFactor = (scrollOffsetRef.current % canvas.height) / canvas.height;
            bgGradient.addColorStop(0, `hsl(200, 45%, ${4 + scrollFactor * 2}%)`);
            bgGradient.addColorStop(0.5, `hsl(195, 50%, ${6 + scrollFactor * 2}%)`);
            bgGradient.addColorStop(1, `hsl(205, 40%, ${3 + scrollFactor * 2}%)`);
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw organic blobs
            blobsRef.current.forEach((blob) => {
                drawBlob(blob, time);
            });

            // Update and draw particles following flow field
            particlesRef.current.forEach((particle, index) => {
                // Get flow field influence
                const resolution = 30;
                const col = Math.floor(particle.x / resolution);
                const row = Math.floor(particle.y / resolution);

                if (
                    flowFieldRef.current[row] &&
                    flowFieldRef.current[row][col]
                ) {
                    const flow = flowFieldRef.current[row][col];
                    const force = flow.magnitude * 0.05;
                    particle.vx += Math.cos(flow.angle + time * 0.001) * force;
                    particle.vy += Math.sin(flow.angle + time * 0.001) * force;
                }

                // Apply drag
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy + scrollOffsetRef.current * 0.002;

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle with glow
                const glowSize = particle.size * 4;
                const particleGradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    glowSize
                );
                particleGradient.addColorStop(
                    0,
                    `hsla(${particle.hue + Math.sin(time * 0.01) * 20}, 80%, 60%, ${particle.opacity})`
                );
                particleGradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 50%, ${particle.opacity * 0.3})`);
                particleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = particleGradient;
                ctx.fill();
            });

            // Draw connecting lines between nearby particles (constellation effect)
            const connectionDistance = 150;
            particlesRef.current.forEach((p1, i) => {
                particlesRef.current.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 200, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div className="mystical-background">
            <canvas ref={canvasRef} className="mystical-background__canvas" />
            <div className="mystical-background__overlay" />
        </div>
    );
};
