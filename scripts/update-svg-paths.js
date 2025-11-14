const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Updating paths to use SVG placeholders...\n');

const svgItems = [
    'vendidit', 'adaya-ai', 'preach-logic', 'mydorp', 'tier-33',
    'urbandaddy-drinklist', 'esupporthealth', 'quuie', 'surprize'
];

let updatedCount = 0;

svgItems.forEach(itemId => {
    const oldPath = `/data/work/${itemId}/thumbnail.png`;
    const newPath = `/data/work/${itemId}/thumbnail.svg`;

    if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
        console.log(`✓ Updated ${itemId} to use SVG: ${newPath}`);
        updatedCount++;
    }
});

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Updated: ${updatedCount} paths to .svg`);
console.log(`\n✅ SVG paths updated!`);
