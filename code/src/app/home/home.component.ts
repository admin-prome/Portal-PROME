import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../classes/site';
import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  site: Site;

  constructor(private router: Router) {
    this.site = new Site();
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
  }

  @ViewChild('dropListContainer') dropListContainer?: ElementRef;


  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };
    console.log('dragEntered', { dragIndex, dropIndex });

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement?.insertBefore(phElement, phContainer);

      moveItemInArray(this.sitesList, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement?.nextElementSibling
        : placeholderElement?.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
  }
}