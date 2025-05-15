import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { format, addDays } from 'date-fns';
import createCSV from './utils/generate-csv';

// ✅ Shared random values
const randomCompanyName = faker.company.name();
const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
const street = faker.location.streetAddress();
const city = faker.location.city();
const zip = faker.location.zipCode('#####');
const launchDate = format(addDays(new Date(), 1), 'MM/dd/yyyy');
const enrollmentStart = launchDate;
const enrollmentEnd = format(addDays(new Date(), 22), 'MM/dd/yyyy');

test('Full employer creation + implementation flow with matching company', async ({ page }) => {
  // ------------------------ PART 1: Partner Portal Flow ------------------------
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODQ1LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.l0P_mQPY0vLu3Mt_Xwl9ECqm9aVowF1dBLtybSkRBcY');

 /*  await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');
  await page.locator('input[name="agreeToTerms"]').check({ force: true });
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForTimeout(2000); */

  // Login
  /* await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.keyboard.type('igor.pejin+3olextj9@joinansel.com', { delay: 50 });
  await page.locator('input[name="password"]').click();
  await page.keyboard.type('Demo123456', { delay: 50 });
  await page.locator('input[name="password"]').evaluate(e => e.blur());
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Login' }).click({ force: true });

  // Fill employer info
  await page.locator('input[name="SET_TAX_ID"]').fill(fein);
  await page.locator('input[name="SET_ADDRESS"]').fill(street);
  await page.locator('input[name="SET_CITY"]').fill(city);
  await page.getByRole('textbox', { name: 'XXXXX', exact: true }).fill(zip);
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByRole('listbox').filter({ hasText: 'Date of eligibility lossLast' }).click();
  await page.getByRole('option', { name: 'Date of eligibility loss' }).locator('span').click();
  await page.getByText('Yes, only unmarried children').click();
  await page.getByText('Yes').nth(1).click();
  await page.getByText('No').nth(2).click();
  await page.getByRole('button', { name: 'Next step' }).click();

  // Sign process
  await page.getByRole('button', { name: 'Sign', exact: true }).click();
  await page.getByText('By clicking Continue to sign').click();
  await page.getByRole('button', { name: 'Continue to sign' }).click(); */
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+3olextj9@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();

  const docusignFrame = page.frameLocator('iframe[title="ds"]');
  await docusignFrame.getByText('I agree to use electronic').first().click();
  await docusignFrame.getByRole('button', { name: 'Continue' }).click();
  await docusignFrame.locator('#navigate-btn').click();

  const signButtons = docusignFrame.getByRole('button', { name: /Required\s*-\s*Sign Here/i });
  await signButtons.nth(0).click();
  await docusignFrame.getByRole('button', { name: 'Adopt and Sign' }).click();
  await signButtons.nth(1).click();
  await docusignFrame.locator('#action-bar-btn-finish').click();

  // ------------------------ PART 2: Salesforce Implementation ------------------------

  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000JP9MvYAL/view');

  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  await page.getByRole('button', { name: 'Get The Link' }).click();
  const textArea = page.locator('textarea');
  const link = await textArea.inputValue();

  await page.goto(link, { waitUntil: 'domcontentloaded' });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;

  await page.locator('input[name="billingContactFirstName"]').fill(firstName);
  await page.locator('input[name="billingContactLastName"]').fill(lastName);
  await page.locator('input[name="billingContactEmail"]').fill(email);
  await page.locator('input[name="launchDate"]').fill(launchDate);
  await page.locator('input[name="enrollmentStart"]').fill(enrollmentStart);
  await page.locator('input[name="enrollmentEnd"]').fill(enrollmentEnd);

  await page.locator('input[type="file"]').setInputFiles(await createCSV(20));
  await page.getByText('I verify that all employees').click();
  await page.getByRole('button', { name: 'Next Step' }).click();

  await page.getByRole('row', { name: 'First name*' }).locator('i').click();
  await page.getByRole('option', { name: 'FirstName' }).click();
  await page.getByRole('row', { name: 'Last name*' }).locator('i').click();
  await page.getByRole('option', { name: 'LastName' }).click();
  await page.getByRole('row', { name: 'Date of birth*' }).locator('i').click();
  await page.getByRole('option', { name: 'BirthDate' }).click();
  await page.getByRole('row', { name: 'Social Security Number*' }).locator('i').click();
  await page.getByRole('option', { name: 'SSN' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();
  console.log(`🎉 Flow completed for ${randomCompanyName}`);
});