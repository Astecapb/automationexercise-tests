describe('API - Detalhes do marcas', () => {
  
  it('API-02: Deve retornar lista de marcas', () => {
    cy.request('GET', 'https://automationexercise.com/api/brandsList')
      .its('status').should('eq', 200);
  });
});
