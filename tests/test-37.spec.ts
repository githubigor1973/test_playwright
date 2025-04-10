import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ansel2-dev-ed.develop.lightning.force.com/lightning/o/Contact/list?filterName=00BWU00000QUsgp2AD');
  await page.getByRole('textbox', { name: 'Username'}).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password'}).fill('Test123456');
  await page.getByRole('button', { name: 'Log in'}).click();
  await page.waitForTimeout(2000);
await page.getByRole('link', { name: 'Contacts'}).click();  
await page.getByRole('button', { name: 'New'}).click();
await page.waitForTimeout(2000);
//await expect(page.getByText('Contact Owner')).toBeVisible();
await expect(page.locator('#brandBand_4').getByText('Contact Owner')).toBeVisible();
await expect(page.getByText('*Name')).toBeVisible();
await expect(page.getByText('Salutation')).toBeVisible();
await expect(page.getByText('First Name')).toBeVisible();

});