/// <reference types="cypress" />

describe('Checkout', () => {
    beforeEach(() => {
      // Connexion avant chaque test
      cy.fixture('user').then((user) => {
        cy.login(user.username, user.password)
        cy.addProduct('#add-to-cart-sauce-labs-backpack')
      })
    })
   
  
  
    it('should complete the checkout process', () => {
      // Aller à la page de paiement
      cy.get('#checkout').click()
  
      // Remplir les informations nécessaires pour compléter le paiement
      cy.get('#first-name').type("louey")
      cy.get('#last-name').type("Zormati")
      cy.get('#postal-code').type("4021")
      cy.get('#continue').click()
  
      // Vérifier que le message "Checkout: Overview" existe sur la page
      cy.get('span.title').contains('Checkout: Overview').should('exist')
      
      // Finaliser le paiement
      cy.get('#finish').click()
  
      // Vérifier que le message "Checkout: Complete!" existe sur la page
      cy.get('span.title').contains('Checkout: Complete!').should('exist')
    })
})  