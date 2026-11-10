/**
 * Checks every page for horizontal overflow at common screen widths.
 *
 *   1. npm run build && npm run start   (in one terminal)
 *   2. npm run check:overflow           (in another)
 *
 * Options (env vars):
 *   BASE_URL     default http://localhost:3000
 *   CHROME_PATH  path to Chrome/Edge if not auto-detected
 *   SCREENSHOTS  set to a folder to save full-page screenshots
 */
import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const WIDTHS = [320, 375, 414, 768, 1024, 1280, 1440];
const PAGES = ["/", "/products", "/wholesale", "/for-business", "/sustainability", "/about", "/faq", "/contact", "/this-page-does-not-exist"];

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);
const executablePath = candidates.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.error("No Chrome/Edge found. Set CHROME_PATH.");
  process.exit(2);
}

const shotDir = process.env.SCREENSHOTS;
if (shotDir) fs.mkdirSync(shotDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--no-sandbox", "--hide-scrollbars"] });
const page = await browser.newPage();
let failures = 0;

for (const width of WIDTHS) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  for (const route of PAGES) {
    await page.goto(BASE + route, { waitUntil: "networkidle0" });
    // reveal everything + open all accordions/menus so hidden content is measured too
    await page.evaluate(() => {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      document.querySelectorAll("details").forEach((d) => (d.open = true));
    });
    await new Promise((r) => setTimeout(r, 150));
    const result = await page.evaluate(() => {
      const vw = window.innerWidth;
      const docW = document.documentElement.scrollWidth;
      // Find elements that stick out past the viewport (ignoring ones inside clipped parents)
      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.right <= vw + 1) continue;
        let clipped = false;
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const s = getComputedStyle(p);
          if (/(hidden|clip)/.test(s.overflowX) && p.getBoundingClientRect().right <= vw + 1) {
            clipped = true;
            break;
          }
        }
        if (!clipped) offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} → right ${Math.round(r.right)}px`);
      }
      return { vw, docW, offenders: offenders.slice(0, 5) };
    });
    const bad = result.docW > result.vw || result.offenders.length > 0;
    if (bad) {
      failures++;
      console.log(`✗ ${width}px ${route}  scrollWidth=${result.docW} innerWidth=${result.vw}`);
      result.offenders.forEach((o) => console.log("    " + o));
    } else {
      console.log(`✓ ${width}px ${route}`);
    }
    if (shotDir) {
      const name = `${width}${(route === "/" ? "_home" : route.replace(/\//g, "_"))}.png`;
      await page.screenshot({ path: path.join(shotDir, name), fullPage: true });
    }
  }
}

await browser.close();
console.log(failures ? `\n${failures} page/width combination(s) overflow.` : "\nNo horizontal overflow found.");
process.exit(failures ? 1 : 0);
