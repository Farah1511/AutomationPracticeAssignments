import {Page, Locator} from '@playwright/test';

export class jQueryDropdownSearchLocators {
    page: Page;
    pageHeading: Locator;
    //Locator for heading: Drop Down with Search
    // selectCountryField: Locator;
    searchCountry: Locator
    // countryList: Locator;
    // selectCountryListItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.locator('//h1[text() = "Jquery Dropdown Search Demo"]');
        this.searchCountry = page.locator('select#country');
        // this.selectCountryField = page.locator('.select2-selection--single');
        // this.searchCountry = page.locator('input[type="search"][class="select2-search__field"].nth(0)');
        // this.countryList = page.locator('.select2-results__options');
        // this.selectCountryListItem = page.locator('#select2-country-results > li');
    }
}