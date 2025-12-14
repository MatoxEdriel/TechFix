import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
