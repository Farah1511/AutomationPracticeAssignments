import {test, expect} from '@playwright/test'

test("404: Form Submit Demo", async({page})=>{
    //locators
    const name = page.locator('#title')
    const msg = page.locator('div>textarea[id="description"]');
    const submit = page.locator('//input[@name="btn-submit"]');
    const statusMessage = page.locator('#submit-control');

    //open web page
    await page.goto("https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo");

     //actions perform on locators
    await name.fill('Farah');
    await msg.fill('Message');
    await submit.click();

    await page.waitForTimeout(5000); //wait 5 sec
    const text = await statusMessage.textContent();
    console.log('After 5s:', text);

     //Wait for the AJAX result
    await page.waitForSelector('#submit-control:has-text("Form submited Successfully!")');

    //Assert the final success message
    await expect(statusMessage).toHaveText('Form submited Successfully!');

});

test("1st Assignment: Simple Form Demo", async({page})=>{
    //open Simple Form Demo page
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    //locators of Single Input Field Form
    const msg = page.locator('input[id="user-message"]');
    const getMsg = page.locator('div>button[id="showInput"]');
    const showMsg = page.locator('#message');

    //locators of Two Input Fields Form
    const firstValue = page.locator('#sum1')
    const scndValue = page.locator('#sum2')
    const getSum = page.locator('#gettotal>button');
    const showSum = page.locator('#addmessage');

    //actions perform on locators
    await msg.fill('Hello, Testing my first form using Playwright with Typescript!');
    await getMsg.click();
    await expect(showMsg).toHaveText('Hello, Testing my first form using Playwright with Typescript!');

    await firstValue.fill('5');
    await scndValue.fill('11');
    await getSum.click();
    await expect(showSum).toHaveText('16');



    
});