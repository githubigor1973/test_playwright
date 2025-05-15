import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).type('igor.pejin+ba280201037@joinansel.com', { delay: 30 });
 //await page.type('input[placeholder="Enter your email"]', 'igor.pejin+ba280201037@joinansel.com', {delay: 100 });
  await page.locator('input[name="password"]').type('Demo123456', { delay: 30 });
  expect(await page.getByRole('heading', { name: 'Sign in to your Member Portal' })).toBeVisible();
  await expect(page.locator('.memberLoginContentText')).toHaveText('Enter your details below to access to Ansel');
  expect(await page.getByText('Not yet registered? Create an')).toBeVisible();


  await page.locator('a', { hasText: 'Forgot password' }).click();

    //await page.getByRole('button', { name: 'Sign in' }).click();
});