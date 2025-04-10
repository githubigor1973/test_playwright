import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

    test.beforeAll(async () => {  // ✅ No { page } in beforeAll
        console.log('Before All');

    });

    test.beforeEach(async ( { page }) => {  // ✅ page is available in beforeEach
        console.log('Before Each');
        await page.goto('https://qa-ansel-platform.joinansel.com/member/login');
    });

    test.afterEach(async () => {
        console.log('After Each');
    });

    test.afterAll(async () => {
        console.log('After All');
    });

    test('Test 1', async ({ page }) => {
        console.log('✅ Test 1 Passed: "Sign in to your Member Portal" is visible.');
    });

    test('Test 2', async ({ page }) => {
        console.log('✅ Test 2 Passed: "Sign in to your Member Portal" is visible.');
    });

});