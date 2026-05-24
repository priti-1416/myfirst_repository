
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { randomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let register: RegisterPage;

test.beforeEach(async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);

    homePage = new HomePage(page);
    register = new RegisterPage(page);

})

test.afterEach(async ({ page }) => {
    await page.close();
})


test('User Registration test @master @sanity', async ({ page }) => {




    await homePage.clickMyAccount();
    await homePage.clickRegister();


    //fill registration details with random data

    await register.setFirstName(randomDataUtil.getFirstname());
    await register.setLastName(randomDataUtil.getLastname());
    await register.setEmail(randomDataUtil.getEmail());
    await register.setTelephone(randomDataUtil.getTelephone());
    //register.setPassword(randomDataUtil.getPassword());

    const password = randomDataUtil.getPassword();
    await register.setPassword(password);
    await register.setConfirmPass(password);
    await register.setSubscribe();
    await register.setPolicy();
    await register.continueclick();
    const confirmationMsg = await register.getConfirmationMsg();

    expect(confirmationMsg).toContain('Your Account Has Been Created!');





})