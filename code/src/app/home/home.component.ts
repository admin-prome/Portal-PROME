import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../classes/site';
import { Client } from '../classes/client';
import { CookieService } from 'ngx-cookie-service';
import { ReportesComponent } from '../reportes/reportes.component';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  site: Site;
  client: Client;

  constructor(private router: Router, public cookieService: CookieService) {
    this.site = new Site();
    this.client = new Client();
    
    console.log("cookies del home: ", cookieService.get('client-id'));
    var cookie = cookieService.get('client-id');

    // if(cookie == ""){
    //   this.router.navigateByUrl("login");
    //   console.log("cookie vacía, redireccionando a login...");
    // }
    // else
    // {
    //   this.router.navigateByUrl("home");
    // }
  }

  ngOnInit(): void {

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
      href: "https://payroll.vismalatam.com/rhprox2/newhome/selfservice.aspx?idp=provinciamicroempresas&tenant=provinciamicroempresas",
      
    },
    {
      name: "Tu Recibo",
      imgPath: "../../assets/logoTuRecibo.png",
      href: "https://promesa.turecibo.com/e/login",
      
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
      href: "../reportes"
    },
    {
      name: "Banco Provincia",
      imgPath: "../../assets/logoColorPSmall.png",
      href: "https://www.bancoprovincia.com.ar/home"
    },
    {
      name: "Provincia Microcréditos",
      imgPath: "../../assets/logoColorPSmall.png",
      href: "https://365.provinciamicroempresas.com"
    },
    {
      name: "CRM",
      imgPath: "../../assets/logoCRM.png",
      href: "https://365.provinciamicroempresas.com"
    },
    {
      name: "Campus Virtual",
      imgPath: "../../assets/logoCampus.png",
      href: "https://campus.provinciamicrocreditos.com"
    },
    {
      name: "Promesa Rec",
      imgPath: "../../assets/logoDescuentos.png",
      href: "https://promesa-rec.gointegro.com"
    },
    {
      name: "Google Meet",
      imgPath: "../../assets/logoMeet.png",
      href: "https://promesa-rec.gointegro.com"
    },
    {
      name: "Google Chat",
      imgPath: "../../assets/logoChat.png",
      href: "https://promesa-rec.gointegro.com"
    },
    {
      name: "Google Drive",
      imgPath: "../../assets/logoDrive.png",
      href: "https://promesa-rec.gointegro.com"
    },
    
    
  ]

  logout() {
    google.accounts.id.disableAutoSelect();
    this.cookieService.delete('client-id');
    console.log("cookie eliminada");
    this.router.navigateByUrl("login");
  }
}
