package com.example.library;
public class BookNotFoundException extends Exception {
	public BookNotFoundException(String message) {
		super(message);
	}
}