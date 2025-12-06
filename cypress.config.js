const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    screenshotsFolder: 'evidencias/screenshots',
    videosFolder: 'evidencias/videos',
    defaultCommandTimeout: 8000,
    retries: { runMode: 1, openMode: 0 },
    specPattern: [
      'cypress/e2e/**/*.cy.js',   // testes E2E
      'cypress/api/**/*.cy.js'    // testes de API
    ],
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // anexar screenshots aos fails, se necessário
    }
  }
})
