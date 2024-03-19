import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { Site } from "../../classes/site";
// import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';
// import {
//   CdkDrag,
//   CdkDragStart,
//   CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter,
//   moveItemInArray
// } from "@angular/cdk/drag-drop";
// import { ViewportRuler } from "@angular/cdk/overlay";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit{
  site: Site;
  username = sessionStorage.getItem("username");
  sector = sessionStorage.getItem("sector");

  // @ViewChild(CdkDropListGroup)
  // listGroup!: CdkDropListGroup<CdkDropList>;
  // @ViewChild(CdkDropList)
  // placeholder!: CdkDropList;

  // public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // public target: CdkDropList | undefined;
  // public targetIndex: number;
  // public source: CdkDropList | undefined;
  // public sourceIndex: number;
  // public dragIndex: number;
  // public activeContainer: any;


  constructor(private router: Router, private authService: AuthService) //private viewportRuler: ViewportRuler
  {
    this.site = new Site();
    // this.target = null;
    // this.targetIndex = 0;
    // // this.source = null;
    // this.sourceIndex = 0;
    // this.dragIndex = 0;
  }

  public sitesList: Array<Site> = [
    {
      name: "Outlook",
      imgPath: "../../assets/logoOutlook.png",
      href: "https://outlook.office.com/mail/",
      //sectors: ["Tecnología", "Desarrolo De Sistemas"],
      target:"_blank"
    },
    {
      name: "Teams",
      imgPath: "../../assets/logoTeams.png",
      href: "https://teams.microsoft.com/v2/",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "SharePoint",
      imgPath: "../../assets/logoSharePoint.png",
      href: "https://provinciamicroempresas.sharepoint.com/_layouts/15/sharepoint.aspx",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Planner",
      imgPath: "../../assets/logoPlanner.png",
      href: "https://tasks.office.com/prome.ar/es-ES/Home/Planner/",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Gestor de Requerimientos",
      imgPath: "../../assets/logoGestorReq.png",
      href: "https://requerimientos.prome.ar",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Legajo Digital",
      imgPath: "../../assets/legajoDigital.png",
      href: "../herramientas/tableros/legajo-digital",
      //sectors: [], 
      target:"_self"
    },    
    {
      name: "Go!",
      imgPath: "../../assets/logoGo.png",
      href: "https://promesa.gointegro.com/gosocial/company/stream",
      
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Visma",
      imgPath: "../../assets/logoVisma.png",
      href: "https://payroll.vismalatam.com/rhprox2/newhome/selfservice.aspx?idp=provinciamicroempresas&tenant=provinciamicroempresas",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Tu Recibo",
      imgPath: "../../assets/logoTuRecibo.png",
      href: "https://promesa.turecibo.com/e/login",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Cronopagos Vigentes",
      imgPath: "../../assets/logoCronopagos.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/r/sites/Procesos1/Documentos%20compartidos/Procesos%20Prome/Cronopagos%20Vigentes?csf=1&web=1&e=aH0SoR",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Documentos y Formularios BPBA",
      imgPath: "../../assets/logoDocumentoYFormulariosBPBA.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/r/sites/Procesos1/Documentos%20compartidos/Procesos%20Prome/Documentos%20y%20Formularios%20BPBA?csf=1&web=1&e=gFiU2y",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Documentos y Normativas",
      imgPath: "../../assets/logoDocumentoYNormativas.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/r/sites/Procesos1/Documentos%20compartidos/Procesos%20Prome/Documentos%20y%20Normativas?csf=1&web=1&e=5mQvco",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Formularios Prome",
      imgPath: "../../assets/logoFormulariosProme.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/r/sites/Procesos1/Documentos%20compartidos/Procesos%20Prome/Formularios%20Prome?csf=1&web=1&e=YIlULJ",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Rendiciones",
      imgPath: "../../assets/logoRendiciones.png",
      href: "http://rendicion.provinciamicroempresas.com/",
      //sectors: [], 
      target:"_blank"
    },
   
    {
      name: "SAN Responde",
      imgPath: "../../assets/logoSan.png",
      href: "https://sites.google.com/provinciamicrocreditos.com/sanresponde/inicio",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "CRM",
      imgPath: "../../assets/logoCRM.png",
      href: "https://365.provinciamicroempresas.com",
      //sectors: [], 
      target:"_blank"
    },   
    {
      name: "Campus Virtual",
      imgPath: "../../assets/logoCampus.png",
      href: "https://campus.provinciamicrocreditos.com",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Comunidad Prome",
      imgPath: "../../assets/logoComunidadPromeVertical.png",
      href: "https://www.provinciamicrocreditos.com.ar/comunidad/comunidad-prome/",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Guia PROME",
      imgPath: "../../assets/logoGP.png",
      href: "https://guia.provinciamicrocreditos.com/",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Perfomap",
      imgPath: "../../assets/logoPerfomap.png",
      href: "https://provinciamicrocreditos.perfomap.com/",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Canal Cumplimiento",
      imgPath: "../../assets/logoComplianceColor.png",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeepIYko2o1N0TE-U7qu3cBse7F09CY1TqhGv3UTVE-mrIJLg/viewform",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Calipso",
      imgPath: "../../assets/logoCalipso.png",
      href: "https://baproprod.calipso.work/loginServlet",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Jira",
      imgPath: "../../assets/logoJira.png",
      href: "https://provinciamicroempresas.atlassian.net/jira/your-work",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Reportes",
      imgPath: "../../assets/logoBI.png",
      href: "../reports",
      //sectors: [], 
      target:"_self"
    }, 
    {
      name: "Banco Provincia",
      imgPath: "../../assets/logo200BP.png",
      href: "https://www.bancoprovincia.com.ar/home",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Provincia Microcréditos",
      imgPath: "../../assets/logoColorPSmall.png",
      href: "https://www.provinciamicrocreditos.com.ar/",
      //sectors: [], 
      target:"_blank"
    },
    
   
  ];

  ngOnInit() {
    // this.loadSitesBySector();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("login");
  }

  // loadSitesBySector() {
  //   let auxSitesList = this.sitesList;
  //   // console.log("sitesList: " + this.sitesList);
  //   // console.log("auxSitesList: " + auxSitesList);

  //   for (let i = 0; i < this.sitesList.length; i++) {

  //     let sectors = this.sitesList[i].sectors;
  //     // console.log("sectors: " + sectors);

  //     if (sectors.includes(this.sector!)) {
  //       //console.log(this.sector + " included in " + sectors);
  //       // console.log("el sitio: " + this.sitesList[i]);
  //       // auxSitesList.push(this.sitesList[i]);
  //     }
  //     else {
  //       //console.log(this.sector + " not included in " + sectors);
  //     }
  //   }
  //   //console.log("auxSiteList: " + auxSitesList);
  // }
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





