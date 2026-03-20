import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent implements OnInit {
  loginData : FormGroup;
  user: string = '';
  constructor(private fb : FormBuilder, private router: Router) {
    console.log('UserLoginComponent constructor called');
    this.loginData = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    
  }

  ngOnInit() {
      console.log('UserLoginComponent ngOnInit called');      
  }


  onSubmit() {
    const username = this.loginData.controls['username'].value;
    const password = this.loginData.controls['password'].value;
    if(username === 'admin' && password === 'admin') {
      this.user = username;
          console.log('Login successful');  
      this.router.navigate(['user']);
    } else {
      alert('Invalid username or password');
          console.log('Login failed');
          return;
    }    
    
  }

  resetForm() {
    this.loginData.reset();
  }
}
