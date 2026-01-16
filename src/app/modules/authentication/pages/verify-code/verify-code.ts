import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.html',
  standalone: false
})
export class VerifyCodeComponent {


  otpCode!: '';

  otpValue: string = '';

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) { }








  onOtpChange(otpCode: string) {
    this.otpValue = otpCode;
    this.authService.verifyCode('', this.otpValue).subscribe({
      next: (response) => {



      },
      error: (error) => {


      }
    });



  }

  verifyCode() {





    this.router.navigate(['/auth/reset-password']);
  }




}
