// // File: tests/gmail/utils/gmailApi.ts

// import { google } from 'googleapis';
// import dotenv from 'dotenv';

// dotenv.config();

// interface EmailData {
//   senderEmail: string;
//   receiverEmail: string;
//   subject: string;
//   text: string;
// }

// export default class GmailApi {
//   private oauth2Client;
//   private gmail;

//   constructor() {
//     this.oauth2Client = new google.auth.OAuth2(
//       process.env.GMAIL_CLIENT_ID,
//       process.env.GMAIL_CLIENT_SECRET,
//       process.env.GMAIL_REDIRECT_URI
//     );

//     this.oauth2Client.setCredentials({
//       refresh_token: process.env.GMAIL_REFRESH_TOKEN,
//     });

//     this.gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
//   }

//   async sendEmail(data: EmailData) {
//     const message = [
//       `From: <${data.senderEmail}>`,
//       `To: <${data.receiverEmail}>`,
//       `Subject: ${data.subject}`,
//       '',
//       data.text,
//     ].join('\n');

//     const encodedMessage = Buffer.from(message)
//       .toString('base64')
//       .replace(/\+/g, '-')
//       .replace(/\//g, '_')
//       .replace(/=+$/, '');

//     await this.gmail.users.messages.send({
//       userId: 'me',
//       requestBody: {
//         raw: encodedMessage,
//       },
//     });

//     console.log('📨 Email sent successfully.');
//   }

//   async waitForUnreadEmailWithSubjectFragment(subjectFragment: string, timeoutMs = 20000) {
//     const end = Date.now() + timeoutMs;

//     while (Date.now() < end) {
//       const res = await this.gmail.users.messages.list({
//         userId: 'me',
//         q: `is:unread subject:${subjectFragment}`,
//       });

//       if (res.data.messages?.length) {
//         console.log('📥 Unread email found.');
//         return true;
//       }

//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     }

//     throw new Error(`❌ No unread email with subject "${subjectFragment}"`);
//   }
// }