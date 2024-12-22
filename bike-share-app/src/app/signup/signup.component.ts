import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../types/users.interface';
import { UsersService } from '../services/users.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{
[x: string]: any;
  private formBuilder = inject(FormBuilder);
  signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  isSubmitted = false;
  signupMessage: string = "";

  constructor (private usersService: UsersService) { };

  ngOnInit(): void {}
  onSubmit() {
    this.isSubmitted = true;
    if (this.usersService.isUserLoggedIn == false) {
      const res = this.usersService.signupUser(this.signupForm.value as User);
      res.pipe(
        catchError((_) => this.signupMessage = "User already exists")
      ).subscribe(data => {
        if (data.success == true) {
          this.signupMessage = "User successfully signed up";
        }
      });
    }
    this.signupForm.reset();
  }
}