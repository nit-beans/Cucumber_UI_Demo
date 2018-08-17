package loginRunnerDataTable;
 
import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options( format = {
							  "pretty", "html:target/cucumber",
							  "json:target/cucumber.json"
                            },
                   features = "features/login.feature" ,
                   glue="stepsDefinitions"
                   ) 

public class LoginRunner { }