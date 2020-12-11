Feature: As a user, I should be able to login with valid credentials

Scenario Outline:  Login verification

  When User clicks on sign in link
  Then User enters "<email>" and "<password>"
  When User signs in
  Then User should be logged in with "<username>"

  Examples:
    | email              | password | username       |
    | test1223@gmail.com | test@123 | testuserfollow |
