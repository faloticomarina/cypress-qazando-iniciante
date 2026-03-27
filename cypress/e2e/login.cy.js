/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'

import commum_page from "../support/pages/commum_page"
import login_page from "../support/pages/login_page"

describe('Login', () => {

    beforeEach('Acessar Login', () =>{
            commum_page.acessarLogin()
        } )

    it('Login com e-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login e-mail inválido', () => {
        login_page.preencheEmail(faker.person.firstName())
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com campo senha vazio', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com senha inválida', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('123')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com sucesso', () => {
        const email = faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.clicarLogin()
        login_page.validarMessagemSucesso(email)
    })

})
