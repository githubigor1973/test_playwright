import { test, chromium } from '@playwright/test';

test('Open Gmail and click Create Account', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: 'gmail-session.json', // use saved session
  });

  const page = await context.newPage();
  console.log('📬 Opening Gmail...');
  await page.goto('https://mail.google.com');

  // Wait for inbox to load
  await page.waitForSelector('table[role="grid"]');

  // Find email by subject
  const emailSubject = await page.locator('span:has-text("Create your Ansel account")').first();
  await emailSubject.click();

  console.log('📨 Email opened');

  // Wait for body to load and click the CTA
  const button = await page.locator('a:has-text("Create your account")');
  await button.scrollIntoViewIfNeeded();
  await button.click();

  console.log('✅ Clicked "Create your account" link');

  await page.waitForTimeout(5000); // Optional: Wait to visually confirm
  await browser.close();
});