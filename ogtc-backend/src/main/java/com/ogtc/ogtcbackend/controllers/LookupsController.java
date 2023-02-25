package com.ogtc.ogtcbackend.controllers;

import com.ogtc.ogtcbackend.entitie.Lookup;
import com.ogtc.ogtcbackend.entitie.dto.LookupDto;
import com.ogtc.ogtcbackend.repositories.LookupRepository;
import com.ogtc.ogtcbackend.services.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/lkp")
public class LookupsController {
    @Autowired
    private LookupService lookupService;

    @GetMapping("/symbols")
    public List<LookupDto> getAllSymbole() {
        return lookupService.getAllSymbols();
    }
}
