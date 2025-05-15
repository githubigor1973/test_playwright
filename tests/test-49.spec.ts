 // NupMOalbonJzvgl51nSnm
 
/*  import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
await page.getByRole('textbox', { name: 'Username' }).fill('ipejin@brexus.com');
await page.getByRole('textbox', { name: 'Password' }).fill('NupMOalbonJzvgl51nSnm!');
await page.getByRole('button', { name: 'Login' }).click();

}); 
 */


import { test, expect, request as playwrightRequest } from '@playwright/test';

test('Login and call allowSkip with session cookies', async ({ browser }) => {
  const username = 'ipejin@brexus.com';
  const password = 'NupMOalbonJzvgl51nSnm!';
  const credentialTypeCode = 'SUPPORT';

  // 1. Launch browser and log in
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Manually enter MFA code if prompted (pause here)
  await page.pause(); // Wait for MFA entry if required

  // 3. After login, extract cookies
  const cookies = await context.cookies();

  // 4. Create an API request context with those cookies
  const apiRequestContext = await playwrightRequest.newContext({
    baseURL: 'https://qa-ansel-platform.joinansel.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Cookie': cookies.map(c => `${c.name}=${c.value}`).join('; ')
    }
  });

  // 5. Call allowSkip
  const response = await apiRequestContext.post('/support/api/v1/tools/mfa/allowSkip', {
    data: { username, credentialTypeCode }
  });

  const text = await response.text();
  console.log('allowSkip response:', response.status(), text);
  expect(response.ok()).toBeTruthy();
});