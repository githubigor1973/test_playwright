
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const screenshotDir = 'test-35';

// Clean screenshot folder before test
if (fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(file => {
    fs.unlinkSync(path.join(screenshotDir, file));
  });
} else {
  fs.mkdirSync(screenshotDir);
}

// Helper to log and screenshot
async function logAndScreenshot(page, dir: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${dir}/${step}.png` });
}

test('Create a New Opportunity in Salesforce', async ({ page }) => {
  const screenshotDir = 'test-36';
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

  console.log('🔐 Entering login credentials...');
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
  await logAndScreenshot(page, screenshotDir, '2-login-filled', '📸 Credentials entered');

  console.log('➡️ Clicking login button...');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(1000);

  console.log('📇 Navigating to Opportunities tab...');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.waitForTimeout(1000);
  await logAndScreenshot(page, screenshotDir, '3-Search-filled', '📸 Search opened');

  console.log('🔎 Selecting "All Opportunities"...');
  const allOpportunities = page.locator('span:has-text("All Opportunities")').first();
  await page.waitForTimeout(1000);
  await allOpportunities.click();

  console.log('🧭 Clicking on "Opportunities"...');
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.waitForTimeout(500);

  console.log('➕ Clicking "New Opportunity"...');
  await page.getByRole('button', { name: 'New' }).click();

  console.log('📝 Filling basic Opportunity info...');
  await page.getByRole('textbox', { name: '*Opportunity Name' }).fill('Sample Opportunity');

  console.log('🏢 Selecting Account...');
  await page.getByRole('combobox', { name: 'Account Name' }).click();
  await page.getByRole('option', { name: 'Grand Hotels & Resorts Ltd' }).click();
  await logAndScreenshot(page, screenshotDir, '4-Opportunities-filled', '📸 Opportunity basic info filled');

  console.log('📊 Selecting Type...');
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.getByRole('option', { name: 'New customer' }).click();
  await page.waitForTimeout(1000);

  console.log('📥 Selecting Lead Source...');
  await page.getByRole('combobox', { name: 'Lead Source' }).click();
  await page.locator('button.slds-combobox__input.slds-input_faux.fix-slds-input_faux.slds-combobox__input-value').nth(2).click();
  await logAndScreenshot(page, screenshotDir, 'Test-login', '📸 Test');

  await page.getByRole('option', { name: 'Other' }).click();

// ↑ Adjust index if there are multiple dropdowns
  await page.waitForTimeout(1000);
  
  // If needed: await page.getByRole('option', { name: 'Other' }).click();

  console.log('🚚 Selecting Delivery/Installation Status...');
  await page.locator('button[aria-label="Delivery/Installation Status"]').click();
  await page.getByText('In progress').click();

  console.log('📅 Filling Close Date...');
  await page.getByRole('textbox', { name: 'Close Date' }).fill('04. 01. 2025.');

  console.log('💬 Filling remaining text fields...');
  await page.getByRole('textbox', { name: 'Opportunity Name' }).fill('Sample Opportunity');
  await page.getByRole('textbox', { name: 'Amount' }).fill('50000');
  await page.getByRole('textbox', { name: 'Next Step' }).fill('Follow up demo');

  console.log('🔽 Selecting Stage...');
  await page.getByRole('combobox', { name: 'Stage' }).click();
  await page.getByRole('option', { name: 'Prospecting' }).click();
  await logAndScreenshot(page, screenshotDir, '5-Stage-filled', '📸 Stage selected');

  console.log('📈 Filling additional Opportunity fields...');
  await page.getByRole('textbox', { name: 'Probability (%)' }).fill('75');
  await page.getByRole('textbox', { name: 'Order Number' }).fill('ORD123456');
  await page.getByRole('textbox', { name: 'Main Competitor(s)' }).fill('Acme Corp');
  await logAndScreenshot(page, screenshotDir, '6-End-filled', '📸 Final Opportunity data');

  await page.getByRole('textbox', { name: 'Current Generator(s)' }).fill('Model X');
  await page.getByRole('textbox', { name: 'Tracking Number' }).fill('TRACK78910');
  await page.getByRole('textbox', { name: 'Description' }).fill('This opportunity is a sample for Playwright testing.');

  console.log('☑️ Checking Private checkbox...');
  await page.getByRole('checkbox', { name: 'Private' }).check();

  console.log('💾 Clicking Save...');
  await page.getByRole('button', { name: 'Save' })

  console.log('✅ New Opportunity created successfully!');
});