package stepsDefinitions; 



import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.chrome.*;
//import org.openqa.selenium.firefox.FirefoxDriver; 
//import org.openqa.selenium.support.ui.Select;

import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.And;

//import cucumber.runtime.PendingException; 


public class LoginDataTable { 
   WebDriver driver = null; 
	
   @Before 
   public void openBrowser() throws Throwable { 
      driver = new ChromeDriver(); 
     driver.manage().window().maximize();	
   } 
	
   @Given("^Go to eReg website$") 
   public void goToeReg() throws Throwable { 
      driver.navigate().to("https://ereg3ui.test.regusa.dtrts.com"); 
   } 
	
   @When("^Login to eReg with \"([^\"]*)\" and \"([^\"]*)\"$") 
   public void loginEreg(String user, String pass) throws Throwable { 
	   //driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	   driver.findElement(By.id("username")).sendKeys(user); 
	   driver.findElement(By.id("password")).sendKeys(pass);	
	   driver.findElement(By.id("login-btn")).click();
   } 
   
   @Then("^Login successful$")
   public void loginSuccessful() throws Throwable {
	   Thread.sleep(4000);
	   if(driver.getCurrentUrl().equalsIgnoreCase("https://ereg3ui.test.regusa.dtrts.com/#/pages/dealerDsq;dealerId=1564")){ 
		   System.out.println("Test Pass"); 
		   } 
	   else { 
		   System.out.println("Test Failed"); 
          }
   }
   
   @And(value ="^Log out$")
   public void logOut() throws Throwable{ 
	   Thread.sleep(2000);
	   driver.findElement(By.id("nav-username")).click();
	   driver.findElement(By.id("logoutlink")).click();   
   }
   
   @After
   public void closeBrowser() throws Throwable{
	   //driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	   	Thread.sleep(2000);
	    driver.close();
   }
   
    
}