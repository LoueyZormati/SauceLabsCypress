/// <reference types="cypress" />

describe('Delete Products', () => {
    beforeEach(() => {
      // Connexion avant chaque test
      cy.fixture('user').then((user) => {
        cy.login(user.username, user.password)
      })
    })
     // Répéter l'ajout des produits avant chaque test
     beforeEach(() => {
      // Ajout des produits au panier
      cy.addProduct('#add-to-cart-sauce-labs-backpack')
      
      
    })
    it('should delete a product from the cart', () => {
        // Supprimer un produit du panier
        cy.get('.cart_item').first().find('.btn_secondary').click()
    
        // Vérifier que le panier ne contient plus qu'un seul élément
        cy.get('.cart_item').should('have.length', 0)
      })
    
})