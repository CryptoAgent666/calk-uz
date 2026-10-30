import puppeteer from 'puppeteer';
import { mkdirSync, writeFileSync } from 'fs';

const OUT = '/Users/konstantin/Documents/New project/calk-uz/play-store-assets';
mkdirSync(OUT, { recursive: true });

const iconHTML = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: 512px; height: 512px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #059669 0%, #064e3b 100%); }
.icon-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.calc-icon { width: 200px; height: 240px; background: rgba(255,255,255,0.15); border-radius: 32px; padding: 20px; display: flex; flex-direction: column; gap: 12px; }
.screen { background: #004D32; border-radius: 12px; height: 50px; width: 100%; }
.buttons { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; flex: 1; }
.btn { background: rgba(255,255,255,0.9); border-radius: 8px; }
.btn-gold { background: #D4A843; grid-column: span 2; }
.text { color: white; font-family: -apple-system, sans-serif; font-size: 48px; font-weight: 800; letter-spacing: 2px; }
</style></head><body>
<div class="icon-wrap">
  <div class="calc-icon">
    <div class="screen"></div>
    <div class="buttons">
      <div class="btn"></div><div class="btn"></div><div class="btn-gold"></div>
      <div class="btn"></div><div class="btn"></div><div class="btn"></div>
    </div>
  </div>
  <div class="text">Calk.UZ</div>
</div>
</body></html>`;

const featureHTML = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: 1024px; height: 500px; background: linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%); display: flex; align-items: center; justify-content: center; font-family: -apple-system, 'Segoe UI', sans-serif; overflow: hidden; }
.container { display: flex; align-items: center; gap: 60px; padding: 0 80px; width: 100%; }
.left { flex: 1; }
.logo-row { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.logo-icon { width: 64px; height: 64px; background: rgba(255,255,255,0.2); border-radius: 16px; display: flex; align-items: center; justify-content: center; }
.logo-icon svg { width: 40px; height: 40px; }
.brand { color: white; font-size: 42px; font-weight: 800; }
h1 { color: white; font-size: 28px; font-weight: 600; line-height: 1.3; margin-bottom: 12px; }
.subtitle { color: rgba(255,255,255,0.8); font-size: 18px; line-height: 1.5; }
.badges { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
.badge { background: rgba(255,255,255,0.2); color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; backdrop-filter: blur(10px); }
.right { display: flex; gap: 16px; }
.phone-frame { width: 180px; height: 360px; background: #1a1a2e; border-radius: 24px; padding: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden; border: 2px solid rgba(255,255,255,0.1); }
.phone-screen { width: 100%; height: 100%; background: linear-gradient(180deg, #0f2027 0%, #1a3a3a 100%); border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.ph-header { color: #10b981; font-size: 11px; font-weight: 700; }
.ph-title { color: white; font-size: 14px; font-weight: 700; }
.ph-input { background: rgba(255,255,255,0.1); border-radius: 8px; height: 28px; width: 100%; }
.ph-result { margin-top: auto; }
.ph-label { color: rgba(255,255,255,0.5); font-size: 9px; }
.ph-value { color: #10b981; font-size: 16px; font-weight: 700; }
.ph-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 8px; }
.ph-card { background: rgba(255,255,255,0.08); border-radius: 8px; height: 50px; padding: 6px; }
.ph-card-title { color: rgba(255,255,255,0.5); font-size: 8px; }
.ph-card-val { color: white; font-size: 11px; font-weight: 600; margin-top: 2px; }
</style></head><body>
<div class="container">
  <div class="left">
    <div class="logo-row">
      <div class="logo-icon">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="26" height="24" rx="4" fill="white" opacity="0.9"/>
          <rect x="6" y="7" width="20" height="5" rx="1.5" fill="#059669"/>
          <rect x="6" y="15" width="4" height="4" rx="1" fill="#059669" opacity="0.6"/>
          <rect x="12" y="15" width="4" height="4" rx="1" fill="#059669" opacity="0.6"/>
          <rect x="18" y="15" width="8" height="4" rx="1" fill="#D4A843"/>
          <rect x="6" y="21" width="4" height="4" rx="1" fill="#059669" opacity="0.6"/>
          <rect x="12" y="21" width="4" height="4" rx="1" fill="#059669" opacity="0.6"/>
          <rect x="18" y="21" width="8" height="4" rx="1" fill="#059669" opacity="0.6"/>
        </svg>
      </div>
      <div class="brand">Calk.UZ</div>
    </div>
    <h1>78 бесплатных калькуляторов<br>для Узбекистана</h1>
    <div class="subtitle">Налоги · Зарплата · Кредиты · Депозиты<br>Валюта · Коммунальные · Недвижимость</div>
    <div class="badges">
      <div class="badge">🇺🇿 Для Узбекистана</div>
      <div class="badge">📊 Актуальные ставки</div>
      <div class="badge">🆓 Бесплатно</div>
    </div>
  </div>
  <div class="right">
    <div class="phone-frame">
      <div class="phone-screen">
        <div class="ph-header">Налоги</div>
        <div class="ph-title">Калькулятор НДФЛ</div>
        <div class="ph-input"></div>
        <div class="ph-input"></div>
        <div class="ph-result">
          <div class="ph-label">НДФЛ к уплате</div>
          <div class="ph-value">1 200 000 сум</div>
        </div>
        <div class="ph-grid">
          <div class="ph-card"><div class="ph-card-title">Ставка</div><div class="ph-card-val">12%</div></div>
          <div class="ph-card"><div class="ph-card-title">На руки</div><div class="ph-card-val">8 800 000</div></div>
        </div>
      </div>
    </div>
    <div class="phone-frame" style="margin-top: 40px;">
      <div class="phone-screen">
        <div class="ph-header">Кредиты</div>
        <div class="ph-title">Кредитный калькулятор</div>
        <div class="ph-input"></div>
        <div class="ph-input"></div>
        <div class="ph-input"></div>
        <div class="ph-result">
          <div class="ph-label">Ежемесячный платёж</div>
          <div class="ph-value">945 596 сум</div>
        </div>
        <div class="ph-grid">
          <div class="ph-card"><div class="ph-card-title">Переплата</div><div class="ph-card-val">1 347 152</div></div>
          <div class="ph-card"><div class="ph-card-title">Итого</div><div class="ph-card-val">11 347 152</div></div>
        </div>
      </div>
    </div>
  </div>
</div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  // Icon 512x512
  console.log('🎨 Generating icon 512x512...');
  const iconPage = await browser.newPage();
  await iconPage.setViewport({ width: 512, height: 512, deviceScaleFactor: 1 });
  await iconPage.setContent(iconHTML);
  await iconPage.screenshot({ path: `${OUT}/icon-512x512.png` });
  await iconPage.close();
  console.log('  ✅ icon-512x512.png');

  // Feature graphic 1024x500
  console.log('🎨 Generating feature graphic 1024x500...');
  const featurePage = await browser.newPage();
  await featurePage.setViewport({ width: 1024, height: 500, deviceScaleFactor: 1 });
  await featurePage.setContent(featureHTML);
  await featurePage.screenshot({ path: `${OUT}/feature-graphic-1024x500.png` });
  await featurePage.close();
  console.log('  ✅ feature-graphic-1024x500.png');

  await browser.close();
  console.log('\n🎉 Done!');
})();
