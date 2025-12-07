/// <Reference types="cypress"/>

describe('Funcionalidade: Login', () =>{
    it('Deve fazer login com sucesso',() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
        cy.get('#username').type('testeneto@teste.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeneto (não é testeneto? Sair)')
    })

})