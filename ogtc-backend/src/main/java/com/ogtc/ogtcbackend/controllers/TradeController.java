package com.ogtc.ogtcbackend.controllers;

import com.ogtc.ogtcbackend.base.BaseController;
import com.ogtc.ogtcbackend.entitie.Trade;
import com.ogtc.ogtcbackend.services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TradeController extends BaseController {
    @Autowired
    private TradeService tradeService;

    @PostMapping("/trade")
    public void addTrade(@RequestBody Trade trade){
        System.out.println(trade);
        tradeService.saveTrade(trade);
    }
}
