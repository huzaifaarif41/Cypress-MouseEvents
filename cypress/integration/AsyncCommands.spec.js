/// <reference types="cypress" />

context('Using Async Commands', () => {
  beforeEach(() => {
    cy.visit('/commands/actions');
  });

  it('types into an email field', () => {
    cy.findAllByPlaceholderText('Email').type('test@gmail.com');
    cy.wait(5000);
    console.log('test is finished'); // it runs first before all the commands of cypress
    cy.log('Cypress log used');
  });
  it('types into an email field and fetch request through an Api', () => {
    cy.findAllByPlaceholderText('Email').type('test@gmail.com');
    cy.wait(2000).then(() => {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  });
});
