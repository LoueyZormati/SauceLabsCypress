/// <reference types="cypress" />

describe('Logout Tests', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.login(user.username, user.password)
    })
  })

  it('should logout successfully', () => {
    cy.logout()
    cy.url().should('not.include','/inventory.html')
  })
})