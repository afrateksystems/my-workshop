package Collections;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
	public static void main(String[] args) {
		List<String> cities = listofcities();
		System.out.println(cities.contains("delhi"));
		System.out.println(cities.lastIndexOf("delhi"));
		System.out.println(cities.set(0,"Chennai"));
	
	//private static void defensiveDownCasting(List<String> cities) 
	{
		if(cities instanceof LinkedList<String>) {
			LinkedList<String> LinkedList = ((LinkedList)cities);
			LinkedList.addFirst("Chennai");
		}
	}
	System.out.println(cities);
}
	private static List<String> listofcities(){
		List<String> cities = new ArrayList<>();
		cities.add("delhi");
		cities.add("delhi");
		cities.add("Mumbai");
		cities.add("bengaluru");
		return cities;   
	}

}
