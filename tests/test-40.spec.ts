import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const screenshotDir = '40-test';

if ( fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(file => {
    fs.unlinkSync(path.join(screenshotDir, file));
  });
}else {
  fs.mkdirSync(screenshotDir);
}

 async function logAndScreenshot(page, dir: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${dir}/${step}.png`});
 }



test('test', async ({ page }) => {
  await page.goto('https://ansel2-dev-ed.develop.lightning.force.com/lightning/r/Contact/003WU00000KMzEZYA1/view');
  await page.getByRole('textbox', { name: 'Username'}).fill('pejinigor@gmail.com');
  await page.getByRole('textbox', { name: 'Password'}).fill('Test123456');
  await logAndScreenshot(page, screenshotDir, '1 Login', 'Login page loaded');
  await page.getByRole('button', { name: 'Log in'}).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.waitForTimeout(2000);
  await logAndScreenshot(page, screenshotDir, '2 Launcher', 'App Launcher loaded');

  await page.getByRole('option', { name: 'Service', exact: true }).click();

  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByRole('link', { name: 'Dickenson plc', exact: true }).click();
  await page.waitForTimeout(2000);
  await logAndScreenshot(page, screenshotDir, '3 Dickenson', 'Dickenson plc loaded');
}); 



/* import fs from 'fs';
import path from 'path';

import { test, expect } from '@playwright/test';

const screenshotDir = 'test-40';


if ( fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(test => {
    fs.unlinkSync(path.join(screenshotDir, test));
  });
}else {
  fs.mkdirSync(screenshotDir);
}


async function logAndScreenshot(page, dir: string, step: string, message: string) {
  console.log(message);
  await page.screenshot({ path: `${dir}/${step}.png`});
}

test('🔐 Login and navigate to Dickenson plc Account record', async ({ page }) => {
  await test.step('🌐 Navigate to Salesforce login page', async () => {
    await page.goto('https://ansel2-dev-ed.develop.lightning.force.com/lightning/r/Contact/003WU00000KMzEZYA1/view');
  });

  await test.step('🔑 Log into Salesforce', async () => {
    await page.getByRole('textbox', { name: 'Username' }).fill('pejinigor@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Test123456');
    //  await logAndScreenshot(page, screenshotDir, '1-login', '📸 Login page loaded');
await logAndScreenshot(page, screenshotDir, '40-login', ' Login page loaded');
    await page.getByRole('button', { name: 'Log in' }).click();

    // Wait for homepage to load
    await expect(page.getByRole('button', { name: 'App Launcher' })).toBeVisible();
  });
  await test.step('🧭 Open Service App from App Launcher', async () => {
    await page.getByRole('button', { name: 'App Launcher' }).click();

    const service = page.getByRole('option', { name: 'Service', exact: true });
    
    await expect(service).toBeVisible();   await logAndScreenshot(page, screenshotDir, '40-Service', ' Service loaded');

    await service.click();

    });

  await test.step('🏢 Navigate to Accounts > Dickenson plc', async () => {
    await page.getByRole('link', { name: 'Accounts' }).click();
    await logAndScreenshot(page, screenshotDir, '40-Accounts', 'Accounts loaded');
    await page.waitForTimeout(3000);

    const dickenson = page.getByRole('link', { name: 'Dickenson plc', exact: true });
    await expect(dickenson).toBeVisible();
    await dickenson.click();
  });

  console.log('✅ Navigation to Dickenson plc complete.');
}); */