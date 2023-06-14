import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../classes/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Site[]> {
    return this.http.get<Site[]>('https://localhost:44353/api/prestamos');
  }
}
