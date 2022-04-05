/// <reference types="cypress" />

context('Using Fixtures', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data;
      cy.log('This Object', this.data);
    });
  });

  it('sets and gets a token from local storage', ()=>{
      cy.setLocalStorage('token', 'abcd123')
      cy.getLocalStorage('token').should('eq', 'abcd123')
  })

  it('overwrites type command by using sensitive characters',()=>{
      cy.visit('./commands/actions')
      cy.findByPlaceholderText('Email').type("example@gmail.com")
      cy.findByPlaceholderText("Email").type('huzaifa@123.com',{sensitive:true})
  })

});
