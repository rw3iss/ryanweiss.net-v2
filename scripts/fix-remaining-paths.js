const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Fixing remaining /media/work/ paths...\n');

// Map of old /media/work/ paths to new /data/work/ paths
const pathReplacements = {
    "'/media/work/vendidit/logo.png'": "'/data/work/vendidit/thumbnail.png'",
    "'/media/work/adaya-ai/logo.png'": "'/data/work/adaya-ai/thumbnail.png'",
    "'/media/work/preach-logic/logo.png'": "'/data/work/preach-logic/thumbnail.png'",
    "'/media/work/mydorp/logo.png'": "'/data/work/mydorp/thumbnail.png'",
    "'/media/work/tier-33/logo.png'": "'/data/work/tier-33/thumbnail.png'",
    "'/media/work/urbandaddy-drinklist/logo.png'": "'/data/work/urbandaddy-drinklist/thumbnail.png'",
    "'/media/work/esupporthealth/logo.png'": "'/data/work/esupporthealth/thumbnail.png'",
    "'/media/work/quuie/logo.png'": "'/data/work/quuie/thumbnail.png'",
    "'/media/work/surprize/logo.png'": "'/data/work/surprize/thumbnail.png'"
};

let fixedCount = 0;

Object.entries(pathReplacements).forEach(([oldPath, newPath]) => {
    if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
        console.log(`✓ Replaced ${oldPath} → ${newPath}`);
        fixedCount++;
    }
});

// Also add thumbnail field for items that don't have it
const itemIds = ['vendidit', 'adaya-ai', 'preach-logic', 'mydorp', 'tier-33',
                 'urbandaddy-drinklist', 'esupporthealth', 'quuie', 'surprize'];

itemIds.forEach(itemId => {
    const thumbnailPath = `/data/work/${itemId}/thumbnail.png`;
    const itemHasThumbnail = new RegExp(`id:\\s*'${itemId}'[\\s\\S]{0,500}thumbnail:`).test(content);

    if (!itemHasThumbnail) {
        // Add thumbnail field after image field
        const addThumbnailRegex = new RegExp(
            `(id:\\s*'${itemId}',[\\s\\S]*?image:\\s*'[^']*',)`,
            ''
        );

        if (content.match(addThumbnailRegex)) {
            content = content.replace(
                addThumbnailRegex,
                `$1\n                thumbnail: '${thumbnailPath}',`
            );
            console.log(`✓ Added thumbnail field for ${itemId}`);
        }
    }
});

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Fixed paths: ${fixedCount}`);
console.log(`\n✅ All paths updated to use /data/work/ structure!`);
