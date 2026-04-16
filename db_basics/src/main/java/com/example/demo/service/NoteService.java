package com.example.demo.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Address;
import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;

import jakarta.transaction.Transactional;

@Service
public class NoteService {
	@Autowired
	Order1Repository order1Repository;
	@Autowired
	PaymentService paymentService;
	@Autowired
	EmailService emailService;
public Iterable<Order1> getOrder() {
		return order1Repository.findAll();
	}
@Transactional(rollbackOn = Exception.class, dontRollbackOn = {})
public Integer addOrder(Order1 order1) throws IOException {
    // Validate that all order lines have a valid item name
	if (order1.getOrderLines() == null || order1.getOrderLines().isEmpty()) {
        throw new IllegalArgumentException("Order must have at least one item");
    }
    if (order1.getOrderLines() != null) {
        for (OrderLine line : order1.getOrderLines()) {
            if (line.getItem() == null || line.getItem().isEmpty()) {
                throw new IllegalArgumentException("Item name is missing for one of the order lines");
            }
            if (line.getPrice() <= 0) {
                throw new IllegalArgumentException("Price must be greater than zero for all order lines");
            }
            if (line.getQuantity() <= 1) {  // Quantity must be greater than 1
                throw new IllegalArgumentException("Quantity must be greater than zero for all order lines");
            }
            line.setOrder(order1); // Associate the order with the order line
        }
    }
 // Validate the address
    if (order1.getAddress() == null || !isValidAddress(order1.getAddress())) {
        throw new IllegalArgumentException("Address is invalid");
    }
    // Save the order to the repository
    Order1 savedOrder = order1Repository.save(order1);
    if (savedOrder == null) {
        throw new IllegalStateException("Order could not be saved");
    }
    return savedOrder.getId(); // Return the ID of the saved order
}
//Helper method to validate address
private boolean isValidAddress(Address address) {
 return address.getStreet() != null && !address.getStreet().isEmpty() &&
        address.getCity() != null && !address.getCity().isEmpty() &&
        address.getPincode() != null && !address.getPincode().isEmpty();
}
	public Optional<Order1> getOrderById(Integer id) {
		return order1Repository.findById(id);
	}
	public void deleteOrderById(Integer id) {
	}
}
