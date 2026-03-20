import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Itransaction } from '../itransaction';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit {
  transactionForm: FormGroup;
  transactions: Itransaction[] = [];
  sortData: string[] = ['date', 'price', 'card', 'commodity', 'id'];

  cardTypes: any[] = [
    {name: 'BOA-CC', value: 'BOA-CC'}, 
    {name: 'Chase-CC', value: 'Chase-CC'},
    {name: 'CITI-CC', value: 'CITI-CC'}
  ];
  totalRecords: number = 0;
  totalPages: number = 0;
  loopArray: number[] = [];

  constructor(private fb : FormBuilder, private crudService: CrudService, private router: Router) {
    this.transactionForm = this.fb.group({
      sort: [''],
      transactionDate: [''],
      cardSelect: ['']
    });
    // this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
    //   this.transactions = data;
    // });
    
  }

  ngOnInit(): void {
    this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
      this.transactions = data.sort((a, b) => (b.id - a.id)).slice(0, 5); // Sort by id in descending order and take first 5 records;      
      // this.totalRecords = this.transactions.length;
    });

    this.getTotalTransactions();

  }

getTotalTransactions(){ 
  this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
    this.totalRecords = data.length;
    this.totalPages = Math.ceil(this.totalRecords / 5); // Assuming 5 records per page
    this.loopArray = Array(this.totalPages).fill(0).map((x, i) => i + 1); // Create an array [1, 2, ..., totalPages]
  }); 
}

  getTransactionByPage(page: number){
    const startIndex = (page - 1) * 5;  
     const endIndex = startIndex + 5;
    this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
      this.transactions = data.sort((a, b) => (b.id - a.id)).slice(startIndex, endIndex); // Sort by id in descending order and take records for the current page;      
    });
  }

  getTransactionSortBy(type: string){
    // alert("type"+type);
    if(type === 'date'){
      this.transactions.sort((a, b) => new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime());
    } else if(type === 'price'){
      this.transactions.sort((a, b) => b.price - a.price);
    } else if(type === 'card'){
      this.transactions.sort((a, b) => a.card.localeCompare(b.card));
    } else if(type === 'commodity'){
      this.transactions.sort((a, b) => a.commodity.localeCompare(b.commodity));
    } else if(type === 'id'){
      this.transactions.sort((a, b) => b.id - a.id);
    } 
  }

  getTransactionByCardType(cardType: string){
    // alert("cardType"+cardType);
    this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
      this.transactions = data.filter(transaction => transaction.card === cardType);
    });
  }

  getTransactionByDate(){
    
    this.crudService.getExpenseList().subscribe((data: Itransaction[]) => {
      this.transactions = data.filter(transaction => transaction.transactionDate === this.transactionForm.value.transactionDate);
    });
  }

  getReset(){
    this.ngOnInit();
  }
}
