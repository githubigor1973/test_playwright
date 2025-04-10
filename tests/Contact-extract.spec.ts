 /*import { test, expect } from '@playwright/test';

test('🔍 Extract Roster Member Name from record page', async ({ page }) => {
  console.log('🌐 Navigating to Roster Member record...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Roster_Member__c/a9VQL000000AcDj2AK/view');

  console.log('🔐 Logging into Salesforce...');
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  // Wait for Lightning page to load
  await page.waitForTimeout(5000);

  // Locate field by label
  const label = page.locator('.test-id__field-label', { hasText: 'Roster Member Name' });
  const valueLocator = label.locator('xpath=ancestor::div[contains(@class,"slds-form-element")]//lightning-formatted-text');

  const value = await valueLocator.innerText();

  console.log(`🧾 Roster Member Name: ${value.trim()}`);
}); */

/* import { test, expect } from '@playwright/test';

test('Extract Roster Member Details', async ({ page }) => {
  console.log('🌐 Navigating to Roster Member detail page...');
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Roster_Member__c/a9VQL000000AcDj2AK/view', {
    waitUntil: 'domcontentloaded'
  });

  console.log('🔐 Logging in...');
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  console.log('⏳ Waiting for page content to load...');
  await page.waitForTimeout(4000);

  // Targeting the detail panel
  const fieldsToExtract = [
    'Roster Member Name',
    'First Name',
    'Last Name',
    'Gender',
    'Date of Birth',
    'SocialSecurityNumber',
    'Email',
    'Phone',
    'Mobile Phone',
    'Status',
    'Role',
    'Age',
    'Street',
    'City',
    'Postal Code',
    'State',
    'Strategic Partner Name',
    'Owner'
  ];

  for (const label of fieldsToExtract) {
    const field = page.locator(`div.slds-form-element__label:text-is("${label}")`).first();
    const value = field.locator('xpath=..').locator('.slds-form-element__control span');

    try {
      const isVisible = await field.isVisible();
      if (isVisible) {
        const fieldValue = await value.textContent();
        console.log(`✅ ${label}: ${fieldValue?.trim() || '[Empty]'}`);
      } else {
        console.warn(`⚠️ ${label} not visible.`);
      }
    } catch (err) {
      console.error(`❌ Error extracting ${label}:`, err.message);
    }
  }

  console.log('✅ Extraction complete!');
}); */

import { test, expect } from '@playwright/test';

test('📄 Extract all visible fields from Roster Member page (multi-section)', async ({ page }) => {
  console.log('🌐 Navigating to Roster Member record...');
  await page.goto('https://ansel2-dev-ed.develop.lightning.force.com/lightning/r/Contact/003WU00000KMzEZYA1/view');

  console.log('🔐 Logging into Salesforce...');
  await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
  await page.getByRole('button', { name: 'Log In' }).click();

  console.log('⏳ Waiting for page content...');
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.waitForTimeout(2000);
  await page.waitForSelector('.test-id__field-label');
  await page.waitForTimeout(3000);

  // 🔄 Scroll to bottom slowly to force lazy-loaded fields
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(300);
  }

  const labels = await page.locator('.test-id__field-label').all();

  if (labels.length === 0) {
    console.log('⚠️ No field labels found on the page.');
    return;
  }

  console.log(`\n🔍 Found ${labels.length} fields. Extracting values...\n`);

  for (const label of labels) {
    try {
      const labelText = (await label.textContent())?.trim() || '[No Label]';

      const container = label.locator('xpath=../../..'); // Go to field container
      const valueLocator = container.locator('.test-id__field-value');

      let valueText = '[No Value]';
      if (await valueLocator.count()) {
        valueText = (await valueLocator.first().textContent())?.trim() || '[No Value]';
      }

      console.log(`📄 ${labelText}: ${valueText}`);
    } catch (err) {
      console.error('❌ Failed extracting field:', err);
    }
  }

  console.log('\n✅ Extraction complete!');
});