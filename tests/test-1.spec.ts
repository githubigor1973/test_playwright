// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import path from 'path';
// import { config } from './test.config'; // adjust the path if needed

//  test('✅ Verify Contact record UI and detail fields', async ({ page }) => {
//   test.setTimeout(60_000); 
//   const screenshotDir = 'demo-33';

//   // ♻️ Clean or create screenshot folder
//   if (fs.existsSync(screenshotDir)) {
//     fs.rmSync(screenshotDir, { recursive: true, force: true });
//   }
//   fs.mkdirSync(screenshotDir);
// // new code 
//   const timestamp = Date.now(); // unique identifier for this test
//   const submissionSubject = `Test-${timestamp}`;

//   // --- SEND EMAIL USING GMAIL API ---
//   const { google } = require('googleapis');
//   const {
//     GMAIL_CLIENT_ID,
//     GMAIL_CLIENT_SECRET,
//     GMAIL_REDIRECT_URI,
//     GMAIL_REFRESH_TOKEN,
//     SENDER_EMAIL,
//     RECEIVER_EMAIL,
//   } = process.env;

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
//     `Subject: ${submissionSubject}`,
//     '',
//     'Automated test email from Playwright.',
//   ].join('\n');

//   const encodedMessage = Buffer.from(message)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '');

//   console.log('📤 Sending email...');
//   await gmail.users.messages.send({
//     userId: 'me',
//     requestBody: {
//       raw: encodedMessage,
//     },
//   });
//   console.log('✅ Email sent:', submissionSubject);


//   // old code
//   console.log('🌐 Navigating to Salesforce Contacts page...');
//   await page.goto(config.url);
//   await page.screenshot({ path: `${screenshotDir}/1-login-screen.png` });

//   console.log('📝 Logging in...');
//   //await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
//     await page.getByRole('textbox', { name: 'Username' }).fill(config.username);

//   await page.screenshot({ path: `${screenshotDir}/2-username.png` });

//   await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
//   await page.screenshot({ path: `${screenshotDir}/3-password.png` });

//   await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
//   await page.waitForTimeout(2000);


//   await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
//   await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();

//   //dropdown
// console.log(`🔍 Waiting for row with subject: ${submissionSubject}...`);
// const matchingRow = page.locator('tr', { hasText: submissionSubject });
// await expect(matchingRow).toBeVisible();

// // Click the dropdown inside that row (Line of Business)
// await matchingRow.getByRole('combobox').click();
// await page.waitForTimeout(500);

// // Select the correct option
// await page.selectOption('select.slds-truncate', { label: 'PCL - Primary Construction Liability' });
// await page.waitForTimeout(1000);

// // Click the Submission # (e.g., "SUB-XXXX") within the same row
// const submissionCell = matchingRow.locator('lightning-formatted-text', { hasText: /^SUB-\d+/ });
// await submissionCell.click();
// await page.waitForTimeout(1000);


  
//   for (let i = 0; i < 5; i++) {
//     await page.mouse.wheel(0, 200);
//     await page.waitForTimeout(700);
//   }
//   await page.getByRole('button', { name: 'Edit From Address' }).click();
//     await page.waitForTimeout(1000);
//     for (let i = 0; i < 4; i++) {
//     await page.mouse.wheel(0, -200);
//     await page.waitForTimeout(700);
//   }
//     //await page.getByLabel('Available').getByText('Urgent').click();
//     //await page.getByLabel('Available').getByText('Renewal').click();
//       //await page.getByLabel('Available').getByText('Program Flip').click()
//        //await page.getByLabel('Available').getByText('Missing Info').click()
//        await page.getByLabel('Available').getByText('Additional Info').click();

//     //await page.getByLabel('Available').getByText('NY').click()

//     await page.waitForTimeout(1000);
//     await page.getByRole('button', { name: 'Move to Chosen Move selection' }).click();
//     await page.waitForTimeout(1000);

//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForTimeout(1000);

