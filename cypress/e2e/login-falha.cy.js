describe('Login com falha', () => {

    beforeEach(() => {
        cy.visit('https://paciente-staging.lacreisaude.com.br/')
    })

    it('Acessar plataforma e apresentar falha ao logar com email incorreto', () => {

        cy.get('#email')
            .type('palij24324n@alwan.com.com123teste')

        cy.get('#password')
            .type('Senha@1234')

        cy.get('.kWXVUj > .sc-b3674f5-1')
            .click()

        cy.get('.sc-910970e7-3 > .sc-7293ddf1-0')
            .should('be.visible')

    })


})