const fs = require('fs');
const path = require('path');

// Items that have thumbnails (from our mapping)
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

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Updating portfolio data with thumbnail paths...\n');

let updateCount = 0;

// For each item with a thumbnail, update its image and thumbnail fields
itemsWithThumbnails.forEach(itemId => {
    // Find the item definition
    const itemRegex = new RegExp(`(\\s+id:\\s*'${itemId}',[\\s\\S]*?)(image:\\s*)'[^']*'`, 'g');

    if (content.match(itemRegex)) {
        // Update image field
        content = content.replace(
            itemRegex,
            `$1$2'/data/work/${itemId}/thumbnail.png'`
        );

        // Add thumbnail field if not exists (right after image field)
        const thumbnailCheck = new RegExp(`id:\\s*'${itemId}'[\\s\\S]*?thumbnail:`, 'g');
        if (!content.match(thumbnailCheck)) {
            content = content.replace(
                new RegExp(`(id:\\s*'${itemId}',[\\s\\S]*?image:\\s*'[^']*',)`, 'g'),
                `$1\n                thumbnail: '/data/work/${itemId}/thumbnail.png',`
            );
        }

        console.log(`✓ Updated: ${itemId}`);
        updateCount++;
    } else {
        console.log(`⚠️  Not found: ${itemId}`);
    }
});

// Also update the interface to include thumbnail field
if (!content.includes('thumbnail?:')) {
    content = content.replace(
        /(export interface PortfolioItem \{[\s\S]*?image: string;)/,
        `$1\n    thumbnail?: string;`
    );
    console.log('\n✓ Added thumbnail field to PortfolioItem interface');
}

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updateCount} items`);
console.log(`   Total with thumbnails: ${itemsWithThumbnails.length}`);
