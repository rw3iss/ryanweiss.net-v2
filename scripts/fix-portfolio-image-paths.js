const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Fixing portfolio image paths...\n');

// All items that have thumbnails in public/data/work/{id}/
const itemsWithThumbnails = [
    'athletestouch', 'more-perfect-union', 'cooper-union', 'decaro-trucking',
    'elephant-ventures', 'envoyai', 'espn-fantasy-football', 'fabworx',
    'figibox', 'finding-home', 'huge-inc', 'internetorg', 'kitmoda',
    'kk-jay', 'logicbrush-studios', 'nabisco-party-in-play', 'natures-boost',
    'oldspice-hairstimonials', 'one-night', 'opus-logica', 'ouidad',
    'publicis-modem', 'kubi', 'rga-interactive', 'ripe', 'rowan-university',
    'rutgers-university', 'shackshare', 'shindig-events', 'true-renaissance',
    'tuebora', 'vitacare-world', 'wild-rhino-films', 'yihame'
];

let fixedCount = 0;
let errors = [];

// Fix each item with thumbnails
itemsWithThumbnails.forEach(itemId => {
    try {
        // Find the item block and update both image and thumbnail fields
        const itemBlockRegex = new RegExp(
            `(\\s+id:\\s*'${itemId}',[\\s\\S]*?)(image:\\s*)'[^']*'([\\s\\S]*?)(thumbnail:\\s*)'[^']*'`,
            'g'
        );

        const correctPath = `/data/work/${itemId}/thumbnail.png`;

        // Check if item has both image and thumbnail fields
        if (content.match(itemBlockRegex)) {
            content = content.replace(
                itemBlockRegex,
                `$1$2'${correctPath}'$3$4'${correctPath}'`
            );
            console.log(`✓ Fixed ${itemId}: ${correctPath}`);
            fixedCount++;
        } else {
            // Try to find item with just image field
            const imageOnlyRegex = new RegExp(
                `(\\s+id:\\s*'${itemId}',[\\s\\S]*?)(image:\\s*)'[^']*'`,
                'g'
            );

            if (content.match(imageOnlyRegex)) {
                content = content.replace(
                    imageOnlyRegex,
                    `$1$2'${correctPath}'`
                );

                // Add thumbnail field if not present
                const addThumbnailRegex = new RegExp(
                    `(id:\\s*'${itemId}',[\\s\\S]*?image:\\s*'[^']*',)`,
                    'g'
                );

                if (!content.includes(`id: '${itemId}'`) || !content.match(new RegExp(`id:\\s*'${itemId}'[\\s\\S]*?thumbnail:`))) {
                    content = content.replace(
                        addThumbnailRegex,
                        `$1\n                thumbnail: '${correctPath}',`
                    );
                }

                console.log(`✓ Fixed ${itemId}: ${correctPath}`);
                fixedCount++;
            } else {
                errors.push(itemId);
                console.log(`⚠️  Could not find item: ${itemId}`);
            }
        }
    } catch (error) {
        errors.push(itemId);
        console.error(`✗ Error fixing ${itemId}:`, error.message);
    }
});

// Fix any remaining /media/work/ paths to use existing thumbnails or placeholders
const mediaWorkPaths = content.match(/image:\s*'\/media\/work\/[^']+'/g);
if (mediaWorkPaths) {
    console.log(`\n⚠️  Found ${mediaWorkPaths.length} items with /media/work/ paths - these need manual review`);

    // Try to extract the item IDs from these paths and fix them
    mediaWorkPaths.forEach(match => {
        const idMatch = content.match(new RegExp(`(id:\\s*'([^']+)',[\\s\\S]{0,200})${match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
        if (idMatch) {
            const itemId = idMatch[2];
            console.log(`   - Item '${itemId}' uses /media/work/ path - keeping as-is (needs manual fix)`);
        }
    });
}

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Fixed: ${fixedCount} items`);
console.log(`   Errors: ${errors.length} items`);
if (errors.length > 0) {
    console.log(`   Failed items: ${errors.join(', ')}`);
}
console.log(`\n✅ Portfolio image paths have been updated!`);
console.log(`   Note: Items with /media/work/ paths still need manual review`);
