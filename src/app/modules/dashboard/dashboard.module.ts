import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from '../../shared/components/Sidebar/Sidebar.component';
import { TopbarComponent } from "../../shared/components/Topbar/Topbar.component";
import { DashboardCardComponent } from '../../shared/components/dashboard-card/dashboard-card.component';
import { ServicesTechfixComponent } from './pages/services-techfix/services-techfix.component';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    DashboardRoutingModule,
    SidebarComponent,
    TopbarComponent,
    DashboardCardComponent
  ],
  declarations: [LayoutDashboardComponent, HomeComponent, ServicesTechfixComponent]
})
export class DashboardModule { }
