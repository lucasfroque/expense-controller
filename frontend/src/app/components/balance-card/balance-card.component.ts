import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Balance } from 'src/app/models/balance';
import { Expense } from 'src/app/models/expense';
import { BalanceService } from 'src/app/services/balance.service';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.css']
})
export class BalanceCardComponent implements OnInit {

  balance: Balance = new Balance; 
  date!: string[];
  filter = this.expenseService.getFilter;
  monthNames: String[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  currentExpenseValue: number = 0;

  constructor(private balanceService: BalanceService, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getBalance();
    this.getCurrentValue();
  }


  getCurrentValue(): void {
    this.expenseService.findAll().subscribe({
      next: expenses => {
        expenses.filter((expense:Expense) => this.expenseService.formatDate(expense.firstPaymentDate.toString()) == this.expenseService.formatDate(this.filter.dateFilter.toString()))
        .forEach(expenseValue => this.currentExpenseValue += expenseValue.expenseValue)
      },
    })
  }

  getBalance(){
    this.balanceService.getBalance().subscribe({
      next: balance => this.balance = balance,
      error: err => console.log(err)
    })
  }

  getMonth(number: any) {
    return this.monthNames[number]
  }

  getDate() {
    this.date = this.filter.dateFilter.split('-');
    const month = parseInt(this.date[1]) - 1;
    var date = this.getMonth(month) + " de " + this.date[0]

    if (this.getMonth(month) == null) {
      date = "-"
    }

    return date;
  }

}
