import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/camrobert/SalesforceMarketingCloud/tree/main/SQL/Introduction%20to%20SQL');
  await page.waitForTimeout(1000);
  //await page.getByRole('link', { name: 'camrobert'}).click();
  await page.locator('#repository-container-header').getByRole('link', { name: 'camrobert' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Repositories' }).click();
  //await page.getByAltText("View camrobert's full-sized avatar").click();
  await page.getByRole('link', { name: 'SalesforceMarketingCloud' })
  
  const link = page.getByRole('link', { name: 'SalesforceMarketingCloud' });

// Wait for the element to be visible
await expect(link).toBeVisible();

const color = await link.evaluate(el => getComputedStyle(el).color);
console.log('🎨 RGB:', color);
const hex = color.replace(/[^\d,]/g, '')  // remove non-digits and non-commas
  .split(',')                             // split into R, G, B
  .slice(0, 3)                            // just take RGB (ignore alpha)
  .map(x => (+x).toString(16).padStart(2, '0'))  // convert to hex
  .join('')
  .toUpperCase();

console.log('🔷 HEX:', `#${hex}`);
expect(`#${hex}`).toBe('#0969DA'); // adjust HEX if needed

 /* const link1 = await page.getByRole('listitem').filter({ hasText: 'SFMC-with-me Public Resources' }).locator('span').nth(2);
const color1 = await link1.evaluate(el => getComputedStyle(el).color);
console.log('🎨 RGB:', color1);  */
const dot = page.getByRole('listitem')
  .filter({ hasText: 'SFMC-with-me Public Resources' })
  .locator('.repo-language-color');

const bgColor = await dot.evaluate(el => el.style.backgroundColor);
console.log('🎯 Dot color:', bgColor); // Should log: rgb(227, 76, 38)
const hex2 = bgColor.replace(/[^\d,]/g, '')  // remove non-digits and non-commas
  .split(',')                             // split into R, G, B
  .slice(0, 3)
  .map(x => (+x).toString(16).padStart(2, '0'))  // convert to hex
  .join('')
  .toUpperCase();

console.log('🔷 HEX:', `#${hex2}`);
  
});

