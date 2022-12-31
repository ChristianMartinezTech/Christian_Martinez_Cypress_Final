import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import * as elements from "../../pages/homepage";

Given('homepage is loaded', () => {
  cy.visit('/');
});


// Scenario: Check next and previous buttons work
Then('I confirm the carousel exists', () => {
  cy.get(elements.elements.carousel).should('exist');
});

Then('I confirm the next button exists', () => {
  cy.get(elements.elements.carouselNextButton)
    .should('be.visible');
});


Then('I confirm the previous button exists', () => {
    cy.get(elements.elements.carouselPrevButton)
    .should('be.visible');
});


// Scenario: Check second carousel item
Given('first carousel item exists', () => {
  cy.get(elements.elements.carouselFirstSlide)
  .should('be.visible');
});

When('I click on the next icon', () => {
  cy.get(elements.elements.carouselNextButton)
  .click();
});

Then('second carousel item exists', () => {
  cy.get(elements.elements.carouselSecondSlide)
  .should('be.visible');
});


//Scenario: Check thrid carousel item
Given('first carousel item exists', () => {
  cy.get(elements.elements.carouselFirstSlide)
  .should('be.visible');
});

When('I click on the next icon', () => {
  cy.get(elements.elements.carouselNextButton)
  .click();
});

When('I click on the next icon a second time', () => {
  cy.get(elements.elements.carouselSecondSlide)
    .parents()
    .should('have.class', elements.elements.carouselClass);

  cy.get(elements.elements.carouselSecondSlide)
    .parents()
    .should('not.have.class', elements.elements.carouselClass);

  cy.get(elements.elements.carouselNextButton)
    .click();  
});

Then('third carousel item exists', () => {
  cy.get(elements.elements.carouselThridSlide)
  .should('be.visible');
});
