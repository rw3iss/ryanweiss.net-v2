const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(__dirname, '../src/data/portfolioData.ts');
let content = fs.readFileSync(portfolioPath, 'utf8');

console.log('Adding /public prefix to all /data/work/ paths...\n');

// Replace all /data/work/ paths with /public/data/work/
const beforeCount = (content.match(/['"]\/data\/work\//g) || []).length;

content = content.replaceAll("'/data/work/", "'/public/data/work/");
content = content.replaceAll('"/data/work/', '"/public/data/work/');

const afterCount = (content.match(/['"]\/public\/data\/work\//g) || []).length;

fs.writeFileSync(portfolioPath, content, 'utf8');

console.log(`✓ Updated ${afterCount} paths to include /public prefix`);
console.log(`\n✅ All image paths now use /public/data/work/ structure!`);
