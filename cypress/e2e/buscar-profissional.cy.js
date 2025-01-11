describe('Buscar profissional com sucesso', () => {

    beforeEach(() => {
        cy.visit('https://paciente-staging.lacreisaude.com.br/')
    })

    it('Acessar plataforma e buscar profissional', () => {

        cy.get('#email')
            .type('palij24324@nalwan.com')

        cy.get('#password')
            .type('Senha@1234')

        cy.get('.kWXVUj > .sc-b3674f5-1')
            .click()

        cy.get('.sc-2bee1dea-0')
            .should('be.visible')

        cy.get('.sc-d1bf8637-4')
            .type('Odontologia')

        cy.get('.search-button-box > .sc-b3674f5-0 > .sc-b3674f5-1')
            .click()

        cy.get(':nth-child(1) > .container-infos > .box-info-professional > .specialty-crm')
            .should('be.visible')

    })


})