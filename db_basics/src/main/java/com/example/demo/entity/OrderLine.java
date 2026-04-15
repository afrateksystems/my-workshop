package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
public class OrderLine {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private int id;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@NotBlank
	private String item;
	@Min(value = 1)
	private float price;
	@ManyToOne
	@JoinColumn(name = "order_id")
	@JsonBackReference
	private Order1 order;
	public Order1 getOrder() {
		return order;
	}
	public void setOrder(Order1 order) {
		this.order = order;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
}
