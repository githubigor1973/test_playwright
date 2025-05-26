import { test, expect } from '@playwright/test';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { config } from './test.config';

dotenv.config();

// const {
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI,
//   GMAIL_REFRESH_TOKEN,
//   SENDER_EMAIL,
//   RECEIVER_EMAIL,
// } = process.env;

// // ✅ Gmail auth and send logic
// async function sendTestEmail() {
//   const oauth2Client = new google.auth.OAuth2(
//     GMAIL_CLIENT_ID,
//     GMAIL_CLIENT_SECRET,
//     GMAIL_REDIRECT_URI
//   );

//   oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

//   const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

//   const message = [
//     `From: ${SENDER_EMAIL}`,
//     `To: ${RECEIVER_EMAIL}`,
//     'Subject: 🚀 Test Run Started: Salesforce UI Test',
//     '',
//    // 'This email was sent before starting the Salesforce automation test.',
//   ].join('\n');

//   const encodedMessage = Buffer.from(message)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '');

//   console.log('🔄 Sending test start notification email...');

//   await gmail.users.messages.send({
//     userId: 'me',
//     requestBody: {
//       raw: encodedMessage,
//     },
//   });

//   console.log('✅ Email sent successfully before test!');
// }

test('✅ Verify Contact record UI and detail fields', async ({ page }) => {
  test.setTimeout(60_000);

  // 📨 Send email BEFORE running the test
  //await sendTestEmail();

  const screenshotDir = 'demo-33';
  if (fs.existsSync(screenshotDir)) {
    fs.rmSync(screenshotDir, { recursive: true, force: true });
  }
  fs.mkdirSync(screenshotDir);

  console.log('🌐 Navigating to Salesforce Contacts page...');
  await page.goto(config.url);
  await page.screenshot({ path: `${screenshotDir}/1-login-screen.png` });

  console.log('📝 Logging in...');
  await page.getByRole('textbox', { name: 'Username' }).fill(config.username);
  await page.screenshot({ path: `${screenshotDir}/2-username.png` });
  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
  await page.screenshot({ path: `${screenshotDir}/3-password.png` });
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.waitForTimeout(2000);

//old code
await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
  await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
await page.waitForTimeout(2000);

  
// Click the dropdown
await page.getByRole('row', { name: 'SUB-45373 Not Assigned' }).click();
await page.waitForTimeout(500);


  for (let i = 0; i < 5; i++) {
    await page.mouse.wheel(0, 200);
    await page.waitForTimeout(700);
  }
  await page.getByRole('button', { name: 'Edit From Address' }).click();
    await page.waitForTimeout(1000);
    for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, -200);
    await page.waitForTimeout(700);
  }
    await page.getByLabel('Available').getByText('Urgent').click();
    //await page.getByLabel('Available').getByText('Renewal').click();
      //await page.getByLabel('Available').getByText('Program Flip').click()
       //await page.getByLabel('Available').getByText('Missing Info').click()
       //await page.getByLabel('Available').getByText('Additional Info').click();

    //await page.getByLabel('Available').getByText('NY').click()
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Move to Chosen Move selection' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(1000);

  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, -200);
    await page.waitForTimeout(700);
  }

  const dropdownButtons = page.locator('button[role="combobox"]');
  const count = await dropdownButtons.count();

  let dropdownButton;
  for (let i = 0; i < count; i++) {
    const current = dropdownButtons.nth(i);
    const labelSpan = current.locator('span[part="input-button-value"]');
    const value = await labelSpan.textContent();

    if (value?.includes('Line of Business') || value?.includes('PCL') || value?.includes('Default')) {
      dropdownButton = current;
      break;
    }
  }

  if (!dropdownButton) {
    throw new Error('Dropdown button for Line of Business not found');
  }

  const selectedValue = await dropdownButton.locator('span[part="input-button-value"]').textContent();
  const expectedValue = 'PCL - Primary Construction Liability';

  if (selectedValue?.trim() !== expectedValue) {
    await dropdownButton.click();
    await page.waitForSelector('[role="listbox"]');
    const optionLocator = page.locator('[role="option"]', { hasText: expectedValue });
    await optionLocator.first().click();
    await page.waitForTimeout(1000);
  }

  await page.getByRole('button', { name: 'Days Exceeded' }).click();
  await page.waitForTimeout(3000);

  const acceptButton = page.getByRole('button', { name: 'Accept' });
  const confirmButton = page.getByRole('button', { name: 'Confirm' });

  try {
  await confirmButton.waitFor({ timeout: 2000 });

  if (await confirmButton.isVisible()) {
    await confirmButton.click();
    console.log('✅ Clicked "Confirm" button');
  } else {
    throw new Error('❌ "Confirm" button is not visible');
  }
} catch (error) {
  console.error('❌ Failed to click Confirm:', error);
  throw error;
}

  await page.waitForTimeout(2000);
  for (let i = 0; i < 2; i++) {
    await page.mouse.wheel(0, 600);
    await page.waitForTimeout(700);
  }

  await page.getByRole('tab', { name: 'History' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Email: Your request exceeds' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(2000);
  for (let i = 0; i < 2; i++) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(700);
  }

  await page.goBack();
  await page.getByRole('tab', { name: 'Box' }).click();
  await page.waitForTimeout(2000);
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, -500);
    await page.waitForTimeout(700);
  }

  await page.getByRole('button', { name: 'Open Box Folder' }).click();
  console.log('🎉 Finished');
  await page.waitForTimeout(5000);

  
});