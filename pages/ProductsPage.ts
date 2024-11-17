import { Page } from "@playwright/test";

export class ProductsPage {
    private page: Page;
    private productsButton: string;
    private itemText: string;
    private itemButton: string;

    constructor(page: Page) {
        this.page = page;
        this.productsButton = 'text=Products';
        this.itemText = 'text=Men Tshirt';
        //this.itemText = '//h2[contains(text(), "Men Tshirt")]';
        this.itemButton = '[data-product-id="2"]';
    }

    // Click on the 'Products' button
    async goToProductsPage(): Promise<void> {
        await this.page.click(this.productsButton);
    }

    // Hover on a product to add to cart later on
    async hoverOnProduct(): Promise<void> {
        console.log('Hovering over product:', this.itemText);
        //await this.page.locator(this.itemText).scrollIntoViewIfNeeded();
        await this.page.hover(this.itemText);
    }

    // Hover on a product to add to cart later on
    async addProductToCart(): Promise<void> {
        await this.page.click(this.itemButton);
    }
}