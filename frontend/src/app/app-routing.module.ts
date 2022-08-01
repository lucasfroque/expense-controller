import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseInfoComponent } from './components/expense-info/expense-info.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

const routes: Routes = [
  {path: 'expenses', component: ExpenseListComponent},
  {path: 'expenses/info/:id', component: ExpenseInfoComponent},
  {path: '**', redirectTo: 'expenses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
