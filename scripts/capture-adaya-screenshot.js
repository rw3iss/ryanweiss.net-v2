const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    console.log('Navigating to archived Adaya AI site...');
    const url = 'https://web.archive.org/web/20221211174611/https://www.adaya.ai/home1640833039070';

    try {
        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 60000
        });

        console.log('Waiting for content to load...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Create output directory if it doesn't exist
        const outputDir = path.join(__dirname, '..', 'public', 'data', 'work', 'adaya-ai');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Take screenshot
        const screenshotPath = path.join(outputDir, 'screenshot.png');
        console.log(`Taking screenshot: ${screenshotPath}`);
        await page.screenshot({
            path: screenshotPath,
            fullPage: false
        });

        console.log('✅ Screenshot saved successfully');

        // Try to extract images from the page
        const images = await page.evaluate(() => {
            const imgs = Array.from(document.querySelectorAll('img'));
            return imgs.map(img => ({
                src: img.src,
                alt: img.alt,
                width: img.width,
                height: img.height
            })).filter(img => img.width > 200 && img.height > 200); // Filter for larger images
        });

        console.log(`\nFound ${images.length} large images on the page:`);
        images.forEach((img, i) => {
            console.log(`${i + 1}. ${img.src}`);
            console.log(`   Alt: ${img.alt || 'N/A'}`);
            console.log(`   Size: ${img.width}x${img.height}`);
        });

    } catch (error) {
        console.error('Error:', error.message);
    }

    await browser.close();
})();
