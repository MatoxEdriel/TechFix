import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {



  form!: FormGroup;
  userName!: FormControl;
  password!: FormControl;
  showPassword: boolean = false;
  isEntering = true;
  isLeaving = false;



  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });

  }

  ngOnInit() {
    this.userName = this.form.get('username') as FormControl;
    this.password = this.form.get('password') as FormControl;

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginTest() {
    this.router.navigate(['/dashboard'])

  }

  login() {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      return;

    }


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



  goToRegister() {


  }
}
