/* import { test, expect } from '@playwright/test';

test('Contract', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODE0LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.__G1MbwB3laM_Y_Rlchk_09GjEuK6S3zoGPWnvVqd7w');
  
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+fajwqpfy@joinansel.com');
  
  await page.locator('input[name="password"]').fill('Demo123456');
  const page1Promise = page.waitForEvent('popup');
  
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+fajwqpfy@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await page.locator('input[name="SET_TAX_ID"]').fill('34-5467898');     
    await page.locator('input[name="SET_ADDRESS"]').click();
  await page.locator('input[name="SET_ADDRESS"]').fill('ocean view 1000');
  await page.locator('input[name="SET_CITY"]').click();
  await page.locator('input[name="SET_CITY"]').fill('San Diego');
  await page.getByRole('textbox', { name: 'XXXXX', exact: true }).click();
  await page.getByRole('textbox', { name: 'XXXXX', exact: true }).fill('23400 ');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('listbox').filter({ hasText: 'Date of eligibility lossLast' }).click();
  await page.getByRole('option', { name: 'Date of eligibility loss' }).locator('span').click();
  await page.getByText('Yes, only unmarried children').click();
  await page.getByText('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: 'Sign', exact: true }).click();
  await page.getByText('By clicking Continue to sign').click();
  await page.getByRole('button', { name: 'Continue to sign' }).click();
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');
  await page.locator('iframe[title="ds"]').contentFrame().locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();
  await page.locator('iframe[title="ds"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[title="ds"]').contentFrame().locator('#navigate-btn').click();
  await page.locator('iframe[title="ds"]').contentFrame().locator('#tab-form-element-f1202766-26ce-45b9-b53b-15e562651c66').click();
  await page.locator('iframe[title="ds"]').contentFrame().getByLabel('or Select a Signature').getByText('Valentine Upton-Marquardt').click();
  await page.locator('iframe[title="ds"]').contentFrame().getByRole('button', { name: 'Adopt and Sign' }).click();
  await page.locator('iframe[title="ds"]').contentFrame().getByRole('button', { name: 'Required - Sign Here' }).click();
  await page.locator('iframe[title="ds"]').contentFrame().locator('#action-bar-btn-finish').click();
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/success');
}); */

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Contract', async ({ page }) => {

  

  // Constants
  const email = 'igor.pejin+noxh6zq0@joinansel.com';
  const password = 'Demo123456';

  // Randomized values
  const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const zip = faker.location.zipCode('#####');

  // ✅ Go to tokenized login (set password)
 /* await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODE1LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.g06HINSmBlJZovHyCZljwFUkMZVc6nNBqGH573N8IZA');

  // ✅ Create new Password 
   await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');

  await page.evaluate(() => {
    (document.querySelector('input[name="agreeToTerms"]') as HTMLInputElement)?.click();
  });
  await page.getByRole('button', { name: 'Continue' }).click();



  await page.getByRole('textbox', { name: 'Enter your email' }).fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click(); */

  


  // ✅ Login again via UI
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(4000);

  /*
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
  await page.getByRole('button', { name: 'Continue to sign' }).click(); */

  // ✅ DocuSign handling
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');
  const frame = await page.frameLocator('iframe[title="ds"]');
await page.waitForTimeout(3000);
await frame.locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();  
  await frame.getByRole('button', { name: 'Continue' }).click();
  await frame.locator('#navigate-btn').click();
  await frame.locator('#tab-form-element-f1202766-26ce-45b9-b53b-15e562651c66').click();
  await frame.getByLabel('or Select a Signature').getByText('Valentine Upton-Marquardt').click();
  await frame.getByRole('button', { name: 'Adopt and Sign' }).click();
  await frame.getByRole('button', { name: 'Required - Sign Here' }).click();
  await frame.locator('#action-bar-btn-finish');

  // ✅ Done
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/success');

  console.log('✅ Random data used:');
  console.log(`FEIN: ${fein}`);
  console.log(`Street: ${street}`);
  console.log(`City: ${city}`);
  console.log(`Zip: ${zip}`);
});