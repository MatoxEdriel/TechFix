import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { NgModule } from "@angular/core";
import { LayoutLoginComponent } from "./pages/Layout-login/Layout-login.component";
import { RecoveryPasswordComponent } from "./pages/recovery-password/recovery-password.component";
import { VerifyCodeComponent } from "./pages/verify-code/verify-code";


const routes: Routes = [
    {
        path: 'sign-in',
        component: LayoutLoginComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'recovery',
                component: RecoveryPasswordComponent
            },
            {
            path: 'verify',
            component: VerifyCodeComponent
            }

    ]
    },


    {
        path: '**',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }