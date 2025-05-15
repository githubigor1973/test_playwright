import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import fs from 'fs';


test('Employer account creation and signing', async ({ page }) => {


  // Step 1: Set Password
      /*  await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODQ3LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.GKz6iXIGHvT9av3Nf8_UfYINptgNK1FiK7Ud6vlHqLI');

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
   */

  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');

  // Step 6: Login again for DocuSign
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+opw86fso@joinansel.comm');
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
const { contractNumber } = JSON.parse(fs.readFileSync('./tmp/contract-number.json', 'utf-8'));

console.log('📄 Reused contract number:', contractNumber);
// Finish signing
await docusignFrame.locator('#action-bar-btn-finish').click();






}); 