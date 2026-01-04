import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { needsPasswordChangeGuard } from '../../core/guards/needs-password-change-guard';



const routes: Routes = [

  {
    path: '',
    component: LayoutDashboardComponent,
    //Iria aqui porque esta protegeniendo todo el acceso necesario para interactuar con la aplicacion 

    canActivate: [needsPasswordChangeGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },



    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }





]





@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule {




}
