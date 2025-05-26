import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
  //await page.getByRole('textbox', { name: 'Enter your email' }).fill('');
  //await page.getByPlaceholder('Enter your email').fill('test@example.com');
const heading = page.getByRole('heading', { name: 'Sign in to your Member Portal' });
await expect(heading).toHaveText('Sign in to your Member Portal');  //
  //await page.locator('input[name="email"]').fill('test@example.com');
  await page.getByPlaceholder('Enter your email').fill('test@example.com');
  //await page.locator('input[name="password"]').fill('test1234'
  //await page.locator('input[name="password"]').fill('test1234');
  //await page.fill('input[name="password"]', 'test1234');
  await type.page('type"password"', 'test1234');
  //await page.locator('.ui.fluid.primary.button').click();
  //await page.getByRole('button', { name: 'Sign in'}).click();
});