import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(
    private authService: AuthService,
    private router: Router
              ){

  }
 
  username = sessionStorage.getItem("username");

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("login");
  }
  
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  
  ngOnInit() {
  }


}



