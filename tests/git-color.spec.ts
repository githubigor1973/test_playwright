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
  /* const link = page.getByRole('link', { name: 'SalesforceMarketingCloud' });

  // Wait for the element to be visible
  await expect(link).toBeVisible();

  // Get the color value (computed CSS)
  const color = await link.evaluate(el => getComputedStyle(el).color);
  console.log('🎨 Found color:', color);

  // Optional: Compare it to expected color
  expect(color).toBe('rgb(9, 105, 218)');  */
  const link = page.getByRole('link', { name: 'SalesforceMarketingCloud' });

// Wait for the element to be visible
await expect(link).toBeVisible();

// Get the computed RGB color
const color = await link.evaluate(el => getComputedStyle(el).color);
console.log('🎨 Found RGB color:', color);

// Convert RGB to HEX
const rgb = color.match(/\d+/g); // Extract RGB values from string
const hex = rgb
  ? `#${(
      rgb.slice(0, 3)
        .map(val => Number(val).toString(16).padStart(2, '0'))
        .join('')
    ).toUpperCase()}`
  : null;

/* if (hex) {
  console.log('🔷 Converted HEX color:', hex);

  // Optional: Validate the hex color
  expect(hex).toBe('#0969DA'); // Replace with expected HEX if needed
} else {
  console.error('Failed to convert RGB to HEX: RGB value is null');
} */

console.log('🔷 Converted HEX color:', hex);

// Optional: Validate the hex color
expect(hex).toBe('#0969DA'); // Replace with expected HEX if needed
  
});

