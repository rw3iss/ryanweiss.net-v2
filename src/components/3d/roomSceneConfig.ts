const roomSceneConfig = {
    backgroundColor: 0x2e2a26, // Warm, dark background
    lights: [
        {
            color: 0xffc490, // Warm light
            intensity: 0.5,
            position: { x: 0, y: 5, z: 0 },
        },
        {
            color: 0xffd9b3,
            intensity: 0.3,
            position: { x: -3, y: 4, z: 3 },
        },
        {
            color: 0xffb973,
            intensity: 0.2,
            position: { x: 3, y: 4, z: -3 },
        },
    ],
    objects: [
        {
            asset: "plane", // Basic plane geometry
            material: { color: 0x3e3a35 },
            position: { x: 0, y: -1, z: 0 },
            scale: { x: 10, y: 1, z: 10 },
            glowColor: null,
        },
        {
            asset: "cube", // Basic cube geometry
            material: { color: 0xff6363 },
            position: { x: -1, y: 0.5, z: -1 },
            scale: { x: 1, y: 1, z: 1 },
            glowColor: 0xff0000,
        },
        {
            asset: "cube",
            material: { color: 0x63ff63 },
            position: { x: 2, y: 1, z: -2 },
            scale: { x: 0.8, y: 0.8, z: 0.8 },
            glowColor: 0x00ff00,
        },
        // {
        //     asset: { url: "/models/customObject.glb" }, // GLTF asset
        //     material: null,
        //     position: { x: -2, y: 0.75, z: 2 },
        //     scale: { x: 1.2, y: 1.2, z: 1.2 },
        //     glowColor: 0x0000ff,
        // },
        {
            asset: "cube",
            material: { color: 0xffff63 },
            position: { x: 1, y: 0.25, z: 2 },
            scale: { x: 1.5, y: 1.5, z: 1.5 },
            glowColor: 0xffff00,
        },
        {
            asset: "cube",
            material: { color: 0xff63ff },
            position: { x: 0, y: 1.5, z: 0 },
            scale: { x: 0.6, y: 0.6, z: 0.6 },
            glowColor: 0xff00ff,
        },
    ],
    cameraPosition: { x: 0, y: 3, z: 6 },
    cameraLookAt: { x: 0, y: 0, z: 0 },
};

export default roomSceneConfig;