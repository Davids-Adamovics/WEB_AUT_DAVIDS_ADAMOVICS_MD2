export class LoginPage{

    static get enterUsername(){
        return cy.get("#txt-username");
    }
    static get enterPassword(){
        return cy.get("#txt-password");
    }

    static get pressLoginButton(){
        return cy.get("#btn-login");
    }
}