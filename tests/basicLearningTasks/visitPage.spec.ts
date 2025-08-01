import{expect, test} from "@playwright/test"

test("Visit Google", async({page})=>{
    await page.goto("https://google.com")
    await expect(page).toHaveTitle('Google')
})