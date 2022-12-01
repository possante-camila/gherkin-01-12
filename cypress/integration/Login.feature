Feature: Twitter Clone - Login Page
    Scenario Outline: Validate valid & invalid login credentials
    Given I navigate to the Nuts homepage
    When I click on signin button
    And I type email
    And I type password
    And I click on signin securely
