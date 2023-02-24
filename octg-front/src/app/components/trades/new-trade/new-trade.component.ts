import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationStateServiceService } from 'src/app/services/applicationstate/application-state-service.service';
@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.css']
})
export class NewTradeComponent implements OnInit {
  tradeType: string = '';

  constructor(private route: ActivatedRoute,private dataService : ApplicationStateServiceService) { }

  ngOnInit() {
      this.tradeType = this.dataService.currentTradeType;
      console.log(this.tradeType);
  }

}
