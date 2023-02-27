import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Trade } from 'src/app/model/entities/trade';
import { TradeService } from 'src/app/services/external/trade.service';

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.css']
})
export class EditTradeComponent implements OnInit, OnChanges {

  @Input('tradeId') tradeId: any;
  currentTrade: Trade;

  constructor(private tradeService: TradeService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log();
    if ('tradeId' in changes) {
      if (this.tradeId) {
        this.tradeService.getTradeById(String(this.tradeId)).subscribe(
          this.getTradeeByIdHandler
        )
      }
    }else{
      //this.currentTrade = undefined;
    }
  }

  getTradeeByIdHandler(data: any) {
    this.currentTrade = data;
    console.log(this.currentTrade);
  }

}
