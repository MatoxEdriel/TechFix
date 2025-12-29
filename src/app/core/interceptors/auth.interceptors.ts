import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../modules/authentication/services/auth.service';
import { Router } from '@angular/router';
import { STORAGE_KEYS } from '../constants/storage.constants';






export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    let authReq = req
    if (token) {
        authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next(authReq).pipe(
        catchError((error) => {
            //el back me manda si ya expiro xdxd
            if (error.status === 401) {
                console.warn('Sesión expirada o no autorizada. Cerrando sesión...');
                authService.logOut();
            }
            return throwError(() => error);
        })
    );
};