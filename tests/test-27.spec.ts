import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  
  //await page.getByText('Sign up').first().click();  // works
  //await page.locator('header').getByText('Sign up').click(); // works
  //await page.getByText('Sign up').nth(1).click(); // works
  //await page.locator('a.HeaderMenu-link--sign-in').click(); // works
  await page.locator('a.HeaderMenu-link.HeaderMenu-link--sign-in').click(); // works
  //await page.getByText('Sign in with a passkey').click(); // works
  //await page.locator('span').getByText('Sign in with a passkey').click(); // works
  //await page.getByRole('button', { name: 'Sign in with a passkey' }).click(); // works
  //await page.locator('button:has-text("Sign in with a passkey")').click();
  //await page.getByText('Sign in').click();
  await page.getByLabel('Homepage', { exact: true}).click();

});