import java.util.ArrayList;
import java.util.List;

 class Book {
	int ID;
	String title;
	float Price;
	String author;
	enum Status {
		AVAILABLE,ISSUED,RESERVED
    }
	Status status;
	Book(int ID,String title,float Price,String author){
		this.ID=ID;
		this.author=author;
		this.Price=Price;
		this.title=title;
		this.status = Status.AVAILABLE;
	}
	@Override
	public String toString() {
		String json = """
	               {
                "ID": %d,
                "title": "%s",
                "price": %.2f,
                "author": "%s",
                "status": "%s"
              }
              """.formatted(ID, title, Price, author, status);
		return json;
	}
}
public class Books{
      public static void main(String args[]) {
    	  List<Book> books = new ArrayList<>();
    	  books.add(new Book(5,"book5",350,"Author5"));
    	  books.add(new Book(3,"book3",380,"Author3"));
    	  
    	  books.remove(0);
    	  System.out.println(books);
      }
}
