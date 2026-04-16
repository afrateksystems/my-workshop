package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.service.NoteService;

@ExtendWith(MockitoExtension.class)
class NoteControllerTest {

	@InjectMocks
	private NoteController noteController;

	@Mock
	private NoteService noteService;
	
	@BeforeEach
    void setUp() {
        // Prepare mock data
        List<Order1> orders = new ArrayList<>();
        Order1 order1 = new Order1();
        orders.add(order1);
        // act
        when(noteService.getOrder()).thenReturn(orders);
    }
	@Test
	void testGetOrder() {
		//assert 
		Iterable<Order1> result = noteController.getOrder();
		assertNotNull(result);
		assertNotNull(result.iterator().next());
	}
}