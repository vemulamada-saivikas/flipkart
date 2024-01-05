const {test, expect} = require('@playwright/test')


test('Amazon', async ({page})=>{

    await page.goto('https://www.amazon.in/');

    await page.click("[type='text]");

    await page.fill("[type='text']",'iphone 14');

    await page.click("[type='submit']");
})