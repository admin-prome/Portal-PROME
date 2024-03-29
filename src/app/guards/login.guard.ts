import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!Boolean(this.authService.isAuthenticated())) {
      return this.router.parseUrl("login");
    }
    return Boolean(this.authService.isAuthenticated());


    // if (AuthService.isAuthenticated()) {
    //   return true;
    // }
    // else {
    //   this._router.navigateByUrl('login');
    //   return false;
    // }
  }
}
