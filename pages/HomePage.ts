import { Page, expect } from "@playwright/test";

export class HomePage {
    private page: Page;
    private loginButton: string;
    private productsButton: string;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = 'text=Signup / Login';
        this.productsButton = 'text=Products';
    }

    // Navigate to the homepage
    async navigateToHomePage(): Promise<void> {
        await this.page.goto("https://automationexercise.com/");
    }

    // Click on the 'Signup / Login' button
    async goToLoginPage(): Promise<void> {
        await this.page.click(this.loginButton);
    }

    // Verify user has landed in the correct homepage
    async verifyHomepage(): Promise<void> {
        await expect(this.page).toHaveTitle(/Automation Exercise/);
    }

    // Click on the 'Products' button
    async goToProductsPage(): Promise<void> {
        await this.page.click(this.productsButton);
    }
}