/// <reference types="cypress" />
// @ts-nocheck

const navbarText= Cypress.env("navbarText")
 
context("Using React Testing Library and Plugins",()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    
    it('correctly renders the cypress website link', ()=>{
        cy.findByText("cypress.io").should("exist")
    })

    it('correctly renders the cypress website link', ()=>{
        cy.findByText(navbarText).should("exist")
    })

    it("should render Commands link",()=>{
        cy.findByRole("link" , {name:"Commands"}).should("exist").click()
    })
})