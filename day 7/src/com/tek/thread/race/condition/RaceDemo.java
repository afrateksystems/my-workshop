package com.tek.thread.race.condition;

public class RaceDemo {
	public static void main(String[] args) throws InterruptedException {
		Counter counter = new Counter();
		Thread w1 = new Worker("w1",counter);
		Thread w2 = new Worker("w2",counter);
		w1.start();
		w1.join(); //main thread will wait until t1 is completed
		w2.start();
		w2.join();//main thread will wait until t2 is completed
		System.out.println("the final count is"+counter.count);
	}

}
