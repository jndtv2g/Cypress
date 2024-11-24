import { Page, expect } from "@playwright/test";

export class ProductsPage {
    private page: Page;
    private productsButton: string;
    private itemText: string;
    private itemButton: string;
    private itemAdded: string;
    private continueShopping: string;

    constructor(page: Page) {
        this.page = page;
        this.productsButton = 'text=Products';
        this.itemText = 'text=Men Tshirt';
        this.itemAdded = 'text=Added!';
        this.itemButton = '[data-product-id="2"]';
        this.continueShopping = 'text=Continue Shopping';
    }

    // Click on the 'Products' button
    async goToProductsPage(): Promise<void> {
        await this.page.click(this.productsButton);
    }

    // Hover on a product to add to cart later on
    async hoverOnProduct(): Promise<void> {
        // Check whether the hover is working
        console.log('Hovering over product:', this.itemText);
        // await this.page.locator(this.itemText).scrollIntoViewIfNeeded();
        await this.page.hover(this.itemText);
    }   

    // Hover on a product to add to cart later on
    async addProductToCart(): Promise<void> {
        await this.page.click(this.itemButton);
    }

    // Verify product has been added to cart with the confirmation pop up
    async verifyProductAdded(): Promise<void> {
        const addedMsg = this.page.locator(this.itemAdded);
        await expect(addedMsg).toBeVisible();
    }

    // Dismiss confirmation pop up
    async dismissConfirmationDialog(): Promise<void> {
        await this.page.click(this.continueShopping);
    }
}