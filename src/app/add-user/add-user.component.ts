import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { on } from 'events';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  addUserData : FormGroup;

  constructor(private fb : FormBuilder, private router: Router) {
    console.log('AddUserComponent constructor called');
    this.addUserData = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength],
      username: ['', Validators.required, Validators.minLength(3)],
      password: ['', Validators.required, Validators.minLength(3)],
      confirmPassword: ['', Validators.required, Validators.minLength(3)],
    });


  }

  onSubmit() {
    if (this.addUserData.valid) {
      //alert('Add user form submitted: ' + this.addUserData.controls['firstName'].value);
      //route to user list page
      this.router.navigate(['user']);
    } else {
      alert('Add user form is invalid');
    }
  }

  onCancel() {
    console.log('Add user form cancelled');
    this.addUserData.reset();

  }
}