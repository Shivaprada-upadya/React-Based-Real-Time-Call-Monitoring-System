package com.callmonitoring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.callmonitoring.model.Call;

public interface CallRepository extends JpaRepository<Call, Long> {
}
