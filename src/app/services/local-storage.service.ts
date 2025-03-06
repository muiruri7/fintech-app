import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // 🔹 Save data to localStorage
  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // 🔹 Load data from localStorage
  loadData<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  // 🔹 Delete data from localStorage
  deleteData(key: string, id: string): void {
    let items = this.loadData<any>(key);
    items = items.filter((item) => item.id !== id);
    this.saveData(key, items);
  }
}
