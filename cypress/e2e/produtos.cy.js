describe('Pesquisa e Visualização de Produtos', () => {
  it('PES-01: Deve retornar resultados para termo válido', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.get('#search_product').type('Dress')
    cy.get('#submit_search').click()
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
  })

  it('PES-03: Deve exibir detalhes do produto', () => {
    cy.visit('/')
    cy.contains('Products').click()
    cy.get('.features_items .product-image-wrapper').first().find('a').contains('View Product').click()
    cy.get('.product-information').should('be.visible')
    cy.get('.product-information h2').should('not.be.empty')
    cy.get('.product-information span span').should('contain', '$')
  })
})
