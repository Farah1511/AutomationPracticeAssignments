
import { Page, Locator } from '@playwright/test';

// Locators for the main home page actions
export class mainPageLocators {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method to get dynamic locator
  clickLink(linkText: string): Locator {
    return this.page.locator(`//a[(text())="${linkText}"]`);
  }
}