import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Verify Salesforce Contract Page Elements', async ({ page }) => {
  console.log('🚀 Starting test: Verify Salesforce Contract Page');

  // Step 1: Navigate to the Salesforce page (replace with actual URL)
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000HtrOUYAZ/view');

  // Step 2: Log in to Salesforce
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  // Step 2: Verify Contract Details Section
  await page.waitForTimeout(5000);

  await expect(page.getByTitle('In Approval Process')).toBeVisible();
  await expect(page.getByText('Contract Term (months)', { exact: true })).toBeVisible();
  //await expect(page.locator('text=Policy number LB-10003326')).toBeVisible();
  console.log('✅ Contract details are correct.');

  // Step 3: Verify "Eligible Roster Members" Table
  const rosterMembers = [
    'Adriana Adaline',
    'Aden Dior',
    'Dax Hank',
    'Edith Jamie',
    'Andrew Joanna',
    'Bonnie Onyx'
  ];

  for (const member of rosterMembers) {
    await expect(page.locator(`text=${member}`)).toBeVisible();
  }
  console.log('✅ All Roster Members are present.');

  // Step 4: Check "Get The Link" Button
  const getTheLinkButton = page.getByRole('button', { name: 'Get The Link' });
  await expect(getTheLinkButton).toBeVisible();
  console.log('✅ "Get The Link" button is visible.');

  // Step 5: Ensure "Mark Status as Complete" Button is Visible
  const markCompleteButton = page.getByRole('button', { name: 'Mark Status as Complete' });
  await expect(markCompleteButton).toBeVisible();
  console.log('✅ "Mark Status as Complete" button is visible.');

  console.log('🎯 All checks passed successfully!');
});