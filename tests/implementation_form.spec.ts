/* 
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { format, addDays } from 'date-fns';
import createCSV from './utils/generate-csv';

test('Generate and follow Implementation Link with CSV upload', async ({ page }) => {
  console.log('🔐 Logging into Salesforce...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000JP9MvYAL/view');

  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  console.log('🧭 Navigating to contract page and clicking "Get The Link"...');
  await page.getByRole('button', { name: 'Get The Link' }).click();

  const textArea = page.locator('textarea');
  await expect(async () => {
    const value = await textArea.inputValue();
    expect(value).toMatch(/^https:\/\/.+/);
  }).toPass({ timeout: 10000 });

  const link = await textArea.inputValue();
  console.log(`✅ Implementation link extracted: ${link}`);

  console.log('🌐 Opening implementation link...');
  await page.goto(link, { waitUntil: 'domcontentloaded' });

  // Generate random input values
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;

  const tomorrow = addDays(new Date(), 1);
  const launchDate = format(tomorrow, 'MM/dd/yyyy');
  const enrollmentStart = format(tomorrow, 'MM/dd/yyyy');
  const enrollmentEnd = format(addDays(tomorrow, 21), 'MM/dd/yyyy');

  console.log(`👤 Name: ${firstName} ${lastName}`);
  console.log(`📧 Email: ${email}`);
  console.log(`📅 Dates → Launch: ${launchDate}, Start: ${enrollmentStart}, End: ${enrollmentEnd}`);

  console.log('📝 Filling out the implementation form...');
  await page.getByText('Email').first().click();
  await page.getByRole('combobox').locator('i').click();
  await page.locator('input[name="eligible"]').fill('20');
  await page.getByText('Monthly', { exact: true }).click();
  await page.getByText('No', { exact: true }).click();

  await page.locator('input[name="billingContactFirstName"]').fill(firstName);
  await page.locator('input[name="billingContactLastName"]').fill(lastName);
  await page.locator('input[name="billingContactEmail"]').fill(email);
  await page.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');

  await page.getByText('Email').nth(3).click();
  await page.getByText('Date of hire', { exact: true }).click();
  await page.getByText('14').click(); // Adjust if needed

  await page.locator('input[name="launchDate"]').fill(launchDate);
  await page.locator('input[name="enrollmentStart"]').fill(enrollmentStart);
  await page.locator('input[name="enrollmentEnd"]').fill(enrollmentEnd);

  console.log('⬇️ Scrolling down to activate the Next Step button...');
  await page.locator('div').filter({ hasText: 'Implementation setupfor Kub,' }).nth(3).scrollIntoViewIfNeeded();
  await page.locator('div').filter({ hasText: 'Implementation setupfor Kub,' }).nth(3).click();

  await page.getByRole('button', { name: 'Next Step' }).click();
  console.log('👉 Proceeded to census upload step.');

  console.log('📁 Generating census CSV...');
  const csvPath = await createCSV(20);
  console.log(`📄 CSV generated at: ${csvPath}`);

  console.log('📤 Uploading census file...');
  await page.locator('input[type="file"]').setInputFiles(csvPath);

  console.log('✅ Census file uploaded. Proceeding to next step...');
  await page.getByText('I verify that all employees').click();
  await page.getByRole('button', { name: 'Next Step' }).click();

  // Select First name
await page.getByRole('row', { name: 'First name*' }).locator('i').click();
await page.getByRole('option', { name: 'FirstName' }).click();
console.log('✅ Mapped: First name -> FirstName');

// Select Last name
await page.getByRole('row', { name: 'Last name*' }).locator('i').click();
await page.getByRole('option', { name: 'LastName' }).click();
console.log('✅ Mapped: Last name -> LastName');

// Select Date of birth
await page.getByRole('row', { name: 'Date of birth*' }).locator('i').click();
await page.getByRole('option', { name: 'BirthDate' }).click();
console.log('✅ Mapped: Date of birth -> BirthDate');

// Select Social Security Number
await page.getByRole('row', { name: 'Social Security Number*' }).locator('i').click();
await page.getByRole('option', { name: 'SSN' }).click();
console.log('✅ Mapped: SSN -> SSN');
 
 await page.getByRole('button', { name: 'Submit' }).click();
  console.log('🎉 Form submitted successfully.');
}); */

