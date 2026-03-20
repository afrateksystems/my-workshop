import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Main {
	public static void main(String[] args)throws IOException {
        FileReader reader = new FileReader("MyLibraryFile.txt");
        FileWriter writer = new FileWriter("MyLibraryFile.txt");
		Library library = new Library();
		LMSMenu menu = new LMSMenu(library);
		menu.start();
	}
}
