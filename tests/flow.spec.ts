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
  test.setTimeout(120_000);
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
  await page.waitForTimeout(4000);

  console.log('⏳ Waiting for new email to appear...');
  const timeout = 60_000;
  const pollInterval = 5_000;
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

  await page.waitForTimeout(2000);
  for (let i = 0; i < 5; i++) {
    await page.mouse.wheel(0, 200);
    await page.waitForTimeout(700);
  }

  await page.getByRole('button', { name: 'Edit From Address' }).click();
  await page.waitForTimeout(1000);
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, -200);
    await page.waitForTimeout(2000);
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