import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as elements from "../../pages/Homepage";

Given('homepage is loaded', () => {
  cy.visit('/');
});

// Scenario: Check next and previous buttons work
Then('I confirm the carousel exists', () => {
  cy.get(elements.elements.carousel).should('exist');
});

Then('I confirm the next button exists', () => {
  cy.clock()
    .get(elements.elements.carouselNextButton)
    .type('button')
    .should('be.visible');
});

Then('I confirm the previous button exists', () => {
  cy.clock()
    .get(elements.elements.carouselPrevButton)
    .type('button')
    .should('be.visible');
});

// Scenario: Check next 