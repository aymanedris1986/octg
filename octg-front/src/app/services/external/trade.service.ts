import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trade } from 'src/app/model/entities/trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  private baseUrl = 'http://localhost:9090/api/trade';

  constructor(private http: HttpClient) { }

  saveTrade(trade:Trade):Observable<Trade>{
    return this.http.post<Trade>(this.baseUrl,trade);
  }

  getTradeById(id:any):Observable<Trade>{
    return this.http.get<Trade>(this.baseUrl+"/"+id);
  }

}
