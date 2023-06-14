import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  public getSectorByEmail(email: any): Observable<any> {
    return this.httpClient.get(environment.prome_users_API_user + email);
  }
}
