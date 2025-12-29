import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth-guard";

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },


    {
        path: 'dashboard',
        canActivate: [authGuard],
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
