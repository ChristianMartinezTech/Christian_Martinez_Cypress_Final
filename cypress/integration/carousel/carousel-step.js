import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Homepage } from "cypress/integration/pages/Homepage";

const homepage = new Homepage;

Given('homepage is loaded', () => {
  homepage.goHomepage();
});

// Scenario: Check next and previous buttons work
When('I confirm the carousel exists', text => {
  homepage.carousel()
    .should('be.exist')
});

Then('I confirm the next button exists', pendingItems => {
  cy.clock()
    homepage.carouselNextButton()
    .type('button')
    .should('be.visible');
});

Then('I confirm the previous button exists', pendingItems => {
  cy.clock()
    homepage.carousePrevButton()
    .get('.carousel-control-prev-icon')
    .type('button')
    .should('be.visible');
});
