/// <reference types="Cypress" />


Cypress.Commands.add ('fillMandatoryWithsubmit', function() {
        cy.get('#firstName').type('Evelyn', { log:false})
        cy.get('#lastName').type('Holanda', { log:false})
        cy.get('#email').type('evelynholanda@exemplo.com', { log:false})
        cy.get('#open-text-area').type('Test')
        cy.contains('button', 'Enviar').click()
    
});


Cypress.Commands.add ('errorCredencial', function() {
    cy.get('#firstName').type('Evelyn', { log:false})
    cy.get('#lastName').type('Holanda', { log:false})
    cy.get('#email').type('evelynholanda@exemplocom', { log:false})
    cy.get('#open-text-area').type('Test')
    cy.contains('button', 'Enviar').click()


});




