import { test, expect } from '@playwright/test';

test('Verify text on Ansel Homepage', async ({ page }) => {
    // 1️⃣ Open the Web Page
    await page.goto('https://www.joinansel.com', { waitUntil: 'domcontentloaded' });

    // 2️⃣ Define Expected Texts
    const expectedTexts = [
        'Give your team peace of mind with supplemental health* insurance from Ansel.',
        "I'm wondering...",
        "how Ansel's insurance plan works",
        'Find out'
    ];

    // 3️⃣ Verify Each Expected Text is Present
    for (const text of expectedTexts) {
        const textLocator = page.locator(`text=${text}`);
        await expect(textLocator).toBeVisible({ timeout: 5000 });

        // 🔹 Highlight and Screenshot the Found Text
        await textLocator.screenshot({ path: `highlight-${text.replace(/\s+/g, '_')}.png` });

        console.log(`✅ Verified: "${text}" is present on the page.`);
    }

    console.log('🎯 All text assertions passed successfully!');
});