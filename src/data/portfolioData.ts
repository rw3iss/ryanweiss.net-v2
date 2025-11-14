import { PortfolioTag } from './tags';
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
    thumbnail?: string;
    media: MediaItem[];
    details: string;
    tags?: string[];
    url?: string; // Website URL
    type?: 'fulltime' | 'freelance'; // For work items
    position?: string; // Job title
    dates?: string; // Employment period
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
                id: 'vendidit',
                name: 'Vendidit',
                description: 'Leading redesign and architecture of B2B bulk auction platform backend on AWS with NextJS and NestJS clients, achieving 2.5x improvement in throughput',
                image: '/public/data/work/vendidit/thumbnail.svg',
                thumbnail: '/public/data/work/vendidit/thumbnail.svg',
                media: [],
                details: 'Lead Full-stack Engineer on the Marketplace Team at Vendidit, an AI-powered recommerce platform. Responsible for architecting and implementing the backend infrastructure on AWS, utilizing Next.js and NestJS for the client applications. Successfully optimized system throughput by 2.5x through advanced optimization techniques. The platform handles livestream and online auctions for returned and used products, helping reduce the 93 billion pounds of returns discarded annually.',
                tags: [PortfolioTag.NEXTJS, PortfolioTag.NESTJS, PortfolioTag.AWS, PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS, PortfolioTag.PERFORMANCE_OPTIMIZATION, PortfolioTag.SYSTEM_ARCHITECTURE],
                url: 'https://vendidit.com',
                type: 'fulltime',
                position: 'Lead Full-stack Engineer, Marketplace Team',
                dates: 'June 2025 to present'
            },
            {
                id: 'adaya-ai',
                name: 'Adaya AI',
                description: 'Led technical operations and architected an ad analytics platform consolidating integrations into one system using TypeScript, Node.js, React, BigQuery, GCP and AWS',
                image: '/public/data/work/adaya-ai/screenshot.png',
                thumbnail: '/public/data/work/adaya-ai/thumbnail.svg',
                media: [],
                details: 'Director of Technology at Adaya AI, responsible for leading all technical operations and architecture decisions. Designed and built a comprehensive ad analytics platform that consolidates multiple advertising integrations into a unified system. Utilized modern cloud infrastructure with GCP and AWS, implemented real-time data processing with BigQuery, and created intuitive dashboards using React and TypeScript.',
                tags: [PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS, PortfolioTag.REACT, PortfolioTag.BIGQUERY, PortfolioTag.GCP, PortfolioTag.AWS, PortfolioTag.SYSTEM_ARCHITECTURE, PortfolioTag.API_DESIGN],
                url: 'https://adaya.ai',
                type: 'fulltime',
                position: 'Director of Technology',
                dates: 'January 2021 to January 2023'
            },
            {
                id: 'preach-logic',
                name: 'Preach Logic',
                description: 'Helped debug and extend a custom CMS for faith-based organizations with AI agent integration',
                image: '/public/data/work/preach-logic/thumbnail.svg',
                thumbnail: '/public/data/work/preach-logic/thumbnail.svg',
                media: [],
                details: 'Freelance work debugging and extending a custom content management system specifically designed for pastors and church leaders. Integrated AI capabilities for auto-tagging, transcript generation, and semantic search of sermon content. The platform centralizes video, audio, and document management with intelligent organization features.',
                tags: [PortfolioTag.AI_ML, PortfolioTag.CMS_DEVELOPMENT, PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS],
                url: 'https://preachlogic.com',
                type: 'freelance',
                dates: 'March 2025'
            }
        ]
    },
    {
        key: 'work',
        label: 'Work',
        order: 1,
        items: [
            // FULLTIME POSITIONS
            {
                id: 'vendidit',
                name: 'Vendidit',
                description: 'Leading redesign and architecture of B2B bulk auction platform backend on AWS with NextJS and NestJS clients, achieving 2.5x improvement in throughput',
                image: '/public/data/work/vendidit/thumbnail.svg',
                media: [],
                details: 'Lead Full-stack Engineer on the Marketplace Team at Vendidit, an AI-powered recommerce platform. Responsible for architecting and implementing the backend infrastructure on AWS, utilizing Next.js and NestJS for the client applications. Successfully optimized system throughput by 2.5x through advanced optimization techniques. The platform handles livestream and online auctions for returned and used products, helping reduce the 93 billion pounds of returns discarded annually.',
                tags: [PortfolioTag.NEXTJS, PortfolioTag.NESTJS, PortfolioTag.AWS, PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS, PortfolioTag.PERFORMANCE_OPTIMIZATION, PortfolioTag.SYSTEM_ARCHITECTURE],
                url: 'https://vendidit.com',
                type: 'fulltime',
                position: 'Lead Full-stack Engineer, Marketplace Team',
                dates: 'June 2025 to present'
            },
            {
                id: 'adaya-ai',
                name: 'Adaya AI',
                description: 'Led technical operations and architected an ad analytics platform consolidating integrations into one system using TypeScript, Node.js, React, BigQuery, GCP and AWS',
                image: '/public/data/work/adaya-ai/screenshot.png',
                thumbnail: '/public/data/work/adaya-ai/thumbnail.svg',
                media: [],
                details: 'Director of Technology at Adaya AI, responsible for leading all technical operations and architecture decisions. Designed and built a comprehensive ad analytics platform that consolidates multiple advertising integrations into a unified system. Utilized modern cloud infrastructure with GCP and AWS, implemented real-time data processing with BigQuery, and created intuitive dashboards using React and TypeScript.',
                tags: [PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS, PortfolioTag.REACT, PortfolioTag.BIGQUERY, PortfolioTag.GCP, PortfolioTag.AWS, PortfolioTag.SYSTEM_ARCHITECTURE, PortfolioTag.API_DESIGN],
                url: 'https://adaya.ai',
                type: 'fulltime',
                position: 'Director of Technology',
                dates: 'January 2021 to January 2023'
            },
            {
                id: 'envoyai',
                name: 'EnvoyAI',
                description: 'First hire who designed developer portal for healthcare startup using Node.js/NestJS, AWS services, and React, enabling management of dockerized AI algorithms',
                thumbnail: '/public/data/work/envoyai/thumbnail.png',
                media: [],
                details: 'Lead Senior Software Engineer and first technical hire at EnvoyAI, a healthcare AI startup. Architected and built the complete developer portal from the ground up, enabling healthcare providers to manage and deploy dockerized AI algorithms for hospital integration. Utilized Node.js/NestJS for the backend, AWS services for infrastructure, and React for the frontend interface. The platform streamlined the deployment of medical AI models into hospital environments.',
                tags: [PortfolioTag.NODEJS, PortfolioTag.NESTJS, PortfolioTag.AWS, PortfolioTag.REACT, PortfolioTag.DOCKER, PortfolioTag.AI_ML, PortfolioTag.API_DESIGN, PortfolioTag.SYSTEM_ARCHITECTURE],
                type: 'fulltime',
                position: 'Lead Senior Software Engineer',
                dates: 'August 2017 to August 2018'
            },
            {
                id: 'huge-inc',
                name: 'Huge Inc.',
                description: 'Full-stack ASP.NET developer maintaining website codebase and SiteCore CMS, leading database migration from SQL Server to Cassandra',
                thumbnail: '/public/data/work/huge-inc/thumbnail.png',
                media: [],
                details: 'Software Engineer at Huge Inc., a prominent digital agency. Worked as a full-stack ASP.NET developer, maintaining complex website codebases and managing SiteCore CMS implementations. Led a critical database migration project transitioning from SQL Server to Cassandra, enabling improved scalability and performance for high-traffic client websites.',
                tags: [PortfolioTag.ASP_NET, PortfolioTag.CSHARP, PortfolioTag.SITECORE, PortfolioTag.CASSANDRA, PortfolioTag.DATABASE_MIGRATION, PortfolioTag.FULL_STACK],
                type: 'fulltime',
                position: 'Software Engineer',
                dates: 'December 2014 to March 2015'
            },
            {
                id: 'publicis-modem',
                name: 'Publicis Modem',
                description: 'Led ASP.NET backend development for Garnier USA sites, mentoring team members on recommendation systems, newsletters, and user tracking features',
                thumbnail: '/public/data/work/publicis-modem/thumbnail.png',
                media: [],
                details: 'Lead Backend Developer at Publicis Modem, responsible for ASP.NET backend architecture for Garnier USA websites. Mentored junior developers and led implementation of advanced features including product recommendation systems, newsletter management, and comprehensive user tracking and analytics. Worked on high-profile beauty and cosmetics brand digital experiences.',
                tags: [PortfolioTag.ASP_NET, PortfolioTag.CSHARP, PortfolioTag.REST_API, PortfolioTag.FULL_STACK, PortfolioTag.E_COMMERCE],
                type: 'fulltime',
                position: 'Lead Backend Developer',
                dates: 'July 2012 to February 2013'
            },
            {
                id: 'elephant-ventures',
                name: 'Elephant Ventures',
                description: 'PHP backend developer contributing to GroupSlots iPhone prototype, PitneyBowesMeter.com e-commerce platform, and GeneralSnus.com CMS refactoring',
                thumbnail: '/public/data/work/elephant-ventures/thumbnail.png',
                media: [],
                details: 'Software Engineer at Elephant Ventures working across multiple client projects. Developed PHP backend for GroupSlots iPhone app prototype, built e-commerce functionality for PitneyBowesMeter.com, and refactored CMS architecture for GeneralSnus.com. Gained extensive experience in diverse technology stacks and client requirements.',
                tags: [PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.E_COMMERCE, PortfolioTag.CMS_DEVELOPMENT, PortfolioTag.REST_API],
                type: 'fulltime',
                position: 'Software Engineer',
                dates: 'August 2011 to July 2012'
            },
            {
                id: 'rga-interactive',
                name: 'R/GA Interactive',
                description: 'ASP.NET backend developer for high-profile clients including Verizon, Barnes & Noble, and L\'Oréal; led internal reporting systems and intranet architecture',
                thumbnail: '/public/data/work/rga-interactive/thumbnail.png',
                media: [],
                details: 'Software Developer at R/GA Interactive, one of the world\'s leading digital agencies. Worked as ASP.NET backend developer on high-profile client projects including Verizon, Barnes & Noble, and L\'Oréal. Led development of internal reporting systems and architected company intranet infrastructure. Gained experience building enterprise-scale applications for Fortune 500 brands.',
                tags: [PortfolioTag.ASP_NET, PortfolioTag.CSHARP, PortfolioTag.MYSQL, PortfolioTag.FULL_STACK, PortfolioTag.SYSTEM_ARCHITECTURE],
                type: 'fulltime',
                position: 'Software Developer',
                dates: 'May 2007 to August 2011'
            },
            {
                id: 'mydorp',
                name: 'MyDorp',
                description: 'Lead developer for early web operating system platform using ASP.NET, Java, and custom Eclipse plugins for scalable service hosting',
                image: '/public/data/work/mydorp/thumbnail.svg',
                thumbnail: '/public/data/work/mydorp/thumbnail.svg',
                media: [],
                details: 'Lead Developer for MyDorp, an innovative early web operating system platform. Architected and built a scalable service hosting environment using ASP.NET and Java, created custom Eclipse plugins for development tooling. Pioneering work in cloud-based application platforms before modern PaaS solutions existed.',
                tags: [PortfolioTag.ASP_NET, PortfolioTag.JAVA, PortfolioTag.CSHARP, PortfolioTag.SYSTEM_ARCHITECTURE],
                type: 'fulltime',
                dates: 'September 2005 to August 2007'
            },
            {
                id: 'rutgers-university',
                name: 'Rutgers University',
                description: 'Lead developer for Livingston.com using PHP and MySQL, collaborating with Dean on dynamic user pages and administrative functionality',
                thumbnail: '/public/data/work/rutgers-university/thumbnail.png',
                media: [],
                details: 'Lead Developer for Livingston.com at Rutgers University. Built comprehensive PHP/MySQL web application with dynamic user profile pages and administrative backend. Collaborated directly with university administration to deliver student-facing portal with community features.',
                tags: [PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.FULL_STACK, PortfolioTag.CMS_DEVELOPMENT],
                type: 'fulltime',
                dates: 'January 2005 to May 2007'
            },
            // FREELANCE PROJECTS
            {
                id: 'preach-logic',
                name: 'Preach Logic',
                description: 'Helped debug and extend a custom CMS for faith-based organizations with AI agent integration',
                image: '/public/data/work/preach-logic/thumbnail.svg',
                media: [],
                details: 'Freelance work debugging and extending a custom content management system specifically designed for pastors and church leaders. Integrated AI capabilities for auto-tagging, transcript generation, and semantic search of sermon content. The platform centralizes video, audio, and document management with intelligent organization features.',
                tags: [PortfolioTag.AI_ML, PortfolioTag.CMS_DEVELOPMENT, PortfolioTag.TYPESCRIPT, PortfolioTag.NODEJS],
                url: 'https://preachlogic.com',
                type: 'freelance',
                dates: 'March 2025'
            },
            {
                id: 'tier-33',
                name: 'Tier 33 Productions',
                description: 'Designed React single-page application for audio/visual rental company using AWS Lambda, CloudFront, and S3',
                image: '/public/data/work/tier-33/thumbnail.svg',
                thumbnail: '/public/data/work/tier-33/thumbnail.svg',
                media: [],
                details: 'Freelance development of a modern React single-page application for Tier 33 Productions, a Philadelphia-based AV equipment rental company. Implemented serverless architecture using AWS Lambda, CloudFront for CDN, and S3 for static hosting. The site showcases rental equipment including speakers, DJ gear, lighting, and stage equipment.',
                tags: [PortfolioTag.REACT, PortfolioTag.AWS, PortfolioTag.LAMBDA, PortfolioTag.CLOUDFRONT, PortfolioTag.S3, PortfolioTag.JAVASCRIPT],
                url: 'https://tier33.com',
                type: 'freelance',
                dates: 'December 2023'
            },
            {
                id: 'urbandaddy-drinklist',
                name: 'UrbanDaddy DrinkList',
                description: 'Refactored frontend/backend for drink exploration site using Django/Python, JavaScript, and Memcached integration with Google Sheets',
                image: '/public/data/work/urbandaddy-drinklist/thumbnail.svg',
                thumbnail: '/public/data/work/urbandaddy-drinklist/thumbnail.svg',
                media: [],
                details: 'Freelance refactoring project for UrbanDaddy\'s DrinkList platform. Modernized both frontend and backend architecture using Django/Python, optimized performance with Memcached caching, and integrated Google Sheets API for content management. The site provides curated drink recommendations and cocktail exploration.',
                tags: [PortfolioTag.DJANGO, PortfolioTag.PYTHON, PortfolioTag.JAVASCRIPT, PortfolioTag.MEMCACHED, PortfolioTag.REST_API],
                type: 'freelance',
                dates: 'December 2020'
            },
            {
                id: 'opus-logica',
                name: 'Opus Logica',
                description: 'Maintained NASA WorldWind WebGL extension and developed Ruby on Rails admin app for Crohn\'s disease IoT tracking',
                thumbnail: '/public/data/work/opus-logica/thumbnail.png',
                media: [],
                details: 'Freelance work maintaining NASA WorldWind WebGL-based geospatial visualization extension. Also developed Ruby on Rails administrative application for IoT tracking system monitoring Crohn\'s disease patients. Worked with real-time data visualization and healthcare data management.',
                tags: [PortfolioTag.WEBGL, PortfolioTag.RAILS, PortfolioTag.RUBY, PortfolioTag.JAVASCRIPT, PortfolioTag.REAL_TIME],
                type: 'freelance',
                dates: 'March 2020 to July 2020'
            },
            {
                id: 'esupporthealth',
                name: 'eSupportHealth',
                description: 'Built PHP/WordPress backend and React SPA frontend for health services with Zoom integration and Stripe payments',
                image: '/public/data/work/esupporthealth/thumbnail.svg',
                thumbnail: '/public/data/work/esupporthealth/thumbnail.svg',
                media: [],
                details: 'Freelance full-stack development for eSupportHealth telemedicine platform. Built WordPress/PHP backend with custom API endpoints, created React single-page application frontend, integrated Zoom for video consultations, and implemented Stripe payment processing. Delivered comprehensive telehealth solution during COVID-19 pandemic.',
                tags: [PortfolioTag.PHP, PortfolioTag.WORDPRESS, PortfolioTag.REACT, PortfolioTag.STRIPE, PortfolioTag.ZOOM, PortfolioTag.REST_API],
                type: 'freelance',
                dates: 'June 2020 to September 2020'
            },
            {
                id: 'quuie',
                name: 'Quuie',
                description: 'Developed Angular 8 mobile-first app with Java backend enabling drag-and-drop webpage creation',
                image: '/public/data/work/quuie/thumbnail.svg',
                thumbnail: '/public/data/work/quuie/thumbnail.svg',
                media: [],
                details: 'Freelance development of mobile-first web application using Angular 8 and Java backend. Implemented intuitive drag-and-drop interface for non-technical users to create custom webpages. Built responsive design system and real-time preview functionality.',
                tags: [PortfolioTag.ANGULAR, PortfolioTag.JAVA, PortfolioTag.TYPESCRIPT, PortfolioTag.MOBILE_DEVELOPMENT, PortfolioTag.REST_API],
                type: 'freelance',
                dates: 'January 2020 to April 2020'
            },
            {
                id: 'one-night',
                name: 'One Night',
                description: 'Full-stack developer on Laravel/React project with iOS support, using CircleCI, DialogFlow chatbot, and Synxis booking API',
                thumbnail: '/public/data/work/one-night/thumbnail.png',
                media: [],
                details: 'Freelance full-stack development for One Night hotel booking platform. Built Laravel backend with React frontend, iOS native app integration, DialogFlow AI chatbot for customer support, and Synxis booking API integration. Implemented CI/CD pipeline with CircleCI.',
                tags: [PortfolioTag.LARAVEL, PortfolioTag.REACT, PortfolioTag.PHP, PortfolioTag.CHATBOT, PortfolioTag.REST_API, PortfolioTag.MOBILE_DEVELOPMENT],
                url: 'http://onenightstandard.com/',
                type: 'freelance',
                dates: 'August 2019 to February 2020'
            },
            {
                id: 'surprize',
                name: 'Surprize',
                description: 'Developed React Native mobile app with Expo and Gatsby-based desktop site for celebrity booking management',
                image: '/public/data/work/surprize/thumbnail.svg',
                thumbnail: '/public/data/work/surprize/thumbnail.svg',
                media: [],
                details: 'Freelance development of cross-platform mobile app using React Native and Expo, plus desktop website using Gatsby. Platform connects users with celebrity booking and management services. Implemented real-time messaging, payment processing, and booking calendar features.',
                tags: [PortfolioTag.REACT_NATIVE, PortfolioTag.GATSBY, PortfolioTag.REACT, PortfolioTag.MOBILE_DEVELOPMENT, PortfolioTag.JAVASCRIPT],
                type: 'freelance',
                dates: 'July 2019 to August 2019'
            },
            {
                id: 'kk-jay',
                name: 'KK & Jay',
                description: 'Sole developer of React/Node.js/Express e-commerce site integrated with Shopify backend',
                thumbnail: '/public/data/work/kk-jay/thumbnail.png',
                media: [],
                details: 'Freelance sole developer for KK & Jay Supply Co. e-commerce platform. Built custom React frontend with Node.js/Express backend, integrated with Shopify for product management and checkout. Implemented responsive design, shopping cart, and customer account management. The site specializes in men\'s accessories including suspenders and shirttail garters.',
                tags: [PortfolioTag.REACT, PortfolioTag.NODEJS, PortfolioTag.EXPRESS, PortfolioTag.SHOPIFY, PortfolioTag.E_COMMERCE, PortfolioTag.JAVASCRIPT],
                url: 'https://kkandjay.com',
                type: 'freelance',
                dates: 'December 2018 to June 2019'
            },
            {
                id: 'ripe',
                name: 'Ripe',
                description: 'Developed responsive frontend and modified Node.js backend for job/interview management using AWS DynamoDB and Ansible',
                thumbnail: '/public/data/work/ripe/thumbnail.png',
                media: [],
                details: 'Freelance development for Ripe job interview management platform. Built responsive React frontend and extended Node.js backend functionality. Utilized AWS DynamoDB for data storage and Ansible for deployment automation. Platform helps companies manage candidate interviews and reference checks.',
                tags: [PortfolioTag.REACT, PortfolioTag.NODEJS, PortfolioTag.DYNAMODB, PortfolioTag.AWS, PortfolioTag.ANSIBLE, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'July 2017'
            },
            {
                id: 'shackshare',
                name: 'Shackshare',
                description: 'Lead developer for Laravel "Airbnb for students" application handling responsive pages and full-stack tasks',
                thumbnail: '/public/data/work/shackshare/thumbnail.png',
                media: [],
                details: 'Freelance lead developer for Shackshare, a student housing marketplace platform. Built full-stack Laravel application with responsive design, property listings, booking management, and payment processing. Created comprehensive admin dashboard for property management.',
                tags: [PortfolioTag.LARAVEL, PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.FULL_STACK],
                type: 'freelance',
                dates: 'June 2017'
            },
            {
                id: 'kitmoda',
                name: 'Kitmoda',
                description: 'Created fully responsive mosaic gallery in JavaScript with dynamic grid resizing algorithm',
                thumbnail: '/public/data/work/kitmoda/thumbnail.png',
                media: [],
                details: 'Freelance frontend development creating custom JavaScript mosaic gallery with intelligent dynamic grid resizing algorithm. Built responsive layout engine that adjusts tile sizes based on viewport and content. Optimized for performance with lazy loading and smooth animations.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.PERFORMANCE_OPTIMIZATION],
                type: 'freelance',
                dates: 'June 2017'
            },
            {
                id: 'logicbrush-studios',
                name: 'Logicbrush Studios',
                description: 'Assisted on multiple PHP projects using WordPress, Laravel, ExpressionEngine, Magento, and SilverStripe',
                thumbnail: '/public/data/work/logicbrush-studios/thumbnail.png',
                media: [],
                details: 'Freelance work across diverse PHP projects for multiple clients. Gained experience with various CMS and frameworks including WordPress, Laravel, ExpressionEngine, Magento e-commerce, and SilverStripe. Developed custom themes, plugins, and e-commerce functionality.',
                tags: [PortfolioTag.PHP, PortfolioTag.WORDPRESS, PortfolioTag.LARAVEL, PortfolioTag.EXPRESSION_ENGINE, PortfolioTag.MAGENTO, PortfolioTag.SILVERSTRIPE],
                type: 'freelance',
                dates: 'October 2016 to May 2017'
            },
            {
                id: 'more-perfect-union',
                name: 'More Perfect Union',
                description: 'Lead developer for The Chisel platform using Node.js/Express, Ember.js, MongoDB, and MySQL for political advocacy collaboration',
                thumbnail: '/public/data/work/more-perfect-union/thumbnail.png',
                media: [],
                details: 'Freelance lead developer for The Chisel, a political advocacy collaboration platform. Built full-stack application using Node.js/Express backend, Ember.js frontend, with MongoDB and MySQL for data persistence. Enabled activists and organizers to coordinate campaigns and share resources.',
                tags: [PortfolioTag.NODEJS, PortfolioTag.EXPRESS, PortfolioTag.EMBER, PortfolioTag.MONGODB, PortfolioTag.MYSQL, PortfolioTag.FULL_STACK],
                type: 'freelance',
                dates: 'December 2015 to May 2016'
            },
            {
                id: 'fabworx',
                name: 'Fabworx',
                description: 'Lead WordPress developer customizing frontend for fabricated car parts shop',
                thumbnail: '/public/data/work/fabworx/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development for Fabworx custom car parts shop. Built custom theme with product showcase, responsive design, and e-commerce functionality. Integrated with existing inventory management system.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.E_COMMERCE, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'October 2016'
            },
            {
                id: 'shindig-events',
                name: 'Shindig Events',
                description: 'Lead WordPress developer creating ground-up design for events site with case studies and blog',
                thumbnail: '/public/data/work/shindig-events/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development for Shindig Events. Designed and built complete site from scratch with custom theme, case study portfolio, blog functionality, and event management features. Implemented SEO optimization and responsive design.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.SEO],
                type: 'freelance',
                dates: 'August 2016'
            },
            {
                id: 'tuebora',
                name: 'Tuebora',
                description: 'Contributed responsive landing pages for user access management product suite',
                thumbnail: '/public/data/work/tuebora/thumbnail.png',
                media: [],
                details: 'Freelance frontend development for Tuebora enterprise access management platform. Created responsive landing pages showcasing product features, pricing, and use cases. Implemented modern design with smooth animations and lead capture forms.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.HTML, PortfolioTag.CSS],
                type: 'freelance',
                dates: 'August 2016'
            },
            {
                id: 'kubi',
                name: 'Kubi',
                description: 'Designed WordPress responsive homepage, product pages, and checkout with lazy-loading video',
                thumbnail: '/public/data/work/kubi/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development for Kubi telepresence robot by Revolve Robotics. Built responsive e-commerce site with custom product pages, checkout flow, and lazy-loading video integration for product demos. Optimized for performance and conversion.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.E_COMMERCE, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.VIDEO_STREAMING],
                type: 'freelance',
                dates: '2016'
            },
            {
                id: 'rowan-university',
                name: 'Rowan University',
                description: 'Integrated SimpleSAMLphp with Drupal for Canvas LMS single sign-on capability',
                thumbnail: '/public/data/work/rowan-university/thumbnail.png',
                media: [],
                details: 'Freelance integration work for Rowan University. Implemented SimpleSAMLphp authentication with Drupal CMS to enable single sign-on for Canvas Learning Management System. Streamlined student and faculty access across university platforms.',
                tags: [PortfolioTag.PHP, PortfolioTag.DRUPAL, PortfolioTag.SSO, PortfolioTag.THIRD_PARTY_INTEGRATION],
                type: 'freelance',
                dates: 'August 2015'
            },
            {
                id: 'internetorg',
                name: 'Internet.org',
                description: 'Lead PHP developer for multilingual Facebook campaign using Laravel 4 and Amazon S3',
                thumbnail: '/public/data/work/internetorg/thumbnail.png',
                media: [],
                details: 'Freelance lead developer for Internet.org (Facebook initiative) multilingual campaign platform. Built Laravel 4 application with Amazon S3 integration for media storage, supporting multiple languages and regions. High-traffic social media campaign reaching global audience.',
                tags: [PortfolioTag.LARAVEL, PortfolioTag.PHP, PortfolioTag.S3, PortfolioTag.AWS, PortfolioTag.REST_API],
                type: 'freelance',
                dates: 'March 2015'
            },
            {
                id: 'yihame',
                name: 'YiHa.me',
                description: 'Developed WordPress startup site with Mailchimp and KickoffLabs integration',
                thumbnail: '/public/data/work/yihame/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development for YiHa.me startup. Built marketing site with Mailchimp email marketing integration and KickoffLabs viral referral system. Implemented lead capture and social sharing features for growth marketing.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.THIRD_PARTY_INTEGRATION, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'February 2015'
            },
            {
                id: 'decaro-trucking',
                name: 'DeCaro Trucking',
                description: 'Architect and lead developer of PHP/Angular.js trucking management application with cloud synchronization',
                thumbnail: '/public/data/work/decaro-trucking/thumbnail.png',
                media: [],
                details: 'Freelance architect and lead developer for comprehensive trucking management application. Built PHP backend API with Angular.js frontend, implemented cloud synchronization for offline capability, driver scheduling, route optimization, and invoicing. Desktop and mobile responsive design.',
                tags: [PortfolioTag.PHP, PortfolioTag.ANGULAR, PortfolioTag.MYSQL, PortfolioTag.REST_API, PortfolioTag.FULL_STACK],
                type: 'freelance',
                dates: 'November 2014'
            },
            {
                id: 'figibox',
                name: 'Figibox',
                description: 'Lead WordPress developer for social geocaching website transitioning to Node.js',
                thumbnail: '/public/data/work/figibox/thumbnail.png',
                media: [],
                details: 'Freelance development for Figibox social geocaching platform. Initially built on WordPress, then architected migration to Node.js for improved real-time features. Implemented map-based interface, user profiles, and location-based discovery features.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.NODEJS, PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.REST_API],
                type: 'freelance',
                dates: 'September 2014'
            },
            {
                id: 'oldspice-hairstimonials',
                name: 'OldSpice Hairstimonials',
                description: 'Lead backend developer for high-traffic video site with around 50k daily users managing AWS infrastructure and custom CMS',
                thumbnail: '/public/data/work/oldspice-hairstimonials/thumbnail.png',
                media: [],
                details: 'Freelance lead backend developer for Old Spice viral marketing campaign. Built custom CMS and video management system handling 50,000+ daily users. Managed AWS infrastructure with auto-scaling, CloudFront CDN, S3 video storage, and optimized for high-traffic spikes. User-generated content moderation and social sharing features.',
                tags: [PortfolioTag.PHP, PortfolioTag.AWS, PortfolioTag.S3, PortfolioTag.CLOUDFRONT, PortfolioTag.VIDEO_STREAMING, PortfolioTag.PERFORMANCE_OPTIMIZATION],
                type: 'freelance',
                dates: 'January to March 2014'
            },
            {
                id: 'cooper-union',
                name: 'Cooper Union',
                description: 'Frontend development of virtual timeline with searchable interface and Google Docs API integration',
                thumbnail: '/public/data/work/cooper-union/thumbnail.png',
                media: [],
                details: 'Freelance frontend development for Cooper Union historical timeline project. Built interactive virtual timeline with searchable interface, Google Docs API integration for content management, and smooth scrolling animations. Historical event visualization with media embeds.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.REST_API, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: '2014'
            },
            {
                id: 'true-renaissance',
                name: 'True Renaissance',
                description: 'Lead WordPress developer and server administrator with social media and PayPal e-commerce integration',
                thumbnail: '/public/data/work/true-renaissance/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development and server administration for True Renaissance. Built custom theme with social media integration, PayPal payment processing for product sales, and managed server infrastructure. Implemented SEO optimization and responsive design.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.PAYPAL, PortfolioTag.E_COMMERCE, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'January 2014'
            },
            {
                id: 'espn-fantasy-football',
                name: 'ESPN Fantasy Football Toolkit',
                description: 'Lead backend developer for high-traffic fantasy sports platform using PHP and MySQL with ESPN web services integration',
                thumbnail: '/public/data/work/espn-fantasy-football/thumbnail.png',
                media: [],
                details: 'Freelance lead backend developer for ESPN Fantasy Football Toolkit. Built high-traffic PHP/MySQL application integrating ESPN web services for real-time player stats, league management, and draft tools. Optimized for performance during peak fantasy football season with millions of users.',
                tags: [PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.REST_API, PortfolioTag.PERFORMANCE_OPTIMIZATION, PortfolioTag.THIRD_PARTY_INTEGRATION],
                type: 'freelance',
                dates: 'July 2013'
            },
            {
                id: 'nabisco-party-in-play',
                name: 'Nabisco Party In Play',
                description: 'Lead backend developer for fantasy sports platform with PHP and MySQL managing user leagues and ESPN player data',
                thumbnail: '/public/data/work/nabisco-party-in-play/thumbnail.png',
                media: [],
                details: 'Freelance lead backend developer for Nabisco Party In Play fantasy sports platform. Built PHP/MySQL backend managing user leagues, player drafts, scoring systems, and ESPN player data integration. Handled high concurrent user load during live sports events.',
                tags: [PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.REST_API, PortfolioTag.THIRD_PARTY_INTEGRATION, PortfolioTag.REAL_TIME],
                type: 'freelance',
                dates: 'January 2013'
            },
            {
                id: 'athletestouch',
                name: 'AthletesTouch',
                description: 'Lead WordPress developer and server administrator for athlete community with responsive design and payment APIs',
                thumbnail: '/public/data/work/athletestouch/thumbnail.png',
                media: [],
                details: 'Freelance WordPress development and server administration for AthletesTouch social network. Built custom responsive theme, integrated payment processing APIs for premium memberships, athlete profile management, and community features. Managed server infrastructure and performance optimization.',
                tags: [PortfolioTag.WORDPRESS, PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.THIRD_PARTY_INTEGRATION],
                type: 'freelance',
                dates: 'January 2013 to January 2014'
            },
            {
                id: 'wild-rhino-films',
                name: 'Wild Rhino Films',
                description: 'Custom site development showcasing documentary film portfolio',
                thumbnail: '/public/data/work/wild-rhino-films/thumbnail.png',
                media: [],
                details: 'Freelance custom website development for Wild Rhino Films production company. Built portfolio site showcasing documentary films with video embeds, film descriptions, festival awards, and contact features. Responsive design optimized for video playback.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.PHP, PortfolioTag.RESPONSIVE_DESIGN, PortfolioTag.VIDEO_STREAMING],
                type: 'freelance',
                dates: 'December 2012'
            },
            {
                id: 'vitacare-world',
                name: 'Vitacare World',
                description: 'Implemented PHP shopping cart backend integrating drugstore.com third-party API',
                thumbnail: '/public/data/work/vitacare-world/thumbnail.png',
                media: [],
                details: 'Freelance PHP backend development for Vitacare World e-commerce platform. Implemented custom shopping cart with drugstore.com API integration for product inventory, pricing, and order fulfillment. Payment processing and order management features.',
                tags: [PortfolioTag.PHP, PortfolioTag.MYSQL, PortfolioTag.E_COMMERCE, PortfolioTag.REST_API, PortfolioTag.THIRD_PARTY_INTEGRATION],
                type: 'freelance',
                dates: 'September 2012'
            },
            {
                id: 'ouidad',
                name: 'Ouidad',
                description: 'Created interactive Facebook pages with beauty preference selection and newsletter integration',
                thumbnail: '/public/data/work/ouidad/thumbnail.png',
                media: [],
                details: 'Freelance Facebook application development for Ouidad beauty brand. Built interactive Facebook pages with beauty product preference quizzes, newsletter signup integration, and social sharing features. Integrated with existing e-commerce and email marketing platforms.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.PHP, PortfolioTag.REST_API, PortfolioTag.THIRD_PARTY_INTEGRATION],
                type: 'freelance',
                dates: 'July 2012'
            },
            {
                id: 'finding-home',
                name: 'Finding Home',
                description: 'Lead designer/developer for photography and artwork site featuring carousels and interactive galleries',
                thumbnail: '/public/data/work/finding-home/thumbnail.png',
                media: [],
                details: 'Freelance designer and developer for Finding Home photography exhibition website. Created custom interactive galleries with carousel navigation, lightbox viewing, and artwork information panels. Responsive design showcasing documentary photography.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.PHP, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'June 2012'
            },
            {
                id: 'natures-boost',
                name: 'Nature\'s Boost Energy Lozenge',
                description: 'Website design and development with online PayPal ordering for energy product',
                thumbnail: '/public/data/work/natures-boost/thumbnail.png',
                media: [],
                details: 'Freelance website design and development for Nature\'s Boost Energy Lozenge product. Built e-commerce site with PayPal payment integration, product information pages, and responsive design. Simple checkout flow optimized for conversion.',
                tags: [PortfolioTag.JAVASCRIPT, PortfolioTag.PHP, PortfolioTag.PAYPAL, PortfolioTag.E_COMMERCE, PortfolioTag.RESPONSIVE_DESIGN],
                type: 'freelance',
                dates: 'December 2011'
            }
        ]
    },
    {
        key: 'hobbies',
        label: 'Hobbies',
        order: 2,
        items: [
            {
                id: 'hob-001',
                name: 'Music Production',
                description: 'Electronic music composition and sound design',                media: [],
                details: 'Exploring electronic music production, synthesizer programming, and audio engineering. Creating ambient soundscapes and experimental compositions.',
                tags: ['Audio', 'Creative', 'Technology']
            },
            {
                id: 'hob-002',
                name: 'Photography',
                description: 'Urban and landscape photography',                media: [],
                details: 'Capturing moments through the lens, focusing on urban environments and natural landscapes. Experimenting with long exposure and night photography.',
                tags: ['Visual Arts', 'Creative']
            },
            {
                id: 'hob-003',
                name: 'Open Source',
                description: 'Contributing to open source projects',                media: [],
                details: 'Active contributor to various open source projects. Particularly interested in developer tools and web frameworks.',
                tags: ['Development', 'Community', 'Code']
            },
            {
                id: 'hob-004',
                name: 'Game Development',
                description: 'Indie game prototyping and experimentation',                media: [],
                details: 'Creating small game prototypes and exploring game mechanics. Focus on procedural generation and interactive experiences.',
                tags: ['Creative', 'Programming', 'Design']
            },
            {
                id: 'hob-005',
                name: 'Reading',
                description: 'Sci-fi, philosophy, and technology books',                media: [],
                details: 'Avid reader of science fiction, philosophy, and books about technology and society. Particularly interested in speculative fiction and future studies.',
                tags: ['Learning', 'Literature']
            },
            {
                id: 'hob-006',
                name: 'Hiking',
                description: 'Trail hiking and outdoor exploration',                media: [],
                details: 'Exploring hiking trails and natural environments. Weekend adventures in state and national parks.',
                tags: ['Outdoors', 'Fitness', 'Nature']
            },
            {
                id: 'hob-007',
                name: 'Cooking',
                description: 'Experimental cooking and recipe development',                media: [],
                details: 'Exploring different cuisines and developing new recipes. Interest in molecular gastronomy and food science.',
                tags: ['Creative', 'Food', 'Science']
            },
            {
                id: 'hob-008',
                name: 'DIY Electronics',
                description: 'Arduino and Raspberry Pi projects',                media: [],
                details: 'Building custom electronics projects with Arduino and Raspberry Pi. Home automation and sensor-based installations.',
                tags: ['Hardware', 'Programming', 'Maker']
            },
            {
                id: 'hob-009',
                name: 'Meditation',
                description: 'Mindfulness and meditation practice',                media: [],
                details: 'Daily meditation practice focusing on mindfulness and presence. Exploring various meditation techniques and philosophies.',
                tags: ['Wellness', 'Mental Health', 'Practice']
            },
            {
                id: 'hob-010',
                name: 'Chess',
                description: 'Online chess and strategy games',                media: [],
                details: 'Regular chess player online and in person. Studying openings, tactics, and endgame theory.',
                tags: ['Strategy', 'Game', 'Learning']
            },
            {
                id: 'hob-011',
                name: 'Sketching',
                description: 'Digital and traditional illustration',                media: [],
                details: 'Creating sketches and illustrations both digitally and traditionally. Character design and concept art.',
                tags: ['Art', 'Creative', 'Visual']
            },
            {
                id: 'hob-012',
                name: 'Language Learning',
                description: 'Spanish and Japanese study',                media: [],
                details: 'Learning Spanish and Japanese through apps, books, and conversation practice. Interest in linguistics and language acquisition.',
                tags: ['Learning', 'Languages', 'Culture']
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
                name: 'Modern Web Architecture',
                description: 'Exploring the latest patterns in web application design',                media: [],
                details: 'A deep dive into modern web architecture patterns, including microservices, serverless, and edge computing. Discussion of trade-offs and use cases.',
                tags: ['Web Development', 'Architecture', 'Tutorial']
            },
            {
                id: 'blog-002',
                name: 'TypeScript Best Practices',
                description: 'Advanced TypeScript patterns for scalable applications',                media: [],
                details: 'Comprehensive guide to TypeScript best practices, covering type safety, generics, decorators, and architectural patterns for large-scale applications.',
                tags: ['TypeScript', 'Tutorial', 'Best Practices']
            },
            {
                id: 'blog-003',
                name: 'The Future of AI in Development',
                description: 'How AI tools are changing the software development landscape',                media: [],
                details: 'Thoughts on AI-assisted development tools, their impact on productivity, and the future of software engineering in an AI-augmented world.',
                tags: ['AI', 'Opinion', 'Future Tech']
            },
            {
                id: 'blog-004',
                name: 'Performance Optimization Techniques',
                description: 'Practical strategies for faster web applications',                media: [],
                details: 'Detailed guide to web performance optimization, covering code splitting, lazy loading, caching strategies, and profiling techniques.',
                tags: ['Performance', 'Tutorial', 'Optimization']
            },
            {
                id: 'blog-005',
                name: 'Building Accessible Interfaces',
                description: 'Creating inclusive web experiences for all users',                media: [],
                details: 'Best practices for web accessibility, including WCAG guidelines, semantic HTML, ARIA attributes, and keyboard navigation.',
                tags: ['Accessibility', 'Best Practices', 'UX']
            },
            {
                id: 'blog-006',
                name: 'State Management Patterns',
                description: 'Comparing different approaches to application state',                media: [],
                details: 'Analysis of various state management solutions including Redux, MobX, Zustand, and React Context, with use case recommendations.',
                tags: ['React', 'State Management', 'Comparison']
            },
            {
                id: 'blog-007',
                name: 'GraphQL vs REST',
                description: 'Choosing the right API architecture',                media: [],
                details: 'Comprehensive comparison of GraphQL and REST APIs, covering performance, developer experience, caching, and when to use each approach.',
                tags: ['API', 'GraphQL', 'REST', 'Comparison']
            },
            {
                id: 'blog-008',
                name: 'Docker for Developers',
                description: 'Containerization essentials for modern development',                media: [],
                details: 'Practical guide to Docker for development workflows, including multi-stage builds, docker-compose, and CI/CD integration.',
                tags: ['Docker', 'DevOps', 'Tutorial']
            },
            {
                id: 'blog-009',
                name: 'Serverless Architecture',
                description: 'Building scalable applications without managing servers',                media: [],
                details: 'Introduction to serverless architecture with AWS Lambda, API Gateway, and DynamoDB. Cost analysis and best practices included.',
                tags: ['Serverless', 'AWS', 'Architecture']
            },
            {
                id: 'blog-010',
                name: 'CSS Grid Mastery',
                description: 'Modern layouts with CSS Grid',                media: [],
                details: 'Complete guide to CSS Grid, including practical examples, responsive patterns, and browser compatibility considerations.',
                tags: ['CSS', 'Tutorial', 'Layout']
            },
            {
                id: 'blog-011',
                name: 'Security Best Practices',
                description: 'Protecting web applications from common vulnerabilities',                media: [],
                details: 'Overview of web security fundamentals covering OWASP Top 10, authentication, authorization, XSS, CSRF, and secure coding practices.',
                tags: ['Security', 'Best Practices', 'Web Development']
            },
            {
                id: 'blog-012',
                name: 'Testing Strategies',
                description: 'Comprehensive testing approaches for web applications',                media: [],
                details: 'Guide to testing strategies including unit tests, integration tests, E2E tests, and TDD. Tools and frameworks comparison included.',
                tags: ['Testing', 'Best Practices', 'QA']
            },
            {
                id: 'blog-013',
                name: 'Progressive Web Apps',
                description: 'Building app-like experiences on the web',                media: [],
                details: 'Complete guide to Progressive Web Apps, covering service workers, offline functionality, push notifications, and installation.',
                tags: ['PWA', 'Web Development', 'Tutorial']
            },
            {
                id: 'blog-014',
                name: 'Micro-Frontends',
                description: 'Scaling frontend development with micro-frontends',                media: [],
                details: 'Introduction to micro-frontend architecture, implementation strategies, and when this approach makes sense for your organization.',
                tags: ['Architecture', 'Frontend', 'Scalability']
            }
        ]
    }
];