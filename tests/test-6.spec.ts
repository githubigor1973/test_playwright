import { test, expect } from '@playwright/test';

test('Generate, Assert, and Use Dynamic Enrollment Link', async ({ page }) => {
  console.log('🚀 Starting test: Generate and Assert Enrollment Link');

  // Step 1: Navigate to Salesforce Login Page
  await page.goto('https://brella--qa.sandbox.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbrella--qa.sandbox.lightning.force.com%252Flightning%252Fr%252FLead%252F00QQL00000G25aT2AR%252Fview');

  // Step 2: Log in to Salesforce
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  // Step 3: Navigate to Lead Details Page
  await page.waitForTimeout(5000); // Ensures page loads completely
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Lead/00QQL00000G25aT2AR/view');

  // Step 4: Click on "Details" tab if necessary
  await page.getByRole('tab', { name: 'Details' }).click();

  // Step 5: Click "Get The Link" button
  await page.getByRole('button', { name: 'Get The Link' }).click();

  // Step 6: Locate the correct `<textarea>` field containing the enrollment link
  const linkLocator = page.locator('textarea.slds-textarea').nth(1); // Ensure we target the right one

  // Wait for the textarea to be visible and contain a value
  await linkLocator.waitFor({ state: 'visible', timeout: 5000 });

  let enrollmentLink = '';
  for (let i = 0; i < 5; i++) { // Retry extraction up to 5 times
    enrollmentLink = await linkLocator.inputValue();
    if (enrollmentLink.trim().length > 0) break; // Stop if value is found
    await page.waitForTimeout(1000);
  }

  // Step 7: Assert the extracted link is valid
  console.log(`🔗 Extracted Enrollment Link: ${enrollmentLink}`);

  // Ensure the link is not empty
  expect(enrollmentLink.trim().length).toBeGreaterThan(0);

  // Ensure the link follows the expected URL pattern
  expect(enrollmentLink).toMatch(/^https:\/\/qa-ansel-platform\.joinansel\.com\/enrollment\/\?token=.*/);

  console.log('✅ Enrollment link is valid.');

  // Step 8: Navigate to the extracted link
  await page.goto(enrollmentLink, { waitUntil: 'domcontentloaded' });

  console.log('🎯 Successfully navigated to the generated enrollment link!');
});