/// <reference types="cypress" /> 

export default{
    acessarCadastroUsuario () {
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-lock')
            .click()
    },

    acessarLogin () {
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-user')
            .click()
    }
}