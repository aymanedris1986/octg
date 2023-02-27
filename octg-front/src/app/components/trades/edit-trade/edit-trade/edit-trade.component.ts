import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Trade } from 'src/app/model/entities/trade';
import { TradeService } from 'src/app/services/external/trade.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.css']
})
export class EditTradeComponent implements OnInit, OnChanges {

  @Input('tradeId') tradeId: any;
  form: FormGroup;
  currentTrade: Trade;


  constructor(private tradeService: TradeService,private fb: FormBuilder) { 

    this.form = this.fb.group({
      id: [null, Validators.required],
      tradeType: [null, Validators.required],
      symbol: [null, Validators.required],
      entryDate: [null, Validators.required],
      entryPrice: [null, Validators.required],
      numberOfUnits: [null, Validators.required],
      exitPrice: [null, Validators.required],
      exitDate: [null, Validators.required],
      isClosed: [null, Validators.required],
      successStatus: [null, Validators.required],
   });

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(this.fb);
    if ('tradeId' in changes) {
      if (this.tradeId) {
        this.tradeService.getTradeById(String(this.tradeId)).subscribe(
          (data)=>{
            console.log(this.form);
            this.currentTrade = data;
            this.form.setValue(this.currentTrade);
          }
        )
      }
    }else{
      //this.currentTrade = undefined;
    }
  }



  onSubmit() {
    this.currentTrade = this.form.value;
    console.log(this.currentTrade);
  }

//// Fields Error Message ////////////////////////////////////////////////////////

// Generic control errors message 
formCtrlError(ctrl: AbstractControl) { 
   let msg = "Invalid, check again"; 
   if (ctrl?.hasError("required")) { 
      msg = "Field is required"; 
   } 
   return msg; 
} 

// Id Field specific errors message 
get idErrorsMessage() { 
   let msg = ""; 
   if (this.idCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Tradetype Field specific errors message 
get tradeTypeErrorsMessage() { 
   let msg = ""; 
   if (this.tradeTypeCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Symbol Field specific errors message 
get symbolErrorsMessage() { 
   let msg = ""; 
   if (this.symbolCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Entrydate Field specific errors message 
get entryDateErrorsMessage() { 
   let msg = ""; 
   if (this.entryDateCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Entryprice Field specific errors message 
get entryPriceErrorsMessage() { 
   let msg = ""; 
   if (this.entryPriceCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Numberofunits Field specific errors message 
get numberOfUnitsErrorsMessage() { 
   let msg = ""; 
   if (this.numberOfUnitsCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Exitprice Field specific errors message 
get exitPriceErrorsMessage() { 
   let msg = ""; 
   if (this.exitPriceCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Exitdate Field specific errors message 
get exitDateErrorsMessage() { 
   let msg = ""; 
   if (this.exitDateCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Isclosed Field specific errors message 
get isClosedErrorsMessage() { 
   let msg = ""; 
   if (this.isClosedCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

// Successstatus Field specific errors message 
get successStatusErrorsMessage() { 
   let msg = ""; 
   if (this.successStatusCtrl?.hasError("required")) { 
       msg = "Field is required"; 
   } 
   return msg; 
} 

//// Setters & Getters ///////////////////////////////////////////////////////////

get idCtrl() { return this.form.get("id"); }
get tradeTypeCtrl() { return this.form.get("tradeType"); }
get symbolCtrl() { return this.form.get("symbol"); }
get entryDateCtrl() { return this.form.get("entryDate"); }
get entryPriceCtrl() { return this.form.get("entryPrice"); }
get numberOfUnitsCtrl() { return this.form.get("numberOfUnits"); }
get exitPriceCtrl() { return this.form.get("exitPrice"); }
get exitDateCtrl() { return this.form.get("exitDate"); }
get isClosedCtrl() { return this.form.get("isClosed"); }
get successStatusCtrl() { return this.form.get("successStatus"); }

}
