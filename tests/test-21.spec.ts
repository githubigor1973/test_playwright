/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
const testingWeb = [ 'Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk'];
for (const name of testingWeb) {
  await page.goto('https://www.youtube.com/');

  // Dismiss cookie banner if present
  const rejectCookies = page.getByRole('button', { name: /Reject the use of cookies/i });
  if (await rejectCookies.isVisible()) {
    await rejectCookies.click();
  }
  await page.waitForTimeout(1500);
  await page.getByPlaceholder('Search', { exact: true }).fill(name);
    await page.getByPlaceholder('Search', { exact: true }).press('Enter');

    await page.getByPlaceholder('Search').press('Enter');

    

}
}); */

import { test, expect } from '@playwright/test';

test ( 'testing web', async ({ page })=> {

   const testWeb = [ 'Playwright by Testers Talk', 'Cypress by Testers Talk', 'API TestingTestersTalksafs'];
   for ( const myTest of testWeb){
    await page.goto('https://www.youtube.com/');

    const rejectCookies = page.getByRole('button', { name: /Reject the use of cookies/i });
    if ( await rejectCookies.isVisible()){
      rejectCookies.click();
    }
    const waiting = page.waitForTimeout(1500);
    const mySearch = page.getByPlaceholder('Search', { exact: true});
    await mySearch.isVisible();
    await waiting;
    await mySearch.fill(myTest);
    await waiting;
    await mySearch.press('Enter');
     

    
   }
});