import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense.service';
import { ErrorModal } from './modals/error-modal.component';
import { SucessModal } from './modals/sucess-modal.component';

@Component({
  selector: 'app-expense-create-card',
  templateUrl: './expense-create-card.component.html',
  styleUrls: ['./expense-create-card.component.css']
})
export class ExpenseCreateCardComponent implements OnInit {

  constructor(private expenseService: ExpenseService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSucessDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SucessModal, {
      panelClass: 'app-full-bleed-dialog',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openErrorDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ErrorModal, {
      panelClass: 'app-full-bleed-dialog',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onSubmit(expenseForm: any): void{
    this.expenseService.create(expenseForm.value)
    .subscribe(
      data => this.openSucessDialog('300ms', '150ms'),
      error => this.openErrorDialog('300ms', '150ms'));
      expenseForm.reset(); 
    }
}
