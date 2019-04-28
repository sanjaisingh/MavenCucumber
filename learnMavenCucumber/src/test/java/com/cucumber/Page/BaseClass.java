package com.cucumber.Page;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeSuite;

import com.cucumber.Utility.BrowserFactory;
import com.cucumber.Utility.ConfigProperties;

abstract class BaseClass 
{
	public static WebDriver driver;
	public ConfigProperties config;
	
	@BeforeSuite
	public void setupSuite()
	{
		config = new ConfigProperties();
	}
	
	@AfterClass
	public void teatDownApplication()
	{
		BrowserFactory.quitApplication(driver);
	}
	
	@AfterMethod
	public void takeScreenshot(ITestResult result) throws IOException
	{		
		if(result.getStatus() == ITestResult.FAILURE)
		{
			//logger.fail("Test Failed", MediaEntityBuilder.createScreenCaptureFromPath(Helper.cpatureScreenshot(driver)).build());
		}
		else if(result.getStatus() == ITestResult.SUCCESS)
		{
			//logger.pass("Test Failed", MediaEntityBuilder.createScreenCaptureFromPath(Helper.cpatureScreenshot(driver)).build());
		}
		//reports.flush();
	}
}