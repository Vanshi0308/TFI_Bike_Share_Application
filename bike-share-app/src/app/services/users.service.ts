import { Injectable } from '@angular/core';
import { User } from '../types/users.interface';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class UsersService{
    signupUrl = 'http://localhost:3000/signup';
    loginUrl = 'http://localhost:3000/login';

    isUserLoggedIn: boolean = false;

    constructor(private http: HttpClient) { }

    signupUser(user: User) {
        return this.http.post<any>(this.signupUrl, user).pipe(
            catchError((err) => {
                throw err;
            })
        );
    }

    loginUser(user: User) {
        return this.http.post<any>(this.loginUrl, user).pipe(
            catchError((err) => {
                throw err;
            })
        );
    }

    // private signupUsers: User[] = [];
    // private currentUser: User | null = null;

    // public getSignupUsers(): User[] {
    //     const localData = localStorage.getItem('signupUsers');
    //     if(localData != null) {
    //         this.signupUsers = JSON.parse(localData);
    //     }
    //   return this.signupUsers;
    // }

    // public addSignupUsers(user: User) {
    //     this.signupUsers.push(user);
    //     localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    // }

    // public validateUser(user: User) {
    //     const localData = localStorage.getItem('signupUsers');
    //     if(localData != null) {
    //         this.signupUsers = JSON.parse(localData);
    //     }
    //     const userExist = this.signupUsers?.find(u => u.userName == user.userName && u.password == user.password);
    //     if(userExist!= undefined) {
    //         this.currentUser = user;
    //         return true;
    //     }
    //     else {
    //         this.currentUser = null;
    //         return false;
    //     }
    // }

    // public setCurrentUser(user: User | null) {
    //     this.currentUser = user;
    // }
}
