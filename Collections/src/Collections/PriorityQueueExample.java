package Collections;

import java.util.PriorityQueue;

public class PriorityQueueExample {
       public static void main(String args[]) {
    	   PriorityQueue<Integer> pq = new PriorityQueue<>();
    	   pq.offer(5);
    	   pq.add(30);
    	   pq.add(10);
    	   pq.add(20);
    	   
    	   System.out.println(pq);
    	   System.out.println(pq.poll());
    	   System.out.println(pq.poll());
       }
}
