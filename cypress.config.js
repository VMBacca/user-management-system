const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5205",
    specPattern: "cypress/e2e/**/*.cy.js",
  },
});
