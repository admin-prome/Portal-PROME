import { Component } from '@angular/core';
import { Site } from 'src/app/classes/site';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {


  public sitesList: Array<Site> = [
   
    {
      name: "Cronopagos Vigentes",
      imgPath: "../../assets/logoCronopagos.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/s/Procesos1/Euz2uYKi9exNqHdBjVNUvzcBfSAruuzWupW338bCRp0r3A?e=osuvMa",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Documentos y Formularios BPBA",
      imgPath: "../../assets/logoDocumentoYFormulariosBPBA.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/s/Procesos1/EsZIFfHeXF1Jrd7S-hjmAIABSKvuavE20oHXW_Y7RapLnQ?e=p23c1e",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Documentos y Normativas",
      imgPath: "../../assets/logoDocumentoYNormativas.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/s/Procesos1/EhvpQj9zGAlFrkhC1hCQJmYBHxIa09yFwHOonKaLHgMt9g?e=GT7ed5",
      //sectors: [], 
      target:"_blank"
    },
    {
      name: "Formularios Prome",
      imgPath: "../../assets/logoFormulariosProme.png",
      href: "https://provinciamicroempresas.sharepoint.com/:f:/s/Procesos1/EgQbj1e7-ZhMvmjEiJNSF7MBGEA2HABXB0q6PRs-tSw47g?e=3dNbu0",
      //sectors: [], 
      target:"_blank"
    },
   
  ];

  
}
