/// <reference types="Cypress" />


import '../support/commands'

beforeEach(() => {

    cy.visit('./src/index.html')
   
})

describe('Central de Atendimento ao Cliente TAT', function() {
    const threeSecondsinMs = 3000

    it('Valid title in application', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT' )
        
    })

    it('Valid Fill and sen form', () => {

        const longText = 'teste, teste, teste, teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste '
        
            cy.clock()

            cy.get('#firstName').type('Evelyn')
            cy.get('#lastName').type('Holanda')
            cy.get('#email').type('evelynholanda@exemplo.com')
            cy.get('#open-text-area').type(longText, { delay: 0} )
            cy.contains('button', 'Enviar').click()
            //Asserts
            cy.get('.success').should('be.visible')
            cy.tick(threeSecondsinMs)
            cy.get('.success').should('not.be.visible')
    
        });

    it('Valid Error message after fill credencials incorrect', () => {
        cy.clock()
        cy.errorCredencial()
        //Asserts
        cy.get('.error').should('be.visible')
        cy.tick(threeSecondsinMs)
        cy.get('.success').should('not.be.visible')
        
    });

    it('Valid that phone is empty', () => {
       
        cy.get('#phone')
        .type('xxxxx')
        .should('be.empty')
        .should('have.value', '');
    

    });

    it('Valid Error message after phone is mandatory but not fill with number field', () => {
        cy.clock()
        cy.errorCredencial()
        //Asserts
        cy.get('.error').should('be.visible')
        cy.tick(threeSecondsinMs)
        cy.get('.success').should('not.be.visible')
        
    });

    it('Valid fill and clear field', () => {
        cy.get('#firstName').type('Evelyn')
            .should('have.value', 'Evelyn')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('Holanda')
            .should('have.value', 'Holanda')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('evelynholanda@exemplo.com')
            .should('have.value', 'evelynholanda@exemplo.com')
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area').type('Test')
        cy.contains('button', 'Enviar').click()
        //Asserts
        cy.get('.error').should('be.visible')
        
    });

    it('Valid that message if not fill form should have an error', () => {
        cy.clock()
        cy.contains('button', 'Enviar').click()
        //Asserts
        cy.get('.error').should('be.visible')
        cy.tick(threeSecondsinMs)
        cy.get('.success').should('not.be.visible')
        
    });

    it('Valid Custom Commands with success', () => {
        cy.clock()
        cy.fillMandatoryWithsubmit()
        cy.get('.success').should('be.visible')
        cy.tick(threeSecondsinMs)
        cy.get('.success').should('not.be.visible')
        
        
    });

   it('Select product with value cursos', () => {
    cy.get('#product').select('cursos')
     .should('have.value', 'cursos')
   });

   it('Select product with value', () => {
    cy.get('select').select(1)
     .should('have.value', 'blog')
   });

   it('Select product with value', () => {
    cy.get('select').select(3)
     .should('have.value', 'mentoria')
   });

   it('Select radio button with text feedback', () => {
    cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    
    });
    it('Select radio button with text Elogio', () => {
        cy.get('input[type="radio"][value="elogios"]')
            .check()
            .should('have.value', 'elogio')
        
        });
    it('Select radio button with text Ajuda', () => {
            cy.get('input[type="radio"][value="ajuda"]')
                .check()
                .should('have.value', 'ajuda')
            
            });

    // MANEIRA MAIS CORRETA DE MARCAR CADA UM E CHECAR

    it('Select for each radio button',() => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
        
    })

    it('Mark all chekbox and uncheck the last', () => {
       // cy.get('#email-checkbox').check();
       //  cy.get('#phone-checkbox').check();
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
        
    });

    it('Erro message when the phone is mandatory but not fill', () => {
        cy.get('#firstName').type('Evelyn')
        cy.get('#lastName').type('Holanda')
        cy.get('#email').type('evelynholanda@exemplo.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
        //Asserts
        cy.get('.error').should('be.visible')
        
    });

    it('Upload file of dir cypress/fixtures', () => {
        cy.get("input[type='file']")
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input) {
               // console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
        
    });

    it('Upload file with gra-drop', () => {
        cy.get("input[type='file']")
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function($input) {
               // console.log($input)
                expect($input[0].files[0].name).to.equal('example.json')
            })
    });

    it('Upload file with alias', () => {
       cy.fixture('example.json').as('exampleFile')
       cy.get("input[type='file']")
        .selectFile('@exampleFile')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')

     });
});
     it('Privacy Police  open in attributt', () => {
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')

    });

    it('Privacy Police  open in another tab', () => {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('CAC TAT - Política de privacidade')
            .should('be.visible')

    });


        it('show and unshow the sucess message with.invoke', () => {
            cy.get('.success')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Mensagem enviada com sucesso.')
              .invoke('hide')
              .should('not.be.visible')
            cy.get('.error')
              .should('not.be.visible')
              .invoke('show')
              .should('be.visible')
              .and('contain', 'Valide os campos obrigatórios!')
              .invoke('hide')
              .should('not.be.visible')
          })

          it('Doing Request HTTP', () => {

            cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
            .should(function(responsecode) {
                //DESESTRUTURANDO OBJETO EM JAVASCRIPT
                const { status, statusText, body} = responsecode
                expect(status).to.equal(200)
                expect(statusText).to.equal('OK')
                expect(body).to.include('CAC TAT')


            })
            
          });
        
    });

