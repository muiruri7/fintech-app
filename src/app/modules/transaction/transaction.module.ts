import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';


@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionFormComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
  ]
})
export class TransactionModule { }
