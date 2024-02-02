import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
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

  public getLastFileLegajoDigital(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': environment.tecnoKey
    });

    const timeoutDuration = 60000; 

    return this.http.get<any>(this.urlApi + 'LegajoDigital', { headers })
      .pipe(
        timeout(timeoutDuration),
        catchError(error => {
          if (error.name === 'TimeoutError') {
            // Manejar el error de timeout aquí
            console.error('La solicitud ha excedido el tiempo límite.');
          } else {
            // Otro manejo de errores aquí
            console.error('Error en la solicitud:', error);
          }
          // Devolver un observable con el error
          return throwError('Error en la solicitud.');
        })
      );
  }
}
