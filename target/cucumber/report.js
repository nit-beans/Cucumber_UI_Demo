$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('features\login.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "eReg Login",
  "description": "",
  "id": "ereg-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@Ereglogin"
    }
  ]
});
formatter.scenario({
  "line": 33,
  "name": "Login functionality exists",
  "description": "",
  "id": "ereg-login;login-functionality-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Ereglogin"
    },
    {
      "line": 23,
      "name": "@Secnario_Login_with_DataTable"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Login to eReg with \"kamani00\" and \"Welcome1$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDataTable.goToeReg()"
});
formatter.result({
  "duration": 1593552207,
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
  "location": "LoginDataTable.loginEreg(String,String)"
});
formatter.result({
  "duration": 570538668,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.loginSuccessful()"
});
formatter.result({
  "duration": 4057369977,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.logOut()"
});
formatter.result({
  "duration": 2295112484,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login functionality exists",
  "description": "",
  "id": "ereg-login;login-functionality-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Ereglogin"
    },
    {
      "line": 23,
      "name": "@Secnario_Login_with_DataTable"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Login to eReg with \"kamani01\" and \"Welcome1$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDataTable.goToeReg()"
});
formatter.result({
  "duration": 1180361579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kamani01",
      "offset": 20
    },
    {
      "val": "Welcome1$",
      "offset": 35
    }
  ],
  "location": "LoginDataTable.loginEreg(String,String)"
});
formatter.result({
  "duration": 420304247,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.loginSuccessful()"
});
formatter.result({
  "duration": 4030061837,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.logOut()"
});
formatter.result({
  "duration": 2063499998,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"nav-username\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 33 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027NHP-9599ZM2LT\u0027, ip: \u002710.134.72.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\nkamigir\\AppData\\Local\\Temp\\scoped_dir24072_30029}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d0d97fb917bdda99c93ca63c776d47ac\n*** Element info: {Using\u003did, value\u003dnav-username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat stepsDefinitions.LoginDataTable.logOut(LoginDataTable.java:61)\r\n\tat ✽.And Log out(features\\login.feature:28)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "Login functionality exists",
  "description": "",
  "id": "ereg-login;login-functionality-exists;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Ereglogin"
    },
    {
      "line": 23,
      "name": "@Secnario_Login_with_DataTable"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Go to eReg website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Login to eReg with \"kamani02\" and \"Welcome1$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Login successful",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Log out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginDataTable.goToeReg()"
});
formatter.result({
  "duration": 1144935832,
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
  "location": "LoginDataTable.loginEreg(String,String)"
});
formatter.result({
  "duration": 429122265,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.loginSuccessful()"
});
formatter.result({
  "duration": 4073484363,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataTable.logOut()"
});
formatter.result({
  "duration": 2269226688,
  "status": "passed"
});
});