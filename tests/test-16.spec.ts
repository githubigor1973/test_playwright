 import { test, expect } from '@playwright/test';

test('Verify 24sata Navigation Bar', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login', { waitUntil: 'domcontentloaded' });
  // Step 2: Handle cookie consent pop-up if it appears
  

  // Step 3: Define expected navigation texts
  const expectedTexts = [
    'Sign in to your Member Portal',
    'Enter your details below to access to Ansel',
    'Email address',
    'Password',
    'Forgot password?',
    '© Ansel Health, Inc. All Rights Reserved',
    'Terms',
    'Privacy',
    'Not yet registered? Create an account',
    'Register'
  ];

  // Step 4: Loop through and verify each navigation text
  for (const text of expectedTexts) {
    console.log(`🔍 Verifying: "${text}"`);
    const locator = page.getByText(text, { exact: true });

    try {
      await expect(locator).toBeVisible({ timeout: 5000 });
      console.log(`✅ Verified: "${text}" is present on the page.`);
    } catch (error) {
      console.error(`❌ Error: "${text}" not found on the page.`);
    }
  }




  
}); 
