import { test, expect } from '@playwright/test';

test('Initial login with MFA, then allowSkip', async ({ page, request }) => {

  // 1. Go to login page and log in manually
  await page.goto('https://qa-ansel-platform.joinansel.com/employer/setPassword/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJFbXBsb3llciIsImludml0ZUlkIjo1ODcwLCJlbXBsb3llcklkIjpudWxsLCJlYVVzZXJJZCI6bnVsbH0.Un3P4r1qG3BzVZsB-HnL5F3_obiFBonJ_qTRr-4Sqg0');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.locator('input[name="confirmPassword"]').fill('Demo123456');
});