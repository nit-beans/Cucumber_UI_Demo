$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "####### Login Feature File"
    }
  ],
  "line": 4,
  "name": "Login Module",
  "description": "\nLogs into eregUI with Mutiple users",
  "id": "login-module",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login functionality exists",
  "description": "",
  "id": "login-module;login-functionality-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Login to eReg with \"\u003cuser\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Go to DSQ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Search for Transaction \"\u003ctranid\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log out",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-module;login-functionality-exists;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "tranid"
      ],
      "line": 20,
      "id": "login-module;login-functionality-exists;;1"
    },
    {
      "cells": [
        "kamani00",
        "Welcome1$",
        "434279"
      ],
      "line": 21,
      "id": "login-module;login-functionality-exists;;2"
    },
    {
      "cells": [
        "kamani01",
        "Welcome01$",
        "434274"
      ],
      "line": 22,
      "id": "login-module;login-functionality-exists;;3"
    },
    {
      "cells": [
        "kamani02",
        "Welcome1$",
        "434267"
      ],
      "line": 23,
      "id": "login-module;login-functionality-exists;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5028992938,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login functionality exists",
  "description": "",
  "id": "login-module;login-functionality-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Login to eReg with \"kamani00\" and \"Welcome1$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Go to DSQ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Search for Transaction \"434279\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.goToeReg()"
});
formatter.result({
  "duration": 2522475135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kamani00",
      "offset": 20
    },
    {
      "val": "Welcome1$",
      "offset": 35
    }
  ],
  "location": "LoginStep.loginEreg(String,String)"
});
formatter.result({
  "duration": 437508826,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginSuccessful()"
});
formatter.result({
  "duration": 4047736439,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.goToDSQOPage()"
});
formatter.result({
  "duration": 208157789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "434279",
      "offset": 24
    }
  ],
  "location": "LoginStep.searchTranID(String)"
});
formatter.result({
  "duration": 4921599448,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.logOut()"
});
formatter.result({
  "duration": 2340305115,
  "status": "passed"
});
formatter.after({
  "duration": 2216639771,
  "status": "passed"
});
formatter.before({
  "duration": 4278522661,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login functionality exists",
  "description": "",
  "id": "login-module;login-functionality-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Login to eReg with \"kamani01\" and \"Welcome01$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Go to DSQ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Search for Transaction \"434274\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.goToeReg()"
});
formatter.result({
  "duration": 2737099378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kamani01",
      "offset": 20
    },
    {
      "val": "Welcome01$",
      "offset": 35
    }
  ],
  "location": "LoginStep.loginEreg(String,String)"
});
formatter.result({
  "duration": 419843319,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginSuccessful()"
});
formatter.result({
  "duration": 4040125160,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.goToDSQOPage()"
});
formatter.result({
  "duration": 248804012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "434274",
      "offset": 24
    }
  ],
  "location": "LoginStep.searchTranID(String)"
});
formatter.result({
  "duration": 4940324826,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.logOut()"
});
formatter.result({
  "duration": 2287116028,
  "status": "passed"
});
formatter.after({
  "duration": 2204297401,
  "status": "passed"
});
formatter.before({
  "duration": 4419397018,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login functionality exists",
  "description": "",
  "id": "login-module;login-functionality-exists;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Login to eReg with \"kamani02\" and \"Welcome1$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Go to DSQ Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Search for Transaction \"434267\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.goToeReg()"
});
formatter.result({
  "duration": 1305732284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kamani02",
      "offset": 20
    },
    {
      "val": "Welcome1$",
      "offset": 35
    }
  ],
  "location": "LoginStep.loginEreg(String,String)"
});
formatter.result({
  "duration": 488156038,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginSuccessful()"
});
formatter.result({
  "duration": 4053472651,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.goToDSQOPage()"
});
formatter.result({
  "duration": 335483783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "434267",
      "offset": 24
    }
  ],
  "location": "LoginStep.searchTranID(String)"
});
formatter.result({
  "duration": 4954490533,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.logOut()"
});
formatter.result({
  "duration": 2300513737,
  "status": "passed"
});
formatter.after({
  "duration": 2216199511,
  "status": "passed"
});
});