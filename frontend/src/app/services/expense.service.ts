import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService{

  private baseUrl = "http://localhost:8080/api"
  private filter = new Filter();

  constructor(private httpClient: HttpClient) { }
  
  findAll(): Observable<Expense[]>{
    return this.httpClient.get<[]>(this.baseUrl + "/expenses");
  }
  findById(id:number): Observable<Expense>{
    return this.httpClient.get<Expense>(this.baseUrl + "/expenses/"+id);
  }
  create(expense: Expense): Observable<Expense>{
    return this.httpClient.post<Expense>(this.baseUrl + "/expenses", expense)
  }
  delete(id: number){
  return this.httpClient.delete(this.baseUrl + "/expenses/" + id)
  }


  formatDate(date:String){
    const dateSplited = date.split("-")
    if(dateSplited.length == 3){
      const firstPaymentDate = new Date(+dateSplited[0], +dateSplited[1] - 1, +dateSplited[2]);
      date = (firstPaymentDate.getUTCFullYear()) + "-" + (firstPaymentDate.getMonth() + 1);
    }
    if(dateSplited.length < 3){
      const firstPaymentDate = new Date(+dateSplited[0], +dateSplited[1]-1);
      date = (firstPaymentDate.getUTCFullYear()) + "-" + (firstPaymentDate.getMonth() + 1);
    }
    return date;
    }

  doFilter(expenseList: Expense[]){
      if(this.filter.descriptionFilter != ""){
        expenseList = expenseList.filter((expense:Expense) => expense.description.toLowerCase().indexOf(this.filter.descriptionFilter.toLowerCase()) > -1)
      }
      if(this.filter.dateFilter != ""){
        expenseList = expenseList.filter((expense:Expense) => this.formatDate(expense.firstPaymentDate.toString()) == this.formatDate(this.filter.dateFilter.toString()));
      }
    return expenseList;
  }
  public get getFilter(){
    return this.filter;
  }
}
