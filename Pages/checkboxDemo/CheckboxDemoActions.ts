import {Page, expect} from '@playwright/test';
import { checkboxDemoLocators } from './checkBoxDemoLocators';

export class CheckboxDemoActions extends checkboxDemoLocators {
  // The page object that will be used to interact with the web page.
  constructor(page: Page) {
    super(page);
  }

  async openCheckboxDemoPage() {
    // Navigate to the Checkbox Demo page
    await this.page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
  }

  async verifyOnCheckboxDemoPage() {
    // Verify URL
    await expect(this.page).toHaveURL(/.*checkbox-demo/);
    // Verify page heading
    await expect(this.pageHeading).toHaveText('Checkbox Demo');
  } 
  // Verify the single checkbox heading
  async verifySingleCheckboxHeading() {
    await expect(this.singleCheckBoxHeading).toBeVisible();
    await expect(this.singleCheckBoxHeading).toContainText('Single Checkbox Demo');
  }
    // Verify that the single checkbox is unchecked
    async verifySingleCheckboxUnchecked() {
        await expect(this.singleCheckBox).not.toBeChecked();
    }
    // Click on the checkbox
  async clickCheckBox() {
    await this.singleCheckBox.click();
  }
    // Verify that the single checkbox is checked
    async verifySingleCheckboxChecked() {
        await expect(this.singleCheckBox).toBeChecked();
    }
    // Verify that the multiple checkboxs are unchecked
    // async verifyMultipleCheckboxUnchecked() {
    //     await expect(this.checkBox1).not.toBeChecked();
    //     await expect(this.checkBox2).not.toBeChecked();
    // }
    // Click on multiple checkboxes
    async clickMultipleCheckboxes() {  
        await this.checkBox1.waitFor({ state: 'visible' });
        await this.checkBox1.click();
        await this.checkBox2.waitFor({ state: 'visible' });
        await this.checkBox2.click();
    }
    // Verify that multiple checkboxes are checked
    async verifyMultipleCheckboxesChecked() {
        await expect(this.checkBox1).toBeChecked();
        await expect(this.checkBox2).toBeChecked();
    }
    // verify that option 3 & 4 are disable
    async verifyMultipleCheckboxesDisable(){
        await expect(this.checkBox3).toBeDisabled();
        await expect(this.checkBox4).toBeDisabled();
    }
    // verify check/uncheck all 
    async checkAllOptions() {
        // Click "Check All"
        await this.chkBtn.click();
        // Verify all options are checked
        await expect(this.McbOption1).toBeChecked();
        await expect(this.McbOption2).toBeChecked();
        await expect(this.McbOption3).toBeChecked();
        await expect(this.McbOption4).toBeChecked();
    }
    async unCheckAllOptions() {
        // Click "Uncheck All"
        await this.unChkBtn.click();
        // Verify all options are unchecked
        await expect(this.McbOption1).not.toBeChecked();
        await expect(this.McbOption2).not.toBeChecked();
        await expect(this.McbOption3).not.toBeChecked();
        await expect(this.McbOption4).not.toBeChecked();
    }


}