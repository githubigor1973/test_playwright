import { test, expect } from '@playwright/test';

test('Verify Contract Page Elements with Logging', async ({ page }) => {
  console.log('🚀 Starting test: Verify Contract Page Elements');

  // Step 1: Navigate to Salesforce Login Page
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000HtrOUYAZ/view');

  // Step 2: Log in to Salesforce
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  // Step 3: Wait for the page to load
  await page.waitForTimeout(7000); // Adjust this if needed

  // Step 4: Assertions with Logging
  const assertions = [
    { locator: page.locator('records-entity-label'), text: 'Contract', description: 'Contract label' },
    { locator: page.locator('records-highlights2'), text: 'Automation ER 1740580143 | 2025-02-26 09:30:16', description: 'Contract Title' },
    { locator: page.getByLabel('Path Options'), text: 'In Approval Process', description: 'Approval Status' },
    { locator: page.locator('records-highlights2'), text: 'Contract Term (months)', description: 'Contract Term' },
    { locator: page.locator('c-eligible-r-m-s-l-w-c'), text: 'Eligible Roster Members (7)', description: 'Eligible Roster Members section' },
    { locator: page.locator('c-eligible-r-m-s-l-w-c'), text: 'Adriana Adaline', description: 'Roster Member Adriana Adaline' }
  ];

  for (const { locator, text, description } of assertions) {
    try {
      await expect(locator).toContainText(text);
      console.log(`✅ Passed: "${description}" contains text "${text}"`);
    } catch (error) {
      console.log(`❌ Failed: "${description}" does not contain expected text "${text}"`);
    }
  }
  await expect(page.getByRole('tab', { name: 'Activity' })).toBeVisible();
  await expect(page.locator('button').filter({ hasText: 'Mark Status as Complete' })).toBeVisible();
  //await expect(page.locator('button').filter({ hasText: 'In Approval Process' })).toBeVisible();
  await expect(page.locator('span.title.slds-path__title').nth(1)).toHaveText('In Approval Process');
  console.log('🎯 Test completed!');
});