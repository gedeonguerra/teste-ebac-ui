/// <Reference types="cypress"/>

describe ('Funcionalidade; Produtos', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
})


it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block')
    .eq(0)
    .click()
    cy.get('.woocommerce-tabs').should('contain', 'Descrição')

})

})