package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
@Entity
public class Order1 {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private int id;
	@OneToMany(mappedBy="order",cascade= CascadeType.ALL,orphanRemoval = true)
	@JsonManagedReference
	private List<OrderLine> orderLines ;
	@Enumerated(EnumType.STRING)
    private OrderStatus status;
	@CreationTimestamp
	private LocalDateTime createdAt;
	@Embedded 
    private Address address;
	public OrderStatus getStatus() {
		return status;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	public LocalDateTime getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	@PrePersist
    public void prePersist() {
        if (status == null) {
            status = OrderStatus.CREATED;
        }
    }
	public List<OrderLine> getOrderLines() {
		return orderLines;
	}
	
	public void setOrderLines(List<OrderLine> orderLines) {
		this.orderLines = orderLines;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
