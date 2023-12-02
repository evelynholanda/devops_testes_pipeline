
Cypress._.times(3, function() {
    it('Test police privacy indepedent', () => {
        cy.visit('./src/privacy.html')
        cy.contains('CAC TAT - Política de privacidade')
        .should('be.visible')
    });

});

    

