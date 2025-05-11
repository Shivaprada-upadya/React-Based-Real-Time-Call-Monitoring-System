package com.callmonitoring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.callmonitoring.model.Call;
import com.callmonitoring.repository.CallRepository;

@Service
public class CallService {

    @Autowired
    private CallRepository callRepository;

    // Method to get all call data
    public List<Call> getAllCalls() {
        return callRepository.findAll();
    }

    // Method to save call data
    public Call saveCall(Call call) {
        return callRepository.save(call);
    }
}
