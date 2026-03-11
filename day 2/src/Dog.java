
public class Dog extends Animal implements Pet{
 private String breed;
 public Dog(String breed){
	 this.breed = breed;
 }
 public String getBreed() {
	return breed;
}
 public void play() {
	 System.out.println("playing with "+getName());
 }
 public void bark() {
	 System.out.println(getName()+" is barking");
 }
}
