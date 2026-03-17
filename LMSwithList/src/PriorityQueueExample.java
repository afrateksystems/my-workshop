
import java.util.*;

public class PriorityQueueExample {

    public static void main(String[] args) {

        PriorityQueue<Integer> pq = new PriorityQueue<>();
//        pq.comparator((b)-> a-b);
        pq.offer(50);
        pq.add(30);
        pq.add(10);
        pq.add(20);

        System.out.println(pq);

        System.out.println(pq.poll());
        System.out.println(pq.poll());
    }
}
