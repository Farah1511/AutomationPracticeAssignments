import {expect, Page} from '@playwright/test'
import {jsAlertBoxDemoLocators} from "./jsAlertBoxDemoLocators";

export class JsAlertBoxDemoActions extends jsAlertBoxDemoLocators {
    // The page object that will be used to interact with the web page.
    constructor(page: Page) {
        super(page);
    }

    async openJsAlertBoxDemoPage() {
        // Navigate to the JS Alert Box Demo page
        await this.page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    }

    async verifyOnJsAlertBoxDemoPage() {
        // Verify URL
        await expect(this.page).toHaveURL(/.*javascript-alert-box-demo/);
        // Verify page heading
        await expect(this.pageHeading).toHaveText('Javascript Alert Box Demo');
    }
        
    // Click the alert button
    async clickAlertButton() {
        await this.alertButton.click();
    }
    //handle the JS alert
    async handleJsAlert() {
        this.page.once("dialog", async (dialog) => {
            expect(dialog.type()).toBe("alert"); 
            expect(dialog.message()).toContain("I am an alert box!"); 
            await dialog.accept();
        });
    await this.clickAlertButton();
  }

          // Click the confirm button
    async clickConfirmButton() {
        await this.confirmButton.click();
    }
    //handle the JS confirm dialog
    async handleJsConfirm() {
        this.page.once("dialog", async (dialog) => {
            expect(dialog.type()).toBe("confirm"); 
            expect(dialog.message()).toContain("Press a button!"); 
            // await dialog.accept(); // Accept the confirm dialog
            await dialog.dismiss(); // Dismiss the confirm dialog
        });
        await this.clickConfirmButton();
    }

    // Click the prompt button
    async clickPromptButton() {
        await this.promptButton.click();
    }
    //handle the JS prompt dialog
    async handleJsPrompt() {
        this.page.once("dialog", async (dialog) => {
            expect(dialog.type()).toBe("prompt"); 
            expect(dialog.message()).toContain("Please enter your name"); 
            await dialog.accept("LambdaTest User"); 
        });
        await this.clickPromptButton();
    }
}
