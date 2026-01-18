import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  imports: [ReactiveFormsModule]
})
export class CreateUserComponent implements OnInit {


  @ViewChild('modalRef') modalRef!: ElementRef<HTMLDialogElement>;


  @Output() userSaved = new EventEmitter<void>();

  userForm: FormGroup;


  constructor(
    private fb: FormBuilder

  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
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
