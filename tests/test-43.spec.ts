/* import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
      await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODM3LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.xRFk0BGvljhW4xfoRCl3q5avab5FUty0h-nhor_8tRE');

  await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');

  // ✅ Check the "agree to terms" checkbox properly
  await page.locator('input[name="agreeToTerms"]').check({ force: true });

  await page.getByRole('button', { name: 'Continue' }).click();  
   await page.waitForTimeout(2000);
  

 
   await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');

  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+sbs67zpy@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();

  const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const zip = faker.location.zipCode('#####');

// ✅ Fill random company info
await page.locator('input[name="SET_TAX_ID"]').fill(fein);
await page.locator('input[name="SET_ADDRESS"]').fill(street);
await page.locator('input[name="SET_CITY"]').fill(city);
await page.getByRole('textbox', { name: 'XXXXX', exact: true }).fill(zip);

await page.getByRole('button', { name: 'Next step' }).click();

// ✅ Additional eligibility config
await page.getByRole('listbox').filter({ hasText: 'Date of eligibility lossLast' }).click();
await page.getByRole('option', { name: 'Date of eligibility loss' }).locator('span').click();
await page.getByText('Yes, only unmarried children').click();
await page.getByText('Yes').nth(1).click();
await page.getByText('No').nth(2).click();
await page.getByRole('button', { name: 'Next step' }).click();

// ✅ Sign
await page.getByRole('button', { name: 'Sign', exact: true }).click();
await page.getByText('By clicking Continue to sign').click();
await page.getByRole('button', { name: 'Continue to sign' }).click();  
 

await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');

await page.waitForTimeout(4000);

await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+sbs67zpy@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();

const frame = await page.frameLocator('iframe[title="ds"]');

await page.locator('iframe[title="ds"]').contentFrame().locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();
await frame.getByRole('button', { name: 'Continue' }).click();
await frame.locator('#navigate-btn').click();

await frame.locator('iframe[title="ds"]').contentFrame().locator('label').first().click();
await frame.locator('iframe[title="ds"]').contentFrame().locator('#tab-form-element-02d71bb5-8a14-444e-a973-43c635edceb2').click();
await frame.getByRole('button', { name: 'Adopt and Sign' }).click();

await frame.locator('iframe[title="ds"]').contentFrame().locator('#tab-form-element-4488a590-e114-44c5-813a-d5cea0977de4').click();
//await frame.locator('iframe[title="ds"]').contentFrame().locator('#navigate-btn').click();

await frame.locator('#action-bar-btn-finish').click();
}); */

 import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Employer account creation and signing', async ({ page }) => {
  // Step 1: Set Password
       await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODQ3LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.GKz6iXIGHvT9av3Nf8_UfYINptgNK1FiK7Ud6vlHqLI');

   await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');
  await page.locator('input[name="agreeToTerms"]').check({ force: true });
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForTimeout(2000); 

   // Step 2: Login
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');

const email = 'igor.pejin+ng1nkvyj@joinansel.com';
const password = 'Demo123456';

// Simulate real user typing
await page.getByRole('textbox', { name: 'Enter your email' }).click();
await page.keyboard.type(email, { delay: 50 });

await page.locator('input[name="password"]').click();
await page.keyboard.type(password, { delay: 50 });

// Optional: blur to trigger validation
await page.locator('input[name="password"]').evaluate(e => e.blur());

await page.waitForTimeout(1000);

// Force the click
await page.getByRole('button', { name: 'Login' }).click({ force: true });

  // Step 3: Fill Company Info
  const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const zip = faker.location.zipCode('#####');

  await page.locator('input[name="SET_TAX_ID"]').fill(fein);
  await page.locator('input[name="SET_ADDRESS"]').fill(street);
  await page.locator('input[name="SET_CITY"]').fill(city);
  await page.getByRole('textbox', { name: 'XXXXX', exact: true }).fill(zip);
  await page.getByRole('button', { name: 'Next step' }).click();

  // Step 4: Additional Eligibility Config
  await page.getByRole('listbox').filter({ hasText: 'Date of eligibility lossLast' }).click();
  await page.getByRole('option', { name: 'Date of eligibility loss' }).locator('span').click();
  await page.getByText('Yes, only unmarried children').click();
  await page.getByText('Yes').nth(1).click();
  await page.getByText('No').nth(2).click();
  await page.getByRole('button', { name: 'Next step' }).click();

  // Step 5: Sign
  await page.getByRole('button', { name: 'Sign', exact: true }).click();
  await page.getByText('By clicking Continue to sign').click();
  await page.getByRole('button', { name: 'Continue to sign' }).click();    
  

  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');

  // Step 6: Login again for DocuSign
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+ng1nkvyj@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 7: DocuSign Signing Flow
  const docusignFrame = page.frameLocator('iframe[title="ds"]');

  await docusignFrame.getByText('I agree to use electronic').first().click();
  await docusignFrame.getByRole('button', { name: 'Continue' }).click();
  await docusignFrame.locator('#navigate-btn').click();

  // Click label to focus
await docusignFrame.locator('label').first().click();

// Wait for signature buttons to be visible
const signButtons = docusignFrame.getByRole('button', { name: /Required\s*-\s*Sign Here/i });

// Click the first signature field
await signButtons.nth(0).click();

// Click "Adopt and Sign"
await docusignFrame.getByRole('button', { name: 'Adopt and Sign' }).click();

// Click the second signature field (after it appears)
await page.locator('iframe[title="ds"]').contentFrame().getByRole('button', { name: 'Required - Sign Here' }).click();

// Finish signing
await docusignFrame.locator('#action-bar-btn-finish').click();






}); 

