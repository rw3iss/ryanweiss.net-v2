import { useState, useEffect } from 'preact/hooks';
import { getAllTags } from '../../../lib/utils/portfolioFilter';
import './TagSearchView.scss';

interface TagSearchViewProps {
    selectedTags: string[];
    onTagClick: (tag: string) => void;
}

// Define tag categories
const TAG_CATEGORIES: Record<string, string[]> = {
    'Frontend': ['React', 'Preact', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Vue', 'Angular', 'jQuery', 'WebGL', 'Three.js', 'D3.js', 'Chart.js'],
    'Backend': ['Node.js', 'Express', 'PHP', 'Python', 'Ruby', 'Java', 'C#', '.NET', 'REST API', 'GraphQL', 'Django', 'Laravel', 'Spring'],
    'Database': ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'DynamoDB', 'Elasticsearch'],
    'DevOps & Cloud': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Azure', 'Google Cloud', 'Terraform', 'Ansible'],
    'Architecture': ['Microservices', 'Serverless', 'Monolith', 'API Design', 'System Design', 'Scalability', 'Performance', 'Security'],
    'Tools & Workflow': ['Git', 'GitHub', 'GitLab', 'Webpack', 'Vite', 'esbuild', 'npm', 'Yarn', 'VS Code', 'Figma', 'Photoshop'],
    'Mobile': ['React Native', 'iOS', 'Android', 'Flutter', 'Swift', 'Kotlin', 'Mobile UI'],
    'Data & Analytics': ['Data Visualization', 'Analytics', 'Machine Learning', 'AI', 'Big Data', 'ETL', 'Reporting'],
    'Testing': ['Jest', 'Mocha', 'Cypress', 'Testing Library', 'Unit Testing', 'Integration Testing', 'E2E Testing'],
    'Other': []
};

export const TagSearchView = ({ selectedTags, onTagClick }: TagSearchViewProps) => {
    const [categorizedTags, setCategorizedTags] = useState<Record<string, string[]>>({});

    useEffect(() => {
        const allTags = getAllTags();
        const categorized: Record<string, string[]> = {};

        // Initialize all categories
        Object.keys(TAG_CATEGORIES).forEach(category => {
            categorized[category] = [];
        });

        // Categorize tags
        allTags.forEach(tag => {
            let placed = false;
            for (const [category, categoryTags] of Object.entries(TAG_CATEGORIES)) {
                if (categoryTags.includes(tag)) {
                    if (!categorized[category]) categorized[category] = [];
                    categorized[category].push(tag);
                    placed = true;
                    break;
                }
            }
            // If tag doesn't match any category, put it in Other
            if (!placed) {
                if (!categorized['Other']) categorized['Other'] = [];
                categorized['Other'].push(tag);
            }
        });

        // Remove empty categories
        Object.keys(categorized).forEach(category => {
            if (categorized[category].length === 0) {
                delete categorized[category];
            }
        });

        setCategorizedTags(categorized);
    }, []);

    return (
        <div className="tag-search-view">
            <div className="tag-search-view__header">
                <h3 className="tag-search-view__title">Filter by Technology</h3>
            </div>

            <div className="tag-search-view__categories">
                {Object.entries(categorizedTags).map(([category, tags]) => (
                    <div key={category} className="tag-search-view__category">
                        <h4 className="tag-search-view__category-title">{category}</h4>
                        <div className="tag-search-view__tag-list">
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    className={`tag-search-view__tag ${selectedTags.includes(tag) ? 'tag-search-view__tag--selected' : ''}`}
                                    onClick={() => onTagClick(tag)}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
