import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule


  ],
  standalone: true,
})
export class LoginComponent implements OnInit {


  form!: FormGroup;
  userName!: FormControl;
  password!: FormControl;
  hidePassword: boolean = false;


  constructor(
    private fb: FormBuilder
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

  login() {
    if (this.form.valid) {
      this.form.markAllAsTouched();
      return;

    }


  }

}
