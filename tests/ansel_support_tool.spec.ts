/* import { test, expect } from '@playwright/test';

test('Extract token URL and set password', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('ipejin@brexus.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('NupMOalbonJzvgl51nSnm!');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Email List' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('igor.pejin+oncju1ge@joinansel.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: '1264284' }).click( { force: true });

  // Scroll if needed
  for (let i = 0; i < 10; i++) await page.mouse.wheel(0, 300);

  // Click "Create account"
  await page.getByRole('button', { name: 'Create account' }).click();

  // Wait for the message to appear that contains the link
  const linkElement = await page.waitForSelector('a[href*="/employer/setPassword"]', { timeout: 5000 });
  const resetUrl = await linkElement.getAttribute('href');

  console.log('Extracted reset URL:', resetUrl);

  // Navigate directly to the password setup page
  if (resetUrl) {
    await page.goto(resetUrl);
    await page.locator('input[name="password"]').fill('Demo123456');
    await page.locator('input[name="confirmPassword"]').fill('Demo123456');
    //await page.getByText('I accept the Terms and Privacy').click({ force: true });
    //await page.getByRole('button', { name: 'Continue' }).click();
  } else {
    throw new Error('Password setup link not found.');
  }
});
  */


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


/* import { test, expect, request as playwrightRequest } from '@playwright/test';

test('Call allowSkip with token, then re-login to verify MFA skip', async ({ page, request }) => {
  // 🔐 STEP 1: Paste your valid authToken (after successful MFA login)
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNDMsIm1pbnV0ZXNUaW1lb3V0Ijo2MCwiY3JlYXRpb25UaW1lIjoiMjAyNS0wNC0yOVQyMDo1OTozNC41NDE2MTI4NzNaIn0.E-MsvjaTGTsj6VankkKjhK3hdd_8GROhRNATMG8WDwU'; // <-- your full token here

  const username = 'ipejin@brexus.com';
  const password = 'NupMOalbonJzvgl51nSnm!';
  const credentialTypeCode = 'SUPPORT';

  // STEP 2: Call allowSkip using authToken
  const apiContext = await playwrightRequest.newContext({
    baseURL: 'https://qa-ansel-platform.joinansel.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'authToken': authToken
    }
  });

  const response = await apiContext.post('/support/api/v1/tools/mfa/allowSkip', {
    data: { username, credentialTypeCode }
  });

  const result = await response.text();
  console.log('✅ allowSkip response:', response.status(), result);
  expect(response.ok()).toBeTruthy();

  // STEP 3: Try logging in again via browser (should skip MFA)
  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('🧪 Login submitted — check if MFA is skipped.');
  await page.pause(); // 👈 keeps browser open for inspection
}); */