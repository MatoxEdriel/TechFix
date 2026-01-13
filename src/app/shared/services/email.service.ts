import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environment/environment.dev';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private http = inject(HttpClient);


  private readonly baseUrl = environments.api.baseUrl;

  //!primero debemos receptar dicho correo 
  //Repasar cuando poner async y cuando poner sin nada   con las respuesta 



  sendEmail(email: string): Observable<AuthResponse> {
    const url = `${this.baseUrl}/auth/send-code`

    return this.http.post<AuthResponse>(url, { email })
  }
}
