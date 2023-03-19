package com.ogtc.ogtcbackend.services;

import com.ogtc.ogtcbackend.entitie.dto.TradesCountDTO;
import com.ogtc.ogtcbackend.repositories.TradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradesService {
    @Autowired
    private TradesRepository tradesRepository;

    public TradesCountDTO getTradesCounts(){
        return new TradesCountDTO(tradesRepository.count(),tradesRepository.countByExitDateNotNull(),tradesRepository.countByExitDateNull());
    }
}
