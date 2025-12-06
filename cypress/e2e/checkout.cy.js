describe('Checkout', () => {
  it('FIN-01: Deve concluir pedido com sucesso após login', () => {
    cy.visit('/')
    const email = `robson_${Date.now()}@mail.com`
    cy.signup('Robson QA', email, 'SenhaForte123!')
    cy.addFirstProductToCart()
    cy.contains('Proceed To Checkout').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('.checkout-information').should('exist')
    cy.contains('Place Order').click()
    // fluxo real do site pede dados de cartão
    cy.get('[data-qa="name-on-card"]').type('Robson QA')
    cy.get('[data-qa="card-number"]').type('4111111111111111')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('12')
    cy.get('[data-qa="expiry-year"]').type('2030')
    cy.get('[data-qa="pay-button"]').click()
    cy.contains('Order Placed!').should('be.visible')
  })

  it('FIN-03: Deve exigir dados de pagamento (validação)', () => {
    cy.visit('/')
    const email = `robson_${Date.now()}@mail.com`
    cy.signup('Robson QA', email, 'SenhaForte123!')
    cy.addFirstProductToCart()
    cy.contains('Proceed To Checkout').click()
    cy.contains('Place Order').click()
    // tentar submeter sem preencher
    cy.get('[data-qa="pay-button"]').click()
    // Espera-se validação: se o site permitir, marcar como falha e reportar
    cy.get('.alert-danger, .error, .has-error').should('exist')
  })
})
