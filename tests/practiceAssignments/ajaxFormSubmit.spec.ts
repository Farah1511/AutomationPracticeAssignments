import {test, expect} from '@playwright/test'

test("1st Assignment: Form Submit Demo", async({page})=>{
    const name = page.locator('#title')
    const msg = page.locator('div>input[name="last_name"]');
    const submit = page.locator('//input[@name="btn-submit"]');
    await page.goto("https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo");
    //await page.pause(); 
    await name.fill('Farah');
    await msg.fill('Message');
    await submit.click();
});