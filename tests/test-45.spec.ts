import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://brella--qa.sandbox.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbrella--qa.sandbox.lightning.force.com%252Flightning%252Fo%252FContract%252Flist%253FfilterName%253D00B6g00000AFY47');


  
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search Contracts and more' }).fill('jakubow');
  await page.getByLabel(',').getByText('00011263').click();
});