//   for (let i = 0; i < 4; i++) {
//     await page.mouse.wheel(0, -200);
//     await page.waitForTimeout(700);
//   }
//     //  await page.getByRole('button', { name: 'Default' }).click();  // 2. Wait for dropdown options to appear
//     //      await page.waitForSelector('text=PCL - Primary Construction Liability');


// // Locate all dropdown buttons (Salesforce Lightning style)
// const dropdownButtons = page.locator('button[role="combobox"]');

// // Find the one that currently has the expected value OR is near "Line of Business"
// const count = await dropdownButtons.count();

// let dropdownButton;
// for (let i = 0; i < count; i++) {
//   const current = dropdownButtons.nth(i);
//   const labelSpan = current.locator('span[part="input-button-value"]');
//   const value = await labelSpan.textContent();

//   if (value?.includes('Line of Business') || value?.includes('PCL') || value?.includes('Default')) {
//     dropdownButton = current;
//     break;
//   }
// }

// if (!dropdownButton) {
//   throw new Error('Dropdown button for Line of Business not found');
// }

// const selectedValue = await dropdownButton.locator('span[part="input-button-value"]').textContent();

// // Use the exact visible text from the UI, which uses a regular hyphen, not an en dash
// const expectedValue = 'PCL - Primary Construction Liability';

// if (selectedValue?.trim() !== expectedValue) {
//   await dropdownButton.click();

//   // Wait for the dropdown list to be visible
//   await page.waitForSelector('[role="listbox"]');

//   // Find and click the correct option inside the listbox using the regular hyphen
//   const optionLocator = page.locator('[role="option"]', { hasText: expectedValue });
//   await optionLocator.first().click();

//   await page.waitForTimeout(1000);
// }

// // Continue with the rest of the flow
// await page.getByRole('button', { name: 'Days Exceeded' }).click();
// await page.waitForTimeout(3000);

// // Try clicking "Accept" or "Confirm" depending on which is visible
// const acceptButton = page.getByRole('button', { name: 'Accept' });
// const confirmButton = page.getByRole('button', { name: 'Confirm' });

// if (await acceptButton.isVisible()) {
//   await acceptButton.click();
//   console.log('✅ Clicked "Accept" button');
// } else if (await confirmButton.isVisible()) {
//   await confirmButton.click();
//   console.log('✅ Clicked "Confirm" button');
// } else {
//   throw new Error('❌ Neither "Accept" nor "Confirm" button was found');
// }

// await page.waitForTimeout(1000);
// for (let i = 0; i < 2; i++) {
//   await page.mouse.wheel(0, 600);
//   await page.waitForTimeout(700);
// }
// await page.getByRole('tab', { name: 'History' }).click();

// console.log('🎉 Finished');
// await page.waitForTimeout(5000);

// });

import { test, expect } from '@playwright/test';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { config } from './test.config';

dotenv.config();

