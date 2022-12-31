Feature: Header links

    Background:
        Given homepage is loaded

    Scenario: Check Home button works
        When I click the Home button
        Then confirm carousel exists
 
    Scenario: Check Contact button works
        When I click the Contact button
        Then confirm New Message title
 
    Scenario: Check About Us button works
        When I click the About Us button
        Then confirm About Us title

    Scenario: Check Cart button works
        When I click the Cart button
        Then confirm Products title
    
    Scenario: Check Log in button works
        When I click the Log in button
        Then confirm Log in title

    Scenario: Check Sign Up button works
        When I click the Sign Up button
        Then confirm Sign Up title