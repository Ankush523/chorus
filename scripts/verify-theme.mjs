/**
 * Quick check: theme toggle updates <html class> and body background.
 * Usage: npm run start (port 3000) then node scripts/verify-theme.mjs [url]
 */
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(base, { waitUntil: "networkidle", timeout: 20000 });
await page.waitForTimeout(600);

const btn = page.getByRole("button", { name: /switch to/i });
await btn.first().waitFor({ timeout: 8000 });
if ((await btn.count()) === 0) {
  console.error("FAIL: theme toggle not found at", base);
  await browser.close();
  process.exit(1);
}

const snap = () =>
  page.evaluate(() => ({
    dark: document.documentElement.classList.contains("dark"),
    bg: getComputedStyle(document.body).backgroundColor,
  }));

const before = await snap();
await btn.first().click();
await page.waitForTimeout(400);
const after = await snap();

const ok = before.dark !== after.dark && before.bg !== after.bg;
console.log(ok ? "PASS" : "FAIL", { before, after });
await browser.close();
process.exit(ok ? 0 : 1);
