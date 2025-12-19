import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.html',
})
export class VerifyCodeComponent {
  constructor(
    
    private router: Router,
    private route: ActivatedRoute
  ) {}

  verifyCode() {
    this.router.navigate(['/auth/sign-in/reset-password']);
  }
}
