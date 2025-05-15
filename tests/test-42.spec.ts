import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import createCSV from './utils/generate-csv';
import { config } from './test.config';
import { addDays, format } from 'date-fns';

import { getGroupAppLinkForUser } from '../get-group-app-link';
import 'dotenv/config';


const SUPPORT_USER = process.env.SUPPORT_USER!;
const SUPPORT_PASS = process.env.SUPPORT_PASS!;

if (!SUPPORT_USER || !SUPPORT_PASS) {
  throw new Error('Missing SUPPORT_USER or SUPPORT_PASS environment variables.');
}

test('test with dynamic Employer name and State', async ({ page }) => {
  test.setTimeout(120_000);

  const csvPath = await createCSV(10);
  console.log(`📄 CSV created at: ${csvPath}`);

  await page.goto(config.urlPP);
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(config.userNamePP);
  await page.locator('input[name="password"]').fill(config.passWord);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Request a quote' }).click();
  await page.locator('label').filter({ hasText: 'damian test6360' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: '+ Add employer' }).click();

  const allowedStates = ['Texas', 'California', 'Florida', 'Ohio', 'Georgia'];
  const randomCompanyName = faker.company.name();
  const randomCity = faker.location.city();
  const randomState = faker.helpers.arrayElement(allowedStates);

  await page.locator('input[name="companyName"]').fill(randomCompanyName);
  await page.locator('input[name="sicCode"]').fill('1');
  await page.getByText('- Rice').click();
  await page.locator('input[name="city"]').fill(randomCity);
  await page.getByRole('combobox').getByRole('textbox').fill(randomState);
  await page.getByRole('option', { name: randomState }).click();
  await page.locator('input[name="eligibleEmployees"]').fill('20');
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByRole('listbox').filter({ hasText: 'May 1, 2025Jun 1, 2025Jul 1,' }).click();
  await page.getByRole('option', { name: 'Jun 1,' }).click();
  await page.getByRole('textbox', { name: 'Ex. All full-time employees' }).fill('Class A');
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.locator('input[type="file"]').setInputFiles(csvPath);
  await page.getByRole('button', { name: 'Next step' }).click();

  const listbox = page.getByRole('row', { name: /Date of birth/i }).getByRole('listbox');
  await listbox.click();
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
  }
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByText('Yes').click();
  await page.getByText('Accident').click();
  await page.getByText('Accident').click();
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Add another email address...' }).fill('igor.pejin+anselquotetest@joinansel.com');
  await page.getByRole('button', { name: 'Send' }).click();

  await page.getByRole('button', { name: 'Back to quotes dashboard' }).click();
  await page.goto(config.urlUnderWriting);

  await page.getByRole('textbox', { name: 'Username' }).fill(config.userNameSF);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.paswordSF);
  await page.getByRole('button', { name: config.loginButtonName }).click();
  await page.waitForTimeout(2000);

  const quoteLink = page.getByRole('link', { name: randomCompanyName }).first();
  await quoteLink.click();
  console.log(`✅ Clicked quote: ${randomCompanyName}`);

  await page.waitForTimeout(3000);
  await page.getByTitle('Approved').click();
  await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
  await page.waitForTimeout(4000);
  await page.getByTitle('Issued').click();
  await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
  await page.waitForTimeout(5000);

  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1000);

  const proposalLink = page.getByRole('link', { name: /https:\/\/qa-ansel-platform/ });
  await proposalLink.scrollIntoViewIfNeeded();

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    proposalLink.click(),
  ]);

  await newPage.getByText('Yes, I accept this proposal').click();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const randomEmail = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;
  const ackFirstName = faker.person.firstName();
  const ackLastName = faker.person.lastName();
  const ackEmail = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;

  await newPage.locator('input[name="contactFirstName"]').fill(firstName);
  await newPage.locator('input[name="contactLastName"]').fill(lastName);
  await newPage.locator('input[name="contactEmail"]').fill(randomEmail);
  await newPage.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');
  await newPage.getByText('Ansel enrollment platform').click();

  const today = format(new Date(), 'MM/dd/yyyy');
const threeWeeksLater = format(addDays(new Date(), 21), 'MM/dd/yyyy');

// 👇 Helper to remove readonly attribute from any input by name
async function removeReadonly(page: typeof newPage, fieldName: string) {
  await page.evaluate((name) => {
    // @ts-ignore
    const input = document.querySelector(`input[name="${name}"]`);
    if (input) input.removeAttribute('readonly');
  }, fieldName);
}

// 🗓️ Set enrollment start date
await removeReadonly(newPage, 'enrollmentStartDate');
await newPage.locator('input[name="enrollmentStartDate"]').fill(today);

// 🗓️ Set enrollment end date
await removeReadonly(newPage, 'enrollmentEndDate');
await newPage.locator('input[name="enrollmentEndDate"]').fill(threeWeeksLater);

// ✍️ Fill in acknowledgment info
await newPage.locator('input[name="ackFirstName"]').fill(ackFirstName);
await newPage.locator('input[name="ackLastName"]').fill(ackLastName);
await newPage.locator('input[name="ackEmail"]').fill(ackEmail);

// ✅ Agree to terms
await newPage.getByText('By checking this box, I agree').click();


 const acceptButton = newPage.locator('button:has-text("Accept"):not([disabled])');
  await acceptButton.waitFor({ state: 'visible' });
  await acceptButton.click();



  /* const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const zip = faker.location.zipCode('#####');

  const groupAppLink = await getGroupAppLinkForUser(randomEmail);
  console.log('🔗 Group App Link:', groupAppLink);
  await page.goto(groupAppLink);

  await page.getByRole('textbox', { name: 'Enter your email' }).fill(randomEmail);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(randomEmail);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(4000);

  await page.locator('input[name="SET_TAX_ID"]').fill(fein);
  await page.locator('input[name="SET_ADDRESS"]').fill(street);
  await page.locator('input[name="SET_CITY"]').fill(city);
  await page.getByRole('textbox', { name: 'XXXXX', exact: true }).fill(zip);

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
  const frame = await page.frameLocator('iframe[title="ds"]');

  await frame.locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();
  await frame.getByRole('button', { name: 'Continue' }).click();
  await frame.locator('#navigate-btn').click();
  await frame.locator('#tab-form-element-f1202766-26ce-45b9-b53b-15e562651c66').click();
  await frame.getByLabel('or Select a Signature').getByText('Valentine Upton-Marquardt').click();
  await frame.getByRole('button', { name: 'Adopt and Sign' }).click();
  await frame.getByRole('button', { name: 'Required\u00a0-\u00a0Sign Here' }).click();
  await frame.locator('#action-bar-btn-finish').click();

  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/success');

  console.log('✅ Random data used:');
  console.log(`FEIN: ${fein}`);
  console.log(`Street: ${street}`);
  console.log(`City: ${city}`);
  console.log(`Zip: ${zip}`); */
});