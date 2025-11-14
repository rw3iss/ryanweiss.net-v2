const fs = require('fs');
const path = require('path');

const itemsNeedingPlaceholders = [
    'vendidit', 'adaya-ai', 'preach-logic', 'mydorp', 'tier-33',
    'urbandaddy-drinklist', 'esupporthealth', 'quuie', 'surprize'
];

const publicDataWork = path.join(__dirname, '../public/data/work');

console.log('Creating placeholder thumbnails...\n');

// Create a simple SVG placeholder
const createSVGPlaceholder = (name) => {
    const initials = name
        .split(/[-\s]/)
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');

    return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgb(5,25,50);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(10,35,60);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="900" fill="rgba(0,200,255,0.5)">${initials}</text>
</svg>`;
};

let createdCount = 0;

itemsNeedingPlaceholders.forEach(itemId => {
    const itemDir = path.join(publicDataWork, itemId);
    const thumbnailPath = path.join(itemDir, 'thumbnail.png');

    // Check if directory exists
    if (!fs.existsSync(itemDir)) {
        fs.mkdirSync(itemDir, { recursive: true });
    }

    // Only create if doesn't exist
    if (!fs.existsSync(thumbnailPath)) {
        // Create SVG file instead (browsers can display SVG as img src)
        const svgPath = path.join(itemDir, 'thumbnail.svg');
        const svgContent = createSVGPlaceholder(itemId);
        fs.writeFileSync(svgPath, svgContent, 'utf8');

        // Also create a symlink or just use SVG
        // For now, let's just note that we created SVG
        console.log(`✓ Created SVG placeholder for ${itemId}`);
        createdCount++;
    } else {
        console.log(`  Skipped ${itemId} (already exists)`);
    }
});

console.log(`\n📊 Summary:`);
console.log(`   Created: ${createdCount} placeholders`);
console.log(`\n✅ Placeholder thumbnails created!`);
console.log(`   Note: These are SVG files. You may want to replace with actual PNGs.`);
