package com.cucumber.Page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Guru99LoginPage extends BaseClass
{
	WebDriver driver;
	public Guru99LoginPage(WebDriver _driver)
	{
		this.driver = _driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.NAME, using="uid")
	private WebElement txtUserID;
	
	@FindBy(how = How.NAME, using="password")
	private WebElement txtUserPassword;
	
	@FindBy(how = How.NAME, using="btnLogin")
	private WebElement btnLogin;
	
	public void setCredentials(String username, String password)
	{
		txtUserID.sendKeys(username);
		txtUserPassword.sendKeys(password);
	}

	public void loginApplication()
	{
		btnLogin.click();
		System.out.println(driver.getTitle());
		driver.quit();
	}
}
