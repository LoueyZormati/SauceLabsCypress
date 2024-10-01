/// <reference types="cypress" />

describe('Add Products', () => {
    beforeEach(() => {
      // Connexion avant chaque test
      cy.fixture('user').then((user) => {
        cy.login(user.username, user.password)
      })
    })
    it('Add product test',()=>{
          // Ajout des produit au panier
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
  
    // Attendre que le panier soit mis à jour
    cy.wait(500)
  
    // Aller au panier
    cy.get('a.shopping_cart_link').click()
    })
     // Vérifier qu'il y a exactement deux éléments dans le panier
     cy.get('.cart_item').should('have.length', 2)
})