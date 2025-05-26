// const { google } = require('googleapis');
// const dotenv = require('dotenv');

// dotenv.config();

// const {
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI,
//   GMAIL_REFRESH_TOKEN,
// } = process.env;

// const oauth2Client = new google.auth.OAuth2(
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

// oauth2Client.getAccessToken()
//   .then(res => {
//     console.log('✅ Access Token:', res.token);
//   })
//   .catch(err => {
//     console.error('❌ Token Error:', err);
//   });

// import { test } from '@playwright/test';
// import { google } from 'googleapis';
// import dotenv from 'dotenv';

// dotenv.config();

// const {
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI,
//   GMAIL_REFRESH_TOKEN,
//   SENDER_EMAIL,
//   RECEIVER_EMAIL,
// } = process.env;

// const oauth2Client = new google.auth.OAuth2(
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

// const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

// test('📨 Send Gmail message via API', async () => {
//   const message = [
//     `From: ${SENDER_EMAIL}`,
//     `To: ${RECEIVER_EMAIL}`,
//     'Subject: Gmail API Playwright Test',
//     '',
//     //'Hi from Playwright and Gmail API — this message proves it works!',
//   ].join('\n');

//   const encodedMessage = Buffer.from(message)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '');

//   console.log('🔄 Attempting to send email...');

//   try {
//     const res = await gmail.users.messages.send({
//       userId: 'me',
//       requestBody: {
//         raw: encodedMessage,
//       },
//     });

//     console.log('✅ Email sent successfully!', res.data);
//   } catch (error) {
//     console.error('❌ Failed to send email:', error);
//   }
// });


// import { test, expect } from '@playwright/test';
// import { google } from 'googleapis';
// import dotenv from 'dotenv';
// import fs from 'fs';
// import path from 'path';
// import { config } from './test.config';

// dotenv.config();

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
//     'Subject: Test Run Started: Salesforce UI Test',
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


// 📧 Send a test email using Gmail API  node test-gmail.js

// const { google } = require('googleapis');
// const dotenv = require('dotenv');
// dotenv.config();

// const {
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI,
//   GMAIL_REFRESH_TOKEN,
//   SENDER_EMAIL,
//   RECEIVER_EMAIL,
// } = process.env;

// const oauth2Client = new google.auth.OAuth2(
//   GMAIL_CLIENT_ID,
//   GMAIL_CLIENT_SECRET,
//   GMAIL_REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

// const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

// (async () => {
//   try {
//     const message = [
//       `From: ${SENDER_EMAIL}`,
//       `To: ${RECEIVER_EMAIL}`,
//       'Subject: ✅ Gmail API Test',
//       '',
//       'Hi from Node.js using Gmail API — this message proves it works!',
//     ].join('\n');

//     const encodedMessage = Buffer.from(message)
//       .toString('base64')
//       .replace(/\+/g, '-')
//       .replace(/\//g, '_')
//       .replace(/=+$/, '');

//     console.log('🔄 Attempting to send email...');
//     await gmail.users.messages.send({
//       userId: 'me',
//       requestBody: {
//         raw: encodedMessage,
//       },
//     });

//     console.log('✅ Email sent successfully!');
//   } catch (error) {
//     console.error('❌ Failed to send email:', error.response?.data || error.message);
//   }
// })();


const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

dotenv.config();

// Gmail OAuth2 Setup
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

// 🔁 Generate dynamic subject
const subject = `Test - ${uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals],
  separator: '-',
  length: 3
})}`;

const subjectFilePath = path.resolve('testData/latestSubject.txt');
fs.writeFileSync(subjectFilePath, subject);

(async () => {
  try {
    const message = [
      `From: ${SENDER_EMAIL}`,
      `To: ${RECEIVER_EMAIL}`,
      `Subject: ${subject}`,
      '',
      '📧 This is an automated test email sent using the Gmail API.'
    ].join('\n');

    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    console.log(`📤 Sending email with subject: "${subject}"...`);
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage
      }
    });

    console.log('✅ Email sent successfully!');
    console.log(`📝 Subject saved to ${subjectFilePath}`);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
})();