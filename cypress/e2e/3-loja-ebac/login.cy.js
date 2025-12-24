/// <Reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('my-account')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('testeneto@teste.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeneto (não é testeneto? Sair)')
    })

    it('Deve exibir uma menssagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('teste0000@teste.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get("[role='alert']").should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get("[role='alert']").should('exist')
    })


    it('Deve exibir uma menssagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('testeneto@teste.com')
        cy.get('#password').type('1230')
        cy.get('.woocommerce-form > .button').click()
        cy.get("[role='alert']").should('contain', 'Erro: A senha fornecida para o e-mail testeneto@teste.com está incorreta. Perdeu a senha?')
        cy.get("[role='alert']").should('exist')
    })

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeneto (não é testeneto? Sair)')
    })

    it('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeneto (não é testeneto? Sair)')
        })

    })

    it('Deve fazer login com sucesso usando comandos customizados', () => {
        cy.login('testeneto@teste.com', '123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testeneto (não é testeneto? Sair)')
    })

})