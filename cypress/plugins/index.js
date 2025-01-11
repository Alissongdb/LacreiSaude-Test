const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // Configura o Cypress Cucumber Preprocessor
            on('file:preprocessor', cucumber());
            return config;
        },
    },
});
