package com.tek.io;

import java.io.FileWriter;
import java.io.IOException;


public class FileWriteExample {
     public static void main(String[] args) throws IOException{
		FileWriter writer = new FileWriter("output.txt");
		writer.write("hello java file in");
		writer.close();
	}
}
