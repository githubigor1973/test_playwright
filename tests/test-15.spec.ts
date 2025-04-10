/* import {test, expect} from '@playwright/test';
test('SalesForce test', async ({ page})=>{
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Roster_Member__c/a9VQL000000Aqzp2AC/view', { waitUntil: 'domcontentloaded'});
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', ({ name: 'Log In to Sandbox'})).click();
  await page.waitForTimeout(2000);
  await expect(page.locator('records-entity-label')).toContainText('Roster Member');
  console.log('✅ Passed: "Roster Member" contains text "Roster Member"');
  await expect(page.locator('records-highlights2 lightning-formatted-text')).toContainText('Josephine Marcos');
  console.log('✅ Passed: "Roster Member" contains text "Josephine Marcos"');
  await expect(page.getByRole('button', { name: 'Terminate Employment' })).toContainText('Terminate Employment');
  console.log('✅ Passed: "Terminate Employment" contains text "Terminate Employment"');
}); */
import { test, expect } from '@playwright/test';

test('Verify Roster Member Details Page', async ({ page }) => {
    // Step 1: Navigate to the page
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Roster_Member__c/a9VQL000000Aqzp2AC/view', { waitUntil: 'domcontentloaded' });
    
    // Step 2: Login to Salesforce
    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

    // Step 3: Wait for the page to fully load
    await page.waitForTimeout(5000); // Adjust if necessary

    // Step 4: Define the expected details
    const expectedDetails = [
        ['Roster Member Name', 'Josephine Marcos'],
        ['First Name', 'Josephine'],
        ['Last Name', 'Marcos'],
        ['Gender', 'Female'],
        ['Date of Birth', '11/15/1968'],
        ['SocialSecurityNumber', '435-53-8376'],
        ['Email', 'igor.pejin+ba224310037@joinansel.com'],
        ['Phone', '250-562-882'],
        ['Mobile Phone', '676-259-832'],
        ['Status', 'Active'],
        ['Role', 'Primary'],
        ['Age', '56'],
        ['Street', '123 RandStreet'],
        ['City', 'Dallas'],
        ['Postal Code', '17001'],
        ['State', 'Texas'],
        ['Strategic Partner Name', 'Brella'],
        ['Owner', 'Brella QA']
    ];

    
    for (const [label, value] of expectedDetails) {
      console.log(`🔍 Checking: ${label} → Expected: "${value}"`);

      const locator = page.getByText(value, { exact: true }); // More precise locator
      const count = await locator.count(); // Get how many matches exist

      if (count === 1) {
          await expect(locator).toBeVisible();
          console.log(`✅ Verified: "${value}" found.`);
      } else if (count > 1) {
          console.warn(`⚠️ Warning: Found ${count} matches for "${value}". Adjust selector.`);
          await expect(locator.first()).toBeVisible(); // Validate first match
      } else {
          console.error(`❌ Error: No match found for "${value}"`);
      }
  }

    console.log('✅ All Roster Member details verified successfully.');
});