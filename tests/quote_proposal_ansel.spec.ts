import { test, expect } from '@playwright/test';
import { faker, tr } from '@faker-js/faker';
import createCSV from './utils/generate-csv'; // ✅ make sure path is right
import { config } from './test.config'; // adjust the path if needed
import { addDays, format } from 'date-fns';
import {
  
  getSetPasswordLinkForUser
} from '../get-group-app-link';

test('test with dynamic Employer name and State', async ({ page }) => {
  test.setTimeout(640_000); // ⏱️ Increase timeout to 2 minutes

  // ✅ Step 1: Generate CSV
  const csvPath = await createCSV(10);
  console.log(`📄 CSV created at: ${csvPath}`);

  // ✅ Step 2: Login
  await page.goto(config.urlPP);
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(config.userNamePP);
  await page.locator('input[name="password"]').fill(config.passWord);
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Step 3: Flow
  await page.getByRole('button', { name: 'Request a quote' }).click();
  await page.locator('label').filter({ hasText: 'damian test6360' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
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
 /* await page.getByRole('textbox', { name: 'Add another email address...' }).fill('igor.pejin+anselquotetest@joinansel.com');
  await page.getByRole('button', { name: 'Send' }).click(); */

  // 🔚 Back to dashboard and go to underwriting
  await page.getByRole('button', { name: 'Back to quotes dashboard' }).click();
  await page.goto(config.urlUnderWriting);

  // 🔐 Salesforce login
  await page.getByRole('textbox', { name: 'Username' }).fill(config.userNameSF);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.paswordSF);
  await page.getByRole('button', { name: config.loginButtonName }).click( { force: true });
 await page.waitForTimeout(3000);
  
 

// Find the row link by visible text inside the Quote Name column
 const quoteLink = page.getByRole('link', { name: randomCompanyName }).first();

await quoteLink.click();
console.log(`✅ Clicked quote: ${randomCompanyName}`);


await page.waitForTimeout(3000); // Allow dropdown results to load 

await page.waitForTimeout(3000); // Allow dropdown results to load
  
  
  console.log(`✅ Clicked quote row for: ${randomCompanyName}`);
await page.getByTitle('Approved').click();
await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
await page.waitForTimeout(5000);
await page.getByTitle('Issued').click();

await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
await page.waitForTimeout(6000);


  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(2000);

  const proposalLink = page.getByRole('link', { name: /https:\/\/qa-ansel-platform/ });
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
  const randomEmail = `igor.pejin+${faker.string.alphanumeric(8).toLowerCase()}@joinansel.com`;

  const ackFirstName = faker.person.firstName();
  const ackLastName = faker.person.lastName();
  const ackEmail = `igor.pejin+${faker.string.alphanumeric(8).toLowerCase()}@joinansel.com`;
  await newPage.locator('input[name="contactFirstName"]').fill(firstName);
  await newPage.locator('input[name="contactLastName"]').fill(lastName);
  await newPage.locator('input[name="contactEmail"]').fill(randomEmail);
  await newPage.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');
  await newPage.getByText('Ansel enrollment platform').click();

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
// Here the new page has to open
await page.waitForTimeout(10000);

// Create password 
await page.goto('https://qa-ansel-platform.joinansel.com/support/login');
await page.getByRole('textbox', { name: 'Username' }).fill('ipejin@brexus.com');
await page.getByRole('textbox', { name: 'Password' }).fill('NupMOalbonJzvgl51nSnm!');
await page.waitForTimeout(30000);

await page.getByRole('button', { name: 'Login' }).click();

await page.getByRole('link', { name: 'Email List' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('table a').first().click();
  // Optional scroll to ensure form loads
for (let i = 0; i < 10; i++) await page.mouse.wheel(0, 300);

// Wait for the password link to appear (no need to click "Create account")
const linkElement = await page.waitForSelector('a[href*="/employer/setPassword"]', { timeout: 5000 });
const resetUrl = await linkElement.getAttribute('href');

console.log('Extracted reset URL:', resetUrl);

// Navigate to password setup page
if (resetUrl) {
  await page.goto(resetUrl);
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');
  await page.locator('input[type="checkbox"]').check({ force: true });
  // await page.getByRole('button', { name: 'Continue' }).click();
} else {
  throw new Error('Password setup link not found.');
}


});