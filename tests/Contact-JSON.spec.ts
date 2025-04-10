import { test, expect } from '@playwright/test';
import fs from 'fs';
import {config} from './test.config'; // adjust the path if needed

// Load contact data
const contactData = require('./contact-data.json');

// Helper function to take a screenshot with a console log message.
async function screenshotAndLog(page, folder: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${folder}/${step}.png` });
}

test('Verify Contact creation form with screenshots and logs', async ({ page }) => {
  const screenshotDir = 'test-34';

  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  console.log('🌐 Navigating to Salesforce Contacts page...');
  await page.goto(config.url);
  await screenshotAndLog(page, screenshotDir, '1-login-screen', '📸 Screenshot: Login screen');

  console.log('📝 Logging in...');
  await page.getByRole('textbox', { name: 'Username' }).fill(config.username);
  await screenshotAndLog(page, screenshotDir, '2-username', '📸 Screenshot: Username filled');

  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
  await screenshotAndLog(page, screenshotDir, '3-password', '📸 Screenshot: Password filled');

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(1500);
  await screenshotAndLog(page, screenshotDir, '4-post-login', '📸 Screenshot: Post-login page');

  console.log('📇 Opening Contacts tab...');
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.waitForTimeout(2000);
  await screenshotAndLog(page, screenshotDir, '5-contacts-tab', '📸 Screenshot: Contacts tab opened');

  console.log('🆕 Clicking New button...');
  await page.getByRole('button', { name: 'New' }).click();
  await page.waitForTimeout(1000);
  await screenshotAndLog(page, screenshotDir, '6-new-button-clicked', '📸 Screenshot: New button clicked');

  console.log('🔽 Clicking Salutation dropdown...');
  await page.locator('button[aria-label="Salutation"]').click();
  console.log(`✅ Selecting option "${contactData.salutation}"...`);
  await page.locator(`lightning-base-combobox-item >> text=${contactData.salutation}`).click();
  await screenshotAndLog(page, screenshotDir, '7-salutation-selected', '📸 Screenshot: Salutation selected');

  console.log('📝 Filling in First Name...');
  await page.getByPlaceholder('First Name').fill(contactData.firstName);
  console.log('📝 Filling in Last Name...');
  await page.getByPlaceholder('Last Name').fill(contactData.lastName);
  console.log('📞 Filling in Phone...');
  await page.getByRole('textbox', { name: 'Phone', exact: true }).fill(contactData.phone);
  console.log('📞 Filling in Home Phone...');
  await page.getByRole('textbox', { name: 'Home Phone', exact: true }).fill(contactData.homePhone);
  console.log('📞 Filling in Mobile...');
  await page.getByRole('textbox', { name: 'Mobile', exact: true }).fill(contactData.mobile);
  console.log('📞 Filling in Other Phone...');
  await page.getByRole('textbox', { name: 'Other Phone', exact: true }).fill(contactData.otherPhone);
  console.log('🖊️ Filling in Title...');
  await page.getByRole('textbox', { name: 'Title' }).fill(contactData.title);
  console.log('🖊️ Filling in Department...');
  await page.getByRole('textbox', { name: 'Department' }).fill(contactData.department);
  console.log('✉️ Filling in Email...');
  await page.getByRole('textbox', { name: 'Email' }).fill(contactData.email);
  console.log('📠 Filling in Fax...');
  await page.getByRole('textbox', { name: 'Fax' }).fill(contactData.fax);
  console.log('🎂 Filling in Birthdate...');
  await page.getByRole('textbox', { name: 'Birthdate' }).fill(contactData.birthdate);
  await screenshotAndLog(page, screenshotDir, '8-basic-fields-filled', '📸 Screenshot: Basic fields filled');

  console.log('🔽 Selecting Lead Source...');
  await page.locator('button[aria-label="Lead Source"]').click();
  await page.locator(`lightning-base-combobox-item >> text=${contactData.leadSource}`).click();
  await screenshotAndLog(page, screenshotDir, '9-lead-source-selected', '📸 Screenshot: Lead Source selected');

  console.log('🌐 Filling in URL Name...');
  await page.getByRole('textbox', { name: 'URL Name' }).fill(contactData.urlName);
  console.log('🌐 Filling in Website...');
  await page.getByRole('textbox', { name: 'Website' }).fill(contactData.website);
  await screenshotAndLog(page, screenshotDir, '10-website-filled', '📸 Screenshot: Website fields filled');

  console.log('👩 Filling in Assistant...');
  await page.getByRole('textbox', { name: 'Assistant' }).fill(contactData.assistant);
  console.log('📞 Filling in Asst. Phone...');
  await page.getByRole('textbox', { name: 'Asst. Phone' }).fill(contactData.assistantPhone);
  await screenshotAndLog(page, screenshotDir, '11-assistant-filled', '📸 Screenshot: Assistant fields filled');

  console.log('💾 Clicking Save...');
  await page.getByRole('button', { name: 'Save', exact: true })
  await page.waitForTimeout(2000);
  await screenshotAndLog(page, screenshotDir, '12-contact-saved', '📸 Screenshot: Contact saved');

  console.log('✅ Contact created successfully!');
});