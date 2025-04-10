import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://brella--qa.sandbox.lightning.force.com/lightning/r/Contract/800QL00000HtrOUYAZ/view');
  await page.getByRole('textbox', { name: 'Username' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Username' }).fill('qa@joinansel.com.qa');
  await page.getByRole('textbox', { name: 'Password' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Password' }).fill('q8xPmBoudN1W');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('tab', { name: 'Related' }).click();
  await page.getByRole('link', { name: 'CS-' }).click();
  //await page.locator('#window').click();
  await page.getByRole('tab', { name: 'Related' }).click();
  await page.getByRole('link', { name: 'Delilah Kannon' }).click();
  await page.getByLabel('Prospectives').getByRole('link', { name: 'Delilah Kannon' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('button', { name: 'Get The Link' }).click();
  const linkElement = page.getByText('https://qa-ansel-platform.joinansel.com/enrollment/?token=tQr4J-R8E-elZ6l6PrZMrrtvBkrUVWleiRovtyMiVU7JQk0W7oDjZ-xSbVqZSpxSJBoCWh2yH4Cjhgyx6qKvJ0DX8B0M6iAAIGr_TX45jcwMN1Ezsdlr_Y5yt6zxHZBxzV8jQCYG7xPVXbrpZa6bWliEGUVwWTLWxKnxS8E9fWIhaw-q70yoYyzbpWpuzKEJoTluKeSyxS37Hq9z7V6-Yw4Bu9MN41bQAL79xM1qQE3aCLneE5HwxDchfJw5QXwHUj9J2JL2sncyyn3FoqaC_RzDCLXyUho5z9moRFT6UVlw06VkQUG2yXpAuiw9Gzw-fZ_80h1AvCosthcPXE9F9xRwsBXsz6Off4A4DJ_J7IPkKX9ZzF_zxhS5B5qz4MBRQyn5_-o3g_2MvKnMHXdi5urwAKFt1Ct7feBd_N0s3IuhsYGrtijio23-Jy7FmXHPoYPIFyfh8XumtabNnu_Ux98BeS3zbXOx1NWoMaIpiCqadseztiUAGcFd_diBr9qJVPVlIl8IqR2k7SHoU5ZLiH_ZRobesvbyHifOOUDD6Hw1MOR_kiz1LI44v4NpEmm-gO3pRQLRCiARyDmLd5mRRs6mO0oivEnyIDknVk0d5xWWxujVbHpOShKhROCAD4UjWx0v3CH3a0WlMRNPOQ5c0K61kLhdWY4MYMyaqMlTBFPo-ND6Dl7Mbq9Be0xmKr9aNglmb3-HqUkbHcxMg1mpxmJcEWScGX6IHYqtQuotU3djM2wH4qJkA8ZW2Jz71Afx-ETb6Hvj_S-lP3Dx9boOto_kPb8kV4JysO7S_NxDNH93DfdKXsNpjDp72YJa-e87SzNYAjph6QoEyuhFojp-ihLtz_Non6Ja5Ioxzaq1J2-m-qDPxOhzpElXZUw4aantGqrVletbqM-uyVxIk7xPlJO86ep47FlegCzp5IMIEvnCN4hfoYau9shy0pY_4H4POiIXPOJ94M9s-G69PwN5sv2DotW2S8Q3dwLsghpQ-gJiyI_tNGQh1DeGKy648OaXb_sgCxs0OREEnLNc9Du6Se2XqwR1GERNIr6BVe-3xMRLpBNaWgw5yLu_9Il62vopmYTrweDTKTdqnzsQQPl5nJEtJwKTLvRG_bzFGNSLMvByrbKuhL6vKZIyMy02zL-8y9TH3XtTWxoE1qfzfBZo_TfB5VcDb5bUVFR14t-LDMShizqQOnRiHaX29IfPJ9Xtf-GMW6gtb6SGURrNdLQ6UfyXdYbZbnqMJeM7dgDbJRXzmPRipzJfjaGdglw4Kf4-HJole-GRrhqxKpfbN6-uP7bNKsBZBN1MwIz9d6CedMQ-gWJS-VJFF_tLqz8YZV56Z40c02RF5fEWNHNyuJWKh0pfj4sTmtuYxOXebrE_KR0=');

  if (await linkElement.isVisible()) {
      const linkText = await linkElement.innerText();
      await page.goto(linkText, { waitUntil: 'domcontentloaded' });
  } else {
      console.log('⚠️ Link not found, trying alternative methods...');

      await page.getByRole('button', { name: 'Get The Link' }).click();
      // Shadow DOM Handling
      const shadowLink = await page.evaluate(() => {
          const shadowHost = document.querySelector('#sectionContent-174');
          return shadowHost?.shadowRoot?.querySelector('a')?.getAttribute('href') ?? null;
      });

      if (shadowLink) {
          await page.goto(shadowLink, { waitUntil: 'domcontentloaded' });
      } else {
          console.log('⚠️ Trying XPath method...');
          const xpathLink = page.locator('//a[contains(text(), "https://qa-aig-platform.joinansel.com/enrollment")]');
          if (await xpathLink.isVisible()) {
              await xpathLink.click({ force: true });
          } else {
              console.log('❌ Could not find the enrollment link.');
          }
      }
  }

  /*await page.locator('#input-1927').dblclick();

   await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('textbox', { name: 'MM/DD/YYYY' }).click({
    button: 'right'
  });
  await page1.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('11/12/1978');
  await page1.getByRole('textbox', { name: 'XXX-XX-XXXX' }).click();
  await page1.getByRole('textbox', { name: 'XXX-XX-XXXX' }).fill('672-06-1075');
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.goto('https://qa-ansel-platform.joinansel.com/enrollment/learnAboutCoverage');
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByText('No', { exact: true }).click();
  await page1.getByText('I\'m not a parent').click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('link', { name: 'Skip this' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.getByRole('listbox').filter({ hasText: 'FemaleMale' }).click();
  await page1.getByRole('option', { name: 'Female' }).locator('span').click();
  await page1.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).click();
  await page1.getByRole('textbox', { name: '(XXX) XXX-XXXX' }).fill('(234) 545-678  ');
  await page1.getByRole('listbox').filter({ hasText: 'MobileStandard' }).click();
  await page1.getByRole('option', { name: 'Mobile' }).locator('span').click();
  await page1.locator('input[name="SET_CITY"]').click();
  await page1.locator('input[name="SET_CITY"]').fill('Miami');
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.locator('input[name="SET_STREET_ADDRESS"]').click();
  await page1.locator('input[name="SET_STREET_ADDRESS"]').fill('Ocean view');
  await page1.locator('input[name="SET_ZIP_CODE"]').click();
  await page1.locator('input[name="SET_ZIP_CODE"]').fill('45600');
  await page1.getByRole('button', { name: 'Next step' }).click();
  await page1.locator('input[name="password"]').click();
  await page1.locator('input[name="password"]').fill('Demo123456');
  await page1.locator('input[name="confirmPassword"]').click();
  await page1.locator('input[name="confirmPassword"]').fill('Demo123456');
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByText('I accept the Terms and Privacy').click();
  const page2 = await page2Promise; */
});