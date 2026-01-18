import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from '../../../../environment/environment.dev';
import { loginUser } from '../interfaces/auth.interface';
import { AuthResponse, IHttpResponse, UserInfo } from '../../../interfaces/response.interface';
import { Router } from '@angular/router';
import { StorageService } from '../../../shared/services/Storage.service';
import { STORAGE_KEYS } from '../../../core/enums/storage-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private storage = inject(StorageService)



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

  //!PRUEBA 1 

  verifyCode(email: string, code: string) {
    const url = `${this.baseUrl}/auth/verify-code`
    return this.http.post<IHttpResponse<AuthResponse>>(url, { email, code })
      .pipe(tap(response => {
        if (response.data) {
          this.saveSession(response.data)
        }
      }))
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
    this.storage.setItem(STORAGE_KEYS.TOKEN, data.access_token);
    this.storage.setItem(STORAGE_KEYS.FIRST_LOGIN, data.first_login);
    this.storage.setItem(STORAGE_KEYS.USER, data.user)


  }

  get isFirstLogin(): boolean {
    return this.storage.getItem<boolean>(STORAGE_KEYS.FIRST_LOGIN) ?? false;
  }


  logOut() {

    this.storage.clear();

    this.router.navigate(['/auth/sign-in']).then(() => {
      window.location.reload();
    })
  }








  get currentUser() {
    return this.storage.getItem<any>(STORAGE_KEYS.USER);

  }



  //Verificacion de codigo otp. 
  //!debo enviar el codigo otp  




}
