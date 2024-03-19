export class MainPage {
    static get pressMakeAppointment() {
        return cy.get("#btn-make-appointment");
    }

    static get visitMainPage(){
        return cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }
}