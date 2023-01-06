import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated() {
    return sessionStorage.getItem("username");
  }

  logout() {
    return sessionStorage.setItem("username", '');
    // return localStorage.removeItem('username');
  }

}
