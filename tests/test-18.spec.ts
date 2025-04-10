import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    console.log('🚀 Starting the test');

    // Navigate to Salesforce login page
    console.log('🔍 Navigating to Salesforce login page...');
    await page.goto('https://brella--qa.sandbox.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbrella--qa.sandbox.lightning.force.com%252Flightning%252Fo%252FAccount%252Flist%253FfilterName%253D__Recent');
    console.log('✅ Reached Salesforce login page.');

    // Login process
    console.log('🔐 Entering login credentials...');
    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    console.log('✅ Logged in successfully.');

    // Navigate to Contacts
    console.log('📂 Opening Contacts...');
    await page.getByRole('link', { name: 'Contacts' }).click();
    
    // Click New Contact
    console.log('➕ Creating a new contact...');
    await page.getByRole('button', { name: 'New' }).click();
    await page.getByRole('button', { name: 'Next' }).click();

    // Fill contact details
    console.log('📝 Filling out contact details...');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Contact');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: '*Last Name' }).fill('Test');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Email' }).fill('igor.pejin+contacttest3@joinansel.com');

    // Select Strategic Partner
    console.log('🏢 Selecting Strategic Partner...');
    await page.getByRole('combobox', { name: 'Strategic Partner Name' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: 'Symetra' }).locator('span').nth(1).click();
    
    // Save Contact
    console.log('💾 Saving Contact...');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    await page.waitForTimeout(1000);
    console.log('✅ Contact saved successfully.');

    // Create New Account Contact Relation
    console.log('🔗 Creating a New Account Contact Relation...');
    await page.getByRole('button', { name: 'New Account Contact Relation' }).click();
    await page.getByRole('combobox', { name: 'Account *' }).click();
    await page.getByRole('combobox', { name: 'Account *' }).fill('symetra');
    await page.getByText('"symetra" in Accounts').click();
    await page.getByRole('link', { name: 'Symetra', exact: true }).click();

    // Select Role
    console.log('🛠 Selecting Role...');
    await page.locator('dl').filter({ hasText: 'Role*--None--' }).getByRole('combobox').click();
    await page.getByRole('option', { name: 'Sales Team' }).click();

    // Save the relation
    console.log('💾 Saving Account Contact Relation...');
    await page.getByRole('button', { name: 'Save' }).click();
    console.log('✅ Account Contact Relation saved.');

    // Refresh Page
    console.log('🔄 Refreshing the page...');
    await page.getByTitle('Indicates refresh action').click();
    console.log('✅ Page refreshed successfully.');

    // Select newly created account contact relation
    console.log('📂 Opening Account Contact Relation...');
    await page.getByText('Test C. - Sales Team, Symetra', { exact: true }).click();
    await page.waitForLoadState('domcontentloaded');

    // Provide Portal Access
    console.log('🔐 Attempting to Provide Portal Access...');
    await page.waitForSelector('button:text("Provide Portal Access")', { timeout: 10000 });
    await page.getByRole('button', { name: 'Provide Portal Access' }).click();
    console.log('✅ Portal access provided.');

    // Confirm Action in Modal (Uncomment if needed)
    /*
    console.log('🛑 Waiting for confirmation modal...');
    await page.waitForSelector('button:text("Confirm")', { timeout: 10000 });
    console.log('✅ Modal detected. Clicking Confirm...');
    await page.getByRole('button', { name: 'Confirm' }).click();
    console.log('✅ Confirmed Portal Access.');
    */

    console.log('🎯 Test Completed Successfully.');
});