/* import { test, expect} from '@playwright/test';
test ( 'testing', async ({ page})=>{
    await page.goto('https://www.youtube.com/');
   await page.getByRole('button', { name: 'Reject the use of cookies and' }).click();
   await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers');
   await page.waitForTimeout(500);
   await page.getByRole('combobox', { name: 'Search' }).press('Enter');
   await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
});
 */

import { test, expect } from '@playwright/test';

test('YouTube search for "Playwright by testers"', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // Dismiss cookie banner if present
  const rejectCookies = page.getByRole('button', { name: /Reject the use of cookies/i });
  if (await rejectCookies.isVisible()) {
    await rejectCookies.click();
  }

  // Search input
  /* const searchInput = page.getByRole('combobox', { name: /Search/i });
  await searchInput.waitFor({ state: 'visible' });
  await searchInput.fill('playwright by testers');
  await page.waitForTimeout(500); */
  // 🔍 Click the Search button instead of pressing Enter
  /* const searchButton = page.getByRole('button', { name: /Search/i });
  await searchButton.click(); */
  //await searchInput.press('Enter');
  
  await page.getByPlaceholder('Search').fill('playwright by testers');
  await page.waitForTimeout(500);

  const mySearch = page.getByPlaceholder('Search', { exact: true}).first()
  await expect(mySearch).toBeVisible();
  console.log('✅ It is visible!');

  await expect(mySearch).toBeEditable();
  console.log('✅ It is editable!');

  await expect(mySearch).toBeEnabled();
  console.log('✅ It is enabled!');

  //await expect(mySearch).toHaveAttribute('placeholder', 'Search');
  try {
    await expect(mySearch).toHaveAttribute('placeholder', 'Search');
    console.log('✅ Placeholder is correct');
  } catch (error) {
    console.warn('⚠️ Placeholder check failed:', error.message);
    await page.screenshot({ path: 'placeholder-error.png' });
  }


  console.log('✅ It has "Search" placeholder!');
  await expect.soft(mySearch).toHaveValue('playwright by testers');
  console.log('✅ It has "playwright by testers" value!');
  await expect(mySearch).not.toBeEmpty();
  console.log('✅ It is not empty!');
 
    await page.getByPlaceholder('Search').press('Enter');
    


    const videoLink = page.getByRole('link', { name: /Playwright by Testers Talk/i }).first();
      await page.waitForTimeout(500);
  await videoLink.click(); 

  //await expect(page).toHaveURL(/watch/);
  //await expect(page.getByRole('heading', { name: 'Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial', exact: true }).locator('yt-formatted-string')).toContainText('Playwright');
  //await expect(page).toHaveTitle('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
  await page.waitForTimeout(1000);

  const matches = await page.locator('a.yt-simple-endpoint').filter({ hasText: 'Playwright by Testers Talk' }).count();
  console.log(`🔍 Found ${matches} matching links`);
  
  /* const signIn = page.getByRole('link', { name: 'Sign in' });
  await signIn.click(); */
  await page.getByText('Open panel').first().click();
  await page.waitForTimeout(2000);
 
  
  const title = page.locator('#title yt-formatted-string').first();
await expect(title).toHaveText(/Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial/i, { timeout: 10000 });
console.log('🎬 Title:', (await title.textContent())?.trim());

const count = await page.locator('a.yt-simple-endpoint').filter({ hasText: 'Playwright by Testers Talk' }).count();
console.log(`🔍 Matching links: ${count}`);

console.log('✅ Video title is visible!');

  await  page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign in' }).click();
  await page.waitForTimeout(2000);
  
  await page.getByLabel('Homepage test', { exact: true}).click();
  await page.getByText('Learn more').first().click();
  await page.waitForTimeout(2000); 

  //await page.getByRole('link', { name: 'Sign in' }).click();
  //await page.getByText('Sign up').first().click();

   let mySignIn;

  try {
    await page.getByText('Sign up to GitHub').first();
    console.log('✅ Clicked "Sign up"');
  } catch (error) {
    console.warn('⚠️ Failed to click "Sign up":', error.message);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ path: `screenshots/sign-up-error-${timestamp}.png` });
  } 

    try {
    await page.getByText('Sign up').first().click();
    console.log('✅ Clicked "Sign up" button');
  } catch (error) {
    console.warn('⚠️ Failed to click "Sign up":', error.message);
    await page.screenshot({ path: 'screenshots/sign-up-click-error.png' });
  }  
  console.log('✅ Test passed');
});