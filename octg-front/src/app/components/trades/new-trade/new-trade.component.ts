import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationStateServiceService } from '../../../services/applicationstate/application-state-service.service';
import { Symbol } from '../../../model/entities/symbol';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.css']
})
export class NewTradeComponent implements OnInit {
  tradeType: string = '';
  tradeForm: FormGroup;
  symbols: Symbol[] = [
    { code: null, label: "" },
    { code: "btcusd", label: "btcusdt" },
    { code: "ethbtc", label: "ethbtc" }
  ];

  

  selectedSymbol: Symbol;
  constructor(private fb: FormBuilder, private dataService: ApplicationStateServiceService) { }

  ngOnInit() {
    this.tradeType = this.dataService.currentTradeType;
    this.tradeForm = this.fb.group({
      tradeType: [this.tradeType],
      symbol: [null, [Validators.required]]
    });
    this.tradeForm.get('tradeType')?.disable();
  }

  onSubmit(): void {
    const trade = this.tradeForm.value;
      console.log(trade);
  }

}
