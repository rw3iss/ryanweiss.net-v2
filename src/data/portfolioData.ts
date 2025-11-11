export interface MediaItem {
    url: string;
    type: 'image' | 'video';
    description: string;
}

export interface PortfolioItem {
    id: string;
    name: string;
    description: string;
    image: string;
    media: MediaItem[];
    details: string;
    tags?: string[];
}

export interface PortfolioRow {
    key: string;
    label: string;
    order: number;
    items: PortfolioItem[];
}

export const portfolioData: PortfolioRow[] = [
    {
        key: 'featured',
        label: 'Featured',
        order: 0,
        items: [
            {
                id: 'feat-001',
                name: 'Quantum Interface',
                description: 'A revolutionary approach to data visualization',
                image: '/public/images/projects/quantum.jpg',
                media: [
                    {
                        url: '/public/images/projects/quantum-1.jpg',
                        type: 'image',
                        description: 'Main dashboard interface'
                    },
                    {
                        url: '/public/images/projects/quantum-2.jpg',
                        type: 'image',
                        description: 'Real-time data streams'
                    }
                ],
                details: 'An immersive data visualization platform that transforms complex datasets into interactive 3D experiences. Built with cutting-edge web technologies and optimized for performance.',
                tags: ['WebGL', 'Three.js', 'TypeScript']
            },
            {
                id: 'feat-002',
                name: 'Neural Networks Dashboard',
                description: 'AI-powered analytics and insights',
                image: '/public/images/projects/neural.jpg',
                media: [
                    {
                        url: '/public/images/projects/neural-1.jpg',
                        type: 'image',
                        description: 'Neural network visualization'
                    }
                ],
                details: 'A sophisticated dashboard for monitoring and analyzing neural network training in real-time. Features advanced visualizations and predictive analytics.',
                tags: ['React', 'Python', 'TensorFlow']
            },
            {
                id: 'feat-003',
                name: 'Stellar Navigation',
                description: 'Next-gen space exploration tool',
                image: '/public/images/projects/stellar.jpg',
                media: [
                    {
                        url: '/public/images/projects/stellar-1.jpg',
                        type: 'image',
                        description: 'Star map interface'
                    }
                ],
                details: 'An interactive celestial mapping application that allows users to explore the cosmos with unprecedented detail and accuracy.',
                tags: ['WebGL', 'Astronomy API', 'Canvas']
            },
            {
                id: 'feat-004',
                name: 'Holographic UI System',
                description: 'Futuristic interface paradigm',
                image: '/public/images/projects/holo.jpg',
                media: [],
                details: 'A groundbreaking UI framework that brings holographic-style interfaces to the web, with gesture controls and spatial awareness.',
                tags: ['WebXR', 'Three.js', 'Motion Tracking']
            },
            {
                id: 'feat-005',
                name: 'Quantum Cryptography Suite',
                description: 'Next-level security protocols',
                image: '/public/images/projects/crypto.jpg',
                media: [],
                details: 'A comprehensive cryptography toolkit leveraging quantum-resistant algorithms for future-proof security.',
                tags: ['Cryptography', 'Security', 'Go']
            },
            {
                id: 'feat-006',
                name: 'Ethereal Data Streams',
                description: 'Real-time data flow visualization',
                image: '/public/images/projects/streams.jpg',
                media: [],
                details: 'A mesmerizing platform for visualizing complex data streams with particle-based rendering.',
                tags: ['WebGL', 'Data Viz', 'React']
            },
            {
                id: 'feat-007',
                name: 'Cosmic Code Editor',
                description: 'Space-themed development environment',
                image: '/public/images/projects/editor.jpg',
                media: [],
                details: 'A revolutionary code editor with AI-powered suggestions and immersive visual themes.',
                tags: ['Monaco', 'AI', 'TypeScript']
            },
            {
                id: 'feat-008',
                name: 'Neural Symphony',
                description: 'AI-generated music composition',
                image: '/public/images/projects/symphony.jpg',
                media: [],
                details: 'Create beautiful, original music using neural networks trained on classical compositions.',
                tags: ['AI', 'Audio', 'Python']
            },
            {
                id: 'feat-009',
                name: 'Quantum Weather Predictor',
                description: 'Advanced meteorological forecasting',
                image: '/public/images/projects/weather.jpg',
                media: [],
                details: 'Leverage quantum computing to predict weather patterns with unprecedented accuracy.',
                tags: ['Quantum', 'ML', 'Data Science']
            },
            {
                id: 'feat-010',
                name: 'Bioluminescent UI Framework',
                description: 'Nature-inspired interface library',
                image: '/public/images/projects/bio.jpg',
                media: [],
                details: 'A unique UI framework inspired by bioluminescent organisms with glowing, organic animations.',
                tags: ['UI', 'Animation', 'CSS']
            },
            {
                id: 'feat-011',
                name: 'Void Network Monitor',
                description: 'Distributed system observability',
                image: '/public/images/projects/void.jpg',
                media: [],
                details: 'Monitor and visualize distributed systems across the network with real-time topology maps.',
                tags: ['DevOps', 'Monitoring', 'Go']
            },
            {
                id: 'feat-012',
                name: 'Prismatic Color Engine',
                description: 'Advanced color manipulation toolkit',
                image: '/public/images/projects/prism.jpg',
                media: [],
                details: 'A comprehensive color theory engine for designers with perceptual color space transformations.',
                tags: ['Design', 'Color', 'JavaScript']
            },
            {
                id: 'feat-013',
                name: 'Quantum State Manager',
                description: 'Advanced state synchronization',
                image: '/public/images/projects/state.jpg',
                media: [],
                details: 'A sophisticated state management library with time-travel debugging and quantum state principles.',
                tags: ['State', 'React', 'TypeScript']
            },
            {
                id: 'feat-014',
                name: 'Neuron Network Visualizer',
                description: 'Interactive neural architecture',
                image: '/public/images/projects/neuron.jpg',
                media: [],
                details: 'Real-time visualization of neural network training with 3D architecture exploration.',
                tags: ['AI', 'Visualization', 'Three.js']
            },
            {
                id: 'feat-015',
                name: 'Fluid Dynamics Simulator',
                description: 'Real-time physics engine',
                image: '/public/images/projects/fluid.jpg',
                media: [],
                details: 'GPU-accelerated fluid dynamics simulation with interactive parameters.',
                tags: ['Physics', 'WebGL', 'Shaders']
            },
            {
                id: 'feat-016',
                name: 'Celestial Navigation System',
                description: 'Astronomical positioning tool',
                image: '/public/images/projects/celestial.jpg',
                media: [],
                details: 'Navigate using stars and celestial bodies with real-time positioning algorithms.',
                tags: ['Astronomy', 'Navigation', 'Math']
            },
            {
                id: 'feat-017',
                name: 'Fractal Generator Pro',
                description: 'Mathematical art creation',
                image: '/public/images/projects/fractal.jpg',
                media: [],
                details: 'Generate stunning fractal patterns with deep zoom capabilities and customizable equations.',
                tags: ['Math', 'Graphics', 'Canvas']
            },
            {
                id: 'feat-018',
                name: 'Audio Synthesizer',
                description: 'Web-based sound design',
                image: '/public/images/projects/synth.jpg',
                media: [],
                details: 'Professional-grade audio synthesizer with modular routing and preset management.',
                tags: ['Audio', 'Web Audio', 'Sound']
            },
            {
                id: 'feat-019',
                name: 'Particle Physics Lab',
                description: 'Interactive particle simulator',
                image: '/public/images/projects/physics.jpg',
                media: [],
                details: 'Simulate particle interactions with various forces and collision dynamics.',
                tags: ['Physics', 'Simulation', 'WebGL']
            },
            {
                id: 'feat-020',
                name: 'Code Morphology Analyzer',
                description: 'AST visualization and refactoring',
                image: '/public/images/projects/ast.jpg',
                media: [],
                details: 'Visualize and analyze code structure with automated refactoring suggestions.',
                tags: ['Tooling', 'AST', 'Analysis']
            }
        ]
    },
    {
        key: 'work',
        label: 'Work',
        order: 1,
        items: [
            {
                id: 'work-001',
                name: 'E-Commerce Platform',
                description: 'Scalable marketplace solution',
                image: '/public/images/projects/ecommerce.jpg',
                media: [
                    {
                        url: '/public/images/projects/ecommerce-1.jpg',
                        type: 'image',
                        description: 'Product catalog'
                    }
                ],
                details: 'Built a high-performance e-commerce platform handling millions of transactions. Implemented advanced search, recommendations, and real-time inventory management.',
                tags: ['Node.js', 'React', 'PostgreSQL']
            },
            {
                id: 'work-002',
                name: 'Healthcare Portal',
                description: 'Patient management system',
                image: '/public/images/projects/health.jpg',
                media: [],
                details: 'Developed a HIPAA-compliant patient portal with secure messaging, appointment scheduling, and medical records management.',
                tags: ['Angular', 'Spring Boot', 'Security']
            },
            {
                id: 'work-003',
                name: 'Financial Analytics',
                description: 'Real-time market insights',
                image: '/public/images/projects/finance.jpg',
                media: [],
                details: 'Created a sophisticated financial analytics platform with live market data, predictive models, and portfolio optimization.',
                tags: ['Python', 'React', 'WebSockets']
            },
            {
                id: 'work-004',
                name: 'IoT Control Center',
                description: 'Smart device orchestration',
                image: '/public/images/projects/iot.jpg',
                media: [],
                details: 'Engineered a centralized IoT management platform for monitoring and controlling thousands of connected devices.',
                tags: ['MQTT', 'Node.js', 'MongoDB']
            },
            {
                id: 'work-005',
                name: 'Educational Platform',
                description: 'Interactive learning environment',
                image: '/public/images/projects/edu.jpg',
                media: [],
                details: 'Designed and built an engaging educational platform with gamification, progress tracking, and adaptive learning paths.',
                tags: ['Vue.js', 'Django', 'AI']
            },
            {
                id: 'work-006',
                name: 'Content Management System',
                description: 'Enterprise CMS solution',
                image: '/public/images/projects/cms.jpg',
                media: [],
                details: 'Architected a flexible, headless CMS serving content to multiple channels with advanced workflow management.',
                tags: ['GraphQL', 'Strapi', 'React']
            },
            {
                id: 'work-007',
                name: 'Supply Chain Tracker',
                description: 'Logistics optimization platform',
                image: '/public/images/projects/supply.jpg',
                media: [],
                details: 'Real-time tracking and optimization of global supply chains with predictive analytics.',
                tags: ['Logistics', 'Maps', 'Analytics']
            },
            {
                id: 'work-008',
                name: 'Video Conferencing Platform',
                description: 'Scalable WebRTC solution',
                image: '/public/images/projects/video.jpg',
                media: [],
                details: 'Built a high-quality video conferencing platform supporting thousands of concurrent users.',
                tags: ['WebRTC', 'Socket.io', 'Node.js']
            },
            {
                id: 'work-009',
                name: 'Document Collaboration Suite',
                description: 'Real-time collaborative editing',
                image: '/public/images/projects/docs.jpg',
                media: [],
                details: 'Google Docs-like collaborative document editing with operational transformation.',
                tags: ['OT', 'WebSockets', 'React']
            },
            {
                id: 'work-010',
                name: 'Social Analytics Dashboard',
                description: 'Multi-platform insights',
                image: '/public/images/projects/social.jpg',
                media: [],
                details: 'Aggregate and analyze social media metrics across multiple platforms in one unified dashboard.',
                tags: ['APIs', 'Analytics', 'Vue.js']
            },
            {
                id: 'work-011',
                name: 'Recruitment Platform',
                description: 'AI-powered hiring system',
                image: '/public/images/projects/recruit.jpg',
                media: [],
                details: 'Streamline recruitment with AI-assisted candidate matching and automated workflows.',
                tags: ['AI', 'HR Tech', 'Python']
            },
            {
                id: 'work-012',
                name: 'Energy Management System',
                description: 'Smart grid optimization',
                image: '/public/images/projects/energy.jpg',
                media: [],
                details: 'Monitor and optimize energy consumption across industrial facilities with ML predictions.',
                tags: ['IoT', 'ML', 'Time Series']
            },
            {
                id: 'work-013',
                name: 'Customer Relationship Manager',
                description: 'Next-gen CRM platform',
                image: '/public/images/projects/crm.jpg',
                media: [],
                details: 'Built a comprehensive CRM with AI-powered insights and automated workflows.',
                tags: ['CRM', 'AI', 'Sales']
            },
            {
                id: 'work-014',
                name: 'Inventory Management Suite',
                description: 'Real-time stock tracking',
                image: '/public/images/projects/inventory.jpg',
                media: [],
                details: 'Manage inventory across multiple warehouses with predictive restocking.',
                tags: ['Logistics', 'ML', 'React']
            },
            {
                id: 'work-015',
                name: 'Payment Gateway Integration',
                description: 'Secure transaction processing',
                image: '/public/images/projects/payment.jpg',
                media: [],
                details: 'Integrated multiple payment providers with fraud detection and recurring billing.',
                tags: ['Payments', 'Security', 'API']
            },
            {
                id: 'work-016',
                name: 'Business Intelligence Dashboard',
                description: 'Executive insights platform',
                image: '/public/images/projects/bi.jpg',
                media: [],
                details: 'Real-time business metrics and KPI tracking with custom report generation.',
                tags: ['BI', 'Analytics', 'Dashboards']
            },
            {
                id: 'work-017',
                name: 'Fleet Management System',
                description: 'Vehicle tracking and optimization',
                image: '/public/images/projects/fleet.jpg',
                media: [],
                details: 'Track and optimize fleet operations with route planning and maintenance scheduling.',
                tags: ['GPS', 'Logistics', 'Maps']
            },
            {
                id: 'work-018',
                name: 'Booking Platform',
                description: 'Reservation management',
                image: '/public/images/projects/booking.jpg',
                media: [],
                details: 'Built a scalable booking system for hotels, flights, and events.',
                tags: ['Bookings', 'Calendar', 'Payments']
            },
            {
                id: 'work-019',
                name: 'Legal Document Manager',
                description: 'Contract lifecycle management',
                image: '/public/images/projects/legal.jpg',
                media: [],
                details: 'Secure document management with e-signatures and version control.',
                tags: ['Legal', 'DocuSign', 'Compliance']
            },
            {
                id: 'work-020',
                name: 'Marketing Automation',
                description: 'Campaign management platform',
                image: '/public/images/projects/marketing.jpg',
                media: [],
                details: 'Automated marketing campaigns with A/B testing and analytics.',
                tags: ['Marketing', 'Automation', 'Analytics']
            }
        ]
    },
    {
        key: 'hobbies',
        label: 'Hobbies',
        order: 2,
        items: [
            {
                id: 'hobby-001',
                name: 'Generative Art',
                description: 'Algorithmic visual experiences',
                image: '/public/images/projects/genart.jpg',
                media: [
                    {
                        url: '/public/images/projects/genart-1.jpg',
                        type: 'image',
                        description: 'Fractal patterns'
                    }
                ],
                details: 'Exploring the intersection of code and creativity through generative algorithms that produce unique visual compositions.',
                tags: ['p5.js', 'GLSL', 'Creative Coding']
            },
            {
                id: 'hobby-002',
                name: 'Music Visualization',
                description: 'Audio-reactive graphics',
                image: '/public/images/projects/music.jpg',
                media: [],
                details: 'Creating immersive audio-visual experiences that respond to music in real-time using frequency analysis and particle systems.',
                tags: ['Web Audio API', 'Canvas', 'Three.js']
            },
            {
                id: 'hobby-003',
                name: 'Game Development',
                description: 'Interactive storytelling',
                image: '/public/images/projects/game.jpg',
                media: [],
                details: 'Developing indie games that blend engaging mechanics with compelling narratives and beautiful pixel art.',
                tags: ['Phaser', 'Unity', 'Game Design']
            },
            {
                id: 'hobby-004',
                name: 'Photography Portfolio',
                description: 'Capturing moments in time',
                image: '/public/images/projects/photo.jpg',
                media: [],
                details: 'A curated collection of landscape and urban photography, showcasing the beauty of natural and man-made environments.',
                tags: ['Photography', 'Lightroom', 'Composition']
            },
            {
                id: 'hobby-005',
                name: '3D Modeling & Rendering',
                description: 'Digital sculpting adventures',
                image: '/public/images/projects/3d.jpg',
                media: [],
                details: 'Creating photorealistic 3D models and environments using Blender and advanced rendering techniques.',
                tags: ['Blender', '3D', 'Rendering']
            },
            {
                id: 'hobby-006',
                name: 'Interactive Fiction',
                description: 'Branching narrative experiences',
                image: '/public/images/projects/fiction.jpg',
                media: [],
                details: 'Writing and developing interactive stories with multiple paths and endings.',
                tags: ['Writing', 'Twine', 'Narrative']
            },
            {
                id: 'hobby-007',
                name: 'Data Sonification',
                description: 'Turning data into music',
                image: '/public/images/projects/sonify.jpg',
                media: [],
                details: 'Experimental project converting various datasets into musical compositions.',
                tags: ['Audio', 'Data', 'Creative Coding']
            },
            {
                id: 'hobby-008',
                name: 'Algorithmic Poetry',
                description: 'Computer-generated verses',
                image: '/public/images/projects/poetry.jpg',
                media: [],
                details: 'Using natural language processing to generate unique poetry and prose.',
                tags: ['NLP', 'Poetry', 'AI']
            },
            {
                id: 'hobby-009',
                name: 'Virtual Reality Worlds',
                description: 'Immersive VR experiences',
                image: '/public/images/projects/vr.jpg',
                media: [],
                details: 'Creating interactive VR environments and experiences using WebXR.',
                tags: ['VR', 'WebXR', 'Three.js']
            },
            {
                id: 'hobby-010',
                name: 'Procedural Terrain Generation',
                description: 'Infinite landscape creation',
                image: '/public/images/projects/terrain.jpg',
                media: [],
                details: 'Generate realistic terrain using noise algorithms and erosion simulation.',
                tags: ['Procedural', 'Terrain', 'WebGL']
            },
            {
                id: 'hobby-011',
                name: 'Audio-Visual Installations',
                description: 'Interactive art pieces',
                image: '/public/images/projects/av.jpg',
                media: [],
                details: 'Creating immersive audio-visual installations that respond to user input.',
                tags: ['Art', 'Installation', 'Interactive']
            },
            {
                id: 'hobby-012',
                name: 'Retro Gaming Remakes',
                description: 'Modern takes on classics',
                image: '/public/images/projects/retro.jpg',
                media: [],
                details: 'Reimagining classic games with modern graphics and gameplay mechanics.',
                tags: ['Gaming', 'Remake', 'Nostalgia']
            }
        ]
    },
    {
        key: 'blog',
        label: 'Blog',
        order: 3,
        items: [
            {
                id: 'blog-001',
                name: 'The Future of Web Development',
                description: 'Trends shaping the next decade',
                image: '/public/images/blog/future.jpg',
                media: [],
                details: 'An in-depth exploration of emerging technologies and methodologies that will define the future of web development, from WebAssembly to edge computing.',
                tags: ['Web Development', 'Technology', 'Trends']
            },
            {
                id: 'blog-002',
                name: 'Mastering TypeScript',
                description: 'Advanced patterns and practices',
                image: '/public/images/blog/typescript.jpg',
                media: [],
                details: 'A comprehensive guide to leveraging TypeScript\'s advanced features for building robust, maintainable applications.',
                tags: ['TypeScript', 'Programming', 'Tutorial']
            },
            {
                id: 'blog-003',
                name: 'Performance Optimization',
                description: 'Making web apps blazing fast',
                image: '/public/images/blog/performance.jpg',
                media: [],
                details: 'Practical techniques for optimizing web application performance, from bundle size reduction to efficient rendering strategies.',
                tags: ['Performance', 'Optimization', 'Best Practices']
            },
            {
                id: 'blog-004',
                name: 'Design Systems at Scale',
                description: 'Building consistent UIs',
                image: '/public/images/blog/design.jpg',
                media: [],
                details: 'Lessons learned from implementing and maintaining large-scale design systems across multiple teams and products.',
                tags: ['Design Systems', 'UI/UX', 'Architecture']
            },
            {
                id: 'blog-005',
                name: 'AI in Web Development',
                description: 'Leveraging machine learning',
                image: '/public/images/blog/ai.jpg',
                media: [],
                details: 'Exploring practical applications of artificial intelligence and machine learning in modern web development workflows.',
                tags: ['AI', 'Machine Learning', 'Innovation']
            },
            {
                id: 'blog-006',
                name: 'WebAssembly Deep Dive',
                description: 'The future of web performance',
                image: '/public/images/blog/wasm.jpg',
                media: [],
                details: 'Understanding WebAssembly and how it enables near-native performance in web applications.',
                tags: ['WebAssembly', 'Performance', 'Rust']
            },
            {
                id: 'blog-007',
                name: 'Microservices Architecture',
                description: 'Building scalable systems',
                image: '/public/images/blog/microservices.jpg',
                media: [],
                details: 'Best practices for designing and implementing microservices architectures.',
                tags: ['Architecture', 'Microservices', 'DevOps']
            },
            {
                id: 'blog-008',
                name: 'CSS Grid Mastery',
                description: 'Modern layout techniques',
                image: '/public/images/blog/grid.jpg',
                media: [],
                details: 'Master CSS Grid and create complex, responsive layouts with ease.',
                tags: ['CSS', 'Layout', 'Design']
            },
            {
                id: 'blog-009',
                name: 'Security Best Practices',
                description: 'Protecting web applications',
                image: '/public/images/blog/security.jpg',
                media: [],
                details: 'Essential security practices every web developer should implement.',
                tags: ['Security', 'Best Practices', 'OWASP']
            },
            {
                id: 'blog-010',
                name: 'The Art of Code Review',
                description: 'Building better teams',
                image: '/public/images/blog/review.jpg',
                media: [],
                details: 'How to conduct effective code reviews that improve code quality and team dynamics.',
                tags: ['Code Review', 'Team', 'Process']
            },
            {
                id: 'blog-011',
                name: 'Progressive Web Apps',
                description: 'Native-like web experiences',
                image: '/public/images/blog/pwa.jpg',
                media: [],
                details: 'Building PWAs that work offline and feel native on mobile devices.',
                tags: ['PWA', 'Mobile', 'Service Workers']
            },
            {
                id: 'blog-012',
                name: 'GraphQL Best Practices',
                description: 'API design patterns',
                image: '/public/images/blog/graphql.jpg',
                media: [],
                details: 'Designing efficient GraphQL APIs with proper caching and query optimization.',
                tags: ['GraphQL', 'API', 'Architecture']
            },
            {
                id: 'blog-013',
                name: 'Docker for Developers',
                description: 'Containerization guide',
                image: '/public/images/blog/docker.jpg',
                media: [],
                details: 'Practical guide to using Docker for development and deployment.',
                tags: ['Docker', 'DevOps', 'Containers']
            },
            {
                id: 'blog-014',
                name: 'React Performance Tips',
                description: 'Optimizing React apps',
                image: '/public/images/blog/react-perf.jpg',
                media: [],
                details: 'Advanced techniques for optimizing React applications and avoiding common pitfalls.',
                tags: ['React', 'Performance', 'Optimization']
            }
        ]
    }
];
