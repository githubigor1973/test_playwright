/* import { fetch } from 'undici';
import 'dotenv/config';

const API_BASE_URL = 'https://qa-brexus-api.joinansel.com';
//const API_BASE_URL = 'https://qa-ansel-platform.joinansel.com';


const SUPPORT_USER = process.env.SUPPORT_USER!;
const SUPPORT_PASS = process.env.SUPPORT_PASS!;

export async function getGroupAppLinkForUser(email: string): Promise<string> {
  const token = await loginAndGetToken();
  const emailId = await getEmailId(email, token, 'group');
  if (!emailId) throw new Error(`❌ No welcome email found for: ${email}`);

  const emailDetails = await getEmailDetails(emailId, token);
  const match = emailDetails.match(/href=(.*?) target="_blank">/);
  if (!match) throw new Error(`❌ Failed to extract URL from email body`);

  return match[1].replace(/&#61;/g, '=');
}

// 🔑 Get the "Set Password" tokenized link from email
export async function getSetPasswordLinkForUser(email: string): Promise<string> {
  const token = await loginAndGetToken();
  const emailId = await getEmailId(email, token, 'password');
  if (!emailId) throw new Error(`❌ No setPassword email found for: ${email}`);

  const emailDetails = await getEmailDetails(emailId, token);
  const match = emailDetails.match(
    /https:\/\/qa-ansel-platform\.joinansel\.com\/employer\/setPassword\/\?token=([\w-]+\.[\w-]+\.[\w-]+)/
  );
  if (!match) throw new Error('❌ Could not extract token from setPassword email');

  return `https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=${match[1]}`;
}

// 🔐 Get token using support credentials
async function loginAndGetToken(): Promise<string> {
  const payload = {
    username: SUPPORT_USER,
    password: SUPPORT_PASS
  };

  const res = await fetch(`${API_BASE_URL}/api/support/v1/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = (await res.json()) as { token: string };
  return data.token;
}

// 📧 Get email ID by recipient and type (group or password)
async function getEmailId(
  email: string,
  token: string,
  type: 'group' | 'password' = 'group'
): Promise<string | null> {
  const now = new Date();
  const from = new Date(now.getTime() - 1000 * 60 * 15).toISOString();
  const to = now.toISOString();

  const payload = {
    from,
    to,
    onlyErrors: false,
    configKey: null,
    limit: 50,
    recipient: email
  };

  const res = await fetch(`${API_BASE_URL}/api/support/v1/email/listEmails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authtoken: token
    },
    body: JSON.stringify(payload)
  });

  const emails = (await res.json()) as { id: string; subject: string }[];

  const subjectFilters = {
    group: [
      'Welcome to Ansel',
      'Welcome to Symetra Health',
      'Welcome to Voya Protect',
      'Welcome to Allstate Benefits Coverage Plus'
    ],
    password: ['Set your password', 'Create your password']
  };

  const match = emails.find((e) => subjectFilters[type].includes(e.subject));
  return match?.id || null;
}

// 📬 Get full HTML body of email by ID
async function getEmailDetails(id: string, token: string): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/support/v1/email/emailDetails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authtoken: token
    },
    body: JSON.stringify({ id })
  });

  const data = (await res.json()) as { body: string };
  return data.body;
} */

  import { fetch } from 'undici';
import 'dotenv/config';

const API_BASE_URL = 'https://qa-ansel-platform.joinansel.com'; // <-- important!!
const PLATFORM_BASE_URL = 'https://qa-ansel-platform.joinansel.com';

const SUPPORT_USER = process.env.SUPPORT_USER!;
const SUPPORT_PASS = process.env.SUPPORT_PASS!;
  
  // Main function you need
  export async function getSetPasswordLinkForUser(email: string): Promise<string> {
    const token = await loginAndGetToken();
    const emailId = await retryFindEmailId(email, token, 'password', 30_000, 5_000); // Retry every 5s up to 30s
  
    if (!emailId) {
      throw new Error(`❌ Could not find SetPassword email for ${email} after multiple retries.`);
    }
  
    const emailDetails = await getEmailDetails(emailId, token);
  
    console.log("🔵 Full email body fetched:");
    console.log(emailDetails); // Helpful debug
  
    const match = emailDetails.match(
      /href="(\/employer\/setPassword\/\?token=[^"]+)"/
    );
  
    if (!match) throw new Error('❌ Could not extract setPassword link from email');
  
    const relativeLink = match[1].replace(/&#61;/g, '=');
    const fullLink = `${PLATFORM_BASE_URL}${relativeLink}`;
  
    console.log(`✅ Generated SetPassword link: ${fullLink}`);
    return fullLink;
  }
  
  // Helper function to login
  async function loginAndGetToken(): Promise<string> {
    const payload = {
      username: SUPPORT_USER,
      password: SUPPORT_PASS
    };
  
    const res = await fetch(`${API_BASE_URL}/api/support/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  
    const data = (await res.json()) as { token: string };
    return data.token;
  }
  
  // Get email ID by type
  async function getEmailId(
    email: string,
    token: string,
    type: 'group' | 'password' = 'group'
  ): Promise<string | null> {
    const now = new Date();
    const from = new Date(now.getTime() - 1000 * 60 * 15).toISOString();
    const to = now.toISOString();
  
    const payload = {
      from,
      to,
      onlyErrors: false,
      configKey: null,
      limit: 50,
      recipient: email
    };
  
    const res = await fetch(`${API_BASE_URL}/api/support/v1/email/listEmails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authtoken: token
      },
      body: JSON.stringify(payload)
    });
  
    const emails = (await res.json()) as { id: string; subject: string }[];
  
    const subjectFilters = {
      group: [
        'Welcome to Ansel',
        'Welcome to Symetra Health',
        'Welcome to Voya Protect',
        'Welcome to Allstate Benefits Coverage Plus'
      ],
      password: ['Set your password', 'Create your password']
    };
  
    const match = emails.find((e) => subjectFilters[type].some(subject => e.subject.includes(subject)));
    return match?.id || null;
  }
  
  // Fetch full email HTML body
  async function getEmailDetails(id: string, token: string): Promise<string> {
    const res = await fetch(`${API_BASE_URL}/api/support/v1/email/emailDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authtoken: token
      },
      body: JSON.stringify({ id })
    });
  
    const data = (await res.json()) as { body: string };
    return data.body;
  }
  
  // Bulletproof retry logic
  async function retryFindEmailId(
    email: string,
    token: string,
    type: 'group' | 'password',
    timeoutMs: number = 30_000,
    intervalMs: number = 5_000
  ): Promise<string | null> {
    const start = Date.now();
  
    while (Date.now() - start < timeoutMs) {
      const emailId = await getEmailId(email, token, type);
      if (emailId) {
        console.log(`✅ Found email ID: ${emailId}`);
        return emailId;
      }
  
      console.log(`⏳ Email not ready yet. Waiting ${intervalMs / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  
    return null; // Timed out
  }