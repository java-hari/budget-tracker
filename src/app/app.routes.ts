import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
    { path: '', redirectTo: 'user-login', pathMatch: 'full'},
    {path : 'user', component: UserComponent},
    {path : 'add-user', component: AddUserComponent},
    {path : 'user-login', component: UserLoginComponent},
    {path: "add-expense", component: AddExpenseComponent},
    {path: "transactions", component: TransactionsComponent},
    
];
