import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/login');

  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+noxh6zq0@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Login' }).click();

  const frameLocator = page.frameLocator('iframe[title="ds"]');
  await page.waitForTimeout(10000);

  // ✅ Only click if 'I agree to use electronic' appears
  const agreeText = frameLocator.locator('span').filter({ hasText: 'I agree to use electronic' }).first();
  if (await agreeText.isVisible()) {
    await agreeText.click();
    console.log('✅ Clicked agree to use electronic');
  }

  // ✅ Access iframe element and safely handle all docuSign steps
  const iframeHandle = await page.locator('iframe[title="ds"]').elementHandle();
  const myFrame = await iframeHandle?.contentFrame();

  if (myFrame) {
    // ✅ Navigate button
    const navigateBtn = await myFrame.$('#navigate-btn');
    if (navigateBtn) {
      await navigateBtn.click();
      console.log('✅ Clicked navigate button');
    }

    // ✅ Required Sign button #1
    const signHereBtn1 = await myFrame.$('button:has-text("Required - Sign Here")');
    if (signHereBtn1) {
      await signHereBtn1.click();
      console.log('✅ Clicked first sign here button');
    }

    // ✅ Signature style selection
    const styleOption = await myFrame.$('text=Jaida Schultz');
    if (styleOption) {
      await styleOption.click();
      console.log('✅ Selected signature style');
    }

    // ✅ Adopt & Sign
    const adoptBtn = await myFrame.$('button:has-text("Adopt and Sign")');
    if (adoptBtn) {
      await adoptBtn.click();
      console.log('✅ Clicked adopt and sign');
    }

    // ✅ Required Sign button #2
    const signHereBtn2 = await myFrame.$('button:has-text("Required - Sign Here")');
    if (signHereBtn2) {
      await signHereBtn2.click();
      console.log('✅ Clicked second sign here button');
    }
  } else {
    console.log('❌ Iframe not found');
  }

  await page.waitForTimeout(3000);
});