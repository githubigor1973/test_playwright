/* import { test, expect } from '@playwright/test';

// ✅ Helper to verify CSS color


test('test', async ({ page }) => {
  console.log('Navigating to Salesforce login URL...');
  await page.goto('https://ansel2-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fansel2-dev-ed.develop.lightning.force.com%252Flightning');

  console.log('Filling in username...');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');

  console.log('Filling in password...');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');

  console.log('Clicking Log In...');
  await page.getByRole('button', { name: 'Log In' }).click();

  console.log('Navigating to John Bond contact record...');
  await page.getByRole('link', { name: 'John Bond' }).click();

  console.log('Switching to Details tab...');
  await page.getByRole('tab', { name: 'Details' }).click();

  console.log('Waiting for half a second to ensure page stability...');
  await page.waitForTimeout(500);

  console.log('Clicking the external Playwright link...');
  await page.getByRole('link', { name: 'https://playwright.dev/' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Get started' }).click();

}); */

 import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
  console.log('Navigating to Salesforce login URL...');
  await page.goto('https://ansel2-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fansel2-dev-ed.develop.lightning.force.com%252Flightning');

  console.log('Filling in username...');
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');

  console.log('Clicking Log In...');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search').fill('Contacts');
  


  console.log('Navigating to John Bond contact record...');
  await page.getByRole('link', { name: 'John Bond' }).click();

  console.log('Switching to Details tab...');
  await page.getByRole('tab', { name: 'Details' }).click();

  console.log('Waiting a moment...');
  await page.waitForTimeout(500);

  console.log('Opening Playwright site (wait for popup)...');
  
  const popupPromise = page.waitForEvent('popup');
  const popupTest = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://playwright.dev/' }).click();
  const popup = await popupPromise;
  console.log('Switching to popup and clicking Get started...');
  await popup.waitForLoadState();
  await popup.getByRole('link', { name: 'Get started' }).click();

  console.log('✅ Get started link clicked in new tab!');
  await popup.getByRole('link', { name: 'How to install Playwright' }).click();  
}); 
