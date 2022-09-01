import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../classes/site';
import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';
import { Client } from '../classes/client';
import { CookieService } from 'ngx-cookie-service';
// import { GoogleApiService, GoogleAuthService } from 'ng-gapi';

declare var google: any;
// declare var gapi: GoogleApiService;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  site: Site;
  client: Client;
  access_token: any;
  pathTriangles = "../../assets/triangles.png";

  constructor(private router: Router, private cookieService: CookieService) {
    this.site = new Site();
    this.client = new Client();
    // this.cookieService.set('client-id', this.client.id);
    // console.log("cookie: ", this.cookieService.get('client-id'));
  }

  public sitesList: Array<Site> = [
    {
      name: "Gmail",
      imgPath: "../../assets/logoGmail.png",
      href: "http://www.gmail.com"
    },
    {
      name: "Calendario",
      imgPath: "../../assets/logoGoogleCalendar.png",
      href: "https://calendar.google.com/calendar/u/0/r?tab=mc"
    },
    {
      name: "Jira",
      imgPath: "../../assets/logoJira.svg",
      href: "https://provinciamicroempresas.atlassian.net/jira/your-work"
    },
    {
      name: "Go!",
      imgPath: "../../assets/logoGo.png",
      href: "https://promesa.gointegro.com/gosocial/company/stream"
    },
    {
      name: "Visma",
      imgPath: "../../assets/logoVisma.png",
      href: "https://payroll.vismalatam.com/rhprox2/newhome/selfservice.aspx?idp=provinciamicroempresas&tenant=provinciamicroempresas"
    },
    {
      name: "Tu Recibo",
      imgPath: "../../assets/logoTuRecibo.png",
      href: "https://promesa.turecibo.com/e/login"
    },
    {
      name: "Rendiciones",
      imgPath: "../../assets/logoRendiciones.png",
      href: "http://rendicion.provinciamicroempresas.com/"
    },
    {
      name: "Calipso",
      imgPath: "../../assets/logoCalipso.png",
      href: "https://baproprod.calipso.work/loginServlet"
    },
    {
      name: "Guia PROME",
      imgPath: "../../assets/logoGP.png",
      href: "https://guia.provinciamicrocreditos.com/"
    },
    {
      name: "Perfomap",
      imgPath: "../../assets/logoPerfomap.png",
      href: "https://provinciamicrocreditos.perfomap.com/"
    },
    {
      name: "SAN Responde",
      imgPath: "../../assets/logoSan.png",
      href: "https://sites.google.com/provinciamicrocreditos.com/sanresponde/inicio"
    },
    {
      name: "Reportes",
      imgPath: "../../assets/logoBI.png",
      href: "https://provmicro.azurewebsites.net/paginas/tecnologia/"
    },
    {
      name: "Banco Provincia",
      imgPath: "../../assets/logoColorP.png",
      href: "https://www.bancoprovincia.com.ar/home"
    },
    {
      name: "CRM",
      imgPath: "../../assets/logoCRM.png",
      href: "https://365.provinciamicroempresas.com"
    }
  ]

  ngOnInit(): void {

    HomeComponent.hideHome();
    this.login();
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

    // console.log("google client", googleClient);
    // google.accounts.id.storeCredential(Response, googleClient);
    // console.log("store credential: ", googleClient);

    google.accounts.id.initialize({
      client_id: "204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(Response),
      auto_select: true
    });

    google.accounts.id.renderButton(
      document.getElementById("login-btn"),
      { size: "large", type: "standard", shape: "pill" }
    );
  }

  handleCredentialResponse(response: any): any {
    var client = new Client();
    let logged = false;

    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const responsePayload = JSON.parse(jsonPayload);

    // var profile = gapi.auth2.authorize;
    // console.log(profile);
    console.log("ID responsePayload: " + responsePayload.sub);
    console.log('Full Name responsePayload: ' + responsePayload.name);
    console.log('Given Name responsePayload: ' + responsePayload.given_name);
    console.log('Family Name responsePayload: ' + responsePayload.family_name);
    console.log("Image URL responsePayload: " + responsePayload.picture);
    console.log("Email responsePayload: " + responsePayload.email);

    client.id = responsePayload.sub;
    client.name = responsePayload.name;

    console.log("id del cliente: ", client.id);
    console.log("nombre del cliente: ", client.name);

    // this.cookieService.set('client-id', this.client.id);
    // console.log("coooookie: ", this.cookieService.get('client-id'));

    logged = true;

    if (logged) {
      HomeComponent.showHome();
      HomeComponent.hideLogin();
    }
  }



  // init() {
  //   gapi.load('auth2', function () {
  //     /* Ready. Make a call to gapi.auth2.init or some other API */
  //     gapi.auth2.init({
  //       client_id: '204765225602-rj2pblpnnn9kr7iqm6phgbjoke9ut8qc.apps.googleusercontent.com'
  //     });

  //   });

  // let logueado = gapi.auth2.GoogleAuth.isSignedIn.get()
  // console.log("logueado: ", logueado);
  // }

  static hideHome() {
    const home = document.getElementById('home');
    if (home != null) {
      home.style.display = 'none';
    }
  }

  static showHome() {
    const home = document.getElementById('home');
    if (home != null) {
      home.style.display = 'block';
    }
  }

  static hideLogin() {
    const login = document.getElementById('login');
    if (login != null) {
      login.style.display = 'none';
    }
  }

  static showLogin() {
    const login = document.getElementById('login');
    if (login != null) {
      login.style.display = 'flex';
    }
  }

  logout() {
    google.accounts.id.disableAutoSelect();
    console.log("logout ok");
    HomeComponent.hideHome();
    HomeComponent.showLogin();
  }












  // @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  // dropListReceiverElement?: HTMLElement;
  // dragDropInfo?: {
  //   dragIndex: number;
  //   dropIndex: number;
  // };

  // dragEntered(event: CdkDragEnter<number>) {
  //   const drag = event.item;
  //   const dropList = event.container;
  //   const dragIndex = drag.data;
  //   const dropIndex = dropList.data;

  //   this.dragDropInfo = { dragIndex, dropIndex };
  //   console.log('dragEntered', { dragIndex, dropIndex });

  //   const phContainer = dropList.element.nativeElement;
  //   const phElement = phContainer.querySelector('.cdk-drag-placeholder');

  //   if (phElement) {
  //     phContainer.removeChild(phElement);
  //     phContainer.parentElement?.insertBefore(phElement, phContainer);

  //     moveItemInArray(this.sitesList, dragIndex, dropIndex);
  //   }
  // }

  // dragMoved(event: CdkDragMove<number>) {
  //   if (!this.dropListContainer || !this.dragDropInfo) return;

  //   const placeholderElement =
  //     this.dropListContainer.nativeElement.querySelector(
  //       '.cdk-drag-placeholder'
  //     );

  //   const receiverElement =
  //     this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
  //       ? placeholderElement?.nextElementSibling
  //       : placeholderElement?.previousElementSibling;

  //   if (!receiverElement) {
  //     return;
  //   }

  //   receiverElement.style.display = 'none';
  //   this.dropListReceiverElement = receiverElement;
  // }

  // dragDropped(event: CdkDragDrop<number>) {
  //   if (!this.dropListReceiverElement) {
  //     return;
  //   }

  //   this.dropListReceiverElement.style.removeProperty('display');
  //   this.dropListReceiverElement = undefined;
  //   this.dragDropInfo = undefined;
  // }
}