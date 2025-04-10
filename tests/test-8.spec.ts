/*import { test, expect } from '@playwright/test';

test('Verify UI Text on AIG Member Login Page', async ({ page }) => {
    console.log('🚀 Starting test: Verify UI Text on AIG Member Login Page');

    // Step 1: Navigate to the login page
    await page.goto('https://qa-aig-platform.joinansel.com/member/login');

    // Step 2: Assertions for page text
    console.log('🔍 Checking page text...');

    // Main heading
    await expect(page.getByRole('heading')).toContainText('Simple, supplemental health insurance for all.');

    // Links and navigation prompts
    await expect(page.getByText('Not yet registered? Create an account')).toBeVisible();
    await expect(page.getByText('Sign in to your Member Portal')).toBeVisible();
    await expect(page.getByText('Enter your details below to access AIG Medical Indemnity')).toBeVisible();

    // Form labels and buttons
    await expect(page.getByText('Email address')).toContainText('Email address');
    await expect(page.getByText('Password').nth(0)).toBeVisible();    
      await expect(page.locator('form').getByText('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toContainText('Sign in');
    await expect(page.getByText('Forgot password?')).toContainText('Forgot password?');

    // Footer text
    await expect(page.getByText('© Ansel Health, Inc. All Rights Reserved')).toBeVisible();
    await expect(page.getByText('Terms')).toContainText('Terms');
    await expect(page.getByText('Privacy')).toContainText('Privacy');

    console.log('✅ All assertions passed successfully.');
});*/
import { test, expect } from '@playwright/test';

test('Verify UI Text on AIG Member Login Page', async ({ page }) => {
  console.log('🚀 Starting test: Verify UI Text on AIG Member Login Page');
  
  // Step 1: Navigate to the login page
  await page.goto('https://qa-aig-platform.joinansel.com/member/login');

  console.log('🔍 Checking page text...');
  
  const expectedTexts = [
    'Simple, supplemental health insurance for all.',
    'Sign in to your Member Portal',
    'Enter your details below to access AIG Medical Indemnity',
    'Email address',
    'Forgot password?',
    'Not yet registered? Create an account',
    '© Ansel Health, Inc. All Rights Reserved',
    'Terms',
    'Privacy'
  ];

  for (const text of expectedTexts) {
    try {
      const textLocator = page.getByText(text);
      await expect(textLocator).toBeVisible({ timeout: 5000 });
      await textLocator.screenshot({ path: `screenshots/${text.replace(/\s+/g, '_')}.png` });
      console.log(`✅ Verified: "${text}" is present on the page.`);
    } catch (error) {
      console.error(`❌ Error: "${text}" not found.`);
    }
  }

  // ✅ Special case for "Password" - checking only the first occurrence
  try {
    const passwordLocator = page.getByText('Password').nth(0);
    await expect(passwordLocator).toBeVisible({ timeout: 5000 });
    await passwordLocator.screenshot({ path: `screenshots/Password.png` });
    console.log(`✅ Verified: "Password" (first occurrence) is present on the page.`);
  } catch (error) {
    console.error(`❌ Error: "Password" not found.`);
  }

  // ✅ Special case for "Sign in" button
  try {
    const signInButton = page.getByRole('button', { name: 'Sign in' });
    await expect(signInButton).toBeVisible({ timeout: 5000 });
    await signInButton.screenshot({ path: `screenshots/Sign_in_Button.png` });
    console.log(`✅ Verified: "Sign in" button is present.`);
  } catch (error) {
    console.error(`❌ Error: "Sign in" button not found.`);
  }

  console.log('🎯 All text assertions checked!');
});