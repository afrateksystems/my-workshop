
public class Main {
     public static void main(String[] args) {
		Thread t1 = new MyThread();
		t1.start();
		try {
			t1.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Thread task = new Thread(new ThreadUsingInterface());
		task.start();
	}
}
