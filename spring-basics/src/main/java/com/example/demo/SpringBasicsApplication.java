package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.controller.NoteController;

@SpringBootApplication
public class SpringBasicsApplication {

	public static void main(String[] args) {
	    var context = SpringApplication.run(SpringBasicsApplication.class, args);
	    NoteServices services = context.getBean(NoteServices.class);
	    System.out.println(services);
	}
}