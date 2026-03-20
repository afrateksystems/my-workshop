
public class MyThread extends Thread{
     @Override
     public void run() {
    	  
    	 for(;;) {
    		 System.out.println("worker thread is running");
    	 }
    	 
     }
}
