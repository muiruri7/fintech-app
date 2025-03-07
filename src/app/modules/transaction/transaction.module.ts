import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TransactionListComponent } from './transaction-list/transaction-list.component';
// import { TransactionFormComponent } from './transaction-form/transaction-form.component';
// import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { RouterModule } from '@angular/router'; // ✅ Fix routerLink error

// ✅ Correctly import Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    // TransactionListComponent,
    // TransactionFormComponent,
    // TransactionDetailsComponent
  ],
  imports: [
    CommonModule,     
    RouterModule,     
    MatTableModule,  
    MatButtonModule,  
    MatIconModule
  ]
})
export class TransactionModule { }
