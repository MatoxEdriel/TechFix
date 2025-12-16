import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../component/login/login.component';

@Component({
  selector: 'app-Layout-login',
  templateUrl: './Layout-login.component.html',
  imports: [LoginComponent],
  standalone: true,
})
export class LayoutLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
