import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: 'sign-in',
        component: LoginComponent
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