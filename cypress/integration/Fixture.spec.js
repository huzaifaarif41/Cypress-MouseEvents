/// <reference types="cypress" />

context('Using Fixtures', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data;
      cy.log('This Object', this.data);
    });
  });
  it('Uses fixture data in a network request', () => {
    cy.visit('/commands/network-requests');
    cy.intercept('GET', '**/comments/*', this.data).as('getComment');
    cy.get('.network-btn').click();
    cy.wait('@getComment').then((res) => {
      cy.log('Response', res);
    });
  });

  it('shoud do a get request', () => {
    cy.visit('/commands/network-requests');
    cy.intercept('GET', '**/comments/*').as('getComment');
    cy.get('.network-btn').click();
    cy.wait('@getComment').then((res) => {
      cy.log('Response', res);
    });
  });

  it('should do a post request', () => {
    cy.visit('/commands/network-requests');
    cy.intercept('POST', '**/comments').as('postComment');

    cy.get('.network-post').click();
    cy.wait('@postComment').should(({ request, response }) => {
      expect(request.body).to.include('email');
      expect(request.headers).to.have.property('content-type');
      expect(response && response.body).to.have.property(
        'name',
        'Using POST in cy.intercept()'
      );
    });
  });


  it('Pulls data from fixture', () => {
    cy.fixture('example').then((data) => {
      cy.log('DATA:', data);
    });
  });

  it('should update the data from fixture', () => {
    cy.fixture('example').then((data) => {
      data.email = 'huzaifa@gmail.com';
      cy.log('data:', data);
    });
  });
});
