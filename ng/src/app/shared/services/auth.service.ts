import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface LoginModel {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/auth/";

  constructor(private http: HttpClient) { }

  login(model: LoginModel): Observable<void> {
    return this.http.post<LoginResponse>(`${this.authUrl}signin`, model).pipe(
      map((response: LoginResponse) => {
        localStorage.setItem('token', response.accessToken);
      })
    )
  }
}
