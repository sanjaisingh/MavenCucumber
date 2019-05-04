Feature: Facebook Login Page

  @Smoke
  Scenario Outline: Login with valid credentials
    Given Open chrome and start application
    When Enter valid username "<username>" and password "<password>"
    And User should be able to login
    Then User "Sanjai Singh" should be logged in

    Examples: 
      | username             | password       |
      | sanjai1184@gmail.com | sanajayjai1!@# |
      | sanjai1184@gmail.com | sanajayjai1!@# |
      | sanjai1184@gmail.com | sanajayjai1!@# |
