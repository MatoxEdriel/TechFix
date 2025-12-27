import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { loginUser } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user_name!: FormControl;
  password!: FormControl;
  showPassword: boolean = false;
  isEntering = true;
  isLeaving = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });

  }

  ngOnInit() {
    this.user_name = this.form.get('user_name') as FormControl;
    this.password = this.form.get('password') as FormControl;

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginTest() {
    this.router.navigate(['/dashboard'])

  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;

    }

    const claims: loginUser = {
      user_name: this.form.value.user_name,
      pass: this.form.value.password
    }


    this.authService.login(claims).subscribe({

      next: (res) => {

        localStorage.setItem('access_token', res.access_token);

        if (res.first_login === true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        alert('Usuario incorrecto')


      }






    })


  }


  onActivate() {
    this.isEntering = true;
    this.isLeaving = false;
  }

  onDeactivate() {
    this.isEntering = false;
    this.isLeaving = true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }



  goToRecovery() {
    this.router.navigate(['recovery'], { relativeTo: this.route });
  }
}

