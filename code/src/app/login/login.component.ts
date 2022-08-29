import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientService } from '../services/client.service';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  pathTriangles = "../../assets/triangles.png";
  access_token : any;
  client: Client;

  constructor(private router: Router, private clientService: ClientService) {
    this.client = new Client();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const googleClient = google.accounts.oauth2.initTokenClient({
      client_id: '204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      callback: (response: { access_token: null; }) => {
        this.access_token = response.access_token;
        console.log("access token: ", this.access_token);
      },
    });
    console.log("google client", googleClient);

    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response)
    });

    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }
    );

    // this.router.navigate(['home']);

    // this.client = google.accounts.oauth2.initTokenClient({
    //   client_id: '204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com',
    //   callback: (response: { access_token: null; }) => {
    //     this.access_token = response.access_token;
    //   },
    // });

    // const client = google.accounts.oauth2.initTokenClient({
    //   client_id: '204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com',
    //   scope: 'https://www.googleapis.com/auth/calendar.readonly',
    //   callback: () => {
    //     console.log("hola");
    //   },
    // });

    // console.log("client", client);
  }

  handleCredentialResponse(response: any) : any {
    var client = new Client();


    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    const responsePayload = JSON.parse(jsonPayload);

    console.log("ID responsePayload: " + responsePayload.sub);
    console.log('Full Name responsePayload: ' + responsePayload.name);
    console.log('Given Name responsePayload: ' + responsePayload.given_name);
    console.log('Family Name responsePayload: ' + responsePayload.family_name);
    console.log("Image URL responsePayload: " + responsePayload.picture);
    console.log("Email responsePayload: " + responsePayload.email);

    
    console.log("id de client: ", client.id);
    // return client;

    // this.client.id = responsePayload.sub;
    // this.client.name = responsePayload.name;

    // console.log("id del cliente: ", this.client.id);
    // console.log("nombre del cliente: ", this.client.name);

    // if (responsePayload != undefined)
    // {
    //   // this.router.navigateByUrl("login");
    //   // this.router.navigate(['login']);
    // }

    //Do what you wish with the received idToken
    // console.log(response.credential);
    // localStorage.setItem("token", response.credential);
    // sessionStorage.setItem("token", response.credential);

    // This next is for decoding the idToken to an object if you want to see the details.
    // let base64Url = response.credential.split('.')[1];
    // let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    //   return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    // }).join(''));
    // this.h = JSON.parse(jsonPayload);
    // console.log("lindo: ", JSON.parse(jsonPayload));
    // // this.client = JSON.parse(jsonPayload);
    // // console.log(this.client.id);
    // // this.client.requestAccessToken();
    // console.log("jti: ", this.h.jti);
    // return this.h.jti;
    // // return this.h; 
  }

  onSignout() {
    google.accounts.id.disableAutoSelect();
  }

  // decodeJwtResponse(response: any) {
  //   let base64Url = response.credential.split('.')[1];
  //   let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
  //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //   }).join(''));
  //   return JSON.parse(jsonPayload);
  // }

  // logout() {
  //   console.log("jti del logout: ", this.h.jti);
  //   // google.accounts.oauth2.revoke(this.h.jti, () => { console.log('access token revoked') });
  // }

    // public callMe(): any {
    
  //   // console.log(this.login.connectGoogle().googleClient.callback);
  //   console.log(this.login.handleCredentialResponse(this.login.connectGoogle().google));
  // }
  
}
