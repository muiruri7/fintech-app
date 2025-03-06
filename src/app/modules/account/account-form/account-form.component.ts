import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {
  accountForm: FormGroup;
  customers: Customer[] = [];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customers = this.customerService.getCustomers();
    this.accountForm = this.fb.group({
      customerId: ['', Validators.required],
      accountType: ['Savings', Validators.required],
      balance: [0, [Validators.required, Validators.min(0)]],
      status: ['Active', Validators.required],
    });
  }

  submitForm(): void {
    if (this.accountForm.valid) {
      this.accountService.addAccount(this.accountForm.value);
      this.router.navigate(['/accounts']);
    }
  }
}
