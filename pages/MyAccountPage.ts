import {test, Page, expect, Locator} from '@playwright/test';

import {LogoutPage} from './LogoutPage';
export class MyAccount{

    //private readonly errMsg:Locator;
    private readonly lnkLogout:Locator;
    private readonly msgHeading:Locator;
    private readonly page: Page;

constructor(page:Page){
    this.page=page;
    this.msgHeading=page.locator('h2:has-text("My Account")');
    this.lnkLogout=page.locator('text="Logout"').nth(1);
}

    async IsMyAccountPageExists():Promise<boolean>{

        try{
            const isvisible=await this.msgHeading.isVisible();
            return isvisible;

        
    }catch(error){

        console.log("Error:",`${error}`);
        return false;
    }

}

async clickLogout(){
    try{
        await this.lnkLogout.click();
        return new LogoutPage(this.page)

    }catch(error)
    {
        console.log('Unable to click logout link:',`${error}`);
        throw error;
    }
}

async getPageTitle(){
    return (this.page.title());
}

}