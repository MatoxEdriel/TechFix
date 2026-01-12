import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  standalone: false,
})
export class RecoveryPasswordComponent implements OnInit {
  form!: FormGroup;

  email!: FormControl;






  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]

    });



  }

  ngOnInit() {

    this.email = this.form.get('email') as FormControl;
  }

  sendRecoveryEmail() {
    if (this.form.valid) {
      console.log('Email válido:', this.form.value.email);
   
      this.router.navigate(['/auth/verify']);
    } else {
   
      this.form.markAllAsTouched();
    }
  }
  

  goBack() {
    this.router.navigate(['/auth/sign-in'], { relativeTo: this.route });
  }

get emailInvalid(): boolean {
    return this.email.invalid && (this.email.dirty || this.email.touched);
  }

  get emailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'El correo electrónico es requerido';
    }
    if (this.email.hasError('email')) {
      return 'Ingresa un correo electrónico válido';
    }
    return '';
  }
}

