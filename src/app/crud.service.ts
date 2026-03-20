import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itransaction } from './itransaction';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  base_url : string = "http://localhost:3000/dailyExpense";
  constructor(private http : HttpClient) { }

  getExpenseList() {
    return this.http.get<Itransaction[]>(this.base_url); 
  }

  postExpense(expenseData: Itransaction) {
    return this.http.post(this.base_url, expenseData);
  }

  deleteExpense(expenseId: number) {
    return this.http.delete(`${this.base_url}/${expenseId}`);
  }
  getExpenseById(expenseId: number) {
    return this.http.get<Itransaction>(`${this.base_url}/${expenseId}`);
  }

  updateExpense(expenseId: number, updatedData: Itransaction) {
    return this.http.put(`${this.base_url}/${expenseId}`, updatedData);
  }
}
