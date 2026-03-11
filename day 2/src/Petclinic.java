import java.util.List;
import java.util.ArrayList;
public class Petclinic {
       public static void main(String[] args) {
    	   
       }
       public static void methodOverriding() {
    	   Pet pet = new Dog("Husky");
    	   Animal animal = (Animal)pet;
    	   animal.sound();
       }
       public static void demo1() {
    	   Dog dog = new Dog("husky");
    	   dog.setName("pluto");
    	   Dog dog1 = new Dog("husky");
    	   dog1.setName("happy");
    	   Cat cat = new Cat();
    	   dog.bark();
    	   List<Pet> pets= new ArrayList<Pet>();
    	   pets.add(dog);
    	   pets.add(dog1);
    	   pets.add(cat);
    	   pets.forEach((pet)->pet.play());
       }
}
