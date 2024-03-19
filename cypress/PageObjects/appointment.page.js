export class AppointmentPage{

    static get clickFacility(){
        return cy.get("#combo_facility");
    }

    static get clickCheckbox(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get clickRadioButton(){
        return cy.get("#radio_program_medicaid");
    }

    static get enterVisitDate(){
        return cy.get("#txt_visit_date");
    }

    static get clickDate30(){
        return cy.get('td.day').contains('30');
    }
    
    static get writeComment(){
        return cy.get("#txt_comment");
    }

    static get bookAppointmentBtn(){
        return cy.get("#btn-book-appointment");
    }


}