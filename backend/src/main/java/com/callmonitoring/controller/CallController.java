package com.callmonitoring.controller;

import com.callmonitoring.model.Call;
import com.callmonitoring.service.CallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/call")
public class CallController {

    @Autowired
    private CallService callService;

    // Endpoint to get all call data
    @GetMapping("/all")
    public List<Call> getAllCalls() {
        return callService.getAllCalls();
    }

    // Endpoint to create a new call record
    @PostMapping("/create")
    public Call createCall(@RequestBody Call call) {
        return callService.saveCall(call);
    }
}
