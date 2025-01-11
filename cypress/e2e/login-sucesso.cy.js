describe('Login com sucesso', () => {

    beforeEach(() => {
        cy.visit('https://paciente-staging.lacreisaude.com.br/')
    })

    it('Acessar plataforma e Logar usuario com sucesso', () => {

        cy.get('#email')
            .type('palij24324@nalwan.com')

        cy.get('#password')
            .type('Senha@1234')

        cy.get('.kWXVUj > .sc-b3674f5-1')
            .click()

        cy.get('.sc-2bee1dea-0')
            .should('be.visible')

    })


})