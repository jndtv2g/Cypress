import { chromium, test, expect } from "@playwright/test";

test.describe.serial('Validate Automation Exercise website', () => {
    /** @type {import('@playwright/test').Page} */
    let browserInstance; 
    let context;
    let page;

    // This runs once before all tests in this block
    test.beforeAll(async () => {
        // Launch the browser (store it in browserInstance to avoid reusing the name)
        browserInstance = await chromium.launch({ headless: false });

        // Set a large viewport size (like full HD resolution)
        context = await browserInstance.newContext({
            viewport: { width: 1280, height: 680 },
        });

        // Create a single page instance to reuse
        page = await context.newPage();
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
        // Navigate to the homepage
        await page.goto("https://automationexercise.com/");
        
        // Verify the title of the page
        await expect(page).toHaveTitle(/Automation Exercise/);
    });

    test("Login to site as existing user", async () => {
        // Navigate to the login page
        //await page.getByRole('button', { name: 'Signup / Login'}).click();   
        await page.click('text=Signup / Login');   

        // Verify if user landed on login page
        await expect(page).toHaveURL(/login/); // Adjust this to match a post-login URL or specific element

        // Enter login credentials
        await page.fill('[data-qa="login-email"]', 'valid@abc.com');
        await page.fill('[data-qa="login-password"]', 'password');

        // Click the login button
        //await page.getByRole('button', { name: 'Log In' }).click() // Adjust selector if needed
        await page.click('[data-qa="login-button"]');
        
    });
    
    test("Navigate to list of products", async () => {
        // Navigate to the Products page
        await page.click('text=Products');
    });

});