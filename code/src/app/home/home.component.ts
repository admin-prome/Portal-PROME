import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Site } from "../classes/site";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  site: Site;

  constructor(private router: Router) {
    this.site = new Site();
  }

  ngOnInit(): void { }

  public sitesList: Array<Site> = [
    {
      name: "Gmail",
      imgPath: "../../assets/logoGmail.png",
      href: "http://www.gmail.com",
    },
    {
      name: "Calendario",
      imgPath: "../../assets/logoGoogleCalendar.png",
      href: "https://calendar.google.com/calendar/u/0/r?tab=mc",
    },
    {
      name: "Google Meet",
      imgPath: "../../assets/logoMeet.png",
      href: "https://meet.google.com/",
    },
    {
      name: "Google Chat",
      imgPath: "../../assets/logoChat.png",
      href: "https://mail.google.com/chat/u/0/#chat/welcome",
    },
    {
      name: "Google Drive",
      imgPath: "../../assets/logoDrive.png",
      href: "https://drive.google.com/drive/my-drive",
    },
    {
      name: "Jira",
      imgPath: "../../assets/logoJira.svg",
      href: "https://provinciamicroempresas.atlassian.net/jira/your-work",
    },
    {
      name: "Go!",
      imgPath: "../../assets/logoGo.png",
      href: "https://promesa.gointegro.com/gosocial/company/stream",
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
      href: "http://rendicion.provinciamicroempresas.com/",
    },
    {
      name: "Calipso",
      imgPath: "../../assets/logoCalipso.png",
      href: "https://baproprod.calipso.work/loginServlet",
    },
    {
      name: "SAN Responde",
      imgPath: "../../assets/logoSan.png",
      href: "https://sites.google.com/provinciamicrocreditos.com/sanresponde/inicio",
    },
    {
      name: "CRM",
      imgPath: "../../assets/logoCRM.png",
      href: "https://365.provinciamicroempresas.com",
    },
    {
      name: "Reportes",
      imgPath: "../../assets/logoBI.png",
      href: "../reports",
    },
    {
      name: "Banco Provincia",
      imgPath: "../../assets/logo200BP.svg",
      href: "https://www.bancoprovincia.com.ar/home",
    },
    {
      name: "Provincia Microcréditos",
      imgPath: "../../assets/logoColorPSmall.png",
      href: "https://365.provinciamicroempresas.com",
    },
    {
      name: "Campus Virtual",
      imgPath: "../../assets/logoCampus.png",
      href: "https://campus.provinciamicrocreditos.com",
    },
    {
      name: "Promesa Rec",
      imgPath: "../../assets/logoDescuentos.png",
      href: "https://promesa-rec.gointegro.com",
    },
    {
      name: "Guia PROME",
      imgPath: "../../assets/logoGP.png",
      href: "https://guia.provinciamicrocreditos.com/",
    },
    {
      name: "Perfomap",
      imgPath: "../../assets/logoPerfomap.png",
      href: "https://provinciamicrocreditos.perfomap.com/",
    },
  ];
}