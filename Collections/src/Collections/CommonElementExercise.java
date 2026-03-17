package Collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommonElementExercise {
        public static void main(String args[]) {
        	List<Integer> list1 = Arrays.asList(1,2,3,4);
        	List<Integer> list2 = Arrays.asList(3,4,5,6);
        	
        	//TODO : Find the common elements between the line
        	List<Integer> common = new ArrayList<>();
        	for(int i =0;i < list1.size();i++) {
        		for(int j=0;j< list2.size();j++) {
        			if(list1.get(i) == list2.get(j)) {
        				common.add(list1.get(i));
        			}
        		}
        	}
        	System.out.println("common elements:" +common);
        }
}
