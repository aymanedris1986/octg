package com.ogtc.ogtcbackend.entitie.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * A DTO for the {@link com.ogtc.ogtcbackend.entitie.Lookup} entity
 */
@Data
@NoArgsConstructor
public class LookupDto implements Serializable {
    private  String idCode;
    private  String idType;
    private  String description;
}