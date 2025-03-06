import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './modules/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './modules/customer/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './modules/customer/customer-details/customer-details.component';
import { AccountListComponent } from './modules/account/account-list/account-list.component';
import { AccountFormComponent } from './modules/account/account-form/account-form.component';
import { AccountDetailsComponent } from './modules/account/account-details/account-details.component';
import { TransactionListComponent } from './modules/transaction/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './modules/transaction/transaction-form/transaction-form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';




const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/add', component: CustomerFormComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'account/add', component: AccountFormComponent },
  { path: 'account/:id', component: AccountDetailsComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction/add', component: TransactionFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
