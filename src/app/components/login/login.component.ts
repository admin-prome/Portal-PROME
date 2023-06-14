import { AfterViewInit, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  pathTriangles = "../../assets/triangles.png";
  _userService: UserService;

  constructor(private userService: UserService) {
    this._userService = userService;
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: environment.client_id,
      callback: this.handleCredentialResponse.bind(Response, this._userService)
    });
    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }
    );
  }

  handleCredentialResponse(userService: UserService, response: any) {

    if (response.credential) {
      let base64Url = response.credential.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      const responsePayload = JSON.parse(jsonPayload);
      sessionStorage.setItem("username", responsePayload.given_name);
      // sessionStorage.setItem("email", responsePayload.email);
      document.location.href = "home";

      // userService.getSectorByEmail(sessionStorage.getItem("email")).subscribe(response => {
      //   if (response.code == '200') {
      //     sessionStorage.setItem("sector", response.result);
      //     document.location.href = "home";
      //   }
      // }, error => console.error("error: ", error.message))
    }
  }
}