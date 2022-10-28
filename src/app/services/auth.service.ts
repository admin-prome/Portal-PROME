import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static loggedIn: boolean;

  constructor() {
  }

  login() {
    AuthService.loggedIn = true;
  }

  logout() {
    AuthService.loggedIn = false;
  }

  isAuthenticated() {
    return AuthService.loggedIn;
  }
}
