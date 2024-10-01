const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com/', // Remplacez par l'URL de votre application
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000
  }
}


