package com.ogtc.ogtcbackend.entitie;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@Data
@Table(name = "TRADE")
public class Trade {
    @Id
    @SequenceGenerator(name="TRADE_SEQ", sequenceName="TRADE_SEQ", allocationSize=1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TRADE_SEQ")
    @Column(name = "TRADE_ID", nullable = false)
    private Long id;

    @Column(name = "TRADE_TYPE", nullable = false, length = 20)
    private String tradeType;

    @Column(name = "ENTRY_DATE")
    private LocalDate entryDate;

    @Column(name = "SYMBOL", nullable = false, length = 300)
    private String symbol;

    @Column(name = "ENTRY_PRICE")
    private Long entryPrice;

    @Column(name = "NUMBER_OF_UNITS")
    private Long numberOfUnits;

    @Column(name = "EXIT_PRICE")
    private Long exitPrice;

    @Column(name = "EXIT_DATE")
    private LocalDate exitDate;

    @Column(name = "IS_CLOSED")
    private Boolean isClosed;

    @Column(name = "SUCCESS_STATUS")
    private Boolean successStatus;

}