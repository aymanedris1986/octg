package com.ogtc.ogtcbackend.entitie.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class TradesCountDTO {
    private long allTrades;
    private long closedTrades;
    private long openedTrades;
}
