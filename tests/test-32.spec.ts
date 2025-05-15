import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import createCSV from './utils/generate-csv';
import { config } from './test.config';
import { addDays, format } from 'date-fns';

test('test with dynamic Employer name and State', async ({ page }) => {
  test.setTimeout(120_000);

  console.log('🛠️  Generating CSV...');
  const csvPath = await createCSV(10);
  console.log(`📄 CSV created at: ${csvPath}`);

  console.log('🔐 Logging into Ansel...');
  await page.goto(config.urlPP);
  await page.getByRole('textbox', { name: 'Enter your email' }).fill(config.userNamePP);
  await page.locator('input[name="password"]').fill(config.passWord);
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('📌 Navigating quote setup flow...');
  await page.getByRole('button', { name: 'Request a quote' }).click();
  await page.locator('label').filter({ hasText: 'damian test6360' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: '+ Add employer' }).click();

  const allowedStates = ['Texas', 'California', 'Florida', 'Ohio', 'Georgia'];
  const randomCompanyName = faker.company.name();
  const randomCity = faker.location.city();
  const randomState = faker.helpers.arrayElement(allowedStates);

  console.log(`🏢 Creating quote for: ${randomCompanyName}, ${randomCity}, ${randomState}`);

  await page.locator('input[name="companyName"]').fill(randomCompanyName);
  await page.locator('input[name="sicCode"]').fill('1');
  await page.getByText('- Rice').click();
  await page.locator('input[name="city"]').fill(randomCity);
  await page.getByRole('combobox').getByRole('textbox').fill(randomState);
  await page.getByRole('option', { name: randomState }).click();
  await page.locator('input[name="eligibleEmployees"]').fill('20');
  await page.getByRole('button', { name: 'Next step' }).click();

  console.log('📆 Selecting coverage date...');
  await page.getByRole('listbox').filter({ hasText: 'May 1, 2025Jun 1, 2025Jul 1,' }).click();
  await page.getByRole('option', { name: 'Jun 1,' }).click();
  await page.getByRole('textbox', { name: 'Ex. All full-time employees' }).fill('Class A');
  await page.getByRole('button', { name: 'Next step' }).click();

  console.log('📎 Uploading census file...');
  await page.locator('input[type="file"]').setInputFiles(csvPath);
  await page.getByRole('button', { name: 'Next step' }).click();

  console.log('🗂️ Mapping BirthDate...');
  const listbox = page.getByRole('row', { name: /Date of birth/i }).getByRole('listbox');
  await listbox.click();
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(100);
  }
  await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Next step' }).click();
  await page.getByRole('button', { name: 'Next step' }).click();

  console.log('✅ Finalizing and submitting...');
  await page.getByText('Yes').click();
  await page.getByText('Accident').click();
  await page.getByText('Accident').click();
  await page.getByRole('button', { name: 'Next step' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Add another email address...' }).fill('igor.pejin+anselquotetest@joinansel.com');
  await page.getByRole('button', { name: 'Send' }).click();

  console.log('↩️ Back to quotes dashboard, going to Underwriting...');
  await page.getByRole('button', { name: 'Back to quotes dashboard' }).click();
  await page.goto(config.urlUnderWriting);

  console.log('🔐 Logging into Salesforce...');
  await page.getByRole('textbox', { name: 'Username' }).fill(config.userNameSF);
  await page.getByRole('textbox', { name: 'Password' }).fill(config.paswordSF);
  await page.getByRole('button', { name: config.loginButtonName }).click();
  await page.waitForTimeout(2000);

  console.log(`🔍 Searching for: ${randomCompanyName}`);
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox').fill(randomCompanyName);
  await page.waitForTimeout(2000);

  const quoteRow = page.getByRole('rowheader', { name: new RegExp(`${randomCompanyName} \\|`) });
  await page.waitForTimeout(3000);
  await expect(quoteRow).toBeVisible();
  await quoteRow.getByRole('link').click();

  console.log(`✅ Clicked quote row for: ${randomCompanyName}`);

  await page.getByTitle('Approved').click();
  await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
  await page.waitForTimeout(4000);
  await page.getByTitle('Issued').click();
  await page.locator('button').filter({ hasText: 'Mark as Current Status' }).click();
  await page.waitForTimeout(5000);

  console.log('🔍 Opening quote details and proposal link...');
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1000);

  const proposalLink = page.getByRole('link', { name: /https:\/\/qa-ansel-platform/ });
  await proposalLink.scrollIntoViewIfNeeded();

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    proposalLink.click(),
  ]);

  console.log('📝 Filling proposal form...');
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
  await newPage.getByText('Ansel enrollment platform').click();

  const today = format(new Date(), 'MM/dd/yyyy');
  const threeWeeksLater = format(addDays(new Date(), 21), 'MM/dd/yyyy');

  await newPage.evaluate(() => {
    const input = document.querySelector('input[name="enrollmentStartDate"]');
    if (input) input.removeAttribute('readonly');
  });
  await newPage.locator('input[name="enrollmentStartDate"]').fill(today);

  await newPage.evaluate(() => {
    const input = document.querySelector('input[name="enrollmentEndDate"]');
    if (input) input.removeAttribute('readonly');
  });
  await newPage.locator('input[name="enrollmentEndDate"]').fill(threeWeeksLater);

  await newPage.locator('input[name="ackFirstName"]').fill(ackFirstName);
  await newPage.locator('input[name="ackLastName"]').fill(ackLastName);
  await newPage.locator('input[name="ackEmail"]').fill(ackEmail);

  await newPage.getByText('By checking this box, I agree').click();

  console.log('✅ Proposal filled successfully');

  const acceptButton = newPage.locator('button:has-text("Accept"):not([disabled])');
  await acceptButton.waitFor({ state: 'visible' });
  await acceptButton.click();

  console.log('🚀 Proposal accepted and process complete!');
});