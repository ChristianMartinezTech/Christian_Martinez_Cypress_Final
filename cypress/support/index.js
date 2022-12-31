import './commands';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exeption', (err, runnable) => {
    return false
});