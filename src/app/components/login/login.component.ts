import { AfterViewInit, Component } from '@angular/core';
import { Client } from '../../classes/client';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  pathTriangles = "../../assets/triangles.png";
  client: Client;

  constructor() {
    this.client = new Client();
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }
    );
  }

  handleCredentialResponse(response: any) {

    if (response.credential) {
      let base64Url = response.credential.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const responsePayload = JSON.parse(jsonPayload);
      sessionStorage.setItem("username", responsePayload.given_name);
      document.location.href = "home";
    }
  }
}