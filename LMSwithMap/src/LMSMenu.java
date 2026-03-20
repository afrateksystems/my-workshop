import java.io.FileReader;
import java.io.FileWriter;
import java.util.Scanner;
import java.util.logging.Logger;

public class LMSMenu {
	Library library;
	
	Scanner sc = new Scanner(System.in);
	
	private static final Logger Logger = java.util.logging.Logger.getLogger(LMSMenu.class.getName());

	LMSMenu(Library library) {
		this.library = library;
	}

	void displayMenu() {
		System.out.println("Library Management System");
		String options = "Options:\n\t1. Add Book\n\t2. Remove Book\n\t3. Reserve Book\n\t4. Display Books\n\t0. Exit";
		System.out.println(options);
	}

	void start() {
		int choice;
		while (true) {
			displayMenu();
			choice = -1;
			System.out.print("\nEnter choice: ");
			try {
				choice = sc.nextInt();
				switch (choice) {
				case 1:
					handleAddition();
					break;
				case 2:
					handleRemoval();
					break;
				case 3:
					handleReservation();
					break;
				case 4:
					library.displayBooks();
					break;
				case 0:
					Logger.severe("Exiting...");
					sc.close();
					System.exit(0);
					break;
				default:
					Logger.info("Invalid Choice!!!");
				}
			} catch (Exception e) {
				sc.nextLine();
			}
		}

	}

	void handleAddition() throws Exception {
		String author, title, id;
		float price;
		FileReader reader = new FileReader("MyLibraryFile.txt");
        FileWriter writer = new FileWriter("MyLibraryFile.txt");
		System.out.print("Enter book title: ");
		title = sc.next();
		if (title.trim().equals("")) {
			throw new Exception("Invalid Book Name");
		}
		System.out.print("Enter book author: ");
		author = sc.next();
		if (author.trim().equals("")) {
			throw new Exception("Invalid Author Name");
		}
		System.out.print("Enter id: ");
		id = sc.next();
		System.out.print("Enter price: ");
		price = sc.nextFloat();
		library.add(id, title, price, author);
		writer.write(id+","+title+","+price+","+author);
	}

	void handleReservation() throws Exception {
		System.out.print("Enter book name: ");
		String name = sc.nextLine();
		library.reserve(name);
	}

	void handleRemoval() throws Exception {
		System.out.print("Enter id: ");
		String id = sc.next();
		library.remove(id);
	}
}
