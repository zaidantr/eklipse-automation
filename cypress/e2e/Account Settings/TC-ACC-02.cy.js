describe('Check if users can update their profile information successfully.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://app.eklipse.gg/login")
        cy.url().should('eq', 'https://app.eklipse.gg/login');
    })
    it('Update profile informations', () => {
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
        cy.get(':nth-child(8) > .dropdown > .nav-link').click()
        cy.get(':nth-child(8) > .dropdown > .dropdown-menu > :nth-child(4)').click()
        cy.get('.ek-account-setting').should('be.visible');
        cy.url().should('eq', 'https://app.eklipse.gg/account');
        
        // Update profile informations
        cy.get('.ek-personal-detail > :nth-child(2) > :nth-child(1) > input')
        .clear()
        .type('Ajaasas');
        cy.get(':nth-child(2) > .form-input-detail-footer > .ek-primary-button').click()
        cy.wait(5000); // Wait for 5 seconds
        cy.get('#swal2-html-container')
          .should('be.visible') // Ensure the element is visible
          .contains('Your profile has been updated'); // Assert the presence of the expected text
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