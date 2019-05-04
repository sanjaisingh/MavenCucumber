$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FizzBuzz.feature");
formatter.feature({
  "line": 1,
  "name": "FizzBuzz Game Play",
  "description": "",
  "id": "fizzbuzz-game-play",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Play FizzBuzz to get Fizz",
  "description": "",
  "id": "fizzbuzz-game-play;play-fizzbuzz-to-get-fizz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Create a fizzbzz game",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I play with number 3",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The result is \"Fizz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzSteps.create_a_fizzbzz_game()"
});
formatter.result({
  "duration": 145341939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "FizzBuzzSteps.i_play_with_number(int)"
});
formatter.result({
  "duration": 2255915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fizz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzSteps.the_result_is(String)"
});
formatter.result({
  "duration": 3570893,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Play FizzBuzz to get Buzz",
  "description": "",
  "id": "fizzbuzz-game-play;play-fizzbuzz-to-get-buzz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Create a fizzbzz game",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I play with number 5",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The result is \"Buzz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzSteps.create_a_fizzbzz_game()"
});
formatter.result({
  "duration": 63041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "FizzBuzzSteps.i_play_with_number(int)"
});
formatter.result({
  "duration": 172310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buzz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzSteps.the_result_is(String)"
});
formatter.result({
  "duration": 109270,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Play FizzBuzz to get FizzBuzz",
  "description": "",
  "id": "fizzbuzz-game-play;play-fizzbuzz-to-get-fizzbuzz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Create a fizzbzz game",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I play with number 15",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The result is \"FizzBuzz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzSteps.create_a_fizzbzz_game()"
});
formatter.result({
  "duration": 55569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 19
    }
  ],
  "location": "FizzBuzzSteps.i_play_with_number(int)"
});
formatter.result({
  "duration": 102733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FizzBuzz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzSteps.the_result_is(String)"
});
formatter.result({
  "duration": 79851,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Page",
  "description": "",
  "id": "facebook-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with valid credentials",
  "description": "",
  "id": "facebook-login-page;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User \"Sanjai Singh\" should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "facebook-login-page;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "facebook-login-page;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sanjai1184@gmail.com",
        "sanajayjai1!@#"
      ],
      "line": 12,
      "id": "facebook-login-page;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sanjai1184@gmail.com",
        "sanajayjai1!@#"
      ],
      "line": 13,
      "id": "facebook-login-page;login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "sanjai1184@gmail.com",
        "sanajayjai1!@#"
      ],
      "line": 14,
      "id": "facebook-login-page;login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid credentials",
  "description": "",
  "id": "facebook-login-page;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username \"sanjai1184@gmail.com\" and password \"sanajayjai1!@#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User \"Sanjai Singh\" should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 20986312744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjai1184@gmail.com",
      "offset": 22
    },
    {
      "val": "sanajayjai1!@#",
      "offset": 58
    }
  ],
  "location": "LoginSteps.enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 759628033,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 28576139597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanjai Singh",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_logged_in(String)"
});
formatter.result({
  "duration": 3859811037,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid credentials",
  "description": "",
  "id": "facebook-login-page;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username \"sanjai1184@gmail.com\" and password \"sanajayjai1!@#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User \"Sanjai Singh\" should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 15505613639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjai1184@gmail.com",
      "offset": 22
    },
    {
      "val": "sanajayjai1!@#",
      "offset": 58
    }
  ],
  "location": "LoginSteps.enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 532860202,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 15476527693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanjai Singh",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_logged_in(String)"
});
formatter.result({
  "duration": 389922675,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid credentials",
  "description": "",
  "id": "facebook-login-page;login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid username \"sanjai1184@gmail.com\" and password \"sanajayjai1!@#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User \"Sanjai Singh\" should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 11197998021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjai1184@gmail.com",
      "offset": 22
    },
    {
      "val": "sanajayjai1!@#",
      "offset": 58
    }
  ],
  "location": "LoginSteps.enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 510521924,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 17247509551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanjai Singh",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_logged_in(String)"
});
formatter.result({
  "duration": 2156835854,
  "status": "passed"
});
});