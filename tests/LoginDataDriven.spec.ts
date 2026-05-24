import test, { Pageage,expect, Locator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { MyAccount } from "../pages/MyAccountPage";
import{dataProvider} from '../utils/dataProvider';
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { json } from "stream/consumers";

//load json test data from logindata.json

const jsonPath="testdata/logindata.json";
const jsonData=dataProvider.getTestDataFromJson(jsonPath);

for(const data of jsonData){
    test(`Login test with JSON data ${data.testName}`, async({page})=>{

        const config=new TestConfig();
        await page.goto(config.appUrl);

        const homepage=new HomePage(page);
        await homepage.clickMyAccount();
        await homepage.clickLogin();

        const loginpage= new LoginPage(page);
        await loginpage.clickLogin(data.email, data.password);


    })
}