package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features="src/test/resources/features", 
		glue= {"stepDefinitions"},
		plugin= {"html:target/cucumber-html-report"})
public class TestRunner extends AbstractTestNGCucumberTests{
	
}
