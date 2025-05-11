package com.callmonitoring.websocket;

import org.springframework.stereotype.Service;

@Service
public class WebSocketService {

    public void sendMessage(String message) {
        // Implement logic to send message via WebSocket to all clients
        System.out.println("Sending WebSocket Message: " + message);
    }
}
