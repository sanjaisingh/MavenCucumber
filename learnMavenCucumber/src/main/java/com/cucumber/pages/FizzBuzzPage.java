package com.cucumber.pages;

public class FizzBuzzPage {

	public String playFizz(int number) {
		if(number == 0)  throw new IllegalArgumentException("Number mudt be grater then 0");
		if(isMultipleOf(number, 3) && isMultipleOf(number, 5)) return "FizzBuzz";
		if(isMultipleOf(number, 3)) return "Fizz";
		if(isMultipleOf(number, 5)) return "Buzz";
		
		return String.valueOf(number);
	}

	private boolean isMultipleOf(int number, int i) {
		// TODO Auto-generated method stub
		return number % i == 0;
	}
}
