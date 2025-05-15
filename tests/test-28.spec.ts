import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { addDays, format } from 'date-fns';
import { chromium } from '@playwright/test';


test('Submit proposal form with dynamic data', async ({ page }) => {
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Quote/0Q0QL000001KU2z0AG/view');

  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(1000);

  const proposalLink = page.getByRole('link', { name: /https:\/\/qa-ansel-platform/ });
  
  


  await proposalLink.scrollIntoViewIfNeeded();
const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    proposalLink.click(),
  ]);
  
  

  await newPage.waitForLoadState();

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

  // --- 🗓️ Pick Start Date ---
  const today = format(new Date(), 'MM/dd/yyyy');
  const threeWeeksLater = format(addDays(new Date(), 21), 'MM/dd/yyyy');
  
  // 2. Remove readonly and type for Start Date
  await newPage.evaluate(() => {
    const input = document.querySelector('input[name="enrollmentStartDate"]');
    if (input) input.removeAttribute('readonly');
  });
  await newPage.locator('input[name="enrollmentStartDate"]').fill(today);
  
  // 3. Remove readonly and type for End Date
  await newPage.evaluate(() => {
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
  /* const acceptButton = newPage.locator('button:has-text("Accept"):not([disabled])');
await acceptButton.waitFor({ state: 'visible' });

// Then click it
await acceptButton.click(); */
});