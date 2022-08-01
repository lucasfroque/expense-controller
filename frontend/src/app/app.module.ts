import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import localePt from '@angular/common/locales/pt';
import { ExpenseInfoComponent } from './components/expense-info/expense-info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExpenseCreateCardComponent } from './components/expense-create-card/expense-create-card.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


registerLocaleData(localePt)


@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseInfoComponent,
    SidebarComponent,
    ExpenseCreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

