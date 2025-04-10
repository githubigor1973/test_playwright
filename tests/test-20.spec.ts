import {test, expect} from '@playwright/test';

test('Testing', async ({page})=>{
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract_Terms__c/a91QL000001oyV3YAI/view');
    // Step 2: Log in to Salesforce
    
    /* await page.getByRole('textbox', {name: 'Username'}).fill('qa@joinansel.com.qa');
    await page.getByRole('textbox', {name: 'Password'}).fill('qa@joinansel.com.qa');
    await page.getByRole('button', {name: 'Log In to Sandbox'}).click();
    await page.waitForTimeout(5000); */
   await page.getByRole('textbox', { name: 'Username'}).fill('qa@joinansel.com.qa');
   await page.getByRole('textbox', { name: 'Password'}).fill('q8xPmBoudN1W');
   await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
   await page.waitForTimeout(5000);

    //const linkSpan = page.locator('span.test-id__field-value').filter({ hasText: 'https' });
   /* const linkTag = page.locator('span.test-id__field-value a').filter({ hasText: 'https' });
   await linkTag.waitFor({ state: 'visible', timeout: 10000 });
   let linkText = await linkTag.innerText(); */
     const linkTag = page.locator('span.test-id__field-value a').filter({ hasText: 'https'});
     await linkTag.waitFor({ state: 'visible', timeout: 10000});
     let linkText = await linkTag.innerText();


   if (!linkText.trim()) {
    console.log('⚠️ Link is empty. Clicking "Edit Employee Shopping Link" to reveal it...');
    // Click the Edit button
    //await page.locator('button[title="Edit Employee Shopping Link"]').click();

    // Wait for the field to update
    await page.waitForTimeout(2000); // Adjust if needed

    // Extract the updated text
    linkText = await page.locator('span.test-id__field-value').filter({ hasText: 'https' }).innerText();
    console.log(`✅ Found Updated Enrollment Link: ${linkText}`);
}

// Navigate to the extracted link
await page.goto(linkText, { waitUntil: 'domcontentloaded' });
});

