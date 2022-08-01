import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Balance } from '../models/balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService{

  private baseUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient){}

  getBalance(): Observable<Balance>{
      return this.httpClient.get<Balance>(this.baseUrl + "/balance");
  }
}
