describe('Verify that the landing page loads without any errors.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://eklipse.gg/")
        cy.url().should('eq', 'https://eklipse.gg/');
    })
    it('Display the correct logo', () => {
        // Asserting the presence and attributes of the logo
        cy.get('.logo-desktop')
        // Asserting that the logo is visible
        .should('be.visible')
        // Asserting the src attribute of the logo
        .should('have.attr', 'src', 'https://i0.wp.com/eklipse.gg/wp-content/uploads/2022/09/logo_white.png?fit=251%2C50&ssl=1')
        // Asserting the alt attribute of the logo
        .should('have.attr', 'alt', 'Eklipse');

    })
    // All of the header is visible
})