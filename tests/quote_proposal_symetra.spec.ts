

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import createCSV from './utils/generate-csv'; // ✅ make sure path is right
import { config } from './test.config'; // adjust the path if needed
import { addDays, format } from 'date-fns';
import {
  
  getSetPasswordLinkForUser
} from '../get-group-app-link';

test('test with dynamic Employer name and State', async ({ page }) => {
  test.setTimeout(160_000); // ⏱️ Increase timeout to 2 minutes

  // ✅ Step 1: Generate CSV
  const csvPath = await createCSV(10);
  console.log(`📄 CSV created at: ${csvPath}`);

  // ✅ Step 2: Login
  await page.goto(config.urlPPSym);
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(config.userNamePPSym);
  await page.locator('input[name="password"]').fill(config.passWord);
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Step 3: Flow
  await page.getByRole('button', { name: 'Request a quote' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('damian newstsym1227');
  await page.getByRole('textbox').press('Enter');
  //await page.locator('label').filter({ hasText: 'damian newstsym1227' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('textbox').fill('BR Damiansym');
  await page.getByText('BR Damiansym').click();
  await page.getByRole('textbox').press('Enter');
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByRole('listbox').filter({ hasText: 'PR DamiansymPR newSYMdamian' }).click();
  await page.getByRole('option', { name: 'PR Damiansym' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 200);
    await page.waitForTimeout(100);
  }
  await page.getByRole('button', { name: '+ Add employer' }).click();

  // 🎲 Generate dynamic values
  const allowedStates = ['Texas', 'California', 'Florida', 'Ohio', 'Georgia'];
  const randomCompanyName = faker.company.name();
  const randomCity = faker.location.city();
  const randomState = faker.helpers.arrayElement(allowedStates);

  // 🏢 Fill Employer details
  await page.locator('input[name="companyName"]').fill(randomCompanyName);
  await page.locator('input[name="sicCode"]').fill('1');
  await page.getByText('- Rice').click();
  await page.locator('input[name="city"]').fill(randomCity);
  await page.getByRole('combobox').getByRole('textbox').fill(randomState);
  await page.getByRole('option', { name: randomState }).click();
  await page.locator('input[name="eligibleEmployees"]').fill('20');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.waitForTimeout(2000);
  // 📅 Date & Class
  await page.getByRole('listbox').filter({ hasText: 'May 1, 2025Jun 1, 2025Jul 1,' }).click();
  await page.getByRole('option', { name: 'Jun 1,' }).click();
  await page.getByRole('textbox', { name: 'Ex. All full-time employees' }).fill('Class A');
  await page.getByRole('button', { name: 'Next step' }).click();

  // 📁 CSV Upload
  await page.locator('input[type="file"]').setInputFiles(csvPath);
  await page.getByRole('button', { name: 'Next step' }).click();

  // 🔄 Map BirthDate
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

  // 📨 Submit and send email
  await page.getByRole('button', { name: 'Submit' }).click();
  //await page.getByRole('textbox', { name: 'Add another email address...' }).fill('igor.pejin+anselquotetest@joinansel.com');
  //await page.getByRole('button', { name: 'Send' }).click();

  // 🔚 Back to dashboard and go to underwriting
  await page.getByRole('button', { name: 'Back to quotes dashboard' }).click();
  await page.goto(config.urlUnderWriting);

  // 🔐 Salesforce login
  await page.getByRole('textbox', { name: 'Username' }).fill(config.userNameSF);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.paswordSF);
  await page.getByRole('button', { name: config.loginButtonName }).click();
 await page.waitForTimeout(3000);
  
 /* const searchContainer = page.locator('.slds-global-header__item_search');
await searchContainer.locator('button[aria-label="Search"]').click();

const searchInput = searchContainer.locator('input[type="search"]');


// Type slowly to simulate user input
await searchInput.click(); // make sure it gets focus
await searchInput.type(randomCompanyName, { delay: 100 }); */

// Find the row link by visible text inside the Quote Name column
 const quoteLink = page.getByRole('link', { name: randomCompanyName }).first();

await quoteLink.click();
console.log(`✅ Clicked quote: ${randomCompanyName}`);


await page.waitForTimeout(3000); // Allow dropdown results to load 
/* await page.getByRole('button', { name: 'Search' }).click();

await page.getByRole('textbox', { name: 'Search' }).fill(randomCompanyName);

// Optional: press Enter if needed (some search inputs work this way)
await page.getByRole('textbox', { name: 'Search' }).press('Enter'); */
await page.waitForTimeout(3000); // Allow dropdown results to load
  
  
  console.log(`✅ Clicked quote row for: ${randomCompanyName}`);
await page.getByTitle('Approved').click();
await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
await page.waitForTimeout(4000);
await page.getByTitle('Issued').click();

await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
await page.waitForTimeout(5000);


  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1000);

  const proposalLink = page.getByRole('link', { name: /https:\/\/qa-symetra-platform/ });
  await proposalLink.scrollIntoViewIfNeeded();

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    proposalLink.click(),
  ]);

  //await newPage.waitForLoadState();
