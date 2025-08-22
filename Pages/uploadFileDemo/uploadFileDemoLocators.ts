import {Page, Locator} from '@playwright/test';
export class uploadFileDemoLocators {
    page: Page;
    pageHeading: Locator;
    chooseFileInput: Locator;
    fileUploadedMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//h1[text()="Upload File Demo"]');
        this.chooseFileInput = page.locator('#file');
        this.fileUploadedMsg= page.locator('#error');
    }
}   
