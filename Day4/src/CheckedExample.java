import java.io.FileNotFoundException;
import java.io.FileReader;

public class CheckedExample {
	public static void main(String[] args) {
		try {
			 readFile();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

	private static void readFile() throws FileNotFoundException{
		
	FileReader file = new FileReader("data.txt");
 
	}
}
