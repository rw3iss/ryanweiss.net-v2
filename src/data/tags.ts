/**
 * Unified Tags enum for portfolio items
 * All work items should use these standardized tags
 */
export enum PortfolioTag {
    // Frontend Frameworks & Libraries
    REACT = 'React',
    REACT_NATIVE = 'React Native',
    ANGULAR = 'Angular',
    EMBER = 'Ember.js',
    GATSBY = 'Gatsby',
    NEXTJS = 'Next.js',

    // Backend Frameworks
    NODEJS = 'Node.js',
    NESTJS = 'NestJS',
    EXPRESS = 'Express',
    LARAVEL = 'Laravel',
    DJANGO = 'Django',
    RAILS = 'Ruby on Rails',
    ASP_NET = 'ASP.NET',

    // Languages
    TYPESCRIPT = 'TypeScript',
    JAVASCRIPT = 'JavaScript',
    PHP = 'PHP',
    PYTHON = 'Python',
    JAVA = 'Java',
    CSHARP = 'C#',
    RUBY = 'Ruby',

    // CMS & Platforms
    WORDPRESS = 'WordPress',
    DRUPAL = 'Drupal',
    SITECORE = 'SiteCore',
    MAGENTO = 'Magento',
    SHOPIFY = 'Shopify',
    EXPRESSION_ENGINE = 'ExpressionEngine',
    SILVERSTRIPE = 'SilverStripe',

    // Cloud & Infrastructure
    AWS = 'AWS',
    GCP = 'Google Cloud',
    LAMBDA = 'AWS Lambda',
    CLOUDFRONT = 'CloudFront',
    S3 = 'S3',
    EC2 = 'EC2',
    DYNAMODB = 'DynamoDB',

    // Databases
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    MONGODB = 'MongoDB',
    CASSANDRA = 'Cassandra',
    BIGQUERY = 'BigQuery',
    REDIS = 'Redis',
    MEMCACHED = 'Memcached',

    // DevOps & Tools
    DOCKER = 'Docker',
    ANSIBLE = 'Ansible',
    CIRCLECI = 'CircleCI',
    GIT = 'Git',

    // APIs & Integration
    REST_API = 'REST API',
    GRAPHQL = 'GraphQL',
    WEBSOCKETS = 'WebSockets',
    STRIPE = 'Stripe',
    PAYPAL = 'PayPal',
    ZOOM = 'Zoom Integration',

    // Specialized
    AI_ML = 'AI/ML',
    WEBGL = 'WebGL',
    SEO = 'SEO',
    RESPONSIVE_DESIGN = 'Responsive Design',
    PERFORMANCE_OPTIMIZATION = 'Performance Optimization',
    E_COMMERCE = 'E-Commerce',
    CMS_DEVELOPMENT = 'CMS Development',
    FULL_STACK = 'Full-Stack',
    MICROSERVICES = 'Microservices',
    REAL_TIME = 'Real-time',
    MOBILE_DEVELOPMENT = 'Mobile Development',
    SYSTEM_ARCHITECTURE = 'System Architecture',
    DATABASE_MIGRATION = 'Database Migration',
    API_DESIGN = 'API Design',
    THIRD_PARTY_INTEGRATION = 'Third-party Integration',
    CHATBOT = 'Chatbot',
    SSO = 'Single Sign-On',
    VIDEO_STREAMING = 'Video Streaming'
}

/**
 * Helper function to get tag values as array
 */
export function getAllTags(): string[] {
    return Object.values(PortfolioTag);
}

/**
 * Helper function to normalize tag strings to enum values
 */
export function normalizeTag(tagString: string): PortfolioTag | null {
    const normalized = tagString.toUpperCase().replace(/[.\s-]/g, '_');
    const enumKey = Object.keys(PortfolioTag).find(key => key === normalized);
    return enumKey ? PortfolioTag[enumKey as keyof typeof PortfolioTag] : null;
}
