import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');


  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+noxh6zq0@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.goto('https://qa-ansel-platform.joinansel.com/employer/accountCreation/docusign');

   const frame = await page.frameLocator('iframe[title="ds"]');
   await page.waitForTimeout(10000);
  //await frame.locator('span').filter({ hasText: 'I agree to use electronic' }).first().click();  
  const agreeText = frame.locator('span').filter({ hasText: 'I agree to use electronic' }).first();

  if (await agreeText.isVisible()) {
    await agreeText.click();
  }
  // 1. Navigate button
/* const navigateBtn = frame.locator('#navigate-btn');
if (await navigateBtn.isVisible()) {
  await navigateBtn.click();
} */
await page.locator('iframe[title="ds"]').contentFrame().locator('#navigate-btn').click();

// 2. First "Required - Sign Here" button
const requiredSignFirst = frame.getByRole('button', { name: 'Required - Sign Here' }).first();
if (await requiredSignFirst.isVisible()) {
  await requiredSignFirst.click();
}

// 3. Signature style option
const signatureOption = frame.getByLabel('Select Style').getByText('Jaida Schultz');
if (await signatureOption.isVisible()) {
  await signatureOption.click();
}

// 4. "Adopt and Sign" button
const adoptSignBtn = frame.getByRole('button', { name: 'Adopt and Sign' });
if (await adoptSignBtn.isVisible()) {
  await adoptSignBtn.click();
}

// 5. Second "Required - Sign Here" button
const requiredSignSecond = frame.getByRole('button', { name: 'Required - Sign Here' });
if (await requiredSignSecond.isVisible()) {
  await requiredSignSecond.click();
}
await page.waitForTimeout(3000);



// 6. Finish button
// Correct way to get iframe's elementHandle
const iframeHandle = await page.locator('iframe[title="ds"]').elementHandle();

// Then get its internal frame
const myFrame = await iframeHandle?.contentFrame();

if (myFrame) {
  console.log('✅ Iframe located successfully.');

  const signButton = await myFrame.$('#navigate-btn');

  if (signButton) {
    await signButton.scrollIntoViewIfNeeded();
    await signButton.click();
    console.log('✅ Clicked Sign button (navigate-btn) inside iframe.');
  } else {
    console.log('⚠️ Sign button not found inside iframe.');
  }
} else {
  console.log('❌ Iframe not available or failed to load.');
}

  await page.locator('iframe[title="ds"]').contentFrame().locator('#action-bar-btn-finish').click();
});