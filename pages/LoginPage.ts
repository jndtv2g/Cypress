// src/pages/LoginPage.ts
import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private emailField: string;
    private passwordField: string;
    private loginButton: string;

    constructor(page: Page) {
        this.page = page;
        this.emailField = '[data-qa="login-email"]';
        this.passwordField = '[data-qa="login-password"]';
        this.loginButton = '[data-qa="login-button"]';
    }

    // Login method
    async login(email: string, password: string): Promise<void> {
        await this.page.fill(this.emailField, email);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    // Verify that the user is on the login page
    async verifyOnLoginPage(): Promise<void> {
        await this.page.waitForURL(/login/);
    }
}
