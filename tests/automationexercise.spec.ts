// src/tests/test.spec.ts
import { chromium, test, expect, Page, Browser, BrowserContext } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test.describe.serial('Validate Automation Exercise website', () => {
    let browserInstance: Browser;
    let context: BrowserContext;
    let page: Page;
    let homePage: HomePage;
    let loginPage: LoginPage;

    // This runs once before all tests in this block
    test.beforeAll(async () => {
        // Launch the browser
        browserInstance = await chromium.launch({ headless: false });

        // Set a large viewport size (like full HD resolution)
        context = await browserInstance.newContext({
            viewport: { width: 1280, height: 680 },
        });

        // Create a single page instance to reuse
        page = await context.newPage();
        
        // Initialize the page objects
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
    });

    // This runs once after all tests in this block
    test.afterAll(async () => {
        if (page) {
            await page.close(); // Close the page after all tests are done
        }
        if (browserInstance) {
            await browserInstance.close(); // Close the browser after all tests are done
        }
    });

    test("Navigate to Automation Exercise homepage", async () => {
        // Use the HomePage object to navigate to the homepage
        await homePage.navigateToHomePage();

        // Verify the title of the page
        await expect(page).toHaveTitle(/Automation Exercise/);
    });

    test("Login to site as existing user", async () => {
        // Navigate to the login page using HomePage object
        await homePage.goToLoginPage();

        // Verify if user landed on login page using LoginPage object
        await loginPage.verifyOnLoginPage();

        // Log in using LoginPage object
        await loginPage.login('valid@abc.com', 'password');
    });

    test("Navigate to list of products", async () => {
        // Navigate to the Products page using HomePage object
        await homePage.goToProductsPage();
    });
});
