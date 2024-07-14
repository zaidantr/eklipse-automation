describe('Check if the latest streams or updates are visible on the home page.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://app.eklipse.gg/login")
        cy.url().should('eq', 'https://app.eklipse.gg/login');
    })
    it('Check the navigation bar', () => {
        // Click the "Sign Up" button
        // Input credentials
        cy.get('#username').type('buto12@gam.com');
        cy.get('#password').type('P@ssw0rd');

        // Optionally, you can submit the form after filling in the credentials
        cy.get('form').submit();
        cy.wait(5000); // Wait for 5 seconds
        cy.get('.show-desktop').should('be.visible');
        
        cy.wait(5000); // Wait for 5 seconds
        cy.get('.btn-link--highlight').click()
        cy.get('.navbar').should('be.visible');
    })
    it('Clear cookies and local storage', () => {
    // Perform registration actions here

    // Clear cookies and local storage to simulate logout
    cy.clearCookies();
    cy.clearLocalStorage();

    // Wait for any logout process to complete
    cy.wait(1000); // Adjust timing as needed
  })
})