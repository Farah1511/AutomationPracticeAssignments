
import { Page, Locator } from "@playwright/test";

export class ajaxFormLocators{  
    // The page object that will be used to interact with the web page. 
    page: Page;          
    // Locators for the elements on the page.
    pageHeading: Locator;
    nameInput: Locator;
    msgInput: Locator;
    submitButton: Locator;
    successMessage: Locator;

    // Constructor to initialize the page and locators.
    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//h1[text()="Form Submit Demo"]');
        this.nameInput = page.locator("#title");
        this.msgInput = page.locator("#description");
        this.submitButton = page.locator('//input[@name="btn-submit"]');
        this.successMessage = page.locator('#submit-control > img');
    }
}