import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from '../../classes/client';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AuthService implements AfterViewInit {

  pathTriangles = "../../assets/triangles.png";

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response, this.login)
    });
    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }
    );
  }

  handleCredentialResponse(response: any, login : any) {
    console.log("respponse", response);
    console.log("authService", AuthService);
    console.log("login", login);

    if (login.credential) {
      console.log("entro al if");
      console.log("response credential", login.credential);
      let base64Url = login.credential.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const responsePayload = JSON.parse(jsonPayload);
      sessionStorage.setItem("username", responsePayload.name);
      console.log("antes", AuthService);
      response();
      console.log("authService", AuthService);
      // document.location.href = "home";
    }
  }
}