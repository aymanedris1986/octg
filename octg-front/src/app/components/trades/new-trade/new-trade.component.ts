import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationStateServiceService } from '../../../services/applicationstate/application-state-service.service';
import { LookupService } from 'src/app/services/external/lookup.service';
import { Symbol } from '../../../model/entities/symbol';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TradeService } from 'src/app/services/external/trade.service';
import { Trade } from 'src/app/model/entities/trade';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.css']
})
export class NewTradeComponent implements OnInit {
  tradeType: string = '';
  tradeForm: FormGroup;
  selectedSymbol: Symbol;
  trade:Trade;

  symbols: Symbol[] = [];

  

  
  constructor(private fb: FormBuilder, private dataService: ApplicationStateServiceService,private lookupService:LookupService,private tradeService:TradeService) { }

  ngOnInit() {
    this.lookupService.getLookups().subscribe((data) => {
      data.forEach((item) => {
        this.symbols.push(
          {code : item.idCode , label : item.description}
        );
      });
    });


    this.tradeType = this.dataService.currentTradeType;
    this.tradeForm = this.fb.group({
      tradeType: [this.tradeType],
      symbol: [null, [Validators.required]]
    });
    this.tradeForm.get('tradeType')?.disable();
  }

  onSubmit(): void {
    const tradeForm = this.tradeForm.value;
      console.log(tradeForm);
    this.trade = new Trade();
    this.trade.tradeType = this.tradeType;
    this.trade.symbol = tradeForm['symbol'];
    this.trade.entryDate = new Date();
    this.tradeService.saveTrade(this.trade).subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

}
