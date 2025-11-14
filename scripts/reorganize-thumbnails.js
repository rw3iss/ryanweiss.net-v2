const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.ts');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

console.log('Reorganizing thumbnail images in portfolioData...\n');

// Parse the file to find items with image ending in 'thumbnail.png'
const lines = fileContent.split('\n');
let changed = 0;
let inItem = false;
let itemId = '';
let imageValue = '';
let thumbnailValue = '';
let imageLineIndex = -1;
let thumbnailLineIndex = -1;
let itemStartIndex = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect start of item
    if (line.trim().startsWith('id:')) {
        inItem = true;
        itemStartIndex = i;
        const match = line.match(/id:\s*['"](.+?)['"]/);
        if (match) {
            itemId = match[1];
        }
        imageValue = '';
        thumbnailValue = '';
        imageLineIndex = -1;
        thumbnailLineIndex = -1;
    }

    // Detect image field
    if (inItem && line.trim().startsWith('image:')) {
        const match = line.match(/image:\s*['"](.+?)['"]/);
        if (match) {
            imageValue = match[1];
            imageLineIndex = i;
        }
    }

    // Detect thumbnail field
    if (inItem && line.trim().startsWith('thumbnail:')) {
        const match = line.match(/thumbnail:\s*['"](.+?)['"]/);
        if (match) {
            thumbnailValue = match[1];
            thumbnailLineIndex = i;
        }
    }

    // Detect end of item (closing brace or next item)
    if (inItem && (line.trim() === '},' || line.trim() === '}')) {
        // Process this item
        if (imageValue && imageValue.endsWith('thumbnail.png')) {
            console.log(`Item: ${itemId}`);
            console.log(`  Current image: ${imageValue}`);

            if (thumbnailValue) {
                console.log(`  Current thumbnail: ${thumbnailValue}`);
                console.log(`  Action: Removing image field (already has thumbnail)`);

                // Remove the image line
                lines[imageLineIndex] = ''; // Will be filtered out later
                changed++;
            } else {
                console.log(`  No thumbnail field`);
                console.log(`  Action: Moving image to thumbnail, removing image`);

                // Add thumbnail field after image field
                const indent = lines[imageLineIndex].match(/^(\s*)/)[0];
                lines[imageLineIndex] = `${indent}thumbnail: '${imageValue}',`;
                changed++;
            }
            console.log('');
        }

        inItem = false;
    }
}

// Filter out empty lines we created
const filteredLines = lines.filter(line => line !== '');

if (changed > 0) {
    const newContent = filteredLines.join('\n');
    fs.writeFileSync(dataFilePath, newContent, 'utf8');
    console.log(`✅ Updated ${changed} items`);
} else {
    console.log('No changes needed');
}
