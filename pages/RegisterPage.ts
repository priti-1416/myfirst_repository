import{Page, expect, Locator} from '@playwright/test'

export class RegisterPage{

    private readonly page:Page;

    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly telephone:Locator;
    private readonly password:Locator;
    private readonly confirmPassword:Locator;
    private readonly subscribe:Locator;
    private readonly policy:Locator;
    private readonly clickContinue:Locator;
    private readonly msgConfirmation:Locator;


    constructor(page:Page){

        this.page=page;

        this.firstName= page.locator('#input-firstname');
        this.lastName=page.locator('#input-lastname');
        this.email=page.locator('#input-email');
        this.telephone=page.locator('#input-telephone');
        this.password=page.locator('#input-password');
        this.confirmPassword=page.locator('#input-confirm');
        this.subscribe=page.getByLabel('No', { exact: true });
        this.policy=page.getByRole('checkbox');
        this.msgConfirmation=page.locator('h1:has-text("Your Account Has Been Created")');
        this.clickContinue=page.locator('input[type="submit"]');

    }

    async setFirstName(fname:string){
        await this.firstName.fill(fname);
    }

    async setLastName(lname:string){
        await this.lastName.fill(lname);
    }

    async setEmail(email:string){
        await this.email.fill(email);
    }

    async setTelephone(tele:string){
        await this.telephone.fill(tele);
    }

    async setPassword(password:string){
        await this.password.fill(password);
    }

    async setConfirmPass(cpass:string){
        await this.confirmPassword.fill(cpass);
    }

    async setSubscribe(){
        await this.subscribe.check();
    }

    async setPolicy(){
        await this.policy.check();
    }
    async continueclick(){
        await this.clickContinue.click();
    }

    async getConfirmationMsg(){
        return await this.msgConfirmation.textContent();
    }

    async completeRegistration(userData:{

        firstName:string;
        lastName:string;
        email:string;
        telephone:string;
        password:string;
        cpassword:string;
    }){
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setPassword(userData.password);
        await this.setConfirmPass(userData.cpassword);
        await this.setSubscribe();
        await this.setPolicy();
        await this.continueclick();


    }
    
}