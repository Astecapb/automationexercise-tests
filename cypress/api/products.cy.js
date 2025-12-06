describe('API - Lista de Produtos', () => {
  it('API-01: Deve retornar lista de produtos', () => {
    cy.request('GET', 'https://automationexercise.com/api/productsList')
      .its('status').should('eq', 200);
  });

  
});
