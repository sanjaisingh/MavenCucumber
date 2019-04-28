Feature: Test Guru99

@Smoke
Scenario: Login with valid credentials
    Given Open chrome and start application
    When Enter valid username "mngr190802" and password "susUnYd"
    Then User should be able to login