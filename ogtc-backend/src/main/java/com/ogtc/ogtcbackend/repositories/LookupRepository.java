package com.ogtc.ogtcbackend.repositories;

import com.ogtc.ogtcbackend.entitie.Lookup;
import com.ogtc.ogtcbackend.entitie.LookupId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LookupRepository extends JpaRepository<Lookup, LookupId> {
}