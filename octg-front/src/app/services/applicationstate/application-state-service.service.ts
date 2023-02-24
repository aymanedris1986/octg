import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateServiceService {
   currentTradeType:string = '';

  constructor() { }

  changeTradeType(currentTradeType:string){
    this.currentTradeType = currentTradeType;
  }

}
