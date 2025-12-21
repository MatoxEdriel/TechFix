import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { LayoutComponent } from '../../pages/layout/Layout/Layout.component';
import { LayoutLoginComponent } from './pages/Layout-login/Layout-login.component';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { VerifyCodeComponent } from './pages/verify-code/verify-code';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    AuthenticationRoutingModule,
    RouterOutlet,
    NgOtpInputModule


  ],
  declarations: [LoginComponent, LayoutLoginComponent, VerifyCodeComponent, RecoveryPasswordComponent],
})
export class AuthenticationModule { }
