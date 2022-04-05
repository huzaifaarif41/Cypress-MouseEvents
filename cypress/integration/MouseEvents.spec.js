/// <reference types="cypress" />

context('Mouse Events', ()=>{
    beforeEach(()=>{
        cy.visit('/commands/actions')
    })
    it('triggers popover on click', ()=>{
        cy.get('.action-btn').click()
        cy.findByText('This popover shows up on click').should('be.visible')
    })

    it('click on different sections of a canvas', ()=>{
        cy.get('#action-canvas').click('top')
        cy.get('#action-canvas').click('bottomRight')
        cy.get('#action-canvas').click(80, 150)
    })

    it('dblClick to edit', ()=>{
        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('Right Click Event', ()=>{
        cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })

    it('shows the navlinks on hover', ()=>{
        cy.get('.dropdown-toggle').trigger('mouseover')
        cy.get('.dropdown-menu').should('be.visible')
    })
    
})