//   ngAfterViewInit() {
//     let phElement = this.placeholder.element.nativeElement;

//     phElement.style.display = 'none';
//     phElement.parentElement?.removeChild(phElement);
//   }

//   dragMoved(e: CdkDragMove) {
//     let point = this.getPointerPositionOnPage(e.event);

//     this.listGroup._items.forEach(dropList => {
//       if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
//         this.activeContainer = dropList;
//         return;
//       }
//     });
//   }

//   dropListDropped(event  : any) {
//     if (!this.target)
//       return;

//     let phElement = this.placeholder.element.nativeElement;
//     let parent = phElement.parentElement;

//     phElement.style.display = 'none';

//     parent?.removeChild(phElement);
//     parent?.appendChild(phElement);
//     parent?.insertBefore(this.source!.element.nativeElement, parent.children[this.sourceIndex]);

//     // this.target = null;
//     // this.source = null;

//     if (this.sourceIndex != this.targetIndex)
//       moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
//   }

//   dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
//     if (drop == this.placeholder)
//       return true;

//     if (drop != this.activeContainer)
//       return false;

//     let phElement = this.placeholder.element.nativeElement;
//     let sourceElement = drag.dropContainer.element.nativeElement;
//     let dropElement = drop.element.nativeElement;

//     let dragIndex = __indexOf(dropElement.parentElement!.children, (this.source ? phElement : sourceElement));
//     let dropIndex = __indexOf(dropElement.parentElement!.children, dropElement);

//     if (!this.source) {
//       this.sourceIndex = dragIndex;
//       this.source = drag.dropContainer;

//       phElement.style.width = sourceElement.clientWidth + 'px';
//       phElement.style.height = sourceElement.clientHeight + 'px';

//       sourceElement.parentElement!.removeChild(sourceElement);
//     }

//     this.targetIndex = dropIndex;
//     this.target = drop;

//     phElement.style.display = '';
//     dropElement.parentElement!.insertBefore(phElement, (dropIndex > dragIndex
//       ? dropElement.nextSibling : dropElement));

//     // new this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
//     return false;
//   }

//   /** Determines the point of the page that was touched by the user. */
//   getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
//     // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
//     const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
//     const scrollPosition = this.viewportRuler.getViewportScrollPosition();

//     return {
//       x: point.pageX - scrollPosition.left,
//       y: point.pageY - scrollPosition.top
//     };
//   }
// }


// function __indexOf(collection: HTMLCollection, node: HTMLElement) {
//   return Array.prototype.indexOf.call(collection, node);
// };

// /** Determines whether an event is a touch event. */
// function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
//   return event.type.startsWith('touch');
// }

// function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
//   const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
//   return y >= top && y <= bottom && x >= left && x <= right;
// }