package com.ogtc.ogtcbackend.controllers;

import com.ogtc.ogtcbackend.base.BaseController;
import com.ogtc.ogtcbackend.entitie.dto.TradesCountDTO;
import com.ogtc.ogtcbackend.services.TradeService;
import com.ogtc.ogtcbackend.services.TradesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TradesController extends BaseController {
    @Autowired
    private TradesService tradesService;

    @GetMapping("/trades/counts")
    public TradesCountDTO getTradesCount(){
        return tradesService.getTradesCounts();
    }
}
