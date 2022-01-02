import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authentication: boolean = false;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if (user.username === 'teste@email.com' &&
        user.password === 'teste12345') {
      
      this.authentication = true;

      this.showMenuEmmiter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.authentication = false;

      this.showMenuEmmiter.emit(false);
    }
  }

  isUserAuthenticated() {
    return this.authentication;
  }
}
