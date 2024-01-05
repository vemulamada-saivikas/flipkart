const { test, expect } = require('@playwright/test');

test('login example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");


    //validate username inputbox visible on page
    await expect(page.locator('#username')).toBeVisible();

    //enter value into username inputbox
    await page.fill('//input[@name="username"]' , 'tomsmith');

    //enter value into password inputbox
    await page.fill('//input[@name="password"]', 'SuperSecretPassword!');


    //click on login button
    await page.click('button[type="submit"]');

    // Expect a title "to contain" a substring.
    //await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");


    //click on logout button
    await page.click('a[href="/logout"]');


    // Expect a title "to contain" a substring.
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");

    





});
