/// <reference types="cypress" />

context('UI Tests', () => {
    beforeEach(() => {
      cy.visit('/home')
    })

    it.skip('Verifies that the h1 is present', () => {
        cy.get('h1').should('contain', 'SnapShot')
    })

    it('Verifies that theres 4 list items in the main-nav', () => {
        cy.get('nav[class=main-nav] ul li').should('have.length', 4)
    })

    it('Verifies the /Mountain page has the expected path, heading and images', () => {
        cy.contains('Mountain').click()
        cy.url().should('include', '/mountain')
        cy.get('img').should('have.length', 24)
        cy.get('h2').should('contain', 'mountain Pictures')
    })

    it('Verifies the /Beaches page has the expected path, heading and images', () => {
        cy.contains('Beaches').click()
        cy.url().should('include', '/beach')
        cy.get('img').should('have.length', 24)
        cy.get('h2').should('contain', 'beach Pictures')
    })

    it('Verifies the /Birds page has the expected path, heading and images', () => {
        cy.contains('Birds').click()
        cy.url().should('include', '/bird')
        cy.get('img').should('have.length', 24)
        cy.get('h2').should('contain', 'bird Pictures')
    })

    it('Verifies the /Food page has the expected path, heading and images', () => {
        cy.contains('Food').click()
        cy.url().should('include', '/food')
        cy.get('img').should('have.length', 24)
        cy.get('h2').should('contain', 'food Pictures')
    })

    it('Verifies Search page has the expected path, heading and images', () => {
        cy.get('input').type('website')
        cy.get('.search-button').click()
        cy.get('h2').should('contain', 'searchTerm Images')
        cy.get('img').should('have.length', 24)
        cy.url().should('include', '/website')
    })
    
    it('Creates a search request and checks for broken images', () => {
        cy.get('input').type('food')
        cy.get('.search-button').click()
        cy.get('img').each((item) => {
            cy.wrap(item).invoke('attr', 'src').should('not.contain', 'farm0.staticflickr.com/0')
    })

    it('Verifies that the images have the expected CSS properties', () => {
        cy.visit('/mountain')
        cy.get('img').should('have.css', 'width', '275px')
        cy.get('img').should('have.css', 'transform', 'matrix(1.25, 0, 0, 1.25, 0, 0)')
        cy.get('img').should('have.css', 'transition', 'transform 1.25s ease 0s')
    })

    })
})