describe('Check if the landing page displays relevant content and graphics.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://eklipse.gg/")
        cy.url().should('eq', 'https://eklipse.gg/');
    })
    it('Display the login button', () => {
        // Asserting the presence and attributes of the Sign In button
        cy.get('a.btn-login')
        // Asserting that the Sign In button is visible
        .should('be.visible')
        // Asserting the href attribute of the Sign In button
    })
    it('Display the register button', () => {
        // Asserting the presence and attributes of the Sign Up button
        cy.get('a.btn-register')
        // Asserting that the Sign Up button is visible
        .should('be.visible')
        // Asserting the href attribute of the Sign Up button
        // Asserting the text of the Sign Up button
        .should('have.text', '\nSign Up For Free\n\nSign Up For Free\n');
    })
})