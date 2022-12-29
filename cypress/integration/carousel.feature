Feature: Check carousel

    Background:
        Given homepage is loaded

    Scenario: Check next and previous buttons work
        Then I confirm the carousel exists
        And I confirm the next button exists
        And I confirm the previous button exists
 
    Scenario: Check second carousel item
        And first carousel item exists
        When I click on the next icon
        Then second carousel item exists
 
    Scenario: Check thrid carousel item
        And first carousel item exists
        When I click on the next icon
        And  I click on the next icon
        Then third carousel item exists