const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ga3tsk',
  allowCypressEnv: false,

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
