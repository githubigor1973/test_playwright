import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://brella--qa.sandbox.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fbrella--qa.sandbox.lightning.force.com%252Flightning%252Fr%252FLead%252F00QQL00000G25aT2AR%252Fview');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Lead/00QQL00000G25aT2AR/view');
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('button', { name: 'Get The Link' }).click();

    // Step 3: Extract the link or click it directly
    const linkElement = page.getByText('https://qa-aig-platform.joinansel.com/enrollment');

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
            }
        }
    }
});