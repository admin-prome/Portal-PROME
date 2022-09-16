import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../classes/site';
import { Client } from '../classes/client';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  
  site: Site;
  client: Client;

  constructor(private router: Router) {
    this.site = new Site();
    this.client = new Client();
    
    
  }

  ngOnInit(): void {

  }

  public sitesList: Array<Site> = [
    
    {
      name: "Directorio",
      imgPath: "../../assets/logoDirectorio.png",
      href: "https://provmicro.azurewebsites.net/paginas/directorio"
      
    },
    {
      name: "Operaciones",
      imgPath: "../../assets/logoOperaciones.png",
      href: "https://provmicro.azurewebsites.net/paginas/operaciones"
      
    },
    {
      name: "Riesgo",
      imgPath: "../../assets/logoJira.svg",
      href: "https://provmicro.azurewebsites.net/paginas/riesgo"
      
    },
    {
      name: "Comercial",
      imgPath: "../../assets/logoGo.png",
      href: "https://provmicro.azurewebsites.net/paginas/comercial"
    },
    {
      name: "Tecnología",
      imgPath: "../../assets/logoTecno.png",
      href: "https://provmicro.azurewebsites.net/paginas/tecnologia"
    },
    {
      name: "Finanzas",
      imgPath: "../../assets/logoTuRecibo.png",
      href: "https://provmicro.azurewebsites.net/paginas/finanzas"
    },
    {
      name: "Marketing",
      imgPath: "../../assets/logoRendiciones.png",
      href: "https://provmicro.azurewebsites.net/paginas/marketing"
    },
    {
      name: "Gestión Estrategica",
      imgPath: "../../assets/logoCalipso.png",
      href: "https://provmicro.azurewebsites.net/paginas/gestionestrategica",
      
    },
    {
      name: "Filiales",
      imgPath: "../../assets/logoGP.png",
      href: "https://provmicro.azurewebsites.net/paginas/filiales"
    },
    {
      name: "Gestión",
      imgPath: "../../assets/logoPerfomap.png",
      href: "https://provmicro.azurewebsites.net/paginas/gestion"
    },
    {
      name: "Personas",
      imgPath: "../../assets/logoSan.png",
      href: "https://provmicro.azurewebsites.net/paginas/personas"
    },
    {
      name: "Segmentos",
      imgPath: "../../assets/logoColorPSmall.png",
      href: "https://provmicro.azurewebsites.net/paginas/segmentos"
    }
    
  ]


}

