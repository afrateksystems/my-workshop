package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Note;
import com.example.demo.repositories.NoteRepository;

@Service
public class NoteServices {
	@Autowired
	NoteRepository noteRespository;

	public Iterable<Note> getNotes() {
		return noteRespository.findAll();
	}

	public void createNote(Note note) {
		// System.out.println(note.getId());
		// System.out.println(note.getTitle());
		noteRespository.save(note);
	}
	public void deleteNote(Long id) {
	    noteRespository.deleteById(id);
	}
}