const {
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI,
  GMAIL_REFRESH_TOKEN,
  SENDER_EMAIL,
  RECEIVER_EMAIL,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

function generateRandomSubject() {
  const words = ['Update', 'Submission', 'Alert', 'Check', 'AutoMsg', 'Notice'];
  const pick = () => words[Math.floor(Math.random() * words.length)];
  return `${pick()} ${pick()} ${Date.now()}`;
}

test('📨 Send email & verify in Salesforce', async ({ page }) => {
  const subject = generateRandomSubject();
  const message = [
    `From: ${SENDER_EMAIL}`,
    `To: ${RECEIVER_EMAIL}`,
    `Subject: ${subject}`,
    '',
    `Automated email sent at ${new Date().toLocaleString()}`,
  ].join('\n');

  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  console.log('📤 Sending email with subject:', subject);
  await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw: encodedMessage },
  });

  console.log('🌐 Navigating to Salesforce...');
  await page.goto(config.url);
  await page.getByRole('textbox', { name: 'Username' }).fill(config.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.waitForTimeout(3000);

  console.log('⏳ Waiting for new email to appear...');
  const timeout = 60_000;
  const pollInterval = 3_000;
  const start = Date.now();
  let found = false;

  while (Date.now() - start < timeout) {
    await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
    await page.waitForTimeout(1000);

    const row = page.locator('tr', { hasText: subject });
    if (await row.first().isVisible()) {
      console.log('✅ Found the email row');
      await row.first().click();
      found = true;
      break;
    }

    console.log('🔁 Email not found yet, retrying...');
    await page.reload();
    await page.waitForTimeout(pollInterval);
  }

  if (!found) {
    throw new Error(`❌ Email with subject "${subject}" did not appear in time.`);
  }
                  // Ensure the option is visible and interactable before clicking
  // await page.selectOption('select.slds-truncate', { label: 'PCL - Primary Construction Liability' });

  // await page.waitForTimeout(1000);
  // await page.getByRole('gridcell', { name: 'SUB-45364' }).locator('lightning-formatted-text').click();
  await page.waitForTimeout(1000);
  
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

    //await page.getByLabel('Available').getByText('Urgent').click();
    //await page.getByLabel('Available').getByText('Renewal').click();
      //await page.getByLabel('Available').getByText('Program Flip').click()
       //await page.getByLabel('Available').getByText('Missing Info').click()
       await page.getByLabel('Available').getByText('Additional Info').click();

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
    //  await page.getByRole('button', { name: 'Default' }).click();  // 2. Wait for dropdown options to appear
    //      await page.waitForSelector('text=PCL - Primary Construction Liability');

// Locate all dropdown buttons (Salesforce Lightning style)
const dropdownButtons = page.locator('button[role="combobox"]');

// Find the one that currently has the expected value OR is near "Line of Business"
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

// Use the exact visible text from the UI, which uses a regular hyphen, not an en dash
const expectedValue = 'PCL - Primary Construction Liability';

if (selectedValue?.trim() !== expectedValue) {
  await dropdownButton.click();

  // Wait for the dropdown list to be visible
  await page.waitForSelector('[role="listbox"]');

  // Find and click the correct option inside the listbox using the regular hyphen
  const optionLocator = page.locator('[role="option"]', { hasText: expectedValue });
  await optionLocator.first().click();

  await page.waitForTimeout(1000);
}

// Continue with the rest of the flow
await page.getByRole('button', { name: 'Days Exceeded' }).click();
await page.waitForTimeout(3000);

// Try to find either "Accept" or "Confirm" button
const acceptButton = page.getByRole('button', { name: 'Accept' });
const confirmButton = page.getByRole('button', { name: 'Confirm' });

try {
  // Wait for either to appear — maximum 5 seconds
  await Promise.race([
    acceptButton.waitFor({ timeout: 2000 }),
    confirmButton.waitFor({ timeout: 2000 }),
  ]);

  if (await acceptButton.isVisible()) {
    await acceptButton.click();
    console.log('✅ Clicked "Accept" button');
  } else if (await confirmButton.isVisible()) {
    await confirmButton.click();
    console.log('✅ Clicked "Confirm" button');
  } else {
    throw new Error('❌ Neither "Accept" nor "Confirm" button is visible');
  }

} catch (error) {
  console.error('❌ Failed to click Accept or Confirm:', error);
  throw error; // optional rethrow
}

await page.waitForTimeout(2000);
for (let i = 0; i < 2; i++) {
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(700);
}
await page.getByRole('tab', { name: 'History' }).click();

  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Email: Your request exceeds' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1000);
  for (let i = 0; i < 2; i++) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(700);
  }
  await page.goBack(); // ⬅️ Go back in browser history
   await page.getByRole('tab', { name: 'Box' }).click();
   await page.waitForTimeout(1000);
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, -500);
    await page.waitForTimeout(700);
  }
  await page.getByRole('button', { name: 'Open Box Folder' }).click();
  console.log('🎉 Finished');
  await page.waitForTimeout(5000);

});