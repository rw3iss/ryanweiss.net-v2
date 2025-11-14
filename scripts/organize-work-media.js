const fs = require('fs');
const path = require('path');

// Mapping of thumbnail filenames to work item IDs
const thumbnailMapping = {
    'athletestouch_thumb.png': 'athletestouch',
    'chisel_thumb.png': 'more-perfect-union',
    'cooper_thumb.png': 'cooper-union',
    'decaro_thumb.png': 'decaro-trucking',
    'elephant_thumb.png': 'elephant-ventures',
    'envoyai_thumb.png': 'envoyai',
    'espn_thumb.png': 'espn-fantasy-football',
    'fabworx_thumb.png': 'fabworx',
    'figibox_thumb.png': 'figibox',
    'findinghome_thumb.png': 'finding-home',
    'huge_thumb.png': 'huge-inc',
    'internet_thumb.png': 'internetorg',
    'kitmoda_thumb.png': 'kitmoda',
    'kkandjay_thumb.png': 'kk-jay',
    'logicbrush_thumb.png': 'logicbrush-studios',
    'nabisco_thumb.png': 'nabisco-party-in-play',
    'naturesboost_thumb.png': 'natures-boost',
    'oldspice_thumb.png': 'oldspice-hairstimonials',
    'onenight_thumb.png': 'one-night',
    'opus_thumb.png': 'opus-logica',
    'ouidad_thumb.png': 'ouidad',
    'publicis_thumb.png': 'publicis-modem',
    'revolve_thumb.png': 'kubi',
    'rga_thumb.png': 'rga-interactive',
    'ripe_thumb.png': 'ripe',
    'rowan_thumb.png': 'rowan-university',
    'rutgers_thumb.png': 'rutgers-university',
    'shackshare_thumb.png': 'shackshare',
    'shindig_thumb.png': 'shindig-events',
    'truerenaissance_thumb.png': 'true-renaissance',
    'tuebora_thumb.png': 'tuebora',
    'vitacare_thumb.png': 'vitacare-world',
    'wildrhino_thumb.png': 'wild-rhino-films',
    'yiha_thumb.png': 'yihame'
};

const sourceDir = path.join(__dirname, '../src/data/work/uploads');
const targetDir = path.join(__dirname, '../public/data/work');

console.log('Organizing work media files...\n');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${targetDir}\n`);
}

let processed = 0;
let skipped = 0;

// Process each thumbnail
Object.entries(thumbnailMapping).forEach(([filename, itemId]) => {
    const sourcePath = path.join(sourceDir, filename);
    const itemDir = path.join(targetDir, itemId);
    const targetPath = path.join(itemDir, 'thumbnail.png');

    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  Source not found: ${filename}`);
        skipped++;
        return;
    }

    // Create item directory
    if (!fs.existsSync(itemDir)) {
        fs.mkdirSync(itemDir, { recursive: true });
    }

    // Copy thumbnail
    try {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✓ Copied ${filename} → ${itemId}/thumbnail.png`);
        processed++;
    } catch (error) {
        console.log(`✗ Error copying ${filename}: ${error.message}`);
        skipped++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`   Processed: ${processed}`);
console.log(`   Skipped: ${skipped}`);
console.log(`   Total: ${Object.keys(thumbnailMapping).length}`);
