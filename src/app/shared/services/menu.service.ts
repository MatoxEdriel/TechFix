import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environment/environment.dev';
import { MenuSection } from '../../interfaces/menu.interface';
import { Observable } from 'rxjs';
import { STORAGE_KEYS } from '../../core/constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private http = inject(HttpClient);

  private readonly baseUrl = environments.api.baseUrl;
  private readonly menuPath = '/menu';

  getMenu(): Observable<MenuSection[]> {

    const url = `${this.baseUrl}${this.menuPath}`;

    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<MenuSection[]>(url, { headers });
  }
}
