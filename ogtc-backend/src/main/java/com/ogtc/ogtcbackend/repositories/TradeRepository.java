package com.ogtc.ogtcbackend.repositories;

import com.ogtc.ogtcbackend.entitie.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
}