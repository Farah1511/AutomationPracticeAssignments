
import { Page, expect } from '@playwright/test';
import { mainPageLocators } from './mainHomePageLocators';

export class mainPageActions {
  // Instance of Playwright Page
   page: Page;
  // Instance of mainPageLocators to access locators
   locators: mainPageLocators;

   // Constructor to initialize the page and locators
  constructor(page: Page) {
    // Assign the Playwright page instance to this.page
    this.page = page;
    // Create an instance of mainPageLocators with the page
    this.locators = new mainPageLocators(page);
  }

  // Define methods for actions on the main home page
  async openMainHomePage() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/');
  }

  // Method to click a link by its text
  async clickLink(linkText: string) {
    const link = this.locators.clickLink(linkText);
    await expect(link).toBeVisible();
    await link.click();
  }
}
