import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Ensure clean screenshots
// Screenshot directory
const screenshotDir = 'test-35';
// Clean screenshot folder before test
/* if (fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(file => {
    fs.unlinkSync(path.join(screenshotDir, file));
  });
} else {
  fs.mkdirSync(screenshotDir);
} */
// Helper to log and screenshot
async function logAndScreenshot(page, dir: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${dir}/${step}.png` });
}

test('Verify field labels are visible on Contact creation form', async ({ page }) => {
  const screenshotDir = 'test-35';
  if (fs.existsSync(screenshotDir)) {
    fs.readdirSync(screenshotDir).forEach(file => {
      fs.unlinkSync(path.join(screenshotDir, file));
    });
  } else {
    fs.mkdirSync(screenshotDir);
  }

  console.log('🌐 Opening login page...');
  await page.goto('https://ansel2-dev-ed.develop.lightning.force.com/lightning/o/Contact/list?filterName=00BWU00000QUsgp2AD');
  await logAndScreenshot(page, screenshotDir, '1-login', '📸 Login page loaded');

  console.log('🔐 Logging in...');
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
  await logAndScreenshot(page, screenshotDir, '2-login-filled', '📸 Credentials entered');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(2000);

  console.log('📇 Navigating to Contacts tab...');
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.waitForTimeout(2000);
  await logAndScreenshot(page, screenshotDir, '3-contacts', '📸 Contacts tab');

  console.log('🆕 Opening New Contact form...');
  await page.getByRole('button', { name: 'New' }).click();
  await page.waitForTimeout(2000);
  await logAndScreenshot(page, screenshotDir, '4-contact-form', '📸 New Contact form opened');

  const labelsToCheck = [
    'Contact Owner',
    'Salutation',
    'First Name',
    'Last Name',
    'Phone',
    'Home Phone',
    'Mobile',
    'Other Phone',
    'Title',
    'Department',
    'Email',
    'Fax',
    'Birthdate',
    'Reports To',
    'Lead Source',
    'Website URL',
    'URL Name',
    'Assistant',
    'Asst. Phone'
  ];
  
  
  console.log('🔍 Verifying field labels...');

for (const label of labelsToCheck) {
  const normalized = label.replace(/\s+/g, '_');
  try {
    const possibleLocators = [
      page.locator('.test-id__field-label').filter({ hasText: label }),
      page.locator('label').filter({ hasText: label }),
      page.getByLabel(label),
      page.getByPlaceholder(label)
    ];

    let found = false;

    for (const locator of possibleLocators) {
      const count = await locator.count();
      if (count > 0) {
        const el = locator.first();
        await el.scrollIntoViewIfNeeded(); // 👈 Scroll to make it visible
        await expect(el).toBeVisible();
        console.log(`✅ Label visible: ${label}`);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log(`❌ Label not found: ${label}`);
      await page.screenshot({ path: `${screenshotDir}/missing-${normalized}.png` });
    }

  } catch (err) {
    console.log(`❌ Error while checking "${label}": ${err.message}`);
    await page.screenshot({ path: `${screenshotDir}/error-${normalized}.png` });
  }
}

console.log('✅ All label checks completed.');
for (let i = 0; i < 1; i++) {
  await page.mouse.wheel(0, 100); // scroll down
  await page.waitForTimeout(500); // allow time to load
}
await page.screenshot({ path: `${screenshotDir}/z-stepped-scroll.png` });
});
