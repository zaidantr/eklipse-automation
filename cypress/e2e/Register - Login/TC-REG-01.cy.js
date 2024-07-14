// Function to generate a random string of specified length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // Function to generate a random email
  function generateRandomEmail() {
    const randomString = generateRandomString(10); // Adjust the length as needed
    return `${randomString}@example.com`; // Change the domain as needed
  }
  
  // Function to generate a random username
  function generateRandomUsername() {
    return generateRandomString(8); // Adjust the length as needed
  }
  
  // Usage example:
  const randomUsername = generateRandomUsername();
  const randomEmail = generateRandomEmail();
  
  // Now you can use `randomUsername` and `randomEmail` in your Cypress tests
  

describe('Verify that the user can register with valid credentials.', () => {
    beforeEach('Open the web browser', () => {
        cy.visit("https://app.eklipse.gg/register")
        cy.url().should('eq', 'https://app.eklipse.gg/register');
    })
    it('Input credentials', () => {
        // Click the "Sign Up" button
        // Input credentials
        cy.get('#name').type(generateRandomUsername());
        cy.get('#email').type(generateRandomEmail());
        cy.get('#password').type('P@ssw0rd');
        cy.get('#password_confirmation').type('P@ssw0rd');

        // Optionally, you can submit the form after filling in the credentials
        cy.get('form').submit();
        cy.wait(5000); // Wait for 5 seconds
        cy.get('.show-desktop').should('be.visible');
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