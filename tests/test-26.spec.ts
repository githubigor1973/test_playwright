import { test, expect } from '@playwright/test';
import { config } from './test.config'; // adjust the path if needed

test('🔐 Login to Salesforce Contacts', async ({ page }) => {
  console.log('🌐 Navigating to Salesforce Contacts page...');
  await page.goto(config.url);

  console.log('📝 Logging in...');
  await page.getByRole('textbox', { name: 'Username' }).fill(config.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);

  await page.getByRole('button', { name: 'Log In' }).click();
});