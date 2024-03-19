export class HistoryPage{
    static get checkIfNoAppoinment(){
        return cy.get('p').contains('No appointment.');
    }
}