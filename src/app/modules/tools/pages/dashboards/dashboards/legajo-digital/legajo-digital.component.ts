import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServiciosTecnoService } from 'src/app/services/servicios-tecno.service';

@Component({
  selector: 'app-legajo-digital',
  templateUrl: './legajo-digital.component.html',
  styleUrls: ['./legajo-digital.component.css']
})
export class LegajoDigitalComponent {
  processedFile: any = '';
  timestamp: any;

  responseInfoLegajoDigital: boolean = false;
  sizeFileLegajoDigital: number = 0;
  dateFileLegajoDigital: string = '';
  totalRecords: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private serviciosTecno: ServiciosTecnoService) { }

  url: string = '';

  ngOnInit(): void {
    // Obtener la ruta completa
    this.route.url.pipe(
      map(segments => segments.map(segment => segment.path))
    ).subscribe(segments => {
      // segments es un array de segmentos de ruta
      const currentUrl = segments.join('/');
      console.log('Ruta completa:', currentUrl);
      this.url = currentUrl;
    });
  }

  getLastInfoLegajoDigital(){
   

    this.serviciosTecno.getLastInfoLegajoDigital().subscribe(
      (response) => {
        console.log('consultando ultima fecha');
        this.sizeFileLegajoDigital = 10;
        this.dateFileLegajoDigital= '17-12-23';
        this.totalRecords = 560;
        this.responseInfoLegajoDigital = true;
        
      },
      (error) => {
        console.log('Ocurrio un error al consultar ultima fecha legajo ', error);
        this.responseInfoLegajoDigital = true;
      }
    );

    this.responseInfoLegajoDigital = true;
    this.sizeFileLegajoDigital = 10;
    this.dateFileLegajoDigital= '17-12-23';
    this.totalRecords = 560;
    this.responseInfoLegajoDigital = true;
  }

  getLegajoDigital() {
    console.log('Obteniendo legajo digital')
    this.serviciosTecno.getLastFileLegajoDigital().subscribe(
      (response) => {          
          const contentType = response.ContentType;
          if (response.result.contentType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {

              const byteCharacters = atob(response.result.data);               
              const byteNumbers = new Array(byteCharacters.length);

              for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i);
                }

              const byteArray = new Uint8Array(byteNumbers);              
              const blob = new Blob([byteArray], { type: contentType });
              this.processedFile = blob;
              //this.displaySnackbar('Su consulta fue resuelta con EXITO');              
          }   

          else {
                  //this.displaySnackbar('La respuesta del servidor no es un archivo XLSX válido.');
              }
          this.closeSpinner();
          },
       
      (error) => {
       
        console.log('Ocurrio un error: ', error);
        this.closeSpinner();
        
      }
    );
  }
  
  openSpinner() {
    throw new Error('Method not implemented.');
  }


  closeSpinner() {
    throw new Error('Method not implemented.');
  }

}
