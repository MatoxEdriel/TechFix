import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class RegisterComponent implements OnInit {
  
  form!: FormGroup;
  isEntering: boolean = true;
  isLeaving: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  register() {
    if (this.form.valid) {
      // Verificar que las contraseñas coincidan
      if (this.form.value.password !== this.form.value.confirmPassword) {
        console.error('Las contraseñas no coinciden');
        alert('Las contraseñas no coinciden');
        return;
      }

      console.log('Datos de registro:', this.form.value);
      // Aquí implementarías tu lógica de registro con el backend
      
      // Ejemplo de navegación con animación de salida
      this.isEntering = false;
      this.isLeaving = true;
    } else {
      console.error('Formulario inválido');
      alert('Por favor completa todos los campos correctamente');
    }
  }

}
