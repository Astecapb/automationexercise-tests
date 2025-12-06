describe('Carrinho de Compras', () => {
  it('CAR-01: Adicionar produto ao carrinho', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Products').click();
    cy.get('.choose > .btn').first().click();
    cy.contains('View Cart').click();
    cy.get('.cart_description').should('contain', 'Product');
  });

  it('CAR-03: Remover produto do carrinho', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Products').click();
    cy.get('.choose > .btn').first().click();
    cy.contains('View Cart').click();
    cy.get('.cart_quantity_delete').click();
    cy.contains('Cart is empty!').should('be.visible');
  });
});
