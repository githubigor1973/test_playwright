/* 
import { test, expect } from '@playwright/test';

test('Extract token URL and set password in same page', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('ipejin@brexus.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('NupMOalbonJzvgl51nSnm!');
  await page.getByRole('button', { name: 'Login' }).click();


  await page.getByRole('link', { name: 'Email List' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('table a').first().click();

  //await page.getByRole('textbox', { name: 'email' }).fill('igor.pejin+oncju1ge@joinansel.com');
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByRole('link', { name: '1264284' }).click({ force: true });

  // Scroll to ensure all content loads (optional)
  for (let i = 0; i < 10; i++) await page.mouse.wheel(0, 300);

  // Wait for the password link to appear (no need to click "Create account")
  const linkElement = await page.waitForSelector('a[href*="/employer/setPassword"]', { timeout: 5000 });
  const resetUrl = await linkElement.getAttribute('href');

  console.log('Extracted reset URL:', resetUrl);

  // Navigate to the password setup page directly
   if (resetUrl) {
    await page.goto(resetUrl);
    await page.locator('input[name="password"]').fill('Demo123456');
    await page.locator('input[name="confirmPassword"]').fill('Demo123456');
    await page.locator('input[type="checkbox"]').check({ force: true });
    //await page.getByRole('button', { name: 'Continue' }).click();
  } else {
    throw new Error('Password setup link not found.');
  } 
});


test('API test POST', async ({ request}) =>{
    const response = await request.post('https://qa-ansel-platform.joinansel.com/api/support/v1/listMyPermissions', {
        headers: {
            'Authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNDMsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNVQwNjowODoyOC4xMTkxNzk2ODRaIiwiY3VzdG9tRGF0YSI6e319.YGtmHXK51ErGVVxT5SQ5dE_Wn5ioyM_c1qjGZEZLp2U',
            'Password': 'aeMa0buetoaW',
            'Content-Type': 'application/json'

        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('API data',data);
    console.log('Token:', data.token);
    const token = data.token;
// Use this token in Authorization headers in another test
    
}); */
import { test, expect, request } from '@playwright/test';

test('Full flow: UI login + API MFA token login', async ({ page, request: uiRequest }) => {
  test.setTimeout(120_000);

  // 🔐 Replace these:
  const email = 'ipejin@brexus.com';
  const password = 'NupMOalbonJzvgl51nSnm!';
  const mfaToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNDMsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNS0wNVQwNjozNDowMS43NTA2NjY5ODdaIn0.y5kQ_taGMvT0saUR854S32XCydbCPfb_CF8Zwo1SWgY';

  // Step 1: Log into Support UI
  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 2: Login via MFA API with known token
  const response = await uiRequest.post('https://qa-ansel-platform.joinansel.com/support/mfa', {
    headers: {
      'Content-Type': 'application/json',
      'Mfaauthtoken': mfaToken,
      'Password': password
    }
  });

  expect(response.status()).toBe(200);
  
});