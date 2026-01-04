import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.html',
  standalone: false
})
export class VerifyCodeComponent {


  otpCode!: '';


  constructor(

    private router: Router,
    private route: ActivatedRoute
  ) { }



  onOtpChange(event: any) {
    this.otpCode = event;
  }

  verifyCode() {
    this.router.navigate(['/auth/reset-password']);
  }
}
