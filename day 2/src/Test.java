class Parent {
	void show() {
		System.out.println("Parent");
	}
}
class Child extends Parent{
	void show() {
		System.out.println("child");
	}
}
public class Test {
      public static void main(String[] args) {
    	  Parent p = new Child();
    	  p.show();
      }
}
