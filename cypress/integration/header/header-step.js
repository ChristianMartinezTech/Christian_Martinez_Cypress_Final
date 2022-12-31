import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as carousel from "../../pages/homepage";
import * as headers from "../../pages/headers";

Given('homepage is loaded', () => {
  cy.visit('/');
});

// Scenario: Check Home button works
When('I click the Home button', () => {
    cy.get(elements.elements.carouselNextButton)
    .click();
  });
  
  Then('confirm carousel exists', () => {
    cy.get(elements.elements.carouselSecondSlide)
    .should('be.visible');
  });