import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { STORAGE_KEYS } from '../constants/storage.constants';

export const authGuard: CanActivateFn = (route, state) => {



  const router = inject(Router);

  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (token) {

    return true
  }

  return router.parseUrl('/auth/sign-in');
};
