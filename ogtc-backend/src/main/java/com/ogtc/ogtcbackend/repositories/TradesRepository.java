package com.ogtc.ogtcbackend.repositories;

import com.ogtc.ogtcbackend.entitie.Trades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TradesRepository extends JpaRepository<Trades, Long> {
    @Query("select count(t) from Trades t where t.exitDate is not null")
    long countByExitDateNotNull();

    long countByExitDateNull();
}