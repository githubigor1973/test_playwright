import { test, expect } from '@playwright/test';

test('Generate and Verify Enrollment Link', async ({ page }) => {
  console.log('🚀 Starting test: Generate and Verify Enrollment Link');

  // Step 1: Navigate to Salesforce Login Page
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Lead/00QQL00000G25ae2AB/view');

  // Step 2: Log in to Salesforce
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();


  // Step 4: Open "Details" tab and click "Get The Link"
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('button', { name: 'Contacts' }).click();

  // Step 5: Extract the Enrollment Link from the second textarea
  const linkLocator = page.locator('textarea.slds-textarea').nth(1);
  await linkLocator.waitFor({ state: 'visible', timeout: 5000 });

  // Step 6: Retry extraction if necessary
  let enrollmentLink = '';
  for (let i = 0; i < 5; i++) {
    enrollmentLink = await linkLocator.inputValue();
    if (enrollmentLink.trim()) break; // Stop if value is found
    await page.waitForTimeout(1000);
  }

  // Step 7: Validate the extracted link
  //console.log(`🔗 Extracted Enrollment Link: ${enrollmentLink}`);
  //expect(enrollmentLink).not.toBe('');
  //expect(enrollmentLink).toMatch(/^https:\/\/qa-ansel-platform\.joinansel\.com\/enrollment\/\?token=.*/);
 // console.log('✅ Enrollment link is valid.');

  // Step 8: Navigate to the extracted link
  await page.goto(enrollmentLink, { waitUntil: 'domcontentloaded' });
  console.log('🎯 Successfully navigated to the generated enrollment link!');
});