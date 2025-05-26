// import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import path from 'path';
// import { google } from 'googleapis';
// import dotenv from 'dotenv';

// dotenv.config();

// test('📨 Send Gmail email with unique subject', async () => {
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

//   oauth2Client.setCredentials({
//     refresh_token: GMAIL_REFRESH_TOKEN,
//   });

//   const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

//   // ✅ Generate a unique subject and save it
//   const subject = `Playwright Test ${Date.now()}`;
//   const subjectFilePath = path.resolve('testData/latestSubject.txt');

//   if (!fs.existsSync('testData')) {
//     fs.mkdirSync('testData');
//   }

//   fs.writeFileSync(subjectFilePath, subject);
//   console.log(`📝 Saved subject to file: ${subject}`);

//   const message = [
//     `From: ${SENDER_EMAIL}`,
//     `To: ${RECEIVER_EMAIL}`,
//     `Subject: ${subject}`,
//     '',
//     //'This is an automated email sent from a Playwright test.',
//   ].join('\n');

//   const encodedMessage = Buffer.from(message)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '');

//   console.log('📤 Sending email...');
//   const res = await gmail.users.messages.send({
//     userId: 'me',
//     requestBody: {
//       raw: encodedMessage,
//     },
//   });

//   console.log('✅ Email sent!', res.data);
//   expect(res.status).toBe(200);
// });

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

// 🔀 Utility to generate a random subject line
function generateRandomSubject() {
  const words = ['Update', 'Submission', 'Alert', 'Check', 'AutoMsg', 'Notice'];
  const pick = () => words[Math.floor(Math.random() + words.length)];
  return `${pick()} ${pick()} ${Date.now()}`;
}

test('📨 Send Gmail email with random subject', async () => {
  const subject = generateRandomSubject();

  const message = [
    `From: ${SENDER_EMAIL}`,
    `To: ${RECEIVER_EMAIL}`,
    `Subject: ${subject}`,
    '',
    `Automated test message from Playwright at ${new Date().toLocaleString()}`
  ].join('\n');

  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  console.log('📤 Sending email with subject:', subject);

  try {
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('✅ Email sent!', res.data.id);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw error;
  }
});

