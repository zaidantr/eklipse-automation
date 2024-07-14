describe('Verify that the user can register with valid credentials.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://app.eklipse.gg/login")
        cy.url().should('eq', 'https://app.eklipse.gg/login');
    })
    it('Input invalid credentials', () => {
        // Click the "Sign Up" button
        // Input credentials
        cy.get('#username').type('buto1asa2@gam.com');
        cy.get('#password').type('P@sswasaas0rd');

        // Optionally, you can submit the form after filling in the credentials
        cy.get('form').submit();
        // cy.wait(5000); // Wait for 5 seconds
        cy.get('#swal2-html-container')
            .should('be.visible') // Ensure the element is visible
            .contains('Your account or password is incorrect. Reset or change your password.'); // Assert the presence of the expected text

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