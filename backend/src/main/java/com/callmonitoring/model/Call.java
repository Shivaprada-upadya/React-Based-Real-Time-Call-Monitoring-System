package com.callmonitoring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Call {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String callerName;
    private String callDuration;
    private String callStatus;

    // Default constructor
    public Call() {
    }

    // Parameterized constructor
    public Call(String callerName, String callDuration, String callStatus) {
        this.callerName = callerName;
        this.callDuration = callDuration;
        this.callStatus = callStatus;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCallerName() {
        return callerName;
    }

    public void setCallerName(String callerName) {
        this.callerName = callerName;
    }

    public String getCallDuration() {
        return callDuration;
    }

    public void setCallDuration(String callDuration) {
        this.callDuration = callDuration;
    }

    public String getCallStatus() {
        return callStatus;
    }

    public void setCallStatus(String callStatus) {
        this.callStatus = callStatus;
    }

    @Override
    public String toString() {
        return "Call{" +
                "id=" + id +
                ", callerName='" + callerName + '\'' +
                ", callDuration='" + callDuration + '\'' +
                ", callStatus='" + callStatus + '\'' +
                '}';
    }
}
