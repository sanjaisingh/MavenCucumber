package com.cucumber.Utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigProperties {
	
	Properties prop;
	public ConfigProperties()
	{
		prop = new Properties();
		File propFile = new File("./Config/Config.properties");
		try {
			FileInputStream inputFile = new FileInputStream(propFile);
			prop.load(inputFile);
		} catch (IOException e) {
			System.out.println("File not Found: " +e.getMessage());
		}
	}
	
	public String getDataFromConfig(String searchKey) 
	{
		return prop.getProperty(searchKey);
	}
	
	public String getURL()
	{
		return prop.getProperty("stagingURL");
	}
	
	public String getBrowser()
	{
		return prop.getProperty("browaerName");
	}
}