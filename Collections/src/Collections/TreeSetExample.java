package Collections;

import java.util.TreeSet;

public class TreeSetExample {
       public static void main(String args[]) {
    	   TreeSet<Integer> set = new TreeSet<>();
    	   
    	   set.add(40);
    	   set.add(10);
    	   set.add(30);
    	   set.remove(30);
    	   System.out.println(set);
       }
}
