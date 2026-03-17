package com.tek.io;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.logging.Logger;

public class FileLoggerExample {
	private static final Logger Logger = java.util.logging.Logger.getLogger(FileLoggerExample.class.getName());
	public static void main(String[] args) {
		try(BufferedReader reader = new BufferedReader(new FileReader("data.txt"))){
			String line;
			while((line = reader.readLine()) != null) {
				Logger.info(line);
			}
		}
		catch(Exception e){
			Logger.severe("file reading error:" +e.getMessage());
		}
	}

}
