import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// 🔹 Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AccountFormComponent } from './modules/account/account-form/account-form.component';
import { AccountDetailsComponent } from './modules/account/account-details/account-details.component';
import { AccountListComponent } from './modules/account/account-list/account-list.component';
import { CustomerFormComponent } from './modules/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './modules/customer/customer-details/customer-details.component';
import { TransactionDetailsComponent } from './modules/transaction/transaction-details/transaction-details.component';
import { TransactionFormComponent } from './modules/transaction/transaction-form/transaction-form.component';
import { TransactionListComponent } from './modules/transaction/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountFormComponent,
    AccountDetailsComponent,
    AccountListComponent,
    CustomerFormComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    TransactionDetailsComponent,
    TransactionFormComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // 🔹 Angular Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
