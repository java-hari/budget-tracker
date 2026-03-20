import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Itransaction } from '../itransaction';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-expense',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent implements OnInit {
  updateMode: boolean = false;
  expenseForm: FormGroup;
  today: Date = new Date(); // Get today's date in YYYY-MM-DD format
  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.expenseForm = this.fb.group({
      id: [null],
      commodity: [''],
      card: [''],
      price: [null],
      transactionDate: [''],
    });
  }
transactions : Itransaction[] = [];
  getExpenseData() {
    this.crudService.getExpenseList().subscribe(data => {
      this.transactions = data.sort((a, b) => (b.id - a.id)); // Sort by id in descending order;    
      console.log('Expense List:', this.transactions);
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.expenseForm.patchValue({
      transactionDate: this.today.toISOString().split('T')[0] // Set default value to today's date in YYYY-MM-DD format
    });
    this.getExpenseData();
  }

  cards: any[] = [
    { name: 'BOA-CC', value: 'BOA-CC' },
    { name: 'Chase-CC', value: 'Chase-CC' },
    { name: 'CITI-CC', value: 'CITI-CC' },
  ]

  onSubmit() {
    //alert("onSubmit : "+this.expenseForm.value.id);
    console.log(this.expenseForm.value);
    this.crudService.postExpense(this.expenseForm.value).subscribe(response => {
      console.log('Expense added successfully:', response);
      this.getExpenseData(); // Refresh the expense list after adding a new expense
      this.expenseForm.reset();
    });

  }
  onCancel() {  
    this.updateMode = false;
    this.expenseForm.reset();
  }
  onUpdateSubmit() {
    //alert('Update expense form submitted: ' + this.expenseForm.value.id);      
    this.crudService.updateExpense(this.expenseForm.value.id, this.expenseForm.value).subscribe(response => {
      console.log('Expense updated successfully:', response);
      this.updateMode = false;
      this.getExpenseData();
      this.expenseForm.reset();
    });
  }

  onUpdate(expenseId: number) {

    this.transactions.forEach(data => {
      if(data.id === expenseId){
        this.expenseForm.patchValue(data);
      }
    });

    //this.crudService.getExpenseById(expenseId).subscribe(response => {
    //  console.log('Update expense with ID:', expenseId);
      // Populate the form with the expense data for editing
      //this.expenseForm.patchValue(response);
   // });
    this.updateMode = true;
    
  }

  onDelete(expenseId: number) {
    //alert("delete: "+expenseId)
    console.log('Delete expense with ID:', expenseId);
    this.crudService.deleteExpense(expenseId).subscribe(response => {
      console.log('Expense deleted successfully:', response);
      this.transactions = this.transactions.filter(exp => exp.id !== expenseId); // Remove the deleted expense from the local list  
      this.getExpenseData(); // Refresh the expense list after deletion
    });    
  }


}
