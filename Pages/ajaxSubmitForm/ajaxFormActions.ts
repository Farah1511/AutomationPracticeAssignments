import { Page, expect } from '@playwright/test';
import { ajaxFormLocators } from './ajaxFormLocators';

export class AjaxFormActions extends ajaxFormLocators {
  // The page object that will be used to interact with the web page.
  constructor(page: Page) {
    super(page);
  }

  async openAjaxFormPage() {
    // Navigate to the Ajax Form Submit page
    await this.page.goto('https://www.lambdatest.com/selenium-playground/ajax-form-submit-demo');
  }

  async verifyOnAjaxFormPage() {
    // Verify URL
    await expect(this.page).toHaveURL(/.*ajax-form-submit-demo/);
    // verify page heading
    await expect(this.pageHeading).toHaveText('Form Submit Demo');
  }

  async fillAjaxForm(name: string, msg: string) {
    // Fill the form fields
    await this.nameInput.fill(name);
    await this.msgInput.fill(msg);
  }

  async submitForm() {
    // Click the submit button
   await this.submitButton.click();
  }

  async verifySuccessMessageLoader() {
    // Verify the success message loader appears
    // await expect(this.successMessage).toBeVisible();
    // Optionally, you can wait for the success message to appear
   await expect(this.successMessage).toBeVisible({ timeout: 5000 });
  }
}
