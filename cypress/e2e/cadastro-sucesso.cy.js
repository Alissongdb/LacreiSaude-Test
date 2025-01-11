describe('Cadastro com sucesso', () => {

  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/')
  })

  it('Acessar plataforma e cadastrar usuario com sucesso', () => {

    cy.get('.dyhGHG > .sc-b3674f5-1')
      .should('be.visible')
      .click()

    cy.get('#first_name')
      .type('Alisson')

    cy.get('#last_name')
      .type('Teste Lacrei')

    cy.get(':nth-child(3) > .sc-910970e7-0 > .inputContainer')
      .type('palij24324@nalwan.com')

    cy.get('#email2')
      .type('palij24324@nalwan.com')

    cy.get('#password1')
      .type('Senha@1234')

    cy.get('#password2')
      .type('Senha@1234')

    cy.get(':nth-child(1) > label > .check-container > span')
      .click()

    cy.get(':nth-child(2) > label > .check-container > span')
      .click()

    cy.get('.kWXVUj > .sc-b3674f5-1')
      .click()

  })


})