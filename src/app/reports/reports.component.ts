import { Component, OnInit } from '@angular/core';
import { Itransaction } from '../itransaction';
import { CrudService } from '../crud.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  transactions: any[] = [];
  transactionsWithAvailable: any[] = [];
  
  constructor(private curdService: CrudService) { 
    
    //this.curdService.getExpenseList().subscribe(data => {      
     // this.getMonthlyCardTotals(data);

      // this.transactions.map(transaction => transaction.price);
      // this.transactions = data.filter(transaction => transaction.transactionDate >= '2024-01-01' && transaction.transactionDate <= '2024-12-31' && transaction.card === 'BOA-CC');
      // this.boacc = this.transactions.map(transaction => transaction.price);
      // console.log('Filtered Transactions:', this.transactions);
    //});
  } 

  ngOnInit() {
    //alert("ReportsComponent : ngOnInit");
    this.curdService.getExpenseList().subscribe(data => {  
      //alert("ReportsComponent : ngOnInit : getExpenseList : "+JSON.stringify(data));    
      //this.testdata = this.getMonthlyCardTotals(data);
      this.transactions = this.transformExpenses(data);
      //alert("ReportsComponent : " + JSON.stringify(this.transactions));
      this.transactionsWithAvailable = this.mergeWithLimits(this.transactions, this.getCardLimit());
      //alert("ReportsComponent : " + JSON.stringify(this.transactionsWithAvailable));  
    });
    
  }

  transformExpenses(data: any[]) {
  const grouped: any = {};

  data.forEach(item => {
    const month = item.transactionDate.substring(0, 7); // YYYY-MM
    const card = item.card;
    const price = parseFloat(item.price); // string → number

    if (!grouped[month]) {
      grouped[month] = {};
    }

    if (!grouped[month][card]) {
      grouped[month][card] = 0;
    }

    grouped[month][card] += price;
  });

  // convert to flat array
  return Object.keys(grouped).flatMap(month =>
    Object.keys(grouped[month]).map(card => ({
      card: card,
      price: Number(grouped[month][card].toFixed(2)), // fix precision
      month: month
    }))
  );
}

getCardLimit(){
  const limits = [
    { name: 'BOA-CA', available: 10000 },
    { name: 'BOA-CC', available: 1600 },
    { name: 'Chase-CC', available: 2000 },
    { name: 'CITI-CC', available: 1500 }
  ];
   const limitMap = limits.reduce((acc, item) => {
     acc[item.name] = item.available;
     return acc;
   }, {} as any);
   return limitMap;
}


  mergeWithLimits(data: any[], limits: any[]) {
    
    return data.map(item => ({
      ...item,
      available: limits[item.card] ?? 0 // default if not found
    }));
  }

}
