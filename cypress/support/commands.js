// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('signup', (name, email, password) => {
  cy.contains('Signup / Login').click()
  cy.get('[name="name"]').type(name)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
  // preencher campos mínimos para criar conta
  cy.get('[data-qa="password"]').type(password)
  cy.get('[data-qa="first_name"]').type('Robson')
  cy.get('[data-qa="last_name"]').type('QA')
  cy.get('[data-qa="company"]').type('Unipê')
  cy.get('[data-qa="address"]').type('Rua Teste 123')
  cy.get('[data-qa="country"]').select('Canada')
  cy.get('[data-qa="state"]').type('PB')
  cy.get('[data-qa="city"]').type('João Pessoa')
  cy.get('[data-qa="zipcode"]').type('58000-000')
  cy.get('[data-qa="mobile_number"]').type('83999999999')
  cy.get('[data-qa="create-account"]').click()
  cy.contains('Account Created!').should('be.visible')
  cy.contains('Continue').click()
})

Cypress.Commands.add('addFirstProductToCart', () => {
  cy.contains('Products').click()
  cy.get('.features_items .product-image-wrapper').should('exist')
  cy.get('.features_items .product-image-wrapper').first().trigger('mouseover')
  cy.get('.features_items .product-image-wrapper').first().find('.add-to-cart').click({ force: true })
  cy.contains('View Cart').click()
})
