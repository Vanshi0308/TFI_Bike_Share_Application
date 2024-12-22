import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../types/users.interface';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  router = inject(Router);
  private formBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  isSubmitted = false;
  loginMessage: string = "";
  loginSuccess = true;

  constructor (private usersService: UsersService) { };
  ngOnInit(): void {}

  onSubmit() {
    if (this.usersService.isUserLoggedIn == false) {
      const res = this.usersService.loginUser(this.loginForm.value as User);
      res.pipe(
        catchError((_) => {
          this.usersService.isUserLoggedIn = false;
          this.loginSuccess = false;
          this.loginMessage = "Either username does not exist or the password does not match";
          return res;
        })
      ).subscribe(data => {
        if (data.success == true) {
          this.usersService.isUserLoggedIn = true;
          this.router.navigateByUrl('/dashboard');
        }
      });
    }
    this.isSubmitted = true;
  }
}