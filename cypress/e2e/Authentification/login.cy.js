/// <reference types="cypress" />


describe('Login Tests', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.visit("https://www.saucedemo.com/")
    })
  })
  it('should login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.username, user.password)
      cy.url().should('include', '/inventory.html')
    })
  })

  it('should fail with invalid credentials', () => {
    cy.login('invaliduser', 'invalidpassword')
    cy.get('.error').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})