/* import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { format, addDays } from 'date-fns';
import createCSV from './utils/generate-csv';

test('Generate and follow Implementation Link with CSV upload', async ({ page }) => {
  console.log('🔐 Logging into Salesforce...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000JP9MvYAL/view');

  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  console.log('🧭 Navigating to contract page and clicking "Get The Link"...');
  await page.getByRole('button', { name: 'Get The Link' }).click();

  const textArea = page.locator('textarea');
  await expect(async () => {
    const value = await textArea.inputValue();
    expect(value).toMatch(/^https:\/\/.+/);
  }).toPass({ timeout: 10000 });

  const link = await textArea.inputValue();
  console.log(`✅ Implementation link extracted: ${link}`);

  console.log('🌐 Opening implementation link...');
  await page.goto(link, { waitUntil: 'domcontentloaded' });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;

  const tomorrow = addDays(new Date(), 1);
  const launchDate = format(tomorrow, 'MM/dd/yyyy');
  const enrollmentStart = format(tomorrow, 'MM/dd/yyyy');
  const enrollmentEnd = format(addDays(tomorrow, 21), 'MM/dd/yyyy');

  console.log(`👤 Name: ${firstName} ${lastName}`);
  console.log(`📧 Email: ${email}`);
  console.log(`📅 Dates → Launch: ${launchDate}, Start: ${enrollmentStart}, End: ${enrollmentEnd}`);

  await page.getByText('Email').first().click();
  await page.getByRole('combobox').locator('i').click();
  await page.locator('input[name="eligible"]').fill('20');
  await page.getByText('Monthly', { exact: true }).click();
  await page.getByText('No', { exact: true }).click();

  await page.locator('input[name="billingContactFirstName"]').fill(firstName);
  await page.locator('input[name="billingContactLastName"]').fill(lastName);
  await page.locator('input[name="billingContactEmail"]').fill(email);
  await page.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');

  await page.getByText('Email').nth(3).click();
  await page.getByText('Date of hire', { exact: true }).click();
  await page.getByText('14').click();

  await page.locator('input[name="launchDate"]').fill(launchDate);
  await page.locator('input[name="enrollmentStart"]').fill(enrollmentStart);
  await page.locator('input[name="enrollmentEnd"]').fill(enrollmentEnd);

  console.log('⬇️ Scrolling down to activate Next Step...');
  await page.locator('div').filter({ hasText: 'Implementation setupfor Kub,' }).nth(3).scrollIntoViewIfNeeded();
  await page.locator('div').filter({ hasText: 'Implementation setupfor Kub,' }).nth(3).click();

  await page.getByRole('button', { name: 'Next Step' }).click();
  console.log('👉 Proceeded to census upload step.');

  console.log('📁 Generating census CSV...');
  const csvPath = await createCSV(20);
  console.log(`📄 CSV created at: ${csvPath}`);

  console.log('📤 Uploading census file...');
  await page.locator('input[type="file"]').setInputFiles(csvPath);

  console.log('✅ Census uploaded. Proceeding...');
  await page.getByText('I verify that all employees').click();
  await page.getByRole('button', { name: 'Next Step' }).click();

  await page.getByRole('row', { name: 'First name*' }).locator('i').click();
  await page.getByRole('option', { name: 'FirstName' }).click();
  console.log('✅ Mapped: First name');

  await page.getByRole('row', { name: 'Last name*' }).locator('i').click();
  await page.getByRole('option', { name: 'LastName' }).click();
  console.log('✅ Mapped: Last name');

  await page.getByRole('row', { name: 'Date of birth*' }).locator('i').click();
  await page.getByRole('option', { name: 'BirthDate' }).click();
  console.log('✅ Mapped: DOB');

  await page.getByRole('row', { name: 'Social Security Number*' }).locator('i').click();
  await page.getByRole('option', { name: 'SSN' }).click();
  console.log('✅ Mapped: SSN');

  await page.getByRole('button', { name: 'Submit' }).click();
  console.log('🎉 Form submitted!');
}); */

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { format, addDays } from 'date-fns';
import createCSV from './utils/generate-csv';
import { generateCompanyData } from './utils/company-data';

test('Generate and follow Implementation Link with CSV upload', async ({ page }) => {
  const companyData = generateCompanyData();
  const { companyName } = companyData;

  console.log('🔐 Logging into Salesforce...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000JnLWbYAN/view');

  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(4000); // let contracts load

  // 🔍 Search for the latest contract matching the company name
  const searchInput = page.locator('input[placeholder="Search this list..."]');
  await searchInput.fill(companyName);
  await searchInput.press('Enter');

  await page.waitForTimeout(3000); // wait for filtered results

  // 🔗 Click the most recent contract link with matching company name
  const contractLink = page.getByRole('link', { name: new RegExp(companyName, 'i') }).first();
  await expect(contractLink).toBeVisible({ timeout: 10000 });
  await contractLink.click();

  console.log(`✅ Opened latest contract for: ${companyName}`);

  // 🔗 Click "Get The Link"
  await page.getByRole('button', { name: 'Get The Link' }).click();

  const textArea = page.locator('textarea');
  await expect(async () => {
    const value = await textArea.inputValue();
    expect(value).toMatch(/^https:\/\/.+/);
  }).toPass({ timeout: 10000 });

  const link = await textArea.inputValue();
  console.log(`✅ Implementation link extracted: ${link}`);

  console.log('🌐 Opening implementation link...');
  await page.goto(link, { waitUntil: 'domcontentloaded' });

  // 📋 Fill implementation form
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `igor.pejin+${faker.string.alphanumeric(8)}@joinansel.com`;

  const tomorrow = addDays(new Date(), 1);
  const launchDate = format(tomorrow, 'MM/dd/yyyy');
  const enrollmentStart = launchDate;
  const enrollmentEnd = format(addDays(tomorrow, 21), 'MM/dd/yyyy');

  console.log(`👤 ${firstName} ${lastName} — 📧 ${email}`);
  console.log(`📅 Dates: Launch: ${launchDate}, Start: ${enrollmentStart}, End: ${enrollmentEnd}`);

  await page.getByText('Email').first().click();
  await page.getByRole('combobox').locator('i').click();
  await page.locator('input[name="eligible"]').fill('20');
  await page.getByText('Monthly', { exact: true }).click();
  await page.getByText('No', { exact: true }).click();

  await page.locator('input[name="billingContactFirstName"]').fill(firstName);
  await page.locator('input[name="billingContactLastName"]').fill(lastName);
  await page.locator('input[name="billingContactEmail"]').fill(email);
  await page.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('1234567890');

  await page.getByText('Email').nth(3).click();
  await page.getByText('Date of hire', { exact: true }).click();
  await page.getByText('14').click();

  await page.locator('input[name="launchDate"]').fill(launchDate);
  await page.locator('input[name="enrollmentStart"]').fill(enrollmentStart);
  await page.locator('input[name="enrollmentEnd"]').fill(enrollmentEnd);

  console.log('📁 Generating census CSV...');
  const csvPath = await createCSV(20);
  await page.locator('input[type="file"]').setInputFiles(csvPath);

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

  console.log('🎉 Implementation submitted successfully!');
});