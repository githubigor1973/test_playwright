import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //await page.getByRole('button', {name: 'Search'}).click();
  //await page.getByRole('searchbox').fill('playwright testing');
  //await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('id=user-name').fill('standard_user');
  await page.getByPlaceholder('Username').fill('testing');
   await page.getByPlaceholder('Password').fill('testingdemo');
  
});