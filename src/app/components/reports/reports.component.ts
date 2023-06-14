import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Site } from "../../classes/site";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})
export class ReportsComponent implements OnInit {
  site: Site;

  constructor(private router: Router) {
    this.site = new Site();
  }

  ngOnInit(): void { }

  public sitesList: Array<Site> = [
    {
      name: "Directorio",
      imgPath: "../../assets/logoDirectorio.png",
      href: "https://provmicro.azurewebsites.net/paginas/directorio",
      //sectors : []
    },
    {
      name: "Comercial",
      imgPath: "../../assets/logoComercial.png",
      href: "https://provmicro.azurewebsites.net/paginas/comercial",
      //sectors : []
    },
    {
      name: "Tecnología",
      imgPath: "../../assets/logoTecno.png",
      href: "https://provmicro.azurewebsites.net/paginas/tecnologia",
      //sectors : []
    },
    {
      name: "Operaciones",
      imgPath: "../../assets/logoOperaciones.png",
      href: "https://provmicro.azurewebsites.net/paginas/operaciones",
      //sectors : []
    },
    {
      name: "Finanzas",
      imgPath: "../../assets/logoFinanzas.png",
      href: "https://provmicro.azurewebsites.net/paginas/finanzas",
      //sectors : []
    },
    {
      name: "Gestión",
      imgPath: "../../assets/logoGestion.png",
      href: "https://provmicro.azurewebsites.net/paginas/gestion",
      //sectors : []
    },
    {
      name: "Marketing",
      imgPath: "../../assets/logoMarketing.png",
      href: "https://provmicro.azurewebsites.net/paginas/marketing",
      //sectors : []
    },
    {
      name: "Filiales",
      imgPath: "../../assets/logoFiliales.png",
      href: "https://provmicro.azurewebsites.net/paginas/filiales",
      //sectors : []
    },
    {
      name: "Gestión Estrategica",
      imgPath: "../../assets/logoGestionEstrategica.png",
      href: "https://provmicro.azurewebsites.net/paginas/gestionestrategica",
      //sectors : []
    },
    {
      name: "Personas",
      imgPath: "../../assets/logoPersonas.png",
      href: "https://provmicro.azurewebsites.net/paginas/personas",
      //sectors : []
    },
    {
      name: "Riesgo",
      imgPath: "../../assets/logoRiesgo.png",
      href: "https://provmicro.azurewebsites.net/paginas/riesgo",
      //sectors : []
    },
    {
      name: "Segmentos",
      imgPath: "../../assets/logoSegmentos.png",
      href: "https://provmicro.azurewebsites.net/paginas/segmentos",
      //sectors : []
    },
  ];
}