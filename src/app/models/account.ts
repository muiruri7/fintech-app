export interface Account {
  id: string; // Unique ID
  customerId: string; // Links to Customer
  accountNumber: string; // Auto-generated
  accountType: 'Savings' | 'Checking' | 'Business';
  balance: number;
  status: 'Active' | 'Suspended' | 'Closed';
}
