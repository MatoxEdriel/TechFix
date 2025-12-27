import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },


    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)

    }




    ,

    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'


    }





];
