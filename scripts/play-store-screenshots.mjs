import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const OUT = '/Users/konstantin/Documents/New project/calk-uz/play-store-assets';
mkdirSync(OUT, { recursive: true });

const pages = [
  { name: '1-home', url: 'https://calk.uz/ru' },
  { name: '2-ndfl', url: 'https://calk.uz/ru/calculator/ndfl' },
  { name: '3-kredit', url: 'https://calk.uz/ru/calculator/kredit' },
  { name: '4-salary', url: 'https://calk.uz/ru/calculator/zarplata' },
  { name: '5-category', url: 'https://calk.uz/ru/category/tax' },
  { name: '6-contact', url: 'https://calk.uz/ru/contact' },
];

const devices = [
  { name: 'phone', width: 412, height: 915, scale: 2.625 },   // Pixel 7 — 1080x2400
  { name: 'tablet', width: 800, height: 1280, scale: 1.5 },   // 7" tablet — 1200x1920
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (const device of devices) {
    console.log(`\n📱 Device: ${device.name} (${device.width}x${device.height} @${device.scale}x)`);

    for (const page of pages) {
      const p = await browser.newPage();
      await p.setViewport({
        width: device.width,
        height: device.height,
        deviceScaleFactor: device.scale,
      });

      // Set mobile user agent for phone
      if (device.name === 'phone') {
        await p.setUserAgent('Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36');
      }

      console.log(`  📸 ${page.name}: ${page.url}`);
      await p.goto(page.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

      const filename = `${OUT}/${device.name}-${page.name}.png`;
      await p.screenshot({ path: filename, fullPage: false });
      console.log(`     ✅ Saved: ${filename}`);

      await p.close();
    }
  }

  await browser.close();
  console.log(`\n🎉 Done! Screenshots saved to: ${OUT}`);
})();
