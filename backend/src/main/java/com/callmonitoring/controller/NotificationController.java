package com.callmonitoring.controller;

import com.callmonitoring.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    // Endpoint to send notification
    @PostMapping("/send")
    public String sendNotification(@RequestParam String message) {
        notificationService.sendNotification(message);
        return "Notification Sent!";
    }
}
