import { useEffect, useRef } from 'preact/hooks';
import * as THREE from 'three';

const ThreeJSWrapper = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const galaxy = new GalaxyScene(containerRef.current);
        }

        return () => {
            // Here you would handle cleanup if necessary, like removing event listeners
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

class GalaxyScene {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        // Set up fog to give a sense of distance and atmosphere
        this.scene.fog = new THREE.FogExp2(0x000000, 0.002);  // Black fog with exponential decay

        // Default camera movement speed and max speed when scrolling
        this.cameraSpeed = 0.05;  // Default slow speed
        this.targetSpeed = this.cameraSpeed;  // Target speed that changes based on scroll input
        this.maxSpeed = 0.5;  // Maximum speed when scrolling
        this.cameraPositionZ = 10;  // Start camera close to the toroid
        this.time = 0; // For texture animation
        this.stars = [];

        this.setup();
    }

    setup() {
        // Load the Andromeda galaxy texture
        const textureLoader = new THREE.TextureLoader();
        const galaxyTexture = textureLoader.load('/public/images/galaxy.jpg');

        // Create the parabolic toroid (cylinder with tapered radius and a parabolic shape)
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

        // Modify the geometry's vertices to give it a parabolic shape
        const positionAttribute = geometry.getAttribute('position');
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            positionAttribute.setY(i, y + Math.pow(x, 2) * 0.1);  // Apply parabolic effect to y
        }
        geometry.computeVertexNormals();  // Recalculate normals to ensure proper lighting

        // Use MeshLambertMaterial for the toroid to support emissive property
        const material = new THREE.MeshLambertMaterial({
            map: galaxyTexture,
            side: THREE.BackSide,  // Apply texture to the inside of the toroid
            emissive: 0x111111,    // Galaxy glow effect
            emissiveIntensity: 0.5,
            opacity: 0.5,          // Set opacity to make the toroid semi-transparent
            transparent: true      // Make the material support transparency
        });

        // Create the mesh and add to the scene
        this.toroid = new THREE.Mesh(geometry, material);
        this.scene.add(this.toroid);

        // Set up lighting for emissive effects
        const light = new THREE.AmbientLight(0xFFFFFF, 0.5); // Dim ambient light
        this.scene.add(light);

        // Create stars in the sky (using instancing for performance)
        const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0xdddddd, emissiveIntensity: 0.5 });

        const starCount = 1000; // Total number of stars
        for (let i = 0; i < starCount; i++) {
            const star = new THREE.Mesh(starGeometry, starMaterial);
            star.position.set(
                Math.random() * 2000 - 1000,  // Random position in space
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
            );
            this.stars.push(star);
            this.scene.add(star);
        }

        // Set camera position inside the toroid
        this.camera.position.z = this.cameraPositionZ;

        // Add event listener for mouse movement
        window.addEventListener('mousemove', (event) => this.onMouseMove(event), { passive: true });

        // Animate the scene
        this.animate();
    }

    onMouseMove(event) {
        // Adjust the camera slightly based on the mouse position
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalized mouseX (-1 to 1)
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normalized mouseY (-1 to 1)
        this.camera.rotation.x += mouseY * 0.02;  // Adjust rotation along X-axis based on mouse Y
        this.camera.rotation.y += mouseX * 0.02;  // Adjust rotation along Y-axis based on mouse X
    }

    onScroll(event) {
        // Increase the target speed when scrolling
        if (event.deltaY > 0) {
            this.targetSpeed = Math.min(this.maxSpeed, this.targetSpeed + 0.1); // Increase speed on scroll down
        } else {
            this.targetSpeed = Math.max(this.cameraSpeed, this.targetSpeed - 0.1); // Decrease speed on scroll up
        }
    }

    animate() {
        this.time += 0.01;

        // Smoothly interpolate the camera's speed toward the target speed
        this.cameraSpeed = THREE.MathUtils.lerp(this.cameraSpeed, this.targetSpeed, 0.1);

        // Animate the texture of the toroid, making it move as the camera moves
        const offset = (this.camera.position.z / 500) % 1; // Control texture offset based on camera Z position
        this.toroid.material.map.offset.set(0, offset); // Animate the texture along the Y-axis

        // Ensure the toroid always stays ahead of the camera and follows it
        this.toroid.position.z = this.camera.position.z - 10; // Keep toroid just ahead of the camera

        // Update stars' movement
        this.stars.forEach(star => {
            star.position.z += 0.5;
            if (star.position.z > this.camera.position.z) {
                star.position.z = -1000; // Reset position to simulate continuous motion
            }
            star.material.emissiveIntensity = Math.sin(this.time + star.position.z * 0.01) * 0.5 + 0.5; // Twinkling effect
        });

        // Move the camera forward continuously, adjusting speed based on user scroll input
        this.camera.position.z -= this.cameraSpeed;

        // Render the scene
        this.renderer.render(this.scene, this.camera);

        // Loop animation
        requestAnimationFrame(() => this.animate());
    }
};

export default ThreeJSWrapper;
