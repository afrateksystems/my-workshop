package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Note;

@Service
public class NoteServices {
	public Note getNotes() {
		Note note = new Note();
		note.setId(1234);
		note.setTitile("Test Note Title");
		note.setContent("the content");
		return note;
	}
	public void createNote(Note note) {
		System.out.println(note.getId());
		System.out.println(note.getTitle());
	}
}
