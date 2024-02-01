import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosTecnoService {


  


  private urlApi = environment.serviciosTecnoUrl;
  public loading = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  
  public getLastInfoLegajoDigital(): Observable<any> {
    
  
    const headers = new HttpHeaders({
      'Authorization': environment.tecnoKey
    });
    
      //headers.append('Content-Type', 'multipart/form-data');
    
      return this.http.get<any>(this.urlApi + 'portal-prome/legajo-digital/last-date', {headers: headers});

  }
  

  public getLastFileLegajoDigital(): Observable<any> {
    
  
    const headers = new HttpHeaders({
      'Authorization': environment.tecnoKey
    });
    
    // headers.append('Content-Type', 'multipart/form-data');
    return this.http.get<any>(this.urlApi + 'LegajoDigital', {headers: headers});

  }
}
