import { Component } from 'preact';
import * as THREE from 'three';

class SceneManager {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.currentObjects = [];
    }

    clearScene() {
        this.currentObjects.forEach(obj => this.scene.remove(obj));
        this.currentObjects = [];
    }

    setScene(config) {
        this.clearScene();
        this.scene.background = new THREE.Color(0x0b0d21); // Darker blue with gradient variations
        this.scene.fog = new THREE.FogExp2(config.fogColor, 0.02);

        const material = new THREE.LineDashedMaterial({ color: 0xffaa00, dashSize: 0.5, gapSize: 0.2, linewidth: 2 });

        // Create dashed cube
        const cubeGeometry = new THREE.BufferGeometry();
        const cubeVertices = [
            -2, -2, -2, 2, -2, -2,
            2, -2, -2, 2, 2, -2,
            2, 2, -2, -2, 2, -2,
            -2, 2, -2, -2, -2, -2,
            -2, -2, 2, 2, -2, 2,
            2, -2, 2, 2, 2, 2,
            2, 2, 2, -2, 2, 2,
            -2, 2, 2, -2, -2, 2,
            -2, -2, -2, -2, -2, 2,
            2, -2, -2, 2, -2, 2,
            2, 2, -2, 2, 2, 2,
            -2, 2, -2, -2, 2, 2,
        ];

        cubeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(cubeVertices, 3));
        cubeGeometry.computeBoundingSphere();

        const cube = new THREE.LineSegments(cubeGeometry, material);
        cube.computeLineDistances();
        this.scene.add(cube);
        this.currentObjects.push(cube);

        // Create stars with instancing
        const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });

        const stars = new THREE.InstancedMesh(starGeometry, starMaterial, 1000);
        const matrix = new THREE.Matrix4();
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            matrix.setPosition(x, y, z);
            stars.setMatrixAt(i, matrix);
        }
        this.scene.add(stars);
    }
}

class ThreeJSWrapper extends Component {
    componentDidMount() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 5); // Adjusted to be in front of the cube

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(this.renderer.domElement);

        this.sceneManager = new SceneManager(this.scene, this.camera);
        this.sceneManager.setScene({
            backgroundColor: 0x000000,
            fogColor: 0x222222,
            fogNear: 5,
            fogFar: 15
        });

        window.addEventListener('wheel', this.handleZoom);
        window.addEventListener('mousemove', this.handleMouseMove);

        this.animate();
    }

    handleZoom = (event) => {
        this.camera.position.z += event.deltaY * 0.01;
    }

    handleMouseMove = (event) => {
        const { innerWidth, innerHeight } = window;
        const x = (event.clientX / innerWidth) * 2 - 1;
        const y = -(event.clientY / innerHeight) * 2 + 1;
        this.camera.rotation.y = x * 0.2;
        this.camera.rotation.x = y * 0.2;
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return <div ref={el => (this.mount = el)} />;
    }
}

export default ThreeJSWrapper;
