package com.ogtc.ogtcbackend.services;

import com.ogtc.ogtcbackend.entitie.Trade;
import com.ogtc.ogtcbackend.repositories.LookupRepository;
import com.ogtc.ogtcbackend.repositories.TradeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;
    @Autowired
    private ModelMapper modelMapper;

    public Trade saveTrade(Trade t){
        return tradeRepository.save(t);
    }

    public Trade getById(Long id){return tradeRepository.findById(id).get();}
}
