/* global cy */
// cypress/integration/login.spec.js

describe('Login Form', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('/');
    });
  
    it('should display the login form', () => {
      // Check if the login form elements exist
      cy.get('.login-form').should('be.visible');
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('.login-button').should('be.visible');
    });
  
    it('should allow input in the form fields', () => {
      // Test that input fields accept text
      const testUser = 'testuser';
      const testPassword = 'password123';
      
      cy.get('input[name="name"]').type(testUser).should('have.value', testUser);
      cy.get('input[name="password"]').type(testPassword).should('have.value', testPassword);
    });
  
    it('should redirect to welcome page after successful login', () => {
      // Fill out the form
      const testUser = 'testuser';
      const testPassword = 'password123';
      
      cy.get('input[name="name"]').type(testUser);
      cy.get('input[name="password"]').type(testPassword);
      cy.get('.login-button').click();
      
      // After successful login, check if we're redirected to the welcome page
      cy.get('.welcome-card').should('be.visible');
      cy.get('.welcome-card h1').should('contain', `Welcome, ${testUser}!`);
      cy.get('.logout-button').should('be.visible');
    });
  
    it('should be able to log out', () => {
      // First login
      const testUser = 'testuser';
      const testPassword = 'password123';
      
      cy.get('input[name="name"]').type(testUser);
      cy.get('input[name="password"]').type(testPassword);
      cy.get('.login-button').click();
      
      // Verify we're on the welcome page
      cy.get('.welcome-card').should('be.visible');
      
      // Log out
      cy.get('.logout-button').click();
      
      // Verify we're back at the login page
      cy.get('.login-form').should('be.visible');
    });
  });