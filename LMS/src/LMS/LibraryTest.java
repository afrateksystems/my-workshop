package LMS;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LibraryTest {
	Library library;

	@BeforeEach
	void setup() {
		library = new Library();
	}

	// unit testing for the method - reserve

	@Test
	void testReserveHavingEmptyString() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve(""));
	}

	@Test
	void testReserveWithStringContainingBlankSpaces() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve("     "));
	}

	@Test
	void testReserveWhenNullTitle() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(IllegalArgumentException.class, () -> library.reserve(null));
	}

	@Test
	void testReserveIsNotInList() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		assertThrows(BookNotFoundException.class, () -> library.reserve("Learn Java"));
	}

	@Test
	void testReserveBookAlreadyReserved() {
		library.add("1234", "Learn Go", 399.95F, "John Doe");
		try {
			library.reserve("Learn Go");
		} catch (Exception e) {
			e.printStackTrace();
		}
		assertThrows(BookNotFoundException.class, () -> library.reserve("Learn Java"));
	}

	@Test
	void testReserveWhenNotAvailaibleOrDamaged() {
		assertThrows(BookNotFoundException.class, () -> library.reserve("Learn Java"));
	}

	// unit testing for the method - add
	@Test
	void testaddWhenBookIDIsEmpty() {

		assertThrows(IllegalArgumentException.class, () -> library.add("", "Learn Go", 399.95F, "John Doe"));

	}

	@Test
	void testaddWhenBookTitleIsEmpty() {

		assertThrows(IllegalArgumentException.class, () -> library.add("1234", "", 399.95F, "John Doe"));

	}

	@Test
	void testaddWhenBookAuthorIsEmpty() {

		assertThrows(IllegalArgumentException.class, () -> library.add("1234", "Learn Go", 399.95F, ""));

	}

	@Test
	void testAddWithBlankSpaceAuthor() {
		assertThrows(IllegalArgumentException.class, () -> library.add("1234", "Learn Java", 1234.0F, "   "));

	}

	@Test
	void testAddWithBlankSpacetitle() {
		assertThrows(IllegalArgumentException.class, () -> library.add("1234", "  ", 1234.0F, "raj kumar"));

	}
	void testAddWhenPriceIsNegative() {
		assertThrows(IllegalArgumentException.class,() -> library.add("1234", "Hellooo",-12, "raj kumar"));
	}

	// Unit Testing for method - find
	@Test
	void testFindToCheckNullTitle() {
		assertThrows(IllegalArgumentException.class, () -> library.find(null));
	}

	@Test
	void testFindToCheckEmptyTitle() {
		assertThrows(IllegalArgumentException.class, () -> library.find(""));
	}

	@Test
	void testFindForOnlyBlankSpaceTitle() {
		assertThrows(IllegalArgumentException.class, () -> library.find("     "));
	}

	@Test
	void testFindTitleIsNotFound() {
		final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outputStreamCaptor));
		library.add("1234", "Learn Java", 23.5F, "afra");
		library.find("Learn VR");
		String output = outputStreamCaptor.toString().trim();
		assertEquals("Book is not availaible.", output);
	}

	@Test
	void testAddWithNegativePrice() {
		assertThrows(IllegalArgumentException.class, () -> library.add("1234", "Learn Java", -2344.55F, "Johnn"));
	}
	// Unit Testing for method - remove

	@Test
	void testRemoveWithEmptyTitle() {
		assertThrows(IllegalArgumentException.class, () -> library.remove(""));
	}

	@Test
	void testRemoveWithBlankSpaceTitle() {
		assertThrows(IllegalArgumentException.class, () -> library.remove("   "));
	}
	
	@Test
	void testRemoveBookIsNotFound() throws Exception {
		final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outputStreamCaptor));
		library.add("1234", "Learn", 23.5F, "afra");
		library.remove("Learni");
		String output = outputStreamCaptor.toString().trim();
		assertEquals("No book was availaible for the id: ", output);
	}

	// Unit testing for method - reserve

	@Test
	void testDisplayBooks() {
		final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outputStreamCaptor));
		library.add("1234", "Learn Java", 23.5F, "afra");
		library.displayBooks();
		String output = outputStreamCaptor.toString();
		assertTrue(output.contains("1234"));
		assertTrue(output.contains("Learn Java"));
		assertTrue(output.contains("23.5"));
		assertTrue(output.contains("afra"));
	}

	@Test
	void testDisplayAllBooks() {
		final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outputStreamCaptor));
		library.add("1234", "Learn Java", 23.5F, "afra");
		library.displayAllBooks();
		String output = outputStreamCaptor.toString();
		assertTrue(output.contains("1234"));
		assertTrue(output.contains("Learn Java"));
		assertTrue(output.contains("23.5"));
		assertTrue(output.contains("afra"));
	}
	
	

}