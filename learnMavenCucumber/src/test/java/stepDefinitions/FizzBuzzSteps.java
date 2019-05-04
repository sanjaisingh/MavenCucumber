package stepDefinitions;

import org.testng.Assert;

import com.cucumber.pages.FizzBuzzPage;

import cucumber.api.java.en.*;

public class FizzBuzzSteps {

	FizzBuzzPage fizzBuzzPage;
	String result;
	
	@Given("^Create a fizzbzz game$")
	public void create_a_fizzbzz_game() throws Throwable {
		fizzBuzzPage = new FizzBuzzPage();
		System.out.println("Given");
	}

	@When("^I play with number (\\d+)$")
	public void i_play_with_number(int number) throws Throwable {
		result = fizzBuzzPage.playFizz(number);
		System.out.println("When");
	}

	@Then("^The result is \"([^\"]*)\"$")
	public void the_result_is(String output) throws Throwable {
		System.out.println("Then");
		Assert.assertEquals(result, output);
	}
}
