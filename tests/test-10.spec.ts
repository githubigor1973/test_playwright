/* import { test, expect } from '@playwright/test';

test('my new test', async ({ page }) => {
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('igor.pejin+ba280201037@joinansel.com');
  await page.locator('input[name="password"]').fill('Demo123456');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(20000);
});
 */

  /* for( const text of expectedResults){
    const textLocator = page.locator(`text=${text}`);
    //const textLocator = page.locator(`text=${text}`);  // ✅ Corrected template literal

    await expect(textLocator).toBeVisible({timeout:5000});
  } */
  import { test, expect} from '@playwright/test';

test('This is my new test', async({page})=>{
  await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
  const expectResults = [
    'Sign in to your Member Portal',
    'Enter your details below to access to Ansel',
    'Not yet registered? Create an account'
  ];

  for(const  myText of expectResults){
    const testing = page.locator(`text=${myText}`);
    await expect(testing).toBeVisible({timeout:5000});
  }
})