import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { Installment } from 'src/app/models/installments';
import { ExpenseService } from 'src/app/services/expense.service';
import { InstallmentService } from 'src/app/services/installment.service';

@Component({
  selector: 'app-expense-info',
  templateUrl: './expense-info.component.html',
  styleUrls: ['./expense-info.component.css']
})
export class ExpenseInfoComponent implements OnInit {

  installmentList: Installment[] = []

  constructor(private installmentService: InstallmentService, private expenseService: ExpenseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findIntallments();
  }


  findIntallments(): void{
    this.expenseService.findById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
       next: (expenses:Expense) => {
        this.installmentList = expenses.installment;
        console.log(this.installmentList)
      },
       error: err => console.log("Erro: " + err)
     })
   }

  payInstallment(id:any){
    this.installmentService.payById(id).subscribe({
      next: () => this.findIntallments(),
      error: err => console.log(err)
    })
  }

}
