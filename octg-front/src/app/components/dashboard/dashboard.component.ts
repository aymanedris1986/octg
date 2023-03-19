import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradesCounts } from 'src/app/model/entities/trades-counts';
import { TradesService } from 'src/app/services/external/trades.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tradesCounts:TradesCounts;
  constructor(private router: Router,private tradesService : TradesService) {}

  ngOnInit(): void {
    this.tradesService.getTradesCount().subscribe(
      data=>{
          this.tradesCounts = data;
      }
    );
  }

  

  createNewTrade(tradeType:string) {
    this.router.navigate(['/new-trade', { tradeType: tradeType }]);
  }

}
