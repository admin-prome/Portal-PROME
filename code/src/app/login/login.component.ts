import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../classes/site';
import { Client } from '../classes/client';
import { CookieService } from 'ngx-cookie-service';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  site: Site;
  client: Client;
  pathTriangles = "../../assets/triangles.png";
  access_token: any;
  cookies: any;

  constructor(private router: Router,
    public cookieService: CookieService) {

    this.site = new Site();
    this.client = new Client();
    this.cookies = cookieService;
  }

  ngOnInit(): void {
    this.login();
    this.router.navigate(['home']);
  }

  login(): any {

    const googleClient = google.accounts.oauth2.initTokenClient({
      client_id: '204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      auto_select: true,
      callback: (response: { access_token: null; }) => {
        this.access_token = response.access_token;
        console.log("access token: ", this.access_token);
      },
    });

    console.log("google client", googleClient);

    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response, this.cookies),
      auto_select: true
    });

    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "medium", type: "standard", shape: "pill" }
    )
  }

  handleCredentialResponse(cookiesService: any, response: any): any {
    var client = new Client();

    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const responsePayload = JSON.parse(jsonPayload);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    client.id = responsePayload.sub;
    client.name = responsePayload.name;

    console.log("id del cliente: ", client.id);
    console.log("nombre del cliente: ", client.name);

    cookiesService.set('client-id', client.id);
  }
}