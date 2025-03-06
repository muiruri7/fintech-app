import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Account } from '../models/account';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly STORAGE_KEY = 'accounts';

  constructor(private localStorageService: LocalStorageService) {}

  // 🔹 Get all accounts
  getAccounts(): Account[] {
    return this.localStorageService.loadData<Account>(this.STORAGE_KEY);
  }

  // 🔹 Get a single account by ID
  getAccountById(id: string): Account | undefined {
    return this.getAccounts().find((account) => account.id === id);
  }

  // 🔹 Generate Unique Account Number
  private generateAccountNumber(): string {
    return 'AC' + Math.floor(100000 + Math.random() * 900000).toString();
  }

  // 🔹 Add a new account
  addAccount(account: Omit<Account, 'id' | 'accountNumber'>): void {
    const accounts = this.getAccounts();
    const newAccount: Account = {
      id: uuidv4(),
      accountNumber: this.generateAccountNumber(),
      ...account,
    };
    accounts.push(newAccount);
    this.localStorageService.saveData(this.STORAGE_KEY, accounts);
    console.log('Added Account:', newAccount);
  }

  // 🔹 Update account details
  updateAccount(updatedAccount: Account): void {
    let accounts = this.getAccounts();
    accounts = accounts.map((account) =>
      account.id === updatedAccount.id ? updatedAccount : account
    );
    this.localStorageService.saveData(this.STORAGE_KEY, accounts);
    console.log('Updated Account:', updatedAccount);
  }

  // 🔹 Delete an account
  deleteAccount(id: string): void {
    this.localStorageService.deleteData(this.STORAGE_KEY, id);
    console.log(`Deleted Account with ID: ${id}`);
  }
}
