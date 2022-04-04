/// <reference types="cypress" />

context('Assertions in Cypress', () => {
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions')
      .its('body')
      .should('have.length', 10);
  });
  beforeEach(() => {
    cy.visit('/');
  });
  afterEach(() => {
    cy.log('After Each Log is here');
  });

  after(()=>{
      cy.log('After hook runs once')
  })
  it('has an h1 on the page', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink');
  });
});
