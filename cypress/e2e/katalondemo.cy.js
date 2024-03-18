import { LoginPage } from "../PageObjects/login.page";
import { MainPage } from "../PageObjects/main.page";

describe('Katalon demo', () => {

  it('Make An Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    MainPage.pressMakeAppointment.click();
    cy.get("[aria-describedby='demo_username_label']").invoke('val').then(username => {
      LoginPage.enterUsername.type(username);
    });
    cy.get("[aria-describedby='demo_password_label']").invoke('val').then(password => {
      LoginPage.enterPassword.type(password);
    });
    LoginPage.pressLoginButton.click();

  });
})