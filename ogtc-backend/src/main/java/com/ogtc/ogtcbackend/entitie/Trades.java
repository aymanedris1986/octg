package com.ogtc.ogtcbackend.entitie;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "TRADES")
@NamedQueries({
        @NamedQuery(name = "Trades.countByExitDateNull", query = "select count(t) from Trades t where t.exitDate is null")
})
public class Trades {
    @Id
    @Column(name = "TRADE_ID", nullable = false)
    private Long id;

    @Column(name = "SYMBOL", nullable = false, length = 50)
    private String symbol;

    @Column(name = "DIRECTION", nullable = false, length = 10)
    private String direction;

    @Column(name = "ENTRY_DATE", nullable = false)
    private Instant entryDate;

    @Column(name = "EXIT_DATE")
    private Instant exitDate;

    @Column(name = "NOTES", length = 2000)
    private String notes;

    @OneToMany(mappedBy = "trades")
    private Set<TradeSplit> tradeSplits = new LinkedHashSet<>();

}