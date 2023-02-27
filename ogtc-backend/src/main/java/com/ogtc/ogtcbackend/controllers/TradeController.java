package com.ogtc.ogtcbackend.controllers;

import com.ogtc.ogtcbackend.base.BaseController;
import com.ogtc.ogtcbackend.entitie.Trade;
import com.ogtc.ogtcbackend.services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TradeController extends BaseController {
    @Autowired
    private TradeService tradeService;

    @PostMapping("/trade")
    public Trade addTrade(@RequestBody Trade trade){
        return tradeService.saveTrade(trade);
    }

    @GetMapping("/trade/{id}")
    public Trade getTradeById(@PathVariable Long id){
        return tradeService.getById(id);
    }
}
