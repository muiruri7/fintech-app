import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Transaction } from '../models/transaction';
import { AccountService } from './account.service';
// import { Account } from '../models/account';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly STORAGE_KEY = 'transactions';

  constructor(
    private localStorageService: LocalStorageService,
    private accountService: AccountService
  ) {}

  // 🔹 Get all transactions
  getTransactions(): Transaction[] {
    return this.localStorageService.loadData<Transaction>(this.STORAGE_KEY);
  }

  // 🔹 Get a single transaction by ID
  getTransactionById(id: string): Transaction | undefined {
    return this.getTransactions().find((transaction) => transaction.id === id);
  }

  // 🔹 Add a new transaction & update account balance
  addTransaction(transaction: Omit<Transaction, 'id'>): void {
    const transactions = this.getTransactions();
    const newTransaction: Transaction = { id: uuidv4(), ...transaction };

    transactions.push(newTransaction);
    this.localStorageService.saveData(this.STORAGE_KEY, transactions);
    console.log('Added Transaction:', newTransaction);

    if (newTransaction.status === 'Approved') {
      this.updateAccountBalance(newTransaction);
    }
  }

  // 🔹 Update transaction & adjust balance if status changes
  updateTransaction(updatedTransaction: Transaction): void {
    let transactions = this.getTransactions();
    const oldTransaction = transactions.find((t) => t.id === updatedTransaction.id);

    transactions = transactions.map((transaction) =>
      transaction.id === updatedTransaction.id ? updatedTransaction : transaction
    );
    this.localStorageService.saveData(this.STORAGE_KEY, transactions);
    console.log('Updated Transaction:', updatedTransaction);

    if (oldTransaction?.status !== 'Approved' && updatedTransaction.status === 'Approved') {
      this.updateAccountBalance(updatedTransaction);
    }
  }

  // 🔹 Delete a transaction & reverse balance if needed
  deleteTransaction(id: string): void {
    const transactions = this.getTransactions();
    const transactionToDelete = transactions.find((t) => t.id === id);

    this.localStorageService.deleteData(this.STORAGE_KEY, id);
    console.log(`Deleted Transaction with ID: ${id}`);

    if (transactionToDelete?.status === 'Approved') {
      this.reverseAccountBalance(transactionToDelete);
    }
  }

  // 🔹 Update account balance
  private updateAccountBalance(transaction: Transaction): void {
    const account = this.accountService.getAccountById(transaction.accountId);
    if (!account) return;

    if (transaction.transactionType === 'Deposit') {
      account.balance += transaction.amount;
    } else if (transaction.transactionType === 'Withdrawal' && account.balance >= transaction.amount) {
      account.balance -= transaction.amount;
    }

    this.accountService.updateAccount(account);
  }

  // 🔹 Reverse account balance when deleting a transaction
  private reverseAccountBalance(transaction: Transaction): void {
    const account = this.accountService.getAccountById(transaction.accountId);
    if (!account) return;

    if (transaction.transactionType === 'Deposit') {
      account.balance -= transaction.amount;
    } else if (transaction.transactionType === 'Withdrawal') {
      account.balance += transaction.amount;
    }

    this.accountService.updateAccount(account);
  }
}
