import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pathTriangles = "../../assets/triangles.png";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response)
    })

    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }  // customization attributes
    );
   
    // google.accounts.id.disableAutoSelect();
    this.router.navigate(['home']);
  }

  handleCredentialResponse(response: any) {
    //received idToken
    console.log(response.credential);
    localStorage.setItem("token", response.credential);

    //decoding the idToken to an object to see the details
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(JSON.parse(jsonPayload));
  }
}
