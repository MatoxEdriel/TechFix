import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptors';
import { provideLottieOptions } from 'ngx-lottie';
import { loaderInterceptor } from './core/interceptors/loaderInterceptos';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor,
        loaderInterceptor
      ])

    ),
    provideLottieOptions({
      player: () => import('lottie-web')

    })
  ]
};
