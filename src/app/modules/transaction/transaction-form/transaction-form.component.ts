import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { Account } from '../../../models/account';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  transactionForm: FormGroup;
  accounts: Account[] = [];

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.accounts = this.accountService.getAccounts();
    this.transactionForm = this.fb.group({
      accountId: ['', Validators.required],
      transactionType: ['Deposit', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString(), Validators.required],
      status: ['Pending', Validators.required],
    });
  }

  submitForm(): void {
    if (this.transactionForm.valid) {
      this.transactionService.addTransaction(this.transactionForm.value);
      this.router.navigate(['/transactions']);
    }
  }
}
