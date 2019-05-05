package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.*;;

public class LoginSteps {

	WebDriver driver;
	
	public void setup()
	{
		
	}
	
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application()
	{
		System.setProperty("webdriver.chrome.driver", "E:\\jarFiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	@When("^Enter valid username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enter_valid_username_and_password(String username, String password)
	{
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);
	}

	@When("^User should be able to login$")
	public void user_should_be_able_to_login()
	{
		driver.findElement(By.name("pass")).sendKeys(Keys.ENTER);
		System.out.println(driver.getTitle());
	}
	
	@Then("^User \"([^\"]*)\" should be logged in$")
	public void user_should_be_logged_in(String expectedResult) throws Throwable {
		String userProfileName = driver.findElement(By.xpath("//*[@id='userNav']//a/div")).getText();
		Assert.assertEquals(userProfileName, expectedResult);
		driver.close();
	}
}
