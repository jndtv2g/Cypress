import { Page } from "@playwright/test";

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

    // Click on the 'Products' button
    async goToProductsPage(): Promise<void> {
        await this.page.click(this.productsButton);
    }
}