await newPage.waitForTimeout(500);
  await newPage.locator('text=Yes, I accept this proposal').scrollIntoViewIfNeeded();
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
  //await newPage.getByText('Symetra enrollment platform').click();
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(100);
  }

  // --- 🗓️ Pick Start Date ---
  const today = format(new Date(), 'MM/dd/yyyy');
  const threeWeeksLater = format(addDays(new Date(), 21), 'MM/dd/yyyy');
  
  // 2. Remove readonly and type for Start Date
  await newPage.evaluate(() => {
    // @ts-ignore
    const input = document.querySelector('input[name="enrollmentStartDate"]');
    if (input) input.removeAttribute('readonly');
  });
  await newPage.locator('input[name="enrollmentStartDate"]').fill(today);
  
  // 3. Remove readonly and type for End Date
  // 3. Remove readonly and type for End Date
await newPage.evaluate(() => {
  // @ts-ignore
  const input = document.querySelector('input[name="enrollmentEndDate"]');
  if (input) input.removeAttribute('readonly');
});
  await newPage.locator('input[name="enrollmentEndDate"]').fill(threeWeeksLater);

  // --- Acknowledgment ---
  await newPage.locator('input[name="ackFirstName"]').fill(ackFirstName);
  await newPage.locator('input[name="ackLastName"]').fill(ackLastName);
  await newPage.locator('input[name="ackEmail"]').fill(ackEmail);

  await newPage.getByText('By checking this box, I agree').click();

  console.log('✅ Proposal filled successfully');

  const acceptButton = newPage.locator('button:has-text("Accept"):not([disabled])');
  await acceptButton.waitFor({ state: 'visible' });
  
  // Then click it
  await acceptButton.click();



  const setPasswordLink = await getSetPasswordLinkForUser(randomEmail);
await page.goto(setPasswordLink);

await page.locator('input[name="password"]').fill('Demo123456');
await page.locator('input[name="confirmPassword"]').fill('Demo123456');
await page.getByRole('button', { name: 'Submit' }).click();



  /* // Constants
  const email = randomEmail;
  const password = 'Demo123456';

  // Randomized values
  const fein = `${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000000, max: 9999999 })}`;
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const zip = faker.location.zipCode('#####');

  // ✅ Go to tokenized login (set password)
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODE1LCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.g06HINSmBlJZovHyCZljwFUkMZVc6nNBqGH573N8IZA');

  await page.getByRole('textbox', { name: 'Enter your email' }).fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Login again via UI
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(email);
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(4000);

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
  await page.getByText('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next step' }).click();

  // ✅ Sign
  await page.getByRole('button', { name: 'Sign', exact: true }).click();
  await page.getByText('By clicking Continue to sign').click();
  await page.getByRole('button', { name: 'Continue to sign' }).click();

  // ✅ DocuSign handling
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');
  const frame = await page.frameLocator('iframe[title="ds"]');

  await frame.locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();
  await frame.getByRole('button', { name: 'Continue' }).click();
  await frame.locator('#navigate-btn').click();
  await frame.locator('#tab-form-element-f1202766-26ce-45b9-b53b-15e562651c66').click();
  await frame.getByLabel('or Select a Signature').getByText('Valentine Upton-Marquardt').click();
  await frame.getByRole('button', { name: 'Adopt and Sign' }).click();
  await frame.getByRole('button', { name: 'Required - Sign Here' }).click();
  await frame.locator('#action-bar-btn-finish').click();

  // ✅ Done
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/success');

  console.log('✅ Random data used:');
  console.log(`FEIN: ${fein}`);
  console.log(`Street: ${street}`);
  console.log(`City: ${city}`);
  console.log(`Zip: ${zip}`); */

});