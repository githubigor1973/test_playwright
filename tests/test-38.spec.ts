import { test, expect } from '@playwright/test';

test('Shopping link extraction and flow with fresh start', async ({ page, context }) => {
  test.setTimeout(120_000);

  console.log('🚀 Starting login...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000JP9MvYAL/view');
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  console.log('✅ Logged into Salesforce');

  await page.getByRole('tab', { name: 'Related' }).click();

  for (let i = 0; i < 10; i++) await page.mouse.wheel(0, 60);
  const csLink = page.getByRole('link', { name: /^CS-/ });

  try {
    await csLink.click({ timeout: 5000 });
  } catch {
    await csLink.click({ force: true });
  }
  await page.waitForTimeout(1000);
  await page.getByRole('tab', { name: 'Related' }).click();
  await page.getByRole('link', { name: 'Prospectives (6+)' }).click();
  await page.getByRole('heading', { name: 'Prospectives' }).click();

  const firstNameLink = page.locator('a.slds-truncate >> visible=true').first();
  await firstNameLink.click({ force: true });

  await page.getByRole('tab', { name: 'Details' }).click();
  for (let i = 0; i < 10; i++) await page.mouse.wheel(0, 100);

  const ssn = await page.locator('lightning-formatted-text').filter({ hasText: /^\d{3}-\d{2}-\d{4}$/ }).first().innerText();
  const dobRaw = await page
    .locator('lightning-formatted-text')
    .locator('xpath=../../..')
    .filter({ hasText: 'Date of Birth' })
    .locator('lightning-formatted-text')
    .innerText();

  let [month, day, year] = dobRaw.split('/');
  const dob = `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`;
  console.log(`🧬 SSN: ${ssn} | DOB: ${dob}`);

  await page.getByRole('button', { name: 'Get The Link' }).click();

  // 🧠 Extract shopping link reliably
  // Extract link with retry
let shoppingLink = '';
for (let attempt = 0; attempt < 10; attempt++) {
  const textareas = await page.locator('textarea').all();
  for (const area of textareas) {
    const val = (await area.inputValue()).trim();
    console.log(`🧪 Found textarea value (attempt ${attempt + 1}): ${val}`);
    if (val.startsWith('https://qa-ansel-platform.joinansel.com/enrollment')) {
      shoppingLink = val;
      break;
    }
  }
  if (shoppingLink) break;
  await page.waitForTimeout(1000);
}

if (!shoppingLink) {
  throw new Error('❌ No valid shopping link found. All attempts failed.');
}

console.log(`✅ Final extracted shopping link: ${shoppingLink}`);

// ✅ DEBUG check to prevent bad navigation
if (!shoppingLink.startsWith('https://')) {
  throw new Error(`🛑 Link is invalid: "${shoppingLink}"`);
}

// Reset local storage + open in new page
const newPage = await context.newPage();
await newPage.goto('about:blank');
await newPage.evaluate(() => {
  localStorage.clear();
  sessionStorage.clear();
  console.log('🧼 Cleared storage');
});

// 🔥 Now navigate to the actual link
await newPage.goto(shoppingLink, { waitUntil: 'domcontentloaded' });
console.log(`🚀 Navigated to: ${shoppingLink}`);

  // ✅ Begin flow
  await newPage.getByRole('button', { name: 'Next step' }).click();
  await newPage.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill(dob);
  await newPage.getByRole('textbox', { name: 'XXX-XX-XXXX' }).fill(ssn);
  await newPage.getByRole('button', { name: 'Next step' }).click();
  console.log('🔓 Verification passed');
  
  // Handle marital & parent options if not already selected
  const marriedNo = newPage.getByRole('radio', { name: 'No' });
  const parentNone = newPage.getByRole('radio', { name: "I'm not a parent" });

  if (!(await marriedNo.isChecked())) await marriedNo.click();
  if (!(await parentNone.isChecked())) await parentNone.click();

  await newPage.getByRole('button', { name: 'Next step' }).click();
  console.log('👪 Household questions done');

  // Optional steps...
  await newPage.getByRole('button', { name: 'Next step' }).click();
  console.log('✅ Flow continues...');
});