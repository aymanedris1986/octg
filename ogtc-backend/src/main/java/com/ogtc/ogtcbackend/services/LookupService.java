package com.ogtc.ogtcbackend.services;

import com.ogtc.ogtcbackend.entitie.Lookup;
import com.ogtc.ogtcbackend.entitie.dto.LookupDto;
import com.ogtc.ogtcbackend.repositories.LookupRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LookupService {
    @Autowired
    private LookupRepository lookupRepository;
    @Autowired
    private ModelMapper modelMapper;

    public List<LookupDto> getAllSymbols(){
            List<Lookup> lookupList = lookupRepository.findAll();
        List<LookupDto> lookupDtos = lookupList.stream()
                .map(product -> modelMapper.map(product, LookupDto.class))
                .collect(Collectors.toList());
        return lookupDtos;
    }
}
