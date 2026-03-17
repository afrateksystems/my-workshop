package Collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class frequencyExercise {
	public static void main(String args[]) {
        	List<Integer> list1 = Arrays.asList(1,2,2,2,3,4);
        	int target =2;
        	int frequency = 0;
        	//TODO : Find the most frequent elements between the line
        	 
        	
        	for(int i =0;i < list1.size();i++) {
        			if(list1.get(i) == target) {
        				 frequency++;
        			}
        		}
        	
        	System.out.println("frequency of targeted  element is :" +frequency);
        	
        }
}
