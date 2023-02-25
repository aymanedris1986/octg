package com.ogtc.ogtcbackend.entitie;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "LOOKUPS")
public class Lookup {
    @EmbeddedId
    private LookupId id;

    @Column(name = "DESCRIPTION", nullable = false, length = 1000)
    private String description;

    public LookupId getId() {
        return id;
    }

    public void setId(LookupId id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}