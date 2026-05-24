import{Page, expect, Locator} from '@playwright/test';

export class HomePage{

    //locators

    private readonly page:Page;
    private readonly lnkMyAccount:Locator;
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;
    //constructor

constructor(page:Page){
    this.page=page;
    this.lnkMyAccount=page.locator('span:has-text("My Account")');
    this.lnkRegister=page.locator("a:has-text('Register')");
    this.lnkLogin=page.getByRole('link', { name: 'Login' })
    this.txtSearchbox=page.locator('//input[@class="form-control input-lg"]');
    this.btnSearch=page.getByRole('button');
}
    //action methods
    async clickMyAccount(){
        try{
        await this.lnkMyAccount.click();}
        catch(error)
        {
            console.log('Exception occured',`${error}`);
            throw error;
        }

    }

    async clickLogin(){
        try{
        await this.lnkLogin.click();
    }
        catch(error)
        {
            console.log('Exception occured',`${error}`);
            throw error;
        }

    }

    async clickRegister(){
        try{
        await this.lnkRegister.click();}
        catch(error)
        {
            console.log('Exception occured',`${error}`);
            throw error;
        }

    }

    async searchProduct(pName:string){
        try{
            await this.txtSearchbox.fill(pName);
        }
        catch(error)
        {
            console.log('Exception occured',`${error}`);
            throw error;
        }
}

 async clickSearch(){
        try{
            await this.btnSearch.click();
        }
        catch(error)
        {
            console.log('Exception occured',`${error}`);
            throw error;
        }
}
 }



