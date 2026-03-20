package com.example.library;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LibraryTest {
	Library library;

	@BeforeEach
	void setup() {
		library = new Library();
	}

	 

	@Test
	void testReserveWhenNotAvailaibleOrDamaged() {
		assertThrows(BookNotFoundException.class, () -> library.reserve("Learn Java"));
	}

	@Test
	void testSuccessfulReservation() {
		Book book = new Book("1", "Learn Java", 100.0F, "John Doe");
		library.add(book);
		assertEquals(STATUS.BOOKED, book.getStatus());
	}

	@Test
	void testReserveWhenAlreadyReserved() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		try {
			library.reserve("Learn Go");
		} catch (Exception e) {
			e.printStackTrace();
		}
		assertThrows(BookNotFoundException.class, () -> library.reserve("Learn Java"));
	}

	@Test
	void testReserveWithEmptyString() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve(""));
	}

	@Test
	void testReserveWithStringOfBlankSpaces() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve("     "));
	}

	@Test
	void testReserveWithNullTitle() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve(null));
	}
}
	  