import { expect, Page } from "@playwright/test";
import { uploadFileDemoLocators } from "./uploadFileDemoLocators";
import path from "path";

export class uploadFileDemoActions extends uploadFileDemoLocators {
  constructor(page: Page) {
    super(page);
  }

  async openUploadFileDemoPage() {
    // Navigate to the Upload File Demo page
    await this.page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo");
  }
    async verifyOnUploadFileDemoPage() {
        // Verify URL
        await expect(this.page).toHaveURL(/.*upload-file-demo/);
        // Verify page heading
        await expect(this.pageHeading).toHaveText("Upload File Demo");
    }
    // Upload a file   
    async uploadFile() {
    // Resolve absolute path to your img.jpg inside assets
    const filePath = path.join(process.cwd(), "assets", "img.jpg");

    // Upload the file
    await this.chooseFileInput.setInputFiles(filePath);

    // Verify the file upload message
    await expect(this.fileUploadedMsg).toHaveText("File Successfully Uploaded");
  }
    
}
