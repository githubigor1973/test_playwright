/* import { test, expect } from '@playwright/test';

test('Salesforce Enrollment Link Click (Optimized)', async ({ page }) => {
    console.log('🚀 Starting Test');

    // Step 1: Login to Salesforce
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract_Terms__c/a91QL000001oyV3YAI/view', { waitUntil: 'domcontentloaded' });

    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

    // Wait for Salesforce dashboard to load
    await page.waitForTimeout(5000);
    console.log('✅ Logged in to Salesforce.');

    // Step 2: Find and Click Enrollment Link
    console.log('🔍 Looking for the enrollment link...');
    const linkElement = page.getByText('https://qa-aig-platform.joinansel.com/enrollment/?token=VJkMTOaJMlHZWa-8Tee_UfDicwqgjMfu-EsJNbuk1n6bOl8HS4sRtqCmK5MiGiJgrlsrdrQX5fjze9eOyZUsi9lnxrA8pXzj-VNPG9aloBv68cpDgNgmXaOQ4uzmFWYQxQPVp-zv8ykioU74g-nFouyN7YIbPh9M5FmPJwGHanF2x04RQtgJaYcdMrMU0493nOpjen8odtrltFwFWX6nkXXnf-uLXdBVQ1pmVnwmOMYh1z7fttJch1qjhztaS0hoiQJKZg0hf-xltMZLxD4s-J3Ari-vSdA5MVuBbOEpydLv9ORjUhk29G1JPAjfp4JFew_pzuBgrm2DWs5fVan6CHh3Vl5jx7iZFd6z-y6VYYonfgDJksID71oksmwXVtl_8H8jICIRahKgj-Z8XYvMHf_MRu9WKY2MnciB8Lka6qng8oNHr-DZNf-hGDn8JaGhHhxtpc9_0ZuhwG5dGx4nUalNxUyvgbgt4h31IMJWsetKX6xRX4u_XVKmiphDq_HcfUJ437ENemz1hNrp5GBZXVoMGVmPXNc0Z_D7ybmmeIBGfTm-kn6WsitwTDFoLka_ps_KJ4OqbW6FAQP7C2C95Dy3aLTDniLZVkzJFLeDWdT2g2flVZjFOREE-T2GaiFZPR8FaXWQilC2ZL3mdzhul4ApAPUAYlTVOvCiN2YfUm02Y5NEQDCLNyjW06KK3MZ8J50SL4Qzsi0-m0-nz3QkElt2zT0maGZv7Qq0ToKYamQp4vqGV3dQEpeM48Ft0pgZE8AWmwwpTT-MgoNBCXfFHaTVE7PZJsGeCXZnw-1c1NAMi-axssaYagheZAi5TLDVZNa6oTuw1Z5I7UeZlOPSOIPEPKbRLNTL2COhmjnEZMrUYrdhWXIMDiJkAkUARxBgdK8hxormA186uSrwtq8GBAABUHr7JIlbQrvgaeEGpCGfGb3kHB6_D4T5CbC2Qv6zVjp_8BO7klp2dwCkmeNOWUlB69etLyWb3_gjhJAmkksXRXrqsbmLTdZYyz0BPFkJ4i7kU0NWaMJO0otqS-1WR3OeLMCYHQ_Gx7yyi6M5_u6X5mQr5YUbTEiitEnc1paOA8rp5yEPCxPT69yG3bLMByI2ThkOS7M_oV-U-c7jd-yuVdnD-f6CeyzPrjzBvsFviLzgu5Gtdz2zaSY_fmQSntPgmYAGniyt1e_xUFnrxsnCTCvi4_5errgEImSIu_mO');

    if (await linkElement.isVisible()) {
        const linkText = await linkElement.innerText();
        await page.goto(linkText, { waitUntil: 'domcontentloaded' });
    } else {
        console.log('⚠️ Link not found, trying alternative methods...');

        await page.getByRole('button', { name: 'Get The Link' }).click();

        // Shadow DOM Handling
        const shadowLink = await page.evaluate(() => {
            const shadowHost = document.querySelector('#sectionContent-174');
            return shadowHost?.shadowRoot?.querySelector('a')?.getAttribute('href') ?? null;
        });

        if (shadowLink) {
            await page.goto(shadowLink, { waitUntil: 'domcontentloaded' });
        } else {
            console.log('⚠️ Trying XPath method...');
            const xpathLink = page.locator('//a[contains(text(), "https://qa-aig-platform.joinansel.com/enrollment")]');
            if (await xpathLink.isVisible()) {
                await xpathLink.click({ force: true });
            } else {
                console.log('❌ Could not find the enrollment link.');
                return; // Exit test if the link isn't found
            }
        }
    }

    // Step 3: Fill Form Details
    console.log('📝 Filling out form details...');
    await page.getByRole('textbox').fill('9QfzXO0@');
    await page.getByRole('button', { name: 'Next step' }).click();

    await page.locator('input[name="firstName"]').fill('John');
    await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('10/15/1999');
    await page.getByRole('combobox').locator('i').click();

    await page.getByRole('button', { name: 'Next step' }).waitFor({ state: 'visible', timeout: 60000 });

    // Step 4: Function to Click "Next step" with Delay
    async function clickNextStepWithDelay(delay = 1000) {
        await page.getByRole('button', { name: 'Next step' }).click();
    }

    // Proceed through form with controlled delays
    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(1500);
    await page.getByText('Yes', { exact: true }).click();
    await page.getByText('Yes', { exact: true }).click();
    await page.getByText('Yes, my youngest child is under 18 years old').click();

    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);


    // Confirm selections
    await page.getByText('Yes').click();
    await page.getByText('I typically pay copays').click();
    await clickNextStepWithDelay(1500);

    await page.getByText('I generally can purchase').click();
    await clickNextStepWithDelay(2500);

    
  

    console.log('🎯 Test Completed.');
}); */

