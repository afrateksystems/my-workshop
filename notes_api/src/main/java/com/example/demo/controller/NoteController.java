package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Note;
import com.example.demo.services.NoteServices;

@RestController
@RequestMapping(path = "/notes")
public class NoteController {
	
	@Autowired
	NoteServices noteService;
	
	@GetMapping
	Note getNotes() {
		return noteService.getNotes();
	}
	@PostMapping
	    void addNote(@RequestBody @Valid Note note) {
		noteService.createNote(note);
	}
	
}
