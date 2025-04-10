/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ansel2-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fansel2-dev-ed.develop.lightning.force.com%252Flightning');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Opportunities' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('');
  await page.getByRole('textbox', { name: '*Opportunity Name' }).click();
  await page.getByRole('textbox', { name: '*Opportunity Name' }).fill('Testing');
  await page.getByRole('combobox', { name: 'Account Name' }).click();
  await page.getByText('Edge Communications').click();
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.getByRole('option', { name: 'New Customer' }).locator('span').nth(1).click();
  await page.getByRole('combobox', { name: 'Lead Source' }).click();
  await page.getByRole('textbox', { name: 'Order Number' }).click();
  await page.getByRole('textbox', { name: 'Order Number' }).fill('12345678');
  await page.getByRole('textbox', { name: 'Tracking Number' }).click();
  await page.getByRole('textbox', { name: 'Tracking Number' }).fill('1234');
  await page.getByRole('textbox', { name: 'Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('10000');
  await page.getByRole('textbox', { name: '*Close Date' }).click();
  await page.getByRole('button', { name: 'Today' }).click();
  await page.getByRole('textbox', { name: 'Next Step' }).click();
  await page.getByRole('textbox', { name: 'Next Step' }).fill('demo');
  await page.getByRole('combobox', { name: 'Stage' }).click();
  await page.getByText('Prospecting').click();
  await page.getByRole('combobox', { name: 'Delivery/Installation Status' }).click();
  await page.getByRole('option', { name: 'In progress' }).locator('span').nth(1).click();
  await page.getByRole('button', { name: 'Save', exact: true }).click();
}); */

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  console.log('🔗 Navigating to Salesforce login page...');
  await page.goto('https://ansel2-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fansel2-dev-ed.develop.lightning.force.com%252Flightning');

  console.log('📝 Filling in username...');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');

  console.log('🔒 Filling in password...');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');

  console.log('🚪 Clicking Log In...');
  await page.getByRole('button', { name: 'Log In' }).click();

  console.log('📂 Navigating to Opportunities tab...');
  await page.getByRole('link', { name: 'Opportunities' }).click();

  await page.waitForTimeout(500);

  console.log('🆕 Clicking New Opportunity...');
  await page.getByRole('button', { name: 'New' }).click();

  console.log('💼 Clearing Amount field...');
  await page.getByRole('textbox', { name: 'Amount' }).fill('');

  console.log('🖊️ Filling Opportunity Name...');
  await page.getByRole('textbox', { name: '*Opportunity Name' }).click();
  await page.getByRole('textbox', { name: '*Opportunity Name' }).fill('Testing');

  console.log('🏢 Selecting Account Name...');
  await page.getByRole('combobox', { name: 'Account Name' }).click();
  await page.getByText('Edge Communications').click();

  console.log('🧮 Selecting Type...');
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.getByRole('option', { name: 'New Customer' }).locator('span').nth(1).click();

  console.log('🔍 Selecting Lead Source...');
  await page.getByRole('combobox', { name: 'Lead Source' }).click();

  console.log('📦 Filling Order Number...');
  await page.getByRole('textbox', { name: 'Order Number' }).click();
  await page.getByRole('textbox', { name: 'Order Number' }).fill('12345678');

  console.log('📦 Filling Tracking Number...');
  await page.getByRole('textbox', { name: 'Tracking Number' }).click();
  await page.getByRole('textbox', { name: 'Tracking Number' }).fill('1234');

  console.log('💰 Filling Amount...');
  await page.getByRole('textbox', { name: 'Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('10000');

  console.log('📅 Selecting Close Date...');
  await page.getByRole('textbox', { name: '*Close Date' }).click();
  await page.getByRole('button', { name: 'Today' }).click();

  console.log('📝 Filling Next Step...');
  await page.getByRole('textbox', { name: 'Next Step' }).click();
  await page.getByRole('textbox', { name: 'Next Step' }).fill('demo');

  console.log('🎯 Selecting Stage...');
  await page.getByRole('combobox', { name: 'Stage' }).click();
  await page.getByText('Prospecting').click();

  console.log('🚚 Selecting Delivery/Installation Status...');
  await page.getByRole('combobox', { name: 'Delivery/Installation Status' }).click();
  await page.getByRole('option', { name: 'In progress' }).locator('span').nth(1).click();

  console.log('💾 Saving Opportunity...');
  await page.getByRole('button', { name: 'Save', exact: true }).click();

  console.log('✅ Test completed!');
});