import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },

    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'


    }





];
