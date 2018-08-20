package loginRunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions; 
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class) 
@CucumberOptions( format = {
		"pretty", "html:target/cucumber",
		"json:target/cucumber.json",
		"junit:target/cucumber.xml"
},
features = "src/test/resources/features/login.feature" ,
glue="stepsDefinitions",
monochrome = false     //set to true if you want console output more readable, I used ANSI plugin which has colors in console o/p
		) 

public class LoginRunner { }