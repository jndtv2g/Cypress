import { Page } from "@playwright/test";

export class ProductsPage {
    private page: Page;
    private loginButton: string;
    private productsButton: string;

    constructor(page: Page) {
        this.page = page;
        this.productsButton = 'text=Products';
    }

    // Click on the 'Products' button
    async goToProductsPage(): Promise<void> {
        await this.page.click(this.productsButton);
    }
}