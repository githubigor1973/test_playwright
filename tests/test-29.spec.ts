import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import createCSV from './utils/generate-csv'; // ✅ make sure path is right
import { config } from './test.config'; // adjust the path if needed

test('test with dynamic Employer name and State', async ({ page }) => {
  test.setTimeout(120_000); // ⏱️ Increase timeout to 2 minutes

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

  // Date & Class
  await page.getByRole('listbox').filter({ hasText: 'May 1, 2025Jun 1, 2025Jul 1,' }).click();
    await page.getByRole('option', { name: 'Jun 1,' }).click();
  await page.getByRole('textbox', { name: 'Ex. All full-time employees' }).fill('Class A');
  await page.getByRole('button', { name: 'Next step' }).click();

  // CSV Upload
  await page.locator('input[type="file"]').setInputFiles(csvPath);
  await page.getByRole('button', { name: 'Next step' }).click();

  // Map BirthDate
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


  // Final submission and email
  
  await page.getByRole('textbox', { name: 'Add another email address...' }).click();
  await page.getByRole('textbox', { name: 'Add another email address...' }).fill('igor.pejin+anselquotetest@joinansel.com');
  await page.getByRole('button', { name: 'Send' }).click(); 

await page.getByRole('button', { name: 'Back to quotes dashboard' }).click();

await page.goto(config.urlUnderWriting);
await page.getByRole('textbox', { name: 'Username' }).fill(config.username);

  await page.getByRole('textbox', { name: 'Password' }).fill(config.paswordSF);
  await page.getByRole('button', { name: config.loginButtonName }).click();

  await page.getByText('Yes, I accept this proposal').click();
  await page.locator('input[name="contactFirstName"]').fill('Igor');
  await page.locator('input[name="contactLastName"]').fill('Pejin');
  await page.locator('input[name="contactEmail"]').fill('igor.pejin+anselquotetest@joinansel.com');
  await page.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');

await page.getByText('Ansel enrollment platform').click();
await page.getByText('Ansel enrollment platform').click();
await page.getByText('Ansel enrollment platform').click();

await page.getByText('Ansel enrollment platform').fill('Ansel enrollment platform');
await page.locator('input[name="ackLastName"]').fill('Pejin');
await page.locator('input[name="ackEmail"]').fill('igor.pejin+anselquotetest@joinansel.com');
await page.getByText('By checking this box, I agree').click();
});