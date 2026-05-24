import { Locator, Page, expect } from "@playwright/test";

export class LoginPage{
 private readonly Email:Locator;
 private readonly Password:Locator;
 private readonly loginBtn:Locator;
 private readonly errorMsg:Locator;


 constructor(page:Page){

    this.Email=page.locator('input[id="input-email"]');
    this.Password=page.getByRole('textbox', { name: 'Password' });
    this.loginBtn=page.locator('input[class="btn btn-primary"]');
    this.errorMsg=page.locator('div[class="alert alert-danger alert-dismissible"]');
 }

 async setEmail(email:string){
    await this.Email.fill(email);
 }

 async setPassword(pass:string){

    await this.Password.fill(pass);
 }
 async clickLogin(){
    await this.loginBtn.click();
 }
async errormsg(){
    await this.errorMsg.textContent();
}



}