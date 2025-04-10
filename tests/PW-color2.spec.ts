

import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';



test('🎯 Validate styles and interactions on Playwright homepage', async ({ page }) => {
  const dir = 'PW-color2';

  // 🗂️ Ensure screenshot directory exists
  if ( fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      fs.unlinkSync(path.join(dir, file));
    });
  }else {
    fs.mkdirSync(dir);
  }
  
   async function logAndScreenshot(page, dir: string, step: string, message: string) {
    console.log(message);
    await page.screenshot({ path: `${dir}/${step}.png`});
   }

  // 🌐 Navigate to Playwright site
  console.log('🌐 Navigating to Playwright homepage...');
  await page.goto('https://playwright.dev/');

  // 🧪 Pause for manual inspection if needed
  await page.pause();

  // 📸 Take homepage screenshot
  await page.screenshot({ path: `${dir}/1 homepage.png` });
  console.log('📸 Saved screenshot: homepage.png');

  // 🎨 Extract primary heading color
  const heading = await page.getByRole('heading', { name: /Playwright enables reliable/i }).locator('span');
  const headingColor = await heading.evaluate(el => getComputedStyle(el).color);
  const headingHex = convertRgbToHex(headingColor);
  console.log(`🎨 Heading color (RGB): ${headingColor}`);
  console.log(`🔷 Heading color (HEX): ${headingHex}`);

  // 🎨 Extract TypeScript link color
  const tsLink = await page.getByRole('link', { name: 'TypeScript' });
  const tsColor = await tsLink.evaluate(el => getComputedStyle(el).color);
  const tsHex = convertRgbToHex(tsColor);
  console.log(`🎨 TypeScript link color (RGB): ${tsColor}`);
  console.log(`🔷 TypeScript link color (HEX): ${tsHex}`);

  // 🔍 Search functionality: Step 1
  console.log('🔍 Performing search: "playwright new test"...');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox').fill('playwright new test');
  await page.screenshot({ path: `${dir}/2 before-search.png` });

  // ❌ Clear search
  console.log('🧹 Clearing search...');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/3 after-search.png` });

  await page.getByRole('button', { name: 'Clear the query' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // 🔍 Search functionality: Step 2
  console.log('🔍 Performing search: "playwright test"...');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox').fill('playwright test');

  // ❌ Clear again
  await page.getByRole('button', { name: 'Clear the query' }).click();
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // 🚀 Navigate to Get Started
  console.log('🚀 Navigating to "Get started"...');
  await page.locator('text=Get started').click();
  await page.waitForLoadState();

  console.log('✅ Test completed successfully!');
  await page.screenshot({ path: `${dir}/4 installation.png` });

});

// 🔁 Utility function: Convert RGB to HEX
function convertRgbToHex(rgb: string): string {
  const rgbValues = rgb.replace(/[^\d,]/g, '').split(',').slice(0, 3);
  return '#' + rgbValues.map(x => (+x).toString(16).padStart(2, '0')).join('').toUpperCase();
}