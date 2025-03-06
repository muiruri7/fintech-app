import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../models/account';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  account?: Account;
  customer?: Customer;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.account = this.accountService.getAccountById(id);
      if (this.account) {
        this.customer = this.customerService.getCustomerById(this.account.customerId);
      }
    }
  }
}
