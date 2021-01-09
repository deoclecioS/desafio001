/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('cadastro', () => {
    it('cadastrar um novo usuário', () => {

        //Passo 1 acessar formulario
        cy.visit('/')
        cy.get("[class='login']").click()
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click();
        cy.get('#id_gender1').click()

        //passo 2 - preencher formulario
        cy.get("#customer_firstname").type(chance.first())
        cy.get('#customer_lastname').type(chance.name_suffix)
        cy.get('#passwd').type('1234564')
        cy.get('#days').select('20')
        cy.get('#months').select('9')
        cy.get('#years').select('2002')
        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())

        cy.get('#id_state').select('5', { force: true })

        cy.get('#postcode').type('00000');

        cy.get('#phone').type(chance.phone())
        cy.get('#phone_mobile').type(chance.phone())
        cy.get('#alias').type(chance.animal())

        //clicar para criar 
        cy.get('#submitAccount').click()
        cy.get("[class='info-account']").should('contain', 'Welcome to your account.');
        cy.url().should('contain', '/index.php?controller=my-account')
    });
});