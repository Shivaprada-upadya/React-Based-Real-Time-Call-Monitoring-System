package com.callmonitoring.service;

import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public void sendNotification(String message) {
        // Here, you can integrate a real notification system
        System.out.println("Sending Notification: " + message);
    }
}
