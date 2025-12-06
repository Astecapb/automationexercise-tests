describe('Registro de Usuário', () => {
  it('REG-01: Criar conta válida', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
    cy.get('[name="name"]').type('Robson QA');
    cy.get('[data-qa="signup-email"]').type(`robson${Date.now()}@mail.com`);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').type('SenhaForte123!');
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
  });

  it('REG-02: Email duplicado', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
    cy.get('[name="name"]').type('Robson QA');
    cy.get('[data-qa="signup-email"]').type('teste@mail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Email Address already exist!').should('be.visible');
  });
});
