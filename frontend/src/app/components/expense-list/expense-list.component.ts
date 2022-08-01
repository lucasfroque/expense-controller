import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
import { InstallmentService } from 'src/app/services/installment.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  expenseList: Expense[] = [];
  expense!: Expense;

  constructor(private expenseService: ExpenseService, private installmentService: InstallmentService) { }

  filter = this.expenseService.getFilter;


  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.expenseService.findAll().subscribe({
      next: expense => {
        this.expenseList = expense;
        this.doFilter();
      }
    })
  }

  deleteExpense(id: number): void {
    this.expenseService.delete(id).subscribe({
      next: () => this.findAll(),
      error: err => console.log("ERROR: " + err)
    })
  }

  getAumountInstallmentsPaid(id: number): number {
    const installmentList = this.expenseList.filter(expenses => expenses.id == id)
      .map(installment => installment.installment)[0]
    return installmentList.filter(installment => installment.status == "PAID").length;
  }


  payFirstInstallment(id: number){
    this.expenseService.findById(id).subscribe({
      next: (expense: Expense) => {
        const installment = expense.installment.find(Installment => Installment.status == "WAITING_PAYMENT");
        this.payInstallmentById(installment?.id);
      },
      error: err => console.log(err)
    })

  }

  payInstallmentById(id:any){
    this.installmentService.payById(id).subscribe({
      next: () => this.findAll(),
      error: err => console.log(err)
    })
  }
  
  doFilter(){
      this.expenseList = this.expenseService.doFilter(this.expenseList);
  }

}
