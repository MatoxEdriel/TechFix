import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from '../../../../environment/environment.dev';
import { loginUser } from '../interfaces/auth.interface';
import { AuthResponse, IHttpResponse } from '../../../interfaces/response.interface';
import { STORAGE_KEYS } from '../../../core/constants/storage.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);


  private readonly baseUrl = environments.api.baseUrl;
  private readonly authPath = environments.auth.loginUrl;

  login(user: loginUser): Observable<IHttpResponse<AuthResponse>> {
    const url = `${this.baseUrl}${this.authPath}`
    return this.http.post<IHttpResponse<AuthResponse>>(url, user).pipe(

      tap(response => {
        if (response.data) {
          this.saveSession(response.data)
        }
      })
    )
  }

  //Cambio de contraseña con reemplazo de token 

  updatePassword(newPassword: string) {
    const url = `${this.baseUrl}/auth/change-password`

    const body = { pass: newPassword };

    return this.http.patch<AuthResponse>(url, body).pipe(
      tap(response => {
        this.saveSession(response)
      })
    )
  }

  private saveSession(data: AuthResponse): void {
    localStorage.setItem(STORAGE_KEYS.TOKEN, data.access_token);
    localStorage.setItem(STORAGE_KEYS.FIRST_LOGIN, String(data.first_login));
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data.user))
  }

  get isFirstLogin(): boolean {
    return localStorage.getItem(STORAGE_KEYS.FIRST_LOGIN) === 'true';
  }


  logOut() {

    localStorage.removeItem(STORAGE_KEYS.TOKEN)
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.FIRST_LOGIN);
    this.router.navigate(['/auth/sign-in']).then(() => {
      window.location.reload();
    })
  }





  get currentUser() {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null
  }
}
