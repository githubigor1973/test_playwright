import { test, expect } from '@playwright/test';

test('Salesforce contact test with external link', async ({ page }) => {
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

  console.log('Clicking the external link (https://playwright.dev/)...');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'https://playwright.dev/' }).click();
  const page1 = await page1Promise;

  console.log('Verifying that Playwright site loaded and heading is visible...');
  await expect(page1.getByRole('heading', { name: 'Playwright enables reliable' }).locator('span')).toBeVisible();

  console.log('✅ Test completed successfully!');

const hexColor = await page1.locator('text=Playwright enables reliable >> span').evaluate(test =>
  '#' + [...(getComputedStyle(test).color.match(/\d+/g) || [])]
    .slice(0, 3)
    .map(x => (+x).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
);

console.log('Hex color:', hexColor);

// Use `page1` instead of `page`
const typeScriptLink = page1.getByRole('link', { name: 'TypeScript' });

await expect(typeScriptLink).toBeVisible(); // Wait for visibility

const rgbColor = await typeScriptLink.evaluate(el =>
  getComputedStyle(el).color
);

// Convert RGB to HEX
const rgbArray = rgbColor.match(/\d+/g)?.map(Number);
if (!rgbArray || rgbArray.length < 3) {
  console.error('❌ Could not extract RGB values');
  return;
}

const [r, g, b] = rgbArray;
const actualHex = `#${[r, g, b]
  .map(x => x.toString(16).padStart(2, '0'))
  .join('')
  .toUpperCase()}`;

const expectedHex = '#1A7E1F';

console.log('🎯 Expected:', expectedHex);
console.log('🎨 Found:   ', actualHex);

expect(actualHex).toBe(expectedHex);


});