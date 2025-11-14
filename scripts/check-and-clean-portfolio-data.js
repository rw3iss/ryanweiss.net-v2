const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
const publicDir = path.join(__dirname, '../public');

let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Checking for non-existent files in portfolio data...\n');

// Extract all image/thumbnail/media paths
const pathRegex = /['"]\/public\/[^'"]+\.(png|jpg|jpeg|svg|gif)['"]/g;
const allPaths = content.match(pathRegex) || [];

let removedCount = 0;
let missingFiles = [];
let itemsWithoutImages = [];

// Check each path
allPaths.forEach(pathMatch => {
    const cleanPath = pathMatch.replace(/['"]/g, '');
    const filePath = cleanPath.replace('/public/', '');
    const fullPath = path.join(publicDir, filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  Missing: ${cleanPath}`);
        missingFiles.push({ path: cleanPath, fullPath });
    }
});

// Now let's extract item blocks and check each one
const itemBlockRegex = /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?\}/g;
let match;
const itemsInfo = [];

while ((match = itemBlockRegex.exec(content)) !== null) {
    const itemBlock = match[0];
    const itemId = match[1];

    // Extract paths from this item
    const itemPaths = itemBlock.match(/['"]\/public\/[^'"]+\.(png|jpg|jpeg|svg|gif)['"]/g) || [];

    let hasValidImage = false;
    let hasValidThumbnail = false;
    let hasValidMedia = false;

    itemPaths.forEach(p => {
        const cleanPath = p.replace(/['"]/g, '');
        const filePath = cleanPath.replace('/public/', '');
        const fullPath = path.join(publicDir, filePath);

        if (fs.existsSync(fullPath)) {
            if (itemBlock.includes(`image: ${p}`)) hasValidImage = true;
            if (itemBlock.includes(`thumbnail: ${p}`)) hasValidThumbnail = true;
            if (itemBlock.includes(`url: ${p}`)) hasValidMedia = true;
        }
    });

    itemsInfo.push({
        id: itemId,
        hasImage: hasValidImage,
        hasThumbnail: hasValidThumbnail,
        hasMedia: hasValidMedia,
        hasAny: hasValidImage || hasValidThumbnail || hasValidMedia
    });
}

// Remove non-existent file references
missingFiles.forEach(({ path: missingPath }) => {
    // Remove the entire image/thumbnail/media line
    const imageLineRegex = new RegExp(`\\s*image:\\s*'${missingPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',?\\n`, 'g');
    const thumbnailLineRegex = new RegExp(`\\s*thumbnail:\\s*'${missingPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',?\\n`, 'g');
    const mediaLineRegex = new RegExp(`\\s*url:\\s*'${missingPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',?\\n`, 'g');

    if (content.match(imageLineRegex)) {
        content = content.replace(imageLineRegex, '');
        removedCount++;
        console.log(`✓ Removed image reference: ${missingPath}`);
    }
    if (content.match(thumbnailLineRegex)) {
        content = content.replace(thumbnailLineRegex, '');
        removedCount++;
        console.log(`✓ Removed thumbnail reference: ${missingPath}`);
    }
    if (content.match(mediaLineRegex)) {
        content = content.replace(mediaLineRegex, '');
        removedCount++;
        console.log(`✓ Removed media reference: ${missingPath}`);
    }
});

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`\n📊 Summary:`);
console.log(`   Missing files found: ${missingFiles.length}`);
console.log(`   References removed: ${removedCount}`);

console.log(`\n📋 Items without ANY images:`);
itemsInfo.forEach(item => {
    if (!item.hasAny) {
        itemsWithoutImages.push(item.id);
        console.log(`   - ${item.id}`);
    }
});

console.log(`\n📋 Full item status:`);
itemsInfo.forEach(item => {
    const status = [];
    if (item.hasImage) status.push('image');
    if (item.hasThumbnail) status.push('thumbnail');
    if (item.hasMedia) status.push('media');

    if (status.length > 0) {
        console.log(`   ✓ ${item.id}: ${status.join(', ')}`);
    } else {
        console.log(`   ✗ ${item.id}: NO IMAGES`);
    }
});

console.log(`\n✅ Portfolio data cleaned!`);
console.log(`\nItems without images: ${itemsWithoutImages.length}`);
if (itemsWithoutImages.length > 0) {
    console.log(`List: ${itemsWithoutImages.join(', ')}`);
}
