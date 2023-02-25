package com.ogtc.ogtcbackend.entitie;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table(name = "LOOKUPS")
public class Lookup {
    @EmbeddedId
    private LookupId id;

    @Column(name = "DESCRIPTION", nullable = false, length = 1000)
    private String description;

}