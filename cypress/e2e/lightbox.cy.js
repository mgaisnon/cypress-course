/// <reference types="cypress" />

context('Component lightbox', () => {
    beforeEach(() => {
        cy.visit('../../app/lightbox.html');
        
    })

    it('Open lightbox when click img', () => {
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=overlay').should('be.visible')
    })

    it('Close lightbox when click outside lightbox', () =>{
        cy.get('[data-cy=img]').click()
        cy.wait(2000)
        //cy.get('body).click(0,0);
        cy.get('.relative').click({force: true});
        cy.get('[data-cy=overlay]').should('not.be.visible');

    })

    it('Like and update the overlay and the lightbox', () =>{
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=like]').click()
        cy.get('[data-cy=count').should('have.text', '1')
    })

    it('Unlike and update the overlay and the lightbox', () =>{
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=like]').click()
        cy.get('[data-cy=unlike]').click()
        cy.get('[data-cy=count').should('have.text', '0')
    })

    it('Add comments', () =>{
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=add-comment]').type('Cypress is awesome!')
        cy.get('[data-cy=btn-comment]').click()
        cy.get('[data-cy=comment]').should('have.text', 'Cypress is awesome!')
    })

    it('Test add empty comment was impossible because button was desactivate', () =>{
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=btn-comment]').should('be.disabled')
    })

    it('Hide comments', () =>{
        cy.get('[data-cy=img]').click()
        cy.get('[data-cy=add-comment]').type('Cypress is awesome!')
        cy.get('[data-cy=btn-comment]').click()
        cy.get('[data-cy=hidden]').click()
        cy.get('[data-cy=comment]').should('not.be.visible')


    })

    /*it('count comments', () =>{

    })*/
})