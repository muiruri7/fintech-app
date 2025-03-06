export interface Transaction {
  id: string; // Unique ID
  accountId: string; // Links to Account
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Loan Payment';
  amount: number;
  date: string; // ISO date string
  status: 'Pending' | 'Approved' | 'Rejected';
}
