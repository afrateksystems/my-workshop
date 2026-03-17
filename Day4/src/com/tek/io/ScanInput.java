package com.tek.io;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class ScanInput {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);

		FileWriter writer = new FileWriter("output1.txt", true);
		while (true) {
			String message = sc.nextLine();
			if (message.equalsIgnoreCase("exit")) {
				break;
			}
			writer.write(message + "\n");
			writer.flush();
		}
		writer.close();
		sc.close();
	}
}