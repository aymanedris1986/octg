package com.ogtc.ogtcbackend.entitie;

import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LookupId implements Serializable {
    private static final long serialVersionUID = -8585491573123815688L;
    @Column(name = "CODE", nullable = false, length = 300)
    private String code;

    @Column(name = "LKP_TYPE", nullable = false, length = 300)
    private String type;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        LookupId entity = (LookupId) o;
        return Objects.equals(this.code, entity.code) &&
                Objects.equals(this.type, entity.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(code, type);
    }

}