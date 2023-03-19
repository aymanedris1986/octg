package com.ogtc.ogtcbackend.entitie;

import com.ogtc.ogtcbackend.entitie.Trades;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "TRADE_SPLITS")
public class TradeSplit {
    @Id
    @Column(name = "TRADE_SPLIT_ID", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "TRADE_ID", nullable = false)
    private Trades trades;

    @Column(name = "SPLIT_DIRECTION", nullable = false, length = 10)
    private String splitDirection;

    @Column(name = "SPLIT_DATE")
    private Instant splitDate;

    @Column(name = "SPLIT_PRICE")
    private Long splitPrice;

    @Column(name = "SPLIT_SIZE")
    private Long splitSize;

    @Column(name = "STOP_LOSS")
    private Long stopLoss;

    @Column(name = "TAKE_PROFIT")
    private Long takeProfit;

    @Column(name = "COMMISSION")
    private Long commission;

}