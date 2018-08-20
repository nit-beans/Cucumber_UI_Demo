package stepsDefinitions;


import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;





public class LoginStep { 
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
			System.out.println("Login successful"); 
		} 
		else { 
			System.out.println("Login Failed"); 
		}
	}


	@Then("^Go to DSQ Page$")
	public void goToDSQOPage() throws Throwable {
		driver.findElement(By.id("nav-logbook")).click(); 
	}

	@Then("^Search for Transaction \\\"([^\\\"]*)\\\"$")
	public void searchTranID(String tranid) throws Throwable {
		driver.findElement(By.id("search-deals")).sendKeys(tranid);
		driver.findElement(By.id("search_button")).click();
		Thread.sleep(4000);
		WebElement s = driver.findElement(By.xpath("//*[@id=\"deal-0\"]/td[5]/a"));
		System.out.println(s.getText());

		if((s.getText()).equals(tranid))
		{
			System.out.println("Tran ID search successfull");
		}
		else
			System.out.println("No search resultd found (or) Error in code");
	}



	@And(value ="^Log out$")
	public void logOut() throws Throwable{ 
		Thread.sleep(2000);
		driver.findElement(By.id("nav-username")).click();
		driver.findElement(By.id("logoutlink")).click();   
	}

	@After
	public void closeBrowser() throws Throwable{
		Thread.sleep(2000);
		driver.close();
	}


}