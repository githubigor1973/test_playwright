require('dotenv').config();
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendEmail() {
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  const rawMessage = Buffer.from(
    `From: "Me" <me@gmail.com>\r\n` +
    `To: ${process.env.TO_EMAIL}\r\n` +
    `Subject: Gmail API Test\r\n\r\n` +
    `This is an automated email using Gmail API.`
  ).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: rawMessage,
    },
  });

  console.log('✅ Email sent, ID:', res.data.id);
}

sendEmail();