export class AppointmentSummary{

    
    static get checkFacility(){
        return cy.get("#facility");
    }

    static get checkReadMission(){
        return cy.get("#hospital_readmission");
    }

    static get checkProgram(){
        return cy.get("#program");
    }

    static get checkDate(){
        return cy.get("#visit_date");
    }

    static get checkComment(){
        return cy.get("#comment");
    }
}