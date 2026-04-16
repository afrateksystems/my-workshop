package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Address;
import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;
@ExtendWith(MockitoExtension.class)
public class NoteServiceTest {
    @InjectMocks
    private NoteService noteService;
    @Mock
    private Order1Repository order1Repository;
    @Mock
    private PaymentService paymentService;
    @Mock
    private EmailService emailService;
    @BeforeEach
    void setUp() {
    	
    }
    
    @Test
    void testAddOrderWithEmptyItem() throws IOException{
    	//1.we have to arrange
    	Order1 order1 = new Order1();
    	OrderLine orderLine = new OrderLine();
    	orderLine.setItem(null);// so here we are giving the item null
    	orderLine.setQuantity(2);
    	orderLine.setPrice(100.0f);
    	order1.setOrderLines(List.of(orderLine));
    	//2. we have to act 
    	IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class,() ->{
    		noteService.addOrder(order1);
    	});
    	//3. we are verifying the exception message
    	assertEquals("Item name is missing for one of the order lines", thrown.getMessage());
    	// 4. we are verifying the save function was not called even once
    	verify(order1Repository,times(0)).save(order1);
    }
    @Test
    void testAddOrderWithInvalidPrice() throws IOException {
    	// Arrange
    Order1 order1 = new Order1();
    OrderLine orderLine = new OrderLine();
    orderLine.setItem("Item1");
    orderLine.setQuantity(2);
    orderLine.setPrice(0.0f); // we are adding the price here as zero
    order1.setOrderLines(List.of(orderLine));   
    // Act and  Assert
    IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
            noteService.addOrder(order1);
    });
    // Assert the exception message
    assertEquals("Price must be greater than zero for all order lines", thrown.getMessage());
    // Verify that save was not called
    verify(order1Repository, times(0)).save(order1);
    }
    @Test
    void testAddOrderWithInvalidAddress() throws IOException {
    // Arrange
    Order1 order1 = new Order1();
    OrderLine orderLine = new OrderLine();
    orderLine.setItem("Item1");
    orderLine.setQuantity(2);
    orderLine.setPrice(100.0f);
    order1.setOrderLines(List.of(orderLine)); // Valid order line
        
    // invalid address (missing street, city, or postal code)
    Address invalidAddress = new Address();
    invalidAddress.setStreet("");  //for now lets give a  empty street
    invalidAddress.setCity("CityName");
    invalidAddress.setPincode("12345");
    order1.setAddress(invalidAddress); // Set invalid address
    // act & assert
    IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
        noteService.addOrder(order1);
    });
    // assert the exception message
    assertEquals("Address is invalid", thrown.getMessage());
    // verify that save was not called
    verify(order1Repository, times(0)).save(order1); // ensure save is not called
    }
    @Test
    void testAddOrderWithZeroOrderLines() throws IOException {
    // Arrange
    Order1 order1 = new Order1();
    order1.setOrderLines(List.of());  // No orderlines are inserted to the mocked order function
    // Act & Assert
    IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
        noteService.addOrder(order1);
    });
    // Assert the exception message
    assertEquals("Order must have at least one item", thrown.getMessage());
    // Verify that save was not called
    verify(order1Repository, times(0)).save(order1); // Ensure save is not called
    }
    @Test
    void testAddOrderWithInvalidQuantity() throws IOException {
    // Arrange
    Order1 order1 = new Order1();
    OrderLine orderLine = new OrderLine();
    orderLine.setItem("Item1");
    orderLine.setQuantity(-1);  // giving quantity a negative value
    orderLine.setPrice(100.0f);  // Valid price
    order1.setOrderLines(List.of(orderLine));  // Add order line with invalid quantity
    // Act & Assert
    IllegalArgumentException thrown = assertThrows(IllegalArgumentException.class, () -> {
        noteService.addOrder(order1);
    });
    // Assert the exception message
    assertEquals("Quantity must be greater than zero for all order lines", thrown.getMessage());
    // Verify that save was not called
    verify(order1Repository, times(0)).save(order1); // Ensure save is not called
    }
}