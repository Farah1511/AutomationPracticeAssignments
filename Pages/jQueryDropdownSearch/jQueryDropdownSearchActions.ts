import {Page, expect} from '@playwright/test';
import {jQueryDropdownSearchLocators} from './jQueryDropdownSearchLocators';

export class jQueryDropdownSearchActions extends jQueryDropdownSearchLocators {
    // The page object that will be used to interact with the web page.
    constructor(page: Page) {
        super(page);
    }
    // Navigate to the jQuery Dropdown Search page
    async openJQueryDropdownSearchPage() {
        await this.page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    }
    async verifyOnJQueryDropdownSearchPage() {
        // Verify URL
        await expect(this.page).toHaveURL(/.*jquery-dropdown-search-demo/);
        // Verify page heading
        await expect(this.pageHeading).toHaveText('Jquery Dropdown Search Demo');
    }

                        //Actions for heading: Drop Down with Search
async selectCountry(countryValue: string) {
    await this.searchCountry.selectOption({ label: countryValue }, { force: true });
    // Assertion: Verify the selected value
    await expect(this.searchCountry).toHaveValue(countryValue.toLowerCase());
  }




    // click the field to open the country dropdown
    // async openCountryDropdown() {
    //     await this.selectCountryField.click();
    // }
    // // search for a country in the dropdown
    // async searchForCountry(countryName: string) {
    //     await this.searchCountry.fill(countryName);
    // }
    // // select a country from the dropdown list
    // async selectCountryFromList() {
    //     await this.selectCountryListItem.click();
    // }
    // // verify the selected country is displayed in the dropdown
    // async verifySelectedCountry(countryName: string) {
    //     const selectedCountry = await this.selectCountryField.textContent();
    //     expect(selectedCountry).toContain(countryName);
    // }
    // // perform the complete flow of selecting a country
    // async selectCountry(countryName: string) {  
    //     await this.openCountryDropdown();
    //     await this.searchForCountry(countryName);
    //     await this.selectCountryFromList();
    //     await this.verifySelectedCountry(countryName);
    // }
}