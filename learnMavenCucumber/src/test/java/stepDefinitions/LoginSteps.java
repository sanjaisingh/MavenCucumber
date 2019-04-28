package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;
	
	@Given("^Open chrome and start application$")
	public void open_chrome_and_start_application()
	{
		System.setProperty("webdriver.chrome.driver", "E:\\jarFiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demo.guru99.com/V4/");
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	@When("^Enter valid username \"(.*)\" and password \"(.*)\"$")
	public void enter_valid_username_and_password(String username, String password)
	{
		driver.findElement(By.name("uid")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^User should be able to login$")
	public void user_should_be_able_to_login()
	{
		driver.findElement(By.name("btnLogin")).click();
		System.out.println(driver.getTitle());
		driver.close();
	}
}
