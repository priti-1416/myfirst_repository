import { test,Page, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestConfig } from "../test.config";
import { LoginPage } from "../pages/LoginPage";
import { MyAccount } from "../pages/MyAccountPage";


test('User login test',async({page})=>{

    const config=new TestConfig();
    await page.goto(config.appUrl);

    const homepage=new HomePage(page);
    await homepage.clickMyAccount();
    await homepage.clickLogin();

    const loginpage=new LoginPage(page);
    await loginpage.setEmail(config.email);
    await loginpage.setPassword(config.password);
    await loginpage.clickLogin();

    //successful login
    //await MyAccount.isMyAccountPage

})
