import { Page, Locator } from "playwright/test";

export class checkboxDemoLocators {
    page: Page;
    pageHeading: Locator;
// Single checkbox
    singleCheckBoxHeading: Locator;
    singleCheckBox: Locator;
    singleCheckBoxLabel: Locator;
// Multiple checkboxes including disable
    checkBox1: Locator;
    checkBox2: Locator;
    checkBox3: Locator;
    checkBox4: Locator;
// Multiple checkboxes in a group
    McbOption1: Locator;
    McbOption2: Locator;
    McbOption3: Locator;
    McbOption4: Locator;    
    chkBtn: Locator;
    unChkBtn: Locator;

        constructor(page: Page) {
            this.page = page;
            this.pageHeading = page.locator('//h1[text()="Checkbox Demo"]');
            // single checkbox locators
            this.singleCheckBoxHeading = page.locator('//h2[text()="Single Checkbox Demo"]');
            // this.singleCheckBox = page.locator('(//input[@type="checkbox"])[1]'); this one is also correct
            this.singleCheckBox = page.locator('input[type="checkbox"]').nth(0);
            //Multiple checkbox locators
            this.checkBox1 = page.locator('input[type="checkbox"]').nth(1);
            this.checkBox2 = page.locator('input[type="checkbox"]').nth(2);
            this.checkBox3 = page.locator('input[type="checkbox"]').nth(3);
            this.checkBox4 = page.locator('input[type="checkbox"]').nth(4);
            // Multiple checkboxes in a group locators
            this.McbOption1 = page.locator('input[type="checkbox"][name="option1"]');
            this.McbOption2 = page.locator('input[type="checkbox"][name="option2"]');
            this.McbOption3 = page.locator('input[type="checkbox"][name="option3"]');
            this.McbOption4 = page.locator('input[type="checkbox"][name="option4"]');
            this.chkBtn = page.locator('//button[text()="Check All"]'); 
            this.unChkBtn = page.locator('//button[text()="Uncheck All"]');
            
}
}