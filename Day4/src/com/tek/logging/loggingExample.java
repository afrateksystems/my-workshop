package com.tek.logging;

import java.util.logging.Logger;

public class loggingExample {
    private static final Logger logger = Logger.getLogger(loggingExample.class.getName());
    public static void main(String[] args) {
		logger.info("application started");
		logger.warning("low memory warning");
		logger.severe("System Exception");
	}
}
