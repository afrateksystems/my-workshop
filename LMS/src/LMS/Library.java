package LMS;

import java.util.ArrayList;
import java.util.List;

class Library {

	List<Book> books = new ArrayList<>();

	void add(String id, String title, float price, String author) {
		Book book = new Book(id, title, price, author);
		books.add(book);
	}

	void reserve(String title) throws Exception {
		if (title == null || "".equals(title.trim())) {
			throw new IllegalArgumentException();
		}

		for (Book book : books) {
			if (book.getTitle().equals(title) && book.getStatus() == STATUS.AVAILABLE) {
				book.setStatus(STATUS.BOOKED);
				System.out.println("Borrowed: " + title);
				return;
			}
		}
		throw new BookNotFoundException("Book is not availaible.");
	}

	List<Book> find(String title) {
		if (title == null || "".equals(title.trim())) {
			throw new IllegalArgumentException();
		}
		List<Book> result = new ArrayList<>();
		for (Book book : this.books) {
			if (book.getTitle().toLowerCase().contains(title.toLowerCase())) {
				result.add(book);
			}
		}
		if (result.isEmpty()) {
			System.out.println("Book is not availaible.");
		}
		return result;
	}

	Book remove(String id) throws Exception {
		if ("".equals(id.trim()) || id == null)
			throw new IllegalArgumentException();
		for (Book book : books) {
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				books.remove(book);
				return book;
			}
		}
		throw new BookNotFoundException("No book was availaible for the id: ");
	}

	void displayBooks() {
		System.out.println("Books Available");

		for (Book b : books)
			if (b.getStatus() == STATUS.AVAILABLE)
				System.out.println(b + "\n\n");

	}

	void displayAllBooks() {

		System.out.println("Books Available");

		for (Book b : books)
			System.out.println(b + "\n\n");

	}

}