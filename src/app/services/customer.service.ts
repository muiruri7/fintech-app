import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Customer } from '../models/customer';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly STORAGE_KEY = 'customers';

  constructor(private localStorageService: LocalStorageService) {}

  // 🔹 Get all customers
  getCustomers(): Customer[] {
    return this.localStorageService.loadData<Customer>(this.STORAGE_KEY);
  }

  // 🔹 Get a single customer by ID
  getCustomerById(id: string): Customer | undefined {
    return this.getCustomers().find((customer) => customer.id === id);
  }

  // 🔹 Add a new customer
  addCustomer(customer: Omit<Customer, 'id'>): void {
    const customers = this.getCustomers();
    const newCustomer: Customer = { id: uuidv4(), ...customer };
    customers.push(newCustomer);
    this.localStorageService.saveData(this.STORAGE_KEY, customers);
    console.log('Added Customer:', newCustomer);
  }

  // 🔹 Update customer details
  updateCustomer(updatedCustomer: Customer): void {
    let customers = this.getCustomers();
    customers = customers.map((customer) =>
      customer.id === updatedCustomer.id ? updatedCustomer : customer
    );
    this.localStorageService.saveData(this.STORAGE_KEY, customers);
    console.log('Updated Customer:', updatedCustomer);
  }

  // 🔹 Delete a customer
  deleteCustomer(id: string): void {
    this.localStorageService.deleteData(this.STORAGE_KEY, id);
    console.log(`Deleted Customer with ID: ${id}`);
  }
}
