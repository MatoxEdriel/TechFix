import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from '../../pages/layout/Layout/Layout.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';



const routes: Routes = [

  {
    path: '',
    component: LayoutDashboardComponent,
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
