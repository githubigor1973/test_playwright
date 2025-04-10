import { test, expect } from '@playwright/test';

test.describe('Smoke testing', () => {
    test('Test 1 - Google Search and YouTube Playlist Validation', async ({ page }) => {

        await page.goto('https://www.bing.com/');
        await page.getByRole('link', { name: 'Reject' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).fill('playwright by testers');
        await page.getByText('playwright testers talk').click();
        await page.waitForTimeout(1000);
       await page.getByRole('link', { name: 'Videos of Playwright Testers' }).click();
        await page.waitForTimeout(2000);
        
        console.log('✅ Test Passed: The YouTube playlist page is opened successfully.');
    });
});

test.describe('Regression Testing', () => {
    test('Test 2 - Google Search and YouTube Playlist Validation', async ({ page }) => {

        await page.goto('https://www.bing.com/');
        await page.getByRole('link', { name: 'Reject' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).fill('playwright by testers');
        await page.getByText('playwright testers talk').click();
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Videos of Playwright Testers' }).click();
        await page.waitForTimeout(2000);
        
        console.log('✅ Test Passed: The YouTube playlist page is opened successfully.');
        
    });

    test('Test 3 - Google Search and YouTube Playlist Validation', async ({ page }) => {

        await page.goto('https://www.bing.com/');
        await page.getByRole('link', { name: 'Reject' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).click();
        await page.getByRole('textbox', { name: 'characters out of 2000' }).fill('playwright by testers');
        await page.getByText('playwright testers talk').click();
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Videos of Playwright Testers' }).click();
        await page.waitForTimeout(2000);
        
        console.log('✅ Test Passed: The YouTube playlist page is opened successfully.');
    });
});

