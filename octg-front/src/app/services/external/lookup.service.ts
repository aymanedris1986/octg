import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lookup } from 'src/app/model/entities/lookup';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private baseUrl = 'http://localhost:9090/api/lkp/symbols';

  constructor(private http: HttpClient) { }

  getLookups(): Observable<Lookup[]> {
    return this.http.get<Lookup[]>(`${this.baseUrl}`);
  }
}
