import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CreateUserComponent implements OnInit {


  @ViewChild('modalRef') modalRef!: ElementRef<HTMLDialogElement>;


  @Output() userSaved = new EventEmitter<void>();

  userForm: FormGroup;


  roles = [

    { id: 'ADMIN', label: 'Administrador' },
    { id: 'USER', label: 'Usuario' },
    { id: 'TECH', label: 'Tecnico' },
  ]



  constructor(
    private fb: FormBuilder

  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
      birth_date: ['', Validators.required]

    });
  }

  open() {
    this.userForm.reset();
    this.modalRef.nativeElement.showModal();
  }



  close() {
    this.modalRef.nativeElement.close()

  }


  save() {
    if (this.userForm.invalid) return;


    console.log("xd")
    this.close()
    //avisar
    this.userSaved.emit()

  }

  ngOnInit() {
  }

}
