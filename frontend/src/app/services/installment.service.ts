import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Installment } from '../models/installments';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService{

  private baseUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) { }
  
  payById(id: Number): Observable<Installment>{
    return this.httpClient.get<Installment>(this.baseUrl + "/installments/pay/" + id);
  }
}
