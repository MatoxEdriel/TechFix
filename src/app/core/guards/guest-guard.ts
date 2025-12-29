import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { STORAGE_KEYS } from '../constants/storage.constants';


//!Este guardian sirve para rebotar si existe un token activo y asi no pueda iniciar sesion 

export const guestGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);



  if (token) {
    return router.parseUrl('/dashboard');
  }

  return true;



  return true;
};
