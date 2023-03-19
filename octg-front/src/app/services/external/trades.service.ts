import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TradesCounts } from 'src/app/model/entities/trades-counts';

@Injectable({
  providedIn: 'root'
})
export class TradesService {

  private baseUrl = 'http://localhost:9090/api/trades';
  constructor(private http: HttpClient) { }

  getTradesCount():Observable<TradesCounts>{
    return this.http.get<TradesCounts>(this.baseUrl+"/counts");
  }
}
