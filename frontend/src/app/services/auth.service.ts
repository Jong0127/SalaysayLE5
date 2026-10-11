import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'https://localhost:7036/api/login/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http.post(API + 'login', { username, password }, { responseType: 'text' });
  }

  register(firstName: string, lastName: string, username: string, password: string): Observable<any> {
    return this.http.post(API + 'register', { firstName, lastName, username, password }, { responseType: 'text' });
  }
}
