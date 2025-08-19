import {Page, Locator} from "playwright/test";
export class jsAlertBoxDemoLocators {
    page: Page;
    pageHeading: Locator;
    alertButton: Locator;
    confirmButton: Locator;
    promptButton: Locator;
    okButton: Locator;
    cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//h1[text() = "Javascript Alert Box Demo"]');
        this.alertButton = page.locator('//button[text()="Click Me"]').nth(0);
        this.confirmButton = page.locator('//button[text()="Click Me"]').nth(1);
        this.promptButton = page.locator('//button[text()="Click Me"]').nth(2);
        // this.okButton = page.locator('');
        // this.cancelButton = page.locator('');
    }
}