// cypress/e2e/login.cy.js
describe('E2E - Login', () => {
  it('LOG-01: Deve autenticar com credenciais válidas via UI', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type('testuser@mail.com')
    cy.get('[data-qa="login-password"]').type('Senha123')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible')
  })

  it('LOG-02: Deve rejeitar credenciais inválidas via UI', () => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type('invalido@mail.com')
    cy.get('[data-qa="login-password"]').type('xxx')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})
