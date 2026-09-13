// Generate effective App Store promo screenshots.
// Brand gradient bg + benefit headline + framed app screenshot (cookie banner cropped off).
// Usage: node scripts/make-promos.cjs iphone   |   node scripts/make-promos.cjs ipad
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const sharp = require('sharp');

const ROOT = '/Users/konstantin/Projects/calk-uz';
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'promo-'));
const G1 = '#10b981', G2 = '#047857', DARK = '#06281d';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function makePromo({ W, H, src, cropBottom, lines, out, L }) {
  const meta = await sharp(src).metadata();
  const cw = meta.width, ch = meta.height - cropBottom;
  const cropped = path.join(TMP, path.basename(out).replace(/\.png$/, '-src.png'));
  await sharp(src).extract({ left: 0, top: 0, width: cw, height: ch }).toFile(cropped);
  const aspect = cw / ch;

  const cardW = L.cardW;
  const cardH = Math.round(cardW / aspect);
  const cardX = Math.round((W - cardW) / 2);
  const cardY = L.cardY;
  const bz = L.bezel, r = L.radius;
  const bx = cardX - bz, by = cardY - bz, bw = cardW + 2 * bz, bh = cardH + 2 * bz;

  const headline = lines.map((t, i) =>
    `<text x="${W / 2}" y="${L.hlY + i * L.lh}" text-anchor="middle" font-family="'Helvetica Neue',Helvetica,Arial,sans-serif" font-size="${L.fs}" font-weight="800" fill="#ffffff" letter-spacing="-1.5">${esc(t)}</text>`
  ).join('\n  ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.55" y2="1">
      <stop offset="0" stop-color="${G1}"/><stop offset="1" stop-color="${G2}"/>
    </linearGradient>
    <filter id="sh" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="34" stdDeviation="46" flood-color="#021a12" flood-opacity="0.45"/>
    </filter>
    <clipPath id="clip"><rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="${r}"/></clipPath>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${headline}
  <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${r + bz}" fill="${DARK}" filter="url(#sh)"/>
  <image xlink:href="file://${cropped}" x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" clip-path="url(#clip)" preserveAspectRatio="xMidYMid slice"/>
</svg>`;

  const svgPath = path.join(TMP, path.basename(out).replace(/\.png$/, '.svg'));
  fs.writeFileSync(svgPath, svg);
  execFileSync('rsvg-convert', ['-w', String(W), '-h', String(H), svgPath, '-o', out + '.raw.png']);
  await sharp(out + '.raw.png').removeAlpha().flatten({ background: G2 }).png().toFile(out);
  fs.unlinkSync(out + '.raw.png');
  console.log('✓', path.relative(ROOT, out), `${W}x${H}`);
}

const IPHONE = {
  W: 1242, H: 2688, cropBottom: 0,
  srcDir: `${ROOT}/app-store-assets/native-src`,
  outDir: `${ROOT}/app-store-assets/screenshots/6.5`,
  L: { cardW: 1010, cardY: 560, bezel: 16, radius: 64, hlY: 250, lh: 128, fs: 100 },
  shots: [
    { file: 'hub.png',      lines: ['8 калькуляторов', 'офлайн'] },
    { file: 'salary.png',   lines: ['Зарплата на руки:', 'НДФЛ + ИНПС'] },
    { file: 'loan.png',     lines: ['Кредит и график', 'платежей'] },
    { file: 'currency.png', lines: ['Курсы валют ЦБ', 'в реальном времени'] },
    { file: 'deposit.png',  lines: ['Депозит и', 'сложный процент'] },
    { file: 'customs.png',  lines: ['Растаможка авто', 'за секунды'] },
  ],
};

const IPAD = {
  W: 2048, H: 2732, cropBottom: 360,
  srcDir: `${ROOT}/app-store-assets/screenshots/_ipad-source`,
  outDir: `${ROOT}/app-store-assets/screenshots/ipad-13`,
  L: { cardW: 1500, cardY: 640, bezel: 20, radius: 72, hlY: 320, lh: 150, fs: 120 },
  shots: [
    { file: '1-home.png',    lines: ['78 калькуляторов', 'для Узбекистана'] },
    { file: '2-ndfl.png',    lines: ['Налоги — точно', 'и за секунды'] },
    { file: '3-kredit.png',  lines: ['Кредиты', 'и рассрочка'] },
    { file: '4-ipoteka.png', lines: ['Ипотека', 'и недвижимость'] },
    { file: '5-kursy.png',   lines: ['Курсы валют', 'ЦБ и банков'] },
  ],
};

(async () => {
  const which = process.argv[2] || 'iphone';
  const cfg = which === 'ipad' ? IPAD : IPHONE;
  fs.mkdirSync(cfg.outDir, { recursive: true });
  for (const s of cfg.shots) {
    const src = path.join(cfg.srcDir, s.file);
    if (!fs.existsSync(src)) { console.log('skip (no source)', s.file); continue; }
    await makePromo({ W: cfg.W, H: cfg.H, src, cropBottom: cfg.cropBottom, lines: s.lines, out: path.join(cfg.outDir, s.file), L: cfg.L });
  }
})();
