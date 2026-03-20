package com.tek.thread.race.condition;

public class Counter {
	int count =0;
	void increment() {
		System.out.println(Thread.currentThread());
        count++;
	}
}
   
