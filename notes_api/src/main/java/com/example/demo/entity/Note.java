package com.example.demo.entity;

import jakarta.validation.constraints.NotBlank;

public class Note {
	private long id;
	@NotBlank
	private String title;
	@NotBlank
	private String Content;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitile(String title) {
		this.title = title;
	}
	public String getContent() {
		return Content;
	}
	public void setContent(String content) {
		Content = content;
	}
	
}
