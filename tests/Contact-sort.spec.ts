import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { config } from './test.config'; // adjust the path if needed


test('✅ Verify Contact record UI and detail fields', async ({ page }) => {
  const screenshotDir = 'demo-33';

  // ♻️ Clean or create screenshot folder
  if (fs.existsSync(screenshotDir)) {
    fs.rmSync(screenshotDir, { recursive: true, force: true });
  }
  fs.mkdirSync(screenshotDir);

  console.log('🌐 Navigating to Salesforce Contacts page...');
  await page.goto(config.url);
  await page.screenshot({ path: `${screenshotDir}/1-login-screen.png` });

  console.log('📝 Logging in...');
  //await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
    await page.getByRole('textbox', { name: 'Username' }).fill(config.username);

  await page.screenshot({ path: `${screenshotDir}/2-username.png` });

  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
  await page.screenshot({ path: `${screenshotDir}/3-password.png` });

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(2000);

  console.log('📇 Navigating to Contacts tab...');
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${screenshotDir}/4-contacts-tab.png` });

  console.log('🔍 Verifying list view header buttons...');
  const headerButtons = [
    'Sort Name',
    'Sort Account Name',
    'Sort Title',
    'Sort Phone',
    'Sort Email',
    'Sort Contact Owner Alias',
    'Refresh Refresh',
    'Edit List',
    'New',
    'Intelligence View',
    'Import',
    'Add to Campaign',
    'Send List Email'
  ];

  for (const name of headerButtons) {
    await expect(page.getByRole('button', { name })).toBeVisible();
    console.log(`✅ Button visible: ${name}`);
  }

  await expect(page.getByPlaceholder('Search this list...')).toBeVisible();
  await expect(page.locator('button[title="List View Controls"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Select list display' })).toBeVisible();

  console.log('📁 Opening John Bond contact...');
  await page.getByRole('link', { name: 'John Bond' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${screenshotDir}/5-john-bond-open.png` });

  console.log('🧾 Switching to Details tab...');
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${screenshotDir}/6-details-tab.png` });
 await page.waitForTimeout(2000);
  console.log('🔄 Scrolling through the page to ensure lazy-loaded fields render...');
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(200);
  }
 await page.waitForTimeout(2000);
  const fields = [
    'Contact Owner',
    'Name',
    'Account Name',
    'Title',
    'Department',
    'Birthdate',
    'Phone',
    'Mobile',
    'Fax',
    'Email',
    'Lead Source',
    'Website URL',
    'Mailing Address',
    'Languages',
    'Level',
    'Last Modified By',
    'Created By'
  ];

  //const detailsTab = page.locator('#tab-3');
  
  const detailsTab = page.locator('.test-id__field-label');
  console.log('🧪 Verifying detail fields in Details tab...');

  for (const field of fields) {
    try {
      //const label = detailsTab.locator('.test-id__field-label').filter({ hasText: field });
      const label = detailsTab.filter({ hasText: field });
      const count = await label.count();

      if (count === 0) {
        console.log(`❌ Field not found: ${field}`);
        await page.screenshot({ path: `${screenshotDir}/missing-${field.replace(/\s+/g, '_')}.png` });
      } else {
        console.log(`✅ Field found: ${field}`);
        await expect(label.first()).toBeVisible();
      }
    } catch (err) {
      console.error(`❌ Error checking field "${field}": ${err.message}`);
      await page.screenshot({ path: `${screenshotDir}/error-${field.replace(/\s+/g, '_')}.png` });
    }
  }

  console.log('🎉 Contact detail field verification complete!');
});