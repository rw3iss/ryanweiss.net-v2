import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { portfolioData } from '../../../data/portfolioData';
import './style.scss';

export const TreeHome = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Handle canvas resize
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                setDimensions({ width, height });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    // Update canvas dimensions and prepare context
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // Enable high DPI rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = dimensions.width * dpr;
        canvas.height = dimensions.height * dpr;
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        ctx.scale(dpr, dpr);

        // Initial draw
        drawBackground(ctx, dimensions.width, dimensions.height);
    }, [dimensions]);

    const drawBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);

        // Dark slate colors: blue/grey/green/dark teal
        gradient.addColorStop(0, '#0a1628');      // Deep blue-grey
        gradient.addColorStop(0.25, '#0d1f2d');   // Dark teal-blue
        gradient.addColorStop(0.5, '#0e2433');    // Darker teal
        gradient.addColorStop(0.75, '#0b1f23');   // Dark green-teal
        gradient.addColorStop(1, '#081419');      // Nearly black green-grey

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add subtle texture overlay
        addTextureOverlay(ctx, width, height);
    };

    const addTextureOverlay = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Create noise texture
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            // Add subtle random noise
            const noise = (Math.random() - 0.5) * 8;
            data[i] += noise;     // R
            data[i + 1] += noise; // G
            data[i + 2] += noise; // B
        }

        ctx.putImageData(imageData, 0, 0);

        // Add subtle vignette
        const vignette = ctx.createRadialGradient(
            width / 2, height / 2, 0,
            width / 2, height / 2, Math.max(width, height) * 0.8
        );
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
        vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');

        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, width, height);
    };

    return (
        <div className="tree-home" ref={containerRef}>
            <canvas className="tree-home__canvas" ref={canvasRef} />

            {/* Debug info */}
            <div className="tree-home__debug">
                <p>Canvas: {dimensions.width} x {dimensions.height}</p>
                <p>Portfolio Items: {portfolioData.reduce((sum, row) => sum + row.items.length, 0)}</p>
            </div>
        </div>
    );
};
