import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from '../../../../environment/environment.dev';
import { loginUser } from '../interfaces/auth.interface';
import { AuthResponse, IHttpResponse } from '../../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly baseUrl = environments.api.baseUrl;
  private readonly authPath = environments.auth.loginUrl;

  login(user: loginUser): Observable<IHttpResponse<AuthResponse>> {
    const url = `${this.baseUrl}${this.authPath}`
    return this.http.post<IHttpResponse<AuthResponse>>(url, user).pipe(
      tap(response => {
        if (response?.data) {
          this.saveSession(response.data)
        }
      })
    )
  }

  private saveSession(data: AuthResponse): void {
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('first_login', String(data.first_login));
    localStorage.setItem('user', JSON.stringify(data.user))
  }


  get currentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
}
