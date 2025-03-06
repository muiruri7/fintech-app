import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { AccountService } from '../../services/account.service';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalCustomers = 0;
  totalAccounts = 0;
  totalBalance = 0;
  recentTransactions: Transaction[] = [];

  constructor(
    private customerService: CustomerService,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
    const accounts = this.accountService.getAccounts();
    this.totalAccounts = accounts.length;
    this.totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
    this.recentTransactions = this.transactionService.getTransactions().slice(-5).reverse();
  }
}
