import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { config} from './test.config'; // adjust the path if needed

const screenshotDir = 'test-41';

if (fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(file => {
    fs.unlinkSync(path.join(screenshotDir, file));
  });
} else {
  fs.mkdirSync(screenshotDir);
}
async function logAndScreenshot(page, dir: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${dir}/${step}.png` });
}

test('test', async ({ page }) => {
  await page.goto(config.url);
  await page.pause();

  await page.getByRole('textbox', { name: 'Username' }).fill(config.username);

  await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
  await logAndScreenshot(page, screenshotDir, '1-login', 'Login page loaded');
 /*  function getByConfiguredRole(page, locatorConfig) {
    return page.getByRole(locatorConfig.role, { name: locatorConfig.name });
  }
  
  // usage:
  await getByConfiguredRole(page, config.roles.loginButton).click();   */
  await page.getByRole('button', { name: config.loginButtonName }).click();
  
  const launcher = page.getByRole('button', { name: 'App Launcher' })
  await expect(launcher).toBeVisible();
  await launcher.click();
  await page.waitForTimeout(1000);
  await logAndScreenshot(page, screenshotDir, '2-launcher', 'App Launcher loaded');
  await page.waitForTimeout(1000);

  await page.getByRole('option', { name: 'Service', exact: true }).click();
  const test = page.getByRole('link', { name: 'Accounts' });
  await expect(test).toBeVisible();

  await test.click();
  await page.getByRole('link', { name: 'Dickenson plc' }).click();
  await page.waitForTimeout(3000);
  await logAndScreenshot(page, screenshotDir, '3-accounts', 'Accounts loaded');  
    await page.getByRole('button', { name: 'New' }).click();  
});