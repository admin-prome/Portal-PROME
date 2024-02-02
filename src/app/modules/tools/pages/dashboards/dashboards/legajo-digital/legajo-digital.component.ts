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
  timestamp: string = '';
  errorResult: boolean = false;
  responseInfoLegajoDigital: boolean = false;
  sizeFileLegajoDigital: number = 0;
  dateFileLegajoDigital: any;
  totalRecords: number = 0;
  loading: boolean = false;
  fileDownloadName: string = '';

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
      this.url = currentUrl;
    });
  }

  getLegajoDigital() {
    this.openSpinner();
    this.timestamp = this.getTimestamp();
    this.serviciosTecno.getLastFileLegajoDigital().subscribe(
      (response) => {          
          this.responseInfoLegajoDigital = true;
          const contentType = response.ContentType;
          if (response.result.contentType === 'text/csv') {

              const byteCharacters = atob(response.result.data);               
              const byteNumbers = new Array(byteCharacters.length);

              for (let i = 0; i < byteCharacters.length; i++) {
                  byteNumbers[i] = byteCharacters.charCodeAt(i);
                }

              const byteArray = new Uint8Array(byteNumbers);              
              const blob = new Blob([byteArray], { type: contentType });
              this.processedFile = blob;        
              this.dateFileLegajoDigital= this.getDateFromFileName(response.result.fileName);
              this.fileDownloadName = response.result.fileName;
             
              this.responseInfoLegajoDigital = true;
              this.errorResult = false;
              this.closeSpinner();             
          }   

          else {
            this.errorResult = true;
              }
          this.closeSpinner();
          },
       
      (error) => {
        this.errorResult = true;
        this.closeSpinner();
        
      }
    );
  }
  

  downloadProcessedFile(): void {
    if (this.processedFile) {
      // Crea un enlace para descargar el archivo
      const a = document.createElement('a');
      const url = URL.createObjectURL(this.processedFile);
      a.href = url;
      a.download = this.fileDownloadName; // Puedes establecer el nombre del archivo aquí
      document.body.appendChild(a);

      // Simula un clic en el enlace para iniciar la descarga
      a.click();

      // Limpia el enlace
      document.body.removeChild(a);

      // Revoca la URL del objeto Blob para liberar recursos
      URL.revokeObjectURL(url);
      
    }
  }

  
  openSpinner() {
    this.loading = true;
  }


  closeSpinner() {
    this.loading = false;
  }

  public getTimestamp(): string {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0'); // Obtener el día con ceros a la izquierda si es necesario
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
    const año = ahora.getFullYear();
    const hora = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const fechaHora = `${año}_${mes}_${dia}-${hora}:${minutos}:${segundos}`;

  return fechaHora;
  }


  getDateFromFileName(nombreArchivo: string): string | null {
   
    const match = nombreArchivo.match(/_(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})\.csv/)
    if (match) {
     
      const [, anio, mes, dia, hora, minutos] = match;
      const fechaFormateada = `${dia}/${mes}/${anio}`;
  
      return fechaFormateada;
    } else {
      return 'No se encontro la fecha';
    }
  }
  

}