import { test, expect } from '@playwright/test';

test('Salesforce Enrollment Link Click (Optimized)', async ({ page }) => {
    console.log('🚀 Starting Test');

    // Step 1: Login to Salesforce
    await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract_Terms__c/a91QL000001oyV3YAI/view', { waitUntil: 'domcontentloaded' });

    await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

    // Wait for Salesforce dashboard to load
    await page.waitForTimeout(5000);
    console.log('✅ Logged in to Salesforce.');

    // Step 2: Extract Enrollment Link from Employee Shopping Link Field
    console.log('🔍 Looking for the Employee Shopping Link...');

    // Locate the correct span that contains the Employee Shopping Link
    const linkSpan = page.locator('span.test-id__field-value').filter({ hasText: 'https' });

    // Wait for the span to be visible
    await linkSpan.waitFor({ state: 'visible', timeout: 10000 });

    // Extract the URL text from the span
    let linkText = await linkSpan.innerText();
    console.log(`✅ Found Enrollment Link: ${linkText}`);

    // If the link is empty, click "Edit Employee Shopping Link" and extract it again
    if (!linkText.trim()) {
        console.log('⚠️ Link is empty. Clicking "Edit Employee Shopping Link" to reveal it...');

        // Click the Edit button
        await page.locator('button[title="Edit Employee Shopping Link"]').click();

        // Wait for the field to update
        await page.waitForTimeout(2000); // Adjust if needed

        // Extract the updated text
        linkText = await page.locator('span.test-id__field-value').filter({ hasText: 'https' }).innerText();
        console.log(`✅ Found Updated Enrollment Link: ${linkText}`);
    }

    // Navigate to the extracted link
    await page.goto(linkText, { waitUntil: 'domcontentloaded' });
    console.log('✅ Successfully navigated to the Enrollment Link.');

    // Step 3: Fill Form Details
    console.log('📝 Filling out form details...');
    await page.getByRole('textbox').fill('9QfzXO0@');
    await page.getByRole('button', { name: 'Next step' }).click();

    await page.locator('input[name="firstName"]').fill('John');
    await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('10/15/1999');
    await page.getByRole('combobox').locator('i').click();

    await page.getByRole('button', { name: 'Next step' }).waitFor({ state: 'visible', timeout: 60000 });

    // Step 4: Function to Click "Next step" with Delay
    async function clickNextStepWithDelay(delay = 1000) {
        await page.getByRole('button', { name: 'Next step' }).click();
    }

    // Proceed through form with controlled delays
    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(1500);
    await page.getByText('Yes', { exact: true }).click();
    await page.getByText('Yes', { exact: true }).click();
    await page.getByText('Yes, my youngest child is under 18 years old').click();

    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(1500);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);
    await clickNextStepWithDelay(2000);

    // Confirm selections
    await page.getByText('Yes').click();
    await page.getByText('I typically pay copays').click();
    await clickNextStepWithDelay(1500);

    await page.getByText('I generally can purchase').click();
    await clickNextStepWithDelay(2500);

    console.log('🎯 Test Completed.');
});