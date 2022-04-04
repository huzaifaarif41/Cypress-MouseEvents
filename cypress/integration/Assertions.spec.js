/// <reference types="cypress" />

context('Assertions in Cypress', () => {
  beforeEach(() => {
    cy.visit('/commands/actions');
  });
  it('Shows an active class in the current page', () => {
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active');
  });

  it('Shows not have an active class in the current page', () => {
    cy.get('.dropdown-menu')
      .find('li')
      .first()
      .should('not.have.class', 'active');
  });
  it('Multiple Assertions', () => {
    cy.get('.dropdown-menu')
      .find('li')
      .first()
      .should('not.have.class', 'active')
      .find('a')
      .should('have.attr', 'href', '/commands/querying');
  });

  it('Links to the page correctly', () => {
    cy.visit('/');
    cy.findAllByText('Actions').last().click();
    cy.url().should('include', 'commands/actions');
  });
  it('Links to the page correctly by clicking actions link by force ', () => {
    cy.visit('/');
    cy.findAllByText('Actions').first().click({ force: true });
    cy.url().should('include', 'commands/actions');
  });
  it('Lets type into an input field', () => {
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test');
  });

  it('testing to clear an input field', () => {
    cy.findByLabelText('Describe:')
      .type('Test Description')
      .should('have.value', 'Test Description')
      .clear()
      .should('have.value', '');
  });
  it('Lets you check a checkBox', () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
  });
  it('Lets you check a checkBox', () => {
    cy.get('.action-checkboxes [type="checkbox"]')
      .eq(1)
      .check({ force: true })
      .should('be.checked');
  });
});
