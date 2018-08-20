####### Login Feature File


Feature: Login Module

Logs into eregUI with Mutiple users

@Login
Scenario Outline: Login functionality exists
	Given Go to eReg website
	When  Login to eReg with "<user>" and "<pass>"
	Then  Login successful
	Then  Go to DSQ Page
	Then  Search for Transaction "<tranid>"
  And   Log out

	
	Examples: 
	
		|  user            |  pass            |    tranid |
  	|  kamani00        |  Welcome1$       |    434279 |
		|  kamani01        |  Welcome01$      |    434274 |
		|  kamani02        |  Welcome1$       |    434267 |
