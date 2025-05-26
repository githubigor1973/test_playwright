import { test } from '@playwright/test';
import { google } from 'googleapis';
import dotenv from 'dotenv';

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

test('Send Gmail message via API', async () => {
  const message = [
    `From: ${SENDER_EMAIL}`,
    `To: ${RECEIVER_EMAIL}`,
    'Subject: Gmail API Playwright Test',
    '',
    //'Hi from Playwright and Gmail API — this message proves it works!',
  ].join('\n');

  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  console.log('🔄 Attempting to send email...');

  try {
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('✅ Email sent successfully!', res.data);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
});