/* import { test, expect } from '@playwright/test';

test('Click on Irene Smith and open dropdown menu', async ({ page }) => {
    // Navigate to the Salesforce page
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contact/003QL00000YnP8VYAV/view', { waitUntil: 'domcontentloaded' });

    // Log in to Salesforce
    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

    // Click on "Irene Smith" link
    await page.getByRole('link', { name: 'Irene Smith' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Show more actions' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Add Birth/Adoption' }).click();
    await page.getByRole('textbox', { name: 'QLE Received Date' }).click();
    //await page.waitForTimeout(7000);

    await page.getByRole('button', { name: '19' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: '*First Name' }).click();
    await page.getByRole('textbox', { name: '*First Name' }).fill('Baby');
    await page.getByRole('textbox', { name: '*Last Name' }).click();
    await page.getByRole('textbox', { name: '*Last Name' }).fill('Demo');
    await page.getByRole('textbox', { name: '*Date of Birth' }).click();
    await page.getByLabel('-03-01').getByRole('button', { name: '1' }).click();
    await page.getByRole('combobox', { name: 'Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).locator('span').nth(1).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByText('Add a spouse with this child').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: '*First Name' }).click();
    await page.getByRole('textbox', { name: '*First Name' }).fill('Mark');
    await page.getByRole('textbox', { name: '*Last Name' }).click();
    await page.getByRole('textbox', { name: '*Last Name' }).fill('Demo');
    await page.getByRole('textbox', { name: '*Date of Birth' }).click();
    await page.getByLabel('Pick a Year').selectOption('2002');
    await page.getByRole('button', { name: '11' }).click();
    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'Spouse' }).locator('span').nth(1).click();
    await page.getByRole('combobox', { name: 'Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).locator('span').nth(1).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
        console.log('✅ Successfully clicked on Irene Smith and opened the dropdown menu.');
}); */

import { test, expect } from '@playwright/test';

test('Click on Irene Smith and open dropdown menu', async ({ page }) => {
    console.log('🚀 Starting Test: Click on Irene Smith and open dropdown menu');

    // Navigate and log in
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Roster_Member__c/a9VQL0000005tn92AA/view', { waitUntil: 'domcontentloaded' });
    console.log('🔍 Navigated to Salesforce login page.');

    // Login Process
    await page.fill('input[name="username"]', 'qa@joinansel.com.qa');
    await page.fill('input[name="pw"]', 'q8xPmBoudN1W');
    await page.click('input[name="Login"]');

    // Open the dropdown menu
    await page.getByRole('button', { name: 'Show more actions' }).click();
    console.log('📌 Opened the dropdown menu.');

    // Click "Add Birth/Adoption"
    await page.waitForSelector('text="Add Birth/Adoption"', { timeout: 5000 });
    await page.click('text="Add Birth/Adoption"');
    console.log('🍼 Selected "Add Birth/Adoption".');

    // Select QLE Received Date
    await page.getByRole('textbox', { name: 'QLE Received Date' }).click();
    await page.getByRole('button', { name: '19' }).click();

    console.log('📅 Selected QLE Received Date.');

    // Proceed to next step
    await page.click('button:text("Next")');

    // Fill in baby details
    await page.getByRole('textbox', { name: '*First Name' }).fill('Baby');
    await page.getByRole('textbox', { name: '*Last Name'}).fill('Demo');
    // Select Date of Birth
await page.getByRole('textbox', { name: '*Date of Birth' }).click();
await page.getByLabel('-03-01').getByRole('button', { name: '1' }).click();

// Select Gender
await page.getByRole('combobox', { name: 'Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).locator('span').nth(1).click();
await page.getByRole('button', { name: 'Next' }).click();
    console.log('📅 Selected Baby Date of Birth.');

    await page.getByRole('button', { name: 'Yes' }).click();
    console.log('👶 Successfully added baby details.');

    // Add spouse option
    await page.waitForSelector('text="Add a spouse with this child"', { timeout: 2000 });
    await page.click('text="Add a spouse with this child"');
    await page.click('button:text("Next")');
    console.log('💑 Adding spouse details.');

   // Fill in First Name and Last Name
await page.getByRole('textbox', { name: '*First Name' }).fill('Mark');
await page.getByRole('textbox', { name: '*Last Name' }).fill('Demo');

// Select Date of Birth
await page.getByRole('textbox', { name: '*Date of Birth' }).click();
await page.getByLabel('Pick a Year').selectOption('2002');
await page.getByRole('button', { name: '11' }).click();

// Select Role and Gender
await page.getByRole('combobox', { name: 'Gender' }).click();
    await page.getByRole('option', { name: 'Male', exact: true }).locator('span').nth(1).click();

    await page.getByRole('combobox', { name: 'Role' }).click();
    await page.getByRole('option', { name: 'Spouse' }).locator('span').nth(1).click();
// Click Next twice to proceed
await page.getByRole('button', { name: 'Next' }).click();
    console.log('🚹 Selected spouse role and gender.');

    await page.click('button:text("Next")');
    //await page.click('button:text("Next")');
    console.log('🎉 Successfully completed the process!');

});