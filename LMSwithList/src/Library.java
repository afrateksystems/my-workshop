
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

class Library {
	
	Map<Integer, Book> books = new HashMap<Integer, Book>();
    
	void add (String id, String title, float price, String author)throws IOException {
		Integer id1 = new Integer(id);
		Book book = new Book(id, title, price, author);
		 
	    FileWriter writer = new FileWriter("MyLibraryFile.txt");
		books.put(id1, book);
		for(Book books : books.values()) {
	        writer.write(books.getId() + "," +
	                     books.getTitle() + "," +
	                     books.getPrice() + "," +
	                     books.getAuthor() + "," +
	                     books.getStatus()+"\n");
	        writer.flush();
	         
	    }
		writer.close();
		
	}

	void reserve(String title) throws Exception {
		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();
		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.title.equals(title) && book.getStatus() == STATUS.AVAILABLE) {
				book.setStatus(STATUS.BOOKED);
				System.out.println("Borrowed: " + title);
				return;
			}
		}
		/*
		 * 
		 */ throw new BookNotAvailableException("Book is not availaible.");
	}

	List<Book> find(String title) {
		List<Book> books = new ArrayList<>();
		for (Book book : books) {
			if (book.title.toLowerCase().contains(title.toLowerCase())) {
				books.add(book);
			}
		}
		return books;
	}

	Book remove(String id) throws Exception {
		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();
		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				books.remove(book);
				return book;
			}
		}
		throw new BookNotAvailableException("No book was availaible for the id: " + id);
	}

	void displayBooks() {
		 try {
			readFile();
		} catch (IOException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		}
	private void readFile() throws IOException{
		BufferedReader reader = new BufferedReader(new FileReader("MyLibraryFile.txt"));
	    String line;
	    
	    while((line = reader.readLine()) != null) {
	    	System.out.println(line);
	    }
	    reader.close();
	}
}
