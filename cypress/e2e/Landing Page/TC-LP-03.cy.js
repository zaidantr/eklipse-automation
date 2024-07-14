describe('Ensure that navigation links are working correctly from the landing page.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://eklipse.gg/")
        cy.url().should('eq', 'https://eklipse.gg/');
    })
    it('When click login button will direct to login page', () => {
        cy.get('a.btn-login')
        .should('have.attr', 'href')
        .then((href) => {
          cy.visit(href); // Simulate clicking the Sign In button and navigating to its href
          cy.url().should('eq', href); // Assert that the current URL matches the href of the Sign In button
        });
    })
    it('When click register button will direct to register page', () => {
        cy.get('a.btn-register')
        .should('have.attr', 'href')
        .then((href) => {
          cy.visit(href); // Simulate clicking the Sign Up button and navigating to its href
          cy.url().should((url) => {
            expect(url).to.equal('https://app.eklipse.gg/register'); // Or assert against a specific URL
          });
        });
      
    })
})