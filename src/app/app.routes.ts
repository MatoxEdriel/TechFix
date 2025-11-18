import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/Layout/Layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },


    {
        path: 'auth/login',
        loadComponent: () =>
            import('./modules/auth/login/login.component').then((m) => m.LoginComponent)

    },

    {
        path: 'auth/register',
        loadComponent: () =>
            import('./modules/auth/register/register.component').then((m) => m.RegisterComponent)



    },

    {
        path: 'Dashboard',

        component: LayoutComponent,

        children: [




        ]


    }

    ,
    { path: '**', redirectTo: 'auth/login' },



];
