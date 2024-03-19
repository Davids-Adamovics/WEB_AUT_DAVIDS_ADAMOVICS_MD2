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

    static get clickMenuButton(){
        return cy.get("#menu-toggle");
    }

    static get checkIfSidebarActive(){
        return cy.get("#sidebar-wrapper");
    }

    static get goToHistory(){
        return cy.get("[href='history.php#history']");
    }
}