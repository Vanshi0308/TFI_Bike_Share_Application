// import { inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { filter, map } from 'rxjs';
// import { UsersService } from './services/users.service';

// export const authGuard = () => {
//   const userService = inject(UsersService);
//   const router = inject(Router);

//   return userService.isUserLoggedIn.pipe(
//     filter((isUserLoggedIn) => isUserLoggedIn !== undefined),
//     map((currentUser) => {
//       if (!currentUser) {
//         router.navigateByUrl('/');
//         return false;
//       }
//       return true;
//     }),
//   );
// };

import { CanActivate, Router} from '@angular/router';
import { UsersService } from './services/users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UsersService, private router: Router){};
  canActivate(): boolean {
    if (this.userService.isUserLoggedIn) {
      return true
    } 
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}