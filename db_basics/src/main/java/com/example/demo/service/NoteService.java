package com.example.demo.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Order1;
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
	if (order1.getOrderLines() != null) {
        order1.getOrderLines().forEach(line -> line.setOrder(order1));
    }
	 
    Order1 savedorder = order1Repository.save(order1);
	 
	return savedorder.getId();
}
	public Optional<Order1> getOrderById(Integer id) {
		return order1Repository.findById(id);
	}

	public void deleteOrderById(Integer id) {
		// TODO Auto-generated method stub
		
		
	}
}
