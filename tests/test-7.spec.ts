/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
  await expect(page.locator('h3')).toContainText('Sign in to your Member Portal');
  await expect(page.getByRole('paragraph')).toContainText('Enter your details below to access to Ansel');
  await expect(page.locator('span')).toContainText('Not yet registered? Create an account');
});
*/
import { test, expect } from '@playwright/test';

test('Verify Text Assertions on Ansel Login Page', async ({ page }) => {
    // 1️⃣ Open the Web Page
    await page.goto('https://qa-ansel-platform.joinansel.com/member/login', { waitUntil: 'domcontentloaded' });

    // 2️⃣ Define Expected Text Assertions
    const assertions = [
        { locator: 'h3', expectedText: 'Sign in to your Member Portal' },
        { locator: 'p', expectedText: 'Enter your details below to access to Ansel' },
        { locator: 'span', expectedText: 'Not yet registered? Create an account' } // Corrected text
    ];

    let testPassed = true; // Track test success

    // 3️⃣ Perform Assertions Without Timeout
    for (const { locator, expectedText } of assertions) {
        const element = page.locator(locator);
        const actualText = await element.innerText();

        console.log(`🔍 Checking: "${expectedText}"`);
        console.log(`📌 Found: "${actualText}"`);

        if (actualText !== expectedText) {
            console.error(`❌ Mismatch! Expected: "${expectedText}", but Found: "${actualText}"`);
            testPassed = false; // Mark test as failed
        }
    }

    // 4️⃣ Final Test Status
    if (testPassed) {
        console.log('✅ Test Passed! All text matches correctly.');
    } else {
        throw new Error('❌ Test Failed: One or more text assertions did not match.');
    }
});