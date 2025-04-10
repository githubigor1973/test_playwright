import { test, expect } from '@playwright/test';

test('Salesforce Login and Update Age Reduction Age', async ({ page }) => {
    // 1️⃣ Open Salesforce Login Page
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract_Terms__c/a91QL000001oyV3YAI/view', { waitUntil: 'domcontentloaded' });

    // 2️⃣ Enter Username and Password
    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');

    // 3️⃣ Click Login Button
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

   

    // 5️⃣ Click the 'Recalculate' button
    await page.getByRole('button', { name: 'Recalculate' }).click();

    // 6️⃣ Click the 'Cancel and close' button
    await page.getByRole('button', { name: 'Cancel and close' }).click();

    // 7️⃣ Click the 'Edit Age Reduction Age' button
    await page.getByRole('button', { name: 'Edit Age Reduction Age' }).click();

    // 8️⃣ Modify the 'Age Reduction Age' field
    await page.getByRole('textbox', { name: 'Age Reduction Age' }).fill('69');
    await page.getByRole('textbox', { name: 'Age Reduction Age' }).fill('70');

    // 9️⃣ Click the 'Save' button
    await page.getByRole('button', { name: 'Save' }).click();
});
