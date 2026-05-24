import {faker} from '@faker-js/faker';

export class randomDataUtil{

    static getFirstname(){
        return faker.person.firstName();
        
    }

    static getLastname(){
        return faker.person.lastName();
    }

    static getTelephone(){
        return faker.phone.number();
    }

    static getEmail(){

        return faker.internet.email();
    }

    static getPassword(){

        return faker.internet.password();
    }
    

}