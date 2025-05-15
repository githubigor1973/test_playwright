import { test, expect } from '@playwright/test';
import createCSV from './utils/generate-csv';

test('📤 Upload CSV file with random data', async ({ page }) => {
  // Generate the file
  const filePath = await createCSV(15); // 15 rows

  // Login to your site first
  await page.goto('https://your-site.com/login');
  await page.getByLabel('Username').fill('your@email.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Log In' }).click();

  // Navigate to the upload section
  await page.getByText('Upload CSV').click();

  // Upload file
  const fileInput = await page.locator('input[type="file"]');
  await fileInput.setInputFiles(filePath);

  console.log('✅ File uploaded!');
});